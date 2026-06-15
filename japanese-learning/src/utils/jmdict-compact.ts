/**
 * Compact JMdict Database for Web
 * Only includes search index and essential data
 */

import { searchVocabulary as localSearch, getCategoryStats } from '../utils/vocab-search';

/**
 * Compact word entry for frontend
 */
export interface CompactWord {
  i: number;      // word index
  w: string;      // word
  r: string;      // reading
  m: string;      // meaning
}

/**
 * Search function wrapper
 */
export function searchWords(query: string, limit: number = 50): CompactWord[] {
  const results = localSearch(query, limit);
  return results.map(w => ({
    i: 0,
    w: w.word,
    r: w.reading,
    m: w.meaning,
  }));
}

// Export stats
export const categoryStats = getCategoryStats();
export const totalWords = categoryStats['all'] || 0;

// Re-export constants
export { CATEGORY_LABELS, ALL_CATEGORIES } from '../data/jmdict-db';
