/**
 * JMdict 词汇数据统一加载器（唯一入口）
 * - 动态按需 import，避免首屏就加载百万行数据
 * - 提供分级 / 分类 / 搜索 等高层 API
 * - 内部维护单例缓存，不会重复构建索引
 */

import type { JMDictWord } from './jmdict-db';

let cachedVocabulary: JMDictWord[] | null = null;
let cachedByLevel: Record<string, JMDictWord[]> | null = null;
let cachedByCategory: Record<string, JMDictWord[]> | null = null;
let cachedSearchIndex: Record<string, JMDictWord[]> | null = null;
let loadingPromise: Promise<void> | null = null;

/** 加载全部词汇数据（动态 import，仅首次执行） */
async function ensureLoaded(): Promise<void> {
  if (cachedVocabulary) return;
  if (loadingPromise) {
    await loadingPromise;
    return;
  }

  loadingPromise = (async () => {
    // 动态导入，避免首屏打包进主 chunk
    const mod = await import('./jmdict-db');
    const all = (mod.allVocabulary ?? []) as JMDictWord[];

    cachedVocabulary = all;

    // 构建级别索引
    const byLevel: Record<string, JMDictWord[]> = {};
    // 构建分类索引
    const byCategory: Record<string, JMDictWord[]> = {};
    // 构建首字搜索索引（按日语 word / reading 首字 + 英文 meaning 首个 token 分组）
    const searchIndex: Record<string, JMDictWord[]> = {};

    for (const w of all) {
      if (!w) continue;
      const level = w.level || '未分级';
      (byLevel[level] ||= []).push(w);

      const cat = w.category || 'その他';
      (byCategory[cat] ||= []).push(w);

      // 搜索索引：以 word / reading 的前1~2字作为 key，加速前缀搜索
      const keys = new Set<string>();
      const word = (w.word || '').trim();
      const reading = (w.reading || '').trim();
      if (word) {
        keys.add(word.slice(0, 1));
        keys.add(word.slice(0, 2));
      }
      if (reading) {
        keys.add(reading.slice(0, 1));
        keys.add(reading.slice(0, 2));
      }
      const meaningHead = (w.meaning || '').trim().split(/[\s,;，；/]/)[0];
      if (meaningHead) keys.add(meaningHead.toLowerCase());
      for (const k of keys) {
        if (!k) continue;
        (searchIndex[k] ||= []).push(w);
      }
    }

    cachedByLevel = byLevel;
    cachedByCategory = byCategory;
    cachedSearchIndex = searchIndex;
  })();

  await loadingPromise;
}

export async function loadVocabulary(): Promise<{
  allVocabulary: JMDictWord[];
  vocabularyByLevel: Record<string, JMDictWord[]>;
  vocabularyByCategory: Record<string, JMDictWord[]>;
  searchIndex: Record<string, JMDictWord[]>;
}> {
  await ensureLoaded();
  return {
    allVocabulary: cachedVocabulary!,
    vocabularyByLevel: cachedByLevel!,
    vocabularyByCategory: cachedByCategory!,
    searchIndex: cachedSearchIndex!,
  };
}

/**
 * 搜索词汇：优先命中前缀索引（快路径），未命中时做全量子串匹配（慢路径，有上限）
 */
export async function searchVocabulary(
  query: string,
  limit = 20,
): Promise<JMDictWord[]> {
  const q = query?.trim().toLowerCase();
  if (!q) return [];

  const { allVocabulary, searchIndex } = await loadVocabulary();

  // 快路径：命中前缀索引
  const fastHits = new Set<JMDictWord>();
  const indexKeys = [q, q.slice(0, 2), q.slice(0, 1)];
  for (const k of indexKeys) {
    const bucket = searchIndex[k];
    if (!bucket) continue;
    for (const w of bucket) {
      if (matchWord(w, q)) {
        fastHits.add(w);
        if (fastHits.size >= limit) return Array.from(fastHits);
      }
    }
  }
  if (fastHits.size >= limit) return Array.from(fastHits);

  // 慢路径：未命中前缀 / 命中不够，做全量子串扫描（只在需要时触发）
  const results = Array.from(fastHits);
  for (const w of allVocabulary) {
    if (fastHits.has(w)) continue;
    if (matchWord(w, q)) {
      results.push(w);
      if (results.size >= limit) break;
    }
  }
  return results.slice(0, limit);
}

function matchWord(w: JMDictWord, q: string): boolean {
  return (
    (w.word && w.word.includes(q)) ||
    (w.reading && w.reading.includes(q)) ||
    (w.meaning && w.meaning.toLowerCase().includes(q))
  );
}

export async function getVocabularyByLevel(level: string): Promise<JMDictWord[]> {
  const { vocabularyByLevel } = await loadVocabulary();
  return vocabularyByLevel[level] || [];
}

export async function getVocabularyByCategory(
  category: string,
): Promise<JMDictWord[]> {
  const { vocabularyByCategory } = await loadVocabulary();
  if (category === 'all') {
    return (await loadVocabulary()).allVocabulary;
  }
  return vocabularyByCategory[category] || [];
}

export async function getVocabularyByLevelAndCategory(
  level: string,
  category: string,
): Promise<JMDictWord[]> {
  const base = await getVocabularyByLevel(level);
  if (category === 'all') return base;
  return base.filter((w) => w.category === category);
}

export async function getLevelStats(): Promise<Record<string, number>> {
  const { vocabularyByLevel } = await loadVocabulary();
  const stats: Record<string, number> = {};
  for (const [lvl, arr] of Object.entries(vocabularyByLevel)) {
    stats[lvl] = arr.length;
  }
  return stats;
}

export async function getCategoryStats(): Promise<Record<string, number>> {
  const { vocabularyByCategory } = await loadVocabulary();
  const stats: Record<string, number> = {
    all: (await loadVocabulary()).allVocabulary.length,
  };
  for (const [cat, arr] of Object.entries(vocabularyByCategory)) {
    stats[cat] = arr.length;
  }
  return stats;
}

/** 从现有词汇中随机抽取若干词（用于每日推荐 / 测试题） */
export async function pickRandomWords(
  count: number,
  filter?: (w: JMDictWord) => boolean,
): Promise<JMDictWord[]> {
  const { allVocabulary } = await loadVocabulary();
  const pool = filter ? allVocabulary.filter(filter) : allVocabulary;
  if (pool.length === 0) return [];
  const picked: JMDictWord[] = [];
  const seen = new Set<number>();
  const n = Math.min(count, pool.length);
  while (picked.length < n) {
    const idx = Math.floor(Math.random() * pool.length);
    if (seen.has(idx)) continue;
    seen.add(idx);
    picked.push(pool[idx]);
  }
  return picked;
}
