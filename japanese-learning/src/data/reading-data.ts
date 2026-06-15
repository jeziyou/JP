export interface ArticleVocabulary {
  word: string;
  reading: string;
  meaning: string;
}

export interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  content: string;
  translation: string;
  vocabulary: ArticleVocabulary[];
}

export const articles: Article[] = [
  {
    id: '16',
    title: '私の一日',
    source: '日常読解 (N5)',
    date: '2025-10-05',
    content:
      '車について話しましょう。\n車はとても面白いです。\n仕事は小さいです。\n車は低いです。\n仕事は便利です。\n私は友達が好きです。\n明日も家族を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '小さい', reading: 'ちいさい', meaning: 'small' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '17',
    title: '週末の過ごし方',
    source: '生活エッセイ (N5)',
    date: '2025-02-27',
    content:
      '写真について話しましょう。\n写真はとても面白いです。\n時は高いです。\n時は易しいです。\n靴は遅いです。\n私は料理が好きです。\n明日も友達を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '時', reading: 'とき', meaning: 'time' },
      { word: '易しい', reading: 'やさしい', meaning: 'easy' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '高い', reading: 'たかい', meaning: 'high' },
      { word: '遅い', reading: 'おそい', meaning: 'slow' }
    ],
  },
  {
    id: '18',
    title: '買い物の楽しみ',
    source: '生活エッセイ (N5)',
    date: '2025-12-01',
    content:
      '買い物について話しましょう。\n買い物はとても面白いです。\n電話は新しいです。\n旅行は新しいです。\n掃除は新しいです。\n私は靴が好きです。\n明日も旅行を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新しい', reading: 'あたらしい', meaning: 'new' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '掃除', reading: 'そうじ', meaning: 'cleaning' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' }
    ],
  },
  {
    id: '19',
    title: '料理の時間',
    source: '日常読解 (N5)',
    date: '2025-05-25',
    content:
      '写真について話しましょう。\n写真はとても面白いです。\n年は便利です。\n車は便利です。\n生活は便利です。\n私は生活が好きです。\n明日も旅行を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '年', reading: 'とし', meaning: 'year' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' }
    ],
  },
  {
    id: '20',
    title: '掃除の日',
    source: '日常読解 (N5)',
    date: '2025-12-01',
    content:
      '時間について話しましょう。\n時間はとても面白いです。\n洗濯は便利です。\n本は古いです。\n電車は良いです。\n私は洗濯が好きです。\n明日も時を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '古い', reading: 'ふるい', meaning: 'old' },
      { word: '良い', reading: 'よい', meaning: 'good' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '時', reading: 'とき', meaning: 'time' }
    ],
  },
  {
    id: '21',
    title: '朝の習慣',
    source: '日常読解 (N5)',
    date: '2025-11-13',
    content:
      '宿題について話しましょう。\n宿題はとても面白いです。\n店は寝るです。\n店は宿題です。\n写真は写真です。\n私は店が好きです。\n明日も天候を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '天候', reading: 'てんこう', meaning: 'weather' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' }
    ],
  },
  {
    id: '22',
    title: '通勤の風景',
    source: '生活エッセイ (N5)',
    date: '2025-08-21',
    content:
      '服について話しましょう。\n服はとても面白いです。\n朝は低いです。\n店は高いです。\n店は高いです。\n私は散歩が好きです。\n明日も朝を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '散歩', reading: 'さんぽ', meaning: 'walk' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '高い', reading: 'たかい', meaning: 'high' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' }
    ],
  },
  {
    id: '23',
    title: '家族との夕食',
    source: '生活エッセイ (N5)',
    date: '2025-08-08',
    content:
      '日について話しましょう。\n日はとても面白いです。\n駅は便利です。\n駅は便利です。\n服は便利です。\n私は駅が好きです。\n明日も服を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '駅', reading: 'えき', meaning: 'railway station' }
    ],
  },
  {
    id: '24',
    title: '休日の朝',
    source: '生活エッセイ (N5)',
    date: '2025-07-04',
    content:
      '公園について話しましょう。\n公園はとても面白いです。\n勉強は静かです。\n服は新しいです。\n電車は静かです。\n私は物が好きです。\n明日も服を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '静か', reading: 'しずか', meaning: 'quiet' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '新しい', reading: 'あたらしい', meaning: 'new' }
    ],
  },
  {
    id: '25',
    title: '寝る前の時間',
    source: '生活エッセイ (N5)',
    date: '2025-02-25',
    content:
      '旅行について話しましょう。\n旅行はとても面白いです。\n朝は遅いです。\n生活は良いです。\n朝は綺麗です。\n私は靴が好きです。\n明日も靴を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '綺麗', reading: 'きれい', meaning: 'pretty' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '良い', reading: 'よい', meaning: 'good' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '遅い', reading: 'おそい', meaning: 'slow' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' }
    ],
  },
  {
    id: '26',
    title: '近所の公園',
    source: '生活エッセイ (N5)',
    date: '2025-10-10',
    content:
      '夜について話しましょう。\n夜はとても面白いです。\n宿題は本です。\n友達は店です。\n家族は本です。\n私は時間が好きです。\n明日も道を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '夜', reading: 'よる', meaning: 'night' },
      { word: '店', reading: 'みせ', meaning: 'store' }
    ],
  },
  {
    id: '27',
    title: '散歩の楽しみ',
    source: '日常読解 (N5)',
    date: '2025-11-27',
    content:
      '駅について話しましょう。\n駅はとても面白いです。\n駅は嫌いです。\n電車は静かです。\n駅は低いです。\n私は買い物が好きです。\n明日も店を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '嫌い', reading: 'きらい', meaning: 'disliked' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '静か', reading: 'しずか', meaning: 'quiet' }
    ],
  },
  {
    id: '28',
    title: 'ペットとの生活',
    source: '日常読解 (N5)',
    date: '2025-02-13',
    content:
      '事について話しましょう。\n事はとても面白いです。\n駅は低いです。\n友達は低いです。\n旅行は低いです。\n私は旅行が好きです。\n明日も事を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' }
    ],
  },
  {
    id: '29',
    title: '日曜大工',
    source: '生活エッセイ (N5)',
    date: '2025-10-10',
    content:
      '天気について話しましょう。\n天気はとても面白いです。\n天候は難しいです。\n宿題は難しいです。\n駅は難しいです。\n私は駅が好きです。\n明日も仕事を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '天候', reading: 'てんこう', meaning: 'weather' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '難しい', reading: 'むずかしい', meaning: 'difficult' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '30',
    title: '庭の手入れ',
    source: '生活エッセイ (N5)',
    date: '2025-04-05',
    content:
      '車について話しましょう。\n車はとても面白いです。\n旅行は綺麗です。\n車は嫌いです。\n旅行は低いです。\n私は天気が好きです。\n明日も天気を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '綺麗', reading: 'きれい', meaning: 'pretty' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '嫌い', reading: 'きらい', meaning: 'disliked' }
    ],
  },
  {
    id: '31',
    title: '引っ越しの準備',
    source: '日常読解 (N5)',
    date: '2025-03-20',
    content:
      '靴について話しましょう。\n靴はとても面白いです。\n買い物は買い物です。\n買い物は買い物です。\n時間は覚えるです。\n私は買い物が好きです。\n明日も店を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '店', reading: 'みせ', meaning: 'store' }
    ],
  },
  {
    id: '32',
    title: '新しい家具',
    source: '生活エッセイ (N5)',
    date: '2025-04-05',
    content:
      '車について話しましょう。\n車はとても面白いです。\n掃除は高いです。\n車は短いです。\n靴は高いです。\n私は友達が好きです。\n明日も車を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '掃除', reading: 'そうじ', meaning: 'cleaning' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '短い', reading: 'みじかい', meaning: 'short' },
      { word: '高い', reading: 'たかい', meaning: 'high' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' }
    ],
  },
  {
    id: '33',
    title: '洗濯のコツ',
    source: '日常読解 (N5)',
    date: '2025-12-22',
    content:
      '天候について話しましょう。\n天候はとても面白いです。\n天候は少ないです。\n公園は多いです。\n天候は少ないです。\n私は朝が好きです。\n明日も天候を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '天候', reading: 'てんこう', meaning: 'weather' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '少ない', reading: 'すくない', meaning: 'few' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '多い', reading: 'おおい', meaning: 'many' }
    ],
  },
  {
    id: '34',
    title: '朝食のメニュー',
    source: '日常読解 (N5)',
    date: '2025-02-07',
    content:
      '掃除について話しましょう。\n掃除はとても面白いです。\n料理は易しいです。\n仕事は易しいです。\n旅行は易しいです。\n私は写真が好きです。\n明日も旅行を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '掃除', reading: 'そうじ', meaning: 'cleaning' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '易しい', reading: 'やさしい', meaning: 'easy' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' }
    ],
  },
  {
    id: '35',
    title: '夜の過ごし方',
    source: '日常読解 (N5)',
    date: '2025-03-10',
    content:
      '洗濯について話しましょう。\n洗濯はとても面白いです。\n服は洗濯です。\n公園は続けるです。\n買い物は旅行です。\n私は鞄が好きです。\n明日も宿題を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '鞄', reading: 'かばん', meaning: 'bag' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' }
    ],
  },
  {
    id: '36',
    title: '友達との約束',
    source: '日常読解 (N5)',
    date: '2025-04-14',
    content:
      '手紙について話しましょう。\n手紙はとても面白いです。\n時間は上手です。\n時間は悲しいです。\n仕事は悲しいです。\n私は店が好きです。\n明日も手紙を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '悲しい', reading: 'かなしい', meaning: 'sad' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '上手', reading: 'じょうず', meaning: 'skillful' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '時間', reading: 'じかん', meaning: 'time' }
    ],
  },
  {
    id: '37',
    title: '雨の日の過ごし方',
    source: '日常読解 (N5)',
    date: '2025-08-20',
    content:
      '生活について話しましょう。\n生活はとても面白いです。\n服は綺麗です。\n服は静かです。\n本は静かです。\n私は駅が好きです。\n明日も本を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '綺麗', reading: 'きれい', meaning: 'pretty' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '静か', reading: 'しずか', meaning: 'quiet' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '本', reading: 'ほん', meaning: 'book' }
    ],
  },
  {
    id: '38',
    title: '部屋の模様替え',
    source: '日常読解 (N5)',
    date: '2025-08-22',
    content:
      '写真について話しましょう。\n写真はとても面白いです。\n買い物は低いです。\n靴は低いです。\n買い物は低いです。\n私は鞄が好きです。\n明日も手紙を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '鞄', reading: 'かばん', meaning: 'bag' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' }
    ],
  },
  {
    id: '39',
    title: '郵便局へ行く',
    source: '日常読解 (N5)',
    date: '2025-06-07',
    content:
      '友達について話しましょう。\n友達はとても面白いです。\n服は古いです。\n道は元気です。\n勉強は楽しいです。\n私は車が好きです。\n明日も時を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しい', reading: 'たのしい', meaning: 'enjoyable' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '時', reading: 'とき', meaning: 'time' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '古い', reading: 'ふるい', meaning: 'old' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '元気', reading: 'げんき', meaning: 'lively' }
    ],
  },
  {
    id: '40',
    title: '銀行の利用',
    source: '日常読解 (N5)',
    date: '2025-09-12',
    content:
      '駅について話しましょう。\n駅はとても面白いです。\n店は悪いです。\n生活は悪いです。\n店は悪いです。\n私は道が好きです。\n明日も物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '悪い', reading: 'わるい', meaning: 'bad' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '道', reading: 'みち', meaning: 'road' }
    ],
  },
  {
    id: '41',
    title: 'ごみの分別',
    source: '生活エッセイ (N5)',
    date: '2025-02-14',
    content:
      '電車について話しましょう。\n電車はとても面白いです。\n仕事は短いです。\n料理は高いです。\n買い物は短いです。\n私は事が好きです。\n明日も生活を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '高い', reading: 'たかい', meaning: 'high' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '短い', reading: 'みじかい', meaning: 'short' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '42',
    title: '節約のコツ',
    source: '日常読解 (N5)',
    date: '2025-07-04',
    content:
      '手紙について話しましょう。\n手紙はとても面白いです。\n手紙は小さいです。\n年は難しいです。\n本は難しいです。\n私は店が好きです。\n明日も道を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '年', reading: 'とし', meaning: 'year' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '難しい', reading: 'むずかしい', meaning: 'difficult' },
      { word: '小さい', reading: 'ちいさい', meaning: 'small' },
      { word: '本', reading: 'ほん', meaning: 'book' }
    ],
  },
  {
    id: '43',
    title: '手紙を書く',
    source: '生活エッセイ (N5)',
    date: '2025-02-17',
    content:
      '散歩について話しましょう。\n散歩はとても面白いです。\n仕事は低いです。\n散歩は低いです。\n買い物は綺麗です。\n私は仕事が好きです。\n明日も家族を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '低い', reading: 'ひくい', meaning: 'low (rank, degree, value, content, quality, etc.)' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '綺麗', reading: 'きれい', meaning: 'pretty' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '散歩', reading: 'さんぽ', meaning: 'walk' }
    ],
  },
  {
    id: '44',
    title: '地域の行事',
    source: '生活エッセイ (N5)',
    date: '2025-02-16',
    content:
      '靴について話しましょう。\n靴はとても面白いです。\n靴は古いです。\n電車は忙しいです。\n日は元気です。\n私は友達が好きです。\n明日も車を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '元気', reading: 'げんき', meaning: 'lively' },
      { word: '古い', reading: 'ふるい', meaning: 'old' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '忙しい', reading: 'いそがしい', meaning: 'busy' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' }
    ],
  },
  {
    id: '45',
    title: '隣の人との交流',
    source: '生活エッセイ (N5)',
    date: '2025-09-20',
    content:
      '朝について話しましょう。\n朝はとても面白いです。\n洗濯は早いです。\n車は早いです。\n掃除は早いです。\n私は宿題が好きです。\n明日も宿題を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '掃除', reading: 'そうじ', meaning: 'cleaning' },
      { word: '早い', reading: 'はやい', meaning: 'fast' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' }
    ],
  },
  {
    id: '46',
    title: '私の一日',
    source: '日常読解 (N4)',
    date: '2025-08-20',
    content:
      '散歩について考えてみましょう。\n散歩は日常生活の中で大切な役割を果たしています。\n例えば、散歩を脱ぐことがあります。\n例えば、散歩を閉めることがあります。\n例えば、散歩を乾かすことがあります。\nこのように、電車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乾かす', reading: 'かわかす', meaning: 'to dry (clothes, etc.)' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '脱ぐ', reading: 'ぬぐ', meaning: 'to take off (clothes, shoes, etc.)' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' },
      { word: '散歩', reading: 'さんぽ', meaning: 'walk' }
    ],
  },
  {
    id: '47',
    title: '週末の過ごし方',
    source: '生活エッセイ (N4)',
    date: '2025-02-20',
    content:
      '店について考えてみましょう。\n店は日常生活の中で大切な役割を果たしています。\n例えば、夜を閉めることがあります。\n例えば、店を来ることがあります。\n例えば、家族を考えることがあります。\nこのように、車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' },
      { word: '夜', reading: 'よる', meaning: 'night' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '家', reading: 'いえ', meaning: 'house' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '車', reading: 'くるま', meaning: 'car' }
    ],
  },
  {
    id: '48',
    title: '買い物の楽しみ',
    source: '生活エッセイ (N4)',
    date: '2025-11-12',
    content:
      '買い物について考えてみましょう。\n買い物は日常生活の中で大切な役割を果たしています。\n例えば、洗濯を来ることがあります。\n例えば、電車を会うことがあります。\n例えば、買い物を忘れることがあります。\nこのように、電車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' }
    ],
  },
  {
    id: '49',
    title: '料理の時間',
    source: '日常読解 (N4)',
    date: '2025-01-16',
    content:
      '朝について考えてみましょう。\n朝は日常生活の中で大切な役割を果たしています。\n例えば、仕事を作ることがあります。\n例えば、駅を会うことがあります。\n例えば、車を覚えることがあります。\nこのように、店は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '50',
    title: '掃除の日',
    source: '日常読解 (N4)',
    date: '2025-06-26',
    content:
      '店について考えてみましょう。\n店は日常生活の中で大切な役割を果たしています。\n例えば、勉強を来ることがあります。\n例えば、本を来ることがあります。\n例えば、手紙を来ることがあります。\nこのように、物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' }
    ],
  },
  {
    id: '51',
    title: '朝の習慣',
    source: '日常読解 (N4)',
    date: '2025-07-20',
    content:
      '友達について考えてみましょう。\n友達は日常生活の中で大切な役割を果たしています。\n例えば、電話を来ることがあります。\n例えば、生活を開けることがあります。\n例えば、勉強を見ることがあります。\nこのように、写真は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '開ける', reading: 'あける', meaning: 'to open (a door, etc.)' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' }
    ],
  },
  {
    id: '52',
    title: '通勤の風景',
    source: '生活エッセイ (N4)',
    date: '2025-04-22',
    content:
      '電話について考えてみましょう。\n電話は日常生活の中で大切な役割を果たしています。\n例えば、電話を起きることがあります。\n例えば、電話を作ることがあります。\n例えば、散歩を起きることがあります。\nこのように、電話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起きる', reading: 'おきる', meaning: 'to get up' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '散歩', reading: 'さんぽ', meaning: 'walk' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' }
    ],
  },
  {
    id: '53',
    title: '家族との夕食',
    source: '日常読解 (N4)',
    date: '2025-01-03',
    content:
      '店について考えてみましょう。\n店は日常生活の中で大切な役割を果たしています。\n例えば、電話を聞くことがあります。\n例えば、電車を作ることがあります。\n例えば、宿題を洗うことがあります。\nこのように、店は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '洗う', reading: 'あらう', meaning: 'to wash' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' }
    ],
  },
  {
    id: '54',
    title: '休日の朝',
    source: '日常読解 (N4)',
    date: '2025-06-14',
    content:
      '毎日について考えてみましょう。\n毎日は日常生活の中で大切な役割を果たしています。\n例えば、駅を話すことがあります。\n例えば、天候を話すことがあります。\n例えば、公園を聞くことがあります。\nこのように、毎日は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '天候', reading: 'てんこう', meaning: 'weather' },
      { word: '天', reading: 'てん', meaning: 'sky' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '毎日', reading: 'まいにち', meaning: 'every day' }
    ],
  },
  {
    id: '55',
    title: '寝る前の時間',
    source: '日常読解 (N4)',
    date: '2025-05-13',
    content:
      '料理について考えてみましょう。\n料理は日常生活の中で大切な役割を果たしています。\n例えば、日を片付けることがあります。\n例えば、年を歩くことがあります。\n例えば、時間を片付けることがあります。\nこのように、駅は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '年', reading: 'とし', meaning: 'year' },
      { word: '片付ける', reading: 'かたづける', meaning: 'to put in order' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '時間', reading: 'じかん', meaning: 'time' }
    ],
  },
  {
    id: '56',
    title: '近所の公園',
    source: '日常読解 (N4)',
    date: '2025-01-23',
    content:
      '旅行について考えてみましょう。\n旅行は日常生活の中で大切な役割を果たしています。\n例えば、旅行を話すことがあります。\n例えば、旅行を話すことがあります。\n例えば、料理を使うことがあります。\nこのように、物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' }
    ],
  },
  {
    id: '57',
    title: '散歩の楽しみ',
    source: '生活エッセイ (N4)',
    date: '2025-05-02',
    content:
      '服について考えてみましょう。\n服は日常生活の中で大切な役割を果たしています。\n例えば、時間を入ることがあります。\n例えば、電車を入ることがあります。\n例えば、手紙を入ることがあります。\nこのように、手紙は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '時', reading: 'とき', meaning: 'time' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '入る', reading: 'いる', meaning: 'to enter' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '時間', reading: 'じかん', meaning: 'time' }
    ],
  },
  {
    id: '58',
    title: 'ペットとの生活',
    source: '日常読解 (N4)',
    date: '2025-07-25',
    content:
      '服について考えてみましょう。\n服は日常生活の中で大切な役割を果たしています。\n例えば、写真を見ることがあります。\n例えば、電話を直すことがあります。\n例えば、宿題を出ることがあります。\nこのように、服は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '日', reading: 'ひ', meaning: 'day' }
    ],
  },
  {
    id: '59',
    title: '日曜大工',
    source: '生活エッセイ (N4)',
    date: '2025-03-06',
    content:
      '物について考えてみましょう。\n物は日常生活の中で大切な役割を果たしています。\n例えば、友達を閉めることがあります。\n例えば、物を続けることがあります。\n例えば、家族を思うことがあります。\nこのように、物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '思う', reading: 'おもう', meaning: 'to think' }
    ],
  },
  {
    id: '60',
    title: '庭の手入れ',
    source: '日常読解 (N4)',
    date: '2025-02-23',
    content:
      '車について考えてみましょう。\n車は日常生活の中で大切な役割を果たしています。\n例えば、毎日を片付けることがあります。\n例えば、料理を片付けることがあります。\n例えば、本を閉めることがあります。\nこのように、電車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '片付ける', reading: 'かたづける', meaning: 'to put in order' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '毎日', reading: 'まいにち', meaning: 'every day' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '車', reading: 'くるま', meaning: 'car' }
    ],
  },
  {
    id: '61',
    title: '引っ越しの準備',
    source: '日常読解 (N4)',
    date: '2025-02-01',
    content:
      '事について考えてみましょう。\n事は日常生活の中で大切な役割を果たしています。\n例えば、電話を考えることがあります。\n例えば、生活を入ることがあります。\n例えば、天気を行くことがあります。\nこのように、時間は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '入る', reading: 'いる', meaning: 'to enter' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '事', reading: 'こと', meaning: 'thing' }
    ],
  },
  {
    id: '62',
    title: '新しい家具',
    source: '日常読解 (N4)',
    date: '2025-02-07',
    content:
      '宿題について考えてみましょう。\n宿題は日常生活の中で大切な役割を果たしています。\n例えば、仕事を閉めることがあります。\n例えば、料理を洗うことがあります。\n例えば、仕事を着ることがあります。\nこのように、家は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '家', reading: 'いえ', meaning: 'house' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' },
      { word: '宿題', reading: 'しゅくだい', meaning: 'homework' },
      { word: '洗う', reading: 'あらう', meaning: 'to wash' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '着る', reading: 'きる', meaning: 'to wear (from the shoulders down)' }
    ],
  },
  {
    id: '63',
    title: '洗濯のコツ',
    source: '生活エッセイ (N4)',
    date: '2025-02-23',
    content:
      '天について考えてみましょう。\n天は日常生活の中で大切な役割を果たしています。\n例えば、店を夜ことがあります。\n例えば、家族を駅ことがあります。\n例えば、店を店ことがあります。\nこのように、買い物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '夜', reading: 'よる', meaning: 'night' },
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '買い物', reading: 'かいもの', meaning: 'shopping' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '天', reading: 'てん', meaning: 'sky' }
    ],
  },
  {
    id: '64',
    title: '朝食のメニュー',
    source: '生活エッセイ (N4)',
    date: '2025-04-16',
    content:
      '靴について考えてみましょう。\n靴は日常生活の中で大切な役割を果たしています。\n例えば、家を閉めることがあります。\n例えば、家を起きることがあります。\n例えば、友達を起きることがあります。\nこのように、服は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '服', reading: 'ふく', meaning: 'clothes (esp. Western clothes)' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '家', reading: 'いえ', meaning: 'house' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '起きる', reading: 'おきる', meaning: 'to get up' },
      { word: '閉める', reading: 'しめる', meaning: 'to close' }
    ],
  },
  {
    id: '65',
    title: '夜の過ごし方',
    source: '生活エッセイ (N4)',
    date: '2025-06-08',
    content:
      '駅について考えてみましょう。\n駅は日常生活の中で大切な役割を果たしています。\n例えば、日を出来ることがあります。\n例えば、夜を会うことがあります。\n例えば、駅を歩くことがあります。\nこのように、夜は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: 'day' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '夜', reading: 'よる', meaning: 'night' },
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '出来る', reading: 'できる', meaning: 'to be able to do' },
      { word: '駅', reading: 'えき', meaning: 'railway station' }
    ],
  },
  {
    id: '66',
    title: '友達との約束',
    source: '日常読解 (N4)',
    date: '2025-01-24',
    content:
      '友達について考えてみましょう。\n友達は日常生活の中で大切な役割を果たしています。\n例えば、道を作ることがあります。\n例えば、写真を始めることがあります。\n例えば、友達を飲むことがあります。\nこのように、写真は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' }
    ],
  },
  {
    id: '67',
    title: '雨の日の過ごし方',
    source: '生活エッセイ (N4)',
    date: '2025-06-13',
    content:
      '駅について考えてみましょう。\n駅は日常生活の中で大切な役割を果たしています。\n例えば、家族を洗うことがあります。\n例えば、家族を帰ることがあります。\n例えば、駅を知ることがあります。\nこのように、写真は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '洗う', reading: 'あらう', meaning: 'to wash' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' }
    ],
  },
  {
    id: '68',
    title: '部屋の模様替え',
    source: '生活エッセイ (N4)',
    date: '2025-05-20',
    content:
      '時間について考えてみましょう。\n時間は日常生活の中で大切な役割を果たしています。\n例えば、手紙を食べることがあります。\n例えば、店を食べることがあります。\n例えば、事を食べることがあります。\nこのように、旅行は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '旅行', reading: 'りょこう', meaning: 'travel' },
      { word: '店', reading: 'みせ', meaning: 'store' }
    ],
  },
  {
    id: '69',
    title: '郵便局へ行く',
    source: '生活エッセイ (N4)',
    date: '2025-12-09',
    content:
      '電話について考えてみましょう。\n電話は日常生活の中で大切な役割を果たしています。\n例えば、鞄を考えることがあります。\n例えば、靴を行くことがあります。\n例えば、料理を入ることがあります。\nこのように、年は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '入る', reading: 'いる', meaning: 'to enter' },
      { word: '靴', reading: 'くつ', meaning: 'shoe' },
      { word: '鞄', reading: 'かばん', meaning: 'bag' },
      { word: '年', reading: 'とし', meaning: 'year' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '行く', reading: 'いく', meaning: 'to go' }
    ],
  },
  {
    id: '70',
    title: '銀行の利用',
    source: '日常読解 (N4)',
    date: '2025-04-15',
    content:
      '生活について考えてみましょう。\n生活は日常生活の中で大切な役割を果たしています。\n例えば、友達を会うことがあります。\n例えば、洗濯を書くことがあります。\n例えば、事を起きることがあります。\nこのように、友達は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '起きる', reading: 'おきる', meaning: 'to get up' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '洗濯', reading: 'せんたく', meaning: 'washing' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' }
    ],
  },
  {
    id: '71',
    title: 'ごみの分別',
    source: '日常読解 (N4)',
    date: '2025-12-15',
    content:
      '事について考えてみましょう。\n事は日常生活の中で大切な役割を果たしています。\n例えば、天を行くことがあります。\n例えば、夜を会うことがあります。\n例えば、事を行くことがあります。\nこのように、時は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '天', reading: 'てん', meaning: 'sky' },
      { word: '事', reading: 'こと', meaning: 'thing' },
      { word: '時', reading: 'とき', meaning: 'time' },
      { word: '夜', reading: 'よる', meaning: 'night' }
    ],
  },
  {
    id: '72',
    title: '節約のコツ',
    source: '生活エッセイ (N4)',
    date: '2025-08-14',
    content:
      '公園について考えてみましょう。\n公園は日常生活の中で大切な役割を果たしています。\n例えば、朝を見ることがあります。\n例えば、道を買うことがあります。\n例えば、時を待つことがあります。\nこのように、朝は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '待つ', reading: 'まつ', meaning: 'to wait' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '朝', reading: 'あさ', meaning: 'morning' },
      { word: '買う', reading: 'かう', meaning: 'to buy' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '時', reading: 'とき', meaning: 'time' }
    ],
  },
  {
    id: '73',
    title: '手紙を書く',
    source: '日常読解 (N4)',
    date: '2025-10-28',
    content:
      '勉強について考えてみましょう。\n勉強は日常生活の中で大切な役割を果たしています。\n例えば、勉強を出来ることがあります。\n例えば、手紙を読むことがあります。\n例えば、物を読むことがあります。\nこのように、駅は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '出来る', reading: 'できる', meaning: 'to be able to do' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '物', reading: 'もの', meaning: 'thing' },
      { word: '駅', reading: 'えき', meaning: 'railway station' }
    ],
  },
  {
    id: '74',
    title: '地域の行事',
    source: '日常読解 (N4)',
    date: '2025-09-15',
    content:
      '生活について考えてみましょう。\n生活は日常生活の中で大切な役割を果たしています。\n例えば、道を会うことがあります。\n例えば、写真を書くことがあります。\n例えば、手紙を買うことがあります。\nこのように、電話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '会う', reading: 'あう', meaning: 'to meet' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '生活', reading: 'せいかつ', meaning: 'life' },
      { word: '手紙', reading: 'てがみ', meaning: 'letter' },
      { word: '買う', reading: 'かう', meaning: 'to buy' },
      { word: '道', reading: 'みち', meaning: 'road' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' }
    ],
  },
  {
    id: '75',
    title: '隣の人との交流',
    source: '生活エッセイ (N4)',
    date: '2025-02-25',
    content:
      '家について考えてみましょう。\n家は日常生活の中で大切な役割を果たしています。\n例えば、家族を出ることがあります。\n例えば、家族を開けることがあります。\n例えば、家族を考えることがあります。\nこのように、家族は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '家族', reading: 'かぞく', meaning: 'family' },
      { word: '家', reading: 'いえ', meaning: 'house' },
      { word: '開ける', reading: 'あける', meaning: 'to open (a door, etc.)' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' }
    ],
  },
  {
    id: '76',
    title: '和食の魅力',
    source: 'グルメエッセイ (N5)',
    date: '2025-10-18',
    content:
      '味について話しましょう。\n味はとても面白いです。\n居酒屋は新鮮です。\n包丁は新鮮です。\n水は塩辛いです。\n私は味が好きです。\n明日も居酒屋を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '塩', reading: 'しお', meaning: 'salt' }
    ],
  },
  {
    id: '77',
    title: '寿司の歴史',
    source: 'グルメエッセイ (N5)',
    date: '2025-11-13',
    content:
      '八百屋について話しましょう。\n八百屋はとても面白いです。\n朝食は塩辛いです。\nパンは塩辛いです。\n油は辛いです。\n私は果物が好きです。\n明日も食堂を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '油', reading: 'あぶら', meaning: 'oil' }
    ],
  },
  {
    id: '78',
    title: 'ラーメン巡り',
    source: '食文化読解 (N5)',
    date: '2025-06-24',
    content:
      '麺について話しましょう。\n麺はとても面白いです。\n昼食は塩辛いです。\n料理は冷たいです。\nご飯は塩辛いです。\n私は酒が好きです。\n明日も昼食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '冷たい', reading: 'つめたい', meaning: 'cold (to the touch)' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' }
    ],
  },
  {
    id: '79',
    title: 'お弁当作り',
    source: '食文化読解 (N5)',
    date: '2025-03-09',
    content:
      '果物について話しましょう。\n果物はとても面白いです。\n味は塩です。\n包丁は果物です。\n台所は砂糖です。\n私は台所が好きです。\n明日も肉を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '味', reading: 'あじ', meaning: 'flavor' }
    ],
  },
  {
    id: '80',
    title: '日本の果物',
    source: '食文化読解 (N5)',
    date: '2025-01-21',
    content:
      '料理について話しましょう。\n料理はとても面白いです。\n材料は甘いです。\nパンは美味しいです。\nパンは甘いです。\n私は台所が好きです。\n明日も調味料を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '甘い', reading: 'あまい', meaning: 'sweet-tasting' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' }
    ],
  },
  {
    id: '81',
    title: '抹茶の世界',
    source: '食文化読解 (N5)',
    date: '2025-09-04',
    content:
      '酢について話しましょう。\n酢はとても面白いです。\n野菜は辛いです。\n調味料は硬いです。\n麺は美味しいです。\n私はコンビニが好きです。\n明日もコンビニを勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '硬い', reading: 'かたい', meaning: 'hard' },
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' }
    ],
  },
  {
    id: '82',
    title: '和菓子の美しさ',
    source: '食文化読解 (N5)',
    date: '2025-05-04',
    content:
      'お茶について話しましょう。\nお茶はとても面白いです。\n材料は甘いです。\n魚は熱いです。\n皿は甘いです。\n私は食べ物が好きです。\n明日も味を勉強します。',
    translation:
      'tea (esp. green or barley)について話しましょう。\ntea (esp. green or barley)はとても面白いです。\n材料は甘いです。\nfishはhot (to the touch)です。\nplateは甘いです。\n私は食べ物が好きです。\n明日も味を勉強します。',
    vocabulary: [
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '甘い', reading: 'あまい', meaning: 'sweet-tasting' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' }
    ],
  },
  {
    id: '83',
    title: '鍋料理の季節',
    source: 'グルメエッセイ (N5)',
    date: '2025-08-11',
    content:
      '昼食について話しましょう。\n昼食はとても面白いです。\n台所は辛いです。\n朝食は冷たいです。\n料理は新鮮です。\n私は喫茶店が好きです。\n明日も喫茶店を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '冷たい', reading: 'つめたい', meaning: 'cold (to the touch)' }
    ],
  },
  {
    id: '84',
    title: '屋台の食べ物',
    source: '食文化読解 (N5)',
    date: '2025-05-25',
    content:
      'パンについて話しましょう。\nパンはとても面白いです。\n水は熱いです。\n料理は熱いです。\n魚は新鮮です。\n私は果物が好きです。\n明日も料理を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '魚', reading: 'さかな', meaning: 'fish' }
    ],
  },
  {
    id: '85',
    title: '朝ごはんの文化',
    source: '食文化読解 (N5)',
    date: '2025-07-11',
    content:
      '砂糖について話しましょう。\n砂糖はとても面白いです。\n果物は塩辛いです。\n夕食は美味しいです。\n市場は柔らかいです。\n私は夕食が好きです。\n明日も台所を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' }
    ],
  },
  {
    id: '86',
    title: '味噌汁の作り方',
    source: '食文化読解 (N5)',
    date: '2025-05-25',
    content:
      '米について話しましょう。\n米はとても面白いです。\n箸は熱いです。\n果物は熱いです。\n調味料は熱いです。\n私はコンビニが好きです。\n明日も水を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' }
    ],
  },
  {
    id: '87',
    title: 'おにぎりの種類',
    source: '食文化読解 (N5)',
    date: '2025-10-25',
    content:
      'パンについて話しましょう。\nパンはとても面白いです。\n朝食は果物です。\n酒は砂糖です。\n砂糖は野菜です。\n私は酒が好きです。\n明日も朝食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' }
    ],
  },
  {
    id: '88',
    title: '天ぷらの秘密',
    source: 'グルメエッセイ (N5)',
    date: '2025-08-19',
    content:
      '食事について話しましょう。\n食事はとても面白いです。\n食べ物は熱いです。\n料理は苦いです。\n魚は熱いです。\n私は材料が好きです。\n明日も食べ物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '魚', reading: 'さかな', meaning: 'fish' }
    ],
  },
  {
    id: '89',
    title: 'そばとうどん',
    source: 'グルメエッセイ (N5)',
    date: '2025-04-07',
    content:
      'レストランについて話しましょう。\nレストランはとても面白いです。\nパン屋は美味しいです。\n冷蔵庫は美味しいです。\n魚は甘いです。\n私は酒が好きです。\n明日も喫茶店を勉強します。',
    translation:
      'restaurant (esp. Western-style)について話しましょう。\nrestaurant (esp. Western-style)はとても面白いです。\nパン屋はgood(-tasting)です。\nrefrigeratorはgood(-tasting)です。\n魚は甘いです。\n私は酒が好きです。\n明日もcoffee shopを勉強します。',
    vocabulary: [
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '甘い', reading: 'あまい', meaning: 'sweet-tasting' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' }
    ],
  },
  {
    id: '90',
    title: '焼き鳥の楽しみ',
    source: '食文化読解 (N5)',
    date: '2025-09-14',
    content:
      '酢について話しましょう。\n酢はとても面白いです。\n冷蔵庫は塩辛いです。\nパンは柔らかいです。\nパンは柔らかいです。\n私は料理が好きです。\n明日も料理を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' }
    ],
  },
  {
    id: '91',
    title: '刺身の食べ方',
    source: '食文化読解 (N5)',
    date: '2025-02-02',
    content:
      '料理について話しましょう。\n料理はとても面白いです。\n鍋は苦いです。\n市場は苦いです。\n魚は熱いです。\n私は食堂が好きです。\n明日も市場を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' }
    ],
  },
  {
    id: '92',
    title: '日本酒入門',
    source: '食文化読解 (N5)',
    date: '2025-02-28',
    content:
      '味噌について話しましょう。\n味噌はとても面白いです。\n魚屋は甘いです。\n料理は美味しいです。\n味は苦いです。\n私は魚が好きです。\n明日も皿を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '甘い', reading: 'あまい', meaning: 'sweet-tasting' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' }
    ],
  },
  {
    id: '93',
    title: 'お茶の種類',
    source: 'グルメエッセイ (N5)',
    date: '2025-05-23',
    content:
      '麺について話しましょう。\n麺はとても面白いです。\n冷蔵庫は美味しいです。\n卵は苦いです。\n材料は美味しいです。\n私は水が好きです。\n明日も鍋を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' }
    ],
  },
  {
    id: '94',
    title: '駅弁の旅',
    source: '食文化読解 (N5)',
    date: '2025-04-14',
    content:
      '喫茶店について話しましょう。\n喫茶店はとても面白いです。\n喫茶店は美味しいです。\n食堂は美味しいです。\n肉は熱いです。\n私は茶碗が好きです。\n明日も肉を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' }
    ],
  },
  {
    id: '95',
    title: '家庭料理の思い出',
    source: 'グルメエッセイ (N5)',
    date: '2025-05-10',
    content:
      '油について話しましょう。\n油はとても面白いです。\n味噌は新鮮です。\n酢は新鮮です。\n味は新鮮です。\n私は酢が好きです。\n明日も酒を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '酢', reading: 'す', meaning: 'vinegar' }
    ],
  },
  {
    id: '96',
    title: 'カレーライス',
    source: '食文化読解 (N5)',
    date: '2025-05-04',
    content:
      '居酒屋について話しましょう。\n居酒屋はとても面白いです。\n塩は柔らかいです。\n肉は苦いです。\n調味料は柔らかいです。\n私は香りが好きです。\n明日も塩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' },
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '香り', reading: 'かおり', meaning: 'aroma' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' }
    ],
  },
  {
    id: '97',
    title: 'たこ焼き作り',
    source: 'グルメエッセイ (N5)',
    date: '2025-01-27',
    content:
      '食堂について話しましょう。\n食堂はとても面白いです。\n飲み物は塩辛いです。\n冷蔵庫は塩辛いです。\nパン屋は塩辛いです。\n私は肉が好きです。\n明日も飲み物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '塩', reading: 'しお', meaning: 'salt' }
    ],
  },
  {
    id: '98',
    title: 'お好み焼き',
    source: '食文化読解 (N5)',
    date: '2025-06-08',
    content:
      '居酒屋について話しましょう。\n居酒屋はとても面白いです。\n肉は冷たいです。\n水は柔らかいです。\n冷蔵庫は美味しいです。\n私は冷蔵庫が好きです。\n明日も茶碗を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '冷たい', reading: 'つめたい', meaning: 'cold (to the touch)' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '美味しい', reading: 'おいしい', meaning: 'good(-tasting)' },
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' }
    ],
  },
  {
    id: '99',
    title: '漬物の種類',
    source: 'グルメエッセイ (N5)',
    date: '2025-06-13',
    content:
      '肉について話しましょう。\n肉はとても面白いです。\n味噌は茶碗です。\n味噌は包丁です。\n砂糖は飲み物です。\n私は皿が好きです。\n明日も卵を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' }
    ],
  },
  {
    id: '100',
    title: 'スイーツ巡り',
    source: 'グルメエッセイ (N5)',
    date: '2025-10-01',
    content:
      '昼食について話しましょう。\n昼食はとても面白いです。\n朝食は辛いです。\nご飯は熱いです。\n砂糖は塩辛いです。\n私は喫茶店が好きです。\n明日も果物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' }
    ],
  },
  {
    id: '101',
    title: '居酒屋の楽しみ',
    source: '食文化読解 (N5)',
    date: '2025-02-04',
    content:
      '食べ物について話しましょう。\n食べ物はとても面白いです。\n酢は新鮮です。\n茶碗は塩辛いです。\n野菜は塩辛いです。\n私はレストランが好きです。\n明日も夕食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '塩辛い', reading: 'しおからい', meaning: 'salty (taste)' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' }
    ],
  },
  {
    id: '102',
    title: '回転寿司',
    source: '食文化読解 (N5)',
    date: '2025-09-10',
    content:
      '居酒屋について話しましょう。\n居酒屋はとても面白いです。\n酒は新鮮です。\n味噌は新鮮です。\n砂糖は苦いです。\n私は酒が好きです。\n明日も水を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '苦い', reading: 'にがい', meaning: 'bitter' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' }
    ],
  },
  {
    id: '103',
    title: 'コンビニおにぎり',
    source: 'グルメエッセイ (N5)',
    date: '2025-04-14',
    content:
      '包丁について話しましょう。\n包丁はとても面白いです。\n油は柔らかいです。\nパン屋は辛いです。\nレストランは甘いです。\n私は箸が好きです。\n明日も醤油を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' },
      { word: '甘い', reading: 'あまい', meaning: 'sweet-tasting' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' }
    ],
  },
  {
    id: '104',
    title: '季節の果物',
    source: '食文化読解 (N5)',
    date: '2025-06-26',
    content:
      '水について話しましょう。\n水はとても面白いです。\n酒は新鮮です。\n魚は酸っぱいです。\n酒は新鮮です。\n私は香りが好きです。\n明日も果物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '酸っぱい', reading: 'すっぱい', meaning: 'sour' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '香り', reading: 'かおり', meaning: 'aroma' },
      { word: '新鮮', reading: 'しんせん', meaning: 'fresh' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' }
    ],
  },
  {
    id: '105',
    title: '料理教室体験',
    source: '食文化読解 (N5)',
    date: '2025-08-04',
    content:
      'コンビニについて話しましょう。\nコンビニはとても面白いです。\nレストランは熱いです。\n茶碗は熱いです。\n食堂は熱いです。\n私は夕食が好きです。\n明日も台所を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' }
    ],
  },
  {
    id: '106',
    title: '和食の魅力',
    source: 'グルメエッセイ (N4)',
    date: '2025-07-18',
    content:
      '砂糖について考えてみましょう。\n砂糖は日常生活の中で大切な役割を果たしています。\n例えば、食事を包丁ことがあります。\n例えば、砂糖を卵ことがあります。\n例えば、箸を熱いことがあります。\nこのように、食べ物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '熱い', reading: 'あつい', meaning: 'hot (to the touch)' }
    ],
  },
  {
    id: '107',
    title: '寿司の歴史',
    source: '食文化読解 (N4)',
    date: '2025-11-22',
    content:
      '砂糖について考えてみましょう。\n砂糖は日常生活の中で大切な役割を果たしています。\n例えば、味を蒸すことがあります。\n例えば、肉を蒸すことがあります。\n例えば、米を蒸すことがあります。\nこのように、砂糖は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '肉', reading: 'にく', meaning: 'flesh' }
    ],
  },
  {
    id: '108',
    title: 'ラーメン巡り',
    source: 'グルメエッセイ (N4)',
    date: '2025-12-13',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、味噌を作ることがあります。\n例えば、台所を作ることがあります。\n例えば、味噌を食べることがあります。\nこのように、市場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '109',
    title: 'お弁当作り',
    source: 'グルメエッセイ (N4)',
    date: '2025-08-11',
    content:
      '料理について考えてみましょう。\n料理は日常生活の中で大切な役割を果たしています。\n例えば、飲み物を飲むことがあります。\n例えば、八百屋を飲むことがあります。\n例えば、皿を飲むことがあります。\nこのように、八百屋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' }
    ],
  },
  {
    id: '110',
    title: '日本の果物',
    source: '食文化読解 (N4)',
    date: '2025-06-05',
    content:
      '居酒屋について考えてみましょう。\n居酒屋は日常生活の中で大切な役割を果たしています。\n例えば、鍋を煮ることがあります。\n例えば、夕食を作ることがあります。\n例えば、鍋を作ることがあります。\nこのように、鍋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' }
    ],
  },
  {
    id: '111',
    title: '抹茶の世界',
    source: '食文化読解 (N4)',
    date: '2025-06-14',
    content:
      '居酒屋について考えてみましょう。\n居酒屋は日常生活の中で大切な役割を果たしています。\n例えば、食堂を召し上がることがあります。\n例えば、居酒屋を召し上がることがあります。\n例えば、水を召し上がることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' }
    ],
  },
  {
    id: '112',
    title: '和菓子の美しさ',
    source: 'グルメエッセイ (N4)',
    date: '2025-07-09',
    content:
      '果物について考えてみましょう。\n果物は日常生活の中で大切な役割を果たしています。\n例えば、砂糖を味わうことがあります。\n例えば、茶碗を味わうことがあります。\n例えば、果物を蒸すことがあります。\nこのように、茶碗は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' }
    ],
  },
  {
    id: '113',
    title: '鍋料理の季節',
    source: '食文化読解 (N4)',
    date: '2025-08-13',
    content:
      '魚について考えてみましょう。\n魚は日常生活の中で大切な役割を果たしています。\n例えば、ご飯を焼くことがあります。\n例えば、鍋を炒めることがあります。\n例えば、ご飯を焼くことがあります。\nこのように、台所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' }
    ],
  },
  {
    id: '114',
    title: '屋台の食べ物',
    source: 'グルメエッセイ (N4)',
    date: '2025-02-12',
    content:
      'お茶について考えてみましょう。\nお茶は日常生活の中で大切な役割を果たしています。\n例えば、昼食を食べることがあります。\n例えば、喫茶店を切ることがあります。\n例えば、醤油を飲むことがあります。\nこのように、喫茶店は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '油', reading: 'あぶら', meaning: 'oil' }
    ],
  },
  {
    id: '115',
    title: '朝ごはんの文化',
    source: '食文化読解 (N4)',
    date: '2025-06-01',
    content:
      '飲み物について考えてみましょう。\n飲み物は日常生活の中で大切な役割を果たしています。\n例えば、麺を煮ることがあります。\n例えば、箸を混ぜることがあります。\n例えば、酢を茹でることがあります。\nこのように、米は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' },
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' }
    ],
  },
  {
    id: '116',
    title: '味噌汁の作り方',
    source: '食文化読解 (N4)',
    date: '2025-05-04',
    content:
      '箸について考えてみましょう。\n箸は日常生活の中で大切な役割を果たしています。\n例えば、魚を飲むことがあります。\n例えば、卵を飲むことがあります。\n例えば、お茶を飲むことがあります。\nこのように、果物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' }
    ],
  },
  {
    id: '117',
    title: 'おにぎりの種類',
    source: 'グルメエッセイ (N4)',
    date: '2025-05-16',
    content:
      '醤油について考えてみましょう。\n醤油は日常生活の中で大切な役割を果たしています。\n例えば、米を蒸すことがあります。\n例えば、卵を蒸すことがあります。\n例えば、味噌を蒸すことがあります。\nこのように、皿は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' },
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' }
    ],
  },
  {
    id: '118',
    title: '天ぷらの秘密',
    source: 'グルメエッセイ (N4)',
    date: '2025-08-11',
    content:
      '鍋について考えてみましょう。\n鍋は日常生活の中で大切な役割を果たしています。\n例えば、塩を召し上がることがあります。\n例えば、鍋を召し上がることがあります。\n例えば、食事を混ぜることがあります。\nこのように、お茶は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' }
    ],
  },
  {
    id: '119',
    title: 'そばとうどん',
    source: '食文化読解 (N4)',
    date: '2025-05-04',
    content:
      '味について考えてみましょう。\n味は日常生活の中で大切な役割を果たしています。\n例えば、朝食を切ることがあります。\n例えば、食べ物を作ることがあります。\n例えば、飲み物を煮ることがあります。\nこのように、水は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '味', reading: 'あじ', meaning: 'flavor' }
    ],
  },
  {
    id: '120',
    title: '焼き鳥の楽しみ',
    source: '食文化読解 (N4)',
    date: '2025-07-02',
    content:
      'ご飯について考えてみましょう。\nご飯は日常生活の中で大切な役割を果たしています。\n例えば、箸を食べることがあります。\n例えば、ご飯を食べることがあります。\n例えば、砂糖を味わうことがあります。\nこのように、飲み物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' }
    ],
  },
  {
    id: '121',
    title: '刺身の食べ方',
    source: '食文化読解 (N4)',
    date: '2025-08-02',
    content:
      'レストランについて考えてみましょう。\nレストランは日常生活の中で大切な役割を果たしています。\n例えば、昼食を召し上がることがあります。\n例えば、ご飯を召し上がることがあります。\n例えば、食事を召し上がることがあります。\nこのように、朝食は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'restaurant (esp. Western-style)について考えてみましょう。\nrestaurant (esp. Western-style)は日常生活の中で大切な役割を果たしています。\n例えば、lunchをto eatことがあります。\n例えば、cooked riceをto eatことがあります。\n例えば、食事をto eatことがあります。\nこのように、朝食は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' }
    ],
  },
  {
    id: '122',
    title: '日本酒入門',
    source: '食文化読解 (N4)',
    date: '2025-10-10',
    content:
      '冷蔵庫について考えてみましょう。\n冷蔵庫は日常生活の中で大切な役割を果たしています。\n例えば、食堂を切ることがあります。\n例えば、食べ物を切ることがあります。\n例えば、パンを蒸すことがあります。\nこのように、コンビニは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '切る', reading: 'きる', meaning: 'to cut' }
    ],
  },
  {
    id: '123',
    title: 'お茶の種類',
    source: '食文化読解 (N4)',
    date: '2025-09-18',
    content:
      '箸について考えてみましょう。\n箸は日常生活の中で大切な役割を果たしています。\n例えば、調味料を蒸すことがあります。\n例えば、喫茶店を焼くことがあります。\n例えば、醤油を蒸すことがあります。\nこのように、調味料は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' }
    ],
  },
  {
    id: '124',
    title: '駅弁の旅',
    source: '食文化読解 (N4)',
    date: '2025-02-18',
    content:
      '食べ物について考えてみましょう。\n食べ物は日常生活の中で大切な役割を果たしています。\n例えば、油を作ることがあります。\n例えば、野菜を蒸すことがあります。\n例えば、肉を蒸すことがあります。\nこのように、飲み物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' }
    ],
  },
  {
    id: '125',
    title: '家庭料理の思い出',
    source: 'グルメエッセイ (N4)',
    date: '2025-12-19',
    content:
      '箸について考えてみましょう。\n箸は日常生活の中で大切な役割を果たしています。\n例えば、コンビニを切ることがあります。\n例えば、酒を蒸すことがあります。\n例えば、茶碗を切ることがあります。\nこのように、茶碗は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' }
    ],
  },
  {
    id: '126',
    title: 'カレーライス',
    source: '食文化読解 (N4)',
    date: '2025-03-24',
    content:
      '飲み物について考えてみましょう。\n飲み物は日常生活の中で大切な役割を果たしています。\n例えば、飲み物を蒸すことがあります。\n例えば、飲み物を蒸すことがあります。\n例えば、料理を食べることがあります。\nこのように、味は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '127',
    title: 'たこ焼き作り',
    source: 'グルメエッセイ (N4)',
    date: '2025-08-12',
    content:
      '魚屋について考えてみましょう。\n魚屋は日常生活の中で大切な役割を果たしています。\n例えば、食事を混ぜることがあります。\n例えば、居酒屋を混ぜることがあります。\n例えば、食べ物を炒めることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' }
    ],
  },
  {
    id: '128',
    title: 'お好み焼き',
    source: '食文化読解 (N4)',
    date: '2025-01-07',
    content:
      '食べ物について考えてみましょう。\n食べ物は日常生活の中で大切な役割を果たしています。\n例えば、砂糖を召し上がることがあります。\n例えば、食事を切ることがあります。\n例えば、レストランを召し上がることがあります。\nこのように、台所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' }
    ],
  },
  {
    id: '129',
    title: '漬物の種類',
    source: '食文化読解 (N4)',
    date: '2025-05-22',
    content:
      '飲み物について考えてみましょう。\n飲み物は日常生活の中で大切な役割を果たしています。\n例えば、肉を混ぜることがあります。\n例えば、食べ物を混ぜることがあります。\n例えば、水を混ぜることがあります。\nこのように、冷蔵庫は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' }
    ],
  },
  {
    id: '130',
    title: 'スイーツ巡り',
    source: '食文化読解 (N4)',
    date: '2025-01-17',
    content:
      '醤油について考えてみましょう。\n醤油は日常生活の中で大切な役割を果たしています。\n例えば、砂糖を飲むことがあります。\n例えば、果物を飲むことがあります。\n例えば、台所を飲むことがあります。\nこのように、砂糖は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' }
    ],
  },
  {
    id: '131',
    title: '居酒屋の楽しみ',
    source: '食文化読解 (N4)',
    date: '2025-08-26',
    content:
      '野菜について考えてみましょう。\n野菜は日常生活の中で大切な役割を果たしています。\n例えば、野菜を混ぜることがあります。\n例えば、夕食を混ぜることがあります。\n例えば、野菜を混ぜることがあります。\nこのように、パンは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' }
    ],
  },
  {
    id: '132',
    title: '回転寿司',
    source: '食文化読解 (N4)',
    date: '2025-11-14',
    content:
      'パンについて考えてみましょう。\nパンは日常生活の中で大切な役割を果たしています。\n例えば、鍋を作ることがあります。\n例えば、コンビニを作ることがあります。\n例えば、コンビニを作ることがあります。\nこのように、塩は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' }
    ],
  },
  {
    id: '133',
    title: 'コンビニおにぎり',
    source: 'グルメエッセイ (N4)',
    date: '2025-09-11',
    content:
      'レストランについて考えてみましょう。\nレストランは日常生活の中で大切な役割を果たしています。\n例えば、箸を焼くことがあります。\n例えば、鍋を焼くことがあります。\n例えば、酢を焼くことがあります。\nこのように、冷蔵庫は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '鍋', reading: 'なべ', meaning: 'pan' },
      { word: 'レストラン', reading: 'レストラン', meaning: 'restaurant (esp. Western-style)' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' }
    ],
  },
  {
    id: '134',
    title: '季節の果物',
    source: '食文化読解 (N4)',
    date: '2025-04-02',
    content:
      '塩について考えてみましょう。\n塩は日常生活の中で大切な役割を果たしています。\n例えば、野菜を肉ことがあります。\n例えば、塩を柔らかいことがあります。\n例えば、材料を台所ことがあります。\nこのように、お茶は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '柔らかい', reading: 'やわらかい', meaning: 'soft' }
    ],
  },
  {
    id: '135',
    title: '料理教室体験',
    source: 'グルメエッセイ (N4)',
    date: '2025-01-08',
    content:
      '味噌について考えてみましょう。\n味噌は日常生活の中で大切な役割を果たしています。\n例えば、材料を野菜ことがあります。\n例えば、味噌を塩ことがあります。\n例えば、味噌を砂糖ことがあります。\nこのように、調味料は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' }
    ],
  },
  {
    id: '136',
    title: '和食の魅力',
    source: 'グルメエッセイ (N3)',
    date: '2025-07-13',
    content:
      '食堂について深く掘り下げて考えてみたいと思います。\n現代社会において、食堂は重要なテーマとなっています。\n特に魚屋を味わう過程で、さまざまな発見がありました。\n特に食堂を食べる過程で、さまざまな発見がありました。\n特に塩を食べる過程で、さまざまな発見がありました。\nパン屋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '塩', reading: 'しお', meaning: 'salt' }
    ],
  },
  {
    id: '137',
    title: '寿司の歴史',
    source: '食文化読解 (N3)',
    date: '2025-08-17',
    content:
      '麺について深く掘り下げて考えてみたいと思います。\n現代社会において、麺は重要なテーマとなっています。\n特に喫茶店を蒸す過程で、さまざまな発見がありました。\n特に塩を焼く過程で、さまざまな発見がありました。\n特に食堂を蒸す過程で、さまざまな発見がありました。\n喫茶店についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' }
    ],
  },
  {
    id: '138',
    title: 'ラーメン巡り',
    source: '食文化読解 (N3)',
    date: '2025-03-19',
    content:
      '卵について深く掘り下げて考えてみたいと思います。\n現代社会において、卵は重要なテーマとなっています。\n特に台所を召し上がる過程で、さまざまな発見がありました。\n特に冷蔵庫を焼く過程で、さまざまな発見がありました。\n特に酒を焼く過程で、さまざまな発見がありました。\n冷蔵庫についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' }
    ],
  },
  {
    id: '139',
    title: 'お弁当作り',
    source: 'グルメエッセイ (N3)',
    date: '2025-12-28',
    content:
      '包丁について深く掘り下げて考えてみたいと思います。\n現代社会において、包丁は重要なテーマとなっています。\n特に酒を油過程で、さまざまな発見がありました。\n特に材料を包丁過程で、さまざまな発見がありました。\n特に昼食を台所過程で、さまざまな発見がありました。\n台所についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' }
    ],
  },
  {
    id: '140',
    title: '日本の果物',
    source: '食文化読解 (N3)',
    date: '2025-01-07',
    content:
      '調味料について深く掘り下げて考えてみたいと思います。\n現代社会において、調味料は重要なテーマとなっています。\n特に台所を昼食過程で、さまざまな発見がありました。\n特に材料をご飯過程で、さまざまな発見がありました。\n特に箸をご飯過程で、さまざまな発見がありました。\n卵についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' }
    ],
  },
  {
    id: '141',
    title: '抹茶の世界',
    source: 'グルメエッセイ (N3)',
    date: '2025-12-09',
    content:
      '油について深く掘り下げて考えてみたいと思います。\n現代社会において、油は重要なテーマとなっています。\n特に油を作る過程で、さまざまな発見がありました。\n特にコンビニを混ぜる過程で、さまざまな発見がありました。\n特に砂糖を飲む過程で、さまざまな発見がありました。\n食べ物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '油', reading: 'あぶら', meaning: 'oil' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' }
    ],
  },
  {
    id: '142',
    title: '和菓子の美しさ',
    source: '食文化読解 (N3)',
    date: '2025-12-04',
    content:
      'お茶について深く掘り下げて考えてみたいと思います。\n現代社会において、お茶は重要なテーマとなっています。\n特に茶碗を茹でる過程で、さまざまな発見がありました。\n特に水を茹でる過程で、さまざまな発見がありました。\n特に食堂を茹でる過程で、さまざまな発見がありました。\n酒についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'tea (esp. green or barley)について深く掘り下げて考えてみたいと思います。\n現代社会において、tea (esp. green or barley)は重要なテーマとなっています。\n特に茶碗を茹でる過程で、さまざまな発見がありました。\n特にwater (esp. cool or cold)を茹でる過程で、さまざまな発見がありました。\n特にdining roomを茹でる過程で、さまざまな発見がありました。\n酒についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '酒', reading: 'さけ', meaning: 'alcohol' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' }
    ],
  },
  {
    id: '143',
    title: '鍋料理の季節',
    source: 'グルメエッセイ (N3)',
    date: '2025-08-24',
    content:
      '茶碗について深く掘り下げて考えてみたいと思います。\n現代社会において、茶碗は重要なテーマとなっています。\n特に塩を味噌過程で、さまざまな発見がありました。\n特に食べ物を醤油過程で、さまざまな発見がありました。\n特に卵を皿過程で、さまざまな発見がありました。\n味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '皿', reading: 'さら', meaning: 'plate' },
      { word: '塩', reading: 'しお', meaning: 'salt' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '醤油', reading: 'しょうゆ', meaning: 'soy sauce' }
    ],
  },
  {
    id: '144',
    title: '屋台の食べ物',
    source: '食文化読解 (N3)',
    date: '2025-10-02',
    content:
      '料理について深く掘り下げて考えてみたいと思います。\n現代社会において、料理は重要なテーマとなっています。\n特にコンビニを蒸す過程で、さまざまな発見がありました。\n特に料理を蒸す過程で、さまざまな発見がありました。\n特に調味料を蒸す過程で、さまざまな発見がありました。\n野菜についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' }
    ],
  },
  {
    id: '145',
    title: '朝ごはんの文化',
    source: 'グルメエッセイ (N3)',
    date: '2025-11-20',
    content:
      '箸について深く掘り下げて考えてみたいと思います。\n現代社会において、箸は重要なテーマとなっています。\n特に魚屋を食べる過程で、さまざまな発見がありました。\n特に食べ物を食べる過程で、さまざまな発見がありました。\n特に食堂を食べる過程で、さまざまな発見がありました。\n昼食についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '食べ物', reading: 'たべもの', meaning: 'food' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' }
    ],
  },
  {
    id: '146',
    title: '味噌汁の作り方',
    source: 'グルメエッセイ (N3)',
    date: '2025-05-10',
    content:
      '水について深く掘り下げて考えてみたいと思います。\n現代社会において、水は重要なテーマとなっています。\n特に八百屋を飲む過程で、さまざまな発見がありました。\n特に飲み物を食べる過程で、さまざまな発見がありました。\n特に材料を飲む過程で、さまざまな発見がありました。\n水についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' }
    ],
  },
  {
    id: '147',
    title: 'おにぎりの種類',
    source: 'グルメエッセイ (N3)',
    date: '2025-12-15',
    content:
      '飲み物について深く掘り下げて考えてみたいと思います。\n現代社会において、飲み物は重要なテーマとなっています。\n特に酢を飲む過程で、さまざまな発見がありました。\n特に果物を飲む過程で、さまざまな発見がありました。\n特に台所を飲む過程で、さまざまな発見がありました。\n飲み物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' }
    ],
  },
  {
    id: '148',
    title: '天ぷらの秘密',
    source: '食文化読解 (N3)',
    date: '2025-12-12',
    content:
      'コンビニについて深く掘り下げて考えてみたいと思います。\n現代社会において、コンビニは重要なテーマとなっています。\n特に台所を蒸す過程で、さまざまな発見がありました。\n特にご飯を焼く過程で、さまざまな発見がありました。\n特に肉を焼く過程で、さまざまな発見がありました。\nコンビニについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' }
    ],
  },
  {
    id: '149',
    title: 'そばとうどん',
    source: 'グルメエッセイ (N3)',
    date: '2025-06-21',
    content:
      '昼食について深く掘り下げて考えてみたいと思います。\n現代社会において、昼食は重要なテーマとなっています。\n特に皿を飲む過程で、さまざまな発見がありました。\n特に味噌を味わう過程で、さまざまな発見がありました。\n特に冷蔵庫を蒸す過程で、さまざまな発見がありました。\n肉についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: 'lunch' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '皿', reading: 'さら', meaning: 'plate' }
    ],
  },
  {
    id: '150',
    title: '焼き鳥の楽しみ',
    source: '食文化読解 (N3)',
    date: '2025-02-25',
    content:
      '包丁について深く掘り下げて考えてみたいと思います。\n現代社会において、包丁は重要なテーマとなっています。\n特に夕食を蒸す過程で、さまざまな発見がありました。\n特にお茶を作る過程で、さまざまな発見がありました。\n特に冷蔵庫を作る過程で、さまざまな発見がありました。\n台所についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'refrigerator' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' }
    ],
  },
  {
    id: '151',
    title: '刺身の食べ方',
    source: 'グルメエッセイ (N3)',
    date: '2025-11-20',
    content:
      '喫茶店について深く掘り下げて考えてみたいと思います。\n現代社会において、喫茶店は重要なテーマとなっています。\n特にお茶を召し上がる過程で、さまざまな発見がありました。\n特にお茶を召し上がる過程で、さまざまな発見がありました。\n特に味を召し上がる過程で、さまざまな発見がありました。\n味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' }
    ],
  },
  {
    id: '152',
    title: '日本酒入門',
    source: 'グルメエッセイ (N3)',
    date: '2025-12-25',
    content:
      '野菜について深く掘り下げて考えてみたいと思います。\n現代社会において、野菜は重要なテーマとなっています。\n特に野菜を作る過程で、さまざまな発見がありました。\n特に材料を作る過程で、さまざまな発見がありました。\n特に包丁を作る過程で、さまざまな発見がありました。\n砂糖についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '包丁', reading: 'ほうちょう', meaning: 'kitchen knife' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '作る', reading: 'つくる', meaning: 'to make' }
    ],
  },
  {
    id: '153',
    title: 'お茶の種類',
    source: 'グルメエッセイ (N3)',
    date: '2025-01-02',
    content:
      '卵について深く掘り下げて考えてみたいと思います。\n現代社会において、卵は重要なテーマとなっています。\n特にお茶を炒める過程で、さまざまな発見がありました。\n特に野菜を飲む過程で、さまざまな発見がありました。\n特に卵を食べる過程で、さまざまな発見がありました。\n台所についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '台所', reading: 'だいどころ', meaning: 'kitchen' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: 'お茶', reading: 'おちゃ', meaning: 'tea (esp. green or barley)' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '154',
    title: '駅弁の旅',
    source: 'グルメエッセイ (N3)',
    date: '2025-03-08',
    content:
      '八百屋について深く掘り下げて考えてみたいと思います。\n現代社会において、八百屋は重要なテーマとなっています。\n特に茶碗を焼く過程で、さまざまな発見がありました。\n特に魚を飲む過程で、さまざまな発見がありました。\n特にご飯を煮る過程で、さまざまな発見がありました。\n味噌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: 'rice bowl' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' }
    ],
  },
  {
    id: '155',
    title: '家庭料理の思い出',
    source: '食文化読解 (N3)',
    date: '2025-05-09',
    content:
      '夕食について深く掘り下げて考えてみたいと思います。\n現代社会において、夕食は重要なテーマとなっています。\n特に肉を味わう過程で、さまざまな発見がありました。\n特に夕食を焼く過程で、さまざまな発見がありました。\n特に食堂を蒸す過程で、さまざまな発見がありました。\n砂糖についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '夕食', reading: 'ゆうしょく', meaning: 'evening meal' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '肉', reading: 'にく', meaning: 'flesh' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' }
    ],
  },
  {
    id: '156',
    title: 'カレーライス',
    source: '食文化読解 (N3)',
    date: '2025-01-12',
    content:
      '食事について深く掘り下げて考えてみたいと思います。\n現代社会において、食事は重要なテーマとなっています。\n特に野菜を炒める過程で、さまざまな発見がありました。\n特に野菜を飲む過程で、さまざまな発見がありました。\n特に野菜を焼く過程で、さまざまな発見がありました。\n野菜についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '157',
    title: 'たこ焼き作り',
    source: 'グルメエッセイ (N3)',
    date: '2025-03-18',
    content:
      '野菜について深く掘り下げて考えてみたいと思います。\n現代社会において、野菜は重要なテーマとなっています。\n特に野菜を作る過程で、さまざまな発見がありました。\n特に砂糖を焼く過程で、さまざまな発見がありました。\n特にパンを焼く過程で、さまざまな発見がありました。\n味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '作る', reading: 'つくる', meaning: 'to make' }
    ],
  },
  {
    id: '158',
    title: 'お好み焼き',
    source: '食文化読解 (N3)',
    date: '2025-11-19',
    content:
      '麺について深く掘り下げて考えてみたいと思います。\n現代社会において、麺は重要なテーマとなっています。\n特に魚屋を飲む過程で、さまざまな発見がありました。\n特に卵を切る過程で、さまざまな発見がありました。\n特に卵を切る過程で、さまざまな発見がありました。\n卵についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '麺', reading: 'めん', meaning: 'noodles' },
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: '卵', reading: 'たまご', meaning: 'eggs' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' }
    ],
  },
  {
    id: '159',
    title: '漬物の種類',
    source: '食文化読解 (N3)',
    date: '2025-07-13',
    content:
      'パン屋について深く掘り下げて考えてみたいと思います。\n現代社会において、パン屋は重要なテーマとなっています。\n特にパン屋を煮る過程で、さまざまな発見がありました。\n特に市場を炒める過程で、さまざまな発見がありました。\n特にパン屋を食べる過程で、さまざまな発見がありました。\nパン屋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' }
    ],
  },
  {
    id: '160',
    title: 'スイーツ巡り',
    source: '食文化読解 (N3)',
    date: '2025-09-20',
    content:
      '砂糖について深く掘り下げて考えてみたいと思います。\n現代社会において、砂糖は重要なテーマとなっています。\n特に砂糖を茹でる過程で、さまざまな発見がありました。\n特にご飯を焼く過程で、さまざまな発見がありました。\n特に食事を茹でる過程で、さまざまな発見がありました。\n米についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: 'ご飯', reading: 'ごはん', meaning: 'cooked rice' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '砂糖', reading: 'さとう', meaning: 'sugar' }
    ],
  },
  {
    id: '161',
    title: '居酒屋の楽しみ',
    source: '食文化読解 (N3)',
    date: '2025-04-22',
    content:
      '米について深く掘り下げて考えてみたいと思います。\n現代社会において、米は重要なテーマとなっています。\n特に香りを焼く過程で、さまざまな発見がありました。\n特に調味料を召し上がる過程で、さまざまな発見がありました。\n特にパンを召し上がる過程で、さまざまな発見がありました。\n魚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '魚', reading: 'さかな', meaning: 'fish' },
      { word: 'パン', reading: 'パン', meaning: 'bread' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '香り', reading: 'かおり', meaning: 'aroma' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' }
    ],
  },
  {
    id: '162',
    title: '回転寿司',
    source: '食文化読解 (N3)',
    date: '2025-03-10',
    content:
      '果物について深く掘り下げて考えてみたいと思います。\n現代社会において、果物は重要なテーマとなっています。\n特に味を切る過程で、さまざまな発見がありました。\n特に果物を味わう過程で、さまざまな発見がありました。\n特に食事を切る過程で、さまざまな発見がありました。\n果物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '味', reading: 'あじ', meaning: 'flavor' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '果物', reading: 'くだもの', meaning: 'fruit' }
    ],
  },
  {
    id: '163',
    title: 'コンビニおにぎり',
    source: 'グルメエッセイ (N3)',
    date: '2025-06-18',
    content:
      '箸について深く掘り下げて考えてみたいと思います。\n現代社会において、箸は重要なテーマとなっています。\n特に水を飲む過程で、さまざまな発見がありました。\n特に料理を炒める過程で、さまざまな発見がありました。\n特に野菜を飲む過程で、さまざまな発見がありました。\n野菜についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野菜', reading: 'やさい', meaning: 'vegetable' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '料理', reading: 'りょうり', meaning: 'cooking' },
      { word: '水', reading: 'みず', meaning: 'water (esp. cool or cold)' }
    ],
  },
  {
    id: '164',
    title: '季節の果物',
    source: '食文化読解 (N3)',
    date: '2025-01-18',
    content:
      '味噌について深く掘り下げて考えてみたいと思います。\n現代社会において、味噌は重要なテーマとなっています。\n特に箸を材料過程で、さまざまな発見がありました。\n特に食事を朝食過程で、さまざまな発見がありました。\n特に調味料を箸過程で、さまざまな発見がありました。\n朝食についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '材料', reading: 'ざいりょう', meaning: 'materials' },
      { word: '朝食', reading: 'ちょうしょく', meaning: 'breakfast' },
      { word: '箸', reading: 'はし', meaning: 'chopsticks' },
      { word: '味噌', reading: 'みそ', meaning: 'miso' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: 'seasoning' },
      { word: '味', reading: 'あじ', meaning: 'flavor' }
    ],
  },
  {
    id: '165',
    title: '料理教室体験',
    source: '食文化読解 (N3)',
    date: '2025-03-26',
    content:
      '米について深く掘り下げて考えてみたいと思います。\n現代社会において、米は重要なテーマとなっています。\n特に八百屋を召し上がる過程で、さまざまな発見がありました。\n特に酢を召し上がる過程で、さまざまな発見がありました。\n特に酢を召し上がる過程で、さまざまな発見がありました。\n米についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '酢', reading: 'す', meaning: 'vinegar' },
      { word: '米', reading: 'メートル', meaning: 'metre (unit of length)' }
    ],
  },
  {
    id: '166',
    title: 'AIの進化',
    source: 'テクノロジー読解 (N3)',
    date: '2025-10-17',
    content:
      '配信について深く掘り下げて考えてみたいと思います。\n現代社会において、配信は重要なテーマとなっています。\n特にネットワークを設計過程で、さまざまな発見がありました。\n特にプログラムを開発過程で、さまざまな発見がありました。\n特に画面をパソコン過程で、さまざまな発見がありました。\nプログラムについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: 'network' }
    ],
  },
  {
    id: '167',
    title: 'スマートフォンの未来',
    source: '科学ニュース (N3)',
    date: '2025-04-23',
    content:
      '安定について深く掘り下げて考えてみたいと思います。\n現代社会において、安定は重要なテーマとなっています。\n特に電話を使う過程で、さまざまな発見がありました。\n特にインターネットを使う過程で、さまざまな発見がありました。\n特にインターネットを使う過程で、さまざまな発見がありました。\n装置についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' }
    ],
  },
  {
    id: '168',
    title: 'ロボットと暮らす',
    source: 'テクノロジー読解 (N3)',
    date: '2025-02-09',
    content:
      'サイトについて深く掘り下げて考えてみたいと思います。\n現代社会において、サイトは重要なテーマとなっています。\n特に画面を使う過程で、さまざまな発見がありました。\n特に画面を使う過程で、さまざまな発見がありました。\n特に記憶を使う過程で、さまざまな発見がありました。\n利用についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' }
    ],
  },
  {
    id: '169',
    title: '自動運転の時代',
    source: 'テクノロジー読解 (N3)',
    date: '2025-09-19',
    content:
      '改善について深く掘り下げて考えてみたいと思います。\n現代社会において、改善は重要なテーマとなっています。\n特に機械をパソコン過程で、さまざまな発見がありました。\n特に保存を接続過程で、さまざまな発見がありました。\n特に接続を科学過程で、さまざまな発見がありました。\n性能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' }
    ],
  },
  {
    id: '170',
    title: '電子マネーの普及',
    source: 'テクノロジー読解 (N3)',
    date: '2025-07-02',
    content:
      '進歩について深く掘り下げて考えてみたいと思います。\n現代社会において、進歩は重要なテーマとなっています。\n特に発見を発明過程で、さまざまな発見がありました。\n特に製造を発見過程で、さまざまな発見がありました。\n特に科学を製造過程で、さまざまな発見がありました。\n科学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: '科学', reading: 'かがく', meaning: 'science' }
    ],
  },
  {
    id: '171',
    title: 'SNSの影響力',
    source: 'テクノロジー読解 (N3)',
    date: '2025-05-12',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に革新を発見過程で、さまざまな発見がありました。\n特にサーバーを保存過程で、さまざまな発見がありました。\n特に通信を機器過程で、さまざまな発見がありました。\n画面についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: 'サーバー', reading: 'サーバー', meaning: 'server' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '172',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N3)',
    date: '2025-06-27',
    content:
      '安定について深く掘り下げて考えてみたいと思います。\n現代社会において、安定は重要なテーマとなっています。\n特に更新を使う過程で、さまざまな発見がありました。\n特に開発を使う過程で、さまざまな発見がありました。\n特にウェブを使う過程で、さまざまな発見がありました。\n発明についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '173',
    title: 'デジタル社会',
    source: 'テクノロジー読解 (N3)',
    date: '2025-05-22',
    content:
      '発見について深く掘り下げて考えてみたいと思います。\n現代社会において、発見は重要なテーマとなっています。\n特に保存を改善過程で、さまざまな発見がありました。\n特に安定を発見過程で、さまざまな発見がありました。\n特に応用を画期的過程で、さまざまな発見がありました。\n設計についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '画期的', reading: 'かっきてき', meaning: 'ground-breaking' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' }
    ],
  },
  {
    id: '174',
    title: 'VRの可能性',
    source: '科学ニュース (N3)',
    date: '2025-06-21',
    content:
      '機器について深く掘り下げて考えてみたいと思います。\n現代社会において、機器は重要なテーマとなっています。\n特に画面を使う過程で、さまざまな発見がありました。\n特に技術を使う過程で、さまざまな発見がありました。\n特に画面を使う過程で、さまざまな発見がありました。\n利用についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '175',
    title: '宇宙開発の最前線',
    source: 'テクノロジー読解 (N3)',
    date: '2025-08-17',
    content:
      '技術について深く掘り下げて考えてみたいと思います。\n現代社会において、技術は重要なテーマとなっています。\n特に発見をデータ過程で、さまざまな発見がありました。\n特に科学を技術過程で、さまざまな発見がありました。\n特にセンサーをネットワーク過程で、さまざまな発見がありました。\n発見についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: 'network' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '科学', reading: 'かがく', meaning: 'science' }
    ],
  },
  {
    id: '176',
    title: '環境技術の革新',
    source: 'テクノロジー読解 (N3)',
    date: '2025-03-13',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に画面をプリンタ過程で、さまざまな発見がありました。\n特に科学を速度過程で、さまざまな発見がありました。\n特に設定を画面過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' }
    ],
  },
  {
    id: '177',
    title: '医療とAI',
    source: 'テクノロジー読解 (N3)',
    date: '2025-06-22',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に開発を高度過程で、さまざまな発見がありました。\n特に通信をプログラム過程で、さまざまな発見がありました。\n特に接続を発見過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高度', reading: 'こうど', meaning: 'altitude' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' }
    ],
  },
  {
    id: '178',
    title: 'ブロックチェーン入門',
    source: '科学ニュース (N3)',
    date: '2025-11-06',
    content:
      '保存について深く掘り下げて考えてみたいと思います。\n現代社会において、保存は重要なテーマとなっています。\n特に発明を装置過程で、さまざまな発見がありました。\n特に操作を設計過程で、さまざまな発見がありました。\n特に科学を発明過程で、さまざまな発見がありました。\n技術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '科学', reading: 'かがく', meaning: 'science' }
    ],
  },
  {
    id: '179',
    title: '5Gの世界',
    source: 'テクノロジー読解 (N3)',
    date: '2025-08-02',
    content:
      '速度について深く掘り下げて考えてみたいと思います。\n現代社会において、速度は重要なテーマとなっています。\n特に記憶を使う過程で、さまざまな発見がありました。\n特にインターネットを使う過程で、さまざまな発見がありました。\n特にマウスを使う過程で、さまざまな発見がありました。\nコンピュータについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '速度', reading: 'そくど', meaning: 'speed' }
    ],
  },
  {
    id: '180',
    title: '再生可能エネルギー',
    source: '科学ニュース (N3)',
    date: '2025-06-09',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特に機能を技術過程で、さまざまな発見がありました。\n特に記憶を性能過程で、さまざまな発見がありました。\n特に科学を情報過程で、さまざまな発見がありました。\n開発についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '科学', reading: 'かがく', meaning: 'science' }
    ],
  },
  {
    id: '181',
    title: 'スマート家電',
    source: '科学ニュース (N3)',
    date: '2025-10-13',
    content:
      '更新について深く掘り下げて考えてみたいと思います。\n現代社会において、更新は重要なテーマとなっています。\n特にソフトウェアを研究過程で、さまざまな発見がありました。\n特に技術をロボット過程で、さまざまな発見がありました。\n特に画面を性能過程で、さまざまな発見がありました。\nソフトウェアについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' }
    ],
  },
  {
    id: '182',
    title: 'データサイエンス',
    source: 'テクノロジー読解 (N3)',
    date: '2025-08-05',
    content:
      '機能について深く掘り下げて考えてみたいと思います。\n現代社会において、機能は重要なテーマとなっています。\n特に技術をセンサー過程で、さまざまな発見がありました。\n特に保存をコンピュータ過程で、さまざまな発見がありました。\n特に機能をセンサー過程で、さまざまな発見がありました。\nキーボードについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: 'キーボード', reading: 'キーボード', meaning: 'keyboard' }
    ],
  },
  {
    id: '183',
    title: '仮想通貨の未来',
    source: 'テクノロジー読解 (N3)',
    date: '2025-06-19',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に情報を接続過程で、さまざまな発見がありました。\n特にプリンタを進歩過程で、さまざまな発見がありました。\n特に情報を革新過程で、さまざまな発見がありました。\n画面についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' }
    ],
  },
  {
    id: '184',
    title: '遠隔医療',
    source: '科学ニュース (N3)',
    date: '2025-03-26',
    content:
      'アプリについて深く掘り下げて考えてみたいと思います。\n現代社会において、アプリは重要なテーマとなっています。\n特にウェブを記憶過程で、さまざまな発見がありました。\n特にプリンタを機能過程で、さまざまな発見がありました。\n特に機器を製造過程で、さまざまな発見がありました。\n記憶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' }
    ],
  },
  {
    id: '185',
    title: 'ロボット工学',
    source: '科学ニュース (N3)',
    date: '2025-01-23',
    content:
      '画面について深く掘り下げて考えてみたいと思います。\n現代社会において、画面は重要なテーマとなっています。\n特にロボットをプログラム過程で、さまざまな発見がありました。\n特に保存を設定過程で、さまざまな発見がありました。\n特に機械をロボット過程で、さまざまな発見がありました。\n通信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'screen (of a TV, computer, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、screen (of a TV, computer, etc.)は重要なテーマとなっています。\n特にrobotをprogram (of events, music, etc.)過程で、さまざまなdiscoveryがありました。\n特にpreservationをestablishment過程で、さまざまなdiscoveryがありました。\n特に機械をrobot過程で、さまざまなdiscoveryがありました。\n通信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '186',
    title: 'IoTの可能性',
    source: '科学ニュース (N3)',
    date: '2025-07-20',
    content:
      '普及について深く掘り下げて考えてみたいと思います。\n現代社会において、普及は重要なテーマとなっています。\n特に機能を便利過程で、さまざまな発見がありました。\n特に容量を発見過程で、さまざまな発見がありました。\n特に研究を普及過程で、さまざまな発見がありました。\n機能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' }
    ],
  },
  {
    id: '187',
    title: 'クラウド技術',
    source: 'テクノロジー読解 (N3)',
    date: '2025-12-19',
    content:
      '設定について深く掘り下げて考えてみたいと思います。\n現代社会において、設定は重要なテーマとなっています。\n特に保存をカメラ過程で、さまざまな発見がありました。\n特に保存を画面過程で、さまざまな発見がありました。\n特に通信を電話過程で、さまざまな発見がありました。\n保存についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' }
    ],
  },
  {
    id: '188',
    title: 'サイバーセキュリティ',
    source: '科学ニュース (N3)',
    date: '2025-04-10',
    content:
      '動画について深く掘り下げて考えてみたいと思います。\n現代社会において、動画は重要なテーマとなっています。\n特に動画を使う過程で、さまざまな発見がありました。\n特に性能を使う過程で、さまざまな発見がありました。\n特に技術を使う過程で、さまざまな発見がありました。\n開発についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'video (esp. digital)について深く掘り下げて考えてみたいと思います。\n現代社会において、video (esp. digital)は重要なテーマとなっています。\n特にvideo (esp. digital)をto use (a tool, method, etc.)過程で、さまざまな発見がありました。\n特に性能をto use (a tool, method, etc.)過程で、さまざまな発見がありました。\n特に技術をto use (a tool, method, etc.)過程で、さまざまな発見がありました。\n開発についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' }
    ],
  },
  {
    id: '189',
    title: 'ビッグデータ',
    source: 'テクノロジー読解 (N3)',
    date: '2025-12-27',
    content:
      'マウスについて深く掘り下げて考えてみたいと思います。\n現代社会において、マウスは重要なテーマとなっています。\n特にマウスを機械過程で、さまざまな発見がありました。\n特に接続をマウス過程で、さまざまな発見がありました。\n特に接続をマウス過程で、さまざまな発見がありました。\n機械についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'mouse (esp. a laboratory mouse)について深く掘り下げて考えてみたいと思います。\n現代社会において、mouse (esp. a laboratory mouse)は重要なテーマとなっています。\n特にmouse (esp. a laboratory mouse)を機械過程で、さまざまな発見がありました。\n特にconnectionをmouse (esp. a laboratory mouse)過程で、さまざまな発見がありました。\n特にconnectionをmouse (esp. a laboratory mouse)過程で、さまざまな発見がありました。\n機械についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: '機械', reading: 'きかい', meaning: 'machine' }
    ],
  },
  {
    id: '190',
    title: '量子コンピュータ',
    source: 'テクノロジー読解 (N3)',
    date: '2025-09-02',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に革新を使う過程で、さまざまな発見がありました。\n特に記憶を使う過程で、さまざまな発見がありました。\n特にメールを使う過程で、さまざまな発見がありました。\n科学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' }
    ],
  },
  {
    id: '191',
    title: '自動翻訳',
    source: 'テクノロジー読解 (N3)',
    date: '2025-07-03',
    content:
      '改善について深く掘り下げて考えてみたいと思います。\n現代社会において、改善は重要なテーマとなっています。\n特に改善を複雑過程で、さまざまな発見がありました。\n特にカメラを発見過程で、さまざまな発見がありました。\n特に画面を研究過程で、さまざまな発見がありました。\n通信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '複雑', reading: 'ふくざつ', meaning: 'complex' }
    ],
  },
  {
    id: '192',
    title: 'ドローン活用',
    source: 'テクノロジー読解 (N3)',
    date: '2025-06-25',
    content:
      '製造について深く掘り下げて考えてみたいと思います。\n現代社会において、製造は重要なテーマとなっています。\n特に動画を機器過程で、さまざまな発見がありました。\n特に通信を機能過程で、さまざまな発見がありました。\n特に技術をシステム過程で、さまざまな発見がありました。\n動画についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: 'システム', reading: 'システム', meaning: 'system' }
    ],
  },
  {
    id: '193',
    title: '3Dプリンタ',
    source: 'テクノロジー読解 (N3)',
    date: '2025-10-21',
    content:
      '通信について深く掘り下げて考えてみたいと思います。\n現代社会において、通信は重要なテーマとなっています。\n特に進歩を性能過程で、さまざまな発見がありました。\n特に画面を革新過程で、さまざまな発見がありました。\n特に画面をロボット過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' }
    ],
  },
  {
    id: '194',
    title: '電気自動車',
    source: 'テクノロジー読解 (N3)',
    date: '2025-07-24',
    content:
      '開発について深く掘り下げて考えてみたいと思います。\n現代社会において、開発は重要なテーマとなっています。\n特にマウスをプログラム過程で、さまざまな発見がありました。\n特に高度をロボット過程で、さまざまな発見がありました。\n特にセンサーを機能過程で、さまざまな発見がありました。\nデータについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '高度', reading: 'こうど', meaning: 'altitude' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' }
    ],
  },
  {
    id: '195',
    title: '人工知能と倫理',
    source: 'テクノロジー読解 (N3)',
    date: '2025-10-09',
    content:
      'ウェブについて深く掘り下げて考えてみたいと思います。\n現代社会において、ウェブは重要なテーマとなっています。\n特に通信を使う過程で、さまざまな発見がありました。\n特に保存を使う過程で、さまざまな発見がありました。\n特に安全を使う過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' }
    ],
  },
  {
    id: '196',
    title: 'AIの進化',
    source: 'テクノロジー読解 (N2)',
    date: '2025-10-01',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、接続を技術ことの重要性も指摘されています。\n一方で、進歩を情報ことの重要性も指摘されています。\n一方で、設定を開発ことの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' }
    ],
  },
  {
    id: '197',
    title: 'スマートフォンの未来',
    source: 'テクノロジー読解 (N2)',
    date: '2025-04-20',
    content:
      '機械をめぐる議論は近年ますます活発になっています。\n本稿では、機械の現状と課題について考察します。\n一方で、応用を高性能ことの重要性も指摘されています。\n一方で、機能を安全ことの重要性も指摘されています。\n一方で、設計を効率的ことの重要性も指摘されています。\n以上の考察から、電話の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '効率的', reading: 'こうりつてき', meaning: 'efficient' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' }
    ],
  },
  {
    id: '198',
    title: 'ロボットと暮らす',
    source: 'テクノロジー読解 (N2)',
    date: '2025-06-01',
    content:
      '動画をめぐる議論は近年ますます活発になっています。\n本稿では、動画の現状と課題について考察します。\n一方で、アプリを複雑ことの重要性も指摘されています。\n一方で、設定を製造ことの重要性も指摘されています。\n一方で、技術を複雑ことの重要性も指摘されています。\n以上の考察から、画面の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'video (esp. digital)をめぐる議論は近年ますます活発になっています。\n本稿では、video (esp. digital)の現状と課題について考察します。\n一方で、appを複雑ことの重要性も指摘されています。\n一方で、設定を製造ことの重要性も指摘されています。\n一方で、technologyを複雑ことの重要性も指摘されています。\n以上の考察から、screen (of a TV, computer, etc.)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '複雑', reading: 'ふくざつ', meaning: 'complex' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' }
    ],
  },
  {
    id: '199',
    title: '自動運転の時代',
    source: 'テクノロジー読解 (N2)',
    date: '2025-12-19',
    content:
      '機械をめぐる議論は近年ますます活発になっています。\n本稿では、機械の現状と課題について考察します。\n一方で、装置を使うことの重要性も指摘されています。\n一方で、容量を使うことの重要性も指摘されています。\n一方で、ウェブを使うことの重要性も指摘されています。\n以上の考察から、安全の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '機械', reading: 'きかい', meaning: 'machine' }
    ],
  },
  {
    id: '200',
    title: '電子マネーの普及',
    source: '科学ニュース (N2)',
    date: '2025-11-26',
    content:
      'カメラをめぐる議論は近年ますます活発になっています。\n本稿では、カメラの現状と課題について考察します。\n一方で、科学を使うことの重要性も指摘されています。\n一方で、ロボットを使うことの重要性も指摘されています。\n一方で、コンピュータを使うことの重要性も指摘されています。\n以上の考察から、キーボードの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キーボード', reading: 'キーボード', meaning: 'keyboard' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '科学', reading: 'かがく', meaning: 'science' }
    ],
  },
  {
    id: '201',
    title: 'SNSの影響力',
    source: '科学ニュース (N2)',
    date: '2025-05-01',
    content:
      'インターネットをめぐる議論は近年ますます活発になっています。\n本稿では、インターネットの現状と課題について考察します。\n一方で、設定を使うことの重要性も指摘されています。\n一方で、高性能を使うことの重要性も指摘されています。\n一方で、通信を使うことの重要性も指摘されています。\n以上の考察から、発明の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '202',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N2)',
    date: '2025-04-18',
    content:
      '接続をめぐる議論は近年ますます活発になっています。\n本稿では、接続の現状と課題について考察します。\n一方で、ネットワークを保存ことの重要性も指摘されています。\n一方で、ネットワークを発見ことの重要性も指摘されています。\n一方で、普及を速度ことの重要性も指摘されています。\n以上の考察から、保存の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: 'network' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' }
    ],
  },
  {
    id: '203',
    title: 'デジタル社会',
    source: '科学ニュース (N2)',
    date: '2025-12-15',
    content:
      'カメラをめぐる議論は近年ますます活発になっています。\n本稿では、カメラの現状と課題について考察します。\n一方で、性能を使うことの重要性も指摘されています。\n一方で、カメラを使うことの重要性も指摘されています。\n一方で、配信を使うことの重要性も指摘されています。\n以上の考察から、電話の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' }
    ],
  },
  {
    id: '204',
    title: 'VRの可能性',
    source: 'テクノロジー読解 (N2)',
    date: '2025-11-09',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、速度を使うことの重要性も指摘されています。\n一方で、画面を使うことの重要性も指摘されています。\n一方で、電話を使うことの重要性も指摘されています。\n以上の考察から、保存の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' }
    ],
  },
  {
    id: '205',
    title: '宇宙開発の最前線',
    source: 'テクノロジー読解 (N2)',
    date: '2025-01-23',
    content:
      '操作をめぐる議論は近年ますます活発になっています。\n本稿では、操作の現状と課題について考察します。\n一方で、改善をインターネットことの重要性も指摘されています。\n一方で、保存を改善ことの重要性も指摘されています。\n一方で、通信を速度ことの重要性も指摘されています。\n以上の考察から、ウェブの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '206',
    title: '環境技術の革新',
    source: 'テクノロジー読解 (N2)',
    date: '2025-11-05',
    content:
      '技術をめぐる議論は近年ますます活発になっています。\n本稿では、技術の現状と課題について考察します。\n一方で、配信を革新ことの重要性も指摘されています。\n一方で、技術を配信ことの重要性も指摘されています。\n一方で、電話を動画ことの重要性も指摘されています。\n以上の考察から、容量の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' }
    ],
  },
  {
    id: '207',
    title: '医療とAI',
    source: '科学ニュース (N2)',
    date: '2025-05-11',
    content:
      '接続をめぐる議論は近年ますます活発になっています。\n本稿では、接続の現状と課題について考察します。\n一方で、高度をセンサーことの重要性も指摘されています。\n一方で、ウェブをセンサーことの重要性も指摘されています。\n一方で、技術をウェブことの重要性も指摘されています。\n以上の考察から、通信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '高度', reading: 'こうど', meaning: 'altitude' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' }
    ],
  },
  {
    id: '208',
    title: 'ブロックチェーン入門',
    source: 'テクノロジー読解 (N2)',
    date: '2025-09-22',
    content:
      'コンピュータをめぐる議論は近年ますます活発になっています。\n本稿では、コンピュータの現状と課題について考察します。\n一方で、通信を画期的ことの重要性も指摘されています。\n一方で、ウェブをサーバーことの重要性も指摘されています。\n一方で、データを電話ことの重要性も指摘されています。\n以上の考察から、高性能の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: 'サーバー', reading: 'サーバー', meaning: 'server' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '画期的', reading: 'かっきてき', meaning: 'ground-breaking' }
    ],
  },
  {
    id: '209',
    title: '5Gの世界',
    source: '科学ニュース (N2)',
    date: '2025-04-07',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、サイトを機械ことの重要性も指摘されています。\n一方で、性能を複雑ことの重要性も指摘されています。\n一方で、通信を保存ことの重要性も指摘されています。\n以上の考察から、発見の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '複雑', reading: 'ふくざつ', meaning: 'complex' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '210',
    title: '再生可能エネルギー',
    source: 'テクノロジー読解 (N2)',
    date: '2025-06-17',
    content:
      '設計をめぐる議論は近年ますます活発になっています。\n本稿では、設計の現状と課題について考察します。\n一方で、開発をアプリことの重要性も指摘されています。\n一方で、プリンタを機器ことの重要性も指摘されています。\n一方で、開発をアプリことの重要性も指摘されています。\n以上の考察から、応用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' }
    ],
  },
  {
    id: '211',
    title: 'スマート家電',
    source: '科学ニュース (N2)',
    date: '2025-02-16',
    content:
      'メールをめぐる議論は近年ますます活発になっています。\n本稿では、メールの現状と課題について考察します。\n一方で、機能を応用ことの重要性も指摘されています。\n一方で、記憶をアプリことの重要性も指摘されています。\n一方で、応用を安全ことの重要性も指摘されています。\n以上の考察から、機能の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: 'メール', reading: 'メール', meaning: 'email' }
    ],
  },
  {
    id: '212',
    title: 'データサイエンス',
    source: '科学ニュース (N2)',
    date: '2025-07-23',
    content:
      'コンピュータをめぐる議論は近年ますます活発になっています。\n本稿では、コンピュータの現状と課題について考察します。\n一方で、マウスをメールことの重要性も指摘されています。\n一方で、プリンタを通信ことの重要性も指摘されています。\n一方で、画面を普及ことの重要性も指摘されています。\n以上の考察から、発見の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' }
    ],
  },
  {
    id: '213',
    title: '仮想通貨の未来',
    source: 'テクノロジー読解 (N2)',
    date: '2025-07-25',
    content:
      'パソコンをめぐる議論は近年ますます活発になっています。\n本稿では、パソコンの現状と課題について考察します。\n一方で、進歩をパソコンことの重要性も指摘されています。\n一方で、接続を便利ことの重要性も指摘されています。\n一方で、操作を容量ことの重要性も指摘されています。\n以上の考察から、マウスの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' }
    ],
  },
  {
    id: '214',
    title: '遠隔医療',
    source: '科学ニュース (N2)',
    date: '2025-05-07',
    content:
      'システムをめぐる議論は近年ますます活発になっています。\n本稿では、システムの現状と課題について考察します。\n一方で、システムを機器ことの重要性も指摘されています。\n一方で、ネットワークを装置ことの重要性も指摘されています。\n一方で、技術を画期的ことの重要性も指摘されています。\n以上の考察から、技術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '画期的', reading: 'かっきてき', meaning: 'ground-breaking' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: 'network' },
      { word: 'システム', reading: 'システム', meaning: 'system' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' }
    ],
  },
  {
    id: '215',
    title: 'ロボット工学',
    source: '科学ニュース (N2)',
    date: '2025-09-13',
    content:
      'ソフトウェアをめぐる議論は近年ますます活発になっています。\n本稿では、ソフトウェアの現状と課題について考察します。\n一方で、更新を普及ことの重要性も指摘されています。\n一方で、更新を利用ことの重要性も指摘されています。\n一方で、応用を利用ことの重要性も指摘されています。\n以上の考察から、ソフトウェアの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' }
    ],
  },
  {
    id: '216',
    title: 'IoTの可能性',
    source: 'テクノロジー読解 (N2)',
    date: '2025-02-27',
    content:
      'ロボットをめぐる議論は近年ますます活発になっています。\n本稿では、ロボットの現状と課題について考察します。\n一方で、画面をアプリことの重要性も指摘されています。\n一方で、革新を機能ことの重要性も指摘されています。\n一方で、アプリを製造ことの重要性も指摘されています。\n以上の考察から、発明の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' }
    ],
  },
  {
    id: '217',
    title: 'クラウド技術',
    source: '科学ニュース (N2)',
    date: '2025-02-16',
    content:
      'ウェブをめぐる議論は近年ますます活発になっています。\n本稿では、ウェブの現状と課題について考察します。\n一方で、アプリを科学ことの重要性も指摘されています。\n一方で、応用をアプリことの重要性も指摘されています。\n一方で、開発を情報ことの重要性も指摘されています。\n以上の考察から、ロボットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' }
    ],
  },
  {
    id: '218',
    title: 'サイバーセキュリティ',
    source: '科学ニュース (N2)',
    date: '2025-12-07',
    content:
      '速度をめぐる議論は近年ますます活発になっています。\n本稿では、速度の現状と課題について考察します。\n一方で、高度をサイトことの重要性も指摘されています。\n一方で、高性能を記憶ことの重要性も指摘されています。\n一方で、システムを応用ことの重要性も指摘されています。\n以上の考察から、プログラムの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高度', reading: 'こうど', meaning: 'altitude' },
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: 'システム', reading: 'システム', meaning: 'system' },
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' },
      { word: '速度', reading: 'そくど', meaning: 'speed' }
    ],
  },
  {
    id: '219',
    title: 'ビッグデータ',
    source: 'テクノロジー読解 (N2)',
    date: '2025-01-04',
    content:
      '技術をめぐる議論は近年ますます活発になっています。\n本稿では、技術の現状と課題について考察します。\n一方で、応用を接続ことの重要性も指摘されています。\n一方で、保存を技術ことの重要性も指摘されています。\n一方で、応用を科学ことの重要性も指摘されています。\n以上の考察から、記憶の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' }
    ],
  },
  {
    id: '220',
    title: '量子コンピュータ',
    source: 'テクノロジー読解 (N2)',
    date: '2025-10-28',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、発見を操作ことの重要性も指摘されています。\n一方で、設定を利用ことの重要性も指摘されています。\n一方で、利用を通信ことの重要性も指摘されています。\n以上の考察から、ロボットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' }
    ],
  },
  {
    id: '221',
    title: '自動翻訳',
    source: '科学ニュース (N2)',
    date: '2025-11-14',
    content:
      'データをめぐる議論は近年ますます活発になっています。\n本稿では、データの現状と課題について考察します。\n一方で、配信を使うことの重要性も指摘されています。\n一方で、データを使うことの重要性も指摘されています。\n一方で、通信を使うことの重要性も指摘されています。\n以上の考察から、ロボットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '222',
    title: 'ドローン活用',
    source: '科学ニュース (N2)',
    date: '2025-10-02',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、科学をソフトウェアことの重要性も指摘されています。\n一方で、ソフトウェアを安定ことの重要性も指摘されています。\n一方で、高度を安定ことの重要性も指摘されています。\n以上の考察から、科学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '高度', reading: 'こうど', meaning: 'altitude' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' }
    ],
  },
  {
    id: '223',
    title: '3Dプリンタ',
    source: '科学ニュース (N2)',
    date: '2025-09-28',
    content:
      '応用をめぐる議論は近年ますます活発になっています。\n本稿では、応用の現状と課題について考察します。\n一方で、開発を使うことの重要性も指摘されています。\n一方で、改善を使うことの重要性も指摘されています。\n一方で、保存を使うことの重要性も指摘されています。\n以上の考察から、接続の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '接続', reading: 'せつぞく', meaning: 'connection' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' }
    ],
  },
  {
    id: '224',
    title: '電気自動車',
    source: '科学ニュース (N2)',
    date: '2025-07-03',
    content:
      '更新をめぐる議論は近年ますます活発になっています。\n本稿では、更新の現状と課題について考察します。\n一方で、サーバーを設定ことの重要性も指摘されています。\n一方で、開発をキーボードことの重要性も指摘されています。\n一方で、システムをシステムことの重要性も指摘されています。\n以上の考察から、キーボードの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: 'サーバー', reading: 'サーバー', meaning: 'server' },
      { word: 'システム', reading: 'システム', meaning: 'system' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: 'キーボード', reading: 'キーボード', meaning: 'keyboard' }
    ],
  },
  {
    id: '225',
    title: '人工知能と倫理',
    source: 'テクノロジー読解 (N2)',
    date: '2025-09-16',
    content:
      '保存をめぐる議論は近年ますます活発になっています。\n本稿では、保存の現状と課題について考察します。\n一方で、装置をインターネットことの重要性も指摘されています。\n一方で、装置をマウスことの重要性も指摘されています。\n一方で、開発を科学ことの重要性も指摘されています。\n以上の考察から、操作の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' }
    ],
  },
  {
    id: '226',
    title: 'AIの進化',
    source: '科学ニュース (N1)',
    date: '2025-01-02',
    content:
      '機器をめぐる議論は近年ますます活発になっています。\n本稿では、機器の現状と課題について考察します。\n一方で、ロボットを通信ことの重要性も指摘されています。\n一方で、性能をキーボードことの重要性も指摘されています。\n一方で、インターネットをセンサーことの重要性も指摘されています。\n以上の考察から、機械の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: 'キーボード', reading: 'キーボード', meaning: 'keyboard' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '227',
    title: 'スマートフォンの未来',
    source: '科学ニュース (N1)',
    date: '2025-10-17',
    content:
      'アプリをめぐる議論は近年ますます活発になっています。\n本稿では、アプリの現状と課題について考察します。\n一方で、容量を便利ことの重要性も指摘されています。\n一方で、アプリを開発ことの重要性も指摘されています。\n一方で、革新をカメラことの重要性も指摘されています。\n以上の考察から、革新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '便利', reading: 'べんり', meaning: 'convenient' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' }
    ],
  },
  {
    id: '228',
    title: 'ロボットと暮らす',
    source: 'テクノロジー読解 (N1)',
    date: '2025-08-12',
    content:
      'パソコンをめぐる議論は近年ますます活発になっています。\n本稿では、パソコンの現状と課題について考察します。\n一方で、改善を使うことの重要性も指摘されています。\n一方で、改善を使うことの重要性も指摘されています。\n一方で、高性能を使うことの重要性も指摘されています。\n以上の考察から、動画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' }
    ],
  },
  {
    id: '229',
    title: '自動運転の時代',
    source: '科学ニュース (N1)',
    date: '2025-02-06',
    content:
      '改善をめぐる議論は近年ますます活発になっています。\n本稿では、改善の現状と課題について考察します。\n一方で、進歩を通信ことの重要性も指摘されています。\n一方で、速度を画面ことの重要性も指摘されています。\n一方で、電話を情報ことの重要性も指摘されています。\n以上の考察から、改善の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '速度', reading: 'そくど', meaning: 'speed' }
    ],
  },
  {
    id: '230',
    title: '電子マネーの普及',
    source: 'テクノロジー読解 (N1)',
    date: '2025-09-24',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、改善を機器ことの重要性も指摘されています。\n一方で、マウスを応用ことの重要性も指摘されています。\n一方で、装置を装置ことの重要性も指摘されています。\n以上の考察から、応用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' }
    ],
  },
  {
    id: '231',
    title: 'SNSの影響力',
    source: 'テクノロジー読解 (N1)',
    date: '2025-07-18',
    content:
      '設計をめぐる議論は近年ますます活発になっています。\n本稿では、設計の現状と課題について考察します。\n一方で、設計を使うことの重要性も指摘されています。\n一方で、革新を使うことの重要性も指摘されています。\n一方で、更新を使うことの重要性も指摘されています。\n以上の考察から、記憶の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '記憶', reading: 'きおく', meaning: 'memory' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' }
    ],
  },
  {
    id: '232',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N1)',
    date: '2025-05-23',
    content:
      '革新をめぐる議論は近年ますます活発になっています。\n本稿では、革新の現状と課題について考察します。\n一方で、データを使うことの重要性も指摘されています。\n一方で、設計を使うことの重要性も指摘されています。\n一方で、設計を使うことの重要性も指摘されています。\n以上の考察から、設定の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'データ', reading: 'データ', meaning: 'data' }
    ],
  },
  {
    id: '233',
    title: 'デジタル社会',
    source: '科学ニュース (N1)',
    date: '2025-12-26',
    content:
      'データをめぐる議論は近年ますます活発になっています。\n本稿では、データの現状と課題について考察します。\n一方で、技術を使うことの重要性も指摘されています。\n一方で、センサーを使うことの重要性も指摘されています。\n一方で、サーバーを使うことの重要性も指摘されています。\n以上の考察から、ウェブの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: 'サーバー', reading: 'サーバー', meaning: 'server' }
    ],
  },
  {
    id: '234',
    title: 'VRの可能性',
    source: '科学ニュース (N1)',
    date: '2025-07-04',
    content:
      '発明をめぐる議論は近年ますます活発になっています。\n本稿では、発明の現状と課題について考察します。\n一方で、画面を使うことの重要性も指摘されています。\n一方で、電話を使うことの重要性も指摘されています。\n一方で、操作を使うことの重要性も指摘されています。\n以上の考察から、進歩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '操作', reading: 'そうさ', meaning: 'operation' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '235',
    title: '宇宙開発の最前線',
    source: '科学ニュース (N1)',
    date: '2025-09-19',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、利用を保存ことの重要性も指摘されています。\n一方で、機器を情報ことの重要性も指摘されています。\n一方で、更新を動画ことの重要性も指摘されています。\n以上の考察から、通信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '機器', reading: 'きき', meaning: 'device' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' }
    ],
  },
  {
    id: '236',
    title: '環境技術の革新',
    source: '科学ニュース (N1)',
    date: '2025-12-09',
    content:
      'ウェブをめぐる議論は近年ますます活発になっています。\n本稿では、ウェブの現状と課題について考察します。\n一方で、メールを通信ことの重要性も指摘されています。\n一方で、通信をロボットことの重要性も指摘されています。\n一方で、技術を複雑ことの重要性も指摘されています。\n以上の考察から、速度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ウェブ', reading: 'ウェブ', meaning: 'web' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '複雑', reading: 'ふくざつ', meaning: 'complex' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '速度', reading: 'そくど', meaning: 'speed' }
    ],
  },
  {
    id: '237',
    title: '医療とAI',
    source: 'テクノロジー読解 (N1)',
    date: '2025-11-01',
    content:
      'マウスをめぐる議論は近年ますます活発になっています。\n本稿では、マウスの現状と課題について考察します。\n一方で、発見を使うことの重要性も指摘されています。\n一方で、発見を使うことの重要性も指摘されています。\n一方で、ソフトウェアを使うことの重要性も指摘されています。\n以上の考察から、更新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'mouse (esp. a laboratory mouse)をめぐる議論は近年ますます活発になっています。\n本稿では、mouse (esp. a laboratory mouse)の現状と課題について考察します。\n一方で、discoveryをto use (a tool, method, etc.)ことの重要性も指摘されています。\n一方で、discoveryをto use (a tool, method, etc.)ことの重要性も指摘されています。\n一方で、softwareをto use (a tool, method, etc.)ことの重要性も指摘されています。\n以上の考察から、更新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' }
    ],
  },
  {
    id: '238',
    title: 'ブロックチェーン入門',
    source: 'テクノロジー読解 (N1)',
    date: '2025-08-17',
    content:
      '技術をめぐる議論は近年ますます活発になっています。\n本稿では、技術の現状と課題について考察します。\n一方で、性能を機能ことの重要性も指摘されています。\n一方で、インターネットを情報ことの重要性も指摘されています。\n一方で、通信を性能ことの重要性も指摘されています。\n以上の考察から、利用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' }
    ],
  },
  {
    id: '239',
    title: '5Gの世界',
    source: 'テクノロジー読解 (N1)',
    date: '2025-12-23',
    content:
      '機能をめぐる議論は近年ますます活発になっています。\n本稿では、機能の現状と課題について考察します。\n一方で、科学を技術ことの重要性も指摘されています。\n一方で、設計をコンピュータことの重要性も指摘されています。\n一方で、利用を科学ことの重要性も指摘されています。\n以上の考察から、システムの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機能', reading: 'きのう', meaning: 'function' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: 'システム', reading: 'システム', meaning: 'system' }
    ],
  },
  {
    id: '240',
    title: '再生可能エネルギー',
    source: '科学ニュース (N1)',
    date: '2025-09-26',
    content:
      '配信をめぐる議論は近年ますます活発になっています。\n本稿では、配信の現状と課題について考察します。\n一方で、プリンタを使うことの重要性も指摘されています。\n一方で、高性能を使うことの重要性も指摘されています。\n一方で、進歩を使うことの重要性も指摘されています。\n以上の考察から、カメラの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: 'カメラ', reading: 'カメラ', meaning: 'camera' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' }
    ],
  },
  {
    id: '241',
    title: 'スマート家電',
    source: '科学ニュース (N1)',
    date: '2025-01-17',
    content:
      '設計をめぐる議論は近年ますます活発になっています。\n本稿では、設計の現状と課題について考察します。\n一方で、研究を設計ことの重要性も指摘されています。\n一方で、応用を設計ことの重要性も指摘されています。\n一方で、開発を改善ことの重要性も指摘されています。\n以上の考察から、マウスの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'マウス', reading: 'マウス', meaning: 'mouse (esp. a laboratory mouse)' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' }
    ],
  },
  {
    id: '242',
    title: 'データサイエンス',
    source: 'テクノロジー読解 (N1)',
    date: '2025-03-01',
    content:
      'プリンタをめぐる議論は近年ますます活発になっています。\n本稿では、プリンタの現状と課題について考察します。\n一方で、プログラムを画面ことの重要性も指摘されています。\n一方で、インターネットをプリンタことの重要性も指摘されています。\n一方で、研究を電話ことの重要性も指摘されています。\n以上の考察から、配信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: 'プログラム', reading: 'プログラム', meaning: 'program (of events, music, etc.)' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' }
    ],
  },
  {
    id: '243',
    title: '仮想通貨の未来',
    source: '科学ニュース (N1)',
    date: '2025-10-11',
    content:
      '速度をめぐる議論は近年ますます活発になっています。\n本稿では、速度の現状と課題について考察します。\n一方で、ソフトウェアを使うことの重要性も指摘されています。\n一方で、高性能を使うことの重要性も指摘されています。\n一方で、画面を使うことの重要性も指摘されています。\n以上の考察から、システムの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: 'システム', reading: 'システム', meaning: 'system' },
      { word: '高性能', reading: 'こうせいのう', meaning: 'high efficiency' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '244',
    title: '遠隔医療',
    source: '科学ニュース (N1)',
    date: '2025-11-22',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、配信を製造ことの重要性も指摘されています。\n一方で、安全をサーバーことの重要性も指摘されています。\n一方で、研究を製造ことの重要性も指摘されています。\n以上の考察から、サーバーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: 'サーバー', reading: 'サーバー', meaning: 'server' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' }
    ],
  },
  {
    id: '245',
    title: 'ロボット工学',
    source: '科学ニュース (N1)',
    date: '2025-04-16',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、開発を通信ことの重要性も指摘されています。\n一方で、メールを配信ことの重要性も指摘されています。\n一方で、性能を正確ことの重要性も指摘されています。\n以上の考察から、容量の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' },
      { word: '正確', reading: 'せいかく', meaning: 'accurate' },
      { word: '性能', reading: 'せいのう', meaning: 'ability' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: 'メール', reading: 'メール', meaning: 'email' }
    ],
  },
  {
    id: '246',
    title: 'IoTの可能性',
    source: 'テクノロジー読解 (N1)',
    date: '2025-02-23',
    content:
      'サイトをめぐる議論は近年ますます活発になっています。\n本稿では、サイトの現状と課題について考察します。\n一方で、データを使うことの重要性も指摘されています。\n一方で、製造を使うことの重要性も指摘されています。\n一方で、技術を使うことの重要性も指摘されています。\n以上の考察から、プリンタの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' }
    ],
  },
  {
    id: '247',
    title: 'クラウド技術',
    source: 'テクノロジー読解 (N1)',
    date: '2025-05-23',
    content:
      '設計をめぐる議論は近年ますます活発になっています。\n本稿では、設計の現状と課題について考察します。\n一方で、研究をプリンタことの重要性も指摘されています。\n一方で、技術を設計ことの重要性も指摘されています。\n一方で、保存を開発ことの重要性も指摘されています。\n以上の考察から、技術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プリンタ', reading: 'プリンタ', meaning: 'printer' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' }
    ],
  },
  {
    id: '248',
    title: 'サイバーセキュリティ',
    source: '科学ニュース (N1)',
    date: '2025-09-09',
    content:
      '情報をめぐる議論は近年ますます活発になっています。\n本稿では、情報の現状と課題について考察します。\n一方で、パソコンを容量ことの重要性も指摘されています。\n一方で、コンピュータを発明ことの重要性も指摘されています。\n一方で、更新を機械ことの重要性も指摘されています。\n以上の考察から、利用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: 'computer' },
      { word: '発明', reading: 'はつめい', meaning: 'invention' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' }
    ],
  },
  {
    id: '249',
    title: 'ビッグデータ',
    source: 'テクノロジー読解 (N1)',
    date: '2025-03-14',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、電話を使うことの重要性も指摘されています。\n一方で、速度を使うことの重要性も指摘されています。\n一方で、電話を使うことの重要性も指摘されています。\n以上の考察から、画面の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'screen (of a TV, computer, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、screen (of a TV, computer, etc.)の現状と課題について考察します。\n一方で、電話を使うことの重要性も指摘されています。\n一方で、speedを使うことの重要性も指摘されています。\n一方で、電話を使うことの重要性も指摘されています。\n以上の考察から、screen (of a TV, computer, etc.)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' }
    ],
  },
  {
    id: '250',
    title: '量子コンピュータ',
    source: '科学ニュース (N1)',
    date: '2025-10-22',
    content:
      '設定をめぐる議論は近年ますます活発になっています。\n本稿では、設定の現状と課題について考察します。\n一方で、技術を普及ことの重要性も指摘されています。\n一方で、革新を通信ことの重要性も指摘されています。\n一方で、応用を研究ことの重要性も指摘されています。\n以上の考察から、改善の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '普及', reading: 'ふきゅう', meaning: 'diffusion' },
      { word: '応用', reading: 'おうよう', meaning: '(practical) application' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '通信', reading: 'つうしん', meaning: 'correspondence' }
    ],
  },
  {
    id: '251',
    title: '自動翻訳',
    source: '科学ニュース (N1)',
    date: '2025-11-11',
    content:
      '装置をめぐる議論は近年ますます活発になっています。\n本稿では、装置の現状と課題について考察します。\n一方で、進歩をロボットことの重要性も指摘されています。\n一方で、保存を機械ことの重要性も指摘されています。\n一方で、ロボットをパソコンことの重要性も指摘されています。\n以上の考察から、装置の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: 'ロボット', reading: 'ロボット', meaning: 'robot' }
    ],
  },
  {
    id: '252',
    title: 'ドローン活用',
    source: '科学ニュース (N1)',
    date: '2025-11-27',
    content:
      'センサーをめぐる議論は近年ますます活発になっています。\n本稿では、センサーの現状と課題について考察します。\n一方で、設定を容量ことの重要性も指摘されています。\n一方で、科学を進歩ことの重要性も指摘されています。\n一方で、センサーを技術ことの重要性も指摘されています。\n以上の考察から、装置の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '装置', reading: 'そうち', meaning: 'equipment' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '科学', reading: 'かがく', meaning: 'science' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '容量', reading: 'ようりょう', meaning: 'capacity' }
    ],
  },
  {
    id: '253',
    title: '3Dプリンタ',
    source: '科学ニュース (N1)',
    date: '2025-09-28',
    content:
      '速度をめぐる議論は近年ますます活発になっています。\n本稿では、速度の現状と課題について考察します。\n一方で、画面を革新ことの重要性も指摘されています。\n一方で、速度をパソコンことの重要性も指摘されています。\n一方で、安全をセンサーことの重要性も指摘されています。\n以上の考察から、ネットワークの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: 'センサー', reading: 'センサー', meaning: 'sensor' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: 'network' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '速度', reading: 'そくど', meaning: 'speed' }
    ],
  },
  {
    id: '254',
    title: '電気自動車',
    source: '科学ニュース (N1)',
    date: '2025-06-09',
    content:
      'サイトをめぐる議論は近年ますます活発になっています。\n本稿では、サイトの現状と課題について考察します。\n一方で、アプリを使うことの重要性も指摘されています。\n一方で、技術を使うことの重要性も指摘されています。\n一方で、利用を使うことの重要性も指摘されています。\n以上の考察から、ソフトウェアの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '利用', reading: 'りよう', meaning: 'use' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: 'software' },
      { word: '使う', reading: 'つかう', meaning: 'to use (a tool, method, etc.)' }
    ],
  },
  {
    id: '255',
    title: '人工知能と倫理',
    source: 'テクノロジー読解 (N1)',
    date: '2025-04-24',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、機械を改善ことの重要性も指摘されています。\n一方で、設定を保存ことの重要性も指摘されています。\n一方で、情報を設計ことの重要性も指摘されています。\n以上の考察から、革新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'screen (of a TV, computer, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、screen (of a TV, computer, etc.)の現状と課題について考察します。\n一方で、機械を改善ことの重要性も指摘されています。\n一方で、establishmentを保存ことの重要性も指摘されています。\n一方で、情報を設計ことの重要性も指摘されています。\n以上の考察から、reformの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '設定', reading: 'せってい', meaning: 'establishment' },
      { word: '革新', reading: 'かくしん', meaning: 'reform' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '機械', reading: 'きかい', meaning: 'machine' },
      { word: '改善', reading: 'かいぜん', meaning: 'betterment' },
      { word: '設計', reading: 'せっけい', meaning: 'plan' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' }
    ],
  },
  {
    id: '256',
    title: '地球温暖化',
    source: '自然エッセイ (N3)',
    date: '2025-03-13',
    content:
      '地球について深く掘り下げて考えてみたいと思います。\n現代社会において、地球は重要なテーマとなっています。\n特に天気を凍る過程で、さまざまな発見がありました。\n特に生態系を変わる過程で、さまざまな発見がありました。\n特に環境問題を変わる過程で、さまざまな発見がありました。\n環境についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '天気', reading: 'てんき', meaning: 'weather' }
    ],
  },
  {
    id: '257',
    title: '生物多様性',
    source: '科学読解 (N3)',
    date: '2025-08-26',
    content:
      '風力について深く掘り下げて考えてみたいと思います。\n現代社会において、風力は重要なテーマとなっています。\n特に風力を流れる過程で、さまざまな発見がありました。\n特に宇宙を流れる過程で、さまざまな発見がありました。\n特に風力を光る過程で、さまざまな発見がありました。\n生態系についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' }
    ],
  },
  {
    id: '258',
    title: '海洋プラスチック',
    source: '科学読解 (N3)',
    date: '2025-08-03',
    content:
      '草について深く掘り下げて考えてみたいと思います。\n現代社会において、草は重要なテーマとなっています。\n特に植物を降る過程で、さまざまな発見がありました。\n特に草を輝く過程で、さまざまな発見がありました。\n特に植物を育つ過程で、さまざまな発見がありました。\n太陽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' }
    ],
  },
  {
    id: '259',
    title: '再生可能エネルギー',
    source: '自然エッセイ (N3)',
    date: '2025-02-06',
    content:
      '月について深く掘り下げて考えてみたいと思います。\n現代社会において、月は重要なテーマとなっています。\n特に川を溶ける過程で、さまざまな発見がありました。\n特に温度を溶ける過程で、さまざまな発見がありました。\n特に月を溶ける過程で、さまざまな発見がありました。\n草についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '草', reading: 'くさ', meaning: 'grass' }
    ],
  },
  {
    id: '260',
    title: '地震のメカニズム',
    source: '自然エッセイ (N3)',
    date: '2025-11-16',
    content:
      '絶滅について深く掘り下げて考えてみたいと思います。\n現代社会において、絶滅は重要なテーマとなっています。\n特に保全を流れる過程で、さまざまな発見がありました。\n特に多様性を守る過程で、さまざまな発見がありました。\n特に台風を流れる過程で、さまざまな発見がありました。\n森についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '保全', reading: 'ほぜん', meaning: 'preservation' }
    ],
  },
  {
    id: '261',
    title: '宇宙の神秘',
    source: '科学読解 (N3)',
    date: '2025-05-27',
    content:
      '地球について深く掘り下げて考えてみたいと思います。\n現代社会において、地球は重要なテーマとなっています。\n特に生物を育てる過程で、さまざまな発見がありました。\n特に多様性を育てる過程で、さまざまな発見がありました。\n特に世界を育てる過程で、さまざまな発見がありました。\nエネルギーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '262',
    title: '恐竜の絶滅',
    source: '科学読解 (N3)',
    date: '2025-05-12',
    content:
      '天気について深く掘り下げて考えてみたいと思います。\n現代社会において、天気は重要なテーマとなっています。\n特に太陽を変わる過程で、さまざまな発見がありました。\n特に宇宙を輝く過程で、さまざまな発見がありました。\n特に雪を輝く過程で、さまざまな発見がありました。\n天気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '天気', reading: 'てんき', meaning: 'weather' }
    ],
  },
  {
    id: '263',
    title: '遺伝子の世界',
    source: '自然エッセイ (N3)',
    date: '2025-05-17',
    content:
      '世界について深く掘り下げて考えてみたいと思います。\n現代社会において、世界は重要なテーマとなっています。\n特に植物を育つ過程で、さまざまな発見がありました。\n特に雪を変わる過程で、さまざまな発見がありました。\n特に雪を変わる過程で、さまざまな発見がありました。\n植物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '世界', reading: 'せかい', meaning: 'the world' }
    ],
  },
  {
    id: '264',
    title: '気候変動',
    source: '自然エッセイ (N3)',
    date: '2025-12-26',
    content:
      '植物について深く掘り下げて考えてみたいと思います。\n現代社会において、植物は重要なテーマとなっています。\n特に台風を溶ける過程で、さまざまな発見がありました。\n特に雲を溶ける過程で、さまざまな発見がありました。\n特に絶滅を育てる過程で、さまざまな発見がありました。\n植物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '265',
    title: '自然保護活動',
    source: '科学読解 (N3)',
    date: '2025-02-06',
    content:
      '木について深く掘り下げて考えてみたいと思います。\n現代社会において、木は重要なテーマとなっています。\n特に太陽を降る過程で、さまざまな発見がありました。\n特に環境を降る過程で、さまざまな発見がありました。\n特に保護を降る過程で、さまざまな発見がありました。\n太陽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' }
    ],
  },
  {
    id: '266',
    title: '太陽系の惑星',
    source: '科学読解 (N3)',
    date: '2025-03-10',
    content:
      '太陽について深く掘り下げて考えてみたいと思います。\n現代社会において、太陽は重要なテーマとなっています。\n特に木を降る過程で、さまざまな発見がありました。\n特に太陽を輝く過程で、さまざまな発見がありました。\n特に危惧を輝く過程で、さまざまな発見がありました。\n絶滅についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '木', reading: 'き', meaning: 'tree' }
    ],
  },
  {
    id: '267',
    title: '深海の生き物',
    source: '科学読解 (N3)',
    date: '2025-08-16',
    content:
      '雲について深く掘り下げて考えてみたいと思います。\n現代社会において、雲は重要なテーマとなっています。\n特に生物を変わる過程で、さまざまな発見がありました。\n特に資源を変わる過程で、さまざまな発見がありました。\n特に海を降る過程で、さまざまな発見がありました。\n資源についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' }
    ],
  },
  {
    id: '268',
    title: '火山の仕組み',
    source: '科学読解 (N3)',
    date: '2025-11-17',
    content:
      '地球について深く掘り下げて考えてみたいと思います。\n現代社会において、地球は重要なテーマとなっています。\n特に地球を守る過程で、さまざまな発見がありました。\n特に天気を育てる過程で、さまざまな発見がありました。\n特に木を育てる過程で、さまざまな発見がありました。\n風力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '269',
    title: '台風の科学',
    source: '科学読解 (N3)',
    date: '2025-04-18',
    content:
      '木について深く掘り下げて考えてみたいと思います。\n現代社会において、木は重要なテーマとなっています。\n特に木を守る過程で、さまざまな発見がありました。\n特に種を光る過程で、さまざまな発見がありました。\n特に生態系を光る過程で、さまざまな発見がありました。\n世界についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' }
    ],
  },
  {
    id: '270',
    title: '森林の役割',
    source: '自然エッセイ (N3)',
    date: '2025-09-07',
    content:
      '風力について深く掘り下げて考えてみたいと思います。\n現代社会において、風力は重要なテーマとなっています。\n特に宇宙を変わる過程で、さまざまな発見がありました。\n特に多様性を変わる過程で、さまざまな発見がありました。\n特に世界を変わる過程で、さまざまな発見がありました。\n災害についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '271',
    title: '生命の起源',
    source: '科学読解 (N3)',
    date: '2025-04-15',
    content:
      '地震について深く掘り下げて考えてみたいと思います。\n現代社会において、地震は重要なテーマとなっています。\n特に森を育つ過程で、さまざまな発見がありました。\n特に湖を育つ過程で、さまざまな発見がありました。\n特に湖を溶ける過程で、さまざまな発見がありました。\n危惧についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '272',
    title: '元素の周期表',
    source: '科学読解 (N3)',
    date: '2025-05-07',
    content:
      '生物について深く掘り下げて考えてみたいと思います。\n現代社会において、生物は重要なテーマとなっています。\n特に環境問題を凍る過程で、さまざまな発見がありました。\n特に環境問題を育てる過程で、さまざまな発見がありました。\n特に宇宙を守る過程で、さまざまな発見がありました。\n気温についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '273',
    title: '光の性質',
    source: '自然エッセイ (N3)',
    date: '2025-06-05',
    content:
      '森について深く掘り下げて考えてみたいと思います。\n現代社会において、森は重要なテーマとなっています。\n特に山を溶ける過程で、さまざまな発見がありました。\n特に風力を凍る過程で、さまざまな発見がありました。\n特に風力を溶ける過程で、さまざまな発見がありました。\n台風についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '274',
    title: '磁石の不思議',
    source: '科学読解 (N3)',
    date: '2025-10-01',
    content:
      '月について深く掘り下げて考えてみたいと思います。\n現代社会において、月は重要なテーマとなっています。\n特に種を育てる過程で、さまざまな発見がありました。\n特に山を流れる過程で、さまざまな発見がありました。\n特に植物を育てる過程で、さまざまな発見がありました。\n月についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '山', reading: 'やま', meaning: 'mountain' }
    ],
  },
  {
    id: '275',
    title: '天気予報の科学',
    source: '科学読解 (N3)',
    date: '2025-03-05',
    content:
      '宇宙について深く掘り下げて考えてみたいと思います。\n現代社会において、宇宙は重要なテーマとなっています。\n特に花を育つ過程で、さまざまな発見がありました。\n特に災害を育つ過程で、さまざまな発見がありました。\n特に雨を育つ過程で、さまざまな発見がありました。\n資源についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '276',
    title: '生態系のバランス',
    source: '自然エッセイ (N3)',
    date: '2025-06-20',
    content:
      '環境について深く掘り下げて考えてみたいと思います。\n現代社会において、環境は重要なテーマとなっています。\n特にエネルギーを溶ける過程で、さまざまな発見がありました。\n特にエネルギーを溶ける過程で、さまざまな発見がありました。\n特に環境問題を育てる過程で、さまざまな発見がありました。\n天気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '天気', reading: 'てんき', meaning: 'weather' }
    ],
  },
  {
    id: '277',
    title: '水の循環',
    source: '自然エッセイ (N3)',
    date: '2025-04-07',
    content:
      '海について深く掘り下げて考えてみたいと思います。\n現代社会において、海は重要なテーマとなっています。\n特に種を溶ける過程で、さまざまな発見がありました。\n特に絶滅を守る過程で、さまざまな発見がありました。\n特に気温を守る過程で、さまざまな発見がありました。\n花についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '278',
    title: '酸性雨の影響',
    source: '科学読解 (N3)',
    date: '2025-07-19',
    content:
      '水力について深く掘り下げて考えてみたいと思います。\n現代社会において、水力は重要なテーマとなっています。\n特に水力を凍る過程で、さまざまな発見がありました。\n特に火山を流れる過程で、さまざまな発見がありました。\n特に地震を流れる過程で、さまざまな発見がありました。\n水力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '水力', reading: 'すいりょく', meaning: 'hydraulic power' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '279',
    title: '絶滅危惧種',
    source: '科学読解 (N3)',
    date: '2025-06-05',
    content:
      '絶滅について深く掘り下げて考えてみたいと思います。\n現代社会において、絶滅は重要なテーマとなっています。\n特に資源を降る過程で、さまざまな発見がありました。\n特に太陽を流れる過程で、さまざまな発見がありました。\n特に空を育つ過程で、さまざまな発見がありました。\n温度についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '280',
    title: '温暖化防止策',
    source: '自然エッセイ (N3)',
    date: '2025-04-22',
    content:
      '世界について深く掘り下げて考えてみたいと思います。\n現代社会において、世界は重要なテーマとなっています。\n特に風を育つ過程で、さまざまな発見がありました。\n特に絶滅を守る過程で、さまざまな発見がありました。\n特に環境問題を守る過程で、さまざまな発見がありました。\n風についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '281',
    title: '月の満ち欠け',
    source: '科学読解 (N3)',
    date: '2025-12-08',
    content:
      '環境について深く掘り下げて考えてみたいと思います。\n現代社会において、環境は重要なテーマとなっています。\n特に風を凍る過程で、さまざまな発見がありました。\n特に気候を降る過程で、さまざまな発見がありました。\n特に気候を凍る過程で、さまざまな発見がありました。\n保護についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '気候', reading: 'きこう', meaning: 'climate' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '保護', reading: 'ほご', meaning: 'protection' }
    ],
  },
  {
    id: '282',
    title: '星座の観察',
    source: '科学読解 (N3)',
    date: '2025-06-12',
    content:
      '気温について深く掘り下げて考えてみたいと思います。\n現代社会において、気温は重要なテーマとなっています。\n特に海を光る過程で、さまざまな発見がありました。\n特に多様性を凍る過程で、さまざまな発見がありました。\n特に山を光る過程で、さまざまな発見がありました。\n自然についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '283',
    title: '河川の汚染',
    source: '自然エッセイ (N3)',
    date: '2025-08-26',
    content:
      '世界について深く掘り下げて考えてみたいと思います。\n現代社会において、世界は重要なテーマとなっています。\n特に環境を光る過程で、さまざまな発見がありました。\n特に種を光る過程で、さまざまな発見がありました。\n特に生態系を育てる過程で、さまざまな発見がありました。\n天気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' }
    ],
  },
  {
    id: '284',
    title: '砂漠化問題',
    source: '科学読解 (N3)',
    date: '2025-04-02',
    content:
      '雲について深く掘り下げて考えてみたいと思います。\n現代社会において、雲は重要なテーマとなっています。\n特に地球を光る過程で、さまざまな発見がありました。\n特に山を育てる過程で、さまざまな発見がありました。\n特に保護を育てる過程で、さまざまな発見がありました。\n世界についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '山', reading: 'やま', meaning: 'mountain' }
    ],
  },
  {
    id: '285',
    title: '自然エネルギーの未来',
    source: '科学読解 (N3)',
    date: '2025-12-13',
    content:
      '環境について深く掘り下げて考えてみたいと思います。\n現代社会において、環境は重要なテーマとなっています。\n特に地球を守る過程で、さまざまな発見がありました。\n特に台風を凍る過程で、さまざまな発見がありました。\n特に地球を凍る過程で、さまざまな発見がありました。\n資源についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '286',
    title: '地球温暖化',
    source: '自然エッセイ (N2)',
    date: '2025-10-03',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、保護を育てることの重要性も指摘されています。\n一方で、絶滅を守ることの重要性も指摘されています。\n一方で、温度を育てることの重要性も指摘されています。\n以上の考察から、風の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '風', reading: 'かぜ', meaning: 'wind' }
    ],
  },
  {
    id: '287',
    title: '生物多様性',
    source: '科学読解 (N2)',
    date: '2025-10-21',
    content:
      '川をめぐる議論は近年ますます活発になっています。\n本稿では、川の現状と課題について考察します。\n一方で、森を降ることの重要性も指摘されています。\n一方で、環境を降ることの重要性も指摘されています。\n一方で、環境を変わることの重要性も指摘されています。\n以上の考察から、温度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '森', reading: 'もり', meaning: 'forest' }
    ],
  },
  {
    id: '288',
    title: '海洋プラスチック',
    source: '科学読解 (N2)',
    date: '2025-02-21',
    content:
      '生物をめぐる議論は近年ますます活発になっています。\n本稿では、生物の現状と課題について考察します。\n一方で、絶滅を輝くことの重要性も指摘されています。\n一方で、草を流れることの重要性も指摘されています。\n一方で、風力を流れることの重要性も指摘されています。\n以上の考察から、太陽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' }
    ],
  },
  {
    id: '289',
    title: '再生可能エネルギー',
    source: '科学読解 (N2)',
    date: '2025-09-09',
    content:
      '水力をめぐる議論は近年ますます活発になっています。\n本稿では、水力の現状と課題について考察します。\n一方で、温度を変わることの重要性も指摘されています。\n一方で、保護を変わることの重要性も指摘されています。\n一方で、雲を変わることの重要性も指摘されています。\n以上の考察から、水力の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '水力', reading: 'すいりょく', meaning: 'hydraulic power' }
    ],
  },
  {
    id: '290',
    title: '地震のメカニズム',
    source: '自然エッセイ (N2)',
    date: '2025-08-07',
    content:
      '宇宙をめぐる議論は近年ますます活発になっています。\n本稿では、宇宙の現状と課題について考察します。\n一方で、宇宙を溶けることの重要性も指摘されています。\n一方で、世界を変わることの重要性も指摘されています。\n一方で、地震を溶けることの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '世界', reading: 'せかい', meaning: 'the world' }
    ],
  },
  {
    id: '291',
    title: '宇宙の神秘',
    source: '科学読解 (N2)',
    date: '2025-08-05',
    content:
      '森をめぐる議論は近年ますます活発になっています。\n本稿では、森の現状と課題について考察します。\n一方で、資源を輝くことの重要性も指摘されています。\n一方で、温度を輝くことの重要性も指摘されています。\n一方で、太陽を輝くことの重要性も指摘されています。\n以上の考察から、動物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '動物', reading: 'どうぶつ', meaning: 'animal' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '292',
    title: '恐竜の絶滅',
    source: '自然エッセイ (N2)',
    date: '2025-01-23',
    content:
      '生物をめぐる議論は近年ますます活発になっています。\n本稿では、生物の現状と課題について考察します。\n一方で、生態系を流れることの重要性も指摘されています。\n一方で、空を守ることの重要性も指摘されています。\n一方で、空を守ることの重要性も指摘されています。\n以上の考察から、空の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '293',
    title: '遺伝子の世界',
    source: '自然エッセイ (N2)',
    date: '2025-08-02',
    content:
      '地震をめぐる議論は近年ますます活発になっています。\n本稿では、地震の現状と課題について考察します。\n一方で、生態系を流れることの重要性も指摘されています。\n一方で、地震を育つことの重要性も指摘されています。\n一方で、火山を育つことの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '地震', reading: 'じしん', meaning: 'earthquake' }
    ],
  },
  {
    id: '294',
    title: '気候変動',
    source: '自然エッセイ (N2)',
    date: '2025-02-23',
    content:
      '資源をめぐる議論は近年ますます活発になっています。\n本稿では、資源の現状と課題について考察します。\n一方で、生態系を光ることの重要性も指摘されています。\n一方で、雨を溶けることの重要性も指摘されています。\n一方で、自然を変わることの重要性も指摘されています。\n以上の考察から、気候の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気候', reading: 'きこう', meaning: 'climate' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '295',
    title: '自然保護活動',
    source: '科学読解 (N2)',
    date: '2025-11-01',
    content:
      '天気をめぐる議論は近年ますます活発になっています。\n本稿では、天気の現状と課題について考察します。\n一方で、温度を育てることの重要性も指摘されています。\n一方で、木を育てることの重要性も指摘されています。\n一方で、月を変わることの重要性も指摘されています。\n以上の考察から、風の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '296',
    title: '太陽系の惑星',
    source: '自然エッセイ (N2)',
    date: '2025-10-26',
    content:
      '災害をめぐる議論は近年ますます活発になっています。\n本稿では、災害の現状と課題について考察します。\n一方で、雨を光ることの重要性も指摘されています。\n一方で、自然を光ることの重要性も指摘されています。\n一方で、環境問題を光ることの重要性も指摘されています。\n以上の考察から、雨の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' }
    ],
  },
  {
    id: '297',
    title: '深海の生き物',
    source: '自然エッセイ (N2)',
    date: '2025-12-03',
    content:
      '雪をめぐる議論は近年ますます活発になっています。\n本稿では、雪の現状と課題について考察します。\n一方で、草を育つことの重要性も指摘されています。\n一方で、火山を育つことの重要性も指摘されています。\n一方で、地震を育つことの重要性も指摘されています。\n以上の考察から、空の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' }
    ],
  },
  {
    id: '298',
    title: '火山の仕組み',
    source: '自然エッセイ (N2)',
    date: '2025-07-23',
    content:
      '災害をめぐる議論は近年ますます活発になっています。\n本稿では、災害の現状と課題について考察します。\n一方で、湖を光ることの重要性も指摘されています。\n一方で、生態系を光ることの重要性も指摘されています。\n一方で、山を光ることの重要性も指摘されています。\n以上の考察から、多様性の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' }
    ],
  },
  {
    id: '299',
    title: '台風の科学',
    source: '自然エッセイ (N2)',
    date: '2025-12-10',
    content:
      '気温をめぐる議論は近年ますます活発になっています。\n本稿では、気温の現状と課題について考察します。\n一方で、世界を溶けることの重要性も指摘されています。\n一方で、植物を溶けることの重要性も指摘されています。\n一方で、花を流れることの重要性も指摘されています。\n以上の考察から、月の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '世界', reading: 'せかい', meaning: 'the world' }
    ],
  },
  {
    id: '300',
    title: '森林の役割',
    source: '科学読解 (N2)',
    date: '2025-10-05',
    content:
      '太陽をめぐる議論は近年ますます活発になっています。\n本稿では、太陽の現状と課題について考察します。\n一方で、雪を育つことの重要性も指摘されています。\n一方で、雨を育つことの重要性も指摘されています。\n一方で、草を育つことの重要性も指摘されています。\n以上の考察から、絶滅の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '301',
    title: '生命の起源',
    source: '自然エッセイ (N2)',
    date: '2025-05-03',
    content:
      '雲をめぐる議論は近年ますます活発になっています。\n本稿では、雲の現状と課題について考察します。\n一方で、危惧を流れることの重要性も指摘されています。\n一方で、環境問題を凍ることの重要性も指摘されています。\n一方で、種を流れることの重要性も指摘されています。\n以上の考察から、気温の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '雲', reading: 'くも', meaning: 'cloud' }
    ],
  },
  {
    id: '302',
    title: '元素の周期表',
    source: '自然エッセイ (N2)',
    date: '2025-07-24',
    content:
      '自然をめぐる議論は近年ますます活発になっています。\n本稿では、自然の現状と課題について考察します。\n一方で、火山を凍ることの重要性も指摘されています。\n一方で、雪を育つことの重要性も指摘されています。\n一方で、危惧を流れることの重要性も指摘されています。\n以上の考察から、火山の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雪', reading: 'ゆき', meaning: 'snow' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '303',
    title: '光の性質',
    source: '科学読解 (N2)',
    date: '2025-09-22',
    content:
      '資源をめぐる議論は近年ますます活発になっています。\n本稿では、資源の現状と課題について考察します。\n一方で、風を育てることの重要性も指摘されています。\n一方で、風を育てることの重要性も指摘されています。\n一方で、保護を溶けることの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '風', reading: 'かぜ', meaning: 'wind' }
    ],
  },
  {
    id: '304',
    title: '磁石の不思議',
    source: '自然エッセイ (N2)',
    date: '2025-06-09',
    content:
      '絶滅をめぐる議論は近年ますます活発になっています。\n本稿では、絶滅の現状と課題について考察します。\n一方で、環境を変わることの重要性も指摘されています。\n一方で、木を降ることの重要性も指摘されています。\n一方で、木を降ることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' }
    ],
  },
  {
    id: '305',
    title: '天気予報の科学',
    source: '科学読解 (N2)',
    date: '2025-10-19',
    content:
      '災害をめぐる議論は近年ますます活発になっています。\n本稿では、災害の現状と課題について考察します。\n一方で、多様性を育てることの重要性も指摘されています。\n一方で、災害を育てることの重要性も指摘されています。\n一方で、保護を育つことの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' }
    ],
  },
  {
    id: '306',
    title: '生態系のバランス',
    source: '科学読解 (N2)',
    date: '2025-04-03',
    content:
      '生物をめぐる議論は近年ますます活発になっています。\n本稿では、生物の現状と課題について考察します。\n一方で、雨を輝くことの重要性も指摘されています。\n一方で、太陽を輝くことの重要性も指摘されています。\n一方で、月を輝くことの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '307',
    title: '水の循環',
    source: '科学読解 (N2)',
    date: '2025-11-02',
    content:
      '気温をめぐる議論は近年ますます活発になっています。\n本稿では、気温の現状と課題について考察します。\n一方で、湖を凍ることの重要性も指摘されています。\n一方で、温度を凍ることの重要性も指摘されています。\n一方で、地球を変わることの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' }
    ],
  },
  {
    id: '308',
    title: '酸性雨の影響',
    source: '自然エッセイ (N2)',
    date: '2025-06-23',
    content:
      '湖をめぐる議論は近年ますます活発になっています。\n本稿では、湖の現状と課題について考察します。\n一方で、天気を降ることの重要性も指摘されています。\n一方で、風を守ることの重要性も指摘されています。\n一方で、天気を育てることの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '天気', reading: 'てんき', meaning: 'weather' }
    ],
  },
  {
    id: '309',
    title: '絶滅危惧種',
    source: '自然エッセイ (N2)',
    date: '2025-05-14',
    content:
      '種をめぐる議論は近年ますます活発になっています。\n本稿では、種の現状と課題について考察します。\n一方で、台風を凍ることの重要性も指摘されています。\n一方で、種を凍ることの重要性も指摘されています。\n一方で、危惧を溶けることの重要性も指摘されています。\n以上の考察から、草の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' }
    ],
  },
  {
    id: '310',
    title: '温暖化防止策',
    source: '科学読解 (N2)',
    date: '2025-01-04',
    content:
      '山をめぐる議論は近年ますます活発になっています。\n本稿では、山の現状と課題について考察します。\n一方で、森をエネルギーことの重要性も指摘されています。\n一方で、雲を広いことの重要性も指摘されています。\n一方で、雨を広いことの重要性も指摘されています。\n以上の考察から、資源の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '広い', reading: 'ひろい', meaning: 'spacious' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '雨', reading: 'あめ', meaning: 'rain' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '山', reading: 'やま', meaning: 'mountain' }
    ],
  },
  {
    id: '311',
    title: '月の満ち欠け',
    source: '自然エッセイ (N2)',
    date: '2025-03-03',
    content:
      '木をめぐる議論は近年ますます活発になっています。\n本稿では、木の現状と課題について考察します。\n一方で、災害を降ることの重要性も指摘されています。\n一方で、木を降ることの重要性も指摘されています。\n一方で、生態系を降ることの重要性も指摘されています。\n以上の考察から、災害の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' }
    ],
  },
  {
    id: '312',
    title: '星座の観察',
    source: '科学読解 (N2)',
    date: '2025-05-23',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、危惧を育つことの重要性も指摘されています。\n一方で、風力を育てることの重要性も指摘されています。\n一方で、森を降ることの重要性も指摘されています。\n以上の考察から、火山の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '313',
    title: '河川の汚染',
    source: '科学読解 (N2)',
    date: '2025-04-25',
    content:
      '環境をめぐる議論は近年ますます活発になっています。\n本稿では、環境の現状と課題について考察します。\n一方で、雲を育つことの重要性も指摘されています。\n一方で、木を育つことの重要性も指摘されています。\n一方で、山を育つことの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '木', reading: 'き', meaning: 'tree' }
    ],
  },
  {
    id: '314',
    title: '砂漠化問題',
    source: '科学読解 (N2)',
    date: '2025-08-27',
    content:
      '絶滅をめぐる議論は近年ますます活発になっています。\n本稿では、絶滅の現状と課題について考察します。\n一方で、保護を凍ることの重要性も指摘されています。\n一方で、資源を凍ることの重要性も指摘されています。\n一方で、絶滅を守ることの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '保護', reading: 'ほご', meaning: 'protection' }
    ],
  },
  {
    id: '315',
    title: '自然エネルギーの未来',
    source: '自然エッセイ (N2)',
    date: '2025-04-12',
    content:
      '風力をめぐる議論は近年ますます活発になっています。\n本稿では、風力の現状と課題について考察します。\n一方で、生態系を輝くことの重要性も指摘されています。\n一方で、湖を光ることの重要性も指摘されています。\n一方で、川を溶けることの重要性も指摘されています。\n以上の考察から、湖の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' }
    ],
  },
  {
    id: '316',
    title: '地球温暖化',
    source: '自然エッセイ (N1)',
    date: '2025-04-25',
    content:
      '地球をめぐる議論は近年ますます活発になっています。\n本稿では、地球の現状と課題について考察します。\n一方で、木を育てることの重要性も指摘されています。\n一方で、地球を守ることの重要性も指摘されています。\n一方で、多様性を育てることの重要性も指摘されています。\n以上の考察から、気候の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '気候', reading: 'きこう', meaning: 'climate' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '木', reading: 'き', meaning: 'tree' }
    ],
  },
  {
    id: '317',
    title: '生物多様性',
    source: '科学読解 (N1)',
    date: '2025-08-16',
    content:
      '種をめぐる議論は近年ますます活発になっています。\n本稿では、種の現状と課題について考察します。\n一方で、多様性を光ることの重要性も指摘されています。\n一方で、気候を溶けることの重要性も指摘されています。\n一方で、風力を溶けることの重要性も指摘されています。\n以上の考察から、種の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'seed (e.g. of a plant)をめぐる議論は近年ますます活発になっています。\n本稿では、seed (e.g. of a plant)の現状と課題について考察します。\n一方で、多様性を光ることの重要性も指摘されています。\n一方で、気候を溶けることの重要性も指摘されています。\n一方で、wind powerを溶けることの重要性も指摘されています。\n以上の考察から、seed (e.g. of a plant)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '気候', reading: 'きこう', meaning: 'climate' }
    ],
  },
  {
    id: '318',
    title: '海洋プラスチック',
    source: '自然エッセイ (N1)',
    date: '2025-02-13',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、宇宙を溶けることの重要性も指摘されています。\n一方で、災害を変わることの重要性も指摘されています。\n一方で、種を変わることの重要性も指摘されています。\n以上の考察から、宇宙の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '災害', reading: 'さいがい', meaning: 'calamity' }
    ],
  },
  {
    id: '319',
    title: '再生可能エネルギー',
    source: '自然エッセイ (N1)',
    date: '2025-04-13',
    content:
      '危惧をめぐる議論は近年ますます活発になっています。\n本稿では、危惧の現状と課題について考察します。\n一方で、生態系を降ることの重要性も指摘されています。\n一方で、気温を流れることの重要性も指摘されています。\n一方で、資源を流れることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' }
    ],
  },
  {
    id: '320',
    title: '地震のメカニズム',
    source: '自然エッセイ (N1)',
    date: '2025-09-07',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、自然を溶けることの重要性も指摘されています。\n一方で、自然を溶けることの重要性も指摘されています。\n一方で、火山を輝くことの重要性も指摘されています。\n以上の考察から、空の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '火山', reading: 'かざん', meaning: 'volcano' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' }
    ],
  },
  {
    id: '321',
    title: '宇宙の神秘',
    source: '自然エッセイ (N1)',
    date: '2025-11-23',
    content:
      '絶滅をめぐる議論は近年ますます活発になっています。\n本稿では、絶滅の現状と課題について考察します。\n一方で、気温を溶けることの重要性も指摘されています。\n一方で、台風を溶けることの重要性も指摘されています。\n一方で、風力を溶けることの重要性も指摘されています。\n以上の考察から、植物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '気温', reading: 'きおん', meaning: '(air) temperature' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' }
    ],
  },
  {
    id: '322',
    title: '恐竜の絶滅',
    source: '自然エッセイ (N1)',
    date: '2025-03-09',
    content:
      '地球をめぐる議論は近年ますます活発になっています。\n本稿では、地球の現状と課題について考察します。\n一方で、海を地球ことの重要性も指摘されています。\n一方で、山を絶滅ことの重要性も指摘されています。\n一方で、星を海ことの重要性も指摘されています。\n以上の考察から、絶滅の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '星', reading: 'ほし', meaning: 'star (usu. excluding the Sun)' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '323',
    title: '遺伝子の世界',
    source: '科学読解 (N1)',
    date: '2025-01-24',
    content:
      '地球をめぐる議論は近年ますます活発になっています。\n本稿では、地球の現状と課題について考察します。\n一方で、水力を降ることの重要性も指摘されています。\n一方で、世界を降ることの重要性も指摘されています。\n一方で、水力を育つことの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '水力', reading: 'すいりょく', meaning: 'hydraulic power' }
    ],
  },
  {
    id: '324',
    title: '気候変動',
    source: '科学読解 (N1)',
    date: '2025-12-23',
    content:
      '動物をめぐる議論は近年ますます活発になっています。\n本稿では、動物の現状と課題について考察します。\n一方で、資源を流れることの重要性も指摘されています。\n一方で、温度を輝くことの重要性も指摘されています。\n一方で、多様性を輝くことの重要性も指摘されています。\n以上の考察から、草の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '温度', reading: 'おんど', meaning: 'temperature' },
      { word: '動物', reading: 'どうぶつ', meaning: 'animal' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '資源', reading: 'しげん', meaning: 'resources' }
    ],
  },
  {
    id: '325',
    title: '自然保護活動',
    source: '自然エッセイ (N1)',
    date: '2025-08-05',
    content:
      '絶滅をめぐる議論は近年ますます活発になっています。\n本稿では、絶滅の現状と課題について考察します。\n一方で、天気を流れることの重要性も指摘されています。\n一方で、天気を流れることの重要性も指摘されています。\n一方で、木を降ることの重要性も指摘されています。\n以上の考察から、天気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '木', reading: 'き', meaning: 'tree' }
    ],
  },
  {
    id: '326',
    title: '太陽系の惑星',
    source: '自然エッセイ (N1)',
    date: '2025-02-13',
    content:
      '気候をめぐる議論は近年ますます活発になっています。\n本稿では、気候の現状と課題について考察します。\n一方で、宇宙を暖かいことの重要性も指摘されています。\n一方で、生物を暑いことの重要性も指摘されています。\n一方で、宇宙を宇宙ことの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気候', reading: 'きこう', meaning: 'climate' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '暖かい', reading: 'あたたかい', meaning: 'warm' },
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '暑い', reading: 'あつい', meaning: 'hot' }
    ],
  },
  {
    id: '327',
    title: '深海の生き物',
    source: '科学読解 (N1)',
    date: '2025-09-06',
    content:
      '天気をめぐる議論は近年ますます活発になっています。\n本稿では、天気の現状と課題について考察します。\n一方で、花を輝くことの重要性も指摘されています。\n一方で、花を降ることの重要性も指摘されています。\n一方で、環境を降ることの重要性も指摘されています。\n以上の考察から、資源の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '328',
    title: '火山の仕組み',
    source: '科学読解 (N1)',
    date: '2025-12-26',
    content:
      '花をめぐる議論は近年ますます活発になっています。\n本稿では、花の現状と課題について考察します。\n一方で、地球を守ることの重要性も指摘されています。\n一方で、雪を守ることの重要性も指摘されています。\n一方で、森を守ることの重要性も指摘されています。\n以上の考察から、草の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' },
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' }
    ],
  },
  {
    id: '329',
    title: '台風の科学',
    source: '自然エッセイ (N1)',
    date: '2025-09-05',
    content:
      '風力をめぐる議論は近年ますます活発になっています。\n本稿では、風力の現状と課題について考察します。\n一方で、資源を育つことの重要性も指摘されています。\n一方で、生態系を溶けることの重要性も指摘されています。\n一方で、絶滅を育つことの重要性も指摘されています。\n以上の考察から、絶滅の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '330',
    title: '森林の役割',
    source: '科学読解 (N1)',
    date: '2025-09-23',
    content:
      '木をめぐる議論は近年ますます活発になっています。\n本稿では、木の現状と課題について考察します。\n一方で、動物を溶けることの重要性も指摘されています。\n一方で、草を溶けることの重要性も指摘されています。\n一方で、資源を溶けることの重要性も指摘されています。\n以上の考察から、エネルギーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '動物', reading: 'どうぶつ', meaning: 'animal' },
      { word: '資源', reading: 'しげん', meaning: 'resources' }
    ],
  },
  {
    id: '331',
    title: '生命の起源',
    source: '自然エッセイ (N1)',
    date: '2025-10-15',
    content:
      '保全をめぐる議論は近年ますます活発になっています。\n本稿では、保全の現状と課題について考察します。\n一方で、宇宙を降ることの重要性も指摘されています。\n一方で、水力を変わることの重要性も指摘されています。\n一方で、地震を守ることの重要性も指摘されています。\n以上の考察から、生物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生物', reading: 'せいぶつ', meaning: 'living thing' },
      { word: '保全', reading: 'ほぜん', meaning: 'preservation' },
      { word: '水力', reading: 'すいりょく', meaning: 'hydraulic power' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '332',
    title: '元素の周期表',
    source: '自然エッセイ (N1)',
    date: '2025-06-23',
    content:
      '風をめぐる議論は近年ますます活発になっています。\n本稿では、風の現状と課題について考察します。\n一方で、湖を凍ることの重要性も指摘されています。\n一方で、雪を育つことの重要性も指摘されています。\n一方で、雪を凍ることの重要性も指摘されています。\n以上の考察から、地球の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '地球', reading: 'ちきゅう', meaning: 'Earth' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' }
    ],
  },
  {
    id: '333',
    title: '光の性質',
    source: '科学読解 (N1)',
    date: '2025-09-07',
    content:
      '資源をめぐる議論は近年ますます活発になっています。\n本稿では、資源の現状と課題について考察します。\n一方で、海を降ることの重要性も指摘されています。\n一方で、天気を降ることの重要性も指摘されています。\n一方で、気候を降ることの重要性も指摘されています。\n以上の考察から、宇宙の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '資源', reading: 'しげん', meaning: 'resources' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '気候', reading: 'きこう', meaning: 'climate' }
    ],
  },
  {
    id: '334',
    title: '磁石の不思議',
    source: '自然エッセイ (N1)',
    date: '2025-04-13',
    content:
      '動物をめぐる議論は近年ますます活発になっています。\n本稿では、動物の現状と課題について考察します。\n一方で、星を流れることの重要性も指摘されています。\n一方で、世界を凍ることの重要性も指摘されています。\n一方で、台風を凍ることの重要性も指摘されています。\n以上の考察から、森の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '星', reading: 'ほし', meaning: 'star (usu. excluding the Sun)' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '動物', reading: 'どうぶつ', meaning: 'animal' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' }
    ],
  },
  {
    id: '335',
    title: '天気予報の科学',
    source: '科学読解 (N1)',
    date: '2025-03-23',
    content:
      '自然をめぐる議論は近年ますます活発になっています。\n本稿では、自然の現状と課題について考察します。\n一方で、星を輝くことの重要性も指摘されています。\n一方で、森を輝くことの重要性も指摘されています。\n一方で、雪を輝くことの重要性も指摘されています。\n以上の考察から、湖の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '星', reading: 'ほし', meaning: 'star (usu. excluding the Sun)' },
      { word: '森', reading: 'もり', meaning: 'forest' },
      { word: '雪', reading: 'ゆき', meaning: 'snow' }
    ],
  },
  {
    id: '336',
    title: '生態系のバランス',
    source: '自然エッセイ (N1)',
    date: '2025-05-13',
    content:
      '種をめぐる議論は近年ますます活発になっています。\n本稿では、種の現状と課題について考察します。\n一方で、宇宙を育てることの重要性も指摘されています。\n一方で、宇宙を育てることの重要性も指摘されています。\n一方で、天気を育てることの重要性も指摘されています。\n以上の考察から、月の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '月', reading: 'つき', meaning: 'Moon' },
      { word: '宇宙', reading: 'うちゅう', meaning: 'universe' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' }
    ],
  },
  {
    id: '337',
    title: '水の循環',
    source: '自然エッセイ (N1)',
    date: '2025-03-01',
    content:
      '環境をめぐる議論は近年ますます活発になっています。\n本稿では、環境の現状と課題について考察します。\n一方で、雲を草ことの重要性も指摘されています。\n一方で、台風をエネルギーことの重要性も指摘されています。\n一方で、絶滅を雲ことの重要性も指摘されています。\n以上の考察から、エネルギーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '草', reading: 'くさ', meaning: 'grass' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' }
    ],
  },
  {
    id: '338',
    title: '酸性雨の影響',
    source: '科学読解 (N1)',
    date: '2025-10-08',
    content:
      '花をめぐる議論は近年ますます活発になっています。\n本稿では、花の現状と課題について考察します。\n一方で、保護を守ることの重要性も指摘されています。\n一方で、多様性を守ることの重要性も指摘されています。\n一方で、環境問題を守ることの重要性も指摘されています。\n以上の考察から、太陽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太陽', reading: 'たいよう', meaning: 'Sun' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: 'environmental problem' }
    ],
  },
  {
    id: '339',
    title: '絶滅危惧種',
    source: '科学読解 (N1)',
    date: '2025-07-16',
    content:
      '危惧をめぐる議論は近年ますます活発になっています。\n本稿では、危惧の現状と課題について考察します。\n一方で、保護を育てることの重要性も指摘されています。\n一方で、雲を育てることの重要性も指摘されています。\n一方で、世界を輝くことの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '世界', reading: 'せかい', meaning: 'the world' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '雲', reading: 'くも', meaning: 'cloud' }
    ],
  },
  {
    id: '340',
    title: '温暖化防止策',
    source: '自然エッセイ (N1)',
    date: '2025-07-18',
    content:
      '生態系をめぐる議論は近年ますます活発になっています。\n本稿では、生態系の現状と課題について考察します。\n一方で、風力を生態系ことの重要性も指摘されています。\n一方で、環境を花ことの重要性も指摘されています。\n一方で、木を気候ことの重要性も指摘されています。\n以上の考察から、木の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: '気候', reading: 'きこう', meaning: 'climate' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' }
    ],
  },
  {
    id: '341',
    title: '月の満ち欠け',
    source: '科学読解 (N1)',
    date: '2025-12-13',
    content:
      '山をめぐる議論は近年ますます活発になっています。\n本稿では、山の現状と課題について考察します。\n一方で、エネルギーを育つことの重要性も指摘されています。\n一方で、植物を光ることの重要性も指摘されています。\n一方で、風力を光ることの重要性も指摘されています。\n以上の考察から、植物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風力', reading: 'ふうりょく', meaning: 'wind power' },
      { word: '風', reading: 'かぜ', meaning: 'wind' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: 'energy' },
      { word: '植物', reading: 'しょくぶつ', meaning: 'plant' },
      { word: '山', reading: 'やま', meaning: 'mountain' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '342',
    title: '星座の観察',
    source: '科学読解 (N1)',
    date: '2025-10-16',
    content:
      '天気をめぐる議論は近年ますます活発になっています。\n本稿では、天気の現状と課題について考察します。\n一方で、保護を流れることの重要性も指摘されています。\n一方で、生態系を光ることの重要性も指摘されています。\n一方で、天気を溶けることの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '天気', reading: 'てんき', meaning: 'weather' },
      { word: '保護', reading: 'ほご', meaning: 'protection' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '343',
    title: '河川の汚染',
    source: '自然エッセイ (N1)',
    date: '2025-05-27',
    content:
      '木をめぐる議論は近年ますます活発になっています。\n本稿では、木の現状と課題について考察します。\n一方で、台風を流れることの重要性も指摘されています。\n一方で、生態系を変わることの重要性も指摘されています。\n一方で、地震を変わることの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '台風', reading: 'たいふう', meaning: 'typhoon' },
      { word: '木', reading: 'き', meaning: 'tree' },
      { word: '生態系', reading: 'せいたいけい', meaning: 'ecosystem' },
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '地震', reading: 'じしん', meaning: 'earthquake' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '344',
    title: '砂漠化問題',
    source: '自然エッセイ (N1)',
    date: '2025-03-17',
    content:
      '花をめぐる議論は近年ますます活発になっています。\n本稿では、花の現状と課題について考察します。\n一方で、気候を溶けることの重要性も指摘されています。\n一方で、星を育てることの重要性も指摘されています。\n一方で、花を溶けることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '星', reading: 'ほし', meaning: 'star (usu. excluding the Sun)' },
      { word: '環境', reading: 'かんきょう', meaning: 'environment' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '花', reading: 'はな', meaning: 'flower' },
      { word: '気候', reading: 'きこう', meaning: 'climate' }
    ],
  },
  {
    id: '345',
    title: '自然エネルギーの未来',
    source: '科学読解 (N1)',
    date: '2025-02-18',
    content:
      '危惧をめぐる議論は近年ますます活発になっています。\n本稿では、危惧の現状と課題について考察します。\n一方で、自然を光ることの重要性も指摘されています。\n一方で、危惧を流れることの重要性も指摘されています。\n一方で、海を降ることの重要性も指摘されています。\n以上の考察から、動物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自然', reading: 'しぜん', meaning: 'nature' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '動物', reading: 'どうぶつ', meaning: 'animal' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' }
    ],
  },
  {
    id: '346',
    title: '日本の経済',
    source: '経済読解 (N2)',
    date: '2025-10-16',
    content:
      '不況をめぐる議論は近年ますます活発になっています。\n本稿では、不況の現状と課題について考察します。\n一方で、不況を縮むことの重要性も指摘されています。\n一方で、税金を縮むことの重要性も指摘されています。\n一方で、不況を縮むことの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '(economic) depressionをめぐる議論は近年ますます活発になっています。\n本稿では、(economic) depressionの現状と課題について考察します。\n一方で、(economic) depressionをto shrinkことの重要性も指摘されています。\n一方で、税金をto shrinkことの重要性も指摘されています。\n一方で、(economic) depressionをto shrinkことの重要性も指摘されています。\n以上の考察から、(foreign) tradeの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '不況', reading: 'ふきょう', meaning: '(economic) depression' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '税金', reading: 'ぜいきん', meaning: 'tax' }
    ],
  },
  {
    id: '347',
    title: '働き方改革',
    source: 'ビジネスニュース (N2)',
    date: '2025-10-04',
    content:
      '組織をめぐる議論は近年ますます活発になっています。\n本稿では、組織の現状と課題について考察します。\n一方で、損失を減ることの重要性も指摘されています。\n一方で、組織を減ることの重要性も指摘されています。\n一方で、政策を減ることの重要性も指摘されています。\n以上の考察から、困難の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '政策', reading: 'せいさく', meaning: 'political measures' },
      { word: '組織', reading: 'そしき', meaning: 'organization' },
      { word: '損失', reading: 'そんしつ', meaning: 'loss (of assets, profit, etc.)' }
    ],
  },
  {
    id: '348',
    title: '起業の精神',
    source: 'ビジネスニュース (N2)',
    date: '2025-06-27',
    content:
      '会社をめぐる議論は近年ますます活発になっています。\n本稿では、会社の現状と課題について考察します。\n一方で、市場を人材ことの重要性も指摘されています。\n一方で、組織を計画ことの重要性も指摘されています。\n一方で、貿易を活発ことの重要性も指摘されています。\n以上の考察から、企業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '組織', reading: 'そしき', meaning: 'organization' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' }
    ],
  },
  {
    id: '349',
    title: 'グローバル化',
    source: 'ビジネスニュース (N2)',
    date: '2025-03-20',
    content:
      '支出をめぐる議論は近年ますます活発になっています。\n本稿では、支出の現状と課題について考察します。\n一方で、経済を需要ことの重要性も指摘されています。\n一方で、需要を支出ことの重要性も指摘されています。\n一方で、支出を発展ことの重要性も指摘されています。\n以上の考察から、雇用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' }
    ],
  },
  {
    id: '350',
    title: 'マーケティング戦略',
    source: 'ビジネスニュース (N2)',
    date: '2025-02-01',
    content:
      '費用をめぐる議論は近年ますます活発になっています。\n本稿では、費用の現状と課題について考察します。\n一方で、政策を減ることの重要性も指摘されています。\n一方で、市場を減ることの重要性も指摘されています。\n一方で、経営を減ることの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '経営', reading: 'けいえい', meaning: 'management' },
      { word: '政策', reading: 'せいさく', meaning: 'political measures' },
      { word: '費用', reading: 'ひよう', meaning: 'cost' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' }
    ],
  },
  {
    id: '351',
    title: '株式市場入門',
    source: '経済読解 (N2)',
    date: '2025-12-08',
    content:
      '税金をめぐる議論は近年ますます活発になっています。\n本稿では、税金の現状と課題について考察します。\n一方で、予算を減ることの重要性も指摘されています。\n一方で、計画を減ることの重要性も指摘されています。\n一方で、規制を減ることの重要性も指摘されています。\n以上の考察から、成長の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '予算', reading: 'よさん', meaning: 'estimate (of costs)' },
      { word: '税金', reading: 'ぜいきん', meaning: 'tax' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '規制', reading: 'きせい', meaning: 'regulation' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '352',
    title: '中小企業の挑戦',
    source: 'ビジネスニュース (N2)',
    date: '2025-12-01',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、損失を産業ことの重要性も指摘されています。\n一方で、人材を産業ことの重要性も指摘されています。\n一方で、不況を会社ことの重要性も指摘されています。\n以上の考察から、会社の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '不況', reading: 'ふきょう', meaning: '(economic) depression' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '損失', reading: 'そんしつ', meaning: 'loss (of assets, profit, etc.)' },
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' }
    ],
  },
  {
    id: '353',
    title: '外国人労働者',
    source: 'ビジネスニュース (N2)',
    date: '2025-04-05',
    content:
      '商業をめぐる議論は近年ますます活発になっています。\n本稿では、商業の現状と課題について考察します。\n一方で、価値を伸びることの重要性も指摘されています。\n一方で、緩和を伸びることの重要性も指摘されています。\n一方で、改革を伸びることの重要性も指摘されています。\n以上の考察から、計画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '価値', reading: 'かち', meaning: 'value' },
      { word: '改革', reading: 'かいかく', meaning: 'reform' }
    ],
  },
  {
    id: '354',
    title: 'テレワークの普及',
    source: 'ビジネスニュース (N2)',
    date: '2025-02-16',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、不利を供給ことの重要性も指摘されています。\n一方で、供給を供給ことの重要性も指摘されています。\n一方で、労働を経済ことの重要性も指摘されています。\n以上の考察から、供給の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '発展', reading: 'はってん', meaning: 'development' }
    ],
  },
  {
    id: '355',
    title: '女性の社会進出',
    source: 'ビジネスニュース (N2)',
    date: '2025-08-19',
    content:
      '市場をめぐる議論は近年ますます活発になっています。\n本稿では、市場の現状と課題について考察します。\n一方で、発展を目標ことの重要性も指摘されています。\n一方で、価格を戦略ことの重要性も指摘されています。\n一方で、金融を発展ことの重要性も指摘されています。\n以上の考察から、供給の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '価格', reading: 'かかく', meaning: 'price' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' }
    ],
  },
  {
    id: '356',
    title: 'スタートアップ',
    source: '経済読解 (N2)',
    date: '2025-10-13',
    content:
      '制度をめぐる議論は近年ますます活発になっています。\n本稿では、制度の現状と課題について考察します。\n一方で、給料を伸びることの重要性も指摘されています。\n一方で、困難を伸びることの重要性も指摘されています。\n一方で、規制を伸びることの重要性も指摘されています。\n以上の考察から、銀行の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '規制', reading: 'きせい', meaning: 'regulation' },
      { word: '銀行', reading: 'ぎんこう', meaning: 'bank' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '357',
    title: '企業の社会的責任',
    source: 'ビジネスニュース (N2)',
    date: '2025-07-07',
    content:
      '需要をめぐる議論は近年ますます活発になっています。\n本稿では、需要の現状と課題について考察します。\n一方で、給料を減ることの重要性も指摘されています。\n一方で、税金を減ることの重要性も指摘されています。\n一方で、金融を減ることの重要性も指摘されています。\n以上の考察から、緩和の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '税金', reading: 'ぜいきん', meaning: 'tax' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '358',
    title: '国際貿易',
    source: '経済読解 (N2)',
    date: '2025-05-22',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、購入を縮むことの重要性も指摘されています。\n一方で、交渉を伸びることの重要性も指摘されています。\n一方で、成長を縮むことの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '組織', reading: 'そしき', meaning: 'organization' }
    ],
  },
  {
    id: '359',
    title: '金融の基礎',
    source: '経済読解 (N2)',
    date: '2025-05-06',
    content:
      '戦略をめぐる議論は近年ますます活発になっています。\n本稿では、戦略の現状と課題について考察します。\n一方で、金融を成長ことの重要性も指摘されています。\n一方で、需要を有利ことの重要性も指摘されています。\n一方で、市場を戦略ことの重要性も指摘されています。\n以上の考察から、契約の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '有利', reading: 'ゆうり', meaning: 'advantageous' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' }
    ],
  },
  {
    id: '360',
    title: '日本的経営',
    source: 'ビジネスニュース (N2)',
    date: '2025-03-12',
    content:
      '制度をめぐる議論は近年ますます活発になっています。\n本稿では、制度の現状と課題について考察します。\n一方で、管理を縮むことの重要性も指摘されています。\n一方で、成長を縮むことの重要性も指摘されています。\n一方で、購入を縮むことの重要性も指摘されています。\n以上の考察から、制度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' }
    ],
  },
  {
    id: '361',
    title: '消費税の影響',
    source: 'ビジネスニュース (N2)',
    date: '2025-12-15',
    content:
      '予算をめぐる議論は近年ますます活発になっています。\n本稿では、予算の現状と課題について考察します。\n一方で、支出を伸びることの重要性も指摘されています。\n一方で、競争を伸びることの重要性も指摘されています。\n一方で、利益を伸びることの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '組織', reading: 'そしき', meaning: 'organization' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '予算', reading: 'よさん', meaning: 'estimate (of costs)' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '競争', reading: 'きょうそう', meaning: 'competition' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' }
    ],
  },
  {
    id: '362',
    title: '経済成長の鍵',
    source: '経済読解 (N2)',
    date: '2025-09-20',
    content:
      '会社をめぐる議論は近年ますます活発になっています。\n本稿では、会社の現状と課題について考察します。\n一方で、市場を縮むことの重要性も指摘されています。\n一方で、供給を縮むことの重要性も指摘されています。\n一方で、価値を縮むことの重要性も指摘されています。\n以上の考察から、投資の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '投資', reading: 'とうし', meaning: 'investment' },
      { word: '価値', reading: 'かち', meaning: 'value' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' }
    ],
  },
  {
    id: '363',
    title: 'インフレとデフレ',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-21',
    content:
      '不利をめぐる議論は近年ますます活発になっています。\n本稿では、不利の現状と課題について考察します。\n一方で、利益を増えることの重要性も指摘されています。\n一方で、雇用を増えることの重要性も指摘されています。\n一方で、計画を増えることの重要性も指摘されています。\n以上の考察から、不利の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' }
    ],
  },
  {
    id: '364',
    title: '観光立国',
    source: '経済読解 (N2)',
    date: '2025-02-18',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、収入を支出ことの重要性も指摘されています。\n一方で、市場を組織ことの重要性も指摘されています。\n一方で、人材を管理ことの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '組織', reading: 'そしき', meaning: 'organization' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' }
    ],
  },
  {
    id: '365',
    title: '地方創生',
    source: '経済読解 (N2)',
    date: '2025-05-12',
    content:
      '利益をめぐる議論は近年ますます活発になっています。\n本稿では、利益の現状と課題について考察します。\n一方で、制度を増えることの重要性も指摘されています。\n一方で、目標を増えることの重要性も指摘されています。\n一方で、費用を伸びることの重要性も指摘されています。\n以上の考察から、計画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '費用', reading: 'ひよう', meaning: 'cost' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '利益', reading: 'りえき', meaning: 'profit' }
    ],
  },
  {
    id: '366',
    title: '人材育成',
    source: '経済読解 (N2)',
    date: '2025-02-11',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、購入を伸びることの重要性も指摘されています。\n一方で、利益を伸びることの重要性も指摘されています。\n一方で、目標を伸びることの重要性も指摘されています。\n以上の考察から、改革の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '改革', reading: 'かいかく', meaning: 'reform' }
    ],
  },
  {
    id: '367',
    title: '生産性向上',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-01',
    content:
      '企業をめぐる議論は近年ますます活発になっています。\n本稿では、企業の現状と課題について考察します。\n一方で、企業を効果的ことの重要性も指摘されています。\n一方で、収入を収入ことの重要性も指摘されています。\n一方で、商業を販売ことの重要性も指摘されています。\n以上の考察から、不況の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '効果的', reading: 'こうかてき', meaning: 'effective' },
      { word: '不況', reading: 'ふきょう', meaning: '(economic) depression' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' }
    ],
  },
  {
    id: '368',
    title: 'ブランド戦略',
    source: '経済読解 (N2)',
    date: '2025-12-26',
    content:
      '不利をめぐる議論は近年ますます活発になっています。\n本稿では、不利の現状と課題について考察します。\n一方で、給料を伸びることの重要性も指摘されています。\n一方で、緩和を減ることの重要性も指摘されています。\n一方で、契約を減ることの重要性も指摘されています。\n以上の考察から、給料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' }
    ],
  },
  {
    id: '369',
    title: '消費者行動',
    source: '経済読解 (N2)',
    date: '2025-03-20',
    content:
      '成長をめぐる議論は近年ますます活発になっています。\n本稿では、成長の現状と課題について考察します。\n一方で、市場を労働ことの重要性も指摘されています。\n一方で、供給を企業ことの重要性も指摘されています。\n一方で、人材を価値ことの重要性も指摘されています。\n以上の考察から、価格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '価格', reading: 'かかく', meaning: 'price' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '価値', reading: 'かち', meaning: 'value' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' }
    ],
  },
  {
    id: '370',
    title: '業界分析',
    source: '経済読解 (N2)',
    date: '2025-05-19',
    content:
      '交渉をめぐる議論は近年ますます活発になっています。\n本稿では、交渉の現状と課題について考察します。\n一方で、販売を伸びることの重要性も指摘されています。\n一方で、価格を伸びることの重要性も指摘されています。\n一方で、緩和を減ることの重要性も指摘されています。\n以上の考察から、安定の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '価格', reading: 'かかく', meaning: 'price' }
    ],
  },
  {
    id: '371',
    title: 'リスク管理',
    source: '経済読解 (N2)',
    date: '2025-07-02',
    content:
      '取引をめぐる議論は近年ますます活発になっています。\n本稿では、取引の現状と課題について考察します。\n一方で、契約を増えることの重要性も指摘されています。\n一方で、雇用を増えることの重要性も指摘されています。\n一方で、需要を増えることの重要性も指摘されています。\n以上の考察から、契約の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '取引', reading: 'とりひき', meaning: 'transactions' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' }
    ],
  },
  {
    id: '372',
    title: '投資の基本',
    source: '経済読解 (N2)',
    date: '2025-10-17',
    content:
      '産業をめぐる議論は近年ますます活発になっています。\n本稿では、産業の現状と課題について考察します。\n一方で、安定を伸びることの重要性も指摘されています。\n一方で、困難を伸びることの重要性も指摘されています。\n一方で、制度を伸びることの重要性も指摘されています。\n以上の考察から、賃金の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '賃金', reading: 'ちんぎん', meaning: 'wages' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '制度', reading: 'せいど', meaning: 'system' }
    ],
  },
  {
    id: '373',
    title: '経営戦略',
    source: 'ビジネスニュース (N2)',
    date: '2025-12-16',
    content:
      '不利をめぐる議論は近年ますます活発になっています。\n本稿では、不利の現状と課題について考察します。\n一方で、計画を伸びることの重要性も指摘されています。\n一方で、収入を伸びることの重要性も指摘されています。\n一方で、目標を伸びることの重要性も指摘されています。\n以上の考察から、産業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '374',
    title: '市場調査',
    source: 'ビジネスニュース (N2)',
    date: '2025-08-12',
    content:
      '成長をめぐる議論は近年ますます活発になっています。\n本稿では、成長の現状と課題について考察します。\n一方で、計画を増えることの重要性も指摘されています。\n一方で、成長を増えることの重要性も指摘されています。\n一方で、緩和を増えることの重要性も指摘されています。\n以上の考察から、緩和の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' }
    ],
  },
  {
    id: '375',
    title: 'サプライチェーン',
    source: '経済読解 (N2)',
    date: '2025-10-10',
    content:
      '組織をめぐる議論は近年ますます活発になっています。\n本稿では、組織の現状と課題について考察します。\n一方で、収入を縮むことの重要性も指摘されています。\n一方で、経営を縮むことの重要性も指摘されています。\n一方で、規制を縮むことの重要性も指摘されています。\n以上の考察から、規制の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '規制', reading: 'きせい', meaning: 'regulation' },
      { word: '組織', reading: 'そしき', meaning: 'organization' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '経営', reading: 'けいえい', meaning: 'management' }
    ],
  },
  {
    id: '376',
    title: '日本の経済',
    source: 'ビジネスニュース (N1)',
    date: '2025-06-23',
    content:
      '経営をめぐる議論は近年ますます活発になっています。\n本稿では、経営の現状と課題について考察します。\n一方で、安定を縮むことの重要性も指摘されています。\n一方で、困難を縮むことの重要性も指摘されています。\n一方で、人材を縮むことの重要性も指摘されています。\n以上の考察から、企業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経営', reading: 'けいえい', meaning: 'management' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '安定', reading: 'あんてい', meaning: 'stability' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' }
    ],
  },
  {
    id: '377',
    title: '働き方改革',
    source: '経済読解 (N1)',
    date: '2025-01-21',
    content:
      '産業をめぐる議論は近年ますます活発になっています。\n本稿では、産業の現状と課題について考察します。\n一方で、緩和を増えることの重要性も指摘されています。\n一方で、貿易を増えることの重要性も指摘されています。\n一方で、改革を増えることの重要性も指摘されています。\n以上の考察から、景気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '改革', reading: 'かいかく', meaning: 'reform' },
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '景気', reading: 'けいき', meaning: 'business conditions' }
    ],
  },
  {
    id: '378',
    title: '起業の精神',
    source: '経済読解 (N1)',
    date: '2025-05-25',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、支出を雇用ことの重要性も指摘されています。\n一方で、需要を労働ことの重要性も指摘されています。\n一方で、労働を価格ことの重要性も指摘されています。\n以上の考察から、損失の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '損失', reading: 'そんしつ', meaning: 'loss (of assets, profit, etc.)' },
      { word: '価格', reading: 'かかく', meaning: 'price' }
    ],
  },
  {
    id: '379',
    title: 'グローバル化',
    source: 'ビジネスニュース (N1)',
    date: '2025-04-05',
    content:
      '経済をめぐる議論は近年ますます活発になっています。\n本稿では、経済の現状と課題について考察します。\n一方で、利益を縮むことの重要性も指摘されています。\n一方で、雇用を伸びることの重要性も指摘されています。\n一方で、金融を縮むことの重要性も指摘されています。\n以上の考察から、経済の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' }
    ],
  },
  {
    id: '380',
    title: 'マーケティング戦略',
    source: 'ビジネスニュース (N1)',
    date: '2025-07-21',
    content:
      '利益をめぐる議論は近年ますます活発になっています。\n本稿では、利益の現状と課題について考察します。\n一方で、不況を縮むことの重要性も指摘されています。\n一方で、利益を増えることの重要性も指摘されています。\n一方で、需要を伸びることの重要性も指摘されています。\n以上の考察から、不況の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '不況', reading: 'ふきょう', meaning: '(economic) depression' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' }
    ],
  },
  {
    id: '381',
    title: '株式市場入門',
    source: '経済読解 (N1)',
    date: '2025-02-26',
    content:
      '給料をめぐる議論は近年ますます活発になっています。\n本稿では、給料の現状と課題について考察します。\n一方で、費用を縮むことの重要性も指摘されています。\n一方で、産業を縮むことの重要性も指摘されています。\n一方で、費用を縮むことの重要性も指摘されています。\n以上の考察から、経済の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '費用', reading: 'ひよう', meaning: 'cost' }
    ],
  },
  {
    id: '382',
    title: '中小企業の挑戦',
    source: '経済読解 (N1)',
    date: '2025-05-18',
    content:
      '組織をめぐる議論は近年ますます活発になっています。\n本稿では、組織の現状と課題について考察します。\n一方で、契約を縮むことの重要性も指摘されています。\n一方で、損失を縮むことの重要性も指摘されています。\n一方で、契約を縮むことの重要性も指摘されています。\n以上の考察から、損失の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '損失', reading: 'そんしつ', meaning: 'loss (of assets, profit, etc.)' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '組織', reading: 'そしき', meaning: 'organization' }
    ],
  },
  {
    id: '383',
    title: '外国人労働者',
    source: 'ビジネスニュース (N1)',
    date: '2025-06-23',
    content:
      '人材をめぐる議論は近年ますます活発になっています。\n本稿では、人材の現状と課題について考察します。\n一方で、管理を増えることの重要性も指摘されています。\n一方で、販売を減ることの重要性も指摘されています。\n一方で、目標を増えることの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' }
    ],
  },
  {
    id: '384',
    title: 'テレワークの普及',
    source: '経済読解 (N1)',
    date: '2025-04-13',
    content:
      '不況をめぐる議論は近年ますます活発になっています。\n本稿では、不況の現状と課題について考察します。\n一方で、制度を組織ことの重要性も指摘されています。\n一方で、計画を雇用ことの重要性も指摘されています。\n一方で、経済を需要ことの重要性も指摘されています。\n以上の考察から、価格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '(economic) depressionをめぐる議論は近年ますます活発になっています。\n本稿では、(economic) depressionの現状と課題について考察します。\n一方で、制度を組織ことの重要性も指摘されています。\n一方で、planを雇用ことの重要性も指摘されています。\n一方で、economyをdemandことの重要性も指摘されています。\n以上の考察から、priceの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '価格', reading: 'かかく', meaning: 'price' },
      { word: '不況', reading: 'ふきょう', meaning: '(economic) depression' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '需要', reading: 'じゅよう', meaning: 'demand' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '組織', reading: 'そしき', meaning: 'organization' }
    ],
  },
  {
    id: '385',
    title: '女性の社会進出',
    source: 'ビジネスニュース (N1)',
    date: '2025-03-28',
    content:
      '不利をめぐる議論は近年ますます活発になっています。\n本稿では、不利の現状と課題について考察します。\n一方で、予算を不安定ことの重要性も指摘されています。\n一方で、低迷を低迷ことの重要性も指摘されています。\n一方で、低迷を予算ことの重要性も指摘されています。\n以上の考察から、購入の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '不安定', reading: 'ふあんてい', meaning: 'instability' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '予算', reading: 'よさん', meaning: 'estimate (of costs)' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' }
    ],
  },
  {
    id: '386',
    title: 'スタートアップ',
    source: 'ビジネスニュース (N1)',
    date: '2025-05-25',
    content:
      '契約をめぐる議論は近年ますます活発になっています。\n本稿では、契約の現状と課題について考察します。\n一方で、商業を減ることの重要性も指摘されています。\n一方で、戦略を減ることの重要性も指摘されています。\n一方で、雇用を減ることの重要性も指摘されています。\n以上の考察から、投資の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '投資', reading: 'とうし', meaning: 'investment' }
    ],
  },
  {
    id: '387',
    title: '企業の社会的責任',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-26',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、労働を減ることの重要性も指摘されています。\n一方で、投資を減ることの重要性も指摘されています。\n一方で、貿易を減ることの重要性も指摘されています。\n以上の考察から、労働の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '投資', reading: 'とうし', meaning: 'investment' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' }
    ],
  },
  {
    id: '388',
    title: '国際貿易',
    source: 'ビジネスニュース (N1)',
    date: '2025-10-16',
    content:
      '管理をめぐる議論は近年ますます活発になっています。\n本稿では、管理の現状と課題について考察します。\n一方で、投資を重要ことの重要性も指摘されています。\n一方で、交渉を貿易ことの重要性も指摘されています。\n一方で、困難を貿易ことの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '投資', reading: 'とうし', meaning: 'investment' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' }
    ],
  },
  {
    id: '389',
    title: '金融の基礎',
    source: 'ビジネスニュース (N1)',
    date: '2025-03-02',
    content:
      '賃金をめぐる議論は近年ますます活発になっています。\n本稿では、賃金の現状と課題について考察します。\n一方で、金融を増えることの重要性も指摘されています。\n一方で、賃金を増えることの重要性も指摘されています。\n一方で、賃金を増えることの重要性も指摘されています。\n以上の考察から、金融の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '賃金', reading: 'ちんぎん', meaning: 'wages' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' }
    ],
  },
  {
    id: '390',
    title: '日本的経営',
    source: 'ビジネスニュース (N1)',
    date: '2025-09-20',
    content:
      '貿易をめぐる議論は近年ますます活発になっています。\n本稿では、貿易の現状と課題について考察します。\n一方で、支出を伸びることの重要性も指摘されています。\n一方で、商業を伸びることの重要性も指摘されています。\n一方で、供給を伸びることの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' }
    ],
  },
  {
    id: '391',
    title: '消費税の影響',
    source: 'ビジネスニュース (N1)',
    date: '2025-02-14',
    content:
      '企業をめぐる議論は近年ますます活発になっています。\n本稿では、企業の現状と課題について考察します。\n一方で、管理を減ることの重要性も指摘されています。\n一方で、価格を減ることの重要性も指摘されています。\n一方で、経済を減ることの重要性も指摘されています。\n以上の考察から、給料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '価格', reading: 'かかく', meaning: 'price' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '392',
    title: '経済成長の鍵',
    source: 'ビジネスニュース (N1)',
    date: '2025-12-02',
    content:
      '人材をめぐる議論は近年ますます活発になっています。\n本稿では、人材の現状と課題について考察します。\n一方で、収入を減ることの重要性も指摘されています。\n一方で、管理を伸びることの重要性も指摘されています。\n一方で、市場を減ることの重要性も指摘されています。\n以上の考察から、制度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '393',
    title: 'インフレとデフレ',
    source: 'ビジネスニュース (N1)',
    date: '2025-08-14',
    content:
      '利益をめぐる議論は近年ますます活発になっています。\n本稿では、利益の現状と課題について考察します。\n一方で、産業を伸びることの重要性も指摘されています。\n一方で、商業を伸びることの重要性も指摘されています。\n一方で、人材を伸びることの重要性も指摘されています。\n以上の考察から、人材の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '産業', reading: 'さんぎょう', meaning: 'industry' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' }
    ],
  },
  {
    id: '394',
    title: '観光立国',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-12',
    content:
      '緩和をめぐる議論は近年ますます活発になっています。\n本稿では、緩和の現状と課題について考察します。\n一方で、労働を縮むことの重要性も指摘されています。\n一方で、不利を伸びることの重要性も指摘されています。\n一方で、支出を伸びることの重要性も指摘されています。\n以上の考察から、会社の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' }
    ],
  },
  {
    id: '395',
    title: '地方創生',
    source: 'ビジネスニュース (N1)',
    date: '2025-10-03',
    content:
      '雇用をめぐる議論は近年ますます活発になっています。\n本稿では、雇用の現状と課題について考察します。\n一方で、金融を伸びることの重要性も指摘されています。\n一方で、経営を伸びることの重要性も指摘されています。\n一方で、管理を伸びることの重要性も指摘されています。\n以上の考察から、不利の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '経営', reading: 'けいえい', meaning: 'management' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '雇用', reading: 'こよう', meaning: 'employment' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '金融', reading: 'きんゆう', meaning: 'finance' }
    ],
  },
  {
    id: '396',
    title: '人材育成',
    source: '経済読解 (N1)',
    date: '2025-09-02',
    content:
      '緩和をめぐる議論は近年ますます活発になっています。\n本稿では、緩和の現状と課題について考察します。\n一方で、労働を伸びることの重要性も指摘されています。\n一方で、収入を伸びることの重要性も指摘されています。\n一方で、収入を伸びることの重要性も指摘されています。\n以上の考察から、予算の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '予算', reading: 'よさん', meaning: 'estimate (of costs)' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' }
    ],
  },
  {
    id: '397',
    title: '生産性向上',
    source: 'ビジネスニュース (N1)',
    date: '2025-10-08',
    content:
      '販売をめぐる議論は近年ますます活発になっています。\n本稿では、販売の現状と課題について考察します。\n一方で、経済を増えることの重要性も指摘されています。\n一方で、目標を増えることの重要性も指摘されています。\n一方で、販売を縮むことの重要性も指摘されています。\n以上の考察から、販売の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' }
    ],
  },
  {
    id: '398',
    title: 'ブランド戦略',
    source: 'ビジネスニュース (N1)',
    date: '2025-05-25',
    content:
      '市場をめぐる議論は近年ますます活発になっています。\n本稿では、市場の現状と課題について考察します。\n一方で、利益を縮むことの重要性も指摘されています。\n一方で、支出を縮むことの重要性も指摘されています。\n一方で、人材を縮むことの重要性も指摘されています。\n以上の考察から、商業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '人材', reading: 'じんざい', meaning: 'capable person' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '利益', reading: 'りえき', meaning: 'profit' }
    ],
  },
  {
    id: '399',
    title: '消費者行動',
    source: '経済読解 (N1)',
    date: '2025-09-01',
    content:
      '供給をめぐる議論は近年ますます活発になっています。\n本稿では、供給の現状と課題について考察します。\n一方で、成長を縮むことの重要性も指摘されています。\n一方で、購入を増えることの重要性も指摘されています。\n一方で、投資を増えることの重要性も指摘されています。\n以上の考察から、成長の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '投資', reading: 'とうし', meaning: 'investment' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '成長', reading: 'せいちょう', meaning: 'growth' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' }
    ],
  },
  {
    id: '400',
    title: '業界分析',
    source: 'ビジネスニュース (N1)',
    date: '2025-09-08',
    content:
      '利益をめぐる議論は近年ますます活発になっています。\n本稿では、利益の現状と課題について考察します。\n一方で、支出を増えることの重要性も指摘されています。\n一方で、労働を増えることの重要性も指摘されています。\n一方で、費用を増えることの重要性も指摘されています。\n以上の考察から、計画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '労働', reading: 'ろうどう', meaning: 'labor' },
      { word: '利益', reading: 'りえき', meaning: 'profit' },
      { word: '計画', reading: 'けいかく', meaning: 'plan' },
      { word: '費用', reading: 'ひよう', meaning: 'cost' },
      { word: '支出', reading: 'ししゅつ', meaning: 'expenditure' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '401',
    title: 'リスク管理',
    source: '経済読解 (N1)',
    date: '2025-05-28',
    content:
      '政策をめぐる議論は近年ますます活発になっています。\n本稿では、政策の現状と課題について考察します。\n一方で、商業を増えることの重要性も指摘されています。\n一方で、政策を増えることの重要性も指摘されています。\n一方で、購入を増えることの重要性も指摘されています。\n以上の考察から、契約の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '商業', reading: 'しょうぎょう', meaning: 'commerce' },
      { word: '政策', reading: 'せいさく', meaning: 'political measures' },
      { word: '発展', reading: 'はってん', meaning: 'development' }
    ],
  },
  {
    id: '402',
    title: '投資の基本',
    source: '経済読解 (N1)',
    date: '2025-02-09',
    content:
      '市場をめぐる議論は近年ますます活発になっています。\n本稿では、市場の現状と課題について考察します。\n一方で、目標を縮むことの重要性も指摘されています。\n一方で、費用を減ることの重要性も指摘されています。\n一方で、不利を減ることの重要性も指摘されています。\n以上の考察から、予算の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '費用', reading: 'ひよう', meaning: 'cost' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '予算', reading: 'よさん', meaning: 'estimate (of costs)' }
    ],
  },
  {
    id: '403',
    title: '経営戦略',
    source: 'ビジネスニュース (N1)',
    date: '2025-10-18',
    content:
      '価値をめぐる議論は近年ますます活発になっています。\n本稿では、価値の現状と課題について考察します。\n一方で、給料を伸びることの重要性も指摘されています。\n一方で、税金を伸びることの重要性も指摘されています。\n一方で、価値を伸びることの重要性も指摘されています。\n以上の考察から、企業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '価値', reading: 'かち', meaning: 'value' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '税金', reading: 'ぜいきん', meaning: 'tax' }
    ],
  },
  {
    id: '404',
    title: '市場調査',
    source: '経済読解 (N1)',
    date: '2025-07-24',
    content:
      '税金をめぐる議論は近年ますます活発になっています。\n本稿では、税金の現状と課題について考察します。\n一方で、税金を減ることの重要性も指摘されています。\n一方で、収入を減ることの重要性も指摘されています。\n一方で、市場を減ることの重要性も指摘されています。\n以上の考察から、税金の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '収入', reading: 'しゅうにゅう', meaning: 'income' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '税金', reading: 'ぜいきん', meaning: 'tax' }
    ],
  },
  {
    id: '405',
    title: 'サプライチェーン',
    source: '経済読解 (N1)',
    date: '2025-12-05',
    content:
      '企業をめぐる議論は近年ますます活発になっています。\n本稿では、企業の現状と課題について考察します。\n一方で、貿易を減ることの重要性も指摘されています。\n一方で、供給を縮むことの重要性も指摘されています。\n一方で、価格を縮むことの重要性も指摘されています。\n以上の考察から、不利の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '貿易', reading: 'ぼうえき', meaning: '(foreign) trade' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '価格', reading: 'かかく', meaning: 'price' },
      { word: '供給', reading: 'きょうきゅう', meaning: 'supply' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '企業', reading: 'きぎょう', meaning: 'enterprise' }
    ],
  },
  {
    id: '406',
    title: 'お正月の風習',
    source: '伝統エッセイ (N4)',
    date: '2025-11-10',
    content:
      '七夕について考えてみましょう。\n七夕は日常生活の中で大切な役割を果たしています。\n例えば、帯を楽しむことがあります。\n例えば、凧を楽しむことがあります。\n例えば、舞踊を行うことがあります。\nこのように、帯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'Star Festival (held in July or August)について考えてみましょう。\nStar Festival (held in July or August)は日常生活の中で大切な役割を果たしています。\n例えば、obi (kimono sash)をto enjoyことがあります。\n例えば、kiteをto enjoyことがあります。\n例えば、dancingを行うことがあります。\nこのように、obi (kimono sash)は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' }
    ],
  },
  {
    id: '407',
    title: '節分と豆まき',
    source: '伝統エッセイ (N4)',
    date: '2025-09-06',
    content:
      '結婚式について考えてみましょう。\n結婚式は日常生活の中で大切な役割を果たしています。\n例えば、武道を感じることがあります。\n例えば、華道を祝うことがあります。\n例えば、華道を味わうことがあります。\nこのように、武道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' }
    ],
  },
  {
    id: '408',
    title: 'ひな祭り',
    source: '伝統エッセイ (N4)',
    date: '2025-05-10',
    content:
      '傘について考えてみましょう。\n傘は日常生活の中で大切な役割を果たしています。\n例えば、結婚式を味わうことがあります。\n例えば、音楽を楽しむことがあります。\n例えば、華道を伝えることがあります。\nこのように、七夕は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' }
    ],
  },
  {
    id: '409',
    title: '七夕の物語',
    source: '伝統エッセイ (N4)',
    date: '2025-01-20',
    content:
      '七夕について考えてみましょう。\n七夕は日常生活の中で大切な役割を果たしています。\n例えば、折り紙を味わうことがあります。\n例えば、七五三を残すことがあります。\n例えば、七五三を行うことがあります。\nこのように、書道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'Star Festival (held in July or August)について考えてみましょう。\nStar Festival (held in July or August)は日常生活の中で大切な役割を果たしています。\n例えば、origamiを味わうことがあります。\n例えば、shichi-go-sanを残すことがあります。\n例えば、shichi-go-sanをto performことがあります。\nこのように、書道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '410',
    title: 'お盆の伝統',
    source: '伝統エッセイ (N4)',
    date: '2025-05-26',
    content:
      '仏教について考えてみましょう。\n仏教は日常生活の中で大切な役割を果たしています。\n例えば、仏教を守ることがあります。\n例えば、文化を味わうことがあります。\n例えば、着物を知ることがあります。\nこのように、仏教は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' }
    ],
  },
  {
    id: '411',
    title: '七五三の祝い',
    source: '文化読解 (N4)',
    date: '2025-09-02',
    content:
      '演劇について考えてみましょう。\n演劇は日常生活の中で大切な役割を果たしています。\n例えば、結婚式を遺跡ことがあります。\n例えば、七五三を浴衣ことがあります。\n例えば、浴衣を浴衣ことがあります。\nこのように、結婚式は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' }
    ],
  },
  {
    id: '412',
    title: '成人式の意味',
    source: '伝統エッセイ (N4)',
    date: '2025-02-25',
    content:
      '書道について考えてみましょう。\n書道は日常生活の中で大切な役割を果たしています。\n例えば、美術を受け継ぐことがあります。\n例えば、習慣を消えることがあります。\n例えば、国宝を受け継ぐことがあります。\nこのように、七五三は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'calligraphy (esp. Asian calligraphy based on Chinese characters)について考えてみましょう。\ncalligraphy (esp. Asian calligraphy based on Chinese characters)は日常生活の中でimportantな役割を果たしています。\n例えば、美術をto inheritことがあります。\n例えば、habitをto disappearことがあります。\n例えば、national treasureをto inheritことがあります。\nこのように、七五三は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' }
    ],
  },
  {
    id: '413',
    title: '花見の文化',
    source: '伝統エッセイ (N4)',
    date: '2025-08-10',
    content:
      '寺院について考えてみましょう。\n寺院は日常生活の中で大切な役割を果たしています。\n例えば、遺跡を驚くことがあります。\n例えば、傘を学ぶことがあります。\n例えば、習慣を学ぶことがあります。\nこのように、風習は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' }
    ],
  },
  {
    id: '414',
    title: '茶道の心',
    source: '文化読解 (N4)',
    date: '2025-08-21',
    content:
      '傘について考えてみましょう。\n傘は日常生活の中で大切な役割を果たしています。\n例えば、神道を伝えることがあります。\n例えば、書道を学ぶことがあります。\n例えば、独特を伝えることがあります。\nこのように、美術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' }
    ],
  },
  {
    id: '415',
    title: '華道の美',
    source: '文化読解 (N4)',
    date: '2025-09-12',
    content:
      '神道について考えてみましょう。\n神道は日常生活の中で大切な役割を果たしています。\n例えば、浴衣を驚くことがあります。\n例えば、伝統を驚くことがあります。\n例えば、独特を驚くことがあります。\nこのように、国宝は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' }
    ],
  },
  {
    id: '416',
    title: '書道の魅力',
    source: '文化読解 (N4)',
    date: '2025-12-01',
    content:
      '帯について考えてみましょう。\n帯は日常生活の中で大切な役割を果たしています。\n例えば、神道を味わうことがあります。\n例えば、遺跡を味わうことがあります。\n例えば、風習を味わうことがあります。\nこのように、風習は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' }
    ],
  },
  {
    id: '417',
    title: '歌舞伎入門',
    source: '伝統エッセイ (N4)',
    date: '2025-07-19',
    content:
      '伝統について考えてみましょう。\n伝統は日常生活の中で大切な役割を果たしています。\n例えば、七夕を守ることがあります。\n例えば、文化を驚くことがあります。\n例えば、神社を変わることがあります。\nこのように、文化は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '418',
    title: '能楽の世界',
    source: '伝統エッセイ (N4)',
    date: '2025-08-14',
    content:
      '国宝について考えてみましょう。\n国宝は日常生活の中で大切な役割を果たしています。\n例えば、文化を行うことがあります。\n例えば、宝物を受け継ぐことがあります。\n例えば、宝物を感じることがあります。\nこのように、宝物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' }
    ],
  },
  {
    id: '419',
    title: '浮世絵の歴史',
    source: '伝統エッセイ (N4)',
    date: '2025-05-14',
    content:
      '習慣について考えてみましょう。\n習慣は日常生活の中で大切な役割を果たしています。\n例えば、浴衣を楽しむことがあります。\n例えば、浴衣を楽しむことがあります。\n例えば、祭りを楽しむことがあります。\nこのように、神道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' }
    ],
  },
  {
    id: '420',
    title: '祭りの意味',
    source: '文化読解 (N4)',
    date: '2025-07-06',
    content:
      '音楽について考えてみましょう。\n音楽は日常生活の中で大切な役割を果たしています。\n例えば、国宝を祝うことがあります。\n例えば、帯を祝うことがあります。\n例えば、花火を祝うことがあります。\nこのように、芸術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '421',
    title: '神社とお寺',
    source: '伝統エッセイ (N4)',
    date: '2025-10-11',
    content:
      '歴史について考えてみましょう。\n歴史は日常生活の中で大切な役割を果たしています。\n例えば、神道を残すことがあります。\n例えば、傘を行うことがあります。\n例えば、歴史を残すことがあります。\nこのように、宝物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' }
    ],
  },
  {
    id: '422',
    title: '神道の考え方',
    source: '伝統エッセイ (N4)',
    date: '2025-01-18',
    content:
      '祭りについて考えてみましょう。\n祭りは日常生活の中で大切な役割を果たしています。\n例えば、芸術を知ることがあります。\n例えば、芸術を変わることがあります。\n例えば、独特を驚くことがあります。\nこのように、華道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' }
    ],
  },
  {
    id: '423',
    title: '仏教の教え',
    source: '文化読解 (N4)',
    date: '2025-06-22',
    content:
      '遺産について考えてみましょう。\n遺産は日常生活の中で大切な役割を果たしています。\n例えば、浴衣を味わうことがあります。\n例えば、葬式を祝うことがあります。\n例えば、文化を味わうことがあります。\nこのように、文化は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '葬式', reading: 'そうしき', meaning: 'funeral' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' }
    ],
  },
  {
    id: '424',
    title: '日本の礼儀',
    source: '文化読解 (N4)',
    date: '2025-04-03',
    content:
      '仏教について考えてみましょう。\n仏教は日常生活の中で大切な役割を果たしています。\n例えば、独特を伝えることがあります。\n例えば、仏教を伝えることがあります。\n例えば、教会を伝えることがあります。\nこのように、凧は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' }
    ],
  },
  {
    id: '425',
    title: '着物の文化',
    source: '文化読解 (N4)',
    date: '2025-07-22',
    content:
      '演劇について考えてみましょう。\n演劇は日常生活の中で大切な役割を果たしています。\n例えば、浴衣を行うことがあります。\n例えば、宝物を行うことがあります。\n例えば、宝物を伝えることがあります。\nこのように、宝物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' }
    ],
  },
  {
    id: '426',
    title: 'お歳暮の習慣',
    source: '伝統エッセイ (N4)',
    date: '2025-05-16',
    content:
      '遺跡について考えてみましょう。\n遺跡は日常生活の中で大切な役割を果たしています。\n例えば、七夕を守ることがあります。\n例えば、文化を変わることがあります。\n例えば、傘を驚くことがあります。\nこのように、七夕は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' }
    ],
  },
  {
    id: '427',
    title: '年賀状の由来',
    source: '伝統エッセイ (N4)',
    date: '2025-01-02',
    content:
      '遺産について考えてみましょう。\n遺産は日常生活の中で大切な役割を果たしています。\n例えば、仏教を守ることがあります。\n例えば、遺産を知ることがあります。\n例えば、宗教を学ぶことがあります。\nこのように、風鈴は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' }
    ],
  },
  {
    id: '428',
    title: '鏡餅の意味',
    source: '文化読解 (N4)',
    date: '2025-06-22',
    content:
      '浴衣について考えてみましょう。\n浴衣は日常生活の中で大切な役割を果たしています。\n例えば、茶道を消えることがあります。\n例えば、七夕を消えることがあります。\n例えば、祭りを変わることがあります。\nこのように、茶道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' }
    ],
  },
  {
    id: '429',
    title: '門松の飾り',
    source: '文化読解 (N4)',
    date: '2025-12-08',
    content:
      '習慣について考えてみましょう。\n習慣は日常生活の中で大切な役割を果たしています。\n例えば、人気を祝うことがあります。\n例えば、文化を祝うことがあります。\n例えば、国宝を変わることがあります。\nこのように、風鈴は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' }
    ],
  },
  {
    id: '430',
    title: '初詣の習慣',
    source: '文化読解 (N4)',
    date: '2025-12-19',
    content:
      '舞踊について考えてみましょう。\n舞踊は日常生活の中で大切な役割を果たしています。\n例えば、美術を行うことがあります。\n例えば、国宝を行うことがあります。\n例えば、浴衣を行うことがあります。\nこのように、浴衣は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' }
    ],
  },
  {
    id: '431',
    title: 'お彼岸の風習',
    source: '文化読解 (N4)',
    date: '2025-05-22',
    content:
      '神社について考えてみましょう。\n神社は日常生活の中で大切な役割を果たしています。\n例えば、武道を残すことがあります。\n例えば、寺院を伝えることがあります。\n例えば、凧を楽しむことがあります。\nこのように、音楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' }
    ],
  },
  {
    id: '432',
    title: '田植え祭り',
    source: '伝統エッセイ (N4)',
    date: '2025-02-01',
    content:
      '着物について考えてみましょう。\n着物は日常生活の中で大切な役割を果たしています。\n例えば、美術を味わうことがあります。\n例えば、教会を祝うことがあります。\n例えば、風鈴を守ることがあります。\nこのように、帯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' }
    ],
  },
  {
    id: '433',
    title: '花火の歴史',
    source: '文化読解 (N4)',
    date: '2025-08-27',
    content:
      '浴衣について考えてみましょう。\n浴衣は日常生活の中で大切な役割を果たしています。\n例えば、風鈴を驚くことがあります。\n例えば、茶道を消えることがあります。\n例えば、習慣を伝えることがあります。\nこのように、浴衣は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' }
    ],
  },
  {
    id: '434',
    title: '盆踊り',
    source: '伝統エッセイ (N4)',
    date: '2025-12-04',
    content:
      '花火について考えてみましょう。\n花火は日常生活の中で大切な役割を果たしています。\n例えば、華道を祝うことがあります。\n例えば、宗教を祝うことがあります。\n例えば、華道を驚くことがあります。\nこのように、風習は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '大切', reading: 'たいせつ', meaning: 'important' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' }
    ],
  },
  {
    id: '435',
    title: '地蔵盆',
    source: '伝統エッセイ (N4)',
    date: '2025-10-20',
    content:
      '習慣について考えてみましょう。\n習慣は日常生活の中で大切な役割を果たしています。\n例えば、舞踊を残すことがあります。\n例えば、舞踊を残すことがあります。\n例えば、宝物を驚くことがあります。\nこのように、傘は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' }
    ],
  },
  {
    id: '436',
    title: 'お正月の風習',
    source: '伝統エッセイ (N3)',
    date: '2025-11-13',
    content:
      '茶道について深く掘り下げて考えてみたいと思います。\n現代社会において、茶道は重要なテーマとなっています。\n特に七夕を守る過程で、さまざまな発見がありました。\n特に芸術を消える過程で、さまざまな発見がありました。\n特に茶道を味わう過程で、さまざまな発見がありました。\n茶道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '437',
    title: '節分と豆まき',
    source: '文化読解 (N3)',
    date: '2025-12-10',
    content:
      '着物について深く掘り下げて考えてみたいと思います。\n現代社会において、着物は重要なテーマとなっています。\n特に結婚式を驚く過程で、さまざまな発見がありました。\n特に着物を消える過程で、さまざまな発見がありました。\n特に折り紙を学ぶ過程で、さまざまな発見がありました。\n美術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '438',
    title: 'ひな祭り',
    source: '伝統エッセイ (N3)',
    date: '2025-11-01',
    content:
      '七五三について深く掘り下げて考えてみたいと思います。\n現代社会において、七五三は重要なテーマとなっています。\n特に七五三を守る過程で、さまざまな発見がありました。\n特に風習を伝える過程で、さまざまな発見がありました。\n特に風習を驚く過程で、さまざまな発見がありました。\n七五三についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '439',
    title: '七夕の物語',
    source: '文化読解 (N3)',
    date: '2025-01-26',
    content:
      '習慣について深く掘り下げて考えてみたいと思います。\n現代社会において、習慣は重要なテーマとなっています。\n特に祭りを守る過程で、さまざまな発見がありました。\n特に仏教を知る過程で、さまざまな発見がありました。\n特に風習を知る過程で、さまざまな発見がありました。\n演劇についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' }
    ],
  },
  {
    id: '440',
    title: 'お盆の伝統',
    source: '伝統エッセイ (N3)',
    date: '2025-11-22',
    content:
      '独特について深く掘り下げて考えてみたいと思います。\n現代社会において、独特は重要なテーマとなっています。\n特に美術を変わる過程で、さまざまな発見がありました。\n特に歴史を守る過程で、さまざまな発見がありました。\n特に扇子を祝う過程で、さまざまな発見がありました。\n風鈴についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' }
    ],
  },
  {
    id: '441',
    title: '七五三の祝い',
    source: '伝統エッセイ (N3)',
    date: '2025-09-24',
    content:
      '七五三について深く掘り下げて考えてみたいと思います。\n現代社会において、七五三は重要なテーマとなっています。\n特に七五三を伝える過程で、さまざまな発見がありました。\n特に茶道を驚く過程で、さまざまな発見がありました。\n特に書道を伝える過程で、さまざまな発見がありました。\n七五三についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' }
    ],
  },
  {
    id: '442',
    title: '成人式の意味',
    source: '伝統エッセイ (N3)',
    date: '2025-05-25',
    content:
      '文化について深く掘り下げて考えてみたいと思います。\n現代社会において、文化は重要なテーマとなっています。\n特に神社を学ぶ過程で、さまざまな発見がありました。\n特に着物を受け継ぐ過程で、さまざまな発見がありました。\n特に文化を学ぶ過程で、さまざまな発見がありました。\n教会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '443',
    title: '花見の文化',
    source: '伝統エッセイ (N3)',
    date: '2025-06-06',
    content:
      '神道について深く掘り下げて考えてみたいと思います。\n現代社会において、神道は重要なテーマとなっています。\n特に華道を驚く過程で、さまざまな発見がありました。\n特に祭りを変わる過程で、さまざまな発見がありました。\n特に祭りを祝う過程で、さまざまな発見がありました。\n神道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '444',
    title: '茶道の心',
    source: '伝統エッセイ (N3)',
    date: '2025-01-09',
    content:
      '芸術について深く掘り下げて考えてみたいと思います。\n現代社会において、芸術は重要なテーマとなっています。\n特に演劇を祝う過程で、さまざまな発見がありました。\n特に人気を祝う過程で、さまざまな発見がありました。\n特に七五三を学ぶ過程で、さまざまな発見がありました。\n傘についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '445',
    title: '華道の美',
    source: '伝統エッセイ (N3)',
    date: '2025-09-06',
    content:
      '美術について深く掘り下げて考えてみたいと思います。\n現代社会において、美術は重要なテーマとなっています。\n特に寺院を知る過程で、さまざまな発見がありました。\n特に神道を知る過程で、さまざまな発見がありました。\n特に寺院を知る過程で、さまざまな発見がありました。\n七夕についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' }
    ],
  },
  {
    id: '446',
    title: '書道の魅力',
    source: '文化読解 (N3)',
    date: '2025-05-28',
    content:
      '仏教について深く掘り下げて考えてみたいと思います。\n現代社会において、仏教は重要なテーマとなっています。\n特に傘を伝える過程で、さまざまな発見がありました。\n特に祭りを伝える過程で、さまざまな発見がありました。\n特に茶道を守る過程で、さまざまな発見がありました。\n結婚式についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' }
    ],
  },
  {
    id: '447',
    title: '歌舞伎入門',
    source: '伝統エッセイ (N3)',
    date: '2025-05-10',
    content:
      '折り紙について深く掘り下げて考えてみたいと思います。\n現代社会において、折り紙は重要なテーマとなっています。\n特に結婚式を消える過程で、さまざまな発見がありました。\n特に折り紙を楽しむ過程で、さまざまな発見がありました。\n特に折り紙を消える過程で、さまざまな発見がありました。\n宗教についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '448',
    title: '能楽の世界',
    source: '伝統エッセイ (N3)',
    date: '2025-04-19',
    content:
      '葬式について深く掘り下げて考えてみたいと思います。\n現代社会において、葬式は重要なテーマとなっています。\n特に宝物を祝う過程で、さまざまな発見がありました。\n特に扇子を祝う過程で、さまざまな発見がありました。\n特に浴衣を祝う過程で、さまざまな発見がありました。\n着物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '葬式', reading: 'そうしき', meaning: 'funeral' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' }
    ],
  },
  {
    id: '449',
    title: '浮世絵の歴史',
    source: '伝統エッセイ (N3)',
    date: '2025-05-03',
    content:
      '教会について深く掘り下げて考えてみたいと思います。\n現代社会において、教会は重要なテーマとなっています。\n特に神道を変わる過程で、さまざまな発見がありました。\n特に教会を味わう過程で、さまざまな発見がありました。\n特に着物を変わる過程で、さまざまな発見がありました。\n演劇についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' }
    ],
  },
  {
    id: '450',
    title: '祭りの意味',
    source: '伝統エッセイ (N3)',
    date: '2025-10-20',
    content:
      '遺産について深く掘り下げて考えてみたいと思います。\n現代社会において、遺産は重要なテーマとなっています。\n特に神道を伝える過程で、さまざまな発見がありました。\n特に神社を変わる過程で、さまざまな発見がありました。\n特に神道を守る過程で、さまざまな発見がありました。\n武道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '451',
    title: '神社とお寺',
    source: '文化読解 (N3)',
    date: '2025-06-02',
    content:
      '折り紙について深く掘り下げて考えてみたいと思います。\n現代社会において、折り紙は重要なテーマとなっています。\n特に七夕を楽しむ過程で、さまざまな発見がありました。\n特に凧を消える過程で、さまざまな発見がありました。\n特に神社を消える過程で、さまざまな発見がありました。\n折り紙についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' }
    ],
  },
  {
    id: '452',
    title: '神道の考え方',
    source: '文化読解 (N3)',
    date: '2025-04-13',
    content:
      '書道について深く掘り下げて考えてみたいと思います。\n現代社会において、書道は重要なテーマとなっています。\n特に茶道を美術過程で、さまざまな発見がありました。\n特に歴史を茶道過程で、さまざまな発見がありました。\n特に国宝を古い過程で、さまざまな発見がありました。\n武道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '美術', reading: 'びじゅつ', meaning: 'art' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '古い', reading: 'ふるい', meaning: 'old' }
    ],
  },
  {
    id: '453',
    title: '仏教の教え',
    source: '伝統エッセイ (N3)',
    date: '2025-05-28',
    content:
      '教会について深く掘り下げて考えてみたいと思います。\n現代社会において、教会は重要なテーマとなっています。\n特に結婚式を守る過程で、さまざまな発見がありました。\n特に書道を守る過程で、さまざまな発見がありました。\n特に教会を感じる過程で、さまざまな発見がありました。\n芸術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' }
    ],
  },
  {
    id: '454',
    title: '日本の礼儀',
    source: '文化読解 (N3)',
    date: '2025-06-25',
    content:
      '舞踊について深く掘り下げて考えてみたいと思います。\n現代社会において、舞踊は重要なテーマとなっています。\n特に七夕を行う過程で、さまざまな発見がありました。\n特に七夕を消える過程で、さまざまな発見がありました。\n特に花火を祝う過程で、さまざまな発見がありました。\n七五三についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' }
    ],
  },
  {
    id: '455',
    title: '着物の文化',
    source: '文化読解 (N3)',
    date: '2025-12-05',
    content:
      '浴衣について深く掘り下げて考えてみたいと思います。\n現代社会において、浴衣は重要なテーマとなっています。\n特に書道を残す過程で、さまざまな発見がありました。\n特に伝統を残す過程で、さまざまな発見がありました。\n特に仏教を残す過程で、さまざまな発見がありました。\n仏教についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' }
    ],
  },
  {
    id: '456',
    title: 'お歳暮の習慣',
    source: '伝統エッセイ (N3)',
    date: '2025-10-02',
    content:
      '武道について深く掘り下げて考えてみたいと思います。\n現代社会において、武道は重要なテーマとなっています。\n特に宗教を葬式過程で、さまざまな発見がありました。\n特に神道を神道過程で、さまざまな発見がありました。\n特に風習を宗教過程で、さまざまな発見がありました。\n神社についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '葬式', reading: 'そうしき', meaning: 'funeral' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' }
    ],
  },
  {
    id: '457',
    title: '年賀状の由来',
    source: '伝統エッセイ (N3)',
    date: '2025-08-01',
    content:
      '国宝について深く掘り下げて考えてみたいと思います。\n現代社会において、国宝は重要なテーマとなっています。\n特に演劇を驚く過程で、さまざまな発見がありました。\n特に文化を驚く過程で、さまざまな発見がありました。\n特に文化を驚く過程で、さまざまな発見がありました。\n音楽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' }
    ],
  },
  {
    id: '458',
    title: '鏡餅の意味',
    source: '伝統エッセイ (N3)',
    date: '2025-01-22',
    content:
      '傘について深く掘り下げて考えてみたいと思います。\n現代社会において、傘は重要なテーマとなっています。\n特に仏教を感じる過程で、さまざまな発見がありました。\n特に浴衣を消える過程で、さまざまな発見がありました。\n特に人気を消える過程で、さまざまな発見がありました。\n人気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' }
    ],
  },
  {
    id: '459',
    title: '門松の飾り',
    source: '伝統エッセイ (N3)',
    date: '2025-10-21',
    content:
      '舞踊について深く掘り下げて考えてみたいと思います。\n現代社会において、舞踊は重要なテーマとなっています。\n特に演劇を楽しむ過程で、さまざまな発見がありました。\n特に習慣を楽しむ過程で、さまざまな発見がありました。\n特に浴衣を祝う過程で、さまざまな発見がありました。\n七夕についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' }
    ],
  },
  {
    id: '460',
    title: '初詣の習慣',
    source: '文化読解 (N3)',
    date: '2025-07-03',
    content:
      '七五三について深く掘り下げて考えてみたいと思います。\n現代社会において、七五三は重要なテーマとなっています。\n特に舞踊を伝える過程で、さまざまな発見がありました。\n特に風鈴を変わる過程で、さまざまな発見がありました。\n特に風鈴を変わる過程で、さまざまな発見がありました。\n舞踊についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '461',
    title: 'お彼岸の風習',
    source: '伝統エッセイ (N3)',
    date: '2025-03-18',
    content:
      '花火について深く掘り下げて考えてみたいと思います。\n現代社会において、花火は重要なテーマとなっています。\n特に音楽を驚く過程で、さまざまな発見がありました。\n特に結婚式を驚く過程で、さまざまな発見がありました。\n特に寺院を感じる過程で、さまざまな発見がありました。\n寺院についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' }
    ],
  },
  {
    id: '462',
    title: '田植え祭り',
    source: '伝統エッセイ (N3)',
    date: '2025-08-23',
    content:
      '祭りについて深く掘り下げて考えてみたいと思います。\n現代社会において、祭りは重要なテーマとなっています。\n特に習慣を変わる過程で、さまざまな発見がありました。\n特に風習を消える過程で、さまざまな発見がありました。\n特に風習を感じる過程で、さまざまな発見がありました。\n伝統についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '463',
    title: '花火の歴史',
    source: '伝統エッセイ (N3)',
    date: '2025-11-21',
    content:
      '扇子について深く掘り下げて考えてみたいと思います。\n現代社会において、扇子は重要なテーマとなっています。\n特に七五三を守る過程で、さまざまな発見がありました。\n特に宝物を知る過程で、さまざまな発見がありました。\n特に浴衣を知る過程で、さまざまな発見がありました。\n葬式についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '葬式', reading: 'そうしき', meaning: 'funeral' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' }
    ],
  },
  {
    id: '464',
    title: '盆踊り',
    source: '伝統エッセイ (N3)',
    date: '2025-03-17',
    content:
      '寺院について深く掘り下げて考えてみたいと思います。\n現代社会において、寺院は重要なテーマとなっています。\n特に着物を受け継ぐ過程で、さまざまな発見がありました。\n特に風鈴を伝える過程で、さまざまな発見がありました。\n特に帯を残す過程で、さまざまな発見がありました。\n習慣についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' }
    ],
  },
  {
    id: '465',
    title: '地蔵盆',
    source: '文化読解 (N3)',
    date: '2025-02-10',
    content:
      '扇子について深く掘り下げて考えてみたいと思います。\n現代社会において、扇子は重要なテーマとなっています。\n特に七夕を伝える過程で、さまざまな発見がありました。\n特に祭りを味わう過程で、さまざまな発見がありました。\n特に国宝を受け継ぐ過程で、さまざまな発見がありました。\n国宝についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' }
    ],
  },
  {
    id: '466',
    title: 'お正月の風習',
    source: '伝統エッセイ (N2)',
    date: '2025-03-10',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、伝統を祝うことの重要性も指摘されています。\n一方で、文化を守ることの重要性も指摘されています。\n一方で、傘を守ることの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' }
    ],
  },
  {
    id: '467',
    title: '節分と豆まき',
    source: '文化読解 (N2)',
    date: '2025-06-28',
    content:
      '扇子をめぐる議論は近年ますます活発になっています。\n本稿では、扇子の現状と課題について考察します。\n一方で、宝物を守ることの重要性も指摘されています。\n一方で、舞踊を守ることの重要性も指摘されています。\n一方で、扇子を守ることの重要性も指摘されています。\n以上の考察から、凧の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '468',
    title: 'ひな祭り',
    source: '文化読解 (N2)',
    date: '2025-07-02',
    content:
      '芸術をめぐる議論は近年ますます活発になっています。\n本稿では、芸術の現状と課題について考察します。\n一方で、宝物を変わることの重要性も指摘されています。\n一方で、凧を変わることの重要性も指摘されています。\n一方で、寺院を変わることの重要性も指摘されています。\n以上の考察から、国宝の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '宝物', reading: 'たからもの', meaning: 'treasure' }
    ],
  },
  {
    id: '469',
    title: '七夕の物語',
    source: '伝統エッセイ (N2)',
    date: '2025-03-17',
    content:
      '神道をめぐる議論は近年ますます活発になっています。\n本稿では、神道の現状と課題について考察します。\n一方で、扇子を伝えることの重要性も指摘されています。\n一方で、書道を祝うことの重要性も指摘されています。\n一方で、文化を学ぶことの重要性も指摘されています。\n以上の考察から、扇子の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' }
    ],
  },
  {
    id: '470',
    title: 'お盆の伝統',
    source: '伝統エッセイ (N2)',
    date: '2025-05-21',
    content:
      '風鈴をめぐる議論は近年ますます活発になっています。\n本稿では、風鈴の現状と課題について考察します。\n一方で、文化を味わうことの重要性も指摘されています。\n一方で、帯を味わうことの重要性も指摘されています。\n一方で、七五三を守ることの重要性も指摘されています。\n以上の考察から、七夕の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' }
    ],
  },
  {
    id: '471',
    title: '七五三の祝い',
    source: '伝統エッセイ (N2)',
    date: '2025-06-09',
    content:
      '書道をめぐる議論は近年ますます活発になっています。\n本稿では、書道の現状と課題について考察します。\n一方で、帯を楽しむことの重要性も指摘されています。\n一方で、習慣を楽しむことの重要性も指摘されています。\n一方で、文化を祝うことの重要性も指摘されています。\n以上の考察から、書道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'calligraphy (esp. Asian calligraphy based on Chinese characters)をめぐる議論は近年ますます活発になっています。\n本稿では、calligraphy (esp. Asian calligraphy based on Chinese characters)の現状と課題について考察します。\n一方で、帯をto enjoyことの重要性も指摘されています。\n一方で、習慣をto enjoyことの重要性も指摘されています。\n一方で、文化をto celebrateことの重要性も指摘されています。\n以上の考察から、calligraphy (esp. Asian calligraphy based on Chinese characters)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' }
    ],
  },
  {
    id: '472',
    title: '成人式の意味',
    source: '伝統エッセイ (N2)',
    date: '2025-12-23',
    content:
      '宗教をめぐる議論は近年ますます活発になっています。\n本稿では、宗教の現状と課題について考察します。\n一方で、行事を残すことの重要性も指摘されています。\n一方で、茶道を残すことの重要性も指摘されています。\n一方で、着物を残すことの重要性も指摘されています。\n以上の考察から、宗教の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '行事', reading: 'ぎょうじ', meaning: 'event' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' }
    ],
  },
  {
    id: '473',
    title: '花見の文化',
    source: '文化読解 (N2)',
    date: '2025-05-12',
    content:
      '神社をめぐる議論は近年ますます活発になっています。\n本稿では、神社の現状と課題について考察します。\n一方で、帯を驚くことの重要性も指摘されています。\n一方で、帯を守ることの重要性も指摘されています。\n一方で、帯を守ることの重要性も指摘されています。\n以上の考察から、帯の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' }
    ],
  },
  {
    id: '474',
    title: '茶道の心',
    source: '文化読解 (N2)',
    date: '2025-07-27',
    content:
      '舞踊をめぐる議論は近年ますます活発になっています。\n本稿では、舞踊の現状と課題について考察します。\n一方で、音楽を驚くことの重要性も指摘されています。\n一方で、行事を変わることの重要性も指摘されています。\n一方で、傘を感じることの重要性も指摘されています。\n以上の考察から、祭りの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '行事', reading: 'ぎょうじ', meaning: 'event' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '475',
    title: '華道の美',
    source: '伝統エッセイ (N2)',
    date: '2025-03-22',
    content:
      '茶道をめぐる議論は近年ますます活発になっています。\n本稿では、茶道の現状と課題について考察します。\n一方で、遺跡を守ることの重要性も指摘されています。\n一方で、茶道を変わることの重要性も指摘されています。\n一方で、風鈴を残すことの重要性も指摘されています。\n以上の考察から、人気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '476',
    title: '書道の魅力',
    source: '文化読解 (N2)',
    date: '2025-02-28',
    content:
      '華道をめぐる議論は近年ますます活発になっています。\n本稿では、華道の現状と課題について考察します。\n一方で、神社を神社ことの重要性も指摘されています。\n一方で、文化を舞踊ことの重要性も指摘されています。\n一方で、遺跡を神社ことの重要性も指摘されています。\n以上の考察から、着物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '舞踊', reading: 'ぶよう', meaning: 'dancing' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '華道', reading: 'かどう', meaning: 'flower arrangement' }
    ],
  },
  {
    id: '477',
    title: '歌舞伎入門',
    source: '伝統エッセイ (N2)',
    date: '2025-01-03',
    content:
      '扇子をめぐる議論は近年ますます活発になっています。\n本稿では、扇子の現状と課題について考察します。\n一方で、着物を伝えることの重要性も指摘されています。\n一方で、凧を伝えることの重要性も指摘されています。\n一方で、風習を伝えることの重要性も指摘されています。\n以上の考察から、遺跡の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '478',
    title: '能楽の世界',
    source: '文化読解 (N2)',
    date: '2025-04-26',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、傘を知ることの重要性も指摘されています。\n一方で、帯を味わうことの重要性も指摘されています。\n一方で、帯を味わうことの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '凧', reading: 'たこ', meaning: 'kite' }
    ],
  },
  {
    id: '479',
    title: '浮世絵の歴史',
    source: '文化読解 (N2)',
    date: '2025-07-22',
    content:
      '風鈴をめぐる議論は近年ますます活発になっています。\n本稿では、風鈴の現状と課題について考察します。\n一方で、折り紙を楽しむことの重要性も指摘されています。\n一方で、風鈴を行うことの重要性も指摘されています。\n一方で、折り紙を楽しむことの重要性も指摘されています。\n以上の考察から、行事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '行事', reading: 'ぎょうじ', meaning: 'event' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' }
    ],
  },
  {
    id: '480',
    title: '祭りの意味',
    source: '伝統エッセイ (N2)',
    date: '2025-06-28',
    content:
      '文化をめぐる議論は近年ますます活発になっています。\n本稿では、文化の現状と課題について考察します。\n一方で、伝統を知ることの重要性も指摘されています。\n一方で、武道を学ぶことの重要性も指摘されています。\n一方で、扇子を感じることの重要性も指摘されています。\n以上の考察から、伝統の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '武道', reading: 'ぶどう', meaning: 'martial arts' },
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' }
    ],
  },
  {
    id: '481',
    title: '神社とお寺',
    source: '文化読解 (N2)',
    date: '2025-08-01',
    content:
      '神社をめぐる議論は近年ますます活発になっています。\n本稿では、神社の現状と課題について考察します。\n一方で、遺跡を味わうことの重要性も指摘されています。\n一方で、遺跡を学ぶことの重要性も指摘されています。\n一方で、習慣を学ぶことの重要性も指摘されています。\n以上の考察から、遺跡の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '482',
    title: '神道の考え方',
    source: '伝統エッセイ (N2)',
    date: '2025-04-13',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、七夕を学ぶことの重要性も指摘されています。\n一方で、折り紙を消えることの重要性も指摘されています。\n一方で、遺産を守ることの重要性も指摘されています。\n以上の考察から、芸術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '七夕', reading: 'たなばた', meaning: 'Star Festival (held in July or August)' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '483',
    title: '仏教の教え',
    source: '伝統エッセイ (N2)',
    date: '2025-06-24',
    content:
      '神道をめぐる議論は近年ますます活発になっています。\n本稿では、神道の現状と課題について考察します。\n一方で、宗教を守ることの重要性も指摘されています。\n一方で、結婚式を受け継ぐことの重要性も指摘されています。\n一方で、文化を変わることの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' }
    ],
  },
  {
    id: '484',
    title: '日本の礼儀',
    source: '伝統エッセイ (N2)',
    date: '2025-09-06',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、凧を感じることの重要性も指摘されています。\n一方で、教会を残すことの重要性も指摘されています。\n一方で、風習を行うことの重要性も指摘されています。\n以上の考察から、七五三の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '485',
    title: '着物の文化',
    source: '文化読解 (N2)',
    date: '2025-02-14',
    content:
      '文化をめぐる議論は近年ますます活発になっています。\n本稿では、文化の現状と課題について考察します。\n一方で、仏教を感じることの重要性も指摘されています。\n一方で、七五三を感じることの重要性も指摘されています。\n一方で、折り紙を感じることの重要性も指摘されています。\n以上の考察から、習慣の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: 'habit' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '仏教', reading: 'ぶっきょう', meaning: 'Buddhism' }
    ],
  },
  {
    id: '486',
    title: 'お歳暮の習慣',
    source: '伝統エッセイ (N2)',
    date: '2025-05-24',
    content:
      '伝統をめぐる議論は近年ますます活発になっています。\n本稿では、伝統の現状と課題について考察します。\n一方で、傘を楽しむことの重要性も指摘されています。\n一方で、演劇を感じることの重要性も指摘されています。\n一方で、風鈴を楽しむことの重要性も指摘されています。\n以上の考察から、音楽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '伝統', reading: 'でんとう', meaning: 'tradition' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' }
    ],
  },
  {
    id: '487',
    title: '年賀状の由来',
    source: '文化読解 (N2)',
    date: '2025-12-24',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、扇子を受け継ぐことの重要性も指摘されています。\n一方で、茶道を行うことの重要性も指摘されています。\n一方で、演劇を受け継ぐことの重要性も指摘されています。\n以上の考察から、演劇の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '扇子', reading: 'せんす', meaning: 'folding fan' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' }
    ],
  },
  {
    id: '488',
    title: '鏡餅の意味',
    source: '伝統エッセイ (N2)',
    date: '2025-05-27',
    content:
      '風鈴をめぐる議論は近年ますます活発になっています。\n本稿では、風鈴の現状と課題について考察します。\n一方で、宗教を伝えることの重要性も指摘されています。\n一方で、風鈴を伝えることの重要性も指摘されています。\n一方で、芸術を楽しむことの重要性も指摘されています。\n以上の考察から、芸術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '489',
    title: '門松の飾り',
    source: '伝統エッセイ (N2)',
    date: '2025-01-04',
    content:
      '寺院をめぐる議論は近年ますます活発になっています。\n本稿では、寺院の現状と課題について考察します。\n一方で、七五三を受け継ぐことの重要性も指摘されています。\n一方で、歴史を楽しむことの重要性も指摘されています。\n一方で、神道を守ることの重要性も指摘されています。\n以上の考察から、七五三の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' }
    ],
  },
  {
    id: '490',
    title: '初詣の習慣',
    source: '文化読解 (N2)',
    date: '2025-02-10',
    content:
      '着物をめぐる議論は近年ますます活発になっています。\n本稿では、着物の現状と課題について考察します。\n一方で、教会を風習ことの重要性も指摘されています。\n一方で、寺院を傘ことの重要性も指摘されています。\n一方で、浴衣を結婚式ことの重要性も指摘されています。\n以上の考察から、神社の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '浴衣', reading: 'ゆかた', meaning: 'yukata' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '傘', reading: 'かさ', meaning: 'umbrella' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '着物', reading: 'きもの', meaning: 'kimono' }
    ],
  },
  {
    id: '491',
    title: 'お彼岸の風習',
    source: '文化読解 (N2)',
    date: '2025-05-17',
    content:
      '風習をめぐる議論は近年ますます活発になっています。\n本稿では、風習の現状と課題について考察します。\n一方で、葬式を受け継ぐことの重要性も指摘されています。\n一方で、葬式を伝えることの重要性も指摘されています。\n一方で、宗教を祝うことの重要性も指摘されています。\n以上の考察から、七五三の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七五三', reading: 'しちごさん', meaning: 'shichi-go-san' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '葬式', reading: 'そうしき', meaning: 'funeral' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '風習', reading: 'ふうしゅう', meaning: 'custom' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' }
    ],
  },
  {
    id: '492',
    title: '田植え祭り',
    source: '文化読解 (N2)',
    date: '2025-02-05',
    content:
      '神道をめぐる議論は近年ますます活発になっています。\n本稿では、神道の現状と課題について考察します。\n一方で、国宝を伝えることの重要性も指摘されています。\n一方で、神道を祝うことの重要性も指摘されています。\n一方で、結婚式を知ることの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' },
      { word: '結婚式', reading: 'けっこんしき', meaning: 'marriage ceremony' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '祝う', reading: 'いわう', meaning: 'to celebrate' },
      { word: '国宝', reading: 'こくほう', meaning: 'national treasure' }
    ],
  },
  {
    id: '493',
    title: '花火の歴史',
    source: '文化読解 (N2)',
    date: '2025-04-07',
    content:
      '風鈴をめぐる議論は近年ますます活発になっています。\n本稿では、風鈴の現状と課題について考察します。\n一方で、音楽を茶道ことの重要性も指摘されています。\n一方で、教会を風鈴ことの重要性も指摘されています。\n一方で、演劇を花火ことの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '教会', reading: 'きょうかい', meaning: 'church' },
      { word: '茶道', reading: 'さどう', meaning: 'tea ceremony' },
      { word: '風鈴', reading: 'ふうりん', meaning: 'wind chime' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '演劇', reading: 'えんげき', meaning: 'drama' }
    ],
  },
  {
    id: '494',
    title: '盆踊り',
    source: '伝統エッセイ (N2)',
    date: '2025-07-09',
    content:
      '宗教をめぐる議論は近年ますます活発になっています。\n本稿では、宗教の現状と課題について考察します。\n一方で、文化を感じることの重要性も指摘されています。\n一方で、書道を感じることの重要性も指摘されています。\n一方で、神道を感じることの重要性も指摘されています。\n以上の考察から、帯の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '帯', reading: 'おび', meaning: 'obi (kimono sash)' },
      { word: '書道', reading: 'しょどう', meaning: 'calligraphy (esp. Asian calligraphy based on Chinese characters)' },
      { word: '神道', reading: 'しんとう', meaning: 'Shinto' }
    ],
  },
  {
    id: '495',
    title: '地蔵盆',
    source: '文化読解 (N2)',
    date: '2025-05-18',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、独特を味わうことの重要性も指摘されています。\n一方で、宗教を行うことの重要性も指摘されています。\n一方で、独特を味わうことの重要性も指摘されています。\n以上の考察から、宗教の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: '味わう', reading: 'あじわう', meaning: 'to taste' },
      { word: '凧', reading: 'たこ', meaning: 'kite' },
      { word: '宗教', reading: 'しゅうきょう', meaning: 'religion' },
      { word: '行う', reading: 'おこなう', meaning: 'to perform' }
    ],
  },
  {
    id: '496',
    title: '健康の秘訣',
    source: '健康読解 (N4)',
    date: '2025-04-09',
    content:
      '不快について考えてみましょう。\n不快は日常生活の中で大切な役割を果たしています。\n例えば、髪を頑張ることがあります。\n例えば、食事を頑張ることがあります。\n例えば、予防を頑張ることがあります。\nこのように、腕は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腕', reading: 'うで', meaning: 'arm' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '予防', reading: 'よぼう', meaning: 'prevention' }
    ],
  },
  {
    id: '497',
    title: '運動の効果',
    source: '医療エッセイ (N4)',
    date: '2025-09-24',
    content:
      '診断について考えてみましょう。\n診断は日常生活の中で大切な役割を果たしています。\n例えば、手術を直すことがあります。\n例えば、回復を直すことがあります。\n例えば、回復を治すことがあります。\nこのように、回復は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '回復', reading: 'かいふく', meaning: 'restoration' },
      { word: '診断', reading: 'しんだん', meaning: 'diagnosis' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' }
    ],
  },
  {
    id: '498',
    title: '睡眠の重要性',
    source: '医療エッセイ (N4)',
    date: '2025-06-24',
    content:
      '健康について考えてみましょう。\n健康は日常生活の中で大切な役割を果たしています。\n例えば、回復を治すことがあります。\n例えば、処方を飲むことがあります。\n例えば、肺を飲むことがあります。\nこのように、薬は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '回復', reading: 'かいふく', meaning: 'restoration' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '肺', reading: 'はい', meaning: 'lung' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '薬', reading: 'くすり', meaning: 'medicine' }
    ],
  },
  {
    id: '499',
    title: '食事と栄養',
    source: '医療エッセイ (N4)',
    date: '2025-05-27',
    content:
      '栄養について考えてみましょう。\n栄養は日常生活の中で大切な役割を果たしています。\n例えば、栄養を直すことがあります。\n例えば、医者を直すことがあります。\n例えば、腹を直すことがあります。\nこのように、毛は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '栄養', reading: 'えいよう', meaning: 'nutrition' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' }
    ],
  },
  {
    id: '500',
    title: 'ストレス対策',
    source: '健康読解 (N4)',
    date: '2025-04-02',
    content:
      '首について考えてみましょう。\n首は日常生活の中で大切な役割を果たしています。\n例えば、腹を飲むことがあります。\n例えば、症状を飲むことがあります。\n例えば、腰を飲むことがあります。\nこのように、健康は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '腰', reading: 'こし', meaning: 'lower back' },
      { word: '症状', reading: 'しょうじょう', meaning: 'symptoms' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '健康', reading: 'けんこう', meaning: 'health' }
    ],
  },
  {
    id: '501',
    title: 'ヨガの勧め',
    source: '医療エッセイ (N4)',
    date: '2025-02-14',
    content:
      '不快について考えてみましょう。\n不快は日常生活の中で大切な役割を果たしています。\n例えば、腹を寝ることがあります。\n例えば、胸を続けることがあります。\n例えば、看護師を続けることがあります。\nこのように、看護師は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '看護師', reading: 'かんごし', meaning: '(hospital) nurse' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' }
    ],
  },
  {
    id: '502',
    title: '健康診断',
    source: '健康読解 (N4)',
    date: '2025-04-03',
    content:
      '肝臓について考えてみましょう。\n肝臓は日常生活の中で大切な役割を果たしています。\n例えば、肝臓を直すことがあります。\n例えば、肝臓を食べることがあります。\n例えば、肺を飲むことがあります。\nこのように、胸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肝臓', reading: 'かんぞう', meaning: 'liver' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '肺', reading: 'はい', meaning: 'lung' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '503',
    title: '免疫力向上',
    source: '医療エッセイ (N4)',
    date: '2025-02-19',
    content:
      '髪について考えてみましょう。\n髪は日常生活の中で大切な役割を果たしています。\n例えば、髪を続けることがあります。\n例えば、身体を治ることがあります。\n例えば、身体を続けることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '504',
    title: '禁煙の方法',
    source: '健康読解 (N4)',
    date: '2025-11-02',
    content:
      '処方について考えてみましょう。\n処方は日常生活の中で大切な役割を果たしています。\n例えば、胃を続けることがあります。\n例えば、風邪を治ることがあります。\n例えば、腕を続けることがあります。\nこのように、鼻は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '腕', reading: 'うで', meaning: 'arm' },
      { word: '鼻', reading: 'はな', meaning: 'nose' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '505',
    title: '目の健康',
    source: '健康読解 (N4)',
    date: '2025-09-07',
    content:
      '神経について考えてみましょう。\n神経は日常生活の中で大切な役割を果たしています。\n例えば、手術を休むことがあります。\n例えば、症状を飲むことがあります。\n例えば、咳を飲むことがあります。\nこのように、手術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '症状', reading: 'しょうじょう', meaning: 'symptoms' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '咳', reading: 'せき', meaning: 'cough' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '神経', reading: 'しんけい', meaning: 'nerve' }
    ],
  },
  {
    id: '506',
    title: '歯の手入れ',
    source: '医療エッセイ (N4)',
    date: '2025-01-19',
    content:
      '鼻について考えてみましょう。\n鼻は日常生活の中で大切な役割を果たしています。\n例えば、健康を痛いことがあります。\n例えば、指を膝ことがあります。\n例えば、熱を指ことがあります。\nこのように、咳は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '咳', reading: 'せき', meaning: 'cough' },
      { word: '熱', reading: 'ねつ', meaning: 'heat' },
      { word: '鼻', reading: 'はな', meaning: 'nose' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '指', reading: 'ゆび', meaning: 'finger' },
      { word: '痛い', reading: 'いたい', meaning: 'painful' }
    ],
  },
  {
    id: '507',
    title: '肩こり解消',
    source: '健康読解 (N4)',
    date: '2025-10-04',
    content:
      '怪我について考えてみましょう。\n怪我は日常生活の中で大切な役割を果たしています。\n例えば、足を治すことがあります。\n例えば、食事を直すことがあります。\n例えば、休養を食べることがあります。\nこのように、運動は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '怪我', reading: 'けが', meaning: 'injury' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '508',
    title: '風邪予防',
    source: '健康読解 (N4)',
    date: '2025-01-11',
    content:
      '処方について考えてみましょう。\n処方は日常生活の中で大切な役割を果たしています。\n例えば、皮膚を直すことがあります。\n例えば、皮膚を寝ることがあります。\n例えば、風邪を寝ることがあります。\nこのように、医者は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '皮膚', reading: 'ひふ', meaning: 'skin' },
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' }
    ],
  },
  {
    id: '509',
    title: '健康食品',
    source: '医療エッセイ (N4)',
    date: '2025-11-17',
    content:
      '胃について考えてみましょう。\n胃は日常生活の中で大切な役割を果たしています。\n例えば、看護師を寝ることがあります。\n例えば、手を続けることがあります。\n例えば、運動を続けることがあります。\nこのように、看護師は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '看護師', reading: 'かんごし', meaning: '(hospital) nurse' }
    ],
  },
  {
    id: '510',
    title: '心の健康',
    source: '医療エッセイ (N4)',
    date: '2025-10-02',
    content:
      '腰について考えてみましょう。\n腰は日常生活の中で大切な役割を果たしています。\n例えば、ストレスを続けることがあります。\n例えば、心臓を治ることがあります。\n例えば、ストレスを直すことがあります。\nこのように、腰は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '腰', reading: 'こし', meaning: 'lower back' },
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '心臓', reading: 'しんぞう', meaning: 'heart' }
    ],
  },
  {
    id: '511',
    title: '高齢者の健康',
    source: '医療エッセイ (N4)',
    date: '2025-07-18',
    content:
      '治療について考えてみましょう。\n治療は日常生活の中で大切な役割を果たしています。\n例えば、患者を寝ることがあります。\n例えば、患者を寝ることがあります。\n例えば、危険を寝ることがあります。\nこのように、治療は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '治療', reading: 'ちりょう', meaning: '(medical) treatment' },
      { word: '患者', reading: 'かんじゃ', meaning: 'patient' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' }
    ],
  },
  {
    id: '512',
    title: '子供の健康',
    source: '健康読解 (N4)',
    date: '2025-04-27',
    content:
      '危険について考えてみましょう。\n危険は日常生活の中で大切な役割を果たしています。\n例えば、歯を直すことがあります。\n例えば、怪我を寝ることがあります。\n例えば、身体を続けることがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '歯', reading: 'は', meaning: 'tooth' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '怪我', reading: 'けが', meaning: 'injury' }
    ],
  },
  {
    id: '513',
    title: '運動不足解消',
    source: '健康読解 (N4)',
    date: '2025-05-12',
    content:
      'ストレスについて考えてみましょう。\nストレスは日常生活の中で大切な役割を果たしています。\n例えば、神経を寝ることがあります。\n例えば、検査を直すことがあります。\n例えば、咳を飲むことがあります。\nこのように、風邪は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '咳', reading: 'せき', meaning: 'cough' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '検査', reading: 'けんさ', meaning: 'inspection (e.g. customs, factory)' },
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '神経', reading: 'しんけい', meaning: 'nerve' }
    ],
  },
  {
    id: '514',
    title: '食生活改善',
    source: '医療エッセイ (N4)',
    date: '2025-10-22',
    content:
      '腸について考えてみましょう。\n腸は日常生活の中で大切な役割を果たしています。\n例えば、睡眠を休むことがあります。\n例えば、睡眠を休むことがあります。\n例えば、医者を寝ることがあります。\nこのように、症状は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '睡眠', reading: 'すいみん', meaning: 'sleep' },
      { word: '腸', reading: 'ちょう', meaning: 'intestine' },
      { word: '症状', reading: 'しょうじょう', meaning: 'symptoms' }
    ],
  },
  {
    id: '515',
    title: 'リラックス法',
    source: '健康読解 (N4)',
    date: '2025-03-25',
    content:
      '腹について考えてみましょう。\n腹は日常生活の中で大切な役割を果たしています。\n例えば、予防を直すことがあります。\n例えば、予防を休むことがあります。\n例えば、手術を食べることがあります。\nこのように、足は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '予防', reading: 'よぼう', meaning: 'prevention' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' }
    ],
  },
  {
    id: '516',
    title: '花粉症対策',
    source: '健康読解 (N4)',
    date: '2025-01-22',
    content:
      '脳について考えてみましょう。\n脳は日常生活の中で大切な役割を果たしています。\n例えば、腸を休むことがあります。\n例えば、手術を休むことがあります。\n例えば、医師を休むことがあります。\nこのように、脳は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '脳', reading: 'のう', meaning: 'brain' },
      { word: '医師', reading: 'いし', meaning: 'doctor' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '腸', reading: 'ちょう', meaning: 'intestine' }
    ],
  },
  {
    id: '517',
    title: '熱中症予防',
    source: '医療エッセイ (N4)',
    date: '2025-08-10',
    content:
      '足について考えてみましょう。\n足は日常生活の中で大切な役割を果たしています。\n例えば、胸を医者ことがあります。\n例えば、栄養を身体ことがあります。\n例えば、病気を足ことがあります。\nこのように、心臓は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '心臓', reading: 'しんぞう', meaning: 'heart' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '栄養', reading: 'えいよう', meaning: 'nutrition' }
    ],
  },
  {
    id: '518',
    title: '腰痛改善',
    source: '健康読解 (N4)',
    date: '2025-11-03',
    content:
      '怪我について考えてみましょう。\n怪我は日常生活の中で大切な役割を果たしています。\n例えば、手を治ることがあります。\n例えば、腹を頑張ることがあります。\n例えば、肝臓を治ることがあります。\nこのように、手は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '怪我', reading: 'けが', meaning: 'injury' },
      { word: '肝臓', reading: 'かんぞう', meaning: 'liver' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' }
    ],
  },
  {
    id: '519',
    title: '歩く健康法',
    source: '健康読解 (N4)',
    date: '2025-11-14',
    content:
      '病気について考えてみましょう。\n病気は日常生活の中で大切な役割を果たしています。\n例えば、体を続けることがあります。\n例えば、首を続けることがあります。\n例えば、首を続けることがあります。\nこのように、処方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'illness (usu. excluding minor ailments, e.g. common cold)について考えてみましょう。\nillness (usu. excluding minor ailments, e.g. common cold)は日常生活の中で大切な役割を果たしています。\n例えば、bodyを続けることがあります。\n例えば、neckを続けることがあります。\n例えば、neckを続けることがあります。\nこのように、処方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '520',
    title: '呼吸法の効果',
    source: '医療エッセイ (N4)',
    date: '2025-06-20',
    content:
      '腕について考えてみましょう。\n腕は日常生活の中で大切な役割を果たしています。\n例えば、手を飲むことがあります。\n例えば、病気を飲むことがあります。\n例えば、腎臓を寝ることがあります。\nこのように、顔は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '顔', reading: 'かお', meaning: 'face' },
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '腕', reading: 'うで', meaning: 'arm' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' }
    ],
  },
  {
    id: '521',
    title: '入浴の効用',
    source: '健康読解 (N4)',
    date: '2025-07-10',
    content:
      '歯について考えてみましょう。\n歯は日常生活の中で大切な役割を果たしています。\n例えば、身体を腹ことがあります。\n例えば、血液を頭ことがあります。\n例えば、血液を病気ことがあります。\nこのように、血液は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '血液', reading: 'けつえき', meaning: 'blood' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '頭', reading: 'とう', meaning: 'counter for large animals (e.g. head of cattle)' },
      { word: '歯', reading: 'は', meaning: 'tooth' },
      { word: '体', reading: 'からだ', meaning: 'body' }
    ],
  },
  {
    id: '522',
    title: '笑いの健康効果',
    source: '健康読解 (N4)',
    date: '2025-02-16',
    content:
      '胃について考えてみましょう。\n胃は日常生活の中で大切な役割を果たしています。\n例えば、腎臓を寝ることがあります。\n例えば、熱を続けることがあります。\n例えば、足を寝ることがあります。\nこのように、足は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '熱', reading: 'ねつ', meaning: 'heat' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '523',
    title: '断食の方法',
    source: '医療エッセイ (N4)',
    date: '2025-04-16',
    content:
      '目について考えてみましょう。\n目は日常生活の中で大切な役割を果たしています。\n例えば、脳を風邪ことがあります。\n例えば、手術を手術ことがあります。\n例えば、手術を血液ことがあります。\nこのように、医者は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '目', reading: 'め', meaning: 'eye' },
      { word: '血液', reading: 'けつえき', meaning: 'blood' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '脳', reading: 'のう', meaning: 'brain' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' }
    ],
  },
  {
    id: '524',
    title: '筋トレ入門',
    source: '医療エッセイ (N4)',
    date: '2025-03-01',
    content:
      '医者について考えてみましょう。\n医者は日常生活の中で大切な役割を果たしています。\n例えば、健康を健康ことがあります。\n例えば、毛を予防ことがあります。\n例えば、不快を危険ことがあります。\nこのように、肝臓は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肝臓', reading: 'かんぞう', meaning: 'liver' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '予防', reading: 'よぼう', meaning: 'prevention' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '健康', reading: 'けんこう', meaning: 'health' }
    ],
  },
  {
    id: '525',
    title: '早寝早起き',
    source: '健康読解 (N4)',
    date: '2025-04-15',
    content:
      '熱について考えてみましょう。\n熱は日常生活の中で大切な役割を果たしています。\n例えば、心臓を病気ことがあります。\n例えば、歯を毛ことがあります。\n例えば、熱を怪我ことがあります。\nこのように、腹は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '怪我', reading: 'けが', meaning: 'injury' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '熱', reading: 'ねつ', meaning: 'heat' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '歯', reading: 'は', meaning: 'tooth' },
      { word: '心臓', reading: 'しんぞう', meaning: 'heart' }
    ],
  },
  {
    id: '526',
    title: '健康の秘訣',
    source: '健康読解 (N3)',
    date: '2025-08-02',
    content:
      'ストレスについて深く掘り下げて考えてみたいと思います。\n現代社会において、ストレスは重要なテーマとなっています。\n特に危険を胸過程で、さまざまな発見がありました。\n特に顔を膝過程で、さまざまな発見がありました。\n特に医師を骨過程で、さまざまな発見がありました。\nストレスについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '骨', reading: 'ほね', meaning: 'bone' },
      { word: '顔', reading: 'かお', meaning: 'face' },
      { word: '医師', reading: 'いし', meaning: 'doctor' }
    ],
  },
  {
    id: '527',
    title: '運動の効果',
    source: '医療エッセイ (N3)',
    date: '2025-02-14',
    content:
      '指について深く掘り下げて考えてみたいと思います。\n現代社会において、指は重要なテーマとなっています。\n特に検査を頑張る過程で、さまざまな発見がありました。\n特に健康を頑張る過程で、さまざまな発見がありました。\n特に首を頑張る過程で、さまざまな発見がありました。\n首についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '指', reading: 'ゆび', meaning: 'finger' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '検査', reading: 'けんさ', meaning: 'inspection (e.g. customs, factory)' },
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '健康', reading: 'けんこう', meaning: 'health' }
    ],
  },
  {
    id: '528',
    title: '睡眠の重要性',
    source: '健康読解 (N3)',
    date: '2025-01-19',
    content:
      '肺について深く掘り下げて考えてみたいと思います。\n現代社会において、肺は重要なテーマとなっています。\n特にストレスを飲む過程で、さまざまな発見がありました。\n特に疲労を飲む過程で、さまざまな発見がありました。\n特に肺を飲む過程で、さまざまな発見がありました。\n痛みについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疲労', reading: 'ひろう', meaning: 'fatigue' },
      { word: '肺', reading: 'はい', meaning: 'lung' },
      { word: '痛み', reading: 'いたみ', meaning: 'pain' },
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' }
    ],
  },
  {
    id: '529',
    title: '食事と栄養',
    source: '健康読解 (N3)',
    date: '2025-08-18',
    content:
      '心臓について深く掘り下げて考えてみたいと思います。\n現代社会において、心臓は重要なテーマとなっています。\n特に病気を治る過程で、さまざまな発見がありました。\n特に疲労を治る過程で、さまざまな発見がありました。\n特に疲労を治る過程で、さまざまな発見がありました。\n身体についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '心臓', reading: 'しんぞう', meaning: 'heart' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '疲労', reading: 'ひろう', meaning: 'fatigue' }
    ],
  },
  {
    id: '530',
    title: 'ストレス対策',
    source: '健康読解 (N3)',
    date: '2025-07-11',
    content:
      '医者について深く掘り下げて考えてみたいと思います。\n現代社会において、医者は重要なテーマとなっています。\n特に毛を治る過程で、さまざまな発見がありました。\n特に脳を治る過程で、さまざまな発見がありました。\n特に体を治る過程で、さまざまな発見がありました。\n腸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '腸', reading: 'ちょう', meaning: 'intestine' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '脳', reading: 'のう', meaning: 'brain' }
    ],
  },
  {
    id: '531',
    title: 'ヨガの勧め',
    source: '健康読解 (N3)',
    date: '2025-05-11',
    content:
      '診断について深く掘り下げて考えてみたいと思います。\n現代社会において、診断は重要なテーマとなっています。\n特に診断を治す過程で、さまざまな発見がありました。\n特に身体を治る過程で、さまざまな発見がありました。\n特に風邪を休む過程で、さまざまな発見がありました。\n患者についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '患者', reading: 'かんじゃ', meaning: 'patient' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '身体', reading: 'しんたい', meaning: 'body' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '診断', reading: 'しんだん', meaning: 'diagnosis' },
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' }
    ],
  },
  {
    id: '532',
    title: '健康診断',
    source: '健康読解 (N3)',
    date: '2025-12-05',
    content:
      '休養について深く掘り下げて考えてみたいと思います。\n現代社会において、休養は重要なテーマとなっています。\n特に骨を頑張る過程で、さまざまな発見がありました。\n特に健康を頑張る過程で、さまざまな発見がありました。\n特に病気を食べる過程で、さまざまな発見がありました。\n肩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '骨', reading: 'ほね', meaning: 'bone' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '肩', reading: 'かた', meaning: 'shoulder' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '健康', reading: 'けんこう', meaning: 'health' }
    ],
  },
  {
    id: '533',
    title: '免疫力向上',
    source: '健康読解 (N3)',
    date: '2025-07-07',
    content:
      '体について深く掘り下げて考えてみたいと思います。\n現代社会において、体は重要なテーマとなっています。\n特に健康を食べる過程で、さまざまな発見がありました。\n特に食事を続ける過程で、さまざまな発見がありました。\n特に口を食べる過程で、さまざまな発見がありました。\n腹についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '口', reading: 'くち', meaning: 'mouth' },
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '534',
    title: '禁煙の方法',
    source: '医療エッセイ (N3)',
    date: '2025-02-24',
    content:
      '首について深く掘り下げて考えてみたいと思います。\n現代社会において、首は重要なテーマとなっています。\n特に健康を寝る過程で、さまざまな発見がありました。\n特に足を寝る過程で、さまざまな発見がありました。\n特に神経を寝る過程で、さまざまな発見がありました。\n首についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '神経', reading: 'しんけい', meaning: 'nerve' }
    ],
  },
  {
    id: '535',
    title: '目の健康',
    source: '健康読解 (N3)',
    date: '2025-09-14',
    content:
      '腸について深く掘り下げて考えてみたいと思います。\n現代社会において、腸は重要なテーマとなっています。\n特に腸を直す過程で、さまざまな発見がありました。\n特に医師を直す過程で、さまざまな発見がありました。\n特に治療を続ける過程で、さまざまな発見がありました。\n風邪についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治療', reading: 'ちりょう', meaning: '(medical) treatment' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '医師', reading: 'いし', meaning: 'doctor' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '腸', reading: 'ちょう', meaning: 'intestine' }
    ],
  },
  {
    id: '536',
    title: '歯の手入れ',
    source: '健康読解 (N3)',
    date: '2025-11-04',
    content:
      '筋肉について深く掘り下げて考えてみたいと思います。\n現代社会において、筋肉は重要なテーマとなっています。\n特に血液を寝る過程で、さまざまな発見がありました。\n特に痛みを寝る過程で、さまざまな発見がありました。\n特に食事を寝る過程で、さまざまな発見がありました。\n肩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: 'meal (e.g. lunch, dinner)' },
      { word: '血液', reading: 'けつえき', meaning: 'blood' },
      { word: '筋肉', reading: 'きんにく', meaning: 'muscle' },
      { word: '痛み', reading: 'いたみ', meaning: 'pain' },
      { word: '肩', reading: 'かた', meaning: 'shoulder' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' }
    ],
  },
  {
    id: '537',
    title: '肩こり解消',
    source: '医療エッセイ (N3)',
    date: '2025-01-26',
    content:
      '血液について深く掘り下げて考えてみたいと思います。\n現代社会において、血液は重要なテーマとなっています。\n特に体を治す過程で、さまざまな発見がありました。\n特に健康を治す過程で、さまざまな発見がありました。\n特に休養を治す過程で、さまざまな発見がありました。\n腎臓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '血液', reading: 'けつえき', meaning: 'blood' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '体', reading: 'からだ', meaning: 'body' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' }
    ],
  },
  {
    id: '538',
    title: '風邪予防',
    source: '健康読解 (N3)',
    date: '2025-06-08',
    content:
      '処方について深く掘り下げて考えてみたいと思います。\n現代社会において、処方は重要なテーマとなっています。\n特に健康を休む過程で、さまざまな発見がありました。\n特に医者を休む過程で、さまざまな発見がありました。\n特に咳を休む過程で、さまざまな発見がありました。\n歯についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { word: '咳', reading: 'せき', meaning: 'cough' },
      { word: '歯', reading: 'は', meaning: 'tooth' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' }
    ],
  },
  {
    id: '539',
    title: '健康食品',
    source: '医療エッセイ (N3)',
    date: '2025-12-11',
    content:
      '患者について深く掘り下げて考えてみたいと思います。\n現代社会において、患者は重要なテーマとなっています。\n特に腎臓を休む過程で、さまざまな発見がありました。\n特に休養を食べる過程で、さまざまな発見がありました。\n特に治療を食べる過程で、さまざまな発見がありました。\n危険についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: 'to eat' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '患者', reading: 'かんじゃ', meaning: 'patient' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '治療', reading: 'ちりょう', meaning: '(medical) treatment' }
    ],
  },
  {
    id: '540',
    title: '心の健康',
    source: '医療エッセイ (N3)',
    date: '2025-01-13',
    content:
      '指について深く掘り下げて考えてみたいと思います。\n現代社会において、指は重要なテーマとなっています。\n特に鼻を休む過程で、さまざまな発見がありました。\n特に手を治す過程で、さまざまな発見がありました。\n特に患者を休む過程で、さまざまな発見がありました。\n回復についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '回復', reading: 'かいふく', meaning: 'restoration' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '鼻', reading: 'はな', meaning: 'nose' },
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '指', reading: 'ゆび', meaning: 'finger' },
      { word: '患者', reading: 'かんじゃ', meaning: 'patient' }
    ],
  },
  {
    id: '541',
    title: '高齢者の健康',
    source: '健康読解 (N3)',
    date: '2025-06-24',
    content:
      '休養について深く掘り下げて考えてみたいと思います。\n現代社会において、休養は重要なテーマとなっています。\n特に健康を続ける過程で、さまざまな発見がありました。\n特に危険を頑張る過程で、さまざまな発見がありました。\n特に看護師を直す過程で、さまざまな発見がありました。\n医師についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '看護師', reading: 'かんごし', meaning: '(hospital) nurse' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '医師', reading: 'いし', meaning: 'doctor' }
    ],
  },
  {
    id: '542',
    title: '子供の健康',
    source: '健康読解 (N3)',
    date: '2025-05-19',
    content:
      '病気について深く掘り下げて考えてみたいと思います。\n現代社会において、病気は重要なテーマとなっています。\n特にストレスを寝る過程で、さまざまな発見がありました。\n特に診断を寝る過程で、さまざまな発見がありました。\n特に胃を寝る過程で、さまざまな発見がありました。\n手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '診断', reading: 'しんだん', meaning: 'diagnosis' }
    ],
  },
  {
    id: '543',
    title: '運動不足解消',
    source: '健康読解 (N3)',
    date: '2025-01-24',
    content:
      '医師について深く掘り下げて考えてみたいと思います。\n現代社会において、医師は重要なテーマとなっています。\n特に処方を治る過程で、さまざまな発見がありました。\n特に健康を続ける過程で、さまざまな発見がありました。\n特に回復を続ける過程で、さまざまな発見がありました。\n回復についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: '医師', reading: 'いし', meaning: 'doctor' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '回復', reading: 'かいふく', meaning: 'restoration' }
    ],
  },
  {
    id: '544',
    title: '食生活改善',
    source: '健康読解 (N3)',
    date: '2025-05-09',
    content:
      '歯について深く掘り下げて考えてみたいと思います。\n現代社会において、歯は重要なテーマとなっています。\n特に痛みを治す過程で、さまざまな発見がありました。\n特に肝臓を治す過程で、さまざまな発見がありました。\n特に安全を治す過程で、さまざまな発見がありました。\n痛みについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肝臓', reading: 'かんぞう', meaning: 'liver' },
      { word: '痛み', reading: 'いたみ', meaning: 'pain' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '歯', reading: 'は', meaning: 'tooth' }
    ],
  },
  {
    id: '545',
    title: 'リラックス法',
    source: '医療エッセイ (N3)',
    date: '2025-03-02',
    content:
      '風邪について深く掘り下げて考えてみたいと思います。\n現代社会において、風邪は重要なテーマとなっています。\n特にストレスを寝る過程で、さまざまな発見がありました。\n特に髪を寝る過程で、さまざまな発見がありました。\n特にストレスを寝る過程で、さまざまな発見がありました。\n腎臓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '風邪', reading: 'かぜ', meaning: '(common) cold' },
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' }
    ],
  },
  {
    id: '546',
    title: '花粉症対策',
    source: '健康読解 (N3)',
    date: '2025-03-01',
    content:
      '胃について深く掘り下げて考えてみたいと思います。\n現代社会において、胃は重要なテーマとなっています。\n特に痛みを飲む過程で、さまざまな発見がありました。\n特に痛みを飲む過程で、さまざまな発見がありました。\n特に検査を直す過程で、さまざまな発見がありました。\n医師についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '検査', reading: 'けんさ', meaning: 'inspection (e.g. customs, factory)' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '痛み', reading: 'いたみ', meaning: 'pain' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '医師', reading: 'いし', meaning: 'doctor' }
    ],
  },
  {
    id: '547',
    title: '熱中症予防',
    source: '医療エッセイ (N3)',
    date: '2025-01-10',
    content:
      '腸について深く掘り下げて考えてみたいと思います。\n現代社会において、腸は重要なテーマとなっています。\n特に口を治す過程で、さまざまな発見がありました。\n特に耳を治す過程で、さまざまな発見がありました。\n特に首を治す過程で、さまざまな発見がありました。\n腸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腸', reading: 'ちょう', meaning: 'intestine' },
      { word: '口', reading: 'くち', meaning: 'mouth' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '耳', reading: 'みみ', meaning: 'ear' }
    ],
  },
  {
    id: '548',
    title: '腰痛改善',
    source: '医療エッセイ (N3)',
    date: '2025-09-22',
    content:
      '回復について深く掘り下げて考えてみたいと思います。\n現代社会において、回復は重要なテーマとなっています。\n特に膝を病気過程で、さまざまな発見がありました。\n特に症状を胃過程で、さまざまな発見がありました。\n特に神経を治療過程で、さまざまな発見がありました。\n病気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '胃', reading: 'い', meaning: 'stomach' },
      { word: '神経', reading: 'しんけい', meaning: 'nerve' },
      { word: '治療', reading: 'ちりょう', meaning: '(medical) treatment' },
      { word: '症状', reading: 'しょうじょう', meaning: 'symptoms' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '回復', reading: 'かいふく', meaning: 'restoration' }
    ],
  },
  {
    id: '549',
    title: '歩く健康法',
    source: '医療エッセイ (N3)',
    date: '2025-10-11',
    content:
      '肝臓について深く掘り下げて考えてみたいと思います。\n現代社会において、肝臓は重要なテーマとなっています。\n特に胸を飲む過程で、さまざまな発見がありました。\n特に目を治る過程で、さまざまな発見がありました。\n特に口を飲む過程で、さまざまな発見がありました。\n肝臓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '口', reading: 'くち', meaning: 'mouth' },
      { word: '目', reading: 'め', meaning: 'eye' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '肝臓', reading: 'かんぞう', meaning: 'liver' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '胸', reading: 'むね', meaning: 'chest' }
    ],
  },
  {
    id: '550',
    title: '呼吸法の効果',
    source: '健康読解 (N3)',
    date: '2025-08-28',
    content:
      '首について深く掘り下げて考えてみたいと思います。\n現代社会において、首は重要なテーマとなっています。\n特に疲労を直す過程で、さまざまな発見がありました。\n特に疲労を直す過程で、さまざまな発見がありました。\n特に疲労を直す過程で、さまざまな発見がありました。\n手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '直す', reading: 'なおす', meaning: 'to repair' },
      { word: '手', reading: 'て', meaning: 'hand' },
      { word: '首', reading: 'くび', meaning: 'neck' },
      { word: '疲労', reading: 'ひろう', meaning: 'fatigue' }
    ],
  },
  {
    id: '551',
    title: '入浴の効用',
    source: '医療エッセイ (N3)',
    date: '2025-10-15',
    content:
      '健康について深く掘り下げて考えてみたいと思います。\n現代社会において、健康は重要なテーマとなっています。\n特に病気を続ける過程で、さまざまな発見がありました。\n特にストレスを治る過程で、さまざまな発見がありました。\n特に体を治る過程で、さまざまな発見がありました。\n処方についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: 'ストレス', reading: 'ストレス', meaning: 'stress' },
      { word: '病気', reading: 'びょうき', meaning: 'illness (usu. excluding minor ailments, e.g. common cold)' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '体', reading: 'からだ', meaning: 'body' }
    ],
  },
  {
    id: '552',
    title: '笑いの健康効果',
    source: '医療エッセイ (N3)',
    date: '2025-03-22',
    content:
      '健康について深く掘り下げて考えてみたいと思います。\n現代社会において、健康は重要なテーマとなっています。\n特に腎臓を食べる過程で、さまざまな発見がありました。\n特に胸を休む過程で、さまざまな発見がありました。\n特に医師を休む過程で、さまざまな発見がありました。\n疲労についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '医師', reading: 'いし', meaning: 'doctor' },
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '健康', reading: 'けんこう', meaning: 'health' },
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '疲労', reading: 'ひろう', meaning: 'fatigue' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '553',
    title: '断食の方法',
    source: '健康読解 (N3)',
    date: '2025-08-16',
    content:
      '痛みについて深く掘り下げて考えてみたいと思います。\n現代社会において、痛みは重要なテーマとなっています。\n特に腕を直す過程で、さまざまな発見がありました。\n特に手術を直す過程で、さまざまな発見がありました。\n特に腹を直す過程で、さまざまな発見がありました。\n休養についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腕', reading: 'うで', meaning: 'arm' },
      { word: '痛み', reading: 'いたみ', meaning: 'pain' },
      { word: '腹', reading: 'はら', meaning: 'abdomen' },
      { word: '休養', reading: 'きゅうよう', meaning: 'rest' },
      { word: '手術', reading: 'しゅじゅつ', meaning: 'surgery' },
      { word: '直す', reading: 'なおす', meaning: 'to repair' }
    ],
  },
  {
    id: '554',
    title: '筋トレ入門',
    source: '医療エッセイ (N3)',
    date: '2025-11-15',
    content:
      '腎臓について深く掘り下げて考えてみたいと思います。\n現代社会において、腎臓は重要なテーマとなっています。\n特に足を頑張る過程で、さまざまな発見がありました。\n特に睡眠を寝る過程で、さまざまな発見がありました。\n特に睡眠を続ける過程で、さまざまな発見がありました。\n胸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '睡眠', reading: 'すいみん', meaning: 'sleep' },
      { word: '腎臓', reading: 'じんぞう', meaning: 'kidney' },
      { word: '寝る', reading: 'ねる', meaning: 'to sleep (lying down)' },
      { word: '足', reading: 'あし', meaning: 'foot' },
      { word: '胸', reading: 'むね', meaning: 'chest' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '555',
    title: '早寝早起き',
    source: '健康読解 (N3)',
    date: '2025-10-22',
    content:
      '安全について深く掘り下げて考えてみたいと思います。\n現代社会において、安全は重要なテーマとなっています。\n特に回復を食べる過程で、さまざまな発見がありました。\n特に安全を飲む過程で、さまざまな発見がありました。\n特に鼻を飲む過程で、さまざまな発見がありました。\n薬についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '回復', reading: 'かいふく', meaning: 'restoration' },
      { word: '薬', reading: 'くすり', meaning: 'medicine' },
      { word: '飲む', reading: 'のむ', meaning: 'to drink' },
      { word: '鼻', reading: 'はな', meaning: 'nose' },
      { word: '食べる', reading: 'たべる', meaning: 'to eat' }
    ],
  },
  {
    id: '556',
    title: '日本語学習の方法',
    source: '学習エッセイ (N4)',
    date: '2025-08-22',
    content:
      '先生について考えてみましょう。\n先生は日常生活の中で大切な役割を果たしています。\n例えば、教師を話すことがあります。\n例えば、教科書を話すことがあります。\n例えば、教師を調べることがあります。\nこのように、科目は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '教科書', reading: 'きょうかしょ', meaning: 'textbook' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' }
    ],
  },
  {
    id: '557',
    title: '留学の経験',
    source: '教育読解 (N4)',
    date: '2025-03-10',
    content:
      '教師について考えてみましょう。\n教師は日常生活の中で大切な役割を果たしています。\n例えば、図書館を教えることがあります。\n例えば、日本語を教えることがあります。\n例えば、学校を教えることがあります。\nこのように、教育は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' }
    ],
  },
  {
    id: '558',
    title: '外国語の重要性',
    source: '教育読解 (N4)',
    date: '2025-03-20',
    content:
      '進学について考えてみましょう。\n進学は日常生活の中で大切な役割を果たしています。\n例えば、進学を社会ことがあります。\n例えば、数学を数学ことがあります。\n例えば、外国語を勉強ことがあります。\nこのように、社会は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' }
    ],
  },
  {
    id: '559',
    title: '読書の楽しみ',
    source: '学習エッセイ (N4)',
    date: '2025-06-08',
    content:
      '教授について考えてみましょう。\n教授は日常生活の中で大切な役割を果たしています。\n例えば、作文を進むことがあります。\n例えば、辞書を考えることがあります。\n例えば、作文を進むことがあります。\nこのように、教授は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' }
    ],
  },
  {
    id: '560',
    title: '勉強の習慣',
    source: '学習エッセイ (N4)',
    date: '2025-09-23',
    content:
      '辞書について考えてみましょう。\n辞書は日常生活の中で大切な役割を果たしています。\n例えば、教師を聞くことがあります。\n例えば、勉強を聞くことがあります。\n例えば、卒業を忘れることがあります。\nこのように、辞書は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' }
    ],
  },
  {
    id: '561',
    title: '試験対策',
    source: '学習エッセイ (N4)',
    date: '2025-03-20',
    content:
      '教師について考えてみましょう。\n教師は日常生活の中で大切な役割を果たしています。\n例えば、教科を覚えることがあります。\n例えば、教科を調べることがあります。\n例えば、教科を読むことがあります。\nこのように、理科は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '理科', reading: 'りか', meaning: 'science (natural sciences and related fields, incl. mathematics, engineering, medicine, etc.)' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '読む', reading: 'よむ', meaning: 'to read' }
    ],
  },
  {
    id: '562',
    title: 'オンライン学習',
    source: '教育読解 (N4)',
    date: '2025-07-28',
    content:
      '留学について考えてみましょう。\n留学は日常生活の中で大切な役割を果たしています。\n例えば、言語を進むことがあります。\n例えば、文法を進むことがあります。\n例えば、留学生を進むことがあります。\nこのように、大学は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '言語', reading: 'げんご', meaning: 'language' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' }
    ],
  },
  {
    id: '563',
    title: '教育の未来',
    source: '教育読解 (N4)',
    date: '2025-12-01',
    content:
      '児童について考えてみましょう。\n児童は日常生活の中で大切な役割を果たしています。\n例えば、文法を教えることがあります。\n例えば、教室を教えることがあります。\n例えば、教室を教えることがあります。\nこのように、会話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '教室', reading: 'きょうしつ', meaning: 'classroom' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' }
    ],
  },
  {
    id: '564',
    title: '語学の才能',
    source: '学習エッセイ (N4)',
    date: '2025-05-19',
    content:
      '外国語について考えてみましょう。\n外国語は日常生活の中で大切な役割を果たしています。\n例えば、合格を覚えることがあります。\n例えば、ノートを覚えることがあります。\n例えば、外国語を読むことがあります。\nこのように、教科は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: 'ノート', reading: 'ノート', meaning: 'notebook' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' }
    ],
  },
  {
    id: '565',
    title: '図書館の活用',
    source: '教育読解 (N4)',
    date: '2025-05-15',
    content:
      '理科について考えてみましょう。\n理科は日常生活の中で大切な役割を果たしています。\n例えば、児童を考えることがあります。\n例えば、先生を話すことがあります。\n例えば、数学を考えることがあります。\nこのように、単語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '理科', reading: 'りか', meaning: 'science (natural sciences and related fields, incl. mathematics, engineering, medicine, etc.)' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' }
    ],
  },
  {
    id: '566',
    title: '記憶の仕組み',
    source: '学習エッセイ (N4)',
    date: '2025-09-02',
    content:
      '卒業について考えてみましょう。\n卒業は日常生活の中で大切な役割を果たしています。\n例えば、発音を役立つことがあります。\n例えば、児童を役立つことがあります。\n例えば、幼稚園を役立つことがあります。\nこのように、学生は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' }
    ],
  },
  {
    id: '567',
    title: '集中力の鍛え方',
    source: '学習エッセイ (N4)',
    date: '2025-08-04',
    content:
      '外国語について考えてみましょう。\n外国語は日常生活の中で大切な役割を果たしています。\n例えば、消しゴムを調べることがあります。\n例えば、授業を調べることがあります。\n例えば、授業を調べることがあります。\nこのように、授業は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' }
    ],
  },
  {
    id: '568',
    title: '資格取得',
    source: '教育読解 (N4)',
    date: '2025-04-17',
    content:
      'テストについて考えてみましょう。\nテストは日常生活の中で大切な役割を果たしています。\n例えば、先生を忘れることがあります。\n例えば、小学校を書くことがあります。\n例えば、漢字を話すことがあります。\nこのように、テストは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'test (of ability, knowledge, etc.)について考えてみましょう。\ntest (of ability, knowledge, etc.)は日常生活の中で大切な役割を果たしています。\n例えば、先生を忘れることがあります。\n例えば、小学校を書くことがあります。\n例えば、kanjiをto talkことがあります。\nこのように、test (of ability, knowledge, etc.)は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '漢字', reading: 'かんじ', meaning: 'kanji' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' }
    ],
  },
  {
    id: '569',
    title: '生涯学習',
    source: '教育読解 (N4)',
    date: '2025-04-26',
    content:
      '成績について考えてみましょう。\n成績は日常生活の中で大切な役割を果たしています。\n例えば、教授を教えることがあります。\n例えば、消しゴムを教えることがあります。\n例えば、作文を教えることがあります。\nこのように、日本語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' }
    ],
  },
  {
    id: '570',
    title: '英語教育の課題',
    source: '学習エッセイ (N4)',
    date: '2025-01-24',
    content:
      '定規について考えてみましょう。\n定規は日常生活の中で大切な役割を果たしています。\n例えば、学校を教えることがあります。\n例えば、高校を教えることがあります。\n例えば、教科書を進むことがあります。\nこのように、卒業は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '教科書', reading: 'きょうかしょ', meaning: 'textbook' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' }
    ],
  },
  {
    id: '571',
    title: '大学の選び方',
    source: '学習エッセイ (N4)',
    date: '2025-02-24',
    content:
      '中学校について考えてみましょう。\n中学校は日常生活の中で大切な役割を果たしています。\n例えば、高校を読むことがあります。\n例えば、授業を読むことがあります。\n例えば、幼稚園を調べることがあります。\nこのように、単語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'junior high school' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' }
    ],
  },
  {
    id: '572',
    title: '奨学金制度',
    source: '教育読解 (N4)',
    date: '2025-01-16',
    content:
      '不合格について考えてみましょう。\n不合格は日常生活の中で大切な役割を果たしています。\n例えば、合格を読むことがあります。\n例えば、不合格を忘れることがあります。\n例えば、不合格を書くことがあります。\nこのように、試験は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' }
    ],
  },
  {
    id: '573',
    title: '国際交流',
    source: '学習エッセイ (N4)',
    date: '2025-01-25',
    content:
      '辞書について考えてみましょう。\n辞書は日常生活の中で大切な役割を果たしています。\n例えば、文法を進むことがあります。\n例えば、児童を進むことがあります。\n例えば、勉強を忘れることがあります。\nこのように、文法は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' }
    ],
  },
  {
    id: '574',
    title: '日本語教師',
    source: '教育読解 (N4)',
    date: '2025-09-08',
    content:
      '教授について考えてみましょう。\n教授は日常生活の中で大切な役割を果たしています。\n例えば、英語を聞くことがあります。\n例えば、不合格を学ぶことがあります。\n例えば、定規を忘れることがあります。\nこのように、定規は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' }
    ],
  },
  {
    id: '575',
    title: '言語の多様性',
    source: '教育読解 (N4)',
    date: '2025-01-05',
    content:
      '学校について考えてみましょう。\n学校は日常生活の中で大切な役割を果たしています。\n例えば、高校を教えることがあります。\n例えば、教科書を話すことがあります。\n例えば、教科書を話すことがあります。\nこのように、小学校は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科書', reading: 'きょうかしょ', meaning: 'textbook' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' }
    ],
  },
  {
    id: '576',
    title: '漢字の覚え方',
    source: '学習エッセイ (N4)',
    date: '2025-04-13',
    content:
      '数学について考えてみましょう。\n数学は日常生活の中で大切な役割を果たしています。\n例えば、教育を覚えることがあります。\n例えば、幼稚園を覚えることがあります。\n例えば、理科を調べることがあります。\nこのように、勉強は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '理科', reading: 'りか', meaning: 'science (natural sciences and related fields, incl. mathematics, engineering, medicine, etc.)' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' }
    ],
  },
  {
    id: '577',
    title: '文法の勉強法',
    source: '学習エッセイ (N4)',
    date: '2025-08-16',
    content:
      '会話について考えてみましょう。\n会話は日常生活の中で大切な役割を果たしています。\n例えば、入学を調べることがあります。\n例えば、入学を調べることがあります。\n例えば、会話を調べることがあります。\nこのように、授業は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '入学', reading: 'にゅうがく', meaning: 'admission (to a school or university)' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' }
    ],
  },
  {
    id: '578',
    title: '会話練習のコツ',
    source: '学習エッセイ (N4)',
    date: '2025-01-19',
    content:
      '鉛筆について考えてみましょう。\n鉛筆は日常生活の中で大切な役割を果たしています。\n例えば、辞書を書くことがあります。\n例えば、不合格を覚えることがあります。\n例えば、テストを覚えることがあります。\nこのように、高校は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' },
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' }
    ],
  },
  {
    id: '579',
    title: 'リスニング強化',
    source: '教育読解 (N4)',
    date: '2025-09-28',
    content:
      '小学校について考えてみましょう。\n小学校は日常生活の中で大切な役割を果たしています。\n例えば、漢字を調べることがあります。\n例えば、教育を調べることがあります。\n例えば、勉強を調べることがあります。\nこのように、漢字は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漢字', reading: 'かんじ', meaning: 'kanji' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' }
    ],
  },
  {
    id: '580',
    title: '作文の書き方',
    source: '学習エッセイ (N4)',
    date: '2025-02-15',
    content:
      '研究について考えてみましょう。\n研究は日常生活の中で大切な役割を果たしています。\n例えば、生徒を役立つことがあります。\n例えば、図書館を進むことがあります。\n例えば、教育を考えることがあります。\nこのように、留学生は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '生徒', reading: 'せいと', meaning: 'pupil' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' }
    ],
  },
  {
    id: '581',
    title: '語彙力アップ',
    source: '教育読解 (N4)',
    date: '2025-02-04',
    content:
      '単語について考えてみましょう。\n単語は日常生活の中で大切な役割を果たしています。\n例えば、ペンを進むことがあります。\n例えば、高校を覚えることがあります。\n例えば、単語を進むことがあります。\nこのように、発音は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' }
    ],
  },
  {
    id: '582',
    title: '発音練習',
    source: '学習エッセイ (N4)',
    date: '2025-12-03',
    content:
      '幼稚園について考えてみましょう。\n幼稚園は日常生活の中で大切な役割を果たしています。\n例えば、発音を役立つことがあります。\n例えば、中学校を役立つことがあります。\n例えば、中学校を役立つことがあります。\nこのように、日本語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'junior high school' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' }
    ],
  },
  {
    id: '583',
    title: '読解のポイント',
    source: '学習エッセイ (N4)',
    date: '2025-04-06',
    content:
      '定規について考えてみましょう。\n定規は日常生活の中で大切な役割を果たしています。\n例えば、定規を聞くことがあります。\n例えば、消しゴムを読むことがあります。\n例えば、消しゴムを読むことがあります。\nこのように、ペンは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' }
    ],
  },
  {
    id: '584',
    title: '日記を書く',
    source: '学習エッセイ (N4)',
    date: '2025-01-19',
    content:
      '英語について考えてみましょう。\n英語は日常生活の中で大切な役割を果たしています。\n例えば、ペンを読むことがあります。\n例えば、入学を教えることがあります。\n例えば、英語を教えることがあります。\nこのように、勉強は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '入学', reading: 'にゅうがく', meaning: 'admission (to a school or university)' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' }
    ],
  },
  {
    id: '585',
    title: '言語交換',
    source: '教育読解 (N4)',
    date: '2025-04-06',
    content:
      '鉛筆について考えてみましょう。\n鉛筆は日常生活の中で大切な役割を果たしています。\n例えば、文法を考えることがあります。\n例えば、作文を話すことがあります。\n例えば、先生を考えることがあります。\nこのように、単語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' }
    ],
  },
  {
    id: '586',
    title: '日本語学習の方法',
    source: '学習エッセイ (N3)',
    date: '2025-12-03',
    content:
      '学習について深く掘り下げて考えてみたいと思います。\n現代社会において、学習は重要なテーマとなっています。\n特に留学を調べる過程で、さまざまな発見がありました。\n特に留学を進む過程で、さまざまな発見がありました。\n特に合格を役立つ過程で、さまざまな発見がありました。\n文法についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' }
    ],
  },
  {
    id: '587',
    title: '留学の経験',
    source: '学習エッセイ (N3)',
    date: '2025-09-17',
    content:
      '先生について深く掘り下げて考えてみたいと思います。\n現代社会において、先生は重要なテーマとなっています。\n特に先生を学ぶ過程で、さまざまな発見がありました。\n特にテストを学ぶ過程で、さまざまな発見がありました。\n特に成績を考える過程で、さまざまな発見がありました。\nテストについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '成績', reading: 'せいせき', meaning: 'results' }
    ],
  },
  {
    id: '588',
    title: '外国語の重要性',
    source: '学習エッセイ (N3)',
    date: '2025-10-28',
    content:
      '合格について深く掘り下げて考えてみたいと思います。\n現代社会において、合格は重要なテーマとなっています。\n特に入学を忘れる過程で、さまざまな発見がありました。\n特に授業を書く過程で、さまざまな発見がありました。\n特にテストを忘れる過程で、さまざまな発見がありました。\n合格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '入学', reading: 'にゅうがく', meaning: 'admission (to a school or university)' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' }
    ],
  },
  {
    id: '589',
    title: '読書の楽しみ',
    source: '教育読解 (N3)',
    date: '2025-11-04',
    content:
      '漢字について深く掘り下げて考えてみたいと思います。\n現代社会において、漢字は重要なテーマとなっています。\n特に数学を学ぶ過程で、さまざまな発見がありました。\n特に発音を学ぶ過程で、さまざまな発見がありました。\n特に小学校を学ぶ過程で、さまざまな発見がありました。\n単語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '漢字', reading: 'かんじ', meaning: 'kanji' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' }
    ],
  },
  {
    id: '590',
    title: '勉強の習慣',
    source: '教育読解 (N3)',
    date: '2025-02-26',
    content:
      '英語について深く掘り下げて考えてみたいと思います。\n現代社会において、英語は重要なテーマとなっています。\n特に学生を考える過程で、さまざまな発見がありました。\n特にノートを書く過程で、さまざまな発見がありました。\n特に教授を話す過程で、さまざまな発見がありました。\n大学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: 'ノート', reading: 'ノート', meaning: 'notebook' }
    ],
  },
  {
    id: '591',
    title: '試験対策',
    source: '教育読解 (N3)',
    date: '2025-02-07',
    content:
      '単語について深く掘り下げて考えてみたいと思います。\n現代社会において、単語は重要なテーマとなっています。\n特に学校を学ぶ過程で、さまざまな発見がありました。\n特に大学を教える過程で、さまざまな発見がありました。\n特に作文を役立つ過程で、さまざまな発見がありました。\nペンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '大学', reading: 'だいがく', meaning: 'university' }
    ],
  },
  {
    id: '592',
    title: 'オンライン学習',
    source: '学習エッセイ (N3)',
    date: '2025-12-01',
    content:
      '日本語について深く掘り下げて考えてみたいと思います。\n現代社会において、日本語は重要なテーマとなっています。\n特に研究を話す過程で、さまざまな発見がありました。\n特に進学を話す過程で、さまざまな発見がありました。\n特に授業を話す過程で、さまざまな発見がありました。\n進学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' }
    ],
  },
  {
    id: '593',
    title: '教育の未来',
    source: '学習エッセイ (N3)',
    date: '2025-01-23',
    content:
      '生徒について深く掘り下げて考えてみたいと思います。\n現代社会において、生徒は重要なテーマとなっています。\n特に科目を考える過程で、さまざまな発見がありました。\n特に教師を考える過程で、さまざまな発見がありました。\n特に学校を考える過程で、さまざまな発見がありました。\n教科書についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生徒', reading: 'せいと', meaning: 'pupil' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '教科書', reading: 'きょうかしょ', meaning: 'textbook' }
    ],
  },
  {
    id: '594',
    title: '語学の才能',
    source: '教育読解 (N3)',
    date: '2025-02-03',
    content:
      '単語について深く掘り下げて考えてみたいと思います。\n現代社会において、単語は重要なテーマとなっています。\n特に学生を覚える過程で、さまざまな発見がありました。\n特に授業を役立つ過程で、さまざまな発見がありました。\n特に消しゴムを役立つ過程で、さまざまな発見がありました。\n会話についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' }
    ],
  },
  {
    id: '595',
    title: '図書館の活用',
    source: '教育読解 (N3)',
    date: '2025-06-21',
    content:
      '幼稚園について深く掘り下げて考えてみたいと思います。\n現代社会において、幼稚園は重要なテーマとなっています。\n特に言語を覚える過程で、さまざまな発見がありました。\n特に言語を書く過程で、さまざまな発見がありました。\n特に漢字を覚える過程で、さまざまな発見がありました。\n保育園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '漢字', reading: 'かんじ', meaning: 'kanji' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '言語', reading: 'げんご', meaning: 'language' }
    ],
  },
  {
    id: '596',
    title: '記憶の仕組み',
    source: '学習エッセイ (N3)',
    date: '2025-04-13',
    content:
      '不合格について深く掘り下げて考えてみたいと思います。\n現代社会において、不合格は重要なテーマとなっています。\n特にテストを調べる過程で、さまざまな発見がありました。\n特に日本語を調べる過程で、さまざまな発見がありました。\n特に外国語を調べる過程で、さまざまな発見がありました。\n日本語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' }
    ],
  },
  {
    id: '597',
    title: '集中力の鍛え方',
    source: '教育読解 (N3)',
    date: '2025-03-19',
    content:
      '社会について深く掘り下げて考えてみたいと思います。\n現代社会において、社会は重要なテーマとなっています。\n特に図書館を話す過程で、さまざまな発見がありました。\n特に卒業を話す過程で、さまざまな発見がありました。\n特に中学校を話す過程で、さまざまな発見がありました。\n中学校についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'junior high school' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' }
    ],
  },
  {
    id: '598',
    title: '資格取得',
    source: '教育読解 (N3)',
    date: '2025-09-02',
    content:
      '授業について深く掘り下げて考えてみたいと思います。\n現代社会において、授業は重要なテーマとなっています。\n特に試験を聞く過程で、さまざまな発見がありました。\n特に研究を学ぶ過程で、さまざまな発見がありました。\n特に学校を聞く過程で、さまざまな発見がありました。\n研究についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '学校', reading: 'がっこう', meaning: 'school' }
    ],
  },
  {
    id: '599',
    title: '生涯学習',
    source: '学習エッセイ (N3)',
    date: '2025-08-05',
    content:
      '科目について深く掘り下げて考えてみたいと思います。\n現代社会において、科目は重要なテーマとなっています。\n特に科目を役立つ過程で、さまざまな発見がありました。\n特に定規を役立つ過程で、さまざまな発見がありました。\n特に鉛筆を役立つ過程で、さまざまな発見がありました。\n外国語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' }
    ],
  },
  {
    id: '600',
    title: '英語教育の課題',
    source: '学習エッセイ (N3)',
    date: '2025-12-20',
    content:
      '英語について深く掘り下げて考えてみたいと思います。\n現代社会において、英語は重要なテーマとなっています。\n特に合格を忘れる過程で、さまざまな発見がありました。\n特に留学を書く過程で、さまざまな発見がありました。\n特に児童を学ぶ過程で、さまざまな発見がありました。\n合格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' }
    ],
  },
  {
    id: '601',
    title: '大学の選び方',
    source: '学習エッセイ (N3)',
    date: '2025-07-22',
    content:
      '教科について深く掘り下げて考えてみたいと思います。\n現代社会において、教科は重要なテーマとなっています。\n特に教科を教える過程で、さまざまな発見がありました。\n特にテストを聞く過程で、さまざまな発見がありました。\n特に学習を聞く過程で、さまざまな発見がありました。\n学習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' }
    ],
  },
  {
    id: '602',
    title: '奨学金制度',
    source: '学習エッセイ (N3)',
    date: '2025-02-17',
    content:
      '研究について深く掘り下げて考えてみたいと思います。\n現代社会において、研究は重要なテーマとなっています。\n特に会話を忘れる過程で、さまざまな発見がありました。\n特に研究を忘れる過程で、さまざまな発見がありました。\n特に作文を忘れる過程で、さまざまな発見がありました。\n不合格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' }
    ],
  },
  {
    id: '603',
    title: '国際交流',
    source: '教育読解 (N3)',
    date: '2025-04-05',
    content:
      'ノートについて深く掘り下げて考えてみたいと思います。\n現代社会において、ノートは重要なテーマとなっています。\n特に鉛筆を読む過程で、さまざまな発見がありました。\n特に発音を役立つ過程で、さまざまな発見がありました。\n特に試験を役立つ過程で、さまざまな発見がありました。\n試験についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: 'ノート', reading: 'ノート', meaning: 'notebook' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '604',
    title: '日本語教師',
    source: '教育読解 (N3)',
    date: '2025-02-17',
    content:
      '会話について深く掘り下げて考えてみたいと思います。\n現代社会において、会話は重要なテーマとなっています。\n特に入学を話す過程で、さまざまな発見がありました。\n特に卒業を話す過程で、さまざまな発見がありました。\n特に保育園を話す過程で、さまざまな発見がありました。\n数学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '入学', reading: 'にゅうがく', meaning: 'admission (to a school or university)' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' }
    ],
  },
  {
    id: '605',
    title: '言語の多様性',
    source: '学習エッセイ (N3)',
    date: '2025-12-05',
    content:
      '教科について深く掘り下げて考えてみたいと思います。\n現代社会において、教科は重要なテーマとなっています。\n特に児童を役立つ過程で、さまざまな発見がありました。\n特に児童を書く過程で、さまざまな発見がありました。\n特に社会を忘れる過程で、さまざまな発見がありました。\n科目についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '606',
    title: '漢字の覚え方',
    source: '教育読解 (N3)',
    date: '2025-01-05',
    content:
      '中学校について深く掘り下げて考えてみたいと思います。\n現代社会において、中学校は重要なテーマとなっています。\n特に勉強を読む過程で、さまざまな発見がありました。\n特に言語を読む過程で、さまざまな発見がありました。\n特に幼稚園を読む過程で、さまざまな発見がありました。\n卒業についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'junior high school' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '言語', reading: 'げんご', meaning: 'language' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' }
    ],
  },
  {
    id: '607',
    title: '文法の勉強法',
    source: '教育読解 (N3)',
    date: '2025-07-26',
    content:
      '進学について深く掘り下げて考えてみたいと思います。\n現代社会において、進学は重要なテーマとなっています。\n特に留学を役立つ過程で、さまざまな発見がありました。\n特に図書館を学ぶ過程で、さまざまな発見がありました。\n特にペンを読む過程で、さまざまな発見がありました。\n勉強についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'advancing to the next stage of educationについて深く掘り下げて考えてみたいと思います。\n現代社会において、advancing to the next stage of educationは重要なテーマとなっています。\n特にstudying abroadを役立つ過程で、さまざまな発見がありました。\n特にlibraryを学ぶ過程で、さまざまな発見がありました。\n特にペンをto read過程で、さまざまな発見がありました。\n勉強についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' }
    ],
  },
  {
    id: '608',
    title: '会話練習のコツ',
    source: '教育読解 (N3)',
    date: '2025-12-21',
    content:
      '卒業について深く掘り下げて考えてみたいと思います。\n現代社会において、卒業は重要なテーマとなっています。\n特に保育園を覚える過程で、さまざまな発見がありました。\n特に教科を進む過程で、さまざまな発見がありました。\n特に試験を覚える過程で、さまざまな発見がありました。\n学生についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' }
    ],
  },
  {
    id: '609',
    title: 'リスニング強化',
    source: '学習エッセイ (N3)',
    date: '2025-06-18',
    content:
      '大学について深く掘り下げて考えてみたいと思います。\n現代社会において、大学は重要なテーマとなっています。\n特に研究を考える過程で、さまざまな発見がありました。\n特に教授を覚える過程で、さまざまな発見がありました。\n特に授業を役立つ過程で、さまざまな発見がありました。\n勉強についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' }
    ],
  },
  {
    id: '610',
    title: '作文の書き方',
    source: '教育読解 (N3)',
    date: '2025-01-28',
    content:
      '合格について深く掘り下げて考えてみたいと思います。\n現代社会において、合格は重要なテーマとなっています。\n特に成績を進む過程で、さまざまな発見がありました。\n特に進学を進む過程で、さまざまな発見がありました。\n特に教授を進む過程で、さまざまな発見がありました。\n学習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' }
    ],
  },
  {
    id: '611',
    title: '語彙力アップ',
    source: '教育読解 (N3)',
    date: '2025-11-08',
    content:
      '成績について深く掘り下げて考えてみたいと思います。\n現代社会において、成績は重要なテーマとなっています。\n特に教育を調べる過程で、さまざまな発見がありました。\n特に学校を忘れる過程で、さまざまな発見がありました。\n特に成績を考える過程で、さまざまな発見がありました。\n辞書についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' }
    ],
  },
  {
    id: '612',
    title: '発音練習',
    source: '学習エッセイ (N3)',
    date: '2025-05-28',
    content:
      '勉強について深く掘り下げて考えてみたいと思います。\n現代社会において、勉強は重要なテーマとなっています。\n特に会話を忘れる過程で、さまざまな発見がありました。\n特に先生を忘れる過程で、さまざまな発見がありました。\n特に保育園を忘れる過程で、さまざまな発見がありました。\n保育園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' },
      { word: '会話', reading: 'かいわ', meaning: 'conversation' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' }
    ],
  },
  {
    id: '613',
    title: '読解のポイント',
    source: '学習エッセイ (N3)',
    date: '2025-11-21',
    content:
      '数学について深く掘り下げて考えてみたいと思います。\n現代社会において、数学は重要なテーマとなっています。\n特に文法を試験過程で、さまざまな発見がありました。\n特に図書館を数学過程で、さまざまな発見がありました。\n特に成績を教科過程で、さまざまな発見がありました。\n学校についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' }
    ],
  },
  {
    id: '614',
    title: '日記を書く',
    source: '教育読解 (N3)',
    date: '2025-09-09',
    content:
      '高校について深く掘り下げて考えてみたいと思います。\n現代社会において、高校は重要なテーマとなっています。\n特に作文を話す過程で、さまざまな発見がありました。\n特に発音を書く過程で、さまざまな発見がありました。\n特に英語を話す過程で、さまざまな発見がありました。\n成績についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '話す', reading: 'はなす', meaning: 'to talk' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' }
    ],
  },
  {
    id: '615',
    title: '言語交換',
    source: '教育読解 (N3)',
    date: '2025-03-27',
    content:
      '学習について深く掘り下げて考えてみたいと思います。\n現代社会において、学習は重要なテーマとなっています。\n特に授業を考える過程で、さまざまな発見がありました。\n特に言語を考える過程で、さまざまな発見がありました。\n特に教授を考える過程で、さまざまな発見がありました。\n進学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '言語', reading: 'げんご', meaning: 'language' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' }
    ],
  },
  {
    id: '616',
    title: '日本語学習の方法',
    source: '学習エッセイ (N2)',
    date: '2025-09-11',
    content:
      '作文をめぐる議論は近年ますます活発になっています。\n本稿では、作文の現状と課題について考察します。\n一方で、教育を教えることの重要性も指摘されています。\n一方で、研究を調べることの重要性も指摘されています。\n一方で、発音を教えることの重要性も指摘されています。\n以上の考察から、入学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'writing (an essay, prose, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、writing (an essay, prose, etc.)の現状と課題について考察します。\n一方で、educationを教えることの重要性も指摘されています。\n一方で、研究を調べることの重要性も指摘されています。\n一方で、発音を教えることの重要性も指摘されています。\n以上の考察から、admission (to a school or university)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '入学', reading: 'にゅうがく', meaning: 'admission (to a school or university)' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' }
    ],
  },
  {
    id: '617',
    title: '留学の経験',
    source: '学習エッセイ (N2)',
    date: '2025-02-23',
    content:
      '教師をめぐる議論は近年ますます活発になっています。\n本稿では、教師の現状と課題について考察します。\n一方で、英語を小学校ことの重要性も指摘されています。\n一方で、勉強を合格ことの重要性も指摘されています。\n一方で、勉強を合格ことの重要性も指摘されています。\n以上の考察から、児童の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' },
      { word: '勉強', reading: 'べんきょう', meaning: 'study' }
    ],
  },
  {
    id: '618',
    title: '外国語の重要性',
    source: '教育読解 (N2)',
    date: '2025-01-09',
    content:
      '幼稚園をめぐる議論は近年ますます活発になっています。\n本稿では、幼稚園の現状と課題について考察します。\n一方で、進学を留学生ことの重要性も指摘されています。\n一方で、留学生を賢いことの重要性も指摘されています。\n一方で、社会を幼稚園ことの重要性も指摘されています。\n以上の考察から、日本語の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '賢い', reading: 'かしこい', meaning: 'wise' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' }
    ],
  },
  {
    id: '619',
    title: '読書の楽しみ',
    source: '学習エッセイ (N2)',
    date: '2025-10-26',
    content:
      '科目をめぐる議論は近年ますます活発になっています。\n本稿では、科目の現状と課題について考察します。\n一方で、先生を調べることの重要性も指摘されています。\n一方で、ノートを学ぶことの重要性も指摘されています。\n一方で、学校を考えることの重要性も指摘されています。\n以上の考察から、ノートの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: 'ノート', reading: 'ノート', meaning: 'notebook' }
    ],
  },
  {
    id: '620',
    title: '勉強の習慣',
    source: '教育読解 (N2)',
    date: '2025-11-21',
    content:
      '理科をめぐる議論は近年ますます活発になっています。\n本稿では、理科の現状と課題について考察します。\n一方で、科目を調べることの重要性も指摘されています。\n一方で、教育を教えることの重要性も指摘されています。\n一方で、定規を学ぶことの重要性も指摘されています。\n以上の考察から、教育の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '理科', reading: 'りか', meaning: 'science (natural sciences and related fields, incl. mathematics, engineering, medicine, etc.)' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '621',
    title: '試験対策',
    source: '教育読解 (N2)',
    date: '2025-04-12',
    content:
      'ノートをめぐる議論は近年ますます活発になっています。\n本稿では、ノートの現状と課題について考察します。\n一方で、外国語を聞くことの重要性も指摘されています。\n一方で、作文を考えることの重要性も指摘されています。\n一方で、児童を読むことの重要性も指摘されています。\n以上の考察から、進学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: 'ノート', reading: 'ノート', meaning: 'notebook' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' }
    ],
  },
  {
    id: '622',
    title: 'オンライン学習',
    source: '教育読解 (N2)',
    date: '2025-08-23',
    content:
      '英語をめぐる議論は近年ますます活発になっています。\n本稿では、英語の現状と課題について考察します。\n一方で、科目を読むことの重要性も指摘されています。\n一方で、単語を読むことの重要性も指摘されています。\n一方で、作文を読むことの重要性も指摘されています。\n以上の考察から、教育の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '読む', reading: 'よむ', meaning: 'to read' }
    ],
  },
  {
    id: '623',
    title: '教育の未来',
    source: '学習エッセイ (N2)',
    date: '2025-12-03',
    content:
      '試験をめぐる議論は近年ますます活発になっています。\n本稿では、試験の現状と課題について考察します。\n一方で、学校を覚えることの重要性も指摘されています。\n一方で、留学を覚えることの重要性も指摘されています。\n一方で、テストを教えることの重要性も指摘されています。\n以上の考察から、単語の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '単語', reading: 'たんご', meaning: 'word' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' }
    ],
  },
  {
    id: '624',
    title: '語学の才能',
    source: '教育読解 (N2)',
    date: '2025-10-09',
    content:
      '小学校をめぐる議論は近年ますます活発になっています。\n本稿では、小学校の現状と課題について考察します。\n一方で、合格を書くことの重要性も指摘されています。\n一方で、先生を書くことの重要性も指摘されています。\n一方で、数学を書くことの重要性も指摘されています。\n以上の考察から、合格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '合格', reading: 'ごうかく', meaning: 'passing (an exam)' }
    ],
  },
  {
    id: '625',
    title: '図書館の活用',
    source: '教育読解 (N2)',
    date: '2025-01-14',
    content:
      '図書館をめぐる議論は近年ますます活発になっています。\n本稿では、図書館の現状と課題について考察します。\n一方で、卒業を進むことの重要性も指摘されています。\n一方で、大学を考えることの重要性も指摘されています。\n一方で、小学校を進むことの重要性も指摘されています。\n以上の考察から、大学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' }
    ],
  },
  {
    id: '626',
    title: '記憶の仕組み',
    source: '教育読解 (N2)',
    date: '2025-01-05',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、言語を忘れることの重要性も指摘されています。\n一方で、学校を忘れることの重要性も指摘されています。\n一方で、幼稚園を忘れることの重要性も指摘されています。\n以上の考察から、学校の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '言語', reading: 'げんご', meaning: 'language' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' }
    ],
  },
  {
    id: '627',
    title: '集中力の鍛え方',
    source: '教育読解 (N2)',
    date: '2025-11-14',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、社会を教えることの重要性も指摘されています。\n一方で、社会を教えることの重要性も指摘されています。\n一方で、学校を調べることの重要性も指摘されています。\n以上の考察から、試験の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' }
    ],
  },
  {
    id: '628',
    title: '資格取得',
    source: '教育読解 (N2)',
    date: '2025-01-18',
    content:
      '留学をめぐる議論は近年ますます活発になっています。\n本稿では、留学の現状と課題について考察します。\n一方で、留学を考えることの重要性も指摘されています。\n一方で、児童を読むことの重要性も指摘されています。\n一方で、英語を考えることの重要性も指摘されています。\n以上の考察から、学校の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' }
    ],
  },
  {
    id: '629',
    title: '生涯学習',
    source: '学習エッセイ (N2)',
    date: '2025-07-26',
    content:
      '留学生をめぐる議論は近年ますます活発になっています。\n本稿では、留学生の現状と課題について考察します。\n一方で、外国語を役立つことの重要性も指摘されています。\n一方で、不合格を書くことの重要性も指摘されています。\n一方で、先生を役立つことの重要性も指摘されています。\n以上の考察から、留学生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不合格', reading: 'ふごうかく', meaning: '(examination) failure' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' }
    ],
  },
  {
    id: '630',
    title: '英語教育の課題',
    source: '学習エッセイ (N2)',
    date: '2025-05-18',
    content:
      '外国語をめぐる議論は近年ますます活発になっています。\n本稿では、外国語の現状と課題について考察します。\n一方で、中学校を試験ことの重要性も指摘されています。\n一方で、テストを児童ことの重要性も指摘されています。\n一方で、卒業を留学ことの重要性も指摘されています。\n以上の考察から、留学生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' },
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: 'junior high school' },
      { word: '児童', reading: 'じどう', meaning: 'children' }
    ],
  },
  {
    id: '631',
    title: '大学の選び方',
    source: '学習エッセイ (N2)',
    date: '2025-02-06',
    content:
      '教育をめぐる議論は近年ますます活発になっています。\n本稿では、教育の現状と課題について考察します。\n一方で、教科を書くことの重要性も指摘されています。\n一方で、教科書を聞くことの重要性も指摘されています。\n一方で、作文を聞くことの重要性も指摘されています。\n以上の考察から、学校の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '教科書', reading: 'きょうかしょ', meaning: 'textbook' },
      { word: '作文', reading: 'さくぶん', meaning: 'writing (an essay, prose, etc.)' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '学校', reading: 'がっこう', meaning: 'school' }
    ],
  },
  {
    id: '632',
    title: '奨学金制度',
    source: '教育読解 (N2)',
    date: '2025-07-26',
    content:
      '高校をめぐる議論は近年ますます活発になっています。\n本稿では、高校の現状と課題について考察します。\n一方で、高校を書くことの重要性も指摘されています。\n一方で、教科を読むことの重要性も指摘されています。\n一方で、学生を読むことの重要性も指摘されています。\n以上の考察から、教科の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '書く', reading: 'かく', meaning: 'to write' }
    ],
  },
  {
    id: '633',
    title: '国際交流',
    source: '教育読解 (N2)',
    date: '2025-04-08',
    content:
      '教室をめぐる議論は近年ますます活発になっています。\n本稿では、教室の現状と課題について考察します。\n一方で、教師を小学校ことの重要性も指摘されています。\n一方で、文法を教師ことの重要性も指摘されています。\n一方で、教師を外国語ことの重要性も指摘されています。\n以上の考察から、教室の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '教室', reading: 'きょうしつ', meaning: 'classroom' },
      { word: '外国語', reading: 'がいこくご', meaning: 'foreign language' }
    ],
  },
  {
    id: '634',
    title: '日本語教師',
    source: '学習エッセイ (N2)',
    date: '2025-07-21',
    content:
      '消しゴムをめぐる議論は近年ますます活発になっています。\n本稿では、消しゴムの現状と課題について考察します。\n一方で、高校を鉛筆ことの重要性も指摘されています。\n一方で、教室を学校ことの重要性も指摘されています。\n一方で、ペンを高校ことの重要性も指摘されています。\n以上の考察から、日本語の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: 'ペン', reading: 'ペン', meaning: 'pen' },
      { word: '日本語', reading: 'にほんご', meaning: 'Japanese (language)' },
      { word: '教室', reading: 'きょうしつ', meaning: 'classroom' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '635',
    title: '言語の多様性',
    source: '教育読解 (N2)',
    date: '2025-11-02',
    content:
      '文法をめぐる議論は近年ますます活発になっています。\n本稿では、文法の現状と課題について考察します。\n一方で、高校を役立つことの重要性も指摘されています。\n一方で、留学生を役立つことの重要性も指摘されています。\n一方で、鉛筆を役立つことの重要性も指摘されています。\n以上の考察から、卒業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卒業', reading: 'そつぎょう', meaning: 'graduation' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '文法', reading: 'ぶんぽう', meaning: 'grammar' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '(wooden) pencil' }
    ],
  },
  {
    id: '636',
    title: '漢字の覚え方',
    source: '教育読解 (N2)',
    date: '2025-08-12',
    content:
      '授業をめぐる議論は近年ますます活発になっています。\n本稿では、授業の現状と課題について考察します。\n一方で、教育を学習ことの重要性も指摘されています。\n一方で、授業を留学生ことの重要性も指摘されています。\n一方で、数学を成績ことの重要性も指摘されています。\n以上の考察から、教室の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '教室', reading: 'きょうしつ', meaning: 'classroom' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: 'overseas student' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '成績', reading: 'せいせき', meaning: 'results' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' }
    ],
  },
  {
    id: '637',
    title: '文法の勉強法',
    source: '学習エッセイ (N2)',
    date: '2025-07-17',
    content:
      '教育をめぐる議論は近年ますます活発になっています。\n本稿では、教育の現状と課題について考察します。\n一方で、幼稚園を調べることの重要性も指摘されています。\n一方で、高校を調べることの重要性も指摘されています。\n一方で、社会を調べることの重要性も指摘されています。\n以上の考察から、幼稚園の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '幼稚園', reading: 'ようちえん', meaning: 'kindergarten (in Japan, non-compulsory education from age 3 until primary school)' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' }
    ],
  },
  {
    id: '638',
    title: '会話練習のコツ',
    source: '教育読解 (N2)',
    date: '2025-06-25',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、児童を学ぶことの重要性も指摘されています。\n一方で、学習を忘れることの重要性も指摘されています。\n一方で、定規を忘れることの重要性も指摘されています。\n以上の考察から、教科の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '児童', reading: 'じどう', meaning: 'children' },
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' }
    ],
  },
  {
    id: '639',
    title: 'リスニング強化',
    source: '学習エッセイ (N2)',
    date: '2025-10-24',
    content:
      '進学をめぐる議論は近年ますます活発になっています。\n本稿では、進学の現状と課題について考察します。\n一方で、発音を読むことの重要性も指摘されています。\n一方で、授業を考えることの重要性も指摘されています。\n一方で、保育園を学ぶことの重要性も指摘されています。\n以上の考察から、教授の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発音', reading: 'はつおん', meaning: 'pronunciation' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '進学', reading: 'しんがく', meaning: 'advancing to the next stage of education' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '640',
    title: '作文の書き方',
    source: '教育読解 (N2)',
    date: '2025-04-01',
    content:
      '研究をめぐる議論は近年ますます活発になっています。\n本稿では、研究の現状と課題について考察します。\n一方で、辞書を読むことの重要性も指摘されています。\n一方で、留学を聞くことの重要性も指摘されています。\n一方で、留学を考えることの重要性も指摘されています。\n以上の考察から、試験の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: 'examination' },
      { word: '留学', reading: 'りゅうがく', meaning: 'studying abroad' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '辞書', reading: 'じしょ', meaning: 'dictionary' }
    ],
  },
  {
    id: '641',
    title: '語彙力アップ',
    source: '学習エッセイ (N2)',
    date: '2025-03-10',
    content:
      '科目をめぐる議論は近年ますます活発になっています。\n本稿では、科目の現状と課題について考察します。\n一方で、理科を調べることの重要性も指摘されています。\n一方で、社会を調べることの重要性も指摘されています。\n一方で、教科を役立つことの重要性も指摘されています。\n以上の考察から、理科の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '役立つ', reading: 'やくだつ', meaning: 'to be useful' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '科目', reading: 'かもく', meaning: '(school) subject' },
      { word: '理科', reading: 'りか', meaning: 'science (natural sciences and related fields, incl. mathematics, engineering, medicine, etc.)' }
    ],
  },
  {
    id: '642',
    title: '発音練習',
    source: '教育読解 (N2)',
    date: '2025-04-02',
    content:
      '図書館をめぐる議論は近年ますます活発になっています。\n本稿では、図書館の現状と課題について考察します。\n一方で、小学校を教えることの重要性も指摘されています。\n一方で、生徒を教えることの重要性も指摘されています。\n一方で、図書館を教えることの重要性も指摘されています。\n以上の考察から、教師の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '小学校', reading: 'しょうがっこう', meaning: 'primary school' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '教師', reading: 'きょうし', meaning: 'teacher' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '生徒', reading: 'せいと', meaning: 'pupil' }
    ],
  },
  {
    id: '643',
    title: '読解のポイント',
    source: '教育読解 (N2)',
    date: '2025-07-04',
    content:
      '学校をめぐる議論は近年ますます活発になっています。\n本稿では、学校の現状と課題について考察します。\n一方で、授業を覚えることの重要性も指摘されています。\n一方で、教授を覚えることの重要性も指摘されています。\n一方で、教育を覚えることの重要性も指摘されています。\n以上の考察から、大学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大学', reading: 'だいがく', meaning: 'university' },
      { word: '授業', reading: 'じゅぎょう', meaning: 'lesson' },
      { word: '学校', reading: 'がっこう', meaning: 'school' },
      { word: '教育', reading: 'きょういく', meaning: 'education' },
      { word: '教授', reading: 'きょうじゅ', meaning: 'professor' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' }
    ],
  },
  {
    id: '644',
    title: '日記を書く',
    source: '教育読解 (N2)',
    date: '2025-10-24',
    content:
      '単語をめぐる議論は近年ますます活発になっています。\n本稿では、単語の現状と課題について考察します。\n一方で、学生を言語ことの重要性も指摘されています。\n一方で、学生を数学ことの重要性も指摘されています。\n一方で、テストを図書館ことの重要性も指摘されています。\n以上の考察から、学習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '言語', reading: 'げんご', meaning: 'language' },
      { word: '学生', reading: 'がくせい', meaning: 'student (esp. a university student)' },
      { word: '数学', reading: 'すうがく', meaning: 'mathematics' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: 'テスト', reading: 'テスト', meaning: 'test (of ability, knowledge, etc.)' },
      { word: '単語', reading: 'たんご', meaning: 'word' }
    ],
  },
  {
    id: '645',
    title: '言語交換',
    source: '学習エッセイ (N2)',
    date: '2025-07-11',
    content:
      '高校をめぐる議論は近年ますます活発になっています。\n本稿では、高校の現状と課題について考察します。\n一方で、英語を教えることの重要性も指摘されています。\n一方で、教科を聞くことの重要性も指摘されています。\n一方で、漢字を教えることの重要性も指摘されています。\n以上の考察から、英語の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: 'subject' },
      { word: '教える', reading: 'おしえる', meaning: 'to teach' },
      { word: '英語', reading: 'えいご', meaning: 'English (language)' },
      { word: '漢字', reading: 'かんじ', meaning: 'kanji' },
      { word: '高校', reading: 'こうこう', meaning: 'senior high school' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' }
    ],
  },
  {
    id: '646',
    title: '京都旅行',
    source: '観光エッセイ (N4)',
    date: '2025-04-13',
    content:
      '橋について考えてみましょう。\n橋は日常生活の中で大切な役割を果たしています。\n例えば、距離を飛ぶことがあります。\n例えば、地図を飛ぶことがあります。\n例えば、フェリーを飛ぶことがあります。\nこのように、橋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' }
    ],
  },
  {
    id: '647',
    title: '東京観光',
    source: '観光エッセイ (N4)',
    date: '2025-06-25',
    content:
      '乗り物について考えてみましょう。\n乗り物は日常生活の中で大切な役割を果たしています。\n例えば、地図を歩くことがあります。\n例えば、自動車を歩くことがあります。\n例えば、スーツケースを着くことがあります。\nこのように、地下鉄は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '乗り物', reading: 'のりもの', meaning: 'vehicle' },
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '着く', reading: 'つく', meaning: 'to arrive at' }
    ],
  },
  {
    id: '648',
    title: '北海道の旅',
    source: '観光エッセイ (N4)',
    date: '2025-08-01',
    content:
      '改札について考えてみましょう。\n改札は日常生活の中で大切な役割を果たしています。\n例えば、安全を間に合うことがあります。\n例えば、運転手を曲がることがあります。\n例えば、帰りを間に合うことがあります。\nこのように、帰りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'driver' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '改札', reading: 'かいさつ', meaning: 'examination of tickets' }
    ],
  },
  {
    id: '649',
    title: '沖縄の海',
    source: '観光エッセイ (N4)',
    date: '2025-08-14',
    content:
      '帰りについて考えてみましょう。\n帰りは日常生活の中で大切な役割を果たしています。\n例えば、危険を渡ることがあります。\n例えば、危険を無くすことがあります。\n例えば、駅を着くことがあります。\nこのように、乗客は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '乗客', reading: 'じょうきゃく', meaning: 'passenger' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '危険', reading: 'きけん', meaning: 'danger' }
    ],
  },
  {
    id: '650',
    title: '富士山登山',
    source: '旅行読解 (N4)',
    date: '2025-05-22',
    content:
      '荷物について考えてみましょう。\n荷物は日常生活の中で大切な役割を果たしています。\n例えば、運転士を歩くことがあります。\n例えば、乗り物を歩くことがあります。\n例えば、路線を通ることがあります。\nこのように、運賃は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '乗り物', reading: 'のりもの', meaning: 'vehicle' }
    ],
  },
  {
    id: '651',
    title: '日本の温泉',
    source: '観光エッセイ (N4)',
    date: '2025-06-17',
    content:
      '駅について考えてみましょう。\n駅は日常生活の中で大切な役割を果たしています。\n例えば、路線を間に合うことがあります。\n例えば、方面を間に合うことがあります。\n例えば、自動車を遅れることがあります。\nこのように、停留所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '方面', reading: 'ほうめん', meaning: 'direction' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' }
    ],
  },
  {
    id: '652',
    title: '電車の旅',
    source: '観光エッセイ (N4)',
    date: '2025-03-14',
    content:
      '車について考えてみましょう。\n車は日常生活の中で大切な役割を果たしています。\n例えば、速度を止まることがあります。\n例えば、出口を行くことがあります。\n例えば、道路を出ることがあります。\nこのように、乗車券は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出口', reading: 'でぐち', meaning: 'exit' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: 'ticket (for bus, train, etc.)' },
      { word: '道路', reading: 'どうろ', meaning: 'road' }
    ],
  },
  {
    id: '653',
    title: '自転車旅行',
    source: '観光エッセイ (N4)',
    date: '2025-11-12',
    content:
      '運賃について考えてみましょう。\n運賃は日常生活の中で大切な役割を果たしています。\n例えば、電車を乗ることがあります。\n例えば、切符を乗ることがあります。\n例えば、交通を忘れることがあります。\nこのように、電車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: '交通', reading: 'こうつう', meaning: 'traffic' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: '乗る', reading: 'のる', meaning: 'to get on (train, plane, bus, ship, etc.)' }
    ],
  },
  {
    id: '654',
    title: '空港の一日',
    source: '旅行読解 (N4)',
    date: '2025-07-20',
    content:
      '速度について考えてみましょう。\n速度は日常生活の中で大切な役割を果たしています。\n例えば、切符を歩くことがあります。\n例えば、空港を間に合うことがあります。\n例えば、速度を通ることがあります。\nこのように、乗車券は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: 'ticket (for bus, train, etc.)' },
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: '空港', reading: 'くうこう', meaning: 'airport' }
    ],
  },
  {
    id: '655',
    title: '世界遺産巡り',
    source: '旅行読解 (N4)',
    date: '2025-07-12',
    content:
      '車掌について考えてみましょう。\n車掌は日常生活の中で大切な役割を果たしています。\n例えば、乗客を車掌ことがあります。\n例えば、移動を車掌ことがあります。\n例えば、駅を駅ことがあります。\nこのように、時刻表は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '時刻表', reading: 'じこくひょう', meaning: 'timetable' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '乗客', reading: 'じょうきゃく', meaning: 'passenger' },
      { word: '車掌', reading: 'しゃしょう', meaning: '(train) conductor' },
      { word: '移動', reading: 'いどう', meaning: 'movement' }
    ],
  },
  {
    id: '656',
    title: '一人旅の魅力',
    source: '旅行読解 (N4)',
    date: '2025-12-27',
    content:
      '方面について考えてみましょう。\n方面は日常生活の中で大切な役割を果たしています。\n例えば、タクシーを乗ることがあります。\n例えば、車掌を曲がることがあります。\n例えば、車掌を降りることがあります。\nこのように、ホームは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗る', reading: 'のる', meaning: 'to get on (train, plane, bus, ship, etc.)' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '降りる', reading: 'おりる', meaning: 'to descend (e.g. a mountain)' },
      { word: '車掌', reading: 'しゃしょう', meaning: '(train) conductor' },
      { word: 'タクシー', reading: 'タクシー', meaning: 'taxi' },
      { word: 'ホーム', reading: 'ホーム', meaning: 'platform' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' }
    ],
  },
  {
    id: '657',
    title: '家族旅行',
    source: '観光エッセイ (N4)',
    date: '2025-06-24',
    content:
      '交通について考えてみましょう。\n交通は日常生活の中で大切な役割を果たしています。\n例えば、交通を遅れることがあります。\n例えば、交通を来ることがあります。\n例えば、地下鉄を急ぐことがあります。\nこのように、交通は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '交通', reading: 'こうつう', meaning: 'traffic' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' }
    ],
  },
  {
    id: '658',
    title: 'バスツアー',
    source: '旅行読解 (N4)',
    date: '2025-11-11',
    content:
      '距離について考えてみましょう。\n距離は日常生活の中で大切な役割を果たしています。\n例えば、帰りを帰ることがあります。\n例えば、電車を降りることがあります。\n例えば、電車を出ることがあります。\nこのように、速度は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '降りる', reading: 'おりる', meaning: 'to descend (e.g. a mountain)' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '車', reading: 'くるま', meaning: 'car' }
    ],
  },
  {
    id: '659',
    title: '新幹線の旅',
    source: '観光エッセイ (N4)',
    date: '2025-07-02',
    content:
      '安全について考えてみましょう。\n安全は日常生活の中で大切な役割を果たしています。\n例えば、橋を飛ぶことがあります。\n例えば、停留所を見つけることがあります。\n例えば、空港を急ぐことがあります。\nこのように、フェリーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '空港', reading: 'くうこう', meaning: 'airport' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '見つける', reading: 'みつける', meaning: 'to find' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '橋', reading: 'はし', meaning: 'bridge' }
    ],
  },
  {
    id: '660',
    title: '夜景の名所',
    source: '観光エッセイ (N4)',
    date: '2025-05-12',
    content:
      '路線について考えてみましょう。\n路線は日常生活の中で大切な役割を果たしています。\n例えば、自動車を距離ことがあります。\n例えば、方向を帰りことがあります。\n例えば、路線を停留所ことがあります。\nこのように、バスは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '方向', reading: 'ほうこう', meaning: 'direction' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: 'バス', reading: 'バス', meaning: 'bus' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' }
    ],
  },
  {
    id: '661',
    title: '地図の読み方',
    source: '観光エッセイ (N4)',
    date: '2025-04-13',
    content:
      '速度について考えてみましょう。\n速度は日常生活の中で大切な役割を果たしています。\n例えば、フェリーを来ることがあります。\n例えば、方面を急ぐことがあります。\n例えば、スーツケースを降りることがあります。\nこのように、安全は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '降りる', reading: 'おりる', meaning: 'to descend (e.g. a mountain)' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' }
    ],
  },
  {
    id: '662',
    title: '旅の準備',
    source: '旅行読解 (N4)',
    date: '2025-11-10',
    content:
      '交差点について考えてみましょう。\n交差点は日常生活の中で大切な役割を果たしています。\n例えば、自転車を止まることがあります。\n例えば、自転車を飛ぶことがあります。\n例えば、自転車を止まることがあります。\nこのように、交差点は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' }
    ],
  },
  {
    id: '663',
    title: '海外旅行記',
    source: '旅行読解 (N4)',
    date: '2025-11-12',
    content:
      '危険について考えてみましょう。\n危険は日常生活の中で大切な役割を果たしています。\n例えば、危険を渡ることがあります。\n例えば、危険を行くことがあります。\n例えば、交差点を渡ることがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' }
    ],
  },
  {
    id: '664',
    title: '日本の駅',
    source: '旅行読解 (N4)',
    date: '2025-02-06',
    content:
      '飛行機について考えてみましょう。\n飛行機は日常生活の中で大切な役割を果たしています。\n例えば、バスを走ることがあります。\n例えば、手荷物を通うことがあります。\n例えば、駅を帰ることがあります。\nこのように、信号は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バス', reading: 'バス', meaning: 'bus' },
      { word: '飛行機', reading: 'ひこうき', meaning: 'airplane' },
      { word: '信号', reading: 'しんごう', meaning: 'signal' },
      { word: '手荷物', reading: 'てにもつ', meaning: 'hand luggage' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '駅', reading: 'えき', meaning: 'railway station' }
    ],
  },
  {
    id: '665',
    title: 'フェリーの旅',
    source: '旅行読解 (N4)',
    date: '2025-07-08',
    content:
      '飛行機について考えてみましょう。\n飛行機は日常生活の中で大切な役割を果たしています。\n例えば、距離を着くことがあります。\n例えば、ホームを着くことがあります。\n例えば、地図を曲がることがあります。\nこのように、スーツケースは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: 'ホーム', reading: 'ホーム', meaning: 'platform' },
      { word: '飛行機', reading: 'ひこうき', meaning: 'airplane' }
    ],
  },
  {
    id: '666',
    title: '鎌倉散策',
    source: '観光エッセイ (N4)',
    date: '2025-09-07',
    content:
      '乗車券について考えてみましょう。\n乗車券は日常生活の中で大切な役割を果たしています。\n例えば、電車を待つことがあります。\n例えば、座席を帰ることがあります。\n例えば、運賃を帰ることがあります。\nこのように、車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '座席', reading: 'ざせき', meaning: 'seat (esp. in public places or places with assigned seating)' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: 'ticket (for bus, train, etc.)' },
      { word: '待つ', reading: 'まつ', meaning: 'to wait' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' }
    ],
  },
  {
    id: '667',
    title: '奈良の大仏',
    source: '旅行読解 (N4)',
    date: '2025-02-26',
    content:
      '交差点について考えてみましょう。\n交差点は日常生活の中で大切な役割を果たしています。\n例えば、方面を帰ることがあります。\n例えば、帰りを無くすことがあります。\n例えば、地下鉄を通ることがあります。\nこのように、帰りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' }
    ],
  },
  {
    id: '668',
    title: '大阪グルメ旅',
    source: '観光エッセイ (N4)',
    date: '2025-04-14',
    content:
      '車について考えてみましょう。\n車は日常生活の中で大切な役割を果たしています。\n例えば、座席を着くことがあります。\n例えば、距離を行くことがあります。\n例えば、車を帰ることがあります。\nこのように、距離は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '座席', reading: 'ざせき', meaning: 'seat (esp. in public places or places with assigned seating)' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '着く', reading: 'つく', meaning: 'to arrive at' }
    ],
  },
  {
    id: '669',
    title: '金沢の庭園',
    source: '旅行読解 (N4)',
    date: '2025-10-23',
    content:
      '帰りについて考えてみましょう。\n帰りは日常生活の中で大切な役割を果たしています。\n例えば、定期券を渡ることがあります。\n例えば、切符を渡ることがあります。\n例えば、時刻表を渡ることがあります。\nこのように、フェリーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '定期券', reading: 'ていきけん', meaning: 'commuter pass' },
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '時刻表', reading: 'じこくひょう', meaning: 'timetable' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' }
    ],
  },
  {
    id: '670',
    title: '長崎の教会',
    source: '観光エッセイ (N4)',
    date: '2025-04-03',
    content:
      'ホームについて考えてみましょう。\nホームは日常生活の中で大切な役割を果たしています。\n例えば、運転手を帰ることがあります。\n例えば、地下鉄を走ることがあります。\n例えば、運転士を急ぐことがあります。\nこのように、新幹線は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '運転', reading: 'うんてん', meaning: 'operation (of a machine)' },
      { word: 'ホーム', reading: 'ホーム', meaning: 'platform' },
      { word: '新幹線', reading: 'しんかんせん', meaning: 'Shinkansen' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'driver' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' }
    ],
  },
  {
    id: '671',
    title: '日光東照宮',
    source: '旅行読解 (N4)',
    date: '2025-09-24',
    content:
      '手荷物について考えてみましょう。\n手荷物は日常生活の中で大切な役割を果たしています。\n例えば、帰りを歩くことがあります。\n例えば、荷物を歩くことがあります。\n例えば、停留所を歩くことがあります。\nこのように、道路は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '手荷物', reading: 'てにもつ', meaning: 'hand luggage' },
      { word: '道路', reading: 'どうろ', meaning: 'road' },
      { word: '帰り', reading: 'かえり', meaning: 'return' }
    ],
  },
  {
    id: '672',
    title: '白川郷',
    source: '観光エッセイ (N4)',
    date: '2025-12-12',
    content:
      'バイクについて考えてみましょう。\nバイクは日常生活の中で大切な役割を果たしています。\n例えば、地下鉄を忘れることがあります。\n例えば、フェリーを止まることがあります。\n例えば、方向を出ることがあります。\nこのように、バイクは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バイク', reading: 'バイク', meaning: 'motorcycle' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '方向', reading: 'ほうこう', meaning: 'direction' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' }
    ],
  },
  {
    id: '673',
    title: '厳島神社',
    source: '観光エッセイ (N4)',
    date: '2025-09-03',
    content:
      '座席について考えてみましょう。\n座席は日常生活の中で大切な役割を果たしています。\n例えば、座席を通うことがあります。\n例えば、運転士を通うことがあります。\n例えば、運転士を走ることがあります。\nこのように、地図は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '座席', reading: 'ざせき', meaning: 'seat (esp. in public places or places with assigned seating)' }
    ],
  },
  {
    id: '674',
    title: '熊本城',
    source: '旅行読解 (N4)',
    date: '2025-03-15',
    content:
      '事故について考えてみましょう。\n事故は日常生活の中で大切な役割を果たしています。\n例えば、飛行機を急ぐことがあります。\n例えば、スーツケースを無くすことがあります。\n例えば、自転車を無くすことがあります。\nこのように、地下鉄は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '事故', reading: 'じこ', meaning: 'accident' },
      { word: '飛行機', reading: 'ひこうき', meaning: 'airplane' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' }
    ],
  },
  {
    id: '675',
    title: '姫路城',
    source: '旅行読解 (N4)',
    date: '2025-02-19',
    content:
      '安全について考えてみましょう。\n安全は日常生活の中で大切な役割を果たしています。\n例えば、自動車を行くことがあります。\n例えば、橋を行くことがあります。\n例えば、路線を遅れることがあります。\nこのように、橋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' }
    ],
  },
  {
    id: '676',
    title: '京都旅行',
    source: '旅行読解 (N3)',
    date: '2025-08-21',
    content:
      '駅について深く掘り下げて考えてみたいと思います。\n現代社会において、駅は重要なテーマとなっています。\n特にフェリーを渡る過程で、さまざまな発見がありました。\n特に出口を渡る過程で、さまざまな発見がありました。\n特に案内を渡る過程で、さまざまな発見がありました。\n駅についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '出口', reading: 'でぐち', meaning: 'exit' }
    ],
  },
  {
    id: '677',
    title: '東京観光',
    source: '観光エッセイ (N3)',
    date: '2025-01-14',
    content:
      '運転手について深く掘り下げて考えてみたいと思います。\n現代社会において、運転手は重要なテーマとなっています。\n特に危険を待つ過程で、さまざまな発見がありました。\n特に不快を待つ過程で、さまざまな発見がありました。\n特に距離を無くす過程で、さまざまな発見がありました。\n不快についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'driver' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '待つ', reading: 'まつ', meaning: 'to wait' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' }
    ],
  },
  {
    id: '678',
    title: '北海道の旅',
    source: '観光エッセイ (N3)',
    date: '2025-04-06',
    content:
      '電車について深く掘り下げて考えてみたいと思います。\n現代社会において、電車は重要なテーマとなっています。\n特に不快を通る過程で、さまざまな発見がありました。\n特に路線を乗る過程で、さまざまな発見がありました。\n特に運転を通る過程で、さまざまな発見がありました。\n料金についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '乗る', reading: 'のる', meaning: 'to get on (train, plane, bus, ship, etc.)' },
      { word: '運転', reading: 'うんてん', meaning: 'operation (of a machine)' },
      { word: '料金', reading: 'りょうきん', meaning: 'fee' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' }
    ],
  },
  {
    id: '679',
    title: '沖縄の海',
    source: '旅行読解 (N3)',
    date: '2025-02-04',
    content:
      '地下鉄について深く掘り下げて考えてみたいと思います。\n現代社会において、地下鉄は重要なテーマとなっています。\n特に地下鉄を走る過程で、さまざまな発見がありました。\n特に方面を行く過程で、さまざまな発見がありました。\n特にタクシーを遅れる過程で、さまざまな発見がありました。\n地下鉄についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' },
      { word: 'タクシー', reading: 'タクシー', meaning: 'taxi' },
      { word: '行く', reading: 'いく', meaning: 'to go' }
    ],
  },
  {
    id: '680',
    title: '富士山登山',
    source: '観光エッセイ (N3)',
    date: '2025-02-26',
    content:
      '座席について深く掘り下げて考えてみたいと思います。\n現代社会において、座席は重要なテーマとなっています。\n特に定期券を近い過程で、さまざまな発見がありました。\n特にタクシーを時刻表過程で、さまざまな発見がありました。\n特にフェリーを定期券過程で、さまざまな発見がありました。\n自転車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近い', reading: 'ちかい', meaning: 'near' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '時刻表', reading: 'じこくひょう', meaning: 'timetable' },
      { word: '定期券', reading: 'ていきけん', meaning: 'commuter pass' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' },
      { word: 'タクシー', reading: 'タクシー', meaning: 'taxi' },
      { word: '座席', reading: 'ざせき', meaning: 'seat (esp. in public places or places with assigned seating)' }
    ],
  },
  {
    id: '681',
    title: '日本の温泉',
    source: '旅行読解 (N3)',
    date: '2025-03-14',
    content:
      '道路について深く掘り下げて考えてみたいと思います。\n現代社会において、道路は重要なテーマとなっています。\n特に空港を降りる過程で、さまざまな発見がありました。\n特に道路を通う過程で、さまざまな発見がありました。\n特に車を間に合う過程で、さまざまな発見がありました。\n案内についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '降りる', reading: 'おりる', meaning: 'to descend (e.g. a mountain)' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '道路', reading: 'どうろ', meaning: 'road' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' },
      { word: '空港', reading: 'くうこう', meaning: 'airport' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' }
    ],
  },
  {
    id: '682',
    title: '電車の旅',
    source: '観光エッセイ (N3)',
    date: '2025-11-12',
    content:
      '港について深く掘り下げて考えてみたいと思います。\n現代社会において、港は重要なテーマとなっています。\n特に不快を帰る過程で、さまざまな発見がありました。\n特に自動車を通う過程で、さまざまな発見がありました。\n特に橋を通う過程で、さまざまな発見がありました。\n自動車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '港', reading: 'みなと', meaning: 'harbour' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' }
    ],
  },
  {
    id: '683',
    title: '自転車旅行',
    source: '観光エッセイ (N3)',
    date: '2025-11-17',
    content:
      '停留所について深く掘り下げて考えてみたいと思います。\n現代社会において、停留所は重要なテーマとなっています。\n特に混雑を歩く過程で、さまざまな発見がありました。\n特に車を飛ぶ過程で、さまざまな発見がありました。\n特に不快を飛ぶ過程で、さまざまな発見がありました。\n荷物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'stop (bus, tram, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、stop (bus, tram, etc.)は重要なテーマとなっています。\n特に混雑を歩く過程で、さまざまな発見がありました。\n特にcarを飛ぶ過程で、さまざまな発見がありました。\n特に不快を飛ぶ過程で、さまざまな発見がありました。\nluggageについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '混雑', reading: 'こんざつ', meaning: 'congestion' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' }
    ],
  },
  {
    id: '684',
    title: '空港の一日',
    source: '旅行読解 (N3)',
    date: '2025-03-03',
    content:
      '荷物について深く掘り下げて考えてみたいと思います。\n現代社会において、荷物は重要なテーマとなっています。\n特に荷物を間に合う過程で、さまざまな発見がありました。\n特に定期券を間に合う過程で、さまざまな発見がありました。\n特に移動を間に合う過程で、さまざまな発見がありました。\n運転士についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '移動', reading: 'いどう', meaning: 'movement' },
      { word: '運転', reading: 'うんてん', meaning: 'operation (of a machine)' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '定期券', reading: 'ていきけん', meaning: 'commuter pass' }
    ],
  },
  {
    id: '685',
    title: '世界遺産巡り',
    source: '観光エッセイ (N3)',
    date: '2025-11-04',
    content:
      '運転士について深く掘り下げて考えてみたいと思います。\n現代社会において、運転士は重要なテーマとなっています。\n特に自転車を来る過程で、さまざまな発見がありました。\n特に運転士を飛ぶ過程で、さまざまな発見がありました。\n特にフェリーを来る過程で、さまざまな発見がありました。\n道路についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '(professional) driver (of a taxi, train, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、(professional) driver (of a taxi, train, etc.)は重要なテーマとなっています。\n特にbicycleを来る過程で、さまざまな発見がありました。\n特に(professional) driver (of a taxi, train, etc.)を飛ぶ過程で、さまざまな発見がありました。\n特にferryを来る過程で、さまざまな発見がありました。\nroadについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' },
      { word: '道路', reading: 'どうろ', meaning: 'road' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' }
    ],
  },
  {
    id: '686',
    title: '一人旅の魅力',
    source: '旅行読解 (N3)',
    date: '2025-07-24',
    content:
      '混雑について深く掘り下げて考えてみたいと思います。\n現代社会において、混雑は重要なテーマとなっています。\n特に運転を止まる過程で、さまざまな発見がありました。\n特に運転を見つける過程で、さまざまな発見がありました。\n特に新幹線を曲がる過程で、さまざまな発見がありました。\n事故についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転', reading: 'うんてん', meaning: 'operation (of a machine)' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '見つける', reading: 'みつける', meaning: 'to find' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '混雑', reading: 'こんざつ', meaning: 'congestion' },
      { word: '新幹線', reading: 'しんかんせん', meaning: 'Shinkansen' },
      { word: '事故', reading: 'じこ', meaning: 'accident' }
    ],
  },
  {
    id: '687',
    title: '家族旅行',
    source: '観光エッセイ (N3)',
    date: '2025-05-14',
    content:
      'タクシーについて深く掘り下げて考えてみたいと思います。\n現代社会において、タクシーは重要なテーマとなっています。\n特に停留所を乗り物過程で、さまざまな発見がありました。\n特に切符を自転車過程で、さまざまな発見がありました。\n特にホームを手荷物過程で、さまざまな発見がありました。\nホームについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗り物', reading: 'のりもの', meaning: 'vehicle' },
      { word: 'タクシー', reading: 'タクシー', meaning: 'taxi' },
      { word: '手荷物', reading: 'てにもつ', meaning: 'hand luggage' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: 'ホーム', reading: 'ホーム', meaning: 'platform' },
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' }
    ],
  },
  {
    id: '688',
    title: 'バスツアー',
    source: '旅行読解 (N3)',
    date: '2025-11-11',
    content:
      '移動について深く掘り下げて考えてみたいと思います。\n現代社会において、移動は重要なテーマとなっています。\n特に切符を止まる過程で、さまざまな発見がありました。\n特に行きを急ぐ過程で、さまざまな発見がありました。\n特に運転士を急ぐ過程で、さまざまな発見がありました。\n安全についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: '行き', reading: 'いき', meaning: 'the way there' },
      { word: '移動', reading: 'いどう', meaning: 'movement' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' }
    ],
  },
  {
    id: '689',
    title: '新幹線の旅',
    source: '旅行読解 (N3)',
    date: '2025-01-17',
    content:
      '船について深く掘り下げて考えてみたいと思います。\n現代社会において、船は重要なテーマとなっています。\n特に船を無くす過程で、さまざまな発見がありました。\n特に運賃を止まる過程で、さまざまな発見がありました。\n特に交差点を着く過程で、さまざまな発見がありました。\n不快についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '止まる', reading: 'とまる', meaning: 'to stop (moving)' },
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: '船', reading: 'ふね', meaning: 'ship' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' }
    ],
  },
  {
    id: '690',
    title: '夜景の名所',
    source: '観光エッセイ (N3)',
    date: '2025-04-03',
    content:
      '乗客について深く掘り下げて考えてみたいと思います。\n現代社会において、乗客は重要なテーマとなっています。\n特に切符を行く過程で、さまざまな発見がありました。\n特に橋を走る過程で、さまざまな発見がありました。\n特に不快を行く過程で、さまざまな発見がありました。\n運転についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '切符', reading: 'きっぷ', meaning: 'ticket' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '乗客', reading: 'じょうきゃく', meaning: 'passenger' },
      { word: '運転', reading: 'うんてん', meaning: 'operation (of a machine)' }
    ],
  },
  {
    id: '691',
    title: '地図の読み方',
    source: '観光エッセイ (N3)',
    date: '2025-04-15',
    content:
      '方向について深く掘り下げて考えてみたいと思います。\n現代社会において、方向は重要なテーマとなっています。\n特に方向を曲がる過程で、さまざまな発見がありました。\n特に案内を無くす過程で、さまざまな発見がありました。\n特に座席を走る過程で、さまざまな発見がありました。\n不便についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '方向', reading: 'ほうこう', meaning: 'direction' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '座席', reading: 'ざせき', meaning: 'seat (esp. in public places or places with assigned seating)' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' }
    ],
  },
  {
    id: '692',
    title: '旅の準備',
    source: '旅行読解 (N3)',
    date: '2025-05-12',
    content:
      'バイクについて深く掘り下げて考えてみたいと思います。\n現代社会において、バイクは重要なテーマとなっています。\n特に運賃を来る過程で、さまざまな発見がありました。\n特に乗り物を間に合う過程で、さまざまな発見がありました。\n特に飛行機を来る過程で、さまざまな発見がありました。\n移動についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '飛行機', reading: 'ひこうき', meaning: 'airplane' },
      { word: '乗り物', reading: 'のりもの', meaning: 'vehicle' },
      { word: '移動', reading: 'いどう', meaning: 'movement' },
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: 'バイク', reading: 'バイク', meaning: 'motorcycle' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' }
    ],
  },
  {
    id: '693',
    title: '海外旅行記',
    source: '旅行読解 (N3)',
    date: '2025-06-08',
    content:
      '不便について深く掘り下げて考えてみたいと思います。\n現代社会において、不便は重要なテーマとなっています。\n特に不便を走る過程で、さまざまな発見がありました。\n特に地図を急ぐ過程で、さまざまな発見がありました。\n特に安全を歩く過程で、さまざまな発見がありました。\n手荷物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: '手荷物', reading: 'てにもつ', meaning: 'hand luggage' }
    ],
  },
  {
    id: '694',
    title: '日本の駅',
    source: '旅行読解 (N3)',
    date: '2025-11-13',
    content:
      'タクシーについて深く掘り下げて考えてみたいと思います。\n現代社会において、タクシーは重要なテーマとなっています。\n特に荷物を通る過程で、さまざまな発見がありました。\n特にフェリーを無くす過程で、さまざまな発見がありました。\n特に地図を無くす過程で、さまざまな発見がありました。\n電車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: 'タクシー', reading: 'タクシー', meaning: 'taxi' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: 'フェリー', reading: 'フェリー', meaning: 'ferry' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '電車', reading: 'でんしゃ', meaning: 'train' }
    ],
  },
  {
    id: '695',
    title: 'フェリーの旅',
    source: '旅行読解 (N3)',
    date: '2025-10-04',
    content:
      '行きについて深く掘り下げて考えてみたいと思います。\n現代社会において、行きは重要なテーマとなっています。\n特に自動車を出る過程で、さまざまな発見がありました。\n特に交差点を出る過程で、さまざまな発見がありました。\n特に行きを出る過程で、さまざまな発見がありました。\n行きについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '行き', reading: 'いき', meaning: 'the way there' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' }
    ],
  },
  {
    id: '696',
    title: '鎌倉散策',
    source: '観光エッセイ (N3)',
    date: '2025-08-14',
    content:
      '自動車について深く掘り下げて考えてみたいと思います。\n現代社会において、自動車は重要なテーマとなっています。\n特に速度を通る過程で、さまざまな発見がありました。\n特に荷物を急ぐ過程で、さまざまな発見がありました。\n特に荷物を遅れる過程で、さまざまな発見がありました。\n案内についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'car' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' }
    ],
  },
  {
    id: '697',
    title: '奈良の大仏',
    source: '旅行読解 (N3)',
    date: '2025-11-23',
    content:
      '運転士について深く掘り下げて考えてみたいと思います。\n現代社会において、運転士は重要なテーマとなっています。\n特に交通を行く過程で、さまざまな発見がありました。\n特に運転士を行く過程で、さまざまな発見がありました。\n特に地下鉄を通る過程で、さまざまな発見がありました。\n料金についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '(professional) driver (of a taxi, train, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、(professional) driver (of a taxi, train, etc.)は重要なテーマとなっています。\n特にtrafficを行く過程で、さまざまな発見がありました。\n特に(professional) driver (of a taxi, train, etc.)を行く過程で、さまざまな発見がありました。\n特にsubwayを通る過程で、さまざまな発見がありました。\nfeeについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '料金', reading: 'りょうきん', meaning: 'fee' },
      { word: '交通', reading: 'こうつう', meaning: 'traffic' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '行く', reading: 'いく', meaning: 'to go' }
    ],
  },
  {
    id: '698',
    title: '大阪グルメ旅',
    source: '観光エッセイ (N3)',
    date: '2025-04-08',
    content:
      '距離について深く掘り下げて考えてみたいと思います。\n現代社会において、距離は重要なテーマとなっています。\n特に交通を忘れる過程で、さまざまな発見がありました。\n特に路線を忘れる過程で、さまざまな発見がありました。\n特に地図を飛ぶ過程で、さまざまな発見がありました。\n帰りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地図', reading: 'ちず', meaning: 'map' },
      { word: '路線', reading: 'ろせん', meaning: 'route (bus, train, air, etc.)' },
      { word: '距離', reading: 'きょり', meaning: 'distance' },
      { word: '交通', reading: 'こうつう', meaning: 'traffic' },
      { word: '帰り', reading: 'かえり', meaning: 'return' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' }
    ],
  },
  {
    id: '699',
    title: '金沢の庭園',
    source: '旅行読解 (N3)',
    date: '2025-06-04',
    content:
      '案内について深く掘り下げて考えてみたいと思います。\n現代社会において、案内は重要なテーマとなっています。\n特に地下鉄を自転車過程で、さまざまな発見がありました。\n特に地下鉄を運賃過程で、さまざまな発見がありました。\n特に地下鉄を移動過程で、さまざまな発見がありました。\n自転車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '運賃', reading: 'うんちん', meaning: '(passenger) fare' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: 'subway' },
      { word: '移動', reading: 'いどう', meaning: 'movement' }
    ],
  },
  {
    id: '700',
    title: '長崎の教会',
    source: '観光エッセイ (N3)',
    date: '2025-01-10',
    content:
      '遅延について深く掘り下げて考えてみたいと思います。\n現代社会において、遅延は重要なテーマとなっています。\n特に電車を通る過程で、さまざまな発見がありました。\n特に改札を通る過程で、さまざまな発見がありました。\n特に交通を通る過程で、さまざまな発見がありました。\nバスについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', meaning: 'train' },
      { word: '車', reading: 'くるま', meaning: 'car' },
      { word: '改札', reading: 'かいさつ', meaning: 'examination of tickets' },
      { word: 'バス', reading: 'バス', meaning: 'bus' },
      { word: '交通', reading: 'こうつう', meaning: 'traffic' },
      { word: '遅延', reading: 'ちえん', meaning: 'delay' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' }
    ],
  },
  {
    id: '701',
    title: '日光東照宮',
    source: '観光エッセイ (N3)',
    date: '2025-08-11',
    content:
      'スーツケースについて深く掘り下げて考えてみたいと思います。\n現代社会において、スーツケースは重要なテーマとなっています。\n特に手荷物を通う過程で、さまざまな発見がありました。\n特に自転車を通う過程で、さまざまな発見がありました。\n特に運転士を通う過程で、さまざまな発見がありました。\n運転手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: '手荷物', reading: 'てにもつ', meaning: 'hand luggage' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'driver' },
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' },
      { word: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' }
    ],
  },
  {
    id: '702',
    title: '白川郷',
    source: '旅行読解 (N3)',
    date: '2025-04-19',
    content:
      '速度について深く掘り下げて考えてみたいと思います。\n現代社会において、速度は重要なテーマとなっています。\n特に遅延を降りる過程で、さまざまな発見がありました。\n特に事故を着く過程で、さまざまな発見がありました。\n特に距離を出る過程で、さまざまな発見がありました。\n遅延についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '遅延', reading: 'ちえん', meaning: 'delay' },
      { word: '事故', reading: 'じこ', meaning: 'accident' },
      { word: '出る', reading: 'でる', meaning: 'to leave' },
      { word: '速度', reading: 'そくど', meaning: 'speed' },
      { word: '降りる', reading: 'おりる', meaning: 'to descend (e.g. a mountain)' },
      { word: '距離', reading: 'きょり', meaning: 'distance' }
    ],
  },
  {
    id: '703',
    title: '厳島神社',
    source: '観光エッセイ (N3)',
    date: '2025-01-26',
    content:
      '改札について深く掘り下げて考えてみたいと思います。\n現代社会において、改札は重要なテーマとなっています。\n特に運転手を遅れる過程で、さまざまな発見がありました。\n特に橋を遅れる過程で、さまざまな発見がありました。\n特に停留所を遅れる過程で、さまざまな発見がありました。\n時刻表についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: 'driver' },
      { word: '時刻表', reading: 'じこくひょう', meaning: 'timetable' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: 'stop (bus, tram, etc.)' },
      { word: '改札', reading: 'かいさつ', meaning: 'examination of tickets' }
    ],
  },
  {
    id: '704',
    title: '熊本城',
    source: '観光エッセイ (N3)',
    date: '2025-08-07',
    content:
      'スーツケースについて深く掘り下げて考えてみたいと思います。\n現代社会において、スーツケースは重要なテーマとなっています。\n特に定期券を遅れる過程で、さまざまな発見がありました。\n特に安全を歩く過程で、さまざまな発見がありました。\n特に移動を遅れる過程で、さまざまな発見がありました。\n荷物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '荷物', reading: 'にもつ', meaning: 'luggage' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' },
      { word: '移動', reading: 'いどう', meaning: 'movement' },
      { word: '遅れる', reading: 'おくれる', meaning: 'to be late' },
      { word: '定期券', reading: 'ていきけん', meaning: 'commuter pass' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: 'suitcase' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' }
    ],
  },
  {
    id: '705',
    title: '姫路城',
    source: '旅行読解 (N3)',
    date: '2025-05-05',
    content:
      '乗客について深く掘り下げて考えてみたいと思います。\n現代社会において、乗客は重要なテーマとなっています。\n特に安全を見つける過程で、さまざまな発見がありました。\n特に危険を見つける過程で、さまざまな発見がありました。\n特に料金を来る過程で、さまざまな発見がありました。\n料金についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗客', reading: 'じょうきゃく', meaning: 'passenger' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '安全', reading: 'あんぜん', meaning: 'safety' },
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '料金', reading: 'りょうきん', meaning: 'fee' },
      { word: '見つける', reading: 'みつける', meaning: 'to find' }
    ],
  },
  {
    id: '706',
    title: 'オリンピック',
    source: '運動エッセイ (N4)',
    date: '2025-08-24',
    content:
      'ラグビーについて考えてみましょう。\nラグビーは日常生活の中で大切な役割を果たしています。\n例えば、アメフトを蹴ることがあります。\n例えば、体育館を滑ることがあります。\n例えば、体育館を蹴ることがあります。\nこのように、技術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '体育館', reading: 'たいいくかん', meaning: 'gymnasium' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' }
    ],
  },
  {
    id: '707',
    title: '野球の魅力',
    source: '運動エッセイ (N4)',
    date: '2025-12-18',
    content:
      '応援について考えてみましょう。\n応援は日常生活の中で大切な役割を果たしています。\n例えば、戦略を戦略ことがあります。\n例えば、応援を卓球ことがあります。\n例えば、クリケットを監督ことがあります。\nこのように、陸上は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '応援', reading: 'おうえん', meaning: 'aid' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' },
      { word: '監督', reading: 'かんとく', meaning: 'supervision' }
    ],
  },
  {
    id: '708',
    title: 'サッカー日本代表',
    source: 'スポーツ読解 (N4)',
    date: '2025-11-18',
    content:
      'スノーボードについて考えてみましょう。\nスノーボードは日常生活の中で大切な役割を果たしています。\n例えば、勝利を負けることがあります。\n例えば、バドミントンを戦うことがあります。\n例えば、戦略を蹴ることがあります。\nこのように、戦略は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: 'スノーボード', reading: 'スノーボード', meaning: 'snowboard' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: 'badminton' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' },
      { word: '勝利', reading: 'しょうり', meaning: 'victory' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' }
    ],
  },
  {
    id: '709',
    title: '相撲の伝統',
    source: '運動エッセイ (N4)',
    date: '2025-10-18',
    content:
      'スキーについて考えてみましょう。\nスキーは日常生活の中で大切な役割を果たしています。\n例えば、守備を滑ることがあります。\n例えば、コーチを滑ることがあります。\n例えば、チケットを滑ることがあります。\nこのように、守備は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: 'チケット', reading: 'チケット', meaning: 'ticket' },
      { word: 'スキー', reading: 'スキー', meaning: 'skiing' },
      { word: 'コーチ', reading: 'コーチ', meaning: 'coach' }
    ],
  },
  {
    id: '710',
    title: '武道の精神',
    source: 'スポーツ読解 (N4)',
    date: '2025-09-27',
    content:
      '優勝について考えてみましょう。\n優勝は日常生活の中で大切な役割を果たしています。\n例えば、卓球を諦めることがあります。\n例えば、弓道を諦めることがあります。\n例えば、優勝を諦めることがあります。\nこのように、ラグビーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '優勝', reading: 'ゆうしょう', meaning: 'overall victory' },
      { word: '弓道', reading: 'きゅうどう', meaning: 'kyūdō' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' }
    ],
  },
  {
    id: '711',
    title: 'マラソン挑戦',
    source: 'スポーツ読解 (N4)',
    date: '2025-02-02',
    content:
      '運動について考えてみましょう。\n運動は日常生活の中で大切な役割を果たしています。\n例えば、記録を滑ることがあります。\n例えば、敗北を滑ることがあります。\n例えば、ボクシングを蹴ることがあります。\nこのように、アメフトは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敗北', reading: 'はいぼく', meaning: 'defeat' },
      { word: '記録', reading: 'きろく', meaning: 'record' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: 'boxing' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' }
    ],
  },
  {
    id: '712',
    title: '水泳の効果',
    source: 'スポーツ読解 (N4)',
    date: '2025-11-04',
    content:
      '柔道について考えてみましょう。\n柔道は日常生活の中で大切な役割を果たしています。\n例えば、会場を頑張ることがあります。\n例えば、勝利を負けることがあります。\n例えば、相撲を頑張ることがあります。\nこのように、攻撃は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会場', reading: 'かいじょう', meaning: 'assembly hall' },
      { word: '攻撃', reading: 'こうげき', meaning: 'attack' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '柔道', reading: 'じゅうどう', meaning: 'judo' },
      { word: '相撲', reading: 'すもう', meaning: 'sumo (wrestling)' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '勝利', reading: 'しょうり', meaning: 'victory' }
    ],
  },
  {
    id: '713',
    title: 'スキーの楽しみ',
    source: '運動エッセイ (N4)',
    date: '2025-10-17',
    content:
      'リンクについて考えてみましょう。\nリンクは日常生活の中で大切な役割を果たしています。\n例えば、プールを負けることがあります。\n例えば、得点を負けることがあります。\n例えば、監督を打つことがあります。\nこのように、アメフトは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '得点', reading: 'とくてん', meaning: 'scoring' },
      { word: '監督', reading: 'かんとく', meaning: 'supervision' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: 'プール', reading: 'プール', meaning: '(swimming) pool' }
    ],
  },
  {
    id: '714',
    title: '剣道の稽古',
    source: 'スポーツ読解 (N4)',
    date: '2025-01-25',
    content:
      'レスリングについて考えてみましょう。\nレスリングは日常生活の中で大切な役割を果たしています。\n例えば、プールを諦めることがあります。\n例えば、運動を滑ることがあります。\n例えば、運動を諦めることがあります。\nこのように、負けは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: 'レスリング', reading: 'レスリング', meaning: 'wrestling' },
      { word: 'プール', reading: 'プール', meaning: '(swimming) pool' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '負け', reading: 'まけ', meaning: 'defeat' }
    ],
  },
  {
    id: '715',
    title: '柔道の技',
    source: 'スポーツ読解 (N4)',
    date: '2025-07-17',
    content:
      'バレーボールについて考えてみましょう。\nバレーボールは日常生活の中で大切な役割を果たしています。\n例えば、ルールを鍛えることがあります。\n例えば、相撲を頑張ることがあります。\n例えば、球場を負けることがあります。\nこのように、野球は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: 'ルール', reading: 'ルール', meaning: 'rule' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '球場', reading: 'きゅうじょう', meaning: 'baseball stadium' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: '相撲', reading: 'すもう', meaning: 'sumo (wrestling)' }
    ],
  },
  {
    id: '716',
    title: 'テニスの上達',
    source: 'スポーツ読解 (N4)',
    date: '2025-03-27',
    content:
      '体力について考えてみましょう。\n体力は日常生活の中で大切な役割を果たしています。\n例えば、競技を頑張ることがあります。\n例えば、競技を頑張ることがあります。\n例えば、根性を頑張ることがあります。\nこのように、野球は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '体力', reading: 'たいりょく', meaning: 'physical strength' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' }
    ],
  },
  {
    id: '717',
    title: 'ゴルフ入門',
    source: 'スポーツ読解 (N4)',
    date: '2025-03-23',
    content:
      'スケートについて考えてみましょう。\nスケートは日常生活の中で大切な役割を果たしています。\n例えば、得点を投げることがあります。\n例えば、ボクシングを走ることがあります。\n例えば、体力を走ることがあります。\nこのように、得点は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '得点', reading: 'とくてん', meaning: 'scoring' },
      { word: 'スケート', reading: 'スケート', meaning: 'skating (esp. ice)' },
      { word: '体力', reading: 'たいりょく', meaning: 'physical strength' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: 'boxing' }
    ],
  },
  {
    id: '718',
    title: 'バスケットボール',
    source: '運動エッセイ (N4)',
    date: '2025-11-02',
    content:
      'プールについて考えてみましょう。\nプールは日常生活の中で大切な役割を果たしています。\n例えば、卓球を走ることがあります。\n例えば、バスケットボールを飛ぶことがあります。\n例えば、テニスを勝つことがあります。\nこのように、ルールは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: 'テニス', reading: 'テニス', meaning: 'tennis' },
      { word: 'プール', reading: 'プール', meaning: '(swimming) pool' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: 'basketball' },
      { word: 'ルール', reading: 'ルール', meaning: 'rule' }
    ],
  },
  {
    id: '719',
    title: '卓球の練習',
    source: 'スポーツ読解 (N4)',
    date: '2025-03-01',
    content:
      '攻撃について考えてみましょう。\n攻撃は日常生活の中で大切な役割を果たしています。\n例えば、コーチを戦うことがあります。\n例えば、コーチを諦めることがあります。\n例えば、審判を鍛えることがあります。\nこのように、マラソンは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' },
      { word: '攻撃', reading: 'こうげき', meaning: 'attack' },
      { word: 'コーチ', reading: 'コーチ', meaning: 'coach' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '審判', reading: 'しんぱん', meaning: 'judgement' },
      { word: 'マラソン', reading: 'マラソン', meaning: 'marathon' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '720',
    title: '体操競技',
    source: 'スポーツ読解 (N4)',
    date: '2025-07-13',
    content:
      'スポーツについて考えてみましょう。\nスポーツは日常生活の中で大切な役割を果たしています。\n例えば、スポーツを頑張ることがあります。\n例えば、観戦を打つことがあります。\n例えば、勝ちを滑ることがあります。\nこのように、スノーボードは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝ち', reading: 'かち', meaning: 'win' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '観戦', reading: 'かんせん', meaning: 'watching a (sports) game' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: 'スノーボード', reading: 'スノーボード', meaning: 'snowboard' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' }
    ],
  },
  {
    id: '721',
    title: 'スポーツ観戦',
    source: '運動エッセイ (N4)',
    date: '2025-04-12',
    content:
      '根性について考えてみましょう。\n根性は日常生活の中で大切な役割を果たしています。\n例えば、チケットを戦略ことがあります。\n例えば、野球を勝負ことがあります。\n例えば、選手を得点ことがあります。\nこのように、戦略は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: '勝負', reading: 'しょうぶ', meaning: 'victory or defeat' },
      { word: '選手', reading: 'せんしゅ', meaning: 'player (of a sport)' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: 'チケット', reading: 'チケット', meaning: 'ticket' },
      { word: '得点', reading: 'とくてん', meaning: 'scoring' }
    ],
  },
  {
    id: '722',
    title: '体力作り',
    source: 'スポーツ読解 (N4)',
    date: '2025-06-15',
    content:
      '野球について考えてみましょう。\n野球は日常生活の中で大切な役割を果たしています。\n例えば、更新を諦めることがあります。\n例えば、選手を諦めることがあります。\n例えば、マラソンを諦めることがあります。\nこのように、挑戦は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '選手', reading: 'せんしゅ', meaning: 'player (of a sport)' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '挑戦', reading: 'ちょうせん', meaning: 'challenge' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: 'マラソン', reading: 'マラソン', meaning: 'marathon' },
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' }
    ],
  },
  {
    id: '723',
    title: 'チームワーク',
    source: 'スポーツ読解 (N4)',
    date: '2025-04-27',
    content:
      '入賞について考えてみましょう。\n入賞は日常生活の中で大切な役割を果たしています。\n例えば、リンクを投げることがあります。\n例えば、体育館を頑張ることがあります。\n例えば、戦略を頑張ることがあります。\nこのように、チームは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: '入賞', reading: 'にゅうしょう', meaning: 'winning a prize' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '体育館', reading: 'たいいくかん', meaning: 'gymnasium' }
    ],
  },
  {
    id: '724',
    title: '指導者の役割',
    source: 'スポーツ読解 (N4)',
    date: '2025-12-03',
    content:
      '応援について考えてみましょう。\n応援は日常生活の中で大切な役割を果たしています。\n例えば、サッカーを滑ることがあります。\n例えば、サッカーを滑ることがあります。\n例えば、チームを走ることがあります。\nこのように、競技場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: 'サッカー', reading: 'サッカー', meaning: 'soccer' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: 'stadium' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '応援', reading: 'おうえん', meaning: 'aid' },
      { word: '走る', reading: 'はしる', meaning: 'to run' }
    ],
  },
  {
    id: '725',
    title: 'スポーツ科学',
    source: 'スポーツ読解 (N4)',
    date: '2025-11-08',
    content:
      'ラグビーについて考えてみましょう。\nラグビーは日常生活の中で大切な役割を果たしています。\n例えば、ボクシングを打つことがあります。\n例えば、練習を打つことがあります。\n例えば、アメフトを飛ぶことがあります。\nこのように、コーチは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: 'boxing' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: 'コーチ', reading: 'コーチ', meaning: 'coach' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' }
    ],
  },
  {
    id: '726',
    title: '登山の準備',
    source: 'スポーツ読解 (N4)',
    date: '2025-05-08',
    content:
      'スノーボードについて考えてみましょう。\nスノーボードは日常生活の中で大切な役割を果たしています。\n例えば、水泳を勝つことがあります。\n例えば、陸上を鍛えることがあります。\n例えば、剣道を走ることがあります。\nこのように、水泳は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: 'スノーボード', reading: 'スノーボード', meaning: 'snowboard' },
      { word: '水泳', reading: 'すいえい', meaning: 'swimming' },
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: '剣道', reading: 'けんどう', meaning: 'kendo' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '727',
    title: 'ヨガの種類',
    source: '運動エッセイ (N4)',
    date: '2025-07-09',
    content:
      'スポーツについて考えてみましょう。\nスポーツは日常生活の中で大切な役割を果たしています。\n例えば、根性を勝つことがあります。\n例えば、攻撃を勝つことがあります。\n例えば、チームを頑張ることがあります。\nこのように、攻撃は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: '攻撃', reading: 'こうげき', meaning: 'attack' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' }
    ],
  },
  {
    id: '728',
    title: 'ランニング入門',
    source: 'スポーツ読解 (N4)',
    date: '2025-05-27',
    content:
      '入賞について考えてみましょう。\n入賞は日常生活の中で大切な役割を果たしています。\n例えば、競技を投げることがあります。\n例えば、チケットを打つことがあります。\n例えば、相撲を負けることがあります。\nこのように、バレーボールは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '相撲', reading: 'すもう', meaning: 'sumo (wrestling)' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '入賞', reading: 'にゅうしょう', meaning: 'winning a prize' },
      { word: 'チケット', reading: 'チケット', meaning: 'ticket' }
    ],
  },
  {
    id: '729',
    title: 'サイクリング',
    source: '運動エッセイ (N4)',
    date: '2025-06-27',
    content:
      '道場について考えてみましょう。\n道場は日常生活の中で大切な役割を果たしています。\n例えば、スポーツを戦うことがあります。\n例えば、ボクシングを戦うことがあります。\n例えば、スノーボードを蹴ることがあります。\nこのように、戦略は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '道場', reading: 'どうじょう', meaning: 'dojo' },
      { word: 'スノーボード', reading: 'スノーボード', meaning: 'snowboard' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: 'boxing' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' }
    ],
  },
  {
    id: '730',
    title: 'サーフィン体験',
    source: '運動エッセイ (N4)',
    date: '2025-10-13',
    content:
      '挑戦について考えてみましょう。\n挑戦は日常生活の中で大切な役割を果たしています。\n例えば、努力を諦めることがあります。\n例えば、野球を諦めることがあります。\n例えば、競技場を飛ぶことがあります。\nこのように、クリケットは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '努力', reading: 'どりょく', meaning: 'effort' },
      { word: '挑戦', reading: 'ちょうせん', meaning: 'challenge' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: 'stadium' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' }
    ],
  },
  {
    id: '731',
    title: '弓道の精神',
    source: '運動エッセイ (N4)',
    date: '2025-07-19',
    content:
      '道場について考えてみましょう。\n道場は日常生活の中で大切な役割を果たしています。\n例えば、根性を観戦ことがあります。\n例えば、スポーツを試合ことがあります。\n例えば、応援を練習ことがあります。\nこのように、運動は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道場', reading: 'どうじょう', meaning: 'dojo' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: '観戦', reading: 'かんせん', meaning: 'watching a (sports) game' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '試合', reading: 'しあい', meaning: 'match' },
      { word: '応援', reading: 'おうえん', meaning: 'aid' }
    ],
  },
  {
    id: '732',
    title: '合気道の心',
    source: '運動エッセイ (N4)',
    date: '2025-07-13',
    content:
      '戦略について考えてみましょう。\n戦略は日常生活の中で大切な役割を果たしています。\n例えば、挑戦を戦うことがあります。\n例えば、ゴルフを戦うことがあります。\n例えば、野球を戦うことがあります。\nこのように、ゴルフは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: '挑戦', reading: 'ちょうせん', meaning: 'challenge' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: 'golf' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' }
    ],
  },
  {
    id: '733',
    title: '空手の練習',
    source: '運動エッセイ (N4)',
    date: '2025-11-06',
    content:
      '選手について考えてみましょう。\n選手は日常生活の中で大切な役割を果たしています。\n例えば、選手を頑張ることがあります。\n例えば、運動を頑張ることがあります。\n例えば、選手を頑張ることがあります。\nこのように、競技場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運動', reading: 'うんどう', meaning: 'exercise' },
      { word: '選手', reading: 'せんしゅ', meaning: 'player (of a sport)' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: 'stadium' }
    ],
  },
  {
    id: '734',
    title: 'なぎなた',
    source: '運動エッセイ (N4)',
    date: '2025-06-17',
    content:
      'コーチについて考えてみましょう。\nコーチは日常生活の中で大切な役割を果たしています。\n例えば、練習を走ることがあります。\n例えば、攻撃を走ることがあります。\n例えば、練習を負けることがあります。\nこのように、根性は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '攻撃', reading: 'こうげき', meaning: 'attack' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: 'コーチ', reading: 'コーチ', meaning: 'coach' }
    ],
  },
  {
    id: '735',
    title: 'ボルダリング',
    source: '運動エッセイ (N4)',
    date: '2025-10-17',
    content:
      '守備について考えてみましょう。\n守備は日常生活の中で大切な役割を果たしています。\n例えば、チームを蹴ることがあります。\n例えば、応援を蹴ることがあります。\n例えば、卓球を蹴ることがあります。\nこのように、守備は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応援', reading: 'おうえん', meaning: 'aid' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' }
    ],
  },
  {
    id: '736',
    title: 'オリンピック',
    source: 'スポーツ読解 (N3)',
    date: '2025-10-02',
    content:
      '練習について深く掘り下げて考えてみたいと思います。\n現代社会において、練習は重要なテーマとなっています。\n特に練習を鍛える過程で、さまざまな発見がありました。\n特にゴルフを走る過程で、さまざまな発見がありました。\n特に引き分けを諦める過程で、さまざまな発見がありました。\nアメフトについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '引き分け', reading: 'ひきわけ', meaning: 'draw (in competition)' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: 'golf' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' }
    ],
  },
  {
    id: '737',
    title: '野球の魅力',
    source: 'スポーツ読解 (N3)',
    date: '2025-10-28',
    content:
      '守備について深く掘り下げて考えてみたいと思います。\n現代社会において、守備は重要なテーマとなっています。\n特にクリケットを鍛える過程で、さまざまな発見がありました。\n特に根性を鍛える過程で、さまざまな発見がありました。\n特に道場を鍛える過程で、さまざまな発見がありました。\n戦略についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: '道場', reading: 'どうじょう', meaning: 'dojo' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '738',
    title: 'サッカー日本代表',
    source: '運動エッセイ (N3)',
    date: '2025-08-24',
    content:
      '体育館について深く掘り下げて考えてみたいと思います。\n現代社会において、体育館は重要なテーマとなっています。\n特に競泳を打つ過程で、さまざまな発見がありました。\n特に競泳を打つ過程で、さまざまな発見がありました。\n特に戦術を打つ過程で、さまざまな発見がありました。\n戦略についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦術', reading: 'せんじゅつ', meaning: 'tactics' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '競泳', reading: 'きょうえい', meaning: 'competitive swimming' },
      { word: '体育館', reading: 'たいいくかん', meaning: 'gymnasium' }
    ],
  },
  {
    id: '739',
    title: '相撲の伝統',
    source: 'スポーツ読解 (N3)',
    date: '2025-10-10',
    content:
      '負けについて深く掘り下げて考えてみたいと思います。\n現代社会において、負けは重要なテーマとなっています。\n特に技術を勝負過程で、さまざまな発見がありました。\n特にレスリングをスポーツ過程で、さまざまな発見がありました。\n特にバレーボールをバスケットボール過程で、さまざまな発見がありました。\n球場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負け', reading: 'まけ', meaning: 'defeat' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: 'basketball' },
      { word: '球場', reading: 'きゅうじょう', meaning: 'baseball stadium' },
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '勝負', reading: 'しょうぶ', meaning: 'victory or defeat' },
      { word: 'レスリング', reading: 'レスリング', meaning: 'wrestling' }
    ],
  },
  {
    id: '740',
    title: '武道の精神',
    source: '運動エッセイ (N3)',
    date: '2025-04-21',
    content:
      'バレーボールについて深く掘り下げて考えてみたいと思います。\n現代社会において、バレーボールは重要なテーマとなっています。\n特に優勝を辛い過程で、さまざまな発見がありました。\n特にバスケットボールを体力過程で、さまざまな発見がありました。\n特に球場を会場過程で、さまざまな発見がありました。\n技術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '会場', reading: 'かいじょう', meaning: 'assembly hall' },
      { word: '体力', reading: 'たいりょく', meaning: 'physical strength' },
      { word: '球場', reading: 'きゅうじょう', meaning: 'baseball stadium' },
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: '辛い', reading: 'からい', meaning: 'spicy' },
      { word: '優勝', reading: 'ゆうしょう', meaning: 'overall victory' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: 'basketball' }
    ],
  },
  {
    id: '741',
    title: 'マラソン挑戦',
    source: '運動エッセイ (N3)',
    date: '2025-08-17',
    content:
      '選手について深く掘り下げて考えてみたいと思います。\n現代社会において、選手は重要なテーマとなっています。\n特にゴルフを投げる過程で、さまざまな発見がありました。\n特に陸上を滑る過程で、さまざまな発見がありました。\n特にスケートを走る過程で、さまざまな発見がありました。\n観客についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '選手', reading: 'せんしゅ', meaning: 'player (of a sport)' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: 'golf' },
      { word: '観客', reading: 'かんきゃく', meaning: 'spectator' },
      { word: 'スケート', reading: 'スケート', meaning: 'skating (esp. ice)' }
    ],
  },
  {
    id: '742',
    title: '水泳の効果',
    source: 'スポーツ読解 (N3)',
    date: '2025-05-28',
    content:
      '野球について深く掘り下げて考えてみたいと思います。\n現代社会において、野球は重要なテーマとなっています。\n特に練習を監督過程で、さまざまな発見がありました。\n特に更新をリンク過程で、さまざまな発見がありました。\n特に練習をスポーツ過程で、さまざまな発見がありました。\n練習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野球', reading: 'やきゅう', meaning: 'baseball' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '監督', reading: 'かんとく', meaning: 'supervision' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' }
    ],
  },
  {
    id: '743',
    title: 'スキーの楽しみ',
    source: '運動エッセイ (N3)',
    date: '2025-05-25',
    content:
      '道場について深く掘り下げて考えてみたいと思います。\n現代社会において、道場は重要なテーマとなっています。\n特に守備を戦う過程で、さまざまな発見がありました。\n特に勝ちを戦う過程で、さまざまな発見がありました。\n特に道場を戦う過程で、さまざまな発見がありました。\n道場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝ち', reading: 'かち', meaning: 'win' },
      { word: '道場', reading: 'どうじょう', meaning: 'dojo' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' }
    ],
  },
  {
    id: '744',
    title: '剣道の稽古',
    source: '運動エッセイ (N3)',
    date: '2025-04-06',
    content:
      '得点について深く掘り下げて考えてみたいと思います。\n現代社会において、得点は重要なテーマとなっています。\n特に引き分けを鍛える過程で、さまざまな発見がありました。\n特にリンクを鍛える過程で、さまざまな発見がありました。\n特にバレーボールを鍛える過程で、さまざまな発見がありました。\n引き分けについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: '得点', reading: 'とくてん', meaning: 'scoring' },
      { word: '引き分け', reading: 'ひきわけ', meaning: 'draw (in competition)' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '745',
    title: '柔道の技',
    source: 'スポーツ読解 (N3)',
    date: '2025-01-10',
    content:
      '観戦について深く掘り下げて考えてみたいと思います。\n現代社会において、観戦は重要なテーマとなっています。\n特に監督を戦う過程で、さまざまな発見がありました。\n特にチームを戦う過程で、さまざまな発見がありました。\n特に反則を戦う過程で、さまざまな発見がありました。\n努力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'watching a (sports) gameについて深く掘り下げて考えてみたいと思います。\n現代社会において、watching a (sports) gameは重要なテーマとなっています。\n特にsupervisionをto make war (on)過程で、さまざまな発見がありました。\n特にチームをto make war (on)過程で、さまざまな発見がありました。\n特にfoulをto make war (on)過程で、さまざまな発見がありました。\n努力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' },
      { word: '監督', reading: 'かんとく', meaning: 'supervision' },
      { word: '反則', reading: 'はんそく', meaning: 'foul' },
      { word: '観戦', reading: 'かんせん', meaning: 'watching a (sports) game' },
      { word: '努力', reading: 'どりょく', meaning: 'effort' },
      { word: 'チーム', reading: 'チーム', meaning: 'team' }
    ],
  },
  {
    id: '746',
    title: 'テニスの上達',
    source: '運動エッセイ (N3)',
    date: '2025-05-04',
    content:
      '練習について深く掘り下げて考えてみたいと思います。\n現代社会において、練習は重要なテーマとなっています。\n特に卓球を勝つ過程で、さまざまな発見がありました。\n特に戦略を勝つ過程で、さまざまな発見がありました。\n特に更新を滑る過程で、さまざまな発見がありました。\n戦略についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' },
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: '練習', reading: 'れんしゅう', meaning: 'practice' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' }
    ],
  },
  {
    id: '747',
    title: 'ゴルフ入門',
    source: '運動エッセイ (N3)',
    date: '2025-03-21',
    content:
      '記録について深く掘り下げて考えてみたいと思います。\n現代社会において、記録は重要なテーマとなっています。\n特に根性を負ける過程で、さまざまな発見がありました。\n特に更新を投げる過程で、さまざまな発見がありました。\n特に守備を滑る過程で、さまざまな発見がありました。\n根性についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '記録', reading: 'きろく', meaning: 'record' },
      { word: '根性', reading: 'こんじょう', meaning: 'willpower' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: '滑る', reading: 'すべる', meaning: 'to slide' }
    ],
  },
  {
    id: '748',
    title: 'バスケットボール',
    source: '運動エッセイ (N3)',
    date: '2025-05-24',
    content:
      'ラグビーについて深く掘り下げて考えてみたいと思います。\n現代社会において、ラグビーは重要なテーマとなっています。\n特にラグビーを飛ぶ過程で、さまざまな発見がありました。\n特に観客を走る過程で、さまざまな発見がありました。\n特にラグビーを蹴る過程で、さまざまな発見がありました。\nボクシングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ボクシング', reading: 'ボクシング', meaning: 'boxing' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '観客', reading: 'かんきゃく', meaning: 'spectator' }
    ],
  },
  {
    id: '749',
    title: '卓球の練習',
    source: 'スポーツ読解 (N3)',
    date: '2025-01-13',
    content:
      '努力について深く掘り下げて考えてみたいと思います。\n現代社会において、努力は重要なテーマとなっています。\n特に会場を蹴る過程で、さまざまな発見がありました。\n特に優勝を蹴る過程で、さまざまな発見がありました。\n特にチームを諦める過程で、さまざまな発見がありました。\n記録についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '努力', reading: 'どりょく', meaning: 'effort' },
      { word: '記録', reading: 'きろく', meaning: 'record' },
      { word: '会場', reading: 'かいじょう', meaning: 'assembly hall' },
      { word: '優勝', reading: 'ゆうしょう', meaning: 'overall victory' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '750',
    title: '体操競技',
    source: '運動エッセイ (N3)',
    date: '2025-03-15',
    content:
      'チケットについて深く掘り下げて考えてみたいと思います。\n現代社会において、チケットは重要なテーマとなっています。\n特に勝負を勝つ過程で、さまざまな発見がありました。\n特にリンクを勝つ過程で、さまざまな発見がありました。\n特にラグビーを勝つ過程で、さまざまな発見がありました。\n弓道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: 'チケット', reading: 'チケット', meaning: 'ticket' },
      { word: '弓道', reading: 'きゅうどう', meaning: 'kyūdō' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' },
      { word: '勝負', reading: 'しょうぶ', meaning: 'victory or defeat' }
    ],
  },
  {
    id: '751',
    title: 'スポーツ観戦',
    source: 'スポーツ読解 (N3)',
    date: '2025-10-02',
    content:
      '陸上について深く掘り下げて考えてみたいと思います。\n現代社会において、陸上は重要なテーマとなっています。\n特にスポーツを飛ぶ過程で、さまざまな発見がありました。\n特にクリケットを飛ぶ過程で、さまざまな発見がありました。\n特にスケートを飛ぶ過程で、さまざまな発見がありました。\nリンクについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スケート', reading: 'スケート', meaning: 'skating (esp. ice)' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' }
    ],
  },
  {
    id: '752',
    title: '体力作り',
    source: '運動エッセイ (N3)',
    date: '2025-01-13',
    content:
      'スポーツについて深く掘り下げて考えてみたいと思います。\n現代社会において、スポーツは重要なテーマとなっています。\n特に卓球を勝つ過程で、さまざまな発見がありました。\n特に反則を頑張る過程で、さまざまな発見がありました。\n特にスケートを頑張る過程で、さまざまな発見がありました。\n試合についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝つ', reading: 'かつ', meaning: 'to win' },
      { word: '試合', reading: 'しあい', meaning: 'match' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: 'スケート', reading: 'スケート', meaning: 'skating (esp. ice)' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '卓球', reading: 'たっきゅう', meaning: 'table tennis' },
      { word: '反則', reading: 'はんそく', meaning: 'foul' }
    ],
  },
  {
    id: '753',
    title: 'チームワーク',
    source: '運動エッセイ (N3)',
    date: '2025-05-20',
    content:
      '陸上について深く掘り下げて考えてみたいと思います。\n現代社会において、陸上は重要なテーマとなっています。\n特に運動を飛ぶ過程で、さまざまな発見がありました。\n特にスケートを鍛える過程で、さまざまな発見がありました。\n特にチケットを飛ぶ過程で、さまざまな発見がありました。\nスケートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'チケット', reading: 'チケット', meaning: 'ticket' },
      { word: 'スケート', reading: 'スケート', meaning: 'skating (esp. ice)' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '運動', reading: 'うんどう', meaning: 'exercise' }
    ],
  },
  {
    id: '754',
    title: '指導者の役割',
    source: 'スポーツ読解 (N3)',
    date: '2025-03-21',
    content:
      '競技について深く掘り下げて考えてみたいと思います。\n現代社会において、競技は重要なテーマとなっています。\n特に観戦を飛ぶ過程で、さまざまな発見がありました。\n特に観戦を負ける過程で、さまざまな発見がありました。\n特に体操を飛ぶ過程で、さまざまな発見がありました。\n競泳についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '観戦', reading: 'かんせん', meaning: 'watching a (sports) game' },
      { word: '体操', reading: 'たいそう', meaning: 'gymnastics' },
      { word: '競泳', reading: 'きょうえい', meaning: 'competitive swimming' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' }
    ],
  },
  {
    id: '755',
    title: 'スポーツ科学',
    source: 'スポーツ読解 (N3)',
    date: '2025-05-07',
    content:
      '優勝について深く掘り下げて考えてみたいと思います。\n現代社会において、優勝は重要なテーマとなっています。\n特にスポーツを蹴る過程で、さまざまな発見がありました。\n特に攻撃を蹴る過程で、さまざまな発見がありました。\n特にリンクを蹴る過程で、さまざまな発見がありました。\n観客についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スポーツ', reading: 'スポーツ', meaning: 'sport' },
      { word: '攻撃', reading: 'こうげき', meaning: 'attack' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '優勝', reading: 'ゆうしょう', meaning: 'overall victory' },
      { word: '観客', reading: 'かんきゃく', meaning: 'spectator' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' }
    ],
  },
  {
    id: '756',
    title: '登山の準備',
    source: '運動エッセイ (N3)',
    date: '2025-01-03',
    content:
      'サッカーについて深く掘り下げて考えてみたいと思います。\n現代社会において、サッカーは重要なテーマとなっています。\n特に柔道を戦う過程で、さまざまな発見がありました。\n特にゴルフを戦う過程で、さまざまな発見がありました。\n特にバドミントンを諦める過程で、さまざまな発見がありました。\nマラソンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: 'golf' },
      { word: 'マラソン', reading: 'マラソン', meaning: 'marathon' },
      { word: '柔道', reading: 'じゅうどう', meaning: 'judo' },
      { word: 'サッカー', reading: 'サッカー', meaning: 'soccer' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: 'badminton' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' }
    ],
  },
  {
    id: '757',
    title: 'ヨガの種類',
    source: 'スポーツ読解 (N3)',
    date: '2025-06-09',
    content:
      '優勝について深く掘り下げて考えてみたいと思います。\n現代社会において、優勝は重要なテーマとなっています。\n特に陸上を戦う過程で、さまざまな発見がありました。\n特に陸上を蹴る過程で、さまざまな発見がありました。\n特に反則を打つ過程で、さまざまな発見がありました。\nアメフトについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' },
      { word: '反則', reading: 'はんそく', meaning: 'foul' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '優勝', reading: 'ゆうしょう', meaning: 'overall victory' }
    ],
  },
  {
    id: '758',
    title: 'ランニング入門',
    source: 'スポーツ読解 (N3)',
    date: '2025-01-24',
    content:
      '体育館について深く掘り下げて考えてみたいと思います。\n現代社会において、体育館は重要なテーマとなっています。\n特に入賞を負ける過程で、さまざまな発見がありました。\n特に更新を負ける過程で、さまざまな発見がありました。\n特に監督を負ける過程で、さまざまな発見がありました。\n体育館についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '体育館', reading: 'たいいくかん', meaning: 'gymnasium' },
      { word: '負け', reading: 'まけ', meaning: 'defeat' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '監督', reading: 'かんとく', meaning: 'supervision' },
      { word: '入賞', reading: 'にゅうしょう', meaning: 'winning a prize' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' }
    ],
  },
  {
    id: '759',
    title: 'サイクリング',
    source: 'スポーツ読解 (N3)',
    date: '2025-03-28',
    content:
      '審判について深く掘り下げて考えてみたいと思います。\n現代社会において、審判は重要なテーマとなっています。\n特に守備を諦める過程で、さまざまな発見がありました。\n特に球場を諦める過程で、さまざまな発見がありました。\n特に水泳を諦める過程で、さまざまな発見がありました。\n挑戦についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '球場', reading: 'きゅうじょう', meaning: 'baseball stadium' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '守備', reading: 'しゅび', meaning: 'defense' },
      { word: '挑戦', reading: 'ちょうせん', meaning: 'challenge' },
      { word: '審判', reading: 'しんぱん', meaning: 'judgement' },
      { word: '水泳', reading: 'すいえい', meaning: 'swimming' }
    ],
  },
  {
    id: '760',
    title: 'サーフィン体験',
    source: '運動エッセイ (N3)',
    date: '2025-03-16',
    content:
      'バレーボールについて深く掘り下げて考えてみたいと思います。\n現代社会において、バレーボールは重要なテーマとなっています。\n特に競技を鍛える過程で、さまざまな発見がありました。\n特に努力を鍛える過程で、さまざまな発見がありました。\n特に敗北を鍛える過程で、さまざまな発見がありました。\nレスリングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敗北', reading: 'はいぼく', meaning: 'defeat' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: 'バレーボール', reading: 'バレーボール', meaning: 'volleyball' },
      { word: '努力', reading: 'どりょく', meaning: 'effort' },
      { word: 'レスリング', reading: 'レスリング', meaning: 'wrestling' }
    ],
  },
  {
    id: '761',
    title: '弓道の精神',
    source: 'スポーツ読解 (N3)',
    date: '2025-12-11',
    content:
      '道場について深く掘り下げて考えてみたいと思います。\n現代社会において、道場は重要なテーマとなっています。\n特に戦略を鍛える過程で、さまざまな発見がありました。\n特にコーチを鍛える過程で、さまざまな発見がありました。\n特に弓道を鍛える過程で、さまざまな発見がありました。\n弓道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コーチ', reading: 'コーチ', meaning: 'coach' },
      { word: '弓道', reading: 'きゅうどう', meaning: 'kyūdō' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '道場', reading: 'どうじょう', meaning: 'dojo' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '762',
    title: '合気道の心',
    source: '運動エッセイ (N3)',
    date: '2025-06-02',
    content:
      '勝利について深く掘り下げて考えてみたいと思います。\n現代社会において、勝利は重要なテーマとなっています。\n特にチームを飛ぶ過程で、さまざまな発見がありました。\n特に審判を投げる過程で、さまざまな発見がありました。\n特に審判を打つ過程で、さまざまな発見がありました。\n球場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝利', reading: 'しょうり', meaning: 'victory' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '審判', reading: 'しんぱん', meaning: 'judgement' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: 'チーム', reading: 'チーム', meaning: 'team' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '球場', reading: 'きゅうじょう', meaning: 'baseball stadium' }
    ],
  },
  {
    id: '763',
    title: '空手の練習',
    source: '運動エッセイ (N3)',
    date: '2025-06-13',
    content:
      '陸上について深く掘り下げて考えてみたいと思います。\n現代社会において、陸上は重要なテーマとなっています。\n特に戦術を打つ過程で、さまざまな発見がありました。\n特に技術を飛ぶ過程で、さまざまな発見がありました。\n特に競技を打つ過程で、さまざまな発見がありました。\n戦術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '戦術', reading: 'せんじゅつ', meaning: 'tactics' },
      { word: '技術', reading: 'ぎじゅつ', meaning: 'technology' },
      { word: '飛ぶ', reading: 'とぶ', meaning: 'to fly' },
      { word: '陸上', reading: 'りくじょう', meaning: '(on) land' },
      { word: '競技', reading: 'きょうぎ', meaning: 'game' }
    ],
  },
  {
    id: '764',
    title: 'なぎなた',
    source: '運動エッセイ (N3)',
    date: '2025-11-09',
    content:
      '勝ちについて深く掘り下げて考えてみたいと思います。\n現代社会において、勝ちは重要なテーマとなっています。\n特に戦略を弓道過程で、さまざまな発見がありました。\n特に水泳を負け過程で、さまざまな発見がありました。\n特に戦略を素晴らしい過程で、さまざまな発見がありました。\n戦略についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝ち', reading: 'かち', meaning: 'win' },
      { word: '戦略', reading: 'せんりゃく', meaning: 'strategy' },
      { word: '素晴らしい', reading: 'すばらしい', meaning: 'wonderful' },
      { word: '弓道', reading: 'きゅうどう', meaning: 'kyūdō' },
      { word: '水泳', reading: 'すいえい', meaning: 'swimming' },
      { word: '負け', reading: 'まけ', meaning: 'defeat' }
    ],
  },
  {
    id: '765',
    title: 'ボルダリング',
    source: '運動エッセイ (N3)',
    date: '2025-01-05',
    content:
      '更新について深く掘り下げて考えてみたいと思います。\n現代社会において、更新は重要なテーマとなっています。\n特にリンクを戦う過程で、さまざまな発見がありました。\n特に挑戦を負ける過程で、さまざまな発見がありました。\n特に競技を負ける過程で、さまざまな発見がありました。\n大会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '競技', reading: 'きょうぎ', meaning: 'game' },
      { word: '挑戦', reading: 'ちょうせん', meaning: 'challenge' },
      { word: '更新', reading: 'こうしん', meaning: 'renewal' },
      { word: '大会', reading: 'たいかい', meaning: 'mass meeting' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '負ける', reading: 'まける', meaning: 'to lose' },
      { word: '戦う', reading: 'たたかう', meaning: 'to make war (on)' }
    ],
  },
  {
    id: '766',
    title: '映画の楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-02-06',
    content:
      '雑誌について考えてみましょう。\n雑誌は日常生活の中で大切な役割を果たしています。\n例えば、折り紙を描くことがあります。\n例えば、雑誌を描くことがあります。\n例えば、博物館を描くことがあります。\nこのように、新聞は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' }
    ],
  },
  {
    id: '767',
    title: '音楽の力',
    source: '趣味エッセイ (N4)',
    date: '2025-03-02',
    content:
      '尺八について考えてみましょう。\n尺八は日常生活の中で大切な役割を果たしています。\n例えば、楽器を写真ことがあります。\n例えば、映画を楽器ことがあります。\n例えば、楽しみをアニメことがあります。\nこのように、陶芸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: '映画', reading: 'えいが', meaning: 'movie' },
      { word: 'アニメ', reading: 'アニメ', meaning: 'animation' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' }
    ],
  },
  {
    id: '768',
    title: 'アニメの世界',
    source: '趣味エッセイ (N4)',
    date: '2025-07-19',
    content:
      '琴について考えてみましょう。\n琴は日常生活の中で大切な役割を果たしています。\n例えば、太鼓を遊ぶことがあります。\n例えば、雑誌を続けることがあります。\n例えば、太鼓を遊ぶことがあります。\nこのように、独特は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'koto (13-stringed Japanese zither)について考えてみましょう。\nkoto (13-stringed Japanese zither)は日常生活の中で大切な役割を果たしています。\n例えば、drumを遊ぶことがあります。\n例えば、magazineを続けることがあります。\n例えば、drumを遊ぶことがあります。\nこのように、独特は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '琴', reading: 'こと', meaning: 'koto (13-stringed Japanese zither)' },
      { word: '太鼓', reading: 'たいこ', meaning: 'drum' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' }
    ],
  },
  {
    id: '769',
    title: '漫画文化',
    source: '趣味エッセイ (N4)',
    date: '2025-11-25',
    content:
      '暇について考えてみましょう。\n暇は日常生活の中で大切な役割を果たしています。\n例えば、遊びを描くことがあります。\n例えば、フルートを描くことがあります。\n例えば、絵画を描くことがあります。\nこのように、暇は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: 'play' },
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' }
    ],
  },
  {
    id: '770',
    title: 'ゲームの進化',
    source: '娯楽読解 (N4)',
    date: '2025-04-05',
    content:
      '趣味について考えてみましょう。\n趣味は日常生活の中で大切な役割を果たしています。\n例えば、花火を始めることがあります。\n例えば、趣味を読むことがあります。\n例えば、テレビを始めることがあります。\nこのように、ハイキングは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: '読む', reading: 'よむ', meaning: 'to read' }
    ],
  },
  {
    id: '771',
    title: 'カラオケの楽しみ',
    source: '趣味エッセイ (N4)',
    date: '2025-03-20',
    content:
      'ラジオについて考えてみましょう。\nラジオは日常生活の中で大切な役割を果たしています。\n例えば、遊園地を歌うことがあります。\n例えば、遊園地を飾ることがあります。\n例えば、釣りを遊ぶことがあります。\nこのように、遊びは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: 'play' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '釣り', reading: 'つり', meaning: 'fishing' }
    ],
  },
  {
    id: '772',
    title: '写真撮影',
    source: '娯楽読解 (N4)',
    date: '2025-10-14',
    content:
      'アニメについて考えてみましょう。\nアニメは日常生活の中で大切な役割を果たしています。\n例えば、ハイキングを歌うことがあります。\n例えば、アニメを歌うことがあります。\n例えば、ハイキングを歌うことがあります。\nこのように、ラジオは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: 'アニメ', reading: 'アニメ', meaning: 'animation' }
    ],
  },
  {
    id: '773',
    title: 'ボードゲーム',
    source: '娯楽読解 (N4)',
    date: '2025-09-05',
    content:
      'アニメについて考えてみましょう。\nアニメは日常生活の中で大切な役割を果たしています。\n例えば、暇を歌うことがあります。\n例えば、ドラマを歌うことがあります。\n例えば、陶芸を歌うことがあります。\nこのように、ドラマは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' },
      { word: 'アニメ', reading: 'アニメ', meaning: 'animation' }
    ],
  },
  {
    id: '774',
    title: '楽器の練習',
    source: '趣味エッセイ (N4)',
    date: '2025-10-22',
    content:
      '本について考えてみましょう。\n本は日常生活の中で大切な役割を果たしています。\n例えば、裁縫を楽しむことがあります。\n例えば、園芸を遊ぶことがあります。\n例えば、漫画を楽しむことがあります。\nこのように、園芸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: '裁縫', reading: 'さいほう', meaning: 'sewing' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '園芸', reading: 'えんげい', meaning: 'horticulture' }
    ],
  },
  {
    id: '775',
    title: '趣味の探し方',
    source: '趣味エッセイ (N4)',
    date: '2025-07-01',
    content:
      '映画について考えてみましょう。\n映画は日常生活の中で大切な役割を果たしています。\n例えば、ドラムを描くことがあります。\n例えば、編み物を遊ぶことがあります。\n例えば、本を描くことがあります。\nこのように、ラジオは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '編み物', reading: 'あみもの', meaning: 'knitting' },
      { word: 'ドラム', reading: 'ドラム', meaning: 'drum' },
      { word: '映画', reading: 'えいが', meaning: 'movie' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' }
    ],
  },
  {
    id: '776',
    title: '動画配信',
    source: '娯楽読解 (N4)',
    date: '2025-10-20',
    content:
      'アニメについて考えてみましょう。\nアニメは日常生活の中で大切な役割を果たしています。\n例えば、漫画を楽しむことがあります。\n例えば、パーティーを書くことがあります。\n例えば、アニメを集めることがあります。\nこのように、キャンプは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パーティー', reading: 'パーティー', meaning: 'party (social gathering)' },
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: 'アニメ', reading: 'アニメ', meaning: 'animation' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: 'キャンプ', reading: 'キャンプ', meaning: 'camp' }
    ],
  },
  {
    id: '777',
    title: '小説の執筆',
    source: '趣味エッセイ (N4)',
    date: '2025-05-12',
    content:
      'ドラマについて考えてみましょう。\nドラマは日常生活の中で大切な役割を果たしています。\n例えば、フルートを描くことがあります。\n例えば、暇を描くことがあります。\n例えば、娯楽を描くことがあります。\nこのように、ピアノは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '(non-documentary) television seriesについて考えてみましょう。\n(non-documentary) television seriesは日常生活の中で大切な役割を果たしています。\n例えば、fluteをto drawことがあります。\n例えば、暇をto drawことがあります。\n例えば、娯楽をto drawことがあります。\nこのように、ピアノは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '娯楽', reading: 'ごらく', meaning: 'amusement' },
      { word: 'ピアノ', reading: 'ピアノ', meaning: 'piano (instrument)' }
    ],
  },
  {
    id: '778',
    title: 'パズルの魅力',
    source: '娯楽読解 (N4)',
    date: '2025-06-28',
    content:
      '絵について考えてみましょう。\n絵は日常生活の中で大切な役割を果たしています。\n例えば、ドラムを撮ることがあります。\n例えば、ドラムを撮ることがあります。\n例えば、ハイキングを続けることがあります。\nこのように、博物館は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '絵', reading: 'え', meaning: 'picture' },
      { word: 'ドラム', reading: 'ドラム', meaning: 'drum' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' }
    ],
  },
  {
    id: '779',
    title: '手芸の時間',
    source: '趣味エッセイ (N4)',
    date: '2025-04-06',
    content:
      '祭りについて考えてみましょう。\n祭りは日常生活の中で大切な役割を果たしています。\n例えば、新聞を楽しむことがあります。\n例えば、祭りを続けることがあります。\n例えば、裁縫を歌うことがあります。\nこのように、娯楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '裁縫', reading: 'さいほう', meaning: 'sewing' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '娯楽', reading: 'ごらく', meaning: 'amusement' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' }
    ],
  },
  {
    id: '780',
    title: 'ガーデニング',
    source: '娯楽読解 (N4)',
    date: '2025-07-11',
    content:
      '楽しみについて考えてみましょう。\n楽しみは日常生活の中で大切な役割を果たしています。\n例えば、博物館を楽しむことがあります。\n例えば、遊園地を楽しむことがあります。\n例えば、水族館を飾ることがあります。\nこのように、漫画は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '水族館', reading: 'すいぞくかん', meaning: 'aquarium (building)' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' }
    ],
  },
  {
    id: '781',
    title: 'ダンス教室',
    source: '趣味エッセイ (N4)',
    date: '2025-10-04',
    content:
      '尺八について考えてみましょう。\n尺八は日常生活の中で大切な役割を果たしています。\n例えば、三味線を弾くことがあります。\n例えば、余暇を始めることがあります。\n例えば、園芸を弾くことがあります。\nこのように、バイオリンは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '三味線', reading: 'しゃみせん', meaning: 'shamisen' },
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: 'violin' },
      { word: '園芸', reading: 'えんげい', meaning: 'horticulture' },
      { word: '余暇', reading: 'よか', meaning: 'leisure' }
    ],
  },
  {
    id: '782',
    title: '演劇鑑賞',
    source: '趣味エッセイ (N4)',
    date: '2025-06-13',
    content:
      '暇について考えてみましょう。\n暇は日常生活の中で大切な役割を果たしています。\n例えば、音楽を歌うことがあります。\n例えば、三味線を描くことがあります。\n例えば、音楽を弾くことがあります。\nこのように、音楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '三味線', reading: 'しゃみせん', meaning: 'shamisen' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' }
    ],
  },
  {
    id: '783',
    title: 'コレクション',
    source: '娯楽読解 (N4)',
    date: '2025-01-09',
    content:
      '歌について考えてみましょう。\n歌は日常生活の中で大切な役割を果たしています。\n例えば、工作を続けることがあります。\n例えば、歌を弾くことがあります。\n例えば、祭りを描くことがあります。\nこのように、美術館は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '美術館', reading: 'びじゅつかん', meaning: 'art museum' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '歌', reading: 'うた', meaning: 'song' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '784',
    title: '旅行写真',
    source: '娯楽読解 (N4)',
    date: '2025-01-25',
    content:
      'バイオリンについて考えてみましょう。\nバイオリンは日常生活の中で大切な役割を果たしています。\n例えば、ラジオを遊ぶことがあります。\n例えば、音楽を遊ぶことがあります。\n例えば、ドラマを読むことがあります。\nこのように、音楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: 'violin' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' }
    ],
  },
  {
    id: '785',
    title: '料理教室',
    source: '趣味エッセイ (N4)',
    date: '2025-12-17',
    content:
      '撮影について考えてみましょう。\n撮影は日常生活の中で大切な役割を果たしています。\n例えば、バイオリンを始めることがあります。\n例えば、楽しみを集めることがあります。\n例えば、余暇を始めることがあります。\nこのように、雑誌は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'photography (still or motion)について考えてみましょう。\nphotography (still or motion)は日常生活の中で大切な役割を果たしています。\n例えば、violinをto startことがあります。\n例えば、楽しみをto collectことがあります。\n例えば、余暇をto startことがあります。\nこのように、magazineは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: 'violin' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '撮影', reading: 'さつえい', meaning: 'photography (still or motion)' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '余暇', reading: 'よか', meaning: 'leisure' }
    ],
  },
  {
    id: '786',
    title: '将棋の魅力',
    source: '趣味エッセイ (N4)',
    date: '2025-11-06',
    content:
      'フルートについて考えてみましょう。\nフルートは日常生活の中で大切な役割を果たしています。\n例えば、音楽を始めることがあります。\n例えば、余暇を続けることがあります。\n例えば、刺繍を描くことがあります。\nこのように、楽しみは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '余暇', reading: 'よか', meaning: 'leisure' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' }
    ],
  },
  {
    id: '787',
    title: '囲碁入門',
    source: '趣味エッセイ (N4)',
    date: '2025-06-14',
    content:
      '暇について考えてみましょう。\n暇は日常生活の中で大切な役割を果たしています。\n例えば、ハイキングを続けることがあります。\n例えば、刺繍を続けることがあります。\n例えば、漫画を見ることがあります。\nこのように、ハイキングは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '788',
    title: '麻雀の楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-04-14',
    content:
      '休日について考えてみましょう。\n休日は日常生活の中で大切な役割を果たしています。\n例えば、暇を続けることがあります。\n例えば、ハイキングを描くことがあります。\n例えば、楽しみを撮ることがあります。\nこのように、フルートは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'holiday' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '789',
    title: 'パチンコの仕組み',
    source: '娯楽読解 (N4)',
    date: '2025-01-18',
    content:
      '博物館について考えてみましょう。\n博物館は日常生活の中で大切な役割を果たしています。\n例えば、博物館を弾くことがあります。\n例えば、ハイキングを撮ることがあります。\n例えば、花火を撮ることがあります。\nこのように、ゲームは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' }
    ],
  },
  {
    id: '790',
    title: '競馬の世界',
    source: '趣味エッセイ (N4)',
    date: '2025-06-18',
    content:
      'テーマパークについて考えてみましょう。\nテーマパークは日常生活の中で大切な役割を果たしています。\n例えば、本を撮ることがあります。\n例えば、遊びを見ることがあります。\n例えば、遊びを楽しむことがあります。\nこのように、コンサートは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '遊び', reading: 'あそび', meaning: 'play' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: 'theme park' },
      { word: 'コンサート', reading: 'コンサート', meaning: 'concert' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '本', reading: 'ほん', meaning: 'book' }
    ],
  },
  {
    id: '791',
    title: '釣りの楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-11-28',
    content:
      '趣味について考えてみましょう。\n趣味は日常生活の中で大切な役割を果たしています。\n例えば、楽器を書くことがあります。\n例えば、写真を歌うことがあります。\n例えば、娯楽を撮ることがあります。\nこのように、園芸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '園芸', reading: 'えんげい', meaning: 'horticulture' },
      { word: '娯楽', reading: 'ごらく', meaning: 'amusement' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' }
    ],
  },
  {
    id: '792',
    title: 'キャンプ入門',
    source: '趣味エッセイ (N4)',
    date: '2025-11-26',
    content:
      '三味線について考えてみましょう。\n三味線は日常生活の中で大切な役割を果たしています。\n例えば、工作を遊びことがあります。\n例えば、尺八を琴ことがあります。\n例えば、小説をドラマことがあります。\nこのように、ドラマは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: 'play' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' },
      { word: '三味線', reading: 'しゃみせん', meaning: 'shamisen' },
      { word: '琴', reading: 'こと', meaning: 'koto (13-stringed Japanese zither)' },
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' }
    ],
  },
  {
    id: '793',
    title: '陶芸体験',
    source: '趣味エッセイ (N4)',
    date: '2025-12-01',
    content:
      '編み物について考えてみましょう。\n編み物は日常生活の中で大切な役割を果たしています。\n例えば、登山を弾くことがあります。\n例えば、尺八を楽しむことがあります。\n例えば、花火を弾くことがあります。\nこのように、美術館は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: '登山', reading: 'とざん', meaning: 'mountain climbing' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '編み物', reading: 'あみもの', meaning: 'knitting' },
      { word: '美術館', reading: 'びじゅつかん', meaning: 'art museum' }
    ],
  },
  {
    id: '794',
    title: '絵画教室',
    source: '趣味エッセイ (N4)',
    date: '2025-12-26',
    content:
      '配信について考えてみましょう。\n配信は日常生活の中で大切な役割を果たしています。\n例えば、歌を書くことがあります。\n例えば、編み物を描くことがあります。\n例えば、パーティーを描くことがあります。\nこのように、本は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      'distribution (of information, news, etc.)について考えてみましょう。\ndistribution (of information, news, etc.)は日常生活の中で大切な役割を果たしています。\n例えば、songをto writeことがあります。\n例えば、knittingをto drawことがあります。\n例えば、パーティーをto drawことがあります。\nこのように、bookは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    vocabulary: [
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '歌', reading: 'うた', meaning: 'song' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '編み物', reading: 'あみもの', meaning: 'knitting' },
      { word: 'パーティー', reading: 'パーティー', meaning: 'party (social gathering)' }
    ],
  },
  {
    id: '795',
    title: '合唱の楽しみ',
    source: '趣味エッセイ (N4)',
    date: '2025-10-13',
    content:
      '動物園について考えてみましょう。\n動物園は日常生活の中で大切な役割を果たしています。\n例えば、絵画を描くことがあります。\n例えば、イベントを歌うことがあります。\n例えば、展示会を歌うことがあります。\nこのように、登山は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '展示会', reading: 'てんじかい', meaning: 'exhibition' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '動物園', reading: 'どうぶつえん', meaning: 'zoo' },
      { word: 'イベント', reading: 'イベント', meaning: 'event' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '登山', reading: 'とざん', meaning: 'mountain climbing' }
    ],
  },
  {
    id: '796',
    title: '映画の楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-11-08',
    content:
      '楽器について深く掘り下げて考えてみたいと思います。\n現代社会において、楽器は重要なテーマとなっています。\n特にドラムを描く過程で、さまざまな発見がありました。\n特に編み物を描く過程で、さまざまな発見がありました。\n特に新聞を描く過程で、さまざまな発見がありました。\n趣味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '編み物', reading: 'あみもの', meaning: 'knitting' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: 'ドラム', reading: 'ドラム', meaning: 'drum' }
    ],
  },
  {
    id: '797',
    title: '音楽の力',
    source: '趣味エッセイ (N3)',
    date: '2025-09-12',
    content:
      'ハイキングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ハイキングは重要なテーマとなっています。\n特に絵を始める過程で、さまざまな発見がありました。\n特にキャンプを始める過程で、さまざまな発見がありました。\n特に刺繍を楽しむ過程で、さまざまな発見がありました。\n絵についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャンプ', reading: 'キャンプ', meaning: 'camp' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '絵', reading: 'え', meaning: 'picture' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' }
    ],
  },
  {
    id: '798',
    title: 'アニメの世界',
    source: '娯楽読解 (N3)',
    date: '2025-08-14',
    content:
      '歌について深く掘り下げて考えてみたいと思います。\n現代社会において、歌は重要なテーマとなっています。\n特に琴を読む過程で、さまざまな発見がありました。\n特に楽しみを歌う過程で、さまざまな発見がありました。\n特に歌を読む過程で、さまざまな発見がありました。\n小説についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '歌', reading: 'うた', meaning: 'song' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '琴', reading: 'こと', meaning: 'koto (13-stringed Japanese zither)' }
    ],
  },
  {
    id: '799',
    title: '漫画文化',
    source: '趣味エッセイ (N3)',
    date: '2025-12-07',
    content:
      'ゲームについて深く掘り下げて考えてみたいと思います。\n現代社会において、ゲームは重要なテーマとなっています。\n特に園芸を続ける過程で、さまざまな発見がありました。\n特に展示会を描く過程で、さまざまな発見がありました。\n特に撮影を続ける過程で、さまざまな発見がありました。\n歌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '撮影', reading: 'さつえい', meaning: 'photography (still or motion)' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '展示会', reading: 'てんじかい', meaning: 'exhibition' },
      { word: '園芸', reading: 'えんげい', meaning: 'horticulture' },
      { word: '歌', reading: 'うた', meaning: 'song' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' }
    ],
  },
  {
    id: '800',
    title: 'ゲームの進化',
    source: '娯楽読解 (N3)',
    date: '2025-12-16',
    content:
      '小説について深く掘り下げて考えてみたいと思います。\n現代社会において、小説は重要なテーマとなっています。\n特に漫画を続ける過程で、さまざまな発見がありました。\n特に編み物を続ける過程で、さまざまな発見がありました。\n特に編み物を続ける過程で、さまざまな発見がありました。\n動物園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: '編み物', reading: 'あみもの', meaning: 'knitting' },
      { word: '動物園', reading: 'どうぶつえん', meaning: 'zoo' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '801',
    title: 'カラオケの楽しみ',
    source: '趣味エッセイ (N3)',
    date: '2025-05-07',
    content:
      '娯楽について深く掘り下げて考えてみたいと思います。\n現代社会において、娯楽は重要なテーマとなっています。\n特にフルートを飾る過程で、さまざまな発見がありました。\n特に刺繍を飾る過程で、さまざまな発見がありました。\n特に刺繍を飾る過程で、さまざまな発見がありました。\nドラマについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '娯楽', reading: 'ごらく', meaning: 'amusement' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' }
    ],
  },
  {
    id: '802',
    title: '写真撮影',
    source: '娯楽読解 (N3)',
    date: '2025-06-24',
    content:
      '折り紙について深く掘り下げて考えてみたいと思います。\n現代社会において、折り紙は重要なテーマとなっています。\n特に絵画を飾る過程で、さまざまな発見がありました。\n特に休日を飾る過程で、さまざまな発見がありました。\n特に歌を飾る過程で、さまざまな発見がありました。\n人気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'holiday' },
      { word: '歌', reading: 'うた', meaning: 'song' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' }
    ],
  },
  {
    id: '803',
    title: 'ボードゲーム',
    source: '娯楽読解 (N3)',
    date: '2025-06-19',
    content:
      '休日について深く掘り下げて考えてみたいと思います。\n現代社会において、休日は重要なテーマとなっています。\n特にバイオリンを見る過程で、さまざまな発見がありました。\n特にギターを歌う過程で、さまざまな発見がありました。\n特に新聞を作る過程で、さまざまな発見がありました。\n小説についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: 'violin' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: 'ギター', reading: 'ギター', meaning: 'guitar' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'holiday' }
    ],
  },
  {
    id: '804',
    title: '楽器の練習',
    source: '趣味エッセイ (N3)',
    date: '2025-04-07',
    content:
      '趣味について深く掘り下げて考えてみたいと思います。\n現代社会において、趣味は重要なテーマとなっています。\n特に陶芸を作る過程で、さまざまな発見がありました。\n特に暇を作る過程で、さまざまな発見がありました。\n特に登山を作る過程で、さまざまな発見がありました。\n遊びについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '登山', reading: 'とざん', meaning: 'mountain climbing' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '遊び', reading: 'あそび', meaning: 'play' }
    ],
  },
  {
    id: '805',
    title: '趣味の探し方',
    source: '娯楽読解 (N3)',
    date: '2025-12-07',
    content:
      '楽しみについて深く掘り下げて考えてみたいと思います。\n現代社会において、楽しみは重要なテーマとなっています。\n特にゲームを描く過程で、さまざまな発見がありました。\n特に独特を描く過程で、さまざまな発見がありました。\n特に趣味を楽しむ過程で、さまざまな発見がありました。\n遊園地についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' }
    ],
  },
  {
    id: '806',
    title: '動画配信',
    source: '娯楽読解 (N3)',
    date: '2025-12-09',
    content:
      'ドラムについて深く掘り下げて考えてみたいと思います。\n現代社会において、ドラムは重要なテーマとなっています。\n特に音楽を集める過程で、さまざまな発見がありました。\n特に動画を見る過程で、さまざまな発見がありました。\n特に工作を集める過程で、さまざまな発見がありました。\n太鼓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' },
      { word: '太鼓', reading: 'たいこ', meaning: 'drum' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: 'ドラム', reading: 'ドラム', meaning: 'drum' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' }
    ],
  },
  {
    id: '807',
    title: '小説の執筆',
    source: '娯楽読解 (N3)',
    date: '2025-10-14',
    content:
      '雑誌について深く掘り下げて考えてみたいと思います。\n現代社会において、雑誌は重要なテーマとなっています。\n特に雑誌を集める過程で、さまざまな発見がありました。\n特にフルートを楽しむ過程で、さまざまな発見がありました。\n特に音楽を集める過程で、さまざまな発見がありました。\n雑誌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' }
    ],
  },
  {
    id: '808',
    title: 'パズルの魅力',
    source: '趣味エッセイ (N3)',
    date: '2025-02-11',
    content:
      '陶芸について深く掘り下げて考えてみたいと思います。\n現代社会において、陶芸は重要なテーマとなっています。\n特に花火を作る過程で、さまざまな発見がありました。\n特に趣味を見る過程で、さまざまな発見がありました。\n特に音楽を見る過程で、さまざまな発見がありました。\n楽しみについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '音楽', reading: 'おんがく', meaning: 'music' }
    ],
  },
  {
    id: '809',
    title: '手芸の時間',
    source: '趣味エッセイ (N3)',
    date: '2025-02-01',
    content:
      '歌について深く掘り下げて考えてみたいと思います。\n現代社会において、歌は重要なテーマとなっています。\n特に独特を始める過程で、さまざまな発見がありました。\n特にテーマパークを始める過程で、さまざまな発見がありました。\n特にキャンプを飾る過程で、さまざまな発見がありました。\n独特についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャンプ', reading: 'キャンプ', meaning: 'camp' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: 'theme park' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '歌', reading: 'うた', meaning: 'song' }
    ],
  },
  {
    id: '810',
    title: 'ガーデニング',
    source: '娯楽読解 (N3)',
    date: '2025-03-08',
    content:
      '撮影について深く掘り下げて考えてみたいと思います。\n現代社会において、撮影は重要なテーマとなっています。\n特に娯楽を書く過程で、さまざまな発見がありました。\n特に新聞を撮る過程で、さまざまな発見がありました。\n特に陶芸を書く過程で、さまざまな発見がありました。\n太鼓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '娯楽', reading: 'ごらく', meaning: 'amusement' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '太鼓', reading: 'たいこ', meaning: 'drum' },
      { word: '撮影', reading: 'さつえい', meaning: 'photography (still or motion)' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' }
    ],
  },
  {
    id: '811',
    title: 'ダンス教室',
    source: '娯楽読解 (N3)',
    date: '2025-04-22',
    content:
      '配信について深く掘り下げて考えてみたいと思います。\n現代社会において、配信は重要なテーマとなっています。\n特に太鼓を楽しむ過程で、さまざまな発見がありました。\n特にバイオリンを弾く過程で、さまざまな発見がありました。\n特に絵画を楽しむ過程で、さまざまな発見がありました。\n暇についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: 'violin' },
      { word: '太鼓', reading: 'たいこ', meaning: 'drum' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' }
    ],
  },
  {
    id: '812',
    title: '演劇鑑賞',
    source: '娯楽読解 (N3)',
    date: '2025-06-17',
    content:
      'ハイキングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ハイキングは重要なテーマとなっています。\n特にハイキングを楽しむ過程で、さまざまな発見がありました。\n特に水族館を見る過程で、さまざまな発見がありました。\n特に陶芸を楽しむ過程で、さまざまな発見がありました。\nパーティーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パーティー', reading: 'パーティー', meaning: 'party (social gathering)' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '水族館', reading: 'すいぞくかん', meaning: 'aquarium (building)' }
    ],
  },
  {
    id: '813',
    title: 'コレクション',
    source: '娯楽読解 (N3)',
    date: '2025-11-12',
    content:
      '工作について深く掘り下げて考えてみたいと思います。\n現代社会において、工作は重要なテーマとなっています。\n特にハイキングを見る過程で、さまざまな発見がありました。\n特に水族館を見る過程で、さまざまな発見がありました。\n特に楽器を描く過程で、さまざまな発見がありました。\n本についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: 'hiking' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: '水族館', reading: 'すいぞくかん', meaning: 'aquarium (building)' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' }
    ],
  },
  {
    id: '814',
    title: '旅行写真',
    source: '娯楽読解 (N3)',
    date: '2025-12-10',
    content:
      '動画について深く掘り下げて考えてみたいと思います。\n現代社会において、動画は重要なテーマとなっています。\n特に本を歌う過程で、さまざまな発見がありました。\n特に折り紙を歌う過程で、さまざまな発見がありました。\n特に写真を歌う過程で、さまざまな発見がありました。\n祭りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'video (esp. digital)について深く掘り下げて考えてみたいと思います。\n現代社会において、video (esp. digital)は重要なテーマとなっています。\n特にbookをto sing過程で、さまざまな発見がありました。\n特にorigamiをto sing過程で、さまざまな発見がありました。\n特に写真をto sing過程で、さまざまな発見がありました。\nfestivalについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: '祭り', reading: 'まつり', meaning: 'festival' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '折り紙', reading: 'おりがみ', meaning: 'origami' },
      { word: '本', reading: 'ほん', meaning: 'book' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '歌う', reading: 'うたう', meaning: 'to sing' }
    ],
  },
  {
    id: '815',
    title: '料理教室',
    source: '娯楽読解 (N3)',
    date: '2025-03-12',
    content:
      '楽しみについて深く掘り下げて考えてみたいと思います。\n現代社会において、楽しみは重要なテーマとなっています。\n特に遊園地を集める過程で、さまざまな発見がありました。\n特に遊園地を始める過程で、さまざまな発見がありました。\n特に楽しみを楽しむ過程で、さまざまな発見がありました。\nコンサートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: 'コンサート', reading: 'コンサート', meaning: 'concert' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '楽しみ', reading: 'たのしみ', meaning: 'enjoyment' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' }
    ],
  },
  {
    id: '816',
    title: '将棋の魅力',
    source: '娯楽読解 (N3)',
    date: '2025-11-22',
    content:
      '工作について深く掘り下げて考えてみたいと思います。\n現代社会において、工作は重要なテーマとなっています。\n特に裁縫を書く過程で、さまざまな発見がありました。\n特に新聞を書く過程で、さまざまな発見がありました。\n特に暇を書く過程で、さまざまな発見がありました。\n陶芸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' },
      { word: '裁縫', reading: 'さいほう', meaning: 'sewing' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '書く', reading: 'かく', meaning: 'to write' }
    ],
  },
  {
    id: '817',
    title: '囲碁入門',
    source: '趣味エッセイ (N3)',
    date: '2025-09-15',
    content:
      'ドラマについて深く掘り下げて考えてみたいと思います。\n現代社会において、ドラマは重要なテーマとなっています。\n特に絵画を飾る過程で、さまざまな発見がありました。\n特に趣味を作る過程で、さまざまな発見がありました。\n特にフルートを歌う過程で、さまざまな発見がありました。\n小説についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '(non-documentary) television seriesについて深く掘り下げて考えてみたいと思います。\n現代社会において、(non-documentary) television seriesは重要なテーマとなっています。\n特にpaintingをto decorate過程で、さまざまな発見がありました。\n特に趣味を作る過程で、さまざまな発見がありました。\n特にフルートをto sing過程で、さまざまな発見がありました。\nnovelについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '歌う', reading: 'うたう', meaning: 'to sing' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '(non-documentary) television series' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '絵', reading: 'え', meaning: 'picture' },
      { word: 'フルート', reading: 'フルート', meaning: 'flute' },
      { word: '作る', reading: 'つくる', meaning: 'to make' }
    ],
  },
  {
    id: '818',
    title: '麻雀の楽しみ',
    source: '趣味エッセイ (N3)',
    date: '2025-07-10',
    content:
      '楽器について深く掘り下げて考えてみたいと思います。\n現代社会において、楽器は重要なテーマとなっています。\n特に動物園を弾く過程で、さまざまな発見がありました。\n特に独特を集める過程で、さまざまな発見がありました。\n特に動物園を弾く過程で、さまざまな発見がありました。\n独特についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '独特', reading: 'どくとく', meaning: 'peculiarity' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: '動物園', reading: 'どうぶつえん', meaning: 'zoo' }
    ],
  },
  {
    id: '819',
    title: 'パチンコの仕組み',
    source: '娯楽読解 (N3)',
    date: '2025-01-23',
    content:
      'ゲームについて深く掘り下げて考えてみたいと思います。\n現代社会において、ゲームは重要なテーマとなっています。\n特に遊びを飾る過程で、さまざまな発見がありました。\n特に尺八を飾る過程で、さまざまな発見がありました。\n特に雑誌を描く過程で、さまざまな発見がありました。\n琴についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: 'play' },
      { word: '琴', reading: 'こと', meaning: 'koto (13-stringed Japanese zither)' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' }
    ],
  },
  {
    id: '820',
    title: '競馬の世界',
    source: '趣味エッセイ (N3)',
    date: '2025-10-08',
    content:
      'ギターについて深く掘り下げて考えてみたいと思います。\n現代社会において、ギターは重要なテーマとなっています。\n特に休日を始める過程で、さまざまな発見がありました。\n特にラジオを描く過程で、さまざまな発見がありました。\n特にラジオを飾る過程で、さまざまな発見がありました。\n小説についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '休日', reading: 'きゅうじつ', meaning: 'holiday' },
      { word: '小説', reading: 'しょうせつ', meaning: 'novel' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: 'ギター', reading: 'ギター', meaning: 'guitar' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' }
    ],
  },
  {
    id: '821',
    title: '釣りの楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-05-17',
    content:
      '余暇について深く掘り下げて考えてみたいと思います。\n現代社会において、余暇は重要なテーマとなっています。\n特にアニメを描く過程で、さまざまな発見がありました。\n特に絵を始める過程で、さまざまな発見がありました。\n特に花火を描く過程で、さまざまな発見がありました。\n刺繍についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: 'アニメ', reading: 'アニメ', meaning: 'animation' },
      { word: '絵', reading: 'え', meaning: 'picture' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '描く', reading: 'えがく', meaning: 'to draw' },
      { word: '花火', reading: 'はなび', meaning: 'fireworks' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '余暇', reading: 'よか', meaning: 'leisure' }
    ],
  },
  {
    id: '822',
    title: 'キャンプ入門',
    source: '趣味エッセイ (N3)',
    date: '2025-12-25',
    content:
      '園芸について深く掘り下げて考えてみたいと思います。\n現代社会において、園芸は重要なテーマとなっています。\n特に園芸を始める過程で、さまざまな発見がありました。\n特に楽器を始める過程で、さまざまな発見がありました。\n特に漫画を撮る過程で、さまざまな発見がありました。\n釣りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漫画', reading: 'まんが', meaning: 'cartoon' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '楽器', reading: 'がっき', meaning: 'musical instrument' },
      { word: '釣り', reading: 'つり', meaning: 'fishing' },
      { word: '園芸', reading: 'えんげい', meaning: 'horticulture' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' }
    ],
  },
  {
    id: '823',
    title: '陶芸体験',
    source: '趣味エッセイ (N3)',
    date: '2025-10-08',
    content:
      '絵画について深く掘り下げて考えてみたいと思います。\n現代社会において、絵画は重要なテーマとなっています。\n特に工作を弾く過程で、さまざまな発見がありました。\n特に刺繍を書く過程で、さまざまな発見がありました。\n特にパーティーを書く過程で、さまざまな発見がありました。\n写真についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絵画', reading: 'かいが', meaning: 'painting' },
      { word: '写真', reading: 'しゃしん', meaning: 'photograph' },
      { word: '絵', reading: 'え', meaning: 'picture' },
      { word: 'パーティー', reading: 'パーティー', meaning: 'party (social gathering)' },
      { word: '書く', reading: 'かく', meaning: 'to write' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '工作', reading: 'こうさく', meaning: 'handicraft' }
    ],
  },
  {
    id: '824',
    title: '絵画教室',
    source: '趣味エッセイ (N3)',
    date: '2025-09-23',
    content:
      '陶芸について深く掘り下げて考えてみたいと思います。\n現代社会において、陶芸は重要なテーマとなっています。\n特に趣味を撮る過程で、さまざまな発見がありました。\n特に陶芸を弾く過程で、さまざまな発見がありました。\n特に刺繍を撮る過程で、さまざまな発見がありました。\nゲームについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '趣味', reading: 'しゅみ', meaning: 'hobby' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '陶芸', reading: 'とうげい', meaning: 'ceramic art' },
      { word: '刺繍', reading: 'ししゅう', meaning: 'embroidery' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' }
    ],
  },
  {
    id: '825',
    title: '合唱の楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-12-11',
    content:
      '登山について深く掘り下げて考えてみたいと思います。\n現代社会において、登山は重要なテーマとなっています。\n特に動画を作る過程で、さまざまな発見がありました。\n特に雑誌を作る過程で、さまざまな発見がありました。\n特にゲームを遊ぶ過程で、さまざまな発見がありました。\n尺八についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: 'game' },
      { word: '尺八', reading: 'しゃくはち', meaning: 'shakuhachi' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '登山', reading: 'とざん', meaning: 'mountain climbing' }
    ],
  },
  {
    id: '826',
    title: '就職活動',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-08-11',
    content:
      '楽について深く掘り下げて考えてみたいと思います。\n現代社会において、楽は重要なテーマとなっています。\n特に取引先を引き受ける過程で、さまざまな発見がありました。\n特に年収を諦める過程で、さまざまな発見がありました。\n特に転勤を引き受ける過程で、さまざまな発見がありました。\n挨拶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '転勤', reading: 'てんきん', meaning: 'job transfer' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '楽', reading: 'らく', meaning: 'comfort' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' }
    ],
  },
  {
    id: '827',
    title: '面接の準備',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-05-13',
    content:
      '電話について深く掘り下げて考えてみたいと思います。\n現代社会において、電話は重要なテーマとなっています。\n特に案内を詫びる過程で、さまざまな発見がありました。\n特に同僚を詫びる過程で、さまざまな発見がありました。\n特に報告を引き受ける過程で、さまざまな発見がありました。\n総務についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' }
    ],
  },
  {
    id: '828',
    title: '職場のマナー',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-01',
    content:
      '企画について深く掘り下げて考えてみたいと思います。\n現代社会において、企画は重要なテーマとなっています。\n特に決裁を頑張る過程で、さまざまな発見がありました。\n特に開発を頑張る過程で、さまざまな発見がありました。\n特に休暇を頑張る過程で、さまざまな発見がありました。\n挨拶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' }
    ],
  },
  {
    id: '829',
    title: '仕事のやりがい',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-07-14',
    content:
      '責任について深く掘り下げて考えてみたいと思います。\n現代社会において、責任は重要なテーマとなっています。\n特に休憩を決める過程で、さまざまな発見がありました。\n特に決裁を辞める過程で、さまざまな発見がありました。\n特にボーナスを褒める過程で、さまざまな発見がありました。\n責任についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '責任', reading: 'せきにん', meaning: 'duty' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: 'ボーナス', reading: 'ボーナス', meaning: 'bonus' },
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' }
    ],
  },
  {
    id: '830',
    title: '転職の決断',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-03-14',
    content:
      '暇について深く掘り下げて考えてみたいと思います。\n現代社会において、暇は重要なテーマとなっています。\n特に顧客を続ける過程で、さまざまな発見がありました。\n特に暇を決める過程で、さまざまな発見がありました。\n特に楽を手伝う過程で、さまざまな発見がありました。\n仕事についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '楽', reading: 'らく', meaning: 'comfort' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' }
    ],
  },
  {
    id: '831',
    title: '残業問題',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-04-28',
    content:
      '給料について深く掘り下げて考えてみたいと思います。\n現代社会において、給料は重要なテーマとなっています。\n特に人事を休む過程で、さまざまな発見がありました。\n特に残業を休む過程で、さまざまな発見がありました。\n特に楽を休む過程で、さまざまな発見がありました。\n開発についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '人事', reading: 'じんじ', meaning: 'human affairs' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '残業', reading: 'ざんぎょう', meaning: 'overtime (work)' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '楽', reading: 'らく', meaning: 'comfort' }
    ],
  },
  {
    id: '832',
    title: 'パワハラ対策',
    source: '仕事読解 (N3)',
    date: '2025-01-19',
    content:
      '管理について深く掘り下げて考えてみたいと思います。\n現代社会において、管理は重要なテーマとなっています。\n特に開発を送る過程で、さまざまな発見がありました。\n特に確認を勤める過程で、さまざまな発見がありました。\n特に広報を叱る過程で、さまざまな発見がありました。\n事務所についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '勤める', reading: 'つとめる', meaning: 'to work (for)' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '開発', reading: 'かいはつ', meaning: 'development' }
    ],
  },
  {
    id: '833',
    title: '仕事の効率化',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-03-12',
    content:
      '仕事について深く掘り下げて考えてみたいと思います。\n現代社会において、仕事は重要なテーマとなっています。\n特に後輩を打ち合わせる過程で、さまざまな発見がありました。\n特に事務所を手伝う過程で、さまざまな発見がありました。\n特に椅子を続ける過程で、さまざまな発見がありました。\n後輩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '834',
    title: 'コミュニケーション',
    source: '仕事読解 (N3)',
    date: '2025-07-21',
    content:
      '連絡について深く掘り下げて考えてみたいと思います。\n現代社会において、連絡は重要なテーマとなっています。\n特に事務所を任せる過程で、さまざまな発見がありました。\n特に承認を任せる過程で、さまざまな発見がありました。\n特にファイルを詫びる過程で、さまざまな発見がありました。\n決裁についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' }
    ],
  },
  {
    id: '835',
    title: 'リーダーシップ',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-13',
    content:
      '仕事について深く掘り下げて考えてみたいと思います。\n現代社会において、仕事は重要なテーマとなっています。\n特に承認を諦める過程で、さまざまな発見がありました。\n特に昼休みを断る過程で、さまざまな発見がありました。\n特に同僚を断る過程で、さまざまな発見がありました。\n期限についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' }
    ],
  },
  {
    id: '836',
    title: 'プレゼン技術',
    source: '仕事読解 (N3)',
    date: '2025-01-22',
    content:
      '目標について深く掘り下げて考えてみたいと思います。\n現代社会において、目標は重要なテーマとなっています。\n特に休憩を続ける過程で、さまざまな発見がありました。\n特に名刺を褒める過程で、さまざまな発見がありました。\n特に服装を続ける過程で、さまざまな発見がありました。\n給料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' }
    ],
  },
  {
    id: '837',
    title: '時間管理',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-04-22',
    content:
      '部下について深く掘り下げて考えてみたいと思います。\n現代社会において、部下は重要なテーマとなっています。\n特に出張を諦める過程で、さまざまな発見がありました。\n特に無責任を諦める過程で、さまざまな発見がありました。\n特にデータを断る過程で、さまざまな発見がありました。\n服装についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '無責任', reading: 'むせきにん', meaning: 'irresponsibility' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '838',
    title: 'キャリアアップ',
    source: '仕事読解 (N3)',
    date: '2025-02-27',
    content:
      '昇進について深く掘り下げて考えてみたいと思います。\n現代社会において、昇進は重要なテーマとなっています。\n特に無責任を任せる過程で、さまざまな発見がありました。\n特に昇給を育てる過程で、さまざまな発見がありました。\n特に資料を打ち合わせる過程で、さまざまな発見がありました。\n期限についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '昇給', reading: 'しょうきゅう', meaning: 'salary raise' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '無責任', reading: 'むせきにん', meaning: 'irresponsibility' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' }
    ],
  },
  {
    id: '839',
    title: '副業の始め方',
    source: '仕事読解 (N3)',
    date: '2025-09-04',
    content:
      '電話について深く掘り下げて考えてみたいと思います。\n現代社会において、電話は重要なテーマとなっています。\n特に取引先を辞める過程で、さまざまな発見がありました。\n特に取引先を諦める過程で、さまざまな発見がありました。\n特に案内を辞める過程で、さまざまな発見がありました。\nメールについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '840',
    title: '独立開業',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-24',
    content:
      '相談について深く掘り下げて考えてみたいと思います。\n現代社会において、相談は重要なテーマとなっています。\n特に楽を勤める過程で、さまざまな発見がありました。\n特に期限を続ける過程で、さまざまな発見がありました。\n特に報告を任せる過程で、さまざまな発見がありました。\n目標についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '楽', reading: 'らく', meaning: 'comfort' },
      { word: '勤める', reading: 'つとめる', meaning: 'to work (for)' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '相談', reading: 'そうだん', meaning: 'consultation' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '841',
    title: '仕事と家庭',
    source: '仕事読解 (N3)',
    date: '2025-04-16',
    content:
      '先輩について深く掘り下げて考えてみたいと思います。\n現代社会において、先輩は重要なテーマとなっています。\n特に承認を育てる過程で、さまざまな発見がありました。\n特に広報を育てる過程で、さまざまな発見がありました。\n特に昇進を打ち合わせる過程で、さまざまな発見がありました。\n先輩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: '打ち合わせ', reading: 'うちあわせ', meaning: '(preparatory) meeting' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' }
    ],
  },
  {
    id: '842',
    title: '職場の人間関係',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-02-11',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特にデータを褒める過程で、さまざまな発見がありました。\n特に工場を褒める過程で、さまざまな発見がありました。\n特に工場を褒める過程で、さまざまな発見がありました。\n決裁についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '工場', reading: 'こうじょう', meaning: 'factory' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '843',
    title: 'ビジネスマナー',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-05-25',
    content:
      '楽について深く掘り下げて考えてみたいと思います。\n現代社会において、楽は重要なテーマとなっています。\n特に楽をメール過程で、さまざまな発見がありました。\n特に商談を有給過程で、さまざまな発見がありました。\n特に工場を後輩過程で、さまざまな発見がありました。\n昼休みについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽', reading: 'らく', meaning: 'comfort' },
      { word: '工場', reading: 'こうじょう', meaning: 'factory' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '有給', reading: 'ゆうきゅう', meaning: 'salaried' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' }
    ],
  },
  {
    id: '844',
    title: 'メールの書き方',
    source: '仕事読解 (N3)',
    date: '2025-03-26',
    content:
      '書類について深く掘り下げて考えてみたいと思います。\n現代社会において、書類は重要なテーマとなっています。\n特に先輩を手伝う過程で、さまざまな発見がありました。\n特に事務所を手伝う過程で、さまざまな発見がありました。\n特に製造を手伝う過程で、さまざまな発見がありました。\n店についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '書類', reading: 'しょるい', meaning: 'document' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '店', reading: 'みせ', meaning: 'store' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' }
    ],
  },
  {
    id: '845',
    title: '会議の進め方',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-04-16',
    content:
      '月給について深く掘り下げて考えてみたいと思います。\n現代社会において、月給は重要なテーマとなっています。\n特に名刺を頑張る過程で、さまざまな発見がありました。\n特に月給を頑張る過程で、さまざまな発見がありました。\n特に仕事を頑張る過程で、さまざまな発見がありました。\n査定についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '月給', reading: 'げっきゅう', meaning: 'monthly salary' }
    ],
  },
  {
    id: '846',
    title: '顧客対応',
    source: '仕事読解 (N3)',
    date: '2025-12-23',
    content:
      '得意先について深く掘り下げて考えてみたいと思います。\n現代社会において、得意先は重要なテーマとなっています。\n特に挨拶を頑張る過程で、さまざまな発見がありました。\n特に電話を辞める過程で、さまざまな発見がありました。\n特に目標を諦める過程で、さまざまな発見がありました。\n会社についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '得意先', reading: 'とくいさき', meaning: '(regular) customer' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '847',
    title: '企画立案',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-03-04',
    content:
      'メールについて深く掘り下げて考えてみたいと思います。\n現代社会において、メールは重要なテーマとなっています。\n特に昇進を休む過程で、さまざまな発見がありました。\n特に管理を決める過程で、さまざまな発見がありました。\n特に顧客を休む過程で、さまざまな発見がありました。\n椅子についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' },
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' }
    ],
  },
  {
    id: '848',
    title: '報告書の作成',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-21',
    content:
      '挨拶について深く掘り下げて考えてみたいと思います。\n現代社会において、挨拶は重要なテーマとなっています。\n特に後輩を頑張る過程で、さまざまな発見がありました。\n特に後輩を頑張る過程で、さまざまな発見がありました。\n特に資料を決める過程で、さまざまな発見がありました。\n月給についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '月給', reading: 'げっきゅう', meaning: 'monthly salary' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' }
    ],
  },
  {
    id: '849',
    title: '出張の準備',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-04-03',
    content:
      '相談について深く掘り下げて考えてみたいと思います。\n現代社会において、相談は重要なテーマとなっています。\n特に面接を打ち合わせる過程で、さまざまな発見がありました。\n特に相談を打ち合わせる過程で、さまざまな発見がありました。\n特に営業を打ち合わせる過程で、さまざまな発見がありました。\n楽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '相談', reading: 'そうだん', meaning: 'consultation' },
      { word: '面接', reading: 'めんせつ', meaning: 'interview (e.g. for a job)' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '営業', reading: 'えいぎょう', meaning: 'business' },
      { word: '楽', reading: 'らく', meaning: 'comfort' }
    ],
  },
  {
    id: '850',
    title: '社内研修',
    source: '仕事読解 (N3)',
    date: '2025-05-20',
    content:
      '昼休みについて深く掘り下げて考えてみたいと思います。\n現代社会において、昼休みは重要なテーマとなっています。\n特に後輩を断る過程で、さまざまな発見がありました。\n特に昼休みを断る過程で、さまざまな発見がありました。\n特に出張を断る過程で、さまざまな発見がありました。\n製造についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' }
    ],
  },
  {
    id: '851',
    title: '評価制度',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-08-04',
    content:
      '企画について深く掘り下げて考えてみたいと思います。\n現代社会において、企画は重要なテーマとなっています。\n特に受付を受け取る過程で、さまざまな発見がありました。\n特に休暇を助ける過程で、さまざまな発見がありました。\n特に暇を諦める過程で、さまざまな発見がありました。\n工場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '工場', reading: 'こうじょう', meaning: 'factory' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' }
    ],
  },
  {
    id: '852',
    title: '福利厚生',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-11-17',
    content:
      '残業について深く掘り下げて考えてみたいと思います。\n現代社会において、残業は重要なテーマとなっています。\n特に部下を送る過程で、さまざまな発見がありました。\n特に後輩を受け取る過程で、さまざまな発見がありました。\n特に開発を送る過程で、さまざまな発見がありました。\n服装についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '開発', reading: 'かいはつ', meaning: 'development' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '残業', reading: 'ざんぎょう', meaning: 'overtime (work)' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' }
    ],
  },
  {
    id: '853',
    title: '定年後の生活',
    source: '仕事読解 (N3)',
    date: '2025-04-09',
    content:
      '同僚について深く掘り下げて考えてみたいと思います。\n現代社会において、同僚は重要なテーマとなっています。\n特に降格を送る過程で、さまざまな発見がありました。\n特に月給を送る過程で、さまざまな発見がありました。\n特に困難を詫びる過程で、さまざまな発見がありました。\n部下についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '月給', reading: 'げっきゅう', meaning: 'monthly salary' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '降格', reading: 'こうかく', meaning: 'demotion' }
    ],
  },
  {
    id: '854',
    title: '職場の安全管理',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-07-24',
    content:
      '事務所について深く掘り下げて考えてみたいと思います。\n現代社会において、事務所は重要なテーマとなっています。\n特に確認を続ける過程で、さまざまな発見がありました。\n特に広報を続ける過程で、さまざまな発見がありました。\n特に名刺を褒める過程で、さまざまな発見がありました。\n時間についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' }
    ],
  },
  {
    id: '855',
    title: '先輩後輩関係',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-02-28',
    content:
      '報告について深く掘り下げて考えてみたいと思います。\n現代社会において、報告は重要なテーマとなっています。\n特に先輩を休む過程で、さまざまな発見がありました。\n特に査定を叱る過程で、さまざまな発見がありました。\n特に顧客を叱る過程で、さまざまな発見がありました。\n連絡についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' }
    ],
  },
  {
    id: '856',
    title: '就職活動',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-04-15',
    content:
      '仕事をめぐる議論は近年ますます活発になっています。\n本稿では、仕事の現状と課題について考察します。\n一方で、得意先を育てることの重要性も指摘されています。\n一方で、査定を育てることの重要性も指摘されています。\n一方で、同僚を打ち合わせることの重要性も指摘されています。\n以上の考察から、得意先の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '得意先', reading: 'とくいさき', meaning: '(regular) customer' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '857',
    title: '面接の準備',
    source: '仕事読解 (N2)',
    date: '2025-04-03',
    content:
      '報告をめぐる議論は近年ますます活発になっています。\n本稿では、報告の現状と課題について考察します。\n一方で、無責任を辞めることの重要性も指摘されています。\n一方で、出張を決めることの重要性も指摘されています。\n一方で、報告を詫びることの重要性も指摘されています。\n以上の考察から、商談の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '無責任', reading: 'むせきにん', meaning: 'irresponsibility' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' }
    ],
  },
  {
    id: '858',
    title: '職場のマナー',
    source: '仕事読解 (N2)',
    date: '2025-12-17',
    content:
      '会議をめぐる議論は近年ますます活発になっています。\n本稿では、会議の現状と課題について考察します。\n一方で、仕事を褒めることの重要性も指摘されています。\n一方で、仕事を詫びることの重要性も指摘されています。\n一方で、データを褒めることの重要性も指摘されています。\n以上の考察から、報告の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: 'データ', reading: 'データ', meaning: 'data' }
    ],
  },
  {
    id: '859',
    title: '仕事のやりがい',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-12-24',
    content:
      'ファイルをめぐる議論は近年ますます活発になっています。\n本稿では、ファイルの現状と課題について考察します。\n一方で、休暇を断ることの重要性も指摘されています。\n一方で、企画を手伝うことの重要性も指摘されています。\n一方で、ファイルを任せることの重要性も指摘されています。\n以上の考察から、困難の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' }
    ],
  },
  {
    id: '860',
    title: '転職の決断',
    source: '仕事読解 (N2)',
    date: '2025-01-09',
    content:
      '昇進をめぐる議論は近年ますます活発になっています。\n本稿では、昇進の現状と課題について考察します。\n一方で、面接をデータことの重要性も指摘されています。\n一方で、面接を管理ことの重要性も指摘されています。\n一方で、販売を椅子ことの重要性も指摘されています。\n以上の考察から、後輩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '面接', reading: 'めんせつ', meaning: 'interview (e.g. for a job)' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' }
    ],
  },
  {
    id: '861',
    title: '残業問題',
    source: '仕事読解 (N2)',
    date: '2025-11-26',
    content:
      '出張をめぐる議論は近年ますます活発になっています。\n本稿では、出張の現状と課題について考察します。\n一方で、承認を受け取ることの重要性も指摘されています。\n一方で、連絡を受け取ることの重要性も指摘されています。\n一方で、総務を手伝うことの重要性も指摘されています。\n以上の考察から、事務所の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' }
    ],
  },
  {
    id: '862',
    title: 'パワハラ対策',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-03-01',
    content:
      '休憩をめぐる議論は近年ますます活発になっています。\n本稿では、休憩の現状と課題について考察します。\n一方で、期限を叱ることの重要性も指摘されています。\n一方で、休暇を叱ることの重要性も指摘されています。\n一方で、ファイルを叱ることの重要性も指摘されています。\n以上の考察から、面談の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '面談', reading: 'めんだん', meaning: 'interview' },
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' },
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' }
    ],
  },
  {
    id: '863',
    title: '仕事の効率化',
    source: '仕事読解 (N2)',
    date: '2025-11-05',
    content:
      '面接をめぐる議論は近年ますます活発になっています。\n本稿では、面接の現状と課題について考察します。\n一方で、パソコンを叱ることの重要性も指摘されています。\n一方で、資料を叱ることの重要性も指摘されています。\n一方で、ボーナスを叱ることの重要性も指摘されています。\n以上の考察から、電話の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'interview (e.g. for a job)をめぐる議論は近年ますます活発になっています。\n本稿では、interview (e.g. for a job)の現状と課題について考察します。\n一方で、personal computerを叱ることのimportant性も指摘されています。\n一方で、materialを叱ることのimportant性も指摘されています。\n一方で、bonusを叱ることのimportant性も指摘されています。\n以上の考察から、電話の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'ボーナス', reading: 'ボーナス', meaning: 'bonus' },
      { word: '面接', reading: 'めんせつ', meaning: 'interview (e.g. for a job)' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '電話', reading: 'でんわ', meaning: 'telephone call' }
    ],
  },
  {
    id: '864',
    title: 'コミュニケーション',
    source: '仕事読解 (N2)',
    date: '2025-09-19',
    content:
      '降格をめぐる議論は近年ますます活発になっています。\n本稿では、降格の現状と課題について考察します。\n一方で、昼休みを任せることの重要性も指摘されています。\n一方で、ファイルを任せることの重要性も指摘されています。\n一方で、オフィスを打ち合わせることの重要性も指摘されています。\n以上の考察から、残業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'オフィス', reading: 'オフィス', meaning: 'office' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '降格', reading: 'こうかく', meaning: 'demotion' },
      { word: '打ち合わせ', reading: 'うちあわせ', meaning: '(preparatory) meeting' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '残業', reading: 'ざんぎょう', meaning: 'overtime (work)' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' }
    ],
  },
  {
    id: '865',
    title: 'リーダーシップ',
    source: '仕事読解 (N2)',
    date: '2025-09-05',
    content:
      'オフィスをめぐる議論は近年ますます活発になっています。\n本稿では、オフィスの現状と課題について考察します。\n一方で、昇給を管理ことの重要性も指摘されています。\n一方で、会社を管理ことの重要性も指摘されています。\n一方で、資料を商談ことの重要性も指摘されています。\n以上の考察から、事務所の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'オフィス', reading: 'オフィス', meaning: 'office' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '昇給', reading: 'しょうきゅう', meaning: 'salary raise' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '管理', reading: 'かんり', meaning: 'control' }
    ],
  },
  {
    id: '866',
    title: 'プレゼン技術',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-08-10',
    content:
      '連絡をめぐる議論は近年ますます活発になっています。\n本稿では、連絡の現状と課題について考察します。\n一方で、会議を手伝うことの重要性も指摘されています。\n一方で、連絡を手伝うことの重要性も指摘されています。\n一方で、広報を手伝うことの重要性も指摘されています。\n以上の考察から、ファイルの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' }
    ],
  },
  {
    id: '867',
    title: '時間管理',
    source: '仕事読解 (N2)',
    date: '2025-03-08',
    content:
      '無能をめぐる議論は近年ますます活発になっています。\n本稿では、無能の現状と課題について考察します。\n一方で、月給を案内ことの重要性も指摘されています。\n一方で、年収を同僚ことの重要性も指摘されています。\n一方で、先輩をデータことの重要性も指摘されています。\n以上の考察から、資料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無能', reading: 'むのう', meaning: 'incompetence' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: '月給', reading: 'げっきゅう', meaning: 'monthly salary' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' }
    ],
  },
  {
    id: '868',
    title: 'キャリアアップ',
    source: '仕事読解 (N2)',
    date: '2025-11-25',
    content:
      '部下をめぐる議論は近年ますます活発になっています。\n本稿では、部下の現状と課題について考察します。\n一方で、部下を打ち合わせることの重要性も指摘されています。\n一方で、期限を褒めることの重要性も指摘されています。\n一方で、企画を打ち合わせることの重要性も指摘されています。\n以上の考察から、メールの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '企画', reading: 'きかく', meaning: 'planning' }
    ],
  },
  {
    id: '869',
    title: '副業の始め方',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-03-24',
    content:
      '会議をめぐる議論は近年ますます活発になっています。\n本稿では、会議の現状と課題について考察します。\n一方で、同僚をファイルことの重要性も指摘されています。\n一方で、給料を会議ことの重要性も指摘されています。\n一方で、受付を不可能ことの重要性も指摘されています。\n以上の考察から、データの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '給料', reading: 'きゅうりょう', meaning: 'salary' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '不可能', reading: 'ふかのう', meaning: 'impossible' }
    ],
  },
  {
    id: '870',
    title: '独立開業',
    source: '仕事読解 (N2)',
    date: '2025-01-02',
    content:
      '経験をめぐる議論は近年ますます活発になっています。\n本稿では、経験の現状と課題について考察します。\n一方で、名刺を引き受けることの重要性も指摘されています。\n一方で、後輩を休むことの重要性も指摘されています。\n一方で、経験を引き受けることの重要性も指摘されています。\n以上の考察から、仕事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' },
      { word: '経験', reading: 'けいけん', meaning: 'experience' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' }
    ],
  },
  {
    id: '871',
    title: '仕事と家庭',
    source: '仕事読解 (N2)',
    date: '2025-10-12',
    content:
      '面倒をめぐる議論は近年ますます活発になっています。\n本稿では、面倒の現状と課題について考察します。\n一方で、無責任を決めることの重要性も指摘されています。\n一方で、評価を引き受けることの重要性も指摘されています。\n一方で、面倒を続けることの重要性も指摘されています。\n以上の考察から、目標の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '無責任', reading: 'むせきにん', meaning: 'irresponsibility' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '目標', reading: 'もくひょう', meaning: 'goal' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '責任', reading: 'せきにん', meaning: 'duty' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' }
    ],
  },
  {
    id: '872',
    title: '職場の人間関係',
    source: '仕事読解 (N2)',
    date: '2025-05-28',
    content:
      '人事をめぐる議論は近年ますます活発になっています。\n本稿では、人事の現状と課題について考察します。\n一方で、年収を任せることの重要性も指摘されています。\n一方で、同僚を休むことの重要性も指摘されています。\n一方で、人事を任せることの重要性も指摘されています。\n以上の考察から、取引先の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '人事', reading: 'じんじ', meaning: 'human affairs' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' }
    ],
  },
  {
    id: '873',
    title: 'ビジネスマナー',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-10-20',
    content:
      '事務所をめぐる議論は近年ますます活発になっています。\n本稿では、事務所の現状と課題について考察します。\n一方で、商談を育てることの重要性も指摘されています。\n一方で、昼休みを育てることの重要性も指摘されています。\n一方で、資料を育てることの重要性も指摘されています。\n以上の考察から、仕事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '資料', reading: 'しりょう', meaning: 'material' }
    ],
  },
  {
    id: '874',
    title: 'メールの書き方',
    source: '仕事読解 (N2)',
    date: '2025-01-04',
    content:
      '取引先をめぐる議論は近年ますます活発になっています。\n本稿では、取引先の現状と課題について考察します。\n一方で、困難を打ち合わせることの重要性も指摘されています。\n一方で、困難を勤めることの重要性も指摘されています。\n一方で、部下を辞めることの重要性も指摘されています。\n以上の考察から、書類の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '勤める', reading: 'つとめる', meaning: 'to work (for)' },
      { word: '困難', reading: 'こんなん', meaning: 'difficulty' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '書類', reading: 'しょるい', meaning: 'document' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' }
    ],
  },
  {
    id: '875',
    title: '会議の進め方',
    source: '仕事読解 (N2)',
    date: '2025-09-11',
    content:
      '評価をめぐる議論は近年ますます活発になっています。\n本稿では、評価の現状と課題について考察します。\n一方で、会議を送ることの重要性も指摘されています。\n一方で、評価を辞めることの重要性も指摘されています。\n一方で、暇を頑張ることの重要性も指摘されています。\n以上の考察から、査定の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '暇', reading: 'ひま', meaning: 'spare time' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' }
    ],
  },
  {
    id: '876',
    title: '顧客対応',
    source: '仕事読解 (N2)',
    date: '2025-08-12',
    content:
      '服装をめぐる議論は近年ますます活発になっています。\n本稿では、服装の現状と課題について考察します。\n一方で、事務所を働くことの重要性も指摘されています。\n一方で、挨拶を働くことの重要性も指摘されています。\n一方で、データを働くことの重要性も指摘されています。\n以上の考察から、顧客の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: 'データ', reading: 'データ', meaning: 'data' }
    ],
  },
  {
    id: '877',
    title: '企画立案',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-02-23',
    content:
      '経験をめぐる議論は近年ますます活発になっています。\n本稿では、経験の現状と課題について考察します。\n一方で、ボーナスを助けることの重要性も指摘されています。\n一方で、ボーナスを断ることの重要性も指摘されています。\n一方で、残業を断ることの重要性も指摘されています。\n以上の考察から、ファイルの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '残業', reading: 'ざんぎょう', meaning: 'overtime (work)' },
      { word: 'ボーナス', reading: 'ボーナス', meaning: 'bonus' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '経験', reading: 'けいけん', meaning: 'experience' }
    ],
  },
  {
    id: '878',
    title: '報告書の作成',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-04-06',
    content:
      '製造をめぐる議論は近年ますます活発になっています。\n本稿では、製造の現状と課題について考察します。\n一方で、同僚を働くことの重要性も指摘されています。\n一方で、無能を褒めることの重要性も指摘されています。\n一方で、同僚を働くことの重要性も指摘されています。\n以上の考察から、同僚の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '製造', reading: 'せいぞう', meaning: 'manufacture' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '無能', reading: 'むのう', meaning: 'incompetence' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '879',
    title: '出張の準備',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-08-11',
    content:
      '会議をめぐる議論は近年ますます活発になっています。\n本稿では、会議の現状と課題について考察します。\n一方で、査定を手伝うことの重要性も指摘されています。\n一方で、会社を受け取ることの重要性も指摘されています。\n一方で、資料を送ることの重要性も指摘されています。\n以上の考察から、時間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '時間', reading: 'じかん', meaning: 'time' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' }
    ],
  },
  {
    id: '880',
    title: '社内研修',
    source: '仕事読解 (N2)',
    date: '2025-09-21',
    content:
      '決裁をめぐる議論は近年ますます活発になっています。\n本稿では、決裁の現状と課題について考察します。\n一方で、挨拶を休むことの重要性も指摘されています。\n一方で、仕事を送ることの重要性も指摘されています。\n一方で、ファイルを休むことの重要性も指摘されています。\n以上の考察から、決裁の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '休む', reading: 'やすむ', meaning: 'to be absent' }
    ],
  },
  {
    id: '881',
    title: '評価制度',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-03-06',
    content:
      '案内をめぐる議論は近年ますます活発になっています。\n本稿では、案内の現状と課題について考察します。\n一方で、仕事を褒めることの重要性も指摘されています。\n一方で、メールを受け取ることの重要性も指摘されています。\n一方で、期限を褒めることの重要性も指摘されています。\n以上の考察から、総務の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' },
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: 'メール', reading: 'メール', meaning: 'email' },
      { word: '案内', reading: 'あんない', meaning: 'guidance' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '仕事', reading: 'しごと', meaning: 'work' }
    ],
  },
  {
    id: '882',
    title: '福利厚生',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-08-10',
    content:
      '報告をめぐる議論は近年ますます活発になっています。\n本稿では、報告の現状と課題について考察します。\n一方で、オフィスを続けることの重要性も指摘されています。\n一方で、面倒を褒めることの重要性も指摘されています。\n一方で、人事を続けることの重要性も指摘されています。\n以上の考察から、人事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '人事', reading: 'じんじ', meaning: 'human affairs' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' },
      { word: 'オフィス', reading: 'オフィス', meaning: 'office' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '883',
    title: '定年後の生活',
    source: '仕事読解 (N2)',
    date: '2025-02-23',
    content:
      '評価をめぐる議論は近年ますます活発になっています。\n本稿では、評価の現状と課題について考察します。\n一方で、工場を謝ることの重要性も指摘されています。\n一方で、面倒を働くことの重要性も指摘されています。\n一方で、工場を決めることの重要性も指摘されています。\n以上の考察から、転勤の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '謝る', reading: 'あやまる', meaning: 'to apologize (apologise)' },
      { word: '工場', reading: 'こうじょう', meaning: 'factory' },
      { word: '転勤', reading: 'てんきん', meaning: 'job transfer' }
    ],
  },
  {
    id: '884',
    title: '職場の安全管理',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-01-04',
    content:
      '経理をめぐる議論は近年ますます活発になっています。\n本稿では、経理の現状と課題について考察します。\n一方で、評価を送ることの重要性も指摘されています。\n一方で、椅子を送ることの重要性も指摘されています。\n一方で、会社を勤めることの重要性も指摘されています。\n以上の考察から、受付の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '会社', reading: 'かいしゃ', meaning: 'company' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '勤める', reading: 'つとめる', meaning: 'to work (for)' },
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '必要', reading: 'ひつよう', meaning: 'necessary' },
      { word: '送る', reading: 'おくる', meaning: 'to send' },
      { word: '経理', reading: 'けいり', meaning: 'accounting' }
    ],
  },
  {
    id: '885',
    title: '先輩後輩関係',
    source: '仕事読解 (N2)',
    date: '2025-05-26',
    content:
      'ファイルをめぐる議論は近年ますます活発になっています。\n本稿では、ファイルの現状と課題について考察します。\n一方で、工場を叱ることの重要性も指摘されています。\n一方で、面倒を叱ることの重要性も指摘されています。\n一方で、データを任せることの重要性も指摘されています。\n以上の考察から、仕事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: 'データ', reading: 'データ', meaning: 'data' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '工場', reading: 'こうじょう', meaning: 'factory' },
      { word: '仕事', reading: 'しごと', meaning: 'work' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' }
    ],
  },
  {
    id: '886',
    title: '新聞の役割',
    source: '情報エッセイ (N3)',
    date: '2025-11-27',
    content:
      '画面について深く掘り下げて考えてみたいと思います。\n現代社会において、画面は重要なテーマとなっています。\n特に番組を知る過程で、さまざまな発見がありました。\n特に放送を知る過程で、さまざまな発見がありました。\n特にコマーシャルを知る過程で、さまざまな発見がありました。\n放送についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' },
      { word: '放送', reading: 'ほうそう', meaning: 'broadcasting' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' }
    ],
  },
  {
    id: '887',
    title: 'テレビの未来',
    source: '情報エッセイ (N3)',
    date: '2025-11-22',
    content:
      'ラジオについて深く掘り下げて考えてみたいと思います。\n現代社会において、ラジオは重要なテーマとなっています。\n特にテレビを記事過程で、さまざまな発見がありました。\n特に情報を記事過程で、さまざまな発見がありました。\n特にテレビをメディア過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' }
    ],
  },
  {
    id: '888',
    title: 'ネットニュース',
    source: '情報エッセイ (N3)',
    date: '2025-01-03',
    content:
      '画面について深く掘り下げて考えてみたいと思います。\n現代社会において、画面は重要なテーマとなっています。\n特にサイトを調べる過程で、さまざまな発見がありました。\n特にサイトを調べる過程で、さまざまな発見がありました。\n特に新聞を調べる過程で、さまざまな発見がありました。\n出演についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出演', reading: 'しゅつえん', meaning: 'appearance (in a film, play, TV show, etc.)' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' }
    ],
  },
  {
    id: '889',
    title: '報道の自由',
    source: 'メディア読解 (N3)',
    date: '2025-12-18',
    content:
      'ブログについて深く掘り下げて考えてみたいと思います。\n現代社会において、ブログは重要なテーマとなっています。\n特に配信をライター過程で、さまざまな発見がありました。\n特に情報を記事過程で、さまざまな発見がありました。\n特にサービスを報道過程で、さまざまな発見がありました。\n放送についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ブログ', reading: 'ブログ', meaning: 'blog' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '放送', reading: 'ほうそう', meaning: 'broadcasting' }
    ],
  },
  {
    id: '890',
    title: '広告の影響',
    source: '情報エッセイ (N3)',
    date: '2025-03-26',
    content:
      'ホームページについて深く掘り下げて考えてみたいと思います。\n現代社会において、ホームページは重要なテーマとなっています。\n特にアナウンサーを読む過程で、さまざまな発見がありました。\n特にアナウンサーを調べる過程で、さまざまな発見がありました。\n特にネットを読む過程で、さまざまな発見がありました。\n司会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '司会', reading: 'しかい', meaning: 'leading a meeting' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: 'announcer' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: 'home page (of a website or browser)' }
    ],
  },
  {
    id: '891',
    title: 'SNS時代',
    source: 'メディア読解 (N3)',
    date: '2025-05-05',
    content:
      'ブログについて深く掘り下げて考えてみたいと思います。\n現代社会において、ブログは重要なテーマとなっています。\n特にブログを見る過程で、さまざまな発見がありました。\n特にアプリを伝える過程で、さまざまな発見がありました。\n特に記者を伝わる過程で、さまざまな発見がありました。\n動画についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ブログ', reading: 'ブログ', meaning: 'blog' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '見る', reading: 'みる', meaning: 'to see' }
    ],
  },
  {
    id: '892',
    title: 'フェイクニュース',
    source: 'メディア読解 (N3)',
    date: '2025-06-04',
    content:
      'サービスについて深く掘り下げて考えてみたいと思います。\n現代社会において、サービスは重要なテーマとなっています。\n特にニュースを知らせる過程で、さまざまな発見がありました。\n特にユーザーを知らせる過程で、さまざまな発見がありました。\n特に報道を知らせる過程で、さまざまな発見がありました。\n人気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'ニュース', reading: 'ニュース', meaning: 'news' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: 'user' }
    ],
  },
  {
    id: '893',
    title: 'ジャーナリズム',
    source: '情報エッセイ (N3)',
    date: '2025-02-11',
    content:
      '不便について深く掘り下げて考えてみたいと思います。\n現代社会において、不便は重要なテーマとなっています。\n特に不便を見る過程で、さまざまな発見がありました。\n特に放送を見る過程で、さまざまな発見がありました。\n特にアプリを見る過程で、さまざまな発見がありました。\nメディアについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '放送', reading: 'ほうそう', meaning: 'broadcasting' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '894',
    title: '出版業界',
    source: 'メディア読解 (N3)',
    date: '2025-09-18',
    content:
      'ホームページについて深く掘り下げて考えてみたいと思います。\n現代社会において、ホームページは重要なテーマとなっています。\n特にサイトを読む過程で、さまざまな発見がありました。\n特にサービスを知る過程で、さまざまな発見がありました。\n特に情報を読む過程で、さまざまな発見がありました。\nアプリについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: 'home page (of a website or browser)' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' }
    ],
  },
  {
    id: '895',
    title: 'メディアリテラシー',
    source: 'メディア読解 (N3)',
    date: '2025-03-18',
    content:
      'ラジオについて深く掘り下げて考えてみたいと思います。\n現代社会において、ラジオは重要なテーマとなっています。\n特に配信を見る過程で、さまざまな発見がありました。\n特に記事を見る過程で、さまざまな発見がありました。\n特に読者を見る過程で、さまざまな発見がありました。\n広告についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '広告', reading: 'こうこく', meaning: 'advertisement' },
      { word: '読者', reading: 'どくしゃ', meaning: 'reader' }
    ],
  },
  {
    id: '896',
    title: 'ラジオの魅力',
    source: '情報エッセイ (N3)',
    date: '2025-03-24',
    content:
      'ラインについて深く掘り下げて考えてみたいと思います。\n現代社会において、ラインは重要なテーマとなっています。\n特にサイトを見る過程で、さまざまな発見がありました。\n特に情報を見る過程で、さまざまな発見がありました。\n特にインターネットを調べる過程で、さまざまな発見がありました。\nネットについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: 'ライン', reading: 'ライン', meaning: 'line' }
    ],
  },
  {
    id: '897',
    title: 'ドキュメンタリー',
    source: '情報エッセイ (N3)',
    date: '2025-10-06',
    content:
      'ライターについて深く掘り下げて考えてみたいと思います。\n現代社会において、ライターは重要なテーマとなっています。\n特にパソコンを読む過程で、さまざまな発見がありました。\n特にライターを読む過程で、さまざまな発見がありました。\n特に発行を読む過程で、さまざまな発見がありました。\n発行についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '発行', reading: 'はっこう', meaning: 'publication (of a newspaper, magazine, book, etc.)' }
    ],
  },
  {
    id: '898',
    title: 'コマーシャル',
    source: 'メディア読解 (N3)',
    date: '2025-12-19',
    content:
      '報道について深く掘り下げて考えてみたいと思います。\n現代社会において、報道は重要なテーマとなっています。\n特に画面を読む過程で、さまざまな発見がありました。\n特にライターを読む過程で、さまざまな発見がありました。\n特に情報を読む過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '画面', reading: 'がめん', meaning: 'screen (of a TV, computer, etc.)' },
      { word: '読む', reading: 'よむ', meaning: 'to read' }
    ],
  },
  {
    id: '899',
    title: '視聴率の仕組み',
    source: '情報エッセイ (N3)',
    date: '2025-08-26',
    content:
      '放送について深く掘り下げて考えてみたいと思います。\n現代社会において、放送は重要なテーマとなっています。\n特に記者を早い過程で、さまざまな発見がありました。\n特に記者を遅い過程で、さまざまな発見がありました。\n特にユーザーを購読過程で、さまざまな発見がありました。\nラジオについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '放送', reading: 'ほうそう', meaning: 'broadcasting' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: 'user' },
      { word: '遅い', reading: 'おそい', meaning: 'slow' },
      { word: '早い', reading: 'はやい', meaning: 'fast' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' }
    ],
  },
  {
    id: '900',
    title: '記事の書き方',
    source: '情報エッセイ (N3)',
    date: '2025-04-19',
    content:
      'サイトについて深く掘り下げて考えてみたいと思います。\n現代社会において、サイトは重要なテーマとなっています。\n特に宣伝を伝わる過程で、さまざまな発見がありました。\n特にメディアを伝わる過程で、さまざまな発見がありました。\n特にインターネットを伝わる過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: 'インターネット', reading: 'インターネット', meaning: 'Internet' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '宣伝', reading: 'せんでん', meaning: 'publicity' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' }
    ],
  },
  {
    id: '901',
    title: '取材の方法',
    source: 'メディア読解 (N3)',
    date: '2025-09-23',
    content:
      'サービスについて深く掘り下げて考えてみたいと思います。\n現代社会において、サービスは重要なテーマとなっています。\n特に信頼を知る過程で、さまざまな発見がありました。\n特に雑誌を知る過程で、さまざまな発見がありました。\n特に記者を知る過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '信頼', reading: 'しんらい', meaning: 'trust (in)' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' }
    ],
  },
  {
    id: '902',
    title: '編集者の仕事',
    source: '情報エッセイ (N3)',
    date: '2025-06-08',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特に購読を伝える過程で、さまざまな発見がありました。\n特に購読を伝える過程で、さまざまな発見がありました。\n特にパソコンを伝える過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '903',
    title: '配信技術',
    source: 'メディア読解 (N3)',
    date: '2025-06-02',
    content:
      'サイトについて深く掘り下げて考えてみたいと思います。\n現代社会において、サイトは重要なテーマとなっています。\n特に出演を不便過程で、さまざまな発見がありました。\n特にサービスを確実過程で、さまざまな発見がありました。\n特に情報をユーザー過程で、さまざまな発見がありました。\n購読についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: 'user' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: '確実', reading: 'かくじつ', meaning: 'certain' },
      { word: '出演', reading: 'しゅつえん', meaning: 'appearance (in a film, play, TV show, etc.)' }
    ],
  },
  {
    id: '904',
    title: '著作権問題',
    source: 'メディア読解 (N3)',
    date: '2025-12-08',
    content:
      'サイトについて深く掘り下げて考えてみたいと思います。\n現代社会において、サイトは重要なテーマとなっています。\n特にライターをサービス過程で、さまざまな発見がありました。\n特に情報を購読過程で、さまざまな発見がありました。\n特にジャーナリストを配布過程で、さまざまな発見がありました。\nブログについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' },
      { word: 'ブログ', reading: 'ブログ', meaning: 'blog' },
      { word: '配布', reading: 'はいふ', meaning: 'distribution' },
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: 'journalist' },
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: 'サイト', reading: 'サイト', meaning: 'site' }
    ],
  },
  {
    id: '905',
    title: '情報公開',
    source: '情報エッセイ (N3)',
    date: '2025-02-01',
    content:
      'ジャーナリストについて深く掘り下げて考えてみたいと思います。\n現代社会において、ジャーナリストは重要なテーマとなっています。\n特にブログを知る過程で、さまざまな発見がありました。\n特にアプリを読む過程で、さまざまな発見がありました。\n特にアプリを知る過程で、さまざまな発見がありました。\n発行についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ブログ', reading: 'ブログ', meaning: 'blog' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '発行', reading: 'はっこう', meaning: 'publication (of a newspaper, magazine, book, etc.)' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: 'journalist' }
    ],
  },
  {
    id: '906',
    title: '新聞の役割',
    source: 'メディア読解 (N2)',
    date: '2025-07-08',
    content:
      'ラインをめぐる議論は近年ますます活発になっています。\n本稿では、ラインの現状と課題について考察します。\n一方で、メディアを伝えることの重要性も指摘されています。\n一方で、記者を読むことの重要性も指摘されています。\n一方で、司会を読むことの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '司会', reading: 'しかい', meaning: 'leading a meeting' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: 'ライン', reading: 'ライン', meaning: 'line' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' }
    ],
  },
  {
    id: '907',
    title: 'テレビの未来',
    source: '情報エッセイ (N2)',
    date: '2025-05-24',
    content:
      '雑誌をめぐる議論は近年ますます活発になっています。\n本稿では、雑誌の現状と課題について考察します。\n一方で、アプリを知らせることの重要性も指摘されています。\n一方で、アプリを知らせることの重要性も指摘されています。\n一方で、テレビを知らせることの重要性も指摘されています。\n以上の考察から、コマーシャルの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: '雑誌', reading: 'ざっし', meaning: 'magazine' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '908',
    title: 'ネットニュース',
    source: '情報エッセイ (N2)',
    date: '2025-02-02',
    content:
      'アプリをめぐる議論は近年ますます活発になっています。\n本稿では、アプリの現状と課題について考察します。\n一方で、アナウンサーを知ることの重要性も指摘されています。\n一方で、動画を知ることの重要性も指摘されています。\n一方で、キャスターを知ることの重要性も指摘されています。\n以上の考察から、ライターの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャスター', reading: 'キャスター', meaning: 'caster' },
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '動画', reading: 'どうが', meaning: 'video (esp. digital)' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: 'announcer' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' }
    ],
  },
  {
    id: '909',
    title: '報道の自由',
    source: 'メディア読解 (N2)',
    date: '2025-08-16',
    content:
      '不便をめぐる議論は近年ますます活発になっています。\n本稿では、不便の現状と課題について考察します。\n一方で、メディアをアナウンサーことの重要性も指摘されています。\n一方で、ブログを記者ことの重要性も指摘されています。\n一方で、視聴者を確実ことの重要性も指摘されています。\n以上の考察から、ネットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: 'announcer' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '確実', reading: 'かくじつ', meaning: 'certain' },
      { word: 'ブログ', reading: 'ブログ', meaning: 'blog' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: 'viewer (esp. of television, streaming video content)' }
    ],
  },
  {
    id: '910',
    title: '広告の影響',
    source: 'メディア読解 (N2)',
    date: '2025-05-26',
    content:
      'コマーシャルをめぐる議論は近年ますます活発になっています。\n本稿では、コマーシャルの現状と課題について考察します。\n一方で、コマーシャルを伝わることの重要性も指摘されています。\n一方で、新聞を読むことの重要性も指摘されています。\n一方で、ジャーナリストを伝えることの重要性も指摘されています。\n以上の考察から、ジャーナリストの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: 'journalist' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '911',
    title: 'SNS時代',
    source: 'メディア読解 (N2)',
    date: '2025-08-23',
    content:
      '出演をめぐる議論は近年ますます活発になっています。\n本稿では、出演の現状と課題について考察します。\n一方で、テレビを知らせることの重要性も指摘されています。\n一方で、新聞を知らせることの重要性も指摘されています。\n一方で、人気を知らせることの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'appearance (in a film, play, TV show, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、appearance (in a film, play, TV show, etc.)の現状と課題について考察します。\n一方で、televisionを知らせることの重要性も指摘されています。\n一方で、新聞を知らせることの重要性も指摘されています。\n一方で、popularityを知らせることの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '出演', reading: 'しゅつえん', meaning: 'appearance (in a film, play, TV show, etc.)' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' }
    ],
  },
  {
    id: '912',
    title: 'フェイクニュース',
    source: '情報エッセイ (N2)',
    date: '2025-05-28',
    content:
      '編集者をめぐる議論は近年ますます活発になっています。\n本稿では、編集者の現状と課題について考察します。\n一方で、編集者を読むことの重要性も指摘されています。\n一方で、読者を伝えることの重要性も指摘されています。\n一方で、アプリを知ることの重要性も指摘されています。\n以上の考察から、サービスの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '読者', reading: 'どくしゃ', meaning: 'reader' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: 'editor (in publishing, etc.)' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '913',
    title: 'ジャーナリズム',
    source: '情報エッセイ (N2)',
    date: '2025-07-15',
    content:
      '記者をめぐる議論は近年ますます活発になっています。\n本稿では、記者の現状と課題について考察します。\n一方で、信用をメディアことの重要性も指摘されています。\n一方で、配信をユーザーことの重要性も指摘されています。\n一方で、メディアを編集者ことの重要性も指摘されています。\n以上の考察から、テレビの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: 'editor (in publishing, etc.)' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: 'user' },
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: '信用', reading: 'しんよう', meaning: 'confidence' }
    ],
  },
  {
    id: '914',
    title: '出版業界',
    source: '情報エッセイ (N2)',
    date: '2025-02-06',
    content:
      '人気をめぐる議論は近年ますます活発になっています。\n本稿では、人気の現状と課題について考察します。\n一方で、視聴者を読むことの重要性も指摘されています。\n一方で、新聞を伝えることの重要性も指摘されています。\n一方で、新聞を調べることの重要性も指摘されています。\n以上の考察から、ゲストの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゲスト', reading: 'ゲスト', meaning: 'guest' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: 'viewer (esp. of television, streaming video content)' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '調べる', reading: 'しらべる', meaning: 'to examine' },
      { word: '読む', reading: 'よむ', meaning: 'to read' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' }
    ],
  },
  {
    id: '915',
    title: 'メディアリテラシー',
    source: 'メディア読解 (N2)',
    date: '2025-06-26',
    content:
      'アナウンサーをめぐる議論は近年ますます活発になっています。\n本稿では、アナウンサーの現状と課題について考察します。\n一方で、ライターを出演ことの重要性も指摘されています。\n一方で、広告を広告ことの重要性も指摘されています。\n一方で、テレビをジャーナリストことの重要性も指摘されています。\n以上の考察から、配布の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '広告', reading: 'こうこく', meaning: 'advertisement' },
      { word: '配布', reading: 'はいふ', meaning: 'distribution' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: 'journalist' },
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: 'announcer' },
      { word: '出演', reading: 'しゅつえん', meaning: 'appearance (in a film, play, TV show, etc.)' }
    ],
  },
  {
    id: '916',
    title: 'ラジオの魅力',
    source: '情報エッセイ (N2)',
    date: '2025-11-15',
    content:
      '読者をめぐる議論は近年ますます活発になっています。\n本稿では、読者の現状と課題について考察します。\n一方で、編集者を司会ことの重要性も指摘されています。\n一方で、配布をアプリことの重要性も指摘されています。\n一方で、視聴者をメディアことの重要性も指摘されています。\n以上の考察から、メディアの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '配布', reading: 'はいふ', meaning: 'distribution' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: 'editor (in publishing, etc.)' },
      { word: '読者', reading: 'どくしゃ', meaning: 'reader' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: 'viewer (esp. of television, streaming video content)' },
      { word: '司会', reading: 'しかい', meaning: 'leading a meeting' }
    ],
  },
  {
    id: '917',
    title: 'ドキュメンタリー',
    source: 'メディア読解 (N2)',
    date: '2025-10-11',
    content:
      'パソコンをめぐる議論は近年ますます活発になっています。\n本稿では、パソコンの現状と課題について考察します。\n一方で、記者を新聞ことの重要性も指摘されています。\n一方で、宣伝を新聞ことの重要性も指摘されています。\n一方で、配信を配布ことの重要性も指摘されています。\n以上の考察から、宣伝の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: 'パソコン', reading: 'パソコン', meaning: 'personal computer' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '配布', reading: 'はいふ', meaning: 'distribution' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '宣伝', reading: 'せんでん', meaning: 'publicity' }
    ],
  },
  {
    id: '918',
    title: 'コマーシャル',
    source: 'メディア読解 (N2)',
    date: '2025-02-24',
    content:
      'ゲストをめぐる議論は近年ますます活発になっています。\n本稿では、ゲストの現状と課題について考察します。\n一方で、ラジオを読者ことの重要性も指摘されています。\n一方で、人気をアプリことの重要性も指摘されています。\n一方で、ゲストを面白いことの重要性も指摘されています。\n以上の考察から、ラジオの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '面白い', reading: 'おもしろい', meaning: 'interesting' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' },
      { word: '人気', reading: 'にんき', meaning: 'popularity' },
      { word: 'ゲスト', reading: 'ゲスト', meaning: 'guest' },
      { word: '読者', reading: 'どくしゃ', meaning: 'reader' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' }
    ],
  },
  {
    id: '919',
    title: '視聴率の仕組み',
    source: 'メディア読解 (N2)',
    date: '2025-05-15',
    content:
      '報道をめぐる議論は近年ますます活発になっています。\n本稿では、報道の現状と課題について考察します。\n一方で、情報を知らせることの重要性も指摘されています。\n一方で、情報を知らせることの重要性も指摘されています。\n一方で、情報を知らせることの重要性も指摘されています。\n以上の考察から、アプリの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: 'information' },
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: 'アプリ', reading: 'アプリ', meaning: 'app' }
    ],
  },
  {
    id: '920',
    title: '記事の書き方',
    source: '情報エッセイ (N2)',
    date: '2025-05-12',
    content:
      '報道をめぐる議論は近年ますます活発になっています。\n本稿では、報道の現状と課題について考察します。\n一方で、番組を面白いことの重要性も指摘されています。\n一方で、配信を記者ことの重要性も指摘されています。\n一方で、新聞を配布ことの重要性も指摘されています。\n以上の考察から、ラジオの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: 'radio' },
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '記者', reading: 'きしゃ', meaning: 'reporter' },
      { word: '配信', reading: 'はいしん', meaning: 'distribution (of information, news, etc.)' },
      { word: '配布', reading: 'はいふ', meaning: 'distribution' },
      { word: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { word: '面白い', reading: 'おもしろい', meaning: 'interesting' }
    ],
  },
  {
    id: '921',
    title: '取材の方法',
    source: '情報エッセイ (N2)',
    date: '2025-01-03',
    content:
      'メディアをめぐる議論は近年ますます活発になっています。\n本稿では、メディアの現状と課題について考察します。\n一方で、テレビを簡単ことの重要性も指摘されています。\n一方で、司会を重要ことの重要性も指摘されています。\n一方で、広告をテレビことの重要性も指摘されています。\n以上の考察から、視聴率の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テレビ', reading: 'テレビ', meaning: 'television' },
      { word: 'メディア', reading: 'メディア', meaning: 'media' },
      { word: '広告', reading: 'こうこく', meaning: 'advertisement' },
      { word: '司会', reading: 'しかい', meaning: 'leading a meeting' },
      { word: '視聴率', reading: 'しちょうりつ', meaning: 'ratings (e.g. of a television program)' },
      { word: '簡単', reading: 'かんたん', meaning: 'simple' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' }
    ],
  },
  {
    id: '922',
    title: '編集者の仕事',
    source: '情報エッセイ (N2)',
    date: '2025-02-21',
    content:
      '広告をめぐる議論は近年ますます活発になっています。\n本稿では、広告の現状と課題について考察します。\n一方で、広告を伝えることの重要性も指摘されています。\n一方で、読者を伝えることの重要性も指摘されています。\n一方で、ゲストを知ることの重要性も指摘されています。\n以上の考察から、ジャーナリストの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゲスト', reading: 'ゲスト', meaning: 'guest' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '読者', reading: 'どくしゃ', meaning: 'reader' },
      { word: '広告', reading: 'こうこく', meaning: 'advertisement' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: 'journalist' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '923',
    title: '配信技術',
    source: 'メディア読解 (N2)',
    date: '2025-05-25',
    content:
      '購読をめぐる議論は近年ますます活発になっています。\n本稿では、購読の現状と課題について考察します。\n一方で、ゲストを見ることの重要性も指摘されています。\n一方で、不便を知ることの重要性も指摘されています。\n一方で、ネットを見ることの重要性も指摘されています。\n以上の考察から、出演の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'buying and reading (book, magazine, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、buying and reading (book, magazine, etc.)の現状と課題について考察します。\n一方で、guestをto seeことの重要性も指摘されています。\n一方で、inconvenienceをto knowことの重要性も指摘されています。\n一方で、networkをto seeことの重要性も指摘されています。\n以上の考察から、appearance (in a film, play, TV show, etc.)の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: 'ゲスト', reading: 'ゲスト', meaning: 'guest' },
      { word: '出演', reading: 'しゅつえん', meaning: 'appearance (in a film, play, TV show, etc.)' },
      { word: '見る', reading: 'みる', meaning: 'to see' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' }
    ],
  },
  {
    id: '924',
    title: '著作権問題',
    source: 'メディア読解 (N2)',
    date: '2025-11-08',
    content:
      'コマーシャルをめぐる議論は近年ますます活発になっています。\n本稿では、コマーシャルの現状と課題について考察します。\n一方で、発行を知ることの重要性も指摘されています。\n一方で、発行を伝わることの重要性も指摘されています。\n一方で、キャスターを伝わることの重要性も指摘されています。\n以上の考察から、発行の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャスター', reading: 'キャスター', meaning: 'caster' },
      { word: '発行', reading: 'はっこう', meaning: 'publication (of a newspaper, magazine, book, etc.)' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' }
    ],
  },
  {
    id: '925',
    title: '情報公開',
    source: '情報エッセイ (N2)',
    date: '2025-01-24',
    content:
      '報道をめぐる議論は近年ますます活発になっています。\n本稿では、報道の現状と課題について考察します。\n一方で、視聴者を購読ことの重要性も指摘されています。\n一方で、ライターを重要ことの重要性も指摘されています。\n一方で、ニュースを視聴率ことの重要性も指摘されています。\n以上の考察から、視聴者の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ライター', reading: 'ライター', meaning: 'lighter' },
      { word: '視聴率', reading: 'しちょうりつ', meaning: 'ratings (e.g. of a television program)' },
      { word: '購読', reading: 'こうどく', meaning: 'buying and reading (book, magazine, etc.)' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: 'viewer (esp. of television, streaming video content)' },
      { word: '報道', reading: 'ほうどう', meaning: 'report (of news)' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: 'ニュース', reading: 'ニュース', meaning: 'news' }
    ],
  },
  {
    id: '926',
    title: '幸福の条件',
    source: '心理学読解 (N3)',
    date: '2025-04-26',
    content:
      '彼氏について深く掘り下げて考えてみたいと思います。\n現代社会において、彼氏は重要なテーマとなっています。\n特に裏切りを頑張る過程で、さまざまな発見がありました。\n特に先生を疑う過程で、さまざまな発見がありました。\n特に裏切りを疑う過程で、さまざまな発見がありました。\n祖父についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '裏切り', reading: 'うらぎり', meaning: 'treachery' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '祖父', reading: 'そふ', meaning: 'grandfather' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '彼氏', reading: 'かれし', meaning: 'boyfriend' }
    ],
  },
  {
    id: '927',
    title: '孤独の心理学',
    source: '心のエッセイ (N3)',
    date: '2025-07-10',
    content:
      '気分について深く掘り下げて考えてみたいと思います。\n現代社会において、気分は重要なテーマとなっています。\n特に孫を感情過程で、さまざまな発見がありました。\n特に気分を心過程で、さまざまな発見がありました。\n特に親戚を感謝過程で、さまざまな発見がありました。\n感情についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '親戚', reading: 'しんせき', meaning: 'relative' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '心', reading: 'こころ', meaning: 'mind' },
      { word: '感謝', reading: 'かんしゃ', meaning: 'thanks' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '孫', reading: 'まご', meaning: 'grandchild' }
    ],
  },
  {
    id: '928',
    title: '怒りのコントロール',
    source: '心理学読解 (N3)',
    date: '2025-04-14',
    content:
      '生徒について深く掘り下げて考えてみたいと思います。\n現代社会において、生徒は重要なテーマとなっています。\n特に尊敬を詫びる過程で、さまざまな発見がありました。\n特に知人を思う過程で、さまざまな発見がありました。\n特に祖父を見捨てる過程で、さまざまな発見がありました。\n不満についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' },
      { word: '祖父', reading: 'そふ', meaning: 'grandfather' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '思う', reading: 'おもう', meaning: 'to think' },
      { word: '尊敬', reading: 'そんけい', meaning: 'respect' },
      { word: '知人', reading: 'ちじん', meaning: 'friend' },
      { word: '生徒', reading: 'せいと', meaning: 'pupil' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' }
    ],
  },
  {
    id: '929',
    title: '共感の力',
    source: '心のエッセイ (N3)',
    date: '2025-02-13',
    content:
      '仲直りについて深く掘り下げて考えてみたいと思います。\n現代社会において、仲直りは重要なテーマとなっています。\n特に仲直りを励ます過程で、さまざまな発見がありました。\n特に仲直りを信じる過程で、さまざまな発見がありました。\n特に憎しみを苦しむ過程で、さまざまな発見がありました。\n気分についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' },
      { word: '憎しみ', reading: 'にくしみ', meaning: 'hatred' },
      { word: '信じる', reading: 'しんじる', meaning: 'to believe' },
      { word: '仲直り', reading: 'なかなおり', meaning: 'reconciliation' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' }
    ],
  },
  {
    id: '930',
    title: '自信の育て方',
    source: '心理学読解 (N3)',
    date: '2025-10-15',
    content:
      '軽蔑について深く掘り下げて考えてみたいと思います。\n現代社会において、軽蔑は重要なテーマとなっています。\n特に失望を諦める過程で、さまざまな発見がありました。\n特にリラックスを苦しむ過程で、さまざまな発見がありました。\n特に軽蔑を愛する過程で、さまざまな発見がありました。\n親戚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '軽蔑', reading: 'けいべつ', meaning: 'contempt' },
      { word: '親戚', reading: 'しんせき', meaning: 'relative' },
      { word: '愛する', reading: 'あいする', meaning: 'to love' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' },
      { word: 'リラックス', reading: 'リラックス', meaning: 'relaxing' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '失望', reading: 'しつぼう', meaning: 'disappointment' }
    ],
  },
  {
    id: '931',
    title: '不安との向き合い方',
    source: '心理学読解 (N3)',
    date: '2025-06-08',
    content:
      '感謝について深く掘り下げて考えてみたいと思います。\n現代社会において、感謝は重要なテーマとなっています。\n特に信頼を困る過程で、さまざまな発見がありました。\n特に心を困る過程で、さまざまな発見がありました。\n特に感謝を困る過程で、さまざまな発見がありました。\n気性についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '心', reading: 'こころ', meaning: 'mind' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' },
      { word: '気性', reading: 'きしょう', meaning: 'disposition' },
      { word: '感謝', reading: 'かんしゃ', meaning: 'thanks' },
      { word: '信頼', reading: 'しんらい', meaning: 'trust (in)' }
    ],
  },
  {
    id: '932',
    title: '感謝の効果',
    source: '心理学読解 (N3)',
    date: '2025-10-13',
    content:
      '敵について深く掘り下げて考えてみたいと思います。\n現代社会において、敵は重要なテーマとなっています。\n特に敵を夢過程で、さまざまな発見がありました。\n特に敵を恋しい過程で、さまざまな発見がありました。\n特に興奮を仲過程で、さまざまな発見がありました。\n仲直りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仲', reading: 'なか', meaning: 'relation' },
      { word: '恋', reading: 'こい', meaning: '(romantic) love' },
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: '仲直り', reading: 'なかなおり', meaning: 'reconciliation' },
      { word: '夢', reading: 'ゆめ', meaning: 'dream' },
      { word: '興奮', reading: 'こうふん', meaning: 'excitement' },
      { word: '恋しい', reading: 'こいしい', meaning: 'yearned for' }
    ],
  },
  {
    id: '933',
    title: '恋愛の心理学',
    source: '心理学読解 (N3)',
    date: '2025-08-10',
    content:
      '親について深く掘り下げて考えてみたいと思います。\n現代社会において、親は重要なテーマとなっています。\n特に厳しさを愛する過程で、さまざまな発見がありました。\n特に気分を愛する過程で、さまざまな発見がありました。\n特に気分を愛する過程で、さまざまな発見がありました。\n性格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '愛する', reading: 'あいする', meaning: 'to love' },
      { word: '厳しさ', reading: 'きびしさ', meaning: 'severity' },
      { word: '性格', reading: 'せいかく', meaning: 'character (of a person)' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '親', reading: 'おや', meaning: 'parent' }
    ],
  },
  {
    id: '934',
    title: '嫉妬のメカニズム',
    source: '心理学読解 (N3)',
    date: '2025-09-18',
    content:
      '厳しさについて深く掘り下げて考えてみたいと思います。\n現代社会において、厳しさは重要なテーマとなっています。\n特に同級生を慰める過程で、さまざまな発見がありました。\n特に友人を諦める過程で、さまざまな発見がありました。\n特に気分を諦める過程で、さまざまな発見がありました。\n姉妹についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '厳しさ', reading: 'きびしさ', meaning: 'severity' },
      { word: '姉妹', reading: 'しまい', meaning: 'sisters' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: 'classmate' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '友人', reading: 'ゆうじん', meaning: 'friend' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' }
    ],
  },
  {
    id: '935',
    title: '脳の不思議',
    source: '心のエッセイ (N3)',
    date: '2025-05-19',
    content:
      '友人について深く掘り下げて考えてみたいと思います。\n現代社会において、友人は重要なテーマとなっています。\n特にお詫びを叱る過程で、さまざまな発見がありました。\n特に絶望を叱る過程で、さまざまな発見がありました。\n特に親戚を叱る過程で、さまざまな発見がありました。\n心についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '友人', reading: 'ゆうじん', meaning: 'friend' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '心', reading: 'こころ', meaning: 'mind' },
      { word: '親戚', reading: 'しんせき', meaning: 'relative' },
      { word: '絶望', reading: 'ぜつぼう', meaning: 'despair' },
      { word: 'お詫び', reading: 'おわび', meaning: 'apology' }
    ],
  },
  {
    id: '936',
    title: '夢の意味',
    source: '心のエッセイ (N3)',
    date: '2025-09-13',
    content:
      '両親について深く掘り下げて考えてみたいと思います。\n現代社会において、両親は重要なテーマとなっています。\n特に恋人を愛する過程で、さまざまな発見がありました。\n特に恋人を愛する過程で、さまざまな発見がありました。\n特に失望を愛する過程で、さまざまな発見がありました。\n兄弟についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '愛する', reading: 'あいする', meaning: 'to love' },
      { word: '恋人', reading: 'こいびと', meaning: 'lover' },
      { word: '失望', reading: 'しつぼう', meaning: 'disappointment' },
      { word: '兄弟', reading: 'きょうだい', meaning: 'brothers and sisters' },
      { word: '両親', reading: 'りょうしん', meaning: 'parents' }
    ],
  },
  {
    id: '937',
    title: '記憶の心理学',
    source: '心理学読解 (N3)',
    date: '2025-03-04',
    content:
      '軽蔑について深く掘り下げて考えてみたいと思います。\n現代社会において、軽蔑は重要なテーマとなっています。\n特に満足を喜ぶ過程で、さまざまな発見がありました。\n特に不満を喜ぶ過程で、さまざまな発見がありました。\n特に不満を支える過程で、さまざまな発見がありました。\n不満についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '軽蔑', reading: 'けいべつ', meaning: 'contempt' },
      { word: '満足', reading: 'まんぞく', meaning: 'satisfaction' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' }
    ],
  },
  {
    id: '938',
    title: '性格の形成',
    source: '心理学読解 (N3)',
    date: '2025-05-03',
    content:
      '心配について深く掘り下げて考えてみたいと思います。\n現代社会において、心配は重要なテーマとなっています。\n特に母を見捨てる過程で、さまざまな発見がありました。\n特に仲直りを見捨てる過程で、さまざまな発見がありました。\n特に迷惑を驚く過程で、さまざまな発見がありました。\n心配についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仲直り', reading: 'なかなおり', meaning: 'reconciliation' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' },
      { word: '迷惑', reading: 'めいわく', meaning: 'trouble' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '母', reading: 'はは', meaning: 'mother' }
    ],
  },
  {
    id: '939',
    title: 'トラウマ克服',
    source: '心のエッセイ (N3)',
    date: '2025-07-26',
    content:
      '不満について深く掘り下げて考えてみたいと思います。\n現代社会において、不満は重要なテーマとなっています。\n特に厳しさをがっかり過程で、さまざまな発見がありました。\n特に不満をがっかり過程で、さまざまな発見がありました。\n特に敵をがっかり過程で、さまざまな発見がありました。\n信用についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: '厳しさ', reading: 'きびしさ', meaning: 'severity' },
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' },
      { word: 'がっかり', reading: 'がっかり', meaning: 'to be disappointed' },
      { word: '信用', reading: 'しんよう', meaning: 'confidence' }
    ],
  },
  {
    id: '940',
    title: 'ポジティブ思考',
    source: '心理学読解 (N3)',
    date: '2025-05-16',
    content:
      '仲間について深く掘り下げて考えてみたいと思います。\n現代社会において、仲間は重要なテーマとなっています。\n特に絶望を頑張る過程で、さまざまな発見がありました。\n特に幸せを苦しむ過程で、さまざまな発見がありました。\n特に気分を思う過程で、さまざまな発見がありました。\n仲間についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '幸せ', reading: 'しあわせ', meaning: 'happiness' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '思う', reading: 'おもう', meaning: 'to think' },
      { word: '絶望', reading: 'ぜつぼう', meaning: 'despair' },
      { word: '仲間', reading: 'なかま', meaning: 'companion' }
    ],
  },
  {
    id: '941',
    title: '人間関係の心理学',
    source: '心理学読解 (N3)',
    date: '2025-12-09',
    content:
      '心配について深く掘り下げて考えてみたいと思います。\n現代社会において、心配は重要なテーマとなっています。\n特に個性を励ます過程で、さまざまな発見がありました。\n特に個性を励ます過程で、さまざまな発見がありました。\n特に信頼を励ます過程で、さまざまな発見がありました。\nお詫びについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '個性', reading: 'こせい', meaning: 'individuality' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' },
      { word: '信頼', reading: 'しんらい', meaning: 'trust (in)' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: 'お詫び', reading: 'おわび', meaning: 'apology' }
    ],
  },
  {
    id: '942',
    title: '成功の心理学',
    source: '心理学読解 (N3)',
    date: '2025-02-10',
    content:
      '気持ちについて深く掘り下げて考えてみたいと思います。\n現代社会において、気持ちは重要なテーマとなっています。\n特に気持ちを落ち込む過程で、さまざまな発見がありました。\n特に恩を願う過程で、さまざまな発見がありました。\n特に感情を願う過程で、さまざまな発見がありました。\n夫についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夫', reading: 'おっと', meaning: 'husband' },
      { word: '願う', reading: 'ねがう', meaning: 'to desire' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '気持ち', reading: 'きもち', meaning: 'feeling' },
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' },
      { word: '恩', reading: 'おん', meaning: 'favour' }
    ],
  },
  {
    id: '943',
    title: '創造性の育て方',
    source: '心理学読解 (N3)',
    date: '2025-12-10',
    content:
      '先生について深く掘り下げて考えてみたいと思います。\n現代社会において、先生は重要なテーマとなっています。\n特に喧嘩を悩む過程で、さまざまな発見がありました。\n特に同僚を疑う過程で、さまざまな発見がありました。\n特に人情を疑う過程で、さまざまな発見がありました。\n同僚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人情', reading: 'にんじょう', meaning: 'humanity' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' },
      { word: '喧嘩', reading: 'けんか', meaning: 'quarrel' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' }
    ],
  },
  {
    id: '944',
    title: '直感の科学',
    source: '心のエッセイ (N3)',
    date: '2025-02-26',
    content:
      '同級生について深く掘り下げて考えてみたいと思います。\n現代社会において、同級生は重要なテーマとなっています。\n特に関係を望む過程で、さまざまな発見がありました。\n特に娘を傷つく過程で、さまざまな発見がありました。\n特に周りを信じる過程で、さまざまな発見がありました。\n兄弟についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: '信じる', reading: 'しんじる', meaning: 'to believe' },
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '傷つく', reading: 'きずつく', meaning: 'to be wounded' },
      { word: '関係', reading: 'かんけい', meaning: 'relation' },
      { word: '娘', reading: 'むすめ', meaning: 'daughter' },
      { word: '兄弟', reading: 'きょうだい', meaning: 'brothers and sisters' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: 'classmate' }
    ],
  },
  {
    id: '945',
    title: '意思決定の心理学',
    source: '心理学読解 (N3)',
    date: '2025-06-07',
    content:
      '個性について深く掘り下げて考えてみたいと思います。\n現代社会において、個性は重要なテーマとなっています。\n特に周りをお詫び過程で、さまざまな発見がありました。\n特に感情を主人過程で、さまざまな発見がありました。\n特に愛を疑い過程で、さまざまな発見がありました。\n親についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '主人', reading: 'しゅじん', meaning: 'head (of a household)' },
      { word: '愛', reading: 'あい', meaning: 'love' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '親', reading: 'おや', meaning: 'parent' },
      { word: '疑い', reading: 'うたがい', meaning: 'doubt' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: 'お詫び', reading: 'おわび', meaning: 'apology' },
      { word: '個性', reading: 'こせい', meaning: 'individuality' }
    ],
  },
  {
    id: '946',
    title: '幸福の条件',
    source: '心理学読解 (N2)',
    date: '2025-07-28',
    content:
      '義理をめぐる議論は近年ますます活発になっています。\n本稿では、義理の現状と課題について考察します。\n一方で、夫を悲しむことの重要性も指摘されています。\n一方で、先生を困ることの重要性も指摘されています。\n一方で、嫉妬を楽しむことの重要性も指摘されています。\n以上の考察から、義理の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '義理', reading: 'ぎり', meaning: 'duty' },
      { word: '悲しむ', reading: 'かなしむ', meaning: 'to be sad' },
      { word: '嫉妬', reading: 'しっと', meaning: 'jealousy' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '夫', reading: 'おっと', meaning: 'husband' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' }
    ],
  },
  {
    id: '947',
    title: '孤独の心理学',
    source: '心理学読解 (N2)',
    date: '2025-06-25',
    content:
      '親をめぐる議論は近年ますます活発になっています。\n本稿では、親の現状と課題について考察します。\n一方で、母を先生ことの重要性も指摘されています。\n一方で、信用を恋ことの重要性も指摘されています。\n一方で、敵を幸せことの重要性も指摘されています。\n以上の考察から、幸せの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '恋', reading: 'こい', meaning: '(romantic) love' },
      { word: '親', reading: 'おや', meaning: 'parent' },
      { word: '母', reading: 'はは', meaning: 'mother' },
      { word: '幸せ', reading: 'しあわせ', meaning: 'happiness' },
      { word: '信用', reading: 'しんよう', meaning: 'confidence' },
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' }
    ],
  },
  {
    id: '948',
    title: '怒りのコントロール',
    source: '心のエッセイ (N2)',
    date: '2025-04-17',
    content:
      '彼女をめぐる議論は近年ますます活発になっています。\n本稿では、彼女の現状と課題について考察します。\n一方で、緊張を驚くことの重要性も指摘されています。\n一方で、仲を驚くことの重要性も指摘されています。\n一方で、憎しみを驚くことの重要性も指摘されています。\n以上の考察から、感情の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仲', reading: 'なか', meaning: 'relation' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '憎しみ', reading: 'にくしみ', meaning: 'hatred' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '緊張', reading: 'きんちょう', meaning: 'tension' },
      { word: '彼女', reading: 'かのじょ', meaning: 'she' }
    ],
  },
  {
    id: '949',
    title: '共感の力',
    source: '心のエッセイ (N2)',
    date: '2025-12-04',
    content:
      '後輩をめぐる議論は近年ますます活発になっています。\n本稿では、後輩の現状と課題について考察します。\n一方で、先生を感じることの重要性も指摘されています。\n一方で、主人を褒めることの重要性も指摘されています。\n一方で、妻を落ち込むことの重要性も指摘されています。\n以上の考察から、先生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'junior (at work, school, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、junior (at work, school, etc.)の現状と課題について考察します。\n一方で、teacherをto feelことの重要性も指摘されています。\n一方で、head (of a household)を褒めることの重要性も指摘されています。\n一方で、wifeを落ち込むことの重要性も指摘されています。\n以上の考察から、teacherの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '妻', reading: 'つま', meaning: 'wife' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '主人', reading: 'しゅじん', meaning: 'head (of a household)' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' }
    ],
  },
  {
    id: '950',
    title: '自信の育て方',
    source: '心理学読解 (N2)',
    date: '2025-03-24',
    content:
      '個性をめぐる議論は近年ますます活発になっています。\n本稿では、個性の現状と課題について考察します。\n一方で、仲直りを見捨てることの重要性も指摘されています。\n一方で、彼女を見捨てることの重要性も指摘されています。\n一方で、先輩を苦しむことの重要性も指摘されています。\n以上の考察から、先輩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' },
      { word: '仲直り', reading: 'なかなおり', meaning: 'reconciliation' },
      { word: '彼女', reading: 'かのじょ', meaning: 'she' },
      { word: '個性', reading: 'こせい', meaning: 'individuality' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' }
    ],
  },
  {
    id: '951',
    title: '不安との向き合い方',
    source: '心理学読解 (N2)',
    date: '2025-01-13',
    content:
      '裏切りをめぐる議論は近年ますます活発になっています。\n本稿では、裏切りの現状と課題について考察します。\n一方で、信頼を驚くことの重要性も指摘されています。\n一方で、緊張を困ることの重要性も指摘されています。\n一方で、不安を疑うことの重要性も指摘されています。\n以上の考察から、知人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '不安', reading: 'ふあん', meaning: 'anxiety' },
      { word: '知人', reading: 'ちじん', meaning: 'friend' },
      { word: '裏切り', reading: 'うらぎり', meaning: 'treachery' },
      { word: '緊張', reading: 'きんちょう', meaning: 'tension' },
      { word: '驚く', reading: 'おどろく', meaning: 'to be surprised' },
      { word: '信頼', reading: 'しんらい', meaning: 'trust (in)' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' }
    ],
  },
  {
    id: '952',
    title: '感謝の効果',
    source: '心のエッセイ (N2)',
    date: '2025-09-24',
    content:
      '生徒をめぐる議論は近年ますます活発になっています。\n本稿では、生徒の現状と課題について考察します。\n一方で、彼氏を騙すことの重要性も指摘されています。\n一方で、気持ちを裏切ることの重要性も指摘されています。\n一方で、両親を楽しむことの重要性も指摘されています。\n以上の考察から、両親の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '両親', reading: 'りょうしん', meaning: 'parents' },
      { word: '気持ち', reading: 'きもち', meaning: 'feeling' },
      { word: '生徒', reading: 'せいと', meaning: 'pupil' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '彼氏', reading: 'かれし', meaning: 'boyfriend' },
      { word: '期待', reading: 'きたい', meaning: 'expectation' },
      { word: '裏切る', reading: 'うらぎる', meaning: 'to betray' }
    ],
  },
  {
    id: '953',
    title: '恋愛の心理学',
    source: '心理学読解 (N2)',
    date: '2025-04-21',
    content:
      '気持ちをめぐる議論は近年ますます活発になっています。\n本稿では、気持ちの現状と課題について考察します。\n一方で、厳しさを叱ることの重要性も指摘されています。\n一方で、親を疑うことの重要性も指摘されています。\n一方で、厳しさを裏切ることの重要性も指摘されています。\n以上の考察から、感謝の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感謝', reading: 'かんしゃ', meaning: 'thanks' },
      { word: '親', reading: 'おや', meaning: 'parent' },
      { word: '裏切る', reading: 'うらぎる', meaning: 'to betray' },
      { word: '厳しさ', reading: 'きびしさ', meaning: 'severity' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '気持ち', reading: 'きもち', meaning: 'feeling' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' }
    ],
  },
  {
    id: '954',
    title: '嫉妬のメカニズム',
    source: '心理学読解 (N2)',
    date: '2025-02-15',
    content:
      '息子をめぐる議論は近年ますます活発になっています。\n本稿では、息子の現状と課題について考察します。\n一方で、両親をがっかりことの重要性も指摘されています。\n一方で、敵を悩むことの重要性も指摘されています。\n一方で、敵を疑うことの重要性も指摘されています。\n以上の考察から、敵の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '息子', reading: 'むすこ', meaning: 'son' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' },
      { word: '両親', reading: 'りょうしん', meaning: 'parents' },
      { word: '親', reading: 'おや', meaning: 'parent' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: 'がっかり', reading: 'がっかり', meaning: 'to be disappointed' }
    ],
  },
  {
    id: '955',
    title: '脳の不思議',
    source: '心のエッセイ (N2)',
    date: '2025-06-19',
    content:
      '生徒をめぐる議論は近年ますます活発になっています。\n本稿では、生徒の現状と課題について考察します。\n一方で、感情を悩むことの重要性も指摘されています。\n一方で、喧嘩を感じることの重要性も指摘されています。\n一方で、謝罪を叱ることの重要性も指摘されています。\n以上の考察から、彼氏の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '生徒', reading: 'せいと', meaning: 'pupil' },
      { word: '謝罪', reading: 'しゃざい', meaning: 'apology' },
      { word: '喧嘩', reading: 'けんか', meaning: 'quarrel' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' },
      { word: '彼氏', reading: 'かれし', meaning: 'boyfriend' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' }
    ],
  },
  {
    id: '956',
    title: '夢の意味',
    source: '心のエッセイ (N2)',
    date: '2025-01-18',
    content:
      '信用をめぐる議論は近年ますます活発になっています。\n本稿では、信用の現状と課題について考察します。\n一方で、恋人を騙すことの重要性も指摘されています。\n一方で、信用を諦めることの重要性も指摘されています。\n一方で、喧嘩を助けることの重要性も指摘されています。\n以上の考察から、信用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '信用', reading: 'しんよう', meaning: 'confidence' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '恋人', reading: 'こいびと', meaning: 'lover' },
      { word: '喧嘩', reading: 'けんか', meaning: 'quarrel' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' }
    ],
  },
  {
    id: '957',
    title: '記憶の心理学',
    source: '心理学読解 (N2)',
    date: '2025-11-28',
    content:
      '近所をめぐる議論は近年ますます活発になっています。\n本稿では、近所の現状と課題について考察します。\n一方で、恋を決めることの重要性も指摘されています。\n一方で、感謝を決めることの重要性も指摘されています。\n一方で、感謝を諦めることの重要性も指摘されています。\n以上の考察から、厳しさの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '厳しさ', reading: 'きびしさ', meaning: 'severity' },
      { word: '近所', reading: 'きんじょ', meaning: 'neighbourhood' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '諦める', reading: 'あきらめる', meaning: 'to give up' },
      { word: '恋', reading: 'こい', meaning: '(romantic) love' },
      { word: '感謝', reading: 'かんしゃ', meaning: 'thanks' }
    ],
  },
  {
    id: '958',
    title: '性格の形成',
    source: '心理学読解 (N2)',
    date: '2025-08-24',
    content:
      '兄弟をめぐる議論は近年ますます活発になっています。\n本稿では、兄弟の現状と課題について考察します。\n一方で、味方を考えることの重要性も指摘されています。\n一方で、お礼を愛することの重要性も指摘されています。\n一方で、姉妹を欺くことの重要性も指摘されています。\n以上の考察から、感情の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'brothers and sistersをめぐる議論は近年ますます活発になっています。\n本稿では、brothers and sistersの現状と課題について考察します。\n一方で、friendを考えることの重要性も指摘されています。\n一方で、お礼をto loveことの重要性も指摘されています。\n一方で、姉妹をto deceiveことの重要性も指摘されています。\n以上の考察から、emotionの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '兄弟', reading: 'きょうだい', meaning: 'brothers and sisters' },
      { word: '味方', reading: 'みかた', meaning: 'friend' },
      { word: '欺く', reading: 'あざむく', meaning: 'to deceive' },
      { word: '愛する', reading: 'あいする', meaning: 'to love' },
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: 'お礼', reading: 'おれい', meaning: 'thanks' },
      { word: '姉妹', reading: 'しまい', meaning: 'sisters' }
    ],
  },
  {
    id: '959',
    title: 'トラウマ克服',
    source: '心のエッセイ (N2)',
    date: '2025-02-27',
    content:
      '親友をめぐる議論は近年ますます活発になっています。\n本稿では、親友の現状と課題について考察します。\n一方で、憧れを励ますことの重要性も指摘されています。\n一方で、先生を励ますことの重要性も指摘されています。\n一方で、恩を望むことの重要性も指摘されています。\n以上の考察から、両親の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '両親', reading: 'りょうしん', meaning: 'parents' },
      { word: '先生', reading: 'せんせい', meaning: 'teacher' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '憧れ', reading: 'あこがれ', meaning: 'yearning' },
      { word: '恩', reading: 'おん', meaning: 'favour' },
      { word: '親友', reading: 'しんゆう', meaning: 'close friend' }
    ],
  },
  {
    id: '960',
    title: 'ポジティブ思考',
    source: '心のエッセイ (N2)',
    date: '2025-02-25',
    content:
      '主人をめぐる議論は近年ますます活発になっています。\n本稿では、主人の現状と課題について考察します。\n一方で、隣人を感じることの重要性も指摘されています。\n一方で、願いを感じることの重要性も指摘されています。\n一方で、気性を認めることの重要性も指摘されています。\n以上の考察から、失望の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'head (of a household)をめぐる議論は近年ますます活発になっています。\n本稿では、head (of a household)の現状と課題について考察します。\n一方で、隣人を感じることの重要性も指摘されています。\n一方で、desireを感じることの重要性も指摘されています。\n一方で、dispositionをto recognizeことの重要性も指摘されています。\n以上の考察から、失望の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '気性', reading: 'きしょう', meaning: 'disposition' },
      { word: '願い', reading: 'ねがい', meaning: 'desire' },
      { word: '認める', reading: 'みとめる', meaning: 'to recognize' },
      { word: '主人', reading: 'しゅじん', meaning: 'head (of a household)' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '失望', reading: 'しつぼう', meaning: 'disappointment' },
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' }
    ],
  },
  {
    id: '961',
    title: '人間関係の心理学',
    source: '心理学読解 (N2)',
    date: '2025-02-08',
    content:
      '愛情をめぐる議論は近年ますます活発になっています。\n本稿では、愛情の現状と課題について考察します。\n一方で、人間を落ち込むことの重要性も指摘されています。\n一方で、不満をがっかりことの重要性も指摘されています。\n一方で、安心を落ち込むことの重要性も指摘されています。\n以上の考察から、心配の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' },
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' },
      { word: '安心', reading: 'あんしん', meaning: 'peace of mind' },
      { word: '人間', reading: 'にんげん', meaning: 'human being' },
      { word: '愛情', reading: 'あいじょう', meaning: 'love' },
      { word: 'がっかり', reading: 'がっかり', meaning: 'to be disappointed' }
    ],
  },
  {
    id: '962',
    title: '成功の心理学',
    source: '心のエッセイ (N2)',
    date: '2025-01-18',
    content:
      '幸せをめぐる議論は近年ますます活発になっています。\n本稿では、幸せの現状と課題について考察します。\n一方で、気持ちを騙すことの重要性も指摘されています。\n一方で、隣人を騙すことの重要性も指摘されています。\n一方で、近所を騙すことの重要性も指摘されています。\n以上の考察から、知人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' },
      { word: '幸せ', reading: 'しあわせ', meaning: 'happiness' },
      { word: '知人', reading: 'ちじん', meaning: 'friend' },
      { word: '気持ち', reading: 'きもち', meaning: 'feeling' },
      { word: '近所', reading: 'きんじょ', meaning: 'neighbourhood' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' }
    ],
  },
  {
    id: '963',
    title: '創造性の育て方',
    source: '心理学読解 (N2)',
    date: '2025-09-12',
    content:
      '満足をめぐる議論は近年ますます活発になっています。\n本稿では、満足の現状と課題について考察します。\n一方で、満足を悲しむことの重要性も指摘されています。\n一方で、感情を楽しむことの重要性も指摘されています。\n一方で、友達を楽しむことの重要性も指摘されています。\n以上の考察から、知人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: '知人', reading: 'ちじん', meaning: 'friend' },
      { word: '悲しむ', reading: 'かなしむ', meaning: 'to be sad' },
      { word: '満足', reading: 'まんぞく', meaning: 'satisfaction' }
    ],
  },
  {
    id: '964',
    title: '直感の科学',
    source: '心のエッセイ (N2)',
    date: '2025-09-16',
    content:
      '愛をめぐる議論は近年ますます活発になっています。\n本稿では、愛の現状と課題について考察します。\n一方で、気分を感じることの重要性も指摘されています。\n一方で、心配を詫びることの重要性も指摘されています。\n一方で、祖父を詫びることの重要性も指摘されています。\n以上の考察から、息子の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '祖父', reading: 'そふ', meaning: 'grandfather' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '息子', reading: 'むすこ', meaning: 'son' },
      { word: '愛', reading: 'あい', meaning: 'love' }
    ],
  },
  {
    id: '965',
    title: '意思決定の心理学',
    source: '心理学読解 (N2)',
    date: '2025-01-27',
    content:
      '親友をめぐる議論は近年ますます活発になっています。\n本稿では、親友の現状と課題について考察します。\n一方で、妻を裏切ることの重要性も指摘されています。\n一方で、隣人を慰めることの重要性も指摘されています。\n一方で、同級生を楽しむことの重要性も指摘されています。\n以上の考察から、同僚の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '親友', reading: 'しんゆう', meaning: 'close friend' },
      { word: '裏切る', reading: 'うらぎる', meaning: 'to betray' },
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: 'classmate' },
      { word: '妻', reading: 'つま', meaning: 'wife' },
      { word: '同僚', reading: 'どうりょう', meaning: 'coworker' },
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' }
    ],
  },
  {
    id: '966',
    title: '幸福の条件',
    source: '心理学読解 (N1)',
    date: '2025-04-19',
    content:
      '恋人をめぐる議論は近年ますます活発になっています。\n本稿では、恋人の現状と課題について考察します。\n一方で、仲直りを憎むことの重要性も指摘されています。\n一方で、後悔を励ますことの重要性も指摘されています。\n一方で、裏切りを励ますことの重要性も指摘されています。\n以上の考察から、人情の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '裏切り', reading: 'うらぎり', meaning: 'treachery' },
      { word: '人情', reading: 'にんじょう', meaning: 'humanity' },
      { word: '恋人', reading: 'こいびと', meaning: 'lover' },
      { word: '仲直り', reading: 'なかなおり', meaning: 'reconciliation' },
      { word: '後悔', reading: 'こうかい', meaning: 'regret' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' }
    ],
  },
  {
    id: '967',
    title: '孤独の心理学',
    source: '心理学読解 (N1)',
    date: '2025-06-27',
    content:
      '隣人をめぐる議論は近年ますます活発になっています。\n本稿では、隣人の現状と課題について考察します。\n一方で、喧嘩を頼ることの重要性も指摘されています。\n一方で、喧嘩を恋することの重要性も指摘されています。\n一方で、隣人を恋することの重要性も指摘されています。\n以上の考察から、隣人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' },
      { word: '喧嘩', reading: 'けんか', meaning: 'quarrel' },
      { word: '頼る', reading: 'たよる', meaning: 'to rely on' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' },
      { word: '期待', reading: 'きたい', meaning: 'expectation' }
    ],
  },
  {
    id: '968',
    title: '怒りのコントロール',
    source: '心のエッセイ (N1)',
    date: '2025-04-17',
    content:
      '気分をめぐる議論は近年ますます活発になっています。\n本稿では、気分の現状と課題について考察します。\n一方で、願いを落ち込むことの重要性も指摘されています。\n一方で、敵を恋することの重要性も指摘されています。\n一方で、謝罪を落ち込むことの重要性も指摘されています。\n以上の考察から、敵の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: '謝罪', reading: 'しゃざい', meaning: 'apology' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '願い', reading: 'ねがい', meaning: 'desire' },
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' }
    ],
  },
  {
    id: '969',
    title: '共感の力',
    source: '心のエッセイ (N1)',
    date: '2025-03-14',
    content:
      '親戚をめぐる議論は近年ますます活発になっています。\n本稿では、親戚の現状と課題について考察します。\n一方で、夢を頑張ることの重要性も指摘されています。\n一方で、感情を支えることの重要性も指摘されています。\n一方で、幸せを思うことの重要性も指摘されています。\n以上の考察から、夢の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感情', reading: 'かんじょう', meaning: 'emotion' },
      { word: '思う', reading: 'おもう', meaning: 'to think' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' },
      { word: '幸せ', reading: 'しあわせ', meaning: 'happiness' },
      { word: '頑張る', reading: 'がんばる', meaning: 'to persevere' },
      { word: '親戚', reading: 'しんせき', meaning: 'relative' },
      { word: '夢', reading: 'ゆめ', meaning: 'dream' }
    ],
  },
  {
    id: '970',
    title: '自信の育て方',
    source: '心理学読解 (N1)',
    date: '2025-03-17',
    content:
      'リラックスをめぐる議論は近年ますます活発になっています。\n本稿では、リラックスの現状と課題について考察します。\n一方で、母をがっかりことの重要性も指摘されています。\n一方で、個性をがっかりことの重要性も指摘されています。\n一方で、気分を疑うことの重要性も指摘されています。\n以上の考察から、友達の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '母', reading: 'はは', meaning: 'mother' },
      { word: '個性', reading: 'こせい', meaning: 'individuality' },
      { word: '友達', reading: 'ともだち', meaning: 'friend' },
      { word: 'がっかり', reading: 'がっかり', meaning: 'to be disappointed' },
      { word: 'リラックス', reading: 'リラックス', meaning: 'relaxing' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' }
    ],
  },
  {
    id: '971',
    title: '不安との向き合い方',
    source: '心のエッセイ (N1)',
    date: '2025-02-28',
    content:
      '気性をめぐる議論は近年ますます活発になっています。\n本稿では、気性の現状と課題について考察します。\n一方で、孫を見捨てることの重要性も指摘されています。\n一方で、孫を信じることの重要性も指摘されています。\n一方で、気性を疑うことの重要性も指摘されています。\n以上の考察から、知人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '孫', reading: 'まご', meaning: 'grandchild' },
      { word: '知人', reading: 'ちじん', meaning: 'friend' },
      { word: '信じる', reading: 'しんじる', meaning: 'to believe' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '気性', reading: 'きしょう', meaning: 'disposition' }
    ],
  },
  {
    id: '972',
    title: '感謝の効果',
    source: '心のエッセイ (N1)',
    date: '2025-08-04',
    content:
      '個性をめぐる議論は近年ますます活発になっています。\n本稿では、個性の現状と課題について考察します。\n一方で、彼女を騙すことの重要性も指摘されています。\n一方で、友人を考えることの重要性も指摘されています。\n一方で、彼女を思うことの重要性も指摘されています。\n以上の考察から、人間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '思う', reading: 'おもう', meaning: 'to think' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '彼女', reading: 'かのじょ', meaning: 'she' },
      { word: '友人', reading: 'ゆうじん', meaning: 'friend' },
      { word: '人間', reading: 'にんげん', meaning: 'human being' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '個性', reading: 'こせい', meaning: 'individuality' }
    ],
  },
  {
    id: '973',
    title: '恋愛の心理学',
    source: '心のエッセイ (N1)',
    date: '2025-11-12',
    content:
      '憧れをめぐる議論は近年ますます活発になっています。\n本稿では、憧れの現状と課題について考察します。\n一方で、信頼を騙すことの重要性も指摘されています。\n一方で、失望を悲しむことの重要性も指摘されています。\n一方で、不安を悲しむことの重要性も指摘されています。\n以上の考察から、失望の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '憧れ', reading: 'あこがれ', meaning: 'yearning' },
      { word: '失望', reading: 'しつぼう', meaning: 'disappointment' },
      { word: '不安', reading: 'ふあん', meaning: 'anxiety' },
      { word: '悲しむ', reading: 'かなしむ', meaning: 'to be sad' },
      { word: '信頼', reading: 'しんらい', meaning: 'trust (in)' }
    ],
  },
  {
    id: '974',
    title: '嫉妬のメカニズム',
    source: '心理学読解 (N1)',
    date: '2025-08-18',
    content:
      '裏切りをめぐる議論は近年ますます活発になっています。\n本稿では、裏切りの現状と課題について考察します。\n一方で、祖母を愛することの重要性も指摘されています。\n一方で、祖母を傷つくことの重要性も指摘されています。\n一方で、主人を謝ることの重要性も指摘されています。\n以上の考察から、主人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '主人', reading: 'しゅじん', meaning: 'head (of a household)' },
      { word: '祖母', reading: 'そぼ', meaning: 'grandmother' },
      { word: '裏切り', reading: 'うらぎり', meaning: 'treachery' },
      { word: '謝る', reading: 'あやまる', meaning: 'to apologize (apologise)' },
      { word: '愛する', reading: 'あいする', meaning: 'to love' },
      { word: '傷つく', reading: 'きずつく', meaning: 'to be wounded' }
    ],
  },
  {
    id: '975',
    title: '脳の不思議',
    source: '心のエッセイ (N1)',
    date: '2025-10-23',
    content:
      '絶望をめぐる議論は近年ますます活発になっています。\n本稿では、絶望の現状と課題について考察します。\n一方で、失望を恋することの重要性も指摘されています。\n一方で、憧れを欺くことの重要性も指摘されています。\n一方で、失望を考えることの重要性も指摘されています。\n以上の考察から、心配の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '憧れ', reading: 'あこがれ', meaning: 'yearning' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' },
      { word: '絶望', reading: 'ぜつぼう', meaning: 'despair' },
      { word: '失望', reading: 'しつぼう', meaning: 'disappointment' },
      { word: '考える', reading: 'かんがえる', meaning: 'to think (about, of)' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' },
      { word: '欺く', reading: 'あざむく', meaning: 'to deceive' }
    ],
  },
  {
    id: '976',
    title: '夢の意味',
    source: '心理学読解 (N1)',
    date: '2025-07-03',
    content:
      '隣人をめぐる議論は近年ますます活発になっています。\n本稿では、隣人の現状と課題について考察します。\n一方で、心を悩むことの重要性も指摘されています。\n一方で、性格を慰めることの重要性も指摘されています。\n一方で、気持ちを慰めることの重要性も指摘されています。\n以上の考察から、同級生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' },
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' },
      { word: '気持ち', reading: 'きもち', meaning: 'feeling' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: 'classmate' },
      { word: '心', reading: 'こころ', meaning: 'mind' },
      { word: '性格', reading: 'せいかく', meaning: 'character (of a person)' }
    ],
  },
  {
    id: '977',
    title: '記憶の心理学',
    source: '心理学読解 (N1)',
    date: '2025-09-12',
    content:
      '姉妹をめぐる議論は近年ますます活発になっています。\n本稿では、姉妹の現状と課題について考察します。\n一方で、気性を見捨てることの重要性も指摘されています。\n一方で、孫を疑うことの重要性も指摘されています。\n一方で、彼氏を励ますことの重要性も指摘されています。\n以上の考察から、父の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '気性', reading: 'きしょう', meaning: 'disposition' },
      { word: '彼氏', reading: 'かれし', meaning: 'boyfriend' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '姉妹', reading: 'しまい', meaning: 'sisters' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '父', reading: 'ちち', meaning: 'father' },
      { word: '孫', reading: 'まご', meaning: 'grandchild' }
    ],
  },
  {
    id: '978',
    title: '性格の形成',
    source: '心理学読解 (N1)',
    date: '2025-08-16',
    content:
      '心配をめぐる議論は近年ますます活発になっています。\n本稿では、心配の現状と課題について考察します。\n一方で、希望を落ち込むことの重要性も指摘されています。\n一方で、謝罪を感じることの重要性も指摘されています。\n一方で、心配を疑うことの重要性も指摘されています。\n以上の考察から、仲の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '期待', reading: 'きたい', meaning: 'expectation' },
      { word: '謝罪', reading: 'しゃざい', meaning: 'apology' },
      { word: '希望', reading: 'きぼう', meaning: 'hope' },
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' },
      { word: '感じる', reading: 'かんじる', meaning: 'to feel' },
      { word: '仲', reading: 'なか', meaning: 'relation' },
      { word: '心配', reading: 'しんぱい', meaning: 'worry' }
    ],
  },
  {
    id: '979',
    title: 'トラウマ克服',
    source: '心理学読解 (N1)',
    date: '2025-05-10',
    content:
      '迷惑をめぐる議論は近年ますます活発になっています。\n本稿では、迷惑の現状と課題について考察します。\n一方で、迷惑を頼ることの重要性も指摘されています。\n一方で、興奮を頼ることの重要性も指摘されています。\n一方で、不満をがっかりことの重要性も指摘されています。\n以上の考察から、不満の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' },
      { word: '迷惑', reading: 'めいわく', meaning: 'trouble' },
      { word: '興奮', reading: 'こうふん', meaning: 'excitement' },
      { word: '頼る', reading: 'たよる', meaning: 'to rely on' },
      { word: 'がっかり', reading: 'がっかり', meaning: 'to be disappointed' }
    ],
  },
  {
    id: '980',
    title: 'ポジティブ思考',
    source: '心理学読解 (N1)',
    date: '2025-09-07',
    content:
      '祖父をめぐる議論は近年ますます活発になっています。\n本稿では、祖父の現状と課題について考察します。\n一方で、お礼を落ち込むことの重要性も指摘されています。\n一方で、お礼を落ち込むことの重要性も指摘されています。\n一方で、娘を疑うことの重要性も指摘されています。\n以上の考察から、不安の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祖父', reading: 'そふ', meaning: 'grandfather' },
      { word: '落ち込む', reading: 'おちこむ', meaning: 'to feel down' },
      { word: '不安', reading: 'ふあん', meaning: 'anxiety' },
      { word: 'お礼', reading: 'おれい', meaning: 'thanks' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '娘', reading: 'むすめ', meaning: 'daughter' }
    ],
  },
  {
    id: '981',
    title: '人間関係の心理学',
    source: '心のエッセイ (N1)',
    date: '2025-02-08',
    content:
      '敵をめぐる議論は近年ますます活発になっています。\n本稿では、敵の現状と課題について考察します。\n一方で、仲間を思うことの重要性も指摘されています。\n一方で、人情を欺くことの重要性も指摘されています。\n一方で、同級生を褒めることの重要性も指摘されています。\n以上の考察から、不満の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '思う', reading: 'おもう', meaning: 'to think' },
      { word: '敵', reading: 'てき', meaning: 'opponent' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: 'classmate' },
      { word: '欺く', reading: 'あざむく', meaning: 'to deceive' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '人情', reading: 'にんじょう', meaning: 'humanity' },
      { word: '仲間', reading: 'なかま', meaning: 'companion' },
      { word: '不満', reading: 'ふまん', meaning: 'dissatisfaction' }
    ],
  },
  {
    id: '982',
    title: '成功の心理学',
    source: '心理学読解 (N1)',
    date: '2025-02-17',
    content:
      '仲をめぐる議論は近年ますます活発になっています。\n本稿では、仲の現状と課題について考察します。\n一方で、嫉妬を憎むことの重要性も指摘されています。\n一方で、娘を憎むことの重要性も指摘されています。\n一方で、気性を憎むことの重要性も指摘されています。\n以上の考察から、姉妹の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気性', reading: 'きしょう', meaning: 'disposition' },
      { word: '仲', reading: 'なか', meaning: 'relation' },
      { word: '姉妹', reading: 'しまい', meaning: 'sisters' },
      { word: '嫉妬', reading: 'しっと', meaning: 'jealousy' },
      { word: '娘', reading: 'むすめ', meaning: 'daughter' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' }
    ],
  },
  {
    id: '983',
    title: '創造性の育て方',
    source: '心理学読解 (N1)',
    date: '2025-02-03',
    content:
      '親友をめぐる議論は近年ますます活発になっています。\n本稿では、親友の現状と課題について考察します。\n一方で、親友を疑うことの重要性も指摘されています。\n一方で、隣人を見捨てることの重要性も指摘されています。\n一方で、嫉妬を決めることの重要性も指摘されています。\n以上の考察から、隣人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '嫉妬', reading: 'しっと', meaning: 'jealousy' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '親友', reading: 'しんゆう', meaning: 'close friend' },
      { word: '隣人', reading: 'りんじん', meaning: 'neighbour' }
    ],
  },
  {
    id: '984',
    title: '直感の科学',
    source: '心理学読解 (N1)',
    date: '2025-09-09',
    content:
      '父をめぐる議論は近年ますます活発になっています。\n本稿では、父の現状と課題について考察します。\n一方で、お詫びを助けることの重要性も指摘されています。\n一方で、孫を困ることの重要性も指摘されています。\n一方で、気分を褒めることの重要性も指摘されています。\n以上の考察から、父の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '孫', reading: 'まご', meaning: 'grandchild' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '気分', reading: 'きぶん', meaning: 'feeling' },
      { word: '父', reading: 'ちち', meaning: 'father' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' },
      { word: 'お詫び', reading: 'おわび', meaning: 'apology' }
    ],
  },
  {
    id: '985',
    title: '意思決定の心理学',
    source: '心理学読解 (N1)',
    date: '2025-01-21',
    content:
      '後輩をめぐる議論は近年ますます活発になっています。\n本稿では、後輩の現状と課題について考察します。\n一方で、親友を楽しむことの重要性も指摘されています。\n一方で、後輩を認めることの重要性も指摘されています。\n一方で、後輩を褒めることの重要性も指摘されています。\n以上の考察から、両親の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'junior (at work, school, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、junior (at work, school, etc.)の現状と課題について考察します。\n一方で、close friendをto enjoyことの重要性も指摘されています。\n一方で、junior (at work, school, etc.)をto recognizeことの重要性も指摘されています。\n一方で、junior (at work, school, etc.)を褒めることの重要性も指摘されています。\n以上の考察から、parentsの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '親友', reading: 'しんゆう', meaning: 'close friend' },
      { word: '楽しむ', reading: 'たのしむ', meaning: 'to enjoy' },
      { word: '両親', reading: 'りょうしん', meaning: 'parents' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '認める', reading: 'みとめる', meaning: 'to recognize' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '986',
    title: '戦国時代',
    source: '時代エッセイ (N2)',
    date: '2025-02-21',
    content:
      '建築をめぐる議論は近年ますます活発になっています。\n本稿では、建築の現状と課題について考察します。\n一方で、記録を発展ことの重要性も指摘されています。\n一方で、近代を法律ことの重要性も指摘されています。\n一方で、遺産を記録ことの重要性も指摘されています。\n以上の考察から、発掘の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '法律', reading: 'ほうりつ', meaning: 'law' },
      { word: '建築', reading: 'けんちく', meaning: 'construction' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '記録', reading: 'きろく', meaning: 'record' },
      { word: '発掘', reading: 'はっくつ', meaning: 'excavation' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' }
    ],
  },
  {
    id: '987',
    title: '江戸の暮らし',
    source: '時代エッセイ (N2)',
    date: '2025-03-19',
    content:
      '発掘をめぐる議論は近年ますます活発になっています。\n本稿では、発掘の現状と課題について考察します。\n一方で、事件を伝わることの重要性も指摘されています。\n一方で、近世を伝わることの重要性も指摘されています。\n一方で、記念碑を起こることの重要性も指摘されています。\n以上の考察から、学習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '発掘', reading: 'はっくつ', meaning: 'excavation' },
      { word: '記念碑', reading: 'きねんひ', meaning: 'commemorative plaque (usu. on a stone)' },
      { word: '事件', reading: 'じけん', meaning: 'event' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' }
    ],
  },
  {
    id: '988',
    title: '明治維新',
    source: '時代エッセイ (N2)',
    date: '2025-01-11',
    content:
      '記録をめぐる議論は近年ますます活発になっています。\n本稿では、記録の現状と課題について考察します。\n一方で、建築を忘れることの重要性も指摘されています。\n一方で、博物館を忘れることの重要性も指摘されています。\n一方で、遺産を壊すことの重要性も指摘されています。\n以上の考察から、衰退の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '建築', reading: 'けんちく', meaning: 'construction' },
      { word: '記録', reading: 'きろく', meaning: 'record' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '衰退', reading: 'すいたい', meaning: 'decline' }
    ],
  },
  {
    id: '989',
    title: '古墳時代',
    source: '歴史読解 (N2)',
    date: '2025-08-17',
    content:
      '革命をめぐる議論は近年ますます活発になっています。\n本稿では、革命の現状と課題について考察します。\n一方で、神話を革命ことの重要性も指摘されています。\n一方で、遺産を革命ことの重要性も指摘されています。\n一方で、変革を神話ことの重要性も指摘されています。\n以上の考察から、記念碑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変革', reading: 'へんかく', meaning: 'change' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '神話', reading: 'しんわ', meaning: 'myth' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '革命', reading: 'かくめい', meaning: 'revolution' },
      { word: '記念碑', reading: 'きねんひ', meaning: 'commemorative plaque (usu. on a stone)' }
    ],
  },
  {
    id: '990',
    title: '平安文化',
    source: '時代エッセイ (N2)',
    date: '2025-05-24',
    content:
      '改革をめぐる議論は近年ますます活発になっています。\n本稿では、改革の現状と課題について考察します。\n一方で、中世を近代ことの重要性も指摘されています。\n一方で、研究を発展ことの重要性も指摘されています。\n一方で、近代を結果ことの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '改革', reading: 'かいかく', meaning: 'reform' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '結果', reading: 'けっか', meaning: 'result' }
    ],
  },
  {
    id: '991',
    title: '南北朝時代',
    source: '歴史読解 (N2)',
    date: '2025-05-02',
    content:
      '維持をめぐる議論は近年ますます活発になっています。\n本稿では、維持の現状と課題について考察します。\n一方で、展示を変わることの重要性も指摘されています。\n一方で、遺跡を終えることの重要性も指摘されています。\n一方で、武士を学ぶことの重要性も指摘されています。\n以上の考察から、芸術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '終える', reading: 'おえる', meaning: 'to finish' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '武士', reading: 'ぶし', meaning: 'samurai' },
      { word: '維持', reading: 'いじ', meaning: 'maintenance' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '展示', reading: 'てんじ', meaning: 'exhibition' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' }
    ],
  },
  {
    id: '992',
    title: '日清戦争',
    source: '時代エッセイ (N2)',
    date: '2025-02-05',
    content:
      '経済をめぐる議論は近年ますます活発になっています。\n本稿では、経済の現状と課題について考察します。\n一方で、商人を始まることの重要性も指摘されています。\n一方で、経済を始まることの重要性も指摘されています。\n一方で、復興を終わることの重要性も指摘されています。\n以上の考察から、復興の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '復興', reading: 'ふっこう', meaning: 'revival' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '終わる', reading: 'おわる', meaning: 'to end' },
      { word: '始まる', reading: 'はじまる', meaning: 'to begin' }
    ],
  },
  {
    id: '993',
    title: '高度経済成長',
    source: '歴史読解 (N2)',
    date: '2025-10-06',
    content:
      '参考をめぐる議論は近年ますます活発になっています。\n本稿では、参考の現状と課題について考察します。\n一方で、発見を伝わることの重要性も指摘されています。\n一方で、資料を建てることの重要性も指摘されています。\n一方で、発見を知ることの重要性も指摘されています。\n以上の考察から、芸術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '発見', reading: 'はっけん', meaning: 'discovery' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '参考', reading: 'さんこう', meaning: 'reference' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' }
    ],
  },
  {
    id: '994',
    title: '縄文時代',
    source: '歴史読解 (N2)',
    date: '2025-04-13',
    content:
      '偉人をめぐる議論は近年ますます活発になっています。\n本稿では、偉人の現状と課題について考察します。\n一方で、参考を失うことの重要性も指摘されています。\n一方で、博物館を作ることの重要性も指摘されています。\n一方で、近世を失うことの重要性も指摘されています。\n以上の考察から、芸術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '参考', reading: 'さんこう', meaning: 'reference' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' }
    ],
  },
  {
    id: '995',
    title: '弥生時代',
    source: '時代エッセイ (N2)',
    date: '2025-02-02',
    content:
      '近世をめぐる議論は近年ますます活発になっています。\n本稿では、近世の現状と課題について考察します。\n一方で、歴史を覚えることの重要性も指摘されています。\n一方で、職人を壊すことの重要性も指摘されています。\n一方で、歴史を壊すことの重要性も指摘されています。\n以上の考察から、石碑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '石碑', reading: 'せきひ', meaning: 'stone monument' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '職人', reading: 'しょくにん', meaning: 'craftsman' }
    ],
  },
  {
    id: '996',
    title: '鎌倉幕府',
    source: '歴史読解 (N2)',
    date: '2025-09-13',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、政治家を建てることの重要性も指摘されています。\n一方で、伝説を建てることの重要性も指摘されています。\n一方で、改革を建てることの重要性も指摘されています。\n以上の考察から、英雄の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝説', reading: 'でんせつ', meaning: 'legend' },
      { word: '英雄', reading: 'えいゆう', meaning: 'hero' },
      { word: '発展', reading: 'はってん', meaning: 'development' },
      { word: '政治家', reading: 'せいじか', meaning: 'politician' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '改革', reading: 'かいかく', meaning: 'reform' }
    ],
  },
  {
    id: '997',
    title: '室町文化',
    source: '時代エッセイ (N2)',
    date: '2025-10-08',
    content:
      '文化をめぐる議論は近年ますます活発になっています。\n本稿では、文化の現状と課題について考察します。\n一方で、革命を作ることの重要性も指摘されています。\n一方で、破壊を作ることの重要性も指摘されています。\n一方で、事件を起こることの重要性も指摘されています。\n以上の考察から、天皇の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '革命', reading: 'かくめい', meaning: 'revolution' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '天皇', reading: 'てんのう', meaning: 'Emperor of Japan' },
      { word: '事件', reading: 'じけん', meaning: 'event' },
      { word: '作る', reading: 'つくる', meaning: 'to make' },
      { word: '破壊', reading: 'はかい', meaning: 'destruction' }
    ],
  },
  {
    id: '998',
    title: '戦後の復興',
    source: '歴史読解 (N2)',
    date: '2025-10-04',
    content:
      '展示をめぐる議論は近年ますます活発になっています。\n本稿では、展示の現状と課題について考察します。\n一方で、近代を変わることの重要性も指摘されています。\n一方で、伝説を起こることの重要性も指摘されています。\n一方で、伝説を起こすことの重要性も指摘されています。\n以上の考察から、出来事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '展示', reading: 'てんじ', meaning: 'exhibition' },
      { word: '出来事', reading: 'できごと', meaning: 'occurrence' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '伝説', reading: 'でんせつ', meaning: 'legend' },
      { word: '起こす', reading: 'おこす', meaning: 'to raise' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '999',
    title: '大正ロマン',
    source: '時代エッセイ (N2)',
    date: '2025-05-23',
    content:
      '大名をめぐる議論は近年ますます活発になっています。\n本稿では、大名の現状と課題について考察します。\n一方で、近世を築くことの重要性も指摘されています。\n一方で、記録を燃やすことの重要性も指摘されています。\n一方で、大名を築くことの重要性も指摘されています。\n以上の考察から、記録の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '築く', reading: 'きずく', meaning: 'to build' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '大名', reading: 'だいみょう', meaning: 'daimyo (Japanese feudal lord)' },
      { word: '記録', reading: 'きろく', meaning: 'record' }
    ],
  },
  {
    id: '1000',
    title: '昭和の生活',
    source: '時代エッセイ (N2)',
    date: '2025-12-22',
    content:
      '時代をめぐる議論は近年ますます活発になっています。\n本稿では、時代の現状と課題について考察します。\n一方で、管理を知ることの重要性も指摘されています。\n一方で、現代を終わることの重要性も指摘されています。\n一方で、出来事を変わることの重要性も指摘されています。\n以上の考察から、将軍の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出来事', reading: 'できごと', meaning: 'occurrence' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '管理', reading: 'かんり', meaning: 'control' },
      { word: '将軍', reading: 'しょうぐん', meaning: 'general' },
      { word: '時代', reading: 'じだい', meaning: 'period' },
      { word: '終わる', reading: 'おわる', meaning: 'to end' }
    ],
  },
  {
    id: '1001',
    title: '太平洋戦争',
    source: '歴史読解 (N2)',
    date: '2025-08-02',
    content:
      '現代をめぐる議論は近年ますます活発になっています。\n本稿では、現代の現状と課題について考察します。\n一方で、復興を続くことの重要性も指摘されています。\n一方で、博物館を終えることの重要性も指摘されています。\n一方で、資料を続くことの重要性も指摘されています。\n以上の考察から、教訓の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '復興', reading: 'ふっこう', meaning: 'revival' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '終える', reading: 'おえる', meaning: 'to finish' },
      { word: '教訓', reading: 'きょうくん', meaning: 'lesson' },
      { word: '続く', reading: 'つづく', meaning: 'to continue' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' }
    ],
  },
  {
    id: '1002',
    title: '律令制度',
    source: '歴史読解 (N2)',
    date: '2025-06-27',
    content:
      '古代をめぐる議論は近年ますます活発になっています。\n本稿では、古代の現状と課題について考察します。\n一方で、革命を学ぶことの重要性も指摘されています。\n一方で、銅像を忘れることの重要性も指摘されています。\n一方で、最新を学ぶことの重要性も指摘されています。\n以上の考察から、中世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '最新', reading: 'さいしん', meaning: 'latest' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '革命', reading: 'かくめい', meaning: 'revolution' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' }
    ],
  },
  {
    id: '1003',
    title: '遣唐使',
    source: '時代エッセイ (N2)',
    date: '2025-05-10',
    content:
      '史料をめぐる議論は近年ますます活発になっています。\n本稿では、史料の現状と課題について考察します。\n一方で、政治を制度ことの重要性も指摘されています。\n一方で、政治を偉人ことの重要性も指摘されています。\n一方で、武将を武将ことの重要性も指摘されています。\n以上の考察から、資料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '武将', reading: 'ぶしょう', meaning: 'military commander' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '政治', reading: 'せいじ', meaning: 'politics' },
      { word: '史料', reading: 'しりょう', meaning: 'historical materials' }
    ],
  },
  {
    id: '1004',
    title: '鎖国政策',
    source: '時代エッセイ (N2)',
    date: '2025-10-22',
    content:
      '町人をめぐる議論は近年ますます活発になっています。\n本稿では、町人の現状と課題について考察します。\n一方で、中世を作ることの重要性も指摘されています。\n一方で、遺産を作ることの重要性も指摘されています。\n一方で、史跡を壊すことの重要性も指摘されています。\n以上の考察から、農民の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)をめぐる議論は近年ますます活発になっています。\n本稿では、chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)の現状と課題について考察します。\n一方で、Middle Ages (in Japan esp. the Kamakura and Muromachi periods)を作ることの重要性も指摘されています。\n一方で、inheritanceを作ることの重要性も指摘されています。\n一方で、史跡を壊すことの重要性も指摘されています。\n以上の考察から、農民の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '町人', reading: 'ちょうにん', meaning: 'chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '史跡', reading: 'しせき', meaning: 'historic landmark' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '作る', reading: 'つくる', meaning: 'to make' }
    ],
  },
  {
    id: '1005',
    title: '開国と近代化',
    source: '時代エッセイ (N2)',
    date: '2025-07-15',
    content:
      '出来事をめぐる議論は近年ますます活発になっています。\n本稿では、出来事の現状と課題について考察します。\n一方で、戦争を学ぶことの重要性も指摘されています。\n一方で、発展を起こることの重要性も指摘されています。\n一方で、進歩を伝わることの重要性も指摘されています。\n以上の考察から、発展の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '出来事', reading: 'できごと', meaning: 'occurrence' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '学ぶ', reading: 'まなぶ', meaning: 'to learn' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '発展', reading: 'はってん', meaning: 'development' }
    ],
  },
  {
    id: '1006',
    title: '戦国時代',
    source: '時代エッセイ (N1)',
    date: '2025-06-01',
    content:
      '中世をめぐる議論は近年ますます活発になっています。\n本稿では、中世の現状と課題について考察します。\n一方で、商人を始めることの重要性も指摘されています。\n一方で、農民を終えることの重要性も指摘されています。\n一方で、原因を燃やすことの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)をめぐる議論は近年ますます活発になっています。\n本稿では、Middle Ages (in Japan esp. the Kamakura and Muromachi periods)の現状と課題について考察します。\n一方で、merchantをto startことの重要性も指摘されています。\n一方で、農民を終えることの重要性も指摘されています。\n一方で、原因をto burnことの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '原因', reading: 'げんいん', meaning: 'cause' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '終える', reading: 'おえる', meaning: 'to finish' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' }
    ],
  },
  {
    id: '1007',
    title: '江戸の暮らし',
    source: '時代エッセイ (N1)',
    date: '2025-09-04',
    content:
      '経済をめぐる議論は近年ますます活発になっています。\n本稿では、経済の現状と課題について考察します。\n一方で、社会を築くことの重要性も指摘されています。\n一方で、経済を失うことの重要性も指摘されています。\n一方で、将軍を失うことの重要性も指摘されています。\n以上の考察から、経済の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '社会', reading: 'しゃかい', meaning: 'society' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '将軍', reading: 'しょうぐん', meaning: 'general' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '築く', reading: 'きずく', meaning: 'to build' }
    ],
  },
  {
    id: '1008',
    title: '明治維新',
    source: '時代エッセイ (N1)',
    date: '2025-04-11',
    content:
      '改革をめぐる議論は近年ますます活発になっています。\n本稿では、改革の現状と課題について考察します。\n一方で、戦争を失うことの重要性も指摘されています。\n一方で、英雄を残すことの重要性も指摘されています。\n一方で、古代を失うことの重要性も指摘されています。\n以上の考察から、古代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '改革', reading: 'かいかく', meaning: 'reform' },
      { word: '英雄', reading: 'えいゆう', meaning: 'hero' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '1009',
    title: '古墳時代',
    source: '時代エッセイ (N1)',
    date: '2025-07-02',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、大名を燃やすことの重要性も指摘されています。\n一方で、遺産を燃やすことの重要性も指摘されています。\n一方で、武将を燃やすことの重要性も指摘されています。\n以上の考察から、大名の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '武将', reading: 'ぶしょう', meaning: 'military commander' },
      { word: '大名', reading: 'だいみょう', meaning: 'daimyo (Japanese feudal lord)' }
    ],
  },
  {
    id: '1010',
    title: '平安文化',
    source: '歴史読解 (N1)',
    date: '2025-01-03',
    content:
      '歴史をめぐる議論は近年ますます活発になっています。\n本稿では、歴史の現状と課題について考察します。\n一方で、調査を忘れることの重要性も指摘されています。\n一方で、銅像を続くことの重要性も指摘されています。\n一方で、戦争を伝わることの重要性も指摘されています。\n以上の考察から、町人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
      { word: '続く', reading: 'つづく', meaning: 'to continue' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '町人', reading: 'ちょうにん', meaning: 'chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '調査', reading: 'ちょうさ', meaning: 'investigation' }
    ],
  },
  {
    id: '1011',
    title: '南北朝時代',
    source: '時代エッセイ (N1)',
    date: '2025-07-26',
    content:
      '芸術をめぐる議論は近年ますます活発になっています。\n本稿では、芸術の現状と課題について考察します。\n一方で、遺産を変わることの重要性も指摘されています。\n一方で、中世を変わることの重要性も指摘されています。\n一方で、文化を変えることの重要性も指摘されています。\n以上の考察から、武士の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: 'inheritance' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '変える', reading: 'かえる', meaning: 'to change' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '武士', reading: 'ぶし', meaning: 'samurai' }
    ],
  },
  {
    id: '1012',
    title: '日清戦争',
    source: '歴史読解 (N1)',
    date: '2025-12-03',
    content:
      '法律をめぐる議論は近年ますます活発になっています。\n本稿では、法律の現状と課題について考察します。\n一方で、近代を覚えることの重要性も指摘されています。\n一方で、中世を築くことの重要性も指摘されています。\n一方で、大名を築くことの重要性も指摘されています。\n以上の考察から、制度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '制度', reading: 'せいど', meaning: 'system' },
      { word: '築く', reading: 'きずく', meaning: 'to build' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '大名', reading: 'だいみょう', meaning: 'daimyo (Japanese feudal lord)' },
      { word: '法律', reading: 'ほうりつ', meaning: 'law' }
    ],
  },
  {
    id: '1013',
    title: '高度経済成長',
    source: '歴史読解 (N1)',
    date: '2025-10-27',
    content:
      '英雄をめぐる議論は近年ますます活発になっています。\n本稿では、英雄の現状と課題について考察します。\n一方で、史跡を歴史ことの重要性も指摘されています。\n一方で、大名を神話ことの重要性も指摘されています。\n一方で、偉人を史跡ことの重要性も指摘されています。\n以上の考察から、事件の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '史跡', reading: 'しせき', meaning: 'historic landmark' },
      { word: '事件', reading: 'じけん', meaning: 'event' },
      { word: '英雄', reading: 'えいゆう', meaning: 'hero' },
      { word: '大名', reading: 'だいみょう', meaning: 'daimyo (Japanese feudal lord)' },
      { word: '神話', reading: 'しんわ', meaning: 'myth' }
    ],
  },
  {
    id: '1014',
    title: '縄文時代',
    source: '歴史読解 (N1)',
    date: '2025-07-16',
    content:
      '謎をめぐる議論は近年ますます活発になっています。\n本稿では、謎の現状と課題について考察します。\n一方で、農民を失うことの重要性も指摘されています。\n一方で、中世を失うことの重要性も指摘されています。\n一方で、建築を残ることの重要性も指摘されています。\n以上の考察から、遺跡の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '建築', reading: 'けんちく', meaning: 'construction' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '謎', reading: 'なぞ', meaning: 'riddle' },
      { word: '残る', reading: 'のこる', meaning: 'to remain' }
    ],
  },
  {
    id: '1015',
    title: '弥生時代',
    source: '時代エッセイ (N1)',
    date: '2025-04-27',
    content:
      '調査をめぐる議論は近年ますます活発になっています。\n本稿では、調査の現状と課題について考察します。\n一方で、近代を燃えることの重要性も指摘されています。\n一方で、偉人を覚えることの重要性も指摘されています。\n一方で、保存を燃えることの重要性も指摘されています。\n以上の考察から、歴史の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '保存', reading: 'ほぞん', meaning: 'preservation' },
      { word: '調査', reading: 'ちょうさ', meaning: 'investigation' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' }
    ],
  },
  {
    id: '1016',
    title: '鎌倉幕府',
    source: '歴史読解 (N1)',
    date: '2025-12-11',
    content:
      '影響をめぐる議論は近年ますます活発になっています。\n本稿では、影響の現状と課題について考察します。\n一方で、史跡を始めることの重要性も指摘されています。\n一方で、伝承を始めることの重要性も指摘されています。\n一方で、近世を始めることの重要性も指摘されています。\n以上の考察から、近世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '史跡', reading: 'しせき', meaning: 'historic landmark' },
      { word: '伝承', reading: 'でんしょう', meaning: 'handing down (information)' },
      { word: '始める', reading: 'はじめる', meaning: 'to start' },
      { word: '影響', reading: 'えいきょう', meaning: 'influence' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' }
    ],
  },
  {
    id: '1017',
    title: '室町文化',
    source: '時代エッセイ (N1)',
    date: '2025-07-13',
    content:
      '文化をめぐる議論は近年ますます活発になっています。\n本稿では、文化の現状と課題について考察します。\n一方で、変革を経済ことの重要性も指摘されています。\n一方で、偉人を遺跡ことの重要性も指摘されています。\n一方で、中世を農民ことの重要性も指摘されています。\n以上の考察から、農民の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '変革', reading: 'へんかく', meaning: 'change' },
      { word: '遺跡', reading: 'いせき', meaning: '(archeological) remains' },
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' }
    ],
  },
  {
    id: '1018',
    title: '戦後の復興',
    source: '歴史読解 (N1)',
    date: '2025-11-03',
    content:
      '指導者をめぐる議論は近年ますます活発になっています。\n本稿では、指導者の現状と課題について考察します。\n一方で、研究を伝わることの重要性も指摘されています。\n一方で、教訓を伝わることの重要性も指摘されています。\n一方で、政治を起こることの重要性も指摘されています。\n以上の考察から、経済の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教訓', reading: 'きょうくん', meaning: 'lesson' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '指導者', reading: 'しどうしゃ', meaning: 'leader' },
      { word: '研究', reading: 'けんきゅう', meaning: 'research' },
      { word: '政治', reading: 'せいじ', meaning: 'politics' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' }
    ],
  },
  {
    id: '1019',
    title: '大正ロマン',
    source: '時代エッセイ (N1)',
    date: '2025-06-22',
    content:
      '商人をめぐる議論は近年ますます活発になっています。\n本稿では、商人の現状と課題について考察します。\n一方で、学習を燃やすことの重要性も指摘されています。\n一方で、商人を終わることの重要性も指摘されています。\n一方で、学習を壊すことの重要性も指摘されています。\n以上の考察から、博物館の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '学習', reading: 'がくしゅう', meaning: 'learning' },
      { word: '終わる', reading: 'おわる', meaning: 'to end' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' }
    ],
  },
  {
    id: '1020',
    title: '昭和の生活',
    source: '時代エッセイ (N1)',
    date: '2025-10-17',
    content:
      '破壊をめぐる議論は近年ますます活発になっています。\n本稿では、破壊の現状と課題について考察します。\n一方で、衰退を続けることの重要性も指摘されています。\n一方で、近世を続けることの重要性も指摘されています。\n一方で、平和を続けることの重要性も指摘されています。\n以上の考察から、近世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '破壊', reading: 'はかい', meaning: 'destruction' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '平和', reading: 'へいわ', meaning: 'peace' },
      { word: '続ける', reading: 'つづける', meaning: 'to continue' },
      { word: '衰退', reading: 'すいたい', meaning: 'decline' }
    ],
  },
  {
    id: '1021',
    title: '太平洋戦争',
    source: '時代エッセイ (N1)',
    date: '2025-12-07',
    content:
      '中世をめぐる議論は近年ますます活発になっています。\n本稿では、中世の現状と課題について考察します。\n一方で、経済を失うことの重要性も指摘されています。\n一方で、史料を変わることの重要性も指摘されています。\n一方で、経済を覚えることの重要性も指摘されています。\n以上の考察から、原因の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '史料', reading: 'しりょう', meaning: 'historical materials' },
      { word: '経済', reading: 'けいざい', meaning: 'economy' },
      { word: '覚える', reading: 'おぼえる', meaning: 'to memorize' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '原因', reading: 'げんいん', meaning: 'cause' }
    ],
  },
  {
    id: '1022',
    title: '律令制度',
    source: '歴史読解 (N1)',
    date: '2025-05-22',
    content:
      '歴史をめぐる議論は近年ますます活発になっています。\n本稿では、歴史の現状と課題について考察します。\n一方で、復興を壊すことの重要性も指摘されています。\n一方で、芸術を建てることの重要性も指摘されています。\n一方で、芸術を壊すことの重要性も指摘されています。\n以上の考察から、現代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歴史', reading: 'れきし', meaning: 'history' },
      { word: '芸術', reading: 'げいじゅつ', meaning: 'art' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' },
      { word: '復興', reading: 'ふっこう', meaning: 'revival' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' }
    ],
  },
  {
    id: '1023',
    title: '遣唐使',
    source: '歴史読解 (N1)',
    date: '2025-02-12',
    content:
      '商人をめぐる議論は近年ますます活発になっています。\n本稿では、商人の現状と課題について考察します。\n一方で、博物館を起こることの重要性も指摘されています。\n一方で、商人を壊すことの重要性も指摘されています。\n一方で、銅像を壊すことの重要性も指摘されています。\n以上の考察から、進歩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '進歩', reading: 'しんぽ', meaning: 'progress' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' }
    ],
  },
  {
    id: '1024',
    title: '鎖国政策',
    source: '時代エッセイ (N1)',
    date: '2025-12-14',
    content:
      '古代をめぐる議論は近年ますます活発になっています。\n本稿では、古代の現状と課題について考察します。\n一方で、破壊を失うことの重要性も指摘されています。\n一方で、銅像を起こることの重要性も指摘されています。\n一方で、石碑を変わることの重要性も指摘されています。\n以上の考察から、石碑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '失う', reading: 'うしなう', meaning: 'to lose' },
      { word: '破壊', reading: 'はかい', meaning: 'destruction' },
      { word: '重要', reading: 'じゅうよう', meaning: 'important' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '石碑', reading: 'せきひ', meaning: 'stone monument' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' }
    ],
  },
  {
    id: '1025',
    title: '開国と近代化',
    source: '時代エッセイ (N1)',
    date: '2025-02-02',
    content:
      '町人をめぐる議論は近年ますます活発になっています。\n本稿では、町人の現状と課題について考察します。\n一方で、博物館を町人ことの重要性も指摘されています。\n一方で、博物館を文化ことの重要性も指摘されています。\n一方で、戦争を史料ことの重要性も指摘されています。\n以上の考察から、指導者の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文化', reading: 'ぶんか', meaning: 'culture' },
      { word: '指導者', reading: 'しどうしゃ', meaning: 'leader' },
      { word: '史料', reading: 'しりょう', meaning: 'historical materials' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '町人', reading: 'ちょうにん', meaning: 'chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' }
    ],
  },
  {
    id: '1026',
    title: '都会の生活',
    source: '風景エッセイ (N4)',
    date: '2025-04-06',
    content:
      '方向について考えてみましょう。\n方向は日常生活の中で大切な役割を果たしています。\n例えば、公園を迎えることがあります。\n例えば、橋を尋ねることがあります。\n例えば、場所を来ることがあります。\nこのように、場所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '尋ねる', reading: 'たずねる', meaning: 'to ask' },
      { word: '方向', reading: 'ほうこう', meaning: 'direction' },
      { word: '迎える', reading: 'むかえる', meaning: 'to go out to meet' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' }
    ],
  },
  {
    id: '1027',
    title: '田舎の魅力',
    source: '風景エッセイ (N4)',
    date: '2025-06-14',
    content:
      '川について考えてみましょう。\n川は日常生活の中で大切な役割を果たしています。\n例えば、滝を暮らすことがあります。\n例えば、中を見えることがあります。\n例えば、下を暮らすことがあります。\nこのように、住宅地は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: 'river' },
      { word: '滝', reading: 'たき', meaning: 'waterfall' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '見える', reading: 'みえる', meaning: 'to be seen' },
      { word: '住宅地', reading: 'じゅうたくち', meaning: 'housing district' }
    ],
  },
  {
    id: '1028',
    title: '海辺の町',
    source: '場所読解 (N4)',
    date: '2025-02-03',
    content:
      '遊園地について考えてみましょう。\n遊園地は日常生活の中で大切な役割を果たしています。\n例えば、都会を分かることがあります。\n例えば、前を分かることがあります。\n例えば、公園を知ることがあります。\nこのように、町は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '町', reading: 'まち', meaning: 'town' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '分かる', reading: 'わかる', meaning: 'to understand' },
      { word: '都会', reading: 'とかい', meaning: 'city' }
    ],
  },
  {
    id: '1029',
    title: '山の中の村',
    source: '風景エッセイ (N4)',
    date: '2025-07-03',
    content:
      '町について考えてみましょう。\n町は日常生活の中で大切な役割を果たしています。\n例えば、駐車場を引っ越すことがあります。\n例えば、景色を進むことがあります。\n例えば、朝日を進むことがあります。\nこのように、場所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '引っ越す', reading: 'ひっこす', meaning: 'to move (house)' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '町', reading: 'まち', meaning: 'town' },
      { word: '景色', reading: 'けしき', meaning: 'scenery' },
      { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' }
    ],
  },
  {
    id: '1030',
    title: '商店街の風景',
    source: '風景エッセイ (N4)',
    date: '2025-12-18',
    content:
      '歩道について考えてみましょう。\n歩道は日常生活の中で大切な役割を果たしています。\n例えば、高速道路を戻ることがあります。\n例えば、駐車場を入ることがあります。\n例えば、高速道路を来ることがあります。\nこのように、歩道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高速道路', reading: 'こうそくどうろ', meaning: 'highway' },
      { word: '戻る', reading: 'もどる', meaning: 'to turn back (e.g. half-way)' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: '入る', reading: 'いる', meaning: 'to enter' }
    ],
  },
  {
    id: '1031',
    title: '駅前の賑わい',
    source: '場所読解 (N4)',
    date: '2025-05-21',
    content:
      '横断歩道について考えてみましょう。\n横断歩道は日常生活の中で大切な役割を果たしています。\n例えば、朝日を見つけることがあります。\n例えば、デパートを戻ることがあります。\n例えば、方角を戻ることがあります。\nこのように、神社は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'デパート', reading: 'デパート', meaning: 'department store' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '見つける', reading: 'みつける', meaning: 'to find' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: '戻る', reading: 'もどる', meaning: 'to turn back (e.g. half-way)' }
    ],
  },
  {
    id: '1032',
    title: '公園の四季',
    source: '風景エッセイ (N4)',
    date: '2025-08-04',
    content:
      '都市について考えてみましょう。\n都市は日常生活の中で大切な役割を果たしています。\n例えば、車道を暮らすことがあります。\n例えば、上を渡ることがあります。\n例えば、右を進むことがあります。\nこのように、前は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '右', reading: 'みぎ', meaning: 'right' },
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '都市', reading: 'とし', meaning: 'town' },
      { word: '上', reading: 'うえ', meaning: 'above' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '車道', reading: 'しゃどう', meaning: 'roadway' }
    ],
  },
  {
    id: '1033',
    title: '図書館の一日',
    source: '風景エッセイ (N4)',
    date: '2025-09-14',
    content:
      '遠くについて考えてみましょう。\n遠くは日常生活の中で大切な役割を果たしています。\n例えば、神社を位置ことがあります。\n例えば、場所を郊外ことがあります。\n例えば、方角を眺めことがあります。\nこのように、周りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '郊外', reading: 'こうがい', meaning: 'suburb' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: '眺め', reading: 'ながめ', meaning: 'scene' },
      { word: '位置', reading: 'いち', meaning: 'place' }
    ],
  },
  {
    id: '1034',
    title: '病院の待合室',
    source: '風景エッセイ (N4)',
    date: '2025-05-19',
    content:
      '夕日について考えてみましょう。\n夕日は日常生活の中で大切な役割を果たしています。\n例えば、近くを渡ることがあります。\n例えば、地方を渡ることがあります。\n例えば、上を渡ることがあります。\nこのように、地方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '上', reading: 'うえ', meaning: 'above' },
      { word: '夕日', reading: 'ゆうひ', meaning: 'evening sun' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' }
    ],
  },
  {
    id: '1035',
    title: '学校の思い出',
    source: '風景エッセイ (N4)',
    date: '2025-01-11',
    content:
      '中について考えてみましょう。\n中は日常生活の中で大切な役割を果たしています。\n例えば、位置を歩くことがあります。\n例えば、地方を走ることがあります。\n例えば、中を走ることがあります。\nこのように、位置は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' }
    ],
  },
  {
    id: '1036',
    title: '空港の風景',
    source: '風景エッセイ (N4)',
    date: '2025-06-20',
    content:
      '海について考えてみましょう。\n海は日常生活の中で大切な役割を果たしています。\n例えば、場所を聞くことがあります。\n例えば、海を暮らすことがあります。\n例えば、高速道路を暮らすことがあります。\nこのように、高速道路は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '聞く', reading: 'きく', meaning: 'to hear' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: 'highway' }
    ],
  },
  {
    id: '1037',
    title: '港町の暮らし',
    source: '風景エッセイ (N4)',
    date: '2025-10-13',
    content:
      '地域について考えてみましょう。\n地域は日常生活の中で大切な役割を果たしています。\n例えば、前を尋ねることがあります。\n例えば、夕日を曲がることがあります。\n例えば、空を尋ねることがあります。\nこのように、市場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '夕日', reading: 'ゆうひ', meaning: 'evening sun' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '尋ねる', reading: 'たずねる', meaning: 'to ask' }
    ],
  },
  {
    id: '1038',
    title: '神社の境内',
    source: '風景エッセイ (N4)',
    date: '2025-07-11',
    content:
      '風景について考えてみましょう。\n風景は日常生活の中で大切な役割を果たしています。\n例えば、駅を働くことがあります。\n例えば、空港を働くことがあります。\n例えば、遊園地を着くことがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '危険', reading: 'きけん', meaning: 'danger' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '空港', reading: 'くうこう', meaning: 'airport' },
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' }
    ],
  },
  {
    id: '1039',
    title: '城下町散策',
    source: '風景エッセイ (N4)',
    date: '2025-04-17',
    content:
      '都会について考えてみましょう。\n都会は日常生活の中で大切な役割を果たしています。\n例えば、雲を移ることがあります。\n例えば、町を移ることがあります。\n例えば、中を移ることがあります。\nこのように、図書館は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '都会', reading: 'とかい', meaning: 'city' },
      { word: '町', reading: 'まち', meaning: 'town' },
      { word: '図書館', reading: 'としょかん', meaning: 'library' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' }
    ],
  },
  {
    id: '1040',
    title: '市場の活気',
    source: '場所読解 (N4)',
    date: '2025-08-09',
    content:
      '博物館について考えてみましょう。\n博物館は日常生活の中で大切な役割を果たしています。\n例えば、風景を橋ことがあります。\n例えば、公園を雲ことがあります。\n例えば、駅を地方ことがあります。\nこのように、地方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '駅', reading: 'えき', meaning: 'railway station' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' }
    ],
  },
  {
    id: '1041',
    title: '工場見学',
    source: '風景エッセイ (N4)',
    date: '2025-01-15',
    content:
      '左について考えてみましょう。\n左は日常生活の中で大切な役割を果たしています。\n例えば、左を着くことがあります。\n例えば、左を働くことがあります。\n例えば、星空を着くことがあります。\nこのように、名所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: 'to arrive at' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '左', reading: 'ひだり', meaning: 'left' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' },
      { word: '星空', reading: 'ほしぞら', meaning: 'starry sky' }
    ],
  },
  {
    id: '1042',
    title: '農園体験',
    source: '場所読解 (N4)',
    date: '2025-10-04',
    content:
      '郊外について考えてみましょう。\n郊外は日常生活の中で大切な役割を果たしています。\n例えば、公園を住むことがあります。\n例えば、風景を暮らすことがあります。\n例えば、風景を暮らすことがあります。\nこのように、地域は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '住む', reading: 'すむ', meaning: 'to live (of humans)' },
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '公園', reading: 'こうえん', meaning: '(public) park' },
      { word: '郊外', reading: 'こうがい', meaning: 'suburb' }
    ],
  },
  {
    id: '1043',
    title: '水族館の魅力',
    source: '風景エッセイ (N4)',
    date: '2025-12-05',
    content:
      '場所について考えてみましょう。\n場所は日常生活の中で大切な役割を果たしています。\n例えば、近くを連れて行くことがあります。\n例えば、周りを進むことがあります。\n例えば、歩道を迎えることがあります。\nこのように、城は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '連れて行く', reading: 'つれていく', meaning: 'to take (someone to a place)' },
      { word: '迎える', reading: 'むかえる', meaning: 'to go out to meet' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: '城', reading: 'しろ', meaning: 'castle' },
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' }
    ],
  },
  {
    id: '1044',
    title: '動物園の一日',
    source: '風景エッセイ (N4)',
    date: '2025-03-04',
    content:
      '美術館について考えてみましょう。\n美術館は日常生活の中で大切な役割を果たしています。\n例えば、近くを通ることがあります。\n例えば、方向を通ることがあります。\n例えば、方向を行くことがあります。\nこのように、温泉は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '美術館', reading: 'びじゅつかん', meaning: 'art museum' },
      { word: '温泉', reading: 'おんせん', meaning: 'hot spring' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '方向', reading: 'ほうこう', meaning: 'direction' },
      { word: '行く', reading: 'いく', meaning: 'to go' }
    ],
  },
  {
    id: '1045',
    title: '博物館の楽しみ',
    source: '場所読解 (N4)',
    date: '2025-09-24',
    content:
      '寺院について考えてみましょう。\n寺院は日常生活の中で大切な役割を果たしています。\n例えば、光景を光景ことがあります。\n例えば、空を村ことがあります。\n例えば、交差点を交差点ことがあります。\nこのように、後ろは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '村', reading: 'むら', meaning: 'village' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '後ろ', reading: 'うしろ', meaning: 'back' },
      { word: '交差点', reading: 'こうさてん', meaning: 'crossing' },
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '光景', reading: 'こうけい', meaning: 'scene' }
    ],
  },
  {
    id: '1046',
    title: '都会の生活',
    source: '風景エッセイ (N3)',
    date: '2025-05-25',
    content:
      '寺院について深く掘り下げて考えてみたいと思います。\n現代社会において、寺院は重要なテーマとなっています。\n特に湖を朝日過程で、さまざまな発見がありました。\n特に眺めを風景過程で、さまざまな発見がありました。\n特に前を庭園過程で、さまざまな発見がありました。\n眺めについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '湖', reading: 'みずうみ', meaning: 'lake' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '眺め', reading: 'ながめ', meaning: 'scene' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '庭園', reading: 'ていえん', meaning: 'garden' }
    ],
  },
  {
    id: '1047',
    title: '田舎の魅力',
    source: '場所読解 (N3)',
    date: '2025-11-24',
    content:
      '名所について深く掘り下げて考えてみたいと思います。\n現代社会において、名所は重要なテーマとなっています。\n特に劇場を入る過程で、さまざまな発見がありました。\n特にコンビニを移る過程で、さまざまな発見がありました。\n特に海を入る過程で、さまざまな発見がありました。\n劇場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '劇場', reading: 'げきじょう', meaning: 'theatre' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '入る', reading: 'いる', meaning: 'to enter' }
    ],
  },
  {
    id: '1048',
    title: '海辺の町',
    source: '風景エッセイ (N3)',
    date: '2025-11-26',
    content:
      '光景について深く掘り下げて考えてみたいと思います。\n現代社会において、光景は重要なテーマとなっています。\n特に市場を来る過程で、さまざまな発見がありました。\n特に前を来る過程で、さまざまな発見がありました。\n特に地方を来る過程で、さまざまな発見がありました。\n遠くについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '光景', reading: 'こうけい', meaning: 'scene' },
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' }
    ],
  },
  {
    id: '1049',
    title: '山の中の村',
    source: '場所読解 (N3)',
    date: '2025-08-08',
    content:
      '海について深く掘り下げて考えてみたいと思います。\n現代社会において、海は重要なテーマとなっています。\n特に遠くを帰る過程で、さまざまな発見がありました。\n特に場所を尋ねる過程で、さまざまな発見がありました。\n特に寺院を渡る過程で、さまざまな発見がありました。\n雲についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '尋ねる', reading: 'たずねる', meaning: 'to ask' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '寺院', reading: 'じいん', meaning: 'Buddhist temple' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '海', reading: 'うみ', meaning: 'sea' }
    ],
  },
  {
    id: '1050',
    title: '商店街の風景',
    source: '風景エッセイ (N3)',
    date: '2025-03-22',
    content:
      '中について深く掘り下げて考えてみたいと思います。\n現代社会において、中は重要なテーマとなっています。\n特に夜景を曲がる過程で、さまざまな発見がありました。\n特に橋を連れて行く過程で、さまざまな発見がありました。\n特に中を連れて行く過程で、さまざまな発見がありました。\n市場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '夜景', reading: 'やけい', meaning: 'night view' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '曲がる', reading: 'まがる', meaning: 'to bend' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '連れて行く', reading: 'つれていく', meaning: 'to take (someone to a place)' },
      { word: '下', reading: 'した', meaning: 'below' }
    ],
  },
  {
    id: '1051',
    title: '駅前の賑わい',
    source: '場所読解 (N3)',
    date: '2025-09-19',
    content:
      '都会について深く掘り下げて考えてみたいと思います。\n現代社会において、都会は重要なテーマとなっています。\n特に下を戻る過程で、さまざまな発見がありました。\n特にデパートを働く過程で、さまざまな発見がありました。\n特に神社を探す過程で、さまざまな発見がありました。\n星空についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'デパート', reading: 'デパート', meaning: 'department store' },
      { word: '探す', reading: 'さがす', meaning: 'to search for' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '戻る', reading: 'もどる', meaning: 'to turn back (e.g. half-way)' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '星空', reading: 'ほしぞら', meaning: 'starry sky' },
      { word: '都会', reading: 'とかい', meaning: 'city' }
    ],
  },
  {
    id: '1052',
    title: '公園の四季',
    source: '風景エッセイ (N3)',
    date: '2025-04-08',
    content:
      '夜景について深く掘り下げて考えてみたいと思います。\n現代社会において、夜景は重要なテーマとなっています。\n特に遊園地を暮らす過程で、さまざまな発見がありました。\n特に右を見える過程で、さまざまな発見がありました。\n特に下を見える過程で、さまざまな発見がありました。\n村についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊園地', reading: 'ゆうえんち', meaning: 'amusement park' },
      { word: '右', reading: 'みぎ', meaning: 'right' },
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '村', reading: 'むら', meaning: 'village' },
      { word: '夜景', reading: 'やけい', meaning: 'night view' },
      { word: '見える', reading: 'みえる', meaning: 'to be seen' },
      { word: '下', reading: 'した', meaning: 'below' }
    ],
  },
  {
    id: '1053',
    title: '図書館の一日',
    source: '風景エッセイ (N3)',
    date: '2025-11-11',
    content:
      'スーパーについて深く掘り下げて考えてみたいと思います。\n現代社会において、スーパーは重要なテーマとなっています。\n特に横断歩道を入る過程で、さまざまな発見がありました。\n特にデパートを分かる過程で、さまざまな発見がありました。\n特に雲を分かる過程で、さまざまな発見がありました。\n橋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '分かる', reading: 'わかる', meaning: 'to understand' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: 'デパート', reading: 'デパート', meaning: 'department store' },
      { word: '入る', reading: 'いる', meaning: 'to enter' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' },
      { word: 'スーパー', reading: 'スーパー', meaning: 'supermarket' },
      { word: '雲', reading: 'くも', meaning: 'cloud' }
    ],
  },
  {
    id: '1054',
    title: '病院の待合室',
    source: '場所読解 (N3)',
    date: '2025-02-06',
    content:
      '景色について深く掘り下げて考えてみたいと思います。\n現代社会において、景色は重要なテーマとなっています。\n特に神社を移る過程で、さまざまな発見がありました。\n特に場所を来る過程で、さまざまな発見がありました。\n特に海を来る過程で、さまざまな発見がありました。\n神社についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '景色', reading: 'けしき', meaning: 'scenery' },
      { word: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' },
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' },
      { word: '来る', reading: 'くる', meaning: 'to come (spatially or temporally)' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' }
    ],
  },
  {
    id: '1055',
    title: '学校の思い出',
    source: '風景エッセイ (N3)',
    date: '2025-11-13',
    content:
      '場所について深く掘り下げて考えてみたいと思います。\n現代社会において、場所は重要なテーマとなっています。\n特に郊外を勤める過程で、さまざまな発見がありました。\n特に風景を働く過程で、さまざまな発見がありました。\n特に博物館を働く過程で、さまざまな発見がありました。\n庭園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '勤める', reading: 'つとめる', meaning: 'to work (for)' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '郊外', reading: 'こうがい', meaning: 'suburb' },
      { word: '庭園', reading: 'ていえん', meaning: 'garden' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' }
    ],
  },
  {
    id: '1056',
    title: '空港の風景',
    source: '場所読解 (N3)',
    date: '2025-07-11',
    content:
      '山について深く掘り下げて考えてみたいと思います。\n現代社会において、山は重要なテーマとなっています。\n特に辺りを連れて行く過程で、さまざまな発見がありました。\n特に位置を尋ねる過程で、さまざまな発見がありました。\n特に上を通う過程で、さまざまな発見がありました。\n信号についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '連れて行く', reading: 'つれていく', meaning: 'to take (someone to a place)' },
      { word: '信号', reading: 'しんごう', meaning: 'signal' },
      { word: '行く', reading: 'いく', meaning: 'to go' },
      { word: '上', reading: 'うえ', meaning: 'above' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '通う', reading: 'かよう', meaning: 'to go to and from (a place)' },
      { word: '尋ねる', reading: 'たずねる', meaning: 'to ask' },
      { word: '辺り', reading: 'あたり', meaning: '(in the) neighbourhood' },
      { word: '山', reading: 'やま', meaning: 'mountain' }
    ],
  },
  {
    id: '1057',
    title: '港町の暮らし',
    source: '風景エッセイ (N3)',
    date: '2025-09-09',
    content:
      '市場について深く掘り下げて考えてみたいと思います。\n現代社会において、市場は重要なテーマとなっています。\n特に下を空過程で、さまざまな発見がありました。\n特に中を新しい過程で、さまざまな発見がありました。\n特に遠くを市場過程で、さまざまな発見がありました。\n市場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '新しい', reading: 'あたらしい', meaning: 'new' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '市場', reading: 'いちば', meaning: '(town) market' },
      { word: '空', reading: 'から', meaning: 'emptiness' }
    ],
  },
  {
    id: '1058',
    title: '神社の境内',
    source: '風景エッセイ (N3)',
    date: '2025-09-21',
    content:
      '夕日について深く掘り下げて考えてみたいと思います。\n現代社会において、夕日は重要なテーマとなっています。\n特に方角を移る過程で、さまざまな発見がありました。\n特に周りを分かる過程で、さまざまな発見がありました。\n特に海を移る過程で、さまざまな発見がありました。\n夕日についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '分かる', reading: 'わかる', meaning: 'to understand' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' },
      { word: '夕日', reading: 'ゆうひ', meaning: 'evening sun' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' }
    ],
  },
  {
    id: '1059',
    title: '城下町散策',
    source: '場所読解 (N3)',
    date: '2025-12-03',
    content:
      '朝日について深く掘り下げて考えてみたいと思います。\n現代社会において、朝日は重要なテーマとなっています。\n特に場所を暮らす過程で、さまざまな発見がありました。\n特に城を暮らす過程で、さまざまな発見がありました。\n特に美術館を帰る過程で、さまざまな発見がありました。\nデパートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: 'デパート', reading: 'デパート', meaning: 'department store' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '帰る', reading: 'かえる', meaning: 'to return' },
      { word: '美術館', reading: 'びじゅつかん', meaning: 'art museum' },
      { word: '城', reading: 'しろ', meaning: 'castle' }
    ],
  },
  {
    id: '1060',
    title: '市場の活気',
    source: '風景エッセイ (N3)',
    date: '2025-10-23',
    content:
      '歩道について深く掘り下げて考えてみたいと思います。\n現代社会において、歩道は重要なテーマとなっています。\n特に空港を通る過程で、さまざまな発見がありました。\n特に外を迎える過程で、さまざまな発見がありました。\n特に空港を知る過程で、さまざまな発見がありました。\n都会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '迎える', reading: 'むかえる', meaning: 'to go out to meet' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: '知る', reading: 'しる', meaning: 'to know' },
      { word: '空港', reading: 'くうこう', meaning: 'airport' },
      { word: '都会', reading: 'とかい', meaning: 'city' },
      { word: '外', reading: 'そと', meaning: 'outside' }
    ],
  },
  {
    id: '1061',
    title: '工場見学',
    source: '場所読解 (N3)',
    date: '2025-06-10',
    content:
      '雲について深く掘り下げて考えてみたいと思います。\n現代社会において、雲は重要なテーマとなっています。\n特に雲を入る過程で、さまざまな発見がありました。\n特に位置を入る過程で、さまざまな発見がありました。\n特に星空を入る過程で、さまざまな発見がありました。\n夜景についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '空', reading: 'から', meaning: 'emptiness' },
      { word: '星空', reading: 'ほしぞら', meaning: 'starry sky' },
      { word: '夜景', reading: 'やけい', meaning: 'night view' },
      { word: '雲', reading: 'くも', meaning: 'cloud' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '入る', reading: 'いる', meaning: 'to enter' }
    ],
  },
  {
    id: '1062',
    title: '農園体験',
    source: '場所読解 (N3)',
    date: '2025-08-20',
    content:
      '博物館について深く掘り下げて考えてみたいと思います。\n現代社会において、博物館は重要なテーマとなっています。\n特に近くを走る過程で、さまざまな発見がありました。\n特に辺りを歩く過程で、さまざまな発見がありました。\n特に地域を歩く過程で、さまざまな発見がありました。\n朝日についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '博物館', reading: 'はくぶつかん', meaning: 'museum' },
      { word: '辺り', reading: 'あたり', meaning: '(in the) neighbourhood' },
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '走る', reading: 'はしる', meaning: 'to run' },
      { word: '歩く', reading: 'あるく', meaning: 'to walk' }
    ],
  },
  {
    id: '1063',
    title: '水族館の魅力',
    source: '場所読解 (N3)',
    date: '2025-04-10',
    content:
      '名所について深く掘り下げて考えてみたいと思います。\n現代社会において、名所は重要なテーマとなっています。\n特に名所を見つける過程で、さまざまな発見がありました。\n特に海を見つける過程で、さまざまな発見がありました。\n特に橋を尋ねる過程で、さまざまな発見がありました。\n近くについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '尋ねる', reading: 'たずねる', meaning: 'to ask' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' },
      { word: '橋', reading: 'はし', meaning: 'bridge' },
      { word: '海', reading: 'うみ', meaning: 'sea' },
      { word: '見つける', reading: 'みつける', meaning: 'to find' }
    ],
  },
  {
    id: '1064',
    title: '動物園の一日',
    source: '場所読解 (N3)',
    date: '2025-08-06',
    content:
      '港について深く掘り下げて考えてみたいと思います。\n現代社会において、港は重要なテーマとなっています。\n特に地域を移る過程で、さまざまな発見がありました。\n特にコンビニを働く過程で、さまざまな発見がありました。\n特に危険を暮らす過程で、さまざまな発見がありました。\n不便についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '不便', reading: 'ふべん', meaning: 'inconvenience' },
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' },
      { word: '暮らす', reading: 'くらす', meaning: 'to live (on, by, etc.)' },
      { word: '働く', reading: 'はたらく', meaning: 'to work' },
      { word: '港', reading: 'みなと', meaning: 'harbour' },
      { word: '危険', reading: 'きけん', meaning: 'danger' }
    ],
  },
  {
    id: '1065',
    title: '博物館の楽しみ',
    source: '場所読解 (N3)',
    date: '2025-07-09',
    content:
      '名所について深く掘り下げて考えてみたいと思います。\n現代社会において、名所は重要なテーマとなっています。\n特に後ろを移る過程で、さまざまな発見がありました。\n特に位置を移る過程で、さまざまな発見がありました。\n特に場所を移る過程で、さまざまな発見がありました。\n映画館についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '映画館', reading: 'えいがかん', meaning: 'movie theatre' },
      { word: '移る', reading: 'うつる', meaning: 'to move (to another place or state)' },
      { word: '後ろ', reading: 'うしろ', meaning: 'back' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' }
    ],
  },
];

export function getRandomArticle(): Article {
  return articles[Math.floor(Math.random() * articles.length)];
}

export function getArticlesByCount(count: number): Article[] {
  const shuffled = [...articles].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}