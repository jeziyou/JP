/**
 * 学习进度 / 收藏 / 历史记录 hook
 * - 使用 localStorage 持久化，无需后端
 * - 提供统一 API：收藏单词、记录查询历史、标记学习状态（记得 / 忘记）
 * - 暴露总览数据给首页展示学习仪表盘
 */

import { useCallback, useEffect, useMemo, useState } from 'react';

/** 单词学习状态：unknown=未学习 / known=已掌握 / reviewing=复习中 */
export type WordStatus = 'unknown' | 'known' | 'reviewing';

interface WordRecord {
  word: string;
  reading?: string;
  meaning?: string;
  status: WordStatus;
  /** 首次学习时间 */
  firstSeenAt: number;
  /** 最后一次学习时间 */
  lastSeenAt: number;
  /** 累计查看次数（含测试 / 划词） */
  seenCount: number;
  /** 收藏时间（未收藏为 0） */
  favoritedAt: number;
}

interface LearningState {
  words: Record<string, WordRecord>;
  /** 搜索历史（最多保留 50 条） */
  searchHistory: string[];
  /** 已学文章 ID（记录阅读进度） */
  articlesRead: string[];
  /** 测试答对次数 */
  testCorrect: number;
  /** 测试总次数 */
  testTotal: number;
  /** 上次学习日期（YYYY-MM-DD），用于连续学习天数 */
  lastDate: string;
  /** 连续学习天数 */
  streakDays: number;
}

const STORAGE_KEY = 'jp-learning-state-v1';
const MAX_HISTORY = 50;

function defaultState(): LearningState {
  return {
    words: {},
    searchHistory: [],
    articlesRead: [],
    testCorrect: 0,
    testTotal: 0,
    lastDate: '',
    streakDays: 0,
  };
}

function loadState(): LearningState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as Partial<LearningState>;
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

function saveState(state: LearningState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // 忽略：可能是隐私模式或 storage 被禁用
  }
}

function todayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function bumpStreak(state: LearningState): LearningState {
  const today = todayStr();
  if (state.lastDate === today) return state; // 今天已记录

  // 判断是否连续（昨天有记录则+1，否则重置为1）
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const y = yesterday.getFullYear();
  const m = String(yesterday.getMonth() + 1).padStart(2, '0');
  const d = String(yesterday.getDate()).padStart(2, '0');
  const yesterdayStr = `${y}-${m}-${d}`;
  const nextStreak = state.lastDate === yesterdayStr ? state.streakDays + 1 : 1;

  return {
    ...state,
    lastDate: today,
    streakDays: nextStreak,
  };
}

/** 全局单例：hook 外部也可读写（供 SelectionPopup 等非 hook 场景） */
let globalState = loadState();
const listeners = new Set<(s: LearningState) => void>();

function emit(newState: LearningState) {
  globalState = newState;
  saveState(newState);
  listeners.forEach((l) => l(newState));
}

// ── 每日学习目标（Duolingo 核心机制）───────────────────────
const DAILY_GOAL_KEY = 'jp-daily-goal-v1';
const HEATMAP_KEY = 'jp-heatmap-v1';
const DAILY_GOAL_DEFAULT = 20; // 默认每日目标：20词

export function getDailyGoal(): number {
  try {
    return parseInt(localStorage.getItem(DAILY_GOAL_KEY) || String(DAILY_GOAL_DEFAULT), 10);
  } catch {
    return DAILY_GOAL_DEFAULT;
  }
}

export function setDailyGoal(n: number) {
  try {
    localStorage.setItem(DAILY_GOAL_KEY, String(Math.max(5, Math.min(200, n))));
  } catch {
    // ignore
  }
}

/** 获取今日已学单词数 */
export function getTodayStudyCount(): number {
  const state = getCurrentLearningState();
  const today = todayStr();
  // 统计今日有 lastSeenAt 的词（每词只计一次）
  const seenToday = Object.values(state.words).filter(
    (w) => {
      const d = new Date(w.lastSeenAt);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      return dateStr === today;
    },
  );
  return seenToday.length;
}

/** 加载学习热力图（最近90天，每天学习词数）*/
export function getHeatmapData(): { date: string; count: number }[] {
  const STORAGE_KEY = HEATMAP_KEY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const data: Record<string, number> = raw ? JSON.parse(raw) : {};
    const today = todayStr();
    const result: { date: string; count: number }[] = [];

    // 生成最近90天
    for (let i = 89; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      result.push({ date: dateStr, count: data[dateStr] || 0 });
    }
    return result;
  } catch {
    return [];
  }
}

/** 追加今日学习计数（每次 recordSeenWord 时调用）*/
export function bumpHeatmap() {
  const today = todayStr();
  try {
    const raw = localStorage.getItem(HEATMAP_KEY);
    const data: Record<string, number> = raw ? JSON.parse(raw) : {};
    data[today] = (data[today] || 0) + 1;
    // 保留最近180天
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 180);
    for (const k of Object.keys(data)) {
      if (k < cutoff.toISOString().slice(0, 10)) delete data[k];
    }
    localStorage.setItem(HEATMAP_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

/** 记录用户看过某个单词（翻卡、划词、点击详情都会调用） */
export function recordSeenWord(meta: {
  word: string;
  reading?: string;
  meaning?: string;
}) {
  if (!meta.word) return;
  const now = Date.now();
  const existing = globalState.words[meta.word];

  // 同一分钟内同一词只计一次（防止重复触发）
  const lastSeenMinute = Math.floor(now / 60000);
  if (existing && Math.floor(existing.lastSeenAt / 60000) === lastSeenMinute) return;

  const next: WordRecord = existing
    ? { ...existing, lastSeenAt: now, seenCount: existing.seenCount + 1 }
    : {
        word: meta.word,
        reading: meta.reading,
        meaning: meta.meaning,
        status: 'reviewing',
        firstSeenAt: now,
        lastSeenAt: now,
        seenCount: 1,
        favoritedAt: 0,
      };
  bumpHeatmap(); // 更新热力图
  emit(bumpStreak({ ...globalState, words: { ...globalState.words, [meta.word]: next } }));
}

/** 切换单词收藏状态 */
export function toggleFavorite(word: string): boolean {
  if (!word) return false;
  const existing = globalState.words[word];
  const now = Date.now();
  const next: WordRecord = existing
    ? { ...existing, favoritedAt: existing.favoritedAt > 0 ? 0 : now }
    : {
        word,
        status: 'reviewing',
        firstSeenAt: now,
        lastSeenAt: now,
        seenCount: 1,
        favoritedAt: now,
      };
  emit(bumpStreak({ ...globalState, words: { ...globalState.words, [word]: next } }));
  return next.favoritedAt > 0;
}

/** 更新单词学习状态（记得 / 忘记） */
export function setWordStatus(word: string, status: WordStatus) {
  if (!word) return;
  const existing = globalState.words[word];
  const now = Date.now();
  const next: WordRecord = existing
    ? { ...existing, status, lastSeenAt: now }
    : {
        word,
        status,
        firstSeenAt: now,
        lastSeenAt: now,
        seenCount: 1,
        favoritedAt: 0,
      };
  emit({ ...globalState, words: { ...globalState.words, [word]: next } });
}

/** 记录测试结果（correct=true 答对，=false 答错） */
export function recordTestResult(correct: boolean) {
  emit(
    bumpStreak({
      ...globalState,
      testCorrect: globalState.testCorrect + (correct ? 1 : 0),
      testTotal: globalState.testTotal + 1,
    }),
  );
}

/** 记录搜索关键词历史（去重、置顶最新） */
export function recordSearchHistory(query: string) {
  const q = query.trim();
  if (!q) return;
  const filtered = globalState.searchHistory.filter((h) => h !== q);
  const next = [q, ...filtered].slice(0, MAX_HISTORY);
  emit({ ...globalState, searchHistory: next });
}

/** 清空搜索历史 */
export function clearSearchHistory() {
  emit({ ...globalState, searchHistory: [] });
}

/** 记录文章已读 */
export function markArticleRead(id: string) {
  if (!id) return;
  if (globalState.articlesRead.includes(id)) return;
  emit(
    bumpStreak({
      ...globalState,
      articlesRead: [id, ...globalState.articlesRead].slice(0, 500),
    }),
  );
}

/** 读取一个单词的收藏状态（无需 hook） */
export function isWordFavorited(word: string): boolean {
  return (globalState.words[word]?.favoritedAt || 0) > 0;
}

/** 读取一个单词的学习状态（无需 hook） */
export function getWordStatus(word: string): WordStatus {
  return globalState.words[word]?.status || 'unknown';
}

/** React hook：订阅学习状态 */
export function useLearningProgress() {
  const [state, setState] = useState<LearningState>(globalState);

  useEffect(() => {
    const listener = (s: LearningState) => setState(s);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const favorites = useMemo(
    () =>
      Object.values(state.words)
        .filter((w) => w.favoritedAt > 0)
        .sort((a, b) => b.favoritedAt - a.favoritedAt),
    [state.words],
  );

  const recentlyViewed = useMemo(
    () =>
      Object.values(state.words)
        .slice()
        .sort((a, b) => b.lastSeenAt - a.lastSeenAt)
        .slice(0, 20),
    [state.words],
  );

  const accuracy =
    state.testTotal > 0 ? Math.round((state.testCorrect / state.testTotal) * 100) : 0;

  const uniqueWordsLearned = Object.values(state.words).filter(
    (w) => w.status !== 'unknown',
  ).length;

  return {
    state,
    favorites,
    recentlyViewed,
    accuracy,
    uniqueWordsLearned,
  };
}

/** 快速导出只读 helper（供组件外部使用） */
export function getCurrentLearningState(): LearningState {
  return globalState;
}

/** 清空全部学习数据（用于测试 / 用户手动重置） */
export function resetAllProgress() {
  emit(defaultState());
}

/** 快速导入 / 导出（方便用户跨设备迁移） */
export function exportProgress(): string {
  return JSON.stringify(globalState);
}

export function importProgress(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed !== 'object') return false;
    emit({ ...defaultState(), ...parsed });
    return true;
  } catch {
    return false;
  }
}
