/**
 * 多题型测试引擎
 * 支持 7 种题型，参考 MOJi辞书 / 烧饼日语 的练习模式设计：
 *
 * Type 1: 四选一（看日语选中文释义）
 * Type 2: 逆向四选一（看中文选日语单词）
 * Type 3: 看假名选日语汉字
 * Type 4: 看日语选假名读音
 * Type 5: 听写测试（展示中文，用户输入日语）  ← 最高价值
 * Type 6: 打乱假名拼写（把一个词的假名打乱重新排序）
 * Type 7: 连连看（将日语与中文配对，两列布局）
 */

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  recordTestResult,
  recordSeenWord,
  toggleFavorite,
  isWordFavorited,
  useLearningProgress,
} from '../hooks/useLearningProgress';
import {
  getDueWords,
  recordReview,
  type SRSRecord,
  type ReviewRating,
} from '../utils/srs-algorithm';
import { buildMeaning } from '../utils/translations';
import { getExamplesForWord } from '../data/vocab-examples';
import type { JMDictWord } from '../data/jmdict-loader';

export type TestType =
  | '四选一'       // 看日语选中文
  | '逆向选择'     // 看中文选日语
  | '汉字选择'     // 看假名选汉字
  | '读音选择'     // 看日语选假名读音
  | '听写输入'     // 展示中文，输入日语（最高价值）
  | '假名排序'     // 打乱假名重新组成单词
  | '连连看';      // 配对日语和中文

interface TestQuestion {
  id: string;
  type: TestType;
  word: JMDictWord;
  /** 题目文本（如展示日语或中文） */
  prompt: string;
  /** 候选项（选择题用） */
  options?: string[];
  /** 正确答案索引（选择题） */
  correctIndex?: number;
  /** 正确答案（输入/排序题） */
  correctAnswer?: string;
  /** 候选项（排序题，乱序后的片假名序列） */
  shuffledKana?: string[];
  /** 连连看配对数据 */
  pairOptions?: { text: string; isJapanese: boolean }[];
}

const TEST_TYPE_LABELS: Record<TestType, string> = {
  '四选一': '看日语选释义',
  '逆向选择': '看释义选单词',
  '汉字选择': '看假名选汉字',
  '读音选择': '看单词选读音',
  '听写输入': '听写挑战',
  '假名排序': '假名排序',
  '连连看': '连连看配对',
};

/** 打乱数组（洗牌算法） */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** 生成一个选择题的候选项 */
function generateOptions(
  correct: string,
  pool: JMDictWord[],
  keyFn: (w: JMDictWord) => string,
): string[] {
  const options = new Set<string>([correct]);
  const shuffled = shuffle(pool);
  for (const w of shuffled) {
    const opt = keyFn(w);
    if (opt && opt !== correct) {
      options.add(opt);
      if (options.size >= 4) break;
    }
  }
  return shuffle(Array.from(options));
}

function buildQuestion(
  word: JMDictWord,
  pool: JMDictWord[],
  type: TestType,
  allWords: JMDictWord[],
): TestQuestion {
  const id = `${word.word}-${type}-${Date.now()}`;

  switch (type) {
    case '四选一': {
      const correct = buildMeaning(word.word, word.meaning);
      const options = generateOptions(correct, pool, (w) => buildMeaning(w.word, w.meaning));
      return {
        id, type, word, prompt: word.word,
        options, correctIndex: options.indexOf(correct),
      };
    }
    case '逆向选择': {
      const correct = word.word;
      const options = generateOptions(correct, pool, (w) => w.word);
      return {
        id, type, word, prompt: buildMeaning(word.word, word.meaning),
        options, correctIndex: options.indexOf(correct),
      };
    }
    case '汉字选择': {
      const correct = word.word;
      // 找该读音对应的其他汉字作为干扰项
      const sameReading = allWords.filter(
        (w) => w.reading === word.reading && w.word !== word.word,
      );
      const distractors = shuffle(allWords)
        .filter((w) => w.word !== word.word && !sameReading.some((s) => s.word === w.word))
        .slice(0, 3)
        .map((w) => w.word);
      const options = shuffle([correct, ...distractors, ...sameReading.slice(0, 1).map((w) => w.word)].slice(0, 4));
      return {
        id, type, word, prompt: word.reading,
        options, correctIndex: options.indexOf(correct),
      };
    }
    case '读音选择': {
      const correct = word.reading;
      const options = generateOptions(correct, pool, (w) => w.reading);
      return {
        id, type, word, prompt: word.word,
        options, correctIndex: options.indexOf(correct),
      };
    }
    case '听写输入': {
      return {
        id, type, word,
        prompt: buildMeaning(word.word, word.meaning),
        correctAnswer: word.word,
      };
    }
    case '假名排序': {
      // 从单词中提取所有假名字符并打乱
      const kana = word.word.split('').filter(
        (c) => /[\u3040-\u309f\u30a0-\u30ff]/.test(c),
      );
      return {
        id, type, word,
        prompt: buildMeaning(word.word, word.meaning),
        correctAnswer: word.word,
        shuffledKana: shuffle(kana),
      };
    }
    case '连连看': {
      const japanese = shuffle(allWords.filter((w) => w.word !== word.word)).slice(0, 4)
        .map((w) => ({ text: w.word, isJapanese: true }));
      const chinese = shuffle([
        { text: buildMeaning(word.word, word.meaning), isJapanese: false },
        ...shuffle(allWords.filter((w) => w.word !== word.word))
          .slice(0, 4)
          .map((w) => ({ text: buildMeaning(w.word, w.meaning), isJapanese: false })),
      ]);
      return {
        id, type, word,
        prompt: word.word,
        options: shuffle([word.word, ...japanese.map((j) => j.text)]).map((t, i) => t),
        pairOptions: shuffle([...japanese, ...chinese]),
      };
    }
  }
}

export default function TestPage() {
  const [testType, setTestType] = useState<TestType>('四选一');
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [inputAnswer, setInputAnswer] = useState('');
  const [pairSelections, setPairSelections] = useState<{ japanese: string; chinese: string } | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [shuffledKana, setShuffledKana] = useState<string[]>([]);

  const { state, favorites } = useLearningProgress();
  const inputRef = useRef<HTMLInputElement>(null);

  // 从 SRS 优先获取应该复习的词，不够则从收藏补
  const allLearnedWords = useMemo(() => {
    const srsWords = getDueWords().map((r) => r.word);
    const favWords = favorites.map((f) => f.word);
    const seenWords = Object.keys(state.words).filter((w) => state.words[w].seenCount > 0);
    const pool = [...new Set([...srsWords, ...favWords, ...seenWords])];
    return pool;
  }, [favorites, state.words]);

  const allJMDictWords = useMemo(() => {
    // 用收藏作为备选词库（已在 VocabularyPage 加载的全局数据）
    return favorites.length > 0
      ? favorites.map((f) => ({ word: f.word, reading: f.reading || '', meaning: f.meaning || '', level: f.word, partOfSpeech: '単語', category: '自定义' } as JMDictWord))
      : [];
  }, [favorites]);

  const startQuiz = useCallback(
    (type: TestType, count = 10) => {
      if (allLearnedWords.length < 1) return;

      const pool = allJMDictWords.length > 0 ? allJMDictWords : favorites.map(
        (f) => ({ word: f.word, reading: f.reading || '', meaning: f.meaning || '', level: 'N5', partOfSpeech: '単語', category: '自定义' } as JMDictWord),
      );

      const qs: TestQuestion[] = [];
      const usedWords = new Set<string>();

      // 优先使用 SRS 即将到期的词
      const srsDue = getDueWords()
        .filter((r) => r.dueDate <= new Date().toISOString().slice(0, 10))
        .map((r) => r.word);

      const srsPool = srsDue.filter((w) => !usedWords.has(w));
      const randomPool = shuffle(allLearnedWords.filter((w) => !usedWords.has(w)));

      const wordList = [...srsPool, ...randomPool].slice(0, count);

      for (const w of wordList) {
        const wordObj = pool.find((p) => p.word === w) || {
          word: w, reading: '', meaning: '', level: 'N5', partOfSpeech: '単語', category: '自定义',
        } as JMDictWord;
        qs.push(buildQuestion(wordObj, pool, type, pool));
        usedWords.add(w);
      }

      setQuestions(qs);
      setCurrentIdx(0);
      setRevealed(false);
      setSelectedAnswer(null);
      setInputAnswer('');
      setPairSelections(null);
      setQuizFinished(false);
      setSessionCorrect(0);
      setSessionTotal(0);
      setShuffledKana(qs[0]?.shuffledKana || []);
      setTimeout(() => inputRef.current?.focus(), 100);
    },
    [allLearnedWords, allJMDictWords, favorites],
  );

  const currentQ = questions[currentIdx];

  const checkAnswer = useCallback(
    (answer: string | number) => {
      if (revealed) return;

      let isCorrect = false;
      if (currentQ.type === '听写输入') {
        isCorrect = answer === currentQ.correctAnswer;
      } else if (currentQ.type === '假名排序') {
        isCorrect = answer === currentQ.correctAnswer;
      } else {
        isCorrect = answer === currentQ.correctIndex;
      }

      const rating: ReviewRating = isCorrect ? 'good' : 'again';
      recordReview(currentQ.word.word, rating);
      recordTestResult(isCorrect);
      recordSeenWord({
        word: currentQ.word.word,
        reading: currentQ.word.reading,
        meaning: currentQ.word.meaning,
      });

      setRevealed(true);
      setSelectedAnswer(answer as number);
      setSessionTotal((n) => n + 1);
      if (isCorrect) setSessionCorrect((n) => n + 1);
    },
    [currentQ, revealed],
  );

  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIdx((i) => i + 1);
      setRevealed(false);
      setSelectedAnswer(null);
      setInputAnswer('');
      setPairSelections(null);
      setShuffledKana(questions[currentIdx + 1]?.shuffledKana || []);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentIdx, questions]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputAnswer.trim() || revealed) return;
    checkAnswer(inputAnswer.trim());
  };

  const handleKanaClick = (kana: string) => {
    if (revealed) return;
    const next = inputAnswer + kana;
    setInputAnswer(next);
    // 自动检测是否完成
    const q = currentQ;
    if (q && q.type === '假名排序') {
      // 实时显示用户已输入的内容
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputAnswer.trim()) {
      checkAnswer(inputAnswer.trim());
    }
  };

  const accuracy =
    sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
  const srsStats = getDueWords().length > 0
    ? getDueWords().filter((r) => r.dueDate <= new Date().toISOString().slice(0, 10)).length
    : 0;

  return (
    <div className="animate-slide-up">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">词汇练习</h2>
        <p className="text-ink-light font-sans">
          多种题型练习，实时记录复习进度（基于间隔重复算法）
        </p>
      </div>

      {/* 顶部统计条 */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-2xl border border-border">
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-muted font-sans">待复习</span>
          <span className="text-lg font-bold text-vermilion">{srsStats}</span>
          <span className="text-xs text-ink-muted font-sans">词</span>
        </div>
        <div className="border-l border-border" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-muted font-sans">本次正确率</span>
          <span className="text-lg font-bold text-success">{accuracy}%</span>
          <span className="text-xs text-ink-muted font-sans">（{sessionCorrect}/{sessionTotal}）</span>
        </div>
        <div className="border-l border-border" />
        <div className="flex items-center gap-2">
          <span className="text-xs text-ink-muted font-sans">连续学习</span>
          <span className="text-lg font-bold text-gold">🔥 {state.streakDays}</span>
          <span className="text-xs text-ink-muted font-sans">天</span>
        </div>
      </div>

      {/* 题型选择 + 开始按钮 */}
      {!quizFinished && questions.length === 0 && (
        <div className="space-y-4">
          <p className="text-sm text-ink-muted font-sans">
            {allLearnedWords.length === 0
              ? '⚠️ 还没有学习记录。请先在词汇页浏览一些单词，或收藏想复习的词条。'
              : `📚 已收录 ${allLearnedWords.length} 个学习过的单词，支持 SRS 间隔复习。`}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(Object.entries(TEST_TYPE_LABELS) as [TestType, string][]).map(([type, label]) => (
              <button
                key={type}
                onClick={() => startQuiz(type, 10)}
                disabled={allLearnedWords.length === 0}
                className="p-4 rounded-xl border border-border bg-white hover:bg-paper-dark hover:border-primary/40 transition-all duration-200 text-left disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <p className="text-sm font-bold text-ink font-sans">{label}</p>
                <p className="text-xs text-ink-muted font-sans mt-1">
                  {type === '四选一' && '看日语选释义'}
                  {type === '逆向选择' && '看释义选单词'}
                  {type === '汉字选择' && '看假名选汉字'}
                  {type === '读音选择' && '看单词选读音'}
                  {type === '听写输入' && '输入日语单词'}
                  {type === '假名排序' && '重新排列假名'}
                  {type === '连连看' && '日语中文配对'}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 题目区域 */}
      {!quizFinished && currentQ && (
        <div className="space-y-6">
          {/* 题目类型标签 */}
          <div className="flex items-center justify-between">
            <span className="text-xs px-2.5 py-1 rounded-full bg-primary-soft text-primary font-sans">
              {TEST_TYPE_LABELS[currentQ.type]}
            </span>
            <span className="text-xs text-ink-muted font-sans">
              {currentIdx + 1} / {questions.length}
            </span>
          </div>

          {/* 题目卡片 */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <p className="text-xs text-ink-muted font-sans mb-3 text-center">
              {currentQ.type === '听写输入' ? '请输入日语单词' : currentQ.type === '假名排序' ? '请重新排列假名组成单词' : ''}
            </p>
            <p className={`font-serif text-ink text-center ${currentQ.type === '连连看' ? 'text-3xl' : 'text-4xl'} font-bold mb-2`}>
              {currentQ.prompt}
            </p>
            {currentQ.word.reading && currentQ.type !== '汉字选择' && currentQ.type !== '连连看' && (
              <p className="text-center text-sm text-ink-light font-sans mb-4">
                【{currentQ.word.reading}】
              </p>
            )}
          </div>

          {/* ===== 选择题 ===== */}
          {(currentQ.type === '四选一' || currentQ.type === '逆向选择' || currentQ.type === '汉字选择' || currentQ.type === '读音选择') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentQ.options?.map((opt, idx) => {
                const isCorrect = idx === currentQ.correctIndex;
                const isSelected = selectedAnswer === idx;
                return (
                  <button
                    key={idx}
                    disabled={revealed}
                    onClick={() => checkAnswer(idx)}
                    className={`text-left px-4 py-3.5 rounded-xl border transition-all duration-200 text-sm font-sans ${
                      revealed
                        ? isCorrect
                          ? 'bg-success-soft border-success text-success-dark font-bold'
                          : isSelected
                          ? 'bg-vermilion-soft border-vermilion text-vermilion'
                          : 'bg-white border-border text-ink-muted'
                        : 'bg-white border-border text-ink hover:border-primary/40 hover:bg-primary-soft/20'
                    }`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {/* ===== 听写输入 ===== */}
          {currentQ.type === '听写输入' && (
            <form onSubmit={handleInputSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputAnswer}
                  onChange={(e) => !revealed && setInputAnswer(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={revealed}
                  placeholder="输入日语单词…"
                  className="flex-1 px-4 py-3 rounded-xl border-2 border-border bg-white text-ink font-serif text-xl placeholder:text-ink-muted focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
                  autoComplete="off"
                  spellCheck={false}
                />
                {!revealed && (
                  <button
                    type="submit"
                    disabled={!inputAnswer.trim()}
                    className="px-5 py-3 rounded-xl bg-primary text-white font-bold font-sans hover:bg-primary-light transition-colors disabled:opacity-40"
                  >
                    确认
                  </button>
                )}
              </div>
              {revealed && (
                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm font-sans">
                    {inputAnswer.trim() === currentQ.correctAnswer ? (
                      <span className="text-success font-bold">✓ 正确！</span>
                    ) : (
                      <>
                        <span className="text-vermilion font-bold">✗ 正确答案：</span>
                        <span className="text-2xl font-bold text-ink font-serif ml-2">{currentQ.correctAnswer}</span>
                      </>
                    )}
                  </p>
                  {currentQ.word.reading && (
                    <p className="text-sm text-ink-light font-sans mt-1">{currentQ.word.reading}</p>
                  )}
                </div>
              )}
            </form>
          )}

          {/* ===== 假名排序 ===== */}
          {currentQ.type === '假名排序' && (
            <div className="space-y-4">
              {/* 已输入区域 */}
              <div className="bg-white rounded-xl border-2 border-primary/30 p-4 min-h-[60px] flex items-center justify-center">
                {inputAnswer ? (
                  <div className="flex gap-1">
                    {inputAnswer.split('').map((k, i) => (
                      <span key={i} className="text-3xl font-serif text-ink">{k}</span>
                    ))}
                  </div>
                ) : (
                  <p className="text-ink-muted text-sm font-sans">点击下方假名组成单词</p>
                )}
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => setInputAnswer((s) => s.slice(0, -1))}
                  disabled={!inputAnswer || revealed}
                  className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink font-sans hover:bg-paper-light disabled:opacity-40"
                >
                  退格
                </button>
                <button
                  onClick={() => { setInputAnswer(''); }}
                  disabled={!inputAnswer || revealed}
                  className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink font-sans hover:bg-paper-light disabled:opacity-40"
                >
                  清空
                </button>
                {!revealed && (
                  <button
                    onClick={() => checkAnswer(inputAnswer)}
                    disabled={!inputAnswer}
                    className="px-5 py-2 rounded-lg bg-primary text-white font-bold font-sans hover:bg-primary-light disabled:opacity-40"
                  >
                    确认
                  </button>
                )}
              </div>

              {/* 乱序假名选择区 */}
              <div className="flex flex-wrap gap-2 justify-center">
                {(revealed ? (currentQ.correctAnswer || '').split('') : shuffledKana).map((k, i) => (
                  <button
                    key={`${k}-${i}`}
                    onClick={() => !revealed && handleKanaClick(k)}
                    disabled={revealed || (revealed && k === ' ')}
                    className={`w-12 h-12 rounded-xl border-2 text-xl font-serif transition-all ${
                      revealed
                        ? k === ' '
                          ? 'border-transparent bg-transparent'
                          : 'border-primary/40 bg-primary-soft/30 text-ink-muted'
                        : 'border-border bg-white text-ink hover:border-primary/40 hover:bg-primary-soft/20'
                    }`}
                  >
                    {k !== ' ' ? k : ''}
                  </button>
                ))}
              </div>

              {/* 结果反馈 */}
              {revealed && (
                <div className="bg-white rounded-xl border border-border p-4">
                  <p className="text-sm font-sans">
                    {inputAnswer === currentQ.correctAnswer ? (
                      <span className="text-success font-bold">✓ 正确！</span>
                    ) : (
                      <>
                        <span className="text-vermilion font-bold">✗ 正确答案：</span>
                        <span className="text-2xl font-bold text-ink font-serif ml-2">{currentQ.correctAnswer}</span>
                        <span className="text-sm text-ink-light ml-2">（{currentQ.word.reading}）</span>
                      </>
                    )}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ===== 连连看 ===== */}
          {currentQ.type === '连连看' && (
            <div>
              <p className="text-xs text-ink-muted font-sans mb-3 text-center">
                提示：{currentQ.prompt}（{currentQ.word.reading}）
              </p>
              <div className="grid grid-cols-2 gap-4">
                {/* 日语列 */}
                <div className="space-y-2">
                  <p className="text-xs text-ink-muted font-sans mb-2">🇯🇵 日语</p>
                  {(currentQ.options || []).map((opt, idx) => (
                    <button
                      key={idx}
                      disabled={revealed}
                      onClick={() => !revealed && setPairSelections((prev) => prev ? null : { japanese: opt, chinese: '' })}
                      className={`w-full px-3 py-2.5 rounded-lg border text-sm font-serif text-center transition-all ${
                        revealed
                          ? opt === currentQ.word.word
                            ? 'bg-success-soft border-success text-success-dark font-bold'
                            : 'bg-white border-border text-ink-muted'
                          : pairSelections?.japanese === opt
                          ? 'bg-primary-soft border-primary text-primary font-bold'
                          : 'bg-white border-border text-ink hover:border-primary/40'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {/* 中文列 */}
                <div className="space-y-2">
                  <p className="text-xs text-ink-muted font-sans mb-2">🇨🇳 中文</p>
                  {(currentQ.pairOptions || []).map((opt, idx) => {
                    const isCorrectChinese = opt.text === buildMeaning(currentQ.word.word, currentQ.word.meaning);
                    const isSelected = pairSelections?.japanese === currentQ.word.word && isCorrectChinese;
                    return (
                      <button
                        key={idx}
                        disabled={revealed}
                        onClick={() => {
                          if (revealed) return;
                          if (!pairSelections) {
                            setPairSelections({ japanese: '', chinese: opt.text });
                            // 自动判断是否正确
                            if (isCorrectChinese) {
                              checkAnswer(0);
                            }
                          }
                        }}
                        className={`w-full px-3 py-2.5 rounded-lg border text-xs text-center font-sans transition-all ${
                          revealed
                            ? isCorrectChinese
                              ? 'bg-success-soft border-success text-success-dark font-bold'
                              : 'bg-white border-border text-ink-muted'
                            : 'bg-white border-border text-ink hover:border-primary/40'
                        }`}
                      >
                        {opt.text.length > 20 ? opt.text.slice(0, 18) + '…' : opt.text}
                      </button>
                    );
                  })}
                </div>
              </div>
              {!revealed && (
                <p className="text-xs text-ink-muted font-sans mt-3 text-center">
                  点击日语和中文配对，或直接点击中文验证
                </p>
              )}
            </div>
          )}

          {/* 下一步按钮 */}
          {revealed && (
            <div className="flex flex-col items-center gap-3">
              {/* 例句展示 */}
              {(() => {
                const examples = getExamplesForWord(currentQ.word.word);
                if (examples.length === 0) return null;
                const ex = examples[0];
                return (
                  <div className="w-full bg-paper-dark rounded-xl p-4">
                    <p className="text-xs text-ink-muted font-sans mb-1">📝 例句</p>
                    <p className="text-base font-serif text-ink">{ex.japanese}</p>
                    {ex.reading && <p className="text-xs text-ink-light font-sans mt-0.5">{ex.reading}</p>}
                    {ex.chinese && <p className="text-xs text-ink-muted font-sans mt-0.5">{ex.chinese}</p>}
                  </div>
                );
              })()}

              <button
                onClick={nextQuestion}
                className="px-8 py-3 rounded-xl bg-primary text-white font-bold font-sans hover:bg-primary-light transition-colors text-base"
              >
                {currentIdx + 1 >= questions.length ? '查看结果 →' : '下一题 →'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 答题结束页 */}
      {quizFinished && (
        <div className="text-center py-12 space-y-6">
          <div className="text-6xl">{sessionTotal === 0 ? '🎯' : sessionCorrect / sessionTotal >= 0.8 ? '🏆' : sessionCorrect / sessionTotal >= 0.5 ? '💪' : '📚'}</div>
          <div>
            <h3 className="text-2xl font-bold text-ink font-display mb-2">练习完成！</h3>
            <p className="text-ink-light font-sans">
              本轮完成 <span className="text-primary font-bold">{sessionTotal}</span> 题，
              正确 <span className="text-success font-bold">{sessionCorrect}</span> 题，
              正确率 <span className="text-gold font-bold">{sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => startQuiz(testType, 10)}
              className="px-6 py-3 rounded-xl bg-primary text-white font-bold font-sans hover:bg-primary-light transition-colors"
            >
              再来10题
            </button>
            {allLearnedWords.length >= 20 && (
              <button
                onClick={() => startQuiz(testType, 20)}
                className="px-6 py-3 rounded-xl bg-gold text-white font-bold font-sans hover:bg-gold-light transition-colors"
              >
                挑战20题
              </button>
            )}
            <button
              onClick={() => {
                setQuestions([]);
                setQuizFinished(false);
                setSessionCorrect(0);
                setSessionTotal(0);
              }}
              className="px-6 py-3 rounded-xl bg-white border border-border text-ink font-sans hover:bg-paper-dark transition-colors"
            >
              切换题型
            </button>
          </div>

          {/* SRS 复习预告 */}
          {srsStats > 0 && (
            <p className="text-sm text-ink-muted font-sans">
              💡 还有 <span className="text-vermilion font-bold">{srsStats}</span> 个词等待复习，建议尽快完成
            </p>
          )}
        </div>
      )}
    </div>
  );
}
