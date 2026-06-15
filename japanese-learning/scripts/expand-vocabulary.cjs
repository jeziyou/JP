/**
 * Script to expand vocabulary to 5000+ words with example sentences
 * Uses JMdict data and generates example sentences
 * Usage: node scripts/expand-vocabulary.cjs
 */

const fs = require('fs');
const path = require('path');

// Load Chinese translations
const wordTranslations = require('./word-translations.cjs');

// Load JMdict data
const jmdictPath = '/tmp/jmdict-eng-common-3.6.2.json';
if (!fs.existsSync(jmdictPath)) {
  console.error('JMdict data not found!');
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(jmdictPath, 'utf-8'));
const words = raw.words;
console.log(`Loaded ${words.length} entries from JMdict`);

// POS mapping
const POS_MAP = {
  'n': '名詞', 'n-pr': '固有名詞', 'n-pref': '接頭辞', 'n-suf': '接尾辞',
  'adj-i': 'イ形容詞', 'adj-na': 'ナ形容詞', 'adj-no': 'ノ形容詞',
  'adj-pn': '連体詞', 'adv': '副詞', 'adv-to': '副詞的接続詞',
  'verb': '動詞', 'verb-ichidan': '一段動詞', 'verb-godan': '五段動詞',
  'verb-suru': 'サ変動詞', 'verb-kuru': 'カ変動詞',
  'conj': '接続詞', 'part': '助詞', 'aux': '助動詞',
  'interj': '感動詞', 'pref': '接頭辞', 'suf': '接尾辞',
};

// Common sentence patterns for generating examples
const sentenceTemplates = {
  'n': [
    '{word}は{time}に{action}ます。',
    '{place}で{word}を{action}ます。',
    '{word}が{adj}です。',
    '{person}は{word}を{action}ています。',
    '{word}を{action}みました。',
  ],
  'adj-i': [
    '{noun}は{word}です。',
    '{noun}が{word}です。',
    '{place}は{word}でした。',
    '{time}、{word}です。',
    '{person}は{word}です。',
  ],
  'adj-na': [
    '{noun}は{word}です。',
    '{noun}が{word}です。',
    '{place}は{word}でした。',
    '{time}、{word}です。',
    '{person}は{word}です。',
  ],
  'verb': [
    '{time}に{word}ます。',
    '{place}で{word}ます。',
    '{person}は{word}ています。',
    '{noun}を{word}ました。',
    '{noun}で{word}ます。',
  ],
  'adv': [
    '{word}{verb}みます。',
    '{word}に{verb}ました。',
    '{noun}は{word}です。',
    '{time}{word}に{verb}ます。',
  ],
};

// Word pools for generating examples
const exampleWords = {
  time: ['朝', '昼', '夜', '毎日', '今日', '明日', '昨日', '週末'],
  place: ['学校', '会社', '公園', '家', '店', '図書館', '駅'],
  action: ['見', '食べ', '買', '読', '書', '勉強', '仕事', '遊び', '使', '探'],
  adj: ['大きい', '小さい', '新しい', '古い', '面白い', '便利', 'きれい', '早い'],
  noun: ['本', '車', '電話', '友達', '家族', '仕事', '時間', '音楽', 'テレビ'],
  person: ['私', '彼', '彼女', '先生', '学生', '社員'],
  verb: ['行', '来', '見', '聞', '話', '待', '歩', '走', '読', '書'],
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExample(word, pos) {
  const posGroup = pos.startsWith('adj-') ? 'adj-i' : 
                   pos.startsWith('verb') ? 'verb' : pos;
  
  const templates = sentenceTemplates[posGroup] || sentenceTemplates['n'];
  let template = pickRandom(templates);
  
  // Replace placeholders
  for (const [key, pool] of Object.entries(exampleWords)) {
    template = template.replace(new RegExp(`{${key}}`, 'g'), pickRandom(pool));
  }
  
  template = template.replace(/{word}/g, word);
  
  return template;
}

function generateReading(text) {
  // Simple reading generation - would need kuroshiro for real furigana
  const readings = {
    '朝': 'あさ', '昼': 'ひる', '夜': 'よる', '毎日': 'まいにち',
    '今日': 'きょう', '明日': 'あした', '昨日': 'きのう', '週末': 'しゅうまつ',
    '学校': 'がっこう', '会社': 'かいしゃ', '公園': 'こうえん', '家': 'いえ',
    '店': 'みせ', '図書館': 'としょかん', '駅': 'えき', '見': 'み',
    '食べ': 'たべ', '買': 'か', '読': 'よ', '書': 'か',
    '勉強': 'べんきょう', '仕事': 'しごと', '遊び': 'あそび',
    '大きい': 'おおきい', '小さい': 'ちいさい', '新しい': 'あたらしい',
    '古い': 'ふるい', '面白い': 'おもしろい', '便利': 'べんり',
    '本': 'ほん', '車': 'くるま', '電話': 'でんわ', '友達': 'ともだち',
    '家族': 'かぞく', '時間': 'じかん', '私': 'わたし', '彼': 'かれ',
    '彼女': 'かのじょ', '先生': 'せんせい', '学生': 'がくせい', '社員': 'しゃいん',
    '一': 'いち', '二': 'に', '三': 'さん', '四': 'よん', '五': 'ご',
    '六': 'ろく', '七': 'なな', '八': 'はち', '九': 'きゅう', '十': 'じゅう',
    '用事がある': 'ようじがある', '時間がある': 'じかんがある',
    '気分がいい': 'きぶんがいい', '天気がいい': 'てんきがいい',
    '行': 'い', '来': 'き', '聞': 'き', '話': 'はなし', '待': 'ま',
    '歩': 'ある', '走': 'はし',
  };
  
  let reading = '';
  for (const char of text) {
    reading += readings[char] || char;
  }
  return reading;
}

function translateExample(text) {
  // Simple translation for examples
  const translations = {
    '朝': '早上', '昼': '中午', '夜': '晚上', '毎日': '每天',
    '今日': '今天', '明日': '明天', '昨日': '昨天', '週末': '周末',
    '学校': '学校', '会社': '公司', '公園': '公园', '家': '家',
    '店': '商店', '図書館': '图书馆', '駅': '车站', '見': '看',
    '食べ': '吃', '買': '买', '読': '读', '書': '写',
    '勉強': '学习', '仕事': '工作', '遊び': '玩', '使': '使用', '探': '寻找',
    '大きい': '大', '小さい': '小', '新しい': '新', '古い': '旧',
    '面白い': '有趣', '便利': '方便', 'きれい': '漂亮', '早い': '早',
    '本': '书', '車': '车', '電話': '电话', '友達': '朋友',
    '家族': '家人', '時間': '时间', '音楽': '音乐', 'テレビ': '电视',
    '私': '我', '彼': '他', '彼女': '她', '先生': '老师', '学生': '学生', '社員': '员工',
    'は': '是', 'を': '把', 'に': '在', 'で': '在', 'が': '是',
    'ます': '', 'ました': '了', 'ています': '正在', 'です': '是',
    'でした': '了', 'みました': '看了', 'みます': '看',
    '行': '去', '来': '来', '聞': '听', '話': '说', '待': '等',
    '歩': '走', '走': '跑', '読': '读', '書': '写',
  };
  
  let result = text;
  // Replace in order of longest first
  const sortedKeys = Object.keys(translations).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    result = result.replace(key, translations[key]);
  }
  
  // Clean up - fix leftover particles
  result = result.replace(/\s*は\s*/g, ' ').replace(/\s*を\s*/g, ' ');
  result = result.replace(/\s*に\s*/g, ' ').replace(/\s*で\s*/g, ' ');
  result = result.replace(/\s*が\s*/g, ' ').replace(/\s*です\s*/g, '是');
  result = result.replace(/\s*ています\s*/g, '正在');
  result = result.replace(/\s*ます\s*/g, '');
  
  // Clean whitespace
  result = result.replace(/\s+/g, ' ').trim();
  return result;
}

// Process words and generate vocabulary entries
const vocabEntries = [];
const seenWords = new Set();

for (const entry of words) {
  // Get kanji reading (prefer common words)
  const kanji = entry.kanji?.find(k => k.common) || entry.kanji?.[0];
  const kana = entry.kana?.find(k => k.common) || entry.kana?.[0];
  
  if (!kanji && !kana) continue;
  
  const word = kanji?.text || kana?.text;
  const reading = kana?.text || '';
  
  // Skip duplicates
  if (seenWords.has(word)) continue;
  seenWords.add(word);
  
  // Get meanings
  const senses = entry.sense || [];
  const meanings = [];
  
  for (const sense of senses) {
    const glosses = sense.gloss || [];
    for (const gloss of glosses) {
      if (gloss.lang === 'eng' || !gloss.lang) {
        meanings.push(gloss.text);
      }
    }
  }
  
  if (meanings.length === 0) continue;
  
  const englishMeaning = meanings.slice(0, 3).join('；');
  const chinese = wordTranslations[word] || '';
  const meaning = chinese ? `${englishMeaning} / ${chinese}` : englishMeaning;
  
  // Get part of speech
  const posTags = senses[0]?.partOfSpeech || [];
  const pos = posTags.length > 0 ? POS_MAP[posTags[0]] || posTags[0] : '名詞';
  
  // Determine JLPT level (simplified)
  let level = 'N5';
  if (word.length >= 3) level = 'N4';
  if (word.length >= 4 || pos.includes('動詞')) level = 'N3';
  if (word.length >= 5 || pos.includes('形容詞')) level = 'N2';
  if (word.length >= 6) level = 'N1';
  
  // Generate example
  const example = generateExample(word, posTags[0] || 'n');
  const exampleReading = generateReading(example);
  const exampleMeaning = translateExample(example);
  
  vocabEntries.push({
    id: `v-${String(vocabEntries.length).padStart(5, '0')}`,
    word,
    reading,
    meaning,
    partOfSpeech: pos,
    level,
    example,
    exampleReading,
    exampleMeaning,
  });
  
  // Limit to 5000 entries
  if (vocabEntries.length >= 5000) break;
}

console.log(`Generated ${vocabEntries.length} vocabulary entries`);

// Write to vocabulary-data.ts
const vocabPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary-data.ts');

const output = `export interface Word {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  level: string;
  example: string;
  exampleReading: string;
  exampleMeaning: string;
}

export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export type WordCategory = 'all' | 'noun' | 'verb' | 'adjective' | 'adverb';

export const vocabularyByLevel: Record<string, Word[]> = {
  N5: [],
  N4: [],
  N3: [],
  N2: [],
  N1: [],
};

export const vocabulary: Word[] = [
${vocabEntries.map(v => `  {
    id: '${v.id}',
    word: '${escapeString(v.word)}',
    reading: '${escapeString(v.reading)}',
    meaning: '${escapeString(v.meaning)}',
    partOfSpeech: '${v.partOfSpeech}',
    level: '${v.level}',
    example: '${escapeString(v.example)}',
    exampleReading: '${escapeString(v.exampleReading)}',
    exampleMeaning: '${escapeString(v.exampleMeaning)}',
  }`).join(',\n')}
];

// Group by level
for (const word of vocabulary) {
  vocabularyByLevel[word.level].push(word);
}
`;

fs.writeFileSync(vocabPath, output, 'utf-8');
console.log('Written to vocabulary-data.ts');

function escapeString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}