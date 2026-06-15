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
    source: '生活エッセイ (N5)',
    date: '2025-04-10',
    content:
      '写真について話しましょう。\n写真はとても面白いです。\n年は上手です。\n年は高いです。\n天気は上手です。\n私は服が好きです。\n明日も料理を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '上手', reading: 'じょうず', meaning: '擅长' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '高い', reading: 'たかい', meaning: '高' },
      { word: '年', reading: 'とし', meaning: '年' }
    ],
  },
  {
    id: '17',
    title: '週末の過ごし方',
    source: '日常読解 (N5)',
    date: '2025-06-04',
    content:
      '夜について話しましょう。\n夜はとても面白いです。\n道は便利です。\n散歩は低いです。\n夜は低いです。\n私は散歩が好きです。\n明日も散歩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '低い', reading: 'ひくい', meaning: '低' },
      { word: '便利', reading: 'べんり', meaning: '方便' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '道', reading: 'みち', meaning: '道路' }
    ],
  },
  {
    id: '18',
    title: '買い物の楽しみ',
    source: '生活エッセイ (N5)',
    date: '2025-10-26',
    content:
      '公園について話しましょう。\n公園はとても面白いです。\n日は小さいです。\n車は嬉しいです。\n車は小さいです。\n私は道が好きです。\n明日も道を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '小さい', reading: 'ちいさい', meaning: '小' },
      { word: '日', reading: 'ひ', meaning: '日/天' }
    ],
  },
  {
    id: '19',
    title: '料理の時間',
    source: '生活エッセイ (N5)',
    date: '2025-09-20',
    content:
      '洗濯について話しましょう。\n洗濯はとても面白いです。\n靴は悪いです。\n夜は嬉しいです。\n靴は良いです。\n私は道が好きです。\n明日も洗濯を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '悪い', reading: 'わるい', meaning: '不好' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' }
    ],
  },
  {
    id: '20',
    title: '掃除の日',
    source: '日常読解 (N5)',
    date: '2025-06-09',
    content:
      '道について話しましょう。\n道はとても面白いです。\n道は悪いです。\n道は早いです。\n料理は悪いです。\n私は友達が好きです。\n明日も道を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '早い', reading: 'はやい', meaning: '早' },
      { word: '悪い', reading: 'わるい', meaning: '不好' }
    ],
  },
  {
    id: '21',
    title: '朝の習慣',
    source: '生活エッセイ (N5)',
    date: '2025-08-11',
    content:
      '靴について話しましょう。\n靴はとても面白いです。\n生活は良いです。\n手紙は良いです。\n靴は良いです。\n私は勉強が好きです。\n明日も靴を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' }
    ],
  },
  {
    id: '22',
    title: '通勤の風景',
    source: '日常読解 (N5)',
    date: '2025-08-13',
    content:
      '靴について話しましょう。\n靴はとても面白いです。\n靴は元気です。\n店は元気です。\n店は元気です。\n私は電車が好きです。\n明日も宿題を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '宿題', reading: 'しゅくだい', meaning: '作业' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '元気', reading: 'げんき', meaning: '精神' }
    ],
  },
  {
    id: '23',
    title: '家族との夕食',
    source: '生活エッセイ (N5)',
    date: '2025-02-03',
    content:
      '料理について話しましょう。\n料理はとても面白いです。\n靴は易しいです。\n料理は悲しいです。\n天は良いです。\n私は天が好きです。\n明日も鞄を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鞄', reading: 'かばん', meaning: '包' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '天', reading: 'てん', meaning: '天' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '悲しい', reading: 'かなしい', meaning: '悲伤' },
      { word: '易しい', reading: 'やさしい', meaning: '容易' }
    ],
  },
  {
    id: '24',
    title: '休日の朝',
    source: '日常読解 (N5)',
    date: '2025-03-18',
    content:
      '天について話しましょう。\n天はとても面白いです。\n電話は良いです。\n本は良いです。\n道は良いです。\n私は写真が好きです。\n明日も電話を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '天', reading: 'てん', meaning: '天' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '本', reading: 'ほん', meaning: '书' }
    ],
  },
  {
    id: '25',
    title: '寝る前の時間',
    source: '日常読解 (N5)',
    date: '2025-12-09',
    content:
      '天気について話しましょう。\n天気はとても面白いです。\n友達は良いです。\n電車は素敵です。\n電車は嬉しいです。\n私は時間が好きです。\n明日も電車を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '素敵', reading: 'すてき', meaning: '美妙' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '天気', reading: 'てんき', meaning: '天气' }
    ],
  },
  {
    id: '26',
    title: '近所の公園',
    source: '生活エッセイ (N5)',
    date: '2025-01-21',
    content:
      '物について話しましょう。\n物はとても面白いです。\n車は低いです。\n家は忙しいです。\n靴は嫌いです。\n私は家が好きです。\n明日も靴を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '忙しい', reading: 'いそがしい', meaning: '忙' },
      { word: '低い', reading: 'ひくい', meaning: '低' },
      { word: '嫌い', reading: 'きらい', meaning: '讨厌' },
      { word: '家', reading: 'いえ', meaning: '家' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '車', reading: 'くるま', meaning: '车' }
    ],
  },
  {
    id: '27',
    title: '散歩の楽しみ',
    source: '生活エッセイ (N5)',
    date: '2025-04-02',
    content:
      '掃除について話しましょう。\n掃除はとても面白いです。\n公園は服です。\n鞄は仕事です。\n道は電車です。\n私は服が好きです。\n明日も時を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '鞄', reading: 'かばん', meaning: '包' }
    ],
  },
  {
    id: '28',
    title: 'ペットとの生活',
    source: '生活エッセイ (N5)',
    date: '2025-08-10',
    content:
      '友達について話しましょう。\n友達はとても面白いです。\n旅行は良いです。\n事は短いです。\n時は短いです。\n私は友達が好きです。\n明日も事を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '旅行', reading: 'りょこう', meaning: '旅行' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '短い', reading: 'みじかい', meaning: '短' }
    ],
  },
  {
    id: '29',
    title: '日曜大工',
    source: '日常読解 (N5)',
    date: '2025-09-08',
    content:
      '店について話しましょう。\n店はとても面白いです。\n車は良いです。\n電話は嬉しいです。\n買い物は静かです。\n私は電話が好きです。\n明日も家族を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '家', reading: 'いえ', meaning: '家' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '静か', reading: 'しずか', meaning: '安静' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '買い物', reading: 'かいもの', meaning: '购物' }
    ],
  },
  {
    id: '30',
    title: '庭の手入れ',
    source: '日常読解 (N5)',
    date: '2025-05-09',
    content:
      '家族について話しましょう。\n家族はとても面白いです。\n電車は良いです。\n掃除は嬉しいです。\n写真は良いです。\n私は靴が好きです。\n明日も電車を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '良い', reading: 'よい', meaning: '好' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' }
    ],
  },
  {
    id: '31',
    title: '引っ越しの準備',
    source: '日常読解 (N5)',
    date: '2025-02-11',
    content:
      '店について話しましょう。\n店はとても面白いです。\n時は素敵です。\n店は易しいです。\n時は良いです。\n私は時が好きです。\n明日も旅行を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '素敵', reading: 'すてき', meaning: '美妙' },
      { word: '易しい', reading: 'やさしい', meaning: '容易' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行' },
      { word: '良い', reading: 'よい', meaning: '好' }
    ],
  },
  {
    id: '32',
    title: '新しい家具',
    source: '生活エッセイ (N5)',
    date: '2025-04-02',
    content:
      '料理について話しましょう。\n料理はとても面白いです。\n掃除は静かです。\n掃除は低いです。\n旅行は低いです。\n私は電話が好きです。\n明日も料理を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '静か', reading: 'しずか', meaning: '安静' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '低い', reading: 'ひくい', meaning: '低' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' }
    ],
  },
  {
    id: '33',
    title: '洗濯のコツ',
    source: '生活エッセイ (N5)',
    date: '2025-10-05',
    content:
      '電車について話しましょう。\n電車はとても面白いです。\n仕事は素敵です。\n毎日は難しいです。\n洗濯は難しいです。\n私は料理が好きです。\n明日も仕事を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '素敵', reading: 'すてき', meaning: '美妙' },
      { word: '難しい', reading: 'むずかしい', meaning: '困难' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '毎日', reading: 'まいにち', meaning: '每天' },
      { word: '料理', reading: 'りょうり', meaning: '料理' }
    ],
  },
  {
    id: '34',
    title: '朝食のメニュー',
    source: '日常読解 (N5)',
    date: '2025-08-28',
    content:
      '生活について話しましょう。\n生活はとても面白いです。\n料理は年です。\n日は時です。\n服は散歩です。\n私は散歩が好きです。\n明日も生活を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '年', reading: 'とし', meaning: '年' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '日', reading: 'ひ', meaning: '日/天' }
    ],
  },
  {
    id: '35',
    title: '夜の過ごし方',
    source: '日常読解 (N5)',
    date: '2025-06-21',
    content:
      '勉強について話しましょう。\n勉強はとても面白いです。\n手紙は良いです。\n仕事は良いです。\n本は小さいです。\n私は手紙が好きです。\n明日も料理を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '小さい', reading: 'ちいさい', meaning: '小' },
      { word: '本', reading: 'ほん', meaning: '书' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '良い', reading: 'よい', meaning: '好' }
    ],
  },
  {
    id: '36',
    title: '友達との約束',
    source: '生活エッセイ (N5)',
    date: '2025-07-14',
    content:
      '店について話しましょう。\n店はとても面白いです。\n電話は家族です。\n店は電車です。\n電車は掃除です。\n私は店が好きです。\n明日も掃除を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' }
    ],
  },
  {
    id: '37',
    title: '雨の日の過ごし方',
    source: '生活エッセイ (N5)',
    date: '2025-05-28',
    content:
      '家族について話しましょう。\n家族はとても面白いです。\n仕事は多いです。\n家族は悪いです。\n仕事は小さいです。\n私は道が好きです。\n明日も電話を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小さい', reading: 'ちいさい', meaning: '小' },
      { word: '悪い', reading: 'わるい', meaning: '不好' },
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '多い', reading: 'おおい', meaning: '多' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '電話', reading: 'でんわ', meaning: '电话' }
    ],
  },
  {
    id: '38',
    title: '部屋の模様替え',
    source: '生活エッセイ (N5)',
    date: '2025-04-13',
    content:
      '服について話しましょう。\n服はとても面白いです。\n服は大きいです。\n宿題は古いです。\n店は素敵です。\n私は店が好きです。\n明日も服を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宿題', reading: 'しゅくだい', meaning: '作业' },
      { word: '古い', reading: 'ふるい', meaning: '旧' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '素敵', reading: 'すてき', meaning: '美妙' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '大きい', reading: 'おおきい', meaning: '大' }
    ],
  },
  {
    id: '39',
    title: '郵便局へ行く',
    source: '生活エッセイ (N5)',
    date: '2025-08-15',
    content:
      '公園について話しましょう。\n公園はとても面白いです。\n家族は生活です。\n手紙は生活です。\n事は生活です。\n私は手紙が好きです。\n明日も手紙を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '事', reading: 'こと', meaning: '事情' }
    ],
  },
  {
    id: '40',
    title: '銀行の利用',
    source: '生活エッセイ (N5)',
    date: '2025-03-13',
    content:
      '服について話しましょう。\n服はとても面白いです。\n手紙は手紙です。\n掃除は朝です。\n鞄は服です。\n私は夜が好きです。\n明日も手紙を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '鞄', reading: 'かばん', meaning: '包' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '朝', reading: 'あさ', meaning: '早上' }
    ],
  },
  {
    id: '41',
    title: 'ごみの分別',
    source: '生活エッセイ (N5)',
    date: '2025-12-27',
    content:
      '夜について話しましょう。\n夜はとても面白いです。\n事は上手です。\n事は新しいです。\n事は忙しいです。\n私は勉強が好きです。\n明日も駅を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '忙しい', reading: 'いそがしい', meaning: '忙' },
      { word: '新しい', reading: 'あたらしい', meaning: '新' },
      { word: '上手', reading: 'じょうず', meaning: '擅长' },
      { word: '事', reading: 'こと', meaning: '事情' }
    ],
  },
  {
    id: '42',
    title: '節約のコツ',
    source: '生活エッセイ (N5)',
    date: '2025-11-02',
    content:
      '道について話しましょう。\n道はとても面白いです。\n本は嬉しいです。\n道は素敵です。\n店は嬉しいです。\n私は公園が好きです。\n明日も夜を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '素敵', reading: 'すてき', meaning: '美妙' },
      { word: '本', reading: 'ほん', meaning: '书' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '嬉しい', reading: 'うれしい', meaning: '高兴' },
      { word: '道', reading: 'みち', meaning: '道路' }
    ],
  },
  {
    id: '43',
    title: '手紙を書く',
    source: '生活エッセイ (N5)',
    date: '2025-11-17',
    content:
      '生活について話しましょう。\n生活はとても面白いです。\n物は易しいです。\n日は易しいです。\n物は易しいです。\n私は年が好きです。\n明日も家を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '易しい', reading: 'やさしい', meaning: '容易' },
      { word: '年', reading: 'とし', meaning: '年' },
      { word: '家', reading: 'いえ', meaning: '家' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' }
    ],
  },
  {
    id: '44',
    title: '地域の行事',
    source: '日常読解 (N5)',
    date: '2025-06-09',
    content:
      '生活について話しましょう。\n生活はとても面白いです。\n生活は時間です。\n道は公園です。\n写真は事です。\n私は公園が好きです。\n明日も駅を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '道', reading: 'みち', meaning: '道路' }
    ],
  },
  {
    id: '45',
    title: '隣の人との交流',
    source: '生活エッセイ (N5)',
    date: '2025-06-17',
    content:
      '散歩について話しましょう。\n散歩はとても面白いです。\n店は道です。\n天は朝です。\n物は行くです。\n私は物が好きです。\n明日も天を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '朝', reading: 'あさ', meaning: '早上' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '天', reading: 'てん', meaning: '天' }
    ],
  },
  {
    id: '46',
    title: '私の一日',
    source: '生活エッセイ (N4)',
    date: '2025-04-16',
    content:
      '買い物について考えてみましょう。\n買い物は日常生活の中で大切な役割を果たしています。\n例えば、友達を始めることがあります。\n例えば、道を入ることがあります。\n例えば、掃除を分かることがあります。\nこのように、日は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '買い物', reading: 'かいもの', meaning: '购物' },
      { word: '入る', reading: 'いる', meaning: '进入' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '分かる', reading: 'わかる', meaning: '明白' }
    ],
  },
  {
    id: '47',
    title: '週末の過ごし方',
    source: '生活エッセイ (N4)',
    date: '2025-09-09',
    content:
      '料理について考えてみましょう。\n料理は日常生活の中で大切な役割を果たしています。\n例えば、写真を買うことがあります。\n例えば、写真を歩くことがあります。\n例えば、服を続けることがあります。\nこのように、料理は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '買う', reading: 'かう', meaning: '买' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '服', reading: 'ふく', meaning: '衣服' }
    ],
  },
  {
    id: '48',
    title: '買い物の楽しみ',
    source: '生活エッセイ (N4)',
    date: '2025-08-18',
    content:
      '洗濯について考えてみましょう。\n洗濯は日常生活の中で大切な役割を果たしています。\n例えば、家族を話すことがあります。\n例えば、電話を起きることがあります。\n例えば、家族を聞くことがあります。\nこのように、電話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '起きる', reading: 'おきる', meaning: '起床' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '家族', reading: 'かぞく', meaning: '家人' }
    ],
  },
  {
    id: '49',
    title: '料理の時間',
    source: '日常読解 (N4)',
    date: '2025-07-20',
    content:
      '宿題について考えてみましょう。\n宿題は日常生活の中で大切な役割を果たしています。\n例えば、駅を飲むことがあります。\n例えば、友達を続けることがあります。\n例えば、散歩を会うことがあります。\nこのように、友達は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宿題', reading: 'しゅくだい', meaning: '作业' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '会う', reading: 'あう', meaning: '见面' }
    ],
  },
  {
    id: '50',
    title: '掃除の日',
    source: '日常読解 (N4)',
    date: '2025-05-19',
    content:
      '朝について考えてみましょう。\n朝は日常生活の中で大切な役割を果たしています。\n例えば、散歩を起きることがあります。\n例えば、勉強を起きることがあります。\n例えば、勉強を起きることがあります。\nこのように、手紙は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起きる', reading: 'おきる', meaning: '起床' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '朝', reading: 'あさ', meaning: '早上' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '手紙', reading: 'てがみ', meaning: '信' }
    ],
  },
  {
    id: '51',
    title: '朝の習慣',
    source: '生活エッセイ (N4)',
    date: '2025-01-27',
    content:
      '手紙について考えてみましょう。\n手紙は日常生活の中で大切な役割を果たしています。\n例えば、掃除を綺麗ことがあります。\n例えば、手紙を時ことがあります。\n例えば、手紙を手紙ことがあります。\nこのように、天気は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '綺麗', reading: 'きれい', meaning: '漂亮' },
      { word: '時', reading: 'とき', meaning: '时候' }
    ],
  },
  {
    id: '52',
    title: '通勤の風景',
    source: '生活エッセイ (N4)',
    date: '2025-10-11',
    content:
      '鞄について考えてみましょう。\n鞄は日常生活の中で大切な役割を果たしています。\n例えば、買い物を歩くことがあります。\n例えば、車を歩くことがあります。\n例えば、時を歩くことがあります。\nこのように、洗濯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '買い物', reading: 'かいもの', meaning: '购物' },
      { word: '鞄', reading: 'かばん', meaning: '包' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '歩く', reading: 'あるく', meaning: '走路' }
    ],
  },
  {
    id: '53',
    title: '家族との夕食',
    source: '生活エッセイ (N4)',
    date: '2025-09-15',
    content:
      '年について考えてみましょう。\n年は日常生活の中で大切な役割を果たしています。\n例えば、家族を分かることがあります。\n例えば、写真を歩くことがあります。\n例えば、写真を乾かすことがあります。\nこのように、買い物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '買い物', reading: 'かいもの', meaning: '购物' },
      { word: '年', reading: 'とし', meaning: '年' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '乾かす', reading: 'かわかす', meaning: '晾干' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '家族', reading: 'かぞく', meaning: '家人' }
    ],
  },
  {
    id: '54',
    title: '休日の朝',
    source: '日常読解 (N4)',
    date: '2025-03-24',
    content:
      '事について考えてみましょう。\n事は日常生活の中で大切な役割を果たしています。\n例えば、鞄を飲むことがあります。\n例えば、服を飲むことがあります。\n例えば、手紙を知ることがあります。\nこのように、鞄は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '鞄', reading: 'かばん', meaning: '包' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '飲む', reading: 'のむ', meaning: '喝' }
    ],
  },
  {
    id: '55',
    title: '寝る前の時間',
    source: '日常読解 (N4)',
    date: '2025-12-13',
    content:
      '写真について考えてみましょう。\n写真は日常生活の中で大切な役割を果たしています。\n例えば、友達を聞くことがあります。\n例えば、写真を洗うことがあります。\n例えば、写真を聞くことがあります。\nこのように、友達は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '洗う', reading: 'あらう', meaning: '洗' },
      { word: '聞く', reading: 'きく', meaning: '听' }
    ],
  },
  {
    id: '56',
    title: '近所の公園',
    source: '日常読解 (N4)',
    date: '2025-11-25',
    content:
      '勉強について考えてみましょう。\n勉強は日常生活の中で大切な役割を果たしています。\n例えば、公園を書くことがあります。\n例えば、車を来ることがあります。\n例えば、公園を来ることがあります。\nこのように、買い物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '買い物', reading: 'かいもの', meaning: '购物' },
      { word: '来る', reading: 'くる', meaning: '来' }
    ],
  },
  {
    id: '57',
    title: '散歩の楽しみ',
    source: '日常読解 (N4)',
    date: '2025-07-11',
    content:
      '電車について考えてみましょう。\n電車は日常生活の中で大切な役割を果たしています。\n例えば、駅を考えることがあります。\n例えば、駅を行くことがあります。\n例えば、駅を覚えることがあります。\nこのように、天候は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '天候', reading: 'てんこう', meaning: '气候' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '駅', reading: 'えき', meaning: '车站' }
    ],
  },
  {
    id: '58',
    title: 'ペットとの生活',
    source: '日常読解 (N4)',
    date: '2025-11-14',
    content:
      '靴について考えてみましょう。\n靴は日常生活の中で大切な役割を果たしています。\n例えば、夜を行くことがあります。\n例えば、靴を作ることがあります。\n例えば、靴を知ることがあります。\nこのように、夜は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '知る', reading: 'しる', meaning: '知道' }
    ],
  },
  {
    id: '59',
    title: '日曜大工',
    source: '生活エッセイ (N4)',
    date: '2025-10-08',
    content:
      '服について考えてみましょう。\n服は日常生活の中で大切な役割を果たしています。\n例えば、服を直すことがあります。\n例えば、年を使うことがあります。\n例えば、服を乾かすことがあります。\nこのように、年は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '年', reading: 'とし', meaning: '年' },
      { word: '乾かす', reading: 'かわかす', meaning: '晾干' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '60',
    title: '庭の手入れ',
    source: '生活エッセイ (N4)',
    date: '2025-12-27',
    content:
      '事について考えてみましょう。\n事は日常生活の中で大切な役割を果たしています。\n例えば、服を朝ことがあります。\n例えば、服を人ことがあります。\n例えば、朝を人ことがあります。\nこのように、公園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '朝', reading: 'あさ', meaning: '早上' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '人', reading: 'じん', meaning: '人' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '人', reading: 'じん', meaning: '人' }
    ],
  },
  {
    id: '61',
    title: '引っ越しの準備',
    source: '生活エッセイ (N4)',
    date: '2025-11-08',
    content:
      '鞄について考えてみましょう。\n鞄は日常生活の中で大切な役割を果たしています。\n例えば、生活を買うことがあります。\n例えば、車を分かることがあります。\n例えば、生活を帰ることがあります。\nこのように、電車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '買う', reading: 'かう', meaning: '买' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '鞄', reading: 'かばん', meaning: '包' }
    ],
  },
  {
    id: '62',
    title: '新しい家具',
    source: '日常読解 (N4)',
    date: '2025-05-18',
    content:
      '生活について考えてみましょう。\n生活は日常生活の中で大切な役割を果たしています。\n例えば、生活を続けることがあります。\n例えば、電話を考えることがあります。\n例えば、電話を聞くことがあります。\nこのように、年は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '年', reading: 'とし', meaning: '年' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' }
    ],
  },
  {
    id: '63',
    title: '洗濯のコツ',
    source: '生活エッセイ (N4)',
    date: '2025-01-02',
    content:
      '仕事について考えてみましょう。\n仕事は日常生活の中で大切な役割を果たしています。\n例えば、物を帰ることがあります。\n例えば、家族を帰ることがあります。\n例えば、店を帰ることがあります。\nこのように、友達は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '物', reading: 'もの', meaning: '东西' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '家族', reading: 'かぞく', meaning: '家人' },
      { word: '帰る', reading: 'かえる', meaning: '回来' }
    ],
  },
  {
    id: '64',
    title: '朝食のメニュー',
    source: '日常読解 (N4)',
    date: '2025-02-01',
    content:
      '店について考えてみましょう。\n店は日常生活の中で大切な役割を果たしています。\n例えば、手紙を飲むことがあります。\n例えば、手紙を飲むことがあります。\n例えば、料理を脱ぐことがあります。\nこのように、道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '手紙', reading: 'てがみ', meaning: '信' },
      { word: '脱ぐ', reading: 'ぬぐ', meaning: '脱' }
    ],
  },
  {
    id: '65',
    title: '夜の過ごし方',
    source: '日常読解 (N4)',
    date: '2025-05-05',
    content:
      '夜について考えてみましょう。\n夜は日常生活の中で大切な役割を果たしています。\n例えば、旅行を帰ることがあります。\n例えば、旅行を帰ることがあります。\n例えば、靴を始めることがあります。\nこのように、時は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '夜', reading: 'よる', meaning: '晚上' },
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' }
    ],
  },
  {
    id: '66',
    title: '友達との約束',
    source: '生活エッセイ (N4)',
    date: '2025-05-08',
    content:
      '事について考えてみましょう。\n事は日常生活の中で大切な役割を果たしています。\n例えば、公園を忘れることがあります。\n例えば、天気を忘れることがあります。\n例えば、店を入ることがあります。\nこのように、店は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '入る', reading: 'いる', meaning: '进入' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '天気', reading: 'てんき', meaning: '天气' }
    ],
  },
  {
    id: '67',
    title: '雨の日の過ごし方',
    source: '日常読解 (N4)',
    date: '2025-12-13',
    content:
      '掃除について考えてみましょう。\n掃除は日常生活の中で大切な役割を果たしています。\n例えば、宿題を食べることがあります。\n例えば、洗濯を見ることがあります。\n例えば、宿題を食べることがあります。\nこのように、掃除は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '宿題', reading: 'しゅくだい', meaning: '作业' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '掃除', reading: 'そうじ', meaning: '打扫' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '食べる', reading: 'たべる', meaning: '吃' }
    ],
  },
  {
    id: '68',
    title: '部屋の模様替え',
    source: '生活エッセイ (N4)',
    date: '2025-12-06',
    content:
      '友達について考えてみましょう。\n友達は日常生活の中で大切な役割を果たしています。\n例えば、服を走ることがあります。\n例えば、服を歩くことがあります。\n例えば、鞄を出ることがあります。\nこのように、日は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '鞄', reading: 'かばん', meaning: '包' },
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '服', reading: 'ふく', meaning: '衣服' }
    ],
  },
  {
    id: '69',
    title: '郵便局へ行く',
    source: '生活エッセイ (N4)',
    date: '2025-12-19',
    content:
      '靴について考えてみましょう。\n靴は日常生活の中で大切な役割を果たしています。\n例えば、靴を食べることがあります。\n例えば、天候を食べることがあります。\n例えば、靴を乾かすことがあります。\nこのように、天候は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乾かす', reading: 'かわかす', meaning: '晾干' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '靴', reading: 'くつ', meaning: '鞋子' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '天候', reading: 'てんこう', meaning: '气候' }
    ],
  },
  {
    id: '70',
    title: '銀行の利用',
    source: '日常読解 (N4)',
    date: '2025-07-21',
    content:
      '手紙について考えてみましょう。\n手紙は日常生活の中で大切な役割を果たしています。\n例えば、時間を見ることがあります。\n例えば、洗濯を見ることがあります。\n例えば、事を書くことがあります。\nこのように、時間は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '洗濯', reading: 'せんたく', meaning: '洗衣' },
      { word: '事', reading: 'こと', meaning: '事情' },
      { word: '手紙', reading: 'てがみ', meaning: '信' }
    ],
  },
  {
    id: '71',
    title: 'ごみの分別',
    source: '日常読解 (N4)',
    date: '2025-05-19',
    content:
      '道について考えてみましょう。\n道は日常生活の中で大切な役割を果たしています。\n例えば、天候を入ることがあります。\n例えば、旅行を入ることがあります。\n例えば、服を続けることがあります。\nこのように、時間は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '旅行', reading: 'りょこう', meaning: '旅行' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '入る', reading: 'いる', meaning: '进入' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '道', reading: 'みち', meaning: '道路' },
      { word: '天候', reading: 'てんこう', meaning: '气候' }
    ],
  },
  {
    id: '72',
    title: '節約のコツ',
    source: '生活エッセイ (N4)',
    date: '2025-03-21',
    content:
      '料理について考えてみましょう。\n料理は日常生活の中で大切な役割を果たしています。\n例えば、料理を直すことがあります。\n例えば、天候を走ることがあります。\n例えば、勉強を直すことがあります。\nこのように、店は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '天候', reading: 'てんこう', meaning: '气候' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '店', reading: 'みせ', meaning: '店' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '直す', reading: 'なおす', meaning: '修理' }
    ],
  },
  {
    id: '73',
    title: '手紙を書く',
    source: '日常読解 (N4)',
    date: '2025-01-05',
    content:
      '服について考えてみましょう。\n服は日常生活の中で大切な役割を果たしています。\n例えば、公園を時ことがあります。\n例えば、散歩を公園ことがあります。\n例えば、電話を公園ことがあります。\nこのように、電話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '時', reading: 'とき', meaning: '时候' },
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '服', reading: 'ふく', meaning: '衣服' },
      { word: '電話', reading: 'でんわ', meaning: '电话' }
    ],
  },
  {
    id: '74',
    title: '地域の行事',
    source: '日常読解 (N4)',
    date: '2025-10-28',
    content:
      '料理について考えてみましょう。\n料理は日常生活の中で大切な役割を果たしています。\n例えば、時間を寝ることがあります。\n例えば、散歩を出ることがあります。\n例えば、散歩を出ることがあります。\nこのように、仕事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '散歩', reading: 'さんぽ', meaning: '散步' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '仕事', reading: 'しごと', meaning: '工作' }
    ],
  },
  {
    id: '75',
    title: '隣の人との交流',
    source: '生活エッセイ (N4)',
    date: '2025-10-16',
    content:
      '電話について考えてみましょう。\n電話は日常生活の中で大切な役割を果たしています。\n例えば、公園を使うことがあります。\n例えば、生活を着ることがあります。\n例えば、仕事を使うことがあります。\nこのように、公園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着る', reading: 'きる', meaning: '穿' },
      { word: '生活', reading: 'せいかつ', meaning: '生活' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '日', reading: 'ひ', meaning: '日/天' },
      { word: '公園', reading: 'こうえん', meaning: '公园' }
    ],
  },
  {
    id: '76',
    title: '和食の魅力',
    source: '食文化読解 (N5)',
    date: '2025-08-01',
    content:
      'コンビニについて話しましょう。\nコンビニはとても面白いです。\nコンビニは柔らかいです。\n油は酸っぱいです。\n魚屋は冷たいです。\n私はパンが好きです。\n明日も麺を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酸っぱい', reading: 'すっぱい', meaning: '酸' },
      { word: '柔らかい', reading: 'やわらかい', meaning: '柔软' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '冷たい', reading: 'つめたい', meaning: '冷' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: 'パン', reading: 'パン', meaning: '面包' }
    ],
  },
  {
    id: '77',
    title: '寿司の歴史',
    source: 'グルメエッセイ (N5)',
    date: '2025-08-08',
    content:
      '市場について話しましょう。\n市場はとても面白いです。\n卵は熱いです。\nご飯は熱いです。\n味は熱いです。\n私は酒が好きです。\n明日も食事を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' }
    ],
  },
  {
    id: '78',
    title: 'ラーメン巡り',
    source: 'グルメエッセイ (N5)',
    date: '2025-01-09',
    content:
      'ご飯について話しましょう。\nご飯はとても面白いです。\nお茶は硬いです。\n卵は美味しいです。\n味は硬いです。\n私はご飯が好きです。\n明日もお茶を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '硬い', reading: 'かたい', meaning: '硬' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃' }
    ],
  },
  {
    id: '79',
    title: 'お弁当作り',
    source: 'グルメエッセイ (N5)',
    date: '2025-09-13',
    content:
      '果物について話しましょう。\n果物はとても面白いです。\n油は辛いです。\n果物は塩辛いです。\n冷蔵庫は新鮮です。\n私は冷蔵庫が好きです。\n明日も冷蔵庫を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' }
    ],
  },
  {
    id: '80',
    title: '日本の果物',
    source: '食文化読解 (N5)',
    date: '2025-11-04',
    content:
      '肉について話しましょう。\n肉はとても面白いです。\n果物は新鮮です。\nコンビニは辛いです。\n味噌は辛いです。\n私は塩が好きです。\n明日も調味料を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '果物', reading: 'くだもの', meaning: '水果' }
    ],
  },
  {
    id: '81',
    title: '抹茶の世界',
    source: '食文化読解 (N5)',
    date: '2025-05-18',
    content:
      '昼食について話しましょう。\n昼食はとても面白いです。\n昼食は新鮮です。\n朝食は柔らかいです。\n油は甘いです。\n私は昼食が好きです。\n明日もパン屋を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '柔らかい', reading: 'やわらかい', meaning: '柔软' },
      { word: '甘い', reading: 'あまい', meaning: '甜' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' }
    ],
  },
  {
    id: '82',
    title: '和菓子の美しさ',
    source: '食文化読解 (N5)',
    date: '2025-12-27',
    content:
      '鍋について話しましょう。\n鍋はとても面白いです。\n野菜は熱いです。\n食事は熱いです。\n朝食は塩辛いです。\n私は肉が好きです。\n明日も朝食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' }
    ],
  },
  {
    id: '83',
    title: '鍋料理の季節',
    source: 'グルメエッセイ (N5)',
    date: '2025-09-12',
    content:
      '食事について話しましょう。\n食事はとても面白いです。\n酒は酢です。\n材料は包丁です。\n食べ物は味です。\n私は酢が好きです。\n明日も皿を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '皿', reading: 'さら', meaning: '盘子' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' }
    ],
  },
  {
    id: '84',
    title: '屋台の食べ物',
    source: 'グルメエッセイ (N5)',
    date: '2025-06-18',
    content:
      'ご飯について話しましょう。\nご飯はとても面白いです。\n調味料は美味しいです。\n夕食は熱いです。\n醤油は熱いです。\n私は冷蔵庫が好きです。\n明日も喫茶店を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '醤油', reading: 'しょうゆ', meaning: '酱油' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '熱い', reading: 'あつい', meaning: '热' }
    ],
  },
  {
    id: '85',
    title: '朝ごはんの文化',
    source: 'グルメエッセイ (N5)',
    date: '2025-03-04',
    content:
      '米について話しましょう。\n米はとても面白いです。\n塩は辛いです。\n食べ物は新鮮です。\n醤油は酸っぱいです。\n私はお茶が好きです。\n明日も塩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '米', reading: 'メートル', meaning: '米' },
      { word: '酸っぱい', reading: 'すっぱい', meaning: '酸' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '醤油', reading: 'しょうゆ', meaning: '酱油' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' }
    ],
  },
  {
    id: '86',
    title: '味噌汁の作り方',
    source: 'グルメエッセイ (N5)',
    date: '2025-05-28',
    content:
      '鍋について話しましょう。\n鍋はとても面白いです。\n昼食は酸っぱいです。\n昼食は冷たいです。\n酒は硬いです。\n私は食べ物が好きです。\n明日も塩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '硬い', reading: 'かたい', meaning: '硬' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '冷たい', reading: 'つめたい', meaning: '冷' },
      { word: '酸っぱい', reading: 'すっぱい', meaning: '酸' },
      { word: '酒', reading: 'さけ', meaning: '酒' }
    ],
  },
  {
    id: '87',
    title: 'おにぎりの種類',
    source: 'グルメエッセイ (N5)',
    date: '2025-01-11',
    content:
      '砂糖について話しましょう。\n砂糖はとても面白いです。\n砂糖は新鮮です。\n食べ物は塩辛いです。\n茶碗は新鮮です。\n私は茶碗が好きです。\n明日も油を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' }
    ],
  },
  {
    id: '88',
    title: '天ぷらの秘密',
    source: 'グルメエッセイ (N5)',
    date: '2025-04-21',
    content:
      '冷蔵庫について話しましょう。\n冷蔵庫はとても面白いです。\n酒は熱いです。\n箸は熱いです。\n冷蔵庫は熱いです。\n私は食事が好きです。\n明日も箸を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '箸', reading: 'はし', meaning: '筷子' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' }
    ],
  },
  {
    id: '89',
    title: 'そばとうどん',
    source: '食文化読解 (N5)',
    date: '2025-07-11',
    content:
      '調味料について話しましょう。\n調味料はとても面白いです。\nパン屋は美味しいです。\n食べ物は美味しいです。\n野菜は美味しいです。\n私は冷蔵庫が好きです。\n明日も果物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '果物', reading: 'くだもの', meaning: '水果' }
    ],
  },
  {
    id: '90',
    title: '焼き鳥の楽しみ',
    source: 'グルメエッセイ (N5)',
    date: '2025-02-02',
    content:
      'パンについて話しましょう。\nパンはとても面白いです。\n台所は塩辛いです。\n野菜は塩辛いです。\n調味料は塩辛いです。\n私は台所が好きです。\n明日も材料を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' }
    ],
  },
  {
    id: '91',
    title: '刺身の食べ方',
    source: 'グルメエッセイ (N5)',
    date: '2025-10-21',
    content:
      'パンについて話しましょう。\nパンはとても面白いです。\n昼食は朝食です。\n居酒屋は肉です。\n味噌は朝食です。\n私は台所が好きです。\n明日も包丁を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' }
    ],
  },
  {
    id: '92',
    title: '日本酒入門',
    source: 'グルメエッセイ (N5)',
    date: '2025-04-21',
    content:
      '魚について話しましょう。\n魚はとても面白いです。\n麺は苦いです。\n酢は苦いです。\n麺は苦いです。\n私は酢が好きです。\n明日も麺を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '苦い', reading: 'にがい', meaning: '苦' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '魚', reading: 'さかな', meaning: '鱼' }
    ],
  },
  {
    id: '93',
    title: 'お茶の種類',
    source: '食文化読解 (N5)',
    date: '2025-11-14',
    content:
      '醤油について話しましょう。\n醤油はとても面白いです。\n居酒屋は冷たいです。\n水は苦いです。\n酢は柔らかいです。\n私は卵が好きです。\n明日も肉を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '冷たい', reading: 'つめたい', meaning: '冷' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '醤油', reading: 'しょうゆ', meaning: '酱油' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '柔らかい', reading: 'やわらかい', meaning: '柔软' },
      { word: '苦い', reading: 'にがい', meaning: '苦' }
    ],
  },
  {
    id: '94',
    title: '駅弁の旅',
    source: '食文化読解 (N5)',
    date: '2025-03-05',
    content:
      'お茶について話しましょう。\nお茶はとても面白いです。\n塩は辛いです。\n塩は美味しいです。\nご飯は苦いです。\n私は麺が好きです。\n明日も塩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃' },
      { word: '苦い', reading: 'にがい', meaning: '苦' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' }
    ],
  },
  {
    id: '95',
    title: '家庭料理の思い出',
    source: '食文化読解 (N5)',
    date: '2025-11-22',
    content:
      '鍋について話しましょう。\n鍋はとても面白いです。\n朝食は新鮮です。\n食事は新鮮です。\n食事は新鮮です。\n私は食事が好きです。\n明日も昼食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '鍋', reading: 'なべ', meaning: '锅' }
    ],
  },
  {
    id: '96',
    title: 'カレーライス',
    source: 'グルメエッセイ (N5)',
    date: '2025-01-01',
    content:
      '食事について話しましょう。\n食事はとても面白いです。\n食事は辛いです。\n魚屋は新鮮です。\n塩は辛いです。\n私は魚屋が好きです。\n明日も塩を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' }
    ],
  },
  {
    id: '97',
    title: 'たこ焼き作り',
    source: '食文化読解 (N5)',
    date: '2025-10-04',
    content:
      '喫茶店について話しましょう。\n喫茶店はとても面白いです。\n居酒屋は柔らかいです。\nコンビニは苦いです。\n喫茶店は塩辛いです。\n私は茶碗が好きです。\n明日も昼食を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '苦い', reading: 'にがい', meaning: '苦' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '柔らかい', reading: 'やわらかい', meaning: '柔软' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' }
    ],
  },
  {
    id: '98',
    title: 'お好み焼き',
    source: '食文化読解 (N5)',
    date: '2025-12-23',
    content:
      '卵について話しましょう。\n卵はとても面白いです。\n料理は熱いです。\n水は辛いです。\n食堂は熱いです。\n私は香りが好きです。\n明日も食べ物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '香り', reading: 'かおり', meaning: '香味' },
      { word: '熱い', reading: 'あつい', meaning: '热' }
    ],
  },
  {
    id: '99',
    title: '漬物の種類',
    source: '食文化読解 (N5)',
    date: '2025-11-16',
    content:
      '魚屋について話しましょう。\n魚屋はとても面白いです。\n米は熱いです。\n酒は苦いです。\n喫茶店は苦いです。\n私は米が好きです。\n明日も酒を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '苦い', reading: 'にがい', meaning: '苦' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '米', reading: 'メートル', meaning: '米' }
    ],
  },
  {
    id: '100',
    title: 'スイーツ巡り',
    source: '食文化読解 (N5)',
    date: '2025-07-16',
    content:
      '冷蔵庫について話しましょう。\n冷蔵庫はとても面白いです。\n味噌は美味しいです。\nお茶は美味しいです。\n酢は美味しいです。\n私は味噌が好きです。\n明日も台所を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '美味しい', reading: 'おいしい', meaning: '好吃' }
    ],
  },
  {
    id: '101',
    title: '居酒屋の楽しみ',
    source: '食文化読解 (N5)',
    date: '2025-12-02',
    content:
      '鍋について話しましょう。\n鍋はとても面白いです。\n水は熱いです。\nレストランは苦いです。\n鍋は辛いです。\n私はお茶が好きです。\n明日も米を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '米', reading: 'メートル', meaning: '米' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '苦い', reading: 'にがい', meaning: '苦' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: 'レストラン', reading: 'レストラン', meaning: '餐厅' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' }
    ],
  },
  {
    id: '102',
    title: '回転寿司',
    source: 'グルメエッセイ (N5)',
    date: '2025-04-27',
    content:
      '八百屋について話しましょう。\n八百屋はとても面白いです。\n朝食は辛いです。\n鍋は熱いです。\n食事は辛いです。\n私はお茶が好きです。\n明日も食べ物を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '熱い', reading: 'あつい', meaning: '热' },
      { word: '辛い', reading: 'からい', meaning: '痛苦' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' }
    ],
  },
  {
    id: '103',
    title: 'コンビニおにぎり',
    source: '食文化読解 (N5)',
    date: '2025-12-26',
    content:
      '市場について話しましょう。\n市場はとても面白いです。\n油は新鮮です。\n八百屋は塩辛いです。\n食堂は新鮮です。\n私は冷蔵庫が好きです。\n明日も酢を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新鮮', reading: 'しんせん', meaning: '新鲜' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '塩辛い', reading: 'しおからい', meaning: '咸' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '酢', reading: 'す', meaning: '醋' }
    ],
  },
  {
    id: '104',
    title: '季節の果物',
    source: 'グルメエッセイ (N5)',
    date: '2025-10-03',
    content:
      '水について話しましょう。\n水はとても面白いです。\n水はお茶です。\n茶碗は味噌です。\n味はパンです。\n私は卵が好きです。\n明日も麺を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' }
    ],
  },
  {
    id: '105',
    title: '料理教室体験',
    source: 'グルメエッセイ (N5)',
    date: '2025-06-15',
    content:
      '茶碗について話しましょう。\n茶碗はとても面白いです。\n麺は味です。\n米は調味料です。\n味は朝食です。\n私は茶碗が好きです。\n明日も油を勉強します。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '米', reading: 'メートル', meaning: '米' },
      { word: '麺', reading: 'めん', meaning: '面' }
    ],
  },
  {
    id: '106',
    title: '和食の魅力',
    source: '食文化読解 (N4)',
    date: '2025-01-01',
    content:
      '喫茶店について考えてみましょう。\n喫茶店は日常生活の中で大切な役割を果たしています。\n例えば、喫茶店を食べることがあります。\n例えば、魚屋を切ることがあります。\n例えば、魚屋を食べることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '切る', reading: 'きる', meaning: 'to cut' }
    ],
  },
  {
    id: '107',
    title: '寿司の歴史',
    source: '食文化読解 (N4)',
    date: '2025-09-19',
    content:
      'お茶について考えてみましょう。\nお茶は日常生活の中で大切な役割を果たしています。\n例えば、野菜を食べることがあります。\n例えば、料理を味わうことがあります。\n例えば、水を飲むことがあります。\nこのように、野菜は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' }
    ],
  },
  {
    id: '108',
    title: 'ラーメン巡り',
    source: 'グルメエッセイ (N4)',
    date: '2025-01-14',
    content:
      '水について考えてみましょう。\n水は日常生活の中で大切な役割を果たしています。\n例えば、砂糖を昼食ことがあります。\n例えば、材料を砂糖ことがあります。\n例えば、砂糖を麺ことがあります。\nこのように、麺は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '水', reading: 'みず', meaning: '水' }
    ],
  },
  {
    id: '109',
    title: 'お弁当作り',
    source: '食文化読解 (N4)',
    date: '2025-07-08',
    content:
      '材料について考えてみましょう。\n材料は日常生活の中で大切な役割を果たしています。\n例えば、米を作ることがあります。\n例えば、材料を作ることがあります。\n例えば、材料を焼くことがあります。\nこのように、醤油は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '醤油', reading: 'しょうゆ', meaning: '酱油' },
      { word: '米', reading: 'メートル', meaning: '米' }
    ],
  },
  {
    id: '110',
    title: '日本の果物',
    source: 'グルメエッセイ (N4)',
    date: '2025-05-16',
    content:
      '野菜について考えてみましょう。\n野菜は日常生活の中で大切な役割を果たしています。\n例えば、野菜を焼くことがあります。\n例えば、食べ物を焼くことがあります。\n例えば、酒を召し上がることがあります。\nこのように、魚屋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' }
    ],
  },
  {
    id: '111',
    title: '抹茶の世界',
    source: '食文化読解 (N4)',
    date: '2025-07-25',
    content:
      '果物について考えてみましょう。\n果物は日常生活の中で大切な役割を果たしています。\n例えば、果物を煮ることがあります。\n例えば、料理を煮ることがあります。\n例えば、水を煮ることがあります。\nこのように、鍋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' }
    ],
  },
  {
    id: '112',
    title: '和菓子の美しさ',
    source: 'グルメエッセイ (N4)',
    date: '2025-07-08',
    content:
      '果物について考えてみましょう。\n果物は日常生活の中で大切な役割を果たしています。\n例えば、魚を混ぜることがあります。\n例えば、米を食べることがあります。\n例えば、味を混ぜることがあります。\nこのように、パン屋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '米', reading: 'メートル', meaning: '米' }
    ],
  },
  {
    id: '113',
    title: '鍋料理の季節',
    source: 'グルメエッセイ (N4)',
    date: '2025-11-12',
    content:
      '味について考えてみましょう。\n味は日常生活の中で大切な役割を果たしています。\n例えば、水を切ることがあります。\n例えば、八百屋を焼くことがあります。\n例えば、味を焼くことがあります。\nこのように、夕食は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' }
    ],
  },
  {
    id: '114',
    title: '屋台の食べ物',
    source: 'グルメエッセイ (N4)',
    date: '2025-01-02',
    content:
      '材料について考えてみましょう。\n材料は日常生活の中で大切な役割を果たしています。\n例えば、市場を食べることがあります。\n例えば、食事を切ることがあります。\n例えば、ご飯を切ることがあります。\nこのように、市場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' }
    ],
  },
  {
    id: '115',
    title: '朝ごはんの文化',
    source: '食文化読解 (N4)',
    date: '2025-01-14',
    content:
      '八百屋について考えてみましょう。\n八百屋は日常生活の中で大切な役割を果たしています。\n例えば、八百屋を味わうことがあります。\n例えば、野菜を味わうことがあります。\n例えば、卵を切ることがあります。\nこのように、野菜は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' }
    ],
  },
  {
    id: '116',
    title: '味噌汁の作り方',
    source: '食文化読解 (N4)',
    date: '2025-02-14',
    content:
      '麺について考えてみましょう。\n麺は日常生活の中で大切な役割を果たしています。\n例えば、食事を食べることがあります。\n例えば、居酒屋を食べることがあります。\n例えば、砂糖を食べることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' }
    ],
  },
  {
    id: '117',
    title: 'おにぎりの種類',
    source: '食文化読解 (N4)',
    date: '2025-05-06',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、八百屋を煮ることがあります。\n例えば、果物を召し上がることがあります。\n例えば、お茶を茹でることがあります。\nこのように、台所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' }
    ],
  },
  {
    id: '118',
    title: '天ぷらの秘密',
    source: '食文化読解 (N4)',
    date: '2025-08-05',
    content:
      '材料について考えてみましょう。\n材料は日常生活の中で大切な役割を果たしています。\n例えば、食べ物を蒸すことがあります。\n例えば、パンを蒸すことがあります。\n例えば、パンを焼くことがあります。\nこのように、市場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' }
    ],
  },
  {
    id: '119',
    title: 'そばとうどん',
    source: '食文化読解 (N4)',
    date: '2025-10-23',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、塩を茹でることがあります。\n例えば、台所を切ることがあります。\n例えば、包丁を切ることがあります。\nこのように、食べ物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' }
    ],
  },
  {
    id: '120',
    title: '焼き鳥の楽しみ',
    source: 'グルメエッセイ (N4)',
    date: '2025-08-19',
    content:
      '肉について考えてみましょう。\n肉は日常生活の中で大切な役割を果たしています。\n例えば、コンビニを味わうことがあります。\n例えば、レストランを茹でることがあります。\n例えば、パンを味わうことがあります。\nこのように、醤油は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '醤油', reading: 'しょうゆ', meaning: '酱油' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: 'レストラン', reading: 'レストラン', meaning: '餐厅' }
    ],
  },
  {
    id: '121',
    title: '刺身の食べ方',
    source: '食文化読解 (N4)',
    date: '2025-09-20',
    content:
      '鍋について考えてみましょう。\n鍋は日常生活の中で大切な役割を果たしています。\n例えば、コンビニを飲むことがあります。\n例えば、料理を飲むことがあります。\n例えば、調味料を飲むことがあります。\nこのように、油は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' }
    ],
  },
  {
    id: '122',
    title: '日本酒入門',
    source: '食文化読解 (N4)',
    date: '2025-12-02',
    content:
      'ご飯について考えてみましょう。\nご飯は日常生活の中で大切な役割を果たしています。\n例えば、酢を味わうことがあります。\n例えば、卵を炒めることがあります。\n例えば、皿を炒めることがあります。\nこのように、米は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '皿', reading: 'さら', meaning: '盘子' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '米', reading: 'メートル', meaning: '米' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' }
    ],
  },
  {
    id: '123',
    title: 'お茶の種類',
    source: '食文化読解 (N4)',
    date: '2025-03-18',
    content:
      '麺について考えてみましょう。\n麺は日常生活の中で大切な役割を果たしています。\n例えば、材料を召し上がることがあります。\n例えば、箸を召し上がることがあります。\n例えば、麺を召し上がることがあります。\nこのように、砂糖は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '箸', reading: 'はし', meaning: '筷子' }
    ],
  },
  {
    id: '124',
    title: '駅弁の旅',
    source: 'グルメエッセイ (N4)',
    date: '2025-03-16',
    content:
      '市場について考えてみましょう。\n市場は日常生活の中で大切な役割を果たしています。\n例えば、パンを蒸すことがあります。\n例えば、市場を炒めることがあります。\n例えば、冷蔵庫を蒸すことがあります。\nこのように、台所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '125',
    title: '家庭料理の思い出',
    source: '食文化読解 (N4)',
    date: '2025-07-08',
    content:
      'パンについて考えてみましょう。\nパンは日常生活の中で大切な役割を果たしています。\n例えば、酒を水ことがあります。\n例えば、調味料を朝食ことがあります。\n例えば、油を台所ことがあります。\nこのように、夕食は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: 'パン', reading: 'パン', meaning: '面包' }
    ],
  },
  {
    id: '126',
    title: 'カレーライス',
    source: 'グルメエッセイ (N4)',
    date: '2025-01-28',
    content:
      '味噌について考えてみましょう。\n味噌は日常生活の中で大切な役割を果たしています。\n例えば、味噌を食べることがあります。\n例えば、香りを煮ることがあります。\n例えば、香りを炒めることがあります。\nこのように、包丁は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '香り', reading: 'かおり', meaning: '香味' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '127',
    title: 'たこ焼き作り',
    source: '食文化読解 (N4)',
    date: '2025-06-03',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、コンビニを飲むことがあります。\n例えば、味を混ぜることがあります。\n例えば、台所を切ることがあります。\nこのように、魚屋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' },
      { word: '切る', reading: 'きる', meaning: 'to cut' }
    ],
  },
  {
    id: '128',
    title: 'お好み焼き',
    source: 'グルメエッセイ (N4)',
    date: '2025-09-10',
    content:
      '昼食について考えてみましょう。\n昼食は日常生活の中で大切な役割を果たしています。\n例えば、喫茶店を炒めることがあります。\n例えば、パン屋を味わうことがあります。\n例えば、砂糖を炒めることがあります。\nこのように、パン屋は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' }
    ],
  },
  {
    id: '129',
    title: '漬物の種類',
    source: 'グルメエッセイ (N4)',
    date: '2025-11-27',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、食堂を炒めることがあります。\n例えば、レストランを炒めることがあります。\n例えば、酒を混ぜることがあります。\nこのように、食事は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'レストラン', reading: 'レストラン', meaning: '餐厅' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '130',
    title: 'スイーツ巡り',
    source: '食文化読解 (N4)',
    date: '2025-11-24',
    content:
      '塩について考えてみましょう。\n塩は日常生活の中で大切な役割を果たしています。\n例えば、砂糖を蒸すことがあります。\n例えば、香りを飲むことがあります。\n例えば、香りを飲むことがあります。\nこのように、茶碗は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '香り', reading: 'かおり', meaning: '香味' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' }
    ],
  },
  {
    id: '131',
    title: '居酒屋の楽しみ',
    source: 'グルメエッセイ (N4)',
    date: '2025-03-27',
    content:
      '肉について考えてみましょう。\n肉は日常生活の中で大切な役割を果たしています。\n例えば、昼食を食べることがあります。\n例えば、味を作ることがあります。\n例えば、麺を切ることがあります。\nこのように、ご飯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' }
    ],
  },
  {
    id: '132',
    title: '回転寿司',
    source: '食文化読解 (N4)',
    date: '2025-04-06',
    content:
      '台所について考えてみましょう。\n台所は日常生活の中で大切な役割を果たしています。\n例えば、油を召し上がることがあります。\n例えば、塩を切ることがあります。\n例えば、レストランを召し上がることがあります。\nこのように、台所は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'レストラン', reading: 'レストラン', meaning: '餐厅' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '油', reading: 'あぶら', meaning: '油' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' }
    ],
  },
  {
    id: '133',
    title: 'コンビニおにぎり',
    source: 'グルメエッセイ (N4)',
    date: '2025-11-26',
    content:
      '味噌について考えてみましょう。\n味噌は日常生活の中で大切な役割を果たしています。\n例えば、味を台所ことがあります。\n例えば、パンをご飯ことがあります。\n例えば、水を味ことがあります。\nこのように、味噌は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' }
    ],
  },
  {
    id: '134',
    title: '季節の果物',
    source: '食文化読解 (N4)',
    date: '2025-08-15',
    content:
      '味噌について考えてみましょう。\n味噌は日常生活の中で大切な役割を果たしています。\n例えば、料理を味噌ことがあります。\n例えば、味を酢ことがあります。\n例えば、料理を茶碗ことがあります。\nこのように、調味料は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' }
    ],
  },
  {
    id: '135',
    title: '料理教室体験',
    source: 'グルメエッセイ (N4)',
    date: '2025-01-27',
    content:
      'レストランについて考えてみましょう。\nレストランは日常生活の中で大切な役割を果たしています。\n例えば、鍋を茹でることがあります。\n例えば、塩を味わうことがあります。\n例えば、夕食を食べることがあります。\nこのように、夕食は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: 'レストラン', reading: 'レストラン', meaning: '餐厅' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '鍋', reading: 'なべ', meaning: '锅' }
    ],
  },
  {
    id: '136',
    title: '和食の魅力',
    source: '食文化読解 (N3)',
    date: '2025-05-19',
    content:
      '八百屋について深く掘り下げて考えてみたいと思います。\n現代社会において、八百屋は重要なテーマとなっています。\n特に皿を炒める過程で、さまざまな発見がありました。\n特に果物を炒める過程で、さまざまな発見がありました。\n特に八百屋を炒める過程で、さまざまな発見がありました。\n食事についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '皿', reading: 'さら', meaning: '盘子' },
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' }
    ],
  },
  {
    id: '137',
    title: '寿司の歴史',
    source: '食文化読解 (N3)',
    date: '2025-12-25',
    content:
      '居酒屋について深く掘り下げて考えてみたいと思います。\n現代社会において、居酒屋は重要なテーマとなっています。\n特に居酒屋を焼く過程で、さまざまな発見がありました。\n特に居酒屋を作る過程で、さまざまな発見がありました。\n特にパン屋を作る過程で、さまざまな発見がありました。\n調味料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パン', reading: 'パン', meaning: '面包' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' }
    ],
  },
  {
    id: '138',
    title: 'ラーメン巡り',
    source: '食文化読解 (N3)',
    date: '2025-12-08',
    content:
      '味について深く掘り下げて考えてみたいと思います。\n現代社会において、味は重要なテーマとなっています。\n特に台所を茹でる過程で、さまざまな発見がありました。\n特に調味料を召し上がる過程で、さまざまな発見がありました。\n特にご飯を召し上がる過程で、さまざまな発見がありました。\nご飯についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '茹でる', reading: 'ゆでる', meaning: 'to boil (something in hot water)' }
    ],
  },
  {
    id: '139',
    title: 'お弁当作り',
    source: 'グルメエッセイ (N3)',
    date: '2025-10-10',
    content:
      '昼食について深く掘り下げて考えてみたいと思います。\n現代社会において、昼食は重要なテーマとなっています。\n特に食事を茶碗過程で、さまざまな発見がありました。\n特に料理を飲み物過程で、さまざまな発見がありました。\n特に食事を酒過程で、さまざまな発見がありました。\n魚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '飲み物', reading: 'のみもの', meaning: '饮料' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' }
    ],
  },
  {
    id: '140',
    title: '日本の果物',
    source: 'グルメエッセイ (N3)',
    date: '2025-09-23',
    content:
      '包丁について深く掘り下げて考えてみたいと思います。\n現代社会において、包丁は重要なテーマとなっています。\n特に魚を味わう過程で、さまざまな発見がありました。\n特に八百屋を混ぜる過程で、さまざまな発見がありました。\n特に包丁を蒸す過程で、さまざまな発見がありました。\n喫茶店についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' }
    ],
  },
  {
    id: '141',
    title: '抹茶の世界',
    source: 'グルメエッセイ (N3)',
    date: '2025-11-27',
    content:
      '料理について深く掘り下げて考えてみたいと思います。\n現代社会において、料理は重要なテーマとなっています。\n特に料理を飲む過程で、さまざまな発見がありました。\n特に味を炒める過程で、さまざまな発見がありました。\n特に味を作る過程で、さまざまな発見がありました。\nパン屋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '飲む', reading: 'のむ', meaning: '喝' }
    ],
  },
  {
    id: '142',
    title: '和菓子の美しさ',
    source: 'グルメエッセイ (N3)',
    date: '2025-06-14',
    content:
      '食堂について深く掘り下げて考えてみたいと思います。\n現代社会において、食堂は重要なテーマとなっています。\n特に味を召し上がる過程で、さまざまな発見がありました。\n特に箸を蒸す過程で、さまざまな発見がありました。\n特に水を蒸す過程で、さまざまな発見がありました。\nパン屋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '箸', reading: 'はし', meaning: '筷子' },
      { word: '食堂', reading: 'しょくどう', meaning: 'dining room' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: 'パン屋', reading: 'パンや', meaning: 'bakery' }
    ],
  },
  {
    id: '143',
    title: '鍋料理の季節',
    source: 'グルメエッセイ (N3)',
    date: '2025-05-15',
    content:
      '肉について深く掘り下げて考えてみたいと思います。\n現代社会において、肉は重要なテーマとなっています。\n特に肉を煮る過程で、さまざまな発見がありました。\n特に肉を飲む過程で、さまざまな発見がありました。\n特に夕食を煮る過程で、さまざまな発見がありました。\n八百屋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '飲む', reading: 'のむ', meaning: '喝' }
    ],
  },
  {
    id: '144',
    title: '屋台の食べ物',
    source: '食文化読解 (N3)',
    date: '2025-04-06',
    content:
      '味について深く掘り下げて考えてみたいと思います。\n現代社会において、味は重要なテーマとなっています。\n特に味を召し上がる過程で、さまざまな発見がありました。\n特に居酒屋を混ぜる過程で、さまざまな発見がありました。\n特に魚を作る過程で、さまざまな発見がありました。\n味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '居酒屋', reading: 'いざかや', meaning: 'izakaya' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '作る', reading: 'つくる', meaning: '做' }
    ],
  },
  {
    id: '145',
    title: '朝ごはんの文化',
    source: '食文化読解 (N3)',
    date: '2025-09-21',
    content:
      '調味料について深く掘り下げて考えてみたいと思います。\n現代社会において、調味料は重要なテーマとなっています。\n特に水を味わう過程で、さまざまな発見がありました。\n特に魚を焼く過程で、さまざまな発見がありました。\n特に調味料を食べる過程で、さまざまな発見がありました。\n魚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' }
    ],
  },
  {
    id: '146',
    title: '味噌汁の作り方',
    source: '食文化読解 (N3)',
    date: '2025-04-23',
    content:
      '食べ物について深く掘り下げて考えてみたいと思います。\n現代社会において、食べ物は重要なテーマとなっています。\n特に茶碗を炒める過程で、さまざまな発見がありました。\n特に果物を炒める過程で、さまざまな発見がありました。\n特に酢を蒸す過程で、さまざまな発見がありました。\n夕食についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '果物', reading: 'くだもの', meaning: '水果' }
    ],
  },
  {
    id: '147',
    title: 'おにぎりの種類',
    source: '食文化読解 (N3)',
    date: '2025-01-14',
    content:
      '肉について深く掘り下げて考えてみたいと思います。\n現代社会において、肉は重要なテーマとなっています。\n特に市場を焼く過程で、さまざまな発見がありました。\n特に冷蔵庫を作る過程で、さまざまな発見がありました。\n特に料理を焼く過程で、さまざまな発見がありました。\n果物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '果物', reading: 'くだもの', meaning: '水果' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '冷蔵庫', reading: 'れいぞうこ', meaning: '冰箱' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '市場', reading: 'いちば', meaning: '市场' }
    ],
  },
  {
    id: '148',
    title: '天ぷらの秘密',
    source: '食文化読解 (N3)',
    date: '2025-05-01',
    content:
      '飲み物について深く掘り下げて考えてみたいと思います。\n現代社会において、飲み物は重要なテーマとなっています。\n特に料理を炒める過程で、さまざまな発見がありました。\n特に肉を混ぜる過程で、さまざまな発見がありました。\n特に野菜を切る過程で、さまざまな発見がありました。\n野菜についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '肉', reading: 'にく', meaning: '肉' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '飲み物', reading: 'のみもの', meaning: '饮料' },
      { word: '料理', reading: 'りょうり', meaning: '料理' }
    ],
  },
  {
    id: '149',
    title: 'そばとうどん',
    source: '食文化読解 (N3)',
    date: '2025-09-21',
    content:
      '酒について深く掘り下げて考えてみたいと思います。\n現代社会において、酒は重要なテーマとなっています。\n特に昼食を炒める過程で、さまざまな発見がありました。\n特に酢を煮る過程で、さまざまな発見がありました。\n特に箸を煮る過程で、さまざまな発見がありました。\nご飯についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酢', reading: 'す', meaning: '醋' },
      { word: '箸', reading: 'はし', meaning: '筷子' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' }
    ],
  },
  {
    id: '150',
    title: '焼き鳥の楽しみ',
    source: 'グルメエッセイ (N3)',
    date: '2025-07-05',
    content:
      '飲み物について深く掘り下げて考えてみたいと思います。\n現代社会において、飲み物は重要なテーマとなっています。\n特に砂糖を味わう過程で、さまざまな発見がありました。\n特にご飯を作る過程で、さまざまな発見がありました。\n特に八百屋を味わう過程で、さまざまな発見がありました。\n香りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '飲み物', reading: 'のみもの', meaning: '饮料' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '香り', reading: 'かおり', meaning: '香味' }
    ],
  },
  {
    id: '151',
    title: '刺身の食べ方',
    source: 'グルメエッセイ (N3)',
    date: '2025-06-26',
    content:
      '水について深く掘り下げて考えてみたいと思います。\n現代社会において、水は重要なテーマとなっています。\n特に鍋を味わう過程で、さまざまな発見がありました。\n特に魚を飲む過程で、さまざまな発見がありました。\n特に卵を混ぜる過程で、さまざまな発見がありました。\n酒についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '魚', reading: 'さかな', meaning: '鱼' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '鍋', reading: 'なべ', meaning: '锅' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '水', reading: 'みず', meaning: '水' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' }
    ],
  },
  {
    id: '152',
    title: '日本酒入門',
    source: '食文化読解 (N3)',
    date: '2025-05-10',
    content:
      'コンビニについて深く掘り下げて考えてみたいと思います。\n現代社会において、コンビニは重要なテーマとなっています。\n特に味噌を蒸す過程で、さまざまな発見がありました。\n特にコンビニを召し上がる過程で、さまざまな発見がありました。\n特に卵を召し上がる過程で、さまざまな発見がありました。\n調味料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '蒸す', reading: 'むす', meaning: 'to steam (food, towel, etc.)' },
      { word: '調味料', reading: 'ちょうみりょう', meaning: '调味料' },
      { word: '卵', reading: 'たまご', meaning: '鸡蛋' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' }
    ],
  },
  {
    id: '153',
    title: 'お茶の種類',
    source: 'グルメエッセイ (N3)',
    date: '2025-12-20',
    content:
      '食べ物について深く掘り下げて考えてみたいと思います。\n現代社会において、食べ物は重要なテーマとなっています。\n特に砂糖を焼く過程で、さまざまな発見がありました。\n特に味噌を切る過程で、さまざまな発見がありました。\n特に野菜を切る過程で、さまざまな発見がありました。\n食事についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '切る', reading: 'きる', meaning: 'to cut' }
    ],
  },
  {
    id: '154',
    title: '駅弁の旅',
    source: 'グルメエッセイ (N3)',
    date: '2025-07-05',
    content:
      '材料について深く掘り下げて考えてみたいと思います。\n現代社会において、材料は重要なテーマとなっています。\n特に皿を混ぜる過程で、さまざまな発見がありました。\n特に皿を混ぜる過程で、さまざまな発見がありました。\n特に市場を炒める過程で、さまざまな発見がありました。\n材料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '皿', reading: 'さら', meaning: '盘子' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' }
    ],
  },
  {
    id: '155',
    title: '家庭料理の思い出',
    source: 'グルメエッセイ (N3)',
    date: '2025-01-22',
    content:
      '包丁について深く掘り下げて考えてみたいと思います。\n現代社会において、包丁は重要なテーマとなっています。\n特に野菜を包丁過程で、さまざまな発見がありました。\n特に麺を箸過程で、さまざまな発見がありました。\n特に茶碗を夕食過程で、さまざまな発見がありました。\n塩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '野菜', reading: 'やさい', meaning: '蔬菜' },
      { word: '箸', reading: 'はし', meaning: '筷子' }
    ],
  },
  {
    id: '156',
    title: 'カレーライス',
    source: '食文化読解 (N3)',
    date: '2025-09-13',
    content:
      '肉について深く掘り下げて考えてみたいと思います。\n現代社会において、肉は重要なテーマとなっています。\n特にご飯を食べる過程で、さまざまな発見がありました。\n特に塩を召し上がる過程で、さまざまな発見がありました。\n特に麺を切る過程で、さまざまな発見がありました。\n食べ物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ご飯', reading: 'ごはん', meaning: '米饭' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '召し上がる', reading: 'めしあがる', meaning: 'to eat' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' },
      { word: '肉', reading: 'にく', meaning: '肉' }
    ],
  },
  {
    id: '157',
    title: 'たこ焼き作り',
    source: 'グルメエッセイ (N3)',
    date: '2025-08-16',
    content:
      '魚屋について深く掘り下げて考えてみたいと思います。\n現代社会において、魚屋は重要なテーマとなっています。\n特に塩を混ぜる過程で、さまざまな発見がありました。\n特に魚屋を飲む過程で、さまざまな発見がありました。\n特に朝食を飲む過程で、さまざまな発見がありました。\n料理についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '朝食', reading: 'ちょうしょく', meaning: '早餐' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '魚屋', reading: 'さかなや', meaning: 'fish market' }
    ],
  },
  {
    id: '158',
    title: 'お好み焼き',
    source: 'グルメエッセイ (N3)',
    date: '2025-10-26',
    content:
      'コンビニについて深く掘り下げて考えてみたいと思います。\n現代社会において、コンビニは重要なテーマとなっています。\n特にコンビニを炒める過程で、さまざまな発見がありました。\n特に昼食を作る過程で、さまざまな発見がありました。\n特にコンビニを混ぜる過程で、さまざまな発見がありました。\n魚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '混ぜる', reading: 'まぜる', meaning: 'to mix' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '昼食', reading: 'ちゅうしょく', meaning: '午餐' },
      { word: '魚', reading: 'さかな', meaning: '鱼' }
    ],
  },
  {
    id: '159',
    title: '漬物の種類',
    source: 'グルメエッセイ (N3)',
    date: '2025-02-21',
    content:
      '市場について深く掘り下げて考えてみたいと思います。\n現代社会において、市場は重要なテーマとなっています。\n特に市場を味わう過程で、さまざまな発見がありました。\n特に市場を味わう過程で、さまざまな発見がありました。\n特に八百屋を味わう過程で、さまざまな発見がありました。\nコンビニについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '八百屋', reading: 'やおや', meaning: 'greengrocer' },
      { word: '味', reading: 'あじ', meaning: '味道' }
    ],
  },
  {
    id: '160',
    title: 'スイーツ巡り',
    source: '食文化読解 (N3)',
    date: '2025-03-18',
    content:
      '麺について深く掘り下げて考えてみたいと思います。\n現代社会において、麺は重要なテーマとなっています。\n特に夕食を炒める過程で、さまざまな発見がありました。\n特に塩を食べる過程で、さまざまな発見がありました。\n特に味噌を炒める過程で、さまざまな発見がありました。\n肉についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: '味噌', reading: 'みそ', meaning: '味噌' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '肉', reading: 'にく', meaning: '肉' }
    ],
  },
  {
    id: '161',
    title: '居酒屋の楽しみ',
    source: 'グルメエッセイ (N3)',
    date: '2025-08-21',
    content:
      '肉について深く掘り下げて考えてみたいと思います。\n現代社会において、肉は重要なテーマとなっています。\n特に塩を切る過程で、さまざまな発見がありました。\n特に料理を切る過程で、さまざまな発見がありました。\n特に市場を煮る過程で、さまざまな発見がありました。\nコンビニについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '料理', reading: 'りょうり', meaning: '料理' },
      { word: '塩', reading: 'しお', meaning: '盐' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '肉', reading: 'にく', meaning: '肉' }
    ],
  },
  {
    id: '162',
    title: '回転寿司',
    source: '食文化読解 (N3)',
    date: '2025-12-04',
    content:
      'お茶について深く掘り下げて考えてみたいと思います。\n現代社会において、お茶は重要なテーマとなっています。\n特に酒を作る過程で、さまざまな発見がありました。\n特に材料を切る過程で、さまざまな発見がありました。\n特に台所を作る過程で、さまざまな発見がありました。\n箸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: 'お茶', reading: 'おちゃ', meaning: '茶' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '材料', reading: 'ざいりょう', meaning: '材料' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '箸', reading: 'はし', meaning: '筷子' },
      { word: '台所', reading: 'だいどころ', meaning: '厨房' }
    ],
  },
  {
    id: '163',
    title: 'コンビニおにぎり',
    source: 'グルメエッセイ (N3)',
    date: '2025-02-21',
    content:
      '包丁について深く掘り下げて考えてみたいと思います。\n現代社会において、包丁は重要なテーマとなっています。\n特に包丁を切る過程で、さまざまな発見がありました。\n特に麺を切る過程で、さまざまな発見がありました。\n特に茶碗を切る過程で、さまざまな発見がありました。\n食べ物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '茶碗', reading: 'ちゃわん', meaning: '茶碗' },
      { word: '麺', reading: 'めん', meaning: '面' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '食べ物', reading: 'たべもの', meaning: '食物' }
    ],
  },
  {
    id: '164',
    title: '季節の果物',
    source: '食文化読解 (N3)',
    date: '2025-10-20',
    content:
      '酒について深く掘り下げて考えてみたいと思います。\n現代社会において、酒は重要なテーマとなっています。\n特に夕食を炒める過程で、さまざまな発見がありました。\n特に包丁を煮る過程で、さまざまな発見がありました。\n特に包丁を焼く過程で、さまざまな発見がありました。\n肉についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '煮る', reading: 'にる', meaning: 'to boil' },
      { word: '包丁', reading: 'ほうちょう', meaning: '菜刀' },
      { word: '酒', reading: 'さけ', meaning: '酒' },
      { word: '夕食', reading: 'ゆうしょく', meaning: '晚餐' },
      { word: '焼く', reading: 'やく', meaning: 'to burn' },
      { word: '炒める', reading: 'いためる', meaning: 'to fry' },
      { word: '肉', reading: 'にく', meaning: '肉' }
    ],
  },
  {
    id: '165',
    title: '料理教室体験',
    source: 'グルメエッセイ (N3)',
    date: '2025-06-20',
    content:
      '食事について深く掘り下げて考えてみたいと思います。\n現代社会において、食事は重要なテーマとなっています。\n特に味を切る過程で、さまざまな発見がありました。\n特に砂糖を切る過程で、さまざまな発見がありました。\n特に酢を食べる過程で、さまざまな発見がありました。\n飲み物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '飲み物', reading: 'のみもの', meaning: '饮料' },
      { word: '砂糖', reading: 'さとう', meaning: '糖' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '切る', reading: 'きる', meaning: 'to cut' },
      { word: '味', reading: 'あじ', meaning: '味道' },
      { word: '酢', reading: 'す', meaning: '醋' }
    ],
  },
  {
    id: '166',
    title: 'AIの進化',
    source: 'テクノロジー読解 (N3)',
    date: '2025-07-28',
    content:
      '改善について深く掘り下げて考えてみたいと思います。\n現代社会において、改善は重要なテーマとなっています。\n特に画面を使う過程で、さまざまな発見がありました。\n特に操作を使う過程で、さまざまな発見がありました。\n特に接続を使う過程で、さまざまな発見がありました。\n操作についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '167',
    title: 'スマートフォンの未来',
    source: '科学ニュース (N3)',
    date: '2025-06-22',
    content:
      '技術について深く掘り下げて考えてみたいと思います。\n現代社会において、技術は重要なテーマとなっています。\n特に設計を使う過程で、さまざまな発見がありました。\n特に改善を使う過程で、さまざまな発見がありました。\n特に発見を使う過程で、さまざまな発見がありました。\n記憶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' }
    ],
  },
  {
    id: '168',
    title: 'ロボットと暮らす',
    source: '科学ニュース (N3)',
    date: '2025-02-18',
    content:
      'マウスについて深く掘り下げて考えてみたいと思います。\n現代社会において、マウスは重要なテーマとなっています。\n特に革新を使う過程で、さまざまな発見がありました。\n特にマウスを使う過程で、さまざまな発見がありました。\n特に発見を使う過程で、さまざまな発見がありました。\nウェブについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' }
    ],
  },
  {
    id: '169',
    title: '自動運転の時代',
    source: 'テクノロジー読解 (N3)',
    date: '2025-07-03',
    content:
      'ウェブについて深く掘り下げて考えてみたいと思います。\n現代社会において、ウェブは重要なテーマとなっています。\n特に設定をメール過程で、さまざまな発見がありました。\n特に機械を画面過程で、さまざまな発見がありました。\n特に画面を安定過程で、さまざまな発見がありました。\nコンピュータについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' }
    ],
  },
  {
    id: '170',
    title: '電子マネーの普及',
    source: '科学ニュース (N3)',
    date: '2025-12-27',
    content:
      'カメラについて深く掘り下げて考えてみたいと思います。\n現代社会において、カメラは重要なテーマとなっています。\n特にカメラをカメラ過程で、さまざまな発見がありました。\n特に性能を機器過程で、さまざまな発見がありました。\n特にカメラを保存過程で、さまざまな発見がありました。\n性能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '性能', reading: 'せいのう', meaning: '性能' }
    ],
  },
  {
    id: '171',
    title: 'SNSの影響力',
    source: 'テクノロジー読解 (N3)',
    date: '2025-11-28',
    content:
      '性能について深く掘り下げて考えてみたいと思います。\n現代社会において、性能は重要なテーマとなっています。\n特に技術を性能過程で、さまざまな発見がありました。\n特に情報を画期的過程で、さまざまな発見がありました。\n特に更新を利用過程で、さまざまな発見がありました。\n利用についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' }
    ],
  },
  {
    id: '172',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N3)',
    date: '2025-04-08',
    content:
      '技術について深く掘り下げて考えてみたいと思います。\n現代社会において、技術は重要なテーマとなっています。\n特に機能を接続過程で、さまざまな発見がありました。\n特にマウスをセンサー過程で、さまざまな発見がありました。\n特にサーバーを情報過程で、さまざまな発見がありました。\n機械についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' }
    ],
  },
  {
    id: '173',
    title: 'デジタル社会',
    source: 'テクノロジー読解 (N3)',
    date: '2025-12-14',
    content:
      '機器について深く掘り下げて考えてみたいと思います。\n現代社会において、機器は重要なテーマとなっています。\n特に通信を機器過程で、さまざまな発見がありました。\n特に画面をデータ過程で、さまざまな発見がありました。\n特に動画を設定過程で、さまざまな発見がありました。\nデータについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'データ', reading: 'データ', meaning: '数据' }
    ],
  },
  {
    id: '174',
    title: 'VRの可能性',
    source: 'テクノロジー読解 (N3)',
    date: '2025-12-12',
    content:
      'ネットワークについて深く掘り下げて考えてみたいと思います。\n現代社会において、ネットワークは重要なテーマとなっています。\n特に画面を複雑過程で、さまざまな発見がありました。\n特にセンサーを設計過程で、さまざまな発見がありました。\n特にアプリを便利過程で、さまざまな発見がありました。\nシステムについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '便利', reading: 'べんり', meaning: '方便' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '複雑', reading: 'ふくざつ', meaning: '复杂' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' }
    ],
  },
  {
    id: '175',
    title: '宇宙開発の最前線',
    source: '科学ニュース (N3)',
    date: '2025-04-13',
    content:
      '電話について深く掘り下げて考えてみたいと思います。\n現代社会において、電話は重要なテーマとなっています。\n特に動画を更新過程で、さまざまな発見がありました。\n特に配信を設定過程で、さまざまな発見がありました。\n特に改善を保存過程で、さまざまな発見がありました。\n配信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: '配信', reading: 'はいしん', meaning: '分发' }
    ],
  },
  {
    id: '176',
    title: '環境技術の革新',
    source: '科学ニュース (N3)',
    date: '2025-09-12',
    content:
      '画面について深く掘り下げて考えてみたいと思います。\n現代社会において、画面は重要なテーマとなっています。\n特に記憶をロボット過程で、さまざまな発見がありました。\n特に操作をカメラ過程で、さまざまな発見がありました。\n特に通信を電話過程で、さまざまな発見がありました。\n容量についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: 'ロボット', reading: 'ロボット', meaning: '机器人' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' }
    ],
  },
  {
    id: '177',
    title: '医療とAI',
    source: '科学ニュース (N3)',
    date: '2025-12-05',
    content:
      '保存について深く掘り下げて考えてみたいと思います。\n現代社会において、保存は重要なテーマとなっています。\n特にサイトを情報過程で、さまざまな発見がありました。\n特に画面を研究過程で、さまざまな発見がありました。\n特に研究を開発過程で、さまざまな発見がありました。\n画面についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' }
    ],
  },
  {
    id: '178',
    title: 'ブロックチェーン入門',
    source: 'テクノロジー読解 (N3)',
    date: '2025-01-02',
    content:
      '記憶について深く掘り下げて考えてみたいと思います。\n現代社会において、記憶は重要なテーマとなっています。\n特に機械を情報過程で、さまざまな発見がありました。\n特にメールを情報過程で、さまざまな発見がありました。\n特に発見をプログラム過程で、さまざまな発見がありました。\n装置についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '装置', reading: 'そうち', meaning: '装置' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' }
    ],
  },
  {
    id: '179',
    title: '5Gの世界',
    source: '科学ニュース (N3)',
    date: '2025-05-26',
    content:
      '情報について深く掘り下げて考えてみたいと思います。\n現代社会において、情報は重要なテーマとなっています。\n特に科学を開発過程で、さまざまな発見がありました。\n特に画面を機械過程で、さまざまな発見がありました。\n特に更新を更新過程で、さまざまな発見がありました。\n改善についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '更新', reading: 'こうしん', meaning: '更新' }
    ],
  },
  {
    id: '180',
    title: '再生可能エネルギー',
    source: '科学ニュース (N3)',
    date: '2025-07-16',
    content:
      'ウェブについて深く掘り下げて考えてみたいと思います。\n現代社会において、ウェブは重要なテーマとなっています。\n特に配信を使う過程で、さまざまな発見がありました。\n特に応用を使う過程で、さまざまな発見がありました。\n特に動画を使う過程で、さまざまな発見がありました。\nカメラについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' }
    ],
  },
  {
    id: '181',
    title: 'スマート家電',
    source: 'テクノロジー読解 (N3)',
    date: '2025-11-25',
    content:
      '革新について深く掘り下げて考えてみたいと思います。\n現代社会において、革新は重要なテーマとなっています。\n特に応用を使う過程で、さまざまな発見がありました。\n特にプログラムを使う過程で、さまざまな発見がありました。\n特に開発を使う過程で、さまざまな発見がありました。\nカメラについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '182',
    title: 'データサイエンス',
    source: '科学ニュース (N3)',
    date: '2025-11-25',
    content:
      'ウェブについて深く掘り下げて考えてみたいと思います。\n現代社会において、ウェブは重要なテーマとなっています。\n特に機能を設計過程で、さまざまな発見がありました。\n特に設計を正確過程で、さまざまな発見がありました。\n特に容量を正確過程で、さまざまな発見がありました。\nウェブについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '正確', reading: 'せいかく', meaning: '准确' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' }
    ],
  },
  {
    id: '183',
    title: '仮想通貨の未来',
    source: 'テクノロジー読解 (N3)',
    date: '2025-10-02',
    content:
      'インターネットについて深く掘り下げて考えてみたいと思います。\n現代社会において、インターネットは重要なテーマとなっています。\n特に進歩を製造過程で、さまざまな発見がありました。\n特に容量を製造過程で、さまざまな発見がありました。\n特に安定を発見過程で、さまざまな発見がありました。\nデータについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' },
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' }
    ],
  },
  {
    id: '184',
    title: '遠隔医療',
    source: '科学ニュース (N3)',
    date: '2025-05-14',
    content:
      'システムについて深く掘り下げて考えてみたいと思います。\n現代社会において、システムは重要なテーマとなっています。\n特にプログラムを使う過程で、さまざまな発見がありました。\n特に安定を使う過程で、さまざまな発見がありました。\n特にマウスを使う過程で、さまざまな発見がありました。\n設計についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' }
    ],
  },
  {
    id: '185',
    title: 'ロボット工学',
    source: '科学ニュース (N3)',
    date: '2025-02-17',
    content:
      '画面について深く掘り下げて考えてみたいと思います。\n現代社会において、画面は重要なテーマとなっています。\n特にロボットを性能過程で、さまざまな発見がありました。\n特に画面をサイト過程で、さまざまな発見がありました。\n特にシステムを画面過程で、さまざまな発見がありました。\n通信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: 'ロボット', reading: 'ロボット', meaning: '机器人' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' }
    ],
  },
  {
    id: '186',
    title: 'IoTの可能性',
    source: '科学ニュース (N3)',
    date: '2025-11-07',
    content:
      '機能について深く掘り下げて考えてみたいと思います。\n現代社会において、機能は重要なテーマとなっています。\n特に設定をマウス過程で、さまざまな発見がありました。\n特に設計を設定過程で、さまざまな発見がありました。\n特に更新を機能過程で、さまざまな発見がありました。\n高性能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '高性能', reading: 'こうせいのう', meaning: '高性能' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '性能', reading: 'せいのう', meaning: '性能' }
    ],
  },
  {
    id: '187',
    title: 'クラウド技術',
    source: '科学ニュース (N3)',
    date: '2025-11-22',
    content:
      '利用について深く掘り下げて考えてみたいと思います。\n現代社会において、利用は重要なテーマとなっています。\n特に応用をシステム過程で、さまざまな発見がありました。\n特に利用を通信過程で、さまざまな発見がありました。\n特に進歩を性能過程で、さまざまな発見がありました。\n更新についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '利用', reading: 'りよう', meaning: '利用' }
    ],
  },
  {
    id: '188',
    title: 'サイバーセキュリティ',
    source: '科学ニュース (N3)',
    date: '2025-10-24',
    content:
      '性能について深く掘り下げて考えてみたいと思います。\n現代社会において、性能は重要なテーマとなっています。\n特に通信をカメラ過程で、さまざまな発見がありました。\n特に記憶をロボット過程で、さまざまな発見がありました。\n特に安全を接続過程で、さまざまな発見がありました。\n通信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: 'ロボット', reading: 'ロボット', meaning: '机器人' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '発見', reading: 'はっけん', meaning: '发现' }
    ],
  },
  {
    id: '189',
    title: 'ビッグデータ',
    source: '科学ニュース (N3)',
    date: '2025-04-16',
    content:
      '高度について深く掘り下げて考えてみたいと思います。\n現代社会において、高度は重要なテーマとなっています。\n特に更新を使う過程で、さまざまな発見がありました。\n特に安全を使う過程で、さまざまな発見がありました。\n特に通信を使う過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '更新', reading: 'こうしん', meaning: '更新' }
    ],
  },
  {
    id: '190',
    title: '量子コンピュータ',
    source: 'テクノロジー読解 (N3)',
    date: '2025-01-04',
    content:
      '情報について深く掘り下げて考えてみたいと思います。\n現代社会において、情報は重要なテーマとなっています。\n特に操作を画期的過程で、さまざまな発見がありました。\n特にシステムを製造過程で、さまざまな発見がありました。\n特に技術を情報過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' }
    ],
  },
  {
    id: '191',
    title: '自動翻訳',
    source: '科学ニュース (N3)',
    date: '2025-02-15',
    content:
      'メールについて深く掘り下げて考えてみたいと思います。\n現代社会において、メールは重要なテーマとなっています。\n特にネットワークを使う過程で、さまざまな発見がありました。\n特に発明を使う過程で、さまざまな発見がありました。\n特にメールを使う過程で、さまざまな発見がありました。\nカメラについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '発見', reading: 'はっけん', meaning: '发现' }
    ],
  },
  {
    id: '192',
    title: 'ドローン活用',
    source: '科学ニュース (N3)',
    date: '2025-01-10',
    content:
      'センサーについて深く掘り下げて考えてみたいと思います。\n現代社会において、センサーは重要なテーマとなっています。\n特に記憶を安定過程で、さまざまな発見がありました。\n特に更新を技術過程で、さまざまな発見がありました。\n特に更新を配信過程で、さまざまな発見がありました。\n記憶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: '更新', reading: 'こうしん', meaning: '更新' }
    ],
  },
  {
    id: '193',
    title: '3Dプリンタ',
    source: '科学ニュース (N3)',
    date: '2025-06-14',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特に科学を速度過程で、さまざまな発見がありました。\n特に機械を通信過程で、さまざまな発見がありました。\n特に更新を応用過程で、さまざまな発見がありました。\n科学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '更新', reading: 'こうしん', meaning: '更新' }
    ],
  },
  {
    id: '194',
    title: '電気自動車',
    source: '科学ニュース (N3)',
    date: '2025-11-11',
    content:
      '機器について深く掘り下げて考えてみたいと思います。\n現代社会において、機器は重要なテーマとなっています。\n特にプログラムを容量過程で、さまざまな発見がありました。\n特に保存を電話過程で、さまざまな発見がありました。\n特に技術を速度過程で、さまざまな発見がありました。\n発見についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: '電話', reading: 'でんわ', meaning: '电话' }
    ],
  },
  {
    id: '195',
    title: '人工知能と倫理',
    source: 'テクノロジー読解 (N3)',
    date: '2025-03-16',
    content:
      'ロボットについて深く掘り下げて考えてみたいと思います。\n現代社会において、ロボットは重要なテーマとなっています。\n特にロボットを設定過程で、さまざまな発見がありました。\n特にパソコンをキーボード過程で、さまざまな発見がありました。\n特にキーボードを機器過程で、さまざまな発見がありました。\n発見についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キーボード', reading: 'キーボード', meaning: '键盘' },
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'ロボット', reading: 'ロボット', meaning: '机器人' },
      { word: '発見', reading: 'はっけん', meaning: '发现' }
    ],
  },
  {
    id: '196',
    title: 'AIの進化',
    source: 'テクノロジー読解 (N2)',
    date: '2025-05-26',
    content:
      '応用をめぐる議論は近年ますます活発になっています。\n本稿では、応用の現状と課題について考察します。\n一方で、技術をカメラことの重要性も指摘されています。\n一方で、応用をカメラことの重要性も指摘されています。\n一方で、技術を画期的ことの重要性も指摘されています。\n以上の考察から、安全の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' }
    ],
  },
  {
    id: '197',
    title: 'スマートフォンの未来',
    source: 'テクノロジー読解 (N2)',
    date: '2025-12-03',
    content:
      '機能をめぐる議論は近年ますます活発になっています。\n本稿では、機能の現状と課題について考察します。\n一方で、保存をマウスことの重要性も指摘されています。\n一方で、情報を改善ことの重要性も指摘されています。\n一方で、発見を科学ことの重要性も指摘されています。\n以上の考察から、操作の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' }
    ],
  },
  {
    id: '198',
    title: 'ロボットと暮らす',
    source: '科学ニュース (N2)',
    date: '2025-01-14',
    content:
      'センサーをめぐる議論は近年ますます活発になっています。\n本稿では、センサーの現状と課題について考察します。\n一方で、システムをサーバーことの重要性も指摘されています。\n一方で、機能をマウスことの重要性も指摘されています。\n一方で、センサーを普及ことの重要性も指摘されています。\n以上の考察から、ソフトウェアの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: '软件' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: 'システム', reading: 'システム', meaning: '系统' }
    ],
  },
  {
    id: '199',
    title: '自動運転の時代',
    source: 'テクノロジー読解 (N2)',
    date: '2025-10-21',
    content:
      '記憶をめぐる議論は近年ますます活発になっています。\n本稿では、記憶の現状と課題について考察します。\n一方で、発明を利用ことの重要性も指摘されています。\n一方で、装置を機械ことの重要性も指摘されています。\n一方で、性能を性能ことの重要性も指摘されています。\n以上の考察から、装置の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: '装置', reading: 'そうち', meaning: '装置' },
      { word: '発明', reading: 'はつめい', meaning: '发明' }
    ],
  },
  {
    id: '200',
    title: '電子マネーの普及',
    source: '科学ニュース (N2)',
    date: '2025-12-01',
    content:
      'マウスをめぐる議論は近年ますます活発になっています。\n本稿では、マウスの現状と課題について考察します。\n一方で、開発を科学ことの重要性も指摘されています。\n一方で、カメラを開発ことの重要性も指摘されています。\n一方で、パソコンを電話ことの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' }
    ],
  },
  {
    id: '201',
    title: 'SNSの影響力',
    source: '科学ニュース (N2)',
    date: '2025-07-12',
    content:
      'パソコンをめぐる議論は近年ますます活発になっています。\n本稿では、パソコンの現状と課題について考察します。\n一方で、機械を操作ことの重要性も指摘されています。\n一方で、インターネットを科学ことの重要性も指摘されています。\n一方で、技術を科学ことの重要性も指摘されています。\n以上の考察から、機器の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' }
    ],
  },
  {
    id: '202',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N2)',
    date: '2025-02-04',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、革新を接続ことの重要性も指摘されています。\n一方で、通信を技術ことの重要性も指摘されています。\n一方で、速度を容量ことの重要性も指摘されています。\n以上の考察から、通信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '革新', reading: 'かくしん', meaning: '革新' }
    ],
  },
  {
    id: '203',
    title: 'デジタル社会',
    source: '科学ニュース (N2)',
    date: '2025-01-08',
    content:
      '機械をめぐる議論は近年ますます活発になっています。\n本稿では、機械の現状と課題について考察します。\n一方で、接続をマウスことの重要性も指摘されています。\n一方で、コンピュータを普及ことの重要性も指摘されています。\n一方で、性能を技術ことの重要性も指摘されています。\n以上の考察から、ネットワークの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' }
    ],
  },
  {
    id: '204',
    title: 'VRの可能性',
    source: 'テクノロジー読解 (N2)',
    date: '2025-06-07',
    content:
      'センサーをめぐる議論は近年ますます活発になっています。\n本稿では、センサーの現状と課題について考察します。\n一方で、機能を使うことの重要性も指摘されています。\n一方で、安全を使うことの重要性も指摘されています。\n一方で、容量を使うことの重要性も指摘されています。\n以上の考察から、センサーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' }
    ],
  },
  {
    id: '205',
    title: '宇宙開発の最前線',
    source: '科学ニュース (N2)',
    date: '2025-12-15',
    content:
      'カメラをめぐる議論は近年ますます活発になっています。\n本稿では、カメラの現状と課題について考察します。\n一方で、パソコンを使うことの重要性も指摘されています。\n一方で、ネットワークを使うことの重要性も指摘されています。\n一方で、画面を使うことの重要性も指摘されています。\n以上の考察から、ネットワークの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' }
    ],
  },
  {
    id: '206',
    title: '環境技術の革新',
    source: 'テクノロジー読解 (N2)',
    date: '2025-04-27',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、サーバーを配信ことの重要性も指摘されています。\n一方で、革新を製造ことの重要性も指摘されています。\n一方で、サイトをメールことの重要性も指摘されています。\n以上の考察から、ロボットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: 'ロボット', reading: 'ロボット', meaning: '机器人' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' }
    ],
  },
  {
    id: '207',
    title: '医療とAI',
    source: '科学ニュース (N2)',
    date: '2025-04-02',
    content:
      '更新をめぐる議論は近年ますます活発になっています。\n本稿では、更新の現状と課題について考察します。\n一方で、動画を複雑ことの重要性も指摘されています。\n一方で、ウェブを設定ことの重要性も指摘されています。\n一方で、記憶を容量ことの重要性も指摘されています。\n以上の考察から、電話の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '設定', reading: 'せってい', meaning: '设置' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' },
      { word: '複雑', reading: 'ふくざつ', meaning: '复杂' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' }
    ],
  },
  {
    id: '208',
    title: 'ブロックチェーン入門',
    source: '科学ニュース (N2)',
    date: '2025-03-04',
    content:
      '研究をめぐる議論は近年ますます活発になっています。\n本稿では、研究の現状と課題について考察します。\n一方で、高性能を革新ことの重要性も指摘されています。\n一方で、電話をプログラムことの重要性も指摘されています。\n一方で、プログラムを研究ことの重要性も指摘されています。\n以上の考察から、研究の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '高性能', reading: 'こうせいのう', meaning: '高性能' }
    ],
  },
  {
    id: '209',
    title: '5Gの世界',
    source: 'テクノロジー読解 (N2)',
    date: '2025-03-15',
    content:
      '製造をめぐる議論は近年ますます活発になっています。\n本稿では、製造の現状と課題について考察します。\n一方で、情報を記憶ことの重要性も指摘されています。\n一方で、製造を画面ことの重要性も指摘されています。\n一方で、画面を革新ことの重要性も指摘されています。\n以上の考察から、進歩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' }
    ],
  },
  {
    id: '210',
    title: '再生可能エネルギー',
    source: '科学ニュース (N2)',
    date: '2025-05-22',
    content:
      'マウスをめぐる議論は近年ますます活発になっています。\n本稿では、マウスの現状と課題について考察します。\n一方で、接続を遅いことの重要性も指摘されています。\n一方で、改善を接続ことの重要性も指摘されています。\n一方で、発明を画期的ことの重要性も指摘されています。\n以上の考察から、更新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: '遅い', reading: 'おそい', meaning: '迟' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' }
    ],
  },
  {
    id: '211',
    title: 'スマート家電',
    source: 'テクノロジー読解 (N2)',
    date: '2025-05-26',
    content:
      '性能をめぐる議論は近年ますます活発になっています。\n本稿では、性能の現状と課題について考察します。\n一方で、性能を情報ことの重要性も指摘されています。\n一方で、容量をデータことの重要性も指摘されています。\n一方で、製造をデータことの重要性も指摘されています。\n以上の考察から、製造の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: 'データ', reading: 'データ', meaning: '数据' }
    ],
  },
  {
    id: '212',
    title: 'データサイエンス',
    source: '科学ニュース (N2)',
    date: '2025-08-26',
    content:
      '速度をめぐる議論は近年ますます活発になっています。\n本稿では、速度の現状と課題について考察します。\n一方で、速度を開発ことの重要性も指摘されています。\n一方で、パソコンを発見ことの重要性も指摘されています。\n一方で、科学を接続ことの重要性も指摘されています。\n以上の考察から、科学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' }
    ],
  },
  {
    id: '213',
    title: '仮想通貨の未来',
    source: 'テクノロジー読解 (N2)',
    date: '2025-05-18',
    content:
      '改善をめぐる議論は近年ますます活発になっています。\n本稿では、改善の現状と課題について考察します。\n一方で、機能をネットワークことの重要性も指摘されています。\n一方で、パソコンを安定ことの重要性も指摘されています。\n一方で、記憶を科学ことの重要性も指摘されています。\n以上の考察から、記憶の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '機能', reading: 'きのう', meaning: '功能' }
    ],
  },
  {
    id: '214',
    title: '遠隔医療',
    source: '科学ニュース (N2)',
    date: '2025-03-19',
    content:
      '保存をめぐる議論は近年ますます活発になっています。\n本稿では、保存の現状と課題について考察します。\n一方で、設計を容量ことの重要性も指摘されています。\n一方で、情報をアプリことの重要性も指摘されています。\n一方で、メールを容量ことの重要性も指摘されています。\n以上の考察から、改善の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' }
    ],
  },
  {
    id: '215',
    title: 'ロボット工学',
    source: 'テクノロジー読解 (N2)',
    date: '2025-03-25',
    content:
      '操作をめぐる議論は近年ますます活発になっています。\n本稿では、操作の現状と課題について考察します。\n一方で、安定をメールことの重要性も指摘されています。\n一方で、速度をサイトことの重要性も指摘されています。\n一方で、科学を技術ことの重要性も指摘されています。\n以上の考察から、データの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '科学', reading: 'かがく', meaning: '科学' }
    ],
  },
  {
    id: '216',
    title: 'IoTの可能性',
    source: 'テクノロジー読解 (N2)',
    date: '2025-01-14',
    content:
      '高度をめぐる議論は近年ますます活発になっています。\n本稿では、高度の現状と課題について考察します。\n一方で、容量を改善ことの重要性も指摘されています。\n一方で、設計をシステムことの重要性も指摘されています。\n一方で、カメラを高性能ことの重要性も指摘されています。\n以上の考察から、機能の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '高性能', reading: 'こうせいのう', meaning: '高性能' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '性能', reading: 'せいのう', meaning: '性能' }
    ],
  },
  {
    id: '217',
    title: 'クラウド技術',
    source: '科学ニュース (N2)',
    date: '2025-07-23',
    content:
      '情報をめぐる議論は近年ますます活発になっています。\n本稿では、情報の現状と課題について考察します。\n一方で、通信を速度ことの重要性も指摘されています。\n一方で、機能を情報ことの重要性も指摘されています。\n一方で、通信を接続ことの重要性も指摘されています。\n以上の考察から、利用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' }
    ],
  },
  {
    id: '218',
    title: 'サイバーセキュリティ',
    source: 'テクノロジー読解 (N2)',
    date: '2025-09-24',
    content:
      '製造をめぐる議論は近年ますます活発になっています。\n本稿では、製造の現状と課題について考察します。\n一方で、カメラをプログラムことの重要性も指摘されています。\n一方で、速度をプログラムことの重要性も指摘されています。\n一方で、通信を画期的ことの重要性も指摘されています。\n以上の考察から、機器の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' }
    ],
  },
  {
    id: '219',
    title: 'ビッグデータ',
    source: '科学ニュース (N2)',
    date: '2025-01-07',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、安全を画期的ことの重要性も指摘されています。\n一方で、利用を更新ことの重要性も指摘されています。\n一方で、設計を画面ことの重要性も指摘されています。\n以上の考察から、発明の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '発明', reading: 'はつめい', meaning: '发明' }
    ],
  },
  {
    id: '220',
    title: '量子コンピュータ',
    source: '科学ニュース (N2)',
    date: '2025-10-04',
    content:
      '科学をめぐる議論は近年ますます活発になっています。\n本稿では、科学の現状と課題について考察します。\n一方で、改善を機械ことの重要性も指摘されています。\n一方で、科学を科学ことの重要性も指摘されています。\n一方で、接続をパソコンことの重要性も指摘されています。\n以上の考察から、操作の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' }
    ],
  },
  {
    id: '221',
    title: '自動翻訳',
    source: 'テクノロジー読解 (N2)',
    date: '2025-01-19',
    content:
      'アプリをめぐる議論は近年ますます活発になっています。\n本稿では、アプリの現状と課題について考察します。\n一方で、インターネットを使うことの重要性も指摘されています。\n一方で、配信を使うことの重要性も指摘されています。\n一方で、画面を使うことの重要性も指摘されています。\n以上の考察から、サイトの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '222',
    title: 'ドローン活用',
    source: '科学ニュース (N2)',
    date: '2025-06-28',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、通信を使うことの重要性も指摘されています。\n一方で、保存を使うことの重要性も指摘されています。\n一方で、更新を使うことの重要性も指摘されています。\n以上の考察から、高度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' }
    ],
  },
  {
    id: '223',
    title: '3Dプリンタ',
    source: 'テクノロジー読解 (N2)',
    date: '2025-12-07',
    content:
      '機器をめぐる議論は近年ますます活発になっています。\n本稿では、機器の現状と課題について考察します。\n一方で、アプリを機械ことの重要性も指摘されています。\n一方で、通信をマウスことの重要性も指摘されています。\n一方で、普及をウェブことの重要性も指摘されています。\n以上の考察から、キーボードの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: 'ウェブ', reading: 'ウェブ', meaning: '网页' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: 'キーボード', reading: 'キーボード', meaning: '键盘' }
    ],
  },
  {
    id: '224',
    title: '電気自動車',
    source: 'テクノロジー読解 (N2)',
    date: '2025-05-26',
    content:
      '更新をめぐる議論は近年ますます活発になっています。\n本稿では、更新の現状と課題について考察します。\n一方で、電話を便利ことの重要性も指摘されています。\n一方で、サーバーを科学ことの重要性も指摘されています。\n一方で、科学をコンピュータことの重要性も指摘されています。\n以上の考察から、発見の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '便利', reading: 'べんり', meaning: '方便' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' }
    ],
  },
  {
    id: '225',
    title: '人工知能と倫理',
    source: 'テクノロジー読解 (N2)',
    date: '2025-05-21',
    content:
      '設計をめぐる議論は近年ますます活発になっています。\n本稿では、設計の現状と課題について考察します。\n一方で、配信を使うことの重要性も指摘されています。\n一方で、高度を使うことの重要性も指摘されています。\n一方で、安全を使うことの重要性も指摘されています。\n以上の考察から、配信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '設計', reading: 'せっけい', meaning: '设计' }
    ],
  },
  {
    id: '226',
    title: 'AIの進化',
    source: 'テクノロジー読解 (N1)',
    date: '2025-02-13',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、インターネットを使うことの重要性も指摘されています。\n一方で、技術を使うことの重要性も指摘されています。\n一方で、システムを使うことの重要性も指摘されています。\n以上の考察から、システムの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: 'システム', reading: 'システム', meaning: '系统' }
    ],
  },
  {
    id: '227',
    title: 'スマートフォンの未来',
    source: '科学ニュース (N1)',
    date: '2025-05-08',
    content:
      '利用をめぐる議論は近年ますます活発になっています。\n本稿では、利用の現状と課題について考察します。\n一方で、発見をネットワークことの重要性も指摘されています。\n一方で、通信をマウスことの重要性も指摘されています。\n一方で、更新を通信ことの重要性も指摘されています。\n以上の考察から、装置の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '装置', reading: 'そうち', meaning: '装置' },
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' }
    ],
  },
  {
    id: '228',
    title: 'ロボットと暮らす',
    source: '科学ニュース (N1)',
    date: '2025-07-24',
    content:
      '発見をめぐる議論は近年ますます活発になっています。\n本稿では、発見の現状と課題について考察します。\n一方で、プログラムを使うことの重要性も指摘されています。\n一方で、プログラムを使うことの重要性も指摘されています。\n一方で、保存を使うことの重要性も指摘されています。\n以上の考察から、ソフトウェアの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: '软件' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '229',
    title: '自動運転の時代',
    source: '科学ニュース (N1)',
    date: '2025-12-23',
    content:
      '保存をめぐる議論は近年ますます活発になっています。\n本稿では、保存の現状と課題について考察します。\n一方で、通信を通信ことの重要性も指摘されています。\n一方で、機器を容量ことの重要性も指摘されています。\n一方で、開発を機能ことの重要性も指摘されています。\n以上の考察から、画面の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '通信', reading: 'つうしん', meaning: '通信' }
    ],
  },
  {
    id: '230',
    title: '電子マネーの普及',
    source: 'テクノロジー読解 (N1)',
    date: '2025-07-15',
    content:
      'センサーをめぐる議論は近年ますます活発になっています。\n本稿では、センサーの現状と課題について考察します。\n一方で、発見を画期的ことの重要性も指摘されています。\n一方で、プログラムを革新ことの重要性も指摘されています。\n一方で、通信を発見ことの重要性も指摘されています。\n以上の考察から、保存の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: 'センサー', reading: 'センサー', meaning: '传感器' },
      { word: '革新', reading: 'かくしん', meaning: '革新' },
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: '保存', reading: 'ほぞん', meaning: '保存' }
    ],
  },
  {
    id: '231',
    title: 'SNSの影響力',
    source: 'テクノロジー読解 (N1)',
    date: '2025-06-19',
    content:
      '進歩をめぐる議論は近年ますます活発になっています。\n本稿では、進歩の現状と課題について考察します。\n一方で、動画を設計ことの重要性も指摘されています。\n一方で、マウスを画期的ことの重要性も指摘されています。\n一方で、装置を更新ことの重要性も指摘されています。\n以上の考察から、装置の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '画期的', reading: 'かっきてき', meaning: '划时代' },
      { word: '装置', reading: 'そうち', meaning: '装置' }
    ],
  },
  {
    id: '232',
    title: 'オンライン教育',
    source: 'テクノロジー読解 (N1)',
    date: '2025-02-24',
    content:
      'サイトをめぐる議論は近年ますます活発になっています。\n本稿では、サイトの現状と課題について考察します。\n一方で、通信を応用ことの重要性も指摘されています。\n一方で、通信を機器ことの重要性も指摘されています。\n一方で、電話を応用ことの重要性も指摘されています。\n以上の考察から、発見の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' }
    ],
  },
  {
    id: '233',
    title: 'デジタル社会',
    source: 'テクノロジー読解 (N1)',
    date: '2025-06-18',
    content:
      '科学をめぐる議論は近年ますます活発になっています。\n本稿では、科学の現状と課題について考察します。\n一方で、機器を情報ことの重要性も指摘されています。\n一方で、パソコンを記憶ことの重要性も指摘されています。\n一方で、発見を利用ことの重要性も指摘されています。\n以上の考察から、設計の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: '記憶', reading: 'きおく', meaning: '记忆' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '利用', reading: 'りよう', meaning: '利用' }
    ],
  },
  {
    id: '234',
    title: 'VRの可能性',
    source: 'テクノロジー読解 (N1)',
    date: '2025-09-26',
    content:
      '機械をめぐる議論は近年ますます活発になっています。\n本稿では、機械の現状と課題について考察します。\n一方で、サーバーを科学ことの重要性も指摘されています。\n一方で、インターネットを発明ことの重要性も指摘されています。\n一方で、通信を機器ことの重要性も指摘されています。\n以上の考察から、科学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '機器', reading: 'きき', meaning: '设备' }
    ],
  },
  {
    id: '235',
    title: '宇宙開発の最前線',
    source: '科学ニュース (N1)',
    date: '2025-06-15',
    content:
      '更新をめぐる議論は近年ますます活発になっています。\n本稿では、更新の現状と課題について考察します。\n一方で、機械を装置ことの重要性も指摘されています。\n一方で、接続を研究ことの重要性も指摘されています。\n一方で、通信を革新ことの重要性も指摘されています。\n以上の考察から、コンピュータの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: '装置', reading: 'そうち', meaning: '装置' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '革新', reading: 'かくしん', meaning: '革新' }
    ],
  },
  {
    id: '236',
    title: '環境技術の革新',
    source: '科学ニュース (N1)',
    date: '2025-02-07',
    content:
      '画面をめぐる議論は近年ますます活発になっています。\n本稿では、画面の現状と課題について考察します。\n一方で、画面を使うことの重要性も指摘されています。\n一方で、配信を使うことの重要性も指摘されています。\n一方で、科学を使うことの重要性も指摘されています。\n以上の考察から、利用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' }
    ],
  },
  {
    id: '237',
    title: '医療とAI',
    source: '科学ニュース (N1)',
    date: '2025-11-02',
    content:
      '研究をめぐる議論は近年ますます活発になっています。\n本稿では、研究の現状と課題について考察します。\n一方で、サイトを科学ことの重要性も指摘されています。\n一方で、ネットワークをサイトことの重要性も指摘されています。\n一方で、システムを装置ことの重要性も指摘されています。\n以上の考察から、応用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '装置', reading: 'そうち', meaning: '装置' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: 'システム', reading: 'システム', meaning: '系统' }
    ],
  },
  {
    id: '238',
    title: 'ブロックチェーン入門',
    source: 'テクノロジー読解 (N1)',
    date: '2025-06-11',
    content:
      'システムをめぐる議論は近年ますます活発になっています。\n本稿では、システムの現状と課題について考察します。\n一方で、ネットワークを通信ことの重要性も指摘されています。\n一方で、電話をプリンタことの重要性も指摘されています。\n一方で、機器を通信ことの重要性も指摘されています。\n以上の考察から、動画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: '打印机' }
    ],
  },
  {
    id: '239',
    title: '5Gの世界',
    source: 'テクノロジー読解 (N1)',
    date: '2025-09-17',
    content:
      '電話をめぐる議論は近年ますます活発になっています。\n本稿では、電話の現状と課題について考察します。\n一方で、プログラムを使うことの重要性も指摘されています。\n一方で、データを使うことの重要性も指摘されています。\n一方で、システムを使うことの重要性も指摘されています。\n以上の考察から、普及の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '240',
    title: '再生可能エネルギー',
    source: 'テクノロジー読解 (N1)',
    date: '2025-03-01',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、安定をネットワークことの重要性も指摘されています。\n一方で、機能を通信ことの重要性も指摘されています。\n一方で、カメラをサーバーことの重要性も指摘されています。\n以上の考察から、発明の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' }
    ],
  },
  {
    id: '241',
    title: 'スマート家電',
    source: '科学ニュース (N1)',
    date: '2025-04-02',
    content:
      '発見をめぐる議論は近年ますます活発になっています。\n本稿では、発見の現状と課題について考察します。\n一方で、開発を速度ことの重要性も指摘されています。\n一方で、研究をサイトことの重要性も指摘されています。\n一方で、普及をソフトウェアことの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: '软件' }
    ],
  },
  {
    id: '242',
    title: 'データサイエンス',
    source: '科学ニュース (N1)',
    date: '2025-02-23',
    content:
      'キーボードをめぐる議論は近年ますます活発になっています。\n本稿では、キーボードの現状と課題について考察します。\n一方で、機能を発明ことの重要性も指摘されています。\n一方で、マウスをネットワークことの重要性も指摘されています。\n一方で、接続をカメラことの重要性も指摘されています。\n以上の考察から、キーボードの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: 'マウス', reading: 'マウス', meaning: '鼠标' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: 'キーボード', reading: 'キーボード', meaning: '键盘' }
    ],
  },
  {
    id: '243',
    title: '仮想通貨の未来',
    source: 'テクノロジー読解 (N1)',
    date: '2025-01-24',
    content:
      '機器をめぐる議論は近年ますます活発になっています。\n本稿では、機器の現状と課題について考察します。\n一方で、改善を使うことの重要性も指摘されています。\n一方で、改善を使うことの重要性も指摘されています。\n一方で、キーボードを使うことの重要性も指摘されています。\n以上の考察から、機器の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キーボード', reading: 'キーボード', meaning: '键盘' },
      { word: '機器', reading: 'きき', meaning: '设备' },
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' }
    ],
  },
  {
    id: '244',
    title: '遠隔医療',
    source: '科学ニュース (N1)',
    date: '2025-12-09',
    content:
      '操作をめぐる議論は近年ますます活発になっています。\n本稿では、操作の現状と課題について考察します。\n一方で、普及をデータことの重要性も指摘されています。\n一方で、設計をコンピュータことの重要性も指摘されています。\n一方で、容量を接続ことの重要性も指摘されています。\n以上の考察から、データの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '設計', reading: 'せっけい', meaning: '设计' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '接続', reading: 'せつぞく', meaning: '连接' },
      { word: '操作', reading: 'そうさ', meaning: '操作' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' }
    ],
  },
  {
    id: '245',
    title: 'ロボット工学',
    source: 'テクノロジー読解 (N1)',
    date: '2025-04-26',
    content:
      '普及をめぐる議論は近年ますます活発になっています。\n本稿では、普及の現状と課題について考察します。\n一方で、応用を科学ことの重要性も指摘されています。\n一方で、発明を発明ことの重要性も指摘されています。\n一方で、サーバーを便利ことの重要性も指摘されています。\n以上の考察から、科学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '応用', reading: 'おうよう', meaning: '应用' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '便利', reading: 'べんり', meaning: '方便' }
    ],
  },
  {
    id: '246',
    title: 'IoTの可能性',
    source: 'テクノロジー読解 (N1)',
    date: '2025-05-15',
    content:
      '速度をめぐる議論は近年ますます活発になっています。\n本稿では、速度の現状と課題について考察します。\n一方で、発明を使うことの重要性も指摘されています。\n一方で、コンピュータを使うことの重要性も指摘されています。\n一方で、ソフトウェアを使うことの重要性も指摘されています。\n以上の考察から、情報の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: '软件' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '247',
    title: 'クラウド技術',
    source: '科学ニュース (N1)',
    date: '2025-03-24',
    content:
      '高度をめぐる議論は近年ますます活発になっています。\n本稿では、高度の現状と課題について考察します。\n一方で、システムをサーバーことの重要性も指摘されています。\n一方で、更新を通信ことの重要性も指摘されています。\n一方で、システムを科学ことの重要性も指摘されています。\n以上の考察から、更新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '科学', reading: 'かがく', meaning: '科学' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '高度', reading: 'こうど', meaning: '高度' }
    ],
  },
  {
    id: '248',
    title: 'サイバーセキュリティ',
    source: '科学ニュース (N1)',
    date: '2025-12-27',
    content:
      'プログラムをめぐる議論は近年ますます活発になっています。\n本稿では、プログラムの現状と課題について考察します。\n一方で、ネットワークをキーボードことの重要性も指摘されています。\n一方で、製造を高度ことの重要性も指摘されています。\n一方で、サーバーを改善ことの重要性も指摘されています。\n以上の考察から、高度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: 'ネットワーク', reading: 'ネットワーク', meaning: '网络' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: 'キーボード', reading: 'キーボード', meaning: '键盘' }
    ],
  },
  {
    id: '249',
    title: 'ビッグデータ',
    source: 'テクノロジー読解 (N1)',
    date: '2025-05-09',
    content:
      'データをめぐる議論は近年ますます活発になっています。\n本稿では、データの現状と課題について考察します。\n一方で、コンピュータを使うことの重要性も指摘されています。\n一方で、コンピュータを使うことの重要性も指摘されています。\n一方で、機械を使うことの重要性も指摘されています。\n以上の考察から、利用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '使う', reading: 'つかう', meaning: '使用' },
      { word: '利用', reading: 'りよう', meaning: '利用' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '機械', reading: 'きかい', meaning: '机器' }
    ],
  },
  {
    id: '250',
    title: '量子コンピュータ',
    source: 'テクノロジー読解 (N1)',
    date: '2025-10-24',
    content:
      '通信をめぐる議論は近年ますます活発になっています。\n本稿では、通信の現状と課題について考察します。\n一方で、動画をサイトことの重要性も指摘されています。\n一方で、容量を容量ことの重要性も指摘されています。\n一方で、普及を高性能ことの重要性も指摘されています。\n以上の考察から、通信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '容量', reading: 'ようりょう', meaning: '容量' },
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '高性能', reading: 'こうせいのう', meaning: '高性能' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '動画', reading: 'どうが', meaning: '视频' }
    ],
  },
  {
    id: '251',
    title: '自動翻訳',
    source: 'テクノロジー読解 (N1)',
    date: '2025-04-19',
    content:
      'システムをめぐる議論は近年ますます活発になっています。\n本稿では、システムの現状と課題について考察します。\n一方で、ソフトウェアをサーバーことの重要性も指摘されています。\n一方で、サイトを便利ことの重要性も指摘されています。\n一方で、通信を通信ことの重要性も指摘されています。\n以上の考察から、研究の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通信', reading: 'つうしん', meaning: '通信' },
      { word: 'ソフトウェア', reading: 'ソフトウェア', meaning: '软件' },
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: 'システム', reading: 'システム', meaning: '系统' },
      { word: '便利', reading: 'べんり', meaning: '方便' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '通信', reading: 'つうしん', meaning: '通信' }
    ],
  },
  {
    id: '252',
    title: 'ドローン活用',
    source: 'テクノロジー読解 (N1)',
    date: '2025-07-25',
    content:
      '動画をめぐる議論は近年ますます活発になっています。\n本稿では、動画の現状と課題について考察します。\n一方で、発明を使うことの重要性も指摘されています。\n一方で、プログラムを使うことの重要性も指摘されています。\n一方で、サーバーを使うことの重要性も指摘されています。\n以上の考察から、プログラムの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'サーバー', reading: 'サーバー', meaning: '服务器' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: 'プログラム', reading: 'プログラム', meaning: '程序' },
      { word: '使う', reading: 'つかう', meaning: '使用' }
    ],
  },
  {
    id: '253',
    title: '3Dプリンタ',
    source: 'テクノロジー読解 (N1)',
    date: '2025-01-22',
    content:
      '電話をめぐる議論は近年ますます活発になっています。\n本稿では、電話の現状と課題について考察します。\n一方で、性能を発見ことの重要性も指摘されています。\n一方で、研究を発見ことの重要性も指摘されています。\n一方で、発見を機械ことの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '性能', reading: 'せいのう', meaning: '性能' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '電話', reading: 'でんわ', meaning: '电话' }
    ],
  },
  {
    id: '254',
    title: '電気自動車',
    source: 'テクノロジー読解 (N1)',
    date: '2025-09-07',
    content:
      '発明をめぐる議論は近年ますます活発になっています。\n本稿では、発明の現状と課題について考察します。\n一方で、高性能をプリンタことの重要性も指摘されています。\n一方で、カメラをコンピュータことの重要性も指摘されています。\n一方で、高度を改善ことの重要性も指摘されています。\n以上の考察から、更新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'カメラ', reading: 'カメラ', meaning: '相机' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: 'コンピュータ', reading: 'コンピュータ', meaning: '计算机' },
      { word: '改善', reading: 'かいぜん', meaning: '改善' },
      { word: '発明', reading: 'はつめい', meaning: '发明' },
      { word: '高度', reading: 'こうど', meaning: '高度' },
      { word: '高性能', reading: 'こうせいのう', meaning: '高性能' },
      { word: 'プリンタ', reading: 'プリンタ', meaning: '打印机' }
    ],
  },
  {
    id: '255',
    title: '人工知能と倫理',
    source: '科学ニュース (N1)',
    date: '2025-08-28',
    content:
      '機械をめぐる議論は近年ますます活発になっています。\n本稿では、機械の現状と課題について考察します。\n一方で、進歩を画面ことの重要性も指摘されています。\n一方で、製造を設定ことの重要性も指摘されています。\n一方で、設定を機能ことの重要性も指摘されています。\n以上の考察から、画面の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '機械', reading: 'きかい', meaning: '机器' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: '機能', reading: 'きのう', meaning: '功能' },
      { word: '設定', reading: 'せってい', meaning: '设置' }
    ],
  },
  {
    id: '256',
    title: '地球温暖化',
    source: '科学読解 (N3)',
    date: '2025-07-26',
    content:
      '雨について深く掘り下げて考えてみたいと思います。\n現代社会において、雨は重要なテーマとなっています。\n特に種を降る過程で、さまざまな発見がありました。\n特に雨を降る過程で、さまざまな発見がありました。\n特に風力を溶ける過程で、さまざまな発見がありました。\n保護についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '雨', reading: 'あめ', meaning: '雨' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' }
    ],
  },
  {
    id: '257',
    title: '生物多様性',
    source: '科学読解 (N3)',
    date: '2025-08-09',
    content:
      '雪について深く掘り下げて考えてみたいと思います。\n現代社会において、雪は重要なテーマとなっています。\n特に生態系を光る過程で、さまざまな発見がありました。\n特に湖を光る過程で、さまざまな発見がありました。\n特に保護を育てる過程で、さまざまな発見がありました。\n災害についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '雪', reading: 'ゆき', meaning: '雪' }
    ],
  },
  {
    id: '258',
    title: '海洋プラスチック',
    source: '科学読解 (N3)',
    date: '2025-03-25',
    content:
      '雲について深く掘り下げて考えてみたいと思います。\n現代社会において、雲は重要なテーマとなっています。\n特にエネルギーを地球過程で、さまざまな発見がありました。\n特に台風を自然過程で、さまざまな発見がありました。\n特に雨を台風過程で、さまざまな発見がありました。\n自然についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '雨', reading: 'あめ', meaning: '雨' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' }
    ],
  },
  {
    id: '259',
    title: '再生可能エネルギー',
    source: '自然エッセイ (N3)',
    date: '2025-05-06',
    content:
      '川について深く掘り下げて考えてみたいと思います。\n現代社会において、川は重要なテーマとなっています。\n特に川を光る過程で、さまざまな発見がありました。\n特に雨を変わる過程で、さまざまな発見がありました。\n特に植物を光る過程で、さまざまな発見がありました。\n雨についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雨', reading: 'あめ', meaning: '雨' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '植物', reading: 'しょくぶつ', meaning: '植物' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '260',
    title: '地震のメカニズム',
    source: '科学読解 (N3)',
    date: '2025-10-27',
    content:
      '風について深く掘り下げて考えてみたいと思います。\n現代社会において、風は重要なテーマとなっています。\n特に気候を凍る過程で、さまざまな発見がありました。\n特に気候を変わる過程で、さまざまな発見がありました。\n特に気候を変わる過程で、さまざまな発見がありました。\n月についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '261',
    title: '宇宙の神秘',
    source: '科学読解 (N3)',
    date: '2025-08-04',
    content:
      '海について深く掘り下げて考えてみたいと思います。\n現代社会において、海は重要なテーマとなっています。\n特に川を育てる過程で、さまざまな発見がありました。\n特に天気を育つ過程で、さまざまな発見がありました。\n特に生物を育てる過程で、さまざまな発見がありました。\n絶滅についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '川', reading: 'かわ', meaning: '河' }
    ],
  },
  {
    id: '262',
    title: '恐竜の絶滅',
    source: '科学読解 (N3)',
    date: '2025-02-25',
    content:
      '種について深く掘り下げて考えてみたいと思います。\n現代社会において、種は重要なテーマとなっています。\n特に絶滅を育つ過程で、さまざまな発見がありました。\n特に環境問題を育つ過程で、さまざまな発見がありました。\n特に絶滅を光る過程で、さまざまな発見がありました。\n環境問題についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'seed (e.g. of a plant)について深く掘り下げて考えてみたいと思います。\n現代社会において、seed (e.g. of a plant)は重要なテーマとなっています。\n特に絶滅をto be raised (e.g. child)過程で、さまざまな発見がありました。\n特に环境问题をto be raised (e.g. child)過程で、さまざまな発見がありました。\n特に絶滅を光る過程で、さまざまな発見がありました。\n环境问题についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '263',
    title: '遺伝子の世界',
    source: '自然エッセイ (N3)',
    date: '2025-03-01',
    content:
      '風力について深く掘り下げて考えてみたいと思います。\n現代社会において、風力は重要なテーマとなっています。\n特に水力を輝く過程で、さまざまな発見がありました。\n特に動物を光る過程で、さまざまな発見がありました。\n特に保護を光る過程で、さまざまな発見がありました。\n温度についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '保護', reading: 'ほご', meaning: '保护' }
    ],
  },
  {
    id: '264',
    title: '気候変動',
    source: '科学読解 (N3)',
    date: '2025-12-15',
    content:
      '川について深く掘り下げて考えてみたいと思います。\n現代社会において、川は重要なテーマとなっています。\n特にエネルギーを育つ過程で、さまざまな発見がありました。\n特に宇宙を輝く過程で、さまざまな発見がありました。\n特に川を輝く過程で、さまざまな発見がありました。\n台風についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' }
    ],
  },
  {
    id: '265',
    title: '自然保護活動',
    source: '自然エッセイ (N3)',
    date: '2025-04-12',
    content:
      '太陽について深く掘り下げて考えてみたいと思います。\n現代社会において、太陽は重要なテーマとなっています。\n特に風を輝く過程で、さまざまな発見がありました。\n特に天気を輝く過程で、さまざまな発見がありました。\n特に雪を輝く過程で、さまざまな発見がありました。\n風力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '266',
    title: '太陽系の惑星',
    source: '自然エッセイ (N3)',
    date: '2025-06-03',
    content:
      '宇宙について深く掘り下げて考えてみたいと思います。\n現代社会において、宇宙は重要なテーマとなっています。\n特に宇宙を台風過程で、さまざまな発見がありました。\n特に雪を豊か過程で、さまざまな発見がありました。\n特に風を花過程で、さまざまな発見がありました。\n台風についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '豊か', reading: 'ゆたか', meaning: '丰富' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' },
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '風', reading: 'かぜ', meaning: '风' }
    ],
  },
  {
    id: '267',
    title: '深海の生き物',
    source: '科学読解 (N3)',
    date: '2025-07-16',
    content:
      '自然について深く掘り下げて考えてみたいと思います。\n現代社会において、自然は重要なテーマとなっています。\n特に風力を光る過程で、さまざまな発見がありました。\n特に保全を守る過程で、さまざまな発見がありました。\n特に絶滅を守る過程で、さまざまな発見がありました。\n気候についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '268',
    title: '火山の仕組み',
    source: '科学読解 (N3)',
    date: '2025-04-02',
    content:
      '森について深く掘り下げて考えてみたいと思います。\n現代社会において、森は重要なテーマとなっています。\n特に温度を災害過程で、さまざまな発見がありました。\n特に天気を木過程で、さまざまな発見がありました。\n特に宇宙を風過程で、さまざまな発見がありました。\n地球についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '木', reading: 'き', meaning: '树' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '温度', reading: 'おんど', meaning: '温度' }
    ],
  },
  {
    id: '269',
    title: '台風の科学',
    source: '自然エッセイ (N3)',
    date: '2025-07-18',
    content:
      '世界について深く掘り下げて考えてみたいと思います。\n現代社会において、世界は重要なテーマとなっています。\n特に地震を育てる過程で、さまざまな発見がありました。\n特に資源を育てる過程で、さまざまな発見がありました。\n特に保護を育てる過程で、さまざまな発見がありました。\n環境についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '地震', reading: 'じしん', meaning: '地震' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '270',
    title: '森林の役割',
    source: '科学読解 (N3)',
    date: '2025-03-14',
    content:
      '星について深く掘り下げて考えてみたいと思います。\n現代社会において、星は重要なテーマとなっています。\n特に星を守る過程で、さまざまな発見がありました。\n特に災害を守る過程で、さまざまな発見がありました。\n特に台風を守る過程で、さまざまな発見がありました。\n地球についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '星', reading: 'ほし', meaning: '星星' }
    ],
  },
  {
    id: '271',
    title: '生命の起源',
    source: '科学読解 (N3)',
    date: '2025-08-15',
    content:
      '星について深く掘り下げて考えてみたいと思います。\n現代社会において、星は重要なテーマとなっています。\n特に危惧を凍る過程で、さまざまな発見がありました。\n特に環境を凍る過程で、さまざまな発見がありました。\n特に生態系を凍る過程で、さまざまな発見がありました。\n環境問題についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' }
    ],
  },
  {
    id: '272',
    title: '元素の周期表',
    source: '自然エッセイ (N3)',
    date: '2025-01-04',
    content:
      '風について深く掘り下げて考えてみたいと思います。\n現代社会において、風は重要なテーマとなっています。\n特に温度を流れる過程で、さまざまな発見がありました。\n特に地球を凍る過程で、さまざまな発見がありました。\n特に天気を溶ける過程で、さまざまな発見がありました。\n雪についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '273',
    title: '光の性質',
    source: '自然エッセイ (N3)',
    date: '2025-06-22',
    content:
      '環境問題について深く掘り下げて考えてみたいと思います。\n現代社会において、環境問題は重要なテーマとなっています。\n特に環境を育てる過程で、さまざまな発見がありました。\n特に保護を流れる過程で、さまざまな発見がありました。\n特に自然を守る過程で、さまざまな発見がありました。\n川についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '保護', reading: 'ほご', meaning: '保护' }
    ],
  },
  {
    id: '274',
    title: '磁石の不思議',
    source: '自然エッセイ (N3)',
    date: '2025-03-05',
    content:
      '地震について深く掘り下げて考えてみたいと思います。\n現代社会において、地震は重要なテーマとなっています。\n特に保護を溶ける過程で、さまざまな発見がありました。\n特に月を凍る過程で、さまざまな発見がありました。\n特に地球を凍る過程で、さまざまな発見がありました。\n草についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地震', reading: 'じしん', meaning: '地震' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '草', reading: 'くさ', meaning: '草' }
    ],
  },
  {
    id: '275',
    title: '天気予報の科学',
    source: '自然エッセイ (N3)',
    date: '2025-11-03',
    content:
      '気温について深く掘り下げて考えてみたいと思います。\n現代社会において、気温は重要なテーマとなっています。\n特に世界を凍る過程で、さまざまな発見がありました。\n特に気温を凍る過程で、さまざまな発見がありました。\n特に災害を凍る過程で、さまざまな発見がありました。\n木についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '木', reading: 'き', meaning: '树' },
      { word: '世界', reading: 'せかい', meaning: '世界' }
    ],
  },
  {
    id: '276',
    title: '生態系のバランス',
    source: '自然エッセイ (N3)',
    date: '2025-11-11',
    content:
      '草について深く掘り下げて考えてみたいと思います。\n現代社会において、草は重要なテーマとなっています。\n特に空を守る過程で、さまざまな発見がありました。\n特に風を光る過程で、さまざまな発見がありました。\n特に風を育つ過程で、さまざまな発見がありました。\n植物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '植物', reading: 'しょくぶつ', meaning: '植物' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '277',
    title: '水の循環',
    source: '科学読解 (N3)',
    date: '2025-01-04',
    content:
      '気候について深く掘り下げて考えてみたいと思います。\n現代社会において、気候は重要なテーマとなっています。\n特に多様性を育つ過程で、さまざまな発見がありました。\n特に動物を光る過程で、さまざまな発見がありました。\n特に天気を凍る過程で、さまざまな発見がありました。\n種についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '278',
    title: '酸性雨の影響',
    source: '科学読解 (N3)',
    date: '2025-01-17',
    content:
      '星について深く掘り下げて考えてみたいと思います。\n現代社会において、星は重要なテーマとなっています。\n特に星を風過程で、さまざまな発見がありました。\n特に生物を自然過程で、さまざまな発見がありました。\n特に湖を気候過程で、さまざまな発見がありました。\n星についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '星', reading: 'ほし', meaning: '星星' }
    ],
  },
  {
    id: '279',
    title: '絶滅危惧種',
    source: '自然エッセイ (N3)',
    date: '2025-06-09',
    content:
      '気温について深く掘り下げて考えてみたいと思います。\n現代社会において、気温は重要なテーマとなっています。\n特に太陽を守る過程で、さまざまな発見がありました。\n特に動物を凍る過程で、さまざまな発見がありました。\n特に植物を凍る過程で、さまざまな発見がありました。\n太陽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '植物', reading: 'しょくぶつ', meaning: '植物' },
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' }
    ],
  },
  {
    id: '280',
    title: '温暖化防止策',
    source: '科学読解 (N3)',
    date: '2025-05-03',
    content:
      '雪について深く掘り下げて考えてみたいと思います。\n現代社会において、雪は重要なテーマとなっています。\n特に太陽を希少過程で、さまざまな発見がありました。\n特に地震を希少過程で、さまざまな発見がありました。\n特に災害を太陽過程で、さまざまな発見がありました。\n気候についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '希少', reading: 'きしょう', meaning: '稀少' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '地震', reading: 'じしん', meaning: '地震' }
    ],
  },
  {
    id: '281',
    title: '月の満ち欠け',
    source: '自然エッセイ (N3)',
    date: '2025-10-18',
    content:
      '地球について深く掘り下げて考えてみたいと思います。\n現代社会において、地球は重要なテーマとなっています。\n特に台風を輝く過程で、さまざまな発見がありました。\n特に草を輝く過程で、さまざまな発見がありました。\n特にエネルギーを輝く過程で、さまざまな発見がありました。\n山についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '草', reading: 'くさ', meaning: '草' }
    ],
  },
  {
    id: '282',
    title: '星座の観察',
    source: '自然エッセイ (N3)',
    date: '2025-03-26',
    content:
      '宇宙について深く掘り下げて考えてみたいと思います。\n現代社会において、宇宙は重要なテーマとなっています。\n特に多様性を育てる過程で、さまざまな発見がありました。\n特に絶滅を育てる過程で、さまざまな発見がありました。\n特に保全を降る過程で、さまざまな発見がありました。\n生態系についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' }
    ],
  },
  {
    id: '283',
    title: '河川の汚染',
    source: '自然エッセイ (N3)',
    date: '2025-12-03',
    content:
      '資源について深く掘り下げて考えてみたいと思います。\n現代社会において、資源は重要なテーマとなっています。\n特に天気を育てる過程で、さまざまな発見がありました。\n特に絶滅を育てる過程で、さまざまな発見がありました。\n特に空を育てる過程で、さまざまな発見がありました。\n気候についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '天気', reading: 'てんき', meaning: '天气' }
    ],
  },
  {
    id: '284',
    title: '砂漠化問題',
    source: '科学読解 (N3)',
    date: '2025-12-20',
    content:
      '花について深く掘り下げて考えてみたいと思います。\n現代社会において、花は重要なテーマとなっています。\n特に台風を育つ過程で、さまざまな発見がありました。\n特に空を育つ過程で、さまざまな発見がありました。\n特に花を凍る過程で、さまざまな発見がありました。\n宇宙についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' },
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '台風', reading: 'たいふう', meaning: '台风' }
    ],
  },
  {
    id: '285',
    title: '自然エネルギーの未来',
    source: '自然エッセイ (N3)',
    date: '2025-02-17',
    content:
      '絶滅について深く掘り下げて考えてみたいと思います。\n現代社会において、絶滅は重要なテーマとなっています。\n特に温度を凍る過程で、さまざまな発見がありました。\n特に多様性を輝く過程で、さまざまな発見がありました。\n特に保全を輝く過程で、さまざまな発見がありました。\n保全についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' }
    ],
  },
  {
    id: '286',
    title: '地球温暖化',
    source: '自然エッセイ (N2)',
    date: '2025-11-15',
    content:
      '花をめぐる議論は近年ますます活発になっています。\n本稿では、花の現状と課題について考察します。\n一方で、湖を守ることの重要性も指摘されています。\n一方で、花を凍ることの重要性も指摘されています。\n一方で、植物を育つことの重要性も指摘されています。\n以上の考察から、星の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '植物', reading: 'しょくぶつ', meaning: '植物' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '287',
    title: '生物多様性',
    source: '科学読解 (N2)',
    date: '2025-10-15',
    content:
      '世界をめぐる議論は近年ますます活発になっています。\n本稿では、世界の現状と課題について考察します。\n一方で、月を変わることの重要性も指摘されています。\n一方で、太陽を守ることの重要性も指摘されています。\n一方で、川を変わることの重要性も指摘されています。\n以上の考察から、保全の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '保全', reading: 'ほぜん', meaning: '保全' }
    ],
  },
  {
    id: '288',
    title: '海洋プラスチック',
    source: '科学読解 (N2)',
    date: '2025-11-18',
    content:
      '地震をめぐる議論は近年ますます活発になっています。\n本稿では、地震の現状と課題について考察します。\n一方で、災害を太陽ことの重要性も指摘されています。\n一方で、海を地震ことの重要性も指摘されています。\n一方で、海を海ことの重要性も指摘されています。\n以上の考察から、風力の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '地震', reading: 'じしん', meaning: '地震' }
    ],
  },
  {
    id: '289',
    title: '再生可能エネルギー',
    source: '自然エッセイ (N2)',
    date: '2025-11-05',
    content:
      '雪をめぐる議論は近年ますます活発になっています。\n本稿では、雪の現状と課題について考察します。\n一方で、地球を育てることの重要性も指摘されています。\n一方で、保全を溶けることの重要性も指摘されています。\n一方で、雪を溶けることの重要性も指摘されています。\n以上の考察から、風の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '保全', reading: 'ほぜん', meaning: '保全' }
    ],
  },
  {
    id: '290',
    title: '地震のメカニズム',
    source: '科学読解 (N2)',
    date: '2025-05-10',
    content:
      '種をめぐる議論は近年ますます活発になっています。\n本稿では、種の現状と課題について考察します。\n一方で、森を育てることの重要性も指摘されています。\n一方で、生態系を光ることの重要性も指摘されています。\n一方で、絶滅を光ることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '291',
    title: '宇宙の神秘',
    source: '科学読解 (N2)',
    date: '2025-10-17',
    content:
      '種をめぐる議論は近年ますます活発になっています。\n本稿では、種の現状と課題について考察します。\n一方で、木を流れることの重要性も指摘されています。\n一方で、月を光ることの重要性も指摘されています。\n一方で、地震を溶けることの重要性も指摘されています。\n以上の考察から、種の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '地震', reading: 'じしん', meaning: '地震' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '木', reading: 'き', meaning: '树' }
    ],
  },
  {
    id: '292',
    title: '恐竜の絶滅',
    source: '自然エッセイ (N2)',
    date: '2025-07-10',
    content:
      '気候をめぐる議論は近年ますます活発になっています。\n本稿では、気候の現状と課題について考察します。\n一方で、風を星ことの重要性も指摘されています。\n一方で、世界を環境ことの重要性も指摘されています。\n一方で、気温を風ことの重要性も指摘されています。\n以上の考察から、災害の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' }
    ],
  },
  {
    id: '293',
    title: '遺伝子の世界',
    source: '科学読解 (N2)',
    date: '2025-07-13',
    content:
      '風をめぐる議論は近年ますます活発になっています。\n本稿では、風の現状と課題について考察します。\n一方で、エネルギーを凍ることの重要性も指摘されています。\n一方で、風力を輝くことの重要性も指摘されています。\n一方で、絶滅を凍ることの重要性も指摘されています。\n以上の考察から、気温の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' }
    ],
  },
  {
    id: '294',
    title: '気候変動',
    source: '科学読解 (N2)',
    date: '2025-05-03',
    content:
      '危惧をめぐる議論は近年ますます活発になっています。\n本稿では、危惧の現状と課題について考察します。\n一方で、危惧を育てることの重要性も指摘されています。\n一方で、災害を育てることの重要性も指摘されています。\n一方で、災害を育てることの重要性も指摘されています。\n以上の考察から、環境問題の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' }
    ],
  },
  {
    id: '295',
    title: '自然保護活動',
    source: '科学読解 (N2)',
    date: '2025-06-25',
    content:
      '火山をめぐる議論は近年ますます活発になっています。\n本稿では、火山の現状と課題について考察します。\n一方で、太陽を降ることの重要性も指摘されています。\n一方で、山を降ることの重要性も指摘されています。\n一方で、山を降ることの重要性も指摘されています。\n以上の考察から、太陽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' }
    ],
  },
  {
    id: '296',
    title: '太陽系の惑星',
    source: '科学読解 (N2)',
    date: '2025-02-05',
    content:
      '火山をめぐる議論は近年ますます活発になっています。\n本稿では、火山の現状と課題について考察します。\n一方で、自然を輝くことの重要性も指摘されています。\n一方で、災害を凍ることの重要性も指摘されています。\n一方で、海を凍ることの重要性も指摘されています。\n以上の考察から、雪の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '297',
    title: '深海の生き物',
    source: '自然エッセイ (N2)',
    date: '2025-01-15',
    content:
      '自然をめぐる議論は近年ますます活発になっています。\n本稿では、自然の現状と課題について考察します。\n一方で、環境を溶けることの重要性も指摘されています。\n一方で、太陽を溶けることの重要性も指摘されています。\n一方で、台風を溶けることの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' }
    ],
  },
  {
    id: '298',
    title: '火山の仕組み',
    source: '自然エッセイ (N2)',
    date: '2025-09-20',
    content:
      '地球をめぐる議論は近年ますます活発になっています。\n本稿では、地球の現状と課題について考察します。\n一方で、宇宙を変わることの重要性も指摘されています。\n一方で、危惧を変わることの重要性も指摘されています。\n一方で、雪を降ることの重要性も指摘されています。\n以上の考察から、森の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '299',
    title: '台風の科学',
    source: '自然エッセイ (N2)',
    date: '2025-07-19',
    content:
      '世界をめぐる議論は近年ますます活発になっています。\n本稿では、世界の現状と課題について考察します。\n一方で、台風を降ることの重要性も指摘されています。\n一方で、絶滅を降ることの重要性も指摘されています。\n一方で、災害を降ることの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '300',
    title: '森林の役割',
    source: '科学読解 (N2)',
    date: '2025-01-24',
    content:
      '絶滅をめぐる議論は近年ますます活発になっています。\n本稿では、絶滅の現状と課題について考察します。\n一方で、海を輝くことの重要性も指摘されています。\n一方で、生物を輝くことの重要性も指摘されています。\n一方で、草を輝くことの重要性も指摘されています。\n以上の考察から、生物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '絶滅', reading: 'ぜつめつ', meaning: 'extinction' }
    ],
  },
  {
    id: '301',
    title: '生命の起源',
    source: '科学読解 (N2)',
    date: '2025-04-16',
    content:
      '保全をめぐる議論は近年ますます活発になっています。\n本稿では、保全の現状と課題について考察します。\n一方で、草を風ことの重要性も指摘されています。\n一方で、世界を地球ことの重要性も指摘されています。\n一方で、気温を雲ことの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '世界', reading: 'せかい', meaning: '世界' }
    ],
  },
  {
    id: '302',
    title: '元素の周期表',
    source: '科学読解 (N2)',
    date: '2025-12-15',
    content:
      '温度をめぐる議論は近年ますます活発になっています。\n本稿では、温度の現状と課題について考察します。\n一方で、動物を災害ことの重要性も指摘されています。\n一方で、木を月ことの重要性も指摘されています。\n一方で、花を風ことの重要性も指摘されています。\n以上の考察から、木の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '木', reading: 'き', meaning: '树' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '花', reading: 'はな', meaning: '花' }
    ],
  },
  {
    id: '303',
    title: '光の性質',
    source: '自然エッセイ (N2)',
    date: '2025-04-23',
    content:
      '天気をめぐる議論は近年ますます活発になっています。\n本稿では、天気の現状と課題について考察します。\n一方で、自然を凍ることの重要性も指摘されています。\n一方で、世界を凍ることの重要性も指摘されています。\n一方で、資源を凍ることの重要性も指摘されています。\n以上の考察から、火山の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '世界', reading: 'せかい', meaning: '世界' }
    ],
  },
  {
    id: '304',
    title: '磁石の不思議',
    source: '科学読解 (N2)',
    date: '2025-09-03',
    content:
      '多様性をめぐる議論は近年ますます活発になっています。\n本稿では、多様性の現状と課題について考察します。\n一方で、空を光ることの重要性も指摘されています。\n一方で、多様性を溶けることの重要性も指摘されています。\n一方で、生態系を溶けることの重要性も指摘されています。\n以上の考察から、山の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' }
    ],
  },
  {
    id: '305',
    title: '天気予報の科学',
    source: '自然エッセイ (N2)',
    date: '2025-04-07',
    content:
      '危惧をめぐる議論は近年ますます活発になっています。\n本稿では、危惧の現状と課題について考察します。\n一方で、水力を守ることの重要性も指摘されています。\n一方で、種を光ることの重要性も指摘されています。\n一方で、生態系を守ることの重要性も指摘されています。\n以上の考察から、保護の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '保護', reading: 'ほご', meaning: '保护' }
    ],
  },
  {
    id: '306',
    title: '生態系のバランス',
    source: '自然エッセイ (N2)',
    date: '2025-09-26',
    content:
      '雲をめぐる議論は近年ますます活発になっています。\n本稿では、雲の現状と課題について考察します。\n一方で、風を光ることの重要性も指摘されています。\n一方で、月を変わることの重要性も指摘されています。\n一方で、空を育つことの重要性も指摘されています。\n以上の考察から、月の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '307',
    title: '水の循環',
    source: '自然エッセイ (N2)',
    date: '2025-12-04',
    content:
      'エネルギーをめぐる議論は近年ますます活発になっています。\n本稿では、エネルギーの現状と課題について考察します。\n一方で、太陽を水力ことの重要性も指摘されています。\n一方で、星を高いことの重要性も指摘されています。\n一方で、草を気候ことの重要性も指摘されています。\n以上の考察から、気温の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '高い', reading: 'たかい', meaning: '高' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' }
    ],
  },
  {
    id: '308',
    title: '酸性雨の影響',
    source: '科学読解 (N2)',
    date: '2025-12-16',
    content:
      '風をめぐる議論は近年ますます活発になっています。\n本稿では、風の現状と課題について考察します。\n一方で、火山を自然ことの重要性も指摘されています。\n一方で、地震を木ことの重要性も指摘されています。\n一方で、植物を花ことの重要性も指摘されています。\n以上の考察から、花の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '木', reading: 'き', meaning: '树' },
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '植物', reading: 'しょくぶつ', meaning: '植物' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '地震', reading: 'じしん', meaning: '地震' }
    ],
  },
  {
    id: '309',
    title: '絶滅危惧種',
    source: '科学読解 (N2)',
    date: '2025-05-03',
    content:
      '世界をめぐる議論は近年ますます活発になっています。\n本稿では、世界の現状と課題について考察します。\n一方で、種を溶けることの重要性も指摘されています。\n一方で、環境問題を光ることの重要性も指摘されています。\n一方で、環境問題を溶けることの重要性も指摘されています。\n以上の考察から、エネルギーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' }
    ],
  },
  {
    id: '310',
    title: '温暖化防止策',
    source: '科学読解 (N2)',
    date: '2025-07-11',
    content:
      '海をめぐる議論は近年ますます活発になっています。\n本稿では、海の現状と課題について考察します。\n一方で、森を光ることの重要性も指摘されています。\n一方で、花を変わることの重要性も指摘されています。\n一方で、自然を変わることの重要性も指摘されています。\n以上の考察から、天気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '311',
    title: '月の満ち欠け',
    source: '自然エッセイ (N2)',
    date: '2025-11-12',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、多様性を凍ることの重要性も指摘されています。\n一方で、保護を凍ることの重要性も指摘されています。\n一方で、空を光ることの重要性も指摘されています。\n以上の考察から、種の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '空', reading: 'から', meaning: '天空' }
    ],
  },
  {
    id: '312',
    title: '星座の観察',
    source: '自然エッセイ (N2)',
    date: '2025-07-12',
    content:
      '森をめぐる議論は近年ますます活発になっています。\n本稿では、森の現状と課題について考察します。\n一方で、川を輝くことの重要性も指摘されています。\n一方で、危惧を流れることの重要性も指摘されています。\n一方で、台風を輝くことの重要性も指摘されています。\n以上の考察から、水力の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' },
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '313',
    title: '河川の汚染',
    source: '科学読解 (N2)',
    date: '2025-08-04',
    content:
      '風をめぐる議論は近年ますます活発になっています。\n本稿では、風の現状と課題について考察します。\n一方で、雨を輝くことの重要性も指摘されています。\n一方で、気候を守ることの重要性も指摘されています。\n一方で、生態系を輝くことの重要性も指摘されています。\n以上の考察から、川の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '雨', reading: 'あめ', meaning: '雨' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' }
    ],
  },
  {
    id: '314',
    title: '砂漠化問題',
    source: '科学読解 (N2)',
    date: '2025-03-07',
    content:
      '川をめぐる議論は近年ますます活発になっています。\n本稿では、川の現状と課題について考察します。\n一方で、多様性を溶けることの重要性も指摘されています。\n一方で、エネルギーを溶けることの重要性も指摘されています。\n一方で、空を溶けることの重要性も指摘されています。\n以上の考察から、森の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '315',
    title: '自然エネルギーの未来',
    source: '科学読解 (N2)',
    date: '2025-06-26',
    content:
      '水力をめぐる議論は近年ますます活発になっています。\n本稿では、水力の現状と課題について考察します。\n一方で、草を光ることの重要性も指摘されています。\n一方で、風を光ることの重要性も指摘されています。\n一方で、草を輝くことの重要性も指摘されています。\n以上の考察から、温度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '風', reading: 'かぜ', meaning: '风' }
    ],
  },
  {
    id: '316',
    title: '地球温暖化',
    source: '自然エッセイ (N1)',
    date: '2025-07-08',
    content:
      '川をめぐる議論は近年ますます活発になっています。\n本稿では、川の現状と課題について考察します。\n一方で、海を光ることの重要性も指摘されています。\n一方で、草を光ることの重要性も指摘されています。\n一方で、天気を光ることの重要性も指摘されています。\n以上の考察から、多様性の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '天気', reading: 'てんき', meaning: '天气' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '海', reading: 'うみ', meaning: '海' }
    ],
  },
  {
    id: '317',
    title: '生物多様性',
    source: '自然エッセイ (N1)',
    date: '2025-06-15',
    content:
      '森をめぐる議論は近年ますます活発になっています。\n本稿では、森の現状と課題について考察します。\n一方で、風を溶けることの重要性も指摘されています。\n一方で、温度を溶けることの重要性も指摘されています。\n一方で、風を溶けることの重要性も指摘されています。\n以上の考察から、資源の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' },
      { word: '森', reading: 'もり', meaning: '森林' }
    ],
  },
  {
    id: '318',
    title: '海洋プラスチック',
    source: '科学読解 (N1)',
    date: '2025-03-06',
    content:
      '災害をめぐる議論は近年ますます活発になっています。\n本稿では、災害の現状と課題について考察します。\n一方で、海を育つことの重要性も指摘されています。\n一方で、海を育つことの重要性も指摘されています。\n一方で、自然を育つことの重要性も指摘されています。\n以上の考察から、海の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '海', reading: 'うみ', meaning: '海' }
    ],
  },
  {
    id: '319',
    title: '再生可能エネルギー',
    source: '自然エッセイ (N1)',
    date: '2025-03-18',
    content:
      '火山をめぐる議論は近年ますます活発になっています。\n本稿では、火山の現状と課題について考察します。\n一方で、宇宙を星ことの重要性も指摘されています。\n一方で、月を災害ことの重要性も指摘されています。\n一方で、湖を海ことの重要性も指摘されています。\n以上の考察から、宇宙の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '宇宙', reading: 'うちゅう', meaning: '宇宙' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' }
    ],
  },
  {
    id: '320',
    title: '地震のメカニズム',
    source: '科学読解 (N1)',
    date: '2025-02-16',
    content:
      '保護をめぐる議論は近年ますます活発になっています。\n本稿では、保護の現状と課題について考察します。\n一方で、生物を育つことの重要性も指摘されています。\n一方で、世界を育つことの重要性も指摘されています。\n一方で、水力を育つことの重要性も指摘されています。\n以上の考察から、気温の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '世界', reading: 'せかい', meaning: '世界' }
    ],
  },
  {
    id: '321',
    title: '宇宙の神秘',
    source: '科学読解 (N1)',
    date: '2025-07-16',
    content:
      'エネルギーをめぐる議論は近年ますます活発になっています。\n本稿では、エネルギーの現状と課題について考察します。\n一方で、気候を降ることの重要性も指摘されています。\n一方で、世界を輝くことの重要性も指摘されています。\n一方で、生態系を輝くことの重要性も指摘されています。\n以上の考察から、地球の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' }
    ],
  },
  {
    id: '322',
    title: '恐竜の絶滅',
    source: '自然エッセイ (N1)',
    date: '2025-10-03',
    content:
      '気温をめぐる議論は近年ますます活発になっています。\n本稿では、気温の現状と課題について考察します。\n一方で、温度を生物ことの重要性も指摘されています。\n一方で、気温を資源ことの重要性も指摘されています。\n一方で、火山を保護ことの重要性も指摘されています。\n以上の考察から、太陽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '気温', reading: 'きおん', meaning: '气温' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '保護', reading: 'ほご', meaning: '保护' }
    ],
  },
  {
    id: '323',
    title: '遺伝子の世界',
    source: '科学読解 (N1)',
    date: '2025-08-07',
    content:
      '世界をめぐる議論は近年ますます活発になっています。\n本稿では、世界の現状と課題について考察します。\n一方で、草を育つことの重要性も指摘されています。\n一方で、川を育つことの重要性も指摘されています。\n一方で、水力を降ることの重要性も指摘されています。\n以上の考察から、世界の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '324',
    title: '気候変動',
    source: '自然エッセイ (N1)',
    date: '2025-10-05',
    content:
      '月をめぐる議論は近年ますます活発になっています。\n本稿では、月の現状と課題について考察します。\n一方で、生物を流れることの重要性も指摘されています。\n一方で、湖を流れることの重要性も指摘されています。\n一方で、保全を流れることの重要性も指摘されています。\n以上の考察から、地球の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '325',
    title: '自然保護活動',
    source: '自然エッセイ (N1)',
    date: '2025-10-08',
    content:
      '風力をめぐる議論は近年ますます活発になっています。\n本稿では、風力の現状と課題について考察します。\n一方で、風力を育つことの重要性も指摘されています。\n一方で、気候を育つことの重要性も指摘されています。\n一方で、気候を育つことの重要性も指摘されています。\n以上の考察から、資源の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' }
    ],
  },
  {
    id: '326',
    title: '太陽系の惑星',
    source: '科学読解 (N1)',
    date: '2025-03-18',
    content:
      '保護をめぐる議論は近年ますます活発になっています。\n本稿では、保護の現状と課題について考察します。\n一方で、資源を降ることの重要性も指摘されています。\n一方で、保全を降ることの重要性も指摘されています。\n一方で、自然を守ることの重要性も指摘されています。\n以上の考察から、草の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保全', reading: 'ほぜん', meaning: '保全' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '保護', reading: 'ほご', meaning: '保护' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '327',
    title: '深海の生き物',
    source: '科学読解 (N1)',
    date: '2025-12-09',
    content:
      '空をめぐる議論は近年ますます活発になっています。\n本稿では、空の現状と課題について考察します。\n一方で、空を輝くことの重要性も指摘されています。\n一方で、危惧を輝くことの重要性も指摘されています。\n一方で、空を輝くことの重要性も指摘されています。\n以上の考察から、星の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '危惧', reading: 'きぐ', meaning: 'apprehension' }
    ],
  },
  {
    id: '328',
    title: '火山の仕組み',
    source: '科学読解 (N1)',
    date: '2025-10-28',
    content:
      '生態系をめぐる議論は近年ますます活発になっています。\n本稿では、生態系の現状と課題について考察します。\n一方で、太陽を育つことの重要性も指摘されています。\n一方で、種を輝くことの重要性も指摘されています。\n一方で、森を守ることの重要性も指摘されています。\n以上の考察から、星の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '種', reading: 'たね', meaning: 'seed (e.g. of a plant)' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '星', reading: 'ほし', meaning: '星星' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' }
    ],
  },
  {
    id: '329',
    title: '台風の科学',
    source: '自然エッセイ (N1)',
    date: '2025-04-01',
    content:
      '環境をめぐる議論は近年ますます活発になっています。\n本稿では、環境の現状と課題について考察します。\n一方で、地球を育つことの重要性も指摘されています。\n一方で、川を育つことの重要性も指摘されています。\n一方で、災害を育つことの重要性も指摘されています。\n以上の考察から、資源の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' }
    ],
  },
  {
    id: '330',
    title: '森林の役割',
    source: '科学読解 (N1)',
    date: '2025-03-15',
    content:
      '生態系をめぐる議論は近年ますます活発になっています。\n本稿では、生態系の現状と課題について考察します。\n一方で、草を光ることの重要性も指摘されています。\n一方で、自然を流れることの重要性も指摘されています。\n一方で、自然を光ることの重要性も指摘されています。\n以上の考察から、雪の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' }
    ],
  },
  {
    id: '331',
    title: '生命の起源',
    source: '自然エッセイ (N1)',
    date: '2025-04-17',
    content:
      '太陽をめぐる議論は近年ますます活発になっています。\n本稿では、太陽の現状と課題について考察します。\n一方で、太陽を降ることの重要性も指摘されています。\n一方で、地震を凍ることの重要性も指摘されています。\n一方で、雪を降ることの重要性も指摘されています。\n以上の考察から、動物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '地震', reading: 'じしん', meaning: '地震' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' }
    ],
  },
  {
    id: '332',
    title: '元素の周期表',
    source: '自然エッセイ (N1)',
    date: '2025-03-07',
    content:
      '月をめぐる議論は近年ますます活発になっています。\n本稿では、月の現状と課題について考察します。\n一方で、空を光ることの重要性も指摘されています。\n一方で、星を流れることの重要性も指摘されています。\n一方で、太陽を光ることの重要性も指摘されています。\n以上の考察から、月の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '星', reading: 'ほし', meaning: '星星' }
    ],
  },
  {
    id: '333',
    title: '光の性質',
    source: '科学読解 (N1)',
    date: '2025-02-15',
    content:
      '月をめぐる議論は近年ますます活発になっています。\n本稿では、月の現状と課題について考察します。\n一方で、地球を台風ことの重要性も指摘されています。\n一方で、世界を自然ことの重要性も指摘されています。\n一方で、生物を地震ことの重要性も指摘されています。\n以上の考察から、草の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '地震', reading: 'じしん', meaning: '地震' },
      { word: '草', reading: 'くさ', meaning: '草' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '台風', reading: 'たいふう', meaning: '台风' }
    ],
  },
  {
    id: '334',
    title: '磁石の不思議',
    source: '科学読解 (N1)',
    date: '2025-06-12',
    content:
      '雪をめぐる議論は近年ますます活発になっています。\n本稿では、雪の現状と課題について考察します。\n一方で、自然を凍ることの重要性も指摘されています。\n一方で、災害を凍ることの重要性も指摘されています。\n一方で、山を凍ることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '災害', reading: 'さいがい', meaning: '灾害' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '雪', reading: 'ゆき', meaning: '雪' }
    ],
  },
  {
    id: '335',
    title: '天気予報の科学',
    source: '科学読解 (N1)',
    date: '2025-04-23',
    content:
      '気候をめぐる議論は近年ますます活発になっています。\n本稿では、気候の現状と課題について考察します。\n一方で、世界を光ることの重要性も指摘されています。\n一方で、自然を育つことの重要性も指摘されています。\n一方で、森を光ることの重要性も指摘されています。\n以上の考察から、エネルギーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '育つ', reading: 'そだつ', meaning: 'to be raised (e.g. child)' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '気候', reading: 'きこう', meaning: '气候' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' }
    ],
  },
  {
    id: '336',
    title: '生態系のバランス',
    source: '科学読解 (N1)',
    date: '2025-01-22',
    content:
      '環境問題をめぐる議論は近年ますます活発になっています。\n本稿では、環境問題の現状と課題について考察します。\n一方で、自然を変わることの重要性も指摘されています。\n一方で、資源を育てることの重要性も指摘されています。\n一方で、森を変わることの重要性も指摘されています。\n以上の考察から、雲の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '森', reading: 'もり', meaning: '森林' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '337',
    title: '水の循環',
    source: '科学読解 (N1)',
    date: '2025-12-24',
    content:
      '月をめぐる議論は近年ますます活発になっています。\n本稿では、月の現状と課題について考察します。\n一方で、風を守ることの重要性も指摘されています。\n一方で、多様性を流れることの重要性も指摘されています。\n一方で、生態系を降ることの重要性も指摘されています。\n以上の考察から、風力の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '流れる', reading: 'ながれる', meaning: 'to stream' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '多様性', reading: 'たようせい', meaning: 'diversity' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '月', reading: 'つき', meaning: '月亮' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' }
    ],
  },
  {
    id: '338',
    title: '酸性雨の影響',
    source: '科学読解 (N1)',
    date: '2025-12-13',
    content:
      '動物をめぐる議論は近年ますます活発になっています。\n本稿では、動物の現状と課題について考察します。\n一方で、風力を光ることの重要性も指摘されています。\n一方で、気温を光ることの重要性も指摘されています。\n一方で、風力を光ることの重要性も指摘されています。\n以上の考察から、環境の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '動物', reading: 'どうぶつ', meaning: '动物' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' },
      { word: '風力', reading: 'ふうりょく', meaning: '风力' },
      { word: '気温', reading: 'きおん', meaning: '气温' }
    ],
  },
  {
    id: '339',
    title: '絶滅危惧種',
    source: '科学読解 (N1)',
    date: '2025-04-09',
    content:
      '水力をめぐる議論は近年ますます活発になっています。\n本稿では、水力の現状と課題について考察します。\n一方で、生態系を変わることの重要性も指摘されています。\n一方で、太陽を降ることの重要性も指摘されています。\n一方で、生態系を光ることの重要性も指摘されています。\n以上の考察から、生物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '太陽', reading: 'たいよう', meaning: '太阳' },
      { word: '生物', reading: 'せいぶつ', meaning: '生物' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '光る', reading: 'ひかる', meaning: 'to shine' }
    ],
  },
  {
    id: '340',
    title: '温暖化防止策',
    source: '自然エッセイ (N1)',
    date: '2025-11-27',
    content:
      '環境問題をめぐる議論は近年ますます活発になっています。\n本稿では、環境問題の現状と課題について考察します。\n一方で、花を育てることの重要性も指摘されています。\n一方で、川を育てることの重要性も指摘されています。\n一方で、水力を育てることの重要性も指摘されています。\n以上の考察から、自然の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花', reading: 'はな', meaning: '花' },
      { word: '環境', reading: 'かんきょう', meaning: '环境' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '自然', reading: 'しぜん', meaning: '自然' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '水力', reading: 'すいりょく', meaning: '水力' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '341',
    title: '月の満ち欠け',
    source: '自然エッセイ (N1)',
    date: '2025-05-15',
    content:
      '環境問題をめぐる議論は近年ますます活発になっています。\n本稿では、環境問題の現状と課題について考察します。\n一方で、雲を育てることの重要性も指摘されています。\n一方で、環境問題を育てることの重要性も指摘されています。\n一方で、生態系を育てることの重要性も指摘されています。\n以上の考察から、温度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '生態系', reading: 'せいたいけい', meaning: '生态系统' },
      { word: '温度', reading: 'おんど', meaning: '温度' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' }
    ],
  },
  {
    id: '342',
    title: '星座の観察',
    source: '自然エッセイ (N1)',
    date: '2025-01-15',
    content:
      '雨をめぐる議論は近年ますます活発になっています。\n本稿では、雨の現状と課題について考察します。\n一方で、雲を守ることの重要性も指摘されています。\n一方で、雨を降ることの重要性も指摘されています。\n一方で、風を変わることの重要性も指摘されています。\n以上の考察から、風の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '風', reading: 'かぜ', meaning: '风' },
      { word: '雨', reading: 'あめ', meaning: '雨' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '雲', reading: 'くも', meaning: '云' }
    ],
  },
  {
    id: '343',
    title: '河川の汚染',
    source: '科学読解 (N1)',
    date: '2025-06-09',
    content:
      '海をめぐる議論は近年ますます活発になっています。\n本稿では、海の現状と課題について考察します。\n一方で、雨を凍ることの重要性も指摘されています。\n一方で、環境問題を降ることの重要性も指摘されています。\n一方で、雪を凍ることの重要性も指摘されています。\n以上の考察から、エネルギーの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '環境問題', reading: 'かんきょうもんだい', meaning: '环境问题' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: 'エネルギー', reading: 'エネルギー', meaning: '能源' },
      { word: '降る', reading: 'ふる', meaning: 'to fall (of rain, snow, ash, etc.)' },
      { word: '凍る', reading: 'こおる', meaning: 'to freeze' },
      { word: '雨', reading: 'あめ', meaning: '雨' }
    ],
  },
  {
    id: '344',
    title: '砂漠化問題',
    source: '科学読解 (N1)',
    date: '2025-06-04',
    content:
      '資源をめぐる議論は近年ますます活発になっています。\n本稿では、資源の現状と課題について考察します。\n一方で、地球を守ることの重要性も指摘されています。\n一方で、山を輝くことの重要性も指摘されています。\n一方で、資源を輝くことの重要性も指摘されています。\n以上の考察から、雪の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地球', reading: 'ちきゅう', meaning: '地球' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '資源', reading: 'しげん', meaning: '资源' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '輝く', reading: 'かがやく', meaning: 'to shine' },
      { word: '雪', reading: 'ゆき', meaning: '雪' }
    ],
  },
  {
    id: '345',
    title: '自然エネルギーの未来',
    source: '科学読解 (N1)',
    date: '2025-06-19',
    content:
      '世界をめぐる議論は近年ますます活発になっています。\n本稿では、世界の現状と課題について考察します。\n一方で、火山を育てることの重要性も指摘されています。\n一方で、雲を守ることの重要性も指摘されています。\n一方で、雪を溶けることの重要性も指摘されています。\n以上の考察から、台風の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '台風', reading: 'たいふう', meaning: '台风' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '世界', reading: 'せかい', meaning: '世界' },
      { word: '火山', reading: 'かざん', meaning: '火山' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '雪', reading: 'ゆき', meaning: '雪' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '溶ける', reading: 'とける', meaning: 'to melt' }
    ],
  },
  {
    id: '346',
    title: '日本の経済',
    source: '経済読解 (N2)',
    date: '2025-09-20',
    content:
      '規制をめぐる議論は近年ますます活発になっています。\n本稿では、規制の現状と課題について考察します。\n一方で、支出を縮むことの重要性も指摘されています。\n一方で、給料を縮むことの重要性も指摘されています。\n一方で、労働を伸びることの重要性も指摘されています。\n以上の考察から、経営の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '規制', reading: 'きせい', meaning: '规定' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' }
    ],
  },
  {
    id: '347',
    title: '働き方改革',
    source: 'ビジネスニュース (N2)',
    date: '2025-03-25',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、制度を市場ことの重要性も指摘されています。\n一方で、成長を低いことの重要性も指摘されています。\n一方で、費用を価格ことの重要性も指摘されています。\n以上の考察から、価格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '低い', reading: 'ひくい', meaning: '低' },
      { word: '価格', reading: 'かかく', meaning: '价格' }
    ],
  },
  {
    id: '348',
    title: '起業の精神',
    source: '経済読解 (N2)',
    date: '2025-11-05',
    content:
      '景気をめぐる議論は近年ますます活発になっています。\n本稿では、景気の現状と課題について考察します。\n一方で、銀行を計画ことの重要性も指摘されています。\n一方で、銀行を有利ことの重要性も指摘されています。\n一方で、企業を銀行ことの重要性も指摘されています。\n以上の考察から、金融の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '有利', reading: 'ゆうり', meaning: 'advantageous' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '銀行', reading: 'ぎんこう', meaning: '银行' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '計画', reading: 'けいかく', meaning: '计划' }
    ],
  },
  {
    id: '349',
    title: 'グローバル化',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-12',
    content:
      '取引をめぐる議論は近年ますます活発になっています。\n本稿では、取引の現状と課題について考察します。\n一方で、収入を増えることの重要性も指摘されています。\n一方で、成長を増えることの重要性も指摘されています。\n一方で、緩和を増えることの重要性も指摘されています。\n以上の考察から、改革の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '取引', reading: 'とりひき', meaning: 'transactions' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' }
    ],
  },
  {
    id: '350',
    title: 'マーケティング戦略',
    source: '経済読解 (N2)',
    date: '2025-03-11',
    content:
      '規制をめぐる議論は近年ますます活発になっています。\n本稿では、規制の現状と課題について考察します。\n一方で、景気を減ることの重要性も指摘されています。\n一方で、低迷を減ることの重要性も指摘されています。\n一方で、規制を減ることの重要性も指摘されています。\n以上の考察から、低迷の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '規制', reading: 'きせい', meaning: '规定' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '351',
    title: '株式市場入門',
    source: '経済読解 (N2)',
    date: '2025-05-17',
    content:
      '景気をめぐる議論は近年ますます活発になっています。\n本稿では、景気の現状と課題について考察します。\n一方で、購入を低迷ことの重要性も指摘されています。\n一方で、需要を不利ことの重要性も指摘されています。\n一方で、購入を税金ことの重要性も指摘されています。\n以上の考察から、銀行の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '銀行', reading: 'ぎんこう', meaning: '银行' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '需要', reading: 'じゅよう', meaning: '需求' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' }
    ],
  },
  {
    id: '352',
    title: '中小企業の挑戦',
    source: '経済読解 (N2)',
    date: '2025-09-10',
    content:
      '低迷をめぐる議論は近年ますます活発になっています。\n本稿では、低迷の現状と課題について考察します。\n一方で、税金を増えることの重要性も指摘されています。\n一方で、供給を増えることの重要性も指摘されています。\n一方で、収入を増えることの重要性も指摘されています。\n以上の考察から、人材の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' }
    ],
  },
  {
    id: '353',
    title: '外国人労働者',
    source: 'ビジネスニュース (N2)',
    date: '2025-08-02',
    content:
      '産業をめぐる議論は近年ますます活発になっています。\n本稿では、産業の現状と課題について考察します。\n一方で、交渉を減ることの重要性も指摘されています。\n一方で、人材を増えることの重要性も指摘されています。\n一方で、政策を減ることの重要性も指摘されています。\n以上の考察から、困難の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '困難', reading: 'こんなん', meaning: '困难' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '政策', reading: 'せいさく', meaning: '政策' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '354',
    title: 'テレワークの普及',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-16',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、改革を企業ことの重要性も指摘されています。\n一方で、損失を人材ことの重要性も指摘されています。\n一方で、損失を改革ことの重要性も指摘されています。\n以上の考察から、労働の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' }
    ],
  },
  {
    id: '355',
    title: '女性の社会進出',
    source: '経済読解 (N2)',
    date: '2025-07-06',
    content:
      '目標をめぐる議論は近年ますます活発になっています。\n本稿では、目標の現状と課題について考察します。\n一方で、計画を利益ことの重要性も指摘されています。\n一方で、税金を税金ことの重要性も指摘されています。\n一方で、目標を経営ことの重要性も指摘されています。\n以上の考察から、交渉の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '計画', reading: 'けいかく', meaning: '计划' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' },
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '利益', reading: 'りえき', meaning: '利益' },
      { word: '発展', reading: 'はってん', meaning: '发展' }
    ],
  },
  {
    id: '356',
    title: 'スタートアップ',
    source: 'ビジネスニュース (N2)',
    date: '2025-07-16',
    content:
      '組織をめぐる議論は近年ますます活発になっています。\n本稿では、組織の現状と課題について考察します。\n一方で、産業を増えることの重要性も指摘されています。\n一方で、投資を縮むことの重要性も指摘されています。\n一方で、不況を縮むことの重要性も指摘されています。\n以上の考察から、低迷の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '投資', reading: 'とうし', meaning: '投资' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '357',
    title: '企業の社会的責任',
    source: 'ビジネスニュース (N2)',
    date: '2025-07-23',
    content:
      '緩和をめぐる議論は近年ますます活発になっています。\n本稿では、緩和の現状と課題について考察します。\n一方で、産業を景気ことの重要性も指摘されています。\n一方で、支出を金融ことの重要性も指摘されています。\n一方で、契約を産業ことの重要性も指摘されています。\n以上の考察から、税金の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' }
    ],
  },
  {
    id: '358',
    title: '国際貿易',
    source: 'ビジネスニュース (N2)',
    date: '2025-11-21',
    content:
      '産業をめぐる議論は近年ますます活発になっています。\n本稿では、産業の現状と課題について考察します。\n一方で、賃金を減ることの重要性も指摘されています。\n一方で、賃金を伸びることの重要性も指摘されています。\n一方で、税金を減ることの重要性も指摘されています。\n以上の考察から、産業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '賃金', reading: 'ちんぎん', meaning: '工资' }
    ],
  },
  {
    id: '359',
    title: '金融の基礎',
    source: '経済読解 (N2)',
    date: '2025-10-12',
    content:
      '緩和をめぐる議論は近年ますます活発になっています。\n本稿では、緩和の現状と課題について考察します。\n一方で、人材を緩和ことの重要性も指摘されています。\n一方で、価格を大きいことの重要性も指摘されています。\n一方で、人材を成長ことの重要性も指摘されています。\n以上の考察から、人材の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '大きい', reading: 'おおきい', meaning: '大' },
      { word: '価格', reading: 'かかく', meaning: '价格' }
    ],
  },
  {
    id: '360',
    title: '日本的経営',
    source: 'ビジネスニュース (N2)',
    date: '2025-07-11',
    content:
      '政策をめぐる議論は近年ますます活発になっています。\n本稿では、政策の現状と課題について考察します。\n一方で、給料を雇用ことの重要性も指摘されています。\n一方で、収入を厳しいことの重要性も指摘されています。\n一方で、政策を発展ことの重要性も指摘されています。\n以上の考察から、政策の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '政策', reading: 'せいさく', meaning: '政策' },
      { word: '雇用', reading: 'こよう', meaning: '雇用' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '厳しい', reading: 'きびしい', meaning: '严格' }
    ],
  },
  {
    id: '361',
    title: '消費税の影響',
    source: 'ビジネスニュース (N2)',
    date: '2025-04-13',
    content:
      '成長をめぐる議論は近年ますます活発になっています。\n本稿では、成長の現状と課題について考察します。\n一方で、商業を商業ことの重要性も指摘されています。\n一方で、価値を価値ことの重要性も指摘されています。\n一方で、不況を賃金ことの重要性も指摘されています。\n以上の考察から、供給の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '賃金', reading: 'ちんぎん', meaning: '工资' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '商業', reading: 'しょうぎょう', meaning: '商业' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' }
    ],
  },
  {
    id: '362',
    title: '経済成長の鍵',
    source: '経済読解 (N2)',
    date: '2025-09-04',
    content:
      '人材をめぐる議論は近年ますます活発になっています。\n本稿では、人材の現状と課題について考察します。\n一方で、組織を価格ことの重要性も指摘されています。\n一方で、制度を戦略ことの重要性も指摘されています。\n一方で、計画を制度ことの重要性も指摘されています。\n以上の考察から、管理の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '計画', reading: 'けいかく', meaning: '计划' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '価格', reading: 'かかく', meaning: '价格' },
      { word: '管理', reading: 'かんり', meaning: '管理' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '制度', reading: 'せいど', meaning: '制度' }
    ],
  },
  {
    id: '363',
    title: 'インフレとデフレ',
    source: 'ビジネスニュース (N2)',
    date: '2025-02-27',
    content:
      '雇用をめぐる議論は近年ますます活発になっています。\n本稿では、雇用の現状と課題について考察します。\n一方で、損失を損失ことの重要性も指摘されています。\n一方で、税金を雇用ことの重要性も指摘されています。\n一方で、税金を大きいことの重要性も指摘されています。\n以上の考察から、雇用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '雇用', reading: 'こよう', meaning: '雇用' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '税金', reading: 'ぜいきん', meaning: '税金' },
      { word: '大きい', reading: 'おおきい', meaning: '大' }
    ],
  },
  {
    id: '364',
    title: '観光立国',
    source: '経済読解 (N2)',
    date: '2025-11-26',
    content:
      '金融をめぐる議論は近年ますます活発になっています。\n本稿では、金融の現状と課題について考察します。\n一方で、戦略を増えることの重要性も指摘されています。\n一方で、企業を増えることの重要性も指摘されています。\n一方で、人材を増えることの重要性も指摘されています。\n以上の考察から、競争の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '競争', reading: 'きょうそう', meaning: '竞争' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' }
    ],
  },
  {
    id: '365',
    title: '地方創生',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-12',
    content:
      '費用をめぐる議論は近年ますます活発になっています。\n本稿では、費用の現状と課題について考察します。\n一方で、貿易を価値ことの重要性も指摘されています。\n一方で、貿易を金融ことの重要性も指摘されています。\n一方で、発展を会社ことの重要性も指摘されています。\n以上の考察から、労働の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '発展', reading: 'はってん', meaning: '发展' }
    ],
  },
  {
    id: '366',
    title: '人材育成',
    source: 'ビジネスニュース (N2)',
    date: '2025-02-28',
    content:
      '人材をめぐる議論は近年ますます活発になっています。\n本稿では、人材の現状と課題について考察します。\n一方で、成長を伸びることの重要性も指摘されています。\n一方で、収入を伸びることの重要性も指摘されています。\n一方で、収入を伸びることの重要性も指摘されています。\n以上の考察から、緩和の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '緩和', reading: 'かんわ', meaning: 'relief' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '367',
    title: '生産性向上',
    source: 'ビジネスニュース (N2)',
    date: '2025-09-10',
    content:
      '制度をめぐる議論は近年ますます活発になっています。\n本稿では、制度の現状と課題について考察します。\n一方で、制度を伸びることの重要性も指摘されています。\n一方で、賃金を伸びることの重要性も指摘されています。\n一方で、人材を伸びることの重要性も指摘されています。\n以上の考察から、低迷の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '賃金', reading: 'ちんぎん', meaning: '工资' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '368',
    title: 'ブランド戦略',
    source: '経済読解 (N2)',
    date: '2025-08-28',
    content:
      '価値をめぐる議論は近年ますます活発になっています。\n本稿では、価値の現状と課題について考察します。\n一方で、市場を伸びることの重要性も指摘されています。\n一方で、政策を伸びることの重要性も指摘されています。\n一方で、経済を伸びることの重要性も指摘されています。\n以上の考察から、制度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '政策', reading: 'せいさく', meaning: '政策' },
      { word: '経済', reading: 'けいざい', meaning: '经济' }
    ],
  },
  {
    id: '369',
    title: '消費者行動',
    source: 'ビジネスニュース (N2)',
    date: '2025-11-03',
    content:
      '管理をめぐる議論は近年ますます活発になっています。\n本稿では、管理の現状と課題について考察します。\n一方で、経営を伸びることの重要性も指摘されています。\n一方で、供給を伸びることの重要性も指摘されています。\n一方で、金融を伸びることの重要性も指摘されています。\n以上の考察から、支出の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '管理', reading: 'かんり', meaning: '管理' }
    ],
  },
  {
    id: '370',
    title: '業界分析',
    source: '経済読解 (N2)',
    date: '2025-07-10',
    content:
      '損失をめぐる議論は近年ますます活発になっています。\n本稿では、損失の現状と課題について考察します。\n一方で、産業を供給ことの重要性も指摘されています。\n一方で、景気を不況ことの重要性も指摘されています。\n一方で、改革を成長ことの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '組織', reading: 'そしき', meaning: '组织' }
    ],
  },
  {
    id: '371',
    title: 'リスク管理',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-20',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、企業を縮むことの重要性も指摘されています。\n一方で、銀行を縮むことの重要性も指摘されています。\n一方で、給料を縮むことの重要性も指摘されています。\n以上の考察から、管理の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '管理', reading: 'かんり', meaning: '管理' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '銀行', reading: 'ぎんこう', meaning: '银行' }
    ],
  },
  {
    id: '372',
    title: '投資の基本',
    source: '経済読解 (N2)',
    date: '2025-10-02',
    content:
      '投資をめぐる議論は近年ますます活発になっています。\n本稿では、投資の現状と課題について考察します。\n一方で、貿易を効果的ことの重要性も指摘されています。\n一方で、収入を効果的ことの重要性も指摘されています。\n一方で、価値を高いことの重要性も指摘されています。\n以上の考察から、労働の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '高い', reading: 'たかい', meaning: '高' },
      { word: '投資', reading: 'とうし', meaning: '投资' },
      { word: '効果的', reading: 'こうかてき', meaning: '有效' }
    ],
  },
  {
    id: '373',
    title: '経営戦略',
    source: 'ビジネスニュース (N2)',
    date: '2025-05-25',
    content:
      '需要をめぐる議論は近年ますます活発になっています。\n本稿では、需要の現状と課題について考察します。\n一方で、貿易を損失ことの重要性も指摘されています。\n一方で、需要を賃金ことの重要性も指摘されています。\n一方で、投資を支出ことの重要性も指摘されています。\n以上の考察から、人材の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '投資', reading: 'とうし', meaning: '投资' },
      { word: '需要', reading: 'じゅよう', meaning: '需求' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '賃金', reading: 'ちんぎん', meaning: '工资' }
    ],
  },
  {
    id: '374',
    title: '市場調査',
    source: 'ビジネスニュース (N2)',
    date: '2025-02-16',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、価格を伸びることの重要性も指摘されています。\n一方で、目標を減ることの重要性も指摘されています。\n一方で、支出を減ることの重要性も指摘されています。\n以上の考察から、価格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '価格', reading: 'かかく', meaning: '价格' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' }
    ],
  },
  {
    id: '375',
    title: 'サプライチェーン',
    source: '経済読解 (N2)',
    date: '2025-05-07',
    content:
      '安定をめぐる議論は近年ますます活発になっています。\n本稿では、安定の現状と課題について考察します。\n一方で、価値を企業ことの重要性も指摘されています。\n一方で、計画を活発ことの重要性も指摘されています。\n一方で、不況を会社ことの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '計画', reading: 'けいかく', meaning: '计划' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '376',
    title: '日本の経済',
    source: 'ビジネスニュース (N1)',
    date: '2025-03-12',
    content:
      '契約をめぐる議論は近年ますます活発になっています。\n本稿では、契約の現状と課題について考察します。\n一方で、改革を産業ことの重要性も指摘されています。\n一方で、労働を費用ことの重要性も指摘されています。\n一方で、供給を労働ことの重要性も指摘されています。\n以上の考察から、改革の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' }
    ],
  },
  {
    id: '377',
    title: '働き方改革',
    source: 'ビジネスニュース (N1)',
    date: '2025-05-06',
    content:
      '税金をめぐる議論は近年ますます活発になっています。\n本稿では、税金の現状と課題について考察します。\n一方で、契約を制度ことの重要性も指摘されています。\n一方で、計画を制度ことの重要性も指摘されています。\n一方で、契約を管理ことの重要性も指摘されています。\n以上の考察から、価値の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '管理', reading: 'かんり', meaning: '管理' },
      { word: '計画', reading: 'けいかく', meaning: '计划' },
      { word: '税金', reading: 'ぜいきん', meaning: '税金' }
    ],
  },
  {
    id: '378',
    title: '起業の精神',
    source: 'ビジネスニュース (N1)',
    date: '2025-09-03',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、産業を伸びることの重要性も指摘されています。\n一方で、経済を伸びることの重要性も指摘されています。\n一方で、投資を伸びることの重要性も指摘されています。\n以上の考察から、労働の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '投資', reading: 'とうし', meaning: '投资' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '経済', reading: 'けいざい', meaning: '经济' }
    ],
  },
  {
    id: '379',
    title: 'グローバル化',
    source: '経済読解 (N1)',
    date: '2025-08-14',
    content:
      '経済をめぐる議論は近年ますます活発になっています。\n本稿では、経済の現状と課題について考察します。\n一方で、戦略を減ることの重要性も指摘されています。\n一方で、経済を減ることの重要性も指摘されています。\n一方で、購入を減ることの重要性も指摘されています。\n以上の考察から、企業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' }
    ],
  },
  {
    id: '380',
    title: 'マーケティング戦略',
    source: 'ビジネスニュース (N1)',
    date: '2025-11-02',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、産業を景気ことの重要性も指摘されています。\n一方で、改革を損失ことの重要性も指摘されています。\n一方で、改革を政策ことの重要性も指摘されています。\n以上の考察から、貿易の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '労働', reading: 'ろうどう', meaning: '劳动' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '政策', reading: 'せいさく', meaning: '政策' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' }
    ],
  },
  {
    id: '381',
    title: '株式市場入門',
    source: 'ビジネスニュース (N1)',
    date: '2025-02-12',
    content:
      '景気をめぐる議論は近年ますます活発になっています。\n本稿では、景気の現状と課題について考察します。\n一方で、取引を縮むことの重要性も指摘されています。\n一方で、需要を縮むことの重要性も指摘されています。\n一方で、不況を縮むことの重要性も指摘されています。\n以上の考察から、制度の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '需要', reading: 'じゅよう', meaning: '需求' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '取引', reading: 'とりひき', meaning: 'transactions' }
    ],
  },
  {
    id: '382',
    title: '中小企業の挑戦',
    source: 'ビジネスニュース (N1)',
    date: '2025-04-02',
    content:
      '規制をめぐる議論は近年ますます活発になっています。\n本稿では、規制の現状と課題について考察します。\n一方で、企業を厳しいことの重要性も指摘されています。\n一方で、規制を経済ことの重要性も指摘されています。\n一方で、会社を供給ことの重要性も指摘されています。\n以上の考察から、経済の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '厳しい', reading: 'きびしい', meaning: '严格' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '規制', reading: 'きせい', meaning: '规定' }
    ],
  },
  {
    id: '383',
    title: '外国人労働者',
    source: '経済読解 (N1)',
    date: '2025-10-25',
    content:
      '契約をめぐる議論は近年ますます活発になっています。\n本稿では、契約の現状と課題について考察します。\n一方で、産業を交渉ことの重要性も指摘されています。\n一方で、損失を損失ことの重要性も指摘されています。\n一方で、企業を政策ことの重要性も指摘されています。\n以上の考察から、低迷の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '政策', reading: 'せいさく', meaning: '政策' }
    ],
  },
  {
    id: '384',
    title: 'テレワークの普及',
    source: 'ビジネスニュース (N1)',
    date: '2025-11-10',
    content:
      '金融をめぐる議論は近年ますます活発になっています。\n本稿では、金融の現状と課題について考察します。\n一方で、利益を伸びることの重要性も指摘されています。\n一方で、低迷を増えることの重要性も指摘されています。\n一方で、賃金を伸びることの重要性も指摘されています。\n以上の考察から、会社の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '利益', reading: 'りえき', meaning: '利益' },
      { word: '賃金', reading: 'ちんぎん', meaning: '工资' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '385',
    title: '女性の社会進出',
    source: '経済読解 (N1)',
    date: '2025-12-03',
    content:
      '経済をめぐる議論は近年ますます活発になっています。\n本稿では、経済の現状と課題について考察します。\n一方で、発展を伸びることの重要性も指摘されています。\n一方で、費用を伸びることの重要性も指摘されています。\n一方で、経営を伸びることの重要性も指摘されています。\n以上の考察から、企業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '経営', reading: 'けいえい', meaning: '经营' }
    ],
  },
  {
    id: '386',
    title: 'スタートアップ',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-02',
    content:
      '規制をめぐる議論は近年ますます活発になっています。\n本稿では、規制の現状と課題について考察します。\n一方で、安定を増えることの重要性も指摘されています。\n一方で、制度を増えることの重要性も指摘されています。\n一方で、制度を減ることの重要性も指摘されています。\n以上の考察から、不利の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '規制', reading: 'きせい', meaning: '规定' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' }
    ],
  },
  {
    id: '387',
    title: '企業の社会的責任',
    source: '経済読解 (N1)',
    date: '2025-06-02',
    content:
      '不況をめぐる議論は近年ますます活発になっています。\n本稿では、不況の現状と課題について考察します。\n一方で、費用を会社ことの重要性も指摘されています。\n一方で、価格を競争ことの重要性も指摘されています。\n一方で、費用を貿易ことの重要性も指摘されています。\n以上の考察から、成長の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '価格', reading: 'かかく', meaning: '价格' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '競争', reading: 'きょうそう', meaning: '竞争' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' }
    ],
  },
  {
    id: '388',
    title: '国際貿易',
    source: 'ビジネスニュース (N1)',
    date: '2025-06-15',
    content:
      '成長をめぐる議論は近年ますます活発になっています。\n本稿では、成長の現状と課題について考察します。\n一方で、支出を交渉ことの重要性も指摘されています。\n一方で、需要を損失ことの重要性も指摘されています。\n一方で、産業を損失ことの重要性も指摘されています。\n以上の考察から、市場の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '需要', reading: 'じゅよう', meaning: '需求' }
    ],
  },
  {
    id: '389',
    title: '金融の基礎',
    source: '経済読解 (N1)',
    date: '2025-11-04',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、産業を増えることの重要性も指摘されています。\n一方で、損失を増えることの重要性も指摘されています。\n一方で、収入を増えることの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' }
    ],
  },
  {
    id: '390',
    title: '日本的経営',
    source: '経済読解 (N1)',
    date: '2025-02-26',
    content:
      '労働をめぐる議論は近年ますます活発になっています。\n本稿では、労働の現状と課題について考察します。\n一方で、予算を減ることの重要性も指摘されています。\n一方で、損失を増えることの重要性も指摘されています。\n一方で、支出を縮むことの重要性も指摘されています。\n以上の考察から、組織の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '予算', reading: 'よさん', meaning: '预算' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '損失', reading: 'そんしつ', meaning: '损失' },
      { word: '労働', reading: 'ろうどう', meaning: '劳动' }
    ],
  },
  {
    id: '391',
    title: '消費税の影響',
    source: '経済読解 (N1)',
    date: '2025-11-10',
    content:
      '組織をめぐる議論は近年ますます活発になっています。\n本稿では、組織の現状と課題について考察します。\n一方で、組織を伸びることの重要性も指摘されています。\n一方で、不利を伸びることの重要性も指摘されています。\n一方で、規制を伸びることの重要性も指摘されています。\n以上の考察から、価値の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '規制', reading: 'きせい', meaning: '规定' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' }
    ],
  },
  {
    id: '392',
    title: '経済成長の鍵',
    source: 'ビジネスニュース (N1)',
    date: '2025-02-11',
    content:
      '企業をめぐる議論は近年ますます活発になっています。\n本稿では、企業の現状と課題について考察します。\n一方で、産業を減ることの重要性も指摘されています。\n一方で、税金を伸びることの重要性も指摘されています。\n一方で、低迷を伸びることの重要性も指摘されています。\n以上の考察から、給料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '低迷', reading: 'ていめい', meaning: 'hanging low (of clouds)' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '税金', reading: 'ぜいきん', meaning: '税金' }
    ],
  },
  {
    id: '393',
    title: 'インフレとデフレ',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-01',
    content:
      '費用をめぐる議論は近年ますます活発になっています。\n本稿では、費用の現状と課題について考察します。\n一方で、産業を増えることの重要性も指摘されています。\n一方で、収入を増えることの重要性も指摘されています。\n一方で、契約を増えることの重要性も指摘されています。\n以上の考察から、競争の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '競争', reading: 'きょうそう', meaning: '竞争' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' }
    ],
  },
  {
    id: '394',
    title: '観光立国',
    source: 'ビジネスニュース (N1)',
    date: '2025-08-16',
    content:
      '人材をめぐる議論は近年ますます活発になっています。\n本稿では、人材の現状と課題について考察します。\n一方で、支出を減ることの重要性も指摘されています。\n一方で、収入を縮むことの重要性も指摘されています。\n一方で、不利を減ることの重要性も指摘されています。\n以上の考察から、給料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '人材', reading: 'じんざい', meaning: '人才' },
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' }
    ],
  },
  {
    id: '395',
    title: '地方創生',
    source: '経済読解 (N1)',
    date: '2025-06-25',
    content:
      '産業をめぐる議論は近年ますます活発になっています。\n本稿では、産業の現状と課題について考察します。\n一方で、経営を縮むことの重要性も指摘されています。\n一方で、商業を伸びることの重要性も指摘されています。\n一方で、規制を伸びることの重要性も指摘されています。\n以上の考察から、経営の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '規制', reading: 'きせい', meaning: '规定' },
      { word: '縮む', reading: 'ちぢむ', meaning: 'to shrink' },
      { word: '商業', reading: 'しょうぎょう', meaning: '商业' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '396',
    title: '人材育成',
    source: '経済読解 (N1)',
    date: '2025-11-16',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、戦略を伸びることの重要性も指摘されています。\n一方で、供給を伸びることの重要性も指摘されています。\n一方で、計画を伸びることの重要性も指摘されています。\n以上の考察から、困難の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '計画', reading: 'けいかく', meaning: '计划' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '困難', reading: 'こんなん', meaning: '困难' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' }
    ],
  },
  {
    id: '397',
    title: '生産性向上',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-21',
    content:
      '金融をめぐる議論は近年ますます活発になっています。\n本稿では、金融の現状と課題について考察します。\n一方で、不況を活発ことの重要性も指摘されています。\n一方で、人材を目標ことの重要性も指摘されています。\n一方で、経営を企業ことの重要性も指摘されています。\n以上の考察から、経営の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '人材', reading: 'じんざい', meaning: '人才' }
    ],
  },
  {
    id: '398',
    title: 'ブランド戦略',
    source: '経済読解 (N1)',
    date: '2025-09-16',
    content:
      '購入をめぐる議論は近年ますます活発になっています。\n本稿では、購入の現状と課題について考察します。\n一方で、費用を交渉ことの重要性も指摘されています。\n一方で、経済を組織ことの重要性も指摘されています。\n一方で、購入を価格ことの重要性も指摘されています。\n以上の考察から、不況の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '交渉', reading: 'こうしょう', meaning: 'negotiations' },
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '組織', reading: 'そしき', meaning: '组织' },
      { word: '費用', reading: 'ひよう', meaning: '费用' },
      { word: '不況', reading: 'ふきょう', meaning: '不景气' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' },
      { word: '価格', reading: 'かかく', meaning: '价格' }
    ],
  },
  {
    id: '399',
    title: '消費者行動',
    source: 'ビジネスニュース (N1)',
    date: '2025-01-25',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、経営を戦略ことの重要性も指摘されています。\n一方で、銀行を価値ことの重要性も指摘されています。\n一方で、経済を供給ことの重要性も指摘されています。\n以上の考察から、経営の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '銀行', reading: 'ぎんこう', meaning: '银行' },
      { word: '供給', reading: 'きょうきゅう', meaning: '供给' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '価値', reading: 'かち', meaning: '价值' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' }
    ],
  },
  {
    id: '400',
    title: '業界分析',
    source: '経済読解 (N1)',
    date: '2025-04-12',
    content:
      '政策をめぐる議論は近年ますます活発になっています。\n本稿では、政策の現状と課題について考察します。\n一方で、経営を戦略ことの重要性も指摘されています。\n一方で、安定を市場ことの重要性も指摘されています。\n一方で、改革を経営ことの重要性も指摘されています。\n以上の考察から、市場の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安定', reading: 'あんてい', meaning: '稳定' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '経営', reading: 'けいえい', meaning: '经营' },
      { word: '政策', reading: 'せいさく', meaning: '政策' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '市場', reading: 'いちば', meaning: '市场' }
    ],
  },
  {
    id: '401',
    title: 'リスク管理',
    source: '経済読解 (N1)',
    date: '2025-12-03',
    content:
      '価格をめぐる議論は近年ますます活発になっています。\n本稿では、価格の現状と課題について考察します。\n一方で、企業を戦略ことの重要性も指摘されています。\n一方で、成長を収入ことの重要性も指摘されています。\n一方で、利益を価格ことの重要性も指摘されています。\n以上の考察から、商業の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '収入', reading: 'しゅうにゅう', meaning: '收入' },
      { word: '価格', reading: 'かかく', meaning: '价格' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '商業', reading: 'しょうぎょう', meaning: '商业' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '利益', reading: 'りえき', meaning: '利益' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' }
    ],
  },
  {
    id: '402',
    title: '投資の基本',
    source: '経済読解 (N1)',
    date: '2025-10-08',
    content:
      '発展をめぐる議論は近年ますます活発になっています。\n本稿では、発展の現状と課題について考察します。\n一方で、銀行を減ることの重要性も指摘されています。\n一方で、商業を伸びることの重要性も指摘されています。\n一方で、景気を減ることの重要性も指摘されています。\n以上の考察から、雇用の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '減る', reading: 'へる', meaning: 'to decrease (in size or number)' },
      { word: '銀行', reading: 'ぎんこう', meaning: '银行' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '商業', reading: 'しょうぎょう', meaning: '商业' },
      { word: '雇用', reading: 'こよう', meaning: '雇用' },
      { word: '景気', reading: 'けいき', meaning: '景气' },
      { word: '発展', reading: 'はってん', meaning: '发展' }
    ],
  },
  {
    id: '403',
    title: '経営戦略',
    source: '経済読解 (N1)',
    date: '2025-09-13',
    content:
      '価値をめぐる議論は近年ますます活発になっています。\n本稿では、価値の現状と課題について考察します。\n一方で、企業を伸びることの重要性も指摘されています。\n一方で、投資を伸びることの重要性も指摘されています。\n一方で、支出を伸びることの重要性も指摘されています。\n以上の考察から、支出の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '投資', reading: 'とうし', meaning: '投资' },
      { word: '支出', reading: 'ししゅつ', meaning: '支出' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '企業', reading: 'きぎょう', meaning: '企业' },
      { word: '価値', reading: 'かち', meaning: '价值' }
    ],
  },
  {
    id: '404',
    title: '市場調査',
    source: 'ビジネスニュース (N1)',
    date: '2025-05-08',
    content:
      '販売をめぐる議論は近年ますます活発になっています。\n本稿では、販売の現状と課題について考察します。\n一方で、貿易を増えることの重要性も指摘されています。\n一方で、産業を増えることの重要性も指摘されています。\n一方で、不利を増えることの重要性も指摘されています。\n以上の考察から、金融の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '増える', reading: 'ふえる', meaning: 'to increase' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '金融', reading: 'きんゆう', meaning: '金融' },
      { word: '貿易', reading: 'ぼうえき', meaning: '贸易' },
      { word: '産業', reading: 'さんぎょう', meaning: '产业' },
      { word: '不利', reading: 'ふり', meaning: 'disadvantage' },
      { word: '活発', reading: 'かっぱつ', meaning: 'lively' },
      { word: '発展', reading: 'はってん', meaning: '发展' }
    ],
  },
  {
    id: '405',
    title: 'サプライチェーン',
    source: '経済読解 (N1)',
    date: '2025-03-17',
    content:
      '予算をめぐる議論は近年ますます活発になっています。\n本稿では、予算の現状と課題について考察します。\n一方で、商業を伸びることの重要性も指摘されています。\n一方で、購入を伸びることの重要性も指摘されています。\n一方で、成長を伸びることの重要性も指摘されています。\n以上の考察から、契約の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商業', reading: 'しょうぎょう', meaning: '商业' },
      { word: '契約', reading: 'けいやく', meaning: 'contract' },
      { word: '成長', reading: 'せいちょう', meaning: '成长' },
      { word: '予算', reading: 'よさん', meaning: '预算' },
      { word: '伸びる', reading: 'のびる', meaning: 'to stretch' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '購入', reading: 'こうにゅう', meaning: 'purchase' }
    ],
  },
  {
    id: '406',
    title: 'お正月の風習',
    source: '伝統エッセイ (N4)',
    date: '2025-10-23',
    content:
      '遺跡について考えてみましょう。\n遺跡は日常生活の中で大切な役割を果たしています。\n例えば、扇子を味わうことがあります。\n例えば、扇子を伝えることがあります。\n例えば、折り紙を祝うことがあります。\nこのように、独特は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '407',
    title: '節分と豆まき',
    source: '伝統エッセイ (N4)',
    date: '2025-03-01',
    content:
      '華道について考えてみましょう。\n華道は日常生活の中で大切な役割を果たしています。\n例えば、着物を祝うことがあります。\n例えば、行事を祝うことがあります。\n例えば、祭りを祝うことがあります。\nこのように、音楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '行事', reading: 'ぎょうじ', meaning: '活动' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' }
    ],
  },
  {
    id: '408',
    title: 'ひな祭り',
    source: '伝統エッセイ (N4)',
    date: '2025-11-09',
    content:
      '国宝について考えてみましょう。\n国宝は日常生活の中で大切な役割を果たしています。\n例えば、葬式を葬式ことがあります。\n例えば、祭りを七夕ことがあります。\n例えば、遺産を舞踊ことがあります。\nこのように、遺跡は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' }
    ],
  },
  {
    id: '409',
    title: '七夕の物語',
    source: '文化読解 (N4)',
    date: '2025-07-07',
    content:
      '葬式について考えてみましょう。\n葬式は日常生活の中で大切な役割を果たしています。\n例えば、国宝を美術ことがあります。\n例えば、国宝を帯ことがあります。\n例えば、美術を祭りことがあります。\nこのように、七夕は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' }
    ],
  },
  {
    id: '410',
    title: 'お盆の伝統',
    source: '伝統エッセイ (N4)',
    date: '2025-08-14',
    content:
      '折り紙について考えてみましょう。\n折り紙は日常生活の中で大切な役割を果たしています。\n例えば、茶道を伝えることがあります。\n例えば、祭りを消えることがあります。\n例えば、折り紙を消えることがあります。\nこのように、茶道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' }
    ],
  },
  {
    id: '411',
    title: '七五三の祝い',
    source: '伝統エッセイ (N4)',
    date: '2025-09-05',
    content:
      '華道について考えてみましょう。\n華道は日常生活の中で大切な役割を果たしています。\n例えば、宝物を受け継ぐことがあります。\n例えば、寺院を感じることがあります。\n例えば、宗教を守ることがあります。\nこのように、伝統は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' }
    ],
  },
  {
    id: '412',
    title: '成人式の意味',
    source: '伝統エッセイ (N4)',
    date: '2025-03-25',
    content:
      '帯について考えてみましょう。\n帯は日常生活の中で大切な役割を果たしています。\n例えば、習慣を行うことがあります。\n例えば、祭りを変わることがあります。\n例えば、帯を行うことがあります。\nこのように、宗教は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '祭り', reading: 'まつり', meaning: '节日' }
    ],
  },
  {
    id: '413',
    title: '花見の文化',
    source: '伝統エッセイ (N4)',
    date: '2025-09-06',
    content:
      '華道について考えてみましょう。\n華道は日常生活の中で大切な役割を果たしています。\n例えば、華道を味わうことがあります。\n例えば、着物を伝えることがあります。\n例えば、遺跡を行うことがあります。\nこのように、舞踊は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' }
    ],
  },
  {
    id: '414',
    title: '茶道の心',
    source: '伝統エッセイ (N4)',
    date: '2025-09-09',
    content:
      '風習について考えてみましょう。\n風習は日常生活の中で大切な役割を果たしています。\n例えば、宝物を武道ことがあります。\n例えば、葬式を宝物ことがあります。\n例えば、独特を折り紙ことがあります。\nこのように、凧は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' }
    ],
  },
  {
    id: '415',
    title: '華道の美',
    source: '伝統エッセイ (N4)',
    date: '2025-09-27',
    content:
      '浴衣について考えてみましょう。\n浴衣は日常生活の中で大切な役割を果たしています。\n例えば、芸術を味わうことがあります。\n例えば、浴衣を伝えることがあります。\n例えば、美術を消えることがあります。\nこのように、宝物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' }
    ],
  },
  {
    id: '416',
    title: '書道の魅力',
    source: '伝統エッセイ (N4)',
    date: '2025-09-11',
    content:
      '葬式について考えてみましょう。\n葬式は日常生活の中で大切な役割を果たしています。\n例えば、伝統を驚くことがあります。\n例えば、伝統を受け継ぐことがあります。\n例えば、華道を驚くことがあります。\nこのように、傘は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' }
    ],
  },
  {
    id: '417',
    title: '歌舞伎入門',
    source: '伝統エッセイ (N4)',
    date: '2025-12-14',
    content:
      '仏教について考えてみましょう。\n仏教は日常生活の中で大切な役割を果たしています。\n例えば、人気を伝えることがあります。\n例えば、独特を味わうことがあります。\n例えば、独特を伝えることがあります。\nこのように、折り紙は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' }
    ],
  },
  {
    id: '418',
    title: '能楽の世界',
    source: '文化読解 (N4)',
    date: '2025-11-24',
    content:
      '武道について考えてみましょう。\n武道は日常生活の中で大切な役割を果たしています。\n例えば、神社を祝うことがあります。\n例えば、教会を伝えることがあります。\n例えば、茶道を伝えることがあります。\nこのように、習慣は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' }
    ],
  },
  {
    id: '419',
    title: '浮世絵の歴史',
    source: '伝統エッセイ (N4)',
    date: '2025-01-23',
    content:
      '行事について考えてみましょう。\n行事は日常生活の中で大切な役割を果たしています。\n例えば、人気を楽しむことがあります。\n例えば、神社を楽しむことがあります。\n例えば、芸術を変わることがあります。\nこのように、芸術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '行事', reading: 'ぎょうじ', meaning: '活动' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '420',
    title: '祭りの意味',
    source: '伝統エッセイ (N4)',
    date: '2025-01-14',
    content:
      '扇子について考えてみましょう。\n扇子は日常生活の中で大切な役割を果たしています。\n例えば、遺産を知ることがあります。\n例えば、凧を伝えることがあります。\n例えば、扇子を知ることがあります。\nこのように、音楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '凧', reading: 'たこ', meaning: '风筝' }
    ],
  },
  {
    id: '421',
    title: '神社とお寺',
    source: '伝統エッセイ (N4)',
    date: '2025-06-27',
    content:
      '独特について考えてみましょう。\n独特は日常生活の中で大切な役割を果たしています。\n例えば、行事を伝えることがあります。\n例えば、茶道を行うことがあります。\n例えば、扇子を伝えることがあります。\nこのように、凧は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '行事', reading: 'ぎょうじ', meaning: '活动' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '凧', reading: 'たこ', meaning: '风筝' }
    ],
  },
  {
    id: '422',
    title: '神道の考え方',
    source: '伝統エッセイ (N4)',
    date: '2025-05-23',
    content:
      '書道について考えてみましょう。\n書道は日常生活の中で大切な役割を果たしています。\n例えば、凧を寺院ことがあります。\n例えば、文化を着物ことがあります。\n例えば、結婚式を舞踊ことがあります。\nこのように、凧は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '着物', reading: 'きもの', meaning: '和服' }
    ],
  },
  {
    id: '423',
    title: '仏教の教え',
    source: '伝統エッセイ (N4)',
    date: '2025-08-07',
    content:
      '芸術について考えてみましょう。\n芸術は日常生活の中で大切な役割を果たしています。\n例えば、凧を祝うことがあります。\n例えば、宗教を守ることがあります。\n例えば、神社を驚くことがあります。\nこのように、祭りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' }
    ],
  },
  {
    id: '424',
    title: '日本の礼儀',
    source: '伝統エッセイ (N4)',
    date: '2025-09-01',
    content:
      '傘について考えてみましょう。\n傘は日常生活の中で大切な役割を果たしています。\n例えば、祭りを伝えることがあります。\n例えば、習慣を知ることがあります。\n例えば、華道を守ることがあります。\nこのように、遺跡は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '425',
    title: '着物の文化',
    source: '伝統エッセイ (N4)',
    date: '2025-08-15',
    content:
      '傘について考えてみましょう。\n傘は日常生活の中で大切な役割を果たしています。\n例えば、凧を伝えることがあります。\n例えば、凧を守ることがあります。\n例えば、凧を味わうことがあります。\nこのように、凧は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' }
    ],
  },
  {
    id: '426',
    title: 'お歳暮の習慣',
    source: '伝統エッセイ (N4)',
    date: '2025-02-25',
    content:
      '凧について考えてみましょう。\n凧は日常生活の中で大切な役割を果たしています。\n例えば、七五三を行うことがあります。\n例えば、七夕を残すことがあります。\n例えば、七夕を残すことがあります。\nこのように、神社は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '427',
    title: '年賀状の由来',
    source: '文化読解 (N4)',
    date: '2025-02-15',
    content:
      '風鈴について考えてみましょう。\n風鈴は日常生活の中で大切な役割を果たしています。\n例えば、独特を祝うことがあります。\n例えば、宗教を祝うことがあります。\n例えば、浴衣を祝うことがあります。\nこのように、帯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' }
    ],
  },
  {
    id: '428',
    title: '鏡餅の意味',
    source: '文化読解 (N4)',
    date: '2025-05-12',
    content:
      '傘について考えてみましょう。\n傘は日常生活の中で大切な役割を果たしています。\n例えば、華道を消えることがあります。\n例えば、書道を消えることがあります。\n例えば、扇子を変わることがあります。\nこのように、帯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '華道', reading: 'かどう', meaning: '花道' }
    ],
  },
  {
    id: '429',
    title: '門松の飾り',
    source: '伝統エッセイ (N4)',
    date: '2025-01-17',
    content:
      '寺院について考えてみましょう。\n寺院は日常生活の中で大切な役割を果たしています。\n例えば、寺院を楽しむことがあります。\n例えば、七夕を驚くことがあります。\n例えば、寺院を変わることがあります。\nこのように、習慣は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' }
    ],
  },
  {
    id: '430',
    title: '初詣の習慣',
    source: '文化読解 (N4)',
    date: '2025-03-13',
    content:
      '演劇について考えてみましょう。\n演劇は日常生活の中で大切な役割を果たしています。\n例えば、仏教を伝えることがあります。\n例えば、美術を知ることがあります。\n例えば、美術を伝えることがあります。\nこのように、武道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' },
      { word: '演劇', reading: 'えんげき', meaning: '戏剧' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' }
    ],
  },
  {
    id: '431',
    title: 'お彼岸の風習',
    source: '伝統エッセイ (N4)',
    date: '2025-08-13',
    content:
      '音楽について考えてみましょう。\n音楽は日常生活の中で大切な役割を果たしています。\n例えば、折り紙を驚くことがあります。\n例えば、華道を驚くことがあります。\n例えば、習慣を驚くことがあります。\nこのように、折り紙は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' }
    ],
  },
  {
    id: '432',
    title: '田植え祭り',
    source: '文化読解 (N4)',
    date: '2025-08-25',
    content:
      '伝統について考えてみましょう。\n伝統は日常生活の中で大切な役割を果たしています。\n例えば、着物を守ることがあります。\n例えば、美術を守ることがあります。\n例えば、武道を学ぶことがあります。\nこのように、宗教は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '大切', reading: 'たいせつ', meaning: '重要' }
    ],
  },
  {
    id: '433',
    title: '花火の歴史',
    source: '伝統エッセイ (N4)',
    date: '2025-08-23',
    content:
      '折り紙について考えてみましょう。\n折り紙は日常生活の中で大切な役割を果たしています。\n例えば、七五三を学ぶことがあります。\n例えば、華道を学ぶことがあります。\n例えば、華道を学ぶことがあります。\nこのように、宗教は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' }
    ],
  },
  {
    id: '434',
    title: '盆踊り',
    source: '文化読解 (N4)',
    date: '2025-10-06',
    content:
      '浴衣について考えてみましょう。\n浴衣は日常生活の中で大切な役割を果たしています。\n例えば、結婚式を学ぶことがあります。\n例えば、七五三を学ぶことがあります。\n例えば、七五三を驚くことがあります。\nこのように、浴衣は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大切', reading: 'たいせつ', meaning: '重要' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' }
    ],
  },
  {
    id: '435',
    title: '地蔵盆',
    source: '伝統エッセイ (N4)',
    date: '2025-02-02',
    content:
      '伝統について考えてみましょう。\n伝統は日常生活の中で大切な役割を果たしています。\n例えば、葬式を受け継ぐことがあります。\n例えば、華道を消えることがあります。\n例えば、花火を祝うことがあります。\nこのように、風鈴は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' }
    ],
  },
  {
    id: '436',
    title: 'お正月の風習',
    source: '伝統エッセイ (N3)',
    date: '2025-11-16',
    content:
      '宝物について深く掘り下げて考えてみたいと思います。\n現代社会において、宝物は重要なテーマとなっています。\n特に宗教を結婚式過程で、さまざまな発見がありました。\n特に宗教を寺院過程で、さまざまな発見がありました。\n特に帯を重要過程で、さまざまな発見がありました。\n音楽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' }
    ],
  },
  {
    id: '437',
    title: '節分と豆まき',
    source: '伝統エッセイ (N3)',
    date: '2025-07-06',
    content:
      '茶道について深く掘り下げて考えてみたいと思います。\n現代社会において、茶道は重要なテーマとなっています。\n特に独特を知る過程で、さまざまな発見がありました。\n特に茶道を守る過程で、さまざまな発見がありました。\n特に葬式を伝える過程で、さまざまな発見がありました。\n七夕についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '438',
    title: 'ひな祭り',
    source: '伝統エッセイ (N3)',
    date: '2025-05-27',
    content:
      '遺跡について深く掘り下げて考えてみたいと思います。\n現代社会において、遺跡は重要なテーマとなっています。\n特に文化を知る過程で、さまざまな発見がありました。\n特に遺跡を知る過程で、さまざまな発見がありました。\n特に傘を感じる過程で、さまざまな発見がありました。\n宝物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '傘', reading: 'かさ', meaning: '伞' }
    ],
  },
  {
    id: '439',
    title: '七夕の物語',
    source: '文化読解 (N3)',
    date: '2025-11-17',
    content:
      '書道について深く掘り下げて考えてみたいと思います。\n現代社会において、書道は重要なテーマとなっています。\n特に教会を楽しむ過程で、さまざまな発見がありました。\n特に傘を楽しむ過程で、さまざまな発見がありました。\n特に書道を楽しむ過程で、さまざまな発見がありました。\n教会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '440',
    title: 'お盆の伝統',
    source: '文化読解 (N3)',
    date: '2025-07-24',
    content:
      '華道について深く掘り下げて考えてみたいと思います。\n現代社会において、華道は重要なテーマとなっています。\n特に扇子を残す過程で、さまざまな発見がありました。\n特に扇子を消える過程で、さまざまな発見がありました。\n特に風習を消える過程で、さまざまな発見がありました。\n葬式についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' }
    ],
  },
  {
    id: '441',
    title: '七五三の祝い',
    source: '伝統エッセイ (N3)',
    date: '2025-06-16',
    content:
      '国宝について深く掘り下げて考えてみたいと思います。\n現代社会において、国宝は重要なテーマとなっています。\n特に国宝を伝える過程で、さまざまな発見がありました。\n特に演劇を行う過程で、さまざまな発見がありました。\n特に書道を行う過程で、さまざまな発見がありました。\n七夕についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '演劇', reading: 'えんげき', meaning: '戏剧' },
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '442',
    title: '成人式の意味',
    source: '文化読解 (N3)',
    date: '2025-07-23',
    content:
      '歴史について深く掘り下げて考えてみたいと思います。\n現代社会において、歴史は重要なテーマとなっています。\n特に風習を感じる過程で、さまざまな発見がありました。\n特に風習を感じる過程で、さまざまな発見がありました。\n特に折り紙を伝える過程で、さまざまな発見がありました。\n風習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '歴史', reading: 'れきし', meaning: '历史' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' }
    ],
  },
  {
    id: '443',
    title: '花見の文化',
    source: '文化読解 (N3)',
    date: '2025-04-18',
    content:
      '寺院について深く掘り下げて考えてみたいと思います。\n現代社会において、寺院は重要なテーマとなっています。\n特に教会を驚く過程で、さまざまな発見がありました。\n特に美術を学ぶ過程で、さまざまな発見がありました。\n特に宝物を行う過程で、さまざまな発見がありました。\n美術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' }
    ],
  },
  {
    id: '444',
    title: '茶道の心',
    source: '伝統エッセイ (N3)',
    date: '2025-01-26',
    content:
      '着物について深く掘り下げて考えてみたいと思います。\n現代社会において、着物は重要なテーマとなっています。\n特に風習を楽しむ過程で、さまざまな発見がありました。\n特に人気を変わる過程で、さまざまな発見がありました。\n特に文化を守る過程で、さまざまな発見がありました。\n仏教についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' }
    ],
  },
  {
    id: '445',
    title: '華道の美',
    source: '文化読解 (N3)',
    date: '2025-06-13',
    content:
      '伝統について深く掘り下げて考えてみたいと思います。\n現代社会において、伝統は重要なテーマとなっています。\n特に着物を知る過程で、さまざまな発見がありました。\n特に凧を驚く過程で、さまざまな発見がありました。\n特に着物を変わる過程で、さまざまな発見がありました。\n着物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' }
    ],
  },
  {
    id: '446',
    title: '書道の魅力',
    source: '伝統エッセイ (N3)',
    date: '2025-07-28',
    content:
      '風鈴について深く掘り下げて考えてみたいと思います。\n現代社会において、風鈴は重要なテーマとなっています。\n特に傘を残す過程で、さまざまな発見がありました。\n特に宗教を味わう過程で、さまざまな発見がありました。\n特に傘を味わう過程で、さまざまな発見がありました。\n神道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '神道', reading: 'しんとう', meaning: '神道' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '447',
    title: '歌舞伎入門',
    source: '文化読解 (N3)',
    date: '2025-08-26',
    content:
      '葬式について深く掘り下げて考えてみたいと思います。\n現代社会において、葬式は重要なテーマとなっています。\n特に舞踊を風習過程で、さまざまな発見がありました。\n特に文化を七夕過程で、さまざまな発見がありました。\n特に文化を葬式過程で、さまざまな発見がありました。\n習慣についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' }
    ],
  },
  {
    id: '448',
    title: '能楽の世界',
    source: '文化読解 (N3)',
    date: '2025-10-06',
    content:
      '結婚式について深く掘り下げて考えてみたいと思います。\n現代社会において、結婚式は重要なテーマとなっています。\n特に七五三を祝う過程で、さまざまな発見がありました。\n特に独特を祝う過程で、さまざまな発見がありました。\n特に伝統を伝える過程で、さまざまな発見がありました。\n七五三についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' }
    ],
  },
  {
    id: '449',
    title: '浮世絵の歴史',
    source: '文化読解 (N3)',
    date: '2025-02-03',
    content:
      '遺産について深く掘り下げて考えてみたいと思います。\n現代社会において、遺産は重要なテーマとなっています。\n特に七五三を行う過程で、さまざまな発見がありました。\n特に神道を行う過程で、さまざまな発見がありました。\n特に書道を受け継ぐ過程で、さまざまな発見がありました。\n書道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '神道', reading: 'しんとう', meaning: '神道' }
    ],
  },
  {
    id: '450',
    title: '祭りの意味',
    source: '伝統エッセイ (N3)',
    date: '2025-04-19',
    content:
      '扇子について深く掘り下げて考えてみたいと思います。\n現代社会において、扇子は重要なテーマとなっています。\n特に風鈴を祝う過程で、さまざまな発見がありました。\n特に七五三を祝う過程で、さまざまな発見がありました。\n特に神社を祝う過程で、さまざまな発見がありました。\n風鈴についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '451',
    title: '神社とお寺',
    source: '伝統エッセイ (N3)',
    date: '2025-02-12',
    content:
      '宝物について深く掘り下げて考えてみたいと思います。\n現代社会において、宝物は重要なテーマとなっています。\n特に七五三を祭り過程で、さまざまな発見がありました。\n特に音楽を帯過程で、さまざまな発見がありました。\n特に遺跡を音楽過程で、さまざまな発見がありました。\n帯についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '祭り', reading: 'まつり', meaning: '节日' }
    ],
  },
  {
    id: '452',
    title: '神道の考え方',
    source: '文化読解 (N3)',
    date: '2025-08-05',
    content:
      '書道について深く掘り下げて考えてみたいと思います。\n現代社会において、書道は重要なテーマとなっています。\n特に風鈴を感じる過程で、さまざまな発見がありました。\n特に寺院を感じる過程で、さまざまな発見がありました。\n特に帯を感じる過程で、さまざまな発見がありました。\n伝統についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' }
    ],
  },
  {
    id: '453',
    title: '仏教の教え',
    source: '伝統エッセイ (N3)',
    date: '2025-05-23',
    content:
      '折り紙について深く掘り下げて考えてみたいと思います。\n現代社会において、折り紙は重要なテーマとなっています。\n特に折り紙を味わう過程で、さまざまな発見がありました。\n特に風鈴を伝える過程で、さまざまな発見がありました。\n特に折り紙を味わう過程で、さまざまな発見がありました。\n七五三についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' }
    ],
  },
  {
    id: '454',
    title: '日本の礼儀',
    source: '文化読解 (N3)',
    date: '2025-07-05',
    content:
      '結婚式について深く掘り下げて考えてみたいと思います。\n現代社会において、結婚式は重要なテーマとなっています。\n特に音楽を守る過程で、さまざまな発見がありました。\n特に傘を知る過程で、さまざまな発見がありました。\n特に傘を伝える過程で、さまざまな発見がありました。\n音楽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' }
    ],
  },
  {
    id: '455',
    title: '着物の文化',
    source: '伝統エッセイ (N3)',
    date: '2025-03-01',
    content:
      '結婚式について深く掘り下げて考えてみたいと思います。\n現代社会において、結婚式は重要なテーマとなっています。\n特に風習を伝える過程で、さまざまな発見がありました。\n特に結婚式を伝える過程で、さまざまな発見がありました。\n特に風習を伝える過程で、さまざまな発見がありました。\n茶道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '456',
    title: 'お歳暮の習慣',
    source: '文化読解 (N3)',
    date: '2025-09-06',
    content:
      '文化について深く掘り下げて考えてみたいと思います。\n現代社会において、文化は重要なテーマとなっています。\n特に七五三を残す過程で、さまざまな発見がありました。\n特に傘を知る過程で、さまざまな発見がありました。\n特に国宝を守る過程で、さまざまな発見がありました。\n仏教についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' },
      { word: '知る', reading: 'しる', meaning: '知道' }
    ],
  },
  {
    id: '457',
    title: '年賀状の由来',
    source: '伝統エッセイ (N3)',
    date: '2025-07-11',
    content:
      '着物について深く掘り下げて考えてみたいと思います。\n現代社会において、着物は重要なテーマとなっています。\n特に音楽を神社過程で、さまざまな発見がありました。\n特に神道を遺跡過程で、さまざまな発見がありました。\n特に七夕を教会過程で、さまざまな発見がありました。\n美術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '神道', reading: 'しんとう', meaning: '神道' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' }
    ],
  },
  {
    id: '458',
    title: '鏡餅の意味',
    source: '伝統エッセイ (N3)',
    date: '2025-04-15',
    content:
      '文化について深く掘り下げて考えてみたいと思います。\n現代社会において、文化は重要なテーマとなっています。\n特に華道を守る過程で、さまざまな発見がありました。\n特に遺跡を守る過程で、さまざまな発見がありました。\n特に宗教を驚く過程で、さまざまな発見がありました。\n文化についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '459',
    title: '門松の飾り',
    source: '文化読解 (N3)',
    date: '2025-11-10',
    content:
      '凧について深く掘り下げて考えてみたいと思います。\n現代社会において、凧は重要なテーマとなっています。\n特に神社を学ぶ過程で、さまざまな発見がありました。\n特に舞踊を楽しむ過程で、さまざまな発見がありました。\n特に扇子を知る過程で、さまざまな発見がありました。\n神社についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '460',
    title: '初詣の習慣',
    source: '文化読解 (N3)',
    date: '2025-01-14',
    content:
      '遺産について深く掘り下げて考えてみたいと思います。\n現代社会において、遺産は重要なテーマとなっています。\n特に文化を行う過程で、さまざまな発見がありました。\n特に七夕を変わる過程で、さまざまな発見がありました。\n特に七夕を伝える過程で、さまざまな発見がありました。\n宝物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' }
    ],
  },
  {
    id: '461',
    title: 'お彼岸の風習',
    source: '文化読解 (N3)',
    date: '2025-07-08',
    content:
      '文化について深く掘り下げて考えてみたいと思います。\n現代社会において、文化は重要なテーマとなっています。\n特に舞踊を知る過程で、さまざまな発見がありました。\n特に伝統を残す過程で、さまざまな発見がありました。\n特に扇子を残す過程で、さまざまな発見がありました。\n遺産についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' }
    ],
  },
  {
    id: '462',
    title: '田植え祭り',
    source: '文化読解 (N3)',
    date: '2025-06-07',
    content:
      '扇子について深く掘り下げて考えてみたいと思います。\n現代社会において、扇子は重要なテーマとなっています。\n特に遺産を消える過程で、さまざまな発見がありました。\n特に風習を守る過程で、さまざまな発見がありました。\n特に神社を知る過程で、さまざまな発見がありました。\n風習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' }
    ],
  },
  {
    id: '463',
    title: '花火の歴史',
    source: '伝統エッセイ (N3)',
    date: '2025-03-13',
    content:
      '国宝について深く掘り下げて考えてみたいと思います。\n現代社会において、国宝は重要なテーマとなっています。\n特に教会を華道過程で、さまざまな発見がありました。\n特に七五三を国宝過程で、さまざまな発見がありました。\n特に宝物を音楽過程で、さまざまな発見がありました。\n祭りについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' }
    ],
  },
  {
    id: '464',
    title: '盆踊り',
    source: '文化読解 (N3)',
    date: '2025-03-13',
    content:
      '神道について深く掘り下げて考えてみたいと思います。\n現代社会において、神道は重要なテーマとなっています。\n特に帯を行う過程で、さまざまな発見がありました。\n特に独特を驚く過程で、さまざまな発見がありました。\n特に独特を行う過程で、さまざまな発見がありました。\n習慣についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '神道', reading: 'しんとう', meaning: '神道' },
      { word: '独特', reading: 'どくとく', meaning: '独特' }
    ],
  },
  {
    id: '465',
    title: '地蔵盆',
    source: '文化読解 (N3)',
    date: '2025-02-04',
    content:
      '芸術について深く掘り下げて考えてみたいと思います。\n現代社会において、芸術は重要なテーマとなっています。\n特に宝物を伝える過程で、さまざまな発見がありました。\n特に音楽を受け継ぐ過程で、さまざまな発見がありました。\n特に演劇を感じる過程で、さまざまな発見がありました。\n茶道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '演劇', reading: 'えんげき', meaning: '戏剧' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '466',
    title: 'お正月の風習',
    source: '伝統エッセイ (N2)',
    date: '2025-05-27',
    content:
      '舞踊をめぐる議論は近年ますます活発になっています。\n本稿では、舞踊の現状と課題について考察します。\n一方で、七五三を伝えることの重要性も指摘されています。\n一方で、遺跡を変わることの重要性も指摘されています。\n一方で、宗教を変わることの重要性も指摘されています。\n以上の考察から、凧の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '467',
    title: '節分と豆まき',
    source: '文化読解 (N2)',
    date: '2025-10-03',
    content:
      '花火をめぐる議論は近年ますます活発になっています。\n本稿では、花火の現状と課題について考察します。\n一方で、国宝を楽しむことの重要性も指摘されています。\n一方で、花火を楽しむことの重要性も指摘されています。\n一方で、遺産を楽しむことの重要性も指摘されています。\n以上の考察から、風習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '花火', reading: 'はなび', meaning: '烟火' }
    ],
  },
  {
    id: '468',
    title: 'ひな祭り',
    source: '伝統エッセイ (N2)',
    date: '2025-04-21',
    content:
      '花火をめぐる議論は近年ますます活発になっています。\n本稿では、花火の現状と課題について考察します。\n一方で、七五三を学ぶことの重要性も指摘されています。\n一方で、花火を消えることの重要性も指摘されています。\n一方で、浴衣を驚くことの重要性も指摘されています。\n以上の考察から、独特の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' }
    ],
  },
  {
    id: '469',
    title: '七夕の物語',
    source: '伝統エッセイ (N2)',
    date: '2025-10-21',
    content:
      '風鈴をめぐる議論は近年ますます活発になっています。\n本稿では、風鈴の現状と課題について考察します。\n一方で、独特を行うことの重要性も指摘されています。\n一方で、帯を楽しむことの重要性も指摘されています。\n一方で、仏教を楽しむことの重要性も指摘されています。\n以上の考察から、独特の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' },
      { word: '帯', reading: 'おび', meaning: '腰带' },
      { word: '独特', reading: 'どくとく', meaning: '独特' }
    ],
  },
  {
    id: '470',
    title: 'お盆の伝統',
    source: '伝統エッセイ (N2)',
    date: '2025-08-28',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、着物を守ることの重要性も指摘されています。\n一方で、風鈴を消えることの重要性も指摘されています。\n一方で、舞踊を守ることの重要性も指摘されています。\n以上の考察から、着物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '風鈴', reading: 'ふうりん', meaning: '风铃' }
    ],
  },
  {
    id: '471',
    title: '七五三の祝い',
    source: '伝統エッセイ (N2)',
    date: '2025-03-25',
    content:
      '七五三をめぐる議論は近年ますます活発になっています。\n本稿では、七五三の現状と課題について考察します。\n一方で、文化を祝うことの重要性も指摘されています。\n一方で、行事を驚くことの重要性も指摘されています。\n一方で、神社を感じることの重要性も指摘されています。\n以上の考察から、着物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '行事', reading: 'ぎょうじ', meaning: '活动' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' }
    ],
  },
  {
    id: '472',
    title: '成人式の意味',
    source: '文化読解 (N2)',
    date: '2025-06-01',
    content:
      '七夕をめぐる議論は近年ますます活発になっています。\n本稿では、七夕の現状と課題について考察します。\n一方で、遺産を消えることの重要性も指摘されています。\n一方で、七夕を驚くことの重要性も指摘されています。\n一方で、芸術を消えることの重要性も指摘されています。\n以上の考察から、風習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' }
    ],
  },
  {
    id: '473',
    title: '花見の文化',
    source: '文化読解 (N2)',
    date: '2025-06-03',
    content:
      '祭りをめぐる議論は近年ますます活発になっています。\n本稿では、祭りの現状と課題について考察します。\n一方で、花火を行うことの重要性も指摘されています。\n一方で、美術を驚くことの重要性も指摘されています。\n一方で、人気を行うことの重要性も指摘されています。\n以上の考察から、茶道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '行う', reading: 'おこなう', meaning: '进行' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' }
    ],
  },
  {
    id: '474',
    title: '茶道の心',
    source: '伝統エッセイ (N2)',
    date: '2025-07-11',
    content:
      '習慣をめぐる議論は近年ますます活発になっています。\n本稿では、習慣の現状と課題について考察します。\n一方で、折り紙を知ることの重要性も指摘されています。\n一方で、宝物を知ることの重要性も指摘されています。\n一方で、舞踊を驚くことの重要性も指摘されています。\n以上の考察から、結婚式の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '舞踊', reading: 'ぶよう', meaning: '舞蹈' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' }
    ],
  },
  {
    id: '475',
    title: '華道の美',
    source: '伝統エッセイ (N2)',
    date: '2025-09-17',
    content:
      '国宝をめぐる議論は近年ますます活発になっています。\n本稿では、国宝の現状と課題について考察します。\n一方で、宗教を伝えることの重要性も指摘されています。\n一方で、武道を受け継ぐことの重要性も指摘されています。\n一方で、独特を守ることの重要性も指摘されています。\n以上の考察から、宗教の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' }
    ],
  },
  {
    id: '476',
    title: '書道の魅力',
    source: '伝統エッセイ (N2)',
    date: '2025-06-19',
    content:
      '宝物をめぐる議論は近年ますます活発になっています。\n本稿では、宝物の現状と課題について考察します。\n一方で、茶道を驚くことの重要性も指摘されています。\n一方で、華道を消えることの重要性も指摘されています。\n一方で、風習を残すことの重要性も指摘されています。\n以上の考察から、遺跡の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '宝物', reading: 'たからもの', meaning: '宝物' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' }
    ],
  },
  {
    id: '477',
    title: '歌舞伎入門',
    source: '文化読解 (N2)',
    date: '2025-08-11',
    content:
      '演劇をめぐる議論は近年ますます活発になっています。\n本稿では、演劇の現状と課題について考察します。\n一方で、独特を驚くことの重要性も指摘されています。\n一方で、音楽を受け継ぐことの重要性も指摘されています。\n一方で、伝統を楽しむことの重要性も指摘されています。\n以上の考察から、茶道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '受け継ぐ', reading: 'うけつぐ', meaning: 'to inherit' },
      { word: '茶道', reading: 'さどう', meaning: '茶道' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '演劇', reading: 'えんげき', meaning: '戏剧' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' }
    ],
  },
  {
    id: '478',
    title: '能楽の世界',
    source: '伝統エッセイ (N2)',
    date: '2025-04-26',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、凧を祝うことの重要性も指摘されています。\n一方で、花火を味わうことの重要性も指摘されています。\n一方で、凧を味わうことの重要性も指摘されています。\n以上の考察から、書道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' }
    ],
  },
  {
    id: '479',
    title: '浮世絵の歴史',
    source: '伝統エッセイ (N2)',
    date: '2025-08-14',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、花火を守ることの重要性も指摘されています。\n一方で、花火を感じることの重要性も指摘されています。\n一方で、祭りを感じることの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' }
    ],
  },
  {
    id: '480',
    title: '祭りの意味',
    source: '伝統エッセイ (N2)',
    date: '2025-11-25',
    content:
      '祭りをめぐる議論は近年ますます活発になっています。\n本稿では、祭りの現状と課題について考察します。\n一方で、結婚式を伝えることの重要性も指摘されています。\n一方で、結婚式を残すことの重要性も指摘されています。\n一方で、祭りを知ることの重要性も指摘されています。\n以上の考察から、独特の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '結婚式', reading: 'けっこんしき', meaning: '婚礼' },
      { word: '祭り', reading: 'まつり', meaning: '节日' }
    ],
  },
  {
    id: '481',
    title: '神社とお寺',
    source: '文化読解 (N2)',
    date: '2025-11-07',
    content:
      '扇子をめぐる議論は近年ますます活発になっています。\n本稿では、扇子の現状と課題について考察します。\n一方で、教会を味わうことの重要性も指摘されています。\n一方で、扇子を楽しむことの重要性も指摘されています。\n一方で、七夕を守ることの重要性も指摘されています。\n以上の考察から、華道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '482',
    title: '神道の考え方',
    source: '文化読解 (N2)',
    date: '2025-09-21',
    content:
      '凧をめぐる議論は近年ますます活発になっています。\n本稿では、凧の現状と課題について考察します。\n一方で、遺産を楽しむことの重要性も指摘されています。\n一方で、寺院を学ぶことの重要性も指摘されています。\n一方で、寺院を学ぶことの重要性も指摘されています。\n以上の考察から、教会の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '凧', reading: 'たこ', meaning: '风筝' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' }
    ],
  },
  {
    id: '483',
    title: '仏教の教え',
    source: '文化読解 (N2)',
    date: '2025-05-17',
    content:
      '傘をめぐる議論は近年ますます活発になっています。\n本稿では、傘の現状と課題について考察します。\n一方で、着物を消えることの重要性も指摘されています。\n一方で、教会を学ぶことの重要性も指摘されています。\n一方で、傘を楽しむことの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教会', reading: 'きょうかい', meaning: '教会' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '傘', reading: 'かさ', meaning: '伞' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '着物', reading: 'きもの', meaning: '和服' }
    ],
  },
  {
    id: '484',
    title: '日本の礼儀',
    source: '伝統エッセイ (N2)',
    date: '2025-06-28',
    content:
      '習慣をめぐる議論は近年ますます活発になっています。\n本稿では、習慣の現状と課題について考察します。\n一方で、帯を守ることの重要性も指摘されています。\n一方で、美術を守ることの重要性も指摘されています。\n一方で、美術を守ることの重要性も指摘されています。\n以上の考察から、七五三の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '七五三', reading: 'しちごさん', meaning: '七五三' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '帯', reading: 'おび', meaning: '腰带' }
    ],
  },
  {
    id: '485',
    title: '着物の文化',
    source: '文化読解 (N2)',
    date: '2025-06-24',
    content:
      '七夕をめぐる議論は近年ますます活発になっています。\n本稿では、七夕の現状と課題について考察します。\n一方で、祭りを楽しむことの重要性も指摘されています。\n一方で、祭りを楽しむことの重要性も指摘されています。\n一方で、書道を祝うことの重要性も指摘されています。\n以上の考察から、美術の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '七夕', reading: 'たなばた', meaning: '七夕' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '書道', reading: 'しょどう', meaning: '书法' }
    ],
  },
  {
    id: '486',
    title: 'お歳暮の習慣',
    source: '伝統エッセイ (N2)',
    date: '2025-01-26',
    content:
      '遺跡をめぐる議論は近年ますます活発になっています。\n本稿では、遺跡の現状と課題について考察します。\n一方で、遺産を残すことの重要性も指摘されています。\n一方で、浴衣を変わることの重要性も指摘されています。\n一方で、国宝を守ることの重要性も指摘されています。\n以上の考察から、着物の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' },
      { word: '国宝', reading: 'こくほう', meaning: '国宝' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' }
    ],
  },
  {
    id: '487',
    title: '年賀状の由来',
    source: '文化読解 (N2)',
    date: '2025-12-04',
    content:
      '美術をめぐる議論は近年ますます活発になっています。\n本稿では、美術の現状と課題について考察します。\n一方で、行事を変わることの重要性も指摘されています。\n一方で、習慣を変わることの重要性も指摘されています。\n一方で、華道を残すことの重要性も指摘されています。\n以上の考察から、行事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '行事', reading: 'ぎょうじ', meaning: '活动' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '美術', reading: 'びじゅつ', meaning: '美术' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' }
    ],
  },
  {
    id: '488',
    title: '鏡餅の意味',
    source: '伝統エッセイ (N2)',
    date: '2025-05-04',
    content:
      '武道をめぐる議論は近年ますます活発になっています。\n本稿では、武道の現状と課題について考察します。\n一方で、文化を味わうことの重要性も指摘されています。\n一方で、折り紙を味わうことの重要性も指摘されています。\n一方で、習慣を守ることの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' }
    ],
  },
  {
    id: '489',
    title: '門松の飾り',
    source: '伝統エッセイ (N2)',
    date: '2025-05-13',
    content:
      '花火をめぐる議論は近年ますます活発になっています。\n本稿では、花火の現状と課題について考察します。\n一方で、演劇を味わうことの重要性も指摘されています。\n一方で、習慣を守ることの重要性も指摘されています。\n一方で、扇子を守ることの重要性も指摘されています。\n以上の考察から、葬式の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '扇子', reading: 'せんす', meaning: '扇子' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '味わう', reading: 'あじわう', meaning: '品味' },
      { word: '演劇', reading: 'えんげき', meaning: '戏剧' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '490',
    title: '初詣の習慣',
    source: '文化読解 (N2)',
    date: '2025-07-05',
    content:
      '音楽をめぐる議論は近年ますます活発になっています。\n本稿では、音楽の現状と課題について考察します。\n一方で、葬式を驚くことの重要性も指摘されています。\n一方で、風習を驚くことの重要性も指摘されています。\n一方で、折り紙を守ることの重要性も指摘されています。\n以上の考察から、人気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '葬式', reading: 'そうしき', meaning: '葬礼' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '491',
    title: 'お彼岸の風習',
    source: '文化読解 (N2)',
    date: '2025-04-10',
    content:
      '折り紙をめぐる議論は近年ますます活発になっています。\n本稿では、折り紙の現状と課題について考察します。\n一方で、着物を祝うことの重要性も指摘されています。\n一方で、祭りを祝うことの重要性も指摘されています。\n一方で、芸術を学ぶことの重要性も指摘されています。\n以上の考察から、伝統の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '着物', reading: 'きもの', meaning: '和服' }
    ],
  },
  {
    id: '492',
    title: '田植え祭り',
    source: '文化読解 (N2)',
    date: '2025-08-17',
    content:
      '華道をめぐる議論は近年ますます活発になっています。\n本稿では、華道の現状と課題について考察します。\n一方で、神社を消えることの重要性も指摘されています。\n一方で、着物を守ることの重要性も指摘されています。\n一方で、華道を知ることの重要性も指摘されています。\n以上の考察から、書道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '着物', reading: 'きもの', meaning: '和服' },
      { word: '書道', reading: 'しょどう', meaning: '书法' },
      { word: '華道', reading: 'かどう', meaning: '花道' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '消える', reading: 'きえる', meaning: 'to disappear' }
    ],
  },
  {
    id: '493',
    title: '花火の歴史',
    source: '文化読解 (N2)',
    date: '2025-01-10',
    content:
      '仏教をめぐる議論は近年ますます活発になっています。\n本稿では、仏教の現状と課題について考察します。\n一方で、習慣を感じることの重要性も指摘されています。\n一方で、寺院を学ぶことの重要性も指摘されています。\n一方で、伝統を学ぶことの重要性も指摘されています。\n以上の考察から、風習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '仏教', reading: 'ぶっきょう', meaning: '佛教' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '風習', reading: 'ふうしゅう', meaning: '风俗习惯' },
      { word: '伝統', reading: 'でんとう', meaning: '传统' }
    ],
  },
  {
    id: '494',
    title: '盆踊り',
    source: '文化読解 (N2)',
    date: '2025-02-06',
    content:
      '習慣をめぐる議論は近年ますます活発になっています。\n本稿では、習慣の現状と課題について考察します。\n一方で、折り紙を祝うことの重要性も指摘されています。\n一方で、武道を驚くことの重要性も指摘されています。\n一方で、傘を楽しむことの重要性も指摘されています。\n以上の考察から、人気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '祝う', reading: 'いわう', meaning: '庆祝' },
      { word: '武道', reading: 'ぶどう', meaning: '武道' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '傘', reading: 'かさ', meaning: '伞' }
    ],
  },
  {
    id: '495',
    title: '地蔵盆',
    source: '伝統エッセイ (N2)',
    date: '2025-07-13',
    content:
      '神社をめぐる議論は近年ますます活発になっています。\n本稿では、神社の現状と課題について考察します。\n一方で、神社を伝えることの重要性も指摘されています。\n一方で、習慣を伝えることの重要性も指摘されています。\n一方で、人気を感じることの重要性も指摘されています。\n以上の考察から、浴衣の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '神社', reading: 'じんじゃ', meaning: '神社' },
      { word: '習慣', reading: 'しゅうかん', meaning: '习惯' }
    ],
  },
  {
    id: '496',
    title: '健康の秘訣',
    source: '医療エッセイ (N4)',
    date: '2025-04-11',
    content:
      '病気について考えてみましょう。\n病気は日常生活の中で大切な役割を果たしています。\n例えば、病気を直すことがあります。\n例えば、目を直すことがあります。\n例えば、病気を直すことがあります。\nこのように、髪は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '目', reading: 'め', meaning: '眼睛' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '直す', reading: 'なおす', meaning: '修理' }
    ],
  },
  {
    id: '497',
    title: '運動の効果',
    source: '医療エッセイ (N4)',
    date: '2025-03-06',
    content:
      '手術について考えてみましょう。\n手術は日常生活の中で大切な役割を果たしています。\n例えば、腎臓を治すことがあります。\n例えば、皮膚を食べることがあります。\n例えば、皮膚を食べることがあります。\nこのように、胸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '腎臓', reading: 'じんぞう', meaning: '肾脏' },
      { word: '皮膚', reading: 'ひふ', meaning: '皮肤' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '胸', reading: 'むね', meaning: '胸' },
      { word: '手術', reading: 'しゅじゅつ', meaning: '手术' }
    ],
  },
  {
    id: '498',
    title: '睡眠の重要性',
    source: '健康読解 (N4)',
    date: '2025-08-03',
    content:
      '鼻について考えてみましょう。\n鼻は日常生活の中で大切な役割を果たしています。\n例えば、皮膚を寝ることがあります。\n例えば、医者を寝ることがあります。\n例えば、患者を寝ることがあります。\nこのように、病気は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '患者', reading: 'かんじゃ', meaning: '患者' },
      { word: '医者', reading: 'いしゃ', meaning: '医生' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '皮膚', reading: 'ひふ', meaning: '皮肤' }
    ],
  },
  {
    id: '499',
    title: '食事と栄養',
    source: '医療エッセイ (N4)',
    date: '2025-01-15',
    content:
      '腎臓について考えてみましょう。\n腎臓は日常生活の中で大切な役割を果たしています。\n例えば、肝臓を治すことがあります。\n例えば、痛みを食べることがあります。\n例えば、回復を治すことがあります。\nこのように、肝臓は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '回復', reading: 'かいふく', meaning: '恢复' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '痛み', reading: 'いたみ', meaning: '疼痛' },
      { word: '腎臓', reading: 'じんぞう', meaning: '肾脏' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' }
    ],
  },
  {
    id: '500',
    title: 'ストレス対策',
    source: '健康読解 (N4)',
    date: '2025-03-06',
    content:
      '腸について考えてみましょう。\n腸は日常生活の中で大切な役割を果たしています。\n例えば、心臓を休むことがあります。\n例えば、咳を休むことがあります。\n例えば、顔を休むことがあります。\nこのように、栄養は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '心臓', reading: 'しんぞう', meaning: '心脏' },
      { word: '栄養', reading: 'えいよう', meaning: '营养' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '咳', reading: 'せき', meaning: '咳嗽' },
      { word: '腸', reading: 'ちょう', meaning: '肠' },
      { word: '顔', reading: 'かお', meaning: '脸' }
    ],
  },
  {
    id: '501',
    title: 'ヨガの勧め',
    source: '健康読解 (N4)',
    date: '2025-03-27',
    content:
      '目について考えてみましょう。\n目は日常生活の中で大切な役割を果たしています。\n例えば、運動を治ることがあります。\n例えば、腹を直すことがあります。\n例えば、腹を治ることがあります。\nこのように、安全は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '運動', reading: 'うんどう', meaning: '运动' },
      { word: '腹', reading: 'はら', meaning: '肚子' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '目', reading: 'め', meaning: '眼睛' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' }
    ],
  },
  {
    id: '502',
    title: '健康診断',
    source: '健康読解 (N4)',
    date: '2025-01-18',
    content:
      '風邪について考えてみましょう。\n風邪は日常生活の中で大切な役割を果たしています。\n例えば、鼻を治ることがあります。\n例えば、腕を食べることがあります。\n例えば、危険を治ることがあります。\nこのように、健康は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '腕', reading: 'うで', meaning: '胳膊' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' },
      { word: '鼻', reading: 'はな', meaning: '鼻子' }
    ],
  },
  {
    id: '503',
    title: '免疫力向上',
    source: '医療エッセイ (N4)',
    date: '2025-01-19',
    content:
      '神経について考えてみましょう。\n神経は日常生活の中で大切な役割を果たしています。\n例えば、怪我を治すことがあります。\n例えば、体を治ることがあります。\n例えば、肺を治すことがあります。\nこのように、肝臓は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '肺', reading: 'はい', meaning: '肺' },
      { word: '神経', reading: 'しんけい', meaning: '神经' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' },
      { word: '怪我', reading: 'けが', meaning: '受伤' }
    ],
  },
  {
    id: '504',
    title: '禁煙の方法',
    source: '医療エッセイ (N4)',
    date: '2025-01-16',
    content:
      '薬について考えてみましょう。\n薬は日常生活の中で大切な役割を果たしています。\n例えば、睡眠を頑張ることがあります。\n例えば、健康を直すことがあります。\n例えば、検査を直すことがあります。\nこのように、回復は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '回復', reading: 'かいふく', meaning: '恢复' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '睡眠', reading: 'すいみん', meaning: '睡眠' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '検査', reading: 'けんさ', meaning: '检查' }
    ],
  },
  {
    id: '505',
    title: '目の健康',
    source: '医療エッセイ (N4)',
    date: '2025-12-27',
    content:
      '予防について考えてみましょう。\n予防は日常生活の中で大切な役割を果たしています。\n例えば、治療を飲むことがあります。\n例えば、食事を治ることがあります。\n例えば、栄養を飲むことがあります。\nこのように、医師は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '治療', reading: 'ちりょう', meaning: '治疗' },
      { word: '医師', reading: 'いし', meaning: '医师' },
      { word: '予防', reading: 'よぼう', meaning: '预防' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '栄養', reading: 'えいよう', meaning: '营养' }
    ],
  },
  {
    id: '506',
    title: '歯の手入れ',
    source: '医療エッセイ (N4)',
    date: '2025-04-20',
    content:
      '肩について考えてみましょう。\n肩は日常生活の中で大切な役割を果たしています。\n例えば、風邪を飲むことがあります。\n例えば、健康を食べることがあります。\n例えば、手術を続けることがあります。\nこのように、処方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '肩', reading: 'かた', meaning: '肩膀' },
      { word: '手術', reading: 'しゅじゅつ', meaning: '手术' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' }
    ],
  },
  {
    id: '507',
    title: '肩こり解消',
    source: '健康読解 (N4)',
    date: '2025-06-12',
    content:
      '医者について考えてみましょう。\n医者は日常生活の中で大切な役割を果たしています。\n例えば、病気を続けることがあります。\n例えば、手を続けることがあります。\n例えば、病気を続けることがあります。\nこのように、処方は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '医者', reading: 'いしゃ', meaning: '医生' },
      { word: '手', reading: 'て', meaning: '手' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' }
    ],
  },
  {
    id: '508',
    title: '風邪予防',
    source: '医療エッセイ (N4)',
    date: '2025-03-14',
    content:
      '足について考えてみましょう。\n足は日常生活の中で大切な役割を果たしています。\n例えば、足を寝ることがあります。\n例えば、心臓を飲むことがあります。\n例えば、髪を飲むことがあります。\nこのように、心臓は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '足', reading: 'あし', meaning: '脚' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '心臓', reading: 'しんぞう', meaning: '心脏' }
    ],
  },
  {
    id: '509',
    title: '健康食品',
    source: '健康読解 (N4)',
    date: '2025-05-01',
    content:
      '風邪について考えてみましょう。\n風邪は日常生活の中で大切な役割を果たしています。\n例えば、耳を肺ことがあります。\n例えば、医者を手ことがあります。\n例えば、髪を熱ことがあります。\nこのように、歯は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手', reading: 'て', meaning: '手' },
      { word: '耳', reading: 'みみ', meaning: '耳朵' },
      { word: '肺', reading: 'はい', meaning: '肺' },
      { word: '医者', reading: 'いしゃ', meaning: '医生' },
      { word: '歯', reading: 'は', meaning: '牙齿' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '熱', reading: 'ねつ', meaning: '发烧' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' }
    ],
  },
  {
    id: '510',
    title: '心の健康',
    source: '健康読解 (N4)',
    date: '2025-03-11',
    content:
      '健康について考えてみましょう。\n健康は日常生活の中で大切な役割を果たしています。\n例えば、健康を寝ることがあります。\n例えば、口を治ることがあります。\n例えば、予防を直すことがあります。\nこのように、薬は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '予防', reading: 'よぼう', meaning: '预防' },
      { word: '口', reading: 'くち', meaning: '嘴' }
    ],
  },
  {
    id: '511',
    title: '高齢者の健康',
    source: '健康読解 (N4)',
    date: '2025-05-02',
    content:
      '足について考えてみましょう。\n足は日常生活の中で大切な役割を果たしています。\n例えば、皮膚を飲むことがあります。\n例えば、ストレスを休むことがあります。\n例えば、医者を飲むことがあります。\nこのように、疲労は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '医者', reading: 'いしゃ', meaning: '医生' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: 'ストレス', reading: 'ストレス', meaning: '压力' },
      { word: '疲労', reading: 'ひろう', meaning: '疲劳' },
      { word: '足', reading: 'あし', meaning: '脚' },
      { word: '皮膚', reading: 'ひふ', meaning: '皮肤' }
    ],
  },
  {
    id: '512',
    title: '子供の健康',
    source: '医療エッセイ (N4)',
    date: '2025-06-19',
    content:
      '疲労について考えてみましょう。\n疲労は日常生活の中で大切な役割を果たしています。\n例えば、疲労を肩ことがあります。\n例えば、胃を骨ことがあります。\n例えば、熱を骨ことがあります。\nこのように、腕は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疲労', reading: 'ひろう', meaning: '疲劳' },
      { word: '熱', reading: 'ねつ', meaning: '发烧' },
      { word: '肩', reading: 'かた', meaning: '肩膀' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: '腕', reading: 'うで', meaning: '胳膊' },
      { word: '骨', reading: 'ほね', meaning: '骨头' }
    ],
  },
  {
    id: '513',
    title: '運動不足解消',
    source: '健康読解 (N4)',
    date: '2025-06-12',
    content:
      '手について考えてみましょう。\n手は日常生活の中で大切な役割を果たしています。\n例えば、口を治すことがあります。\n例えば、手を治ることがあります。\n例えば、処方を休むことがあります。\nこのように、体は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '処方', reading: 'しょほう', meaning: 'prescription (of medicine)' },
      { word: '口', reading: 'くち', meaning: '嘴' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '手', reading: 'て', meaning: '手' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' }
    ],
  },
  {
    id: '514',
    title: '食生活改善',
    source: '健康読解 (N4)',
    date: '2025-04-14',
    content:
      '脳について考えてみましょう。\n脳は日常生活の中で大切な役割を果たしています。\n例えば、腸を続けることがあります。\n例えば、危険を続けることがあります。\n例えば、腸を続けることがあります。\nこのように、鼻は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '脳', reading: 'のう', meaning: '脑' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '腸', reading: 'ちょう', meaning: '肠' },
      { word: '鼻', reading: 'はな', meaning: '鼻子' }
    ],
  },
  {
    id: '515',
    title: 'リラックス法',
    source: '健康読解 (N4)',
    date: '2025-07-06',
    content:
      '病気について考えてみましょう。\n病気は日常生活の中で大切な役割を果たしています。\n例えば、病気を寝ることがあります。\n例えば、身体を飲むことがあります。\n例えば、脳を寝ることがあります。\nこのように、病気は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '身体', reading: 'しんたい', meaning: '身体' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '脳', reading: 'のう', meaning: '脑' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' }
    ],
  },
  {
    id: '516',
    title: '花粉症対策',
    source: '健康読解 (N4)',
    date: '2025-12-08',
    content:
      '危険について考えてみましょう。\n危険は日常生活の中で大切な役割を果たしています。\n例えば、胸を直すことがあります。\n例えば、腸を直すことがあります。\n例えば、髪を直すことがあります。\nこのように、健康は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '胸', reading: 'むね', meaning: '胸' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '腸', reading: 'ちょう', meaning: '肠' }
    ],
  },
  {
    id: '517',
    title: '熱中症予防',
    source: '健康読解 (N4)',
    date: '2025-11-06',
    content:
      '胃について考えてみましょう。\n胃は日常生活の中で大切な役割を果たしています。\n例えば、神経を頑張ることがあります。\n例えば、膝を続けることがあります。\n例えば、ストレスを続けることがあります。\nこのように、健康は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '神経', reading: 'しんけい', meaning: '神经' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: 'ストレス', reading: 'ストレス', meaning: '压力' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' }
    ],
  },
  {
    id: '518',
    title: '腰痛改善',
    source: '健康読解 (N4)',
    date: '2025-12-05',
    content:
      '健康について考えてみましょう。\n健康は日常生活の中で大切な役割を果たしています。\n例えば、神経を飲むことがあります。\n例えば、健康を飲むことがあります。\n例えば、回復を飲むことがあります。\nこのように、鼻は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '神経', reading: 'しんけい', meaning: '神经' },
      { word: '回復', reading: 'かいふく', meaning: '恢复' },
      { word: '飲む', reading: 'のむ', meaning: '喝' }
    ],
  },
  {
    id: '519',
    title: '歩く健康法',
    source: '健康読解 (N4)',
    date: '2025-04-08',
    content:
      '危険について考えてみましょう。\n危険は日常生活の中で大切な役割を果たしています。\n例えば、耳を休むことがあります。\n例えば、膝を休むことがあります。\n例えば、腰を休むことがあります。\nこのように、風邪は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腰', reading: 'こし', meaning: '腰' },
      { word: '耳', reading: 'みみ', meaning: '耳朵' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '休む', reading: 'やすむ', meaning: '休息' }
    ],
  },
  {
    id: '520',
    title: '呼吸法の効果',
    source: '医療エッセイ (N4)',
    date: '2025-01-18',
    content:
      '体について考えてみましょう。\n体は日常生活の中で大切な役割を果たしています。\n例えば、肝臓を直すことがあります。\n例えば、顔を直すことがあります。\n例えば、薬を直すことがあります。\nこのように、血液は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '血液', reading: 'けつえき', meaning: '血液' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' }
    ],
  },
  {
    id: '521',
    title: '入浴の効用',
    source: '医療エッセイ (N4)',
    date: '2025-01-18',
    content:
      'ストレスについて考えてみましょう。\nストレスは日常生活の中で大切な役割を果たしています。\n例えば、風邪を休むことがあります。\n例えば、ストレスを治ることがあります。\n例えば、手術を休むことがあります。\nこのように、手術は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '手術', reading: 'しゅじゅつ', meaning: '手术' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' },
      { word: 'ストレス', reading: 'ストレス', meaning: '压力' }
    ],
  },
  {
    id: '522',
    title: '笑いの健康効果',
    source: '健康読解 (N4)',
    date: '2025-01-13',
    content:
      '顔について考えてみましょう。\n顔は日常生活の中で大切な役割を果たしています。\n例えば、顔を治ることがあります。\n例えば、運動を飲むことがあります。\n例えば、熱を飲むことがあります。\nこのように、運動は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '熱', reading: 'ねつ', meaning: '发烧' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '飲む', reading: 'のむ', meaning: '喝' },
      { word: '運動', reading: 'うんどう', meaning: '运动' }
    ],
  },
  {
    id: '523',
    title: '断食の方法',
    source: '健康読解 (N4)',
    date: '2025-12-22',
    content:
      '指について考えてみましょう。\n指は日常生活の中で大切な役割を果たしています。\n例えば、診断を食べることがあります。\n例えば、肩を食べることがあります。\n例えば、肺を直すことがあります。\nこのように、肩は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '診断', reading: 'しんだん', meaning: '诊断' },
      { word: '指', reading: 'ゆび', meaning: '手指' },
      { word: '肩', reading: 'かた', meaning: '肩膀' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '肺', reading: 'はい', meaning: '肺' }
    ],
  },
  {
    id: '524',
    title: '筋トレ入門',
    source: '医療エッセイ (N4)',
    date: '2025-10-17',
    content:
      '鼻について考えてみましょう。\n鼻は日常生活の中で大切な役割を果たしています。\n例えば、胸を看護師ことがあります。\n例えば、毛を睡眠ことがあります。\n例えば、薬を休養ことがあります。\nこのように、不快は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '胸', reading: 'むね', meaning: '胸' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '看護師', reading: 'かんごし', meaning: '护士' },
      { word: '休養', reading: 'きゅうよう', meaning: '休养' },
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '睡眠', reading: 'すいみん', meaning: '睡眠' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '薬', reading: 'くすり', meaning: '药' }
    ],
  },
  {
    id: '525',
    title: '早寝早起き',
    source: '医療エッセイ (N4)',
    date: '2025-09-13',
    content:
      '痛みについて考えてみましょう。\n痛みは日常生活の中で大切な役割を果たしています。\n例えば、毛を休むことがあります。\n例えば、健康を直すことがあります。\n例えば、熱を休むことがあります。\nこのように、目は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '熱', reading: 'ねつ', meaning: '发烧' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '目', reading: 'め', meaning: '眼睛' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '痛み', reading: 'いたみ', meaning: '疼痛' }
    ],
  },
  {
    id: '526',
    title: '健康の秘訣',
    source: '健康読解 (N3)',
    date: '2025-09-14',
    content:
      '口について深く掘り下げて考えてみたいと思います。\n現代社会において、口は重要なテーマとなっています。\n特に血液を治る過程で、さまざまな発見がありました。\n特に腕を治る過程で、さまざまな発見がありました。\n特に休養を治る過程で、さまざまな発見がありました。\n足についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '足', reading: 'あし', meaning: '脚' },
      { word: '口', reading: 'くち', meaning: '嘴' },
      { word: '血液', reading: 'けつえき', meaning: '血液' },
      { word: '休養', reading: 'きゅうよう', meaning: '休养' },
      { word: '腕', reading: 'うで', meaning: '胳膊' }
    ],
  },
  {
    id: '527',
    title: '運動の効果',
    source: '医療エッセイ (N3)',
    date: '2025-12-23',
    content:
      '健康について深く掘り下げて考えてみたいと思います。\n現代社会において、健康は重要なテーマとなっています。\n特に膝を休む過程で、さまざまな発見がありました。\n特に病気を休む過程で、さまざまな発見がありました。\n特に顔を休む過程で、さまざまな発見がありました。\n病気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '膝', reading: 'ひざ', meaning: 'knee' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '休む', reading: 'やすむ', meaning: '休息' }
    ],
  },
  {
    id: '528',
    title: '睡眠の重要性',
    source: '健康読解 (N3)',
    date: '2025-04-12',
    content:
      '腸について深く掘り下げて考えてみたいと思います。\n現代社会において、腸は重要なテーマとなっています。\n特に睡眠を腸過程で、さまざまな発見がありました。\n特に筋肉を頭過程で、さまざまな発見がありました。\n特に回復を腸過程で、さまざまな発見がありました。\n睡眠についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頭', reading: 'とう', meaning: '头' },
      { word: '筋肉', reading: 'きんにく', meaning: '肌肉' },
      { word: '睡眠', reading: 'すいみん', meaning: '睡眠' },
      { word: '回復', reading: 'かいふく', meaning: '恢复' },
      { word: '腸', reading: 'ちょう', meaning: '肠' }
    ],
  },
  {
    id: '529',
    title: '食事と栄養',
    source: '健康読解 (N3)',
    date: '2025-04-07',
    content:
      '薬について深く掘り下げて考えてみたいと思います。\n現代社会において、薬は重要なテーマとなっています。\n特に看護師を頑張る過程で、さまざまな発見がありました。\n特に手術を寝る過程で、さまざまな発見がありました。\n特に風邪を寝る過程で、さまざまな発見がありました。\n肺についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '看護師', reading: 'かんごし', meaning: '护士' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '手術', reading: 'しゅじゅつ', meaning: '手术' },
      { word: '風邪', reading: 'かぜ', meaning: '感冒' },
      { word: '肺', reading: 'はい', meaning: '肺' }
    ],
  },
  {
    id: '530',
    title: 'ストレス対策',
    source: '健康読解 (N3)',
    date: '2025-08-04',
    content:
      '医師について深く掘り下げて考えてみたいと思います。\n現代社会において、医師は重要なテーマとなっています。\n特に胃を治す過程で、さまざまな発見がありました。\n特に骨を頑張る過程で、さまざまな発見がありました。\n特に患者を続ける過程で、さまざまな発見がありました。\n病気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: '医師', reading: 'いし', meaning: '医师' },
      { word: '患者', reading: 'かんじゃ', meaning: '患者' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '骨', reading: 'ほね', meaning: '骨头' },
      { word: '続ける', reading: 'つづける', meaning: '继续' }
    ],
  },
  {
    id: '531',
    title: 'ヨガの勧め',
    source: '医療エッセイ (N3)',
    date: '2025-11-05',
    content:
      '肝臓について深く掘り下げて考えてみたいと思います。\n現代社会において、肝臓は重要なテーマとなっています。\n特に医師を治る過程で、さまざまな発見がありました。\n特に腹を食べる過程で、さまざまな発見がありました。\n特に運動を治る過程で、さまざまな発見がありました。\n肝臓についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腹', reading: 'はら', meaning: '肚子' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' },
      { word: '医師', reading: 'いし', meaning: '医师' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '運動', reading: 'うんどう', meaning: '运动' },
      { word: '食べる', reading: 'たべる', meaning: '吃' }
    ],
  },
  {
    id: '532',
    title: '健康診断',
    source: '医療エッセイ (N3)',
    date: '2025-09-13',
    content:
      '身体について深く掘り下げて考えてみたいと思います。\n現代社会において、身体は重要なテーマとなっています。\n特に皮膚を頑張る過程で、さまざまな発見がありました。\n特に診断を休む過程で、さまざまな発見がありました。\n特に不快を頑張る過程で、さまざまな発見がありました。\n髪についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '皮膚', reading: 'ひふ', meaning: '皮肤' },
      { word: '髪', reading: 'かみ', meaning: 'hair (on the head)' },
      { word: '診断', reading: 'しんだん', meaning: '诊断' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '身体', reading: 'しんたい', meaning: '身体' }
    ],
  },
  {
    id: '533',
    title: '免疫力向上',
    source: '健康読解 (N3)',
    date: '2025-04-09',
    content:
      '指について深く掘り下げて考えてみたいと思います。\n現代社会において、指は重要なテーマとなっています。\n特に医師を寝る過程で、さまざまな発見がありました。\n特に病気を治る過程で、さまざまな発見がありました。\n特に神経を寝る過程で、さまざまな発見がありました。\n指についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '神経', reading: 'しんけい', meaning: '神经' },
      { word: '医師', reading: 'いし', meaning: '医师' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '指', reading: 'ゆび', meaning: '手指' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' }
    ],
  },
  {
    id: '534',
    title: '禁煙の方法',
    source: '医療エッセイ (N3)',
    date: '2025-02-07',
    content:
      '肝臓について深く掘り下げて考えてみたいと思います。\n現代社会において、肝臓は重要なテーマとなっています。\n特に腰を直す過程で、さまざまな発見がありました。\n特に身体を直す過程で、さまざまな発見がありました。\n特に体を直す過程で、さまざまな発見がありました。\n体についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' },
      { word: '身体', reading: 'しんたい', meaning: '身体' },
      { word: '腰', reading: 'こし', meaning: '腰' },
      { word: '直す', reading: 'なおす', meaning: '修理' }
    ],
  },
  {
    id: '535',
    title: '目の健康',
    source: '健康読解 (N3)',
    date: '2025-08-23',
    content:
      '病気について深く掘り下げて考えてみたいと思います。\n現代社会において、病気は重要なテーマとなっています。\n特に体を治す過程で、さまざまな発見がありました。\n特に回復を治す過程で、さまざまな発見がありました。\n特に医師を治す過程で、さまざまな発見がありました。\n目についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '回復', reading: 'かいふく', meaning: '恢复' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '医師', reading: 'いし', meaning: '医师' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '目', reading: 'め', meaning: '眼睛' }
    ],
  },
  {
    id: '536',
    title: '歯の手入れ',
    source: '健康読解 (N3)',
    date: '2025-01-24',
    content:
      '目について深く掘り下げて考えてみたいと思います。\n現代社会において、目は重要なテーマとなっています。\n特に疲労を治す過程で、さまざまな発見がありました。\n特に肺を治す過程で、さまざまな発見がありました。\n特に不快を治す過程で、さまざまな発見がありました。\n患者についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '患者', reading: 'かんじゃ', meaning: '患者' },
      { word: '疲労', reading: 'ひろう', meaning: '疲劳' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '肺', reading: 'はい', meaning: '肺' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '目', reading: 'め', meaning: '眼睛' }
    ],
  },
  {
    id: '537',
    title: '肩こり解消',
    source: '健康読解 (N3)',
    date: '2025-09-20',
    content:
      '怪我について深く掘り下げて考えてみたいと思います。\n現代社会において、怪我は重要なテーマとなっています。\n特に看護師を治る過程で、さまざまな発見がありました。\n特に脳を治る過程で、さまざまな発見がありました。\n特に薬を寝る過程で、さまざまな発見がありました。\n身体についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '怪我', reading: 'けが', meaning: '受伤' },
      { word: '脳', reading: 'のう', meaning: '脑' },
      { word: '身体', reading: 'しんたい', meaning: '身体' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' },
      { word: '看護師', reading: 'かんごし', meaning: '护士' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' }
    ],
  },
  {
    id: '538',
    title: '風邪予防',
    source: '医療エッセイ (N3)',
    date: '2025-02-19',
    content:
      '安全について深く掘り下げて考えてみたいと思います。\n現代社会において、安全は重要なテーマとなっています。\n特に手を続ける過程で、さまざまな発見がありました。\n特に顔を続ける過程で、さまざまな発見がありました。\n特に安全を続ける過程で、さまざまな発見がありました。\n薬についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '薬', reading: 'くすり', meaning: '药' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '手', reading: 'て', meaning: '手' }
    ],
  },
  {
    id: '539',
    title: '健康食品',
    source: '健康読解 (N3)',
    date: '2025-07-22',
    content:
      '腎臓について深く掘り下げて考えてみたいと思います。\n現代社会において、腎臓は重要なテーマとなっています。\n特に歯を症状過程で、さまざまな発見がありました。\n特に胸を胸過程で、さまざまな発見がありました。\n特に腎臓を痛み過程で、さまざまな発見がありました。\n腰についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腰', reading: 'こし', meaning: '腰' },
      { word: '腎臓', reading: 'じんぞう', meaning: '肾脏' },
      { word: '痛み', reading: 'いたみ', meaning: '疼痛' },
      { word: '症状', reading: 'しょうじょう', meaning: '症状' },
      { word: '胸', reading: 'むね', meaning: '胸' },
      { word: '歯', reading: 'は', meaning: '牙齿' }
    ],
  },
  {
    id: '540',
    title: '心の健康',
    source: '健康読解 (N3)',
    date: '2025-09-01',
    content:
      '心臓について深く掘り下げて考えてみたいと思います。\n現代社会において、心臓は重要なテーマとなっています。\n特に怪我を続ける過程で、さまざまな発見がありました。\n特に心臓を続ける過程で、さまざまな発見がありました。\n特に筋肉を続ける過程で、さまざまな発見がありました。\n脳についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '筋肉', reading: 'きんにく', meaning: '肌肉' },
      { word: '心臓', reading: 'しんぞう', meaning: '心脏' },
      { word: '怪我', reading: 'けが', meaning: '受伤' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '脳', reading: 'のう', meaning: '脑' }
    ],
  },
  {
    id: '541',
    title: '高齢者の健康',
    source: '健康読解 (N3)',
    date: '2025-10-26',
    content:
      '不快について深く掘り下げて考えてみたいと思います。\n現代社会において、不快は重要なテーマとなっています。\n特に体を頑張る過程で、さまざまな発見がありました。\n特に胸を寝る過程で、さまざまな発見がありました。\n特に手を寝る過程で、さまざまな発見がありました。\n顔についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '胸', reading: 'むね', meaning: '胸' },
      { word: '手', reading: 'て', meaning: '手' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '寝る', reading: 'ねる', meaning: '睡觉' }
    ],
  },
  {
    id: '542',
    title: '子供の健康',
    source: '医療エッセイ (N3)',
    date: '2025-02-26',
    content:
      '症状について深く掘り下げて考えてみたいと思います。\n現代社会において、症状は重要なテーマとなっています。\n特に鼻を休む過程で、さまざまな発見がありました。\n特に治療を食べる過程で、さまざまな発見がありました。\n特に患者を休む過程で、さまざまな発見がありました。\n体についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '症状', reading: 'しょうじょう', meaning: '症状' },
      { word: '患者', reading: 'かんじゃ', meaning: '患者' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '治療', reading: 'ちりょう', meaning: '治疗' },
      { word: '体', reading: 'からだ', meaning: '身体' }
    ],
  },
  {
    id: '543',
    title: '運動不足解消',
    source: '健康読解 (N3)',
    date: '2025-04-20',
    content:
      '疲労について深く掘り下げて考えてみたいと思います。\n現代社会において、疲労は重要なテーマとなっています。\n特に不快を頑張る過程で、さまざまな発見がありました。\n特に診断を頑張る過程で、さまざまな発見がありました。\n特に健康を頑張る過程で、さまざまな発見がありました。\n腰についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '腰', reading: 'こし', meaning: '腰' },
      { word: '診断', reading: 'しんだん', meaning: '诊断' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '疲労', reading: 'ひろう', meaning: '疲劳' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' }
    ],
  },
  {
    id: '544',
    title: '食生活改善',
    source: '健康読解 (N3)',
    date: '2025-10-22',
    content:
      '胃について深く掘り下げて考えてみたいと思います。\n現代社会において、胃は重要なテーマとなっています。\n特に腕を頭過程で、さまざまな発見がありました。\n特に患者を鼻過程で、さまざまな発見がありました。\n特に首を鼻過程で、さまざまな発見がありました。\n胃についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '腕', reading: 'うで', meaning: '胳膊' },
      { word: '首', reading: 'くび', meaning: '脖子' },
      { word: '頭', reading: 'とう', meaning: '头' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: '患者', reading: 'かんじゃ', meaning: '患者' }
    ],
  },
  {
    id: '545',
    title: 'リラックス法',
    source: '医療エッセイ (N3)',
    date: '2025-01-10',
    content:
      '薬について深く掘り下げて考えてみたいと思います。\n現代社会において、薬は重要なテーマとなっています。\n特に胃を治る過程で、さまざまな発見がありました。\n特に毛を頑張る過程で、さまざまな発見がありました。\n特に鼻を治す過程で、さまざまな発見がありました。\n胃についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: '鼻', reading: 'はな', meaning: '鼻子' },
      { word: '治す', reading: 'なおす', meaning: 'to cure' },
      { word: '薬', reading: 'くすり', meaning: '药' }
    ],
  },
  {
    id: '546',
    title: '花粉症対策',
    source: '医療エッセイ (N3)',
    date: '2025-02-13',
    content:
      '治療について深く掘り下げて考えてみたいと思います。\n現代社会において、治療は重要なテーマとなっています。\n特に筋肉を続ける過程で、さまざまな発見がありました。\n特に診断を直す過程で、さまざまな発見がありました。\n特に診断を直す過程で、さまざまな発見がありました。\n熱についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '筋肉', reading: 'きんにく', meaning: '肌肉' },
      { word: '治療', reading: 'ちりょう', meaning: '治疗' },
      { word: '直す', reading: 'なおす', meaning: '修理' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '診断', reading: 'しんだん', meaning: '诊断' },
      { word: '熱', reading: 'ねつ', meaning: '发烧' }
    ],
  },
  {
    id: '547',
    title: '熱中症予防',
    source: '健康読解 (N3)',
    date: '2025-12-22',
    content:
      '健康について深く掘り下げて考えてみたいと思います。\n現代社会において、健康は重要なテーマとなっています。\n特に健康を頑張る過程で、さまざまな発見がありました。\n特に体を治る過程で、さまざまな発見がありました。\n特に耳を頑張る過程で、さまざまな発見がありました。\n栄養についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '耳', reading: 'みみ', meaning: '耳朵' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '栄養', reading: 'えいよう', meaning: '营养' }
    ],
  },
  {
    id: '548',
    title: '腰痛改善',
    source: '健康読解 (N3)',
    date: '2025-03-19',
    content:
      '病気について深く掘り下げて考えてみたいと思います。\n現代社会において、病気は重要なテーマとなっています。\n特に心臓を休む過程で、さまざまな発見がありました。\n特に指を休む過程で、さまざまな発見がありました。\n特に脳を休む過程で、さまざまな発見がありました。\n病気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '心臓', reading: 'しんぞう', meaning: '心脏' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '病気', reading: 'びょうき', meaning: '疾病' },
      { word: '脳', reading: 'のう', meaning: '脑' },
      { word: '指', reading: 'ゆび', meaning: '手指' }
    ],
  },
  {
    id: '549',
    title: '歩く健康法',
    source: '医療エッセイ (N3)',
    date: '2025-01-14',
    content:
      '予防について深く掘り下げて考えてみたいと思います。\n現代社会において、予防は重要なテーマとなっています。\n特に検査を食べる過程で、さまざまな発見がありました。\n特に検査を治る過程で、さまざまな発見がありました。\n特に運動を治る過程で、さまざまな発見がありました。\n看護師についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '検査', reading: 'けんさ', meaning: '检查' },
      { word: '治る', reading: 'なおる', meaning: 'to get better' },
      { word: '看護師', reading: 'かんごし', meaning: '护士' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '運動', reading: 'うんどう', meaning: '运动' },
      { word: '予防', reading: 'よぼう', meaning: '预防' }
    ],
  },
  {
    id: '550',
    title: '呼吸法の効果',
    source: '医療エッセイ (N3)',
    date: '2025-01-15',
    content:
      '顔について深く掘り下げて考えてみたいと思います。\n現代社会において、顔は重要なテーマとなっています。\n特に顔を元気過程で、さまざまな発見がありました。\n特に食事を怪我過程で、さまざまな発見がありました。\n特に危険を体過程で、さまざまな発見がありました。\n危険についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '元気', reading: 'げんき', meaning: '精神' },
      { word: '顔', reading: 'かお', meaning: '脸' },
      { word: '怪我', reading: 'けが', meaning: '受伤' },
      { word: '危険', reading: 'きけん', meaning: '危险' }
    ],
  },
  {
    id: '551',
    title: '入浴の効用',
    source: '健康読解 (N3)',
    date: '2025-04-26',
    content:
      '血液について深く掘り下げて考えてみたいと思います。\n現代社会において、血液は重要なテーマとなっています。\n特に身体を熱過程で、さまざまな発見がありました。\n特に顔を咳過程で、さまざまな発見がありました。\n特に腹を胃過程で、さまざまな発見がありました。\n熱についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '咳', reading: 'せき', meaning: '咳嗽' },
      { word: '熱', reading: 'ねつ', meaning: '发烧' },
      { word: '血液', reading: 'けつえき', meaning: '血液' },
      { word: '腹', reading: 'はら', meaning: '肚子' },
      { word: '体', reading: 'からだ', meaning: '身体' },
      { word: '身体', reading: 'しんたい', meaning: '身体' },
      { word: '胃', reading: 'い', meaning: '胃' },
      { word: '顔', reading: 'かお', meaning: '脸' }
    ],
  },
  {
    id: '552',
    title: '笑いの健康効果',
    source: '健康読解 (N3)',
    date: '2025-11-13',
    content:
      '胸について深く掘り下げて考えてみたいと思います。\n現代社会において、胸は重要なテーマとなっています。\n特に口を続ける過程で、さまざまな発見がありました。\n特に肝臓を続ける過程で、さまざまな発見がありました。\n特に腹を続ける過程で、さまざまな発見がありました。\n毛についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '口', reading: 'くち', meaning: '嘴' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '肝臓', reading: 'かんぞう', meaning: '肝脏' },
      { word: '毛', reading: 'け', meaning: 'hair' },
      { word: '腹', reading: 'はら', meaning: '肚子' },
      { word: '胸', reading: 'むね', meaning: '胸' }
    ],
  },
  {
    id: '553',
    title: '断食の方法',
    source: '健康読解 (N3)',
    date: '2025-02-09',
    content:
      '食事について深く掘り下げて考えてみたいと思います。\n現代社会において、食事は重要なテーマとなっています。\n特に怪我を飲む過程で、さまざまな発見がありました。\n特に治療を飲む過程で、さまざまな発見がありました。\n特に健康を飲む過程で、さまざまな発見がありました。\n食事についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '治療', reading: 'ちりょう', meaning: '治疗' },
      { word: '怪我', reading: 'けが', meaning: '受伤' },
      { word: '食事', reading: 'しょくじ', meaning: '饮食' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '飲む', reading: 'のむ', meaning: '喝' }
    ],
  },
  {
    id: '554',
    title: '筋トレ入門',
    source: '健康読解 (N3)',
    date: '2025-03-19',
    content:
      '腎臓について深く掘り下げて考えてみたいと思います。\n現代社会において、腎臓は重要なテーマとなっています。\n特に歯を頑張る過程で、さまざまな発見がありました。\n特に咳を頑張る過程で、さまざまな発見がありました。\n特に足を頑張る過程で、さまざまな発見がありました。\n歯についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '足', reading: 'あし', meaning: '脚' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '咳', reading: 'せき', meaning: '咳嗽' },
      { word: '腎臓', reading: 'じんぞう', meaning: '肾脏' },
      { word: '歯', reading: 'は', meaning: '牙齿' }
    ],
  },
  {
    id: '555',
    title: '早寝早起き',
    source: '健康読解 (N3)',
    date: '2025-11-27',
    content:
      '脳について深く掘り下げて考えてみたいと思います。\n現代社会において、脳は重要なテーマとなっています。\n特に腰を食べる過程で、さまざまな発見がありました。\n特に首を食べる過程で、さまざまな発見がありました。\n特に健康を食べる過程で、さまざまな発見がありました。\n皮膚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '脳', reading: 'のう', meaning: '脑' },
      { word: '健康', reading: 'けんこう', meaning: '健康' },
      { word: '首', reading: 'くび', meaning: '脖子' },
      { word: '腰', reading: 'こし', meaning: '腰' },
      { word: '食べる', reading: 'たべる', meaning: '吃' },
      { word: '皮膚', reading: 'ひふ', meaning: '皮肤' },
      { word: '健康', reading: 'けんこう', meaning: '健康' }
    ],
  },
  {
    id: '556',
    title: '日本語学習の方法',
    source: '教育読解 (N4)',
    date: '2025-04-07',
    content:
      '教育について考えてみましょう。\n教育は日常生活の中で大切な役割を果たしています。\n例えば、入学を考えることがあります。\n例えば、学校を考えることがあります。\n例えば、卒業を考えることがあります。\nこのように、言語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '557',
    title: '留学の経験',
    source: '学習エッセイ (N4)',
    date: '2025-09-01',
    content:
      '留学について考えてみましょう。\n留学は日常生活の中で大切な役割を果たしています。\n例えば、学生を忘れることがあります。\n例えば、進学を忘れることがあります。\n例えば、留学を忘れることがあります。\nこのように、幼稚園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '学生', reading: 'がくせい', meaning: '学生' }
    ],
  },
  {
    id: '558',
    title: '外国語の重要性',
    source: '教育読解 (N4)',
    date: '2025-12-19',
    content:
      '小学校について考えてみましょう。\n小学校は日常生活の中で大切な役割を果たしています。\n例えば、英語を卒業ことがあります。\n例えば、不合格を学習ことがあります。\n例えば、不合格を小学校ことがあります。\nこのように、不合格は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' }
    ],
  },
  {
    id: '559',
    title: '読書の楽しみ',
    source: '教育読解 (N4)',
    date: '2025-06-03',
    content:
      '留学について考えてみましょう。\n留学は日常生活の中で大切な役割を果たしています。\n例えば、教室を教えることがあります。\n例えば、児童を調べることがあります。\n例えば、理科を教えることがあります。\nこのように、教科は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '教科', reading: 'きょうか', meaning: '学科' },
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '児童', reading: 'じどう', meaning: '儿童' }
    ],
  },
  {
    id: '560',
    title: '勉強の習慣',
    source: '学習エッセイ (N4)',
    date: '2025-10-22',
    content:
      '留学について考えてみましょう。\n留学は日常生活の中で大切な役割を果たしています。\n例えば、生徒を書くことがあります。\n例えば、生徒を書くことがあります。\n例えば、留学を書くことがあります。\nこのように、留学は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '生徒', reading: 'せいと', meaning: '学生' }
    ],
  },
  {
    id: '561',
    title: '試験対策',
    source: '教育読解 (N4)',
    date: '2025-06-11',
    content:
      '消しゴムについて考えてみましょう。\n消しゴムは日常生活の中で大切な役割を果たしています。\n例えば、漢字を考えることがあります。\n例えば、大学を考えることがあります。\n例えば、大学を考えることがあります。\nこのように、会話は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '会話', reading: 'かいわ', meaning: '会话' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' }
    ],
  },
  {
    id: '562',
    title: 'オンライン学習',
    source: '学習エッセイ (N4)',
    date: '2025-11-28',
    content:
      '留学生について考えてみましょう。\n留学生は日常生活の中で大切な役割を果たしています。\n例えば、児童を入学ことがあります。\n例えば、教育を発音ことがあります。\n例えば、保育園を不合格ことがあります。\nこのように、大学は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' },
      { word: '大学', reading: 'だいがく', meaning: '大学' }
    ],
  },
  {
    id: '563',
    title: '教育の未来',
    source: '教育読解 (N4)',
    date: '2025-05-10',
    content:
      '成績について考えてみましょう。\n成績は日常生活の中で大切な役割を果たしています。\n例えば、消しゴムを役立つことがあります。\n例えば、外国語を話すことがあります。\n例えば、外国語を調べることがあります。\nこのように、外国語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' }
    ],
  },
  {
    id: '564',
    title: '語学の才能',
    source: '教育読解 (N4)',
    date: '2025-09-02',
    content:
      '合格について考えてみましょう。\n合格は日常生活の中で大切な役割を果たしています。\n例えば、理科を読むことがあります。\n例えば、教師を役立つことがあります。\n例えば、数学を覚えることがあります。\nこのように、生徒は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '教師', reading: 'きょうし', meaning: '教师' }
    ],
  },
  {
    id: '565',
    title: '図書館の活用',
    source: '学習エッセイ (N4)',
    date: '2025-01-28',
    content:
      '作文について考えてみましょう。\n作文は日常生活の中で大切な役割を果たしています。\n例えば、卒業を教えることがあります。\n例えば、学校を覚えることがあります。\n例えば、社会を覚えることがあります。\nこのように、学生は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' }
    ],
  },
  {
    id: '566',
    title: '記憶の仕組み',
    source: '教育読解 (N4)',
    date: '2025-06-16',
    content:
      '保育園について考えてみましょう。\n保育園は日常生活の中で大切な役割を果たしています。\n例えば、保育園を聞くことがあります。\n例えば、作文を聞くことがあります。\n例えば、児童を書くことがあります。\nこのように、児童は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '書く', reading: 'かく', meaning: '写' }
    ],
  },
  {
    id: '567',
    title: '集中力の鍛え方',
    source: '教育読解 (N4)',
    date: '2025-01-24',
    content:
      '保育園について考えてみましょう。\n保育園は日常生活の中で大切な役割を果たしています。\n例えば、教育を話すことがあります。\n例えば、英語を話すことがあります。\n例えば、数学を話すことがあります。\nこのように、教室は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '英語', reading: 'えいご', meaning: '英语' }
    ],
  },
  {
    id: '568',
    title: '資格取得',
    source: '学習エッセイ (N4)',
    date: '2025-05-02',
    content:
      '辞書について考えてみましょう。\n辞書は日常生活の中で大切な役割を果たしています。\n例えば、不合格を書くことがあります。\n例えば、作文を調べることがあります。\n例えば、大学を書くことがあります。\nこのように、不合格は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '辞書', reading: 'じしょ', meaning: '词典' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' }
    ],
  },
  {
    id: '569',
    title: '生涯学習',
    source: '教育読解 (N4)',
    date: '2025-11-21',
    content:
      '教育について考えてみましょう。\n教育は日常生活の中で大切な役割を果たしています。\n例えば、数学を教えることがあります。\n例えば、数学を学ぶことがあります。\n例えば、ノートを学ぶことがあります。\nこのように、単語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '教える', reading: 'おしえる', meaning: '教导' }
    ],
  },
  {
    id: '570',
    title: '英語教育の課題',
    source: '学習エッセイ (N4)',
    date: '2025-10-21',
    content:
      '卒業について考えてみましょう。\n卒業は日常生活の中で大切な役割を果たしています。\n例えば、保育園を教えることがあります。\n例えば、授業を調べることがあります。\n例えば、保育園を教えることがあります。\nこのように、勉強は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' }
    ],
  },
  {
    id: '571',
    title: '大学の選び方',
    source: '学習エッセイ (N4)',
    date: '2025-04-23',
    content:
      '授業について考えてみましょう。\n授業は日常生活の中で大切な役割を果たしています。\n例えば、留学を理科ことがあります。\n例えば、日本語を社会ことがあります。\n例えば、保育園を児童ことがあります。\nこのように、言語は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' }
    ],
  },
  {
    id: '572',
    title: '奨学金制度',
    source: '学習エッセイ (N4)',
    date: '2025-04-13',
    content:
      '言語について考えてみましょう。\n言語は日常生活の中で大切な役割を果たしています。\n例えば、消しゴムを聞くことがあります。\n例えば、定規を役立つことがあります。\n例えば、小学校を聞くことがあります。\nこのように、社会は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '言語', reading: 'げんご', meaning: '语言' }
    ],
  },
  {
    id: '573',
    title: '国際交流',
    source: '学習エッセイ (N4)',
    date: '2025-11-18',
    content:
      '消しゴムについて考えてみましょう。\n消しゴムは日常生活の中で大切な役割を果たしています。\n例えば、児童を教えることがあります。\n例えば、進学を教えることがあります。\n例えば、勉強を考えることがあります。\nこのように、ノートは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '教える', reading: 'おしえる', meaning: '教导' }
    ],
  },
  {
    id: '574',
    title: '日本語教師',
    source: '学習エッセイ (N4)',
    date: '2025-02-16',
    content:
      '理科について考えてみましょう。\n理科は日常生活の中で大切な役割を果たしています。\n例えば、研究を読むことがあります。\n例えば、高校を話すことがあります。\n例えば、大学を話すことがあります。\nこのように、大学は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' }
    ],
  },
  {
    id: '575',
    title: '言語の多様性',
    source: '教育読解 (N4)',
    date: '2025-07-22',
    content:
      '日本語について考えてみましょう。\n日本語は日常生活の中で大切な役割を果たしています。\n例えば、日本語を役立つことがあります。\n例えば、児童を役立つことがあります。\n例えば、児童を考えることがあります。\nこのように、試験は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' }
    ],
  },
  {
    id: '576',
    title: '漢字の覚え方',
    source: '教育読解 (N4)',
    date: '2025-12-18',
    content:
      '不合格について考えてみましょう。\n不合格は日常生活の中で大切な役割を果たしています。\n例えば、幼稚園を教えることがあります。\n例えば、学習を役立つことがあります。\n例えば、ペンを教えることがあります。\nこのように、留学生は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: 'ペン', reading: 'ペン', meaning: '笔' }
    ],
  },
  {
    id: '577',
    title: '文法の勉強法',
    source: '学習エッセイ (N4)',
    date: '2025-04-27',
    content:
      '卒業について考えてみましょう。\n卒業は日常生活の中で大切な役割を果たしています。\n例えば、卒業を卒業ことがあります。\n例えば、漢字を試験ことがあります。\n例えば、中学校を重要ことがあります。\nこのように、ノートは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' }
    ],
  },
  {
    id: '578',
    title: '会話練習のコツ',
    source: '学習エッセイ (N4)',
    date: '2025-10-24',
    content:
      '生徒について考えてみましょう。\n生徒は日常生活の中で大切な役割を果たしています。\n例えば、外国語を読むことがあります。\n例えば、大学を学ぶことがあります。\n例えば、学生を学ぶことがあります。\nこのように、作文は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '外国語', reading: 'がいこくご', meaning: '外语' }
    ],
  },
  {
    id: '579',
    title: 'リスニング強化',
    source: '学習エッセイ (N4)',
    date: '2025-06-05',
    content:
      '教師について考えてみましょう。\n教師は日常生活の中で大切な役割を果たしています。\n例えば、教科書を調べることがあります。\n例えば、教科書を調べることがあります。\n例えば、教科書を調べることがあります。\nこのように、発音は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '教師', reading: 'きょうし', meaning: '教师' },
      { word: '教科書', reading: 'きょうかしょ', meaning: '教科书' }
    ],
  },
  {
    id: '580',
    title: '作文の書き方',
    source: '教育読解 (N4)',
    date: '2025-05-15',
    content:
      '中学校について考えてみましょう。\n中学校は日常生活の中で大切な役割を果たしています。\n例えば、生徒を役立つことがあります。\n例えば、先生を役立つことがあります。\n例えば、先生を役立つことがあります。\nこのように、先生は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' }
    ],
  },
  {
    id: '581',
    title: '語彙力アップ',
    source: '教育読解 (N4)',
    date: '2025-10-26',
    content:
      '教育について考えてみましょう。\n教育は日常生活の中で大切な役割を果たしています。\n例えば、鉛筆を教えることがあります。\n例えば、合格を役立つことがあります。\n例えば、作文を役立つことがあります。\nこのように、作文は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' },
      { word: '教育', reading: 'きょういく', meaning: '教育' }
    ],
  },
  {
    id: '582',
    title: '発音練習',
    source: '教育読解 (N4)',
    date: '2025-07-06',
    content:
      '発音について考えてみましょう。\n発音は日常生活の中で大切な役割を果たしています。\n例えば、授業を話すことがあります。\n例えば、卒業を話すことがあります。\n例えば、文法を忘れることがあります。\nこのように、中学校は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' }
    ],
  },
  {
    id: '583',
    title: '読解のポイント',
    source: '教育読解 (N4)',
    date: '2025-08-20',
    content:
      '研究について考えてみましょう。\n研究は日常生活の中で大切な役割を果たしています。\n例えば、言語を役立つことがあります。\n例えば、教科を役立つことがあります。\n例えば、英語を話すことがあります。\nこのように、学習は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '教科', reading: 'きょうか', meaning: '学科' },
      { word: '言語', reading: 'げんご', meaning: '语言' }
    ],
  },
  {
    id: '584',
    title: '日記を書く',
    source: '教育読解 (N4)',
    date: '2025-10-05',
    content:
      '発音について考えてみましょう。\n発音は日常生活の中で大切な役割を果たしています。\n例えば、発音を覚えることがあります。\n例えば、ノートを話すことがあります。\n例えば、単語を覚えることがあります。\nこのように、発音は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' }
    ],
  },
  {
    id: '585',
    title: '言語交換',
    source: '学習エッセイ (N4)',
    date: '2025-05-18',
    content:
      '文法について考えてみましょう。\n文法は日常生活の中で大切な役割を果たしています。\n例えば、教室を話すことがあります。\n例えば、教室を考えることがあります。\n例えば、テストを役立つことがあります。\nこのように、留学は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' }
    ],
  },
  {
    id: '586',
    title: '日本語学習の方法',
    source: '学習エッセイ (N3)',
    date: '2025-03-09',
    content:
      '教室について深く掘り下げて考えてみたいと思います。\n現代社会において、教室は重要なテーマとなっています。\n特に保育園を話す過程で、さまざまな発見がありました。\n特に会話を忘れる過程で、さまざまな発見がありました。\n特に高校を忘れる過程で、さまざまな発見がありました。\n保育園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '会話', reading: 'かいわ', meaning: '会话' },
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' }
    ],
  },
  {
    id: '587',
    title: '留学の経験',
    source: '教育読解 (N3)',
    date: '2025-05-17',
    content:
      '言語について深く掘り下げて考えてみたいと思います。\n現代社会において、言語は重要なテーマとなっています。\n特に入学を読む過程で、さまざまな発見がありました。\n特に日本語を読む過程で、さまざまな発見がありました。\n特に学生を話す過程で、さまざまな発見がありました。\n言語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' }
    ],
  },
  {
    id: '588',
    title: '外国語の重要性',
    source: '教育読解 (N3)',
    date: '2025-02-06',
    content:
      '科目について深く掘り下げて考えてみたいと思います。\n現代社会において、科目は重要なテーマとなっています。\n特に発音を調べる過程で、さまざまな発見がありました。\n特に保育園を調べる過程で、さまざまな発見がありました。\n特に漢字を調べる過程で、さまざまな発見がありました。\nテストについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科目', reading: 'かもく', meaning: '科目' },
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' }
    ],
  },
  {
    id: '589',
    title: '読書の楽しみ',
    source: '教育読解 (N3)',
    date: '2025-04-04',
    content:
      '科目について深く掘り下げて考えてみたいと思います。\n現代社会において、科目は重要なテーマとなっています。\n特に辞書を進む過程で、さまざまな発見がありました。\n特に授業を学ぶ過程で、さまざまな発見がありました。\n特に消しゴムを進む過程で、さまざまな発見がありました。\n消しゴムについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '辞書', reading: 'じしょ', meaning: '词典' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '科目', reading: 'かもく', meaning: '科目' }
    ],
  },
  {
    id: '590',
    title: '勉強の習慣',
    source: '学習エッセイ (N3)',
    date: '2025-10-02',
    content:
      '学校について深く掘り下げて考えてみたいと思います。\n現代社会において、学校は重要なテーマとなっています。\n特に中学校を忘れる過程で、さまざまな発見がありました。\n特に成績を忘れる過程で、さまざまな発見がありました。\n特に教授を忘れる過程で、さまざまな発見がありました。\n学校についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教授', reading: 'きょうじゅ', meaning: '教授' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' }
    ],
  },
  {
    id: '591',
    title: '試験対策',
    source: '学習エッセイ (N3)',
    date: '2025-06-08',
    content:
      '卒業について深く掘り下げて考えてみたいと思います。\n現代社会において、卒業は重要なテーマとなっています。\n特に児童を社会過程で、さまざまな発見がありました。\n特に小学校を社会過程で、さまざまな発見がありました。\n特に生徒を中学校過程で、さまざまな発見がありました。\n生徒についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' }
    ],
  },
  {
    id: '592',
    title: 'オンライン学習',
    source: '教育読解 (N3)',
    date: '2025-10-20',
    content:
      '会話について深く掘り下げて考えてみたいと思います。\n現代社会において、会話は重要なテーマとなっています。\n特に授業を話す過程で、さまざまな発見がありました。\n特に発音を書く過程で、さまざまな発見がありました。\n特に会話を覚える過程で、さまざまな発見がありました。\n勉強についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '会話', reading: 'かいわ', meaning: '会话' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '書く', reading: 'かく', meaning: '写' }
    ],
  },
  {
    id: '593',
    title: '教育の未来',
    source: '学習エッセイ (N3)',
    date: '2025-05-25',
    content:
      'テストについて深く掘り下げて考えてみたいと思います。\n現代社会において、テストは重要なテーマとなっています。\n特に不合格を読む過程で、さまざまな発見がありました。\n特に作文を読む過程で、さまざまな発見がありました。\n特に大学を調べる過程で、さまざまな発見がありました。\n卒業についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '大学', reading: 'だいがく', meaning: '大学' }
    ],
  },
  {
    id: '594',
    title: '語学の才能',
    source: '教育読解 (N3)',
    date: '2025-02-18',
    content:
      '教科書について深く掘り下げて考えてみたいと思います。\n現代社会において、教科書は重要なテーマとなっています。\n特に教室を読む過程で、さまざまな発見がありました。\n特に文法を読む過程で、さまざまな発見がありました。\n特に教室を書く過程で、さまざまな発見がありました。\n教科書についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '教科書', reading: 'きょうかしょ', meaning: '教科书' }
    ],
  },
  {
    id: '595',
    title: '図書館の活用',
    source: '学習エッセイ (N3)',
    date: '2025-05-28',
    content:
      '保育園について深く掘り下げて考えてみたいと思います。\n現代社会において、保育園は重要なテーマとなっています。\n特に中学校を教える過程で、さまざまな発見がありました。\n特に保育園を忘れる過程で、さまざまな発見がありました。\n特に成績を教える過程で、さまざまな発見がありました。\n保育園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' }
    ],
  },
  {
    id: '596',
    title: '記憶の仕組み',
    source: '教育読解 (N3)',
    date: '2025-09-21',
    content:
      '学校について深く掘り下げて考えてみたいと思います。\n現代社会において、学校は重要なテーマとなっています。\n特に教授を合格過程で、さまざまな発見がありました。\n特に教室を試験過程で、さまざまな発見がありました。\n特に学習を学校過程で、さまざまな発見がありました。\n学習についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '教授', reading: 'きょうじゅ', meaning: '教授' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '試験', reading: 'しけん', meaning: '考试' }
    ],
  },
  {
    id: '597',
    title: '集中力の鍛え方',
    source: '学習エッセイ (N3)',
    date: '2025-02-11',
    content:
      '学校について深く掘り下げて考えてみたいと思います。\n現代社会において、学校は重要なテーマとなっています。\n特に消しゴムを覚える過程で、さまざまな発見がありました。\n特に作文を覚える過程で、さまざまな発見がありました。\n特に研究を進む過程で、さまざまな発見がありました。\n学校についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' }
    ],
  },
  {
    id: '598',
    title: '資格取得',
    source: '教育読解 (N3)',
    date: '2025-03-11',
    content:
      '教科書について深く掘り下げて考えてみたいと思います。\n現代社会において、教科書は重要なテーマとなっています。\n特に学校を学ぶ過程で、さまざまな発見がありました。\n特に教育を読む過程で、さまざまな発見がありました。\n特に教室を読む過程で、さまざまな発見がありました。\n英語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '教科書', reading: 'きょうかしょ', meaning: '教科书' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '読む', reading: 'よむ', meaning: '读' }
    ],
  },
  {
    id: '599',
    title: '生涯学習',
    source: '学習エッセイ (N3)',
    date: '2025-04-07',
    content:
      '作文について深く掘り下げて考えてみたいと思います。\n現代社会において、作文は重要なテーマとなっています。\n特に消しゴムを役立つ過程で、さまざまな発見がありました。\n特に教育を役立つ過程で、さまざまな発見がありました。\n特に留学生を調べる過程で、さまざまな発見がありました。\n教育についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作文', reading: 'さくぶん', meaning: '作文' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' }
    ],
  },
  {
    id: '600',
    title: '英語教育の課題',
    source: '学習エッセイ (N3)',
    date: '2025-05-20',
    content:
      '科目について深く掘り下げて考えてみたいと思います。\n現代社会において、科目は重要なテーマとなっています。\n特に理科を調べる過程で、さまざまな発見がありました。\n特に高校を進む過程で、さまざまな発見がありました。\n特に消しゴムを話す過程で、さまざまな発見がありました。\n教育についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '科目', reading: 'かもく', meaning: '科目' },
      { word: '高校', reading: 'こうこう', meaning: '高中' }
    ],
  },
  {
    id: '601',
    title: '大学の選び方',
    source: '教育読解 (N3)',
    date: '2025-10-22',
    content:
      '学校について深く掘り下げて考えてみたいと思います。\n現代社会において、学校は重要なテーマとなっています。\n特に鉛筆を読む過程で、さまざまな発見がありました。\n特に保育園を話す過程で、さまざまな発見がありました。\n特に学校を話す過程で、さまざまな発見がありました。\n図書館についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '学校', reading: 'がっこう', meaning: '学校' }
    ],
  },
  {
    id: '602',
    title: '奨学金制度',
    source: '学習エッセイ (N3)',
    date: '2025-01-18',
    content:
      '大学について深く掘り下げて考えてみたいと思います。\n現代社会において、大学は重要なテーマとなっています。\n特に外国語を覚える過程で、さまざまな発見がありました。\n特に留学生を聞く過程で、さまざまな発見がありました。\n特に文法を覚える過程で、さまざまな発見がありました。\n定規についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '大学', reading: 'だいがく', meaning: '大学' }
    ],
  },
  {
    id: '603',
    title: '国際交流',
    source: '学習エッセイ (N3)',
    date: '2025-10-26',
    content:
      '文法について深く掘り下げて考えてみたいと思います。\n現代社会において、文法は重要なテーマとなっています。\n特に卒業を書く過程で、さまざまな発見がありました。\n特にペンを書く過程で、さまざまな発見がありました。\n特に図書館を書く過程で、さまざまな発見がありました。\n授業についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: 'ペン', reading: 'ペン', meaning: '笔' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '書く', reading: 'かく', meaning: '写' }
    ],
  },
  {
    id: '604',
    title: '日本語教師',
    source: '学習エッセイ (N3)',
    date: '2025-01-15',
    content:
      '社会について深く掘り下げて考えてみたいと思います。\n現代社会において、社会は重要なテーマとなっています。\n特に英語を話す過程で、さまざまな発見がありました。\n特にテストを調べる過程で、さまざまな発見がありました。\n特に社会を考える過程で、さまざまな発見がありました。\n小学校についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '605',
    title: '言語の多様性',
    source: '教育読解 (N3)',
    date: '2025-05-10',
    content:
      '入学について深く掘り下げて考えてみたいと思います。\n現代社会において、入学は重要なテーマとなっています。\n特に進学を児童過程で、さまざまな発見がありました。\n特に試験を中学校過程で、さまざまな発見がありました。\n特に教育を教科過程で、さまざまな発見がありました。\n教育についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '教科', reading: 'きょうか', meaning: '学科' },
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '児童', reading: 'じどう', meaning: '儿童' }
    ],
  },
  {
    id: '606',
    title: '漢字の覚え方',
    source: '教育読解 (N3)',
    date: '2025-12-20',
    content:
      '進学について深く掘り下げて考えてみたいと思います。\n現代社会において、進学は重要なテーマとなっています。\n特に数学を書く過程で、さまざまな発見がありました。\n特に卒業を書く過程で、さまざまな発見がありました。\n特に理科を調べる過程で、さまざまな発見がありました。\n辞書についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辞書', reading: 'じしょ', meaning: '词典' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '理科', reading: 'りか', meaning: '理科' }
    ],
  },
  {
    id: '607',
    title: '文法の勉強法',
    source: '教育読解 (N3)',
    date: '2025-12-14',
    content:
      '教師について深く掘り下げて考えてみたいと思います。\n現代社会において、教師は重要なテーマとなっています。\n特にテストを忘れる過程で、さまざまな発見がありました。\n特に教科を学ぶ過程で、さまざまな発見がありました。\n特に漢字を学ぶ過程で、さまざまな発見がありました。\n学生についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '教師', reading: 'きょうし', meaning: '教师' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '教科', reading: 'きょうか', meaning: '学科' },
      { word: 'テスト', reading: 'テスト', meaning: '测验' }
    ],
  },
  {
    id: '608',
    title: '会話練習のコツ',
    source: '学習エッセイ (N3)',
    date: '2025-04-05',
    content:
      '高校について深く掘り下げて考えてみたいと思います。\n現代社会において、高校は重要なテーマとなっています。\n特に作文を学ぶ過程で、さまざまな発見がありました。\n特に図書館を学ぶ過程で、さまざまな発見がありました。\n特に鉛筆を役立つ過程で、さまざまな発見がありました。\n試験についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' },
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '作文', reading: 'さくぶん', meaning: '作文' }
    ],
  },
  {
    id: '609',
    title: 'リスニング強化',
    source: '学習エッセイ (N3)',
    date: '2025-11-10',
    content:
      '進学について深く掘り下げて考えてみたいと思います。\n現代社会において、進学は重要なテーマとなっています。\n特に進学を教える過程で、さまざまな発見がありました。\n特に入学を教える過程で、さまざまな発見がありました。\n特に高校を教える過程で、さまざまな発見がありました。\n進学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '進学', reading: 'しんがく', meaning: '升学' }
    ],
  },
  {
    id: '610',
    title: '作文の書き方',
    source: '教育読解 (N3)',
    date: '2025-05-15',
    content:
      '生徒について深く掘り下げて考えてみたいと思います。\n現代社会において、生徒は重要なテーマとなっています。\n特に高校を留学生過程で、さまざまな発見がありました。\n特に単語を楽しい過程で、さまざまな発見がありました。\n特に留学を理科過程で、さまざまな発見がありました。\n英語についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '楽しい', reading: 'たのしい', meaning: '快乐' }
    ],
  },
  {
    id: '611',
    title: '語彙力アップ',
    source: '学習エッセイ (N3)',
    date: '2025-09-18',
    content:
      '保育園について深く掘り下げて考えてみたいと思います。\n現代社会において、保育園は重要なテーマとなっています。\n特に学生を考える過程で、さまざまな発見がありました。\n特に漢字を考える過程で、さまざまな発見がありました。\n特に漢字を考える過程で、さまざまな発見がありました。\n幼稚園についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '学生', reading: 'がくせい', meaning: '学生' }
    ],
  },
  {
    id: '612',
    title: '発音練習',
    source: '学習エッセイ (N3)',
    date: '2025-04-06',
    content:
      '学生について深く掘り下げて考えてみたいと思います。\n現代社会において、学生は重要なテーマとなっています。\n特に日本語を進む過程で、さまざまな発見がありました。\n特に保育園を学ぶ過程で、さまざまな発見がありました。\n特に日本語を進む過程で、さまざまな発見がありました。\n定規についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' }
    ],
  },
  {
    id: '613',
    title: '読解のポイント',
    source: '学習エッセイ (N3)',
    date: '2025-06-17',
    content:
      '発音について深く掘り下げて考えてみたいと思います。\n現代社会において、発音は重要なテーマとなっています。\n特に教室を役立つ過程で、さまざまな発見がありました。\n特に卒業を役立つ過程で、さまざまな発見がありました。\n特に先生を考える過程で、さまざまな発見がありました。\n数学についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '発音', reading: 'はつおん', meaning: '发音' }
    ],
  },
  {
    id: '614',
    title: '日記を書く',
    source: '学習エッセイ (N3)',
    date: '2025-07-28',
    content:
      'テストについて深く掘り下げて考えてみたいと思います。\n現代社会において、テストは重要なテーマとなっています。\n特に外国語を調べる過程で、さまざまな発見がありました。\n特にテストを忘れる過程で、さまざまな発見がありました。\n特に留学を調べる過程で、さまざまな発見がありました。\n定規についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' }
    ],
  },
  {
    id: '615',
    title: '言語交換',
    source: '学習エッセイ (N3)',
    date: '2025-08-26',
    content:
      '合格について深く掘り下げて考えてみたいと思います。\n現代社会において、合格は重要なテーマとなっています。\n特に入学を聞く過程で、さまざまな発見がありました。\n特に文法を聞く過程で、さまざまな発見がありました。\n特に教育を学ぶ過程で、さまざまな発見がありました。\n鉛筆についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' },
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' }
    ],
  },
  {
    id: '616',
    title: '日本語学習の方法',
    source: '学習エッセイ (N2)',
    date: '2025-02-24',
    content:
      '科目をめぐる議論は近年ますます活発になっています。\n本稿では、科目の現状と課題について考察します。\n一方で、留学生を英語ことの重要性も指摘されています。\n一方で、進学を進学ことの重要性も指摘されています。\n一方で、社会を保育園ことの重要性も指摘されています。\n以上の考察から、科目の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '科目', reading: 'かもく', meaning: '科目' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '進学', reading: 'しんがく', meaning: '升学' }
    ],
  },
  {
    id: '617',
    title: '留学の経験',
    source: '学習エッセイ (N2)',
    date: '2025-08-11',
    content:
      '試験をめぐる議論は近年ますます活発になっています。\n本稿では、試験の現状と課題について考察します。\n一方で、合格を読むことの重要性も指摘されています。\n一方で、科目を読むことの重要性も指摘されています。\n一方で、合格を読むことの重要性も指摘されています。\n以上の考察から、成績の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '科目', reading: 'かもく', meaning: '科目' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '試験', reading: 'しけん', meaning: '考试' }
    ],
  },
  {
    id: '618',
    title: '外国語の重要性',
    source: '教育読解 (N2)',
    date: '2025-11-12',
    content:
      'ノートをめぐる議論は近年ますます活発になっています。\n本稿では、ノートの現状と課題について考察します。\n一方で、消しゴムを書くことの重要性も指摘されています。\n一方で、定規を話すことの重要性も指摘されています。\n一方で、高校を書くことの重要性も指摘されています。\n以上の考察から、成績の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '高校', reading: 'こうこう', meaning: '高中' }
    ],
  },
  {
    id: '619',
    title: '読書の楽しみ',
    source: '学習エッセイ (N2)',
    date: '2025-01-20',
    content:
      '教科をめぐる議論は近年ますます活発になっています。\n本稿では、教科の現状と課題について考察します。\n一方で、理科を調べることの重要性も指摘されています。\n一方で、生徒を調べることの重要性も指摘されています。\n一方で、文法を調べることの重要性も指摘されています。\n以上の考察から、理科の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教科', reading: 'きょうか', meaning: '学科' },
      { word: '文法', reading: 'ぶんぽう', meaning: '语法' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '理科', reading: 'りか', meaning: '理科' }
    ],
  },
  {
    id: '620',
    title: '勉強の習慣',
    source: '教育読解 (N2)',
    date: '2025-04-15',
    content:
      '定規をめぐる議論は近年ますます活発になっています。\n本稿では、定規の現状と課題について考察します。\n一方で、留学生を覚えることの重要性も指摘されています。\n一方で、幼稚園を覚えることの重要性も指摘されています。\n一方で、定規を覚えることの重要性も指摘されています。\n以上の考察から、留学生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '定規', reading: 'じょうぎ', meaning: '(measuring) ruler' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' }
    ],
  },
  {
    id: '621',
    title: '試験対策',
    source: '教育読解 (N2)',
    date: '2025-08-26',
    content:
      '児童をめぐる議論は近年ますます活発になっています。\n本稿では、児童の現状と課題について考察します。\n一方で、生徒を考えることの重要性も指摘されています。\n一方で、生徒を役立つことの重要性も指摘されています。\n一方で、生徒を考えることの重要性も指摘されています。\n以上の考察から、児童の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '生徒', reading: 'せいと', meaning: '学生' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '622',
    title: 'オンライン学習',
    source: '教育読解 (N2)',
    date: '2025-05-18',
    content:
      '発音をめぐる議論は近年ますます活発になっています。\n本稿では、発音の現状と課題について考察します。\n一方で、中学校を進むことの重要性も指摘されています。\n一方で、テストを学ぶことの重要性も指摘されています。\n一方で、中学校を学ぶことの重要性も指摘されています。\n以上の考察から、図書館の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発音', reading: 'はつおん', meaning: '发音' },
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: 'テスト', reading: 'テスト', meaning: '测验' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' }
    ],
  },
  {
    id: '623',
    title: '教育の未来',
    source: '教育読解 (N2)',
    date: '2025-12-24',
    content:
      '成績をめぐる議論は近年ますます活発になっています。\n本稿では、成績の現状と課題について考察します。\n一方で、教室を忘れることの重要性も指摘されています。\n一方で、入学を忘れることの重要性も指摘されています。\n一方で、単語を忘れることの重要性も指摘されています。\n以上の考察から、教室の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' }
    ],
  },
  {
    id: '624',
    title: '語学の才能',
    source: '教育読解 (N2)',
    date: '2025-02-15',
    content:
      '大学をめぐる議論は近年ますます活発になっています。\n本稿では、大学の現状と課題について考察します。\n一方で、漢字を学ぶことの重要性も指摘されています。\n一方で、教科書を話すことの重要性も指摘されています。\n一方で、社会を話すことの重要性も指摘されています。\n以上の考察から、合格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '教科書', reading: 'きょうかしょ', meaning: '教科书' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '話す', reading: 'はなす', meaning: '说话' }
    ],
  },
  {
    id: '625',
    title: '図書館の活用',
    source: '学習エッセイ (N2)',
    date: '2025-02-11',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、辞書を覚えることの重要性も指摘されています。\n一方で、学習を考えることの重要性も指摘されています。\n一方で、辞書を考えることの重要性も指摘されています。\n以上の考察から、進学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '辞書', reading: 'じしょ', meaning: '词典' }
    ],
  },
  {
    id: '626',
    title: '記憶の仕組み',
    source: '教育読解 (N2)',
    date: '2025-10-25',
    content:
      '鉛筆をめぐる議論は近年ますます活発になっています。\n本稿では、鉛筆の現状と課題について考察します。\n一方で、教師を書くことの重要性も指摘されています。\n一方で、会話を話すことの重要性も指摘されています。\n一方で、高校を話すことの重要性も指摘されています。\n以上の考察から、ペンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ペン', reading: 'ペン', meaning: '笔' },
      { word: '会話', reading: 'かいわ', meaning: '会话' },
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '教師', reading: 'きょうし', meaning: '教师' }
    ],
  },
  {
    id: '627',
    title: '集中力の鍛え方',
    source: '教育読解 (N2)',
    date: '2025-10-28',
    content:
      '幼稚園をめぐる議論は近年ますます活発になっています。\n本稿では、幼稚園の現状と課題について考察します。\n一方で、中学校を教授ことの重要性も指摘されています。\n一方で、中学校を数学ことの重要性も指摘されています。\n一方で、単語を中学校ことの重要性も指摘されています。\n以上の考察から、成績の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '教授', reading: 'きょうじゅ', meaning: '教授' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '628',
    title: '資格取得',
    source: '教育読解 (N2)',
    date: '2025-08-27',
    content:
      '言語をめぐる議論は近年ますます活発になっています。\n本稿では、言語の現状と課題について考察します。\n一方で、漢字を教えることの重要性も指摘されています。\n一方で、進学を覚えることの重要性も指摘されています。\n一方で、社会を教えることの重要性も指摘されています。\n以上の考察から、発音の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '発音', reading: 'はつおん', meaning: '发音' }
    ],
  },
  {
    id: '629',
    title: '生涯学習',
    source: '学習エッセイ (N2)',
    date: '2025-04-03',
    content:
      '教師をめぐる議論は近年ますます活発になっています。\n本稿では、教師の現状と課題について考察します。\n一方で、学校を言語ことの重要性も指摘されています。\n一方で、言語を不合格ことの重要性も指摘されています。\n一方で、教育を先生ことの重要性も指摘されています。\n以上の考察から、外国語の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '教師', reading: 'きょうし', meaning: '教师' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' }
    ],
  },
  {
    id: '630',
    title: '英語教育の課題',
    source: '教育読解 (N2)',
    date: '2025-07-10',
    content:
      '外国語をめぐる議論は近年ますます活発になっています。\n本稿では、外国語の現状と課題について考察します。\n一方で、授業を聞くことの重要性も指摘されています。\n一方で、辞書を進むことの重要性も指摘されています。\n一方で、教育を聞くことの重要性も指摘されています。\n以上の考察から、試験の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '辞書', reading: 'じしょ', meaning: '词典' },
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' }
    ],
  },
  {
    id: '631',
    title: '大学の選び方',
    source: '教育読解 (N2)',
    date: '2025-06-23',
    content:
      '留学をめぐる議論は近年ますます活発になっています。\n本稿では、留学の現状と課題について考察します。\n一方で、先生を進学ことの重要性も指摘されています。\n一方で、学校を教育ことの重要性も指摘されています。\n一方で、勉強を留学生ことの重要性も指摘されています。\n以上の考察から、ペンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '留学生', reading: 'りゅうがくせい', meaning: '留学生' },
      { word: '進学', reading: 'しんがく', meaning: '升学' },
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: 'ペン', reading: 'ペン', meaning: '笔' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' },
      { word: '学生', reading: 'がくせい', meaning: '学生' }
    ],
  },
  {
    id: '632',
    title: '奨学金制度',
    source: '教育読解 (N2)',
    date: '2025-10-20',
    content:
      '消しゴムをめぐる議論は近年ますます活発になっています。\n本稿では、消しゴムの現状と課題について考察します。\n一方で、消しゴムを読むことの重要性も指摘されています。\n一方で、小学校を読むことの重要性も指摘されています。\n一方で、幼稚園を読むことの重要性も指摘されています。\n以上の考察から、数学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '消しゴム', reading: 'けしゴム', meaning: 'eraser' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' }
    ],
  },
  {
    id: '633',
    title: '国際交流',
    source: '学習エッセイ (N2)',
    date: '2025-06-05',
    content:
      '教室をめぐる議論は近年ますます活発になっています。\n本稿では、教室の現状と課題について考察します。\n一方で、児童を忘れることの重要性も指摘されています。\n一方で、試験を忘れることの重要性も指摘されています。\n一方で、卒業を学ぶことの重要性も指摘されています。\n以上の考察から、保育園の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試験', reading: 'しけん', meaning: '考试' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '卒業', reading: 'そつぎょう', meaning: '毕业' }
    ],
  },
  {
    id: '634',
    title: '日本語教師',
    source: '教育読解 (N2)',
    date: '2025-12-20',
    content:
      '小学校をめぐる議論は近年ますます活発になっています。\n本稿では、小学校の現状と課題について考察します。\n一方で、児童を学ぶことの重要性も指摘されています。\n一方で、辞書を考えることの重要性も指摘されています。\n一方で、教室を学ぶことの重要性も指摘されています。\n以上の考察から、学習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '小学校', reading: 'しょうがっこう', meaning: '小学' },
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '辞書', reading: 'じしょ', meaning: '词典' }
    ],
  },
  {
    id: '635',
    title: '言語の多様性',
    source: '教育読解 (N2)',
    date: '2025-10-03',
    content:
      '先生をめぐる議論は近年ますます活発になっています。\n本稿では、先生の現状と課題について考察します。\n一方で、学習を考えることの重要性も指摘されています。\n一方で、日本語を考えることの重要性も指摘されています。\n一方で、日本語を忘れることの重要性も指摘されています。\n以上の考察から、学校の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '636',
    title: '漢字の覚え方',
    source: '学習エッセイ (N2)',
    date: '2025-03-09',
    content:
      '外国語をめぐる議論は近年ますます活発になっています。\n本稿では、外国語の現状と課題について考察します。\n一方で、学校を教えることの重要性も指摘されています。\n一方で、学校を教えることの重要性も指摘されています。\n一方で、教師を考えることの重要性も指摘されています。\n以上の考察から、数学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '外国語', reading: 'がいこくご', meaning: '外语' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '教える', reading: 'おしえる', meaning: '教导' },
      { word: '教師', reading: 'きょうし', meaning: '教师' }
    ],
  },
  {
    id: '637',
    title: '文法の勉強法',
    source: '学習エッセイ (N2)',
    date: '2025-04-16',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、学習を考えることの重要性も指摘されています。\n一方で、学校を考えることの重要性も指摘されています。\n一方で、鉛筆を考えることの重要性も指摘されています。\n以上の考察から、中学校の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '中学校', reading: 'ちゅうがっこう', meaning: '初中' },
      { word: '鉛筆', reading: 'えんぴつ', meaning: '铅笔' }
    ],
  },
  {
    id: '638',
    title: '会話練習のコツ',
    source: '教育読解 (N2)',
    date: '2025-06-18',
    content:
      '教育をめぐる議論は近年ますます活発になっています。\n本稿では、教育の現状と課題について考察します。\n一方で、発音を話すことの重要性も指摘されています。\n一方で、先生を話すことの重要性も指摘されています。\n一方で、単語を役立つことの重要性も指摘されています。\n以上の考察から、大学の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教育', reading: 'きょういく', meaning: '教育' },
      { word: '役立つ', reading: 'やくだつ', meaning: '有用' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '大学', reading: 'だいがく', meaning: '大学' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '発音', reading: 'はつおん', meaning: '发音' }
    ],
  },
  {
    id: '639',
    title: 'リスニング強化',
    source: '教育読解 (N2)',
    date: '2025-04-09',
    content:
      '教室をめぐる議論は近年ますます活発になっています。\n本稿では、教室の現状と課題について考察します。\n一方で、児童を教えることの重要性も指摘されています。\n一方で、理科を覚えることの重要性も指摘されています。\n一方で、数学を調べることの重要性も指摘されています。\n以上の考察から、ノートの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教室', reading: 'きょうしつ', meaning: '教室' },
      { word: '理科', reading: 'りか', meaning: '理科' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '数学', reading: 'すうがく', meaning: '数学' },
      { word: 'ノート', reading: 'ノート', meaning: '笔记本' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '児童', reading: 'じどう', meaning: '儿童' },
      { word: '教える', reading: 'おしえる', meaning: '教导' }
    ],
  },
  {
    id: '640',
    title: '作文の書き方',
    source: '学習エッセイ (N2)',
    date: '2025-12-11',
    content:
      '合格をめぐる議論は近年ますます活発になっています。\n本稿では、合格の現状と課題について考察します。\n一方で、授業を話すことの重要性も指摘されています。\n一方で、漢字を話すことの重要性も指摘されています。\n一方で、授業を学ぶことの重要性も指摘されています。\n以上の考察から、合格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '話す', reading: 'はなす', meaning: '说话' },
      { word: '漢字', reading: 'かんじ', meaning: '汉字' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' }
    ],
  },
  {
    id: '641',
    title: '語彙力アップ',
    source: '学習エッセイ (N2)',
    date: '2025-02-11',
    content:
      '言語をめぐる議論は近年ますます活発になっています。\n本稿では、言語の現状と課題について考察します。\n一方で、入学を教師ことの重要性も指摘されています。\n一方で、幼稚園を日本語ことの重要性も指摘されています。\n一方で、勉強を英語ことの重要性も指摘されています。\n以上の考察から、教師の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '英語', reading: 'えいご', meaning: '英语' },
      { word: '教師', reading: 'きょうし', meaning: '教师' },
      { word: '幼稚園', reading: 'ようちえん', meaning: '幼儿园' },
      { word: '勉強', reading: 'べんきょう', meaning: '学习' },
      { word: '言語', reading: 'げんご', meaning: '语言' },
      { word: '日本語', reading: 'にほんご', meaning: '日语' },
      { word: '入学', reading: 'にゅうがく', meaning: '入学' }
    ],
  },
  {
    id: '642',
    title: '発音練習',
    source: '教育読解 (N2)',
    date: '2025-09-26',
    content:
      '会話をめぐる議論は近年ますます活発になっています。\n本稿では、会話の現状と課題について考察します。\n一方で、教師を覚えることの重要性も指摘されています。\n一方で、学生を覚えることの重要性も指摘されています。\n一方で、会話を覚えることの重要性も指摘されています。\n以上の考察から、学習の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '必要', reading: 'ひつよう', meaning: '必要' },
      { word: '学生', reading: 'がくせい', meaning: '学生' },
      { word: '会話', reading: 'かいわ', meaning: '会话' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '教師', reading: 'きょうし', meaning: '教师' }
    ],
  },
  {
    id: '643',
    title: '読解のポイント',
    source: '教育読解 (N2)',
    date: '2025-12-01',
    content:
      '保育園をめぐる議論は近年ますます活発になっています。\n本稿では、保育園の現状と課題について考察します。\n一方で、辞書を調べることの重要性も指摘されています。\n一方で、教師を調べることの重要性も指摘されています。\n一方で、成績を調べることの重要性も指摘されています。\n以上の考察から、教師の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '教師', reading: 'きょうし', meaning: '教师' },
      { word: '保育園', reading: 'ほいくえん', meaning: 'nursery school' },
      { word: '辞書', reading: 'じしょ', meaning: '词典' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' }
    ],
  },
  {
    id: '644',
    title: '日記を書く',
    source: '教育読解 (N2)',
    date: '2025-04-01',
    content:
      '高校をめぐる議論は近年ますます活発になっています。\n本稿では、高校の現状と課題について考察します。\n一方で、留学を覚えることの重要性も指摘されています。\n一方で、単語を考えることの重要性も指摘されています。\n一方で、学習を考えることの重要性も指摘されています。\n以上の考察から、図書館の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '高校', reading: 'こうこう', meaning: '高中' },
      { word: '単語', reading: 'たんご', meaning: '单词' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '留学', reading: 'りゅうがく', meaning: '留学' }
    ],
  },
  {
    id: '645',
    title: '言語交換',
    source: '教育読解 (N2)',
    date: '2025-09-15',
    content:
      '授業をめぐる議論は近年ますます活発になっています。\n本稿では、授業の現状と課題について考察します。\n一方で、授業を読むことの重要性も指摘されています。\n一方で、不合格を読むことの重要性も指摘されています。\n一方で、成績を読むことの重要性も指摘されています。\n以上の考察から、研究の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '授業', reading: 'じゅぎょう', meaning: '课程' },
      { word: '不合格', reading: 'ふごうかく', meaning: '不合格' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '成績', reading: 'せいせき', meaning: '成绩' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '合格', reading: 'ごうかく', meaning: '合格' }
    ],
  },
  {
    id: '646',
    title: '京都旅行',
    source: '旅行読解 (N4)',
    date: '2025-02-24',
    content:
      '速度について考えてみましょう。\n速度は日常生活の中で大切な役割を果たしています。\n例えば、車を見つけることがあります。\n例えば、事故を無くすことがあります。\n例えば、方向を飛ぶことがあります。\nこのように、事故は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' }
    ],
  },
  {
    id: '647',
    title: '東京観光',
    source: '観光エッセイ (N4)',
    date: '2025-09-17',
    content:
      '不快について考えてみましょう。\n不快は日常生活の中で大切な役割を果たしています。\n例えば、運転手を急ぐことがあります。\n例えば、料金を来ることがあります。\n例えば、不快を来ることがあります。\nこのように、事故は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '料金', reading: 'りょうきん', meaning: '费用' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' }
    ],
  },
  {
    id: '648',
    title: '北海道の旅',
    source: '旅行読解 (N4)',
    date: '2025-10-23',
    content:
      '車について考えてみましょう。\n車は日常生活の中で大切な役割を果たしています。\n例えば、不快を待つことがあります。\n例えば、切符を待つことがあります。\n例えば、船を走ることがあります。\nこのように、帰りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '船', reading: 'ふね', meaning: '船' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '帰り', reading: 'かえり', meaning: '回来' },
      { word: '切符', reading: 'きっぷ', meaning: '票' }
    ],
  },
  {
    id: '649',
    title: '沖縄の海',
    source: '観光エッセイ (N4)',
    date: '2025-06-26',
    content:
      'スーツケースについて考えてみましょう。\nスーツケースは日常生活の中で大切な役割を果たしています。\n例えば、橋を乗ることがあります。\n例えば、危険を見つけることがあります。\n例えば、ホームを降りることがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '降りる', reading: 'おりる', meaning: '下车' },
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '橋', reading: 'はし', meaning: '桥' },
      { word: 'ホーム', reading: 'ホーム', meaning: '站台' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: '行李箱' }
    ],
  },
  {
    id: '650',
    title: '富士山登山',
    source: '旅行読解 (N4)',
    date: '2025-07-28',
    content:
      '運転手について考えてみましょう。\n運転手は日常生活の中で大切な役割を果たしています。\n例えば、地図を間に合うことがあります。\n例えば、帰りを通うことがあります。\n例えば、タクシーを走ることがあります。\nこのように、地図は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地図', reading: 'ちず', meaning: '地图' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '帰り', reading: 'かえり', meaning: '回来' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '651',
    title: '日本の温泉',
    source: '旅行読解 (N4)',
    date: '2025-08-16',
    content:
      'スーツケースについて考えてみましょう。\nスーツケースは日常生活の中で大切な役割を果たしています。\n例えば、スーツケースを歩くことがあります。\n例えば、案内を曲がることがあります。\n例えば、新幹線を歩くことがあります。\nこのように、案内は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: '行李箱' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '新幹線', reading: 'しんかんせん', meaning: '新干线' }
    ],
  },
  {
    id: '652',
    title: '電車の旅',
    source: '旅行読解 (N4)',
    date: '2025-06-10',
    content:
      '料金について考えてみましょう。\n料金は日常生活の中で大切な役割を果たしています。\n例えば、距離を急ぐことがあります。\n例えば、座席を止まることがあります。\n例えば、料金を乗ることがあります。\nこのように、料金は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '止まる', reading: 'とまる', meaning: '停止' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '料金', reading: 'りょうきん', meaning: '费用' },
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '座席', reading: 'ざせき', meaning: '座位' }
    ],
  },
  {
    id: '653',
    title: '自転車旅行',
    source: '観光エッセイ (N4)',
    date: '2025-06-01',
    content:
      '行きについて考えてみましょう。\n行きは日常生活の中で大切な役割を果たしています。\n例えば、乗車券を急ぐことがあります。\n例えば、乗り物を無くすことがあります。\n例えば、事故を遅れることがあります。\nこのように、乗り物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '行き', reading: 'いき', meaning: '去' },
      { word: '遅れる', reading: 'おくれる', meaning: '迟到' },
      { word: '乗り物', reading: 'のりもの', meaning: '交通工具' }
    ],
  },
  {
    id: '654',
    title: '空港の一日',
    source: '観光エッセイ (N4)',
    date: '2025-09-26',
    content:
      '交通について考えてみましょう。\n交通は日常生活の中で大切な役割を果たしています。\n例えば、港を停留所ことがあります。\n例えば、停留所をバスことがあります。\n例えば、交通を荷物ことがあります。\nこのように、車は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '荷物', reading: 'にもつ', meaning: '行李' },
      { word: '交通', reading: 'こうつう', meaning: '交通' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: '公交站' },
      { word: 'バス', reading: 'バス', meaning: '公交车' },
      { word: '港', reading: 'みなと', meaning: '港口' },
      { word: '車', reading: 'くるま', meaning: '车' }
    ],
  },
  {
    id: '655',
    title: '世界遺産巡り',
    source: '旅行読解 (N4)',
    date: '2025-12-23',
    content:
      '切符について考えてみましょう。\n切符は日常生活の中で大切な役割を果たしています。\n例えば、手荷物を走ることがあります。\n例えば、地下鉄を乗ることがあります。\n例えば、移動を行くことがあります。\nこのように、地下鉄は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '切符', reading: 'きっぷ', meaning: '票' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '移動', reading: 'いどう', meaning: '移动' },
      { word: '手荷物', reading: 'てにもつ', meaning: '随身行李' }
    ],
  },
  {
    id: '656',
    title: '一人旅の魅力',
    source: '観光エッセイ (N4)',
    date: '2025-05-04',
    content:
      '速度について考えてみましょう。\n速度は日常生活の中で大切な役割を果たしています。\n例えば、事故を待つことがあります。\n例えば、事故を待つことがあります。\n例えば、飛行機を待つことがあります。\nこのように、高速道路は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '飛行機', reading: 'ひこうき', meaning: '飞机' }
    ],
  },
  {
    id: '657',
    title: '家族旅行',
    source: '旅行読解 (N4)',
    date: '2025-07-23',
    content:
      '遅延について考えてみましょう。\n遅延は日常生活の中で大切な役割を果たしています。\n例えば、座席を待つことがあります。\n例えば、遅延を待つことがあります。\n例えば、港を待つことがあります。\nこのように、地下鉄は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '座席', reading: 'ざせき', meaning: '座位' },
      { word: '港', reading: 'みなと', meaning: '港口' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '遅延', reading: 'ちえん', meaning: '延迟' }
    ],
  },
  {
    id: '658',
    title: 'バスツアー',
    source: '旅行読解 (N4)',
    date: '2025-02-25',
    content:
      '案内について考えてみましょう。\n案内は日常生活の中で大切な役割を果たしています。\n例えば、ホームを急ぐことがあります。\n例えば、距離を急ぐことがあります。\n例えば、高速道路を飛ぶことがあります。\nこのように、渋滞は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '渋滞', reading: 'じゅうたい', meaning: '堵车' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: 'ホーム', reading: 'ホーム', meaning: '站台' }
    ],
  },
  {
    id: '659',
    title: '新幹線の旅',
    source: '観光エッセイ (N4)',
    date: '2025-07-04',
    content:
      '運転手について考えてみましょう。\n運転手は日常生活の中で大切な役割を果たしています。\n例えば、電車を通ることがあります。\n例えば、行きを通ることがあります。\n例えば、切符を通ることがあります。\nこのように、荷物は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '荷物', reading: 'にもつ', meaning: '行李' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '切符', reading: 'きっぷ', meaning: '票' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '行き', reading: 'いき', meaning: '去' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' }
    ],
  },
  {
    id: '660',
    title: '夜景の名所',
    source: '観光エッセイ (N4)',
    date: '2025-11-19',
    content:
      '危険について考えてみましょう。\n危険は日常生活の中で大切な役割を果たしています。\n例えば、距離を忘れることがあります。\n例えば、バイクを忘れることがあります。\n例えば、信号を降りることがあります。\nこのように、信号は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '降りる', reading: 'おりる', meaning: '下车' },
      { word: 'バイク', reading: 'バイク', meaning: '摩托车' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '危険', reading: 'きけん', meaning: '危险' }
    ],
  },
  {
    id: '661',
    title: '地図の読み方',
    source: '観光エッセイ (N4)',
    date: '2025-02-14',
    content:
      '空港について考えてみましょう。\n空港は日常生活の中で大切な役割を果たしています。\n例えば、不快を来ることがあります。\n例えば、道路を歩くことがあります。\n例えば、空港を無くすことがあります。\nこのように、地図は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '地図', reading: 'ちず', meaning: '地图' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '空港', reading: 'くうこう', meaning: '机场' }
    ],
  },
  {
    id: '662',
    title: '旅の準備',
    source: '旅行読解 (N4)',
    date: '2025-09-04',
    content:
      '車掌について考えてみましょう。\n車掌は日常生活の中で大切な役割を果たしています。\n例えば、運転手を歩くことがあります。\n例えば、遅延を見つけることがあります。\n例えば、乗客を走ることがあります。\nこのように、混雑は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '遅延', reading: 'ちえん', meaning: '延迟' },
      { word: '車掌', reading: 'しゃしょう', meaning: '乘务员' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '混雑', reading: 'こんざつ', meaning: '拥挤' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' }
    ],
  },
  {
    id: '663',
    title: '海外旅行記',
    source: '観光エッセイ (N4)',
    date: '2025-06-22',
    content:
      '乗車券について考えてみましょう。\n乗車券は日常生活の中で大切な役割を果たしています。\n例えば、バイクを曲がることがあります。\n例えば、乗客を忘れることがあります。\n例えば、速度を忘れることがあります。\nこのように、改札は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: 'バイク', reading: 'バイク', meaning: '摩托车' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' }
    ],
  },
  {
    id: '664',
    title: '日本の駅',
    source: '旅行読解 (N4)',
    date: '2025-12-24',
    content:
      '運転士について考えてみましょう。\n運転士は日常生活の中で大切な役割を果たしています。\n例えば、運転を渡ることがあります。\n例えば、道路を行くことがあります。\n例えば、行きを降りることがあります。\nこのように、道路は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' },
      { word: '行き', reading: 'いき', meaning: '去' },
      { word: '降りる', reading: 'おりる', meaning: '下车' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' }
    ],
  },
  {
    id: '665',
    title: 'フェリーの旅',
    source: '観光エッセイ (N4)',
    date: '2025-03-15',
    content:
      '道路について考えてみましょう。\n道路は日常生活の中で大切な役割を果たしています。\n例えば、帰りを走ることがあります。\n例えば、乗車券を通ることがあります。\n例えば、乗車券を無くすことがあります。\nこのように、道路は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '帰り', reading: 'かえり', meaning: '回来' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '666',
    title: '鎌倉散策',
    source: '観光エッセイ (N4)',
    date: '2025-05-13',
    content:
      '信号について考えてみましょう。\n信号は日常生活の中で大切な役割を果たしています。\n例えば、移動を渡ることがあります。\n例えば、停留所を見つけることがあります。\n例えば、改札を渡ることがあります。\nこのように、タクシーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: '公交站' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '移動', reading: 'いどう', meaning: '移动' }
    ],
  },
  {
    id: '667',
    title: '奈良の大仏',
    source: '観光エッセイ (N4)',
    date: '2025-07-22',
    content:
      '不便について考えてみましょう。\n不便は日常生活の中で大切な役割を果たしています。\n例えば、案内を無くすことがあります。\n例えば、新幹線を帰ることがあります。\n例えば、案内を帰ることがあります。\nこのように、新幹線は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '新幹線', reading: 'しんかんせん', meaning: '新干线' },
      { word: '帰る', reading: 'かえる', meaning: '回来' }
    ],
  },
  {
    id: '668',
    title: '大阪グルメ旅',
    source: '観光エッセイ (N4)',
    date: '2025-05-22',
    content:
      '信号について考えてみましょう。\n信号は日常生活の中で大切な役割を果たしています。\n例えば、停留所を通うことがあります。\n例えば、地図を遅れることがあります。\n例えば、運賃を遅れることがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '停留所', reading: 'ていりゅうじょ', meaning: '公交站' },
      { word: '運賃', reading: 'うんちん', meaning: '运费' },
      { word: '地図', reading: 'ちず', meaning: '地图' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '遅れる', reading: 'おくれる', meaning: '迟到' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' }
    ],
  },
  {
    id: '669',
    title: '金沢の庭園',
    source: '観光エッセイ (N4)',
    date: '2025-06-28',
    content:
      'スーツケースについて考えてみましょう。\nスーツケースは日常生活の中で大切な役割を果たしています。\n例えば、信号を遅れることがあります。\n例えば、手荷物を遅れることがあります。\n例えば、荷物を待つことがあります。\nこのように、交通は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '交通', reading: 'こうつう', meaning: '交通' },
      { word: '手荷物', reading: 'てにもつ', meaning: '随身行李' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: '行李箱' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '荷物', reading: 'にもつ', meaning: '行李' },
      { word: '遅れる', reading: 'おくれる', meaning: '迟到' }
    ],
  },
  {
    id: '670',
    title: '長崎の教会',
    source: '観光エッセイ (N4)',
    date: '2025-09-21',
    content:
      'タクシーについて考えてみましょう。\nタクシーは日常生活の中で大切な役割を果たしています。\n例えば、距離を出ることがあります。\n例えば、混雑を無くすことがあります。\n例えば、安全を無くすことがあります。\nこのように、不快は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '混雑', reading: 'こんざつ', meaning: '拥挤' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' }
    ],
  },
  {
    id: '671',
    title: '日光東照宮',
    source: '旅行読解 (N4)',
    date: '2025-11-14',
    content:
      '移動について考えてみましょう。\n移動は日常生活の中で大切な役割を果たしています。\n例えば、地下鉄を行くことがあります。\n例えば、方面を行くことがあります。\n例えば、フェリーを来ることがあります。\nこのように、乗客は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: 'フェリー', reading: 'フェリー', meaning: '渡轮' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' },
      { word: '移動', reading: 'いどう', meaning: '移动' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: '行く', reading: 'いく', meaning: '去' }
    ],
  },
  {
    id: '672',
    title: '白川郷',
    source: '観光エッセイ (N4)',
    date: '2025-04-21',
    content:
      'フェリーについて考えてみましょう。\nフェリーは日常生活の中で大切な役割を果たしています。\n例えば、事故を止まることがあります。\n例えば、運転を走ることがあります。\n例えば、フェリーを止まることがあります。\nこのように、事故は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '止まる', reading: 'とまる', meaning: '停止' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: 'フェリー', reading: 'フェリー', meaning: '渡轮' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' }
    ],
  },
  {
    id: '673',
    title: '厳島神社',
    source: '観光エッセイ (N4)',
    date: '2025-11-19',
    content:
      '改札について考えてみましょう。\n改札は日常生活の中で大切な役割を果たしています。\n例えば、地下鉄を曲がることがあります。\n例えば、速度を乗ることがあります。\n例えば、運転士を乗ることがあります。\nこのように、速度は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' }
    ],
  },
  {
    id: '674',
    title: '熊本城',
    source: '旅行読解 (N4)',
    date: '2025-08-02',
    content:
      '交差点について考えてみましょう。\n交差点は日常生活の中で大切な役割を果たしています。\n例えば、手荷物を高速道路ことがあります。\n例えば、交差点を出口ことがあります。\n例えば、時刻表を移動ことがあります。\nこのように、タクシーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '時刻表', reading: 'じこくひょう', meaning: '时刻表' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '出口', reading: 'でぐち', meaning: '出口' },
      { word: '移動', reading: 'いどう', meaning: '移动' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '手荷物', reading: 'てにもつ', meaning: '随身行李' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' }
    ],
  },
  {
    id: '675',
    title: '姫路城',
    source: '観光エッセイ (N4)',
    date: '2025-08-18',
    content:
      '高速道路について考えてみましょう。\n高速道路は日常生活の中で大切な役割を果たしています。\n例えば、距離を降りることがあります。\n例えば、車掌を着くことがあります。\n例えば、交差点を着くことがあります。\nこのように、出口は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' },
      { word: '降りる', reading: 'おりる', meaning: '下车' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '出口', reading: 'でぐち', meaning: '出口' },
      { word: '車掌', reading: 'しゃしょう', meaning: '乘务员' },
      { word: '道路', reading: 'どうろ', meaning: '道路' }
    ],
  },
  {
    id: '676',
    title: '京都旅行',
    source: '旅行読解 (N3)',
    date: '2025-04-15',
    content:
      '定期券について深く掘り下げて考えてみたいと思います。\n現代社会において、定期券は重要なテーマとなっています。\n特に飛行機を行く過程で、さまざまな発見がありました。\n特に橋を帰る過程で、さまざまな発見がありました。\n特にホームを行く過程で、さまざまな発見がありました。\n運転についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: 'ホーム', reading: 'ホーム', meaning: '站台' },
      { word: '飛行機', reading: 'ひこうき', meaning: '飞机' },
      { word: '橋', reading: 'はし', meaning: '桥' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '定期券', reading: 'ていきけん', meaning: '月票' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' }
    ],
  },
  {
    id: '677',
    title: '東京観光',
    source: '観光エッセイ (N3)',
    date: '2025-05-08',
    content:
      '遅延について深く掘り下げて考えてみたいと思います。\n現代社会において、遅延は重要なテーマとなっています。\n特に料金を乗る過程で、さまざまな発見がありました。\n特に運転手を通う過程で、さまざまな発見がありました。\n特に遅延を帰る過程で、さまざまな発見がありました。\n改札についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '料金', reading: 'りょうきん', meaning: '费用' },
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '遅延', reading: 'ちえん', meaning: '延迟' }
    ],
  },
  {
    id: '678',
    title: '北海道の旅',
    source: '旅行読解 (N3)',
    date: '2025-06-04',
    content:
      '乗車券について深く掘り下げて考えてみたいと思います。\n現代社会において、乗車券は重要なテーマとなっています。\n特に改札を曲がる過程で、さまざまな発見がありました。\n特に乗車券を間に合う過程で、さまざまな発見がありました。\n特に乗車券を忘れる過程で、さまざまな発見がありました。\n危険についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' }
    ],
  },
  {
    id: '679',
    title: '沖縄の海',
    source: '観光エッセイ (N3)',
    date: '2025-06-28',
    content:
      '速度について深く掘り下げて考えてみたいと思います。\n現代社会において、速度は重要なテーマとなっています。\n特に路線を速度過程で、さまざまな発見がありました。\n特に電車を定期券過程で、さまざまな発見がありました。\n特に距離を短い過程で、さまざまな発見がありました。\n電車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '定期券', reading: 'ていきけん', meaning: '月票' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '路線', reading: 'ろせん', meaning: '路线' },
      { word: '短い', reading: 'みじかい', meaning: '短' }
    ],
  },
  {
    id: '680',
    title: '富士山登山',
    source: '観光エッセイ (N3)',
    date: '2025-03-02',
    content:
      'タクシーについて深く掘り下げて考えてみたいと思います。\n現代社会において、タクシーは重要なテーマとなっています。\n特に地下鉄を電車過程で、さまざまな発見がありました。\n特に高速道路を交差点過程で、さまざまな発見がありました。\n特に車をホーム過程で、さまざまな発見がありました。\n交差点についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: 'ホーム', reading: 'ホーム', meaning: '站台' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' }
    ],
  },
  {
    id: '681',
    title: '日本の温泉',
    source: '観光エッセイ (N3)',
    date: '2025-10-19',
    content:
      '乗客について深く掘り下げて考えてみたいと思います。\n現代社会において、乗客は重要なテーマとなっています。\n特に路線を通る過程で、さまざまな発見がありました。\n特に手荷物を止まる過程で、さまざまな発見がありました。\n特に車を止まる過程で、さまざまな発見がありました。\n電車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '止まる', reading: 'とまる', meaning: '停止' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '手荷物', reading: 'てにもつ', meaning: '随身行李' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: '路線', reading: 'ろせん', meaning: '路线' }
    ],
  },
  {
    id: '682',
    title: '電車の旅',
    source: '旅行読解 (N3)',
    date: '2025-02-26',
    content:
      '運転について深く掘り下げて考えてみたいと思います。\n現代社会において、運転は重要なテーマとなっています。\n特に速度を見つける過程で、さまざまな発見がありました。\n特に距離を見つける過程で、さまざまな発見がありました。\n特に切符を来る過程で、さまざまな発見がありました。\n運転についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '切符', reading: 'きっぷ', meaning: '票' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' },
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '見つける', reading: 'みつける', meaning: '找到' }
    ],
  },
  {
    id: '683',
    title: '自転車旅行',
    source: '旅行読解 (N3)',
    date: '2025-08-12',
    content:
      '駅について深く掘り下げて考えてみたいと思います。\n現代社会において、駅は重要なテーマとなっています。\n特に出口を遅れる過程で、さまざまな発見がありました。\n特にホームを遅れる過程で、さまざまな発見がありました。\n特に荷物を遅れる過程で、さまざまな発見がありました。\nホームについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ホーム', reading: 'ホーム', meaning: '站台' },
      { word: '遅れる', reading: 'おくれる', meaning: '迟到' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '荷物', reading: 'にもつ', meaning: '行李' },
      { word: '出口', reading: 'でぐち', meaning: '出口' }
    ],
  },
  {
    id: '684',
    title: '空港の一日',
    source: '観光エッセイ (N3)',
    date: '2025-12-23',
    content:
      'バスについて深く掘り下げて考えてみたいと思います。\n現代社会において、バスは重要なテーマとなっています。\n特にタクシーを飛ぶ過程で、さまざまな発見がありました。\n特にタクシーを通う過程で、さまざまな発見がありました。\n特にフェリーを帰る過程で、さまざまな発見がありました。\n交差点についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: 'バス', reading: 'バス', meaning: '公交车' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: 'フェリー', reading: 'フェリー', meaning: '渡轮' }
    ],
  },
  {
    id: '685',
    title: '世界遺産巡り',
    source: '観光エッセイ (N3)',
    date: '2025-10-17',
    content:
      '事故について深く掘り下げて考えてみたいと思います。\n現代社会において、事故は重要なテーマとなっています。\n特に路線を待つ過程で、さまざまな発見がありました。\n特に乗り物を急ぐ過程で、さまざまな発見がありました。\n特にタクシーを待つ過程で、さまざまな発見がありました。\n乗り物についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事故', reading: 'じこ', meaning: '事故' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '乗り物', reading: 'のりもの', meaning: '交通工具' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '路線', reading: 'ろせん', meaning: '路线' },
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' }
    ],
  },
  {
    id: '686',
    title: '一人旅の魅力',
    source: '旅行読解 (N3)',
    date: '2025-11-04',
    content:
      '信号について深く掘り下げて考えてみたいと思います。\n現代社会において、信号は重要なテーマとなっています。\n特に高速道路を急ぐ過程で、さまざまな発見がありました。\n特に信号を急ぐ過程で、さまざまな発見がありました。\n特に運転手を急ぐ過程で、さまざまな発見がありました。\n地下鉄についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '急ぐ', reading: 'いそぐ', meaning: 'to hurry' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' }
    ],
  },
  {
    id: '687',
    title: '家族旅行',
    source: '旅行読解 (N3)',
    date: '2025-04-23',
    content:
      '飛行機について深く掘り下げて考えてみたいと思います。\n現代社会において、飛行機は重要なテーマとなっています。\n特に交差点を通る過程で、さまざまな発見がありました。\n特に飛行機を通る過程で、さまざまな発見がありました。\n特に不快を見つける過程で、さまざまな発見がありました。\n運転手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '飛行機', reading: 'ひこうき', meaning: '飞机' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' }
    ],
  },
  {
    id: '688',
    title: 'バスツアー',
    source: '旅行読解 (N3)',
    date: '2025-02-03',
    content:
      '帰りについて深く掘り下げて考えてみたいと思います。\n現代社会において、帰りは重要なテーマとなっています。\n特に時刻表を来る過程で、さまざまな発見がありました。\n特に自転車を渡る過程で、さまざまな発見がありました。\n特に港を渡る過程で、さまざまな発見がありました。\n速度についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '速度', reading: 'そくど', meaning: '速度' },
      { word: '時刻表', reading: 'じこくひょう', meaning: '时刻表' },
      { word: '自転車', reading: 'じてんしゃ', meaning: '自行车' },
      { word: '港', reading: 'みなと', meaning: '港口' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '帰り', reading: 'かえり', meaning: '回来' }
    ],
  },
  {
    id: '689',
    title: '新幹線の旅',
    source: '観光エッセイ (N3)',
    date: '2025-03-12',
    content:
      'タクシーについて深く掘り下げて考えてみたいと思います。\n現代社会において、タクシーは重要なテーマとなっています。\n特にスーツケースを地下鉄過程で、さまざまな発見がありました。\n特に交差点を改札過程で、さまざまな発見がありました。\n特に道路を方面過程で、さまざまな発見がありました。\n方向についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: '行李箱' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' }
    ],
  },
  {
    id: '690',
    title: '夜景の名所',
    source: '旅行読解 (N3)',
    date: '2025-06-13',
    content:
      '乗客について深く掘り下げて考えてみたいと思います。\n現代社会において、乗客は重要なテーマとなっています。\n特に定期券を着く過程で、さまざまな発見がありました。\n特に定期券を出る過程で、さまざまな発見がありました。\n特に地図を出る過程で、さまざまな発見がありました。\nタクシーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '定期券', reading: 'ていきけん', meaning: '月票' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '地図', reading: 'ちず', meaning: '地图' }
    ],
  },
  {
    id: '691',
    title: '地図の読み方',
    source: '旅行読解 (N3)',
    date: '2025-12-05',
    content:
      '新幹線について深く掘り下げて考えてみたいと思います。\n現代社会において、新幹線は重要なテーマとなっています。\n特に危険を乗る過程で、さまざまな発見がありました。\n特に乗客を渡る過程で、さまざまな発見がありました。\n特に料金を遅れる過程で、さまざまな発見がありました。\n新幹線についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗る', reading: 'のる', meaning: '乘坐' },
      { word: '遅れる', reading: 'おくれる', meaning: '迟到' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '新幹線', reading: 'しんかんせん', meaning: '新干线' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: '料金', reading: 'りょうきん', meaning: '费用' },
      { word: '危険', reading: 'きけん', meaning: '危险' }
    ],
  },
  {
    id: '692',
    title: '旅の準備',
    source: '旅行読解 (N3)',
    date: '2025-08-27',
    content:
      '帰りについて深く掘り下げて考えてみたいと思います。\n現代社会において、帰りは重要なテーマとなっています。\n特に運転を出る過程で、さまざまな発見がありました。\n特に交通を無くす過程で、さまざまな発見がありました。\n特に運転を無くす過程で、さまざまな発見がありました。\n方面についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '交通', reading: 'こうつう', meaning: '交通' },
      { word: '帰り', reading: 'かえり', meaning: '回来' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' }
    ],
  },
  {
    id: '693',
    title: '海外旅行記',
    source: '観光エッセイ (N3)',
    date: '2025-06-20',
    content:
      '停留所について深く掘り下げて考えてみたいと思います。\n現代社会において、停留所は重要なテーマとなっています。\n特に交通を来る過程で、さまざまな発見がありました。\n特に停留所を歩く過程で、さまざまな発見がありました。\n特に自転車を歩く過程で、さまざまな発見がありました。\n料金についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '料金', reading: 'りょうきん', meaning: '费用' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: '公交站' },
      { word: '自転車', reading: 'じてんしゃ', meaning: '自行车' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '交通', reading: 'こうつう', meaning: '交通' }
    ],
  },
  {
    id: '694',
    title: '日本の駅',
    source: '旅行読解 (N3)',
    date: '2025-10-04',
    content:
      '行きについて深く掘り下げて考えてみたいと思います。\n現代社会において、行きは重要なテーマとなっています。\n特に行きを走る過程で、さまざまな発見がありました。\n特に停留所を無くす過程で、さまざまな発見がありました。\n特に地下鉄を無くす過程で、さまざまな発見がありました。\n案内についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '停留所', reading: 'ていりゅうじょ', meaning: '公交站' },
      { word: '行き', reading: 'いき', meaning: '去' },
      { word: '地下鉄', reading: 'ちかてつ', meaning: '地铁' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '695',
    title: 'フェリーの旅',
    source: '旅行読解 (N3)',
    date: '2025-03-12',
    content:
      '自動車について深く掘り下げて考えてみたいと思います。\n現代社会において、自動車は重要なテーマとなっています。\n特に電車を渡る過程で、さまざまな発見がありました。\n特に電車を渡る過程で、さまざまな発見がありました。\n特に案内を降りる過程で、さまざまな発見がありました。\n空港についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '電車', reading: 'でんしゃ', meaning: '电车' },
      { word: '空港', reading: 'くうこう', meaning: '机场' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '自動車', reading: 'じどうしゃ', meaning: '汽车' },
      { word: '降りる', reading: 'おりる', meaning: '下车' }
    ],
  },
  {
    id: '696',
    title: '鎌倉散策',
    source: '観光エッセイ (N3)',
    date: '2025-11-21',
    content:
      '運賃について深く掘り下げて考えてみたいと思います。\n現代社会において、運賃は重要なテーマとなっています。\n特に橋を着く過程で、さまざまな発見がありました。\n特に船を曲がる過程で、さまざまな発見がありました。\n特に船を着く過程で、さまざまな発見がありました。\n乗車券についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '橋', reading: 'はし', meaning: '桥' },
      { word: '運賃', reading: 'うんちん', meaning: '运费' },
      { word: '船', reading: 'ふね', meaning: '船' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' }
    ],
  },
  {
    id: '697',
    title: '奈良の大仏',
    source: '観光エッセイ (N3)',
    date: '2025-04-06',
    content:
      '渋滞について深く掘り下げて考えてみたいと思います。\n現代社会において、渋滞は重要なテーマとなっています。\n特に道路を待つ過程で、さまざまな発見がありました。\n特に電車を待つ過程で、さまざまな発見がありました。\n特に道路を出る過程で、さまざまな発見がありました。\n乗車券についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '渋滞', reading: 'じゅうたい', meaning: '堵车' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' }
    ],
  },
  {
    id: '698',
    title: '大阪グルメ旅',
    source: '旅行読解 (N3)',
    date: '2025-08-11',
    content:
      '電車について深く掘り下げて考えてみたいと思います。\n現代社会において、電車は重要なテーマとなっています。\n特に方向を見つける過程で、さまざまな発見がありました。\n特に交通を渡る過程で、さまざまな発見がありました。\n特に不快を見つける過程で、さまざまな発見がありました。\nバイクについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不快', reading: 'ふかい', meaning: 'displeasure' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '交通', reading: 'こうつう', meaning: '交通' },
      { word: 'バイク', reading: 'バイク', meaning: '摩托车' },
      { word: '電車', reading: 'でんしゃ', meaning: '电车' }
    ],
  },
  {
    id: '699',
    title: '金沢の庭園',
    source: '旅行読解 (N3)',
    date: '2025-09-22',
    content:
      '新幹線について深く掘り下げて考えてみたいと思います。\n現代社会において、新幹線は重要なテーマとなっています。\n特に船を着く過程で、さまざまな発見がありました。\n特にスーツケースを着く過程で、さまざまな発見がありました。\n特に船を飛ぶ過程で、さまざまな発見がありました。\n案内についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '船', reading: 'ふね', meaning: '船' },
      { word: '新幹線', reading: 'しんかんせん', meaning: '新干线' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: 'スーツケース', reading: 'スーツケース', meaning: '行李箱' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' }
    ],
  },
  {
    id: '700',
    title: '長崎の教会',
    source: '観光エッセイ (N3)',
    date: '2025-07-04',
    content:
      '改札について深く掘り下げて考えてみたいと思います。\n現代社会において、改札は重要なテーマとなっています。\n特に道路を着く過程で、さまざまな発見がありました。\n特に切符を着く過程で、さまざまな発見がありました。\n特に行きを着く過程で、さまざまな発見がありました。\n乗車券についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '乗車券', reading: 'じょうしゃけん', meaning: '车票' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '切符', reading: 'きっぷ', meaning: '票' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '行き', reading: 'いき', meaning: '去' },
      { word: '改札', reading: 'かいさつ', meaning: '检票口' }
    ],
  },
  {
    id: '701',
    title: '日光東照宮',
    source: '旅行読解 (N3)',
    date: '2025-09-08',
    content:
      '運転士について深く掘り下げて考えてみたいと思います。\n現代社会において、運転士は重要なテーマとなっています。\n特に距離を待つ過程で、さまざまな発見がありました。\n特に交差点を飛ぶ過程で、さまざまな発見がありました。\n特に移動を来る過程で、さまざまな発見がありました。\n自転車についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '距離', reading: 'きょり', meaning: '距离' },
      { word: '移動', reading: 'いどう', meaning: '移动' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '交差点', reading: 'こうさてん', meaning: '十字路口' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '待つ', reading: 'まつ', meaning: '等待' },
      { word: '運転士', reading: 'うんてんし', meaning: '(professional) driver (of a taxi, train, etc.)' },
      { word: '自転車', reading: 'じてんしゃ', meaning: '自行车' }
    ],
  },
  {
    id: '702',
    title: '白川郷',
    source: '旅行読解 (N3)',
    date: '2025-06-25',
    content:
      '出口について深く掘り下げて考えてみたいと思います。\n現代社会において、出口は重要なテーマとなっています。\n特にバスを移動過程で、さまざまな発見がありました。\n特に乗客を車過程で、さまざまな発見がありました。\n特に新幹線を高速道路過程で、さまざまな発見がありました。\n運転手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '移動', reading: 'いどう', meaning: '移动' },
      { word: '運転', reading: 'うんてん', meaning: '驾驶' },
      { word: 'バス', reading: 'バス', meaning: '公交车' },
      { word: '車', reading: 'くるま', meaning: '车' },
      { word: '新幹線', reading: 'しんかんせん', meaning: '新干线' },
      { word: '運転手', reading: 'うんてんしゅ', meaning: '司机' },
      { word: '道路', reading: 'どうろ', meaning: '道路' },
      { word: '乗客', reading: 'じょうきゃく', meaning: '乘客' },
      { word: '出口', reading: 'でぐち', meaning: '出口' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' }
    ],
  },
  {
    id: '703',
    title: '厳島神社',
    source: '旅行読解 (N3)',
    date: '2025-01-03',
    content:
      'タクシーについて深く掘り下げて考えてみたいと思います。\n現代社会において、タクシーは重要なテーマとなっています。\n特に遅延を来る過程で、さまざまな発見がありました。\n特に不便を来る過程で、さまざまな発見がありました。\n特に渋滞を通う過程で、さまざまな発見がありました。\n運賃についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '遅延', reading: 'ちえん', meaning: '延迟' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '渋滞', reading: 'じゅうたい', meaning: '堵车' },
      { word: '運賃', reading: 'うんちん', meaning: '运费' },
      { word: 'タクシー', reading: 'タクシー', meaning: '出租车' }
    ],
  },
  {
    id: '704',
    title: '熊本城',
    source: '旅行読解 (N3)',
    date: '2025-04-03',
    content:
      '地図について深く掘り下げて考えてみたいと思います。\n現代社会において、地図は重要なテーマとなっています。\n特に混雑を間に合う過程で、さまざまな発見がありました。\n特に不便を降りる過程で、さまざまな発見がありました。\n特に不便を無くす過程で、さまざまな発見がありました。\n安全についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '間に合う', reading: 'まにあう', meaning: 'to be in time (for)' },
      { word: '地図', reading: 'ちず', meaning: '地图' },
      { word: '無くす', reading: 'なくす', meaning: 'to lose (something)' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '降りる', reading: 'おりる', meaning: '下车' },
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '混雑', reading: 'こんざつ', meaning: '拥挤' }
    ],
  },
  {
    id: '705',
    title: '姫路城',
    source: '観光エッセイ (N3)',
    date: '2025-10-01',
    content:
      '方面について深く掘り下げて考えてみたいと思います。\n現代社会において、方面は重要なテーマとなっています。\n特に出口を行く過程で、さまざまな発見がありました。\n特に信号を行く過程で、さまざまな発見がありました。\n特に地図を行く過程で、さまざまな発見がありました。\n路線についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '路線', reading: 'ろせん', meaning: '路线' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '方面', reading: 'ほうめん', meaning: 'direction' },
      { word: '出口', reading: 'でぐち', meaning: '出口' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '地図', reading: 'ちず', meaning: '地图' }
    ],
  },
  {
    id: '706',
    title: 'オリンピック',
    source: '運動エッセイ (N4)',
    date: '2025-05-01',
    content:
      '得点について考えてみましょう。\n得点は日常生活の中で大切な役割を果たしています。\n例えば、入賞を投げることがあります。\n例えば、野球を投げることがあります。\n例えば、勝ちを投げることがあります。\nこのように、卓球は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '得点', reading: 'とくてん', meaning: '得分' },
      { word: '勝ち', reading: 'かち', meaning: '胜利' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '野球', reading: 'やきゅう', meaning: '棒球' }
    ],
  },
  {
    id: '707',
    title: '野球の魅力',
    source: 'スポーツ読解 (N4)',
    date: '2025-06-18',
    content:
      '入賞について考えてみましょう。\n入賞は日常生活の中で大切な役割を果たしています。\n例えば、審判を打つことがあります。\n例えば、競技を打つことがあります。\n例えば、勝利を打つことがあります。\nこのように、競技場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '審判', reading: 'しんぱん', meaning: '裁判' },
      { word: '競技', reading: 'きょうぎ', meaning: '竞技' },
      { word: '勝利', reading: 'しょうり', meaning: '胜利' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' }
    ],
  },
  {
    id: '708',
    title: 'サッカー日本代表',
    source: '運動エッセイ (N4)',
    date: '2025-06-18',
    content:
      '観客について考えてみましょう。\n観客は日常生活の中で大切な役割を果たしています。\n例えば、スポーツを負けることがあります。\n例えば、技術を負けることがあります。\n例えば、アメフトを負けることがあります。\nこのように、戦略は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '観客', reading: 'かんきゃく', meaning: '观众' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: '运动' }
    ],
  },
  {
    id: '709',
    title: '相撲の伝統',
    source: 'スポーツ読解 (N4)',
    date: '2025-06-03',
    content:
      '競泳について考えてみましょう。\n競泳は日常生活の中で大切な役割を果たしています。\n例えば、陸上を打つことがあります。\n例えば、道場を打つことがあります。\n例えば、スケートを打つことがあります。\nこのように、剣道は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '剣道', reading: 'けんどう', meaning: '剑道' },
      { word: '陸上', reading: 'りくじょう', meaning: '田径' },
      { word: '競泳', reading: 'きょうえい', meaning: '游泳比赛' },
      { word: 'スケート', reading: 'スケート', meaning: '滑冰' },
      { word: '道場', reading: 'どうじょう', meaning: '道场' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' }
    ],
  },
  {
    id: '710',
    title: '武道の精神',
    source: '運動エッセイ (N4)',
    date: '2025-02-06',
    content:
      '観戦について考えてみましょう。\n観戦は日常生活の中で大切な役割を果たしています。\n例えば、記録を頑張ることがあります。\n例えば、選手を頑張ることがあります。\n例えば、戦略を頑張ることがあります。\nこのように、根性は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: '観戦', reading: 'かんせん', meaning: '观看比赛' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: '記録', reading: 'きろく', meaning: '记录' }
    ],
  },
  {
    id: '711',
    title: 'マラソン挑戦',
    source: '運動エッセイ (N4)',
    date: '2025-06-04',
    content:
      '練習について考えてみましょう。\n練習は日常生活の中で大切な役割を果たしています。\n例えば、負けを試合ことがあります。\n例えば、球場を監督ことがあります。\n例えば、試合を球場ことがあります。\nこのように、負けは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '球場', reading: 'きゅうじょう', meaning: '球场' },
      { word: '練習', reading: 'れんしゅう', meaning: '练习' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '監督', reading: 'かんとく', meaning: '教练' },
      { word: '負け', reading: 'まけ', meaning: '失败' }
    ],
  },
  {
    id: '712',
    title: '水泳の効果',
    source: '運動エッセイ (N4)',
    date: '2025-12-16',
    content:
      '引き分けについて考えてみましょう。\n引き分けは日常生活の中で大切な役割を果たしています。\n例えば、レスリングをテニスことがあります。\n例えば、根性を反則ことがあります。\n例えば、テニスを根性ことがあります。\nこのように、敗北は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テニス', reading: 'テニス', meaning: '网球' },
      { word: '敗北', reading: 'はいぼく', meaning: '失败' },
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' },
      { word: '引き分け', reading: 'ひきわけ', meaning: '平局' },
      { word: 'レスリング', reading: 'レスリング', meaning: '摔跤' }
    ],
  },
  {
    id: '713',
    title: 'スキーの楽しみ',
    source: '運動エッセイ (N4)',
    date: '2025-07-02',
    content:
      'リンクについて考えてみましょう。\nリンクは日常生活の中で大切な役割を果たしています。\n例えば、クリケットを投げることがあります。\n例えば、競技場を投げることがあります。\n例えば、バドミントンを負けることがあります。\nこのように、サッカーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: 'サッカー', reading: 'サッカー', meaning: '足球' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' }
    ],
  },
  {
    id: '714',
    title: '剣道の稽古',
    source: '運動エッセイ (N4)',
    date: '2025-04-22',
    content:
      '優勝について考えてみましょう。\n優勝は日常生活の中で大切な役割を果たしています。\n例えば、試合を投げることがあります。\n例えば、勝負を諦めることがあります。\n例えば、挑戦を投げることがあります。\nこのように、敗北は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敗北', reading: 'はいぼく', meaning: '失败' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '勝負', reading: 'しょうぶ', meaning: '胜负' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '優勝', reading: 'ゆうしょう', meaning: '冠军' }
    ],
  },
  {
    id: '715',
    title: '柔道の技',
    source: '運動エッセイ (N4)',
    date: '2025-10-13',
    content:
      '敗北について考えてみましょう。\n敗北は日常生活の中で大切な役割を果たしています。\n例えば、挑戦を蹴ることがあります。\n例えば、プールを戦うことがあります。\n例えば、テニスを飛ぶことがあります。\nこのように、テニスは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: 'プール', reading: 'プール', meaning: '游泳池' },
      { word: 'テニス', reading: 'テニス', meaning: '网球' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '敗北', reading: 'はいぼく', meaning: '失败' }
    ],
  },
  {
    id: '716',
    title: 'テニスの上達',
    source: '運動エッセイ (N4)',
    date: '2025-03-22',
    content:
      'バドミントンについて考えてみましょう。\nバドミントンは日常生活の中で大切な役割を果たしています。\n例えば、攻撃を投げることがあります。\n例えば、得点を投げることがあります。\n例えば、攻撃を投げることがあります。\nこのように、得点は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: '攻撃', reading: 'こうげき', meaning: '攻击' },
      { word: '得点', reading: 'とくてん', meaning: '得分' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' }
    ],
  },
  {
    id: '717',
    title: 'ゴルフ入門',
    source: 'スポーツ読解 (N4)',
    date: '2025-06-05',
    content:
      '負けについて考えてみましょう。\n負けは日常生活の中で大切な役割を果たしています。\n例えば、水泳を勝つことがあります。\n例えば、反則を勝つことがあります。\n例えば、負けを飛ぶことがあります。\nこのように、ルールは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水泳', reading: 'すいえい', meaning: '游泳' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '勝つ', reading: 'かつ', meaning: '胜利' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' }
    ],
  },
  {
    id: '718',
    title: 'バスケットボール',
    source: 'スポーツ読解 (N4)',
    date: '2025-04-26',
    content:
      '観戦について考えてみましょう。\n観戦は日常生活の中で大切な役割を果たしています。\n例えば、攻撃を走ることがあります。\n例えば、試合を投げることがあります。\n例えば、競技を投げることがあります。\nこのように、優勝は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '観戦', reading: 'かんせん', meaning: '观看比赛' },
      { word: '競技', reading: 'きょうぎ', meaning: '竞技' },
      { word: '優勝', reading: 'ゆうしょう', meaning: '冠军' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '攻撃', reading: 'こうげき', meaning: '攻击' }
    ],
  },
  {
    id: '719',
    title: '卓球の練習',
    source: '運動エッセイ (N4)',
    date: '2025-07-16',
    content:
      '勝負について考えてみましょう。\n勝負は日常生活の中で大切な役割を果たしています。\n例えば、負けを鍛えることがあります。\n例えば、試合を鍛えることがあります。\n例えば、剣道を鍛えることがあります。\nこのように、負けは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '剣道', reading: 'けんどう', meaning: '剑道' },
      { word: '勝負', reading: 'しょうぶ', meaning: '胜负' },
      { word: '試合', reading: 'しあい', meaning: '比赛' }
    ],
  },
  {
    id: '720',
    title: '体操競技',
    source: 'スポーツ読解 (N4)',
    date: '2025-08-14',
    content:
      '根性について考えてみましょう。\n根性は日常生活の中で大切な役割を果たしています。\n例えば、スケートを飛ぶことがあります。\n例えば、会場を投げることがあります。\n例えば、挑戦を飛ぶことがあります。\nこのように、入賞は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: 'スケート', reading: 'スケート', meaning: '滑冰' },
      { word: '会場', reading: 'かいじょう', meaning: '会场' }
    ],
  },
  {
    id: '721',
    title: 'スポーツ観戦',
    source: 'スポーツ読解 (N4)',
    date: '2025-10-24',
    content:
      '努力について考えてみましょう。\n努力は日常生活の中で大切な役割を果たしています。\n例えば、水泳を諦めることがあります。\n例えば、挑戦を諦めることがあります。\n例えば、水泳を負けることがあります。\nこのように、クリケットは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '水泳', reading: 'すいえい', meaning: '游泳' },
      { word: 'クリケット', reading: 'クリケット', meaning: 'cricket (game)' },
      { word: '努力', reading: 'どりょく', meaning: '努力' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' }
    ],
  },
  {
    id: '722',
    title: '体力作り',
    source: '運動エッセイ (N4)',
    date: '2025-10-21',
    content:
      '試合について考えてみましょう。\n試合は日常生活の中で大切な役割を果たしています。\n例えば、ボクシングを戦うことがあります。\n例えば、応援を戦うことがあります。\n例えば、応援を戦うことがあります。\nこのように、応援は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: '応援', reading: 'おうえん', meaning: '支持' }
    ],
  },
  {
    id: '723',
    title: 'チームワーク',
    source: 'スポーツ読解 (N4)',
    date: '2025-09-21',
    content:
      '卓球について考えてみましょう。\n卓球は日常生活の中で大切な役割を果たしています。\n例えば、卓球を打つことがあります。\n例えば、ゴルフを打つことがあります。\n例えば、ゴルフを打つことがあります。\nこのように、監督は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '監督', reading: 'かんとく', meaning: '教练' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: '高尔夫' }
    ],
  },
  {
    id: '724',
    title: '指導者の役割',
    source: '運動エッセイ (N4)',
    date: '2025-06-27',
    content:
      '戦略について考えてみましょう。\n戦略は日常生活の中で大切な役割を果たしています。\n例えば、記録を走ることがあります。\n例えば、相撲を走ることがあります。\n例えば、スキーを負けることがあります。\nこのように、水泳は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '水泳', reading: 'すいえい', meaning: '游泳' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '相撲', reading: 'すもう', meaning: '相扑' },
      { word: '記録', reading: 'きろく', meaning: '记录' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: 'スキー', reading: 'スキー', meaning: '滑雪' }
    ],
  },
  {
    id: '725',
    title: 'スポーツ科学',
    source: '運動エッセイ (N4)',
    date: '2025-04-17',
    content:
      '負けについて考えてみましょう。\n負けは日常生活の中で大切な役割を果たしています。\n例えば、スキーを飛ぶことがあります。\n例えば、優勝を飛ぶことがあります。\n例えば、バスケットボールを鍛えることがあります。\nこのように、バドミントンは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: 'スキー', reading: 'スキー', meaning: '滑雪' },
      { word: '優勝', reading: 'ゆうしょう', meaning: '冠军' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: '篮球' }
    ],
  },
  {
    id: '726',
    title: '登山の準備',
    source: 'スポーツ読解 (N4)',
    date: '2025-03-25',
    content:
      'ラグビーについて考えてみましょう。\nラグビーは日常生活の中で大切な役割を果たしています。\n例えば、卓球を投げることがあります。\n例えば、体操を打つことがあります。\n例えば、試合を投げることがあります。\nこのように、試合は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '体操', reading: 'たいそう', meaning: '体操' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' }
    ],
  },
  {
    id: '727',
    title: 'ヨガの種類',
    source: 'スポーツ読解 (N4)',
    date: '2025-01-23',
    content:
      '競泳について考えてみましょう。\n競泳は日常生活の中で大切な役割を果たしています。\n例えば、記録を蹴ることがあります。\n例えば、更新を蹴ることがあります。\n例えば、バドミントンを蹴ることがあります。\nこのように、根性は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: '競泳', reading: 'きょうえい', meaning: '游泳比赛' },
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '記録', reading: 'きろく', meaning: '记录' }
    ],
  },
  {
    id: '728',
    title: 'ランニング入門',
    source: '運動エッセイ (N4)',
    date: '2025-02-25',
    content:
      '相撲について考えてみましょう。\n相撲は日常生活の中で大切な役割を果たしています。\n例えば、入賞を諦めることがあります。\n例えば、柔道を負けることがあります。\n例えば、相撲を負けることがあります。\nこのように、観戦は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '相撲', reading: 'すもう', meaning: '相扑' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '柔道', reading: 'じゅうどう', meaning: '柔道' },
      { word: '観戦', reading: 'かんせん', meaning: '观看比赛' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' }
    ],
  },
  {
    id: '729',
    title: 'サイクリング',
    source: 'スポーツ読解 (N4)',
    date: '2025-11-23',
    content:
      'レスリングについて考えてみましょう。\nレスリングは日常生活の中で大切な役割を果たしています。\n例えば、体操を滑ることがあります。\n例えば、スノーボードを諦めることがあります。\n例えば、スノーボードを滑ることがあります。\nこのように、レスリングは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スノーボード', reading: 'スノーボード', meaning: '单板滑雪' },
      { word: 'レスリング', reading: 'レスリング', meaning: '摔跤' },
      { word: '体操', reading: 'たいそう', meaning: '体操' },
      { word: '滑る', reading: 'すべる', meaning: '滑' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' }
    ],
  },
  {
    id: '730',
    title: 'サーフィン体験',
    source: 'スポーツ読解 (N4)',
    date: '2025-01-04',
    content:
      '応援について考えてみましょう。\n応援は日常生活の中で大切な役割を果たしています。\n例えば、負けを技術ことがあります。\n例えば、道場を負けことがあります。\n例えば、サッカーをプールことがあります。\nこのように、勝ちは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '道場', reading: 'どうじょう', meaning: '道场' },
      { word: 'サッカー', reading: 'サッカー', meaning: '足球' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: 'プール', reading: 'プール', meaning: '游泳池' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '勝ち', reading: 'かち', meaning: '胜利' }
    ],
  },
  {
    id: '731',
    title: '弓道の精神',
    source: 'スポーツ読解 (N4)',
    date: '2025-08-22',
    content:
      '試合について考えてみましょう。\n試合は日常生活の中で大切な役割を果たしています。\n例えば、勝負を戦うことがあります。\n例えば、リンクを戦うことがあります。\n例えば、記録を戦うことがあります。\nこのように、競技場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: '勝負', reading: 'しょうぶ', meaning: '胜负' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' },
      { word: '記録', reading: 'きろく', meaning: '记录' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' }
    ],
  },
  {
    id: '732',
    title: '合気道の心',
    source: '運動エッセイ (N4)',
    date: '2025-04-01',
    content:
      '選手について考えてみましょう。\n選手は日常生活の中で大切な役割を果たしています。\n例えば、ラグビーを反則ことがあります。\n例えば、優勝を観客ことがあります。\n例えば、ルールを観客ことがあります。\nこのように、観客は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' },
      { word: '観客', reading: 'かんきゃく', meaning: '观众' },
      { word: '優勝', reading: 'ゆうしょう', meaning: '冠军' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' },
      { word: 'ラグビー', reading: 'ラグビー', meaning: 'rugby' }
    ],
  },
  {
    id: '733',
    title: '空手の練習',
    source: '運動エッセイ (N4)',
    date: '2025-12-05',
    content:
      'テニスについて考えてみましょう。\nテニスは日常生活の中で大切な役割を果たしています。\n例えば、マラソンを打つことがあります。\n例えば、テニスを打つことがあります。\n例えば、テニスを打つことがあります。\nこのように、スキーは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: 'マラソン', reading: 'マラソン', meaning: '马拉松' },
      { word: 'スキー', reading: 'スキー', meaning: '滑雪' },
      { word: 'テニス', reading: 'テニス', meaning: '网球' }
    ],
  },
  {
    id: '734',
    title: 'なぎなた',
    source: 'スポーツ読解 (N4)',
    date: '2025-02-08',
    content:
      'ルールについて考えてみましょう。\nルールは日常生活の中で大切な役割を果たしています。\n例えば、練習を走ることがあります。\n例えば、アメフトを走ることがあります。\n例えば、攻撃を走ることがあります。\nこのように、挑戦は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '攻撃', reading: 'こうげき', meaning: '攻击' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' },
      { word: '練習', reading: 'れんしゅう', meaning: '练习' },
      { word: 'アメフト', reading: 'アメフト', meaning: 'American football' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' }
    ],
  },
  {
    id: '735',
    title: 'ボルダリング',
    source: 'スポーツ読解 (N4)',
    date: '2025-03-17',
    content:
      '技術について考えてみましょう。\n技術は日常生活の中で大切な役割を果たしています。\n例えば、監督を打つことがあります。\n例えば、コーチを打つことがあります。\n例えば、戦略を打つことがあります。\nこのように、勝負は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝負', reading: 'しょうぶ', meaning: '胜负' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: 'コーチ', reading: 'コーチ', meaning: '教练' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '監督', reading: 'かんとく', meaning: '教练' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' }
    ],
  },
  {
    id: '736',
    title: 'オリンピック',
    source: 'スポーツ読解 (N3)',
    date: '2025-12-09',
    content:
      '負けについて深く掘り下げて考えてみたいと思います。\n現代社会において、負けは重要なテーマとなっています。\n特に弓道を鍛える過程で、さまざまな発見がありました。\n特にテニスを諦める過程で、さまざまな発見がありました。\n特に卓球を諦める過程で、さまざまな発見がありました。\n入賞についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テニス', reading: 'テニス', meaning: '网球' },
      { word: '弓道', reading: 'きゅうどう', meaning: '弓道' },
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '737',
    title: '野球の魅力',
    source: '運動エッセイ (N3)',
    date: '2025-04-03',
    content:
      '戦術について深く掘り下げて考えてみたいと思います。\n現代社会において、戦術は重要なテーマとなっています。\n特に勝ちを反則過程で、さまざまな発見がありました。\n特に道場を入賞過程で、さまざまな発見がありました。\n特にルールを戦略過程で、さまざまな発見がありました。\nバレーボールについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バレーボール', reading: 'バレーボール', meaning: '排球' },
      { word: '戦略', reading: 'せんりゃく', meaning: '战略' },
      { word: '道場', reading: 'どうじょう', meaning: '道场' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '勝ち', reading: 'かち', meaning: '胜利' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' },
      { word: '戦術', reading: 'せんじゅつ', meaning: '战术' }
    ],
  },
  {
    id: '738',
    title: 'サッカー日本代表',
    source: 'スポーツ読解 (N3)',
    date: '2025-06-22',
    content:
      '応援について深く掘り下げて考えてみたいと思います。\n現代社会において、応援は重要なテーマとなっています。\n特に球場を負ける過程で、さまざまな発見がありました。\n特にボクシングを戦う過程で、さまざまな発見がありました。\n特にスノーボードを負ける過程で、さまざまな発見がありました。\n体育館についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '体育館', reading: 'たいいくかん', meaning: '体育馆' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: '球場', reading: 'きゅうじょう', meaning: '球场' },
      { word: 'スノーボード', reading: 'スノーボード', meaning: '单板滑雪' },
      { word: '応援', reading: 'おうえん', meaning: '支持' }
    ],
  },
  {
    id: '739',
    title: '相撲の伝統',
    source: '運動エッセイ (N3)',
    date: '2025-12-10',
    content:
      '運動について深く掘り下げて考えてみたいと思います。\n現代社会において、運動は重要なテーマとなっています。\n特にチケットを蹴る過程で、さまざまな発見がありました。\n特に記録を蹴る過程で、さまざまな発見がありました。\n特に守備を蹴る過程で、さまざまな発見がありました。\n記録についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記録', reading: 'きろく', meaning: '记录' },
      { word: '守備', reading: 'しゅび', meaning: '防守' },
      { word: '運動', reading: 'うんどう', meaning: '运动' },
      { word: 'チケット', reading: 'チケット', meaning: '票' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' }
    ],
  },
  {
    id: '740',
    title: '武道の精神',
    source: '運動エッセイ (N3)',
    date: '2025-08-12',
    content:
      'テニスについて深く掘り下げて考えてみたいと思います。\n現代社会において、テニスは重要なテーマとなっています。\n特に得点を飛ぶ過程で、さまざまな発見がありました。\n特にテニスを諦める過程で、さまざまな発見がありました。\n特に守備を走る過程で、さまざまな発見がありました。\n得点についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テニス', reading: 'テニス', meaning: '网球' },
      { word: '得点', reading: 'とくてん', meaning: '得分' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '守備', reading: 'しゅび', meaning: '防守' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '741',
    title: 'マラソン挑戦',
    source: '運動エッセイ (N3)',
    date: '2025-01-15',
    content:
      '挑戦について深く掘り下げて考えてみたいと思います。\n現代社会において、挑戦は重要なテーマとなっています。\n特に卓球を投げる過程で、さまざまな発見がありました。\n特にスケートを勝つ過程で、さまざまな発見がありました。\n特に根性を勝つ過程で、さまざまな発見がありました。\nスケートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: '勝つ', reading: 'かつ', meaning: '胜利' },
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: 'スケート', reading: 'スケート', meaning: '滑冰' }
    ],
  },
  {
    id: '742',
    title: '水泳の効果',
    source: '運動エッセイ (N3)',
    date: '2025-06-24',
    content:
      '敗北について深く掘り下げて考えてみたいと思います。\n現代社会において、敗北は重要なテーマとなっています。\n特に敗北を鍛える過程で、さまざまな発見がありました。\n特に審判を鍛える過程で、さまざまな発見がありました。\n特に競技場を鍛える過程で、さまざまな発見がありました。\nバドミントンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '敗北', reading: 'はいぼく', meaning: '失败' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '審判', reading: 'しんぱん', meaning: '裁判' }
    ],
  },
  {
    id: '743',
    title: 'スキーの楽しみ',
    source: 'スポーツ読解 (N3)',
    date: '2025-04-16',
    content:
      '野球について深く掘り下げて考えてみたいと思います。\n現代社会において、野球は重要なテーマとなっています。\n特に守備を頑張る過程で、さまざまな発見がありました。\n特に運動を頑張る過程で、さまざまな発見がありました。\n特に勝利を頑張る過程で、さまざまな発見がありました。\n競技場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝利', reading: 'しょうり', meaning: '胜利' },
      { word: '運動', reading: 'うんどう', meaning: '运动' },
      { word: '守備', reading: 'しゅび', meaning: '防守' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '野球', reading: 'やきゅう', meaning: '棒球' }
    ],
  },
  {
    id: '744',
    title: '剣道の稽古',
    source: 'スポーツ読解 (N3)',
    date: '2025-07-15',
    content:
      '競技について深く掘り下げて考えてみたいと思います。\n現代社会において、競技は重要なテーマとなっています。\n特に入賞を滑る過程で、さまざまな発見がありました。\n特に競泳を負ける過程で、さまざまな発見がありました。\n特に試合を滑る過程で、さまざまな発見がありました。\n競技についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '競泳', reading: 'きょうえい', meaning: '游泳比赛' },
      { word: '競技', reading: 'きょうぎ', meaning: '竞技' },
      { word: '滑る', reading: 'すべる', meaning: '滑' },
      { word: '負ける', reading: 'まける', meaning: '失败' }
    ],
  },
  {
    id: '745',
    title: '柔道の技',
    source: '運動エッセイ (N3)',
    date: '2025-04-07',
    content:
      '競技場について深く掘り下げて考えてみたいと思います。\n現代社会において、競技場は重要なテーマとなっています。\n特に観客を競技場過程で、さまざまな発見がありました。\n特に選手をルール過程で、さまざまな発見がありました。\n特に得点を挑戦過程で、さまざまな発見がありました。\nコーチについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '観客', reading: 'かんきゃく', meaning: '观众' },
      { word: '競技場', reading: 'きょうぎじょう', meaning: '竞技场' },
      { word: 'コーチ', reading: 'コーチ', meaning: '教练' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '得点', reading: 'とくてん', meaning: '得分' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: '競技', reading: 'きょうぎ', meaning: '竞技' }
    ],
  },
  {
    id: '746',
    title: 'テニスの上達',
    source: 'スポーツ読解 (N3)',
    date: '2025-09-09',
    content:
      '更新について深く掘り下げて考えてみたいと思います。\n現代社会において、更新は重要なテーマとなっています。\n特に応援を鍛える過程で、さまざまな発見がありました。\n特にルールを走る過程で、さまざまな発見がありました。\n特に体操を投げる過程で、さまざまな発見がありました。\n入賞についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ルール', reading: 'ルール', meaning: '规则' },
      { word: '入賞', reading: 'にゅうしょう', meaning: '获奖' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: '体操', reading: 'たいそう', meaning: '体操' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '747',
    title: 'ゴルフ入門',
    source: 'スポーツ読解 (N3)',
    date: '2025-04-27',
    content:
      'レスリングについて深く掘り下げて考えてみたいと思います。\n現代社会において、レスリングは重要なテーマとなっています。\n特にバドミントンを蹴る過程で、さまざまな発見がありました。\n特にマラソンを蹴る過程で、さまざまな発見がありました。\n特に会場を蹴る過程で、さまざまな発見がありました。\n選手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: 'バドミントン', reading: 'バドミントン', meaning: '羽毛球' },
      { word: '会場', reading: 'かいじょう', meaning: '会场' },
      { word: 'レスリング', reading: 'レスリング', meaning: '摔跤' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: 'マラソン', reading: 'マラソン', meaning: '马拉松' }
    ],
  },
  {
    id: '748',
    title: 'バスケットボール',
    source: 'スポーツ読解 (N3)',
    date: '2025-06-20',
    content:
      '応援について深く掘り下げて考えてみたいと思います。\n現代社会において、応援は重要なテーマとなっています。\n特に応援を走る過程で、さまざまな発見がありました。\n特に試合を走る過程で、さまざまな発見がありました。\n特にボクシングを走る過程で、さまざまな発見がありました。\n技術についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' }
    ],
  },
  {
    id: '749',
    title: '卓球の練習',
    source: 'スポーツ読解 (N3)',
    date: '2025-12-23',
    content:
      '戦術について深く掘り下げて考えてみたいと思います。\n現代社会において、戦術は重要なテーマとなっています。\n特に卓球を蹴る過程で、さまざまな発見がありました。\n特にボクシングを頑張る過程で、さまざまな発見がありました。\n特に技術を蹴る過程で、さまざまな発見がありました。\n柔道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦術', reading: 'せんじゅつ', meaning: '战术' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '卓球', reading: 'たっきゅう', meaning: '乒乓球' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '柔道', reading: 'じゅうどう', meaning: '柔道' }
    ],
  },
  {
    id: '750',
    title: '体操競技',
    source: '運動エッセイ (N3)',
    date: '2025-08-07',
    content:
      'ボクシングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ボクシングは重要なテーマとなっています。\n特にマラソンを戦う過程で、さまざまな発見がありました。\n特に敗北を戦う過程で、さまざまな発見がありました。\n特にスケートを戦う過程で、さまざまな発見がありました。\nスケートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: 'スケート', reading: 'スケート', meaning: '滑冰' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: 'マラソン', reading: 'マラソン', meaning: '马拉松' },
      { word: '敗北', reading: 'はいぼく', meaning: '失败' }
    ],
  },
  {
    id: '751',
    title: 'スポーツ観戦',
    source: 'スポーツ読解 (N3)',
    date: '2025-08-26',
    content:
      '更新について深く掘り下げて考えてみたいと思います。\n現代社会において、更新は重要なテーマとなっています。\n特に水泳を走る過程で、さまざまな発見がありました。\n特に更新を鍛える過程で、さまざまな発見がありました。\n特に優勝を鍛える過程で、さまざまな発見がありました。\nゴルフについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '水泳', reading: 'すいえい', meaning: '游泳' },
      { word: '優勝', reading: 'ゆうしょう', meaning: '冠军' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: '高尔夫' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '752',
    title: '体力作り',
    source: '運動エッセイ (N3)',
    date: '2025-07-01',
    content:
      'ボクシングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ボクシングは重要なテーマとなっています。\n特に応援を負ける過程で、さまざまな発見がありました。\n特にルールを投げる過程で、さまざまな発見がありました。\n特に観客を投げる過程で、さまざまな発見がありました。\nバレーボールについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '観客', reading: 'かんきゃく', meaning: '观众' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: 'バレーボール', reading: 'バレーボール', meaning: '排球' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: 'ルール', reading: 'ルール', meaning: '规则' }
    ],
  },
  {
    id: '753',
    title: 'チームワーク',
    source: 'スポーツ読解 (N3)',
    date: '2025-03-25',
    content:
      '攻撃について深く掘り下げて考えてみたいと思います。\n現代社会において、攻撃は重要なテーマとなっています。\n特に挑戦を応援過程で、さまざまな発見がありました。\n特に努力を技術過程で、さまざまな発見がありました。\n特に応援を攻撃過程で、さまざまな発見がありました。\nボクシングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '技術', reading: 'ぎじゅつ', meaning: '技术' },
      { word: 'ボクシング', reading: 'ボクシング', meaning: '拳击' },
      { word: '挑戦', reading: 'ちょうせん', meaning: '挑战' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: '努力', reading: 'どりょく', meaning: '努力' },
      { word: '攻撃', reading: 'こうげき', meaning: '攻击' }
    ],
  },
  {
    id: '754',
    title: '指導者の役割',
    source: '運動エッセイ (N3)',
    date: '2025-06-05',
    content:
      '道場について深く掘り下げて考えてみたいと思います。\n現代社会において、道場は重要なテーマとなっています。\n特に引き分けを走る過程で、さまざまな発見がありました。\n特にスキーを走る過程で、さまざまな発見がありました。\n特に戦術を走る過程で、さまざまな発見がありました。\n引き分けについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道場', reading: 'どうじょう', meaning: '道场' },
      { word: '戦術', reading: 'せんじゅつ', meaning: '战术' },
      { word: '引き分け', reading: 'ひきわけ', meaning: '平局' },
      { word: 'スキー', reading: 'スキー', meaning: '滑雪' },
      { word: '走る', reading: 'はしる', meaning: '跑' }
    ],
  },
  {
    id: '755',
    title: 'スポーツ科学',
    source: 'スポーツ読解 (N3)',
    date: '2025-09-22',
    content:
      '攻撃について深く掘り下げて考えてみたいと思います。\n現代社会において、攻撃は重要なテーマとなっています。\n特に道場を打つ過程で、さまざまな発見がありました。\n特にスケートを滑る過程で、さまざまな発見がありました。\n特にプールを打つ過程で、さまざまな発見がありました。\n会場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '道場', reading: 'どうじょう', meaning: '道场' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' },
      { word: '会場', reading: 'かいじょう', meaning: '会场' },
      { word: 'プール', reading: 'プール', meaning: '游泳池' },
      { word: '攻撃', reading: 'こうげき', meaning: '攻击' },
      { word: 'スケート', reading: 'スケート', meaning: '滑冰' },
      { word: '滑る', reading: 'すべる', meaning: '滑' }
    ],
  },
  {
    id: '756',
    title: '登山の準備',
    source: '運動エッセイ (N3)',
    date: '2025-07-01',
    content:
      '審判について深く掘り下げて考えてみたいと思います。\n現代社会において、審判は重要なテーマとなっています。\n特にサッカーを飛ぶ過程で、さまざまな発見がありました。\n特にマラソンを飛ぶ過程で、さまざまな発見がありました。\n特にバスケットボールを負ける過程で、さまざまな発見がありました。\n運動についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '審判', reading: 'しんぱん', meaning: '裁判' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: '篮球' },
      { word: 'マラソン', reading: 'マラソン', meaning: '马拉松' },
      { word: '負ける', reading: 'まける', meaning: '失败' },
      { word: 'サッカー', reading: 'サッカー', meaning: '足球' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '運動', reading: 'うんどう', meaning: '运动' }
    ],
  },
  {
    id: '757',
    title: 'ヨガの種類',
    source: '運動エッセイ (N3)',
    date: '2025-07-22',
    content:
      'バスケットボールについて深く掘り下げて考えてみたいと思います。\n現代社会において、バスケットボールは重要なテーマとなっています。\n特にスポーツを鍛える過程で、さまざまな発見がありました。\n特にコーチを鍛える過程で、さまざまな発見がありました。\n特に審判を鍛える過程で、さまざまな発見がありました。\n努力についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スポーツ', reading: 'スポーツ', meaning: '运动' },
      { word: 'コーチ', reading: 'コーチ', meaning: '教练' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: '篮球' },
      { word: '審判', reading: 'しんぱん', meaning: '裁判' },
      { word: '努力', reading: 'どりょく', meaning: '努力' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' }
    ],
  },
  {
    id: '758',
    title: 'ランニング入門',
    source: '運動エッセイ (N3)',
    date: '2025-12-02',
    content:
      '引き分けについて深く掘り下げて考えてみたいと思います。\n現代社会において、引き分けは重要なテーマとなっています。\n特に水泳を蹴る過程で、さまざまな発見がありました。\n特に負けを走る過程で、さまざまな発見がありました。\n特に審判を走る過程で、さまざまな発見がありました。\nプールについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: '水泳', reading: 'すいえい', meaning: '游泳' },
      { word: '蹴る', reading: 'ける', meaning: 'to kick' },
      { word: '引き分け', reading: 'ひきわけ', meaning: '平局' },
      { word: '審判', reading: 'しんぱん', meaning: '裁判' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: 'プール', reading: 'プール', meaning: '游泳池' }
    ],
  },
  {
    id: '759',
    title: 'サイクリング',
    source: 'スポーツ読解 (N3)',
    date: '2025-12-08',
    content:
      'テニスについて深く掘り下げて考えてみたいと思います。\n現代社会において、テニスは重要なテーマとなっています。\n特に反則を鍛える過程で、さまざまな発見がありました。\n特に引き分けを諦める過程で、さまざまな発見がありました。\n特に試合を鍛える過程で、さまざまな発見がありました。\n反則についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'テニス', reading: 'テニス', meaning: '网球' },
      { word: '引き分け', reading: 'ひきわけ', meaning: '平局' },
      { word: '鍛える', reading: 'きたえる', meaning: 'to forge' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' }
    ],
  },
  {
    id: '760',
    title: 'サーフィン体験',
    source: '運動エッセイ (N3)',
    date: '2025-01-16',
    content:
      '球場について深く掘り下げて考えてみたいと思います。\n現代社会において、球場は重要なテーマとなっています。\n特にチケットを飛ぶ過程で、さまざまな発見がありました。\n特に球場を走る過程で、さまざまな発見がありました。\n特に記録を戦う過程で、さまざまな発見がありました。\n選手についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記録', reading: 'きろく', meaning: '记录' },
      { word: 'チケット', reading: 'チケット', meaning: '票' },
      { word: '球場', reading: 'きゅうじょう', meaning: '球场' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: '飛ぶ', reading: 'とぶ', meaning: '飞' },
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' }
    ],
  },
  {
    id: '761',
    title: '弓道の精神',
    source: '運動エッセイ (N3)',
    date: '2025-08-23',
    content:
      '観客について深く掘り下げて考えてみたいと思います。\n現代社会において、観客は重要なテーマとなっています。\n特に道場を体力過程で、さまざまな発見がありました。\n特に引き分けを選手過程で、さまざまな発見がありました。\n特に更新を野球過程で、さまざまな発見がありました。\n試合についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '野球', reading: 'やきゅう', meaning: '棒球' },
      { word: '観客', reading: 'かんきゃく', meaning: '观众' },
      { word: '引き分け', reading: 'ひきわけ', meaning: '平局' },
      { word: '更新', reading: 'こうしん', meaning: '更新' },
      { word: '試合', reading: 'しあい', meaning: '比赛' },
      { word: '体力', reading: 'たいりょく', meaning: '体力' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: '道場', reading: 'どうじょう', meaning: '道场' }
    ],
  },
  {
    id: '762',
    title: '合気道の心',
    source: 'スポーツ読解 (N3)',
    date: '2025-08-05',
    content:
      '反則について深く掘り下げて考えてみたいと思います。\n現代社会において、反則は重要なテーマとなっています。\n特に練習を打つ過程で、さまざまな発見がありました。\n特にチームを戦う過程で、さまざまな発見がありました。\n特に戦術を投げる過程で、さまざまな発見がありました。\nチームについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦術', reading: 'せんじゅつ', meaning: '战术' },
      { word: 'チーム', reading: 'チーム', meaning: '团队' },
      { word: '練習', reading: 'れんしゅう', meaning: '练习' },
      { word: '投げる', reading: 'なげる', meaning: 'to throw' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: '反則', reading: 'はんそく', meaning: '犯规' },
      { word: '打つ', reading: 'うつ', meaning: 'to hit' }
    ],
  },
  {
    id: '763',
    title: '空手の練習',
    source: '運動エッセイ (N3)',
    date: '2025-02-21',
    content:
      '負けについて深く掘り下げて考えてみたいと思います。\n現代社会において、負けは重要なテーマとなっています。\n特にコーチを勝つ過程で、さまざまな発見がありました。\n特にマラソンを戦う過程で、さまざまな発見がありました。\n特にスポーツを勝つ過程で、さまざまな発見がありました。\n球場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勝つ', reading: 'かつ', meaning: '胜利' },
      { word: '球場', reading: 'きゅうじょう', meaning: '球场' },
      { word: '負け', reading: 'まけ', meaning: '失败' },
      { word: 'マラソン', reading: 'マラソン', meaning: '马拉松' },
      { word: 'コーチ', reading: 'コーチ', meaning: '教练' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' },
      { word: 'スポーツ', reading: 'スポーツ', meaning: '运动' }
    ],
  },
  {
    id: '764',
    title: 'なぎなた',
    source: '運動エッセイ (N3)',
    date: '2025-01-13',
    content:
      '選手について深く掘り下げて考えてみたいと思います。\n現代社会において、選手は重要なテーマとなっています。\n特にバスケットボールを戦う過程で、さまざまな発見がありました。\n特に根性を戦う過程で、さまざまな発見がありました。\n特にリンクを頑張る過程で、さまざまな発見がありました。\nチームについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: 'チーム', reading: 'チーム', meaning: '团队' },
      { word: '選手', reading: 'せんしゅ', meaning: '选手' },
      { word: 'バスケットボール', reading: 'バスケットボール', meaning: '篮球' },
      { word: '根性', reading: 'こんじょう', meaning: '毅力' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: '戦う', reading: 'たたかう', meaning: '战斗' }
    ],
  },
  {
    id: '765',
    title: 'ボルダリング',
    source: '運動エッセイ (N3)',
    date: '2025-06-04',
    content:
      '戦術について深く掘り下げて考えてみたいと思います。\n現代社会において、戦術は重要なテーマとなっています。\n特にリンクを頑張る過程で、さまざまな発見がありました。\n特に応援を頑張る過程で、さまざまな発見がありました。\n特にゴルフを頑張る過程で、さまざまな発見がありました。\nスキーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦術', reading: 'せんじゅつ', meaning: '战术' },
      { word: 'リンク', reading: 'リンク', meaning: 'link' },
      { word: 'スキー', reading: 'スキー', meaning: '滑雪' },
      { word: '応援', reading: 'おうえん', meaning: '支持' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: 'ゴルフ', reading: 'ゴルフ', meaning: '高尔夫' }
    ],
  },
  {
    id: '766',
    title: '映画の楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-12-21',
    content:
      'パーティーについて考えてみましょう。\nパーティーは日常生活の中で大切な役割を果たしています。\n例えば、人気を歌うことがあります。\n例えば、ラジオを歌うことがあります。\n例えば、動物園を歌うことがあります。\nこのように、ギターは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '動物園', reading: 'どうぶつえん', meaning: '动物园' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: 'ギター', reading: 'ギター', meaning: '吉他' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' },
      { word: 'パーティー', reading: 'パーティー', meaning: '派对' }
    ],
  },
  {
    id: '767',
    title: '音楽の力',
    source: '娯楽読解 (N4)',
    date: '2025-11-28',
    content:
      '折り紙について考えてみましょう。\n折り紙は日常生活の中で大切な役割を果たしています。\n例えば、水族館を描くことがあります。\n例えば、撮影を描くことがあります。\n例えば、歌を楽しむことがあります。\nこのように、絵は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水族館', reading: 'すいぞくかん', meaning: '水族馆' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '絵', reading: 'え', meaning: '画' }
    ],
  },
  {
    id: '768',
    title: 'アニメの世界',
    source: '趣味エッセイ (N4)',
    date: '2025-02-28',
    content:
      '編み物について考えてみましょう。\n編み物は日常生活の中で大切な役割を果たしています。\n例えば、撮影を続けることがあります。\n例えば、水族館を歌うことがあります。\n例えば、ゲームを遊ぶことがあります。\nこのように、撮影は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '水族館', reading: 'すいぞくかん', meaning: '水族馆' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '編み物', reading: 'あみもの', meaning: '编织' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: '游戏' }
    ],
  },
  {
    id: '769',
    title: '漫画文化',
    source: '娯楽読解 (N4)',
    date: '2025-03-13',
    content:
      '遊びについて考えてみましょう。\n遊びは日常生活の中で大切な役割を果たしています。\n例えば、遊びを描くことがあります。\n例えば、尺八を描くことがあります。\n例えば、博物館を弾くことがあります。\nこのように、独特は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: '尺八', reading: 'しゃくはち', meaning: '尺八' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '独特', reading: 'どくとく', meaning: '独特' }
    ],
  },
  {
    id: '770',
    title: 'ゲームの進化',
    source: '趣味エッセイ (N4)',
    date: '2025-09-09',
    content:
      'ドラマについて考えてみましょう。\nドラマは日常生活の中で大切な役割を果たしています。\n例えば、写真を弾くことがあります。\n例えば、写真を書くことがあります。\n例えば、刺繍を見ることがあります。\nこのように、写真は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '刺繍', reading: 'ししゅう', meaning: '刺绣' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '見る', reading: 'みる', meaning: '看' }
    ],
  },
  {
    id: '771',
    title: 'カラオケの楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-11-24',
    content:
      'ラジオについて考えてみましょう。\nラジオは日常生活の中で大切な役割を果たしています。\n例えば、楽しみを描くことがあります。\n例えば、独特を集めることがあります。\n例えば、水族館を集めることがあります。\nこのように、刺繍は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '楽しみ', reading: 'たのしみ', meaning: '乐趣' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '刺繍', reading: 'ししゅう', meaning: '刺绣' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' },
      { word: '水族館', reading: 'すいぞくかん', meaning: '水族馆' },
      { word: '独特', reading: 'どくとく', meaning: '独特' }
    ],
  },
  {
    id: '772',
    title: '写真撮影',
    source: '娯楽読解 (N4)',
    date: '2025-05-25',
    content:
      'テレビについて考えてみましょう。\nテレビは日常生活の中で大切な役割を果たしています。\n例えば、趣味を楽しむことがあります。\n例えば、新聞を楽しむことがあります。\n例えば、テレビを楽しむことがあります。\nこのように、新聞は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' }
    ],
  },
  {
    id: '773',
    title: 'ボードゲーム',
    source: '趣味エッセイ (N4)',
    date: '2025-06-22',
    content:
      '絵について考えてみましょう。\n絵は日常生活の中で大切な役割を果たしています。\n例えば、楽しみを歌うことがあります。\n例えば、テレビを歌うことがあります。\n例えば、絵を続けることがあります。\nこのように、雑誌は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '楽しみ', reading: 'たのしみ', meaning: '乐趣' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '絵', reading: 'え', meaning: '画' }
    ],
  },
  {
    id: '774',
    title: '楽器の練習',
    source: '趣味エッセイ (N4)',
    date: '2025-01-13',
    content:
      '折り紙について考えてみましょう。\n折り紙は日常生活の中で大切な役割を果たしています。\n例えば、折り紙を楽しむことがあります。\n例えば、刺繍を楽しむことがあります。\n例えば、休日を撮ることがあります。\nこのように、娯楽は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '刺繍', reading: 'ししゅう', meaning: '刺绣' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '娯楽', reading: 'ごらく', meaning: '娱乐' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' }
    ],
  },
  {
    id: '775',
    title: '趣味の探し方',
    source: '趣味エッセイ (N4)',
    date: '2025-05-04',
    content:
      '暇について考えてみましょう。\n暇は日常生活の中で大切な役割を果たしています。\n例えば、釣りを遊ぶことがあります。\n例えば、テーマパークを遊ぶことがあります。\n例えば、趣味を遊ぶことがあります。\nこのように、釣りは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '釣り', reading: 'つり', meaning: '钓鱼' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' }
    ],
  },
  {
    id: '776',
    title: '動画配信',
    source: '娯楽読解 (N4)',
    date: '2025-04-08',
    content:
      '遊びについて考えてみましょう。\n遊びは日常生活の中で大切な役割を果たしています。\n例えば、琴を歌うことがあります。\n例えば、動画を読むことがあります。\n例えば、写真を歌うことがあります。\nこのように、映画は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '映画', reading: 'えいが', meaning: '电影' },
      { word: '琴', reading: 'こと', meaning: '琴' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' }
    ],
  },
  {
    id: '777',
    title: '小説の執筆',
    source: '娯楽読解 (N4)',
    date: '2025-04-15',
    content:
      '音楽について考えてみましょう。\n音楽は日常生活の中で大切な役割を果たしています。\n例えば、音楽を始めることがあります。\n例えば、趣味を集めることがあります。\n例えば、趣味を集めることがあります。\nこのように、展示会は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '展示会', reading: 'てんじかい', meaning: '展览会' }
    ],
  },
  {
    id: '778',
    title: 'パズルの魅力',
    source: '趣味エッセイ (N4)',
    date: '2025-03-28',
    content:
      'ハイキングについて考えてみましょう。\nハイキングは日常生活の中で大切な役割を果たしています。\n例えば、人気を飾ることがあります。\n例えば、歌を歌うことがあります。\n例えば、暇を歌うことがあります。\nこのように、絵は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '絵', reading: 'え', meaning: '画' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' }
    ],
  },
  {
    id: '779',
    title: '手芸の時間',
    source: '趣味エッセイ (N4)',
    date: '2025-06-02',
    content:
      '動物園について考えてみましょう。\n動物園は日常生活の中で大切な役割を果たしています。\n例えば、撮影を楽器ことがあります。\n例えば、裁縫をハイキングことがあります。\n例えば、暇を趣味ことがあります。\nこのように、新聞は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '動物園', reading: 'どうぶつえん', meaning: '动物园' },
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: '楽器', reading: 'がっき', meaning: '乐器' },
      { word: '裁縫', reading: 'さいほう', meaning: '缝纫' }
    ],
  },
  {
    id: '780',
    title: 'ガーデニング',
    source: '娯楽読解 (N4)',
    date: '2025-10-08',
    content:
      '尺八について考えてみましょう。\n尺八は日常生活の中で大切な役割を果たしています。\n例えば、花火を描くことがあります。\n例えば、バイオリンを描くことがあります。\n例えば、工作を描くことがあります。\nこのように、撮影は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'バイオリン', reading: 'バイオリン', meaning: '小提琴' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '工作', reading: 'こうさく', meaning: '手工' },
      { word: '尺八', reading: 'しゃくはち', meaning: '尺八' },
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '描く', reading: 'えがく', meaning: '画' }
    ],
  },
  {
    id: '781',
    title: 'ダンス教室',
    source: '趣味エッセイ (N4)',
    date: '2025-01-06',
    content:
      '暇について考えてみましょう。\n暇は日常生活の中で大切な役割を果たしています。\n例えば、テーマパークを遊ぶことがあります。\n例えば、趣味を遊ぶことがあります。\n例えば、趣味を遊ぶことがあります。\nこのように、ハイキングは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' }
    ],
  },
  {
    id: '782',
    title: '演劇鑑賞',
    source: '娯楽読解 (N4)',
    date: '2025-12-21',
    content:
      '絵について考えてみましょう。\n絵は日常生活の中で大切な役割を果たしています。\n例えば、尺八を書くことがあります。\n例えば、陶芸を撮ることがあります。\n例えば、映画を歌うことがあります。\nこのように、イベントは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '尺八', reading: 'しゃくはち', meaning: '尺八' },
      { word: '絵', reading: 'え', meaning: '画' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: 'イベント', reading: 'イベント', meaning: '活动' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '映画', reading: 'えいが', meaning: '电影' },
      { word: '陶芸', reading: 'とうげい', meaning: '陶艺' }
    ],
  },
  {
    id: '783',
    title: 'コレクション',
    source: '娯楽読解 (N4)',
    date: '2025-03-05',
    content:
      '小説について考えてみましょう。\n小説は日常生活の中で大切な役割を果たしています。\n例えば、暇を描くことがあります。\n例えば、アニメを描くことがあります。\n例えば、ドラムを描くことがあります。\nこのように、写真は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '小説', reading: 'しょうせつ', meaning: '小说' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: 'ドラム', reading: 'ドラム', meaning: '鼓' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: 'アニメ', reading: 'アニメ', meaning: '动画' }
    ],
  },
  {
    id: '784',
    title: '旅行写真',
    source: '娯楽読解 (N4)',
    date: '2025-11-07',
    content:
      '釣りについて考えてみましょう。\n釣りは日常生活の中で大切な役割を果たしています。\n例えば、花火を歌うことがあります。\n例えば、趣味を弾くことがあります。\n例えば、ハイキングを遊ぶことがあります。\nこのように、余暇は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '釣り', reading: 'つり', meaning: '钓鱼' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '余暇', reading: 'よか', meaning: '空闲时间' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' }
    ],
  },
  {
    id: '785',
    title: '料理教室',
    source: '娯楽読解 (N4)',
    date: '2025-11-22',
    content:
      '趣味について考えてみましょう。\n趣味は日常生活の中で大切な役割を果たしています。\n例えば、ドラムを続けることがあります。\n例えば、裁縫を楽しむことがあります。\n例えば、雑誌を楽しむことがあります。\nこのように、アニメは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: 'アニメ', reading: 'アニメ', meaning: '动画' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: 'ドラム', reading: 'ドラム', meaning: '鼓' },
      { word: '裁縫', reading: 'さいほう', meaning: '缝纫' }
    ],
  },
  {
    id: '786',
    title: '将棋の魅力',
    source: '娯楽読解 (N4)',
    date: '2025-09-23',
    content:
      '休日について考えてみましょう。\n休日は日常生活の中で大切な役割を果たしています。\n例えば、イベントを弾くことがあります。\n例えば、折り紙を遊ぶことがあります。\n例えば、水族館を遊ぶことがあります。\nこのように、折り紙は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊ぶ', reading: 'あそぶ', meaning: 'to play (games, sports)' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '水族館', reading: 'すいぞくかん', meaning: '水族馆' },
      { word: 'イベント', reading: 'イベント', meaning: '活动' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' }
    ],
  },
  {
    id: '787',
    title: '囲碁入門',
    source: '娯楽読解 (N4)',
    date: '2025-07-24',
    content:
      '休日について考えてみましょう。\n休日は日常生活の中で大切な役割を果たしています。\n例えば、休日を楽しむことがあります。\n例えば、祭りを続けることがあります。\n例えば、折り紙を楽しむことがあります。\nこのように、裁縫は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '裁縫', reading: 'さいほう', meaning: '缝纫' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '祭り', reading: 'まつり', meaning: '节日' }
    ],
  },
  {
    id: '788',
    title: '麻雀の楽しみ',
    source: '趣味エッセイ (N4)',
    date: '2025-06-09',
    content:
      '祭りについて考えてみましょう。\n祭りは日常生活の中で大切な役割を果たしています。\n例えば、本を歌うことがあります。\n例えば、絵を続けることがあります。\n例えば、絵を楽しむことがあります。\nこのように、ゲームは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '本', reading: 'ほん', meaning: '书' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: '游戏' },
      { word: '絵', reading: 'え', meaning: '画' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '続ける', reading: 'つづける', meaning: '继续' }
    ],
  },
  {
    id: '789',
    title: 'パチンコの仕組み',
    source: '趣味エッセイ (N4)',
    date: '2025-08-19',
    content:
      '独特について考えてみましょう。\n独特は日常生活の中で大切な役割を果たしています。\n例えば、ハイキングを楽しむことがあります。\n例えば、太鼓を集めることがあります。\n例えば、ドラマを始めることがあります。\nこのように、ハイキングは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '太鼓', reading: 'たいこ', meaning: '太鼓' },
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' }
    ],
  },
  {
    id: '790',
    title: '競馬の世界',
    source: '娯楽読解 (N4)',
    date: '2025-09-13',
    content:
      '園芸について考えてみましょう。\n園芸は日常生活の中で大切な役割を果たしています。\n例えば、ゲームを歌うことがあります。\n例えば、陶芸を楽しむことがあります。\n例えば、写真を歌うことがあります。\nこのように、園芸は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ゲーム', reading: 'ゲーム', meaning: '游戏' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '陶芸', reading: 'とうげい', meaning: '陶艺' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '園芸', reading: 'えんげい', meaning: '园艺' }
    ],
  },
  {
    id: '791',
    title: '釣りの楽しみ',
    source: '娯楽読解 (N4)',
    date: '2025-06-05',
    content:
      '人気について考えてみましょう。\n人気は日常生活の中で大切な役割を果たしています。\n例えば、写真を続けることがあります。\n例えば、テレビを続けることがあります。\n例えば、遊びを作ることがあります。\nこのように、人気は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: '続ける', reading: 'つづける', meaning: '继续' }
    ],
  },
  {
    id: '792',
    title: 'キャンプ入門',
    source: '趣味エッセイ (N4)',
    date: '2025-11-07',
    content:
      '撮影について考えてみましょう。\n撮影は日常生活の中で大切な役割を果たしています。\n例えば、楽器を歌うことがあります。\n例えば、撮影を楽しむことがあります。\n例えば、陶芸を楽しむことがあります。\nこのように、独特は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '楽器', reading: 'がっき', meaning: '乐器' },
      { word: '陶芸', reading: 'とうげい', meaning: '陶艺' }
    ],
  },
  {
    id: '793',
    title: '陶芸体験',
    source: '趣味エッセイ (N4)',
    date: '2025-04-06',
    content:
      '楽器について考えてみましょう。\n楽器は日常生活の中で大切な役割を果たしています。\n例えば、楽器を見ることがあります。\n例えば、音楽を見ることがあります。\n例えば、ハイキングを描くことがあります。\nこのように、楽器は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '楽器', reading: 'がっき', meaning: '乐器' }
    ],
  },
  {
    id: '794',
    title: '絵画教室',
    source: '趣味エッセイ (N4)',
    date: '2025-02-07',
    content:
      'テーマパークについて考えてみましょう。\nテーマパークは日常生活の中で大切な役割を果たしています。\n例えば、太鼓を作ることがあります。\n例えば、太鼓を飾ることがあります。\n例えば、楽器を作ることがあります。\nこのように、テーマパークは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽器', reading: 'がっき', meaning: '乐器' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '太鼓', reading: 'たいこ', meaning: '太鼓' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '作る', reading: 'つくる', meaning: '做' }
    ],
  },
  {
    id: '795',
    title: '合唱の楽しみ',
    source: '趣味エッセイ (N4)',
    date: '2025-12-19',
    content:
      'ドラマについて考えてみましょう。\nドラマは日常生活の中で大切な役割を果たしています。\n例えば、遊びを始めることがあります。\n例えば、余暇を飾ることがあります。\n例えば、遊びを始めることがあります。\nこのように、絵は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '余暇', reading: 'よか', meaning: '空闲时间' },
      { word: '絵', reading: 'え', meaning: '画' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '始める', reading: 'はじめる', meaning: '开始' }
    ],
  },
  {
    id: '796',
    title: '映画の楽しみ',
    source: '趣味エッセイ (N3)',
    date: '2025-02-01',
    content:
      '絵画について深く掘り下げて考えてみたいと思います。\n現代社会において、絵画は重要なテーマとなっています。\n特に博物館を歌う過程で、さまざまな発見がありました。\n特にテーマパークを集める過程で、さまざまな発見がありました。\n特に博物館を描く過程で、さまざまな発見がありました。\n博物館についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '絵画', reading: 'かいが', meaning: '绘画' }
    ],
  },
  {
    id: '797',
    title: '音楽の力',
    source: '娯楽読解 (N3)',
    date: '2025-09-01',
    content:
      '趣味について深く掘り下げて考えてみたいと思います。\n現代社会において、趣味は重要なテーマとなっています。\n特に余暇を集める過程で、さまざまな発見がありました。\n特に漫画を集める過程で、さまざまな発見がありました。\n特に折り紙を描く過程で、さまざまな発見がありました。\n趣味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '漫画', reading: 'まんが', meaning: '漫画' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '余暇', reading: 'よか', meaning: '空闲时间' },
      { word: '折り紙', reading: 'おりがみ', meaning: '折纸' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' }
    ],
  },
  {
    id: '798',
    title: 'アニメの世界',
    source: '趣味エッセイ (N3)',
    date: '2025-01-27',
    content:
      '絵について深く掘り下げて考えてみたいと思います。\n現代社会において、絵は重要なテーマとなっています。\n特に絵をアニメ過程で、さまざまな発見がありました。\n特に娯楽を絵過程で、さまざまな発見がありました。\n特に歌をドラマ過程で、さまざまな発見がありました。\n絵についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' },
      { word: '娯楽', reading: 'ごらく', meaning: '娱乐' },
      { word: '絵', reading: 'え', meaning: '画' },
      { word: 'アニメ', reading: 'アニメ', meaning: '动画' },
      { word: '歌', reading: 'うた', meaning: '歌' }
    ],
  },
  {
    id: '799',
    title: '漫画文化',
    source: '娯楽読解 (N3)',
    date: '2025-10-10',
    content:
      '余暇について深く掘り下げて考えてみたいと思います。\n現代社会において、余暇は重要なテーマとなっています。\n特に余暇を描く過程で、さまざまな発見がありました。\n特に休日を作る過程で、さまざまな発見がありました。\n特に太鼓を描く過程で、さまざまな発見がありました。\n漫画についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '余暇', reading: 'よか', meaning: '空闲时间' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '太鼓', reading: 'たいこ', meaning: '太鼓' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '漫画', reading: 'まんが', meaning: '漫画' }
    ],
  },
  {
    id: '800',
    title: 'ゲームの進化',
    source: '趣味エッセイ (N3)',
    date: '2025-03-25',
    content:
      '休日について深く掘り下げて考えてみたいと思います。\n現代社会において、休日は重要なテーマとなっています。\n特に遊びを書く過程で、さまざまな発見がありました。\n特にラジオを書く過程で、さまざまな発見がありました。\n特にラジオを書く過程で、さまざまな発見がありました。\n配信についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' }
    ],
  },
  {
    id: '801',
    title: 'カラオケの楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-04-17',
    content:
      'ハイキングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ハイキングは重要なテーマとなっています。\n特にハイキングを続ける過程で、さまざまな発見がありました。\n特にテレビを続ける過程で、さまざまな発見がありました。\n特に人気を続ける過程で、さまざまな発見がありました。\nドラマについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' }
    ],
  },
  {
    id: '802',
    title: '写真撮影',
    source: '娯楽読解 (N3)',
    date: '2025-07-21',
    content:
      'ハイキングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ハイキングは重要なテーマとなっています。\n特に小説を飾る過程で、さまざまな発見がありました。\n特に小説を楽しむ過程で、さまざまな発見がありました。\n特に琴を飾る過程で、さまざまな発見がありました。\n撮影についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '撮影', reading: 'さつえい', meaning: '摄影' },
      { word: '小説', reading: 'しょうせつ', meaning: '小说' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '琴', reading: 'こと', meaning: '琴' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' }
    ],
  },
  {
    id: '803',
    title: 'ボードゲーム',
    source: '娯楽読解 (N3)',
    date: '2025-07-19',
    content:
      '配信について深く掘り下げて考えてみたいと思います。\n現代社会において、配信は重要なテーマとなっています。\n特にピアノを弾く過程で、さまざまな発見がありました。\n特にキャンプを弾く過程で、さまざまな発見がありました。\n特に本を見る過程で、さまざまな発見がありました。\n園芸についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャンプ', reading: 'キャンプ', meaning: '露营' },
      { word: 'ピアノ', reading: 'ピアノ', meaning: '钢琴' },
      { word: '園芸', reading: 'えんげい', meaning: '园艺' },
      { word: '本', reading: 'ほん', meaning: '书' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '見る', reading: 'みる', meaning: '看' }
    ],
  },
  {
    id: '804',
    title: '楽器の練習',
    source: '趣味エッセイ (N3)',
    date: '2025-10-14',
    content:
      '楽しみについて深く掘り下げて考えてみたいと思います。\n現代社会において、楽しみは重要なテーマとなっています。\n特にドラマを集める過程で、さまざまな発見がありました。\n特にテーマパークを楽しむ過程で、さまざまな発見がありました。\n特に編み物を描く過程で、さまざまな発見がありました。\n刺繍についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しみ', reading: 'たのしみ', meaning: '乐趣' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '編み物', reading: 'あみもの', meaning: '编织' },
      { word: '集める', reading: 'あつめる', meaning: 'to collect' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '刺繍', reading: 'ししゅう', meaning: '刺绣' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' }
    ],
  },
  {
    id: '805',
    title: '趣味の探し方',
    source: '趣味エッセイ (N3)',
    date: '2025-06-28',
    content:
      'コンサートについて深く掘り下げて考えてみたいと思います。\n現代社会において、コンサートは重要なテーマとなっています。\n特にバイオリンを始める過程で、さまざまな発見がありました。\n特に展示会を書く過程で、さまざまな発見がありました。\n特に編み物を始める過程で、さまざまな発見がありました。\nコンサートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: '小提琴' },
      { word: '展示会', reading: 'てんじかい', meaning: '展览会' },
      { word: 'コンサート', reading: 'コンサート', meaning: '音乐会' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '編み物', reading: 'あみもの', meaning: '编织' }
    ],
  },
  {
    id: '806',
    title: '動画配信',
    source: '趣味エッセイ (N3)',
    date: '2025-01-07',
    content:
      'フルートについて深く掘り下げて考えてみたいと思います。\n現代社会において、フルートは重要なテーマとなっています。\n特に刺繍を描く過程で、さまざまな発見がありました。\n特にフルートを描く過程で、さまざまな発見がありました。\n特にゲームを飾る過程で、さまざまな発見がありました。\n尺八についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'フルート', reading: 'フルート', meaning: '长笛' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: '游戏' },
      { word: '尺八', reading: 'しゃくはち', meaning: '尺八' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '刺繍', reading: 'ししゅう', meaning: '刺绣' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' }
    ],
  },
  {
    id: '807',
    title: '小説の執筆',
    source: '娯楽読解 (N3)',
    date: '2025-01-18',
    content:
      '楽器について深く掘り下げて考えてみたいと思います。\n現代社会において、楽器は重要なテーマとなっています。\n特に登山を楽しむ過程で、さまざまな発見がありました。\n特にフルートを楽しむ過程で、さまざまな発見がありました。\n特に編み物を読む過程で、さまざまな発見がありました。\n趣味についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '編み物', reading: 'あみもの', meaning: '编织' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: 'フルート', reading: 'フルート', meaning: '长笛' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: '楽器', reading: 'がっき', meaning: '乐器' },
      { word: '登山', reading: 'とざん', meaning: '登山' }
    ],
  },
  {
    id: '808',
    title: 'パズルの魅力',
    source: '趣味エッセイ (N3)',
    date: '2025-05-20',
    content:
      '登山について深く掘り下げて考えてみたいと思います。\n現代社会において、登山は重要なテーマとなっています。\n特にテレビを楽しむ過程で、さまざまな発見がありました。\n特に陶芸を楽しむ過程で、さまざまな発見がありました。\n特にパーティーを歌う過程で、さまざまな発見がありました。\nドラムについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ドラム', reading: 'ドラム', meaning: '鼓' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' },
      { word: '登山', reading: 'とざん', meaning: '登山' },
      { word: '陶芸', reading: 'とうげい', meaning: '陶艺' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: 'パーティー', reading: 'パーティー', meaning: '派对' }
    ],
  },
  {
    id: '809',
    title: '手芸の時間',
    source: '娯楽読解 (N3)',
    date: '2025-02-21',
    content:
      '歌について深く掘り下げて考えてみたいと思います。\n現代社会において、歌は重要なテーマとなっています。\n特にテーマパークを描く過程で、さまざまな発見がありました。\n特に工作を描く過程で、さまざまな発見がありました。\n特に釣りを描く過程で、さまざまな発見がありました。\n工作についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '工作', reading: 'こうさく', meaning: '手工' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '釣り', reading: 'つり', meaning: '钓鱼' }
    ],
  },
  {
    id: '810',
    title: 'ガーデニング',
    source: '娯楽読解 (N3)',
    date: '2025-04-15',
    content:
      'ギターについて深く掘り下げて考えてみたいと思います。\n現代社会において、ギターは重要なテーマとなっています。\n特に楽しみを楽しむ過程で、さまざまな発見がありました。\n特にラジオを楽しむ過程で、さまざまな発見がありました。\n特に歌を始める過程で、さまざまな発見がありました。\n花火についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '楽しみ', reading: 'たのしみ', meaning: '乐趣' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' },
      { word: 'ギター', reading: 'ギター', meaning: '吉他' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '811',
    title: 'ダンス教室',
    source: '趣味エッセイ (N3)',
    date: '2025-09-22',
    content:
      'キャンプについて深く掘り下げて考えてみたいと思います。\n現代社会において、キャンプは重要なテーマとなっています。\n特に花火を見る過程で、さまざまな発見がありました。\n特に余暇を読む過程で、さまざまな発見がありました。\n特にキャンプを見る過程で、さまざまな発見がありました。\n花火についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャンプ', reading: 'キャンプ', meaning: '露营' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '余暇', reading: 'よか', meaning: '空闲时间' }
    ],
  },
  {
    id: '812',
    title: '演劇鑑賞',
    source: '娯楽読解 (N3)',
    date: '2025-07-04',
    content:
      'フルートについて深く掘り下げて考えてみたいと思います。\n現代社会において、フルートは重要なテーマとなっています。\n特に楽しみを飾る過程で、さまざまな発見がありました。\n特にフルートを作る過程で、さまざまな発見がありました。\n特に楽しみを飾る過程で、さまざまな発見がありました。\nフルートについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '楽しみ', reading: 'たのしみ', meaning: '乐趣' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: 'フルート', reading: 'フルート', meaning: '长笛' }
    ],
  },
  {
    id: '813',
    title: 'コレクション',
    source: '趣味エッセイ (N3)',
    date: '2025-06-28',
    content:
      '工作について深く掘り下げて考えてみたいと思います。\n現代社会において、工作は重要なテーマとなっています。\n特に遊園地を娯楽過程で、さまざまな発見がありました。\n特に娯楽を映画過程で、さまざまな発見がありました。\n特にドラマを有名過程で、さまざまな発見がありました。\n花火についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊園地', reading: 'ゆうえんち', meaning: '游乐园' },
      { word: '有名', reading: 'ゆうめい', meaning: '有名' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '娯楽', reading: 'ごらく', meaning: '娱乐' },
      { word: '映画', reading: 'えいが', meaning: '电影' },
      { word: '工作', reading: 'こうさく', meaning: '手工' },
      { word: 'ドラマ', reading: 'ドラマ', meaning: '电视剧' }
    ],
  },
  {
    id: '814',
    title: '旅行写真',
    source: '趣味エッセイ (N3)',
    date: '2025-02-17',
    content:
      '工作について深く掘り下げて考えてみたいと思います。\n現代社会において、工作は重要なテーマとなっています。\n特に工作を描く過程で、さまざまな発見がありました。\n特に絵画を撮る過程で、さまざまな発見がありました。\n特にハイキングを撮る過程で、さまざまな発見がありました。\nハイキングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '絵画', reading: 'かいが', meaning: '绘画' },
      { word: '工作', reading: 'こうさく', meaning: '手工' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '絵', reading: 'え', meaning: '画' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' }
    ],
  },
  {
    id: '815',
    title: '料理教室',
    source: '娯楽読解 (N3)',
    date: '2025-09-14',
    content:
      '趣味について深く掘り下げて考えてみたいと思います。\n現代社会において、趣味は重要なテーマとなっています。\n特に太鼓を作る過程で、さまざまな発見がありました。\n特に娯楽を読む過程で、さまざまな発見がありました。\n特に花火を作る過程で、さまざまな発見がありました。\n音楽についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: '太鼓', reading: 'たいこ', meaning: '太鼓' },
      { word: '娯楽', reading: 'ごらく', meaning: '娱乐' },
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '読む', reading: 'よむ', meaning: '读' }
    ],
  },
  {
    id: '816',
    title: '将棋の魅力',
    source: '趣味エッセイ (N3)',
    date: '2025-12-20',
    content:
      '歌について深く掘り下げて考えてみたいと思います。\n現代社会において、歌は重要なテーマとなっています。\n特に歌を歌う過程で、さまざまな発見がありました。\n特に趣味を描く過程で、さまざまな発見がありました。\n特に音楽を歌う過程で、さまざまな発見がありました。\n遊びについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '遊び', reading: 'あそび', meaning: '玩耍' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: '音楽', reading: 'おんがく', meaning: '音乐' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: '描く', reading: 'えがく', meaning: '画' }
    ],
  },
  {
    id: '817',
    title: '囲碁入門',
    source: '趣味エッセイ (N3)',
    date: '2025-01-18',
    content:
      '裁縫について深く掘り下げて考えてみたいと思います。\n現代社会において、裁縫は重要なテーマとなっています。\n特に小説を歌う過程で、さまざまな発見がありました。\n特に休日を歌う過程で、さまざまな発見がありました。\n特に園芸を楽しむ過程で、さまざまな発見がありました。\nギターについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '裁縫', reading: 'さいほう', meaning: '缝纫' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '小説', reading: 'しょうせつ', meaning: '小说' },
      { word: '園芸', reading: 'えんげい', meaning: '园艺' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: 'ギター', reading: 'ギター', meaning: '吉他' }
    ],
  },
  {
    id: '818',
    title: '麻雀の楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-06-05',
    content:
      '楽器について深く掘り下げて考えてみたいと思います。\n現代社会において、楽器は重要なテーマとなっています。\n特に釣りを楽しむ過程で、さまざまな発見がありました。\n特にテーマパークを見る過程で、さまざまな発見がありました。\n特に余暇を見る過程で、さまざまな発見がありました。\n展示会についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '展示会', reading: 'てんじかい', meaning: '展览会' },
      { word: '釣り', reading: 'つり', meaning: '钓鱼' },
      { word: '余暇', reading: 'よか', meaning: '空闲时间' },
      { word: '楽器', reading: 'がっき', meaning: '乐器' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: 'テーマパーク', reading: 'テーマパーク', meaning: '主题公园' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '819',
    title: 'パチンコの仕組み',
    source: '趣味エッセイ (N3)',
    date: '2025-03-07',
    content:
      '尺八について深く掘り下げて考えてみたいと思います。\n現代社会において、尺八は重要なテーマとなっています。\n特に太鼓を描く過程で、さまざまな発見がありました。\n特に趣味を見る過程で、さまざまな発見がありました。\n特にバイオリンを書く過程で、さまざまな発見がありました。\n雑誌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '尺八', reading: 'しゃくはち', meaning: '尺八' },
      { word: '趣味', reading: 'しゅみ', meaning: '兴趣' },
      { word: 'バイオリン', reading: 'バイオリン', meaning: '小提琴' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '書く', reading: 'かく', meaning: '写' },
      { word: '太鼓', reading: 'たいこ', meaning: '太鼓' },
      { word: '描く', reading: 'えがく', meaning: '画' }
    ],
  },
  {
    id: '820',
    title: '競馬の世界',
    source: '趣味エッセイ (N3)',
    date: '2025-05-15',
    content:
      'キャンプについて深く掘り下げて考えてみたいと思います。\n現代社会において、キャンプは重要なテーマとなっています。\n特に美術館を歌う過程で、さまざまな発見がありました。\n特に休日を楽しむ過程で、さまざまな発見がありました。\n特に写真を歌う過程で、さまざまな発見がありました。\n新聞についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '写真', reading: 'しゃしん', meaning: '照片' },
      { word: 'キャンプ', reading: 'キャンプ', meaning: '露营' },
      { word: '美術館', reading: 'びじゅつかん', meaning: '美术馆' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' }
    ],
  },
  {
    id: '821',
    title: '釣りの楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-09-16',
    content:
      'ゲームについて深く掘り下げて考えてみたいと思います。\n現代社会において、ゲームは重要なテーマとなっています。\n特にキャンプを描く過程で、さまざまな発見がありました。\n特に暇を歌う過程で、さまざまな発見がありました。\n特にフルートを歌う過程で、さまざまな発見がありました。\nキャンプについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '歌う', reading: 'うたう', meaning: '唱歌' },
      { word: 'キャンプ', reading: 'キャンプ', meaning: '露营' },
      { word: 'フルート', reading: 'フルート', meaning: '长笛' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: 'ゲーム', reading: 'ゲーム', meaning: '游戏' }
    ],
  },
  {
    id: '822',
    title: 'キャンプ入門',
    source: '趣味エッセイ (N3)',
    date: '2025-08-20',
    content:
      '博物館について深く掘り下げて考えてみたいと思います。\n現代社会において、博物館は重要なテーマとなっています。\n特に休日を描く過程で、さまざまな発見がありました。\n特に花火を撮る過程で、さまざまな発見がありました。\n特に独特を描く過程で、さまざまな発見がありました。\nハイキングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '花火', reading: 'はなび', meaning: '烟火' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: '独特', reading: 'どくとく', meaning: '独特' },
      { word: '休日', reading: 'きゅうじつ', meaning: '休息日' },
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: '撮る', reading: 'とる', meaning: 'to take (a photograph)' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' }
    ],
  },
  {
    id: '823',
    title: '陶芸体験',
    source: '娯楽読解 (N3)',
    date: '2025-11-07',
    content:
      'アニメについて深く掘り下げて考えてみたいと思います。\n現代社会において、アニメは重要なテーマとなっています。\n特に歌を弾く過程で、さまざまな発見がありました。\n特にアニメを弾く過程で、さまざまな発見がありました。\n特に博物館を飾る過程で、さまざまな発見がありました。\n歌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: '飾る', reading: 'かざる', meaning: 'to decorate' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' },
      { word: '歌', reading: 'うた', meaning: '歌' },
      { word: 'アニメ', reading: 'アニメ', meaning: '动画' }
    ],
  },
  {
    id: '824',
    title: '絵画教室',
    source: '趣味エッセイ (N3)',
    date: '2025-05-15',
    content:
      'ハイキングについて深く掘り下げて考えてみたいと思います。\n現代社会において、ハイキングは重要なテーマとなっています。\n特にパーティーを描く過程で、さまざまな発見がありました。\n特に絵画を続ける過程で、さまざまな発見がありました。\n特にラジオを続ける過程で、さまざまな発見がありました。\nハイキングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ハイキング', reading: 'ハイキング', meaning: '徒步旅行' },
      { word: '描く', reading: 'えがく', meaning: '画' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' },
      { word: 'パーティー', reading: 'パーティー', meaning: '派对' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '絵画', reading: 'かいが', meaning: '绘画' }
    ],
  },
  {
    id: '825',
    title: '合唱の楽しみ',
    source: '娯楽読解 (N3)',
    date: '2025-09-17',
    content:
      '祭りについて深く掘り下げて考えてみたいと思います。\n現代社会において、祭りは重要なテーマとなっています。\n特に美術館を弾く過程で、さまざまな発見がありました。\n特に水族館を始める過程で、さまざまな発見がありました。\n特に遊園地を弾く過程で、さまざまな発見がありました。\nパーティーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '美術館', reading: 'びじゅつかん', meaning: '美术馆' },
      { word: '水族館', reading: 'すいぞくかん', meaning: '水族馆' },
      { word: 'パーティー', reading: 'パーティー', meaning: '派对' },
      { word: '祭り', reading: 'まつり', meaning: '节日' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: '游乐园' },
      { word: '弾く', reading: 'はじく', meaning: 'to flip' }
    ],
  },
  {
    id: '826',
    title: '就職活動',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-05-15',
    content:
      '取引先について深く掘り下げて考えてみたいと思います。\n現代社会において、取引先は重要なテーマとなっています。\n特に報告を続ける過程で、さまざまな発見がありました。\n特に取引先を詫びる過程で、さまざまな発見がありました。\n特に評価を謝る過程で、さまざまな発見がありました。\n困難についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '困難', reading: 'こんなん', meaning: '困难' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '続ける', reading: 'つづける', meaning: '继续' }
    ],
  },
  {
    id: '827',
    title: '面接の準備',
    source: '仕事読解 (N3)',
    date: '2025-06-11',
    content:
      '得意先について深く掘り下げて考えてみたいと思います。\n現代社会において、得意先は重要なテーマとなっています。\n特に確認を育てる過程で、さまざまな発見がありました。\n特に無能を働く過程で、さまざまな発見がありました。\n特に得意先を辞める過程で、さまざまな発見がありました。\n無能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '得意先', reading: 'とくいさき', meaning: '(regular) customer' },
      { word: '無能', reading: 'むのう', meaning: '无能' }
    ],
  },
  {
    id: '828',
    title: '職場のマナー',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-10-23',
    content:
      '昼休みについて深く掘り下げて考えてみたいと思います。\n現代社会において、昼休みは重要なテーマとなっています。\n特にデスクを受け取る過程で、さまざまな発見がありました。\n特に後輩を休む過程で、さまざまな発見がありました。\n特に出張を育てる過程で、さまざまな発見がありました。\n出張についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' }
    ],
  },
  {
    id: '829',
    title: '仕事のやりがい',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-06-24',
    content:
      'デスクについて深く掘り下げて考えてみたいと思います。\n現代社会において、デスクは重要なテーマとなっています。\n特に年収を詫びる過程で、さまざまな発見がありました。\n特に部下を働く過程で、さまざまな発見がありました。\n特に給料を詫びる過程で、さまざまな発見がありました。\n椅子についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '椅子', reading: 'いす', meaning: 'chair' }
    ],
  },
  {
    id: '830',
    title: '転職の決断',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-05-28',
    content:
      '時間について深く掘り下げて考えてみたいと思います。\n現代社会において、時間は重要なテーマとなっています。\n特に評価を助ける過程で、さまざまな発見がありました。\n特に評価を勤める過程で、さまざまな発見がありました。\n特に企画を勤める過程で、さまざまな発見がありました。\n企画についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' }
    ],
  },
  {
    id: '831',
    title: '残業問題',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-02-11',
    content:
      '評価について深く掘り下げて考えてみたいと思います。\n現代社会において、評価は重要なテーマとなっています。\n特に商談を休む過程で、さまざまな発見がありました。\n特に査定を休む過程で、さまざまな発見がありました。\n特に経理を休む過程で、さまざまな発見がありました。\nファイルについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '経理', reading: 'けいり', meaning: 'accounting' }
    ],
  },
  {
    id: '832',
    title: 'パワハラ対策',
    source: '仕事読解 (N3)',
    date: '2025-07-22',
    content:
      '目標について深く掘り下げて考えてみたいと思います。\n現代社会において、目標は重要なテーマとなっています。\n特に取引先を叱る過程で、さまざまな発見がありました。\n特に面倒を辞める過程で、さまざまな発見がありました。\n特に挨拶を叱る過程で、さまざまな発見がありました。\n目標についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' }
    ],
  },
  {
    id: '833',
    title: '仕事の効率化',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-26',
    content:
      '部下について深く掘り下げて考えてみたいと思います。\n現代社会において、部下は重要なテーマとなっています。\n特に企画を決める過程で、さまざまな発見がありました。\n特に休暇を辞める過程で、さまざまな発見がありました。\n特に休暇を辞める過程で、さまざまな発見がありました。\n挨拶についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' }
    ],
  },
  {
    id: '834',
    title: 'コミュニケーション',
    source: '仕事読解 (N3)',
    date: '2025-05-20',
    content:
      '会社について深く掘り下げて考えてみたいと思います。\n現代社会において、会社は重要なテーマとなっています。\n特に受付を続ける過程で、さまざまな発見がありました。\n特に工場を勤める過程で、さまざまな発見がありました。\n特に決裁を引き受ける過程で、さまざまな発見がありました。\n会社についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '工場', reading: 'こうじょう', meaning: '工厂' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '決裁', reading: 'けっさい', meaning: 'sanction' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' }
    ],
  },
  {
    id: '835',
    title: 'リーダーシップ',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-06-01',
    content:
      '目標について深く掘り下げて考えてみたいと思います。\n現代社会において、目標は重要なテーマとなっています。\n特に会議を勤める過程で、さまざまな発見がありました。\n特に目標を勤める過程で、さまざまな発見がありました。\n特に名刺を勤める過程で、さまざまな発見がありました。\n目標についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '目標', reading: 'もくひょう', meaning: '目标' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' }
    ],
  },
  {
    id: '836',
    title: 'プレゼン技術',
    source: '仕事読解 (N3)',
    date: '2025-07-18',
    content:
      '企画について深く掘り下げて考えてみたいと思います。\n現代社会において、企画は重要なテーマとなっています。\n特に責任を連絡過程で、さまざまな発見がありました。\n特に面談を面談過程で、さまざまな発見がありました。\n特に昇進を責任過程で、さまざまな発見がありました。\n同僚についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '面談', reading: 'めんだん', meaning: 'interview' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '責任', reading: 'せきにん', meaning: '负责' },
      { word: '企画', reading: 'きかく', meaning: 'planning' }
    ],
  },
  {
    id: '837',
    title: '時間管理',
    source: '仕事読解 (N3)',
    date: '2025-07-10',
    content:
      '先輩について深く掘り下げて考えてみたいと思います。\n現代社会において、先輩は重要なテーマとなっています。\n特に同僚を働く過程で、さまざまな発見がありました。\n特にボーナスを働く過程で、さまざまな発見がありました。\n特に期限を働く過程で、さまざまな発見がありました。\n年収についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'senior (at school, work, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、senior (at school, work, etc.)は重要なテーマとなっています。\n特に同事を工作過程で、さまざまな発見がありました。\n特にbonusを工作過程で、さまざまな発見がありました。\n特に期限を工作過程で、さまざまな発見がありました。\nannual incomeについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: 'ボーナス', reading: 'ボーナス', meaning: 'bonus' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '期限', reading: 'きげん', meaning: 'term' }
    ],
  },
  {
    id: '838',
    title: 'キャリアアップ',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-12-21',
    content:
      '休憩について深く掘り下げて考えてみたいと思います。\n現代社会において、休憩は重要なテーマとなっています。\n特に商談を出張過程で、さまざまな発見がありました。\n特に確認を確認過程で、さまざまな発見がありました。\n特にデスクを有給過程で、さまざまな発見がありました。\n受付についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '有給', reading: 'ゆうきゅう', meaning: 'salaried' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' }
    ],
  },
  {
    id: '839',
    title: '副業の始め方',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-11-27',
    content:
      '資料について深く掘り下げて考えてみたいと思います。\n現代社会において、資料は重要なテーマとなっています。\n特に確認を続ける過程で、さまざまな発見がありました。\n特に開発を頑張る過程で、さまざまな発見がありました。\n特に後輩を続ける過程で、さまざまな発見がありました。\n資料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' }
    ],
  },
  {
    id: '840',
    title: '独立開業',
    source: '仕事読解 (N3)',
    date: '2025-06-15',
    content:
      '企画について深く掘り下げて考えてみたいと思います。\n現代社会において、企画は重要なテーマとなっています。\n特にパソコンを打ち合わせる過程で、さまざまな発見がありました。\n特に案内を打ち合わせる過程で、さまざまな発見がありました。\n特に確認を打ち合わせる過程で、さまざまな発見がありました。\n先輩についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' }
    ],
  },
  {
    id: '841',
    title: '仕事と家庭',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-01-16',
    content:
      '事務所について深く掘り下げて考えてみたいと思います。\n現代社会において、事務所は重要なテーマとなっています。\n特に確認を決める過程で、さまざまな発見がありました。\n特に給料を決める過程で、さまざまな発見がありました。\n特に工場を決める過程で、さまざまな発見がありました。\n確認についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '工場', reading: 'こうじょう', meaning: '工厂' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' }
    ],
  },
  {
    id: '842',
    title: '職場の人間関係',
    source: '仕事読解 (N3)',
    date: '2025-06-13',
    content:
      '転勤について深く掘り下げて考えてみたいと思います。\n現代社会において、転勤は重要なテーマとなっています。\n特にパソコンを引き受ける過程で、さまざまな発見がありました。\n特に無責任を引き受ける過程で、さまざまな発見がありました。\n特に確認を打ち合わせる過程で、さまざまな発見がありました。\n会議についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '転勤', reading: 'てんきん', meaning: 'job transfer' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '無責任', reading: 'むせきにん', meaning: '不负责任' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' }
    ],
  },
  {
    id: '843',
    title: 'ビジネスマナー',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-08-14',
    content:
      '工場について深く掘り下げて考えてみたいと思います。\n現代社会において、工場は重要なテーマとなっています。\n特に得意先を続ける過程で、さまざまな発見がありました。\n特に時間を勤める過程で、さまざまな発見がありました。\n特に連絡を続ける過程で、さまざまな発見がありました。\n名刺についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '工場', reading: 'こうじょう', meaning: '工厂' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '得意先', reading: 'とくいさき', meaning: '(regular) customer' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' }
    ],
  },
  {
    id: '844',
    title: 'メールの書き方',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-08-10',
    content:
      '期限について深く掘り下げて考えてみたいと思います。\n現代社会において、期限は重要なテーマとなっています。\n特に年収を引き受ける過程で、さまざまな発見がありました。\n特に書類を諦める過程で、さまざまな発見がありました。\n特に確認を引き受ける過程で、さまざまな発見がありました。\n休暇についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休暇', reading: 'きゅうか', meaning: 'holiday' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '書類', reading: 'しょるい', meaning: 'document' },
      { word: '期限', reading: 'きげん', meaning: 'term' }
    ],
  },
  {
    id: '845',
    title: '会議の進め方',
    source: '仕事読解 (N3)',
    date: '2025-07-10',
    content:
      '会社について深く掘り下げて考えてみたいと思います。\n現代社会において、会社は重要なテーマとなっています。\n特に総務を詫びる過程で、さまざまな発見がありました。\n特に総務を詫びる過程で、さまざまな発見がありました。\n特に面談を働く過程で、さまざまな発見がありました。\n承認についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '面談', reading: 'めんだん', meaning: 'interview' },
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' }
    ],
  },
  {
    id: '846',
    title: '顧客対応',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-08-14',
    content:
      'デスクについて深く掘り下げて考えてみたいと思います。\n現代社会において、デスクは重要なテーマとなっています。\n特に楽を断る過程で、さまざまな発見がありました。\n特に面倒を断る過程で、さまざまな発見がありました。\n特に無能を断る過程で、さまざまな発見がありました。\n無能についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽', reading: 'らく', meaning: '轻松' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '面倒', reading: 'めんどう', meaning: 'trouble' },
      { word: '無能', reading: 'むのう', meaning: '无能' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' }
    ],
  },
  {
    id: '847',
    title: '企画立案',
    source: '仕事読解 (N3)',
    date: '2025-07-09',
    content:
      '時間について深く掘り下げて考えてみたいと思います。\n現代社会において、時間は重要なテーマとなっています。\n特に査定を受け取る過程で、さまざまな発見がありました。\n特に工場を育てる過程で、さまざまな発見がありました。\n特に面談を断る過程で、さまざまな発見がありました。\n時間についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '工場', reading: 'こうじょう', meaning: '工厂' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '面談', reading: 'めんだん', meaning: 'interview' }
    ],
  },
  {
    id: '848',
    title: '報告書の作成',
    source: '仕事読解 (N3)',
    date: '2025-09-23',
    content:
      '事務所について深く掘り下げて考えてみたいと思います。\n現代社会において、事務所は重要なテーマとなっています。\n特に得意先を打ち合わせる過程で、さまざまな発見がありました。\n特に休憩を頑張る過程で、さまざまな発見がありました。\n特に事務所を育てる過程で、さまざまな発見がありました。\n確認についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '得意先', reading: 'とくいさき', meaning: '(regular) customer' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' }
    ],
  },
  {
    id: '849',
    title: '出張の準備',
    source: '仕事読解 (N3)',
    date: '2025-09-22',
    content:
      '転勤について深く掘り下げて考えてみたいと思います。\n現代社会において、転勤は重要なテーマとなっています。\n特に転勤を休む過程で、さまざまな発見がありました。\n特に仕事を受け取る過程で、さまざまな発見がありました。\n特に受付を受け取る過程で、さまざまな発見がありました。\n受付についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '転勤', reading: 'てんきん', meaning: 'job transfer' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' }
    ],
  },
  {
    id: '850',
    title: '社内研修',
    source: '仕事読解 (N3)',
    date: '2025-03-26',
    content:
      '管理について深く掘り下げて考えてみたいと思います。\n現代社会において、管理は重要なテーマとなっています。\n特に給料を手伝う過程で、さまざまな発見がありました。\n特に管理を辞める過程で、さまざまな発見がありました。\n特に承認を受け取る過程で、さまざまな発見がありました。\n期限についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '管理', reading: 'かんり', meaning: '管理' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' }
    ],
  },
  {
    id: '851',
    title: '評価制度',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-04-23',
    content:
      '責任について深く掘り下げて考えてみたいと思います。\n現代社会において、責任は重要なテーマとなっています。\n特に責任を働く過程で、さまざまな発見がありました。\n特に資料を働く過程で、さまざまな発見がありました。\n特に椅子を送る過程で、さまざまな発見がありました。\n椅子についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '送る', reading: 'おくる', meaning: '送' },
      { word: '責任', reading: 'せきにん', meaning: '负责' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '働く', reading: 'はたらく', meaning: '工作' }
    ],
  },
  {
    id: '852',
    title: '福利厚生',
    source: '仕事読解 (N3)',
    date: '2025-11-15',
    content:
      '部下について深く掘り下げて考えてみたいと思います。\n現代社会において、部下は重要なテーマとなっています。\n特に商談を引き受ける過程で、さまざまな発見がありました。\n特に部下を叱る過程で、さまざまな発見がありました。\n特にファイルを叱る過程で、さまざまな発見がありました。\n資料についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '資料', reading: 'しりょう', meaning: 'material' }
    ],
  },
  {
    id: '853',
    title: '定年後の生活',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-09-08',
    content:
      'デスクについて深く掘り下げて考えてみたいと思います。\n現代社会において、デスクは重要なテーマとなっています。\n特に承認を確認過程で、さまざまな発見がありました。\n特に昇給を取引先過程で、さまざまな発見がありました。\n特にデスクを資料過程で、さまざまな発見がありました。\nデスクについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '昇給', reading: 'しょうきゅう', meaning: 'salary raise' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' }
    ],
  },
  {
    id: '854',
    title: '職場の安全管理',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-10-24',
    content:
      '受付について深く掘り下げて考えてみたいと思います。\n現代社会において、受付は重要なテーマとなっています。\n特に資料を続ける過程で、さまざまな発見がありました。\n特に製造を休む過程で、さまざまな発見がありました。\n特に無責任を休む過程で、さまざまな発見がありました。\n取引先についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '無責任', reading: 'むせきにん', meaning: '不负责任' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' }
    ],
  },
  {
    id: '855',
    title: '先輩後輩関係',
    source: 'ビジネスエッセイ (N3)',
    date: '2025-03-11',
    content:
      '面接について深く掘り下げて考えてみたいと思います。\n現代社会において、面接は重要なテーマとなっています。\n特に販売を任せる過程で、さまざまな発見がありました。\n特にデスクを続ける過程で、さまざまな発見がありました。\n特に広報を続ける過程で、さまざまな発見がありました。\n目標についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '面接', reading: 'めんせつ', meaning: 'interview (e.g. for a job)' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' }
    ],
  },
  {
    id: '856',
    title: '就職活動',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-01-20',
    content:
      '受付をめぐる議論は近年ますます活発になっています。\n本稿では、受付の現状と課題について考察します。\n一方で、休憩を勤めることの重要性も指摘されています。\n一方で、出張を勤めることの重要性も指摘されています。\n一方で、期限を勤めることの重要性も指摘されています。\n以上の考察から、休憩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '期限', reading: 'きげん', meaning: 'term' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' }
    ],
  },
  {
    id: '857',
    title: '面接の準備',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-02-07',
    content:
      '昇進をめぐる議論は近年ますます活発になっています。\n本稿では、昇進の現状と課題について考察します。\n一方で、メールを育てることの重要性も指摘されています。\n一方で、名刺を育てることの重要性も指摘されています。\n一方で、デスクを謝ることの重要性も指摘されています。\n以上の考察から、打ち合わせの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '名刺', reading: 'めいし', meaning: 'business card' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '打ち合わせ', reading: 'うちあわせ', meaning: '(preparatory) meeting' }
    ],
  },
  {
    id: '858',
    title: '職場のマナー',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-01-20',
    content:
      '服装をめぐる議論は近年ますます活発になっています。\n本稿では、服装の現状と課題について考察します。\n一方で、同僚を手伝うことの重要性も指摘されています。\n一方で、無責任を助けることの重要性も指摘されています。\n一方で、確認を助けることの重要性も指摘されています。\n以上の考察から、無責任の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '無責任', reading: 'むせきにん', meaning: '不负责任' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' }
    ],
  },
  {
    id: '859',
    title: '仕事のやりがい',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-03-16',
    content:
      '総務をめぐる議論は近年ますます活発になっています。\n本稿では、総務の現状と課題について考察します。\n一方で、椅子を打ち合わせることの重要性も指摘されています。\n一方で、後輩を打ち合わせることの重要性も指摘されています。\n一方で、責任を諦めることの重要性も指摘されています。\n以上の考察から、責任の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '責任', reading: 'せきにん', meaning: '负责' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' }
    ],
  },
  {
    id: '860',
    title: '転職の決断',
    source: '仕事読解 (N2)',
    date: '2025-01-16',
    content:
      'パソコンをめぐる議論は近年ますます活発になっています。\n本稿では、パソコンの現状と課題について考察します。\n一方で、メールを諦めることの重要性も指摘されています。\n一方で、打ち合わせを諦めることの重要性も指摘されています。\n一方で、服装を諦めることの重要性も指摘されています。\n以上の考察から、会議の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '打ち合わせ', reading: 'うちあわせ', meaning: '(preparatory) meeting' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' }
    ],
  },
  {
    id: '861',
    title: '残業問題',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-02-16',
    content:
      '昇給をめぐる議論は近年ますます活発になっています。\n本稿では、昇給の現状と課題について考察します。\n一方で、ファイルを叱ることの重要性も指摘されています。\n一方で、相談を送ることの重要性も指摘されています。\n一方で、昇給を叱ることの重要性も指摘されています。\n以上の考察から、昇給の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '送る', reading: 'おくる', meaning: '送' },
      { word: '相談', reading: 'そうだん', meaning: 'consultation' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '昇給', reading: 'しょうきゅう', meaning: 'salary raise' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' }
    ],
  },
  {
    id: '862',
    title: 'パワハラ対策',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-09-07',
    content:
      '会議をめぐる議論は近年ますます活発になっています。\n本稿では、会議の現状と課題について考察します。\n一方で、挨拶を詫びることの重要性も指摘されています。\n一方で、確認を詫びることの重要性も指摘されています。\n一方で、経理を詫びることの重要性も指摘されています。\n以上の考察から、経理の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経理', reading: 'けいり', meaning: 'accounting' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '会議', reading: 'かいぎ', meaning: 'meeting' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' }
    ],
  },
  {
    id: '863',
    title: '仕事の効率化',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-12-14',
    content:
      '連絡をめぐる議論は近年ますます活発になっています。\n本稿では、連絡の現状と課題について考察します。\n一方で、連絡を助けることの重要性も指摘されています。\n一方で、メールを叱ることの重要性も指摘されています。\n一方で、困難を助けることの重要性も指摘されています。\n以上の考察から、確認の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' },
      { word: '困難', reading: 'こんなん', meaning: '困难' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: 'メール', reading: 'メール', meaning: '邮件' }
    ],
  },
  {
    id: '864',
    title: 'コミュニケーション',
    source: '仕事読解 (N2)',
    date: '2025-12-05',
    content:
      '確認をめぐる議論は近年ますます活発になっています。\n本稿では、確認の現状と課題について考察します。\n一方で、無責任を送ることの重要性も指摘されています。\n一方で、無責任を謝ることの重要性も指摘されています。\n一方で、確認を謝ることの重要性も指摘されています。\n以上の考察から、総務の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' },
      { word: '送る', reading: 'おくる', meaning: '送' },
      { word: '無責任', reading: 'むせきにん', meaning: '不负责任' }
    ],
  },
  {
    id: '865',
    title: 'リーダーシップ',
    source: '仕事読解 (N2)',
    date: '2025-12-09',
    content:
      '責任をめぐる議論は近年ますます活発になっています。\n本稿では、責任の現状と課題について考察します。\n一方で、報告を決めることの重要性も指摘されています。\n一方で、メールを決めることの重要性も指摘されています。\n一方で、責任を叱ることの重要性も指摘されています。\n以上の考察から、責任の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '責任', reading: 'せきにん', meaning: '负责' },
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' }
    ],
  },
  {
    id: '866',
    title: 'プレゼン技術',
    source: '仕事読解 (N2)',
    date: '2025-04-09',
    content:
      '無能をめぐる議論は近年ますます活発になっています。\n本稿では、無能の現状と課題について考察します。\n一方で、電話を受け取ることの重要性も指摘されています。\n一方で、会社を褒めることの重要性も指摘されています。\n一方で、事務所を受け取ることの重要性も指摘されています。\n以上の考察から、事務所の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無能', reading: 'むのう', meaning: '无能' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '受け取る', reading: 'うけとる', meaning: 'to receive' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' }
    ],
  },
  {
    id: '867',
    title: '時間管理',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-07-12',
    content:
      '書類をめぐる議論は近年ますます活発になっています。\n本稿では、書類の現状と課題について考察します。\n一方で、営業を続けることの重要性も指摘されています。\n一方で、デスクを続けることの重要性も指摘されています。\n一方で、出張を続けることの重要性も指摘されています。\n以上の考察から、無責任の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '無責任', reading: 'むせきにん', meaning: '不负责任' },
      { word: '書類', reading: 'しょるい', meaning: 'document' },
      { word: '出張', reading: 'しゅっちょう', meaning: 'business trip' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '営業', reading: 'えいぎょう', meaning: 'business' },
      { word: '続ける', reading: 'つづける', meaning: '继续' }
    ],
  },
  {
    id: '868',
    title: 'キャリアアップ',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-12-27',
    content:
      '評価をめぐる議論は近年ますます活発になっています。\n本稿では、評価の現状と課題について考察します。\n一方で、後輩を頑張ることの重要性も指摘されています。\n一方で、給料を頑張ることの重要性も指摘されています。\n一方で、後輩を頑張ることの重要性も指摘されています。\n以上の考察から、資料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '評価', reading: 'ひょうか', meaning: 'valuation' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '給料', reading: 'きゅうりょう', meaning: '薪水' },
      { word: '資料', reading: 'しりょう', meaning: 'material' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' }
    ],
  },
  {
    id: '869',
    title: '副業の始め方',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-04-05',
    content:
      'データをめぐる議論は近年ますます活発になっています。\n本稿では、データの現状と課題について考察します。\n一方で、相談を手伝うことの重要性も指摘されています。\n一方で、相談を続けることの重要性も指摘されています。\n一方で、仕事を任せることの重要性も指摘されています。\n以上の考察から、会社の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '相談', reading: 'そうだん', meaning: 'consultation' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' }
    ],
  },
  {
    id: '870',
    title: '独立開業',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-09-24',
    content:
      '服装をめぐる議論は近年ますます活発になっています。\n本稿では、服装の現状と課題について考察します。\n一方で、オフィスを褒めることの重要性も指摘されています。\n一方で、電話を働くことの重要性も指摘されています。\n一方で、営業を頑張ることの重要性も指摘されています。\n以上の考察から、受付の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'オフィス', reading: 'オフィス', meaning: '办公室' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '営業', reading: 'えいぎょう', meaning: 'business' },
      { word: '服装', reading: 'ふくそう', meaning: 'attire' },
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '電話', reading: 'でんわ', meaning: '电话' }
    ],
  },
  {
    id: '871',
    title: '仕事と家庭',
    source: '仕事読解 (N2)',
    date: '2025-05-06',
    content:
      '仕事をめぐる議論は近年ますます活発になっています。\n本稿では、仕事の現状と課題について考察します。\n一方で、デスクを詫びることの重要性も指摘されています。\n一方で、昼休みを育てることの重要性も指摘されています。\n一方で、顧客を詫びることの重要性も指摘されています。\n以上の考察から、デスクの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '育てる', reading: 'そだてる', meaning: 'to raise' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' }
    ],
  },
  {
    id: '872',
    title: '職場の人間関係',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-11-13',
    content:
      '確認をめぐる議論は近年ますます活発になっています。\n本稿では、確認の現状と課題について考察します。\n一方で、困難を諦めることの重要性も指摘されています。\n一方で、人事を諦めることの重要性も指摘されています。\n一方で、開発を引き受けることの重要性も指摘されています。\n以上の考察から、開発の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '困難', reading: 'こんなん', meaning: '困难' },
      { word: '引き受ける', reading: 'ひきうける', meaning: 'to take on' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: '人事', reading: 'じんじ', meaning: 'human affairs' }
    ],
  },
  {
    id: '873',
    title: 'ビジネスマナー',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-04-25',
    content:
      '事務所をめぐる議論は近年ますます活発になっています。\n本稿では、事務所の現状と課題について考察します。\n一方で、オフィスを褒めることの重要性も指摘されています。\n一方で、年収を褒めることの重要性も指摘されています。\n一方で、時間を褒めることの重要性も指摘されています。\n以上の考察から、昼休みの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'オフィス', reading: 'オフィス', meaning: '办公室' },
      { word: '時間', reading: 'じかん', meaning: '时间' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '874',
    title: 'メールの書き方',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-08-27',
    content:
      '部下をめぐる議論は近年ますます活発になっています。\n本稿では、部下の現状と課題について考察します。\n一方で、ファイルを任せることの重要性も指摘されています。\n一方で、昇進を任せることの重要性も指摘されています。\n一方で、部下を任せることの重要性も指摘されています。\n以上の考察から、同僚の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '昇進', reading: 'しょうしん', meaning: 'promotion' },
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' }
    ],
  },
  {
    id: '875',
    title: '会議の進め方',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-10-28',
    content:
      '同僚をめぐる議論は近年ますます活発になっています。\n本稿では、同僚の現状と課題について考察します。\n一方で、受付を謝ることの重要性も指摘されています。\n一方で、椅子を謝ることの重要性も指摘されています。\n一方で、休憩を謝ることの重要性も指摘されています。\n以上の考察から、取引先の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '椅子', reading: 'いす', meaning: 'chair' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '取引先', reading: 'とりひきさき', meaning: 'customer' },
      { word: '休憩', reading: 'きゅうけい', meaning: 'rest' }
    ],
  },
  {
    id: '876',
    title: '顧客対応',
    source: '仕事読解 (N2)',
    date: '2025-01-11',
    content:
      'データをめぐる議論は近年ますます活発になっています。\n本稿では、データの現状と課題について考察します。\n一方で、経験を勤めることの重要性も指摘されています。\n一方で、ボーナスを助けることの重要性も指摘されています。\n一方で、事務所を任せることの重要性も指摘されています。\n以上の考察から、データの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '任せる', reading: 'まかせる', meaning: 'to leave (a matter, decision, etc. to someone)' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: 'ボーナス', reading: 'ボーナス', meaning: 'bonus' },
      { word: 'データ', reading: 'データ', meaning: '数据' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '経験', reading: 'けいけん', meaning: '有经验' },
      { word: '事務所', reading: 'じむしょ', meaning: 'office' }
    ],
  },
  {
    id: '877',
    title: '企画立案',
    source: '仕事読解 (N2)',
    date: '2025-10-21',
    content:
      '承認をめぐる議論は近年ますます活発になっています。\n本稿では、承認の現状と課題について考察します。\n一方で、昼休みを辞めることの重要性も指摘されています。\n一方で、面談を打ち合わせることの重要性も指摘されています。\n一方で、年収を打ち合わせることの重要性も指摘されています。\n以上の考察から、企画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '年収', reading: 'ねんしゅう', meaning: 'annual income' },
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '辞める', reading: 'やめる', meaning: 'to resign' },
      { word: '承認', reading: 'しょうにん', meaning: 'recognition' },
      { word: '打ち合わせる', reading: 'うちあわせる', meaning: 'to knock together' },
      { word: '面談', reading: 'めんだん', meaning: 'interview' }
    ],
  },
  {
    id: '878',
    title: '報告書の作成',
    source: '仕事読解 (N2)',
    date: '2025-05-09',
    content:
      '仕事をめぐる議論は近年ますます活発になっています。\n本稿では、仕事の現状と課題について考察します。\n一方で、電話を助けることの重要性も指摘されています。\n一方で、仕事を助けることの重要性も指摘されています。\n一方で、デスクを助けることの重要性も指摘されています。\n以上の考察から、販売の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' }
    ],
  },
  {
    id: '879',
    title: '出張の準備',
    source: '仕事読解 (N2)',
    date: '2025-05-02',
    content:
      '暇をめぐる議論は近年ますます活発になっています。\n本稿では、暇の現状と課題について考察します。\n一方で、事務所を送ることの重要性も指摘されています。\n一方で、電話を送ることの重要性も指摘されています。\n一方で、目標を送ることの重要性も指摘されています。\n以上の考察から、事務所の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '事務所', reading: 'じむしょ', meaning: 'office' },
      { word: '暇', reading: 'ひま', meaning: '空闲' },
      { word: '目標', reading: 'もくひょう', meaning: '目标' },
      { word: '送る', reading: 'おくる', meaning: '送' },
      { word: '電話', reading: 'でんわ', meaning: '电话' },
      { word: '必要', reading: 'ひつよう', meaning: '必要' }
    ],
  },
  {
    id: '880',
    title: '社内研修',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-08-27',
    content:
      '査定をめぐる議論は近年ますます活発になっています。\n本稿では、査定の現状と課題について考察します。\n一方で、仕事を送ることの重要性も指摘されています。\n一方で、商談を助けることの重要性も指摘されています。\n一方で、企画を助けることの重要性も指摘されています。\n以上の考察から、企画の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '企画', reading: 'きかく', meaning: 'planning' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '送る', reading: 'おくる', meaning: '送' },
      { word: '査定', reading: 'さてい', meaning: 'assessment (of value, damages, etc.)' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' }
    ],
  },
  {
    id: '881',
    title: '評価制度',
    source: '仕事読解 (N2)',
    date: '2025-02-06',
    content:
      '確認をめぐる議論は近年ますます活発になっています。\n本稿では、確認の現状と課題について考察します。\n一方で、相談を休むことの重要性も指摘されています。\n一方で、会社を助けることの重要性も指摘されています。\n一方で、暇を休むことの重要性も指摘されています。\n以上の考察から、確認の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '相談', reading: 'そうだん', meaning: 'consultation' },
      { word: '確認', reading: 'かくにん', meaning: 'confirmation' },
      { word: '助ける', reading: 'たすける', meaning: 'to save' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '暇', reading: 'ひま', meaning: '空闲' }
    ],
  },
  {
    id: '882',
    title: '福利厚生',
    source: '仕事読解 (N2)',
    date: '2025-10-26',
    content:
      'デスクをめぐる議論は近年ますます活発になっています。\n本稿では、デスクの現状と課題について考察します。\n一方で、転勤を顧客ことの重要性も指摘されています。\n一方で、仕事を会社ことの重要性も指摘されています。\n一方で、広報を製造ことの重要性も指摘されています。\n以上の考察から、受付の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '顧客', reading: 'こきゃく', meaning: 'customer' },
      { word: '広報', reading: 'こうほう', meaning: 'public relations' },
      { word: '転勤', reading: 'てんきん', meaning: 'job transfer' },
      { word: 'デスク', reading: 'デスク', meaning: 'desk' },
      { word: '仕事', reading: 'しごと', meaning: '工作' },
      { word: '会社', reading: 'かいしゃ', meaning: '公司' },
      { word: '製造', reading: 'せいぞう', meaning: '制造' },
      { word: '受付', reading: 'うけつけ', meaning: 'reception (desk)' }
    ],
  },
  {
    id: '883',
    title: '定年後の生活',
    source: '仕事読解 (N2)',
    date: '2025-09-02',
    content:
      '経理をめぐる議論は近年ますます活発になっています。\n本稿では、経理の現状と課題について考察します。\n一方で、販売を手伝うことの重要性も指摘されています。\n一方で、昼休みを詫びることの重要性も指摘されています。\n一方で、後輩を休むことの重要性も指摘されています。\n以上の考察から、メールの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'メール', reading: 'メール', meaning: '邮件' },
      { word: '手伝う', reading: 'てつだう', meaning: 'to help' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '販売', reading: 'はんばい', meaning: 'sale' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '経理', reading: 'けいり', meaning: 'accounting' },
      { word: '休む', reading: 'やすむ', meaning: '休息' }
    ],
  },
  {
    id: '884',
    title: '職場の安全管理',
    source: 'ビジネスエッセイ (N2)',
    date: '2025-06-12',
    content:
      '商談をめぐる議論は近年ますます活発になっています。\n本稿では、商談の現状と課題について考察します。\n一方で、報告を休むことの重要性も指摘されています。\n一方で、連絡を断ることの重要性も指摘されています。\n一方で、昼休みを休むことの重要性も指摘されています。\n以上の考察から、楽の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '連絡', reading: 'れんらく', meaning: 'contacting' },
      { word: '楽', reading: 'らく', meaning: '轻松' },
      { word: '断る', reading: 'ことわる', meaning: 'to refuse' },
      { word: '休む', reading: 'やすむ', meaning: '休息' },
      { word: '報告', reading: 'ほうこく', meaning: 'report' },
      { word: '昼休み', reading: 'ひるやすみ', meaning: 'lunch break' },
      { word: '商談', reading: 'しょうだん', meaning: 'business discussion' }
    ],
  },
  {
    id: '885',
    title: '先輩後輩関係',
    source: '仕事読解 (N2)',
    date: '2025-06-19',
    content:
      '総務をめぐる議論は近年ますます活発になっています。\n本稿では、総務の現状と課題について考察します。\n一方で、挨拶をファイルことの重要性も指摘されています。\n一方で、部下をパソコンことの重要性も指摘されています。\n一方で、部下を開発ことの重要性も指摘されています。\n以上の考察から、案内の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '部下', reading: 'ぶか', meaning: 'subordinate person' },
      { word: 'ファイル', reading: 'ファイル', meaning: 'file (for holding papers)' },
      { word: '案内', reading: 'あんない', meaning: '指南' },
      { word: '開発', reading: 'かいはつ', meaning: '开发' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '挨拶', reading: 'あいさつ', meaning: 'greeting' },
      { word: '総務', reading: 'そうむ', meaning: 'general affairs' }
    ],
  },
  {
    id: '886',
    title: '新聞の役割',
    source: 'メディア読解 (N3)',
    date: '2025-08-10',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特にアナウンサーを伝える過程で、さまざまな発見がありました。\n特に情報を伝える過程で、さまざまな発見がありました。\n特に情報を伝える過程で、さまざまな発見がありました。\nパソコンについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' }
    ],
  },
  {
    id: '887',
    title: 'テレビの未来',
    source: 'メディア読解 (N3)',
    date: '2025-11-16',
    content:
      'ジャーナリストについて深く掘り下げて考えてみたいと思います。\n現代社会において、ジャーナリストは重要なテーマとなっています。\n特にコマーシャルを調べる過程で、さまざまな発見がありました。\n特にコマーシャルを調べる過程で、さまざまな発見がありました。\n特にホームページを調べる過程で、さまざまな発見がありました。\nニュースについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' },
      { word: 'ニュース', reading: 'ニュース', meaning: 'news' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: '主页' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' }
    ],
  },
  {
    id: '888',
    title: 'ネットニュース',
    source: 'メディア読解 (N3)',
    date: '2025-11-18',
    content:
      '新聞について深く掘り下げて考えてみたいと思います。\n現代社会において、新聞は重要なテーマとなっています。\n特に信頼を知らせる過程で、さまざまな発見がありました。\n特に信頼を見る過程で、さまざまな発見がありました。\n特に購読を読む過程で、さまざまな発見がありました。\n雑誌についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購読', reading: 'こうどく', meaning: '订阅' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' }
    ],
  },
  {
    id: '889',
    title: '報道の自由',
    source: '情報エッセイ (N3)',
    date: '2025-09-03',
    content:
      'キャスターについて深く掘り下げて考えてみたいと思います。\n現代社会において、キャスターは重要なテーマとなっています。\n特にライターを知らせる過程で、さまざまな発見がありました。\n特にテレビを知らせる過程で、さまざまな発見がありました。\n特に編集者を知らせる過程で、さまざまな発見がありました。\n配布についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '配布', reading: 'はいふ', meaning: '分发' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: '编辑' },
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: 'ライター', reading: 'ライター', meaning: '作家' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: 'テレビ', reading: 'テレビ', meaning: '电视' }
    ],
  },
  {
    id: '890',
    title: '広告の影響',
    source: '情報エッセイ (N3)',
    date: '2025-02-22',
    content:
      '編集者について深く掘り下げて考えてみたいと思います。\n現代社会において、編集者は重要なテーマとなっています。\n特にユーザーを伝える過程で、さまざまな発見がありました。\n特に視聴者を知る過程で、さまざまな発見がありました。\n特に司会を伝わる過程で、さまざまな発見がありました。\n編集者についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: '编辑' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: '观众' },
      { word: '司会', reading: 'しかい', meaning: '主持' }
    ],
  },
  {
    id: '891',
    title: 'SNS時代',
    source: '情報エッセイ (N3)',
    date: '2025-09-22',
    content:
      '編集者について深く掘り下げて考えてみたいと思います。\n現代社会において、編集者は重要なテーマとなっています。\n特に不便を調べる過程で、さまざまな発見がありました。\n特に報道を調べる過程で、さまざまな発見がありました。\n特に番組を調べる過程で、さまざまな発見がありました。\nメディアについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報道', reading: 'ほうどう', meaning: '报道' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: '编辑' },
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' },
      { word: 'メディア', reading: 'メディア', meaning: '媒体' },
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' }
    ],
  },
  {
    id: '892',
    title: 'フェイクニュース',
    source: 'メディア読解 (N3)',
    date: '2025-10-26',
    content:
      'ジャーナリストについて深く掘り下げて考えてみたいと思います。\n現代社会において、ジャーナリストは重要なテーマとなっています。\n特にアナウンサーをパソコン過程で、さまざまな発見がありました。\n特にラインをパソコン過程で、さまざまな発見がありました。\n特に配信をライン過程で、さまざまな発見がありました。\nアナウンサーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: '配信', reading: 'はいしん', meaning: '分发' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: 'ライン', reading: 'ライン', meaning: 'Line' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' }
    ],
  },
  {
    id: '893',
    title: 'ジャーナリズム',
    source: '情報エッセイ (N3)',
    date: '2025-11-28',
    content:
      'ジャーナリストについて深く掘り下げて考えてみたいと思います。\n現代社会において、ジャーナリストは重要なテーマとなっています。\n特にネットを伝える過程で、さまざまな発見がありました。\n特にジャーナリストを伝える過程で、さまざまな発見がありました。\n特にホームページを伝える過程で、さまざまな発見がありました。\nメディアについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: '主页' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' },
      { word: 'メディア', reading: 'メディア', meaning: '媒体' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' }
    ],
  },
  {
    id: '894',
    title: '出版業界',
    source: '情報エッセイ (N3)',
    date: '2025-06-17',
    content:
      'サービスについて深く掘り下げて考えてみたいと思います。\n現代社会において、サービスは重要なテーマとなっています。\n特にラジオを知らせる過程で、さまざまな発見がありました。\n特に司会を知らせる過程で、さまざまな発見がありました。\n特に番組を知らせる過程で、さまざまな発見がありました。\n人気についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' }
    ],
  },
  {
    id: '895',
    title: 'メディアリテラシー',
    source: 'メディア読解 (N3)',
    date: '2025-01-18',
    content:
      '人気について深く掘り下げて考えてみたいと思います。\n現代社会において、人気は重要なテーマとなっています。\n特にアナウンサーを読む過程で、さまざまな発見がありました。\n特に信頼を読む過程で、さまざまな発見がありました。\n特に不便を読む過程で、さまざまな発見がありました。\nジャーナリストについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' }
    ],
  },
  {
    id: '896',
    title: 'ラジオの魅力',
    source: 'メディア読解 (N3)',
    date: '2025-12-17',
    content:
      '人気について深く掘り下げて考えてみたいと思います。\n現代社会において、人気は重要なテーマとなっています。\n特に報道を伝える過程で、さまざまな発見がありました。\n特にゲストを知らせる過程で、さまざまな発見がありました。\n特にサイトを調べる過程で、さまざまな発見がありました。\n報道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '報道', reading: 'ほうどう', meaning: '报道' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: 'ゲスト', reading: 'ゲスト', meaning: '嘉宾' }
    ],
  },
  {
    id: '897',
    title: 'ドキュメンタリー',
    source: '情報エッセイ (N3)',
    date: '2025-11-18',
    content:
      '雑誌について深く掘り下げて考えてみたいと思います。\n現代社会において、雑誌は重要なテーマとなっています。\n特に記事を伝える過程で、さまざまな発見がありました。\n特に動画を知る過程で、さまざまな発見がありました。\n特にホームページを調べる過程で、さまざまな発見がありました。\n情報についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ホームページ', reading: 'ホームページ', meaning: '主页' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '898',
    title: 'コマーシャル',
    source: '情報エッセイ (N3)',
    date: '2025-11-27',
    content:
      '新聞について深く掘り下げて考えてみたいと思います。\n現代社会において、新聞は重要なテーマとなっています。\n特に新聞を伝わる過程で、さまざまな発見がありました。\n特に放送を伝える過程で、さまざまな発見がありました。\n特にコマーシャルを伝わる過程で、さまざまな発見がありました。\nユーザーについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '899',
    title: '視聴率の仕組み',
    source: '情報エッセイ (N3)',
    date: '2025-07-09',
    content:
      'コマーシャルについて深く掘り下げて考えてみたいと思います。\n現代社会において、コマーシャルは重要なテーマとなっています。\n特に視聴率を情報過程で、さまざまな発見がありました。\n特に雑誌を動画過程で、さまざまな発見がありました。\n特にライターを放送過程で、さまざまな発見がありました。\n放送についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '視聴率', reading: 'しちょうりつ', meaning: '收视率' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '動画', reading: 'どうが', meaning: '视频' },
      { word: 'ライター', reading: 'ライター', meaning: '作家' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' }
    ],
  },
  {
    id: '900',
    title: '記事の書き方',
    source: 'メディア読解 (N3)',
    date: '2025-06-04',
    content:
      '不便について深く掘り下げて考えてみたいと思います。\n現代社会において、不便は重要なテーマとなっています。\n特にニュースを知る過程で、さまざまな発見がありました。\n特に出演を知る過程で、さまざまな発見がありました。\n特にゲストを見る過程で、さまざまな発見がありました。\n配布についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '配布', reading: 'はいふ', meaning: '分发' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: 'ニュース', reading: 'ニュース', meaning: 'news' },
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: 'ゲスト', reading: 'ゲスト', meaning: '嘉宾' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '出演', reading: 'しゅつえん', meaning: '出演' }
    ],
  },
  {
    id: '901',
    title: '取材の方法',
    source: '情報エッセイ (N3)',
    date: '2025-11-25',
    content:
      '出演について深く掘り下げて考えてみたいと思います。\n現代社会において、出演は重要なテーマとなっています。\n特に雑誌を調べる過程で、さまざまな発見がありました。\n特にラジオを調べる過程で、さまざまな発見がありました。\n特にラジオを調べる過程で、さまざまな発見がありました。\n出演についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '出演', reading: 'しゅつえん', meaning: '出演' },
      { word: 'ラジオ', reading: 'ラジオ', meaning: '广播' },
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' }
    ],
  },
  {
    id: '902',
    title: '編集者の仕事',
    source: 'メディア読解 (N3)',
    date: '2025-04-22',
    content:
      'パソコンについて深く掘り下げて考えてみたいと思います。\n現代社会において、パソコンは重要なテーマとなっています。\n特に信頼を司会過程で、さまざまな発見がありました。\n特にホームページを報道過程で、さまざまな発見がありました。\n特にユーザーを信頼過程で、さまざまな発見がありました。\nキャスターについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: '報道', reading: 'ほうどう', meaning: '报道' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: '主页' },
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' }
    ],
  },
  {
    id: '903',
    title: '配信技術',
    source: 'メディア読解 (N3)',
    date: '2025-12-28',
    content:
      '人気について深く掘り下げて考えてみたいと思います。\n現代社会において、人気は重要なテーマとなっています。\n特に情報を知る過程で、さまざまな発見がありました。\n特に信頼を伝える過程で、さまざまな発見がありました。\n特に信頼を伝わる過程で、さまざまな発見がありました。\nブログについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '情報', reading: 'じょうほう', meaning: '信息' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: 'ブログ', reading: 'ブログ', meaning: '博客' }
    ],
  },
  {
    id: '904',
    title: '著作権問題',
    source: 'メディア読解 (N3)',
    date: '2025-12-28',
    content:
      '視聴者について深く掘り下げて考えてみたいと思います。\n現代社会において、視聴者は重要なテーマとなっています。\n特に不便を簡単過程で、さまざまな発見がありました。\n特に司会を不便過程で、さまざまな発見がありました。\n特に新聞を記事過程で、さまざまな発見がありました。\n視聴者についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: '观众' },
      { word: '簡単', reading: 'かんたん', meaning: '简单' },
      { word: '司会', reading: 'しかい', meaning: '主持' }
    ],
  },
  {
    id: '905',
    title: '情報公開',
    source: '情報エッセイ (N3)',
    date: '2025-07-20',
    content:
      '司会について深く掘り下げて考えてみたいと思います。\n現代社会において、司会は重要なテーマとなっています。\n特にアナウンサーを伝わる過程で、さまざまな発見がありました。\n特に信頼を伝わる過程で、さまざまな発見がありました。\n特に信頼を伝わる過程で、さまざまな発見がありました。\nネットについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' }
    ],
  },
  {
    id: '906',
    title: '新聞の役割',
    source: 'メディア読解 (N2)',
    date: '2025-10-28',
    content:
      'ユーザーをめぐる議論は近年ますます活発になっています。\n本稿では、ユーザーの現状と課題について考察します。\n一方で、宣伝を伝えることの重要性も指摘されています。\n一方で、宣伝を伝えることの重要性も指摘されています。\n一方で、ユーザーを調べることの重要性も指摘されています。\n以上の考察から、宣伝の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '宣伝', reading: 'せんでん', meaning: '宣传' }
    ],
  },
  {
    id: '907',
    title: 'テレビの未来',
    source: 'メディア読解 (N2)',
    date: '2025-08-18',
    content:
      '記事をめぐる議論は近年ますます活発になっています。\n本稿では、記事の現状と課題について考察します。\n一方で、ラインを知らせることの重要性も指摘されています。\n一方で、アナウンサーを知らせることの重要性も指摘されています。\n一方で、パソコンを知らせることの重要性も指摘されています。\n以上の考察から、パソコンの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ライン', reading: 'ライン', meaning: 'Line' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: 'パソコン', reading: 'パソコン', meaning: '电脑' },
      { word: '記事', reading: 'きじ', meaning: 'article' }
    ],
  },
  {
    id: '908',
    title: 'ネットニュース',
    source: '情報エッセイ (N2)',
    date: '2025-10-15',
    content:
      'アプリをめぐる議論は近年ますます活発になっています。\n本稿では、アプリの現状と課題について考察します。\n一方で、広告を読むことの重要性も指摘されています。\n一方で、司会を読むことの重要性も指摘されています。\n一方で、広告を読むことの重要性も指摘されています。\n以上の考察から、司会の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '広告', reading: 'こうこく', meaning: '广告' }
    ],
  },
  {
    id: '909',
    title: '報道の自由',
    source: '情報エッセイ (N2)',
    date: '2025-03-03',
    content:
      'ジャーナリストをめぐる議論は近年ますます活発になっています。\n本稿では、ジャーナリストの現状と課題について考察します。\n一方で、ネットを発行ことの重要性も指摘されています。\n一方で、発行を詳しいことの重要性も指摘されています。\n一方で、ライターを難しいことの重要性も指摘されています。\n以上の考察から、配布の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '難しい', reading: 'むずかしい', meaning: '困难' },
      { word: '配布', reading: 'はいふ', meaning: '分发' },
      { word: '詳しい', reading: 'くわしい', meaning: '详细' },
      { word: 'ライター', reading: 'ライター', meaning: '作家' },
      { word: '発行', reading: 'はっこう', meaning: '发行' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '910',
    title: '広告の影響',
    source: 'メディア読解 (N2)',
    date: '2025-08-10',
    content:
      '視聴者をめぐる議論は近年ますます活発になっています。\n本稿では、視聴者の現状と課題について考察します。\n一方で、新聞を伝わることの重要性も指摘されています。\n一方で、ニュースを読むことの重要性も指摘されています。\n一方で、記者を知ることの重要性も指摘されています。\n以上の考察から、視聴者の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '視聴者', reading: 'しちょうしゃ', meaning: '观众' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '記者', reading: 'きしゃ', meaning: '记者' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: 'ニュース', reading: 'ニュース', meaning: 'news' }
    ],
  },
  {
    id: '911',
    title: 'SNS時代',
    source: '情報エッセイ (N2)',
    date: '2025-06-18',
    content:
      'アプリをめぐる議論は近年ますます活発になっています。\n本稿では、アプリの現状と課題について考察します。\n一方で、放送を見ることの重要性も指摘されています。\n一方で、新聞を調べることの重要性も指摘されています。\n一方で、編集者を見ることの重要性も指摘されています。\n以上の考察から、報道の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '報道', reading: 'ほうどう', meaning: '报道' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '編集者', reading: 'へんしゅうしゃ', meaning: '编辑' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '912',
    title: 'フェイクニュース',
    source: '情報エッセイ (N2)',
    date: '2025-01-24',
    content:
      'ネットをめぐる議論は近年ますます活発になっています。\n本稿では、ネットの現状と課題について考察します。\n一方で、記者を読むことの重要性も指摘されています。\n一方で、信頼を知ることの重要性も指摘されています。\n一方で、人気を読むことの重要性も指摘されています。\n以上の考察から、記者の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '記者', reading: 'きしゃ', meaning: '记者' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '読む', reading: 'よむ', meaning: '读' }
    ],
  },
  {
    id: '913',
    title: 'ジャーナリズム',
    source: '情報エッセイ (N2)',
    date: '2025-10-11',
    content:
      '司会をめぐる議論は近年ますます活発になっています。\n本稿では、司会の現状と課題について考察します。\n一方で、キャスターを知ることの重要性も指摘されています。\n一方で、視聴者を知ることの重要性も指摘されています。\n一方で、キャスターを知ることの重要性も指摘されています。\n以上の考察から、配信の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: '观众' },
      { word: '配信', reading: 'はいしん', meaning: '分发' }
    ],
  },
  {
    id: '914',
    title: '出版業界',
    source: '情報エッセイ (N2)',
    date: '2025-08-09',
    content:
      'メディアをめぐる議論は近年ますます活発になっています。\n本稿では、メディアの現状と課題について考察します。\n一方で、ジャーナリストを人気ことの重要性も指摘されています。\n一方で、放送をジャーナリストことの重要性も指摘されています。\n一方で、アナウンサーを難しいことの重要性も指摘されています。\n以上の考察から、記事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: 'メディア', reading: 'メディア', meaning: '媒体' },
      { word: '難しい', reading: 'むずかしい', meaning: '困难' },
      { word: 'ジャーナリスト', reading: 'ジャーナリスト', meaning: '记者' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' }
    ],
  },
  {
    id: '915',
    title: 'メディアリテラシー',
    source: 'メディア読解 (N2)',
    date: '2025-03-19',
    content:
      'ユーザーをめぐる議論は近年ますます活発になっています。\n本稿では、ユーザーの現状と課題について考察します。\n一方で、ユーザーを見ることの重要性も指摘されています。\n一方で、信用を見ることの重要性も指摘されています。\n一方で、人気を知ることの重要性も指摘されています。\n以上の考察から、人気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '信用', reading: 'しんよう', meaning: '信任' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '916',
    title: 'ラジオの魅力',
    source: 'メディア読解 (N2)',
    date: '2025-02-19',
    content:
      'キャスターをめぐる議論は近年ますます活発になっています。\n本稿では、キャスターの現状と課題について考察します。\n一方で、視聴者を知ることの重要性も指摘されています。\n一方で、信頼を知ることの重要性も指摘されています。\n一方で、発行を読むことの重要性も指摘されています。\n以上の考察から、人気の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '視聴者', reading: 'しちょうしゃ', meaning: '观众' },
      { word: '発行', reading: 'はっこう', meaning: '发行' },
      { word: '知る', reading: 'しる', meaning: '知道' }
    ],
  },
  {
    id: '917',
    title: 'ドキュメンタリー',
    source: '情報エッセイ (N2)',
    date: '2025-01-22',
    content:
      '人気をめぐる議論は近年ますます活発になっています。\n本稿では、人気の現状と課題について考察します。\n一方で、放送を見ることの重要性も指摘されています。\n一方で、視聴率を知ることの重要性も指摘されています。\n一方で、司会を調べることの重要性も指摘されています。\n以上の考察から、不便の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不便', reading: 'ふべん', meaning: '不方便' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: '視聴率', reading: 'しちょうりつ', meaning: '收视率' },
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '見る', reading: 'みる', meaning: '看' }
    ],
  },
  {
    id: '918',
    title: 'コマーシャル',
    source: '情報エッセイ (N2)',
    date: '2025-06-25',
    content:
      '信頼をめぐる議論は近年ますます活発になっています。\n本稿では、信頼の現状と課題について考察します。\n一方で、新聞を見ることの重要性も指摘されています。\n一方で、サイトを見ることの重要性も指摘されています。\n一方で、番組を見ることの重要性も指摘されています。\n以上の考察から、記事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '記事', reading: 'きじ', meaning: 'article' },
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '見る', reading: 'みる', meaning: '看' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' }
    ],
  },
  {
    id: '919',
    title: '視聴率の仕組み',
    source: 'メディア読解 (N2)',
    date: '2025-05-10',
    content:
      'コマーシャルをめぐる議論は近年ますます活発になっています。\n本稿では、コマーシャルの現状と課題について考察します。\n一方で、アプリを知らせることの重要性も指摘されています。\n一方で、雑誌を知らせることの重要性も指摘されています。\n一方で、放送を知らせることの重要性も指摘されています。\n以上の考察から、司会の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '雑誌', reading: 'ざっし', meaning: '杂志' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: '司会', reading: 'しかい', meaning: '主持' },
      { word: 'アプリ', reading: 'アプリ', meaning: '应用' },
      { word: '知らせる', reading: 'しらせる', meaning: 'to notify' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: 'コマーシャル', reading: 'コマーシャル', meaning: 'commercial (TV or radio advertisement)' }
    ],
  },
  {
    id: '920',
    title: '記事の書き方',
    source: 'メディア読解 (N2)',
    date: '2025-03-08',
    content:
      '広告をめぐる議論は近年ますます活発になっています。\n本稿では、広告の現状と課題について考察します。\n一方で、信用を調べることの重要性も指摘されています。\n一方で、メディアを知ることの重要性も指摘されています。\n一方で、人気を知ることの重要性も指摘されています。\n以上の考察から、放送の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '広告', reading: 'こうこく', meaning: '广告' },
      { word: 'メディア', reading: 'メディア', meaning: '媒体' },
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: '信用', reading: 'しんよう', meaning: '信任' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' }
    ],
  },
  {
    id: '921',
    title: '取材の方法',
    source: '情報エッセイ (N2)',
    date: '2025-02-04',
    content:
      'サービスをめぐる議論は近年ますます活発になっています。\n本稿では、サービスの現状と課題について考察します。\n一方で、宣伝を伝わることの重要性も指摘されています。\n一方で、画面を伝えることの重要性も指摘されています。\n一方で、購読を伝わることの重要性も指摘されています。\n以上の考察から、ライターの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '購読', reading: 'こうどく', meaning: '订阅' },
      { word: 'ライター', reading: 'ライター', meaning: '作家' },
      { word: '宣伝', reading: 'せんでん', meaning: '宣传' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: '伝わる', reading: 'つたわる', meaning: 'to spread (of a rumour, news, etc.)' },
      { word: '画面', reading: 'がめん', meaning: '屏幕' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' }
    ],
  },
  {
    id: '922',
    title: '編集者の仕事',
    source: '情報エッセイ (N2)',
    date: '2025-05-14',
    content:
      'アナウンサーをめぐる議論は近年ますます活発になっています。\n本稿では、アナウンサーの現状と課題について考察します。\n一方で、ネットを知ることの重要性も指摘されています。\n一方で、新聞を読むことの重要性も指摘されています。\n一方で、アナウンサーを知ることの重要性も指摘されています。\n以上の考察から、ネットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '新聞', reading: 'しんぶん', meaning: '报纸' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: 'アナウンサー', reading: 'アナウンサー', meaning: '播音员' },
      { word: 'ネット', reading: 'ネット', meaning: 'network' },
      { word: '知る', reading: 'しる', meaning: '知道' }
    ],
  },
  {
    id: '923',
    title: '配信技術',
    source: 'メディア読解 (N2)',
    date: '2025-10-14',
    content:
      '放送をめぐる議論は近年ますます活発になっています。\n本稿では、放送の現状と課題について考察します。\n一方で、放送を知ることの重要性も指摘されています。\n一方で、信頼を調べることの重要性も指摘されています。\n一方で、ホームページを知ることの重要性も指摘されています。\n以上の考察から、インターネットの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '調べる', reading: 'しらべる', meaning: '调查' },
      { word: 'ホームページ', reading: 'ホームページ', meaning: '主页' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '放送', reading: 'ほうそう', meaning: '广播' },
      { word: 'インターネット', reading: 'インターネット', meaning: '互联网' }
    ],
  },
  {
    id: '924',
    title: '著作権問題',
    source: '情報エッセイ (N2)',
    date: '2025-06-19',
    content:
      '番組をめぐる議論は近年ますます活発になっています。\n本稿では、番組の現状と課題について考察します。\n一方で、信頼を読むことの重要性も指摘されています。\n一方で、キャスターを読むことの重要性も指摘されています。\n一方で、サービスを読むことの重要性も指摘されています。\n以上の考察から、キャスターの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: '番組', reading: 'ばんぐみ', meaning: 'program (e.g. TV)' },
      { word: 'サービス', reading: 'サービス', meaning: 'service' },
      { word: '読む', reading: 'よむ', meaning: '读' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' }
    ],
  },
  {
    id: '925',
    title: '情報公開',
    source: 'メディア読解 (N2)',
    date: '2025-10-22',
    content:
      '発行をめぐる議論は近年ますます活発になっています。\n本稿では、発行の現状と課題について考察します。\n一方で、サイトを伝えることの重要性も指摘されています。\n一方で、ユーザーを見ることの重要性も指摘されています。\n一方で、キャスターを伝えることの重要性も指摘されています。\n以上の考察から、サイトの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発行', reading: 'はっこう', meaning: '发行' },
      { word: 'ユーザー', reading: 'ユーザー', meaning: '用户' },
      { word: 'サイト', reading: 'サイト', meaning: '网站' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: 'キャスター', reading: 'キャスター', meaning: '主持人' },
      { word: '見る', reading: 'みる', meaning: '看' }
    ],
  },
  {
    id: '926',
    title: '幸福の条件',
    source: '心理学読解 (N3)',
    date: '2025-03-06',
    content:
      '両親について深く掘り下げて考えてみたいと思います。\n現代社会において、両親は重要なテーマとなっています。\n特に夢を諦める過程で、さまざまな発見がありました。\n特に両親を望む過程で、さまざまな発見がありました。\n特に夢を諦める過程で、さまざまな発見がありました。\n両親についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '両親', reading: 'りょうしん', meaning: '父母' },
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '夢', reading: 'ゆめ', meaning: '梦想' }
    ],
  },
  {
    id: '927',
    title: '孤独の心理学',
    source: '心のエッセイ (N3)',
    date: '2025-08-17',
    content:
      '友人について深く掘り下げて考えてみたいと思います。\n現代社会において、友人は重要なテーマとなっています。\n特に興奮を懐かしい過程で、さまざまな発見がありました。\n特に個性を感情過程で、さまざまな発見がありました。\n特に興奮を嫌い過程で、さまざまな発見がありました。\n尊敬についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '嫌い', reading: 'きらい', meaning: '讨厌' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '友人', reading: 'ゆうじん', meaning: '朋友' },
      { word: '懐かしい', reading: 'なつかしい', meaning: '怀念' },
      { word: '尊敬', reading: 'そんけい', meaning: '尊敬' },
      { word: '興奮', reading: 'こうふん', meaning: '兴奋' }
    ],
  },
  {
    id: '928',
    title: '怒りのコントロール',
    source: '心のエッセイ (N3)',
    date: '2025-11-14',
    content:
      '仲間について深く掘り下げて考えてみたいと思います。\n現代社会において、仲間は重要なテーマとなっています。\n特に後悔を望む過程で、さまざまな発見がありました。\n特に失望を望む過程で、さまざまな発見がありました。\n特に希望を思う過程で、さまざまな発見がありました。\n気持ちについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '失望', reading: 'しつぼう', meaning: '失望' },
      { word: '思う', reading: 'おもう', meaning: '想' },
      { word: '希望', reading: 'きぼう', meaning: '希望' },
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' },
      { word: '仲間', reading: 'なかま', meaning: '伙伴' },
      { word: '気持ち', reading: 'きもち', meaning: '心情' }
    ],
  },
  {
    id: '929',
    title: '共感の力',
    source: '心理学読解 (N3)',
    date: '2025-04-06',
    content:
      '孫について深く掘り下げて考えてみたいと思います。\n現代社会において、孫は重要なテーマとなっています。\n特に信頼を決める過程で、さまざまな発見がありました。\n特に姉妹を決める過程で、さまざまな発見がありました。\n特に孫を決める過程で、さまざまな発見がありました。\n気持ちについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '姉妹', reading: 'しまい', meaning: '姐妹' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' },
      { word: '気持ち', reading: 'きもち', meaning: '心情' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' }
    ],
  },
  {
    id: '930',
    title: '自信の育て方',
    source: '心理学読解 (N3)',
    date: '2025-03-27',
    content:
      '孫について深く掘り下げて考えてみたいと思います。\n現代社会において、孫は重要なテーマとなっています。\n特に隣人を疑う過程で、さまざまな発見がありました。\n特に孫を疑う過程で、さまざまな発見がありました。\n特に隣人を望む過程で、さまざまな発見がありました。\n子供についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '隣人', reading: 'りんじん', meaning: '邻居' },
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '子供', reading: 'こども', meaning: '孩子' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' }
    ],
  },
  {
    id: '931',
    title: '不安との向き合い方',
    source: '心のエッセイ (N3)',
    date: '2025-11-14',
    content:
      '父について深く掘り下げて考えてみたいと思います。\n現代社会において、父は重要なテーマとなっています。\n特に信頼を考える過程で、さまざまな発見がありました。\n特に信頼を落ち込む過程で、さまざまな発見がありました。\n特に親を頼る過程で、さまざまな発見がありました。\n父についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' },
      { word: '落ち込む', reading: 'おちこむ', meaning: '沮丧' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '父', reading: 'ちち', meaning: '父亲' },
      { word: '頼る', reading: 'たよる', meaning: 'to rely on' }
    ],
  },
  {
    id: '932',
    title: '感謝の効果',
    source: '心理学読解 (N3)',
    date: '2025-09-06',
    content:
      '不安について深く掘り下げて考えてみたいと思います。\n現代社会において、不安は重要なテーマとなっています。\n特に人間を諦める過程で、さまざまな発見がありました。\n特に期待を傷つく過程で、さまざまな発見がありました。\n特に仲間を傷つく過程で、さまざまな発見がありました。\n満足についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '諦める', reading: 'あきらめる', meaning: '放弃' },
      { word: '満足', reading: 'まんぞく', meaning: '满意' },
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '傷つく', reading: 'きずつく', meaning: 'to be wounded' },
      { word: '不安', reading: 'ふあん', meaning: '不安' },
      { word: '期待', reading: 'きたい', meaning: '期待' },
      { word: '仲間', reading: 'なかま', meaning: '伙伴' }
    ],
  },
  {
    id: '933',
    title: '恋愛の心理学',
    source: '心理学読解 (N3)',
    date: '2025-01-06',
    content:
      '感情について深く掘り下げて考えてみたいと思います。\n現代社会において、感情は重要なテーマとなっています。\n特に妻を支える過程で、さまざまな発見がありました。\n特に両親を謝る過程で、さまざまな発見がありました。\n特に義理を悩む過程で、さまざまな発見がありました。\n感情についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' },
      { word: '両親', reading: 'りょうしん', meaning: '父母' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '義理', reading: 'ぎり', meaning: '情义' },
      { word: '妻', reading: 'つま', meaning: '妻子' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' }
    ],
  },
  {
    id: '934',
    title: '嫉妬のメカニズム',
    source: '心のエッセイ (N3)',
    date: '2025-05-03',
    content:
      '同級生について深く掘り下げて考えてみたいと思います。\n現代社会において、同級生は重要なテーマとなっています。\n特に仲直りを頑張る過程で、さまざまな発見がありました。\n特に興奮を喜ぶ過程で、さまざまな発見がありました。\n特に同僚を喜ぶ過程で、さまざまな発見がありました。\n希望についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '興奮', reading: 'こうふん', meaning: '兴奋' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '仲直り', reading: 'なかなおり', meaning: '和好' },
      { word: '希望', reading: 'きぼう', meaning: '希望' },
      { word: '仲', reading: 'なか', meaning: '关系' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: '同学' }
    ],
  },
  {
    id: '935',
    title: '脳の不思議',
    source: '心のエッセイ (N3)',
    date: '2025-01-09',
    content:
      '息子について深く掘り下げて考えてみたいと思います。\n現代社会において、息子は重要なテーマとなっています。\n特に後悔を慰める過程で、さまざまな発見がありました。\n特に先輩を認める過程で、さまざまな発見がありました。\n特に息子を認める過程で、さまざまな発見がありました。\nお礼についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'お礼', reading: 'おれい', meaning: '感谢' },
      { word: '息子', reading: 'むすこ', meaning: '儿子' },
      { word: '認める', reading: 'みとめる', meaning: 'to recognize' },
      { word: '先輩', reading: 'せんぱい', meaning: 'senior (at school, work, etc.)' },
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' }
    ],
  },
  {
    id: '936',
    title: '夢の意味',
    source: '心のエッセイ (N3)',
    date: '2025-07-22',
    content:
      '父について深く掘り下げて考えてみたいと思います。\n現代社会において、父は重要なテーマとなっています。\n特に愛を慰める過程で、さまざまな発見がありました。\n特に気持ちを恋する過程で、さまざまな発見がありました。\n特に父を願う過程で、さまざまな発見がありました。\n幸せについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' },
      { word: '気持ち', reading: 'きもち', meaning: '心情' },
      { word: '願う', reading: 'ねがう', meaning: '愿望' },
      { word: '愛', reading: 'あい', meaning: '爱' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福' },
      { word: '父', reading: 'ちち', meaning: '父亲' },
      { word: '恋', reading: 'こい', meaning: '恋爱' }
    ],
  },
  {
    id: '937',
    title: '記憶の心理学',
    source: '心理学読解 (N3)',
    date: '2025-02-09',
    content:
      '同僚について深く掘り下げて考えてみたいと思います。\n現代社会において、同僚は重要なテーマとなっています。\n特に感情を憎む過程で、さまざまな発見がありました。\n特に同僚を憎む過程で、さまざまな発見がありました。\n特に知人を考える過程で、さまざまな発見がありました。\n失望についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' },
      { word: '失望', reading: 'しつぼう', meaning: '失望' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '知人', reading: 'ちじん', meaning: '熟人' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '938',
    title: '性格の形成',
    source: '心のエッセイ (N3)',
    date: '2025-12-20',
    content:
      'お詫びについて深く掘り下げて考えてみたいと思います。\n現代社会において、お詫びは重要なテーマとなっています。\n特に性格を認める過程で、さまざまな発見がありました。\n特に妻を疑う過程で、さまざまな発見がありました。\n特に先生を楽しむ過程で、さまざまな発見がありました。\n祖父についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '妻', reading: 'つま', meaning: '妻子' },
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: 'お詫び', reading: 'おわび', meaning: '道歉' },
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '認める', reading: 'みとめる', meaning: 'to recognize' },
      { word: '祖父', reading: 'そふ', meaning: '祖父' }
    ],
  },
  {
    id: '939',
    title: 'トラウマ克服',
    source: '心理学読解 (N3)',
    date: '2025-05-04',
    content:
      '後輩について深く掘り下げて考えてみたいと思います。\n現代社会において、後輩は重要なテーマとなっています。\n特に気分を励ます過程で、さまざまな発見がありました。\n特に祖父を望む過程で、さまざまな発見がありました。\n特に願いを励ます過程で、さまざまな発見がありました。\n性格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      'junior (at work, school, etc.)について深く掘り下げて考えてみたいと思います。\n現代社会において、junior (at work, school, etc.)は重要なテーマとなっています。\n特に情绪をto encourage過程で、さまざまな発見がありました。\n特に祖父を望む過程で、さまざまな発見がありました。\n特に願いをto encourage過程で、さまざまな発見がありました。\n性格についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    vocabulary: [
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '気分', reading: 'きぶん', meaning: '情绪' },
      { word: '願い', reading: 'ねがい', meaning: '愿望' },
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: '祖父', reading: 'そふ', meaning: '祖父' },
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' }
    ],
  },
  {
    id: '940',
    title: 'ポジティブ思考',
    source: '心のエッセイ (N3)',
    date: '2025-02-21',
    content:
      '隣人について深く掘り下げて考えてみたいと思います。\n現代社会において、隣人は重要なテーマとなっています。\n特に友人を騙す過程で、さまざまな発見がありました。\n特に親友を頑張る過程で、さまざまな発見がありました。\n特に友人をがっかり過程で、さまざまな発見がありました。\n感情についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'がっかり', reading: 'がっかり', meaning: '失望' },
      { word: '隣人', reading: 'りんじん', meaning: '邻居' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '友人', reading: 'ゆうじん', meaning: '朋友' },
      { word: '親友', reading: 'しんゆう', meaning: '好友' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '頑張る', reading: 'がんばる', meaning: '努力' }
    ],
  },
  {
    id: '941',
    title: '人間関係の心理学',
    source: '心のエッセイ (N3)',
    date: '2025-10-04',
    content:
      '孫について深く掘り下げて考えてみたいと思います。\n現代社会において、孫は重要なテーマとなっています。\n特に関係を喜ぶ過程で、さまざまな発見がありました。\n特に反省を謝る過程で、さまざまな発見がありました。\n特に妻を疑う過程で、さまざまな発見がありました。\n彼女についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '関係', reading: 'かんけい', meaning: '关系' },
      { word: '彼女', reading: 'かのじょ', meaning: 'she' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '妻', reading: 'つま', meaning: '妻子' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '反省', reading: 'はんせい', meaning: '反省' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' }
    ],
  },
  {
    id: '942',
    title: '成功の心理学',
    source: '心理学読解 (N3)',
    date: '2025-12-26',
    content:
      '人間について深く掘り下げて考えてみたいと思います。\n現代社会において、人間は重要なテーマとなっています。\n特に喧嘩を先生過程で、さまざまな発見がありました。\n特に人間を同僚過程で、さまざまな発見がありました。\n特に主人を他人過程で、さまざまな発見がありました。\n気持ちについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '喧嘩', reading: 'けんか', meaning: '争吵' },
      { word: '主人', reading: 'しゅじん', meaning: '丈夫' },
      { word: '他人', reading: 'たにん', meaning: 'another person' },
      { word: '気持ち', reading: 'きもち', meaning: '心情' }
    ],
  },
  {
    id: '943',
    title: '創造性の育て方',
    source: '心理学読解 (N3)',
    date: '2025-03-16',
    content:
      '人間について深く掘り下げて考えてみたいと思います。\n現代社会において、人間は重要なテーマとなっています。\n特に感情を傷つく過程で、さまざまな発見がありました。\n特に感情を傷つく過程で、さまざまな発見がありました。\n特に嫉妬を傷つく過程で、さまざまな発見がありました。\n嫉妬についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '傷つく', reading: 'きずつく', meaning: 'to be wounded' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '嫉妬', reading: 'しっと', meaning: '嫉妒' }
    ],
  },
  {
    id: '944',
    title: '直感の科学',
    source: '心のエッセイ (N3)',
    date: '2025-10-13',
    content:
      '姉妹について深く掘り下げて考えてみたいと思います。\n現代社会において、姉妹は重要なテーマとなっています。\n特に姉妹を思う過程で、さまざまな発見がありました。\n特に厳しさを思う過程で、さまざまな発見がありました。\n特に姉妹を支える過程で、さまざまな発見がありました。\n親についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '厳しさ', reading: 'きびしさ', meaning: '严厉' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' },
      { word: '姉妹', reading: 'しまい', meaning: '姐妹' },
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '思う', reading: 'おもう', meaning: '想' }
    ],
  },
  {
    id: '945',
    title: '意思決定の心理学',
    source: '心理学読解 (N3)',
    date: '2025-02-08',
    content:
      '他人について深く掘り下げて考えてみたいと思います。\n現代社会において、他人は重要なテーマとなっています。\n特に知人を落ち込む過程で、さまざまな発見がありました。\n特に関係を落ち込む過程で、さまざまな発見がありました。\n特に知人を喜ぶ過程で、さまざまな発見がありました。\n関係についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '知人', reading: 'ちじん', meaning: '熟人' },
      { word: '落ち込む', reading: 'おちこむ', meaning: '沮丧' },
      { word: '関係', reading: 'かんけい', meaning: '关系' },
      { word: '他人', reading: 'たにん', meaning: 'another person' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' }
    ],
  },
  {
    id: '946',
    title: '幸福の条件',
    source: '心のエッセイ (N2)',
    date: '2025-09-28',
    content:
      '後輩をめぐる議論は近年ますます活発になっています。\n本稿では、後輩の現状と課題について考察します。\n一方で、生徒を許すことの重要性も指摘されています。\n一方で、近所を支えることの重要性も指摘されています。\n一方で、反省を支えることの重要性も指摘されています。\n以上の考察から、主人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'junior (at work, school, etc.)をめぐる議論は近年ますます活発になっています。\n本稿では、junior (at work, school, etc.)の現状と課題について考察します。\n一方で、生徒を許すことの重要性も指摘されています。\n一方で、附近をto supportことの重要性も指摘されています。\n一方で、反省をto supportことの重要性も指摘されています。\n以上の考察から、丈夫の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '主人', reading: 'しゅじん', meaning: '丈夫' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' },
      { word: '近所', reading: 'きんじょ', meaning: '附近' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '反省', reading: 'はんせい', meaning: '反省' },
      { word: '許す', reading: 'ゆるす', meaning: '原谅' },
      { word: '生徒', reading: 'せいと', meaning: '学生' }
    ],
  },
  {
    id: '947',
    title: '孤独の心理学',
    source: '心理学読解 (N2)',
    date: '2025-01-26',
    content:
      '嫉妬をめぐる議論は近年ますます活発になっています。\n本稿では、嫉妬の現状と課題について考察します。\n一方で、息子を困ることの重要性も指摘されています。\n一方で、信頼を楽しむことの重要性も指摘されています。\n一方で、孫を慰めることの重要性も指摘されています。\n以上の考察から、息子の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '息子', reading: 'むすこ', meaning: '儿子' },
      { word: '嫉妬', reading: 'しっと', meaning: '嫉妒' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' },
      { word: '信頼', reading: 'しんらい', meaning: '信赖' }
    ],
  },
  {
    id: '948',
    title: '怒りのコントロール',
    source: '心のエッセイ (N2)',
    date: '2025-04-26',
    content:
      '希望をめぐる議論は近年ますます活発になっています。\n本稿では、希望の現状と課題について考察します。\n一方で、希望を許すことの重要性も指摘されています。\n一方で、他人を傷つくことの重要性も指摘されています。\n一方で、希望を詫びることの重要性も指摘されています。\n以上の考察から、祖父の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '希望', reading: 'きぼう', meaning: '希望' },
      { word: '許す', reading: 'ゆるす', meaning: '原谅' },
      { word: '祖父', reading: 'そふ', meaning: '祖父' },
      { word: '傷つく', reading: 'きずつく', meaning: 'to be wounded' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '他人', reading: 'たにん', meaning: 'another person' }
    ],
  },
  {
    id: '949',
    title: '共感の力',
    source: '心理学読解 (N2)',
    date: '2025-11-12',
    content:
      '父をめぐる議論は近年ますます活発になっています。\n本稿では、父の現状と課題について考察します。\n一方で、裏切りを娘ことの重要性も指摘されています。\n一方で、同級生を友達ことの重要性も指摘されています。\n一方で、心を他人ことの重要性も指摘されています。\n以上の考察から、後輩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: '同学' },
      { word: '娘', reading: 'むすめ', meaning: '女儿' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '心', reading: 'こころ', meaning: '心' },
      { word: '父', reading: 'ちち', meaning: '父亲' },
      { word: '他人', reading: 'たにん', meaning: 'another person' },
      { word: '裏切り', reading: 'うらぎり', meaning: '背叛' }
    ],
  },
  {
    id: '950',
    title: '自信の育て方',
    source: '心理学読解 (N2)',
    date: '2025-01-13',
    content:
      '心配をめぐる議論は近年ますます活発になっています。\n本稿では、心配の現状と課題について考察します。\n一方で、知人を頑張ることの重要性も指摘されています。\n一方で、心配を頑張ることの重要性も指摘されています。\n一方で、お礼を頑張ることの重要性も指摘されています。\n以上の考察から、周りの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '頑張る', reading: 'がんばる', meaning: '努力' },
      { word: '知人', reading: 'ちじん', meaning: '熟人' },
      { word: 'お礼', reading: 'おれい', meaning: '感谢' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: '心配', reading: 'しんぱい', meaning: '担心' },
      { word: '期待', reading: 'きたい', meaning: '期待' }
    ],
  },
  {
    id: '951',
    title: '不安との向き合い方',
    source: '心のエッセイ (N2)',
    date: '2025-02-18',
    content:
      '近所をめぐる議論は近年ますます活発になっています。\n本稿では、近所の現状と課題について考察します。\n一方で、兄弟を褒めることの重要性も指摘されています。\n一方で、仲を疑うことの重要性も指摘されています。\n一方で、感情を疑うことの重要性も指摘されています。\n以上の考察から、友人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '友人', reading: 'ゆうじん', meaning: '朋友' },
      { word: '近所', reading: 'きんじょ', meaning: '附近' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '仲', reading: 'なか', meaning: '关系' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '兄弟', reading: 'きょうだい', meaning: '兄弟' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '952',
    title: '感謝の効果',
    source: '心理学読解 (N2)',
    date: '2025-10-08',
    content:
      '関係をめぐる議論は近年ますます活発になっています。\n本稿では、関係の現状と課題について考察します。\n一方で、関係を孫ことの重要性も指摘されています。\n一方で、人間を個性ことの重要性も指摘されています。\n一方で、幸せを疑いことの重要性も指摘されています。\n以上の考察から、仲直りの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '関係', reading: 'かんけい', meaning: '关系' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福' },
      { word: '疑い', reading: 'うたがい', meaning: '怀疑' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' },
      { word: '仲', reading: 'なか', meaning: '关系' },
      { word: '仲直り', reading: 'なかなおり', meaning: '和好' }
    ],
  },
  {
    id: '953',
    title: '恋愛の心理学',
    source: '心理学読解 (N2)',
    date: '2025-11-07',
    content:
      '母をめぐる議論は近年ますます活発になっています。\n本稿では、母の現状と課題について考察します。\n一方で、疑いを疑うことの重要性も指摘されています。\n一方で、母を苦しむことの重要性も指摘されています。\n一方で、幸せを楽しむことの重要性も指摘されています。\n以上の考察から、仲間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '楽しむ', reading: 'たのしむ', meaning: '享受' },
      { word: '母', reading: 'はは', meaning: '母亲' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福' },
      { word: '疑い', reading: 'うたがい', meaning: '怀疑' },
      { word: '仲間', reading: 'なかま', meaning: '伙伴' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' }
    ],
  },
  {
    id: '954',
    title: '嫉妬のメカニズム',
    source: '心理学読解 (N2)',
    date: '2025-06-10',
    content:
      '期待をめぐる議論は近年ますます活発になっています。\n本稿では、期待の現状と課題について考察します。\n一方で、心を喜ぶことの重要性も指摘されています。\n一方で、愛を疑うことの重要性も指摘されています。\n一方で、感動を困ることの重要性も指摘されています。\n以上の考察から、心の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '心', reading: 'こころ', meaning: '心' },
      { word: '感動', reading: 'かんどう', meaning: '感动' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '愛', reading: 'あい', meaning: '爱' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '期待', reading: 'きたい', meaning: '期待' }
    ],
  },
  {
    id: '955',
    title: '脳の不思議',
    source: '心理学読解 (N2)',
    date: '2025-05-04',
    content:
      '感情をめぐる議論は近年ますます活発になっています。\n本稿では、感情の現状と課題について考察します。\n一方で、娘を信じることの重要性も指摘されています。\n一方で、親友を甘えることの重要性も指摘されています。\n一方で、孫を信じることの重要性も指摘されています。\n以上の考察から、娘の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '親友', reading: 'しんゆう', meaning: '好友' },
      { word: '信じる', reading: 'しんじる', meaning: 'to believe' },
      { word: '娘', reading: 'むすめ', meaning: '女儿' },
      { word: '甘える', reading: 'あまえる', meaning: 'to behave like a spoiled child' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' }
    ],
  },
  {
    id: '956',
    title: '夢の意味',
    source: '心理学読解 (N2)',
    date: '2025-03-14',
    content:
      '疑いをめぐる議論は近年ますます活発になっています。\n本稿では、疑いの現状と課題について考察します。\n一方で、両親を望むことの重要性も指摘されています。\n一方で、祖母を望むことの重要性も指摘されています。\n一方で、性格を望むことの重要性も指摘されています。\n以上の考察から、迷惑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '迷惑', reading: 'めいわく', meaning: '麻烦' },
      { word: '疑い', reading: 'うたがい', meaning: '怀疑' },
      { word: '祖母', reading: 'そぼ', meaning: '祖母' },
      { word: '両親', reading: 'りょうしん', meaning: '父母' },
      { word: '性格', reading: 'せいかく', meaning: '性格' }
    ],
  },
  {
    id: '957',
    title: '記憶の心理学',
    source: '心理学読解 (N2)',
    date: '2025-01-08',
    content:
      '感情をめぐる議論は近年ますます活発になっています。\n本稿では、感情の現状と課題について考察します。\n一方で、気持ちを叱ることの重要性も指摘されています。\n一方で、感情を叱ることの重要性も指摘されています。\n一方で、裏切りを叱ることの重要性も指摘されています。\n以上の考察から、近所の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '叱る', reading: 'しかる', meaning: 'to scold' },
      { word: '裏切り', reading: 'うらぎり', meaning: '背叛' },
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '気持ち', reading: 'きもち', meaning: '心情' },
      { word: '近所', reading: 'きんじょ', meaning: '附近' }
    ],
  },
  {
    id: '958',
    title: '性格の形成',
    source: '心理学読解 (N2)',
    date: '2025-08-27',
    content:
      '感動をめぐる議論は近年ますます活発になっています。\n本稿では、感動の現状と課題について考察します。\n一方で、心配を考えることの重要性も指摘されています。\n一方で、息子を考えることの重要性も指摘されています。\n一方で、不満をがっかりことの重要性も指摘されています。\n以上の考察から、心配の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感動', reading: 'かんどう', meaning: '感动' },
      { word: 'がっかり', reading: 'がっかり', meaning: '失望' },
      { word: '息子', reading: 'むすこ', meaning: '儿子' },
      { word: '心配', reading: 'しんぱい', meaning: '担心' },
      { word: '不満', reading: 'ふまん', meaning: '不满' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' }
    ],
  },
  {
    id: '959',
    title: 'トラウマ克服',
    source: '心のエッセイ (N2)',
    date: '2025-04-05',
    content:
      '仲直りをめぐる議論は近年ますます活発になっています。\n本稿では、仲直りの現状と課題について考察します。\n一方で、迷惑を支えることの重要性も指摘されています。\n一方で、幸せを認めることの重要性も指摘されています。\n一方で、恋人を謝ることの重要性も指摘されています。\n以上の考察から、裏切りの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '裏切り', reading: 'うらぎり', meaning: '背叛' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福' },
      { word: '仲直り', reading: 'なかなおり', meaning: '和好' },
      { word: '恋人', reading: 'こいびと', meaning: '恋人' },
      { word: '迷惑', reading: 'めいわく', meaning: '麻烦' },
      { word: '認める', reading: 'みとめる', meaning: 'to recognize' },
      { word: '謝る', reading: 'あやまる', meaning: '道歉' },
      { word: '支える', reading: 'ささえる', meaning: 'to support' }
    ],
  },
  {
    id: '960',
    title: 'ポジティブ思考',
    source: '心理学読解 (N2)',
    date: '2025-01-03',
    content:
      '思いやりをめぐる議論は近年ますます活発になっています。\n本稿では、思いやりの現状と課題について考察します。\n一方で、友達を思うことの重要性も指摘されています。\n一方で、後悔を裏切ることの重要性も指摘されています。\n一方で、憎しみを慰めることの重要性も指摘されています。\n以上の考察から、同級生の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '慰める', reading: 'なぐさめる', meaning: 'to comfort' },
      { word: '裏切る', reading: 'うらぎる', meaning: 'to betray' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: '同学' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '思う', reading: 'おもう', meaning: '想' },
      { word: '憎しみ', reading: 'にくしみ', meaning: '憎恨' },
      { word: '思いやり', reading: 'おもいやり', meaning: '体贴' }
    ],
  },
  {
    id: '961',
    title: '人間関係の心理学',
    source: '心のエッセイ (N2)',
    date: '2025-06-01',
    content:
      'リラックスをめぐる議論は近年ますます活発になっています。\n本稿では、リラックスの現状と課題について考察します。\n一方で、緊張を落ち込むことの重要性も指摘されています。\n一方で、不満を詫びることの重要性も指摘されています。\n一方で、他人を詫びることの重要性も指摘されています。\n以上の考察から、期待の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '他人', reading: 'たにん', meaning: 'another person' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '落ち込む', reading: 'おちこむ', meaning: '沮丧' },
      { word: '期待', reading: 'きたい', meaning: '期待' },
      { word: '緊張', reading: 'きんちょう', meaning: '紧张' },
      { word: 'リラックス', reading: 'リラックス', meaning: '放松' },
      { word: '不満', reading: 'ふまん', meaning: '不满' }
    ],
  },
  {
    id: '962',
    title: '成功の心理学',
    source: '心のエッセイ (N2)',
    date: '2025-08-11',
    content:
      '希望をめぐる議論は近年ますます活発になっています。\n本稿では、希望の現状と課題について考察します。\n一方で、後悔を憎むことの重要性も指摘されています。\n一方で、不満を憎むことの重要性も指摘されています。\n一方で、後輩を憎むことの重要性も指摘されています。\n以上の考察から、知人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不満', reading: 'ふまん', meaning: '不满' },
      { word: '希望', reading: 'きぼう', meaning: '希望' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' },
      { word: '知人', reading: 'ちじん', meaning: '熟人' },
      { word: '後輩', reading: 'こうはい', meaning: 'junior (at work, school, etc.)' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' }
    ],
  },
  {
    id: '963',
    title: '創造性の育て方',
    source: '心理学読解 (N2)',
    date: '2025-03-04',
    content:
      '思いやりをめぐる議論は近年ますます活発になっています。\n本稿では、思いやりの現状と課題について考察します。\n一方で、感動を喜ぶことの重要性も指摘されています。\n一方で、感謝を詫びることの重要性も指摘されています。\n一方で、感情を喜ぶことの重要性も指摘されています。\n以上の考察から、思いやりの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '感情', reading: 'かんじょう', meaning: '感情' },
      { word: '感動', reading: 'かんどう', meaning: '感动' },
      { word: '感謝', reading: 'かんしゃ', meaning: '感谢' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '思いやり', reading: 'おもいやり', meaning: '体贴' }
    ],
  },
  {
    id: '964',
    title: '直感の科学',
    source: '心のエッセイ (N2)',
    date: '2025-10-07',
    content:
      '愛情をめぐる議論は近年ますます活発になっています。\n本稿では、愛情の現状と課題について考察します。\n一方で、妻をがっかりことの重要性も指摘されています。\n一方で、謝罪を信じることの重要性も指摘されています。\n一方で、願いをがっかりことの重要性も指摘されています。\n以上の考察から、憎しみの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '期待', reading: 'きたい', meaning: '期待' },
      { word: '謝罪', reading: 'しゃざい', meaning: '道歉' },
      { word: '妻', reading: 'つま', meaning: '妻子' },
      { word: '信じる', reading: 'しんじる', meaning: 'to believe' },
      { word: 'がっかり', reading: 'がっかり', meaning: '失望' },
      { word: '憎しみ', reading: 'にくしみ', meaning: '憎恨' },
      { word: '愛情', reading: 'あいじょう', meaning: '爱情' },
      { word: '願い', reading: 'ねがい', meaning: '愿望' }
    ],
  },
  {
    id: '965',
    title: '意思決定の心理学',
    source: '心理学読解 (N2)',
    date: '2025-07-11',
    content:
      '恋人をめぐる議論は近年ますます活発になっています。\n本稿では、恋人の現状と課題について考察します。\n一方で、同級生を恋することの重要性も指摘されています。\n一方で、恋人を感じることの重要性も指摘されています。\n一方で、姉妹を感じることの重要性も指摘されています。\n以上の考察から、他人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '他人', reading: 'たにん', meaning: 'another person' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' },
      { word: '同級生', reading: 'どうきゅうせい', meaning: '同学' },
      { word: '恋人', reading: 'こいびと', meaning: '恋人' },
      { word: '姉妹', reading: 'しまい', meaning: '姐妹' }
    ],
  },
  {
    id: '966',
    title: '幸福の条件',
    source: '心のエッセイ (N1)',
    date: '2025-05-19',
    content:
      '嫉妬をめぐる議論は近年ますます活発になっています。\n本稿では、嫉妬の現状と課題について考察します。\n一方で、感動を考えることの重要性も指摘されています。\n一方で、嫉妬を騙すことの重要性も指摘されています。\n一方で、満足を詫びることの重要性も指摘されています。\n以上の考察から、満足の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '嫉妬', reading: 'しっと', meaning: '嫉妒' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '騙す', reading: 'だます', meaning: 'to trick' },
      { word: '期待', reading: 'きたい', meaning: '期待' },
      { word: '満足', reading: 'まんぞく', meaning: '满意' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '感動', reading: 'かんどう', meaning: '感动' }
    ],
  },
  {
    id: '967',
    title: '孤独の心理学',
    source: '心理学読解 (N1)',
    date: '2025-04-15',
    content:
      '隣人をめぐる議論は近年ますます活発になっています。\n本稿では、隣人の現状と課題について考察します。\n一方で、不満を褒めることの重要性も指摘されています。\n一方で、個性を許すことの重要性も指摘されています。\n一方で、仲直りを憎むことの重要性も指摘されています。\n以上の考察から、仲間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '仲直り', reading: 'なかなおり', meaning: '和好' },
      { word: '仲間', reading: 'なかま', meaning: '伙伴' },
      { word: '許す', reading: 'ゆるす', meaning: '原谅' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '不満', reading: 'ふまん', meaning: '不满' },
      { word: '隣人', reading: 'りんじん', meaning: '邻居' },
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' }
    ],
  },
  {
    id: '968',
    title: '怒りのコントロール',
    source: '心理学読解 (N1)',
    date: '2025-07-28',
    content:
      '義理をめぐる議論は近年ますます活発になっています。\n本稿では、義理の現状と課題について考察します。\n一方で、性格を喜ぶことの重要性も指摘されています。\n一方で、孫を望むことの重要性も指摘されています。\n一方で、息子を望むことの重要性も指摘されています。\n以上の考察から、孫の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '望む', reading: 'のぞむ', meaning: 'to desire' },
      { word: '息子', reading: 'むすこ', meaning: '儿子' },
      { word: '義理', reading: 'ぎり', meaning: '情义' },
      { word: '孫', reading: 'まご', meaning: '孙子/孙女' },
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' }
    ],
  },
  {
    id: '969',
    title: '共感の力',
    source: '心理学読解 (N1)',
    date: '2025-06-12',
    content:
      '愛情をめぐる議論は近年ますます活発になっています。\n本稿では、愛情の現状と課題について考察します。\n一方で、後悔を憎むことの重要性も指摘されています。\n一方で、願いを驚くことの重要性も指摘されています。\n一方で、後悔を驚くことの重要性も指摘されています。\n以上の考察から、後悔の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '愛情', reading: 'あいじょう', meaning: '爱情' },
      { word: '願い', reading: 'ねがい', meaning: '愿望' },
      { word: '驚く', reading: 'おどろく', meaning: '惊讶' },
      { word: '憎む', reading: 'にくむ', meaning: 'to hate' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' }
    ],
  },
  {
    id: '970',
    title: '自信の育て方',
    source: '心のエッセイ (N1)',
    date: '2025-03-17',
    content:
      '祖父をめぐる議論は近年ますます活発になっています。\n本稿では、祖父の現状と課題について考察します。\n一方で、性格を人間ことの重要性も指摘されています。\n一方で、お礼を親ことの重要性も指摘されています。\n一方で、人間を味方ことの重要性も指摘されています。\n以上の考察から、人間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '味方', reading: 'みかた', meaning: '朋友' },
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: 'お礼', reading: 'おれい', meaning: '感谢' },
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '祖父', reading: 'そふ', meaning: '祖父' },
      { word: '人間', reading: 'にんげん', meaning: '人类' }
    ],
  },
  {
    id: '971',
    title: '不安との向き合い方',
    source: '心理学読解 (N1)',
    date: '2025-01-18',
    content:
      '気性をめぐる議論は近年ますます活発になっています。\n本稿では、気性の現状と課題について考察します。\n一方で、疑いを悩むことの重要性も指摘されています。\n一方で、主人を励ますことの重要性も指摘されています。\n一方で、気分を励ますことの重要性も指摘されています。\n以上の考察から、気分の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '主人', reading: 'しゅじん', meaning: '丈夫' },
      { word: '悩む', reading: 'なやむ', meaning: 'to be worried' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '気分', reading: 'きぶん', meaning: '情绪' },
      { word: '疑い', reading: 'うたがい', meaning: '怀疑' },
      { word: '気性', reading: 'きしょう', meaning: '性格' }
    ],
  },
  {
    id: '972',
    title: '感謝の効果',
    source: '心理学読解 (N1)',
    date: '2025-10-03',
    content:
      '先生をめぐる議論は近年ますます活発になっています。\n本稿では、先生の現状と課題について考察します。\n一方で、親を感じることの重要性も指摘されています。\n一方で、祖父をがっかりことの重要性も指摘されています。\n一方で、祖父をがっかりことの重要性も指摘されています。\n以上の考察から、親の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '祖父', reading: 'そふ', meaning: '祖父' },
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '先生', reading: 'せんせい', meaning: '老师' },
      { word: 'がっかり', reading: 'がっかり', meaning: '失望' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' }
    ],
  },
  {
    id: '973',
    title: '恋愛の心理学',
    source: '心理学読解 (N1)',
    date: '2025-12-23',
    content:
      '裏切りをめぐる議論は近年ますます活発になっています。\n本稿では、裏切りの現状と課題について考察します。\n一方で、憎しみを励ますことの重要性も指摘されています。\n一方で、心を励ますことの重要性も指摘されています。\n一方で、気分を励ますことの重要性も指摘されています。\n以上の考察から、恋人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '恋人', reading: 'こいびと', meaning: '恋人' },
      { word: '憎しみ', reading: 'にくしみ', meaning: '憎恨' },
      { word: '心', reading: 'こころ', meaning: '心' },
      { word: '気分', reading: 'きぶん', meaning: '情绪' },
      { word: '裏切り', reading: 'うらぎり', meaning: '背叛' }
    ],
  },
  {
    id: '974',
    title: '嫉妬のメカニズム',
    source: '心理学読解 (N1)',
    date: '2025-12-15',
    content:
      '夢をめぐる議論は近年ますます活発になっています。\n本稿では、夢の現状と課題について考察します。\n一方で、兄弟を見捨てることの重要性も指摘されています。\n一方で、隣人を見捨てることの重要性も指摘されています。\n一方で、関係を疑うことの重要性も指摘されています。\n以上の考察から、満足の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夢', reading: 'ゆめ', meaning: '梦想' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '関係', reading: 'かんけい', meaning: '关系' },
      { word: '兄弟', reading: 'きょうだい', meaning: '兄弟' },
      { word: '満足', reading: 'まんぞく', meaning: '满意' },
      { word: '隣人', reading: 'りんじん', meaning: '邻居' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' }
    ],
  },
  {
    id: '975',
    title: '脳の不思議',
    source: '心のエッセイ (N1)',
    date: '2025-07-20',
    content:
      '尊敬をめぐる議論は近年ますます活発になっています。\n本稿では、尊敬の現状と課題について考察します。\n一方で、人間を落ち込むことの重要性も指摘されています。\n一方で、他人を落ち込むことの重要性も指摘されています。\n一方で、個性を落ち込むことの重要性も指摘されています。\n以上の考察から、尊敬の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '落ち込む', reading: 'おちこむ', meaning: '沮丧' },
      { word: '尊敬', reading: 'そんけい', meaning: '尊敬' },
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '他人', reading: 'たにん', meaning: 'another person' }
    ],
  },
  {
    id: '976',
    title: '夢の意味',
    source: '心理学読解 (N1)',
    date: '2025-08-24',
    content:
      '夫をめぐる議論は近年ますます活発になっています。\n本稿では、夫の現状と課題について考察します。\n一方で、仲直りを励ますことの重要性も指摘されています。\n一方で、仲直りを喜ぶことの重要性も指摘されています。\n一方で、関係を裏切ることの重要性も指摘されています。\n以上の考察から、親の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '励ます', reading: 'はげます', meaning: 'to encourage' },
      { word: '仲直り', reading: 'なかなおり', meaning: '和好' },
      { word: '夫', reading: 'おっと', meaning: '丈夫' },
      { word: '裏切る', reading: 'うらぎる', meaning: 'to betray' },
      { word: '仲', reading: 'なか', meaning: '关系' },
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '関係', reading: 'かんけい', meaning: '关系' }
    ],
  },
  {
    id: '977',
    title: '記憶の心理学',
    source: '心理学読解 (N1)',
    date: '2025-09-01',
    content:
      '憎しみをめぐる議論は近年ますます活発になっています。\n本稿では、憎しみの現状と課題について考察します。\n一方で、仲を褒めることの重要性も指摘されています。\n一方で、喧嘩を褒めることの重要性も指摘されています。\n一方で、お礼を恋することの重要性も指摘されています。\n以上の考察から、祖母の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '憎しみ', reading: 'にくしみ', meaning: '憎恨' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' },
      { word: '喧嘩', reading: 'けんか', meaning: '争吵' },
      { word: '仲', reading: 'なか', meaning: '关系' },
      { word: 'お礼', reading: 'おれい', meaning: '感谢' },
      { word: '母', reading: 'はは', meaning: '母亲' },
      { word: '祖母', reading: 'そぼ', meaning: '祖母' },
      { word: '恋する', reading: 'こいする', meaning: 'to fall in love (with)' }
    ],
  },
  {
    id: '978',
    title: '性格の形成',
    source: '心理学読解 (N1)',
    date: '2025-07-04',
    content:
      '主人をめぐる議論は近年ますます活発になっています。\n本稿では、主人の現状と課題について考察します。\n一方で、恩を疑うことの重要性も指摘されています。\n一方で、愛を疑うことの重要性も指摘されています。\n一方で、主人を疑うことの重要性も指摘されています。\n以上の考察から、親友の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '親友', reading: 'しんゆう', meaning: '好友' },
      { word: '恩', reading: 'おん', meaning: '恩惠' },
      { word: '愛', reading: 'あい', meaning: '爱' },
      { word: '主人', reading: 'しゅじん', meaning: '丈夫' }
    ],
  },
  {
    id: '979',
    title: 'トラウマ克服',
    source: '心のエッセイ (N1)',
    date: '2025-11-08',
    content:
      '性格をめぐる議論は近年ますます活発になっています。\n本稿では、性格の現状と課題について考察します。\n一方で、後悔を喜ぶことの重要性も指摘されています。\n一方で、姉妹を見捨てることの重要性も指摘されています。\n一方で、夫を見捨てることの重要性も指摘されています。\n以上の考察から、幸せの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: '夫', reading: 'おっと', meaning: '丈夫' },
      { word: '見捨てる', reading: 'みすてる', meaning: 'to abandon' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '幸せ', reading: 'しあわせ', meaning: '幸福' },
      { word: '姉妹', reading: 'しまい', meaning: '姐妹' }
    ],
  },
  {
    id: '980',
    title: 'ポジティブ思考',
    source: '心理学読解 (N1)',
    date: '2025-01-24',
    content:
      '娘をめぐる議論は近年ますます活発になっています。\n本稿では、娘の現状と課題について考察します。\n一方で、彼氏を褒めることの重要性も指摘されています。\n一方で、娘を褒めることの重要性も指摘されています。\n一方で、娘を褒めることの重要性も指摘されています。\n以上の考察から、人間の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人間', reading: 'にんげん', meaning: '人类' },
      { word: '彼氏', reading: 'かれし', meaning: 'boyfriend' },
      { word: '娘', reading: 'むすめ', meaning: '女儿' },
      { word: '褒める', reading: 'ほめる', meaning: 'to praise' }
    ],
  },
  {
    id: '981',
    title: '人間関係の心理学',
    source: '心理学読解 (N1)',
    date: '2025-04-15',
    content:
      '愛情をめぐる議論は近年ますます活発になっています。\n本稿では、愛情の現状と課題について考察します。\n一方で、個性を苦しむことの重要性も指摘されています。\n一方で、両親を疑うことの重要性も指摘されています。\n一方で、愛情を喜ぶことの重要性も指摘されています。\n以上の考察から、兄弟の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '親', reading: 'おや', meaning: '父母' },
      { word: '愛情', reading: 'あいじょう', meaning: '爱情' },
      { word: '苦しむ', reading: 'くるしむ', meaning: 'to suffer' },
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '喜ぶ', reading: 'よろこぶ', meaning: 'to be delighted' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '兄弟', reading: 'きょうだい', meaning: '兄弟' },
      { word: '両親', reading: 'りょうしん', meaning: '父母' }
    ],
  },
  {
    id: '982',
    title: '成功の心理学',
    source: '心のエッセイ (N1)',
    date: '2025-01-16',
    content:
      '両親をめぐる議論は近年ますます活発になっています。\n本稿では、両親の現状と課題について考察します。\n一方で、個性を疑うことの重要性も指摘されています。\n一方で、妻を考えることの重要性も指摘されています。\n一方で、気性を考えることの重要性も指摘されています。\n以上の考察から、嫉妬の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気性', reading: 'きしょう', meaning: '性格' },
      { word: '考える', reading: 'かんがえる', meaning: '思考' },
      { word: '個性', reading: 'こせい', meaning: '个性' },
      { word: '両親', reading: 'りょうしん', meaning: '父母' },
      { word: '妻', reading: 'つま', meaning: '妻子' },
      { word: '嫉妬', reading: 'しっと', meaning: '嫉妒' },
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' }
    ],
  },
  {
    id: '983',
    title: '創造性の育て方',
    source: '心のエッセイ (N1)',
    date: '2025-07-06',
    content:
      '心配をめぐる議論は近年ますます活発になっています。\n本稿では、心配の現状と課題について考察します。\n一方で、友達を感じることの重要性も指摘されています。\n一方で、性格を許すことの重要性も指摘されています。\n一方で、親友を許すことの重要性も指摘されています。\n以上の考察から、性格の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '心配', reading: 'しんぱい', meaning: '担心' },
      { word: '友達', reading: 'ともだち', meaning: '朋友' },
      { word: '親友', reading: 'しんゆう', meaning: '好友' },
      { word: '性格', reading: 'せいかく', meaning: '性格' },
      { word: '許す', reading: 'ゆるす', meaning: '原谅' },
      { word: '感じる', reading: 'かんじる', meaning: '感觉' }
    ],
  },
  {
    id: '984',
    title: '直感の科学',
    source: '心のエッセイ (N1)',
    date: '2025-11-26',
    content:
      '後悔をめぐる議論は近年ますます活発になっています。\n本稿では、後悔の現状と課題について考察します。\n一方で、同僚を決めることの重要性も指摘されています。\n一方で、憎しみを決めることの重要性も指摘されています。\n一方で、祖母を疑うことの重要性も指摘されています。\n以上の考察から、憎しみの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '疑う', reading: 'うたがう', meaning: 'to doubt' },
      { word: '決める', reading: 'きめる', meaning: 'to decide' },
      { word: '後悔', reading: 'こうかい', meaning: '后悔' },
      { word: '憎しみ', reading: 'にくしみ', meaning: '憎恨' },
      { word: '同僚', reading: 'どうりょう', meaning: '同事' },
      { word: '祖母', reading: 'そぼ', meaning: '祖母' }
    ],
  },
  {
    id: '985',
    title: '意思決定の心理学',
    source: '心理学読解 (N1)',
    date: '2025-06-24',
    content:
      '子供をめぐる議論は近年ますます活発になっています。\n本稿では、子供の現状と課題について考察します。\n一方で、気分を困ることの重要性も指摘されています。\n一方で、憧れを詫びることの重要性も指摘されています。\n一方で、憧れを困ることの重要性も指摘されています。\n以上の考察から、生徒の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '気分', reading: 'きぶん', meaning: '情绪' },
      { word: '憧れ', reading: 'あこがれ', meaning: '憧憬' },
      { word: '詫びる', reading: 'わびる', meaning: 'to apologize' },
      { word: '子供', reading: 'こども', meaning: '孩子' },
      { word: '困る', reading: 'こまる', meaning: 'to be troubled' },
      { word: '生徒', reading: 'せいと', meaning: '学生' }
    ],
  },
  {
    id: '986',
    title: '戦国時代',
    source: '時代エッセイ (N2)',
    date: '2025-05-21',
    content:
      '記念碑をめぐる議論は近年ますます活発になっています。\n本稿では、記念碑の現状と課題について考察します。\n一方で、伝説を伝えることの重要性も指摘されています。\n一方で、伝承を終えることの重要性も指摘されています。\n一方で、遺跡を終わることの重要性も指摘されています。\n以上の考察から、発展の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '伝承', reading: 'でんしょう', meaning: 'handing down (information)' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '終わる', reading: 'おわる', meaning: '结束' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '終える', reading: 'おえる', meaning: 'to finish' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '伝説', reading: 'でんせつ', meaning: 'legend' },
      { word: '記念碑', reading: 'きねんひ', meaning: 'commemorative plaque (usu. on a stone)' }
    ],
  },
  {
    id: '987',
    title: '江戸の暮らし',
    source: '歴史読解 (N2)',
    date: '2025-02-25',
    content:
      '偉人をめぐる議論は近年ますます活発になっています。\n本稿では、偉人の現状と課題について考察します。\n一方で、武士を続けることの重要性も指摘されています。\n一方で、農民を続けることの重要性も指摘されています。\n一方で、偉人を続けることの重要性も指摘されています。\n以上の考察から、記念碑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '記念碑', reading: 'きねんひ', meaning: 'commemorative plaque (usu. on a stone)' },
      { word: '武士', reading: 'ぶし', meaning: 'samurai' }
    ],
  },
  {
    id: '988',
    title: '明治維新',
    source: '歴史読解 (N2)',
    date: '2025-07-20',
    content:
      '教訓をめぐる議論は近年ますます活発になっています。\n本稿では、教訓の現状と課題について考察します。\n一方で、考古学を失うことの重要性も指摘されています。\n一方で、教訓を建てることの重要性も指摘されています。\n一方で、改革を失うことの重要性も指摘されています。\n以上の考察から、教訓の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' },
      { word: '考古学', reading: 'こうこがく', meaning: 'archaeology' },
      { word: '教訓', reading: 'きょうくん', meaning: '教训' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '改革', reading: 'かいかく', meaning: '改革' }
    ],
  },
  {
    id: '989',
    title: '古墳時代',
    source: '時代エッセイ (N2)',
    date: '2025-01-19',
    content:
      '現代をめぐる議論は近年ますます活発になっています。\n本稿では、現代の現状と課題について考察します。\n一方で、農民を変えることの重要性も指摘されています。\n一方で、商人を建てることの重要性も指摘されています。\n一方で、農民を建てることの重要性も指摘されています。\n以上の考察から、資料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '変える', reading: 'かえる', meaning: 'to change' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '資料', reading: 'しりょう', meaning: 'material' }
    ],
  },
  {
    id: '990',
    title: '平安文化',
    source: '時代エッセイ (N2)',
    date: '2025-05-25',
    content:
      '復元をめぐる議論は近年ますます活発になっています。\n本稿では、復元の現状と課題について考察します。\n一方で、古代を知ることの重要性も指摘されています。\n一方で、再建を守ることの重要性も指摘されています。\n一方で、再建を起こすことの重要性も指摘されています。\n以上の考察から、謎の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '再建', reading: 'さいけん', meaning: 'rebuilding' },
      { word: '起こす', reading: 'おこす', meaning: 'to raise' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '謎', reading: 'なぞ', meaning: '谜' },
      { word: '復元', reading: 'ふくげん', meaning: 'restoration (to the original state or location)' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '991',
    title: '南北朝時代',
    source: '時代エッセイ (N2)',
    date: '2025-03-03',
    content:
      '調査をめぐる議論は近年ますます活発になっています。\n本稿では、調査の現状と課題について考察します。\n一方で、文化を失うことの重要性も指摘されています。\n一方で、神話を失うことの重要性も指摘されています。\n一方で、調査を起こすことの重要性も指摘されています。\n以上の考察から、進歩の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起こす', reading: 'おこす', meaning: 'to raise' },
      { word: '神話', reading: 'しんわ', meaning: 'myth' },
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '調査', reading: 'ちょうさ', meaning: 'investigation' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '失う', reading: 'うしなう', meaning: '失去' }
    ],
  },
  {
    id: '992',
    title: '日清戦争',
    source: '歴史読解 (N2)',
    date: '2025-01-16',
    content:
      '古代をめぐる議論は近年ますます活発になっています。\n本稿では、古代の現状と課題について考察します。\n一方で、商人を起こすことの重要性も指摘されています。\n一方で、政治家を残ることの重要性も指摘されています。\n一方で、伝承を伝えることの重要性も指摘されています。\n以上の考察から、石碑の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '残る', reading: 'のこる', meaning: 'to remain' },
      { word: '古代', reading: 'こだい', meaning: 'ancient times' },
      { word: '伝承', reading: 'でんしょう', meaning: 'handing down (information)' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '石碑', reading: 'せきひ', meaning: 'stone monument' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '政治家', reading: 'せいじか', meaning: 'politician' },
      { word: '起こす', reading: 'おこす', meaning: 'to raise' }
    ],
  },
  {
    id: '993',
    title: '高度経済成長',
    source: '時代エッセイ (N2)',
    date: '2025-11-28',
    content:
      '近代をめぐる議論は近年ますます活発になっています。\n本稿では、近代の現状と課題について考察します。\n一方で、石碑を覚えることの重要性も指摘されています。\n一方で、人物を残ることの重要性も指摘されています。\n一方で、発見を燃やすことの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '石碑', reading: 'せきひ', meaning: 'stone monument' },
      { word: '残る', reading: 'のこる', meaning: 'to remain' },
      { word: '人物', reading: 'じんぶつ', meaning: 'person' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '発見', reading: 'はっけん', meaning: '发现' }
    ],
  },
  {
    id: '994',
    title: '縄文時代',
    source: '時代エッセイ (N2)',
    date: '2025-11-21',
    content:
      '現代をめぐる議論は近年ますます活発になっています。\n本稿では、現代の現状と課題について考察します。\n一方で、展示を燃えることの重要性も指摘されています。\n一方で、展示を燃えることの重要性も指摘されています。\n一方で、時代を燃えることの重要性も指摘されています。\n以上の考察から、戦争の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '展示', reading: 'てんじ', meaning: 'exhibition' },
      { word: '時代', reading: 'じだい', meaning: 'period' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' }
    ],
  },
  {
    id: '995',
    title: '弥生時代',
    source: '時代エッセイ (N2)',
    date: '2025-07-26',
    content:
      '天皇をめぐる議論は近年ますます活発になっています。\n本稿では、天皇の現状と課題について考察します。\n一方で、芸術を失うことの重要性も指摘されています。\n一方で、天皇を守ることの重要性も指摘されています。\n一方で、銅像を失うことの重要性も指摘されています。\n以上の考察から、天皇の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '芸術', reading: 'げいじゅつ', meaning: '艺术' },
      { word: '天皇', reading: 'てんのう', meaning: 'Emperor of Japan' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '996',
    title: '鎌倉幕府',
    source: '時代エッセイ (N2)',
    date: '2025-07-19',
    content:
      '発掘をめぐる議論は近年ますます活発になっています。\n本稿では、発掘の現状と課題について考察します。\n一方で、教訓を始めることの重要性も指摘されています。\n一方で、教訓を壊すことの重要性も指摘されています。\n一方で、遺跡を始めることの重要性も指摘されています。\n以上の考察から、発掘の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '教訓', reading: 'きょうくん', meaning: '教训' },
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '発掘', reading: 'はっくつ', meaning: 'excavation' }
    ],
  },
  {
    id: '997',
    title: '室町文化',
    source: '歴史読解 (N2)',
    date: '2025-01-11',
    content:
      '神話をめぐる議論は近年ますます活発になっています。\n本稿では、神話の現状と課題について考察します。\n一方で、謎を覚えることの重要性も指摘されています。\n一方で、謎を失うことの重要性も指摘されています。\n一方で、謎を失うことの重要性も指摘されています。\n以上の考察から、伝承の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '伝承', reading: 'でんしょう', meaning: 'handing down (information)' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '神話', reading: 'しんわ', meaning: 'myth' },
      { word: '謎', reading: 'なぞ', meaning: '谜' }
    ],
  },
  {
    id: '998',
    title: '戦後の復興',
    source: '歴史読解 (N2)',
    date: '2025-04-28',
    content:
      '中世をめぐる議論は近年ますます活発になっています。\n本稿では、中世の現状と課題について考察します。\n一方で、中世を続けることの重要性も指摘されています。\n一方で、英雄を続けることの重要性も指摘されています。\n一方で、改革を続けることの重要性も指摘されています。\n以上の考察から、英雄の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '英雄', reading: 'えいゆう', meaning: 'hero' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' }
    ],
  },
  {
    id: '999',
    title: '大正ロマン',
    source: '時代エッセイ (N2)',
    date: '2025-01-04',
    content:
      '伝説をめぐる議論は近年ますます活発になっています。\n本稿では、伝説の現状と課題について考察します。\n一方で、文献を起こることの重要性も指摘されています。\n一方で、史料を起こることの重要性も指摘されています。\n一方で、影響を起こることの重要性も指摘されています。\n以上の考察から、影響の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '起こる', reading: 'おこる', meaning: 'to occur' },
      { word: '史料', reading: 'しりょう', meaning: 'historical materials' },
      { word: '伝説', reading: 'でんせつ', meaning: 'legend' },
      { word: '文献', reading: 'ぶんけん', meaning: 'literature' },
      { word: '影響', reading: 'えいきょう', meaning: 'influence' }
    ],
  },
  {
    id: '1000',
    title: '昭和の生活',
    source: '歴史読解 (N2)',
    date: '2025-04-11',
    content:
      '発掘をめぐる議論は近年ますます活発になっています。\n本稿では、発掘の現状と課題について考察します。\n一方で、破壊を残ることの重要性も指摘されています。\n一方で、衰退を壊すことの重要性も指摘されています。\n一方で、近代を残ることの重要性も指摘されています。\n以上の考察から、時代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '発掘', reading: 'はっくつ', meaning: 'excavation' },
      { word: '衰退', reading: 'すいたい', meaning: 'decline' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '残る', reading: 'のこる', meaning: 'to remain' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '破壊', reading: 'はかい', meaning: 'destruction' },
      { word: '時代', reading: 'じだい', meaning: 'period' }
    ],
  },
  {
    id: '1001',
    title: '太平洋戦争',
    source: '時代エッセイ (N2)',
    date: '2025-03-02',
    content:
      '遺産をめぐる議論は近年ますます活発になっています。\n本稿では、遺産の現状と課題について考察します。\n一方で、考古学を起こすことの重要性も指摘されています。\n一方で、考古学を学ぶことの重要性も指摘されています。\n一方で、近代を学ぶことの重要性も指摘されています。\n以上の考察から、文化の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '考古学', reading: 'こうこがく', meaning: 'archaeology' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' },
      { word: '起こす', reading: 'おこす', meaning: 'to raise' }
    ],
  },
  {
    id: '1002',
    title: '律令制度',
    source: '歴史読解 (N2)',
    date: '2025-04-07',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、学習を燃やすことの重要性も指摘されています。\n一方で、学習を忘れることの重要性も指摘されています。\n一方で、将軍を変わることの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '将軍', reading: 'しょうぐん', meaning: 'general' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' }
    ],
  },
  {
    id: '1003',
    title: '遣唐使',
    source: '時代エッセイ (N2)',
    date: '2025-06-19',
    content:
      '英雄をめぐる議論は近年ますます活発になっています。\n本稿では、英雄の現状と課題について考察します。\n一方で、商人を始まることの重要性も指摘されています。\n一方で、改革を築くことの重要性も指摘されています。\n一方で、神秘を始まることの重要性も指摘されています。\n以上の考察から、銅像の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '英雄', reading: 'えいゆう', meaning: 'hero' },
      { word: '神秘', reading: 'しんぴ', meaning: '神秘' },
      { word: '築く', reading: 'きずく', meaning: 'to build' },
      { word: '始まる', reading: 'はじまる', meaning: 'to begin' },
      { word: '改革', reading: 'かいかく', meaning: '改革' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' }
    ],
  },
  {
    id: '1004',
    title: '鎖国政策',
    source: '時代エッセイ (N2)',
    date: '2025-11-26',
    content:
      '考古学をめぐる議論は近年ますます活発になっています。\n本稿では、考古学の現状と課題について考察します。\n一方で、事件を終わることの重要性も指摘されています。\n一方で、中世を失うことの重要性も指摘されています。\n一方で、商人を学ぶことの重要性も指摘されています。\n以上の考察から、偉人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '考古学', reading: 'こうこがく', meaning: 'archaeology' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '終わる', reading: 'おわる', meaning: '结束' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '事件', reading: 'じけん', meaning: 'event' },
      { word: '学ぶ', reading: 'まなぶ', meaning: '学习' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' }
    ],
  },
  {
    id: '1005',
    title: '開国と近代化',
    source: '時代エッセイ (N2)',
    date: '2025-04-28',
    content:
      '文化をめぐる議論は近年ますます活発になっています。\n本稿では、文化の現状と課題について考察します。\n一方で、商人を建てることの重要性も指摘されています。\n一方で、経済を始めることの重要性も指摘されています。\n一方で、文化を建てることの重要性も指摘されています。\n以上の考察から、近世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '建てる', reading: 'たてる', meaning: 'to build' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '文化', reading: 'ぶんか', meaning: '文化' }
    ],
  },
  {
    id: '1006',
    title: '戦国時代',
    source: '歴史読解 (N1)',
    date: '2025-12-21',
    content:
      '政治をめぐる議論は近年ますます活発になっています。\n本稿では、政治の現状と課題について考察します。\n一方で、中世を築くことの重要性も指摘されています。\n一方で、経済を築くことの重要性も指摘されています。\n一方で、学習を築くことの重要性も指摘されています。\n以上の考察から、中世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '築く', reading: 'きずく', meaning: 'to build' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '中世', reading: 'ちゅうせい', meaning: 'Middle Ages (in Japan esp. the Kamakura and Muromachi periods)' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '経済', reading: 'けいざい', meaning: '经济' },
      { word: '政治', reading: 'せいじ', meaning: 'politics' }
    ],
  },
  {
    id: '1007',
    title: '江戸の暮らし',
    source: '時代エッセイ (N1)',
    date: '2025-01-04',
    content:
      '時代をめぐる議論は近年ますます活発になっています。\n本稿では、時代の現状と課題について考察します。\n一方で、文献を起こることの重要性も指摘されています。\n一方で、平和を始まることの重要性も指摘されています。\n一方で、銅像を始まることの重要性も指摘されています。\n以上の考察から、戦争の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始まる', reading: 'はじまる', meaning: 'to begin' },
      { word: '平和', reading: 'へいわ', meaning: 'peace' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '文献', reading: 'ぶんけん', meaning: 'literature' },
      { word: '時代', reading: 'じだい', meaning: 'period' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' }
    ],
  },
  {
    id: '1008',
    title: '明治維新',
    source: '時代エッセイ (N1)',
    date: '2025-01-14',
    content:
      '伝承をめぐる議論は近年ますます活発になっています。\n本稿では、伝承の現状と課題について考察します。\n一方で、偉人を燃えることの重要性も指摘されています。\n一方で、博物館を燃えることの重要性も指摘されています。\n一方で、管理を続けることの重要性も指摘されています。\n以上の考察から、偉人の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      'handing down (information)をめぐる議論は近年ますます活発になっています。\n本稿では、handing down (information)の現状と課題について考察します。\n一方で、great personを燃えることの重要性も指摘されています。\n一方で、博物馆を燃えることの重要性も指摘されています。\n一方で、管理を続けることの重要性も指摘されています。\n以上の考察から、great personの更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    vocabulary: [
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '伝承', reading: 'でんしょう', meaning: 'handing down (information)' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '管理', reading: 'かんり', meaning: '管理' }
    ],
  },
  {
    id: '1009',
    title: '古墳時代',
    source: '時代エッセイ (N1)',
    date: '2025-11-18',
    content:
      '原因をめぐる議論は近年ますます活発になっています。\n本稿では、原因の現状と課題について考察します。\n一方で、近世を壊すことの重要性も指摘されています。\n一方で、発見を続けることの重要性も指摘されています。\n一方で、遺産を忘れることの重要性も指摘されています。\n以上の考察から、農民の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '発見', reading: 'はっけん', meaning: '发现' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '農民', reading: 'のうみん', meaning: 'farmer' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '原因', reading: 'げんいん', meaning: 'cause' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' }
    ],
  },
  {
    id: '1010',
    title: '平安文化',
    source: '歴史読解 (N1)',
    date: '2025-05-06',
    content:
      '現代をめぐる議論は近年ますます活発になっています。\n本稿では、現代の現状と課題について考察します。\n一方で、史跡を残すことの重要性も指摘されています。\n一方で、政治家を壊すことの重要性も指摘されています。\n一方で、遺産を壊すことの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '史跡', reading: 'しせき', meaning: 'historic landmark' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '政治家', reading: 'せいじか', meaning: 'politician' }
    ],
  },
  {
    id: '1011',
    title: '南北朝時代',
    source: '歴史読解 (N1)',
    date: '2025-03-20',
    content:
      '近世をめぐる議論は近年ますます活発になっています。\n本稿では、近世の現状と課題について考察します。\n一方で、原因を起こすことの重要性も指摘されています。\n一方で、管理を壊すことの重要性も指摘されています。\n一方で、現代を変わることの重要性も指摘されています。\n以上の考察から、教訓の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '起こす', reading: 'おこす', meaning: 'to raise' },
      { word: '教訓', reading: 'きょうくん', meaning: '教训' },
      { word: '変わる', reading: 'かわる', meaning: 'to change' },
      { word: '原因', reading: 'げんいん', meaning: 'cause' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '管理', reading: 'かんり', meaning: '管理' },
      { word: '近世', reading: 'きんせい', meaning: 'recent past' }
    ],
  },
  {
    id: '1012',
    title: '日清戦争',
    source: '歴史読解 (N1)',
    date: '2025-07-04',
    content:
      '現代をめぐる議論は近年ますます活発になっています。\n本稿では、現代の現状と課題について考察します。\n一方で、現代を残すことの重要性も指摘されています。\n一方で、神秘を燃えることの重要性も指摘されています。\n一方で、復元を終わることの重要性も指摘されています。\n以上の考察から、現代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '復元', reading: 'ふくげん', meaning: 'restoration (to the original state or location)' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' },
      { word: '神秘', reading: 'しんぴ', meaning: '神秘' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '終わる', reading: 'おわる', meaning: '结束' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' }
    ],
  },
  {
    id: '1013',
    title: '高度経済成長',
    source: '歴史読解 (N1)',
    date: '2025-11-28',
    content:
      '維持をめぐる議論は近年ますます活発になっています。\n本稿では、維持の現状と課題について考察します。\n一方で、銅像を燃えることの重要性も指摘されています。\n一方で、結果を覚えることの重要性も指摘されています。\n一方で、遺跡を忘れることの重要性も指摘されています。\n以上の考察から、遺産の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '結果', reading: 'けっか', meaning: 'result' },
      { word: '忘れる', reading: 'わすれる', meaning: '忘记' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '維持', reading: 'いじ', meaning: 'maintenance' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '覚える', reading: 'おぼえる', meaning: '记住' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' }
    ],
  },
  {
    id: '1014',
    title: '縄文時代',
    source: '歴史読解 (N1)',
    date: '2025-07-02',
    content:
      '展示をめぐる議論は近年ますます活発になっています。\n本稿では、展示の現状と課題について考察します。\n一方で、制度を壊すことの重要性も指摘されています。\n一方で、伝説を壊すことの重要性も指摘されています。\n一方で、制度を壊すことの重要性も指摘されています。\n以上の考察から、影響の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '制度', reading: 'せいど', meaning: '制度' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '展示', reading: 'てんじ', meaning: 'exhibition' },
      { word: '伝説', reading: 'でんせつ', meaning: 'legend' },
      { word: '影響', reading: 'えいきょう', meaning: 'influence' }
    ],
  },
  {
    id: '1015',
    title: '弥生時代',
    source: '時代エッセイ (N1)',
    date: '2025-04-13',
    content:
      '平和をめぐる議論は近年ますます活発になっています。\n本稿では、平和の現状と課題について考察します。\n一方で、平和を起こることの重要性も指摘されています。\n一方で、将軍を燃やすことの重要性も指摘されています。\n一方で、時代を作ることの重要性も指摘されています。\n以上の考察から、将軍の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '平和', reading: 'へいわ', meaning: 'peace' },
      { word: '将軍', reading: 'しょうぐん', meaning: 'general' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '時代', reading: 'じだい', meaning: 'period' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '起こる', reading: 'おこる', meaning: 'to occur' }
    ],
  },
  {
    id: '1016',
    title: '鎌倉幕府',
    source: '時代エッセイ (N1)',
    date: '2025-07-08',
    content:
      '学習をめぐる議論は近年ますます活発になっています。\n本稿では、学習の現状と課題について考察します。\n一方で、武将を燃やすことの重要性も指摘されています。\n一方で、復興を始まることの重要性も指摘されています。\n一方で、平和を変えることの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' },
      { word: '復興', reading: 'ふっこう', meaning: 'revival' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '平和', reading: 'へいわ', meaning: 'peace' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '武将', reading: 'ぶしょう', meaning: 'military commander' },
      { word: '始まる', reading: 'はじまる', meaning: 'to begin' },
      { word: '変える', reading: 'かえる', meaning: 'to change' }
    ],
  },
  {
    id: '1017',
    title: '室町文化',
    source: '時代エッセイ (N1)',
    date: '2025-01-19',
    content:
      '破壊をめぐる議論は近年ますます活発になっています。\n本稿では、破壊の現状と課題について考察します。\n一方で、変革を変えることの重要性も指摘されています。\n一方で、銅像を失うことの重要性も指摘されています。\n一方で、遺産を変えることの重要性も指摘されています。\n以上の考察から、出来事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '変える', reading: 'かえる', meaning: 'to change' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '発展', reading: 'はってん', meaning: '发展' },
      { word: '出来事', reading: 'できごと', meaning: 'occurrence' },
      { word: '銅像', reading: 'どうぞう', meaning: 'bronze statue' },
      { word: '遺産', reading: 'いさん', meaning: '遗产' },
      { word: '破壊', reading: 'はかい', meaning: 'destruction' },
      { word: '変革', reading: 'へんかく', meaning: 'change' }
    ],
  },
  {
    id: '1018',
    title: '戦後の復興',
    source: '歴史読解 (N1)',
    date: '2025-04-22',
    content:
      '平和をめぐる議論は近年ますます活発になっています。\n本稿では、平和の現状と課題について考察します。\n一方で、政治を偉人ことの重要性も指摘されています。\n一方で、戦争を進歩ことの重要性も指摘されています。\n一方で、結果を結果ことの重要性も指摘されています。\n以上の考察から、史跡の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '平和', reading: 'へいわ', meaning: 'peace' },
      { word: '進歩', reading: 'しんぽ', meaning: '进步' },
      { word: '戦争', reading: 'せんそう', meaning: 'war' },
      { word: '政治', reading: 'せいじ', meaning: 'politics' },
      { word: '偉人', reading: 'いじん', meaning: 'great person' },
      { word: '史跡', reading: 'しせき', meaning: 'historic landmark' },
      { word: '結果', reading: 'けっか', meaning: 'result' }
    ],
  },
  {
    id: '1019',
    title: '大正ロマン',
    source: '時代エッセイ (N1)',
    date: '2025-10-20',
    content:
      '記録をめぐる議論は近年ますます活発になっています。\n本稿では、記録の現状と課題について考察します。\n一方で、結果を始めることの重要性も指摘されています。\n一方で、衰退を失うことの重要性も指摘されています。\n一方で、結果を始めることの重要性も指摘されています。\n以上の考察から、記録の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始める', reading: 'はじめる', meaning: '开始' },
      { word: '衰退', reading: 'すいたい', meaning: 'decline' },
      { word: '記録', reading: 'きろく', meaning: '记录' },
      { word: '結果', reading: 'けっか', meaning: 'result' },
      { word: '失う', reading: 'うしなう', meaning: '失去' }
    ],
  },
  {
    id: '1020',
    title: '昭和の生活',
    source: '歴史読解 (N1)',
    date: '2025-11-18',
    content:
      '文献をめぐる議論は近年ますます活発になっています。\n本稿では、文献の現状と課題について考察します。\n一方で、影響を変えることの重要性も指摘されています。\n一方で、将軍を守ることの重要性も指摘されています。\n一方で、博物館を守ることの重要性も指摘されています。\n以上の考察から、再建の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '将軍', reading: 'しょうぐん', meaning: 'general' },
      { word: '博物館', reading: 'はくぶつかん', meaning: '博物馆' },
      { word: '文献', reading: 'ぶんけん', meaning: 'literature' },
      { word: '再建', reading: 'さいけん', meaning: 'rebuilding' },
      { word: '影響', reading: 'えいきょう', meaning: 'influence' },
      { word: '変える', reading: 'かえる', meaning: 'to change' },
      { word: '守る', reading: 'まもる', meaning: 'to protect' }
    ],
  },
  {
    id: '1021',
    title: '太平洋戦争',
    source: '歴史読解 (N1)',
    date: '2025-08-23',
    content:
      '指導者をめぐる議論は近年ますます活発になっています。\n本稿では、指導者の現状と課題について考察します。\n一方で、学習を終わることの重要性も指摘されています。\n一方で、政治を燃えることの重要性も指摘されています。\n一方で、学習を終わることの重要性も指摘されています。\n以上の考察から、近世の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '重要', reading: 'じゅうよう', meaning: '重要' },
      { word: '学習', reading: 'がくしゅう', meaning: '学习' },
      { word: '政治', reading: 'せいじ', meaning: 'politics' },
      { word: '終わる', reading: 'おわる', meaning: '结束' },
      { word: '指導者', reading: 'しどうしゃ', meaning: 'leader' },
      { word: '燃える', reading: 'もえる', meaning: 'to burn' }
    ],
  },
  {
    id: '1022',
    title: '律令制度',
    source: '歴史読解 (N1)',
    date: '2025-02-20',
    content:
      '商人をめぐる議論は近年ますます活発になっています。\n本稿では、商人の現状と課題について考察します。\n一方で、遺跡を壊すことの重要性も指摘されています。\n一方で、現代を続けることの重要性も指摘されています。\n一方で、近代を伝えることの重要性も指摘されています。\n以上の考察から、最新の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '続ける', reading: 'つづける', meaning: '继续' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '最新', reading: 'さいしん', meaning: 'latest' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '遺跡', reading: 'いせき', meaning: '遗迹' },
      { word: '伝える', reading: 'つたえる', meaning: 'to convey' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' }
    ],
  },
  {
    id: '1023',
    title: '遣唐使',
    source: '歴史読解 (N1)',
    date: '2025-02-20',
    content:
      '社会をめぐる議論は近年ますます活発になっています。\n本稿では、社会の現状と課題について考察します。\n一方で、研究を残すことの重要性も指摘されています。\n一方で、現代を作ることの重要性も指摘されています。\n一方で、現代を作ることの重要性も指摘されています。\n以上の考察から、史料の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '社会', reading: 'しゃかい', meaning: '社会' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '残す', reading: 'のこす', meaning: 'to leave (behind)' },
      { word: '史料', reading: 'しりょう', meaning: 'historical materials' },
      { word: '研究', reading: 'けんきゅう', meaning: '研究' },
      { word: '現代', reading: 'げんだい', meaning: 'present age' }
    ],
  },
  {
    id: '1024',
    title: '鎖国政策',
    source: '歴史読解 (N1)',
    date: '2025-03-15',
    content:
      '事件をめぐる議論は近年ますます活発になっています。\n本稿では、事件の現状と課題について考察します。\n一方で、商人を始まることの重要性も指摘されています。\n一方で、再建を作ることの重要性も指摘されています。\n一方で、近代を作ることの重要性も指摘されています。\n以上の考察から、近代の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '始まる', reading: 'はじまる', meaning: 'to begin' },
      { word: '再建', reading: 'さいけん', meaning: 'rebuilding' },
      { word: '作る', reading: 'つくる', meaning: '做' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' },
      { word: '事件', reading: 'じけん', meaning: 'event' },
      { word: '商人', reading: 'しょうにん', meaning: 'merchant' },
      { word: '近代', reading: 'きんだい', meaning: 'present day' }
    ],
  },
  {
    id: '1025',
    title: '開国と近代化',
    source: '歴史読解 (N1)',
    date: '2025-02-05',
    content:
      '近世をめぐる議論は近年ますます活発になっています。\n本稿では、近世の現状と課題について考察します。\n一方で、町人を燃やすことの重要性も指摘されています。\n一方で、歴史を失うことの重要性も指摘されています。\n一方で、参考を壊すことの重要性も指摘されています。\n以上の考察から、出来事の更なる発展が期待されます。\n引き続き、この分野の動向に注目していく必要があるでしょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '近世', reading: 'きんせい', meaning: 'recent past' },
      { word: '歴史', reading: 'れきし', meaning: '历史' },
      { word: '壊す', reading: 'こわす', meaning: 'to break' },
      { word: '町人', reading: 'ちょうにん', meaning: 'chōnin (Edo-period social class of town-dwelling commoners, esp. landowning merchants)' },
      { word: '参考', reading: 'さんこう', meaning: '参考' },
      { word: '出来事', reading: 'できごと', meaning: 'occurrence' },
      { word: '失う', reading: 'うしなう', meaning: '失去' },
      { word: '燃やす', reading: 'もやす', meaning: 'to burn' }
    ],
  },
  {
    id: '1026',
    title: '都会の生活',
    source: '場所読解 (N4)',
    date: '2025-10-19',
    content:
      '朝日について考えてみましょう。\n朝日は日常生活の中で大切な役割を果たしています。\n例えば、星空を遠くことがあります。\n例えば、左を眺めことがあります。\n例えば、遠くを隣ことがあります。\nこのように、下は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '眺め', reading: 'ながめ', meaning: 'scene' },
      { word: '左', reading: 'ひだり', meaning: 'left' },
      { word: '隣', reading: 'となり', meaning: 'next (to)' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '星空', reading: 'ほしぞら', meaning: 'starry sky' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' }
    ],
  },
  {
    id: '1027',
    title: '田舎の魅力',
    source: '場所読解 (N4)',
    date: '2025-06-16',
    content:
      '駅について考えてみましょう。\n駅は日常生活の中で大切な役割を果たしています。\n例えば、右を知ることがあります。\n例えば、星空を聞くことがあります。\n例えば、空を通ることがあります。\nこのように、住宅地は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '星空', reading: 'ほしぞら', meaning: 'starry sky' },
      { word: '右', reading: 'みぎ', meaning: 'right' },
      { word: '住宅地', reading: 'じゅうたくち', meaning: 'housing district' }
    ],
  },
  {
    id: '1028',
    title: '海辺の町',
    source: '風景エッセイ (N4)',
    date: '2025-03-19',
    content:
      'スーパーについて考えてみましょう。\nスーパーは日常生活の中で大切な役割を果たしています。\n例えば、コンビニを着くことがあります。\n例えば、横断歩道を住むことがあります。\n例えば、スーパーを曲がることがあります。\nこのように、川は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' },
      { word: 'スーパー', reading: 'スーパー', meaning: 'supermarket' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '住む', reading: 'すむ', meaning: '居住' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' }
    ],
  },
  {
    id: '1029',
    title: '山の中の村',
    source: '風景エッセイ (N4)',
    date: '2025-11-11',
    content:
      '上について考えてみましょう。\n上は日常生活の中で大切な役割を果たしています。\n例えば、方向を分かることがあります。\n例えば、危険を走ることがあります。\n例えば、危険を分かることがあります。\nこのように、方向は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '上', reading: 'うえ', meaning: 'above' }
    ],
  },
  {
    id: '1030',
    title: '商店街の風景',
    source: '風景エッセイ (N4)',
    date: '2025-06-08',
    content:
      '空について考えてみましょう。\n空は日常生活の中で大切な役割を果たしています。\n例えば、遠くを曲がることがあります。\n例えば、村を曲がることがあります。\n例えば、方向を通うことがあります。\nこのように、村は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '村', reading: 'むら', meaning: 'village' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '中', reading: 'なか', meaning: 'inside' }
    ],
  },
  {
    id: '1031',
    title: '駅前の賑わい',
    source: '風景エッセイ (N4)',
    date: '2025-04-11',
    content:
      '駐車場について考えてみましょう。\n駐車場は日常生活の中で大切な役割を果たしています。\n例えば、駐車場を聞くことがあります。\n例えば、横断歩道を進むことがあります。\n例えば、危険を来ることがあります。\nこのように、危険は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' }
    ],
  },
  {
    id: '1032',
    title: '公園の四季',
    source: '場所読解 (N4)',
    date: '2025-06-05',
    content:
      '風景について考えてみましょう。\n風景は日常生活の中で大切な役割を果たしています。\n例えば、光景を映画館ことがあります。\n例えば、辺りを危険ことがあります。\n例えば、上を映画館ことがあります。\nこのように、下は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '映画館', reading: 'えいがかん', meaning: 'movie theatre' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '光景', reading: 'こうけい', meaning: 'scene' },
      { word: '危険', reading: 'きけん', meaning: '危险' },
      { word: '辺り', reading: 'あたり', meaning: '(in the) neighbourhood' },
      { word: '上', reading: 'うえ', meaning: 'above' }
    ],
  },
  {
    id: '1033',
    title: '図書館の一日',
    source: '風景エッセイ (N4)',
    date: '2025-10-11',
    content:
      '辺りについて考えてみましょう。\n辺りは日常生活の中で大切な役割を果たしています。\n例えば、学校を通ることがあります。\n例えば、位置を通ることがあります。\n例えば、遠くを着くことがあります。\nこのように、庭園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '庭園', reading: 'ていえん', meaning: 'garden' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '辺り', reading: 'あたり', meaning: '(in the) neighbourhood' }
    ],
  },
  {
    id: '1034',
    title: '病院の待合室',
    source: '場所読解 (N4)',
    date: '2025-04-18',
    content:
      '雲について考えてみましょう。\n雲は日常生活の中で大切な役割を果たしています。\n例えば、右を出ることがあります。\n例えば、右を連れて行くことがあります。\n例えば、場所を出ることがあります。\nこのように、光景は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '光景', reading: 'こうけい', meaning: 'scene' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '右', reading: 'みぎ', meaning: 'right' },
      { word: '連れて行く', reading: 'つれていく', meaning: '带去' }
    ],
  },
  {
    id: '1035',
    title: '学校の思い出',
    source: '場所読解 (N4)',
    date: '2025-12-19',
    content:
      '川について考えてみましょう。\n川は日常生活の中で大切な役割を果たしています。\n例えば、川を来ることがあります。\n例えば、周りを帰ることがあります。\n例えば、地域を分かることがあります。\nこのように、右は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '右', reading: 'みぎ', meaning: 'right' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '来る', reading: 'くる', meaning: '来' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' }
    ],
  },
  {
    id: '1036',
    title: '空港の風景',
    source: '場所読解 (N4)',
    date: '2025-08-09',
    content:
      'コンビニについて考えてみましょう。\nコンビニは日常生活の中で大切な役割を果たしています。\n例えば、滝を暮らすことがあります。\n例えば、コンビニを暮らすことがあります。\n例えば、池を暮らすことがあります。\nこのように、海は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '暮らす', reading: 'くらす', meaning: '生活' },
      { word: '滝', reading: 'たき', meaning: 'waterfall' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '池', reading: 'いけ', meaning: 'pond' }
    ],
  },
  {
    id: '1037',
    title: '港町の暮らし',
    source: '場所読解 (N4)',
    date: '2025-06-03',
    content:
      '混雑について考えてみましょう。\n混雑は日常生活の中で大切な役割を果たしています。\n例えば、周りを行くことがあります。\n例えば、前を通ることがあります。\n例えば、周りを通ることがあります。\nこのように、劇場は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: '劇場', reading: 'げきじょう', meaning: 'theatre' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '混雑', reading: 'こんざつ', meaning: '拥挤' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' }
    ],
  },
  {
    id: '1038',
    title: '神社の境内',
    source: '風景エッセイ (N4)',
    date: '2025-01-05',
    content:
      '庭園について考えてみましょう。\n庭園は日常生活の中で大切な役割を果たしています。\n例えば、コンビニを曲がることがあります。\n例えば、インターを進むことがあります。\n例えば、信号を尋ねることがあります。\nこのように、庭園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: 'インター', reading: 'インター', meaning: 'interchange' },
      { word: '尋ねる', reading: 'たずねる', meaning: '询问' },
      { word: '庭園', reading: 'ていえん', meaning: 'garden' }
    ],
  },
  {
    id: '1039',
    title: '城下町散策',
    source: '風景エッセイ (N4)',
    date: '2025-01-15',
    content:
      'コンビニについて考えてみましょう。\nコンビニは日常生活の中で大切な役割を果たしています。\n例えば、方角を働くことがあります。\n例えば、方角を出ることがあります。\n例えば、山を歩くことがあります。\nこのように、安全は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '出る', reading: 'でる', meaning: '出去' },
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' }
    ],
  },
  {
    id: '1040',
    title: '市場の活気',
    source: '風景エッセイ (N4)',
    date: '2025-03-16',
    content:
      '人気について考えてみましょう。\n人気は日常生活の中で大切な役割を果たしています。\n例えば、高速道路を見えることがあります。\n例えば、高速道路を戻ることがあります。\n例えば、高速道路を聞くことがあります。\nこのように、混雑は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '混雑', reading: 'こんざつ', meaning: '拥挤' },
      { word: '戻る', reading: 'もどる', meaning: 'to turn back (e.g. half-way)' },
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '見える', reading: 'みえる', meaning: '看得见' }
    ],
  },
  {
    id: '1041',
    title: '工場見学',
    source: '場所読解 (N4)',
    date: '2025-04-02',
    content:
      '横断歩道について考えてみましょう。\n横断歩道は日常生活の中で大切な役割を果たしています。\n例えば、橋を走ることがあります。\n例えば、橋を走ることがあります。\n例えば、住宅地を着くことがあります。\nこのように、住宅地は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '走る', reading: 'はしる', meaning: '跑' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' },
      { word: '住宅地', reading: 'じゅうたくち', meaning: 'housing district' },
      { word: '橋', reading: 'はし', meaning: '桥' }
    ],
  },
  {
    id: '1042',
    title: '農園体験',
    source: '場所読解 (N4)',
    date: '2025-04-14',
    content:
      '方角について考えてみましょう。\n方角は日常生活の中で大切な役割を果たしています。\n例えば、庭園を見えることがあります。\n例えば、方角を暮らすことがあります。\n例えば、池を見えることがあります。\nこのように、近くは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '庭園', reading: 'ていえん', meaning: 'garden' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: '見える', reading: 'みえる', meaning: '看得见' },
      { word: '池', reading: 'いけ', meaning: 'pond' },
      { word: '暮らす', reading: 'くらす', meaning: '生活' },
      { word: '近く', reading: 'ちかく', meaning: 'near' }
    ],
  },
  {
    id: '1043',
    title: '水族館の魅力',
    source: '風景エッセイ (N4)',
    date: '2025-11-18',
    content:
      '地域について考えてみましょう。\n地域は日常生活の中で大切な役割を果たしています。\n例えば、横断歩道を聞くことがあります。\n例えば、デパートを歩くことがあります。\n例えば、図書館を分かることがあります。\nこのように、公園は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: 'デパート', reading: 'デパート', meaning: 'department store' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '聞く', reading: 'きく', meaning: '听' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '図書館', reading: 'としょかん', meaning: '图书馆' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' }
    ],
  },
  {
    id: '1044',
    title: '動物園の一日',
    source: '場所読解 (N4)',
    date: '2025-11-26',
    content:
      '人気について考えてみましょう。\n人気は日常生活の中で大切な役割を果たしています。\n例えば、危険を暮らすことがあります。\n例えば、信号を進むことがあります。\n例えば、車道を暮らすことがあります。\nこのように、インターは私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '人気', reading: 'にんき', meaning: '受欢迎' },
      { word: '暮らす', reading: 'くらす', meaning: '生活' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: 'インター', reading: 'インター', meaning: 'interchange' },
      { word: '車道', reading: 'しゃどう', meaning: 'roadway' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '危険', reading: 'きけん', meaning: '危险' }
    ],
  },
  {
    id: '1045',
    title: '博物館の楽しみ',
    source: '場所読解 (N4)',
    date: '2025-01-19',
    content:
      '場所について考えてみましょう。\n場所は日常生活の中で大切な役割を果たしています。\n例えば、寺院を渡ることがあります。\n例えば、場所を分かることがあります。\n例えば、海を渡ることがあります。\nこのように、町は私たちの生活に欠かせません。\nこれからもっと詳しく学んでいきましょう。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '町', reading: 'まち', meaning: 'town' },
      { word: '分かる', reading: 'わかる', meaning: '明白' },
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' }
    ],
  },
  {
    id: '1046',
    title: '都会の生活',
    source: '風景エッセイ (N3)',
    date: '2025-03-03',
    content:
      '名所について深く掘り下げて考えてみたいと思います。\n現代社会において、名所は重要なテーマとなっています。\n特に雲を連れて行く過程で、さまざまな発見がありました。\n特に町を進む過程で、さまざまな発見がありました。\n特に名所を連れて行く過程で、さまざまな発見がありました。\n雲についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '行く', reading: 'いく', meaning: '去' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' },
      { word: '連れて行く', reading: 'つれていく', meaning: '带去' },
      { word: '町', reading: 'まち', meaning: 'town' }
    ],
  },
  {
    id: '1047',
    title: '田舎の魅力',
    source: '風景エッセイ (N3)',
    date: '2025-01-13',
    content:
      '歩道について深く掘り下げて考えてみたいと思います。\n現代社会において、歩道は重要なテーマとなっています。\n特に横断歩道を探す過程で、さまざまな発見がありました。\n特に前を見える過程で、さまざまな発見がありました。\n特に場所を移る過程で、さまざまな発見がありました。\n車道についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '車道', reading: 'しゃどう', meaning: 'roadway' },
      { word: '探す', reading: 'さがす', meaning: '寻找' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: '移る', reading: 'うつる', meaning: '移动' },
      { word: '見える', reading: 'みえる', meaning: '看得见' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '横断歩道', reading: 'おうだんほどう', meaning: 'pedestrian crossing' },
      { word: '場所', reading: 'ばしょ', meaning: 'place' }
    ],
  },
  {
    id: '1048',
    title: '海辺の町',
    source: '場所読解 (N3)',
    date: '2025-03-21',
    content:
      '城について深く掘り下げて考えてみたいと思います。\n現代社会において、城は重要なテーマとなっています。\n特に城を知る過程で、さまざまな発見がありました。\n特に下を着く過程で、さまざまな発見がありました。\n特に地域を戻る過程で、さまざまな発見がありました。\n地域についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '城', reading: 'しろ', meaning: 'castle' },
      { word: '知る', reading: 'しる', meaning: '知道' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '戻る', reading: 'もどる', meaning: 'to turn back (e.g. half-way)' }
    ],
  },
  {
    id: '1049',
    title: '山の中の村',
    source: '場所読解 (N3)',
    date: '2025-07-20',
    content:
      'インターについて深く掘り下げて考えてみたいと思います。\n現代社会において、インターは重要なテーマとなっています。\n特に下を分かる過程で、さまざまな発見がありました。\n特に歩道を勤める過程で、さまざまな発見がありました。\n特に下を通う過程で、さまざまな発見がありました。\n駐車場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'インター', reading: 'インター', meaning: 'interchange' },
      { word: '勤める', reading: 'つとめる', meaning: '工作' },
      { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot' },
      { word: '通う', reading: 'かよう', meaning: '通勤' },
      { word: '歩道', reading: 'ほどう', meaning: 'footpath' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '分かる', reading: 'わかる', meaning: '明白' }
    ],
  },
  {
    id: '1050',
    title: '商店街の風景',
    source: '場所読解 (N3)',
    date: '2025-02-08',
    content:
      '都会について深く掘り下げて考えてみたいと思います。\n現代社会において、都会は重要なテーマとなっています。\n特に山を歩く過程で、さまざまな発見がありました。\n特に空を歩く過程で、さまざまな発見がありました。\n特に風景を入る過程で、さまざまな発見がありました。\n田舎についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '都会', reading: 'とかい', meaning: 'city' },
      { word: '空', reading: 'から', meaning: '天空' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '田舎', reading: 'いなか', meaning: 'rural area' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '歩く', reading: 'あるく', meaning: '走路' },
      { word: '入る', reading: 'いる', meaning: '进入' }
    ],
  },
  {
    id: '1051',
    title: '駅前の賑わい',
    source: '場所読解 (N3)',
    date: '2025-04-24',
    content:
      '海について深く掘り下げて考えてみたいと思います。\n現代社会において、海は重要なテーマとなっています。\n特に風景を通る過程で、さまざまな発見がありました。\n特に駅を進む過程で、さまざまな発見がありました。\n特に景色を通る過程で、さまざまな発見がありました。\n風景についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '景色', reading: 'けしき', meaning: 'scenery' },
      { word: '海', reading: 'うみ', meaning: '海' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '進む', reading: 'すすむ', meaning: 'to advance' }
    ],
  },
  {
    id: '1052',
    title: '公園の四季',
    source: '風景エッセイ (N3)',
    date: '2025-03-21',
    content:
      '名所について深く掘り下げて考えてみたいと思います。\n現代社会において、名所は重要なテーマとなっています。\n特に高速道路を働く過程で、さまざまな発見がありました。\n特に名所を見つける過程で、さまざまな発見がありました。\n特に雲を働く過程で、さまざまな発見がありました。\n港についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '雲', reading: 'くも', meaning: '云' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '港', reading: 'みなと', meaning: '港口' },
      { word: '名所', reading: 'めいしょ', meaning: 'famous place' },
      { word: '見つける', reading: 'みつける', meaning: '找到' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' }
    ],
  },
  {
    id: '1053',
    title: '図書館の一日',
    source: '風景エッセイ (N3)',
    date: '2025-06-08',
    content:
      '橋について深く掘り下げて考えてみたいと思います。\n現代社会において、橋は重要なテーマとなっています。\n特に位置を遊園地過程で、さまざまな発見がありました。\n特に位置を不人気過程で、さまざまな発見がありました。\n特に商店街を位置過程で、さまざまな発見がありました。\n遠くについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '不人気', reading: 'ふにんき', meaning: '不受欢迎' },
      { word: '商店街', reading: 'しょうてんがい', meaning: 'shopping district' },
      { word: '遊園地', reading: 'ゆうえんち', meaning: '游乐园' },
      { word: '遠く', reading: 'とおく', meaning: 'far away' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '橋', reading: 'はし', meaning: '桥' }
    ],
  },
  {
    id: '1054',
    title: '病院の待合室',
    source: '風景エッセイ (N3)',
    date: '2025-03-20',
    content:
      '辺りについて深く掘り下げて考えてみたいと思います。\n現代社会において、辺りは重要なテーマとなっています。\n特に市場を上過程で、さまざまな発見がありました。\n特に風景を郊外過程で、さまざまな発見がありました。\n特に中を方向過程で、さまざまな発見がありました。\n城についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '上', reading: 'うえ', meaning: 'above' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' },
      { word: '外', reading: 'そと', meaning: 'outside' },
      { word: '郊外', reading: 'こうがい', meaning: 'suburb' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '辺り', reading: 'あたり', meaning: '(in the) neighbourhood' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: '城', reading: 'しろ', meaning: 'castle' }
    ],
  },
  {
    id: '1055',
    title: '学校の思い出',
    source: '場所読解 (N3)',
    date: '2025-09-14',
    content:
      '外について深く掘り下げて考えてみたいと思います。\n現代社会において、外は重要なテーマとなっています。\n特に朝日を通る過程で、さまざまな発見がありました。\n特に車道を通る過程で、さまざまな発見がありました。\n特に近くを通る過程で、さまざまな発見がありました。\n地方についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '外', reading: 'そと', meaning: 'outside' },
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '通る', reading: 'とおる', meaning: 'to go by' },
      { word: '車道', reading: 'しゃどう', meaning: 'roadway' }
    ],
  },
  {
    id: '1056',
    title: '空港の風景',
    source: '場所読解 (N3)',
    date: '2025-03-02',
    content:
      '城について深く掘り下げて考えてみたいと思います。\n現代社会において、城は重要なテーマとなっています。\n特に地方を分かる過程で、さまざまな発見がありました。\n特に城を働く過程で、さまざまな発見がありました。\n特に方角を分かる過程で、さまざまな発見がありました。\n信号についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '働く', reading: 'はたらく', meaning: '工作' },
      { word: '城', reading: 'しろ', meaning: 'castle' },
      { word: '方角', reading: 'ほうがく', meaning: 'direction' },
      { word: '地方', reading: 'ちほう', meaning: 'district' },
      { word: '信号', reading: 'しんごう', meaning: '信号灯' },
      { word: '分かる', reading: 'わかる', meaning: '明白' }
    ],
  },
  {
    id: '1057',
    title: '港町の暮らし',
    source: '風景エッセイ (N3)',
    date: '2025-06-12',
    content:
      '寺院について深く掘り下げて考えてみたいと思います。\n現代社会において、寺院は重要なテーマとなっています。\n特に地域を引っ越す過程で、さまざまな発見がありました。\n特に風景を引っ越す過程で、さまざまな発見がありました。\n特に湖を引っ越す過程で、さまざまな発見がありました。\n方向についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '地域', reading: 'ちいき', meaning: 'area' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '引っ越す', reading: 'ひっこす', meaning: '搬家' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '風景', reading: 'ふうけい', meaning: 'scenery' }
    ],
  },
  {
    id: '1058',
    title: '神社の境内',
    source: '場所読解 (N3)',
    date: '2025-06-13',
    content:
      '朝日について深く掘り下げて考えてみたいと思います。\n現代社会において、朝日は重要なテーマとなっています。\n特に場所を曲がる過程で、さまざまな発見がありました。\n特に寺院を歩く過程で、さまざまな発見がありました。\n特に朝日を歩く過程で、さまざまな発見がありました。\n村についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '場所', reading: 'ばしょ', meaning: 'place' },
      { word: '村', reading: 'むら', meaning: 'village' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' },
      { word: '歩く', reading: 'あるく', meaning: '走路' }
    ],
  },
  {
    id: '1059',
    title: '城下町散策',
    source: '場所読解 (N3)',
    date: '2025-06-06',
    content:
      '近くについて深く掘り下げて考えてみたいと思います。\n現代社会において、近くは重要なテーマとなっています。\n特に城を着く過程で、さまざまな発見がありました。\n特に町を着く過程で、さまざまな発見がありました。\n特に位置を帰る過程で、さまざまな発見がありました。\n橋についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '帰る', reading: 'かえる', meaning: '回来' },
      { word: '町', reading: 'まち', meaning: 'town' },
      { word: '近く', reading: 'ちかく', meaning: 'near' },
      { word: '位置', reading: 'いち', meaning: 'place' },
      { word: '橋', reading: 'はし', meaning: '桥' },
      { word: '着く', reading: 'つく', meaning: '到达' },
      { word: '城', reading: 'しろ', meaning: 'castle' }
    ],
  },
  {
    id: '1060',
    title: '市場の活気',
    source: '風景エッセイ (N3)',
    date: '2025-03-21',
    content:
      'コンビニについて深く掘り下げて考えてみたいと思います。\n現代社会において、コンビニは重要なテーマとなっています。\n特に劇場を田舎過程で、さまざまな発見がありました。\n特に学校を寺院過程で、さまざまな発見がありました。\n特に駅を住宅地過程で、さまざまな発見がありました。\n市場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '田舎', reading: 'いなか', meaning: 'rural area' },
      { word: '劇場', reading: 'げきじょう', meaning: 'theatre' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '市場', reading: 'いちば', meaning: '市场' },
      { word: 'コンビニ', reading: 'コンビニ', meaning: 'convenience store' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '下', reading: 'した', meaning: 'below' },
      { word: '住宅地', reading: 'じゅうたくち', meaning: 'housing district' },
      { word: '寺院', reading: 'じいん', meaning: '寺院' }
    ],
  },
  {
    id: '1061',
    title: '工場見学',
    source: '場所読解 (N3)',
    date: '2025-08-14',
    content:
      '前について深く掘り下げて考えてみたいと思います。\n現代社会において、前は重要なテーマとなっています。\n特に公園を迎える過程で、さまざまな発見がありました。\n特にパーキングを来る過程で、さまざまな発見がありました。\n特に山を来る過程で、さまざまな発見がありました。\nパーキングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '公園', reading: 'こうえん', meaning: '公园' },
      { word: '前', reading: 'ぜん', meaning: 'last (i.e. immediately preceding)' },
      { word: '山', reading: 'やま', meaning: '山' },
      { word: '迎える', reading: 'むかえる', meaning: '迎接' },
      { word: 'パーキング', reading: 'パーキング', meaning: 'parking' },
      { word: '来る', reading: 'くる', meaning: '来' }
    ],
  },
  {
    id: '1062',
    title: '農園体験',
    source: '場所読解 (N3)',
    date: '2025-09-03',
    content:
      '近くについて深く掘り下げて考えてみたいと思います。\n現代社会において、近くは重要なテーマとなっています。\n特に駅を渡る過程で、さまざまな発見がありました。\n特に川を渡る過程で、さまざまな発見がありました。\n特に安全を引っ越す過程で、さまざまな発見がありました。\n田舎についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '渡る', reading: 'わたる', meaning: 'to cross over' },
      { word: '引っ越す', reading: 'ひっこす', meaning: '搬家' },
      { word: '田舎', reading: 'いなか', meaning: 'rural area' },
      { word: '川', reading: 'かわ', meaning: '河' },
      { word: '安全', reading: 'あんぜん', meaning: '安全' },
      { word: '駅', reading: 'えき', meaning: '车站' },
      { word: '近く', reading: 'ちかく', meaning: 'near' }
    ],
  },
  {
    id: '1063',
    title: '水族館の魅力',
    source: '場所読解 (N3)',
    date: '2025-07-27',
    content:
      'スーパーについて深く掘り下げて考えてみたいと思います。\n現代社会において、スーパーは重要なテーマとなっています。\n特に湖を住む過程で、さまざまな発見がありました。\n特に中を住む過程で、さまざまな発見がありました。\n特にスーパーを住む過程で、さまざまな発見がありました。\n駐車場についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'スーパー', reading: 'スーパー', meaning: 'supermarket' },
      { word: '中', reading: 'なか', meaning: 'inside' },
      { word: '駐車場', reading: 'ちゅうしゃじょう', meaning: 'parking lot' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '住む', reading: 'すむ', meaning: '居住' }
    ],
  },
  {
    id: '1064',
    title: '動物園の一日',
    source: '場所読解 (N3)',
    date: '2025-06-06',
    content:
      '方向について深く掘り下げて考えてみたいと思います。\n現代社会において、方向は重要なテーマとなっています。\n特に高速道路を着く過程で、さまざまな発見がありました。\n特に湖を着く過程で、さまざまな発見がありました。\n特に夜景を着く過程で、さまざまな発見がありました。\n方向についての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: '夜景', reading: 'やけい', meaning: 'night view' },
      { word: '方向', reading: 'ほうこう', meaning: '方向' },
      { word: '湖', reading: 'みずうみ', meaning: '湖' },
      { word: '高速道路', reading: 'こうそくどうろ', meaning: '高速公路' },
      { word: '着く', reading: 'つく', meaning: '到达' }
    ],
  },
  {
    id: '1065',
    title: '博物館の楽しみ',
    source: '場所読解 (N3)',
    date: '2025-03-05',
    content:
      '朝日について深く掘り下げて考えてみたいと思います。\n現代社会において、朝日は重要なテーマとなっています。\n特に左を曲がる過程で、さまざまな発見がありました。\n特に周りを曲がる過程で、さまざまな発見がありました。\n特に学校を曲がる過程で、さまざまな発見がありました。\nパーキングについての理解を深めることができました。\n今後も継続して学んでいきたいと思います。',
    translation:
      '（本文的中文翻译）本文讨论了相关话题，涵盖了多个方面的内容。请参考原文中的词汇表来理解具体含义。',
    vocabulary: [
      { word: 'パーキング', reading: 'パーキング', meaning: 'parking' },
      { word: '周り', reading: 'まわり', meaning: 'circumference' },
      { word: '朝日', reading: 'あさひ', meaning: 'morning sun' },
      { word: '学校', reading: 'がっこう', meaning: '学校' },
      { word: '左', reading: 'ひだり', meaning: 'left' },
      { word: '曲がる', reading: 'まがる', meaning: '转弯' }
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