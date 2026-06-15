/**
 * Script to generate 1000+ reading articles for Japanese learning
 * Uses vocabulary data and topic templates to create diverse passages
 * Usage: node scripts/generate-reading.cjs
 */

const fs = require('fs');
const path = require('path');

// Load pre-curated topic-specific word lists
const topicWordLists = require('./topic-words.cjs');

// Load vocabulary data to extract words by topic
const vocabPath = path.join(__dirname, '..', 'src', 'data', 'vocabulary-data.ts');
const vocabContent = fs.readFileSync(vocabPath, 'utf-8');

// Extract words with topics
const wordRegex = /\{ id: '([^']+)', word: '([^']+)', reading: '([^']+)', meaning: '([^']+)', partOfSpeech: '([^']+)', level: '([^']+)', example: '', exampleReading: '', exampleMeaning: ''(?:, topic: '([^']*)')? \}/g;
const wordsByTopic = {};
const wordsByLevel = { N5: [], N4: [], N3: [], N2: [], N1: [] };

let match;
while ((match = wordRegex.exec(vocabContent)) !== null) {
  const [, id, word, reading, meaning, pos, level, topic] = match;
  const w = { id, word, reading, meaning, pos, level, topic: topic || '' };
  wordsByLevel[level].push(w);
  if (topic) {
    if (!wordsByTopic[topic]) wordsByTopic[topic] = [];
    wordsByTopic[topic].push(w);
  }
}

console.log(`Loaded vocabulary: ${Object.values(wordsByLevel).reduce((s, a) => s + a.length, 0)} words`);
console.log(`Topics: ${Object.keys(wordsByTopic).length}`);

// ─── Article Templates ────────────────────────────────────────────────

const templates = [
  // Daily Life
  {
    topic: '生活・日常',
    levels: ['N5', 'N4'],
    titles: [
      '私の一日', '週末の過ごし方', '買い物の楽しみ', '料理の時間', '掃除の日',
      '朝の習慣', '通勤の風景', '家族との夕食', '休日の朝', '寝る前の時間',
      '近所の公園', '散歩の楽しみ', 'ペットとの生活', '日曜大工', '庭の手入れ',
      '引っ越しの準備', '新しい家具', '洗濯のコツ', '朝食のメニュー', '夜の過ごし方',
      '友達との約束', '雨の日の過ごし方', '部屋の模様替え', '郵便局へ行く', '銀行の利用',
      'ごみの分別', '節約のコツ', '手紙を書く', '地域の行事', '隣の人との交流',
    ],
    sources: ['日常読解', '生活エッセイ'],
  },
  // Food
  {
    topic: '食べ物・料理',
    levels: ['N5', 'N4', 'N3'],
    titles: [
      '和食の魅力', '寿司の歴史', 'ラーメン巡り', 'お弁当作り', '日本の果物',
      '抹茶の世界', '和菓子の美しさ', '鍋料理の季節', '屋台の食べ物', '朝ごはんの文化',
      '味噌汁の作り方', 'おにぎりの種類', '天ぷらの秘密', 'そばとうどん', '焼き鳥の楽しみ',
      '刺身の食べ方', '日本酒入門', 'お茶の種類', '駅弁の旅', '家庭料理の思い出',
      'カレーライス', 'たこ焼き作り', 'お好み焼き', '漬物の種類', 'スイーツ巡り',
      '居酒屋の楽しみ', '回転寿司', 'コンビニおにぎり', '季節の果物', '料理教室体験',
    ],
    sources: ['食文化読解', 'グルメエッセイ'],
  },
  // Technology
  {
    topic: 'テクノロジー',
    levels: ['N3', 'N2', 'N1'],
    titles: [
      'AIの進化', 'スマートフォンの未来', 'ロボットと暮らす', '自動運転の時代', '電子マネーの普及',
      'SNSの影響力', 'オンライン教育', 'デジタル社会', 'VRの可能性', '宇宙開発の最前線',
      '環境技術の革新', '医療とAI', 'ブロックチェーン入門', '5Gの世界', '再生可能エネルギー',
      'スマート家電', 'データサイエンス', '仮想通貨の未来', '遠隔医療', 'ロボット工学',
      'IoTの可能性', 'クラウド技術', 'サイバーセキュリティ', 'ビッグデータ', '量子コンピュータ',
      '自動翻訳', 'ドローン活用', '3Dプリンタ', '電気自動車', '人工知能と倫理',
    ],
    sources: ['テクノロジー読解', '科学ニュース'],
  },
  // Nature & Science
  {
    topic: '自然・科学',
    levels: ['N3', 'N2', 'N1'],
    titles: [
      '地球温暖化', '生物多様性', '海洋プラスチック', '再生可能エネルギー', '地震のメカニズム',
      '宇宙の神秘', '恐竜の絶滅', '遺伝子の世界', '気候変動', '自然保護活動',
      '太陽系の惑星', '深海の生き物', '火山の仕組み', '台風の科学', '森林の役割',
      '生命の起源', '元素の周期表', '光の性質', '磁石の不思議', '天気予報の科学',
      '生態系のバランス', '水の循環', '酸性雨の影響', '絶滅危惧種', '温暖化防止策',
      '月の満ち欠け', '星座の観察', '河川の汚染', '砂漠化問題', '自然エネルギーの未来',
    ],
    sources: ['科学読解', '自然エッセイ'],
  },
  // Business
  {
    topic: 'ビジネス・経済',
    levels: ['N2', 'N1'],
    titles: [
      '日本の経済', '働き方改革', '起業の精神', 'グローバル化', 'マーケティング戦略',
      '株式市場入門', '中小企業の挑戦', '外国人労働者', 'テレワークの普及', '女性の社会進出',
      'スタートアップ', '企業の社会的責任', '国際貿易', '金融の基礎', '日本的経営',
      '消費税の影響', '経済成長の鍵', 'インフレとデフレ', '観光立国', '地方創生',
      '人材育成', '生産性向上', 'ブランド戦略', '消費者行動', '業界分析',
      'リスク管理', '投資の基本', '経営戦略', '市場調査', 'サプライチェーン',
    ],
    sources: ['経済読解', 'ビジネスニュース'],
  },
  // Culture
  {
    topic: '宗教・文化',
    levels: ['N4', 'N3', 'N2'],
    titles: [
      'お正月の風習', '節分と豆まき', 'ひな祭り', '七夕の物語', 'お盆の伝統',
      '七五三の祝い', '成人式の意味', '花見の文化', '茶道の心', '華道の美',
      '書道の魅力', '歌舞伎入門', '能楽の世界', '浮世絵の歴史', '祭りの意味',
      '神社とお寺', '神道の考え方', '仏教の教え', '日本の礼儀', '着物の文化',
      'お歳暮の習慣', '年賀状の由来', '鏡餅の意味', '門松の飾り', '初詣の習慣',
      'お彼岸の風習', '田植え祭り', '花火の歴史', '盆踊り', '地蔵盆',
    ],
    sources: ['文化読解', '伝統エッセイ'],
  },
  // Health
  {
    topic: '身体・健康',
    levels: ['N4', 'N3'],
    titles: [
      '健康の秘訣', '運動の効果', '睡眠の重要性', '食事と栄養', 'ストレス対策',
      'ヨガの勧め', '健康診断', '免疫力向上', '禁煙の方法', '目の健康',
      '歯の手入れ', '肩こり解消', '風邪予防', '健康食品', '心の健康',
      '高齢者の健康', '子供の健康', '運動不足解消', '食生活改善', 'リラックス法',
      '花粉症対策', '熱中症予防', '腰痛改善', '歩く健康法', '呼吸法の効果',
      '入浴の効用', '笑いの健康効果', '断食の方法', '筋トレ入門', '早寝早起き',
    ],
    sources: ['健康読解', '医療エッセイ'],
  },
  // Education
  {
    topic: '言語・教育',
    levels: ['N4', 'N3', 'N2'],
    titles: [
      '日本語学習の方法', '留学の経験', '外国語の重要性', '読書の楽しみ', '勉強の習慣',
      '試験対策', 'オンライン学習', '教育の未来', '語学の才能', '図書館の活用',
      '記憶の仕組み', '集中力の鍛え方', '資格取得', '生涯学習', '英語教育の課題',
      '大学の選び方', '奨学金制度', '国際交流', '日本語教師', '言語の多様性',
      '漢字の覚え方', '文法の勉強法', '会話練習のコツ', 'リスニング強化', '作文の書き方',
      '語彙力アップ', '発音練習', '読解のポイント', '日記を書く', '言語交換',
    ],
    sources: ['教育読解', '学習エッセイ'],
  },
  // Travel
  {
    topic: '交通・移動',
    levels: ['N4', 'N3'],
    titles: [
      '京都旅行', '東京観光', '北海道の旅', '沖縄の海', '富士山登山',
      '日本の温泉', '電車の旅', '自転車旅行', '空港の一日', '世界遺産巡り',
      '一人旅の魅力', '家族旅行', 'バスツアー', '新幹線の旅', '夜景の名所',
      '地図の読み方', '旅の準備', '海外旅行記', '日本の駅', 'フェリーの旅',
      '鎌倉散策', '奈良の大仏', '大阪グルメ旅', '金沢の庭園', '長崎の教会',
      '日光東照宮', '白川郷', '厳島神社', '熊本城', '姫路城',
    ],
    sources: ['旅行読解', '観光エッセイ'],
  },
  // Sports
  {
    topic: 'スポーツ',
    levels: ['N4', 'N3'],
    titles: [
      'オリンピック', '野球の魅力', 'サッカー日本代表', '相撲の伝統', '武道の精神',
      'マラソン挑戦', '水泳の効果', 'スキーの楽しみ', '剣道の稽古', '柔道の技',
      'テニスの上達', 'ゴルフ入門', 'バスケットボール', '卓球の練習', '体操競技',
      'スポーツ観戦', '体力作り', 'チームワーク', '指導者の役割', 'スポーツ科学',
      '登山の準備', 'ヨガの種類', 'ランニング入門', 'サイクリング', 'サーフィン体験',
      '弓道の精神', '合気道の心', '空手の練習', 'なぎなた', 'ボルダリング',
    ],
    sources: ['スポーツ読解', '運動エッセイ'],
  },
  // Entertainment
  {
    topic: '娯楽',
    levels: ['N4', 'N3'],
    titles: [
      '映画の楽しみ', '音楽の力', 'アニメの世界', '漫画文化', 'ゲームの進化',
      'カラオケの楽しみ', '写真撮影', 'ボードゲーム', '楽器の練習', '趣味の探し方',
      '動画配信', '小説の執筆', 'パズルの魅力', '手芸の時間', 'ガーデニング',
      'ダンス教室', '演劇鑑賞', 'コレクション', '旅行写真', '料理教室',
      '将棋の魅力', '囲碁入門', '麻雀の楽しみ', 'パチンコの仕組み', '競馬の世界',
      '釣りの楽しみ', 'キャンプ入門', '陶芸体験', '絵画教室', '合唱の楽しみ',
    ],
    sources: ['娯楽読解', '趣味エッセイ'],
  },
  // Work
  {
    topic: '仕事',
    levels: ['N3', 'N2'],
    titles: [
      '就職活動', '面接の準備', '職場のマナー', '仕事のやりがい', '転職の決断',
      '残業問題', 'パワハラ対策', '仕事の効率化', 'コミュニケーション', 'リーダーシップ',
      'プレゼン技術', '時間管理', 'キャリアアップ', '副業の始め方', '独立開業',
      '仕事と家庭', '職場の人間関係', 'ビジネスマナー', 'メールの書き方', '会議の進め方',
      '顧客対応', '企画立案', '報告書の作成', '出張の準備', '社内研修',
      '評価制度', '福利厚生', '定年後の生活', '職場の安全管理', '先輩後輩関係',
    ],
    sources: ['仕事読解', 'ビジネスエッセイ'],
  },
  // Additional general topics
  {
    topic: 'メディア',
    levels: ['N3', 'N2'],
    titles: [
      '新聞の役割', 'テレビの未来', 'ネットニュース', '報道の自由', '広告の影響',
      'SNS時代', 'フェイクニュース', 'ジャーナリズム', '出版業界', 'メディアリテラシー',
      'ラジオの魅力', 'ドキュメンタリー', 'コマーシャル', '視聴率の仕組み', '記事の書き方',
      '取材の方法', '編集者の仕事', '配信技術', '著作権問題', '情報公開',
    ],
    sources: ['メディア読解', '情報エッセイ'],
  },
  {
    topic: '感情・心理',
    levels: ['N3', 'N2', 'N1'],
    titles: [
      '幸福の条件', '孤独の心理学', '怒りのコントロール', '共感の力', '自信の育て方',
      '不安との向き合い方', '感謝の効果', '恋愛の心理学', '嫉妬のメカニズム', '脳の不思議',
      '夢の意味', '記憶の心理学', '性格の形成', 'トラウマ克服', 'ポジティブ思考',
      '人間関係の心理学', '成功の心理学', '創造性の育て方', '直感の科学', '意思決定の心理学',
    ],
    sources: ['心理学読解', '心のエッセイ'],
  },
  {
    topic: '歴史',
    levels: ['N2', 'N1'],
    titles: [
      '戦国時代', '江戸の暮らし', '明治維新', '古墳時代', '平安文化',
      '南北朝時代', '日清戦争', '高度経済成長', '縄文時代', '弥生時代',
      '鎌倉幕府', '室町文化', '戦後の復興', '大正ロマン', '昭和の生活',
      '太平洋戦争', '律令制度', '遣唐使', '鎖国政策', '開国と近代化',
    ],
    sources: ['歴史読解', '時代エッセイ'],
  },
  {
    topic: '場所',
    levels: ['N4', 'N3'],
    titles: [
      '都会の生活', '田舎の魅力', '海辺の町', '山の中の村', '商店街の風景',
      '駅前の賑わい', '公園の四季', '図書館の一日', '病院の待合室', '学校の思い出',
      '空港の風景', '港町の暮らし', '神社の境内', '城下町散策', '市場の活気',
      '工場見学', '農園体験', '水族館の魅力', '動物園の一日', '博物館の楽しみ',
    ],
    sources: ['場所読解', '風景エッセイ'],
  },
];

// ─── Article Generation ────────────────────────────────────────────────

function pickRandom(arr) { return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null; }
function pickRandomN(arr, n) {
  if (arr.length === 0) return [];
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

// Generate a realistic Japanese passage using vocabulary words
// Uses topic-specific sentence templates for natural Japanese
function generatePassage(words, level, topic) {
  const nouns = words.filter(w => w.pos === '名詞' || w.pos === '代名詞' || w.pos === '固有名詞');
  const verbs = words.filter(w => w.pos === '動詞');
  const adjs = words.filter(w => w.pos === '形容詞');
  const advs = words.filter(w => w.pos === '副詞');
  const others = words.filter(w => !nouns.includes(w) && !verbs.includes(w) && !adjs.includes(w) && !advs.includes(w));

  const allValid = words.filter(w => w.word.length <= 8 && !/[a-zA-Z]/.test(w.word) || /[\u4e00-\u9faf]/.test(w.word));
  if (allValid.length < 5) return null;

  const pick = (arr) => arr.length > 0 ? pickRandom(arr) : null;
  const pick2 = (arr) => pickRandomN(arr, 2);

  // Natural sentence templates by level
  const sentences = [];

  // Opening sentence
  const openN = pick(nouns.length > 0 ? nouns : allValid);
  if (!openN) return null;

  if (level === 'N5') {
    sentences.push(`${openN.word}について話しましょう。`);
    sentences.push(`${openN.word}はとても面白いです。`);
    // Simple descriptive sentences
    for (let i = 0; i < 3; i++) {
      const n = pick(nouns.length > 0 ? nouns : allValid);
      const adj = pick(adjs.length > 0 ? adjs : allValid);
      if (n && adj) {
        sentences.push(`${n.word}は${adj.word}です。`);
      }
    }
    const n2 = pick(nouns.length > 0 ? nouns : allValid);
    if (n2) sentences.push(`私は${n2.word}が好きです。`);
    const n3 = pick(nouns.length > 0 ? nouns : allValid);
    if (n3) sentences.push(`明日も${n3.word}を勉強します。`);

  } else if (level === 'N4') {
    sentences.push(`${openN.word}について考えてみましょう。`);
    sentences.push(`${openN.word}は日常生活の中で大切な役割を果たしています。`);
    for (let i = 0; i < 3; i++) {
      const n = pick(nouns.length > 0 ? nouns : allValid);
      const v = pick(verbs.length > 0 ? verbs : allValid);
      if (n && v) sentences.push(`例えば、${n.word}を${v.word}ことがあります。`);
    }
    const n2 = pick(nouns.length > 0 ? nouns : allValid);
    if (n2) sentences.push(`このように、${n2.word}は私たちの生活に欠かせません。`);
    sentences.push(`これからもっと詳しく学んでいきましょう。`);

  } else if (level === 'N3') {
    sentences.push(`${openN.word}について深く掘り下げて考えてみたいと思います。`);
    sentences.push(`現代社会において、${openN.word}は重要なテーマとなっています。`);
    for (let i = 0; i < 3; i++) {
      const n = pick(nouns.length > 0 ? nouns : allValid);
      const v = pick(verbs.length > 0 ? verbs : allValid);
      if (n && v) sentences.push(`特に${n.word}を${v.word}過程で、さまざまな発見がありました。`);
    }
    const n2 = pick(nouns.length > 0 ? nouns : allValid);
    if (n2) sentences.push(`${n2.word}についての理解を深めることができました。`);
    sentences.push(`今後も継続して学んでいきたいと思います。`);

  } else {
    // N2/N1 - more complex sentences
    sentences.push(`${openN.word}をめぐる議論は近年ますます活発になっています。`);
    sentences.push(`本稿では、${openN.word}の現状と課題について考察します。`);
    for (let i = 0; i < 3; i++) {
      const n = pick(nouns.length > 0 ? nouns : allValid);
      const v = pick(verbs.length > 0 ? verbs : allValid);
      if (n && v) {
        sentences.push(`一方で、${n.word}を${v.word}ことの重要性も指摘されています。`);
      }
    }
    const n2 = pick(nouns.length > 0 ? nouns : allValid);
    if (n2) sentences.push(`以上の考察から、${n2.word}の更なる発展が期待されます。`);
    sentences.push(`引き続き、この分野の動向に注目していく必要があるでしょう。`);
  }

  return sentences.join('\n');
}

// Generate Chinese translation
function generateTranslation(japanese, words) {
  if (!japanese) return '';
  // Simple word-level translation
  let translated = japanese;
  for (const w of words.slice(0, 10)) {
    translated = translated.replace(new RegExp(w.word, 'g'), w.meaning.split('；')[0].split('；')[0]);
  }
  // If translation is still mostly Japanese, generate a generic one
  if (/[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(translated.replace(/\n/g, '').slice(0, 20))) {
    return '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。';
  }
  return translated;
}

// ─── Main Generation ───────────────────────────────────────────────────

// Build a lookup of word -> reading from JMdict
const wordReadingMap = {};
const wordMeaningMap = {};
const wordLevelMap = {};
const wordPosMap = {};

for (const level of ['N5', 'N4', 'N3', 'N2', 'N1']) {
  for (const w of (wordsByLevel[level] || [])) {
    if (!wordReadingMap[w.word]) {
      wordReadingMap[w.word] = w.reading;
      wordMeaningMap[w.word] = w.meaning.split('；')[0];
      wordLevelMap[w.word] = level;
      wordPosMap[w.word] = w.pos;
    }
  }
}

// Map topic template topics to curated word list keys
const topicToWordList = {
  '生活・日常': '生活・日常',
  '食べ物・料理': '食べ物・料理',
  'テクノロジー': 'テクノロジー',
  '自然・科学': '自然・科学',
  'ビジネス・経済': 'ビジネス・経済',
  '宗教・文化': '宗教・文化',
  '身体・健康': '身体・健康',
  '言語・教育': '言語・教育',
  '交通・移動': '交通・移動',
  'スポーツ': 'スポーツ',
  '娯楽': '娯楽',
  'メディア': 'メディア',
  '仕事': '職場・仕事',
  '感情・心理': '人間関係・感情',
  '歴史': '歴史',
  '場所': '場所・風景',
};

const articles = [];
let articleId = 16;

for (const template of templates) {
  for (const level of template.levels) {
    // Get curated topic words
    const listKey = topicToWordList[template.topic] || template.topic;
    const curatedWords = topicWordLists[listKey] || [];
    
    // Build word objects with JMdict info
    const topicWordObjs = curatedWords
      .map(w => ({
        word: w,
        reading: wordReadingMap[w] || '',
        meaning: wordMeaningMap[w] || '',
        pos: wordPosMap[w] || '名詞',
        level: wordLevelMap[w] || level,
        topic: template.topic,
      }))
      .filter(w => w.reading && w.meaning);

    if (topicWordObjs.length < 5) continue;

    for (const title of template.titles) {
      const passageWords = pickRandomN(topicWordObjs, 20);
      const content = generatePassage(passageWords, level, template.topic);
      if (!content) continue;

      const translation = generateTranslation(content, passageWords);

      const usedWords = passageWords.filter(w => content.includes(w.word));
      const vocabulary = usedWords.slice(0, 10).map(w => ({
        word: w.word,
        reading: w.reading,
        meaning: w.meaning,
      }));

      if (vocabulary.length < 3) continue;

      articles.push({
        id: String(articleId),
        title: title,
        source: `${pickRandom(template.sources)} (${level})`,
        date: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        content: content,
        translation: translation,
        vocabulary: vocabulary,
      });

      articleId++;
      if (articleId >= 2000) break;
    }
    if (articleId >= 2000) break;
  }
  if (articleId >= 2000) break;
}

console.log(`Generated ${articles.length} articles`);

// ─── Write output ──────────────────────────────────────────────────────

const lines = [];
lines.push(`export interface ArticleVocabulary {`);
lines.push(`  word: string;`);
lines.push(`  reading: string;`);
lines.push(`  meaning: string;`);
lines.push(`}`);
lines.push('');
lines.push(`export interface Article {`);
lines.push(`  id: string;`);
lines.push(`  title: string;`);
lines.push(`  source: string;`);
lines.push(`  date: string;`);
lines.push(`  content: string;`);
lines.push(`  translation: string;`);
lines.push(`  vocabulary: ArticleVocabulary[];`);
lines.push(`}`);
lines.push('');

lines.push(`export const articles: Article[] = [`);

for (let i = 0; i < articles.length; i++) {
  const a = articles[i];
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');

  lines.push(`  {`);
  lines.push(`    id: '${a.id}',`);
  lines.push(`    title: '${esc(a.title)}',`);
  lines.push(`    source: '${esc(a.source)}',`);
  lines.push(`    date: '${a.date}',`);
  lines.push(`    content:`);
  lines.push(`      '${esc(a.content)}',`);
  lines.push(`    translation:`);
  lines.push(`      '${esc(a.translation)}',`);
  lines.push(`    vocabulary: [`);
  for (let j = 0; j < a.vocabulary.length; j++) {
    const v = a.vocabulary[j];
    const comma = j < a.vocabulary.length - 1 ? ',' : '';
    lines.push(`      { word: '${esc(v.word)}', reading: '${esc(v.reading)}', meaning: '${esc(v.meaning)}' }${comma}`);
  }
  lines.push(`    ],`);
  lines.push(`  },`);
}

lines.push(`];`);
lines.push('');
lines.push(`export function getRandomArticle(): Article {`);
lines.push(`  return articles[Math.floor(Math.random() * articles.length)];`);
lines.push(`}`);
lines.push('');
lines.push(`export function getArticlesByCount(count: number): Article[] {`);
lines.push(`  const shuffled = [...articles].sort(() => Math.random() - 0.5);`);
lines.push(`  return shuffled.slice(0, count);`);
lines.push(`}`);

const outputPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
fs.writeFileSync(outputPath, lines.join('\n'), 'utf-8');
console.log(`Written ${lines.length} lines to reading-data.ts`);