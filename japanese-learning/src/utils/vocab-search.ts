/**
 * JMdict Search Utilities
 * Fast local search for Japanese vocabulary
 */

import { allVocabulary, searchIndex, type JMDictWord } from '../data/jmdict-db';

/**
 * Search vocabulary by query
 * Supports kanji, kana, and romanized input
 */
export function searchVocabulary(query: string, limit: number = 50): JMDictWord[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const q = query.trim().toLowerCase();
  const results = new Set<JMDictWord>();

  // Direct word match
  for (const word of allVocabulary) {
    if (word.word.toLowerCase().includes(q) || 
        word.reading.toLowerCase().includes(q) ||
        word.meaning.toLowerCase().includes(q)) {
      results.add(word);
      if (results.size >= limit) break;
    }
  }

  // Search index match (for exact kana/romaji matches)
  const indexResults = searchIndex[q];
  if (indexResults) {
    for (const idx of indexResults) {
      if (allVocabulary[idx]) {
        results.add(allVocabulary[idx]);
        if (results.size >= limit) break;
      }
    }
  }

  return Array.from(results).slice(0, limit);
}

/**
 * Get vocabulary by category
 */
export function getVocabularyByCategory(category: string): JMDictWord[] {
  if (category === 'all') {
    return allVocabulary;
  }
  return allVocabulary.filter(w => w.category === category);
}

/**
 * Get vocabulary by JLPT level
 */
export function getVocabularyByLevel(level: string): JMDictWord[] {
  return allVocabulary.filter(w => w.level === level);
}

/**
 * Get vocabulary by both level and category
 */
export function getVocabularyByLevelAndCategory(
  level: string, 
  category: string
): JMDictWord[] {
  let results = getVocabularyByLevel(level);
  if (category !== 'all') {
    results = results.filter(w => w.category === category);
  }
  return results;
}

/**
 * Get category statistics
 */
export function getCategoryStats(): Record<string, number> {
  const stats: Record<string, number> = {
    'all': allVocabulary.length,
  };
  
  for (const word of allVocabulary) {
    stats[word.category] = (stats[word.category] || 0) + 1;
  }
  
  return stats;
}

/**
 * Get level statistics
 */
export function getLevelStats(): Record<string, number> {
  const stats: Record<string, number> = {};
  
  for (const word of allVocabulary) {
    stats[word.level] = (stats[word.level] || 0) + 1;
  }
  
  return stats;
}
