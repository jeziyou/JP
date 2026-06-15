// src/data/jmdict-loader.ts
/**
 * Lazy loader for JMDict vocabulary data
 * Uses dynamic import to split vocabulary data into separate chunk
 */

import type { JMDictWord } from './jmdict-db';

let vocabularyCache: JMDictWord[] | null = null;
let vocabularyByLevelCache: Record<string, JMDictWord[]> | null = null;
let vocabularyByCategoryCache: Record<string, JMDictWord[]> | null = null;
let searchIndexCache: Record<string, number[]> | null = null;

export async function loadVocabulary(): Promise<{
  allVocabulary: JMDictWord[];
  vocabularyByLevel: Record<string, JMDictWord[]>;
  vocabularyByCategory: Record<string, JMDictWord[]>;
  searchIndex: Record<string, number[]>;
}> {
  if (vocabularyCache) {
    return {
      allVocabulary: vocabularyCache,
      vocabularyByLevel: vocabularyByLevelCache!,
      vocabularyByCategory: vocabularyByCategoryCache!,
      searchIndex: searchIndexCache!,
    };
  }

  // Dynamic import - this will create a separate chunk
  const { allVocabulary, vocabularyByLevel, vocabularyByCategory, searchIndex } = await import('./jmdict-db');
  
  vocabularyCache = allVocabulary;
  vocabularyByLevelCache = vocabularyByLevel;
  vocabularyByCategoryCache = vocabularyByCategory;
  searchIndexCache = searchIndex;

  return { allVocabulary, vocabularyByLevel, vocabularyByCategory, searchIndex };
}

export async function searchVocabulary(query: string, limit: number = 50): Promise<JMDictWord[]> {
  const { allVocabulary, searchIndex } = await loadVocabulary();
  
  if (!query || query.trim().length === 0) {
    return [];
  }

  const q = query.trim().toLowerCase();
  const results = new Set<JMDictWord>();

  for (const word of allVocabulary) {
    if (word.word.toLowerCase().includes(q) || 
        word.reading.toLowerCase().includes(q) ||
        word.meaning.toLowerCase().includes(q)) {
      results.add(word);
      if (results.size >= limit) break;
    }
  }

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

export async function getVocabularyByLevel(level: string): Promise<JMDictWord[]> {
  const { vocabularyByLevel } = await loadVocabulary();
  return vocabularyByLevel[level] || [];
}

export async function getVocabularyByCategory(category: string): Promise<JMDictWord[]> {
  const { vocabularyByCategory } = await loadVocabulary();
  return vocabularyByCategory[category] || [];
}