export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface Word {
  id: string;
  word: string;
  reading: string;
  meaning: string;
  partOfSpeech: string;
  level: JLPTLevel;
  example: string;
  exampleReading: string;
  exampleMeaning: string;
}

const n5Words: Word[] = [
  { id: 'n5-001', word: '学校', reading: 'がっこう', meaning: '学校', partOfSpeech: '名词', level: 'N5', example: '学校に行きます。', exampleReading: 'がっこうにいきます。', exampleMeaning: '去学校。' },
  { id: 'n5-002', word: '先生', reading: 'せんせい', meaning: '老师', partOfSpeech: '名词', level: 'N5', example: '先生は親切です。', exampleReading: 'せんせいはしんせつです。', exampleMeaning: '老师很亲切。' },
  { id: 'n5-003', word: '学生', reading: 'がくせい', meaning: '学生', partOfSpeech: '名词', level: 'N5', example: '私は学生です。', exampleReading: 'わたしはがくせいです。', exampleMeaning: '我是学生。' },
  { id: 'n5-004', word: '友達', reading: 'ともだち', meaning: '朋友', partOfSpeech: '名词', level: 'N5', example: '友達と遊びます。', exampleReading: 'ともだちとあそびます。', exampleMeaning: '和朋友玩。' },
  { id: 'n5-005', word: '食べる', reading: 'たべる', meaning: '吃', partOfSpeech: '动词', level: 'N5', example: '朝ごはんを食べる。', exampleReading: 'あさごはんをたべる。', exampleMeaning: '吃早饭。' },
  { id: 'n5-006', word: '飲む', reading: 'のむ', meaning: '喝', partOfSpeech: '动词', level: 'N5', example: '水を飲みます。', exampleReading: 'みずをのみます。', exampleMeaning: '喝水。' },
  { id: 'n5-007', word: '行く', reading: 'いく', meaning: '去', partOfSpeech: '动词', level: 'N5', example: '駅に行きます。', exampleReading: 'えきにいきます。', exampleMeaning: '去车站。' },
  { id: 'n5-008', word: '来る', reading: 'くる', meaning: '来', partOfSpeech: '动词', level: 'N5', example: '友達が来ます。', exampleReading: 'ともだちがきます。', exampleMeaning: '朋友来。' },
  { id: 'n5-009', word: '大きい', reading: 'おおきい', meaning: '大的', partOfSpeech: '形容词', level: 'N5', example: '大きい犬です。', exampleReading: 'おおきいいぬです。', exampleMeaning: '是条大狗。' },
  { id: 'n5-010', word: '小さい', reading: 'ちいさい', meaning: '小的', partOfSpeech: '形容词', level: 'N5', example: '小さい猫です。', exampleReading: 'ちいさいねこです。', exampleMeaning: '是只小猫。' },
  { id: 'n5-011', word: '新しい', reading: 'あたらしい', meaning: '新的', partOfSpeech: '形容词', level: 'N5', example: '新しい本です。', exampleReading: 'あたらしいほんです。', exampleMeaning: '是新书。' },
  { id: 'n5-012', word: '今日', reading: 'きょう', meaning: '今天', partOfSpeech: '名词', level: 'N5', example: '今日はいい天気です。', exampleReading: 'きょうはいいてんきです。', exampleMeaning: '今天天气好。' },
  { id: 'n5-013', word: '昨日', reading: 'きのう', meaning: '昨天', partOfSpeech: '名词', level: 'N5', example: '昨日は雨でした。', exampleReading: 'きのうはあめでした。', exampleMeaning: '昨天下雨了。' },
  { id: 'n5-014', word: '明日', reading: 'あした', meaning: '明天', partOfSpeech: '名词', level: 'N5', example: '明日は休みです。', exampleReading: 'あしたはやすみです。', exampleMeaning: '明天休息。' },
  { id: 'n5-015', word: '毎日', reading: 'まいにち', meaning: '每天', partOfSpeech: '副词', level: 'N5', example: '毎日勉強します。', exampleReading: 'まいにちべんきょうします。', exampleMeaning: '每天学习。' },
  { id: 'n5-016', word: '人', reading: 'ひと', meaning: '人', partOfSpeech: '名词', level: 'N5', example: 'あの人は誰ですか。', exampleReading: 'あのひとはだれですか。', exampleMeaning: '那个人是谁？' },
  { id: 'n5-017', word: '本', reading: 'ほん', meaning: '书', partOfSpeech: '名词', level: 'N5', example: 'この本は面白いです。', exampleReading: 'このほんはおもしろいです。', exampleMeaning: '这本书很有趣。' },
  { id: 'n5-018', word: '車', reading: 'くるま', meaning: '车', partOfSpeech: '名词', level: 'N5', example: '新しい車を買いました。', exampleReading: 'あたらしいくるまをかいました。', exampleMeaning: '买了新车。' },
  { id: 'n5-019', word: '電話', reading: 'でんわ', meaning: '电话', partOfSpeech: '名词', level: 'N5', example: '電話をかけます。', exampleReading: 'でんわをかけます。', exampleMeaning: '打电话。' },
  { id: 'n5-020', word: '手紙', reading: 'てがみ', meaning: '信', partOfSpeech: '名词', level: 'N5', example: '手紙を書きます。', exampleReading: 'てがみをかきます。', exampleMeaning: '写信。' },
  { id: 'n5-021', word: '聞く', reading: 'きく', meaning: '听；问', partOfSpeech: '动词', level: 'N5', example: '音楽を聞きます。', exampleReading: 'おんがくをききます。', exampleMeaning: '听音乐。' },
  { id: 'n5-022', word: '読む', reading: 'よむ', meaning: '读', partOfSpeech: '动词', level: 'N5', example: '本を読みます。', exampleReading: 'ほんをよみます。', exampleMeaning: '读书。' },
  { id: 'n5-023', word: '書く', reading: 'かく', meaning: '写', partOfSpeech: '动词', level: 'N5', example: '名前を書きます。', exampleReading: 'なまえをかきます。', exampleMeaning: '写名字。' },
  { id: 'n5-024', word: '話す', reading: 'はなす', meaning: '说', partOfSpeech: '动词', level: 'N5', example: '日本語を話します。', exampleReading: 'にほんごをはなします。', exampleMeaning: '说日语。' },
  { id: 'n5-025', word: '買う', reading: 'かう', meaning: '买', partOfSpeech: '动词', level: 'N5', example: 'パンを買います。', exampleReading: 'ぱんをかいます。', exampleMeaning: '买面包。' },
  { id: 'n5-026', word: '会う', reading: 'あう', meaning: '见面', partOfSpeech: '动词', level: 'N5', example: '友達に会います。', exampleReading: 'ともだちにあいます。', exampleMeaning: '和朋友见面。' },
  { id: 'n5-027', word: '作る', reading: 'つくる', meaning: '制作', partOfSpeech: '动词', level: 'N5', example: '料理を作ります。', exampleReading: 'りょうりをつくります。', exampleMeaning: '做菜。' },
  { id: 'n5-028', word: '天気', reading: 'てんき', meaning: '天气', partOfSpeech: '名词', level: 'N5', example: 'いい天気ですね。', exampleReading: 'いいてんきですね。', exampleMeaning: '天气真好啊。' },
  { id: 'n5-029', word: '時間', reading: 'じかん', meaning: '时间', partOfSpeech: '名词', level: 'N5', example: '時間がありません。', exampleReading: 'じかんがありません。', exampleMeaning: '没有时间。' },
  { id: 'n5-030', word: '仕事', reading: 'しごと', meaning: '工作', partOfSpeech: '名词', level: 'N5', example: '仕事は忙しいです。', exampleReading: 'しごとはいそがしいです。', exampleMeaning: '工作很忙。' },
  { id: 'n5-031', word: '家', reading: 'いえ', meaning: '家', partOfSpeech: '名词', level: 'N5', example: '家に帰ります。', exampleReading: 'いえにかえります。', exampleMeaning: '回家。' },
  { id: 'n5-032', word: '店', reading: 'みせ', meaning: '店', partOfSpeech: '名词', level: 'N5', example: 'あの店は安いです。', exampleReading: 'あのみせはやすいです。', exampleMeaning: '那家店很便宜。' },
  { id: 'n5-033', word: '駅', reading: 'えき', meaning: '车站', partOfSpeech: '名词', level: 'N5', example: '駅まで歩きます。', exampleReading: 'えきまであるきます。', exampleMeaning: '走到车站。' },
  { id: 'n5-034', word: '病院', reading: 'びょういん', meaning: '医院', partOfSpeech: '名词', level: 'N5', example: '病院に行きます。', exampleReading: 'びょういんにいきます。', exampleMeaning: '去医院。' },
  { id: 'n5-035', word: '公園', reading: 'こうえん', meaning: '公园', partOfSpeech: '名词', level: 'N5', example: '公園で遊びます。', exampleReading: 'こうえんであそびます。', exampleMeaning: '在公园玩。' },
];

const n4Words: Word[] = [
  { id: 'n4-001', word: '習慣', reading: 'しゅうかん', meaning: '习惯', partOfSpeech: '名词', level: 'N4', example: '早寝早起きはいい習慣です。', exampleReading: 'はやねはやおきはいいしゅうかんです。', exampleMeaning: '早睡早起是好习惯。' },
  { id: 'n4-002', word: '経験', reading: 'けいけん', meaning: '经验', partOfSpeech: '名词', level: 'N4', example: 'いい経験になりました。', exampleReading: 'いいけいけんになりました。', exampleMeaning: '成为了很好的经验。' },
  { id: 'n4-003', word: '準備', reading: 'じゅんび', meaning: '准备', partOfSpeech: '名词/动词', level: 'N4', example: '旅行の準備をします。', exampleReading: 'りょこうのじゅんびをします。', exampleMeaning: '做旅行的准备。' },
  { id: 'n4-004', word: '約束', reading: 'やくそく', meaning: '约定', partOfSpeech: '名词/动词', level: 'N4', example: '約束を守ってください。', exampleReading: 'やくそくをまもってください。', exampleMeaning: '请遵守约定。' },
  { id: 'n4-005', word: '探す', reading: 'さがす', meaning: '寻找', partOfSpeech: '动词', level: 'N4', example: '仕事を探しています。', exampleReading: 'しごとをさがしています。', exampleMeaning: '正在找工作。' },
  { id: 'n4-006', word: '見つける', reading: 'みつける', meaning: '找到', partOfSpeech: '动词', level: 'N4', example: 'いい店を見つけました。', exampleReading: 'いいみせをみつけました。', exampleMeaning: '找到了好店。' },
  { id: 'n4-007', word: '届ける', reading: 'とどける', meaning: '送到', partOfSpeech: '动词', level: 'N4', example: '荷物を届けます。', exampleReading: 'にもつをとどけます。', exampleMeaning: '送包裹。' },
  { id: 'n4-008', word: '間に合う', reading: 'まにあう', meaning: '赶得上', partOfSpeech: '动词', level: 'N4', example: '電車に間に合いました。', exampleReading: 'でんしゃにまにあいました。', exampleMeaning: '赶上了电车。' },
  { id: 'n4-009', word: 'ほとんど', reading: 'ほとんど', meaning: '几乎', partOfSpeech: '副词', level: 'N4', example: 'ほとんど終わりました。', exampleReading: 'ほとんどおわりました。', exampleMeaning: '几乎结束了。' },
  { id: 'n4-010', word: 'やっと', reading: 'やっと', meaning: '终于', partOfSpeech: '副词', level: 'N4', example: 'やっと宿題が終わった。', exampleReading: 'やっとしゅくだいがおわった。', exampleMeaning: '终于做完作业了。' },
  { id: 'n4-011', word: '急に', reading: 'きゅうに', meaning: '突然', partOfSpeech: '副词', level: 'N4', example: '急に雨が降り出した。', exampleReading: 'きゅうにあめがふりだした。', exampleMeaning: '突然下起雨来。' },
  { id: 'n4-012', word: '詳しい', reading: 'くわしい', meaning: '详细的', partOfSpeech: '形容词', level: 'N4', example: '詳しい説明をお願いします。', exampleReading: 'くわしいせつめいをおねがいします。', exampleMeaning: '请详细说明。' },
  { id: 'n4-013', word: '楽しむ', reading: 'たのしむ', meaning: '享受', partOfSpeech: '动词', level: 'N4', example: '旅行を楽しみました。', exampleReading: 'りょこうをたのしみました。', exampleMeaning: '享受了旅行。' },
  { id: 'n4-014', word: '似合う', reading: 'にあう', meaning: '适合', partOfSpeech: '动词', level: 'N4', example: 'この服はあなたに似合います。', exampleReading: 'このふくはあなたにあいます。', exampleMeaning: '这件衣服适合你。' },
  { id: 'n4-015', word: '季節', reading: 'きせつ', meaning: '季节', partOfSpeech: '名词', level: 'N4', example: '好きな季節は秋です。', exampleReading: 'すきなきせつはあきです。', exampleMeaning: '喜欢的季节是秋天。' },
  { id: 'n4-016', word: '挨拶', reading: 'あいさつ', meaning: '问候', partOfSpeech: '名词/动词', level: 'N4', example: '元気に挨拶しましょう。', exampleReading: 'げんきにあいさつしましょう。', exampleMeaning: '精神地打个招呼吧。' },
  { id: 'n4-017', word: '連絡', reading: 'れんらく', meaning: '联系', partOfSpeech: '名词/动词', level: 'N4', example: '後で連絡します。', exampleReading: 'あとでれんらくします。', exampleMeaning: '稍后联系。' },
  { id: 'n4-018', word: '相談', reading: 'そうだん', meaning: '商量', partOfSpeech: '名词/动词', level: 'N4', example: '先生に相談してください。', exampleReading: 'せんせいにそうだんしてください。', exampleMeaning: '请和老师商量。' },
  { id: 'n4-019', word: '連れる', reading: 'つれる', meaning: '带；陪同', partOfSpeech: '动词', level: 'N4', example: '子供を連れて公園に行く。', exampleReading: 'こどもをつれてこうえんにいく。', exampleMeaning: '带孩子去公园。' },
  { id: 'n4-020', word: '変わる', reading: 'かわる', meaning: '变化', partOfSpeech: '动词', level: 'N4', example: '季節が変わった。', exampleReading: 'きせつがかわった。', exampleMeaning: '季节变了。' },
  { id: 'n4-021', word: '留学', reading: 'りゅうがく', meaning: '留学', partOfSpeech: '名词/动词', level: 'N4', example: '日本に留学したいです。', exampleReading: 'にほんにりゅうがくしたいです。', exampleMeaning: '想去日本留学。' },
  { id: 'n4-022', word: '生活', reading: 'せいかつ', meaning: '生活', partOfSpeech: '名词', level: 'N4', example: '一人暮らしの生活を始めた。', exampleReading: 'ひとりぐらしのせいかつをはじめた。', exampleMeaning: '开始了独居生活。' },
  { id: 'n4-023', word: '案内', reading: 'あんない', meaning: '向导', partOfSpeech: '名词/动词', level: 'N4', example: '街を案内します。', exampleReading: 'まちをあんないします。', exampleMeaning: '带您游览街道。' },
  { id: 'n4-024', word: '進む', reading: 'すすむ', meaning: '前进', partOfSpeech: '动词', level: 'N4', example: '前に進んでください。', exampleReading: 'まえにすすんでください。', exampleMeaning: '请向前走。' },
  { id: 'n4-025', word: '戻る', reading: 'もどる', meaning: '返回', partOfSpeech: '动词', level: 'N4', example: '席に戻ってください。', exampleReading: 'せきにもどってください。', exampleMeaning: '请回到座位。' },
];

const n3Words: Word[] = [
  { id: 'n3-001', word: '努力', reading: 'どりょく', meaning: '努力', partOfSpeech: '名词/动词', level: 'N3', example: '努力は報われる。', exampleReading: 'どりょくはむくわれる。', exampleMeaning: '努力会有回报。' },
  { id: 'n3-002', word: '当然', reading: 'とうぜん', meaning: '当然', partOfSpeech: '副词/形容词', level: 'N3', example: '当然の結果です。', exampleReading: 'とうぜんのけっかです。', exampleMeaning: '是当然的结果。' },
  { id: 'n3-003', word: '確か', reading: 'たしか', meaning: '的确，大概', partOfSpeech: '副词/形容词', level: 'N3', example: '確か明日は休みだ。', exampleReading: 'たしかあしたはやすみだ。', exampleMeaning: '大概明天休息。' },
  { id: 'n3-004', word: '我慢', reading: 'がまん', meaning: '忍耐', partOfSpeech: '名词/动词', level: 'N3', example: 'もう我慢できない。', exampleReading: 'もうがまんできない。', exampleMeaning: '已经无法忍耐了。' },
  { id: 'n3-005', word: '感動', reading: 'かんどう', meaning: '感动', partOfSpeech: '名词/动词', level: 'N3', example: '映画に感動した。', exampleReading: 'えいがにかんどうした。', exampleMeaning: '被电影感动了。' },
  { id: 'n3-006', word: '回る', reading: 'まわる', meaning: '转，巡回', partOfSpeech: '动词', level: 'N3', example: '地球は太陽の周りを回る。', exampleReading: 'ちきゅうはたいようのまわりをまわる。', exampleMeaning: '地球绕着太阳转。' },
  { id: 'n3-007', word: '含める', reading: 'ふくめる', meaning: '包含', partOfSpeech: '动词', level: 'N3', example: '税を含めて5000円です。', exampleReading: 'ぜいをふくめて5000えんです。', exampleMeaning: '含税5000日元。' },
  { id: 'n3-008', word: '解決', reading: 'かいけつ', meaning: '解决', partOfSpeech: '名词/动词', level: 'N3', example: '問題を解決する。', exampleReading: 'もんだいをかいけつする。', exampleMeaning: '解决问题。' },
  { id: 'n3-009', word: '確かめる', reading: 'たしかめる', meaning: '确认', partOfSpeech: '动词', level: 'N3', example: 'もう一度確かめてください。', exampleReading: 'もういちどたしかめてください。', exampleMeaning: '请再确认一次。' },
  { id: 'n3-010', word: '諦める', reading: 'あきらめる', meaning: '放弃', partOfSpeech: '动词', level: 'N3', example: '絶対に諦めない。', exampleReading: 'ぜったいにあきらめない。', exampleMeaning: '绝不放弃。' },
  { id: 'n3-011', word: '出席', reading: 'しゅっせき', meaning: '出席', partOfSpeech: '名词/动词', level: 'N3', example: '会議に出席します。', exampleReading: 'かいぎにしゅっせきします。', exampleMeaning: '出席会议。' },
  { id: 'n3-012', word: '合格', reading: 'ごうかく', meaning: '合格', partOfSpeech: '名词/动词', level: 'N3', example: '試験に合格した。', exampleReading: 'しけんにごうかくした。', exampleMeaning: '考试合格了。' },
  { id: 'n3-013', word: '通訳', reading: 'つうやく', meaning: '口译', partOfSpeech: '名词/动词', level: 'N3', example: '通訳の仕事をしています。', exampleReading: 'つうやくのしごとをしています。', exampleMeaning: '从事口译工作。' },
  { id: 'n3-014', word: '到着', reading: 'とうちゃく', meaning: '到达', partOfSpeech: '名词/动词', level: 'N3', example: 'まもなく到着します。', exampleReading: 'まもなくとうちゃくします。', exampleMeaning: '即将到达。' },
  { id: 'n3-015', word: '反対', reading: 'はんたい', meaning: '反对', partOfSpeech: '名词/动词', level: 'N3', example: 'その意見に反対です。', exampleReading: 'そのいけんにはんたいです。', exampleMeaning: '反对那个意见。' },
  { id: 'n3-016', word: '注文', reading: 'ちゅうもん', meaning: '点餐；订购', partOfSpeech: '名词/动词', level: 'N3', example: 'コーヒーを注文した。', exampleReading: 'こーひーをちゅうもんした。', exampleMeaning: '点了咖啡。' },
  { id: 'n3-017', word: '交換', reading: 'こうかん', meaning: '交换', partOfSpeech: '名词/动词', level: 'N3', example: '名刺を交換しましょう。', exampleReading: 'めいしをこうかんしましょう。', exampleMeaning: '交换名片吧。' },
  { id: 'n3-018', word: '要求', reading: 'ようきゅう', meaning: '要求', partOfSpeech: '名词/动词', level: 'N3', example: '給料のアップを要求した。', exampleReading: 'きゅうりょうのあっぷをようきゅうした。', exampleMeaning: '要求涨工资。' },
  { id: 'n3-019', word: '伝える', reading: 'つたえる', meaning: '传达', partOfSpeech: '动词', level: 'N3', example: '伝言を伝えてください。', exampleReading: 'でんごんをつたえてください。', exampleMeaning: '请转达留言。' },
  { id: 'n3-020', word: '比べる', reading: 'くらべる', meaning: '比较', partOfSpeech: '动词', level: 'N3', example: '二つの商品を比べる。', exampleReading: 'ふたつのしょうひんをくらべる。', exampleMeaning: '比较两个商品。' },
];

const n2Words: Word[] = [
  { id: 'n2-001', word: '矛盾', reading: 'むじゅん', meaning: '矛盾', partOfSpeech: '名词', level: 'N2', example: '彼の意見は矛盾している。', exampleReading: 'かれのいけんはむじゅんしている。', exampleMeaning: '他的意见自相矛盾。' },
  { id: 'n2-002', word: '曖昧', reading: 'あいまい', meaning: '暧昧，模糊', partOfSpeech: '形容词', level: 'N2', example: '曖昧な返事をした。', exampleReading: 'あいまいなへんじをした。', exampleMeaning: '给了模糊的答复。' },
  { id: 'n2-003', word: '把握', reading: 'はあく', meaning: '把握', partOfSpeech: '名词/动词', level: 'N2', example: '状況を把握する。', exampleReading: 'じょうきょうをはあくする。', exampleMeaning: '把握情况。' },
  { id: 'n2-004', word: '算段', reading: 'さんだん', meaning: '筹措，想办法', partOfSpeech: '名词/动词', level: 'N2', example: '資金を算段する。', exampleReading: 'しきんをさんだんする。', exampleMeaning: '筹措资金。' },
  { id: 'n2-005', word: '遮る', reading: 'さえぎる', meaning: '遮挡，打断', partOfSpeech: '动词', level: 'N2', example: '光を遮るカーテン。', exampleReading: 'ひかりをさえぎるカーテン。', exampleMeaning: '遮光的窗帘。' },
  { id: 'n2-006', word: '承る', reading: 'うけたまわる', meaning: '恭听，接受', partOfSpeech: '动词', level: 'N2', example: 'ご意見を承ります。', exampleReading: 'ごいけんをうけたまわります。', exampleMeaning: '恭听您的意见。' },
  { id: 'n2-007', word: '言い訳', reading: 'いいわけ', meaning: '借口', partOfSpeech: '名词', level: 'N2', example: '言い訳は許されない。', exampleReading: 'いいわけはゆるされない。', exampleMeaning: '借口不被允许。' },
  { id: 'n2-008', word: '手配', reading: 'てはい', meaning: '安排，部署', partOfSpeech: '名词/动词', level: 'N2', example: '交通の手配をお願いします。', exampleReading: 'こうつうのてはいをおねがいします。', exampleMeaning: '请安排交通。' },
  { id: 'n2-009', word: '方針', reading: 'ほうしん', meaning: '方针', partOfSpeech: '名词', level: 'N2', example: '新しい方針を発表した。', exampleReading: 'あたらしいほうしんをはっぴょうした。', exampleMeaning: '发布了新方针。' },
  { id: 'n2-010', word: '対応', reading: 'たいおう', meaning: '对应，处理', partOfSpeech: '名词/动词', level: 'N2', example: 'クレームに対応する。', exampleReading: 'くれーむにたいおうする。', exampleMeaning: '处理投诉。' },
  { id: 'n2-011', word: '関する', reading: 'かんする', meaning: '关于', partOfSpeech: '动词', level: 'N2', example: 'この問題に関する報告書。', exampleReading: 'このもんだいにかんするほうこくしょ。', exampleMeaning: '关于这个问题的报告。' },
  { id: 'n2-012', word: '従う', reading: 'したがう', meaning: '遵从', partOfSpeech: '动词', level: 'N2', example: '指示に従ってください。', exampleReading: 'しじにしたがってください。', exampleMeaning: '请遵从指示。' },
  { id: 'n2-013', word: '含む', reading: 'ふくむ', meaning: '包含', partOfSpeech: '动词', level: 'N2', example: 'この料理は魚を含んでいる。', exampleReading: 'このりょうりはさかなをふくんでいる。', exampleMeaning: '这道菜含有鱼。' },
  { id: 'n2-014', word: '減少', reading: 'げんしょう', meaning: '减少', partOfSpeech: '名词/动词', level: 'N2', example: '人口が減少している。', exampleReading: 'じんこうがげんしょうしている。', exampleMeaning: '人口在减少。' },
  { id: 'n2-015', word: '増加', reading: 'ぞうか', meaning: '增加', partOfSpeech: '名词/动词', level: 'N2', example: '需要が増加している。', exampleReading: 'じゅようがぞうかしている。', exampleMeaning: '需求在增加。' },
];

const n1Words: Word[] = [
  { id: 'n1-001', word: '是正', reading: 'ぜせい', meaning: '纠正，修正', partOfSpeech: '名词/动词', level: 'N1', example: '不均衡を是正する。', exampleReading: 'ふきんこうをぜせいする。', exampleMeaning: '纠正不均衡。' },
  { id: 'n1-002', word: '憂慮', reading: 'ゆうりょ', meaning: '忧虑', partOfSpeech: '名词/动词', level: 'N1', example: '事態を憂慮する。', exampleReading: 'じたいをゆうりょする。', exampleMeaning: '忧虑事态发展。' },
  { id: 'n1-003', word: '喧しい', reading: 'やかましい', meaning: '吵闹的，严格的', partOfSpeech: '形容词', level: 'N1', example: '彼は作法に喧しい。', exampleReading: 'かれはさほうにやかましい。', exampleMeaning: '他对礼法很严格。' },
  { id: 'n1-004', word: '俯瞰', reading: 'ふかん', meaning: '俯瞰', partOfSpeech: '名词/动词', level: 'N1', example: '全体を俯瞰して考える。', exampleReading: 'ぜんたいをふかんしてかんがえる。', exampleMeaning: '俯瞰全局来思考。' },
  { id: 'n1-005', word: '脅かす', reading: 'おびやかす', meaning: '威胁', partOfSpeech: '动词', level: 'N1', example: '平和を脅かす行為。', exampleReading: 'へいわをおびやかすこうい。', exampleMeaning: '威胁和平的行为。' },
  { id: 'n1-006', word: '唆す', reading: 'そそのかす', meaning: '唆使', partOfSpeech: '动词', level: 'N1', example: '悪事を唆される。', exampleReading: 'あくじをそそのかされる。', exampleMeaning: '被唆使做坏事。' },
  { id: 'n1-007', word: '不祥事', reading: 'ふしょうじ', meaning: '丑闻，不当事件', partOfSpeech: '名词', level: 'N1', example: '企業の不祥事が発覚した。', exampleReading: 'きぎょうのふしょうじがはっかくした。', exampleMeaning: '企业的丑闻被曝光了。' },
  { id: 'n1-008', word: '逼迫', reading: 'ひっぱく', meaning: '紧迫，拮据', partOfSpeech: '名词/动词', level: 'N1', example: '財政が逼迫している。', exampleReading: 'ざいせいがひっぱくしている。', exampleMeaning: '财政拮据。' },
  { id: 'n1-009', word: '逸脱', reading: 'いつだつ', meaning: '偏离', partOfSpeech: '名词/动词', level: 'N1', example: '規範から逸脱する行為。', exampleReading: 'きはんからいつだつするこうい。', exampleMeaning: '偏离规范的行为。' },
  { id: 'n1-010', word: '提唱', reading: 'ていしょう', meaning: '提倡', partOfSpeech: '名词/动词', level: 'N1', example: '環境保護を提唱する。', exampleReading: 'かんきょうほごをていしょうする。', exampleMeaning: '提倡环境保护。' },
  { id: 'n1-011', word: '標榜', reading: 'ひょうぼう', meaning: '标榜', partOfSpeech: '名词/动词', level: 'N1', example: '自由を標榜する政党。', exampleReading: 'じゆうをひょうぼうするせいとう。', exampleMeaning: '标榜自由的政党。' },
  { id: 'n1-012', word: '繁盛', reading: 'はんじょう', meaning: '繁荣，生意兴隆', partOfSpeech: '名词/动词', level: 'N1', example: 'その店は大繁盛だ。', exampleReading: 'そのみせはだいはんじょうだ。', exampleMeaning: '那家店生意非常兴隆。' },
  { id: 'n1-013', word: '暗黙', reading: 'あんもく', meaning: '默认，默契', partOfSpeech: '名词', level: 'N1', example: '暗黙の了解がある。', exampleReading: 'あんもくのりょうかいがある。', exampleMeaning: '有默契的共识。' },
  { id: 'n1-014', word: '萎縮', reading: 'いしゅく', meaning: '萎缩', partOfSpeech: '名词/动词', level: 'N1', example: '経済が萎縮している。', exampleReading: 'けいざいがいしゅくしている。', exampleMeaning: '经济在萎缩。' },
  { id: 'n1-015', word: '楽観', reading: 'らっかん', meaning: '乐观', partOfSpeech: '名词', level: 'N1', example: '楽観的な見通し。', exampleReading: 'らっかんてきなみとおし。', exampleMeaning: '乐观的展望。' },
];

export const vocabularyByLevel: Record<JLPTLevel, Word[]> = {
  N5: n5Words,
  N4: n4Words,
  N3: n3Words,
  N2: n2Words,
  N1: n1Words,
};

export const allVocabulary: Word[] = [
  ...n5Words,
  ...n4Words,
  ...n3Words,
  ...n2Words,
  ...n1Words,
];