/**
 * Script to generate vocabulary and grammar data from JMdict
 * Usage: node scripts/generate-data.js
 */

const fs = require('fs');
const path = require('path');

// Load Chinese translations
const wordTranslations = require('./word-translations.cjs');

// ─── Load JMdict data ────────────────────────────────────────────────
const jmdictPath = '/tmp/jmdict-eng-common-3.6.2.json';
const raw = JSON.parse(fs.readFileSync(jmdictPath, 'utf-8'));
const tags = raw.tags;
const words = raw.words;

console.log(`Loaded ${words.length} entries from JMdict`);

// ─── POS tag mapping ──────────────────────────────────────────────────
const POS_MAP = {
  'n': '名詞',
  'n-pr': '固有名詞',
  'n-pref': '接頭辞',
  'n-suf': '接尾辞',
  'n-adv': '副詞的名詞',
  'n-t': '時間名詞',
  'pn': '代名詞',
  'adj-i': 'イ形容詞',
  'adj-na': 'ナ形容詞',
  'adj-no': 'ノ形容詞',
  'adj-pn': '連体詞',
  'adj-f': '前置形容詞',
  'adj-t': 'タルト形容詞',
  'adj-ix': 'イ形容詞(特殊)',
  'adv': '副詞',
  'adv-to': 'ト副詞',
  'v1': '一段動詞',
  'v5aru': '五段動詞(ある)',
  'v5b': '五段動詞(ぶ)',
  'v5g': '五段動詞(ぐ)',
  'v5k': '五段動詞(く)',
  'v5k-s': '五段動詞(いく)',
  'v5m': '五段動詞(む)',
  'v5n': '五段動詞(ぬ)',
  'v5r': '五段動詞(る)',
  'v5r-i': '五段動詞(不規則)',
  'v5s': '五段動詞(す)',
  'v5t': '五段動詞(つ)',
  'v5u': '五段動詞(う)',
  'v5u-s': '五段動詞(う特)',
  'vk': 'カ変動詞',
  'vs': 'スル動詞',
  'vs-c': 'スル動詞(複合)',
  'vs-i': 'スル動詞(不規則)',
  'vs-s': 'スル動詞(特殊)',
  'vz': 'ザ変動詞',
  'vi': '自動詞',
  'vt': '他動詞',
  'vr': '連用動詞',
  'aux': '助動詞',
  'aux-v': '補助動詞',
  'aux-adj': '補助形容詞',
  'conj': '接続詞',
  'int': '感動詞',
  'prt': '助詞',
  'cop': 'コピュラ',
  'exp': '表現',
  'num': '数詞',
  'ctr': '助数詞',
  'suf': '接尾辞',
  'pref': '接頭辞',
  'unc': '未分類',
  'unclass': '未分類',
};

// Group POS to broader categories
const POS_GROUP = {
  '名詞': ['n', 'n-pr', 'n-pref', 'n-suf', 'n-adv', 'n-t'],
  '動詞': ['v1', 'v5aru', 'v5b', 'v5g', 'v5k', 'v5k-s', 'v5m', 'v5n', 'v5r', 'v5r-i', 'v5s', 'v5t', 'v5u', 'v5u-s', 'vk', 'vs', 'vs-c', 'vs-i', 'vs-s', 'vz', 'vi', 'vt', 'vr'],
  '形容詞': ['adj-i', 'adj-na', 'adj-no', 'adj-pn', 'adj-f', 'adj-t', 'adj-ix'],
  '副詞': ['adv', 'adv-to'],
  '助詞・助動詞': ['prt', 'aux', 'aux-v', 'aux-adj', 'cop'],
  '接続詞': ['conj'],
  '感動詞': ['int'],
  '代名詞': ['pn'],
  '接辞': ['suf', 'pref'],
  '数詞・助数詞': ['num', 'ctr'],
  '表現': ['exp'],
  'その他': ['unc', 'unclass'],
};

function getBestPOS(posList) {
  if (!posList || posList.length === 0) return '名詞';
  // Map first POS tag to human-readable
  for (const p of posList) {
    for (const [group, tags] of Object.entries(POS_GROUP)) {
      if (tags.includes(p)) return group;
    }
  }
  return POS_MAP[posList[0]] || 'その他';
}

// ─── Topic/Category mapping based on field tags ────────────────────────
const TOPIC_MAP = {
  'food': '食べ物・料理',
  'cooking': '食べ物・料理',
  'anat': '身体・健康',
  'med': '身体・健康',
  'dent': '身体・健康',
  'physiol': '身体・健康',
  'pathol': '身体・健康',
  'surg': '身体・健康',
  'pharm': '身体・健康',
  'vet': '身体・健康',
  'baseb': 'スポーツ',
  'sports': 'スポーツ',
  'boxing': 'スポーツ',
  'sumo': 'スポーツ',
  'golf': 'スポーツ',
  'ski': 'スポーツ',
  'horse': 'スポーツ',
  'music': '音楽・芸術',
  'art': '音楽・芸術',
  'film': '音楽・芸術',
  'manga': '音楽・芸術',
  'archit': '音楽・芸術',
  'photo': '音楽・芸術',
  'comp': 'テクノロジー',
  'internet': 'テクノロジー',
  'elec': 'テクノロジー',
  'electr': 'テクノロジー',
  'telec': 'テクノロジー',
  'motor': 'テクノロジー',
  'aviat': 'テクノロジー',
  'rail': '交通・移動',
  'bus': '交通・移動',
  'astron': '自然・科学',
  'biol': '自然・科学',
  'bot': '自然・科学',
  'zool': '自然・科学',
  'chem': '自然・科学',
  'physics': '自然・科学',
  'math': '自然・科学',
  'geol': '自然・科学',
  'met': '自然・科学',
  'genet': '自然・科学',
  'biochem': '自然・科学',
  'ecol': '自然・科学',
  'geogr': '自然・科学',
  'cryst': '自然・科学',
  'embryo': '自然・科学',
  'paleo': '自然・科学',
  'mining': '自然・科学',
  'min': '自然・科学',
  'econ': 'ビジネス・経済',
  'finc': 'ビジネス・経済',
  'bus': 'ビジネス・経済',
  'stockm': 'ビジネス・経済',
  'law': '法律・政治',
  'pol': '法律・政治',
  'politics': '法律・政治',
  'mil': '法律・政治',
  'ling': '言語・教育',
  'gramm': '言語・教育',
  'Buddh': '宗教・文化',
  'Christn': '宗教・文化',
  'Shinto': '宗教・文化',
  'relig': '宗教・文化',
  'myth': '宗教・文化',
  'grmyth': '宗教・文化',
  'rommyth': '宗教・文化',
  'chmyth': '宗教・文化',
  'jpmyth': '宗教・文化',
  'hist': '歴史',
  'archeol': '歴史',
  'cloth': '生活・日常',
  'fish': '生活・日常',
  'gardn': '生活・日常',
  'hong': '生活・日常',
  'cards': '娯楽',
  'go': '娯楽',
  'shogi': '娯楽',
  'mahj': '娯楽',
  'hanaf': '娯楽',
  'vidg': '娯楽',
  'tv': '娯楽',
  'print': 'メディア',
  'work': '仕事',
  'company': '仕事',
  'product': '仕事',
  'tradem': '仕事',
  'organization': '仕事',
  'serv': '仕事',
  'civeng': '仕事',
  'engr': '仕事',
  'mech': '仕事',
  'arch': '仕事',
  'station': '場所',
  'place': '場所',
  'ship': '場所',
  'psych': '感情・心理',
  'psy': '感情・心理',
  'psyanal': '感情・心理',
  'phil': '思想',
  'logic': '思想',
};

function getTopic(fieldTags) {
  if (!fieldTags || fieldTags.length === 0) return '';
  for (const f of fieldTags) {
    if (TOPIC_MAP[f]) return TOPIC_MAP[f];
  }
  return '';
}

// ─── JLPT level assignment heuristic ──────────────────────────────────
// Since the common-only JMdict doesn't have JLPT tags, we assign based on
// frequency/commonness and dictionary heuristics
function assignJLPTLevel(entry, index) {
  const isCommon = entry.kanji.some(k => k.common) || entry.kana.some(k => k.common);
  const hasKanji = entry.kanji.length > 0;
  const senseCount = entry.sense.length;

  // Prioritize based on position in dictionary (earlier = more common)
  if (index < 4000) return 'N5';
  if (index < 8000) return 'N4';
  if (index < 13000) return 'N3';
  if (index < 18000) return 'N2';
  return 'N1';
}

// ─── Process entries ──────────────────────────────────────────────────
const processed = [];
const seenWords = new Set();

for (let i = 0; i < words.length; i++) {
  const entry = words[i];

  // Get the primary word form
  let wordText = '';
  let reading = '';

  if (entry.kanji.length > 0) {
    wordText = entry.kanji[0].text;
  } else if (entry.kana.length > 0) {
    wordText = entry.kana[0].text;
  }

  if (entry.kana.length > 0) {
    reading = entry.kana[0].text;
  }

  if (!wordText) continue;

  // Skip very long entries (phrases)
  if (wordText.length > 12) continue;

  // Deduplicate
  const key = wordText;
  if (seenWords.has(key)) continue;
  seenWords.add(key);

  // Get meanings
  const meanings = [];
  const allPOS = [];
  const allField = [];

  for (const sense of entry.sense) {
    for (const gloss of sense.gloss) {
      if (gloss.lang === 'eng' && gloss.text) {
        meanings.push(gloss.text);
      }
    }
    if (sense.partOfSpeech) {
      allPOS.push(...sense.partOfSpeech);
    }
    if (sense.field) {
      allField.push(...sense.field);
    }
  }

  const meaningEn = meanings.slice(0, 3).join('；');
  const meaningCn = wordTranslations[wordText] || '';
  // Combine English and Chinese: "English / 中文"
  const meaning = meaningCn && meaningCn !== meaningEn
    ? `${meaningEn} / ${meaningCn}`
    : meaningEn;
  const partOfSpeech = getBestPOS(allPOS);
  const level = assignJLPTLevel(entry, i);
  const topic = getTopic(allField);

  processed.push({
    id: `v-${i.toString().padStart(5, '0')}`,
    word: wordText,
    reading: reading,
    meaning: meaning,
    partOfSpeech: partOfSpeech,
    level: level,
    topic: topic || '',
    example: '',
    exampleReading: '',
    exampleMeaning: '',
  });
}

console.log(`Processed ${processed.length} unique vocabulary entries`);

// ─── Group by JLPT level ──────────────────────────────────────────────
const byLevel = { N5: [], N4: [], N3: [], N2: [], N1: [] };
for (const w of processed) {
  byLevel[w.level].push(w);
}

for (const [level, list] of Object.entries(byLevel)) {
  console.log(`  ${level}: ${list.length} words`);
}

// ─── Generate TypeScript file ─────────────────────────────────────────
function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function generateWordEntry(w) {
  const topic = w.topic ? `, topic: '${escapeStr(w.topic)}'` : '';
  return `  { id: '${w.id}', word: '${escapeStr(w.word)}', reading: '${escapeStr(w.reading)}', meaning: '${escapeStr(w.meaning)}', partOfSpeech: '${escapeStr(w.partOfSpeech)}', level: '${w.level}', example: '', exampleReading: '', exampleMeaning: ''${topic} }`;
}

const lines = [];
lines.push(`export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';`);
lines.push('');
lines.push(`export type WordCategory = 'all' | '食べ物・料理' | '身体・健康' | 'スポーツ' | '音楽・芸術' | 'テクノロジー' | '交通・移動' | '自然・科学' | 'ビジネス・経済' | '法律・政治' | '言語・教育' | '宗教・文化' | '歴史' | '生活・日常' | '娯楽' | 'メディア' | '仕事' | '場所' | '感情・心理' | '思想';`);
lines.push('');
lines.push(`export interface Word {`);
lines.push(`  id: string;`);
lines.push(`  word: string;`);
lines.push(`  reading: string;`);
lines.push(`  meaning: string;`);
lines.push(`  partOfSpeech: string;`);
lines.push(`  level: JLPTLevel;`);
lines.push(`  topic?: string;`);
lines.push(`  example: string;`);
lines.push(`  exampleReading: string;`);
lines.push(`  exampleMeaning: string;`);
lines.push(`}`);
lines.push('');

for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
  const list = byLevel[level];
  lines.push(`const ${level.toLowerCase()}Words: Word[] = [`);
  for (let i = 0; i < list.length; i++) {
    const comma = i < list.length - 1 ? ',' : '';
    lines.push(generateWordEntry(list[i]) + comma);
  }
  lines.push(`];`);
  lines.push('');
}

lines.push(`export const vocabularyByLevel: Record<JLPTLevel, Word[]> = {`);
lines.push(`  N5: n5Words,`);
lines.push(`  N4: n4Words,`);
lines.push(`  N3: n3Words,`);
lines.push(`  N2: n2Words,`);
lines.push(`  N1: n1Words,`);
lines.push(`};`);
lines.push('');
lines.push(`export const allVocabulary: Word[] = [`);
lines.push(`  ...n5Words,`);
lines.push(`  ...n4Words,`);
lines.push(`  ...n3Words,`);
lines.push(`  ...n2Words,`);
lines.push(`  ...n1Words,`);
lines.push(`];`);

const outputPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary-data.ts');
fs.writeFileSync(outputPath, lines.join('\n'), 'utf-8');
console.log(`\nWritten vocabulary-data.ts (${lines.length} lines)`);
console.log(`Total words: ${processed.length}`);