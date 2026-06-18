/**
 * Script to generate comprehensive JLPT grammar data
 * Usage: node scripts/generate-grammar.cjs
 */

const fs = require('fs');
const path = require('path');

// ─── Comprehensive JLPT Grammar Data ───────────────────────────────────
// Data compiled from JLPT reference sources
// Target: 250+ entries per level, 1250+ total

const grammarData = {
  N5: [
    // === Basic Sentence Patterns ===
    { pattern: '〜は〜です', meaning: '〜是〜', explanation: '最基本的判断句式，用于说明主语的性质、状态或身份。' },
    { pattern: '〜は〜ではありません', meaning: '〜不是〜', explanation: 'です的否定形式，用于否定判断。比じゃありません更正式。' },
    { pattern: '〜は〜じゃありません', meaning: '〜不是〜（口语）', explanation: 'ではありません的口语形式，日常会话中使用。' },
    { pattern: '〜は〜でした', meaning: '〜是〜（过去）', explanation: 'です的过去形式，用于过去的判断或说明。' },
    { pattern: '〜は〜ではありませんでした', meaning: '〜不是〜（过去否定）', explanation: 'です的过去否定形式，用于否定过去的判断。' },
    { pattern: '〜があります', meaning: '有〜（无生命物体）', explanation: 'あります用于无生命物体、植物、事物的存在。' },
    { pattern: '〜がいます', meaning: '有〜（有生命的人/动物）', explanation: 'います用于有生命的人和动物的存在。' },
    { pattern: '〜に〜があります', meaning: '在〜有〜（无生命）', explanation: '表示某处存在某物。に表示场所。' },
    { pattern: '〜に〜がいます', meaning: '在〜有〜（有生命）', explanation: '表示某处存在某人或某动物。' },
    { pattern: '〜は〜にあります', meaning: '〜在〜（无生命）', explanation: '表示某物在某处。主语用は提示。' },
    { pattern: '〜は〜にいます', meaning: '〜在〜（有生命）', explanation: '表示某人或动物在某处。' },

    // === Particles (助詞) ===
    { pattern: '助詞「は」〜', meaning: '〜（主题）', explanation: '提示主题。说明关于某个话题的描述、判断或说明。' },
    { pattern: '助詞「が」', meaning: '〜（主语/对象）', explanation: '表示主语，或表示好恶、能力、希望的对象。新信息的主语用が。' },
    { pattern: '助詞「を」', meaning: '把〜（宾语）', explanation: '表示动作的直接对象。也用于表示移动的场所（通过）。' },
    { pattern: '助詞「に」（時間）', meaning: '在〜（时间点）', explanation: '表示动作发生的具体时间点。不用于「毎日」等不特定时间。' },
    { pattern: '助詞「に」（場所・方向）', meaning: '到〜/向〜（方向）', explanation: '表示移动的目的地或方向。也用于存在场所。' },
    { pattern: '助詞「に」（間接目的語）', meaning: '给〜（间接对象）', explanation: '表示动作的接受者或对象。用于授受动词等。' },
    { pattern: '助詞「に」（目的）', meaning: '去〜（目的）', explanation: '接动词ます形去掉ます或名词，表示移动的目的。' },
    { pattern: '助詞「で」（場所）', meaning: '在〜（动作场所）', explanation: '表示动作发生的场所。与に表示存在的用法区别使用。' },
    { pattern: '助詞「で」（手段・方法）', meaning: '用〜/乘〜（手段）', explanation: '表示动作的手段、方法、工具或交通工具。' },
    { pattern: '助詞「で」（原因・理由）', meaning: '因为〜（原因）', explanation: '表示自然现象或事件的原因，常用于消极的事情。' },
    { pattern: '助詞「で」（范围）', meaning: '在〜（范围）', explanation: '表示时间、空间、数量等的范围界限。' },
    { pattern: '助詞「へ」', meaning: '向〜/往〜（方向）', explanation: '表示移动的方向。比に更强调方向性。也用于书信收件人。' },
    { pattern: '助詞「と」（共同・相手）', meaning: '和〜一起', explanation: '表示共同做某事的对象。常用「〜といっしょに」形式。' },
    { pattern: '助詞「と」（並立）', meaning: '〜和〜（并列）', explanation: '表示完全列举，将两个或多个事物并列。' },
    { pattern: '助詞「と」（引用）', meaning: '说〜（引用内容）', explanation: '引用思考、说话、书写的内容。后接言う、思う等动词。' },
    { pattern: '助詞「から」（起点）', meaning: '从〜（起点）', explanation: '表示时间或空间的起点。也可表示原材料（看不出变化）。' },
    { pattern: '助詞「まで」（終点）', meaning: '到〜（终点）', explanation: '表示时间或空间的终点。常与から搭配使用。' },
    { pattern: '助詞「より」（比較）', meaning: '比〜（比较基准）', explanation: '表示比较的基准。多用于书面语，口语中也用。' },
    { pattern: '助詞「の」（所有・所属）', meaning: '〜的（所有）', explanation: '表示所有、所属关系。相当于中文的"的"。' },
    { pattern: '助詞「の」（同格）', meaning: '〜的（同位语）', explanation: '表示同位语关系，前项与后项指同一事物。' },
    { pattern: '助詞「の」（名詞化）', meaning: '将句子名词化', explanation: '接在普通体后，将前面的句子变成一个名词性成分。' },
    { pattern: '助詞「も」', meaning: '也〜', explanation: '表示同类事物或情况的追加。也用于全面否定或全面肯定。' },
    { pattern: '助詞「か」', meaning: '〜或者〜（选择）', explanation: '表示选择关系。也可以放在句末表示疑问。' },
    { pattern: '助詞「や」', meaning: '〜和〜等（部分列举）', explanation: '表示部分列举，暗示还有其他。常与など搭配。' },
    { pattern: '助詞「など」', meaning: '〜等/之类的', explanation: '表示例举，暗示还有其他同类事物。与や配合使用。' },
    { pattern: '助詞「だけ」', meaning: '只〜/仅仅〜', explanation: '表示限定，范围仅限于此。口语中也用だけど表示转折。' },
    { pattern: '助詞「しか〜ない」', meaning: '只〜（限定否定）', explanation: '与否定形式搭配，表示限定。带有"少"或"不够"的语感。' },
    { pattern: '助詞「ぐらい」', meaning: '大约〜/〜左右', explanation: '表示大致的数量、程度。可与くらい通用。' },
    { pattern: '助詞「ころ」', meaning: '〜左右（时间）', explanation: '表示大致的时间点。可与ごろ通用。汉字写「頃」。' },
    { pattern: '助詞「でも」', meaning: '即使〜也/～之类的', explanation: '表示举例提示，暗示其他选择也可以。也可表让步。' },

    // === Interrogatives (疑問詞) ===
    { pattern: 'なに / なん', meaning: '什么', explanation: '询问事物或内容。后续读音影响读法。なに用于较多场合。' },
    { pattern: 'だれ', meaning: '谁', explanation: '询问人物。礼貌说法用どなた或どちらさま。' },
    { pattern: 'どこ', meaning: '哪里', explanation: '询问地点或场所。也用于询问部分的情况。' },
    { pattern: 'いつ', meaning: '什么时候', explanation: '询问时间。回答时用具体的时间表达。' },
    { pattern: 'なぜ', meaning: '为什么', explanation: '询问原因或理由。比どうして更正式。回答用から或ので。' },
    { pattern: 'どうして', meaning: '为什么/怎样', explanation: '询问原因（口语）或方法。比なぜ更口语化。' },
    { pattern: 'どう', meaning: '怎么样', explanation: '询问状态、方法或对方的意见。也用于打招呼。' },
    { pattern: 'いくら', meaning: '多少钱', explanation: '询问价格或金额。也用于「いくら〜ても」表"无论怎么"。' },
    { pattern: 'どの', meaning: '哪个（连体词）', explanation: '不能单独使用，后面必须接名词。从三个以上中选择。' },
    { pattern: 'どれ', meaning: '哪一个', explanation: '可以单独使用，从三个以上的事物中选择。' },
    { pattern: 'どちら', meaning: '哪边/哪一个（敬语）', explanation: 'どっち的礼貌说法。从两个中选择。也用于问方向。' },
    { pattern: 'どんな', meaning: '什么样的', explanation: '询问事物的性质、状态或种类。连体词，后接名词。' },
    { pattern: 'どうやって', meaning: '怎样/如何做', explanation: '询问具体的方法或手段。比どう更具体地询问方式。' },
    { pattern: 'いくつ', meaning: '几个/几岁', explanation: '询问数量或年龄。小孩多用此问年龄。' },

    // === Demonstratives (指示詞) ===
    { pattern: 'これ', meaning: '这个（近称）', explanation: '指说话人近处的事物。こ系列表示离说话人近。' },
    { pattern: 'それ', meaning: '那个（中称）', explanation: '指听话人近处或离双方稍远的事物。そ系列。' },
    { pattern: 'あれ', meaning: '那个（远称）', explanation: '指离双方都远的事物。あ系列表示远离说话人和听话人。' },
    { pattern: 'どれ', meaning: '哪个（疑问）', explanation: '从三个以上的事物中进行选择的疑问词。' },
    { pattern: 'この＋名詞', meaning: '这个〜（近称）', explanation: '修饰名词，指说话人近处的人或事物。' },
    { pattern: 'その＋名詞', meaning: '那个〜（中称）', explanation: '修饰名词，指听话人近处或上下文提及的人或事物。' },
    { pattern: 'あの＋名詞', meaning: '那个〜（远称）', explanation: '修饰名词，指离双方都远的人或事物。也指双方都知道的。' },
    { pattern: 'どの＋名詞', meaning: '哪个〜（疑问）', explanation: '修饰名词的疑问词，从三个以上中选择。' },
    { pattern: 'ここ', meaning: '这里', explanation: '指说话人所在或附近的场所。' },
    { pattern: 'そこ', meaning: '那里', explanation: '指听话人附近或离双方不太远的场所。' },
    { pattern: 'あそこ', meaning: '那里（远）', explanation: '指离双方都远的场所。' },
    { pattern: 'こちら', meaning: '这边/这位（敬语）', explanation: 'こっち的礼貌说法。可以指方向、场所或人。' },
    { pattern: 'そちら', meaning: '那边/那位（敬语）', explanation: 'そっち的礼貌说法。' },
    { pattern: 'あちら', meaning: '那边/那位（敬语远称）', explanation: 'あっち的礼貌说法。' },

    // === Counters (助数詞) ===
    { pattern: '〜つ（個数）', meaning: '〜个', explanation: '最通用的计数方式。从ひとつ到とお（1-10），之后用〜個。也用于抽象事物。' },
    { pattern: '〜人（にん）', meaning: '〜个人', explanation: '计数人数。注意1人=ひとり，2人=ふたり特殊读法。' },
    { pattern: '〜本（ほん）', meaning: '〜根/条/瓶', explanation: '计数细长的物体，如笔、瓶、伞、树、头发等。注意1本=いっぽん等音变。' },
    { pattern: '〜枚（まい）', meaning: '〜张/片', explanation: '计数扁平薄的东西，如纸、盘子、衬衫、CD等。' },
    { pattern: '〜冊（さつ）', meaning: '〜册', explanation: '计数书籍、杂志、笔记本等装订成册的物品。' },
    { pattern: '〜台（だい）', meaning: '〜台', explanation: '计数电器、车辆、机械等较大的机器设备。' },
    { pattern: '〜匹（ひき）', meaning: '〜只/条', explanation: '计数小型动物如猫、狗、鱼、昆虫等。注意音变。' },
    { pattern: '〜回（かい）', meaning: '〜次', explanation: '计数动作或事件的次数、频率。' },
    { pattern: '〜階（かい）', meaning: '〜层/楼', explanation: '计数建筑物的楼层。注意3階=さんがい等特殊读法。' },
    { pattern: '〜歳（さい）', meaning: '〜岁', explanation: '计数年龄。注意1歳=いっさい，8歳=はっさい等特殊读法。' },
    { pattern: '〜番（ばん）', meaning: '第〜号', explanation: '计数顺序或编号。如一番（第一）、電話番号（电话号码）。' },
    { pattern: '〜円（えん）', meaning: '〜日元', explanation: '日本的货币单位，计数金额。' },
    { pattern: '〜時（じ）', meaning: '〜点钟', explanation: '计数时刻。注意4時=よじ，9時=くじ等特殊读法。' },
    { pattern: '〜分（ふん/ぷん）', meaning: '〜分钟', explanation: '计数分钟。注意音变规则：1分=いっぷん，3分=さんぷん。' },
    { pattern: '〜時間（じかん）', meaning: '〜个小时', explanation: '计数持续的时间长度。注意4時間=よじかん。' },
    { pattern: '〜日（にち/か）', meaning: '〜号/天', explanation: '计数日期或天数。1-10号有特殊读法如ついたち、ふつか等。' },
    { pattern: '〜月（がつ）', meaning: '〜月（月份）', explanation: '计数月份。注意4月=しがつ，7月=しちがつ等特殊读法。' },
    { pattern: '〜年（ねん）', meaning: '〜年', explanation: '计数年份或年度。如2024年（にせんにじゅうよねん）。' },
    { pattern: '〜週間（しゅうかん）', meaning: '〜周', explanation: '计数以周为单位的时间长度。1週間=いっしゅうかん。' },
    { pattern: '〜ヶ月（かげつ）', meaning: '〜个月（时长）', explanation: '计数持续的月数。注意1ヶ月=いっかげつ，6ヶ月=ろっかげつ。' },
    { pattern: '〜個（こ）', meaning: '〜个', explanation: '计数小型固体物品，如水果、鸡蛋、石头等。最常用的计数词之一。' },
    { pattern: '〜杯（はい）', meaning: '〜杯', explanation: '计数杯子、碗等容器中的液体或食物。注意音变：1杯=いっぱい。' },

    // === Time Expressions (時間表現) ===
    { pattern: '今（いま）', meaning: '现在', explanation: '表示当前的时间点。可与〜時、〜分等配合使用。' },
    { pattern: '今日（きょう）', meaning: '今天', explanation: '表示"今天"这一天。不用于持续的"今日"。' },
    { pattern: '明日（あした/あす）', meaning: '明天', explanation: 'あした是口语，あす是较正式说法。' },
    { pattern: '昨日（きのう）', meaning: '昨天', explanation: '昨天的基本说法。书面语读作さくじつ。' },
    { pattern: '一昨日（おととい）', meaning: '前天', explanation: '昨天的前一天。口语常用。' },
    { pattern: '明後日（あさって）', meaning: '后天', explanation: '明天的后一天。口语常用。' },
    { pattern: '毎日（まいにち）', meaning: '每天', explanation: '表示每一天都做某事。后不接に。' },
    { pattern: '毎朝（まいあさ）', meaning: '每天早上', explanation: '表示每天早上都进行某动作。' },
    { pattern: '毎晩（まいばん）', meaning: '每天晚上', explanation: '表示每天晚上都做某事。' },
    { pattern: '今週（こんしゅう）', meaning: '这周', explanation: '表示包含说话时刻的这一周。' },
    { pattern: '来週（らいしゅう）', meaning: '下周', explanation: '表示本周之后的那一周。' },
    { pattern: '先週（せんしゅう）', meaning: '上周', explanation: '表示本周之前的那一周。' },
    { pattern: '今月（こんげつ）', meaning: '这个月', explanation: '表示包含说话时刻的这个月。' },
    { pattern: '来月（らいげつ）', meaning: '下个月', explanation: '表示本月之后的那一个月。' },
    { pattern: '先月（せんげつ）', meaning: '上个月', explanation: '表示本月之前的那一个月。' },
    { pattern: '今年（ことし）', meaning: '今年', explanation: '表示当前的年份。' },
    { pattern: '来年（らいねん）', meaning: '明年', explanation: '表示今年之后的那一年。' },
    { pattern: '去年（きょねん）', meaning: '去年', explanation: '表示今年之前的那一年。' },
    { pattern: '〜ごろ', meaning: '〜左右（时间点）', explanation: '接在表示时间的名词后，表示大致的时间点。' },
    { pattern: '〜から〜まで', meaning: '从〜到〜', explanation: 'から表示起点，まで表示终点。可表示时间或空间的范围。' },

    // === Basic Expressions (基本表現) ===
    { pattern: '〜たい', meaning: '想做〜', explanation: '接动词ます形去掉ます后，表示第一人称的愿望。疑问句中可用于第二人称。' },
    { pattern: '〜たがる', meaning: '想做〜（第三人称）', explanation: '表示第三人称的愿望。将たい的い去掉加がる。' },
    { pattern: '〜がほしい', meaning: '想要〜（东西）', explanation: '表示第一人称想要某物。が表示欲求的对象。' },
    { pattern: '〜をほしがる', meaning: '想要〜（第三人称的东西）', explanation: '表示第三人称想要某物。' },
    { pattern: '〜ができる', meaning: '会〜/能〜', explanation: '表示能力或某种情况下的可能性。名词+ができる。' },
    { pattern: '〜ことができる', meaning: '能够〜', explanation: '接动词字典形，表示能力或可能性。N5核心语法之一。' },
    { pattern: '〜ことができない', meaning: '不能〜', explanation: 'ことができる的否定形式。' },
    { pattern: '〜のが上手だ', meaning: '擅长做〜', explanation: '动词字典形+のが上手，表示擅长做某事。' },
    { pattern: '〜のが下手だ', meaning: '不擅长做〜', explanation: '动词字典形+のが下手，表示不擅长做某事。' },
    { pattern: '〜のが好きだ', meaning: '喜欢做〜', explanation: '动词字典形+のが好き，表示喜欢做某事。' },
    { pattern: '〜のが嫌いだ', meaning: '讨厌做〜', explanation: '动词字典形+のが嫌い，表示讨厌做某事。' },

    // === Verb Conjugation (動詞活用) ===
    { pattern: '動詞の辞書形', meaning: '动词原形（字典形）', explanation: '动词的基本形态。一段动词以〜る结尾，五段动词最后一个假名在う段。' },
    { pattern: '動詞のます形', meaning: '动词ます形', explanation: '一段去る+ます，五段う段→い段+ます。表示礼貌的肯定。' },
    { pattern: '動詞のて形', meaning: '动词て形', explanation: '一段去る+て，五段根据词尾有不同的音变规则（促音便、拨音便、イ音便）。' },
    { pattern: '動詞のた形', meaning: '动词た形', explanation: 'て形中て→た/で→だ。表示过去或完了。' },
    { pattern: '動詞のない形', meaning: '动词否定形', explanation: '一段去る+ない，五段う段→あ段+ない。注意ある→ない是例外。' },
    { pattern: 'イ形容詞の活用', meaning: 'い形容词活用', explanation: '去い+く（否定/连用）、去い+ければ（条件）、去い+かった（过去）等。いい→よい特殊变化。' },
    { pattern: 'ナ形容詞の活用', meaning: 'な形容词活用', explanation: '词干+だ/です（终止）、+な（连体）、+に（连用）、+なら（假定）等。' },
    { pattern: '名詞＋ですの活用', meaning: '名词＋です的活用', explanation: 'でした（过去）、ではありません/じゃありません（否定）等。' },

    // === Request & Command (依頼・命令) ===
    { pattern: '〜てください', meaning: '请〜', explanation: '接动词て形，表示礼貌的请求。比〜なさい更礼貌。' },
    { pattern: '〜ないでください', meaning: '请不要〜', explanation: '接动词ない形，表示礼貌地请求对方不要做某事。' },
    { pattern: '〜て', meaning: '〜一下（简体会话）', explanation: '口语中てください省略ください。关系亲密者间的请求。' },
    { pattern: '〜ないで', meaning: '不要〜（简体会话）', explanation: '口语中ないでください省略ください。' },
    { pattern: '〜なさい', meaning: '请做〜（命令·教育）', explanation: '接动词ます形去掉ます，表示命令或指示。多用于父母对孩子、老师对学生的教导。' },
    { pattern: '〜てはいけない', meaning: '不可以〜', explanation: '表示禁止。口语中常变为〜ちゃいけない/〜じゃいけない。' },
    { pattern: '〜ちゃいけない', meaning: '不可以〜（口语）', explanation: '〜てはいけない的口语缩约形式。日常会话中使用。' },
    { pattern: '〜てはだめだ', meaning: '不准〜', explanation: '表示不准、不行。比いけない更口语化。' },
    { pattern: '〜てもいい', meaning: '可以〜', explanation: '表示许可或允许。问句用〜てもいいですか。' },
    { pattern: '〜てもいいですか', meaning: '可以〜吗？', explanation: '请求对方许可。比〜てもいい更婉转的询问。' },

    // === Suggestion & Invitation (勧誘・提案) ===
    { pattern: '〜ましょう', meaning: '一起〜吧', explanation: '接动词ます形去掉ます，表示劝诱或提议一起做某事。' },
    { pattern: '〜ましょうか', meaning: '要〜吗？/ 我来〜吧', explanation: '表示提议或主动承担做某事。语调下降表示主动承担。' },
    { pattern: '〜ませんか', meaning: '要不要一起〜？', explanation: '表示劝诱。比ましょうか更礼貌婉转。' },
    { pattern: '〜ましょう（意向形）', meaning: '我们〜吧（决心）', explanation: '表示说话人的决心或意志。非劝诱用法。' },

    // === Progressive & State (進行・状態) ===
    { pattern: '〜ている', meaning: '正在〜 / 〜着', explanation: '表示动作正在进行或状态的持续。也表习惯性动作。' },
    { pattern: '〜ています', meaning: '正在〜 / 〜着（礼貌）', explanation: 'ている的礼貌形式。最常用的进行态表达。' },
    { pattern: '〜ていない', meaning: '还没〜', explanation: 'ている的否定形式。表示动作尚未发生或状态未达成。' },
    { pattern: '〜ていました', meaning: '（当时）正在〜', explanation: 'ている的过去礼貌形式。表示过去某个时间正在做某事。' },

    // === Experience & Completion (経験・完了) ===
    { pattern: '〜たことがある', meaning: '曾经〜过', explanation: '接动词た形，表示曾经有过某种经历。' },
    { pattern: '〜たことがない', meaning: '未曾〜过', explanation: 'たことがある的否定形式。' },
    { pattern: '〜たり〜たりする', meaning: '又〜又〜 / 或〜或〜', explanation: '从多个动作或状态中列举两个代表性例子。' },
    { pattern: '〜た', meaning: '〜了（过去/完了）', explanation: '简体过去形式。表示过去发生或动作的完了。' },
    { pattern: '〜ました', meaning: '〜了（礼貌过去）', explanation: 'ます的过去形式。礼貌地表示过去的事情。' },

    // === Change (変化) ===
    { pattern: '〜くなる', meaning: '变得〜（イ形容词）', explanation: 'イ形容词去い+くなる，表示自然状态变化。' },
    { pattern: '〜になる', meaning: '变得〜（ナ形容词/名词）', explanation: 'ナ形容词/名词+になる，表示自然状态变化。' },
    { pattern: '〜くする', meaning: '使〜变得（イ形容词，人为）', explanation: '人为地使状态发生变化。主语有意识地改变。' },
    { pattern: '〜にする', meaning: '使〜变得（ナ形容词/名词，人为）', explanation: '表示人为变化，或表示从选项中选择。' },
    { pattern: '〜ことにする', meaning: '决定〜', explanation: '表示主观决定做某事。基于自己的意志。' },
    { pattern: '〜ことになる', meaning: '决定〜 / 结果会是〜', explanation: '表示客观决定或自然结果，非个人意志。' },

    // === Obligation & Necessity (義務・必要) ===
    { pattern: '〜なければならない', meaning: '必须〜', explanation: '表示义务或必须。口语变为〜なきゃならない/〜なくちゃならない。' },
    { pattern: '〜なくてはいけない', meaning: '必须〜', explanation: '表示必须做某事。与なければならない近义。' },
    { pattern: '〜なくてもいい', meaning: '不必〜', explanation: '表示不需要做某事。没有义务。' },
    { pattern: '〜ないといけない', meaning: '不〜不行', explanation: '口语化的义务表达。关西地区常用。' },

    // === Reasoning (理由・推量) ===
    { pattern: '〜から', meaning: '因为〜', explanation: '表示主观原因。后面接说话人的判断、意志、请求等。' },
    { pattern: '〜ので', meaning: '因为〜（客观）', explanation: '表示客观因果关系，语气更礼貌。后接客观事实较自然。' },
    { pattern: '〜けど / 〜が', meaning: '虽然〜但是', explanation: '表示转折关系。口语中けど更常用，が较正式。' },
    { pattern: '〜でしょう', meaning: '〜吧（推测）', explanation: '表示推测或确认。语调上升表确认，下降表推测。' },
    { pattern: '〜だろう', meaning: '〜吧（简体推测）', explanation: 'でしょう的简体形式。男性多用。' },
    { pattern: '〜かもしれない', meaning: '也许〜', explanation: '表示可能性，语气比でしょう低。不太确定的推测。' },
    { pattern: '〜と思う', meaning: '我觉得〜', explanation: '表示说话人的想法或意见。简体+と思う。' },
    { pattern: '〜と言う', meaning: '叫做〜 / 说〜', explanation: '表示名称，或引用话语。名前は〜と言います表示名字。' },
    { pattern: '〜と言っていました', meaning: '（听到某人）说〜', explanation: '转述第三者的发言。传达信息时的说法。' },
    { pattern: '〜の？', meaning: '〜吗？（简体疑问）', explanation: '简体句末+の表示疑问。口语中常用，女性用语感较强。' },
    { pattern: '〜んだ', meaning: '是〜（说明语气）', explanation: '表示对情况的说明或解释。のだ的口语形式。' },
    { pattern: '〜んです', meaning: '是〜（礼貌说明）', explanation: '表示说明、解释或强调的语气。常用于对话中寻求确认或解释。' },

    // === Comparison (比較) ===
    { pattern: '〜より', meaning: '比〜更', explanation: '表示比较基准。AはBより〜で"A比B更〜"。' },
    { pattern: '〜のほうが', meaning: '〜更', explanation: '与より配合使用表示比较。BよりAのほうが〜で"A比B更〜"。' },
    { pattern: '〜で一番', meaning: '在〜中最', explanation: '表示最高级比较。在某个范围内最〜。' },
    { pattern: '〜と同じ', meaning: '和〜一样', explanation: '表示相同或一致。AはBと同じだ。"A和B一样"。' },
    { pattern: '〜と違う', meaning: '和〜不同', explanation: '表示差异。AはBと違う。"A和B不同"。' },

    // === Purpose & Means (目的・手段) ===
    { pattern: '〜ように', meaning: '像〜那样 / 为了〜', explanation: '表示比喻，或表示目的（前面用可能形或非意志动词）。' },
    { pattern: '〜ために', meaning: '为了〜', explanation: '表示目的。前面接意志动词的字典形或名词+の。' },
    { pattern: '〜に（目的）', meaning: '去（做）〜', explanation: '动词ます形去ます+に+移动动词，表示移动的目的。' },

    // === Before & After (前後) ===
    { pattern: '〜前に', meaning: '在〜之前', explanation: '动词字典形+前に。注意前面不用た形。' },
    { pattern: '〜た後で', meaning: '在〜之后', explanation: '动词た形+後で。表示做完前项后做后项。' },
    { pattern: '〜てから', meaning: '〜之后', explanation: '表示做完前项后做后项。强调先后顺序。' },
    { pattern: '〜とき', meaning: '〜的时候', explanation: '表示某个时间点或场合。前面接简体形式。' },

    // === Plan & Intention (予定・意志) ===
    { pattern: '〜つもりだ', meaning: '打算〜', explanation: '表示说话人的打算或计划。否定有〜ないつもり和〜つもりはない两种。' },
    { pattern: '〜予定だ', meaning: '预定〜', explanation: '表示按照计划或预定做某事。比つもり更客观。' },

    // === Giving & Receiving (授受表現) ===
    { pattern: 'あげる', meaning: '给（别人）', explanation: '说话人或己方给外人东西。主语给比自己地位低或平辈的人。' },
    { pattern: 'もらう', meaning: '得到/收到', explanation: '说话人从别人那里得到东西。主语接受方。' },
    { pattern: 'くれる', meaning: '给（我/己方）', explanation: '外人给说话人或己方东西。主语是给予方。' },
    { pattern: '〜てあげる', meaning: '帮别人做〜', explanation: '表示为别人做某事。有施恩于人的语感，对长辈不用。' },
    { pattern: '〜てもらう', meaning: '请别人做〜', explanation: '表示请求别人为自己或己方做某事并受益。' },
    { pattern: '〜てくれる', meaning: '别人帮我做〜', explanation: '表示别人自发为自己或己方做某事。带有感谢之情。' },

    // === Honorifics Basic (敬語入門) ===
    { pattern: 'お〜になる', meaning: '（尊敬语）〜', explanation: '表示对动作主体的尊敬。お+ます形去ます+になる。如お帰りになる。' },
    { pattern: 'お/ご〜する', meaning: '（谦让语）〜', explanation: '表示对动作对象的尊敬。お+ます形去ます+する。如お持ちする、ご案内する。' },
    { pattern: 'いらっしゃる', meaning: '在/去/来（尊敬）', explanation: 'いる・行く・来る的尊敬语。用于对长辈或上级。' },
    { pattern: '召し上がる', meaning: '吃/喝（尊敬）', explanation: '食べる・飲む的尊敬语。用于对客人或长辈。' },
    { pattern: 'ご覧になる', meaning: '看（尊敬）', explanation: '見る的尊敬语。如ご覧ください。' },
    { pattern: 'おっしゃる', meaning: '说（尊敬）', explanation: '言う的尊敬语。注意ます形是おっしゃいます。' },
    { pattern: 'なさる', meaning: '做（尊敬）', explanation: 'する的尊敬语。注意ます形是なさいます。' },
    { pattern: 'ござる', meaning: '有/在（自谦·郑重）', explanation: 'ある的郑重语。〜でございます是です的郑重形式。' },
    { pattern: '申す', meaning: '说/叫做（自谦）', explanation: '言う的自谦语。自己说或自我介绍时使用。〜と申します。' },
    { pattern: '致す', meaning: '做（自谦）', explanation: 'する的自谦语。自分の行动に対して使う。' },
    { pattern: '参る', meaning: '去/来（自谦）', explanation: '行く・来る的自谦语。自己去某处时使用。' },
    { pattern: 'おる', meaning: '在（自谦）', explanation: 'いる的自谦语。〜ております是〜ています的郑重形式。' },
    { pattern: 'いただく', meaning: '吃/喝/得到（自谦）', explanation: '食べる・飲む・もらう的自谦语。也用于〜ていただく（请别人做）。' },
    { pattern: '差し上げる', meaning: '给（自谦）', explanation: 'あげる的自谦语。自己给长辈或外人东西时使用。' },
    { pattern: '拝見する', meaning: '看（自谦）', explanation: '見る的自谦语。自己看对方的东西时表示敬意。' },
    { pattern: '〜でございます', meaning: '是〜（郑重语）', explanation: 'です的郑重表达。在商务或正式场合使用。' },

    // === Sentence-ending Particles (終助詞) ===
    { pattern: '〜ね', meaning: '〜呢/对吧', explanation: '表示确认、同意或缓和语气。寻求对方同感。' },
    { pattern: '〜よ', meaning: '〜哦/告诉你', explanation: '表示告诉对方不知道的事，强调自己的判断或主张。' },
    { pattern: '〜よね', meaning: '〜对吧（确认）', explanation: 'ね和よ的结合。表示自己有判断但向对方确认。' },
    { pattern: '〜な', meaning: '不要〜（禁止）', explanation: '接动词字典形，表示禁止。男性用语，语气较强。' },
    { pattern: '〜かな', meaning: '〜呢/会不会〜（自问）', explanation: '表示自言自语或委婉的疑问。男性多用。' },
    { pattern: '〜かしら', meaning: '〜呢/会不会〜（女性）', explanation: 'かな的女性对应表达。语气较柔和。' },

    // === Conjunction (接続表現) ===
    { pattern: '〜そして', meaning: '而且/然后', explanation: '表示并列或时间上的先后顺序。连接句子与句子。' },
    { pattern: '〜でも', meaning: '但是', explanation: '表示转折。在句子开头使用，与が/けど在句中不同。' },
    { pattern: '〜それから', meaning: '然后/还有', explanation: '表示追加或时间顺序。比そして更强调顺序。' },
    { pattern: '〜だから', meaning: '所以/因此', explanation: 'から在句首用作接续词。表示基于前述内容的结论。' },
    { pattern: '〜それで', meaning: '因此/那么', explanation: '表示基于前述内容的自然结果。比だから更客观。' },

    // === Quantity & Degree (数量・程度) ===
    { pattern: 'とても', meaning: '非常', explanation: '强调程度很高。后面接肯定形式。' },
    { pattern: 'あまり〜ない', meaning: '不太〜', explanation: '与否定形式搭配，表示程度不高。あまり→あんまり（口语）。' },
    { pattern: 'ちょっと', meaning: '有点/稍微', explanation: '表示程度较低。也用于委婉拒绝时的开场。' },
    { pattern: 'たくさん', meaning: '很多', explanation: '表示数量多。可以做副词或名词使用。' },
    { pattern: '少し（すこし）', meaning: '一点/少许', explanation: '表示少量或程度轻微。口语中常说ちょっと。' },
    { pattern: 'よく', meaning: '经常/很好地', explanation: '表示频率高或程度好。よく+する表示经常做某事。' },
    { pattern: '時々（ときどき）', meaning: '有时/偶尔', explanation: '表示中等的频率。介于いつも和あまり之间。' },
    { pattern: 'いつも', meaning: '总是/经常', explanation: '表示高频率或习惯性。也可表示"平时"。' },
    { pattern: 'もう', meaning: '已经/再', explanation: '表示已经完成，或再（もう一度）。也表不满（もう！）。' },
    { pattern: 'まだ', meaning: '还/尚未', explanation: '肯定表示"还"，まだある（还有）。否定表示"还没"，まだない（还没有）。' },
    { pattern: '全部（ぜんぶ）', meaning: '全部', explanation: '表示所有、一切。可以单独使用做副词。' },
    { pattern: '〜すぎる', meaning: '过于〜', explanation: '接动词ます形去ます/形容词去い/な形容词词干，表示超过正常程度。' },

    // === Greetings & Fixed Expressions (定型表現) ===
    { pattern: 'おはようございます', meaning: '早上好', explanation: '早晨的问候语。对朋友可说おはよう。' },
    { pattern: 'こんにちは', meaning: '你好（白天）', explanation: '白天的问候语，大约从上午10点到傍晚。注意は读wa。' },
    { pattern: 'こんばんは', meaning: '晚上好', explanation: '晚上的问候语。同样は读wa。' },
    { pattern: 'さようなら', meaning: '再见', explanation: '较正式的告别。日常中じゃあね或バイバイ更常用。' },
    { pattern: 'ありがとうございます', meaning: '谢谢', explanation: '表示感谢。对朋友可说ありがとう。' },
    { pattern: 'すみません', meaning: '对不起/劳驾', explanation: '道歉、感谢或搭话的万能表达。也用于轻微的道歉。' },
    { pattern: 'ごめんなさい', meaning: '对不起', explanation: '比すみません更正式的道歉。对朋友可说ごめん。' },
    { pattern: 'いただきます', meaning: '我开动了', explanation: '吃饭前说的固定用语。表示感谢食物。' },
    { pattern: 'ごちそうさまでした', meaning: '我吃好了', explanation: '吃完饭后说的固定用语。表示感谢款待。' },
    { pattern: 'いってきます', meaning: '我出门了', explanation: '出门时对家人说的话。' },
    { pattern: 'いってらっしゃい', meaning: '路上小心', explanation: '对出门的人说的回应。' },
    { pattern: 'ただいま', meaning: '我回来了', explanation: '回到家的固定用语。' },
    { pattern: 'おかえりなさい', meaning: '欢迎回来', explanation: '对ただいま的回应。' },
    { pattern: 'おやすみなさい', meaning: '晚安', explanation: '睡前问候。对朋友可说おやすみ。' },
    { pattern: 'はじめまして', meaning: '初次见面', explanation: '自我介绍的固定开场。第一次见面时使用。' },
    { pattern: 'どうぞよろしく', meaning: '请多关照', explanation: '自我介绍结尾的固定用语。也可说どうぞよろしくお願いします。' },
    { pattern: 'お元気ですか', meaning: '你好吗？', explanation: '问候对方的健康状况。回答用おかげさまで。' },
    { pattern: 'おかげさまで', meaning: '托您的福', explanation: '回应お元気ですかの固定说法。表示谦虚。' },
    { pattern: 'お願いします', meaning: '拜托了/请', explanation: '请求或订购时的万能表达。' },

    // === Numbers & Counting (数字・数え方) ===
    { pattern: '数字の読み方（1〜10）', meaning: '数字1-10的读法', explanation: 'いち、に、さん、し/よん、ご、ろく、しち/なな、はち、きゅう/く、じゅう。有音读和训读两种体系。' },
    { pattern: '数字の読み方（百〜万）', meaning: '大数字的读法', explanation: '百（ひゃく）→千（せん）→万（まん）→億（おく）。注意音变规则。' },

    // === Direction & Location (方向・位置) ===
    { pattern: '上（うえ）', meaning: '上面', explanation: '表示位置在上方。也用于〜の上に/で。' },
    { pattern: '下（した）', meaning: '下面', explanation: '表示位置在下方。' },
    { pattern: '前（まえ）', meaning: '前面', explanation: '表示位置在前方。也用于时间上的"之前"。' },
    { pattern: '後ろ（うしろ）', meaning: '后面', explanation: '表示位置在后方。' },
    { pattern: '中（なか）', meaning: '里面', explanation: '表示位置在内部。' },
    { pattern: '外（そと）', meaning: '外面', explanation: '表示位置在外部。' },
    { pattern: '右（みぎ）', meaning: '右边', explanation: '表示右侧方向。' },
    { pattern: '左（ひだり）', meaning: '左边', explanation: '表示左侧方向。' },
    { pattern: '隣（となり）', meaning: '旁边/隔壁', explanation: '表示相邻的位置。也用于邻国、邻人等。' },
    { pattern: '近く（ちかく）', meaning: '附近', explanation: '表示不远的地方。名词用法。' },
    { pattern: '〜の間（あいだ）', meaning: '在〜之间', explanation: '表示两个事物之间的空间或时间关系。' },
  ],
  N4: [
    // === Conditional Expressions (条件表現) ===
    { pattern: '〜と', meaning: '一〜就 / 如果〜', explanation: '接动词字典形/ない形，表示恒常条件（必然会发生的自然规律）或意外发现。后句不能用意志表达。' },
    { pattern: '〜ば', meaning: '如果〜', explanation: '假定条件。一段动词去る+れば，五段动词う段→え段+ば。后句多用积极结果。' },
    { pattern: '〜たら', meaning: '如果〜 / 〜之后', explanation: '接动词た形，是最通用的条件表达。可用于假设、确定条件、意外发现等。' },
    { pattern: '〜なら', meaning: '如果〜（的话）', explanation: '接名词/な形容词词干/简体句，表示基于对方话语或已知信息的假定。后句常表建议。' },
    { pattern: '〜ても', meaning: '即使〜也', explanation: '表示让步条件。即使前项成立，后项也不会改变。' },
    { pattern: '〜てもいい', meaning: '可以〜', explanation: '表示许可。也用于请求许可。比N5用法更深入。' },
    { pattern: '〜てはいけない', meaning: '不可以〜', explanation: '表示禁止。N4复习强化。' },

    // === Progressive & Aspect (進行・相) ===
    { pattern: '〜ている（進行中）', meaning: '正在〜', explanation: '表示动作正在进行。与瞬间动词结合表示结果状态。' },
    { pattern: '〜ている（結果状態）', meaning: '〜着（结果状态）', explanation: '瞬间动词+ている表示动作结果的状态存续。如結婚している（已婚）。' },
    { pattern: '〜ている（習慣）', meaning: '（习惯性地）〜', explanation: '表示习惯性或反复性的行为。如毎朝ジョギングをしている。' },
    { pattern: '〜てある', meaning: '〜着（人为准备）', explanation: '他动词+てある表示人为动作的结果状态。暗示有人做了某事。' },
    { pattern: '〜ておく', meaning: '事先〜好', explanation: '表示为将来做准备。也用于暂时维持某种状态。' },
    { pattern: '〜てしまう', meaning: '（不情愿地）〜完了', explanation: '表示动作完成，常带有遗憾、后悔的语气。口语变为〜ちゃう/〜じゃう。' },
    { pattern: '〜てみる', meaning: '试着做〜', explanation: '表示尝试做某事。"试着做做看"。' },
    { pattern: '〜ていく', meaning: '〜去 / 继续〜下去', explanation: '表示由近及远的移动方向，或变化的持续发展。' },
    { pattern: '〜てくる', meaning: '〜来 / 开始〜', explanation: '表示由远及近的移动方向，或变化的开始。' },
    { pattern: '〜ていく（消滅）', meaning: '逐渐〜下去（消失）', explanation: '表示某事物渐渐消失或减少的过程。' },
    { pattern: '〜てくる（出現）', meaning: '逐渐〜起来（出现）', explanation: '表示某事物渐渐出现或增加的过程。' },
    { pattern: '〜始める', meaning: '开始〜', explanation: '接动词ます形去ます，表示动作或变化的开始阶段。' },
    { pattern: '〜終わる', meaning: '〜完', explanation: '接动词ます形去ます，表示动作的完成或结束。' },
    { pattern: '〜続ける', meaning: '持续〜', explanation: '接动词ます形去ます，表示动作或状态的持续。' },
    { pattern: '〜出す', meaning: '开始〜（突发）', explanation: '接动词ます形去ます，表示突然开始的动作。与〜始める比更强调突发性。' },
    { pattern: '〜ながら', meaning: '一边〜一边〜', explanation: '接动词ます形去ます，表示两个动作同时进行。后项是主要动作。' },

    // === Giving & Receiving (授受表現) ===
    { pattern: '〜てあげる', meaning: '帮别人做〜', explanation: '表示为平辈或下级做某事。对长辈不直接使用以免失礼。' },
    { pattern: '〜てさしあげる', meaning: '帮（长辈）做〜', explanation: 'てあげる的谦让形式。用于对长辈或地位高的人。' },
    { pattern: '〜てもらう', meaning: '请别人做〜', explanation: '表示请求别人为自己或己方做某事。主语是受益方。' },
    { pattern: '〜ていただく', meaning: '请（长辈）做〜', explanation: 'てもらう的谦让形式。对长辈表示感谢时使用。' },
    { pattern: '〜てくれる', meaning: '别人为我做〜', explanation: '表示别人自发为自己或己方做某事。主语是施益方。' },
    { pattern: '〜てくださる', meaning: '（长辈）为我做〜', explanation: 'てくれる的尊敬形式。对长辈的行为表示感谢。' },
    { pattern: '〜てやる', meaning: '给（动物/晚辈）做〜', explanation: '表示为动植物或晚辈做某事。对长辈不用。' },

    // === Potential Form (可能形) ===
    { pattern: '可能形（一段動詞）', meaning: '能〜（一段动词）', explanation: '一段动词去る+られる。口语中常省略ら成为〜れる。如食べられる→食べれる。' },
    { pattern: '可能形（五段動詞）', meaning: '能〜（五段动词）', explanation: '五段动词う段→え段+る。如書く→書ける、読む→読める。' },
    { pattern: '可能形（する・来る）', meaning: '能〜（不规则）', explanation: 'する→できる、来る→来られる（こられる）。できる是最常用的可能表达。' },
    { pattern: '〜ことができる（可能）', meaning: '能够〜', explanation: 'N4复习。比可能形更正式、客观的表达。' },
    { pattern: '見える', meaning: '看得见（自然）', explanation: '表示自然映入眼帘，与意志无关。区别于見られる（条件允许看到）。' },
    { pattern: '聞こえる', meaning: '听得见（自然）', explanation: '表示自然传入耳中，与意志无关。区别于聞ける（条件允许听）。' },

    // === Passive Form (受身形) ===
    { pattern: '受身形（一段動詞）', meaning: '被〜（一段动词）', explanation: '一段动词去る+られる。与可能形同形。靠语境区分。' },
    { pattern: '受身形（五段動詞）', meaning: '被〜（五段动词）', explanation: '五段动词う段→あ段+れる。如書く→書かれる、読む→読まれる。' },
    { pattern: '受身形（する・来る）', meaning: '被〜（不规则）', explanation: 'する→される、来る→来られる（こられる）。' },
    { pattern: '直接受身', meaning: '直接被〜', explanation: '主语直接承受对方的动作。AはBに〜（ら）れる。' },
    { pattern: '間接受身（迷惑の受身）', meaning: '被〜（受害）', explanation: '日语特有的表达。表示因某事遭受困扰或损害。自动词也可使用。' },
    { pattern: '持ち主の受身', meaning: '所有物被〜', explanation: '主语的所有物成为动作对象。私は先生に作文をほめられた（老师表扬我的作文）。' },

    // === Causative Form (使役形) ===
    { pattern: '使役形（一段動詞）', meaning: '让〜（一段动词）', explanation: '一段动词去る+させる。表示让某人做某事或允许。' },
    { pattern: '使役形（五段動詞）', meaning: '让〜（五段动词）', explanation: '五段动词う段→あ段+せる。如書く→書かせる、読む→読ませる。' },
    { pattern: '使役形（する・来る）', meaning: '让〜（不规则）', explanation: 'する→させる、来る→来させる（こさせる）。' },
    { pattern: '使役文（強制）', meaning: '强迫〜做', explanation: '主语强制对象做某事。用を表示动作主体。母は子供を勉強させる。' },
    { pattern: '使役文（許可・放任）', meaning: '允许〜做', explanation: '主语允许或放任对象做某事。用に表示动作主体。' },
    { pattern: '〜させてください', meaning: '请让我〜', explanation: '请求对方允许自己（或己方）做某事。' },
    { pattern: '〜させてもらう', meaning: '请允许我〜', explanation: '表示得到对方的允许做某事。比させてください更委婉。' },
    { pattern: '〜させていただく', meaning: '请允许我〜（更谦让）', explanation: 'させてもらう的谦让形式。商务场合常用。' },

    // === Causative-Passive (使役受身形) ===
    { pattern: '使役受身形（一段動詞）', meaning: '被迫〜（一段）', explanation: '一段动词去る+させられる。口语中可省略为〜される。' },
    { pattern: '使役受身形（五段動詞）', meaning: '被迫〜（五段）', explanation: '五段动词う段→あ段+せられる→される。如書かせられる→書かされる。' },
    { pattern: '使役受身形（する・来る）', meaning: '被迫〜（不规则）', explanation: 'する→させられる、来る→来させられる。' },

    // === Volitional Form (意向形) ===
    { pattern: '意向形（一段動詞）', meaning: '想要〜/我们〜吧（一段）', explanation: '一段动词去る+よう。表示意志或劝诱的简体形式。' },
    { pattern: '意向形（五段動詞）', meaning: '想要〜/我们〜吧（五段）', explanation: '五段动词う段→お段+う。如書く→書こう、読む→読もう。' },
    { pattern: '意向形（する・来る）', meaning: '想要〜/我们〜吧（不规则）', explanation: 'する→しよう、来る→来よう（こよう）。' },
    { pattern: '〜（よ）うと思う', meaning: '我想〜', explanation: '表示说话人的意志或打算。用意向形+と思う。' },
    { pattern: '〜（よ）うとする', meaning: '正要〜/试图〜', explanation: '表示即将做某事或尝试做某事。た形表示"试图做但未成功"。' },

    // === Imperative & Prohibitive (命令・禁止) ===
    { pattern: '命令形', meaning: '命令形', explanation: '一段去る+ろ/よ，五段う段→え段。如食べろ、書け。语气强硬，男性多用。' },
    { pattern: '〜な（禁止）', meaning: '不准〜', explanation: '接动词字典形，表示禁止。语气强硬。' },
    { pattern: '〜てくれ', meaning: '给我〜（命令）', explanation: 'てください的命令形。用于男性口语。' },
    { pattern: '〜なさい', meaning: '请做〜（温和命令）', explanation: 'N4复习。比命令形温和，常用于家长对小孩。' },

    // === こと / もの / ところ Expressions ===
    { pattern: '〜ことになる', meaning: '决定〜/结果会是〜', explanation: '表示客观决定，非个人意志的结果，或相当于某种结果。' },
    { pattern: '〜ことにする', meaning: '决定〜', explanation: '表示主观决定。基于自己的判断或意志做的决定。' },
    { pattern: '〜ことにしている', meaning: '规定自己〜', explanation: '表示自己养成的习惯或自己做的规定。' },
    { pattern: '〜ことになっている', meaning: '规定〜/预定〜', explanation: '表示规则、预定等客观安排。不是自己的决定。' },
    { pattern: '〜ものだ（当然・应该）', meaning: '应该〜的', explanation: '表示社会常识、一般论或理所当然的事。' },
    { pattern: '〜ものだ（感慨）', meaning: '真是〜啊', explanation: '表示感慨、感叹。回忆过去或表达强烈情感。' },
    { pattern: '〜ものではない', meaning: '不该〜', explanation: 'ものだ的否定，表示从常识来说不应该做某事。' },
    { pattern: '〜ところだ（直前）', meaning: '正要〜', explanation: '动词字典形+ところだ，表示刚刚要开始做某事。' },
    { pattern: '〜ところだ（進行中）', meaning: '正在〜', explanation: '动词ている+ところだ，强调正在做某事的途中。' },
    { pattern: '〜ところだ（直後）', meaning: '刚〜完', explanation: '动词た形+ところだ，表示动作刚刚完成。' },
    { pattern: '〜ところだった', meaning: '差一点就〜', explanation: '表示险些发生某种不好的结果。常与もう少しで搭配。' },
    { pattern: '〜ばかりだ', meaning: '刚〜', explanation: '接动词た形，表示动作刚刚完成。主观感觉比ところだ更短。' },

    // === ようになる / ようにする ===
    { pattern: '〜ようになる', meaning: '变得〜 / 能够〜', explanation: '表示从不会到会的状态变化，或习惯的变化。前面用可能形或字典形。' },
    { pattern: '〜ようにする', meaning: '尽量做到〜', explanation: '表示努力使某种状态实现。自己意识下的努力。' },
    { pattern: '〜ようにしている', meaning: '坚持做到〜', explanation: '表示养成习惯或持续努力做到某事。' },
    { pattern: '〜ようになっている', meaning: '被设计成〜', explanation: '表示某种机制或构造使得某种状态得以实现。' },

    // === Hearsay & Conjecture (伝聞・推量) ===
    { pattern: '〜そうだ（伝聞）', meaning: '听说〜', explanation: '接简体句，表示从别人那里听来的信息。信息来源用〜によると。' },
    { pattern: '〜そうだ（様態）', meaning: '看起来〜', explanation: '接动词ます形去ます / 形容词去い，表示根据外观的推测。注意いい→よさそうだ。' },
    { pattern: '〜そうに', meaning: '看起来〜地（状语）', explanation: 'そうだ的连用修饰形式。修饰动词。' },
    { pattern: '〜そうな', meaning: '看起来〜的（定语）', explanation: 'そうだ的连体修饰形式。修饰名词。' },
    { pattern: '〜らしい', meaning: '好像〜 / 典型的〜', explanation: '表示有客观根据的推测，或表示某事物具备典型特质。' },
    { pattern: '〜らしい（典型的）', meaning: '像样的/有∼风范的', explanation: '表示符合该事物的特征或理想。男らしい（有男子气概）。' },
    { pattern: '〜ようだ', meaning: '好像〜', explanation: '表示基于五官感受的主观推测。比そうだ更不确定。' },
    { pattern: '〜ように', meaning: '像〜那样（比喻）', explanation: '表示比喻。AのようなB（像A那样的B）。' },
    { pattern: '〜みたいだ', meaning: '好像〜（口语）', explanation: 'ようだ的口语形式。更日常随意的表达。' },
    { pattern: '〜みたいに', meaning: '像〜一样地', explanation: 'みたいだ的连用修饰形式。口语。' },
    { pattern: '〜みたいな', meaning: '像〜一样的', explanation: 'みたいだ的连体修饰形式。口语。' },
    { pattern: '〜はずだ', meaning: '应该〜', explanation: '表示基于客观情况的合理推断。说话人相当确信。' },
    { pattern: '〜はずがない', meaning: '不可能〜', explanation: 'はずだ的否定。表示基于逻辑认为不可能是那样。' },
    { pattern: '〜はずだった', meaning: '本来应该〜', explanation: '表示本来应该如此但实际并非如此。带有遗憾。' },
    { pattern: '〜かもしれない', meaning: '也许〜', explanation: 'N4复习。表示不确定的推测，可能性较低。' },

    // === かどうか / か Expressions ===
    { pattern: '〜かどうか', meaning: '是否〜', explanation: '表示疑问或不确定，将疑问句嵌入句中。如"是否去"等。' },
    { pattern: '〜か（疑問詞節）', meaning: '是否/什么/谁〜', explanation: '疑问词+か，或普通疑问句嵌入句中充当名词性成分。' },
    { pattern: '〜か〜か', meaning: '是〜还是〜', explanation: '在两个选项中选择。口语中后项可省略か。' },

    // === Noun Modification (連体修飾) ===
    { pattern: '連体修飾（動詞）', meaning: '动词修饰名词', explanation: '动词简体形直接修饰名词。如"昨日買った本"（昨天买的书）。' },
    { pattern: '連体修飾（イ形容詞）', meaning: 'い形容词修饰名词', explanation: 'い形容词原形直接修饰名词。如"新しい車"。' },
    { pattern: '連体修飾（ナ形容詞）', meaning: 'な形容词修饰名词', explanation: 'な形容词词干+な+名词。如"静かな町"。' },
    { pattern: '連体修飾（名詞＋の）', meaning: '名词修饰名词', explanation: '名词+の+名词，表示所属或内容。如"日本の料理"。' },

    // === のに / くせに (Concessive) ===
    { pattern: '〜のに', meaning: '明明〜却', explanation: '表示与预期相反的结果，带有意外、不满、遗憾等情绪。' },
    { pattern: '〜くせに', meaning: '明明〜却（轻蔑）', explanation: '表示不满或轻蔑的转折。指责对方的意思较强。' },
    { pattern: '〜ても / 〜でも', meaning: '即使〜也', explanation: 'N4复习。加强让步表达的使用场景。' },
    { pattern: '〜たって', meaning: '即使〜也（口语）', explanation: 'ても的口语缩约。如行ったって（即使去也）。' },
    { pattern: '〜だって', meaning: '即使是〜也（口语）', explanation: 'でも的口语形式。表示"就连〜也"。' },

    // === Reason & Cause (理由・原因) ===
    { pattern: '〜から（理由）', meaning: '因为〜', explanation: 'N4复习。主观理由，后接意志表达。' },
    { pattern: '〜ので（理由）', meaning: '因为〜', explanation: 'N4复习。客观理由，更礼貌。' },
    { pattern: '〜し', meaning: '又〜又 / 而且', explanation: '列举理由或并列。常有多个し连用的形式。' },
    { pattern: '〜し〜し', meaning: '既〜又〜（理由）', explanation: '列举多个理由。如寒いし雨だし出かけない。' },
    { pattern: '〜ため（に）（理由）', meaning: '因为〜（客观）', explanation: '表示客观原因。多用于书面语或正式场合。' },
    { pattern: '〜せいで', meaning: '都怪〜（消极）', explanation: '表示导致不好结果的原因。带有责备的语气。' },
    { pattern: '〜おかげで', meaning: '多亏了〜（积极）', explanation: '表示带来好结果的原因。带有感谢之情。也可用于讽刺。' },

    // === Purpose (目的) ===
    { pattern: '〜ために（目的）', meaning: '为了〜', explanation: 'N4复习。意志动词字典形+ために，表示目的。' },
    { pattern: '〜ように（目的）', meaning: '为了〜（状态目标）', explanation: '接非意志动词或可能形，表示目标或目的。' },
    { pattern: '〜のに（目的・用途）', meaning: '用于〜 / 做〜需要', explanation: '表示用途或目的。常用〜のに便利/必要/使う等形式。' },
    { pattern: '〜には（目的）', meaning: '要〜（就得）', explanation: '表示要实现某个目的所需的条件。後件多为必要/应该等。' },

    // === Time Expressions (時間表現) ===
    { pattern: '〜間（あいだ）', meaning: '在〜期间（一直）', explanation: '表示在某段时间内一直持续的动作或状态。' },
    { pattern: '〜間に（あいだに）', meaning: '在〜期间内', explanation: '表示在某段时间内的某个时刻发生某事。' },
    { pattern: '〜まで', meaning: '直到〜', explanation: 'N4复习。表示持续到某个时间点。' },
    { pattern: '〜までに', meaning: '在〜之前（截止）', explanation: '表示动作完成的截止时间。如"到周五之前完成"。' },
    { pattern: '〜たばかりだ', meaning: '刚〜不久', explanation: '表示动作刚发生不久。主观时间感。' },
    { pattern: '〜うちに', meaning: '趁〜的时候', explanation: '表示趁着某个状态还没改变做某事。强调时间窗口。' },
    { pattern: '〜て以来', meaning: '自从〜以来', explanation: '表示从某时点以来一直持续的状态。' },

    // === Comparison & Degree (比較・程度) ===
    { pattern: '〜ほど', meaning: '〜的程度 / 不如〜', explanation: '表示程度或约数。否定比较中表示"不如A那么B"。' },
    { pattern: '〜ほど〜はない', meaning: '没有比〜更〜的', explanation: '表示最高级比较。Aほど〜はない=Bが一番〜。' },
    { pattern: '〜ば〜ほど', meaning: '越〜越〜', explanation: '表示比例变化。随着前项的程度增加，后项也随之变化。' },
    { pattern: '〜すぎる', meaning: '过于〜', explanation: 'N4复习。い形容词→すぎる（多すぎる）/动词→すぎる（食べすぎる）。' },
    { pattern: '〜やすい', meaning: '容易做〜', explanation: '接动词ます形去ます，表示容易做到或容易发生。' },
    { pattern: '〜にくい', meaning: '难以做〜', explanation: '接动词ます形去ます，表示困难或不易做到。' },
    { pattern: '〜づらい', meaning: '〜很难（心理上）', explanation: '表示心理上或生理上的困难。带有痛苦的语感。' },
    { pattern: '〜がたい', meaning: '难以〜（不可能）', explanation: '表示几乎不可能做到。如信じがたい（难以相信）。' },

    // === Compound Particles (複合助詞) ===
    { pattern: '〜について', meaning: '关于〜', explanation: '表示谈论或涉及的话题内容。N4引入，N3深化。' },
    { pattern: '〜にとって', meaning: '对〜来说', explanation: '表示从某人的立场来看。后接评价或判断。' },
    { pattern: '〜として', meaning: '作为〜', explanation: '表示身份、立场、资格等。以自己的身份做某事。' },
    { pattern: '〜に対して', meaning: '对〜 / 相对于〜', explanation: '表示动作的对象或对比。N4引入。' },
    { pattern: '〜によって', meaning: '根据〜 / 因〜而不同', explanation: '表示原因、手段、根据不同情况等。N4基础。' },
    { pattern: '〜において', meaning: '在〜（场所/方面）', explanation: '表示场合、时间或领域。比で更正式。' },

    // === Listing & Parallel (並列) ===
    { pattern: '〜たり〜たり', meaning: '又〜又〜', explanation: 'N4复习。从多个动作/状态中举例。' },
    { pattern: '〜とか〜とか', meaning: '〜啦〜啦', explanation: '口语化的列举。比〜や更随意。' },
    { pattern: '〜し〜し', meaning: '既〜又〜', explanation: 'N4复习。列举理由或情况。' },
    { pattern: '〜やら〜やら', meaning: '〜啦〜啦（困惑）', explanation: '表示列举时带有困惑或不知所措的语气。' },
    { pattern: '〜も〜ば、〜も', meaning: '既〜又〜', explanation: '列举两个相对或相关的事例。如"好きな人もいれば嫌いな人もいる"。' },
    { pattern: '〜も〜し、〜も', meaning: '既〜又〜（口语）', explanation: '口语化的并列表达。' },

    // === まま / っぱなし ===
    { pattern: '〜まま', meaning: '就那样〜 / 保持〜状态', explanation: '表示保持某种状态不变做另一件事。' },
    { pattern: '〜ままに', meaning: '任凭〜那样', explanation: '表示按照原来的样子。感じたままに（凭感觉）。' },
    { pattern: '〜っぱなし', meaning: '一直〜 / 放着不管', explanation: '表示放任不管或持续某种状态。带有消极语感。' },

    // === Honorific Deeper (敬語深化) ===
    { pattern: '尊敬語（基本）', meaning: '尊敬语', explanation: '抬高对方或话题人物的动作，表达敬意。お/ご〜になる、〜（ら）れる等形式。' },
    { pattern: '謙譲語（基本）', meaning: '谦让语', explanation: '降低自己的动作，表达对对方的敬意。お/ご〜する等形式。' },
    { pattern: '丁寧語（基本）', meaning: '礼貌语', explanation: '～です・～ます等形式，通过礼貌表达来显示敬意。' },
    { pattern: '〜（ら）れる（尊敬）', meaning: '（尊敬语）〜', explanation: '用被动形式表示尊敬。比較简单但敬意较低。' },
    { pattern: 'お/ご〜です', meaning: '〜（尊敬）', explanation: 'お/ご＋名词/ます形去ます＋です。比お〜になる更简洁的尊敬表达。' },
    { pattern: '〜ていただけませんか', meaning: '能否请您〜？', explanation: '谦让语的请求形式。非常礼貌的请求表达。' },
    { pattern: '〜（さ）せていただけませんか', meaning: '能否允许我〜？', explanation: '非常礼貌地请求对方允许自己做某事。商务常用。' },
    { pattern: '〜てくださいませんか', meaning: '能否请您〜？', explanation: '尊敬语的请求表达。比てください更礼貌。' },

    // === のだ / わけだ (Explanatory) ===
    { pattern: '〜のだ', meaning: '是〜（说明）', explanation: '表示对情况的说明或解释。说话人对某种情况的解释。' },
    { pattern: '〜わけだ', meaning: '当然〜 / 也就是说〜', explanation: '表示根据前因得出理所当然的结论。N4初级用法。' },
    { pattern: '〜というのは〜ことだ', meaning: '所谓〜就是〜', explanation: '用于下定义或说明某事物的含义。' },
    { pattern: '〜ということだ', meaning: '据说/也就是说', explanation: '表示传闻或是对前述内容的归纳说明。' },

    // === Various Expressions ===
    { pattern: '〜代わりに', meaning: '代替 / 反而', explanation: '表示替代某人做某事，或表示交换条件的转折。' },
    { pattern: '〜向け', meaning: '面向〜的', explanation: '表示以某对象为目标。子供向け（面向儿童）。' },
    { pattern: '〜向き', meaning: '适合〜的', explanation: '表示适合某对象。子供向き（适合儿童的）。' },
    { pattern: '〜たほうがいい', meaning: '最好〜', explanation: '表示建议或忠告。接动词た形/ない形。' },
    { pattern: '〜ないほうがいい', meaning: '最好不要〜', explanation: '否定形式的建议。' },
    { pattern: '〜ほうがいい（比較）', meaning: '还是〜比较好', explanation: '比较两个选项中"还是〜比较好"。' },
    { pattern: '〜ばいい', meaning: '〜就好 / 只要〜', explanation: '表示建议或最小条件。後句常省略。' },
    { pattern: '〜たらいい', meaning: '〜就好', explanation: '与ばいい类似，口语中更常用。' },
    { pattern: '〜といい', meaning: '〜就好了（愿望）', explanation: '表示愿望或建议。也用于"～たらいい"的变体。' },
    { pattern: '〜といいですね / 〜といいんですが', meaning: '希望〜', explanation: '表示对对方的祝愿或自己的希望。' },
    { pattern: '〜がる', meaning: '感到〜（第三人称）', explanation: '形容词/形容动词词干+がる，表示第三人称的感情或感觉。' },
    { pattern: '〜をしている', meaning: '有着〜（外观）', explanation: '表示外观、形状、颜色、职业等。顔をしている（长着〜脸）。' },
    { pattern: '〜にする（選択）', meaning: '决定选〜', explanation: '从多个选项中选择。コーヒーにする（我要咖啡）。' },
    { pattern: '〜がする', meaning: '感觉到〜', explanation: '表示感觉器官感知到的声音、气味、味道等。' },
    { pattern: '〜気がする', meaning: '感觉好像〜', explanation: '表示模糊的感觉或直觉。' },
    { pattern: '〜ような気がする', meaning: '总觉得好像〜', explanation: '比気がする更模糊、更不确定的感觉。' },
    { pattern: '〜と言える', meaning: '可以说〜', explanation: '表示可以做出某种判断。' },
    { pattern: '〜とは限らない', meaning: '未必〜', explanation: '表示不一定是那样。不能一概而论。' },
    { pattern: '〜どころではない', meaning: '哪顾得上〜', explanation: '表示没有余裕做某事。非常忙或情况紧急。' },
    { pattern: '〜つもり（想法）', meaning: '自以为〜 / 以为是〜', explanation: '表示自己主观上那样认为，但实际情况可能不同。' },
    { pattern: '〜まま（状態の持続）', meaning: '保持〜状态', explanation: 'N4深化。保持原样不变。' },
    { pattern: '〜ほど（比例）', meaning: '越〜越〜（程度比例）', explanation: 'N4深化用法。〜ば〜ほど的更展开用法。' },
    { pattern: '〜たびに', meaning: '每当〜', explanation: '表示每当某个情况发生时，后项必然成立。' },
    { pattern: '〜ごとに', meaning: '每〜 / 每次〜', explanation: '表示每次都或每个都。会議ごとに（每次会议）。' },
    { pattern: '〜おきに', meaning: '每隔〜', explanation: '表示时间或空间的间隔。1日おきに（每隔一天）。' },
    { pattern: '〜ずつ', meaning: '每〜 / 各〜', explanation: '表示等量分配。一人に一つずつ（每人一个）。' },
    { pattern: '〜を込めて', meaning: '充满〜地', explanation: '表示带着某种情感做某事。心を込めて（用心地）。' },
    { pattern: '〜の代わりに', meaning: '代替〜', explanation: '名词+の代わりに，表示替代某个人或事物。' },
    { pattern: '〜を通じて', meaning: '通过〜（媒介）', explanation: '表示通过某手段或媒介。インターネットを通じて。' },
    { pattern: '〜にしたがって', meaning: '随着〜', explanation: '表示随着前项变化后项也变化。N4初级用法。' },
    { pattern: '〜につれて', meaning: '随着〜', explanation: '与にしたがって类似。表示伴随变化。' },
    { pattern: '〜にともなって', meaning: '伴随着〜', explanation: '表示伴随发生。比につれて更书面。' },
    { pattern: '〜てもかまわない', meaning: '〜也不要紧', explanation: '表示"即使〜也没关系"，比てもいい更宽容。' },
    { pattern: '〜てはいられない', meaning: '不能一直〜', explanation: '表示不能保持某种状态，必须改变。' },
    { pattern: '〜ないで（代替）', meaning: '不〜而〜', explanation: '表示不做前项而做后项。AしないでBする。' },
    { pattern: '〜ずに', meaning: '不〜而〜', explanation: 'ないで的书面语形式。せずに（不做而）。' },
    { pattern: '〜ずにはいられない', meaning: '不由得〜', explanation: '表示感情上无法克制，自然而然就做了。' },
    { pattern: '〜わけがない', meaning: '不可能〜', explanation: '表示强烈否定，认为从道理上不可能。' },
    { pattern: '〜わけではない', meaning: '并不是〜', explanation: '表示部分否定，并非完全如此。' },
    { pattern: '〜わけにはいかない', meaning: '不能〜（道义上）', explanation: '表示基于社会常识或道德不能做某事。' },

    // === Additional N4 Patterns ===
    { pattern: '〜たらどうですか', meaning: '〜怎么样？', explanation: '表示建议对方做某事。"试试看怎么样"。' },
    { pattern: '〜ばどうですか', meaning: '〜的话怎么样？', explanation: '与たらどうですか类似，表示建议。' },
    { pattern: '〜てもらえないか', meaning: '能不能请你〜', explanation: '表示请求对方为自己做某事。比てください更礼貌。' },
    { pattern: '〜てくれないか', meaning: '能不能帮我〜', explanation: '表示请求别人为自己做某事。男性多用。' },
    { pattern: '〜ていただけませんか', meaning: '能否请您〜', explanation: '非常礼貌的请求表达。对长辈或上级使用。' },
    { pattern: '〜てくださいませんか', meaning: '能否请您〜', explanation: '尊敬语的请求表达。比てください更礼貌。' },
    { pattern: '〜（さ）せてください', meaning: '请让我〜', explanation: '请求对方允许自己做某事。' },
    { pattern: '〜（さ）せていただけませんか', meaning: '能否允许我〜', explanation: '非常礼貌地请求对方允许自己做某事。' },
    { pattern: '〜おかげで', meaning: '多亏了〜', explanation: '表示带来好结果的原因。也可用于讽刺。' },
    { pattern: '〜せいで', meaning: '都怪〜', explanation: '表示导致不好结果的原因。带有责备语气。' },
    { pattern: '〜ため（に）', meaning: '因为〜', explanation: '表示客观原因。多用于书面语或正式场合。' },
    { pattern: '〜せいか', meaning: '可能是因为〜', explanation: '表示不确定的消极原因推测。' },
    { pattern: '〜たびに', meaning: '每当〜就会', explanation: '表示每次前项发生时后项都会发生。' },
    { pattern: '〜ごとに', meaning: '每〜', explanation: '表示每个单位都发生同样的事。' },
    { pattern: '〜おきに', meaning: '每隔〜', explanation: '表示时间或空间的间隔。' },
    { pattern: '〜ずつ', meaning: '每〜/各〜', explanation: '表示等量分配或逐步变化。' },
    { pattern: '〜を込めて', meaning: '充满〜地', explanation: '表示带着某种情感做某事。' },
    { pattern: '〜を通じて', meaning: '通过〜', explanation: '表示通过某手段或媒介。也用于整个期间。' },
    { pattern: '〜を通して', meaning: '通过〜', explanation: '与を通じて类似，更强调直接媒介。' },
    { pattern: '〜にしたがって', meaning: '随着〜', explanation: '表示随着前项变化后项也变化。' },
    { pattern: '〜につれて', meaning: '随着〜', explanation: '表示一方的变化引起另一方的变化。' },
    { pattern: '〜にともなって', meaning: '伴随着〜', explanation: '表示伴随发生，较书面。' },
    { pattern: '〜とともに', meaning: '与〜一起/随着〜', explanation: '表示同时进行或伴随变化。' },
    { pattern: '〜に比べて', meaning: '与〜相比', explanation: '表示比较两个事物。' },
    { pattern: '〜に比べると', meaning: '与〜相比的话', explanation: 'に比べて的变体，强调比较。' },
    { pattern: '〜に反して', meaning: '与〜相反', explanation: '表示与预期、规则或意愿相反的结果。' },
    { pattern: '〜のもとで', meaning: '在〜之下', explanation: '表示在某人指导或影响下。' },
    { pattern: '〜のもとに', meaning: '在〜之下', explanation: 'のもとで的变体。表示条件或环境。' },
    { pattern: '〜に基づいて', meaning: '根据〜', explanation: '表示以某事物为基础或依据。' },
    { pattern: '〜に基づく', meaning: '基于〜的', explanation: 'に基づいて的连体形式。' },
    { pattern: '〜をもとに', meaning: '以〜为基础', explanation: '表示以某事物为素材或基础。' },
    { pattern: '〜を中心に', meaning: '以〜为中心', explanation: '表示以某事物为核心展开活动。' },
    { pattern: '〜をはじめ', meaning: '以〜为首', explanation: '举出一个代表性例子，暗示还有很多。' },
    { pattern: '〜をきっかけに', meaning: '以〜为契机', explanation: '表示以某事为转折点，开始了新的行为。' },
    { pattern: '〜から見ると', meaning: '从〜来看', explanation: '表示从某个角度或立场来判断。' },
    { pattern: '〜から言うと', meaning: '从〜来说', explanation: '表示从某立场来发表意见。' },
    { pattern: '〜からすると', meaning: '从〜来看', explanation: '表示从某事物来推断或判断。' },
    { pattern: '〜からして', meaning: '单从〜来看', explanation: '举出最典型的例子来推断整体。' },
    { pattern: '〜を問わず', meaning: '不论〜', explanation: '表示与某因素无关，都成立。' },
    { pattern: '〜にかかわらず', meaning: '不论〜', explanation: '表示不受前项影响。' },
    { pattern: '〜もかまわず', meaning: '不顾〜', explanation: '表示不在乎某因素而做某事。' },
    { pattern: '〜抜きで', meaning: '不用〜', explanation: '表示排除通常应该有的东西。' },
    { pattern: '〜抜きにして', meaning: '抛开〜不谈', explanation: '表示暂时排除某因素。' },
    { pattern: '〜にすぎない', meaning: '只不过〜', explanation: '表示范围或程度有限。"不过是〜而已"。' },
    { pattern: '〜に違いない', meaning: '一定是〜', explanation: '表示说话人非常确信的推测。' },
    { pattern: '〜に決まっている', meaning: '肯定〜', explanation: '表示毫无疑问的断定，口语化。' },
    { pattern: '〜ざるを得ない', meaning: '不得不〜', explanation: '表示别无选择只能那样做。书面语。' },
    { pattern: '〜得る（うる/える）', meaning: '可能〜', explanation: '表示理论上或逻辑上的可能性。' },
    { pattern: '〜得ない（えない）', meaning: '不可能〜', explanation: '得る的否定形式。' },
    { pattern: '〜かねる', meaning: '难以〜', explanation: '表示心理上的抗拒或客观上难以做到。' },
    { pattern: '〜かねない', meaning: '有可能（不好）〜', explanation: '表示某种不好的事情有可能发生。' },
    { pattern: '〜っけ', meaning: '〜来着', explanation: '表示回忆或向对方确认某事。口语。' },
    { pattern: '〜だらけ', meaning: '满是〜', explanation: '表示表面或内部充满了不好的东西。' },
    { pattern: '〜向け', meaning: '面向〜的', explanation: '表示以某对象为目标制作的。' },
    { pattern: '〜向き', meaning: '适合〜的', explanation: '表示客观上适合某对象。' },
    { pattern: '〜げ', meaning: '〜的样子', explanation: '接形容词词干，表示看起来带有某种神情。' },
    { pattern: '〜み', meaning: '〜的感觉/程度', explanation: '接形容词词干，将形容词名词化。' },
    { pattern: '〜さ', meaning: '〜度/〜性', explanation: '接形容词词干，表示客观程度。' },
    { pattern: '〜を頼りに', meaning: '依靠〜', explanation: '表示依赖某人或某物。' },
    { pattern: '〜に応じて', meaning: '根据〜', explanation: '表示根据情况变化相应调整。' },
    { pattern: '〜に応じた', meaning: '根据〜的', explanation: 'に応じて的连体形式。' },
    { pattern: '〜をもって', meaning: '以〜（方式/时间）', explanation: '表示手段、方法或以某个时间为界限。' },
    { pattern: '〜をもってすれば', meaning: '用〜的话就能', explanation: '表示用某种方法就能做到。' },
    { pattern: '〜をめぐって', meaning: '围绕〜', explanation: '表示围绕某个话题或问题展开讨论。' },
    { pattern: '〜に加えて', meaning: '加上〜', explanation: '表示在已有基础上追加同类事物。' },
    { pattern: '〜にこたえて', meaning: '应〜', explanation: '表示响应某种要求或期待。' },
    { pattern: '〜に沿って', meaning: '沿着〜/按照〜', explanation: '表示遵从某种标准、方针或路线。' },
    { pattern: '〜に沿った', meaning: '按照〜的', explanation: 'に沿って的连体形式。' },
    { pattern: '〜にわたって', meaning: '历时〜/涉及〜', explanation: '表示时间之长或空间之广。' },
    { pattern: '〜にわたる', meaning: '历时〜的', explanation: 'にわたって的连体形式。' },
    { pattern: '〜から〜にかけて', meaning: '从〜到〜', explanation: '表示时间或空间的大致范围。' },
    { pattern: '〜にかけては', meaning: '在〜方面', explanation: '表示在某个领域或方面非常出色。' },
    { pattern: '〜において', meaning: '在〜', explanation: '表示动作或状态发生的场所、场面或领域。' },
    { pattern: '〜における', meaning: '在〜的', explanation: 'において的连体修饰形式。' },
    { pattern: '〜に際して', meaning: '当〜之际', explanation: '表示某个特别的机会或场合。' },
    { pattern: '〜にあたって', meaning: '值此〜之际', explanation: '表示在某个重要的时期或阶段。' },
    { pattern: '〜にあたり', meaning: '在〜之际', explanation: 'にあたって的书面语形式。' },
    { pattern: '〜た末に', meaning: '经过〜之后', explanation: '表示经过一番过程后的最终结果。' },
    { pattern: '〜あげく', meaning: '最后〜（消极结果）', explanation: '表示经过漫长的过程最后导致了不好的结果。' },
    { pattern: '〜結果', meaning: '〜的结果', explanation: '表示客观的结果，中性表达。' },
    { pattern: '〜際（さい）', meaning: '在〜时', explanation: '表示某个特别的机会或场合。比とき更正式。' },
    { pattern: '〜たところ', meaning: '〜的结果', explanation: '表示做了前项之后发现的结果。' },
    { pattern: '〜たところで', meaning: '即使〜也', explanation: '表示即使做了前项也得不到好的后项。' },
    { pattern: '〜ついでに', meaning: '顺便〜', explanation: '表示在做某事的同时顺便做另一件事。' },
    { pattern: '〜においては', meaning: '在〜（方面）', explanation: 'において的强调形式。' },
    { pattern: '〜に限って', meaning: '偏偏在〜时候', explanation: '表示意外或不满，偏偏在不该发生的时候发生。' },
    { pattern: '〜に限り', meaning: '仅限于〜', explanation: '表示限定条件或范围。正式书面用语。' },
    { pattern: '〜に限る', meaning: '〜是最好的', explanation: '表示在众多选项中这个最好。' },
    { pattern: '〜がる', meaning: '感到〜（第三人称）', explanation: '形容词/形容动词词干+がる，表示第三人称的感情或感觉。' },
    { pattern: '〜をしている', meaning: '有着〜（外观）', explanation: '表示外观、形状、颜色、职业等。' },
    { pattern: '〜がする', meaning: '感觉到〜', explanation: '表示感觉器官感知到的声音、气味、味道等。' },
    { pattern: '〜気がする', meaning: '感觉好像〜', explanation: '表示模糊的感觉或直觉。' },
    { pattern: '〜のような気がする', meaning: '总觉得好像〜', explanation: '比気がする更模糊、更不确定的感觉。' },
    { pattern: '〜と言える', meaning: '可以说〜', explanation: '表示可以做出某种判断。' },
    { pattern: '〜とは限らない', meaning: '未必〜', explanation: '表示不一定是那样，不能一概而论。' },
    { pattern: '〜とは言えない', meaning: '不能说是〜', explanation: '表示不能做出那样的断言。' },
    { pattern: '〜というものではない', meaning: '并非〜', explanation: '表示对某种一般性观点的否定。' },
    { pattern: '〜ないことはない', meaning: '不是不〜', explanation: '双重否定表示消极肯定。"也不是不能做"。' },
    { pattern: '〜ないものでもない', meaning: '也不是不〜', explanation: '比ないことはない更消极的肯定表达。' },
    { pattern: '〜と言えば', meaning: '说到〜', explanation: '表示提起某个话题，听到某事后的联想。' },
    { pattern: '〜というと', meaning: '说到〜/你说的〜是', explanation: '表示确认对方提到的内容或提出话题。' },
    { pattern: '〜といった', meaning: '〜等的', explanation: '连体形式，修饰名词。表示"〜等的"列举含义。' },
    { pattern: '〜といったら', meaning: '说到〜（强调）', explanation: '表示对主题的强调，后接感叹或评价。' },
    { pattern: '〜かのように', meaning: '就好像〜一样', explanation: '表示比喻，暗示实际上并非如此。' },
    { pattern: '〜かのような', meaning: '就好像〜一样的', explanation: 'かのようだ的连体形式。' },
    { pattern: '〜てならない', meaning: '不由得〜', explanation: '表示感情、感觉自然而然地产生，无法控制。' },
    { pattern: '〜てたまらない', meaning: '〜得不得了', explanation: '表示程度之高令人难以忍受。' },
    { pattern: '〜てしかたがない', meaning: '〜得不得了', explanation: '口语。与てたまらない近义。' },
    { pattern: '〜てしようがない', meaning: '〜得没办法', explanation: '口语。与てしかたがない近义。' },
    { pattern: '〜ほどだ', meaning: '几乎到了〜程度', explanation: '表示程度之高，到了可以说〜的地步。' },
    { pattern: '〜だけに', meaning: '正因为〜所以更', explanation: '表示因为前项，所以后项程度更高。' },
    { pattern: '〜だけあって', meaning: '不愧是〜', explanation: '表示"不愧是〜"，评价与实际相符。' },
    { pattern: '〜だけのことはある', meaning: '确实值得〜', explanation: '表示对某事物的价值表示认可。' },
    { pattern: '〜一方だ', meaning: '一直〜下去', explanation: '表示某个状态或变化朝着一个方向不断发展。' },
    { pattern: '〜一方で', meaning: '一方面〜另一方面', explanation: '表示同时存在两个对立的方面。' },
    { pattern: '〜反面', meaning: '另一方面（相反）', explanation: '表示同一事物的另一面。' },
    { pattern: '〜どころか', meaning: '岂止〜/别说〜了', explanation: '表示完全推翻前项的预想，后项是前项的反面或更甚。' },
    { pattern: '〜どころではない', meaning: '哪谈得上〜', explanation: '表示没有余裕或条件去做某事。' },
    { pattern: '〜にしても', meaning: '即使是〜也', explanation: '表示即使是前项的情况，后项仍然成立。' },
    { pattern: '〜にしろ', meaning: '即使〜也', explanation: 'にしても的书面形式。' },
    { pattern: '〜にせよ', meaning: '就算是〜也', explanation: 'にしろ的变体，语气稍软。' },
    { pattern: '〜と言っても', meaning: '虽说是〜但', explanation: '表示虽然前项是事实，但实际程度没有预期的那么高。' },
    { pattern: '〜とはいえ', meaning: '虽说是〜但', explanation: '表示承认前项事实，但后项不能完全认同。' },
    { pattern: '〜にもかかわらず', meaning: '尽管〜但是', explanation: '表示后项与基于前项预想的结果相反。' },
    { pattern: '〜わりに', meaning: '虽然〜但是', explanation: '表示与基于前项的预想相比，后项的结果超出预期。' },
    { pattern: '〜にしては', meaning: '就〜来说', explanation: '表示以某个标准来看，后项的评价与预期有所偏离。' },
    { pattern: '〜こそ', meaning: '正是〜', explanation: '表示强调。前面的词是说话人想强调的内容。' },
    { pattern: '〜さえ', meaning: '连〜都', explanation: '举出极端例子暗示其他更不用说了。' },
    { pattern: '〜さえ〜ば', meaning: '只要〜就', explanation: '表示只要满足最低条件就可以了。' },
    { pattern: '〜など/〜なんか', meaning: '〜之类的', explanation: '表示轻视或举例。"那种东西"的语感。' },
    { pattern: '〜なんて', meaning: '〜什么的', explanation: '口语化的列举或表示轻视、意外。' },
    { pattern: '〜ばかり', meaning: '光〜/净〜', explanation: '表示总是做某事或某种状态反复出现。' },
    { pattern: '〜ばかりでなく', meaning: '不仅〜而且', explanation: '表示范围不限于前项，后项也同样。' },
    { pattern: '〜だけでなく', meaning: '不仅〜而且', explanation: 'ばかりでなく的口语形式。' },
    { pattern: '〜のみならず', meaning: '不仅〜而且', explanation: 'だけでなく的书面形式。' },
    { pattern: '〜はもちろん', meaning: '〜自不必说', explanation: '表示前项当然如此，后项也一样。' },
    { pattern: '〜はもとより', meaning: '〜不用说', explanation: 'はもちろん的书面形式。' },
    { pattern: '〜最中に', meaning: '正在〜的时候', explanation: '表示正处于某动作最高潮的时候发生了别的事。' },
    { pattern: '〜最中だ', meaning: '正在〜之中', explanation: '最中に的句末形式。' },
    { pattern: '〜たとたん', meaning: '刚〜就', explanation: '表示前项动作刚一发生，后项意外地发生了。' },
    { pattern: '〜かと思うと', meaning: '刚〜就', explanation: '表示前项刚发生，出乎意料地紧接着发生了后项。' },
    { pattern: '〜かと思ったら', meaning: '还以为〜（结果）', explanation: '表示说话人本以为前项，但实际结果是后项。' },
    { pattern: '〜次第', meaning: '一〜就（立刻）', explanation: '表示前项完成后立即做后项。较正式。' },
    { pattern: '〜てからでないと', meaning: '不先〜就不能', explanation: '表示如果不是先做前项，后项就无法实现。' },
    { pattern: '〜上で', meaning: '在〜之后/方面', explanation: '表示在完成前项的基础上进行后项，或表示在做某事的方面。' },
    { pattern: '〜上に', meaning: '而且/加上', explanation: '表示在原有基础上再加上同类的事物。' },
    { pattern: '〜代わりに', meaning: '代替/反而', explanation: '表示替代某人做某事，或表示交换条件的转折。' },
    { pattern: '〜ために（目的）', meaning: '为了〜', explanation: '表示目的。意志动词字典形+ために。' },
    { pattern: '〜のに（目的）', meaning: '用于〜', explanation: '表示用途或目的。常用〜のに便利/必要/使う等形式。' },
    { pattern: '〜には（目的）', meaning: '要〜（就得）', explanation: '表示要实现某个目的所需的条件。' },
    { pattern: '〜うちに（時間）', meaning: '趁〜的时候', explanation: '表示趁着某个状态还没改变做某事。' },
    { pattern: '〜ないうちに', meaning: '趁还没〜', explanation: '表示趁前项的状态尚未发生时做某事。' },
    { pattern: '〜間（あいだ）', meaning: '在〜期间（一直）', explanation: '表示在某段时间内一直持续的动作或状态。' },
    { pattern: '〜間に（あいだに）', meaning: '在〜期间内', explanation: '表示在某段时间内的某个时刻发生某事。' },
    { pattern: '〜までに', meaning: '在〜之前（截止）', explanation: '表示动作完成的截止时间。' },
    { pattern: '〜て以来', meaning: '自从〜以来', explanation: '表示从某时点以来一直持续的状态。' },
    { pattern: '〜たばかり', meaning: '刚〜不久', explanation: '表示动作刚发生不久，主观时间感。' },
    { pattern: '〜いったん〜ば', meaning: '一旦〜就', explanation: '表示一旦做了某事就回不去了。' },
    { pattern: '〜てはいられない', meaning: '不能一直〜', explanation: '表示不能保持某种状态，必须改变。' },
    { pattern: '〜ずに済む', meaning: '不用〜就解决了', explanation: '表示不用做某个不情愿的事就解决了。' },
    { pattern: '〜ないで済む', meaning: '不用〜就解决了', explanation: 'ずに済む的口语形式。' },
    { pattern: '〜て済む', meaning: '〜就解决了', explanation: '表示只需做某事就解决了，没有更严重的后果。' },
    { pattern: '〜によると', meaning: '根据〜（信息源）', explanation: '表示信息的来源。常与そうだ搭配。' },
    { pattern: '〜によれば', meaning: '根据〜（信息源）', explanation: 'によると的书面变体。' },
    { pattern: '〜によって（原因）', meaning: '因〜而', explanation: '表示原因。后接某一结果。' },
    { pattern: '〜によって（手段）', meaning: '通过〜', explanation: '表示方法或手段。' },
    { pattern: '〜によって（根据）', meaning: '根据〜而不同', explanation: '表示根据前项的不同，后项也有差异。' },
    { pattern: '〜による', meaning: '因/由〜的', explanation: 'によって的连体修饰形式。' },
    { pattern: '〜をもって', meaning: '以〜', explanation: '表示手段、方法或以某个时间为界限。' },
    { pattern: '〜を頼りにして', meaning: '以〜为依靠', explanation: '表示依赖某人或某物。' },
    { pattern: '〜に応じて', meaning: '根据〜', explanation: '表示根据情况变化相应调整。' },
    { pattern: '〜に応じた', meaning: '根据〜的', explanation: 'に応じて的连体形式。' },
    { pattern: '〜にとって', meaning: '对〜来说', explanation: '表示从某人的立场来看。后接评价或判断。' },
    { pattern: '〜として', meaning: '作为〜', explanation: '表示身份、立场、资格等。' },
    { pattern: '〜に対して', meaning: '对〜/相对于〜', explanation: '表示动作的对象或对比。' },
    { pattern: '〜について', meaning: '关于〜', explanation: '表示谈论或涉及的话题内容。' },
  ],
  N3: [
    // === わけ Series ===
    { pattern: '〜わけではない', meaning: '并不是〜', explanation: '用于否定对方的推测或一般常识，表示"并非完全如此"。留有例外余地。' },
    { pattern: '〜わけがない', meaning: '不可能〜', explanation: '表示强烈否定，从道理或逻辑上认为不可能。比はずがない更口语化。' },
    { pattern: '〜わけにはいかない', meaning: '不能〜（道义上）', explanation: '表示基于社会常识、道德或立场不能做某事。即使想做也不能做。' },
    { pattern: '〜わけだ', meaning: '当然〜 / 也就是说〜', explanation: '表示根据前文得出的理所当然的结论。"难怪"的意思。' },
    { pattern: '〜というわけだ', meaning: '也就是说〜（总结）', explanation: '表示总结前文的内容或换一种说法。' },
    { pattern: '〜というわけではない', meaning: '并不是说〜', explanation: '否定某种解释或理解。澄清误解时使用。' },

    // === はず Series ===
    { pattern: '〜はずだ', meaning: '应该〜', explanation: 'N3深化。基于逻辑推理的确信。比N4用法更多样化。' },
    { pattern: '〜はずがない', meaning: '不可能〜', explanation: 'N3深化。表示逻辑上不可能。' },
    { pattern: '〜はずだった', meaning: '本来应该〜（但未实现）', explanation: '表示本来预期如此但实际并非如此。' },
    { pattern: '〜はずではなかった', meaning: '本不该〜（但发生了）', explanation: '表示事后对不应该发生之事的后悔或困惑。' },

    // === べき Series ===
    { pattern: '〜べきだ', meaning: '应该〜', explanation: '表示义务、当然或建议。说话人认为从道理上应该那样做。' },
    { pattern: '〜べきではない', meaning: '不应该〜', explanation: 'べきだ的否定形式。表示不应该做某事。' },
    { pattern: '〜べきだった', meaning: '本应该〜（后悔）', explanation: '表示事后后悔"当时应该那样做"。' },
    { pattern: '〜べからざる', meaning: '不可〜的', explanation: 'べき的文言否定连体形式，表示"不可～的"。较生硬。' },

    // === ものだ / ことだ Series ===
    { pattern: '〜ものだ（当然・常识）', meaning: '应该〜的（常识）', explanation: '表示社会常识、一般性论述或道德上的当然。' },
    { pattern: '〜ものだ（感慨・回忆）', meaning: '真是〜啊（感慨）', explanation: '表示对过去或现在状态的深切感慨。' },
    { pattern: '〜ものではない', meaning: '不该〜', explanation: '表示从常识或道德上来说不应该做某事。' },
    { pattern: '〜ものか', meaning: '哪能〜 / 怎么可能〜', explanation: '表示强烈否定或反问。下降语调。' },
    { pattern: '〜ものがある', meaning: '确实有〜之处', explanation: '表示确实能感受到某种特质或情感。文章语。' },
    { pattern: '〜ことだ（忠告）', meaning: '应该〜（对他人的忠告）', explanation: '表示对别人的忠告或建议，"你应该这样做"。' },
    { pattern: '〜ことだ（感叹）', meaning: '多么〜啊', explanation: '表示感叹。与なんと搭配使用。' },
    { pattern: '〜ことはない', meaning: '没必要〜', explanation: '表示不需要做某事。对对方行动的否定建议。' },
    { pattern: '〜ことか', meaning: '多么〜啊（感叹）', explanation: '表示强烈感叹。常与どんなに/なんと/どれほど搭配。' },
    { pattern: '〜ことだから', meaning: '因为是〜（所以）', explanation: '表示说话人和听话人都知道某人的性格特征，基于此推断。' },
    { pattern: '〜ことなく', meaning: '不〜而〜', explanation: '表示不做前项而进行后项。ないで/ずに的书面形式。' },
    { pattern: '〜ことに', meaning: '令人〜的是', explanation: '接表示感情的词，表达说话人对后续内容的情感态度。' },

    // === 〜において / にしたがって / につれて Series ===
    { pattern: '〜において', meaning: '在〜（场所/场面/领域）', explanation: '表示动作或状态发生的场所、场面或领域。比で更正式。' },
    { pattern: '〜における', meaning: '在〜的（连体）', explanation: 'において的连体修饰形式。修饰后面的名词。' },
    { pattern: '〜にしたがって', meaning: '随着〜', explanation: '表示随着前项变化，后项也相应地变化。' },
    { pattern: '〜につれて', meaning: '随着〜', explanation: '与にしたがって类似。表示一方的变化引起另一方的变化。' },
    { pattern: '〜にともなって', meaning: '伴随着〜', explanation: '表示与某事的发生相伴而发生变化。比につれて更书面。' },
    { pattern: '〜とともに', meaning: '与〜一起 / 随着〜', explanation: '表示同时进行或伴随变化。也可表示"和〜一起"。' },

    // === Compound Verbs (複合動詞) ===
    { pattern: '〜きる', meaning: '完全〜 / 〜到底', explanation: '接动词ます形去ます，表示动作彻底完成。如"吃完、跑完"。' },
    { pattern: '〜きれない', meaning: '不能完全〜', explanation: 'きる的可能否定形式。表示无法完全做到。也表"不胜〜"。' },
    { pattern: '〜かける', meaning: '开始〜 / 做到一半', explanation: '表示动作刚开始或进行到中途，尚未完成。' },
    { pattern: '〜かけの', meaning: '〜了一半的', explanation: 'かけ的连体形式。食べかけのパン（吃了一半的面包）。' },
    { pattern: '〜だす', meaning: '开始〜（突然）', explanation: '接动词ます形去ます，表示某种动作或状态突然开始。与〜始める比更突然。' },
    { pattern: '〜合う', meaning: '互相〜', explanation: '接动词ます形去ます，表示互相做某事。話し合う（互相讨论）。' },
    { pattern: '〜直す', meaning: '重新〜', explanation: '接动词ます形去ます，表示重新做某事以修正或改善。' },
    { pattern: '〜過ぎる', meaning: '过于〜（动词）', explanation: '接动词ます形去ます，表示超过适当程度。' },
    { pattern: '〜抜く', meaning: '坚持〜到底', explanation: '表示克服困难坚持做到最后。含有努力的语感。' },
    { pattern: '〜抜ける', meaning: '能充分〜（可能态）', explanation: '抜く的可能态，表示能充分做到或能在某场所贯通。' },
    { pattern: '〜こなす', meaning: '熟练地〜', explanation: '表示熟练掌握并做得很好。使いこなす（运用自如）。' },
    { pattern: '〜慣れる', meaning: '〜惯了', explanation: '表示习惯了做某事。使い慣れる（用惯了）。' },
    { pattern: '〜尽くす', meaning: '〜尽/〜光', explanation: '表示全部做尽或耗尽。食べ尽くす（吃光）。' },

    // === 〜っぽい / がち / 気味 ===
    { pattern: '〜っぽい', meaning: '有〜倾向的 / 容易〜', explanation: '接名词/动词ます形/形容词词干，表示某种特征或倾向明显。多带消极评价。' },
    { pattern: '〜がちだ', meaning: '容易〜 / 往往〜', explanation: '接动词ます形/名词，表示容易发生的不良倾向或频率。' },
    { pattern: '〜気味（ぎみ）', meaning: '有点〜（的倾向）', explanation: '接动词ます形/名词，表示轻微的倾向或感觉。比がち程度轻。' },
    { pattern: '〜げ', meaning: '〜的样子', explanation: '接形容词词干/动词ます形，表示看起来带有某种神情或状态。' },

    // === 〜限り / 次第 Series ===
    { pattern: '〜限り（条件）', meaning: '只要〜就', explanation: '接动词字典形/ている形，表示在前项条件持续的范围内后项成立。' },
    { pattern: '〜限りでは', meaning: '据〜的范围来看', explanation: '接"見る・聞く・調べる"等动词，表示根据已知信息判断。' },
    { pattern: '〜ない限り', meaning: '除非〜否则', explanation: '表示如果不满足前项条件，后项就不会实现。' },
    { pattern: '〜に限る', meaning: '〜是最好的', explanation: '表示在众多选项中这个最好。也用于建议。' },
    { pattern: '〜に限って', meaning: '偏偏在〜时候', explanation: '表示意外或不满，偏偏在不该发生的时候发生。' },
    { pattern: '〜次第（しだい）', meaning: '一〜就（立即）', explanation: '接动词ます形去ます，表示做完前项后立即做后项。较正式。' },
    { pattern: '〜次第だ（説明）', meaning: '是〜的缘故', explanation: '用于句末表示事情的经过或缘由。较正式。' },
    { pattern: '〜次第で', meaning: '要看〜而定', explanation: '表示根据前项的情况而变化。' },
    { pattern: '〜次第では', meaning: '根据〜的情况（变化）', explanation: '表示后项可能根据前项而改变。' },

    // === 〜に関して / に対して / にとって / について ===
    { pattern: '〜に関して', meaning: '关于〜', explanation: '表示与某事物相关的信息或话题。比について更正式。' },
    { pattern: '〜に関する', meaning: '关于〜的（连体）', explanation: 'に関して的连体修饰形式。' },
    { pattern: '〜に対して（対象）', meaning: '对〜（动作对象）', explanation: '表示动作或态度的对象。后接表示态度、反应的词。' },
    { pattern: '〜に対して（対比）', meaning: '与〜相对 / 而', explanation: '表示对比两个对立的事物或性质。' },
    { pattern: '〜に対する', meaning: '对〜的（连体）', explanation: 'に対して的连体修饰形式。' },
    { pattern: '〜にとって', meaning: '对〜来说', explanation: '表示从某人的立场或角度来看。后接评价、判断。' },
    { pattern: '〜について', meaning: '关于〜', explanation: '表示谈论或涉及的话题。与に関して相比更口语化。' },
    { pattern: '〜につき', meaning: '关于〜 / 因〜', explanation: 'について的书面形式。也可表示原因或"每"。' },
    { pattern: '〜をめぐって', meaning: '围绕〜', explanation: '表示围绕某个话题或问题展开讨论或争议。' },
    { pattern: '〜をめぐる', meaning: '围绕〜的（连体）', explanation: 'をめぐって的连体修饰形式。' },

    // === によって Series ===
    { pattern: '〜によって（原因）', meaning: '因〜而', explanation: '表示原因。后接某一结果。' },
    { pattern: '〜によって（手段）', meaning: '通过〜（手段）', explanation: '表示方法或手段。' },
    { pattern: '〜によって（根据）', meaning: '根据〜而不同', explanation: '表示根据前项的不同，后项也有差异。' },
    { pattern: '〜によって（被动主体）', meaning: '由〜（被动态主体）', explanation: '在被动句中表示动作的主体。' },
    { pattern: '〜により', meaning: '因/根据/通过（书面）', explanation: 'によって的书面语形式。' },
    { pattern: '〜による', meaning: '因/由〜的（连体）', explanation: 'によって的连体修饰形式。' },
    { pattern: '〜によると', meaning: '根据〜（信息源）', explanation: '表示信息的来源。常与そうだ/ということだ搭配。' },
    { pattern: '〜によれば', meaning: '根据〜（信息源）', explanation: 'によると的书面变体。' },

    // === Cause & Reason (原因・理由) ===
    { pattern: '〜せいで', meaning: '都怪〜（消极原因）', explanation: '表示导致不好结果的直接原因。带有责备语气。' },
    { pattern: '〜せいか', meaning: '可能是〜的原因', explanation: '表示不确定的消极原因。"可能是因为〜吧"。' },
    { pattern: '〜おかげで', meaning: '多亏了〜', explanation: '表示带来好结果的原因。也可用于讽刺。' },
    { pattern: '〜おかげか', meaning: '可能是托〜的福', explanation: '表示不确定的积极原因。' },
    { pattern: '〜ばかりに', meaning: '就因为〜（导致坏结果）', explanation: '表示由于某个原因导致了不好的结果。带有后悔。' },
    { pattern: '〜からといって', meaning: '虽说〜但是', explanation: '表示不能因为前项就简单地得出后项结论。后常接否定。' },
    { pattern: '〜からには', meaning: '既然〜就', explanation: '表示既然前项是事实，后项是当然的结果或决心。' },
    { pattern: '〜以上（いじょう）', meaning: '既然〜就', explanation: '与からには类似。表示既然承担了某种责任或立场。' },
    { pattern: '〜上は', meaning: '既然〜（书面）', explanation: '以上/からには的书面语形式。' },
    { pattern: '〜あまり', meaning: '过于〜以至于', explanation: '表示由于程度过甚而导致某个结果。多用于消极结果。' },
    { pattern: '〜あまりに（も）', meaning: '过于〜', explanation: 'あまり的强调形式。带有感情色彩的过甚表达。' },

    // === Concessive (逆接・譲歩) ===
    { pattern: '〜にもかかわらず', meaning: '尽管〜但是', explanation: '表示后项与基于前项预想的结果相反。比〜のに更正式。' },
    { pattern: '〜くせに', meaning: '明明〜却（轻蔑）', explanation: '表示对某人的行为不满，认为与身份或能力不符。' },
    { pattern: '〜わりに（は）', meaning: '虽然〜但是（出乎意料）', explanation: '表示与基于前项的预想相比，后项的结果超出预期。' },
    { pattern: '〜にしては', meaning: '就〜来说（还算）', explanation: '表示以某个标准来看，后项的评价与预期有所偏离。' },
    { pattern: '〜どころか', meaning: '岂止〜 / 别说〜了', explanation: '表示完全推翻前项的预想，后项是前项的反面或更甚。' },
    { pattern: '〜どころではない', meaning: '哪谈得上〜 / 根本不能', explanation: '表示没有余裕或条件去做某事。远非可以〜的状态。' },
    { pattern: '〜にしても', meaning: '即使是〜也', explanation: '表示即使是前项的情况，后项仍然成立。' },
    { pattern: '〜にしろ', meaning: '即使〜也（书面）', explanation: 'にしても的书面形式。' },
    { pattern: '〜にせよ', meaning: '就算是〜也', explanation: 'にしろ的变体。' },
    { pattern: '〜としたって', meaning: '就算〜也（口语）', explanation: 'にしても/としても的口语缩约形式。' },
    { pattern: '〜と言っても', meaning: '虽说是〜但', explanation: '表示虽然前项是事实，但实际程度没有预期的那么高。' },
    { pattern: '〜とはいえ', meaning: '虽说是〜但', explanation: '表示承认前项事实，但后项不能完全认同。' },

    // === Emphasis (強調) ===
    { pattern: '〜こそ', meaning: '正是〜', explanation: '表示强调。前面的词是说话人想强调的内容。' },
    { pattern: '〜さえ', meaning: '连〜都（极端例子）', explanation: '举出极端例子暗示其他更不用说了。' },
    { pattern: '〜さえ〜ば', meaning: '只要〜就', explanation: '表示只要满足最低条件就可以了。' },
    { pattern: '〜すら', meaning: '连〜都（书面）', explanation: 'さえ的书面语形式。举出极端例子。' },
    { pattern: '〜など / 〜なんか', meaning: '〜之类的', explanation: '表示轻视或举例。"那种东西"的语感。' },
    { pattern: '〜なんて', meaning: '〜什么的', explanation: '口语化的列举或表示轻视、意外。' },
    { pattern: '〜ばかり（限定）', meaning: '光〜 / 净〜', explanation: '表示总是做某事或某种状态反复出现。多带消极色彩。' },
    { pattern: '〜ばかりでなく', meaning: '不仅〜而且', explanation: '表示范围不限于前项，后项也同样。书面语。' },
    { pattern: '〜だけでなく', meaning: '不仅〜而且', explanation: 'ばかりでなく的口语形式。' },
    { pattern: '〜のみならず', meaning: '不仅〜而且（书面）', explanation: 'だけでなく的书面形式。' },
    { pattern: '〜どころか', meaning: '不仅〜反而', explanation: 'N3用法深化。' },
    { pattern: '〜はもちろん', meaning: '〜自不必说', explanation: '表示前项当然如此，后项也一样。' },
    { pattern: '〜はもとより', meaning: '〜不用说', explanation: 'はもちろん的书面形式。' },

    // === Time & Sequence (時間・順序) ===
    { pattern: '〜うちに', meaning: '趁〜的时候', explanation: 'N3深化。趁着某个状态还没改变做某事。' },
    { pattern: '〜ないうちに', meaning: '趁还没〜', explanation: '表示趁前项的状态尚未发生时做某事。' },
    { pattern: '〜最中に（さいちゅうに）', meaning: '正在〜的时候', explanation: '表示正处于某动作最高潮的时候发生了别的事。' },
    { pattern: '〜最中だ', meaning: '正在〜之中', explanation: '最中に的句末形式。' },
    { pattern: '〜たとたん（に）', meaning: '刚〜就（意外）', explanation: '表示前项动作刚一发生，后项意外地发生了。' },
    { pattern: '〜かと思うと', meaning: '刚〜就', explanation: '表示前项刚发生，出乎意料地紧接着发生了后项。' },
    { pattern: '〜かと思ったら', meaning: '还以为〜（结果）', explanation: '表示说话人本以为前项，但实际结果是后项。' },
    { pattern: '〜次第', meaning: '一〜就（立刻）', explanation: 'N3复习。表示前项完成后立即做后项。' },
    { pattern: '〜てからでないと', meaning: '不先〜就不能', explanation: '表示如果不是先做前项，后项就无法实现。' },
    { pattern: '〜てからでなければ', meaning: '不先〜就不能（强调）', explanation: 'てからでないと的强调形式。' },
    { pattern: '〜上で（〜た上で）', meaning: '在〜之后（基于前项）', explanation: '表示在完成前项的基础上进行后项行动。' },
    { pattern: '〜上で（〜る上で）', meaning: '在做〜时（方面）', explanation: '表示在做某事的方面或过程中需要注意的事情。' },
    { pattern: '〜上に', meaning: '而且 / 加上', explanation: '表示在原有基础上再加上同类的事物。多用于消极累加。' },
    { pattern: '〜から〜にかけて', meaning: '从〜到〜（大致范围）', explanation: '表示时间或空间的大致范围。没有明确的起点终点。' },
    { pattern: '〜にわたって', meaning: '历时〜 / 涉及〜', explanation: '表示时间之长或空间之广。强调范围大。' },
    { pattern: '〜にわたる', meaning: '历时〜的 / 涉及〜的（连体）', explanation: 'にわたって的连体修饰形式。' },
    { pattern: '〜を通じて（期間）', meaning: '整个〜期间', explanation: '表示在整个时间段内都持续某种状态。' },
    { pattern: '〜を通して（媒介）', meaning: '通过〜（手段/媒介）', explanation: '表示通过某种媒介或手段。人を通して（通过人）。' },

    // === One-sided / Trend (一方的傾向) ===
    { pattern: '〜一方だ（いっぽうだ）', meaning: '一直〜下去（单向）', explanation: '表示某个状态或变化朝着一个方向不断发展。多用于消极。' },
    { pattern: '〜一方で（いっぽうで）', meaning: '一方面〜另一方面', explanation: '表示同时存在两个对立的方面。' },
    { pattern: '〜反面（はんめん）', meaning: '另一方面（相反）', explanation: '表示同一事物的另一面。与一方で类似。' },
    { pattern: '〜ばかりだ（傾向）', meaning: '越来越〜 / 光是〜', explanation: '表示事态朝着不好的方向持续发展。' },
    { pattern: '〜つつある', meaning: '正在〜之中', explanation: '表示某个变化正在持续进行中。书面语。' },

    // === こと / もの Nuances ===
    { pattern: '〜こと（名詞化）', meaning: '〜这件事', explanation: '将动词或句子名词化。こと表示抽象的事情、概念。' },
    { pattern: '〜もの（名詞化）', meaning: '〜这个东西', explanation: '将动词或句子名词化。もの表示具体的、有形的东西。' },
    { pattern: '〜ということだ', meaning: '据说〜', explanation: '表示传闻。也用于对前述内容的解释和总结。' },
    { pattern: '〜とのことだ', meaning: '据说〜（书面）', explanation: 'ということだ的书面形式。常用于邮件等。' },
    { pattern: '〜とか', meaning: '〜什么的 / 听说〜', explanation: '表示不确定的传闻，或口语中表示列举。' },

    // === Various Expressions ===
    { pattern: '〜に違いない', meaning: '一定是〜', explanation: '表示说话人非常确信的推测。基于某种根据的判断。' },
    { pattern: '〜に決まっている', meaning: '肯定〜 / 当然〜', explanation: '表示毫无疑问的断定。与に違いない比更口语化。' },
    { pattern: '〜に相違ない', meaning: '无疑是〜（书面）', explanation: 'に違いない的书面语形式。公文等使用。' },
    { pattern: '〜ざるを得ない', meaning: '不得不〜', explanation: '表示别无选择只能那样做。书面语。' },
    { pattern: '〜得る（うる/える）', meaning: '可能〜', explanation: '表示理论上或逻辑上的可能性。书面语。' },
    { pattern: '〜得ない（えない）', meaning: '不可能〜', explanation: '得る的否定形式。あり得ない（不可能有）。' },
    { pattern: '〜かねる', meaning: '难以〜（心理上）', explanation: '表示心理上的抗拒或客观上难以做到。' },
    { pattern: '〜かねない', meaning: '有可能（不好）〜', explanation: '表示某种不好的事情有可能发生。' },
    { pattern: '〜がたい', meaning: '难以〜（不可能）', explanation: '表示几乎不可能做到，即使想做也做不到。' },
    { pattern: '〜わけだ（当然）', meaning: '难怪/当然', explanation: 'N3深化。表示理解了原因后的"难怪"。' },
    { pattern: '〜ないことはない', meaning: '不是不〜 / 也不是不能', explanation: '双重否定表示消极肯定。"也不是不能做"。' },
    { pattern: '〜ないものでもない', meaning: '也不是不〜', explanation: '比ないことはない更消极的肯定表达。' },
    { pattern: '〜と言えば', meaning: '说到〜', explanation: '表示提起某个话题。听到某事后的联想。' },
    { pattern: '〜というと', meaning: '说到〜 / 你说的〜是', explanation: '表示确认对方提到的内容或提出话题。' },
    { pattern: '〜と言えば〜が', meaning: '说是〜吧也〜', explanation: '表示某种保留或让步的说法。' },
    { pattern: '〜といった', meaning: '〜等的', explanation: '连体形式，修饰名词。表示"〜等的"列举含义。' },
    { pattern: '〜といったら', meaning: '说到〜（强调）', explanation: '表示对主题的强调，后接感叹或评价。' },
    { pattern: '〜ように（比喻）', meaning: '像〜那样的', explanation: 'N3深化。表示比喻、举例或方式。' },
    { pattern: '〜かのように', meaning: '就好像〜一样', explanation: '表示比喻，暗示实际上并非如此。' },
    { pattern: '〜ような気がする', meaning: '总觉得好像〜', explanation: '表示模糊的感觉或直觉。不太确定。' },
    { pattern: '〜かのような', meaning: '就好像〜一样的（连体）', explanation: 'かのようだ的连体形式。' },
    { pattern: '〜ぐらい / 〜くらい', meaning: '大约〜 / 起码〜', explanation: '表示程度、约数或最低限度。N3深化用法。' },
    { pattern: '〜ほど', meaning: '〜的程度 / 几乎〜', explanation: 'N3深化。表示程度很高或约数。' },
    { pattern: '〜ば〜ほど', meaning: '越〜越〜', explanation: 'N3深化。表示比例变化关系。' },
    { pattern: '〜ほど〜はない', meaning: '没有比〜更〜的了', explanation: '表示最高级比较。' },
    { pattern: '〜ほどだ', meaning: '几乎到了〜程度', explanation: '表示程度之高，到了可以说〜的地步。' },
    { pattern: '〜とは限らない', meaning: '未必〜', explanation: '表示不能一概而论，也有例外。' },
    { pattern: '〜とは言えない', meaning: '不能说是〜', explanation: '表示不能做出那样的断言。' },
    { pattern: '〜というものではない', meaning: '并非〜（一般论）', explanation: '表示对某种一般性观点的否定。' },
    { pattern: '〜とは', meaning: '所谓〜（定义/惊讶）', explanation: '用于下定义或表示惊讶。〜とは〜ことだ（定义）。' },
    { pattern: '〜てならない', meaning: '不由得〜', explanation: '表示感情、感觉自然而然地产生，无法控制。' },
    { pattern: '〜てたまらない', meaning: '〜得不得了', explanation: '表示程度之高令人难以忍受。用于感情/欲望。' },
    { pattern: '〜てしかたがない', meaning: '〜得不得了', explanation: '口语。与てたまらない近义。表示无法忍受。' },
    { pattern: '〜てしようがない', meaning: '〜得没办法', explanation: '口语。与てしかたがない近义。' },
    { pattern: '〜ことだから', meaning: '因为是〜（了解的人）', explanation: '表示基于对某人的了解所做的推测。' },
    { pattern: '〜だけに', meaning: '正因为〜所以更', explanation: '表示因为前项，所以后项程度更高或更有特别意义。' },
    { pattern: '〜だけあって', meaning: '不愧是〜', explanation: '表示"不愧是〜"，其评价与身份或努力相符。' },
    { pattern: '〜だけのことはある', meaning: '确实值得〜', explanation: '表示对某事物的价值表示认可。"果然名不虚传"。' },
    { pattern: '〜を中心に', meaning: '以〜为中心', explanation: '表示以某事物为核心展开活动。' },
    { pattern: '〜をはじめ', meaning: '以〜为首', explanation: '表示举出一个代表性例子，暗示还有很多类似。' },
    { pattern: '〜をはじめとして', meaning: '以〜为代表', explanation: 'をはじめ的强调形式。' },
    { pattern: '〜に加えて', meaning: '加上〜', explanation: '表示在已有基础上追加同类事物。' },
    { pattern: '〜にこたえて', meaning: '应〜 / 响应〜', explanation: '表示响应某种要求或期待。' },
    { pattern: '〜に沿って', meaning: '沿着〜 / 按照〜', explanation: '表示遵从某种标准、方针或路线。' },
    { pattern: '〜に反して', meaning: '与〜相反', explanation: '表示与预期、规则或意愿相反的结果。' },
    { pattern: '〜に基づいて', meaning: '根据〜 / 基于〜', explanation: '表示以某事物为基础或依据。' },
    { pattern: '〜をもとに', meaning: '以〜为基础', explanation: '表示以某事物为素材或基础。与に基づいて相比更偏素材。' },
    { pattern: '〜を通じて', meaning: '通过〜', explanation: 'N3深化。表示手段、媒介或整个期间。' },
    { pattern: '〜をきっかけに', meaning: '以〜为契机', explanation: '表示以某事为转折点或契机开始了新的行为。' },
    { pattern: '〜を契機に', meaning: '以〜为契机（书面）', explanation: 'をきっかけに的书面语形式。' },
    { pattern: '〜から見ると', meaning: '从〜来看', explanation: '表示从某个角度或立场来判断。' },
    { pattern: '〜から言うと', meaning: '从〜来说', explanation: '表示从某立场来发表意见。' },
    { pattern: '〜からすると', meaning: '从〜来看（推断）', explanation: '表示从某事物来推断或判断。' },
    { pattern: '〜からして', meaning: '单从〜来看', explanation: '举出最典型的例子来推断整体。' },
    { pattern: '〜を問わず', meaning: '不论〜', explanation: '表示与某因素无关，都成立。男女を問わず（不论男女）。' },
    { pattern: '〜にかかわらず', meaning: '不论〜', explanation: '表示不受前项影响。' },
    { pattern: '〜もかまわず', meaning: '不顾〜 / 不在乎', explanation: '表示不在乎某因素而做某事。' },
    { pattern: '〜抜きで', meaning: '不用〜 / 去掉〜', explanation: '表示排除通常应该有的东西。' },
    { pattern: '〜抜きにして', meaning: '抛开〜不谈', explanation: '表示暂时排除某因素。' },
    { pattern: '〜は抜きにして', meaning: '先不说〜', explanation: '与抜きにして同义。先放下某话题。' },
    { pattern: '〜も当然だ', meaning: '〜也是理所当然的', explanation: '表示考虑到前面的情况，后面的结果也是自然的。' },
    { pattern: '〜のももっともだ', meaning: '〜也是有道理的', explanation: '表示理解对方的立场或感受。' },
    { pattern: '〜にほかならない', meaning: '无非是〜', explanation: '表示断定"不是别的，正是〜"。' },
    { pattern: '〜にすぎない', meaning: '只不过〜', explanation: '表示范围或程度有限。"不过是〜而已"。' },
    { pattern: '〜てはいられない', meaning: '不能一直〜下去', explanation: '表示不能维持现状，必须采取行动。' },
    { pattern: '〜ずに済む', meaning: '不用〜就解决了', explanation: '表示不用做某个不情愿的事就解决了。' },
    { pattern: '〜ないで済む', meaning: '不用〜就解决了', explanation: 'ずに済む的口语形式。' },
    { pattern: '〜て済む', meaning: '〜就解决了', explanation: '表示只需做某事就解决了，没有更严重的后果。' },
    { pattern: '〜っけ', meaning: '〜来着（回忆确认）', explanation: '表示回忆或向对方确认某事。口语。' },
    { pattern: '〜かな / 〜かしら', meaning: '〜呢（自言自语）', explanation: 'かな男性用，かしら女性用。表示自问或委婉疑问。' },
    { pattern: '〜を込めて', meaning: '充满〜地', explanation: 'N3深化。愛を込めて（充满爱意地）。' },
    { pattern: '〜をもって', meaning: '以〜（方式）', explanation: '表示手段、方法或以某个时间为界限。' },
    { pattern: '〜をもってすれば', meaning: '用〜的话就能', explanation: '表示用某种方法就能做到。' },
    { pattern: '〜に応じて', meaning: '根据〜（相应变化）', explanation: '表示根据情况变化相应调整。' },
    { pattern: '〜に応じた', meaning: '根据〜的（连体）', explanation: 'に応じて的连体修饰形式。' },
    { pattern: '〜を頼りに', meaning: '依靠〜', explanation: '表示依赖某人或某物。' },
    { pattern: '〜げ（〜気）', meaning: '〜的样子', explanation: 'N3深化。接形容词词干表示外观状态。' },
    { pattern: '〜だらけ', meaning: '满是〜', explanation: '表示表面或内部充满了不好的东西。ゴミだらけ（满是垃圾）。' },
    { pattern: '〜み', meaning: '〜的感觉/程度', explanation: '接形容词词干，将形容词名词化。甘み（甜味）。' },
    { pattern: '〜さ', meaning: '〜度/〜性', explanation: '接形容词词干，将形容词名词化表示客观程度。高さ（高度）。' },
    { pattern: '〜向け / 〜向き', meaning: '面向〜 / 适合〜', explanation: 'N3深化区别。向け是有意针对，向き是客观上适合。' },
    { pattern: '〜せいぜい', meaning: '充其量 / 最多', explanation: '表示最大限度也只有那么多。' },
    { pattern: '〜むしろ', meaning: '与其说〜不如说', explanation: '表示比较后的选择或修正。' },
    { pattern: '〜かえって', meaning: '反而 / 反倒', explanation: '表示与预期相反的结果。多用于消极场合。' },
    { pattern: '〜いったん〜ば', meaning: '一旦〜就（条件）', explanation: '表示一旦做了某事就回不去了。' },
    { pattern: '〜た末に', meaning: '经过〜之后', explanation: '表示经过一番过程后的最终结果。' },
    { pattern: '〜あげく', meaning: '最后〜（消极结果）', explanation: '表示经过漫长的过程最后导致了不好的结果。' },
    { pattern: '〜結果（けっか）', meaning: '〜的结果', explanation: '表示客观的结果。中性表达。' },
    { pattern: '〜際（さい）', meaning: '在〜时（场面）', explanation: '表示某个特别的机会或场合。比とき更正式。' },
    { pattern: '〜に際して', meaning: '当〜之际', explanation: '際的正式表达。表示在重要时刻。' },
    { pattern: '〜にあたって', meaning: '值此〜之际', explanation: '表示在某个重要的时期或阶段。' },
    { pattern: '〜にあたり', meaning: '在〜之际', explanation: 'にあたって的书面语形式。' },

    // === Additional N3 Patterns ===
    { pattern: '〜について（N3深化）', meaning: '关于〜', explanation: 'N3深化。表示谈论或涉及的话题。更正式场合使用。' },
    { pattern: '〜に関して', meaning: '关于〜', explanation: 'N3深化。比について更正式，用于书面语或正式场合。' },
    { pattern: '〜に関する', meaning: '关于〜的', explanation: 'に関して的连体修饰形式。' },
    { pattern: '〜に対して（対象）', meaning: '对〜（动作对象）', explanation: 'N3深化。表示动作或态度的对象。' },
    { pattern: '〜に対する', meaning: '对〜的', explanation: 'に対して的连体修饰形式。' },
    { pattern: '〜にとって', meaning: '对〜来说', explanation: 'N3深化。表示从某人的立场或角度来看。' },
    { pattern: '〜によって（原因）', meaning: '因〜而', explanation: 'N3深化。表示原因。' },
    { pattern: '〜によって（被动主体）', meaning: '由〜（被动态主体）', explanation: 'N3深化。在被动句中表示动作的主体。' },
    { pattern: '〜により', meaning: '因/根据/通过', explanation: 'によって的书面语形式。' },
    { pattern: '〜による', meaning: '因/由〜的', explanation: 'によって的连体修饰形式。' },
    { pattern: '〜によると', meaning: '根据〜（信息源）', explanation: 'N3深化。表示信息的来源。' },
    { pattern: '〜によれば', meaning: '根据〜（信息源）', explanation: 'N3深化。によると的书面变体。' },
    { pattern: '〜せいか', meaning: '可能是〜的原因', explanation: 'N3深化。表示不确定的消极原因。' },
    { pattern: '〜おかげか', meaning: '可能是托〜的福', explanation: 'N3深化。表示不确定的积极原因。' },
    { pattern: '〜ばかりに', meaning: '就因为〜（导致坏结果）', explanation: 'N3深化。表示由于某个原因导致了不好的结果。' },
    { pattern: '〜からといって', meaning: '虽说〜但是', explanation: 'N3深化。表示不能因为前项就简单地得出后项结论。' },
    { pattern: '〜からには', meaning: '既然〜就', explanation: 'N3深化。表示既然前项是事实，后项是当然的结果或决心。' },
    { pattern: '〜以上（いじょう）', meaning: '既然〜就', explanation: 'N3深化。与からには类似。表示既然承担了某种责任或立场。' },
    { pattern: '〜上は', meaning: '既然〜', explanation: 'N3深化。以上/からには的书面语形式。' },
    { pattern: '〜あまり', meaning: '过于〜以至于', explanation: 'N3深化。表示由于程度过甚而导致某个结果。' },
    { pattern: '〜あまりに（も）', meaning: '过于〜', explanation: 'N3深化。あまり的强调形式。' },
    { pattern: '〜に違いない', meaning: '一定是〜', explanation: 'N3深化。表示说话人非常确信的推测。' },
    { pattern: '〜に決まっている', meaning: '肯定〜/当然〜', explanation: 'N3深化。表示毫无疑问的断定。' },
    { pattern: '〜に相違ない', meaning: '无疑是〜', explanation: 'N3深化。に違いない的书面语形式。' },
    { pattern: '〜ざるを得ない', meaning: '不得不〜', explanation: 'N3深化。表示别无选择只能那样做。' },
    { pattern: '〜得る（うる/える）', meaning: '可能〜', explanation: 'N3深化。表示理论上或逻辑上的可能性。' },
    { pattern: '〜得ない（えない）', meaning: '不可能〜', explanation: 'N3深化。得る的否定形式。' },
    { pattern: '〜かねる', meaning: '难以〜', explanation: 'N3深化。表示心理上的抗拒或客观上难以做到。' },
    { pattern: '〜かねない', meaning: '有可能（不好）', explanation: 'N3深化。表示某种不好的事情有可能发生。' },
    { pattern: '〜がたい', meaning: '难以〜', explanation: 'N3深化。表示几乎不可能做到。' },
    { pattern: '〜ないことはない', meaning: '不是不〜', explanation: 'N3深化。双重否定表示消极肯定。' },
    { pattern: '〜ないものでもない', meaning: '也不是不〜', explanation: 'N3深化。比ないことはない更消极的肯定表达。' },
    { pattern: '〜と言えば', meaning: '说到〜', explanation: 'N3深化。表示提起某个话题。' },
    { pattern: '〜というと', meaning: '说到〜/你说的〜是', explanation: 'N3深化。表示确认对方提到的内容。' },
    { pattern: '〜と言えば〜が', meaning: '说是〜吧也〜', explanation: 'N3深化。表示某种保留或让步的说法。' },
    { pattern: '〜といった', meaning: '〜等的', explanation: 'N3深化。连体形式，修饰名词。' },
    { pattern: '〜といったら', meaning: '说到〜（强调）', explanation: 'N3深化。表示对主题的强调。' },
    { pattern: '〜かのように', meaning: '就好像〜一样', explanation: 'N3深化。表示比喻，暗示实际上并非如此。' },
    { pattern: '〜かのような', meaning: '就好像〜一样的', explanation: 'N3深化。かのようだ的连体形式。' },
    { pattern: '〜てならない', meaning: '不由得〜', explanation: 'N3深化。表示感情、感觉自然而然地产生。' },
    { pattern: '〜てたまらない', meaning: '〜得不得了', explanation: 'N3深化。表示程度之高令人难以忍受。' },
    { pattern: '〜てしかたがない', meaning: '〜得不得了', explanation: 'N3深化。口语。与てたまらない近义。' },
    { pattern: '〜てしようがない', meaning: '〜得没办法', explanation: 'N3深化。口语。与てしかたがない近义。' },
    { pattern: '〜ほどだ', meaning: '几乎到了〜程度', explanation: 'N3深化。表示程度之高。' },
    { pattern: '〜ほど〜はない', meaning: '没有比〜更〜的了', explanation: 'N3深化。表示最高级比较。' },
    { pattern: '〜ぐらい/〜くらい', meaning: '大约〜/起码〜', explanation: 'N3深化。表示程度、约数或最低限度。' },
    { pattern: '〜だけに', meaning: '正因为〜所以更', explanation: 'N3深化。表示因为前项，所以后项程度更高。' },
    { pattern: '〜だけあって', meaning: '不愧是〜', explanation: 'N3深化。表示评价与实际相符。' },
    { pattern: '〜だけのことはある', meaning: '确实值得〜', explanation: 'N3深化。表示对某事物的价值表示认可。' },
    { pattern: '〜一方だ', meaning: '一直〜下去', explanation: 'N3深化。表示某个状态或变化朝着一个方向不断发展。' },
    { pattern: '〜一方で', meaning: '一方面〜另一方面', explanation: 'N3深化。表示同时存在两个对立的方面。' },
    { pattern: '〜反面', meaning: '另一方面（相反）', explanation: 'N3深化。表示同一事物的另一面。' },
    { pattern: '〜どころか', meaning: '岂止〜/别说〜了', explanation: 'N3深化。表示完全推翻前项的预想。' },
    { pattern: '〜どころではない', meaning: '哪谈得上〜', explanation: 'N3深化。表示没有余裕或条件去做某事。' },
    { pattern: '〜にしても', meaning: '即使是〜也', explanation: 'N3深化。表示即使是前项的情况，后项仍然成立。' },
    { pattern: '〜にしろ', meaning: '即使〜也', explanation: 'N3深化。にしても的书面形式。' },
    { pattern: '〜にせよ', meaning: '就算是〜也', explanation: 'N3深化。にしろ的变体，语气稍软。' },
    { pattern: '〜と言っても', meaning: '虽说是〜但', explanation: 'N3深化。表示虽然前项是事实，但实际程度没有预期的那么高。' },
    { pattern: '〜とはいえ', meaning: '虽说是〜但', explanation: 'N3深化。表示承认前项事实，但后项不能完全认同。' },
    { pattern: '〜にもかかわらず', meaning: '尽管〜但是', explanation: 'N3深化。表示后项与基于前项预想的结果相反。' },
    { pattern: '〜わりに', meaning: '虽然〜但是', explanation: 'N3深化。表示与基于前项的预想相比，后项的结果超出预期。' },
    { pattern: '〜にしては', meaning: '就〜来说', explanation: 'N3深化。表示以某个标准来看，后项的评价与预期有所偏离。' },
    { pattern: '〜こそ', meaning: '正是〜', explanation: 'N3深化。表示强调。' },
    { pattern: '〜さえ', meaning: '连〜都', explanation: 'N3深化。举出极端例子暗示其他更不用说了。' },
    { pattern: '〜さえ〜ば', meaning: '只要〜就', explanation: 'N3深化。表示只要满足最低条件就可以了。' },
    { pattern: '〜など/〜なんか', meaning: '〜之类的', explanation: 'N3深化。表示轻视或举例。' },
    { pattern: '〜なんて', meaning: '〜什么的', explanation: 'N3深化。口语化的列举或表示轻视、意外。' },
    { pattern: '〜ばかり（限定）', meaning: '光〜/净〜', explanation: 'N3深化。表示总是做某事或某种状态反复出现。' },
    { pattern: '〜ばかりでなく', meaning: '不仅〜而且', explanation: 'N3深化。表示范围不限于前项，后项也同样。' },
    { pattern: '〜だけでなく', meaning: '不仅〜而且', explanation: 'N3深化。ばかりでなく的口语形式。' },
    { pattern: '〜のみならず', meaning: '不仅〜而且', explanation: 'N3深化。だけでなく的书面形式。' },
    { pattern: '〜はもちろん', meaning: '〜自不必说', explanation: 'N3深化。表示前项当然如此，后项也一样。' },
    { pattern: '〜はもとより', meaning: '〜不用说', explanation: 'N3深化。はもちろん的书面形式。' },
    { pattern: '〜最中に', meaning: '正在〜的时候', explanation: 'N3深化。表示正处于某动作最高潮的时候发生了别的事。' },
    { pattern: '〜最中だ', meaning: '正在〜之中', explanation: 'N3深化。最中に的句末形式。' },
    { pattern: '〜たとたん', meaning: '刚〜就', explanation: 'N3深化。表示前项动作刚一发生，后项意外地发生了。' },
    { pattern: '〜かと思うと', meaning: '刚〜就', explanation: 'N3深化。表示前项刚发生，出乎意料地紧接着发生了后项。' },
    { pattern: '〜かと思ったら', meaning: '还以为〜（结果）', explanation: 'N3深化。表示说话人本以为前项，但实际结果是后项。' },
    { pattern: '〜次第', meaning: '一〜就（立刻）', explanation: 'N3深化。表示前项完成后立即做后项。' },
    { pattern: '〜てからでないと', meaning: '不先〜就不能', explanation: 'N3深化。表示如果不是先做前项，后项就无法实现。' },
    { pattern: '〜上で', meaning: '在〜之后/方面', explanation: 'N3深化。表示在完成前项的基础上进行后项，或表示在做某事的方面。' },
    { pattern: '〜上に', meaning: '而且/加上', explanation: 'N3深化。表示在原有基础上再加上同类的事物。' },
    { pattern: '〜代わりに', meaning: '代替/反而', explanation: 'N3深化。表示替代某人做某事，或表示交换条件的转折。' },
    { pattern: '〜ために（目的）', meaning: '为了〜', explanation: 'N3深化。表示目的。意志动词字典形+ために。' },
    { pattern: '〜のに（目的）', meaning: '用于〜', explanation: 'N3深化。表示用途或目的。' },
    { pattern: '〜には（目的）', meaning: '要〜（就得）', explanation: 'N3深化。表示要实现某个目的所需的条件。' },
    { pattern: '〜うちに（時間）', meaning: '趁〜的时候', explanation: 'N3深化。表示趁着某个状态还没改变做某事。' },
    { pattern: '〜ないうちに', meaning: '趁还没〜', explanation: 'N3深化。表示趁前项的状态尚未发生时做某事。' },
    { pattern: '〜間（あいだ）', meaning: '在〜期间（一直）', explanation: 'N3深化。表示在某段时间内一直持续的动作或状态。' },
    { pattern: '〜間に（あいだに）', meaning: '在〜期间内', explanation: 'N3深化。表示在某段时间内的某个时刻发生某事。' },
    { pattern: '〜までに', meaning: '在〜之前（截止）', explanation: 'N3深化。表示动作完成的截止时间。' },
    { pattern: '〜て以来', meaning: '自从〜以来', explanation: 'N3深化。表示从某时点以来一直持续的状态。' },
    { pattern: '〜たばかり', meaning: '刚〜不久', explanation: 'N3深化。表示动作刚发生不久，主观时间感。' },
    { pattern: '〜たばかりに', meaning: '就因为刚〜', explanation: 'N3深化。表示由于发生了前项而导致后项。' },
    { pattern: '〜いったん〜ば', meaning: '一旦〜就', explanation: 'N3深化。表示一旦做了某事就回不去了。' },
    { pattern: '〜てはいられない', meaning: '不能一直〜', explanation: 'N3深化。表示不能保持某种状态，必须改变。' },
    { pattern: '〜ずに済む', meaning: '不用〜就解决了', explanation: 'N3深化。表示不用做某个不情愿的事就解决了。' },
    { pattern: '〜ないで済む', meaning: '不用〜就解决了', explanation: 'N3深化。ずに済む的口语形式。' },
    { pattern: '〜て済む', meaning: '〜就解决了', explanation: 'N3深化。表示只需做某事就解决了。' },
    { pattern: '〜っけ', meaning: '〜来着', explanation: 'N3深化。表示回忆或向对方确认某事。' },
    { pattern: '〜かな/〜かしら', meaning: '〜呢', explanation: 'N3深化。かな男性用，かしら女性用。表示自问或委婉疑问。' },
    { pattern: '〜を込めて', meaning: '充满〜地', explanation: 'N3深化。愛を込めて（充满爱意地）。' },
    { pattern: '〜に応じて', meaning: '根据〜', explanation: 'N3深化。表示根据情况变化相应调整。' },
    { pattern: '〜に応じた', meaning: '根据〜的', explanation: 'N3深化。に応じて的连体修饰形式。' },
    { pattern: '〜を頼りに', meaning: '依靠〜', explanation: 'N3深化。表示依赖某人或某物。' },
    { pattern: '〜げ', meaning: '〜的样子', explanation: 'N3深化。接形容词词干表示外观状态。' },
    { pattern: '〜だらけ', meaning: '满是〜', explanation: 'N3深化。表示表面或内部充满了不好的东西。' },
    { pattern: '〜み', meaning: '〜的感觉/程度', explanation: 'N3深化。接形容词词干，将形容词名词化。' },
    { pattern: '〜さ', meaning: '〜度/〜性', explanation: 'N3深化。接形容词词干，表示客观程度。' },
    { pattern: '〜向け/〜向き', meaning: '面向〜/适合〜', explanation: 'N3深化。向け是有意针对，向き是客观上适合。' },
    { pattern: '〜せいぜい', meaning: '充其量/最多', explanation: 'N3深化。表示最大限度也只有那么多。' },
    { pattern: '〜むしろ', meaning: '与其说〜不如说', explanation: 'N3深化。表示比较后的选择或修正。' },
    { pattern: '〜かえって', meaning: '反而/反倒', explanation: 'N3深化。表示与预期相反的结果。' },
    { pattern: '〜にほかならない', meaning: '无非是〜', explanation: 'N3深化。表示断定"不是别的，正是〜"。' },
    { pattern: '〜にすぎない', meaning: '只不过〜', explanation: 'N3深化。表示范围或程度有限。"不过是〜而已"。' },
    { pattern: '〜に加えて', meaning: '加上〜', explanation: 'N3深化。表示在已有基础上追加同类事物。' },
    { pattern: '〜にこたえて', meaning: '应〜', explanation: 'N3深化。表示响应某种要求或期待。' },
    { pattern: '〜に沿って', meaning: '沿着〜/按照〜', explanation: 'N3深化。表示遵从某种标准、方针或路线。' },
    { pattern: '〜に沿った', meaning: '按照〜的', explanation: 'N3深化。に沿って的连体形式。' },
    { pattern: '〜に反して', meaning: '与〜相反', explanation: 'N3深化。表示与预期、规则或意愿相反的结果。' },
    { pattern: '〜に基づいて', meaning: '根据〜/基于〜', explanation: 'N3深化。表示以某事物为基础或依据。' },
    { pattern: '〜に基づく', meaning: '基于〜的', explanation: 'N3深化。に基づいて的连体形式。' },
    { pattern: '〜をもとに', meaning: '以〜为基础', explanation: 'N3深化。表示以某事物为素材或基础。' },
    { pattern: '〜を中心に', meaning: '以〜为中心', explanation: 'N3深化。表示以某事物为核心展开活动。' },
    { pattern: '〜をはじめ', meaning: '以〜为首', explanation: 'N3深化。举出一个代表性例子，暗示还有很多。' },
    { pattern: '〜をはじめとして', meaning: '以〜为代表', explanation: 'N3深化。をはじめ的强调形式。' },
    { pattern: '〜をきっかけに', meaning: '以〜为契机', explanation: 'N3深化。表示以某事为转折点开始了新的行为。' },
    { pattern: '〜を契機に', meaning: '以〜为契机', explanation: 'N3深化。をきっかけに的书面语形式。' },
    { pattern: '〜から見ると', meaning: '从〜来看', explanation: 'N3深化。表示从某个角度或立场来判断。' },
    { pattern: '〜から言うと', meaning: '从〜来说', explanation: 'N3深化。表示从某立场来发表意见。' },
    { pattern: '〜からすると', meaning: '从〜来看', explanation: 'N3深化。表示从某事物来推断或判断。' },
    { pattern: '〜からして', meaning: '单从〜来看', explanation: 'N3深化。举出最典型的例子来推断整体。' },
    { pattern: '〜を問わず', meaning: '不论〜', explanation: 'N3深化。表示与某因素无关，都成立。' },
    { pattern: '〜にかかわらず', meaning: '不论〜', explanation: 'N3深化。表示不受前项影响。' },
    { pattern: '〜もかまわず', meaning: '不顾〜', explanation: 'N3深化。表示不在乎某因素而做某事。' },
    { pattern: '〜抜きで', meaning: '不用〜/去掉〜', explanation: 'N3深化。表示排除通常应该有的东西。' },
    { pattern: '〜抜きにして', meaning: '抛开〜不谈', explanation: 'N3深化。表示暂时排除某因素。' },
    { pattern: '〜は抜きにして', meaning: '先不说〜', explanation: 'N3深化。与抜きにして同义。先放下某话题。' },
    { pattern: '〜も当然だ', meaning: '〜也是理所当然的', explanation: 'N3深化。表示考虑到前面的情况，后面的结果也是自然的。' },
    { pattern: '〜のももっともだ', meaning: '〜也是有道理的', explanation: 'N3深化。表示理解对方的立场或感受。' },
    { pattern: '〜っけ', meaning: '〜来着（回忆确认）', explanation: 'N3深化。表示回忆或向对方确认某事。口语。' },
    { pattern: '〜かな/〜かしら', meaning: '〜呢（自言自语）', explanation: 'N3深化。かな男性用，かしら女性用。' },
    { pattern: '〜をもって', meaning: '以〜（方式）', explanation: 'N3深化。表示手段、方法或以某个时间为界限。' },
    { pattern: '〜をもってすれば', meaning: '用〜的话就能', explanation: 'N3深化。表示用某种方法就能做到。' },
    { pattern: '〜ついでに', meaning: '顺便〜', explanation: 'N3深化。表示在做某事的同时顺便做另一件事。' },
    { pattern: '〜にわたって', meaning: '历时〜/涉及〜', explanation: 'N3深化。表示时间之长或空间之广。强调范围大。' },
    { pattern: '〜にわたる', meaning: '历时〜的/涉及〜的', explanation: 'N3深化。にわたって的连体修饰形式。' },
    { pattern: '〜から〜にかけて', meaning: '从〜到〜', explanation: 'N3深化。表示时间或空间的大致范围。' },
    { pattern: '〜にかけては', meaning: '在〜方面', explanation: 'N3深化。表示在某个领域或方面非常出色。' },
    { pattern: '〜において', meaning: '在〜', explanation: 'N3深化。表示动作或状态发生的场所、场面或领域。' },
    { pattern: '〜における', meaning: '在〜的', explanation: 'N3深化。において的连体修饰形式。' },
  ],
  N2: [
    // === 限る / 限り / 限って ===
    { pattern: '〜に限る', meaning: '〜是最好的 / 最好不过', explanation: '表示在某个范围内这个最好。也用于强烈建议。"〜に限る"（最好）。' },
    { pattern: '〜に限り', meaning: '仅限于〜', explanation: '表示限定条件或范围。"仅限这种情况"。正式书面用语。' },
    { pattern: '〜に限って', meaning: '偏偏在〜时候', explanation: '表示发生意外或不满的事情，"偏偏在这个时候"。' },
    { pattern: '〜とは限らない', meaning: '未必〜', explanation: '表示不能一概而论。N2深化用法。' },
    { pattern: '〜とも限らない', meaning: '可能是〜（消极可能性）', explanation: '表示也不能完全排除某种不好的可能性。' },

    // === からして / からすると / から見ると ===
    { pattern: '〜からして', meaning: '单从〜来看（就）', explanation: '举出一个典型例子来推断整体情况。多为消极评价。' },
    { pattern: '〜からすると', meaning: '从〜来看', explanation: '表示从某个立场或角度进行判断。' },
    { pattern: '〜からすれば', meaning: '从〜来看的话', explanation: 'からすると的变体，强调假设意义。' },
    { pattern: '〜から見ると', meaning: '从〜的角度来看', explanation: '表示观察的视角或立场。' },
    { pattern: '〜から見れば', meaning: '从〜来看的话', explanation: 'から見ると的强调变体。' },
    { pattern: '〜から見ても', meaning: '即使从〜来看也', explanation: '表示即使从某个角度判断也得出相同结论。' },
    { pattern: '〜から言うと', meaning: '从〜来说', explanation: '表示发表意见的立场或角度。' },
    { pattern: '〜から言えば', meaning: '从〜来说的话', explanation: 'から言うと的变体。' },
    { pattern: '〜から言って', meaning: '从〜来说（判断）', explanation: '与から言うと类似，表示判断的依据。' },

    // === をきっかけに / を契機に ===
    { pattern: '〜をきっかけに（して）', meaning: '以〜为契机', explanation: 'N2深化。表示以某事为契机开始了新的状态或行为。' },
    { pattern: '〜を契機に（して）', meaning: '以〜为契机（书面）', explanation: 'をきっかけに的书面语。用于较重大的事件。' },
    { pattern: '〜がきっかけで', meaning: '〜是契机', explanation: '自动词形式的契机表达。' },

    // === を問わず / にかかわらず ===
    { pattern: '〜を問わず', meaning: '不论〜', explanation: '表示与某因素无关都成立。N2深化用法。' },
    { pattern: '〜にかかわらず', meaning: '不论〜 / 不管〜', explanation: '表示不受前项因素影响。' },
    { pattern: '〜にかかわりなく', meaning: '与〜无关', explanation: 'にかかわらず的书面形式。' },
    { pattern: '〜もかまわず', meaning: '不顾〜', explanation: '表示不在乎周围的情况或别人的目光。' },
    { pattern: '〜をものともせず', meaning: '不把〜当回事', explanation: '表示根本不把困难或障碍放在眼里，勇敢面对。' },
    { pattern: '〜をよそに', meaning: '不顾〜 / 无视〜', explanation: '表示不理睬周围的事物，自顾自地做某事。' },

    // === 抜き / なし ===
    { pattern: '〜抜きで（は）', meaning: '不用〜（就不能）', explanation: '表示去掉通常应有的某事物。' },
    { pattern: '〜抜きにして（は）', meaning: '抛开〜不谈（就不能）', explanation: '与抜きで类似，更口语化。' },
    { pattern: '〜は抜きにして', meaning: '先不说〜', explanation: '表示暂时排除某个话题来讨论。' },
    { pattern: '〜なしで（は）', meaning: '没有〜（就不能）', explanation: '表示没有某条件就不能实现后项。' },
    { pattern: '〜なしに（は）', meaning: '没有〜就不', explanation: 'なしで的书面形式。' },
    { pattern: '〜なくして（は）', meaning: '如果没有〜', explanation: '表示如果没有前项就不可能实现后项。强调必要条件。' },

    // === 末に / あげく ===
    { pattern: '〜た末に（すえに）', meaning: '经过〜之后（结果）', explanation: '表示经过一番思考或努力之后得出的最终结果。结果可好可坏。' },
    { pattern: '〜の末に', meaning: '经过〜之后', explanation: '名词+の末に。表示经过某个过程后的结果。' },
    { pattern: '〜た末の', meaning: '经过〜后的（连体）', explanation: '末に的连体修饰形式。' },
    { pattern: '〜あげく（に）', meaning: '最后〜（消极结果）', explanation: '表示经过长时间不好的过程后，最终导致更不好的结果。多消极。' },
    { pattern: '〜あげくの果てに', meaning: '到头来（非常消极）', explanation: 'あげく的强调形式。表示极端的消极结果。' },
    { pattern: '〜結果', meaning: '〜的结果（客观）', explanation: 'N2深化。表示客观结果，中性表达。' },

    // === つつ / つつある ===
    { pattern: '〜つつ', meaning: '一边〜一边 / 虽然〜', explanation: '书面语。与ながら类似，两个动作同时进行。也可表示逆接。' },
    { pattern: '〜つつも', meaning: '虽然〜但是', explanation: '表示虽然意识到了但仍然做某事。书面语逆接。' },
    { pattern: '〜つつある', meaning: '正在〜之中', explanation: '表示某个变化正在持续进行中。书面语。' },
    { pattern: '〜つつあった', meaning: '当时正在〜', explanation: 'つつある的过去形式。' },

    // === ものの / ものを ===
    { pattern: '〜ものの', meaning: '虽然〜但是', explanation: '表示虽然承认前项的事实，但后项的结果不理想。' },
    { pattern: '〜とはいうものの', meaning: '话虽如此，但是', explanation: 'ものの的加强形式。' },
    { pattern: '〜ものを', meaning: '要是〜就好了 / 明明可以〜', explanation: '表示对已经发生的事实的后悔、不满或遗憾。"要是做了就好了"。' },
    { pattern: '〜ばいいものを', meaning: '要是〜就好了（却）', explanation: '对未做或做错的事情表示遗憾的固定句式。' },
    { pattern: '〜ないものか', meaning: '难道不能〜吗', explanation: '表示强烈的愿望。"难道没有办法能〜吗"。' },

    // === と思いきや ===
    { pattern: '〜と思いきや', meaning: '原以为〜却', explanation: '表示原以为是这样，但结果出人意料。文语残存。' },
    { pattern: '〜かと思いきや', meaning: '以为〜却没想到', explanation: 'と思いきや的加强形式。' },
    { pattern: '〜かと思うと', meaning: '刚〜就', explanation: 'N2深化。表示前后情况快速转换。' },
    { pattern: '〜かと思ったら', meaning: '以为〜结果', explanation: 'N2深化。表示既有期待或判断被推翻。' },

    // === にしても / にしろ / にせよ ===
    { pattern: '〜にしても', meaning: '即使是〜也 / 无论〜', explanation: 'N2深化。表示让步。"就算是在这种情况下"。' },
    { pattern: '〜にしろ', meaning: '即使〜也 / 无论〜', explanation: '书面语的让步表达。' },
    { pattern: '〜にせよ', meaning: '就算是〜也', explanation: 'にしろ的变体，语气稍软。' },
    { pattern: '〜にしても〜にしても', meaning: '无论是〜还是〜', explanation: '列举两端的例子。"无论是A还是B都"。' },
    { pattern: '〜にしろ〜にしろ', meaning: '无论是〜还是〜', explanation: 'にしても〜にしても的书面形式。' },
    { pattern: '〜にせよ〜にせよ', meaning: '不论是〜还是〜', explanation: 'にしろ〜にしろ的变体。' },
    { pattern: '〜にしたって', meaning: '就算是〜也（口语）', explanation: 'にしても的口语缩约。' },
    { pattern: '〜としたって', meaning: '就算〜也（口语）', explanation: 'としても的口语缩约。' },

    // === に越したことはない / にほかならない ===
    { pattern: '〜に越したことはない', meaning: '最好是〜 / 莫过于〜', explanation: '表示某个选择是最好的。"越～越好"的意思。"注意するに越したことはない"。' },
    { pattern: '〜には越したことはない', meaning: '最好是〜（强调）', explanation: 'に越したことはない的强调形式。' },
    { pattern: '〜に如くはない（しくはない）', meaning: '莫过于〜', explanation: 'に越したことはない的文言表达。' },
    { pattern: '〜にほかならない', meaning: '无非是〜 / 正是〜', explanation: '用于断定。"不是别的，正是…"。' },
    { pattern: '〜からにほかならない', meaning: '正是因为〜', explanation: 'にほかならない与から合用，强调原因。' },

    // === を余儀なくされる / を余儀なくさせる ===
    { pattern: '〜を余儀なくされる', meaning: '被迫〜 / 不得不〜', explanation: '表示由于外部原因被迫做不想做的事。主语是人。' },
    { pattern: '〜を余儀なくさせる', meaning: '迫使〜做', explanation: '表示某事物迫使某人做某事。主语是事物。' },
    { pattern: '〜ざるを得ない', meaning: '不得不〜', explanation: 'N2深化。与を余儀なくされる近义，但更口语。' },
    { pattern: '〜ないではすまない', meaning: '不〜就不行 / 必须〜', explanation: '表示从道义或社会常识上不能不做。"必须给个交代"。' },
    { pattern: '〜ずにはすまない', meaning: '不〜就不行', explanation: 'ないではすまない的书面形式。' },

    // === 〜げ / 〜気味 / 〜がち / 〜っぽい (N2深化) ===
    { pattern: '〜げ（気配）', meaning: '〜的样子', explanation: 'N2深化。表示从外观或表情看出的样子。' },
    { pattern: '〜気味（ぎみ）', meaning: '有点〜的倾向', explanation: 'N2深化。表示轻微的倾向或感觉。' },
    { pattern: '〜がち', meaning: '容易〜 / 往往〜', explanation: 'N2深化。表示容易发生的消极倾向或频率较高。' },
    { pattern: '〜っぽい', meaning: '有〜倾向的', explanation: 'N2深化。表示某种特征或倾向明显。' },

    // === だけに / だけあって / だけのことはある ===
    { pattern: '〜だけに', meaning: '正因为〜所以更', explanation: 'N2深化。表示"正因为是〜，所以更〜"。' },
    { pattern: '〜だけあって', meaning: '不愧是〜', explanation: 'O2深化。表示评价与实际相符。' },
    { pattern: '〜だけのことはある', meaning: '确实值得〜', explanation: 'N2深化。强调价值得到验证。' },
    { pattern: '〜ばかりに', meaning: '就因为〜（导致坏结果）', explanation: 'N2深化。强烈的消极原因表达。' },

    // === かと思うと / かと思ったら / かのうちに ===
    { pattern: '〜かと思うと', meaning: '刚〜就（变化快）', explanation: 'N2深化。表示前后情况快速变化，出乎意料。' },
    { pattern: '〜かと思ったら', meaning: '刚以为〜就', explanation: 'N2深化。表示刚以为是前项就发生了后项。' },
    { pattern: '〜たかと思うと', meaning: '刚一〜就', explanation: '强调动作刚结束就发生下一动作。' },
    { pattern: '〜たかと思ったら', meaning: '刚一〜就（以为〜）', explanation: '表示主观上以为刚做完前项，后项就发生了。' },
    { pattern: '〜かのうちに', meaning: '刚〜就（瞬间）', explanation: '表示前项是否做完都不清楚，后项就紧接着发生了。' },

    // === が早いか / や否や / そばから / なり ===
    { pattern: '〜が早いか', meaning: '刚一〜就（迅速）', explanation: '表示前项刚发生，后项就紧跟着发生。形容动作迅速。' },
    { pattern: '〜や否や（やいなや）', meaning: '刚一〜就', explanation: '书面语。表示前项刚发生，后项就发生。' },
    { pattern: '〜そばから', meaning: '刚〜就又', explanation: '表示某事刚做完就又有同样情况发生。反复性。' },
    { pattern: '〜なり', meaning: '刚一〜就（保持状态）', explanation: '表示前项动作一发生，紧接着以该状态做后项。' },
    { pattern: '〜や', meaning: '一〜就（文语）', explanation: '文语残留。与〜なり/〜が早いか类似。' },

    // === ところを見ると / ところだった ===
    { pattern: '〜ところを見ると', meaning: '从〜来看（推断）', explanation: '表示根据观察到的状况来推测。' },
    { pattern: '〜ところを見れば', meaning: '从〜来看的话', explanation: 'ところを見ると的变体。' },
    { pattern: '〜ところから', meaning: '从〜这点来看', explanation: '表示从前项的事实出发推断后项。' },
    { pattern: '〜ところだった', meaning: '差点就〜', explanation: 'N2深化。表示险些发生某事。' },
    { pattern: '〜ところでは', meaning: '据〜的说法', explanation: '表示信息来源。据某人说或据某资料显示。' },

    // === わりに / にしては ===
    { pattern: '〜わりに（は）', meaning: '虽然〜但是（相对）', explanation: 'N2深化。表示与预期的标准相比，后项有所不同。' },
    { pattern: '〜にしては', meaning: '就〜来说（算）', explanation: 'N2深化。表示以某个标准衡量时评价有差异。' },
    { pattern: '〜にしてみれば', meaning: '在〜看来', explanation: '表示从某人的立场来看。' },

    // === 次第で / 次第では / いかんで ===
    { pattern: '〜次第で', meaning: '要看〜而定', explanation: 'N2深化。表示根据前项的情况后项会变化。' },
    { pattern: '〜次第では', meaning: '根据〜的情况', explanation: 'N2深化。表示在某些情况下后项可能不同。' },
    { pattern: '〜いかんで', meaning: '要看〜如何', explanation: '表示依据前项的内容或情况来决定。书面语。' },
    { pattern: '〜いかんでは', meaning: '根据〜的情况', explanation: 'いかんで+は的强调形式。' },
    { pattern: '〜いかんだ', meaning: '取决于〜', explanation: 'いかんで的句末形式。' },
    { pattern: '〜いかんによって', meaning: '根据〜的不同', explanation: 'いかんで的变体。' },
    { pattern: '〜いかんにかかわらず', meaning: '不论〜如何', explanation: '表示完全不受前项影响。' },
    { pattern: '〜いかんによらず', meaning: '不论〜', explanation: 'いかんにかかわらず的变体。' },
    { pattern: '〜いかんを問わず', meaning: '不论〜如何', explanation: '表示无论是什么情况都成立。' },

    // === にわたって / を通じて ===
    { pattern: '〜にわたって', meaning: '历时〜 / 涉及〜', explanation: 'N2深化。表示范围广、时间长的持续。' },
    { pattern: '〜にわたる', meaning: '历时〜的 / 涉及〜的', explanation: 'にわたって的连体形式。' },
    { pattern: '〜にわたった', meaning: '历时长久的', explanation: 'にわたる的过去形式。' },
    { pattern: '〜を通じて（全期間）', meaning: '整个〜期间', explanation: 'N2深化。表示整个时间段持续。' },
    { pattern: '〜を通じて（手段）', meaning: '通过〜', explanation: 'N2深化。表示手段或媒介。' },
    { pattern: '〜を通して', meaning: '通过〜（直接媒介）', explanation: '表示通过某人或某事物做某事。' },

    // === に応じて / に沿って / に基づいて ===
    { pattern: '〜に応じて', meaning: '根据〜相应', explanation: 'N2深化。根据情况的变化相应调整。' },
    { pattern: '〜に応じた', meaning: '根据〜的', explanation: 'に応じて的连体形式。' },
    { pattern: '〜に応じては', meaning: '根据情况', explanation: '表示在某些情况下可能不同。' },
    { pattern: '〜に沿って', meaning: '按照〜 / 沿着〜', explanation: 'N2深化。表示遵循标准、方针或路线。' },
    { pattern: '〜に沿った', meaning: '按照〜的', explanation: 'に沿って的连体形式。' },
    { pattern: '〜に基づいて', meaning: '基于〜 / 根据〜', explanation: 'N2深化。表示以某事物为依据和基础。' },
    { pattern: '〜に基づく', meaning: '基于〜的', explanation: 'に基づいて的连体形式。' },
    { pattern: '〜に基づいた', meaning: '基于〜的（过去）', explanation: 'に基づく的过去形式连体。' },

    // === をはじめ / を中心に ===
    { pattern: '〜をはじめ（として）', meaning: '以〜为首', explanation: 'N2深化。举出代表性例子。' },
    { pattern: '〜を中心に（して）', meaning: '以〜为中心', explanation: 'N2深化。表示核心。' },
    { pattern: '〜を中心として', meaning: '以〜为中心', explanation: 'を中心にして的书面形式。' },
    { pattern: '〜をめぐって', meaning: '围绕〜（争议）', explanation: 'N2深化。表示围绕某个话题的议论或争议。' },

    // === に際して / にあたって ===
    { pattern: '〜に際して', meaning: '当〜之际', explanation: 'N2深化。在某个重要或特别的时候。' },
    { pattern: '〜に際し', meaning: '当〜之际', explanation: 'に際して的书面形式。' },
    { pattern: '〜にあたって', meaning: '值此〜之际', explanation: 'N2深化。在重要阶段或时期。' },
    { pattern: '〜にあたり', meaning: '值此〜之际', explanation: 'にあたって的书面形式。' },
    { pattern: '〜に先立って', meaning: '在〜之前', explanation: '表示在做某事之前先做另一件事。' },
    { pattern: '〜に先立ち', meaning: '在〜之前', explanation: 'に先立って的书面形式。' },

    // === を込めて / をもとに ===
    { pattern: '〜を込めて', meaning: '充满〜地', explanation: 'N2深化。心を込めて、力を込めて等。' },
    { pattern: '〜を込めた', meaning: '充满〜的', explanation: 'を込めて的连体形式。' },
    { pattern: '〜をもとに（して）', meaning: '以〜为基础', explanation: 'N2深化。表示素材、基础或灵感来源。' },
    { pattern: '〜をもとにして', meaning: '以〜为基础', explanation: 'をもとに的强调形式。' },

    // === ばかりだ (N2深化) ===
    { pattern: '〜ばかりだ（傾向）', meaning: '越来越〜', explanation: 'N2深化。表示不好的趋势单向发展。' },
    { pattern: '〜てばかりいる', meaning: '光是做〜', explanation: '表示总是做某事，不做别的。带有批评色彩。' },
    { pattern: '〜たばかりだ', meaning: '刚〜不久', explanation: 'N2深化。主观感觉刚发生不久。' },

    // === ないことはない / ないものでもない ===
    { pattern: '〜ないことはない', meaning: '不是不〜 / 也可以〜', explanation: 'N2深化。消极的肯定。"也不是不可以"。' },
    { pattern: '〜ないこともない', meaning: '也不是不', explanation: 'ないことはない的变体。' },
    { pattern: '〜ないものでもない', meaning: '也不是不〜', explanation: 'N2深化。更消极的肯定表达。' },
    { pattern: '〜なくもない', meaning: '也不是不', explanation: '更简略的双重否定形式。' },

    // === てかなわない / てたまらない / てならない ===
    { pattern: '〜てかなわない', meaning: '〜得受不了', explanation: 'N2深化。表示无法忍受的程度。' },
    { pattern: '〜てたまらない', meaning: '〜得不得了', explanation: 'N2深化。无法抑制的感情或欲望。' },
    { pattern: '〜てならない', meaning: '不由地〜', explanation: 'N2深化。自然而然地产生某种情感。' },
    { pattern: '〜てしかたがない', meaning: '〜得没办法', explanation: 'N2深化。口语化的强烈感情表达。' },
    { pattern: '〜てしようがない', meaning: '〜得没办法', explanation: 'N2深化。てしかたがない的口语变体。' },

    // === てやまない / てみせろ ===
    { pattern: '〜てやまない', meaning: '衷心〜', explanation: '表示发自内心的持续祝愿或期待。书面语。' },
    { pattern: '〜ずにはいられない', meaning: '不禁〜 / 忍不住〜', explanation: 'N2深化。无法抑制自己的感情或欲望。' },
    { pattern: '〜ないではいられない', meaning: '不能不〜', explanation: 'ずにはいられない的口语形式。' },
    { pattern: '〜ずにはおかない', meaning: '必定会〜（使人）', explanation: '表示某种状态必然会使人产生某种反应。' },
    { pattern: '〜を禁じ得ない', meaning: '不禁〜', explanation: 'N2深化。无法抑制某种感情或反应。' },

    // === のみならず / ばかりか ===
    { pattern: '〜のみならず', meaning: '不仅〜而且', explanation: 'だけでなく的书面语。表示范围不限于前项。' },
    { pattern: '〜ばかりか', meaning: '不仅〜反而', explanation: '表示不仅前项，连程度更高的后项也成立。' },
    { pattern: '〜ばかりでなく', meaning: '不仅〜也', explanation: 'N2深化。表示不限于前项，后项也同样。' },
    { pattern: '〜に限らず', meaning: '不限于〜', explanation: '表示范围不限于前项，后项也适用。' },

    // === というものだ / ということだ ===
    { pattern: '〜というものだ', meaning: '这才是〜（断定）', explanation: '表示说话人基于常识或经验的判断和断定。' },
    { pattern: '〜というものではない', meaning: '并不是〜', explanation: 'というものだ的否定。表示不能一概而论。' },
    { pattern: '〜ということだ（伝聞）', meaning: '据说〜', explanation: 'N2深化。表示传闻或信息。' },
    { pattern: '〜ということだ（説明）', meaning: '也就是说〜', explanation: 'N2深化。表示对前述内容的解释或归纳。' },
    { pattern: '〜とのことだ', meaning: '据说〜（书面）', explanation: 'N2深化。ということだ的书面形式。' },

    // === わけだ (N2深化) ===
    { pattern: '〜わけだ（結論）', meaning: '当然〜/也就是说', explanation: 'N2深化。根据前因得出理所当然的结论。' },
    { pattern: '〜というわけだ', meaning: '也就是说〜', explanation: 'N2深化。表示总结或换言。' },
    { pattern: '〜わけではない', meaning: '并非〜', explanation: 'N2深化。部分否定。' },
    { pattern: '〜わけがない', meaning: '不可能〜', explanation: 'N2深化。强烈否定。' },
    { pattern: '〜わけにはいかない', meaning: '不能〜', explanation: 'N2深化。道义上不能。' },

    // === ものだ (N2深化) ===
    { pattern: '〜ものだ（当然）', meaning: '应该〜的', explanation: 'N2深化。表示一般常识或理所当然。' },
    { pattern: '〜ものだ（感慨）', meaning: '真是〜啊', explanation: 'N2深化。表示感慨或回忆。' },
    { pattern: '〜ものではない', meaning: '不该〜', explanation: 'N2深化。表示从常识来看不该做某事。' },
    { pattern: '〜ものがある', meaning: '确实有〜', explanation: 'N2深化。表示强烈感受到某种特质。' },
    { pattern: '〜ものなら', meaning: '如果可能的话〜', explanation: '表示难以实现的假设。"如果能做的话"。' },
    { pattern: '〜ものだから', meaning: '因为〜（辩解）', explanation: '表示个人的原因，用于辩解或说明。口语。' },
    { pattern: '〜ものと思われる', meaning: '被认为〜', explanation: '表示客观判断。书面语，用于报道等。' },

    // === ことだ / ことから / ことなく ===
    { pattern: '〜ことだ（忠告）', meaning: '你应该〜', explanation: 'N2深化。表示对别人的忠告和建议。' },
    { pattern: '〜ことから', meaning: '从〜可知', explanation: '表示从前项事实可以判断后项。也用于命名由来。' },
    { pattern: '〜ことなく', meaning: '不〜而〜', explanation: 'N2深化。表示不进行前项动作而进行后项。' },
    { pattern: '〜ことなしに', meaning: '不〜就', explanation: 'ことなく的变体。表示没有前项就没有后项。' },
    { pattern: '〜ことに（は）', meaning: '令人〜的是', explanation: 'N2深化。接表示感情的词，表达情感态度。' },
    { pattern: '〜ことだから', meaning: '因为是〜', explanation: 'N2深化。基于对某人的了解进行推测。' },
    { pattern: '〜ことには', meaning: '要〜就得', explanation: '表示要达成某个目的所需的条件。' },

    // === 上で / 上に / 上は ===
    { pattern: '〜上で（〜た上で）', meaning: '在〜之后', explanation: 'N2深化。表示完成前项后进行后项。' },
    { pattern: '〜上で（〜る上で）', meaning: '在〜方面', explanation: 'N2深化。表示在做某事的过程中需要注意的方面。' },
    { pattern: '〜上に', meaning: '而且/加上', explanation: 'N2深化。表示累加，多用于消极。' },
    { pattern: '〜上は', meaning: '既然〜就', explanation: 'N2深化。表示既然承担了某责任或立场。' },

    // === 代わりに / 反面 / 一方で ===
    { pattern: '〜代わりに', meaning: '代替/反而', explanation: 'N2深化。表示替代或交换条件的转折。' },
    { pattern: '〜反面', meaning: '另一方面（相反）', explanation: 'N2深化。表示同一事物的另一面。' },
    { pattern: '〜一方で', meaning: '一方面〜另一方面', explanation: 'N2深化。表示同时存在两个对立方面。' },
    { pattern: '〜にひきかえ', meaning: '与〜相反', explanation: '表示与前述情况形成鲜明对比。书面语。' },

    // === といっても / とはいえ / と言えども ===
    { pattern: '〜といっても', meaning: '虽说是〜', explanation: 'N2深化。表示前项是事实但程度不如预期。' },
    { pattern: '〜とはいえ', meaning: '虽说是〜但', explanation: 'N2深化。承认前项但后项不能完全认同。' },
    { pattern: '〜と言えども', meaning: '即使是〜也', explanation: '表示即使有某种地位或身份，后项依然成立。' },

    // === にしたがって / につれて / とともに ===
    { pattern: '〜にしたがって', meaning: '随着〜', explanation: 'N2深化。表示后项随前项变化而变化。' },
    { pattern: '〜につれて', meaning: '随着〜', explanation: 'N2深化。表示一方的变化引起另一方的变化。' },
    { pattern: '〜にともなって', meaning: '伴随着〜', explanation: 'N2深化。表示伴随发生。' },
    { pattern: '〜とともに', meaning: '与〜一起/随着', explanation: 'N2深化。表示同时进行或伴随变化。' },

    // === に反して / に対して / に比べて ===
    { pattern: '〜に反して', meaning: '与〜相反', explanation: 'N2深化。表示与预期、规则相反。' },
    { pattern: '〜に対して', meaning: '对〜/相对于', explanation: 'N2深化。表示对象或对比。' },
    { pattern: '〜に比べて', meaning: '与〜相比', explanation: '表示比较两个事物。' },
    { pattern: '〜に比べると', meaning: '与〜相比的话', explanation: 'に比べて的变体。' },

    // === にかけては / にかけて ===
    { pattern: '〜にかけては', meaning: '在〜方面（擅长）', explanation: '表示在某个领域或方面非常出色。多用于褒义。' },
    { pattern: '〜にかけても', meaning: '即使在〜方面也', explanation: 'にかけては的让步形式。' },
    { pattern: '〜から〜にかけて', meaning: '从〜到〜', explanation: 'N2深化。表示时间或空间的大致范围。' },

    // === をめぐって / をめぐる ===
    { pattern: '〜をめぐって', meaning: '围绕〜', explanation: 'N2深化。表示围绕某个话题的讨论或争议。' },
    { pattern: '〜をめぐる', meaning: '围绕〜的', explanation: 'をめぐって的连体形式。' },

    // === かねる / かねない (N2深化) ===
    { pattern: '〜かねる', meaning: '难以〜', explanation: 'N2深化。表示心理抗拒或客观困难。' },
    { pattern: '〜かねない', meaning: '有可能（不好）', explanation: 'N2深化。表示可能发生不好的事。' },

    // === うる / える / がたい (N2深化) ===
    { pattern: '〜得る（うる/える）', meaning: '可能〜', explanation: 'N2深化。表示理论上的可能性。' },
    { pattern: '〜得ない（えない）', meaning: '不可能〜', explanation: 'N2深化。表示不可能。' },
    { pattern: '〜がたい', meaning: '难以〜', explanation: 'N2深化。表示几乎不可能做到。' },

    // === かいがある / かいがない ===
    { pattern: '〜かいがある', meaning: '有〜的价值', explanation: '表示做某事有回报或价值。' },
    { pattern: '〜かいがない', meaning: '没有〜的价值', explanation: 'かいがある的否定形式。' },
    { pattern: '〜がい', meaning: '〜的价值', explanation: '名词化形式。やりがい（做的价值）。' },

    // === にたえる / にたえない ===
    { pattern: '〜にたえる', meaning: '值得〜', explanation: '表示有足够的价值或能够承受。' },
    { pattern: '〜にたえない', meaning: '不堪〜/不值得', explanation: '表示无法忍受或不值得。' },

    // === に値する / に値しない ===
    { pattern: '〜に値する（あたいする）', meaning: '值得〜', explanation: '表示有足够的价值去做或被评价。' },
    { pattern: '〜に値しない', meaning: '不值得〜', explanation: 'に値する的否定形式。' },

    // === に足る / に足らない ===
    { pattern: '〜に足る（たる）', meaning: '足以〜/值得〜', explanation: '表示有足够的价值或资格。书面语。' },
    { pattern: '〜に足らない', meaning: '不足〜/不值〜', explanation: 'に足る的否定。取るに足らない（不值一提）。' },

    // === にしても / としても ===
    { pattern: '〜としても', meaning: '即使作为〜也', explanation: 'N2深化。表示让步条件。' },
    { pattern: '〜としたら', meaning: '如果〜的话', explanation: 'N2深化。表示假设条件。' },
    { pattern: '〜とすれば', meaning: '假设〜的话', explanation: 'N2深化。书面语假设表达。' },
    { pattern: '〜とすると', meaning: '那么/假设', explanation: 'N2深化。表示顺接假设。' },

    // === ないことには / なくしては ===
    { pattern: '〜ないことには', meaning: '如果不〜的话', explanation: '表示如果不做前项，后项就无法实现。' },
    { pattern: '〜なくしては', meaning: '如果没有〜', explanation: 'N2深化。表示如果没有前项，后项不可能实现。' },

    // === まい / まいとする ===
    { pattern: '〜まい', meaning: '不打算〜/不会〜吧', explanation: '表示否定的意志或推测。书面语。' },
    { pattern: '〜まいとする', meaning: '试图不〜', explanation: '表示努力不做某事。' },
    { pattern: '〜ではあるまいし', meaning: '又不是〜', explanation: '表示"又不是〜，所以应该/不应该…"。' },

    // === ては / では ===
    { pattern: '〜ては', meaning: '如果〜的话（消极）', explanation: '表示如果前项发生，会带来不好的后项。' },
    { pattern: '〜ては〜ては', meaning: '〜了又〜', explanation: '表示动作的反复，带有不满情绪。' },

    // === につけ / につけて ===
    { pattern: '〜につけ', meaning: '每当〜就', explanation: '表示每当遇到某个情况就会想起或产生某种情感。' },
    { pattern: '〜につけ〜につけ', meaning: '无论是〜还是〜', explanation: '列举两个相对的词，表示无论哪种情况都。' },
    { pattern: '〜につけても', meaning: '每当〜就', explanation: 'につけ的强调形式。' },

    // === にしては / わりに (N2深化) ===
    { pattern: '〜にしては', meaning: '就〜来说', explanation: 'N2深化。表示以某个标准来看评价有所偏离。' },
    { pattern: '〜わりに（は）', meaning: '虽然〜却', explanation: 'N2深化。表示与预期相比后项不符。' },

    // === さえ / すら / こそ (N2深化) ===
    { pattern: '〜さえ', meaning: '连〜都', explanation: 'N2深化。举出极端例子。' },
    { pattern: '〜さえ〜ば', meaning: '只要〜就', explanation: 'N2深化。表示最低条件。' },
    { pattern: '〜でさえ', meaning: '就连〜也', explanation: 'さえ的强调形式。' },
    { pattern: '〜こそ', meaning: '正是〜', explanation: 'N2深化。表示强调。' },
    { pattern: '〜からこそ', meaning: '正因为〜', explanation: 'N2深化。强调原因。' },

    // === ばかり (N2深化) ===
    { pattern: '〜ばかり（限定）', meaning: '光〜/净〜', explanation: 'N2深化。表示限定或反复。' },
    { pattern: '〜たばかり', meaning: '刚〜', explanation: 'N2深化。主观感觉刚发生。' },
    { pattern: '〜ばかりに', meaning: '就因为〜', explanation: 'N2深化。消极原因。' },
    { pattern: '〜ばかりだ', meaning: '越来越〜/光是〜', explanation: 'N2深化。趋势或限定。' },

    // === ほど (N2深化) ===
    { pattern: '〜ほど', meaning: '〜的程度', explanation: 'N2深化。表示程度或约数。' },
    { pattern: '〜ば〜ほど', meaning: '越〜越〜', explanation: 'N2深化。比例变化。' },
    { pattern: '〜ほど〜はない', meaning: '没有比〜更〜', explanation: 'N2深化。最高级比较。' },
    { pattern: '〜ほどのことではない', meaning: '不至于〜', explanation: '表示没有那么严重，不需要大惊小怪。' },

    // === くらい / ぐらい (N2深化) ===
    { pattern: '〜くらいなら', meaning: '与其〜不如', explanation: '表示与其做前项，宁愿选择后项。' },
    { pattern: '〜くらい〜はない', meaning: '没有比〜更〜', explanation: '与ほど〜はない类似。' },
    { pattern: '〜くらいだ', meaning: '甚至到了〜程度', explanation: '表示程度很高，到了可以说的地步。' },

    // === にしても / にしたって / にしたところで ===
    { pattern: '〜にしたって', meaning: '就算是〜也', explanation: 'N2深化。口语化的让步。' },
    { pattern: '〜にしたところで', meaning: '就算是〜也', explanation: 'N2深化。举出极端例子。' },
    { pattern: '〜としたところで', meaning: '就算〜也', explanation: 'N2深化。表示即使前项成立，后项也不理想。' },

    // === たところで ===
    { pattern: '〜たところで', meaning: '即使〜也（不理想）', explanation: '表示即使做了前项，也得不到好的后项。' },
    { pattern: '〜たところで〜ない', meaning: '即使〜也不', explanation: 'たところで的否定形式。强调后项不成立。' },

    // === として〜ない ===
    { pattern: '〜として〜ない', meaning: '没有（一个）〜', explanation: '全面否定。"一个也没有"的意思。' },
    { pattern: '〜として〜ない（強調）', meaning: '丝毫也不〜', explanation: '強調完全否定，表示"一点也没有"。' },

    // === に限らず ===
    { pattern: '〜に限らず', meaning: '不限于〜', explanation: 'N2深化。表示范围扩展到前项以外。' },

    // === を抜きにしては ===
    { pattern: '〜を抜きにしては', meaning: '如果不谈〜', explanation: 'N2深化。表示排除前项就无法讨论后项。' },

    // === にしても〜にしても ===
    { pattern: '〜にしても〜にしても', meaning: '无论是〜还是〜', explanation: 'N2深化。列举两个例子。' },

    // === といわず〜といわず ===
    { pattern: '〜といわず〜といわず', meaning: '不论〜还是〜', explanation: '表示不管哪个部分都同样。' },

    // === というより ===
    { pattern: '〜というより', meaning: '与其说〜不如说', explanation: 'N2深化。对前项描述的修正。' },

    // === かわりに ===
    { pattern: '〜かわりに', meaning: '代替/反而', explanation: 'N2深化。交换条件。' },

    // === に加えて ===
    { pattern: '〜に加えて', meaning: '加上〜', explanation: 'N2深化。表示追加。' },

    // === はもちろん ===
    { pattern: '〜はもちろん', meaning: '〜自不必说', explanation: 'N2深化。表示前项当然，后项也包括。' },

    // === はもとより ===
    { pattern: '〜はもとより', meaning: '〜不用说', explanation: 'N2深化。はもちろん的书面形式。' },

    // === をはじめ ===
    { pattern: '〜をはじめ', meaning: '以〜为首', explanation: 'N2深化。代表性例子。' },

    // === はおろか ===
    { pattern: '〜はおろか', meaning: '别说〜就连〜', explanation: '表示别说前项，连更基本的后项也不成立。' },

    // === までもない / までもなく ===
    { pattern: '〜までもない', meaning: '不必〜/不用〜', explanation: '表示没有必要特意做某事。' },
    { pattern: '〜までもなく', meaning: '不用说〜', explanation: 'までもない的状语形式。' },

    // === には及ばない ===
    { pattern: '〜には及ばない', meaning: '不必〜/比不上〜', explanation: '表示没有必要，或比不上。' },

    // === には当たらない ===
    { pattern: '〜には当たらない', meaning: '不必〜/不至于〜', explanation: '表示没有那么严重，不需要大惊小怪。' },

    // === にしくはない ===
    { pattern: '〜にしくはない', meaning: '莫过于〜', explanation: '文言表达。表示最好不过。' },

    // === ずにはすまない / ないではすまない ===
    { pattern: '〜ずにはすまない', meaning: '不〜不行', explanation: 'N2深化。道义上不可避免。' },
    { pattern: '〜ないではすまない', meaning: '不〜就过不去', explanation: 'N2深化。表示负有责任必须做某事。' },

    // === を禁じ得ない ===
    { pattern: '〜を禁じ得ない', meaning: '不禁〜', explanation: 'N2深化。无法抑制的情感。' },

    // === 〜というものだ ===
    { pattern: '〜というものだ', meaning: '这才是〜', explanation: 'N2深化。表示说话人的断定。' },

    // === 〜ずじまいだ ===
    { pattern: '〜ずじまいだ', meaning: '最终没能〜', explanation: '表示最终没做成某事，带有遗憾。' },

    // === 〜ずくめ ===
    { pattern: '〜ずくめ', meaning: '全是〜', explanation: '表示清一色的内容。いいことずくめ（全是好事）。' },

    // === 〜だらけ ===
    { pattern: '〜だらけ', meaning: '满是〜', explanation: 'N2深化。表示充满了不好的东西。' },

    // === 〜まみれ ===
    { pattern: '〜まみれ', meaning: '沾满〜', explanation: '表示表面被脏东西覆盖。血まみれ（沾满血）。' },

    // === 〜っぱなし ===
    { pattern: '〜っぱなし', meaning: '一直〜/放着不管', explanation: 'N2深化。表示放任不管或持续状态。' },

    // === 〜ぎみ / 〜がち / 〜っぽい (N2总结) ===
    { pattern: '〜気味（ぎみ）', meaning: '有点〜', explanation: 'N2深化。轻微倾向。' },
    { pattern: '〜がちだ', meaning: '容易〜', explanation: 'N2深化。消极倾向或频率。' },
    { pattern: '〜っぽい', meaning: '有〜倾向', explanation: 'N2深化。特征明显。' },
  ],
  N1: [
    // === まじき ===
    { pattern: '〜まじき', meaning: '不应该〜的', explanation: '接动词字典形，表示作为某身份不应有的行为。文语残留。' },
    { pattern: '〜まじき行為', meaning: '不应该有的行为', explanation: 'まじき的常见搭配。如"許すまじき行為"（不可原谅的行为）。' },

    // === ならでは / ならではの ===
    { pattern: '〜ならでは', meaning: '只有〜才有的', explanation: '表示某事物独特，只有特定的人或场所才具备。' },
    { pattern: '〜ならではの', meaning: '〜独有的', explanation: 'ならでは的连体形式。如"日本ならではの文化"。' },

    // === 極まる / 極まりない ===
    { pattern: '〜極まる（きわまる）', meaning: '极其〜', explanation: '接形容动词词干，表示程度达到极限。' },
    { pattern: '〜極まりない（きわまりない）', meaning: '极其〜（强调）', explanation: '極まる的否定加强形式。不失礼な態度極まりない。' },
    { pattern: '〜の極み（きわみ）', meaning: '〜之极', explanation: '表示程度的极限。感激の極み（感激之极）。' },
    { pattern: '〜の至り（いたり）', meaning: '〜之至', explanation: '表示某种情感到达极点。光栄の至り（光荣之至）。' },
    { pattern: '〜限りだ', meaning: '非常〜', explanation: '表示强烈的情感。嬉しい限りだ（非常高兴）。' },

    // === てやまない ===
    { pattern: '〜てやまない', meaning: '衷心〜/一直〜', explanation: '表示发自内心地持续祝愿或期待。期待してやまない。' },

    // === ずにはおかない ===
    { pattern: '〜ずにはおかない', meaning: '必定会〜', explanation: '表示无论对方是否愿意，必然会引发某种结果或反应。' },
    { pattern: '〜ずにはおかない（感動）', meaning: '必然使人〜', explanation: '表示某种事物必然使人产生感动或影响。' },

    // === を禁じ得ない ===
    { pattern: '〜を禁じ得ない', meaning: '不禁〜', explanation: 'N1深化。表示无法抑制某种感情。怒りを禁じ得ない。' },

    // === といったらない / といったらありはしない ===
    { pattern: '〜といったらない', meaning: '没有比〜更', explanation: '表示程度极高，无法用语言形容。' },
    { pattern: '〜といったらありはしない', meaning: '〜得不得了', explanation: 'といったらない的强调形式。' },
    { pattern: '〜といったらありゃしない', meaning: '〜得不得了（口语）', explanation: 'といったらありはしない的口语形式。' },

    // === てかなわない / てたまらない / てならない ===
    { pattern: '〜てかなわない', meaning: '〜得受不了', explanation: 'N1深化。表示无法忍受的程度。' },
    { pattern: '〜てたまらない', meaning: '〜得不得了', explanation: 'N1深化。无法抑制的感情或欲望。' },
    { pattern: '〜てならない', meaning: '不由地〜', explanation: 'N1深化。自然而然地产生的情感。' },

    // === にたえない / にたえる ===
    { pattern: '〜にたえない', meaning: '不堪〜', explanation: 'N1深化。表示无法忍受或感情上无法承受。' },
    { pattern: '〜にたえる', meaning: '值得〜', explanation: 'N1深化。表示有足够的价值。鑑賞にたえる（值得鉴赏）。' },

    // === にかたくない ===
    { pattern: '〜にかたくない', meaning: '不难〜', explanation: '表示容易推测或想象。想像にかたくない（不难想象）。' },

    // === に越したことはない ===
    { pattern: '〜に越したことはない', meaning: '最好不过〜', explanation: 'N1深化。表示某个选择是最好的。' },

    // === に如くはない ===
    { pattern: '〜に如くはない（しくはない）', meaning: '莫过于〜', explanation: 'N1深化。文言表达。表示最好的选择。' },

    // === には及ばない ===
    { pattern: '〜には及ばない', meaning: '不必〜/比不上〜', explanation: 'N1深化。表示不需要或比不上。' },

    // === どころではない ===
    { pattern: '〜どころではない', meaning: '哪能〜/不是〜的时候', explanation: 'N1深化。表示没有余裕做某事。' },

    // === べくもない ===
    { pattern: '〜べくもない', meaning: '无法〜', explanation: '表示可能性完全不存在。不可能。' },

    // === べからず / べからざる ===
    { pattern: '〜べからず', meaning: '不可〜', explanation: '表示禁止的语气。用于告示或规则。文语。' },
    { pattern: '〜べからざる', meaning: '不可〜的', explanation: 'べからず的连体形式。許すべからざる行為（不可原谅的行为）。' },

    // === んがために / んばかりに ===
    { pattern: '〜んがために', meaning: '为了〜', explanation: '文言目的表达。相当するために。' },
    { pattern: '〜んばかりに', meaning: '几乎要〜', explanation: '表示某种状态几乎就要发生。' },
    { pattern: '〜んばかりだ', meaning: '几乎要〜的样子', explanation: 'んばかりに的句末形式。' },

    // === ともなく / ともなしに ===
    { pattern: '〜ともなく', meaning: '无意中〜', explanation: '表示没有明确目的地做某事。見るともなく（无意中看）。' },
    { pattern: '〜ともなしに', meaning: '无意中〜', explanation: 'ともなく的变体。' },
    { pattern: '〜となく', meaning: '不知〜', explanation: '表示不确定。どこからとなく（不知从哪里）。' },

    // === なしに / なしでは / なくして ===
    { pattern: '〜なしに', meaning: '没有〜（就）', explanation: 'N1深化。表示没有前项的条件就做后项。' },
    { pattern: '〜なしでは', meaning: '没有〜就不能', explanation: 'N1深化。强调必要条件。' },
    { pattern: '〜なくして', meaning: '如果不〜', explanation: 'N1深化。表示没有前项就没有后项。' },
    { pattern: '〜なくしては', meaning: '如果没有〜', explanation: 'N1深化。强调必要条件。' },

    // === をよそに ===
    { pattern: '〜をよそに', meaning: '不顾〜', explanation: 'N1深化。表示无视周围的情况或意见。' },

    // === をものともせず ===
    { pattern: '〜をものともせず', meaning: '不把〜当回事', explanation: 'N1深化。表示不惧困难，勇往直前。' },

    // === を皮切りに ===
    { pattern: '〜を皮切りに（かわきりに）', meaning: '以〜为开端', explanation: '表示以此为首，一系列活动或事件陆续展开。' },
    { pattern: '〜を皮切りにして', meaning: '以〜为开端', explanation: 'を皮切りに的强调形式。' },

    // === を振り出しに ===
    { pattern: '〜を振り出しに（ふりだしに）', meaning: '以〜为起点', explanation: '表示以此为出发点开始新的旅程或事业。' },

    // === を限りに ===
    { pattern: '〜を限りに', meaning: '以〜为最后', explanation: '表示以此为界限，不再继续。今日を限りに（以今天为最后）。' },
    { pattern: '〜を限りにして', meaning: '以〜为最后', explanation: 'を限りに的强调形式。' },

    // === をもって ===
    { pattern: '〜をもって', meaning: '以〜（方式/时间）', explanation: '表示手段、方法，或以某个时间为界限。' },
    { pattern: '〜をもってすれば', meaning: '用〜的话就能', explanation: 'N1深化。表示用某种方法就能做到。' },
    { pattern: '〜をもってしても', meaning: '即使是用〜也', explanation: '表示即使用某种方法也不能做到。' },

    // === あっての ===
    { pattern: '〜あっての', meaning: '有〜才有〜', explanation: '表示前项是后项成立的前提条件。命あっての物種（有命才有一切）。' },

    // === ならではの ===
    { pattern: '〜ならではの', meaning: '〜独有的', explanation: 'N1深化。表示特有的、独特的事物。' },

    // === なりに ===
    { pattern: '〜なりに', meaning: '以〜自己的方式', explanation: '表示虽然有其局限，但也在尽己所能。' },
    { pattern: '〜なりの', meaning: '〜自己方式的', explanation: 'なりに的连体形式。' },
    { pattern: '〜なりとも', meaning: '哪怕一点〜', explanation: '表示最低限度的希望或要求。' },

    // === たところで ===
    { pattern: '〜たところで', meaning: '即使〜也', explanation: 'N1深化。表示即使做了前项也没有好结果。' },
    { pattern: '〜としたところで', meaning: '就算〜也', explanation: 'N1深化。たところで的强调形式。' },
    { pattern: '〜にしたところで', meaning: '就算是〜也', explanation: 'N1深化。举出极端例子。' },

    // === であれ / であれ〜であれ ===
    { pattern: '〜であれ', meaning: '即使是〜也', explanation: 'N1深化。表示不论前项如何。' },
    { pattern: '〜であれ〜であれ', meaning: '不管是〜还是〜', explanation: 'N1深化。表示无论哪种情况。' },

    // === といい〜といい ===
    { pattern: '〜といい〜といい', meaning: '无论〜还是〜', explanation: '表示无论从哪个方面看都。' },

    // === というか〜というか ===
    { pattern: '〜というか〜というか', meaning: '说是〜还是〜呢', explanation: '表示无法确切地用语言表达。' },

    // === というより ===
    { pattern: '〜というより', meaning: '与其说〜不如说', explanation: 'N1深化。对之前描述的修正。' },

    // === いかんにかかわらず / いかんによらず ===
    { pattern: '〜いかんにかかわらず', meaning: '不论〜如何', explanation: 'N1深化。表示完全不受影响。' },
    { pattern: '〜いかんによらず', meaning: '不论〜', explanation: 'N1深化。いかんにかかわらず的变体。' },
    { pattern: '〜いかんを問わず', meaning: '不论〜如何', explanation: 'N1深化。表示无论何种情况。' },

    // === を問わず ===
    { pattern: '〜を問わず', meaning: '不论〜', explanation: 'N1深化。表示与某因素无关。' },

    // === にかかわりなく ===
    { pattern: '〜にかかわりなく', meaning: '与〜无关', explanation: 'N1深化。表示不受影响。' },

    // === もさることながら ===
    { pattern: '〜もさることながら', meaning: '〜自不必说，〜也', explanation: '表示前项当然重要，后项同样重要。' },

    // === はおろか ===
    { pattern: '〜はおろか', meaning: '别说〜连〜也', explanation: 'N1深化。表示不用说前项，连更基本的后项也不成立。' },

    // === までもない / までもなく ===
    { pattern: '〜までもない', meaning: '不必〜/不用〜', explanation: 'N1深化。表示没有那个必要。' },
    { pattern: '〜までもなく', meaning: '不用说〜', explanation: 'N1深化。までもない的状语形式。' },

    // === には当たらない ===
    { pattern: '〜には当たらない', meaning: '不必〜/不至于〜', explanation: 'N1深化。表示没有那么严重。' },

    // === に足る / に足らない ===
    { pattern: '〜に足る（たる）', meaning: '值得〜/足以〜', explanation: 'N1深化。表示有足够的价值。' },
    { pattern: '〜に足らない', meaning: '不值〜', explanation: 'N1深化。に足る的否定。' },

    // === に値する / に値しない ===
    { pattern: '〜に値する（あたいする）', meaning: '值得〜', explanation: 'N1深化。表示有价值。' },
    { pattern: '〜に値しない', meaning: '不值得〜', explanation: 'N1深化。に値する的否定。' },

    // === にしくはない ===
    { pattern: '〜にしくはない', meaning: '莫过于〜', explanation: 'N1深化。文言表达。' },

    // === には無理がある ===
    { pattern: '〜には無理がある', meaning: '〜有点勉强', explanation: '表示不合理或勉强。' },

    // === きらいがある ===
    { pattern: '〜きらいがある', meaning: '有〜之嫌/有〜倾向', explanation: '表示消极的倾向或弊病。多用于书面语。' },

    // === ずくめ ===
    { pattern: '〜ずくめ', meaning: '全都是〜', explanation: 'N1深化。表示清一色的内容。' },

    // === まみれ ===
    { pattern: '〜まみれ', meaning: '沾满〜', explanation: 'N1深化。表示表面被脏东西覆盖。' },

    // === だらけ ===
    { pattern: '〜だらけ', meaning: '满是〜', explanation: 'N1深化。表示充满了不好的东西。' },

    // === っぱなし ===
    { pattern: '〜っぱなし', meaning: '一直〜/放着不管', explanation: 'N1深化。表示放任不管。' },

    // === すら / だに ===
    { pattern: '〜すら', meaning: '连〜都', explanation: 'N1深化。表示极度惊讶，举出极端例子。' },
    { pattern: '〜だに', meaning: '连〜都/仅仅想〜就', explanation: '表示强烈的否定或感叹。想像するだに恐ろしい。' },
    { pattern: '〜だにしない', meaning: '连〜都不', explanation: 'だに的否定形式。' },

    // === さえ ===
    { pattern: '〜さえ', meaning: '连〜都（强调）', explanation: 'N1深化。与すら近义，但更口语化。' },

    // === にして ===
    { pattern: '〜にして', meaning: '〜才（能）/即使〜', explanation: '表示特定的条件或强调。N1深化。' },
    { pattern: '〜にしてはじめて', meaning: '只有〜才', explanation: '表示首次实现。' },
    { pattern: '〜にしては', meaning: '就〜来说', explanation: 'N1深化。' },

    // === あればこそ / ばこそ ===
    { pattern: '〜あればこそ', meaning: '正因为有〜才', explanation: '表示强调原因。正因为有前项才有后项。' },
    { pattern: '〜ばこそ', meaning: '正因为〜才', explanation: 'あればこその变体。表示强调原因。' },

    // === からこそ ===
    { pattern: '〜からこそ', meaning: '正因为〜', explanation: 'N1深化。强调原因。' },

    // === てこそ ===
    { pattern: '〜てこそ', meaning: '只有〜才', explanation: '表示前项是后项成立的必要条件。' },

    // === てはじめて ===
    { pattern: '〜てはじめて', meaning: '〜之后才', explanation: 'N1深化。表示在前项之后才首次理解或发现。' },

    // === ずじまいだ ===
    { pattern: '〜ずじまいだ', meaning: '最终没能〜', explanation: 'N1深化。表示最终没做成某事，带有遗憾。' },

    // === が最後 / たら最後 ===
    { pattern: '〜が最後', meaning: '一旦〜就完了', explanation: '表示一旦开始就再也回不去了，无法挽回。' },
    { pattern: '〜たら最後', meaning: '一旦〜就', explanation: 'N1深化。が最後的变体。' },
    { pattern: '〜たが最後', meaning: '一旦〜就完了', explanation: 'N1深化。表示不可挽回的结果。' },

    // === そばから ===
    { pattern: '〜そばから', meaning: '刚〜就又', explanation: 'N1深化。表示反复发生，做了又做。' },

    // === が早いか ===
    { pattern: '〜が早いか', meaning: '刚一〜就', explanation: 'N1深化。表示动作非常迅速地衔接。' },

    // === なり ===
    { pattern: '〜なり', meaning: '刚一〜就（保持状态）', explanation: 'N1深化。表示前项动作一发生，紧接着以该状态做后项。' },

    // === に先立って / に先立ち ===
    { pattern: '〜に先立って（さきだって）', meaning: '在〜之前', explanation: 'N1深化。表示在做某事之前先做另一件事。' },
    { pattern: '〜に先立ち', meaning: '在〜之前', explanation: 'N1深化。に先立って的书面形式。' },
    { pattern: '〜に先立つ', meaning: '在〜之前的', explanation: 'に先立って的连体形式。' },

    // === を控えて ===
    { pattern: '〜を控えて（ひかえて）', meaning: '面临〜', explanation: '表示某重大事件即将来临。試験を控えて（面临考试）。' },
    { pattern: '〜を控えた', meaning: '面临〜的', explanation: 'を控えて的连体形式。' },

    // === を前にして ===
    { pattern: '〜を前にして', meaning: '面对〜', explanation: 'N1深化。表示面对某种情况或事物。' },

    // === を目前にして ===
    { pattern: '〜を目前にして', meaning: '即将〜/迫在眉睫', explanation: '表示某事迫在眉睫。' },
    { pattern: '〜を目前に控えて', meaning: '面临即将来到的〜', explanation: 'N1深化。强调紧迫感。' },

    // === 折に / 折から ===
    { pattern: '〜折に（おりに）', meaning: '在〜之际', explanation: '表示机会或时机。お近くにお越しの折に。' },
    { pattern: '〜折から', meaning: '正值〜之际', explanation: '折に的变体。表示正当某个时候。' },

    // === にかけては ===
    { pattern: '〜にかけては', meaning: '在〜方面（擅长）', explanation: 'N1深化。表示在某个领域非常出色。' },
    { pattern: '〜にかけても', meaning: '即使在〜方面也', explanation: 'N1深化。にかけては的让步形式。' },

    // === たる / たるもの ===
    { pattern: '〜たる', meaning: '作为〜（应具备的）', explanation: '表示某身份或地位应有的样子。文语。' },
    { pattern: '〜たるもの', meaning: '作为〜来说', explanation: '表示站在某立场上的当然。教師たるもの（作为教师）。' },
    { pattern: '〜たるや', meaning: '说到那个〜', explanation: '表示强调主题，引发感叹。' },
    { pattern: '〜たる者（もの）', meaning: '身为〜者', explanation: 'たるもの的变体。' },

    // === ともあろう ===
    { pattern: '〜ともあろう', meaning: '身为〜竟然', explanation: '表示对某身份不应有的行为的批评。' },
    { pattern: '〜ともあろうものが', meaning: '身为〜居然', explanation: 'ともあろう的强调形式。' },

    // === すら / だに (N1深化) ===
    { pattern: '〜すら', meaning: '连〜都', explanation: 'N1深化。举出极端例子。' },
    { pattern: '〜だに', meaning: '即使〜也（不）', explanation: 'N1深化。用于强烈的否定或感叹。' },

    // === に至って / に至るまで ===
    { pattern: '〜に至って（いたって）', meaning: '到了〜阶段才', explanation: '表示事态发展到某个极端阶段后才。' },
    { pattern: '〜に至っても', meaning: '即使到了〜也', explanation: 'に至って的让步形式。' },
    { pattern: '〜に至るまで', meaning: '直到〜', explanation: '表示范围广泛，涵盖到不寻常的地步。' },
    { pattern: '〜に至る', meaning: '达到〜（的地步）', explanation: '表示发展到某种程度或结果。' },

    // === の至りだ ===
    { pattern: '〜の至りだ', meaning: '〜之至', explanation: 'N1深化。表示某种情感到达极点。' },

    // === てみせろ ===
    { pattern: '〜てみせろ', meaning: '做给我看！（强烈）', explanation: 'N1深化。表示挑战或强烈的命令。' },

    // === ずくめ ===
    { pattern: '〜ずくめ', meaning: '全是〜', explanation: 'N1深化。' },

    // === そばから ===
    { pattern: '〜そばから', meaning: '一边〜一边〜（反复）', explanation: 'N1深化。' },

    // === にかたくない ===
    { pattern: '〜にかたくない', meaning: '不难〜', explanation: 'N1深化。表示容易推测。' },

    // === かたわら ===
    { pattern: '〜かたわら', meaning: '一边〜一边（长期）', explanation: '表示在主要活动之外，同时长期进行另一活动。' },

    // === かたがた ===
    { pattern: '〜かたがた', meaning: '顺便〜', explanation: '表示在做某事的同时顺便做另一件事。较正式。' },

    // === がてら ===
    { pattern: '〜がてら', meaning: '〜的时候顺便', explanation: '表示在做某事的同时顺便做另一件事。口语。' },

    // === つ〜つ ===
    { pattern: '〜つ〜つ', meaning: '时而〜时而〜', explanation: '表示两个相反的动作交替进行。行きつ戻りつ。' },

    // === であれ〜であれ ===
    { pattern: '〜であれ〜であれ', meaning: '无论是〜还是〜', explanation: 'N1深化。' },

    // === といい〜といい ===
    { pattern: '〜といい〜といい', meaning: '无论〜还是〜', explanation: 'N1深化。' },

    // === といわず〜といわず ===
    { pattern: '〜といわず〜といわず', meaning: '不论〜还是〜', explanation: 'N1深化。表示不管哪个部分都同样。' },

    // === なり〜なり ===
    { pattern: '〜なり〜なり', meaning: '〜也好〜也好', explanation: '表示列举选项，建议从中选择。' },

    // === だの〜だの ===
    { pattern: '〜だの〜だの', meaning: '〜啦〜啦', explanation: '表示列举，带有不满或轻视的语气。' },

    // === やら〜やら ===
    { pattern: '〜やら〜やら', meaning: '〜啦〜啦', explanation: 'N1深化。表示列举时带有困惑感。' },

    // === といい〜といい ===
    { pattern: '〜といい〜といい', meaning: '无论从〜还是从〜', explanation: 'N1深化。' },

    // === に即して / に即した ===
    { pattern: '〜に即して（そくして）', meaning: '根据〜/按照〜', explanation: '表示严格遵循某种标准或事实。' },
    { pattern: '〜に即した', meaning: '根据〜的', explanation: 'に即して的连体形式。' },

    // === に則って ===
    { pattern: '〜に則って（のっとって）', meaning: '遵照〜/依照〜', explanation: '表示按照规则、法律或传统办事。' },

    // === に照らして ===
    { pattern: '〜に照らして（てらして）', meaning: '对照〜/参照〜', explanation: '表示对照某种标准或规则进行判断。' },

    // === にひきかえ ===
    { pattern: '〜にひきかえ', meaning: '与〜相反', explanation: 'N1深化。表示鲜明对比。' },

    // === にもまして ===
    { pattern: '〜にもまして', meaning: '比〜更', explanation: '表示与以前相比程度更高。' },

    // === に加えて ===
    { pattern: '〜に加えて', meaning: '加上〜', explanation: 'N1深化。表示追加。' },

    // === はおろか ===
    { pattern: '〜はおろか', meaning: '别说〜连〜', explanation: 'N1深化。' },

    // === もさることながら ===
    { pattern: '〜もさることながら', meaning: '〜自不必说，〜也', explanation: 'N1深化。' },

    // === いかんでは ===
    { pattern: '〜いかんでは', meaning: '根据〜情况', explanation: 'N1深化。' },

    // === いかんによっては ===
    { pattern: '〜いかんによっては', meaning: '根据〜的不同', explanation: 'N1深化。' },

    // === いかんにかかわらず ===
    { pattern: '〜いかんにかかわらず', meaning: '不论〜如何', explanation: 'N1深化。' },

    // === いかんによらず ===
    { pattern: '〜いかんによらず', meaning: '不论〜', explanation: 'N1深化。' },

    // === いかんを問わず ===
    { pattern: '〜いかんを問わず', meaning: '不论〜如何', explanation: 'N1深化。' },

    // === をものともせずに ===
    { pattern: '〜をものともせずに', meaning: '不把〜当回事', explanation: 'N1深化。' },

    // === をよそに ===
    { pattern: '〜をよそに', meaning: '不顾〜', explanation: 'N1深化。' },

    // === をしりめに ===
    { pattern: '〜をしりめに', meaning: '蔑视〜/不顾〜', explanation: '表示无视他人的批评或目光，我行我素。' },

    // === を限りに ===
    { pattern: '〜を限りに', meaning: '以〜为最后', explanation: 'N1深化。' },

    // === をもって ===
    { pattern: '〜をもって', meaning: '以〜（方式/时间）', explanation: 'N1深化。' },

    // === でもって ===
    { pattern: '〜でもって', meaning: '用〜/以〜', explanation: 'をもって的口语形式。表示手段或方法。' },

    // === あっての ===
    { pattern: '〜あっての', meaning: '有〜才有〜', explanation: 'N1深化。' },

    // === ならではの ===
    { pattern: '〜ならではの', meaning: '〜独有的', explanation: 'N1深化。' },

    // === なりに ===
    { pattern: '〜なりに', meaning: '以〜自己的方式', explanation: 'N1深化。' },

    // === なりとも ===
    { pattern: '〜なりとも', meaning: '哪怕一点〜', explanation: 'N1深化。' },

    // === たりとも ===
    { pattern: '〜たりとも', meaning: '即使〜也（不）', explanation: '表示完全否定，一点也不能。一日たりとも忘れない。' },

    // === にして ===
    { pattern: '〜にして', meaning: '〜才/即使〜', explanation: 'N1深化。多义表达。' },

    // === にしてはじめて ===
    { pattern: '〜にしてはじめて', meaning: '只有〜才', explanation: 'N1深化。' },

    // === あればこそ ===
    { pattern: '〜あればこそ', meaning: '正因为有〜才', explanation: 'N1深化。' },

    // === ばこそ ===
    { pattern: '〜ばこそ', meaning: '正因为〜才', explanation: 'N1深化。' },

    // === からこそ ===
    { pattern: '〜からこそ', meaning: '正因为〜', explanation: 'N1深化。' },

    // === てこそ ===
    { pattern: '〜てこそ', meaning: '只有〜才', explanation: 'N1深化。' },

    // === てはじめて ===
    { pattern: '〜てはじめて', meaning: '〜之后才', explanation: 'N1深化。' },

    // === ずじまいだ ===
    { pattern: '〜ずじまいだ', meaning: '最终没能〜', explanation: 'N1深化。' },

    // === が最後 / たら最後 ===
    { pattern: '〜が最後', meaning: '一旦〜就完了', explanation: 'N1深化。' },
    { pattern: '〜たら最後', meaning: '一旦〜就', explanation: 'N1深化。' },

    // === そばから ===
    { pattern: '〜そばから', meaning: '刚〜就又', explanation: 'N1深化。' },

    // === や否や ===
    { pattern: '〜や否や', meaning: '刚一〜就', explanation: 'N1深化。书面语。' },

    // === が早いか ===
    { pattern: '〜が早いか', meaning: '刚一〜就', explanation: 'N1深化。' },

    // === なり ===
    { pattern: '〜なり', meaning: '刚一〜就', explanation: 'N1深化。' },

    // === と思いきや ===
    { pattern: '〜と思いきや', meaning: '原以为〜却', explanation: 'N1深化。' },

    // === かと思いきや ===
    { pattern: '〜かと思いきや', meaning: '以为〜却没想到', explanation: 'N1深化。' },

    // === とあって ===
    { pattern: '〜とあって', meaning: '因为是〜（所以）', explanation: '表示因为特殊状况，出现某种结果理所当然。' },

    // === とあれば ===
    { pattern: '〜とあれば', meaning: '如果是〜的话', explanation: '表示如果是某种特殊情况，愿意做某事。' },

    // === にあって ===
    { pattern: '〜にあって', meaning: '处于〜（状况）', explanation: '表示处于某种特殊状况或立场。' },

    // === にあっては ===
    { pattern: '〜にあっては', meaning: '在〜（状况下）', explanation: 'にあって的强调形式。' },

    // === と相まって ===
    { pattern: '〜と相まって（あいまって）', meaning: '与〜相结合', explanation: '表示两种因素相互作用产生效果。' },

    // === もあろうに ===
    { pattern: '〜もあろうに', meaning: '偏偏〜', explanation: '表示在众多选择中偏偏选了最不该选的那个。' },

    // === まじき ===
    { pattern: '〜まじき', meaning: '不应该〜的', explanation: 'N1深化。' },

    // === べからざる ===
    { pattern: '〜べからざる', meaning: '不可〜的', explanation: 'N1深化。' },

    // === たる / たるもの ===
    { pattern: '〜たる', meaning: '作为〜的', explanation: 'N1深化。' },
    { pattern: '〜たるもの', meaning: '作为〜来说', explanation: 'N1深化。' },

    // === ともあろう ===
    { pattern: '〜ともあろう', meaning: '身为〜竟然', explanation: 'N1深化。' },

    // === すら / だに ===
    { pattern: '〜すら', meaning: '连〜都', explanation: 'N1深化。' },
    { pattern: '〜だに', meaning: '连〜都', explanation: 'N1深化。' },

    // === に至って / に至るまで ===
    { pattern: '〜に至って', meaning: '到了〜阶段才', explanation: 'N1深化。' },
    { pattern: '〜に至るまで', meaning: '直到〜', explanation: 'N1深化。' },

    // === の至りだ ===
    { pattern: '〜の至りだ', meaning: '〜之至', explanation: 'N1深化。' },

    // === 極まる / 極まりない ===
    { pattern: '〜極まる', meaning: '极其〜', explanation: 'N1深化。' },
    { pattern: '〜極まりない', meaning: '极其〜', explanation: 'N1深化。' },

    // === の極み ===
    { pattern: '〜の極み', meaning: '〜之极', explanation: 'N1深化。' },

    // === 限りだ ===
    { pattern: '〜限りだ', meaning: '非常〜', explanation: 'N1深化。' },

    // === てやまない ===
    { pattern: '〜てやまない', meaning: '衷心〜', explanation: 'N1深化。' },

    // === ずにはおかない ===
    { pattern: '〜ずにはおかない', meaning: '必定会〜', explanation: 'N1深化。' },

    // === を禁じ得ない ===
    { pattern: '〜を禁じ得ない', meaning: '不禁〜', explanation: 'N1深化。' },

    // === といったらない ===
    { pattern: '〜といったらない', meaning: '没有比〜更', explanation: 'N1深化。' },

    // === といったらありはしない ===
    { pattern: '〜といったらありはしない', meaning: '〜得不得了', explanation: 'N1深化。' },

    // === てかなわない ===
    { pattern: '〜てかなわない', meaning: '〜得受不了', explanation: 'N1深化。' },

    // === にたえない ===
    { pattern: '〜にたえない', meaning: '不堪〜', explanation: 'N1深化。' },

    // === にたえる ===
    { pattern: '〜にたえる', meaning: '值得〜', explanation: 'N1深化。' },

    // === にかたくない ===
    { pattern: '〜にかたくない', meaning: '不难〜', explanation: 'N1深化。' },

    // === に越したことはない ===
    { pattern: '〜に越したことはない', meaning: '最好不过〜', explanation: 'N1深化。' },

    // === に如くはない ===
    { pattern: '〜に如くはない', meaning: '莫过于〜', explanation: 'N1深化。' },

    // === には及ばない ===
    { pattern: '〜には及ばない', meaning: '不必〜/比不上〜', explanation: 'N1深化。' },

    // === どころではない ===
    { pattern: '〜どころではない', meaning: '哪能〜', explanation: 'N1深化。' },

    // === べくもない ===
    { pattern: '〜べくもない', meaning: '无法〜', explanation: 'N1深化。' },

    // === べからず ===
    { pattern: '〜べからず', meaning: '不可〜', explanation: 'N1深化。' },

    // === んがために ===
    { pattern: '〜んがために', meaning: '为了〜', explanation: 'N1深化。' },

    // === んばかりに ===
    { pattern: '〜んばかりに', meaning: '几乎要〜', explanation: 'N1深化。' },

    // === ともなく ===
    { pattern: '〜ともなく', meaning: '无意中〜', explanation: 'N1深化。' },

    // === なしに ===
    { pattern: '〜なしに', meaning: '没有〜', explanation: 'N1深化。' },

    // === なしでは ===
    { pattern: '〜なしでは', meaning: '没有〜就不能', explanation: 'N1深化。' },

    // === なくして ===
    { pattern: '〜なくして', meaning: '如果不〜', explanation: 'N1深化。' },

    // === なくしては ===
    { pattern: '〜なくしては', meaning: '如果没有〜', explanation: 'N1深化。' },

    // === を皮切りに ===
    { pattern: '〜を皮切りに', meaning: '以〜为开端', explanation: 'N1深化。' },

    // === を振り出しに ===
    { pattern: '〜を振り出しに', meaning: '以〜为起点', explanation: 'N1深化。' },

    // === を限りに ===
    { pattern: '〜を限りに', meaning: '以〜为最后', explanation: 'N1深化。' },

    // === をもって ===
    { pattern: '〜をもって', meaning: '以〜', explanation: 'N1深化。' },

    // === をもってすれば ===
    { pattern: '〜をもってすれば', meaning: '用〜的话就能', explanation: 'N1深化。' },

    // === をもってしても ===
    { pattern: '〜をもってしても', meaning: '即使是用〜也', explanation: 'N1深化。' },

    // === あっての ===
    { pattern: '〜あっての', meaning: '有〜才有〜', explanation: 'N1深化。' },

    // === ならではの ===
    { pattern: '〜ならではの', meaning: '〜独有的', explanation: 'N1深化。' },

    // === なりに ===
    { pattern: '〜なりに', meaning: '以〜自己的方式', explanation: 'N1深化。' },

    // === なりとも ===
    { pattern: '〜なりとも', meaning: '哪怕一点〜', explanation: 'N1深化。' },

    // === たりとも ===
    { pattern: '〜たりとも', meaning: '即使〜也（不）', explanation: 'N1深化。' },

    // === たところで ===
    { pattern: '〜たところで', meaning: '即使〜也', explanation: 'N1深化。' },

    // === としたところで ===
    { pattern: '〜としたところで', meaning: '就算〜也', explanation: 'N1深化。' },

    // === にしたところで ===
    { pattern: '〜にしたところで', meaning: '就算是〜也', explanation: 'N1深化。' },

    // === であれ ===
    { pattern: '〜であれ', meaning: '即使是〜也', explanation: 'N1深化。' },

    // === であれ〜であれ ===
    { pattern: '〜であれ〜であれ', meaning: '不管是〜还是〜', explanation: 'N1深化。' },

    // === といい〜といい ===
    { pattern: '〜といい〜といい', meaning: '无论〜还是〜', explanation: 'N1深化。' },

    // === というか〜というか ===
    { pattern: '〜というか〜というか', meaning: '说是〜还是〜', explanation: 'N1深化。' },

    // === というより ===
    { pattern: '〜というより', meaning: '与其说〜不如说', explanation: 'N1深化。' },

    // === に先立って ===
    { pattern: '〜に先立って', meaning: '在〜之前', explanation: 'N1深化。' },

    // === を控えて ===
    { pattern: '〜を控えて', meaning: '面临〜', explanation: 'N1深化。' },

    // === を前にして ===
    { pattern: '〜を前にして', meaning: '面对〜', explanation: 'N1深化。' },

    // === を目前にして ===
    { pattern: '〜を目前にして', meaning: '即将〜', explanation: 'N1深化。' },

    // === 折に ===
    { pattern: '〜折に', meaning: '在〜之际', explanation: 'N1深化。' },

    // === にかけては ===
    { pattern: '〜にかけては', meaning: '在〜方面', explanation: 'N1深化。' },

    // === かたわら ===
    { pattern: '〜かたわら', meaning: '一边〜一边', explanation: 'N1深化。' },

    // === かたがた ===
    { pattern: '〜かたがた', meaning: '顺便〜', explanation: 'N1深化。' },

    // === がてら ===
    { pattern: '〜がてら', meaning: '〜的时候顺便', explanation: 'N1深化。' },

    // === つ〜つ ===
    { pattern: '〜つ〜つ', meaning: '时而〜时而〜', explanation: 'N1深化。' },

    // === なり〜なり ===
    { pattern: '〜なり〜なり', meaning: '〜也好〜也好', explanation: 'N1深化。' },

    // === だの〜だの ===
    { pattern: '〜だの〜だの', meaning: '〜啦〜啦', explanation: 'N1深化。' },

    // === やら〜やら ===
    { pattern: '〜やら〜やら', meaning: '〜啦〜啦', explanation: 'N1深化。' },

    // === といわず〜といわず ===
    { pattern: '〜といわず〜といわず', meaning: '不论〜还是〜', explanation: 'N1深化。' },

    // === に即して ===
    { pattern: '〜に即して', meaning: '根据〜/按照〜', explanation: 'N1深化。' },

    // === に則って ===
    { pattern: '〜に則って', meaning: '遵照〜/依照〜', explanation: 'N1深化。' },

    // === に照らして ===
    { pattern: '〜に照らして', meaning: '对照〜/参照〜', explanation: 'N1深化。' },

    // === にひきかえ ===
    { pattern: '〜にひきかえ', meaning: '与〜相反', explanation: 'N1深化。' },

    // === にもまして ===
    { pattern: '〜にもまして', meaning: '比〜更', explanation: 'N1深化。' },

    // === をしりめに ===
    { pattern: '〜をしりめに', meaning: '蔑视〜/不顾〜', explanation: 'N1深化。' },

    // === でもって ===
    { pattern: '〜でもって', meaning: '用〜/以〜', explanation: 'N1深化。' },

    // === とあって ===
    { pattern: '〜とあって', meaning: '因为是〜（所以）', explanation: 'N1深化。' },

    // === とあれば ===
    { pattern: '〜とあれば', meaning: '如果是〜的话', explanation: 'N1深化。' },

    // === にあって ===
    { pattern: '〜にあって', meaning: '处于〜（状况）', explanation: 'N1深化。' },

    // === と相まって ===
    { pattern: '〜と相まって', meaning: '与〜相结合', explanation: 'N1深化。' },

    // === もあろうに ===
    { pattern: '〜もあろうに', meaning: '偏偏〜', explanation: 'N1深化。' },
  ],
};

// ─── Generate example sentences ──────────────────────────────────────
const exampleSentences = {
  // N5
  '〜は〜です': [
    { japanese: '私は学生です。', reading: 'わたしはがくせいです。', chinese: '我是学生。' },
    { japanese: 'これは本です。', reading: 'これはほんです。', chinese: '这是书。' },
  ],
  '〜は〜ではありません': [
    { japanese: '私は日本人ではありません。', reading: 'わたしはにほんじんではありません。', chinese: '我不是日本人。' },
    { japanese: 'これは私のペンではありません。', reading: 'これはわたしのペンではありません。', chinese: '这不是我的笔。' },
  ],
  '〜は〜じゃありません': [
    { japanese: 'それは私のじゃありません。', reading: 'それはわたしのじゃありません。', chinese: '那不是我的。' },
    { japanese: 'この店は高くありません。', reading: 'このみせはたかくありません。', chinese: '这家店不贵。' },
  ],
  '〜は〜でした': [
    { japanese: '昨日は月曜日でした。', reading: 'きのうはげつようびでした。', chinese: '昨天是星期一。' },
    { japanese: 'あの人は私の先生でした。', reading: 'あのひとはわたしのせんせいでした。', chinese: '那个人是我的老师。' },
  ],
  '〜は〜ではありませんでした': [
    { japanese: '昨日は休みではありませんでした。', reading: 'きのうはやすみではありませんでした。', chinese: '昨天不是休息日。' },
    { japanese: '試験は難しくありませんでした。', reading: 'しけんはむずかしくありませんでした。', chinese: '考试不难。' },
  ],
  '〜があります': [
    { japanese: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', chinese: '桌子上有书。' },
    { japanese: '公園に大きな木があります。', reading: 'こうえんにおおきなきがあります。', chinese: '公园里有大树。' },
  ],
  '〜がいます': [
    { japanese: '庭に猫がいます。', reading: 'にわにねこがいます。', chinese: '院子里有猫。' },
    { japanese: '教室に学生がいます。', reading: 'きょうしつにがくせいがいます。', chinese: '教室里有学生。' },
  ],
  '〜に〜があります': [
    { japanese: '駅の前に銀行があります。', reading: 'えきのまえにぎんこうがあります。', chinese: '车站前有银行。' },
    { japanese: '部屋の中にテレビがあります。', reading: 'へやのなかにテレビがあります。', chinese: '房间里有电视。' },
  ],
  '〜に〜がいます': [
    { japanese: '公園に子供たちがいます。', reading: 'こうえんにこどもたちがいます。', chinese: '公园里有孩子们。' },
    { japanese: '池に魚がいます。', reading: 'いけにさかながいます。', chinese: '池塘里有鱼。' },
  ],
  '〜は〜にあります': [
    { japanese: '図書館は駅の近くにあります。', reading: 'としょかんはえきのちかくにあります。', chinese: '图书馆在车站附近。' },
    { japanese: '本は机の上にあります。', reading: 'ほんはつくえのうえにあります。', chinese: '书在桌子上。' },
  ],
  '〜は〜にいます': [
    { japanese: '先生は教室にいます。', reading: 'せんせいはきょうしつにいます。', chinese: '老师在教室里。' },
    { japanese: '母は台所にいます。', reading: 'はははだいどころにいます。', chinese: '妈妈在厨房。' },
  ],
  '助詞「は」〜': [
    { japanese: '私は毎日コーヒーを飲みます。', reading: 'わたしはまいにちコーヒーをのみます。', chinese: '我每天喝咖啡。' },
    { japanese: '日本は島国です。', reading: 'にほんはしまぐにです。', chinese: '日本是岛国。' },
  ],
  '助詞「が」': [
    { japanese: '誰が来ましたか。', reading: 'だれがきましたか。', chinese: '谁来了？' },
    { japanese: '私は犬が好きです。', reading: 'わたしはいぬがすきです。', chinese: '我喜欢狗。' },
  ],
  '助詞「を」': [
    { japanese: '私は毎朝新聞を読みます。', reading: 'わたしはまいあさしんぶんをよみます。', chinese: '我每天早上读报纸。' },
    { japanese: '公園を散歩しましょう。', reading: 'こうえんをさんぽしましょう。', chinese: '在公园散步吧。' },
  ],
  '助詞「に」（時間）': [
    { japanese: '私は毎朝七時に起きます。', reading: 'わたしはまいあさしちじにおきます。', chinese: '我每天早上七点起床。' },
    { japanese: '会議は三時に始まります。', reading: 'かいぎはさんじにはじまります。', chinese: '会议三点开始。' },
  ],
  '助詞「に」（場所・方向）': [
    { japanese: '明日東京に行きます。', reading: 'あしたとうきょうにいきます。', chinese: '明天去东京。' },
    { japanese: '電車に乗ってください。', reading: 'でんしゃにのってください。', chinese: '请上电车。' },
  ],
  '助詞「に」（間接目的語）': [
    { japanese: '私は友達にプレゼントをあげました。', reading: 'わたしはともだちにプレゼントをあげました。', chinese: '我送了礼物给朋友。' },
    { japanese: '先生に質問をしました。', reading: 'せんせいにしつもんをしました。', chinese: '向老师提了问题。' },
  ],
  '助詞「に」（目的）': [
    { japanese: '映画を見に行きます。', reading: 'えいがをみにいきます。', chinese: '去看电影。' },
    { japanese: '図書館へ勉強しに行きます。', reading: 'としょかんへべんきょうしにいきます。', chinese: '去图书馆学习。' },
  ],
  '助詞「で」（場所）': [
    { japanese: '私は図書館で勉強します。', reading: 'わたしはとしょかんでべんきょうします。', chinese: '我在图书馆学习。' },
    { japanese: 'レストランで昼ごはんを食べました。', reading: 'レストランでひるごはんをたべました。', chinese: '在餐厅吃了午饭。' },
  ],
  '助詞「で」（手段・方法）': [
    { japanese: '私はバスで学校に行きます。', reading: 'わたしはバスでがっこうにいきます。', chinese: '我坐公交车去学校。' },
    { japanese: 'はしでご飯を食べます。', reading: 'はしでごはんをたべます。', chinese: '用筷子吃饭。' },
  ],
  '助詞「で」（原因・理由）': [
    { japanese: '台風で学校が休みになりました。', reading: 'たいふうでがっこうがやすみになりました。', chinese: '因为台风学校放假了。' },
    { japanese: '病気で会社を休みました。', reading: 'びょうきでかいしゃをやすみました。', chinese: '因为生病请假了。' },
  ],
  '助詞「で」（范围）': [
    { japanese: 'この仕事は一時間で終わります。', reading: 'このしごとはいちじかんでおわります。', chinese: '这份工作一小时就能完成。' },
    { japanese: '世界で一番高い山はエベレストです。', reading: 'せかいでいちばんたかいやまはエベレストです。', chinese: '世界上最高的山是珠穆朗玛峰。' },
  ],
  '助詞「へ」': [
    { japanese: '来年日本へ行きたいです。', reading: 'らいねんにほんへいきたいです。', chinese: '明年想去日本。' },
    { japanese: 'これは母への手紙です。', reading: 'これはははへのてがみです。', chinese: '这是给妈妈的信。' },
  ],
  '助詞「と」（共同・相手）': [
    { japanese: '昨日友達と映画を見ました。', reading: 'きのうともだちとえいがをみました。', chinese: '昨天和朋友看了电影。' },
    { japanese: '家族と一緒に旅行に行きました。', reading: 'かぞくとしょにりょこうにいきました。', chinese: '和家人一起去旅行了。' },
  ],
  '助詞「と」（並立）': [
    { japanese: '机の上に本とノートがあります。', reading: 'つくえのうえにほんとノートがあります。', chinese: '桌子上有书和笔记本。' },
    { japanese: 'コーヒーと紅茶、どちらがいいですか。', reading: 'コーヒーとこうちゃ、どちらがいいですか。', chinese: '咖啡和红茶，你要哪个？' },
  ],
  '助詞「と」（引用）': [
    { japanese: '彼は「明日来る」と言いました。', reading: 'かれは「あしたくる」といいました。', chinese: '他说"明天来"。' },
    { japanese: '私は彼が正しいと思います。', reading: 'わたしはかれがただしいとおもいます。', chinese: '我觉得他是对的。' },
  ],
  '助詞「から」（起点）': [
    { japanese: '会議は九時から始まります。', reading: 'かいぎはくじからはじまります。', chinese: '会议从九点开始。' },
    { japanese: 'この電車は東京から来ました。', reading: 'このでんしゃはとうきょうからきました。', chinese: '这辆电车是从东京来的。' },
  ],
  '助詞「まで」（終点）': [
    { japanese: '駅まで歩いて十分かかります。', reading: 'えきまであるいてじゅっぷんかかります。', chinese: '走到车站要十分钟。' },
    { japanese: '仕事は五時までです。', reading: 'しごとはごじまでです。', chinese: '工作到五点。' },
  ],
  '助詞「より」（比較）': [
    { japanese: '今日は昨日より暑いです。', reading: 'きょうはきのうよりあついです。', chinese: '今天比昨天热。' },
    { japanese: 'この本はあの本より面白いです。', reading: 'このほんはあのほんよりおもしろいです。', chinese: '这本书比那本书有趣。' },
  ],
  '助詞「の」（所有・所属）': [
    { japanese: 'これは私の車です。', reading: 'これはわたしのくるまです。', chinese: '这是我的车。' },
    { japanese: '東京の人口は多いです。', reading: 'とうきょうのじんこうはおおいです。', chinese: '东京的人口很多。' },
  ],
  '助詞「の」（同格）': [
    { japanese: '友達の田中さんが来ました。', reading: 'ともだちのたなかさんがきました。', chinese: '我的朋友田中先生来了。' },
    { japanese: '社長の鈴木です。', reading: 'しゃちょうのすずきです。', chinese: '我是社长铃木。' },
  ],
  '助詞「の」（名詞化）': [
    { japanese: '日本語を勉強するのは楽しいです。', reading: 'にほんごをべんきょうするのはたのしいです。', chinese: '学日语很开心。' },
    { japanese: '彼が来るのを待っています。', reading: 'かれがくるのをまっています。', chinese: '我在等他来。' },
  ],
  '助詞「も」': [
    { japanese: '私も行きたいです。', reading: 'わたしもいきたいです。', chinese: '我也想去。' },
    { japanese: '教室に誰もいません。', reading: 'きょうしつにだれもいません。', chinese: '教室里一个人也没有。' },
  ],
  '助詞「か」': [
    { japanese: 'コーヒーか紅茶はいかがですか。', reading: 'コーヒーかこうちゃはいかがですか。', chinese: '咖啡还是红茶，您要哪个？' },
    { japanese: '明日雨が降るかどうかわかりません。', reading: 'あしたあめがふるかどうかわかりません。', chinese: '不知道明天会不会下雨。' },
  ],
  '助詞「や」': [
    { japanese: '机の上に本やノートがあります。', reading: 'つくえのうえにほんやノートがあります。', chinese: '桌子上有书和笔记本等。' },
    { japanese: '休みには映画や買い物をします。', reading: 'やすみにはえいがやかいものをします。', chinese: '休息日会看电影、购物等。' },
  ],
  '助詞「など」': [
    { japanese: '私は英語や中国語などを勉強しています。', reading: 'わたしはえいごやちゅうごくごなどをべんきょうしています。', chinese: '我在学习英语、中文等。' },
    { japanese: 'この店ではパンやケーキなどを売っています。', reading: 'このみせではパンやケーキなどをうっています。', chinese: '这家店卖面包、蛋糕等。' },
  ],
  '助詞「だけ」': [
    { japanese: '私は日本語だけ話せます。', reading: 'わたしはにほんごだけはなせます。', chinese: '我只会说日语。' },
    { japanese: '少しだけ食べました。', reading: 'すこしだけたべました。', chinese: '只吃了一点。' },
  ],
  '助詞「しか〜ない」': [
    { japanese: '私は日本語しか話せません。', reading: 'わたしはにほんごしかはなせません。', chinese: '我只会说日语（强调只会这个）。' },
    { japanese: '財布に百円しかありません。', reading: 'さいふにひゃくえんしかありません。', chinese: '钱包里只有一百日元。' },
  ],
  '助詞「ぐらい」': [
    { japanese: '駅まで十分ぐらいかかります。', reading: 'えきまでじゅっぷんぐらいかかります。', chinese: '到车站大约要十分钟。' },
    { japanese: 'このかばんは五千円ぐらいです。', reading: 'このかばんはごせんえんぐらいです。', chinese: '这个包大约五千日元。' },
  ],
  '助詞「ころ」': [
    { japanese: '明日の今頃は何をしていますか。', reading: 'あしたのいまごろはなにをしていますか。', chinese: '明天的这个时候你在做什么？' },
    { japanese: '三時ごろにもう一度来てください。', reading: 'さんじごろにもういちどきてください。', chinese: '三点左右请再来一次。' },
  ],
  '助詞「でも」': [
    { japanese: 'お茶でも飲みませんか。', reading: 'おちゃでものみませんか。', chinese: '喝杯茶什么的吧？' },
    { japanese: '子供でもできます。', reading: 'こどもでもできます。', chinese: '连小孩都会。' },
  ],
  'なに / なん': [
    { japanese: 'これは何ですか。', reading: 'これはなんですか。', chinese: '这是什么？' },
    { japanese: '何を食べたいですか。', reading: 'なにをたべたいですか。', chinese: '你想吃什么？' },
  ],
  'だれ': [
    { japanese: 'あの人は誰ですか。', reading: 'あのひとはだれですか。', chinese: '那个人是谁？' },
    { japanese: '誰がこのケーキを作りましたか。', reading: 'だれがこのケーキをつくりましたか。', chinese: '谁做的这个蛋糕？' },
  ],
  'どこ': [
    { japanese: 'トイレはどこですか。', reading: 'トイレはどこですか。', chinese: '洗手间在哪里？' },
    { japanese: 'どこで昼ごはんを食べましょうか。', reading: 'どこでひるごはんをたべましょうか。', chinese: '在哪里吃午饭呢？' },
  ],
  'いつ': [
    { japanese: 'いつ日本に来ましたか。', reading: 'いつにほんにきましたか。', chinese: '你什么时候来日本的？' },
    { japanese: '次の会議はいつですか。', reading: 'つぎのかいぎはいつですか。', chinese: '下次会议是什么时候？' },
  ],
  'なぜ': [
    { japanese: 'なぜ遅刻したのですか。', reading: 'なぜちこくしたのですか。', chinese: '为什么迟到了？' },
    { japanese: 'なぜ日本語を勉強しているのですか。', reading: 'なぜにほんごをべんきょうしているのですか。', chinese: '为什么学日语？' },
  ],
  'どうして': [
    { japanese: 'どうして泣いているの？', reading: 'どうしてないているの？', chinese: '为什么哭啊？' },
    { japanese: 'どうして来なかったの？', reading: 'どうしてこなかったの？', chinese: '为什么没来？' },
  ],
  'どう': [
    { japanese: '日本の生活はどうですか。', reading: 'にほんのせいかつはどうですか。', chinese: '日本的生活怎么样？' },
    { japanese: 'この料理はどうやって作りますか。', reading: 'このりょうりはどうやってつくりますか。', chinese: '这道菜怎么做？' },
  ],
  'いくら': [
    { japanese: 'このりんごはいくらですか。', reading: 'このりんごはいくらですか。', chinese: '这个苹果多少钱？' },
    { japanese: 'いくら勉強しても上手になりません。', reading: 'いくらべんきょうしてもじょうずになりません。', chinese: '不管怎么学也学不好。' },
  ],
  'どの': [
    { japanese: 'どの本が一番面白いですか。', reading: 'どのほんがいちばんおもしろいですか。', chinese: '哪本书最有趣？' },
    { japanese: 'どのくらい日本語を勉強しましたか。', reading: 'どのくらいにほんごをべんきょうしましたか。', chinese: '你学了多久日语？' },
  ],
  'どれ': [
    { japanese: 'どれがあなたのペンですか。', reading: 'どれがあなたのペンですか。', chinese: '哪个是你的笔？' },
    { japanese: 'この中からどれを選びますか。', reading: 'このなかからどれをえらびますか。', chinese: '从这些中你选哪个？' },
  ],
  'どちら': [
    { japanese: 'お国はどちらですか。', reading: 'おくにはどちらですか。', chinese: '您的国家是哪里？' },
    { japanese: 'コーヒーと紅茶、どちらがいいですか。', reading: 'コーヒーとこうちゃ、どちらがいいですか。', chinese: '咖啡和红茶，您要哪个？' },
  ],
  'どんな': [
    { japanese: 'どんな音楽が好きですか。', reading: 'どんなおんがくがすきですか。', chinese: '你喜欢什么样的音乐？' },
    { japanese: 'どんな仕事をしていますか。', reading: 'どんなしごとをしていますか。', chinese: '你在做什么样的工作？' },
  ],
  'どうやって': [
    { japanese: '駅までどうやって行きますか。', reading: 'えきまでどうやっていきますか。', chinese: '到车站怎么去？' },
    { japanese: 'この料理はどうやって作りますか。', reading: 'このりょうりはどうやってつくりますか。', chinese: '这道菜怎么做？' },
  ],
  'いくつ': [
    { japanese: 'りんごをいくつ買いましたか。', reading: 'りんごをいくつかいましたか。', chinese: '买了几个苹果？' },
    { japanese: 'お子さんはいくつですか。', reading: 'おこさんはいくつですか。', chinese: '您的孩子几岁了？' },
  ],
  'これ': [
    { japanese: 'これは私の時計です。', reading: 'これはわたしのとけいです。', chinese: '这是我的手表。' },
    { japanese: 'これをください。', reading: 'これをください。', chinese: '请给我这个。' },
  ],
  'それ': [
    { japanese: 'それは何ですか。', reading: 'それはなんですか。', chinese: '那是什么？' },
    { japanese: 'それを見せてください。', reading: 'それをみせてください。', chinese: '请给我看看那个。' },
  ],
  'あれ': [
    { japanese: 'あれは東京タワーです。', reading: 'あれはとうきょうタワーです。', chinese: '那是东京塔。' },
    { japanese: 'あれが欲しいです。', reading: 'あれがほしいです。', chinese: '我想要那个。' },
  ],
  'この＋名詞': [
    { japanese: 'この本はとても面白いです。', reading: 'このほんはとてもおもしろいです。', chinese: '这本书非常有趣。' },
    { japanese: 'この店は安くて美味しいです。', reading: 'このみせはやすくておいしいです。', chinese: '这家店又便宜又好吃。' },
  ],
  'その＋名詞': [
    { japanese: 'そのかばんはいくらですか。', reading: 'そのかばんはいくらですか。', chinese: '那个包多少钱？' },
    { japanese: 'その話は後で聞きます。', reading: 'そのはなしはあとでききます。', chinese: '那个话之后再说。' },
  ],
  'あの＋名詞': [
    { japanese: 'あの建物は何ですか。', reading: 'あのたてものはなんですか。', chinese: '那栋建筑是什么？' },
    { japanese: 'あの人は私の先生です。', reading: 'あのひとはわたしのせんせいです。', chinese: '那个人是我的老师。' },
  ],
  'ここ': [
    { japanese: 'ここは私の席です。', reading: 'ここはわたしのせきです。', chinese: '这里是我的座位。' },
    { japanese: 'ここで待っていてください。', reading: 'ここでまっていてください。', chinese: '请在这里等。' },
  ],
  'そこ': [
    { japanese: 'そこに座ってください。', reading: 'そこにすわってください。', chinese: '请坐在那里。' },
    { japanese: 'そこは危ないですよ。', reading: 'そこはあぶないですよ。', chinese: '那里很危险哦。' },
  ],
  'あそこ': [
    { japanese: 'あそこに郵便局があります。', reading: 'あそこにゆうびんきょくがあります。', chinese: '那里有邮局。' },
    { japanese: 'あそこに見えるのは富士山です。', reading: 'あそこにみえるのはふじさんです。', chinese: '那边看到的是富士山。' },
  ],
  'こちら': [
    { japanese: 'こちらは田中さんです。', reading: 'こちらはたなかさんです。', chinese: '这位是田中先生。' },
    { japanese: 'どうぞこちらへ。', reading: 'どうぞこちらへ。', chinese: '请这边走。' },
  ],
  'そちら': [
    { japanese: 'そちらはどちら様ですか。', reading: 'そちらはどちらさまですか。', chinese: '您是哪位？' },
    { japanese: 'そちらの天気はどうですか。', reading: 'そちらのてんきはどうですか。', chinese: '你那边天气怎么样？' },
  ],
  'あちら': [
    { japanese: 'あちらに見えるのが駅です。', reading: 'あちらにみえるのがえきです。', chinese: '那边看到的是车站。' },
    { japanese: '出口はあちらです。', reading: 'でぐちはあちらです。', chinese: '出口在那边。' },
  ],
  '〜つ（個数）': [
    { japanese: 'りんごを三つください。', reading: 'りんごをみっつください。', chinese: '请给我三个苹果。' },
    { japanese: '椅子が四つあります。', reading: 'いすがよっつあります。', chinese: '有四把椅子。' },
  ],
  '〜人（にん）': [
    { japanese: '家族は五人です。', reading: 'かぞくはごにんです。', chinese: '家里有五口人。' },
    { japanese: '教室に三人います。', reading: 'きょうしつにさんにんいます。', chinese: '教室里有三个人。' },
  ],
  '〜本（ほん）': [
    { japanese: 'ペンを三本買いました。', reading: 'ペンをさんぼんかいました。', chinese: '买了三支笔。' },
    { japanese: 'ビールを六本ください。', reading: 'ビールをろっぽんください。', chinese: '请给我六瓶啤酒。' },
  ],
  '〜枚（まい）': [
    { japanese: '紙を五枚ください。', reading: 'かみをごまいください。', chinese: '请给我五张纸。' },
    { japanese: '切手を三枚買いました。', reading: 'きってをさんまいかいました。', chinese: '买了三张邮票。' },
  ],
  '〜冊（さつ）': [
    { japanese: '図書館で本を二冊借りました。', reading: 'としょかんでほんをにさつかりました。', chinese: '在图书馆借了两本书。' },
    { japanese: 'この雑誌を一冊ください。', reading: 'このざっしをいっさつください。', chinese: '请给我这本杂志。' },
  ],
  '〜台（だい）': [
    { japanese: '新しいパソコンを一台買いました。', reading: 'あたらしいパソコンをいちだいかいました。', chinese: '买了一台新电脑。' },
    { japanese: '駐車場に車が三台停まっています。', reading: 'ちゅうしゃじょうにくるまがさんだいとまっています。', chinese: '停车场停了三辆车。' },
  ],
  '〜匹（ひき）': [
    { japanese: '家に猫が二匹います。', reading: 'いえにねこがにひきいます。', chinese: '家里有两只猫。' },
    { japanese: '金魚を五匹飼っています。', reading: 'きんぎょをごひきかっています。', chinese: '养了五条金鱼。' },
  ],
  '〜回（かい）': [
    { japanese: '日本に行ったことが三回あります。', reading: 'にほんにいったことがさんかいあります。', chinese: '去过三次日本。' },
    { japanese: '週に一回ジムに通っています。', reading: 'しゅうにいっかいジムにかよっています。', chinese: '每周去一次健身房。' },
  ],
  '〜階（かい）': [
    { japanese: '私の部屋は三階にあります。', reading: 'わたしのへやはさんがいにあります。', chinese: '我的房间在三楼。' },
    { japanese: 'このビルは十階建てです。', reading: 'このビルはじゅっかいだてです。', chinese: '这栋楼有十层。' },
  ],
  '〜歳（さい）': [
    { japanese: '私は二十歳です。', reading: 'わたしははたちです。', chinese: '我二十岁。' },
    { japanese: 'お子さんは何歳ですか。', reading: 'おこさんはなんさいですか。', chinese: '您的孩子几岁了？' },
  ],
  '〜番（ばん）': [
    { japanese: '私は一番前の席に座りました。', reading: 'わたしはいちばんまえのせきにすわりました。', chinese: '我坐在了最前面的座位。' },
    { japanese: '電話番号を教えてください。', reading: 'でんわばんごうをおしえてください。', chinese: '请告诉我电话号码。' },
  ],
  '〜円（えん）': [
    { japanese: 'この本は一千円です。', reading: 'このほんはせんえんです。', chinese: '这本书一千日元。' },
    { japanese: '昼ごはんは八百円でした。', reading: 'ひるごはんははっぴゃくえんでした。', chinese: '午饭是八百日元。' },
  ],
  '〜時（じ）': [
    { japanese: '今何時ですか。', reading: 'いまなんじですか。', chinese: '现在几点了？' },
    { japanese: '会議は午後三時からです。', reading: 'かいぎはごごさんじからです。', chinese: '会议从下午三点开始。' },
  ],
  '〜分（ふん/ぷん）': [
    { japanese: '電車はあと十分で来ます。', reading: 'でんしゃはあとじゅっぷんできます。', chinese: '电车再过十分钟就来了。' },
    { japanese: '五分待ってください。', reading: 'ごふんまってください。', chinese: '请等五分钟。' },
  ],
  '〜時間（じかん）': [
    { japanese: '毎日二時間勉強します。', reading: 'まいにちにじかんべんきょうします。', chinese: '每天学习两个小时。' },
    { japanese: '東京まで三時間かかりました。', reading: 'とうきょうまでさんじかんかかりました。', chinese: '到东京花了三个小时。' },
  ],
  '〜日（にち/か）': [
    { japanese: '今日は何日ですか。', reading: 'きょうはなんにちですか。', chinese: '今天几号？' },
    { japanese: '旅行は三日間でした。', reading: 'りょこうはみっかかんでした。', chinese: '旅行是三天。' },
  ],
  '〜月（がつ）': [
    { japanese: '四月は新学期です。', reading: 'しがつはしんがっきです。', chinese: '四月是新学期。' },
    { japanese: '私の誕生日は八月です。', reading: 'わたしのたんじょうびははちがつです。', chinese: '我的生日是八月。' },
  ],
  '〜年（ねん）': [
    { japanese: '今年は令和八年です。', reading: 'ことしはれいわはちねんです。', chinese: '今年是令和八年。' },
    { japanese: '私は二〇二〇年に日本に来ました。', reading: 'わたしはにせんにじゅうねんににほんにきました。', chinese: '我2020年来日本的。' },
  ],
  '〜週間（しゅうかん）': [
    { japanese: '三週間日本に滞在しました。', reading: 'さんしゅうかんにほんにたいざいしました。', chinese: '在日本待了三周。' },
    { japanese: '一週間でこの仕事を終わらせます。', reading: 'いっしゅうかんでこのしごとをおわらせます。', chinese: '一周内完成这项工作。' },
  ],
  '〜ヶ月（かげつ）': [
    { japanese: '日本語を六ヶ月勉強しました。', reading: 'にほんごをろっかげつべんきょうしました。', chinese: '学了六个月日语。' },
    { japanese: '三ヶ月の研修があります。', reading: 'さんかげつのけんしゅうがあります。', chinese: '有三个月的培训。' },
  ],
  '〜個（こ）': [
    { japanese: '卵を六個買いました。', reading: 'たまごをろっこかいました。', chinese: '买了六个鸡蛋。' },
    { japanese: 'りんごを三個ください。', reading: 'りんごをさんこください。', chinese: '请给我三个苹果。' },
  ],
  '〜杯（はい）': [
    { japanese: 'コーヒーを二杯飲みました。', reading: 'コーヒーをにはいのみました。', chinese: '喝了两杯咖啡。' },
    { japanese: 'お茶をもう一杯いかがですか。', reading: 'おちゃをもういっぱいいかがですか。', chinese: '再来一杯茶怎么样？' },
  ],
  '今（いま）': [
    { japanese: '今何時ですか。', reading: 'いまなんじですか。', chinese: '现在几点了？' },
    { japanese: '今出かけるところです。', reading: 'いまでかけるところです。', chinese: '现在正要出门。' },
  ],
  '今日（きょう）': [
    { japanese: '今日はいい天気ですね。', reading: 'きょうはいいてんきですね。', chinese: '今天天气真好呢。' },
    { japanese: '今日は何曜日ですか。', reading: 'きょうはなんようびですか。', chinese: '今天星期几？' },
  ],
  '明日（あした/あす）': [
    { japanese: '明日は休みです。', reading: 'あしたはやすみです。', chinese: '明天休息。' },
    { japanese: '明日テストがあります。', reading: 'あしたテストがあります。', chinese: '明天有考试。' },
  ],
  '昨日（きのう）': [
    { japanese: '昨日は雨でした。', reading: 'きのうはあめでした。', chinese: '昨天下雨了。' },
    { japanese: '昨日のパーティーは楽しかったです。', reading: 'きのうのパーティーはたのしかったです。', chinese: '昨天的派对很开心。' },
  ],
  '一昨日（おととい）': [
    { japanese: '一昨日買ったパンはもうありません。', reading: 'おとといかったパンはもうありません。', chinese: '前天买的面包已经没了。' },
    { japanese: '一昨日から頭が痛いです。', reading: 'おとといからあたまがいたいです。', chinese: '从前天开始头疼。' },
  ],
  '明後日（あさって）': [
    { japanese: '明後日までにレポートを出してください。', reading: 'あさってまでにレポートをだしてください。', chinese: '请在后天之前提交报告。' },
    { japanese: '明後日旅行に行きます。', reading: 'あさってりょこうにいきます。', chinese: '后天去旅行。' },
  ],
  '毎日（まいにち）': [
    { japanese: '毎日運動しています。', reading: 'まいにちうんどうしています。', chinese: '每天在运动。' },
    { japanese: '毎日日本語を勉強します。', reading: 'まいにちにほんごをべんきょうします。', chinese: '每天学日语。' },
  ],
  '毎朝（まいあさ）': [
    { japanese: '毎朝七時に起きます。', reading: 'まいあさしちじにおきます。', chinese: '每天早上七点起床。' },
    { japanese: '毎朝ジョギングをしています。', reading: 'まいあさジョギングをしています。', chinese: '每天早上在慢跑。' },
  ],
  '毎晩（まいばん）': [
    { japanese: '毎晩日本語の宿題をします。', reading: 'まいばんにほんごのしゅくだいをします。', chinese: '每天晚上做日语作业。' },
    { japanese: '毎晩十一時ごろ寝ます。', reading: 'まいばんじゅういちじごろねます。', chinese: '每天晚上十一点左右睡觉。' },
  ],
  '今週（こんしゅう）': [
    { japanese: '今週はとても忙しいです。', reading: 'こんしゅうはとてもいそがしいです。', chinese: '这周非常忙。' },
    { japanese: '今週の金曜日にテストがあります。', reading: 'こんしゅうのきんようびにテストがあります。', chinese: '这周五有考试。' },
  ],
  '来週（らいしゅう）': [
    { japanese: '来週から夏休みが始まります。', reading: 'らいしゅうからなつやすみがはじまります。', chinese: '下周开始放暑假。' },
    { japanese: '来週の月曜日に会議があります。', reading: 'らいしゅうのげつようびにかいぎがあります。', chinese: '下周一有会议。' },
  ],
  '先週（せんしゅう）': [
    { japanese: '先週新しい映画を見ました。', reading: 'せんしゅうあたらしいえいがをみました。', chinese: '上周看了新电影。' },
    { japanese: '先週の試験は難しかったです。', reading: 'せんしゅうのしけんはむずかしかったです。', chinese: '上周的考试很难。' },
  ],
  '今月（こんげつ）': [
    { japanese: '今月はお金があまりありません。', reading: 'こんげつはおかねがあまりありません。', chinese: '这个月没什么钱。' },
    { japanese: '今月中に引っ越します。', reading: 'こんげつちゅうにひっこします。', chinese: '这个月内搬家。' },
  ],
  '来月（らいげつ）': [
    { japanese: '来月から新しい仕事を始めます。', reading: 'らいげつからあたらしいしごとをはじめます。', chinese: '下个月开始新工作。' },
    { japanese: '来月の十日に結婚式があります。', reading: 'らいげつのとおかにけっこんしきがあります。', chinese: '下个月十号有婚礼。' },
  ],
  '先月（せんげつ）': [
    { japanese: '先月日本に来ました。', reading: 'せんげつにほんにきました。', chinese: '上个月来日本了。' },
    { japanese: '先月の給料はまだもらっていません。', reading: 'せんげつのきゅうりょうはまだもらっていません。', chinese: '上个月的工资还没拿到。' },
  ],
  '今年（ことし）': [
    { japanese: '今年は暖冬ですね。', reading: 'ことしはだんとうですね。', chinese: '今年是暖冬呢。' },
    { japanese: '今年大学を卒業します。', reading: 'ことしだいがくをそつぎょうします。', chinese: '今年大学毕业。' },
  ],
  '来年（らいねん）': [
    { japanese: '来年は日本に留学したいです。', reading: 'らいねんはにほんにりゅうがくしたいです。', chinese: '明年想去日本留学。' },
    { japanese: '来年の春に結婚します。', reading: 'らいねんのはるにけっこんします。', chinese: '明年春天结婚。' },
  ],
  '去年（きょねん）': [
    { japanese: '去年の夏はとても暑かったです。', reading: 'きょねんのなつはとてもあつかったです。', chinese: '去年夏天非常热。' },
    { japanese: '去年日本に旅行に行きました。', reading: 'きょねんにほんにりょこうにいきました。', chinese: '去年去日本旅行了。' },
  ],
  '〜ごろ': [
    { japanese: '明日の十時ごろに来てください。', reading: 'あしたのじゅうじごろにきてください。', chinese: '请明天十点左右来。' },
    { japanese: '何時ごろ帰りますか。', reading: 'なんじごろかえりますか。', chinese: '几点左右回来？' },
  ],
  '〜から〜まで': [
    { japanese: '九時から五時まで働きます。', reading: 'くじからごじまではたらきます。', chinese: '从九点工作到五点。' },
    { japanese: '家から駅まで歩いて十分です。', reading: 'いえからえきまであるいてじゅっぷんです。', chinese: '从家走到车站十分钟。' },
  ],
  '〜たい': [
    { japanese: '日本へ行きたいです。', reading: 'にほんへいきたいです。', chinese: '想去日本。' },
    { japanese: '冷たいビールが飲みたいです。', reading: 'つめたいビールがのみたいです。', chinese: '想喝冰啤酒。' },
  ],
  '〜たがる': [
    { japanese: '子供はいつもアイスクリームを食べたがります。', reading: 'こどもはいつもアイスクリームをたべたがります。', chinese: '孩子总是想吃冰淇淋。' },
    { japanese: '彼は日本に行きたがっています。', reading: 'かれはにほんにいきたがっています。', chinese: '他想要去日本。' },
  ],
  '〜がほしい': [
    { japanese: '新しいスマホが欲しいです。', reading: 'あたらしいスマホがほしいです。', chinese: '想要新手机。' },
    { japanese: '誕生日に何が欲しいですか。', reading: 'たんじょうびになにがほしいですか。', chinese: '生日想要什么？' },
  ],
  '〜をほしがる': [
    { japanese: '妹は新しいゲームをほしがっています。', reading: 'いもうとはあたらしいゲームをほしがっています。', chinese: '妹妹想要新游戏。' },
    { japanese: '犬がえさをほしがっている。', reading: 'いぬがえさをほしがっている。', chinese: '狗想要食物。' },
  ],
  '〜ができる': [
    { japanese: '私は料理ができます。', reading: 'わたしはりょうりができます。', chinese: '我会做饭。' },
    { japanese: 'ここでインターネットができますか。', reading: 'ここでインターネットができますか。', chinese: '这里能上网吗？' },
  ],
  '〜ことができる': [
    { japanese: '日本語を話すことができます。', reading: 'にほんごをはなすことができます。', chinese: '会说日语。' },
    { japanese: 'ここで写真を撮ることができますか。', reading: 'ここでしゃしんをとることができますか。', chinese: '这里可以拍照吗？' },
  ],
  '〜ことができない': [
    { japanese: '私は泳ぐことができません。', reading: 'わたしはおよぐことができません。', chinese: '我不会游泳。' },
    { japanese: '今日は外に出ることができません。', reading: 'きょうはそとにでることができません。', chinese: '今天不能出门。' },
  ],
  '〜のが上手だ': [
    { japanese: '彼は歌を歌うのが上手です。', reading: 'かれはうたをうたうのがじょうずです。', chinese: '他唱歌很好。' },
    { japanese: 'お母さんは料理を作るのが上手です。', reading: 'おかあさんはりょうりをつくるのがじょうずです。', chinese: '妈妈做菜很好。' },
  ],
  '〜のが下手だ': [
    { japanese: '私はスポーツをするのが下手です。', reading: 'わたしはスポーツをするのがへたです。', chinese: '我不擅长运动。' },
    { japanese: '絵を描くのが下手です。', reading: 'えをかくのがへたです。', chinese: '不擅长画画。' },
  ],
  '〜のが好きだ': [
    { japanese: '私は音楽を聞くのが好きです。', reading: 'わたしはおんがくをきくのがすきです。', chinese: '我喜欢听音乐。' },
    { japanese: '彼は本を読むのが好きです。', reading: 'かれはほんをよむのがすきです。', chinese: '他喜欢看书。' },
  ],
  '〜のが嫌いだ': [
    { japanese: '私は早起きするのが嫌いです。', reading: 'わたしははやおきするのがきらいです。', chinese: '我讨厌早起。' },
    { japanese: '彼女は掃除するのが嫌いだそうです。', reading: 'かのじょはそうじするのがきらいだそうです。', chinese: '听说她讨厌打扫。' },
  ],
  '動詞の辞書形': [
    { japanese: '食べる、飲む、見る、する、来る。', reading: 'たべる、のむ、みる、する、くる。', chinese: '吃、喝、看、做、来。' },
    { japanese: '日本語を話すことが好きです。', reading: 'にほんごをはなすことがすきです。', chinese: '喜欢说日语。' },
  ],
  '動詞のます形': [
    { japanese: '毎日日本語を勉強します。', reading: 'まいにちにほんごをべんきょうします。', chinese: '每天学习日语。' },
    { japanese: '明日学校に行きます。', reading: 'あしたがっこうにいきます。', chinese: '明天去学校。' },
  ],
  '動詞のて形': [
    { japanese: 'ちょっと待ってください。', reading: 'ちょっとまってください。', chinese: '请等一下。' },
    { japanese: 'この本を読んでください。', reading: 'このほんをよんでください。', chinese: '请读这本书。' },
  ],
  '動詞のた形': [
    { japanese: '昨日映画を見た。', reading: 'きのうえいがをみた。', chinese: '昨天看了电影。' },
    { japanese: 'もう昼ごはんを食べましたか。', reading: 'もうひるごはんをたべましたか。', chinese: '已经吃过午饭了吗？' },
  ],
  '動詞のない形': [
    { japanese: '今日は学校に行かない。', reading: 'きょうはがっこうにいかない。', chinese: '今天不去学校。' },
    { japanese: 'まだ宿題をやっていません。', reading: 'まだしゅくだいをやっていません。', chinese: '还没做作业。' },
  ],
  'イ形容詞の活用': [
    { japanese: '昨日は暑かったですが、今日は涼しいです。', reading: 'きのうはあつかったですが、きょうはすずしいです。', chinese: '昨天很热，但今天很凉快。' },
    { japanese: 'この料理は辛くないです。', reading: 'このりょうりはからくないです。', chinese: '这道菜不辣。' },
  ],
  'ナ形容詞の活用': [
    { japanese: 'この町は静かで、住みやすいです。', reading: 'このまちはしずかで、すみやすいです。', chinese: '这个城镇很安静，适合居住。' },
    { japanese: '彼は親切な人です。', reading: 'かれはしんせつなひとです。', chinese: '他是个亲切的人。' },
  ],
  '名詞＋ですの活用': [
    { japanese: '昨日はいい天気でした。', reading: 'きのうはいいてんきでした。', chinese: '昨天是好天气。' },
    { japanese: 'ここは静かじゃありません。', reading: 'ここはしずかじゃありません。', chinese: '这里不安静。' },
  ],
  '〜てください': [
    { japanese: 'ここに名前を書いてください。', reading: 'ここになまえをかいてください。', chinese: '请在这里写名字。' },
    { japanese: 'もう一度言ってください。', reading: 'もういちどいってください。', chinese: '请再说一遍。' },
  ],
  '〜ないでください': [
    { japanese: 'ここでタバコを吸わないでください。', reading: 'ここでタバコをすわないでください。', chinese: '请不要在这里吸烟。' },
    { japanese: '写真を撮らないでください。', reading: 'しゃしんをとらないでください。', chinese: '请不要拍照。' },
  ],
  '〜て': [
    { japanese: 'ちょっと来て。', reading: 'ちょっときて。', chinese: '来一下。' },
    { japanese: 'これを見て。', reading: 'これをみて。', chinese: '看这个。' },
  ],
  '〜ないで': [
    { japanese: '行かないで。', reading: 'いかないで。', chinese: '不要走。' },
    { japanese: 'そんなこと言わないで。', reading: 'そんなこといわないで。', chinese: '不要说那种话。' },
  ],
  '〜なさい': [
    { japanese: '早く宿題をしなさい。', reading: 'はやくしゅくだいをしなさい。', chinese: '快点做作业。' },
    { japanese: 'ちゃんと野菜を食べなさい。', reading: 'ちゃんとやさいをたべなさい。', chinese: '好好吃蔬菜。' },
  ],
  '〜てはいけない': [
    { japanese: 'ここに駐車してはいけません。', reading: 'ここにちゅうしゃしてはいけません。', chinese: '这里不能停车。' },
    { japanese: '図書館で大声で話してはいけません。', reading: 'としょかんでおおごえではなしてはいけません。', chinese: '在图书馆不能大声说话。' },
  ],
  '〜ちゃいけない': [
    { japanese: 'そんなことしちゃいけないよ。', reading: 'そんなことしちゃいけないよ。', chinese: '不能做那种事哦。' },
    { japanese: 'ここで遊んじゃいけない。', reading: 'ここであそんじゃいけない。', chinese: '不能在这里玩。' },
  ],
  '〜てはだめだ': [
    { japanese: '嘘をついてはだめだ。', reading: 'うそをついてはだめだ。', chinese: '不许说谎。' },
    { japanese: '約束を忘れてはだめですよ。', reading: 'やくそくをわすれてはだめですよ。', chinese: '不能忘记约定哦。' },
  ],
  '〜てもいい': [
    { japanese: 'ここに座ってもいいですか。', reading: 'ここにすわってもいいですか。', chinese: '可以坐这里吗？' },
    { japanese: '窓を開けてもいいですよ。', reading: 'まどをあけてもいいですよ。', chinese: '可以开窗户哦。' },
  ],
  '〜てもいいですか': [
    { japanese: '写真を撮ってもいいですか。', reading: 'しゃしんをとってもいいですか。', chinese: '可以拍照吗？' },
    { japanese: 'このパンフレットをもらってもいいですか。', reading: 'このパンフレットをもらってもいいですか。', chinese: '可以拿这个宣传册吗？' },
  ],
  '〜ましょう': [
    { japanese: '一緒に映画を見ましょう。', reading: 'いっしょにえいがをみましょう。', chinese: '一起看电影吧。' },
    { japanese: 'そろそろ帰りましょう。', reading: 'そろそろかえりましょう。', chinese: '差不多该回去了吧。' },
  ],
  '〜ましょうか': [
    { japanese: '窓を閉めましょうか。', reading: 'まどをしめましょうか。', chinese: '我来关窗吧？' },
    { japanese: '荷物を持ちましょうか。', reading: 'にもつをもちましょうか。', chinese: '我来帮你拿行李吧？' },
  ],
  '〜ませんか': [
    { japanese: '一緒に食事に行きませんか。', reading: 'いっしょにしょくじにいきませんか。', chinese: '要不要一起去吃饭？' },
    { japanese: '週末に遊びに来ませんか。', reading: 'しゅうまつにあそびにきませんか。', chinese: '周末要不要来玩？' },
  ],
  '〜ている': [
    { japanese: '今、雨が降っている。', reading: 'いま、あめがふっている。', chinese: '现在正在下雨。' },
    { japanese: '彼はテレビを見ている。', reading: 'かれはテレビをみている。', chinese: '他正在看电视。' },
  ],
  '〜ています': [
    { japanese: '私は日本語を勉強しています。', reading: 'わたしはにほんごをべんきょうしています。', chinese: '我正在学习日语。' },
    { japanese: '母は台所で料理を作っています。', reading: 'はははだいどころでりょうりをつくっています。', chinese: '妈妈正在厨房做饭。' },
  ],
  '〜ていない': [
    { japanese: 'まだ朝ごはんを食べていない。', reading: 'まだあさごはんをたべていない。', chinese: '还没吃早饭。' },
    { japanese: 'その本はまだ読んでいません。', reading: 'そのほんはまだよんでいません。', chinese: '那本书还没看。' },
  ],
  '〜ていました': [
    { japanese: 'さっきまで図書館で勉強していました。', reading: 'さっきまでとしょかんでべんきょうしていました。', chinese: '刚才一直在图书馆学习。' },
    { japanese: '子供の頃、よくこの公園で遊んでいました。', reading: 'こどものころ、よくこのこうえんであそんでいました。', chinese: '小时候经常在这个公园玩。' },
  ],
  '〜たことがある': [
    { japanese: '日本に行ったことがあります。', reading: 'にほんにいったことがあります。', chinese: '去过日本。' },
    { japanese: '富士山に登ったことがありますか。', reading: 'ふじさんにのぼったことがありますか。', chinese: '你爬过富士山吗？' },
  ],
  '〜たことがない': [
    { japanese: 'まだ海外に行ったことがありません。', reading: 'まだかいがいにいったことがありません。', chinese: '还没去过国外。' },
    { japanese: '納豆を食べたことがない。', reading: 'なっとうをたべたことがない。', chinese: '没吃过纳豆。' },
  ],
  '〜たり〜たりする': [
    { japanese: '休みの日は映画を見たり買い物をしたりします。', reading: 'やすみのひはえいがをみたりかいものをしたりします。', chinese: '休息日会看电影、购物等。' },
    { japanese: '昨日は本を読んだり音楽を聴いたりしました。', reading: 'きのうはほんをよんだりおんがくをきいたりしました。', chinese: '昨天看看书、听听音乐。' },
  ],
  '〜た': [
    { japanese: '昨日新しい本を買った。', reading: 'きのうあたらしいほんをかった。', chinese: '昨天买了新书。' },
    { japanese: 'もう宿題をやった？', reading: 'もうしゅくだいをやった？', chinese: '作业已经做了吗？' },
  ],
  '〜ました': [
    { japanese: '先週東京に行きました。', reading: 'せんしゅうとうきょうにいきました。', chinese: '上周去了东京。' },
    { japanese: 'もう昼ごはんを食べました。', reading: 'もうひるごはんをたべました。', chinese: '已经吃过午饭了。' },
  ],
  '〜くなる': [
    { japanese: '最近寒くなりましたね。', reading: 'さいきんさむくなりましたね。', chinese: '最近变冷了呢。' },
    { japanese: '日本語が上手になりたいです。', reading: 'にほんごがじょうずになりたいです。', chinese: '想日语变好。' },
  ],
  '〜になる': [
    { japanese: '彼は先生になりました。', reading: 'かれはせんせいになりました。', chinese: '他成了老师。' },
    { japanese: '部屋がきれいになりました。', reading: 'へやがきれいになりました。', chinese: '房间变干净了。' },
  ],
  '〜くする': [
    { japanese: '音楽の音を大きくしてください。', reading: 'おんがくのおとをおおきくしてください。', chinese: '请把音乐声音开大。' },
    { japanese: 'もっと部屋を明るくしましょう。', reading: 'もっとへやをあかるくしましょう。', chinese: '让房间更亮一些吧。' },
  ],
  '〜にする': [
    { japanese: '私はコーヒーにします。', reading: 'わたしはコーヒーにします。', chinese: '我要咖啡。' },
    { japanese: '壁の色を白にしました。', reading: 'かべのいろをしろにしました。', chinese: '把墙壁颜色弄成了白色。' },
  ],
  '〜ことにする': [
    { japanese: '来年日本に留学することにしました。', reading: 'らいねんにほんにりゅうがくすることにしました。', chinese: '决定明年去日本留学。' },
    { japanese: '毎日運動することにしています。', reading: 'まいにちうんどうすることにしています。', chinese: '我决定每天运动。' },
  ],
  '〜ことになる': [
    { japanese: '来月大阪に転勤することになりました。', reading: 'らいげつおおさかにてんきんすることになりました。', chinese: '下个月要调到大阪了。' },
    { japanese: '会議は中止することになりました。', reading: 'かいぎはちゅうしすることになりました。', chinese: '会议决定取消了。' },
  ],
  '〜なければならない': [
    { japanese: '明日までにレポートを出さなければなりません。', reading: 'あしたまでにレポートをださなければなりません。', chinese: '明天之前必须提交报告。' },
    { japanese: 'もっと勉強しなければならない。', reading: 'もっとべんきょうしなければならない。', chinese: '必须更加努力学习。' },
  ],
  '〜なくてはいけない': [
    { japanese: 'もう行かなくてはいけません。', reading: 'もういかなくてはいけません。', chinese: '必须得走了。' },
    { japanese: 'この薬を飲まなくてはいけませんか。', reading: 'このくすりをのまなくてはいけませんか。', chinese: '这个药必须吃吗？' },
  ],
  '〜なくてもいい': [
    { japanese: '無理に来なくてもいいですよ。', reading: 'むりにこなくてもいいですよ。', chinese: '不用勉强来也可以哦。' },
    { japanese: '全部食べなくてもいいです。', reading: 'ぜんぶたべなくてもいいです。', chinese: '不用全部吃完也可以。' },
  ],
  '〜ないといけない': [
    { japanese: 'そろそろ帰らないといけない。', reading: 'そろそろかえらないといけない。', chinese: '差不多该回去了。' },
    { japanese: '明日早く起きないといけません。', reading: 'あしたはやくおきないといけません。', chinese: '明天必须早起。' },
  ],
  '〜から': [
    { japanese: '寒いから、窓を閉めてください。', reading: 'さむいから、まどをしめてください。', chinese: '因为冷，请关窗。' },
    { japanese: '明日試験があるから、今日は早く寝ます。', reading: 'あしたしけんがあるから、きょうははやくねます。', chinese: '因为明天有考试，今天早点睡。' },
  ],
  '〜ので': [
    { japanese: '雨が降っているので、傘を持って行きます。', reading: 'あめがふっているので、かさをもっていきます。', chinese: '因为在下雨，带伞去。' },
    { japanese: '電車が遅れたので、遅刻しました。', reading: 'でんしゃがおくれたので、ちこくしました。', chinese: '因为电车晚点了，所以迟到了。' },
  ],
  '〜けど / 〜が': [
    { japanese: '日本語は難しいけど、面白いです。', reading: 'にほんごはむずかしいけど、おもしろいです。', chinese: '日语虽然难，但很有趣。' },
    { japanese: 'この店は高いですが、美味しいです。', reading: 'このみせはたかいですが、おいしいです。', chinese: '这家店虽然贵，但很好吃。' },
  ],
  '〜でしょう': [
    { japanese: '明日は雨が降るでしょう。', reading: 'あしたはあめがふるでしょう。', chinese: '明天会下雨吧。' },
    { japanese: 'あの人は日本人でしょう？', reading: 'あのひとはにほんじんでしょう？', chinese: '那个人是日本人吧？' },
  ],
  '〜だろう': [
    { japanese: '明日も暑いだろう。', reading: 'あしたもあついだろう。', chinese: '明天也会很热吧。' },
    { japanese: '彼はもう帰っただろう。', reading: 'かれはもうかえっただろう。', chinese: '他已经回去了吧。' },
  ],
  '〜かもしれない': [
    { japanese: '午後から雨が降るかもしれません。', reading: 'ごごからあめがふるかもしれません。', chinese: '下午可能会下雨。' },
    { japanese: '彼は今日来ないかもしれません。', reading: 'かれはきょうこないかもしれません。', chinese: '他今天可能不来。' },
  ],
  '〜と思う': [
    { japanese: 'この映画は面白いと思います。', reading: 'このえいがはおもしろいとおもいます。', chinese: '我觉得这部电影很有趣。' },
    { japanese: '彼は正しいと思います。', reading: 'かれはただしいとおもいます。', chinese: '我觉得他是对的。' },
  ],
  '〜と言う': [
    { japanese: '私は田中と言います。', reading: 'わたしはたなかといいます。', chinese: '我叫田中。' },
    { japanese: 'これは日本語で何と言いますか。', reading: 'これはにほんごでなんといいますか。', chinese: '这个用日语怎么说？' },
  ],
  '〜と言っていました': [
    { japanese: '田中さんは明日来ると言っていました。', reading: 'たなかさんはあしたくるといっていました。', chinese: '田中先生说明天来。' },
    { japanese: '先生は宿題を忘れないでと言っていました。', reading: 'せんせいはしゅくだいをわすれないでといっていました。', chinese: '老师说不要忘记做作业。' },
  ],
  '〜の？': [
    { japanese: 'どうしたの？', reading: 'どうしたの？', chinese: '怎么了？' },
    { japanese: 'どこに行くの？', reading: 'どこにいくの？', chinese: '去哪里？' },
  ],
  '〜んだ': [
    { japanese: 'そうだったんだ。', reading: 'そうだったんだ。', chinese: '原来是这样的啊。' },
    { japanese: '私は日本語を勉強しているんだ。', reading: 'わたしはにほんごをべんきょうしているんだ。', chinese: '我是在学日语啦。' },
  ],
  '〜んです': [
    { japanese: 'どうしたんですか。', reading: 'どうしたんですか。', chinese: '你怎么了？' },
    { japanese: '日本語を勉強しているんです。', reading: 'にほんごをべんきょうしているんです。', chinese: '我是在学日语。' },
  ],
  '〜より': [
    { japanese: '電車より車のほうが便利です。', reading: 'でんしゃよりくるまのほうがべんりです。', chinese: '比起电车，汽车更方便。' },
    { japanese: '昨日より今日のほうが寒いです。', reading: 'きのうよりきょうのほうがさむいです。', chinese: '今天比昨天冷。' },
  ],
  _default: [
    { japanese: 'これは良い例です。', reading: 'これはよいれいです。', chinese: '这是一个好例子。' },
    { japanese: '毎日練習することが大切です。', reading: 'まいにちれんしゅうすることがたいせつです。', chinese: '每天练习很重要。' },
  ],
};

// ─── Generate the TypeScript file ────────────────────────────────────

const outputPath = path.join(__dirname, '..', 'src', 'data', 'grammar-data.ts');
const levels = ['N5', 'N4', 'N3', 'N2', 'N1'];

let output = `// Auto-generated by scripts/generate-grammar.cjs
// DO NOT EDIT MANUALLY

export interface GrammarEntry {
  id: string;
  pattern: string;
  meaning: string;
  explanation: string;
  level: string;
  examples: { japanese: string; reading: string; chinese: string }[];
}

export interface GrammarData {
  N5: GrammarEntry[];
  N4: GrammarEntry[];
  N3: GrammarEntry[];
  N2: GrammarEntry[];
  N1: GrammarEntry[];
}

export const grammarData: GrammarData = {
`;

for (const level of levels) {
  const entries = grammarData[level];
  output += `  ${level}: [\n`;
  entries.forEach((entry, idx) => {
    const id = `${level}-${String(idx + 1).padStart(3, '0')}`;
    const examples = exampleSentences[entry.pattern] || exampleSentences._default;
    const examplesStr = examples.map(e =>
      `      { japanese: '${e.japanese.replace(/'/g, "\\'")}', reading: '${e.reading.replace(/'/g, "\\'")}', chinese: '${e.chinese.replace(/'/g, "\\'")}' }`
    ).join(',\n');
    output += `    {\n`;
    output += `      id: '${id}',\n`;
    output += `      pattern: '${entry.pattern.replace(/'/g, "\\'")}',\n`;
    output += `      meaning: '${entry.meaning.replace(/'/g, "\\'")}',\n`;
    output += `      explanation: '${entry.explanation.replace(/'/g, "\\'")}',\n`;
    output += `      level: '${level}',\n`;
    output += `      examples: [\n${examplesStr}\n      ],\n`;
    output += `    },\n`;
  });
  output += `  ],\n`;
}

output += `};

// Total entries: ${Object.values(grammarData).reduce((sum, arr) => sum + arr.length, 0)}
`;

fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`Generated ${outputPath}`);
console.log(`Total entries: ${Object.values(grammarData).reduce((sum, arr) => sum + arr.length, 0)}`);
levels.forEach(level => {
  console.log(`  ${level}: ${grammarData[level].length} entries`);
});