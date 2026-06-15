import type { Word, JLPTLevel } from '../data/vocabulary-data';

// ─── Jisho API (jisho.org) ────────────────────────────────────────────

interface JishoJapanese {
  word?: string;
  reading?: string;
}

interface JishoSense {
  english_definitions: string[];
  parts_of_speech: string[];
  tags?: string[];
  info?: string[];
}

interface JishoDataItem {
  slug: string;
  japanese: JishoJapanese[];
  senses: JishoSense[];
  jlpt?: string[];
}

interface JishoResponse {
  data: JishoDataItem[];
}

/** Convert a single Jisho result into our Word shape */
function jishoToWord(item: JishoDataItem, index: number): Word {
  const jp = item.japanese[0] ?? {};
  const sense = item.senses[0] ?? {};

  const word = jp.word ?? jp.reading ?? '';
  const reading = jp.reading ?? '';

  const meanings = sense.english_definitions ?? [];
  const meaning = meanings.length > 0 ? meanings.slice(0, 3).join('；') : '';

  const posRaw = sense.parts_of_speech ?? [];
  const partOfSpeech = posRaw.length > 0 ? posRaw[0] : '';

  // Extract JLPT level from tags
  const tags = (item.jlpt ?? []).concat(sense.tags ?? []);
  const jlptTag = tags.find((t) => /^jlpt-n\d$/i.test(t));
  const level: JLPTLevel = jlptTag
    ? ((jlptTag.replace(/jlpt-/i, '').toUpperCase()) as JLPTLevel)
    : 'N5';

  // Compose example from sense info if available
  const info = sense.info ?? [];
  const example = info.length > 0 ? info[0] : '';
  const exampleReading = info.length > 1 ? info[1] : '';
  const exampleMeaning = info.length > 2 ? info[2] : '';

  return {
    id: `jisho-${item.slug}-${index}`,
    word,
    reading,
    meaning,
    partOfSpeech,
    level,
    example,
    exampleReading,
    exampleMeaning,
  };
}

/** Search Japanese words via Jisho API */
export async function searchJisho(query: string): Promise<Word[]> {
  const url = `https://jisho.org/api/v1/search/words?keyword=${encodeURIComponent(query)}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Jisho API error: ${res.status}`);
  }

  const json: JishoResponse = await res.json();
  return json.data.map((item, i) => jishoToWord(item, i));
}

// ─── JLPT Vocab API ──────────────────────────────────────────────────

interface JLPTVocabItem {
  id: number;
  word: string;
  reading: string;
  meaning: string;
  level: number;
  pos?: string;
}

interface JLPTVocabResponse {
  words: JLPTVocabItem[];
  total?: number;
}

const JLPT_API_BASE = 'https://jlpt-vocab-api.vercel.app/api';

function jlptLevelToString(level: number): JLPTLevel {
  const map: Record<number, JLPTLevel> = {
    1: 'N1', 2: 'N2', 3: 'N3', 4: 'N4', 5: 'N5',
  };
  return map[level] ?? 'N5';
}

function jlptToWord(item: JLPTVocabItem): Word {
  return {
    id: `jlpt-${item.id}`,
    word: item.word,
    reading: item.reading,
    meaning: item.meaning,
    partOfSpeech: item.pos ?? '',
    level: jlptLevelToString(item.level),
    example: '',
    exampleReading: '',
    exampleMeaning: '',
  };
}

/** Fetch JLPT vocabulary by level, with pagination */
export async function fetchJLPTVocab(
  level: number,
  offset = 0,
  limit = 50,
): Promise<{ words: Word[]; total: number }> {
  try {
    const url = `${JLPT_API_BASE}/words?level=${level}&offset=${offset}&limit=${limit}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`JLPT API error: ${res.status}`);
    const json: JLPTVocabResponse = await res.json();
    return {
      words: (json.words ?? []).map(jlptToWord),
      total: json.total ?? 0,
    };
  } catch {
    // API may be unavailable; return empty gracefully
    return { words: [], total: 0 };
  }
}

/** Fetch random JLPT vocabulary by level */
export async function fetchRandomJLPTVocab(
  level: number,
  count = 10,
): Promise<Word[]> {
  try {
    const url = `${JLPT_API_BASE}/words/random?level=${level}`;
    const results: Word[] = [];
    for (let i = 0; i < count; i++) {
      const res = await fetch(url);
      if (!res.ok) break;
      const json: { word: JLPTVocabItem } = await res.json();
      if (json.word) {
        results.push(jlptToWord(json.word));
      }
    }
    return results;
  } catch {
    return [];
  }
}

/** Search JLPT vocab API by word text */
export async function searchJLPTVocab(query: string): Promise<Word[]> {
  try {
    const url = `${JLPT_API_BASE}/words?word=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`JLPT API error: ${res.status}`);
    const json: JLPTVocabResponse = await res.json();
    return (json.words ?? []).map(jlptToWord);
  } catch {
    return [];
  }
}