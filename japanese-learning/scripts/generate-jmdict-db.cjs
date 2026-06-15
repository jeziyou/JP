/**
 * Generate complete JMdict vocabulary database for embedding
 * This creates a searchable index of all JMdict entries
 * Usage: node scripts/generate-jmdict-db.cjs
 */

const fs = require('fs');
const path = require('path');

// Load JMdict data
const jmdictPath = '/tmp/jmdict-eng-common-3.6.2.json';
if (!fs.existsSync(jmdictPath)) {
  console.error('JMdict data not found! Downloading...');
  // Download JMdict
  const { execSync } = require('child_process');
  execSync('curl -L -o /tmp/jmdict-eng-common-3.6.2.json "https://cdn.flaticon.com/jmdict-eng-common-3.6.2.json"', { stdio: 'inherit' });
}

const raw = JSON.parse(fs.readFileSync(jmdictPath, 'utf-8'));
const words = raw.words;
console.log(`Loaded ${words.length} entries from JMdict`);

// Chinese translations (subset for common words)
const wordTranslations = {
  // Common words - we'll load from external file if exists
};

// Load word translations if available
const translationsPath = path.join(__dirname, '..', 'src', 'utils', 'translations.ts');
if (fs.existsSync(translationsPath)) {
  const content = fs.readFileSync(translationsPath, 'utf-8');
  const match = content.match(/const translations = \{[\s\S]*?\};/);
  if (match) {
    try {
      // Extract translations object
      const translationsContent = match[0]
        .replace('const translations = ', '')
        .replace(/'/g, '"');
      Object.assign(wordTranslations, JSON.parse(translationsContent));
    } catch (e) {
      console.log('Could not parse translations file');
    }
  }
}

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

// Word categories
const WORD_CATEGORIES = [
  '食べ物・料理', '身体・健康', 'スポーツ', '音楽・芸術',
  'テクノロジー', '交通・移動', '自然・科学', 'ビジネス・経済',
  '法律・政治', '言語・教育', '宗教・文化', '歴史',
  '生活・日常', '娯楽', 'メディア', '仕事',
  '場所', '感情・心理', '思想', '未分類',
];

// Category keywords
const categoryKeywords = {
  '食べ物・料理': ['食', '飲', '料理', 'パン', '肉', '魚', '野菜', '果物', '米', '麺', '酒', '茶', 'コーヒー', 'チョコ', '牛肉', '豚肉', '鶏肉', '卵', '牛乳', 'バター'],
  '身体・健康': ['体', '病', '医者', '薬', '健康', '病院', '手術', '治療', '予防', '歯', '目', '耳', '鼻', '口', '手', '足', '頭', '心臓', '肺', '胃'],
  'スポーツ': ['スポーツ', 'サッカー', '野球', 'テニス', ' 골프', '泳ぐ', '走る', '選手', '試合', '優勝', 'チーム', 'ボール', '運動'],
  '音楽・芸術': ['音楽', '絵', '美術', '映画', '演劇', 'コンサート', 'ピアノ', '歌', 'アート', '画家', '彫刻', '劇場', '乐团'],
  'テクノロジー': ['コンピュータ', 'インターネット', 'スマホ', '電話', 'テレビ', 'データ', 'プログラム', 'ソフトウェア', 'ハードウェア', 'ネットワーク'],
  '交通・移動': ['車', '電車', 'バス', '飛行機', '船', '駅', '空港', '運転', '運輸', '旅客', '货物', '道路', '橋'],
  '自然・科学': ['自然', '科学', '環境', '気候', '動物', '植物', '宇宙', '化学', '物理', '生物', '山', '川', '海', '空', '星'],
  'ビジネス・経済': ['会社', '経済', '市場', '株', '投資', '営業', '取引', '利益', '予算', '企業', '銀行', '金融', '商業'],
  '法律・政治': ['政治', '法律', '選挙', '政府', '国会', '裁判', '契約', '権利', '義務', '条例', '司法', '立法', '行政'],
  '言語・教育': ['教育', '学校', '大学', '学生', '先生', '学習', '言語', '文法', '単語', '教科', '試験', '学位'],
  '宗教・文化': ['宗教', '神社', '仏教', '文化', '伝統', '習慣', '祭り', '儀式', '信仰', '教会', '寺院'],
  '歴史': ['歴史', '時代', '戦争', '革命', '王朝', '発見', '古代', '中世', '近代', '現代', '文明'],
  '生活・日常': ['生活', '家族', '家', '買い物', '掃除', '料理', '洗濯', '睡眠', '朝', '昼', '夜', '食事'],
  '娯楽': ['ゲーム', '遊び', '旅行', '映画', '読書', '趣味', '休日', '娯楽', 'レジャー', '観光'],
  'メディア': ['新聞', '雑誌', 'ラジオ', 'ニュース', '報道', '情報', '通信', '広告', '出版'],
  '仕事': ['仕事', '職業', '会社', '勤務', '退職', '昇進', '給料', '採用', '解雇', '産業'],
  '場所': ['場所', '公園', '図書館', '銀行', '郵便局', '病院', '店', '建物', '場所', '地域'],
  '感情・心理': ['喜ぶ', '悲しむ', '怒る', '寂しい', '嬉しい', '安心', '心配', '後悔', '愛', '恨', '恐怖', '希望'],
  '思想': ['考え', '哲学', '信念', '意見', '主張', '論理', '思想', '主義', '宗教', '政治'],
};

// Simple reading lookup
const readingMap = {};
for (const entry of words) {
  const kanji = entry.kanji?.[0]?.text;
  const kana = entry.kana?.[0]?.text;
  if (kanji && kana) {
    readingMap[kanji] = kana;
  }
}

function categorizeWord(word) {
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const keyword of keywords) {
      if (word.includes(keyword)) {
        return category;
      }
    }
  }
  return '未分類';
}

function escapeString(str) {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r');
}

// Process all words
const allVocab = [];
const seenWords = new Set();

for (const entry of words) {
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
  
  // Determine JLPT level
  let level = 'N5';
  if (word.length >= 3) level = 'N4';
  if (word.length >= 4 || pos.includes('動詞')) level = 'N3';
  if (word.length >= 5 || pos.includes('形容詞')) level = 'N2';
  if (word.length >= 6) level = 'N1';
  
  // Categorize
  const category = categorizeWord(word);
  
  allVocab.push({
    word,
    reading,
    meaning,
    partOfSpeech: pos,
    level,
    category,
  });
}

console.log(`Processed ${allVocab.length} vocabulary entries`);

// Group by level and category
const vocabByLevel = { N5: [], N4: [], N3: [], N2: [], N1: [] };
const vocabByCategory = {};
for (const c of WORD_CATEGORIES) {
  vocabByCategory[c] = [];
}

for (const v of allVocab) {
  vocabByLevel[v.level].push(v);
  vocabByCategory[v.category].push(v);
}

console.log('Vocabulary by level:');
for (const [lvl, arr] of Object.entries(vocabByLevel)) {
  console.log(`  ${lvl}: ${arr.length} words`);
}

console.log('\nVocabulary by category (top 10):');
const sortedCats = Object.entries(vocabByCategory)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 10);
for (const [cat, arr] of sortedCats) {
  console.log(`  ${cat}: ${arr.length} words`);
}

// Generate search index
console.log('\nGenerating search index...');

const searchIndex = new Map();

// Index by word (kanji)
for (const v of allVocab) {
  if (!searchIndex.has(v.word)) {
    searchIndex.set(v.word, []);
  }
  searchIndex.get(v.word).push(v);
}

// Index by reading (kana)
for (const v of allVocab) {
  if (v.reading && v.reading !== v.word) {
    if (!searchIndex.has(v.reading)) {
      searchIndex.set(v.reading, []);
    }
    searchIndex.get(v.reading).push(v);
  }
  
  // Also index by romanized reading
  if (v.reading) {
    const romanized = romanize(v.reading);
    if (romanized !== v.reading && romanized !== v.word) {
      if (!searchIndex.has(romanized)) {
        searchIndex.set(romanized, []);
      }
      searchIndex.get(romanized).push(v);
    }
  }
}

// Simple romanization
function romanize(kana) {
  const romaji = {
    'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
    'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
    'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
    'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
    'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
    'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
    'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
    'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
    'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
    'わ': 'wa', 'を': 'wo', 'ん': 'n',
    'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
    'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
    'だ': 'da', 'ぢ': 'di', 'づ': 'du', 'で': 'de', 'ど': 'do',
    'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
    'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
    'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
    'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
    'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
    'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
    'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
    'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
    'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
    'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
    'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
    'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
    'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
  };
  
  let result = '';
  for (const char of kana) {
    result += romaji[char] || char;
  }
  return result;
}

console.log(`Search index has ${searchIndex.size} entries`);

// Write to files
const dbPath = path.join(__dirname, '..', 'src', 'data', 'jmdict-db.ts');

const output = `/**
 * JMdict Database - Complete Japanese-English Dictionary
 * Generated from JMdict (${raw.dictDate})
 * Total entries: ${allVocab.length}
 */

// Word entry interface
export interface JMDictWord {
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  level: string;
  category: string;
}

// All vocabulary
export const allVocabulary: JMDictWord[] = ${JSON.stringify(allVocab, null, 2)};

// Vocabulary by JLPT level
export const vocabularyByLevel: Record<string, JMDictWord[]> = ${JSON.stringify(vocabByLevel, null, 2)};

// Vocabulary by category
export const vocabularyByCategory: Record<string, JMDictWord[]> = ${JSON.stringify(vocabByCategory, null, 2)};

// Search index - Map<searchTerm, wordIndex[]>
export const searchIndex: Record<string, number[]> = ${JSON.stringify(
  Object.fromEntries(searchIndex),
  null, 2
)};

// Category labels with emoji
export const CATEGORY_LABELS: Record<string, string> = {
  '食べ物・料理': '🍽️ 食べ物・料理',
  '身体・健康': '🏥 身体・健康',
  'スポーツ': '⚽ スポーツ',
  '音楽・芸術': '🎵 音楽・芸術',
  'テクノロジー': '💻 テクノロジー',
  '交通・移動': '🚃 交通・移動',
  '自然・科学': '🔬 自然・科学',
  'ビジネス・経済': '💼 ビジネス・経済',
  '法律・政治': '⚖️ 法律・政治',
  '言語・教育': '📚 言語・教育',
  '宗教・文化': '⛩️ 宗教・文化',
  '歴史': '📜 歴史',
  '生活・日常': '🏠 生活・日常',
  '娯楽': '🎮 娯楽',
  'メディア': '📺 メディア',
  '仕事': '🛠️ 仕事',
  '場所': '📍 場所',
  '感情・心理': '💭 感情・心理',
  '思想': '🧠 思想',
  '未分類': '📦 未分類',
};

// All categories
export const ALL_CATEGORIES = ${JSON.stringify(WORD_CATEGORIES)};
`;

fs.writeFileSync(dbPath, output, 'utf-8');
console.log(`\nWritten to ${dbPath}`);
console.log('File size:', (fs.statSync(dbPath).size / 1024 / 1024).toFixed(2), 'MB');
