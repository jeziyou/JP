/**
 * JMdict Search Utilities
 * Fast local search for Japanese vocabulary
 * Uses dynamic import to avoid loading all data upfront
 */

import type { JMDictWord } from '../data/jmdict-db';
import { loadVocabulary } from '../data/jmdict-loader';

let cachedVocabulary: JMDictWord[] | null = null;
let cachedSearchIndex: Record<string, number[]> | null = null;

async function getVocabulary(): Promise<{ vocabulary: JMDictWord[]; searchIndex: Record<string, number[]> }> {
  if (cachedVocabulary) {
    return { vocabulary: cachedVocabulary, searchIndex: cachedSearchIndex! };
  }

  const { allVocabulary, searchIndex } = await loadVocabulary();
  cachedVocabulary = allVocabulary;
  cachedSearchIndex = searchIndex;
  
  return { vocabulary: allVocabulary, searchIndex };
}

export async function searchVocabulary(query: string, limit: number = 50): Promise<JMDictWord[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const { vocabulary } = await getVocabulary();
  const q = query.trim().toLowerCase();
  const results = new Set<JMDictWord>();

  for (const word of vocabulary) {
    if (word.word.toLowerCase().includes(q) || 
        word.reading.toLowerCase().includes(q) ||
        word.meaning.toLowerCase().includes(q)) {
      results.add(word);
      if (results.size >= limit) break;
    }
  }

  const { searchIndex } = await getVocabulary();
  const indexResults = searchIndex[q];
  if (indexResults) {
    for (const idx of indexResults) {
      if (vocabulary[idx]) {
        results.add(vocabulary[idx]);
        if (results.size >= limit) break;
      }
    }
  }

  return Array.from(results).slice(0, limit);
}

export async function getVocabularyByCategory(category: string): Promise<JMDictWord[]> {
  const { vocabulary } = await getVocabulary();
  if (category === 'all') {
    return vocabulary;
  }
  return vocabulary.filter(w => w.category === category);
}

export async function getVocabularyByLevel(level: string): Promise<JMDictWord[]> {
  const { vocabulary } = await getVocabulary();
  return vocabulary.filter(w => w.level === level);
}

export async function getVocabularyByLevelAndCategory(
  level: string, 
  category: string
): Promise<JMDictWord[]> {
  let results = await getVocabularyByLevel(level);
  if (category !== 'all') {
    results = results.filter(w => w.category === category);
  }
  return results;
}

export async function getCategoryStats(): Promise<Record<string, number>> {
  const { vocabulary } = await getVocabulary();
  const stats: Record<string, number> = {
    'all': vocabulary.length,
  };
  
  for (const word of vocabulary) {
    stats[word.category] = (stats[word.category] || 0) + 1;
  }
  
  return stats;
}

export async function getLevelStats(): Promise<Record<string, number>> {
  const { vocabulary } = await getVocabulary();
  const stats: Record<string, number> = {};
  
  for (const word of vocabulary) {
    stats[word.level] = (stats[word.level] || 0) + 1;
  }
  
  return stats;
}