export interface Article {
  id: string;
  title: string;
  source: string;
  date: string;
  content: string;
  translation: string;
  vocabulary: { word: string; reading: string; meaning: string }[];
}

export const articles: Article[] = [
  {
    id: 'art-001',
    title: '春の訪れ',
    source: '天声人語',
    date: '2024-03-20',
    content: '桜の開花予想が発表された。今年は平年より早く、東京では三月下旬に満開を迎えるという。春の訪れを告げる桜は、日本人の心に深く根付いている。短い花の命を惜しむように、人々は毎年花見に繰り出す。',
    translation: '樱花开花预测已经发布。据说今年比往年更早，东京将在三月下旬迎来盛开。樱花预示着春天的到来，深深扎根于日本人的心中。人们仿佛珍惜这短暂的花期，每年都外出赏花。',
    vocabulary: [
      { word: '開花予想', reading: 'かいかよそう', meaning: '开花预测' },
      { word: '平年', reading: 'へいねん', meaning: '往年' },
      { word: '満開', reading: 'まんかい', meaning: '盛开' },
      { word: '訪れ', reading: 'おとずれ', meaning: '到来' },
      { word: '惜しむ', reading: 'おしむ', meaning: '珍惜' },
      { word: '繰り出す', reading: 'くりだす', meaning: '外出' },
    ],
  },
  {
    id: 'art-002',
    title: 'AIと教育',
    source: '朝日新聞',
    date: '2024-06-15',
    content: 'AI技術の急速な発展に伴い、教育現場でも大きな変化が起きている。個別最適化された学習プログラムの提供や、教師の業務負担の軽減など、AIの活用には大きな期待が寄せられている。一方で、生徒の思考力低下を懸念する声も少なくない。',
    translation: '随着AI技术的快速发展，教育现场也发生了巨大变化。人们对AI的应用寄予厚望，如提供个性化学习方案、减轻教师工作负担等。但另一方面，也有不少声音担忧学生思考能力会下降。',
    vocabulary: [
      { word: '急速', reading: 'きゅうそく', meaning: '快速' },
      { word: '伴う', reading: 'ともなう', meaning: '伴随着' },
      { word: '個別最適化', reading: 'こべつさいてきか', meaning: '个性化优化' },
      { word: '負担', reading: 'ふたん', meaning: '负担' },
      { word: '軽減', reading: 'けいげん', meaning: '减轻' },
      { word: '懸念', reading: 'けねん', meaning: '担忧' },
    ],
  },
  {
    id: 'art-003',
    title: '日本の夏祭り',
    source: '天声人語',
    date: '2024-07-28',
    content: '各地で夏祭りの季節がやってきた。浴衣姿の人々が夜店を楽しみ、夜空には花火が打ち上がる。これらの祭りの多くは、古くからの伝統に根ざしている。五穀豊穣や疫病退散を願う祈りが、現代の賑やかな祭りの原点となっている。',
    translation: '各地的夏日祭典季节来了。穿着浴衣的人们享受着夜市，烟花在夜空中绽放。这些祭典大多根植于古老的传统。祈求五谷丰登和祛除瘟疫的祈愿，成为了现代热闹祭典的起源。',
    vocabulary: [
      { word: '浴衣', reading: 'ゆかた', meaning: '浴衣（夏季和服）' },
      { word: '夜店', reading: 'よみせ', meaning: '夜市摊位' },
      { word: '打ち上がる', reading: 'うちあがる', meaning: '升空，绽放' },
      { word: '五穀豊穣', reading: 'ごこくほうじょう', meaning: '五谷丰登' },
      { word: '疫病退散', reading: 'えきびょうたいさん', meaning: '祛除瘟疫' },
      { word: '賑やか', reading: 'にぎやか', meaning: '热闹' },
    ],
  },
  {
    id: 'art-004',
    title: '高齢化社会の課題',
    source: '朝日新聞',
    date: '2024-09-10',
    content: '日本の高齢化率は世界最高水準に達している。65歳以上の人口が総人口の約30%を占め、社会保障制度の持続可能性が問われている。介護人材の不足や年金制度の見直しなど、解決すべき課題は山積している。',
    translation: '日本的老龄化率已达到世界最高水平。65岁以上人口约占总人口的30%，社会保障制度的可持续性受到质疑。护理人才短缺、养老金制度改革等，需要解决的问题堆积如山。',
    vocabulary: [
      { word: '高齢化', reading: 'こうれいか', meaning: '老龄化' },
      { word: '水準', reading: 'すいじゅん', meaning: '水平' },
      { word: '持続可能性', reading: 'じぞくかのうせい', meaning: '可持续性' },
      { word: '介護', reading: 'かいご', meaning: '护理' },
      { word: '山積', reading: 'さんせき', meaning: '堆积如山' },
    ],
  },
  {
    id: 'art-005',
    title: '読書の秋',
    source: '天声人語',
    date: '2024-10-15',
    content: '秋の夜長に読書を楽しむ人は多い。電子書籍の普及により、いつでもどこでも本が読める時代になった。しかし、紙の本の手触りや、ページをめくる音を懐かしむ声も根強い。デジタルとアナログ、それぞれの良さを活かした読書文化が育まれている。',
    translation: '许多人在秋夜漫长时享受阅读。随着电子书的普及，已经到了随时随地都能读书的时代。但怀念纸质书的手感和翻页声音的人也不在少数。数字与模拟，各自发挥优势的阅读文化正在孕育中。',
    vocabulary: [
      { word: '夜長', reading: 'よなが', meaning: '长夜' },
      { word: '普及', reading: 'ふきゅう', meaning: '普及' },
      { word: '手触り', reading: 'てざわり', meaning: '手感' },
      { word: '懐かしむ', reading: 'なつかしむ', meaning: '怀念' },
      { word: '根強い', reading: 'ねづよい', meaning: '根深蒂固' },
      { word: '育む', reading: 'はぐくむ', meaning: '培育' },
    ],
  },
];