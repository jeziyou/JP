export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface GrammarPoint {
  id: string;
  pattern: string;
  meaning: string;
  level: JLPTLevel;
  explanation: string;
  examples: { japanese: string; reading: string; chinese: string }[];
  note?: string;
}

const n5Grammar: GrammarPoint[] = [
  {
    id: 'g-n5-001',
    pattern: '〜は〜です',
    meaning: '～是～',
    level: 'N5',
    explanation: '最基本的判断句式，用于说明主语的性质、状态或身份。',
    examples: [
      { japanese: '私は学生です。', reading: 'わたしはがくせいです。', chinese: '我是学生。' },
      { japanese: 'これは本です。', reading: 'これはほんです。', chinese: '这是书。' },
    ],
  },
  {
    id: 'g-n5-002',
    pattern: '〜があります / 〜がいます',
    meaning: '有～（存在句）',
    level: 'N5',
    explanation: 'あります用于无生命物体，います用于有生命的人和动物。',
    examples: [
      { japanese: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', chinese: '桌子上有书。' },
      { japanese: '庭に猫がいます。', reading: 'にわにねこがいます。', chinese: '院子里有猫。' },
    ],
  },
  {
    id: 'g-n5-003',
    pattern: '〜たい',
    meaning: '想做～',
    level: 'N5',
    explanation: '接动词ます形去掉ます后，表示第一人称的愿望。',
    examples: [
      { japanese: '日本に行きたいです。', reading: 'にほんにいきたいです。', chinese: '想去日本。' },
      { japanese: 'ラーメンが食べたい。', reading: 'らーめんがたべたい。', chinese: '想吃拉面。' },
    ],
  },
  {
    id: 'g-n5-004',
    pattern: '〜てください',
    meaning: '请～',
    level: 'N5',
    explanation: '接动词て形，表示礼貌的请求。',
    examples: [
      { japanese: 'ちょっと待ってください。', reading: 'ちょっとまってください。', chinese: '请稍等。' },
      { japanese: '名前を書いてください。', reading: 'なまえをかいてください。', chinese: '请写名字。' },
    ],
  },
  {
    id: 'g-n5-005',
    pattern: '〜ないでください',
    meaning: '请不要～',
    level: 'N5',
    explanation: '接动词ない形，表示礼貌地请求对方不要做某事。',
    examples: [
      { japanese: 'ここで写真を撮らないでください。', reading: 'ここでしゃしんをとらないでください。', chinese: '请不要在这里拍照。' },
      { japanese: '心配しないでください。', reading: 'しんぱいしないでください。', chinese: '请不要担心。' },
    ],
  },
  {
    id: 'g-n5-006',
    pattern: '〜ている',
    meaning: '正在～ / ～着',
    level: 'N5',
    explanation: '表示动作正在进行或状态的持续。',
    examples: [
      { japanese: '今、本を読んでいます。', reading: 'いま、ほんをよんでいます。', chinese: '现在正在读书。' },
      { japanese: '彼は東京に住んでいます。', reading: 'かれはとうきょうにすんでいます。', chinese: '他住在东京。' },
    ],
  },
  {
    id: 'g-n5-007',
    pattern: '〜ましょう',
    meaning: '一起～吧',
    level: 'N5',
    explanation: '接动词ます形去掉ます，表示劝诱或提议。',
    examples: [
      { japanese: '一緒に映画を見ましょう。', reading: 'いっしょにえいがをみましょう。', chinese: '一起看电影吧。' },
      { japanese: '帰りましょう。', reading: 'かえりましょう。', chinese: '回去吧。' },
    ],
  },
  {
    id: 'g-n5-008',
    pattern: '〜たことがある',
    meaning: '曾经～过',
    level: 'N5',
    explanation: '接动词た形，表示曾经有过某种经历。',
    examples: [
      { japanese: '富士山に登ったことがあります。', reading: 'ふじさんにのぼったことがあります。', chinese: '曾经爬过富士山。' },
      { japanese: '刺身を食べたことがない。', reading: 'さしみをたべたことがない。', chinese: '没吃过生鱼片。' },
    ],
  },
];

const n4Grammar: GrammarPoint[] = [
  {
    id: 'g-n4-001',
    pattern: '〜かもしれない',
    meaning: '也许～',
    level: 'N4',
    explanation: '接简体句，表示可能性，语气比だろう更不确定。',
    examples: [
      { japanese: '明日は雨かもしれない。', reading: 'あしたはあめかもしれない。', chinese: '明天也许下雨。' },
      { japanese: '彼はもう帰ったかもしれない。', reading: 'かれはもうかえったかもしれない。', chinese: '他也许已经回去了。' },
    ],
  },
  {
    id: 'g-n4-002',
    pattern: '〜ようになる',
    meaning: '变得～，能够～',
    level: 'N4',
    explanation: '接动词字典形或可能形，表示状态或能力的变化。',
    examples: [
      { japanese: '日本語が話せるようになりました。', reading: 'にほんごがはなせるようになりました。', chinese: '变得能说日语了。' },
      { japanese: '早く起きるようになった。', reading: 'はやくおきるようになった。', chinese: '变得早起了。' },
    ],
  },
  {
    id: 'g-n4-003',
    pattern: '〜ながら',
    meaning: '一边～一边～',
    level: 'N4',
    explanation: '接动词ます形去掉ます，表示同时进行两个动作。',
    examples: [
      { japanese: '音楽を聴きながら勉強する。', reading: 'おんがくをききながらべんきょうする。', chinese: '一边听音乐一边学习。' },
      { japanese: '歩きながら話しましょう。', reading: 'あるきながらはなしましょう。', chinese: '边走边聊吧。' },
    ],
  },
  {
    id: 'g-n4-004',
    pattern: '〜てしまう',
    meaning: '（不情愿地）～完了 / ～了',
    level: 'N4',
    explanation: '表示动作完成，常带有遗憾、后悔的语气。',
    examples: [
      { japanese: '財布を忘れてしまった。', reading: 'さいふをわすれてしまった。', chinese: '把钱包给忘了。' },
      { japanese: 'ケーキを全部食べてしまった。', reading: 'けーきをぜんぶたべてしまった。', chinese: '把蛋糕全吃完了。' },
    ],
  },
  {
    id: 'g-n4-005',
    pattern: '〜つもりだ',
    meaning: '打算～',
    level: 'N4',
    explanation: '接动词字典形或ない形，表示说话人的打算或计划。',
    examples: [
      { japanese: '来年留学するつもりです。', reading: 'らいねんりゅうがくするつもりです。', chinese: '打算明年留学。' },
      { japanese: 'もう行かないつもりだ。', reading: 'もういかないつもりだ。', chinese: '不打算再去了。' },
    ],
  },
];

const n3Grammar: GrammarPoint[] = [
  {
    id: 'g-n3-001',
    pattern: '〜わけではない',
    meaning: '并不是～',
    level: 'N3',
    explanation: '用于否定对方的推测或一般常识，表示"并非如此"。',
    examples: [
      { japanese: '毎日勉強しているわけではない。', reading: 'まいにちべんきょうしているわけではない。', chinese: '并不是每天都在学习。' },
      { japanese: '彼が正しいわけではない。', reading: 'かれがただしいわけではない。', chinese: '他并不是正确的。' },
    ],
  },
  {
    id: 'g-n3-002',
    pattern: '〜に違いない',
    meaning: '一定是～',
    level: 'N3',
    explanation: '表示说话人非常确信的推测。',
    examples: [
      { japanese: 'あの人は日本人に違いない。', reading: 'あのひとはにほんじんにちがいない。', chinese: '那个人一定是日本人。' },
      { japanese: '何かあったに違いない。', reading: 'なにかあったにちがいない。', chinese: '一定发生了什么。' },
    ],
  },
  {
    id: 'g-n3-003',
    pattern: '〜ばかりでなく',
    meaning: '不仅～而且～',
    level: 'N3',
    explanation: '表示递进，书面语。口语常用「だけでなく」。',
    examples: [
      { japanese: '彼は英語ばかりでなく、中国語も話せる。', reading: 'かれはえいごばかりでなく、ちゅうごくごもはなせる。', chinese: '他不仅会说英语，还会说中文。' },
    ],
  },
  {
    id: 'g-n3-004',
    pattern: '〜として',
    meaning: '作为～',
    level: 'N3',
    explanation: '表示身份、立场、资格等。',
    examples: [
      { japanese: '趣味として日本語を勉強している。', reading: 'しゅみとしてにほんごをべんきょうしている。', chinese: '作为兴趣爱好在学日语。' },
      { japanese: '代表として会議に出席する。', reading: 'だいひょうとしてかいぎにしゅっせきする。', chinese: '作为代表出席会议。' },
    ],
  },
];

const n2Grammar: GrammarPoint[] = [
  {
    id: 'g-n2-001',
    pattern: '〜に限る',
    meaning: '～是最好的',
    level: 'N2',
    explanation: '表示"～是最好的选择"。',
    examples: [
      { japanese: '疲れた時は寝るに限る。', reading: 'つかれたときはねるにかぎる。', chinese: '累的时候睡觉是最好的。' },
      { japanese: '夏は冷たいビールに限る。', reading: 'なつはつめたいびーるにかぎる。', chinese: '夏天冰啤酒是最好的。' },
    ],
  },
  {
    id: 'g-n2-002',
    pattern: '〜げ',
    meaning: '～的样子',
    level: 'N2',
    explanation: '接形容词词干，表示"看起来～的样子"。',
    examples: [
      { japanese: '彼女は悲しげな顔をしていた。', reading: 'かのじょはかなしげなかおをしていた。', chinese: '她露出悲伤的神情。' },
      { japanese: '自信ありげに話した。', reading: 'じしんありげにはなした。', chinese: '很有自信地说着。' },
    ],
  },
  {
    id: 'g-n2-003',
    pattern: '〜からして',
    meaning: '单从～来看',
    level: 'N2',
    explanation: '举出一个典型例子，表示"从这个来看就能判断整体"。',
    examples: [
      { japanese: '彼の態度からして許せない。', reading: 'かれのたいどからしてゆるせない。', chinese: '单从他的态度来看就不能原谅。' },
      { japanese: 'この店は外観からして高そうだ。', reading: 'このみせはがいかんからしてたかそうだ。', chinese: '这家店单从外观来看就很贵。' },
    ],
  },
];

const n1Grammar: GrammarPoint[] = [
  {
    id: 'g-n1-001',
    pattern: '〜まじき',
    meaning: '不应该～的',
    level: 'N1',
    explanation: '接动词字典形，表示"作为某身份不应该有的行为"。常用「あるまじき」。',
    examples: [
      { japanese: '教師にあるまじき行為だ。', reading: 'きょうしにあるまじきこういだ。', chinese: '是教师不该有的行为。' },
      { japanese: '許すまじき過ちだ。', reading: 'ゆるすまじきあやまちだ。', chinese: '是不可饶恕的错误。' },
    ],
  },
  {
    id: 'g-n1-002',
    pattern: '〜ならでは',
    meaning: '只有～才有的',
    level: 'N1',
    explanation: '表示"只有～才能做到/具有的独特之处"',
    examples: [
      { japanese: '日本ならではの文化です。', reading: 'にほんならではのぶんかです。', chinese: '是日本独有的文化。' },
      { japanese: '彼ならではのアイデアだ。', reading: 'かれならではのあいであだ。', chinese: '是他独有的创意。' },
    ],
  },
  {
    id: 'g-n1-003',
    pattern: '〜極まる',
    meaning: '极其～',
    level: 'N1',
    explanation: '接形容动词词干，表示程度到达极限。',
    examples: [
      { japanese: '失礼極まる態度だ。', reading: 'しつれいきわまるたいどだ。', chinese: '是极其失礼的态度。' },
      { japanese: '危険極まる場所だ。', reading: 'きけんきわまるばしょだ。', chinese: '是极其危险的地方。' },
    ],
  },
];

export const grammarByLevel: Record<JLPTLevel, GrammarPoint[]> = {
  N5: n5Grammar,
  N4: n4Grammar,
  N3: n3Grammar,
  N2: n2Grammar,
  N1: n1Grammar,
};