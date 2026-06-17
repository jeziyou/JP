import { Link } from 'react-router-dom';
import { useLearningProgress } from '../hooks/useLearningProgress';
import { useEffect, useState } from 'react';
import { pickRandomWords, type JMDictWord } from '../data/jmdict-loader';
import { buildMeaning } from '../utils/translations';

/** 顶部快捷入口 */
const modules = [
  {
    to: '/vocabulary',
    title: '単語暗記',
    subtitle: 'Vocabulary',
    desc: '通过分级词库与闪卡系统掌握 JLPT 各级词汇',
    color: 'bg-gold-soft/60 border-gold/30',
    accent: 'text-gold',
    icon: '単',
  },
  {
    to: '/grammar',
    title: '文法学習',
    subtitle: 'Grammar',
    desc: '按 N5–N1 系统梳理语法条目，附例句与中文翻译',
    color: 'bg-bamboo-soft/60 border-bamboo/30',
    accent: 'text-bamboo',
    icon: '文',
  },
  {
    to: '/reading',
    title: '読解練習',
    subtitle: 'Reading',
    desc: '精选文章与简版新闻，选中日语即可查看释义',
    color: 'bg-primary-soft/60 border-primary/30',
    accent: 'text-primary',
    icon: '読',
  },
  {
    to: '/kana',
    title: '五十音図',
    subtitle: 'Kana',
    desc: '平假名与片假名对照表，作为初学者起步参考',
    color: 'bg-accent-soft/60 border-accent/30',
    accent: 'text-accent',
    icon: 'あ',
  },
];

export default function HomePage() {
  const { state, favorites, recentlyViewed, accuracy, uniqueWordsLearned } =
    useLearningProgress();

  // 每日推荐：随机挑 3 个单词（每天第一次加载时记录）
  const [dailyWords, setDailyWords] = useState<JMDictWord[]>([]);
  const [dailyLoading, setDailyLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setDailyLoading(true);

    // 优先从用户收藏中选；不够则从全局词库补
    const favoriteWords = favorites.map((r) => r.word).filter(Boolean);

    pickRandomWords(3, (w) =>
      favoriteWords.length > 0 ? favoriteWords.includes(w.word) : true,
    )
      .then((fromFav) => {
        if (cancelled) return;
        if (fromFav.length > 0) {
          setDailyWords(fromFav.slice(0, 3));
          setDailyLoading(false);
        } else {
          pickRandomWords(3).then((words) => {
            if (!cancelled) {
              setDailyWords(words);
              setDailyLoading(false);
            }
          });
        }
      })
      .catch(() => !cancelled && setDailyLoading(false));

    return () => {
      cancelled = true;
    };
    // 只在首次加载和收藏变化时刷新
  }, [favorites.length]);

  return (
    <div className="animate-slide-up">
      {/* 顶部问候 + 学习进度仪表盘 */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          日本語学習ツールへようこそ
        </h2>
        <p className="text-ink-light font-sans">欢迎使用一站式日语学习平台</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <StatCard label="已学单词" value={uniqueWordsLearned} suffix="词" accent="text-primary" />
          <StatCard label="收藏单词" value={favorites.length} suffix="词" accent="text-gold" />
          <StatCard label="连续学习" value={state.streakDays} suffix="天" accent="text-bamboo" />
          <StatCard
            label="测试正确率"
            value={state.testTotal > 0 ? accuracy : 0}
            suffix={state.testTotal > 0 ? '%' : '—'}
            accent="text-accent"
          />
        </div>
      </section>

      {/* 模块入口 */}
      <section className="mb-10">
        <h3 className="text-lg font-bold text-ink font-display mb-3">开始学习</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <Link
              key={mod.to}
              to={mod.to}
              className={`group block p-5 rounded-2xl border ${mod.color} transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`text-2xl font-serif w-11 h-11 flex items-center justify-center rounded-xl bg-white/70 ${mod.accent}`}
                >
                  {mod.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-bold text-ink font-display mb-0.5">
                    {mod.title}
                  </h4>
                  <p className="text-xs text-ink-muted mb-2 font-sans">{mod.subtitle}</p>
                  <p className="text-sm text-ink-light font-sans leading-relaxed">{mod.desc}</p>
                </div>
                <span className="text-ink-muted group-hover:translate-x-1 transition-transform text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 每日推荐 */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-lg font-bold text-ink font-display">今日の単語 · 每日推荐</h3>
          <Link to="/vocabulary" className="text-xs text-primary font-sans hover:underline">
            去词汇页 →
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-border p-4">
          {dailyLoading ? (
            <p className="text-sm text-ink-muted font-sans py-6 text-center">
              <span className="inline-block animate-spin mr-2">⟳</span>正在为你挑选单词…
            </p>
          ) : dailyWords.length === 0 ? (
            <p className="text-sm text-ink-muted font-sans py-6 text-center">
              暂无推荐词，先去 <Link to="/vocabulary" className="text-primary underline">词汇页</Link> 看看吧
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {dailyWords.map((w) => (
                <Link
                  key={`${w.word}-${w.reading}`}
                  to={`/vocabulary?q=${encodeURIComponent(w.word)}`}
                  className="block p-4 rounded-xl bg-paper-dark hover:bg-paper-light transition-colors"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xl font-serif text-ink font-bold">{w.word}</span>
                    {w.reading && w.reading !== w.word && (
                      <span className="text-xs text-ink-light font-sans">{w.reading}</span>
                    )}
                  </div>
                  <p className="text-xs text-ink-light font-sans leading-relaxed">
                    {buildMeaning(w.word, w.meaning)}
                  </p>
                  {w.level && (
                    <span className="inline-block mt-2 text-[10px] px-1.5 py-0.5 rounded bg-gold-soft text-gold-dark font-sans">
                      {w.level}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 最近查看 / 收藏单词 */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <SideCard title="最近查看">
          {recentlyViewed.length === 0 ? (
            <p className="text-xs text-ink-muted font-sans">你还没查看过任何单词。打开一篇文章选中试试吧～</p>
          ) : (
            <ul className="space-y-2">
              {recentlyViewed.slice(0, 6).map((r) => (
                <li key={r.word} className="flex items-baseline gap-2">
                  <span className="text-sm font-serif text-ink font-bold">{r.word}</span>
                  {r.reading && <span className="text-[11px] text-ink-light font-sans">{r.reading}</span>}
                  <span className="ml-auto text-xs text-ink-muted font-sans truncate max-w-[55%]">
                    {r.meaning || '—'}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </SideCard>

        <SideCard title="我的收藏" icon="★">
          {favorites.length === 0 ? (
            <p className="text-xs text-ink-muted font-sans">
              在文章中选中单词后点击 ☆ 即可收藏，方便之后复习
            </p>
          ) : (
            <ul className="space-y-2">
              {favorites.slice(0, 6).map((r) => (
                <li key={r.word} className="flex items-baseline gap-2">
                  <span className="text-gold-dark text-sm">★</span>
                  <span className="text-sm font-serif text-ink font-bold">{r.word}</span>
                  {r.reading && <span className="text-[11px] text-ink-light font-sans">{r.reading}</span>}
                  <span className="ml-auto text-xs text-ink-muted font-sans truncate max-w-[50%]">
                    {r.meaning || '—'}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {favorites.length > 0 && (
            <Link to="/vocabulary?mode=flashcard&filter=favorites" className="block mt-3 text-xs text-primary font-sans hover:underline">
              复习所有收藏（{favorites.length} 词）→
            </Link>
          )}
        </SideCard>
      </section>

      {/* 学习小贴士 */}
      <section>
        <div className="p-5 rounded-2xl bg-white border border-border">
          <h3 className="font-bold text-ink mb-3 font-display">学習のヒント · 学习小贴士</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Tip icon="📝" title="毎日少しずつ" body="每天花 15 分钟比周末学 2 小时更有效。" />
            <Tip icon="🔄" title="復習を忘れず" body="用收藏功能标记生词，次日回看一遍即可巩固。" />
            <Tip icon="🎯" title="実践が大切" body="打开阅读页，选一段真正的日文文章试读。" />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  suffix,
  accent,
}: {
  label: string;
  value: number | string;
  suffix?: string;
  accent?: string;
}) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-border">
      <p className="text-xs text-ink-muted font-sans mb-1">{label}</p>
      <p className={`text-2xl font-bold font-display ${accent || 'text-ink'}`}>
        {value}
        {suffix && <span className="text-sm ml-0.5 text-ink-light font-sans">{suffix}</span>}
      </p>
    </div>
  );
}

function SideCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-border">
      <h4 className="font-bold text-ink font-display mb-3 text-sm">
        {icon && <span className="mr-1">{icon}</span>}
        {title}
      </h4>
      {children}
    </div>
  );
}

function Tip({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="p-3 rounded-xl bg-paper-dark">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="text-sm font-bold text-ink font-sans mb-1">{title}</p>
      <p className="text-xs text-ink-light font-sans leading-relaxed">{body}</p>
    </div>
  );
}
