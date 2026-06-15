import { Link } from 'react-router-dom';

const modules = [
  {
    to: '/kana',
    title: '五十音図',
    subtitle: 'Kana Chart',
    desc: '平仮名と片仮名の読み方と書き方を学びましょう',
    descCn: '学习平假名和片假名的读法和写法',
    color: 'bg-vermillion-soft border-vermillion/20',
    accent: 'text-vermillion',
    icon: 'あ',
  },
  {
    to: '/vocabulary',
    title: '単語暗記',
    subtitle: 'Vocabulary',
    desc: 'N5〜N1の単語をフラッシュカードで効率的に覚えましょう',
    descCn: '通过闪卡高效记忆N5~N1单词',
    color: 'bg-gold-soft border-gold/20',
    accent: 'text-gold',
    icon: '単',
  },
  {
    to: '/grammar',
    title: '文法学習',
    subtitle: 'Grammar',
    desc: 'JLPT各レベルの文法項目を例文とともに学びましょう',
    descCn: '通过例句学习JLPT各级语法项目',
    color: 'bg-bamboo-soft border-bamboo/20',
    accent: 'text-bamboo',
    icon: '文',
  },
  {
    to: '/reading',
    title: '読解練習',
    subtitle: 'Reading',
    desc: '天声人語や朝日新聞の記事で読解力を鍛えましょう',
    descCn: '通过天声人语和朝日新闻文章锻炼阅读能力',
    color: 'bg-indigo-soft/10 border-indigo-soft/20',
    accent: 'text-indigo-mid',
    icon: '読',
  },
];

export default function HomePage() {
  return (
    <div className="animate-slide-up">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          日本語学習ツールへようこそ
        </h2>
        <p className="text-ink-light font-sans">
          从五十音到高级阅读，一站式日语学习平台
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {modules.map((mod, i) => (
          <Link
            key={mod.to}
            to={mod.to}
            className={`group block p-6 rounded-xl border ${mod.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <span
                className={`text-3xl font-serif w-12 h-12 flex items-center justify-center rounded-lg bg-white/60 ${mod.accent}`}
              >
                {mod.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-ink font-display mb-1">
                  {mod.title}
                </h3>
                <p className="text-xs text-ink-muted mb-2 font-sans">
                  {mod.subtitle}
                </p>
                <p className="text-sm text-ink-light font-sans leading-relaxed">
                  {mod.desc}
                </p>
                <p className="text-xs text-ink-muted mt-1 font-sans">
                  {mod.descCn}
                </p>
              </div>
              <span className="text-ink-muted group-hover:translate-x-1 transition-transform text-lg">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-white border border-border">
        <h3 className="font-bold text-ink mb-4 font-display">学習のヒント</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl mb-2">📝</div>
            <p className="text-sm font-bold text-ink font-sans mb-1">
              毎日少しずつ
            </p>
            <p className="text-xs text-ink-light font-sans">
              每天坚持15分钟，效果远胜于一次性长时间学习
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔄</div>
            <p className="text-sm font-bold text-ink font-sans mb-1">
              復習を忘れずに
            </p>
            <p className="text-xs text-ink-light font-sans">
              定期复习比学习新内容更重要，参考艾宾浩斯遗忘曲线
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <p className="text-sm font-bold text-ink font-sans mb-1">
              実践が大切
            </p>
            <p className="text-xs text-ink-light font-sans">
              通过阅读真实的日语文章，将学到的知识运用到实际中
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}