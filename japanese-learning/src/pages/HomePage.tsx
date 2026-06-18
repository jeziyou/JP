import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  useLearningProgress,
  getDailyGoal,
  setDailyGoal,
  getTodayStudyCount,
  getHeatmapData,
} from '../hooks/useLearningProgress';
import { getDueWords } from '../utils/srs-algorithm';
import { pickRandomWords } from '../data/jmdict-loader';
import { buildMeaning } from '../utils/translations';
import type { JMDictWord } from '../data/jmdict-loader';

// ── 每日目标进度条（Duolingo 风格）────────────────────────────
function DailyGoalBar({ goal, studied, streak }: { goal: number; studied: number; streak: number }) {
  const pct = Math.min(100, Math.round((studied / goal) * 100));
  const isComplete = studied >= goal;

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm font-bold text-ink font-display">今日目标</p>
          <p className="text-xs text-ink-muted font-sans">
            {studied} / {goal} 词 {isComplete && <span className="text-success font-bold ml-2">✓ 完成！</span>}
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary">{pct}%</p>
          {streak > 0 && (
            <p className="text-xs text-gold font-sans">🔥 {streak}天连续</p>
          )}
        </div>
      </div>

      {/* 进度条 */}
      <div className="h-3 bg-paper-dark rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${
            isComplete ? 'bg-success' : pct >= 60 ? 'bg-primary' : pct >= 30 ? 'bg-gold' : 'bg-ink-muted/40'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* 调整目标 */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs text-ink-muted font-sans">每日目标：</span>
        {[10, 20, 30, 50].map((n) => (
          <button
            key={n}
            onClick={() => setDailyGoal(n)}
            className={`px-2.5 py-1 rounded-md text-xs font-sans transition-colors ${
              goal === n
                ? 'bg-primary text-white'
                : 'bg-paper-dark text-ink-muted hover:bg-paper-light'
            }`}
          >
            {n}词
          </button>
        ))}
      </div>
    </div>
  );
}

// ── 学习热力图（GitHub 风格）───────────────────────────────
function HeatmapChart({ data }: { data: { date: string; count: number }[] }) {
  const maxCount = Math.max(...data.map((d) => d.count), 1);

  // 按周分组（7列）
  const weeks: { date: string; count: number }[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  function getColor(count: number): string {
    if (count === 0) return '#ebedf0';
    const ratio = count / maxCount;
    if (ratio <= 0.25) return '#c6e48b';
    if (ratio <= 0.5) return '#7bc96f';
    if (ratio <= 0.75) return '#44905a';
    return '#196127';
  }

  const monthLabels: { label: string; col: number }[] = [];
  let lastMonth = '';
  weeks.forEach((week, wi) => {
    if (week[0]) {
      const month = week[0].date.slice(0, 7);
      if (month !== lastMonth) {
        monthLabels.push({ label: month, col: wi });
        lastMonth = month;
      }
    }
  });

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <p className="text-sm font-bold text-ink font-display mb-3">学习热力图</p>
      <div className="overflow-x-auto">
        {/* 月份标签 */}
        <div className="flex mb-1 ml-7 text-[10px] text-ink-muted font-sans">
          {monthLabels.map((m) => (
            <span key={m.label} style={{ marginLeft: m.col === 0 ? 0 : `${(m.col - (monthLabels[monthLabels.indexOf(m) - 1]?.col || 0) - 1) * 14}px` }}>
              {m.label}
            </span>
          ))}
        </div>
        {/* 热力图网格 */}
        <div className="flex gap-[3px]">
          {/* 星期标签 */}
          <div className="flex flex-col gap-[3px] justify-start mr-1">
            {['一', '三', '五'].map((d, i) => (
              <div key={i} className="h-[12px] text-[10px] text-ink-muted font-sans flex items-center">
                {d}
              </div>
            ))}
          </div>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) => (
                <div
                  key={`${wi}-${di}`}
                  className="w-[12px] h-[12px] rounded-[2px]"
                  style={{ backgroundColor: getColor(day.count) }}
                  title={`${day.date}: ${day.count} 词`}
                />
              ))}
              {/* 补齐第一周前面几天 */}
              {wi === 0 &&
                Array.from({ length: 7 - week.length }, (_, i) => (
                  <div key={`pad-${i}`} className="w-[12px] h-[12px]" />
                ))}
            </div>
          ))}
        </div>
        {/* 图例 */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-[10px] text-ink-muted font-sans">少</span>
          {[[0], [1], [3], [6], [10]].map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[10px] rounded-[2px]"
              style={{ backgroundColor: ['#ebedf0', '#c6e48b', '#7bc96f', '#44905a', '#196127'][i] }}
            />
          ))}
          <span className="text-[10px] text-ink-muted font-sans">多</span>
        </div>
      </div>
    </div>
  );
}

// ── 今日复习提醒（SRS）───────────────────────────────
function ReviewReminder({ dueCount }: { dueCount: number }) {
  if (dueCount === 0) return null;
  return (
    <Link
      to="/test"
      className="flex items-center gap-3 p-4 bg-vermilion-soft border border-vermilion/20 rounded-xl hover:bg-vermilion-soft/80 transition-colors"
    >
      <span className="text-2xl">🔔</span>
      <div>
        <p className="text-sm font-bold text-vermilion font-sans">
          有 {dueCount} 个词等待复习
        </p>
        <p className="text-xs text-vermilion/70 font-sans">
          基于间隔重复算法，这些词今日应复习
        </p>
      </div>
      <span className="ml-auto text-vermilion font-bold text-sm font-sans">去练习 →</span>
    </Link>
  );
}

// ── 学习路径引导（新手引导）───────────────────────────────
function LearningPathGuidance({ uniqueWordsLearned }: { uniqueWordsLearned: number }) {
  const steps = [
    { to: '/kana', icon: 'あ', label: '五十音', desc: '掌握假名基础', done: uniqueWordsLearned > 0 },
    { to: '/vocabulary', icon: '単', label: '词汇学习', desc: '开始背诵JLPT词汇', done: uniqueWordsLearned >= 10 },
    { to: '/test', icon: '🏆', label: '词汇练习', desc: '用测试巩固记忆', done: uniqueWordsLearned >= 5 },
    { to: '/grammar', icon: '文', label: '语法学习', desc: '系统掌握N5语法', done: uniqueWordsLearned >= 20 },
    { to: '/reading', icon: '読', label: '阅读练习', desc: '实战阅读日文文章', done: false },
  ];

  const doneCount = steps.filter((s) => s.done).length;

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-ink font-display">学习路径</p>
        <p className="text-xs text-ink-muted font-sans">{doneCount}/{steps.length} 完成</p>
      </div>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <div key={step.to} className="flex items-center gap-3">
            {/* 连接线 */}
            {idx > 0 && (
              <div className={`absolute left-[18px] w-0.5 h-3 -mt-3 ${
                steps[idx - 1].done ? 'bg-primary' : 'bg-border'
              }`} style={{ position: 'relative' }} />
            )}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                step.done
                  ? 'bg-success text-white'
                  : 'bg-paper-dark text-ink-muted border border-border'
              }`}
            >
              {step.done ? '✓' : step.icon}
            </div>
            <Link
              to={step.to}
              className="flex-1 flex items-center justify-between px-3 py-2 rounded-lg hover:bg-paper-dark transition-colors"
            >
              <div>
                <p className={`text-sm font-bold font-sans ${step.done ? 'text-success' : 'text-ink'}`}>
                  {step.label}
                </p>
                <p className="text-xs text-ink-muted font-sans">{step.desc}</p>
              </div>
              {!step.done && <span className="text-xs text-primary font-sans">去学习 →</span>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 每日推荐 ────────────────────────────────────────
function DailyRecommendation() {
  const [words, setWords] = useState<JMDictWord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pickRandomWords(3).then((w) => {
      setWords(w);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-bold text-ink font-display">今日の単語 · 每日推荐</p>
        <Link to="/vocabulary" className="text-xs text-primary font-sans hover:underline">
          更多 →
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-ink-muted font-sans py-4 text-center">加载中…</p>
      ) : words.length === 0 ? (
        <p className="text-sm text-ink-muted font-sans py-4 text-center">
          <Link to="/vocabulary" className="text-primary underline">去词汇页</Link> 开始学习
        </p>
      ) : (
        <div className="space-y-3">
          {words.map((w) => (
            <Link
              key={`${w.word}-${w.reading}`}
              to={`/vocabulary?q=${encodeURIComponent(w.word)}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-paper-dark hover:bg-paper-light transition-colors"
            >
              <span className="text-xl font-serif text-ink font-bold w-12 text-center">{w.word}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-ink-light font-sans">{w.reading}</p>
                <p className="text-sm text-ink-muted font-sans truncate">
                  {buildMeaning(w.word, w.meaning)}
                </p>
              </div>
              {w.level && (
                <span className="shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-gold-soft text-gold-dark font-sans">
                  {w.level}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── 主组件 ────────────────────────────────────────────
export default function HomePage() {
  const { state, favorites, recentlyViewed, accuracy, uniqueWordsLearned } = useLearningProgress();

  const dailyGoal = getDailyGoal();
  const todayCount = getTodayStudyCount();
  const heatmapData = getHeatmapData();
  const dueCount = getDueWords().filter((r) => r.dueDate <= new Date().toISOString().slice(0, 10)).length;

  const isNewUser = uniqueWordsLearned === 0;
  const todayComplete = todayCount >= dailyGoal;

  return (
    <div className="animate-slide-up space-y-6">
      {/* 顶部问候 */}
      <div>
        <h2 className="text-3xl font-bold text-ink font-display mb-1">
          {isNewUser ? '欢迎开始日语学习！' : todayComplete ? '🎉 今日目标已达成！' : '继续加油！'}
        </h2>
        <p className="text-ink-light font-sans">
          {isNewUser
            ? '建议从五十音开始，按学习路径逐步进阶'
            : `今天是学习的第 ${state.streakDays} 天，保持连续！`}
        </p>
      </div>

      {/* SRS 复习提醒 */}
      {dueCount > 0 && <ReviewReminder dueCount={dueCount} />}

      {/* 每日目标 */}
      <DailyGoalBar goal={dailyGoal} studied={todayCount} streak={state.streakDays} />

      {/* 核心数据统计 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="已学单词" value={uniqueWordsLearned} suffix="词" />
        <StatCard label="收藏单词" value={favorites.length} suffix="词" />
        <StatCard label="测试正确率" value={state.testTotal > 0 ? accuracy : '—'} suffix={state.testTotal > 0 ? '%' : ''} />
        <StatCard label="连续学习" value={state.streakDays} suffix="天" />
      </div>

      {/* 主体内容：左（学习路径+热力图）右（每日推荐） */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* 左侧两列 */}
        <div className="lg:col-span-2 space-y-4">
          <LearningPathGuidance uniqueWordsLearned={uniqueWordsLearned} />
          <HeatmapChart data={heatmapData} />
        </div>

        {/* 右侧：每日推荐 */}
        <div className="space-y-4">
          <DailyRecommendation />

          {/* 最近查看 */}
          <div className="bg-white rounded-2xl border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-ink font-display">最近查看</p>
            </div>
            {recentlyViewed.length === 0 ? (
              <p className="text-xs text-ink-muted font-sans">
                在文章中选中单词即可记录
              </p>
            ) : (
              <div className="space-y-2">
                {recentlyViewed.slice(0, 5).map((r) => (
                  <Link
                    key={r.word}
                    to={`/vocabulary?q=${encodeURIComponent(r.word)}`}
                    className="flex items-baseline gap-2 hover:bg-paper-dark rounded-lg px-2 py-1 -mx-2 transition-colors"
                  >
                    <span className="text-sm font-serif text-ink font-bold">{r.word}</span>
                    <span className="text-[11px] text-ink-light font-sans">{r.reading}</span>
                    <span className="ml-auto text-xs text-ink-muted font-sans truncate max-w-[50%]">
                      {r.meaning || '—'}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 收藏预览 */}
          {favorites.length > 0 && (
            <div className="bg-white rounded-2xl border border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-bold text-ink font-display">我的收藏</p>
                <span className="text-xs text-gold font-sans">★ {favorites.length}</span>
              </div>
              <div className="space-y-2">
                {favorites.slice(0, 5).map((f) => (
                  <Link
                    key={f.word}
                    to={`/vocabulary?q=${encodeURIComponent(f.word)}`}
                    className="flex items-baseline gap-2 hover:bg-paper-dark rounded-lg px-2 py-1 -mx-2 transition-colors"
                  >
                    <span className="text-gold text-xs">★</span>
                    <span className="text-sm font-serif text-ink font-bold">{f.word}</span>
                    <span className="ml-auto text-xs text-ink-muted font-sans truncate max-w-[50%]">
                      {f.meaning || '—'}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                to="/test"
                className="block mt-3 text-xs text-primary font-sans hover:underline text-center"
              >
                用 SRS 复习所有收藏 →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number | string;
  suffix?: string;
}) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-border">
      <p className="text-xs text-ink-muted font-sans mb-1">{label}</p>
      <p className="text-2xl font-bold text-ink font-display">
        {value}
        {suffix && <span className="text-sm ml-0.5 text-ink-light font-sans">{suffix}</span>}
      </p>
    </div>
  );
}
