/**
 * 间隔重复复习（SRS）算法
 *
 * 基于简化版 SM-2 / FSRS 思路：
 * - 每张卡片记录：下次复习日期（dueDate）、难度因子（easeFactor）、间隔（interval）
 * - 用户反馈：忘记（again）/ 困难（hard）/ 良好（good）/ 简单（easy）
 * - 优先级：dueDate 最早 > 错误率最高 > 最久未看
 *
 * 核心策略（参考烧饼日语 / Anki 的艾宾浩斯模型）：
 *   again  → 立即复习，间隔重置为 1 天
 *   hard  → 间隔 × 1.2（最低 1 天）
 *   good  → 间隔 × easeFactor（默认 2.5）
 *   easy  → 间隔 × easeFactor × 1.3（跳级）
 *   easeFactor 每次根据反馈微调（下限 1.3，上限 3.0）
 */

import { getCurrentLearningState } from './useLearningProgress';

export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';
export type ReviewStatus = 'new' | 'learning' | 'review' | 'relearning';

export interface SRSRecord {
  word: string;
  /** ISO date string: 下次复习日期（YYYY-MM-DD） */
  dueDate: string;
  /** 两次复习间隔（天），0=新词 */
  interval: number;
  /** 难度因子，默认 2.5 */
  easeFactor: number;
  /** 当前状态 */
  status: ReviewStatus;
  /** 累计复习次数 */
  reviewCount: number;
  /** 累计正确次数（rating=good/easy） */
  correctCount: number;
  /** 上次复习日期（ISO） */
  lastReviewDate: string;
  /** 创建时间（时间戳） */
  createdAt: number;
}

const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE = 1.3;
const MAX_EASE = 3.0;
const STORAGE_KEY = 'jp-srs-v1';

function todayStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + 'T00:00:00');
  const db = new Date(b + 'T00:00:00');
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

export function loadSRS(): Record<string, SRSRecord> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSRS(records: Record<string, SRSRecord>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {
    // ignore
  }
}

/**
 * 注册一个新单词到 SRS 系统
 */
export function registerWord(word: string): SRSRecord {
  const records = loadSRS();
  if (records[word]) return records[word];

  const now = todayStr();
  const record: SRSRecord = {
    word,
    dueDate: now, // 立即可以复习
    interval: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    status: 'new',
    reviewCount: 0,
    correctCount: 0,
    lastReviewDate: '',
    createdAt: Date.now(),
  };
  records[word] = record;
  saveSRS(records);
  return record;
}

/**
 * 记录一次复习反馈，返回更新后的记录
 */
export function recordReview(word: string, rating: ReviewRating): SRSRecord {
  const records = loadSRS();
  let record = records[word];

  // 若从未注册，先注册
  if (!record) record = registerWord(word);

  const now = todayStr();
  const newRecord = { ...record };
  newRecord.reviewCount++;
  newRecord.lastReviewDate = now;

  switch (rating) {
    case 'again':
      // 忘记：立即复习，间隔归 1 天，降低 ease
      newRecord.interval = 1;
      newRecord.dueDate = now;
      newRecord.easeFactor = Math.max(MIN_EASE, record.easeFactor - 0.2);
      newRecord.status = newRecord.status === 'new' ? 'learning' : 'relearning';
      break;

    case 'hard':
      // 困难：间隔 × 1.2，降低 ease
      newRecord.interval = Math.max(1, Math.round(record.interval * 1.2));
      newRecord.dueDate = addDays(now, newRecord.interval);
      newRecord.easeFactor = Math.max(MIN_EASE, record.easeFactor - 0.15);
      newRecord.status = 'review';
      break;

    case 'good':
      // 良好：标准间隔增长
      if (record.status === 'new' || record.status === 'learning') {
        newRecord.interval = 1;
      } else {
        newRecord.interval = Math.max(1, Math.round(record.interval * record.easeFactor));
      }
      newRecord.dueDate = addDays(now, newRecord.interval);
      newRecord.status = 'review';
      newRecord.correctCount++;
      break;

    case 'easy':
      // 简单：间隔跳级，提升 ease
      newRecord.interval = Math.max(4, Math.round((record.interval || 1) * record.easeFactor * 1.3));
      newRecord.dueDate = addDays(now, newRecord.interval);
      newRecord.easeFactor = Math.min(MAX_EASE, record.easeFactor + 0.15);
      newRecord.status = 'review';
      newRecord.correctCount++;
      break;
  }

  records[word] = newRecord;
  saveSRS(records);
  return newRecord;
}

/**
 * 获取今日应该复习的单词列表（按优先级排序）
 * 优先级：dueDate 最先 > 新词（从未复习过）> 错误率高的
 */
export function getDueWords(): SRSRecord[] {
  const records = loadSRS();
  const now = todayStr();

  const due: SRSRecord[] = [];
  const upcoming: SRSRecord[] = [];

  for (const record of Object.values(records)) {
    if (record.dueDate <= now) {
      due.push(record);
    } else {
      upcoming.push(record);
    }
  }

  // due 排序：新词优先，然后按错误率（低正确率排前面）
  due.sort((a, b) => {
    if (a.reviewCount === 0 && b.reviewCount > 0) return -1;
    if (b.reviewCount === 0 && a.reviewCount > 0) return 1;
    const aRate = a.reviewCount > 0 ? a.correctCount / a.reviewCount : 0;
    const bRate = b.reviewCount > 0 ? b.correctCount / b.reviewCount : 0;
    return aRate - bRate;
  });

  // upcoming 按到期时间升序
  upcoming.sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  return [...due, ...upcoming];
}

/**
 * 获取今日复习统计
 */
export function getTodayStats(): {
  dueCount: number;
  newCount: number;
  reviewedToday: number;
  accuracy: number;
} {
  const records = loadSRS();
  const now = todayStr();
  const due = getDueWords().filter((r) => r.dueDate <= now);

  // 今日已复习过的词（lastReviewDate == now）
  let reviewedToday = 0;
  let correctToday = 0;
  for (const r of Object.values(records)) {
    if (r.lastReviewDate === now) {
      reviewedToday++;
      correctToday += r.correctCount; // 注：这是累计，此处简化为全量
    }
  }

  return {
    dueCount: due.length,
    newCount: due.filter((r) => r.status === 'new').length,
    reviewedToday,
    accuracy: reviewedToday > 0 ? Math.round((correctToday / reviewedToday) * 100) : 0,
  };
}

/**
 * 获取明日预计复习量
 */
export function getTomorrowDueCount(): number {
  const records = loadSRS();
  const tomorrow = addDays(todayStr(), 1);
  return Object.values(records).filter((r) => r.dueDate <= tomorrow).length;
}

/**
 * 将学习进度中的收藏词注册到 SRS 系统
 */
export function registerFromFavorites(favoriteWords: string[]) {
  const records = loadSRS();
  const now = todayStr();
  for (const word of favoriteWords) {
    if (!records[word]) {
      records[word] = {
        word,
        dueDate: now,
        interval: 0,
        easeFactor: DEFAULT_EASE_FACTOR,
        status: 'new',
        reviewCount: 0,
        correctCount: 0,
        lastReviewDate: '',
        createdAt: Date.now(),
      };
    }
  }
  saveSRS(records);
}

/**
 * 估算"掌握"某个词需要多少天（基于当前 easeFactor）
 */
export function estimateMasteryDays(word: string): number | null {
  const records = loadSRS();
  const record = records[word];
  if (!record || record.interval === 0) return null;
  // 以间隔 >= 21 天作为"掌握"门槛
  const days = [1, 3, 7, 14, 21, 30, 60];
  for (const d of days) {
    if (d >= record.interval) return d - record.interval;
  }
  return null;
}
