import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { buildMeaning } from '../utils/translations';
import {
  loadVocabulary,
  searchVocabulary,
  type JMDictWord,
} from '../data/jmdict-loader';
import { getExamplesForWord, type VocabExample } from '../data/vocab-examples';
import {
  useLearningProgress,
  recordSeenWord,
  toggleFavorite,
  recordTestResult,
  isWordFavorited,
} from '../hooks/useLearningProgress';

const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

type PageMode = 'browse' | 'search' | 'test';
type TestStage = 'question' | 'revealed';

interface TestQuestion {
  word: JMDictWord;
  options: string[];
  correctIndex: number;
}

function FlashCard({
  word,
  flipped,
  onFlip,
  favorited,
  onToggleFav,
}: {
  word: JMDictWord;
  flipped: boolean;
  onFlip: () => void;
  favorited: boolean;
  onToggleFav: () => void;
}) {
  const examples = getExamplesForWord(word.word);
  return (
    <div
      onClick={onFlip}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] cursor-pointer select-none"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* 正面：显示日语 */}
        <div
          className="absolute inset-0 bg-white rounded-2xl border-2 border-border flex flex-col items-center justify-center p-6 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-xs text-ink-muted font-sans mb-4 px-3 py-1 bg-paper-dark rounded-full">
            {word.level} · {word.partOfSpeech || '—'}
          </span>
          <span className="text-5xl font-serif text-ink mb-4 text-center">{word.word}</span>
          <span className="text-lg text-ink-light font-sans">{word.reading}</span>
          <p className="text-xs text-ink-muted mt-6 font-sans">点击卡片查看释义</p>

          {/* 收藏按钮（右上角） */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFav();
            }}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-base transition-colors ${
              favorited ? 'bg-gold-soft text-gold-dark' : 'bg-paper-dark text-ink-muted hover:text-gold'
            }`}
            title={favorited ? '取消收藏' : '收藏'}
          >
            {favorited ? '★' : '☆'}
          </button>
        </div>

        {/* 背面：显示释义 + 例句 */}
        <div
          className="absolute inset-0 bg-primary rounded-2xl border-2 border-primary-light flex flex-col items-start justify-start p-6 text-white shadow-lg overflow-y-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-full flex flex-col items-center">
            <span className="text-sm text-white/80 font-sans mb-1">释义</span>
            <span className="text-2xl font-serif mb-3 text-white text-center leading-snug">
              {buildMeaning(word.word, word.meaning)}
            </span>
            <span className="text-base text-white/80 font-sans mb-2">{word.reading}</span>
            <span className="text-xl font-serif text-white mb-4">{word.word}</span>

            {examples.length > 0 && (
              <div className="w-full border-t border-white/30 pt-3 mt-2 text-left">
                <p className="text-xs text-white/70 font-sans mb-2">📝 例句</p>
                {examples.slice(0, 2).map((ex, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="text-sm font-serif text-white leading-snug">{ex.japanese}</p>
                    {ex.reading && <p className="text-xs text-white/60 font-sans mt-0.5">{ex.reading}</p>}
                    {ex.chinese && <p className="text-xs text-white/70 font-sans mt-0.5">{ex.chinese}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFav();
            }}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/80 bg-white/10 hover:bg-white/20 transition-colors"
            title={favorited ? '取消收藏' : '收藏'}
          >
            {favorited ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
}

/** 从 URL 解析初始参数（首页可直接跳转到特定模式） */
function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get('q') || '',
    mode: (params.get('mode') as PageMode | null) || null,
    filter: params.get('filter') || '',
    level: params.get('level') || '',
  };
}

export default function VocabularyPage() {
  const init = parseQueryParams();
  const [selectedLevel, setSelectedLevel] = useState<string>(init.level || 'N5');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [listMode, setListMode] = useState<'flashcard' | 'list'>('flashcard');
  const [pageMode, setPageMode] = useState<PageMode>(
    init.mode === 'test' ? 'test' : init.q ? 'search' : 'browse',
  );
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [filterType, setFilterType] = useState<'level' | 'category' | 'favorites'>(
    init.filter === 'favorites' ? 'favorites' : 'level',
  );

  const [isLoading, setIsLoading] = useState(true);
  const [allWords, setAllWords] = useState<JMDictWord[]>([]);
  const [vocabularyByLevel, setVocabularyByLevel] = useState<Record<string, JMDictWord[]>>({});
  const [vocabularyByCategory, setVocabularyByCategory] = useState<Record<string, JMDictWord[]>>({});

  // 搜索状态
  const [searchQuery, setSearchQuery] = useState<string>(init.q || '');
  const [searchResults, setSearchResults] = useState<JMDictWord[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 测试模式状态
  const [testQuestion, setTestQuestion] = useState<TestQuestion | null>(null);
  const [testStage, setTestStage] = useState<TestStage>('question');
  const [testCorrectCount, setTestCorrectCount] = useState(0);
  const [testTotalCount, setTestTotalCount] = useState(0);
  const [testLastResult, setTestLastResult] = useState<'correct' | 'wrong' | null>(null);

  const { favorites } = useLearningProgress();
  const favoriteWords = useMemo(() => {
    const favSet = new Set(favorites.map((f) => f.word));
    return allWords.filter((w) => favSet.has(w.word));
  }, [favorites, allWords]);

  // 加载词库
  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    loadVocabulary()
      .then((data) => {
        if (cancelled) return;
        setAllWords(data.allVocabulary);
        setVocabularyByLevel(data.vocabularyByLevel);
        setVocabularyByCategory(data.vocabularyByCategory);
        setIsLoading(false);

        // 如果从首页跳转带了搜索词，立即搜索
        if (init.q) {
          searchVocabulary(init.q, 50).then((res) => {
            setSearchResults(res);
          });
        }
        // 如果跳转的是测试模式，立即出第一题
        if (init.mode === 'test') {
          // 稍后数据加载完再出题（下方 useEffect 会响应）
        }
      })
      .catch(() => !cancelled && setIsLoading(false));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 当词库加载完成且处于测试模式时生成第一题
  useEffect(() => {
    if (!isLoading && pageMode === 'test' && !testQuestion && allWords.length > 0) {
      generateNextQuestion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, pageMode]);

  const staticWords = useMemo(() => {
    if (filterType === 'favorites') return favoriteWords;
    if (filterType === 'category') {
      return categoryFilter === 'all'
        ? Object.values(vocabularyByCategory).flat()
        : vocabularyByCategory[categoryFilter] || [];
    }
    return vocabularyByLevel[selectedLevel] || [];
  }, [filterType, selectedLevel, categoryFilter, favoriteWords, vocabularyByLevel, vocabularyByCategory]);

  const words = pageMode === 'search' ? searchResults : pageMode === 'test' ? [] : staticWords;
  const displayedWords = pageMode !== 'search' && pageMode !== 'test' && listMode === 'list' ? words : words;
  const currentWord = words[currentIndex];

  const goNext = useCallback(() => {
    setFlipped(false);
    setCurrentIndex((i) => (i + 1) % Math.max(words.length, 1));
  }, [words.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setCurrentIndex((i) => (i - 1 + Math.max(words.length, 1)) % Math.max(words.length, 1));
  }, [words.length]);

  const shuffle = useCallback(() => {
    setFlipped(false);
    if (words.length > 0) {
      setCurrentIndex(Math.floor(Math.random() * words.length));
    }
  }, [words.length]);

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const results = await searchVocabulary(query.trim(), 100);
        setSearchResults(results);
        setCurrentIndex(0);
        setFlipped(false);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  }, []);

  const handleLevelChange = useCallback((l: string) => {
    setSelectedLevel(l);
    setCurrentIndex(0);
    setFlipped(false);
  }, []);

  const handleCategoryChange = useCallback((c: string) => {
    setCategoryFilter(c);
    setCurrentIndex(0);
    setFlipped(false);
  }, []);

  // === 测试模式 ===
  function generateNextQuestion() {
    const pool = filterType === 'favorites' ? favoriteWords : staticWords;
    const source = pool && pool.length >= 4 ? pool : allWords;
    if (source.length < 4) return;

    const correctIdx = Math.floor(Math.random() * source.length);
    const correct = source[correctIdx];

    // 生成 3 个错误选项
    const wrong = new Set<JMDictWord>();
    let guard = 0;
    while (wrong.size < 3 && guard < 200) {
      guard++;
      const idx = Math.floor(Math.random() * source.length);
      const candidate = source[idx];
      if (candidate.word !== correct.word) wrong.add(candidate);
    }

    const options = [correct, ...Array.from(wrong)]
      .sort(() => Math.random() - 0.5)
      .map((w) => buildMeaning(w.word, w.meaning));

    const correctIndex = options.findIndex((opt) => opt === buildMeaning(correct.word, correct.meaning));

    setTestQuestion({
      word: correct,
      options,
      correctIndex: correctIndex >= 0 ? correctIndex : 0,
    });
    setTestStage('question');
    setTestLastResult(null);
  }

  function handleTestAnswer(index: number) {
    if (!testQuestion || testStage === 'revealed') return;
    const isCorrect = index === testQuestion.correctIndex;
    setTestLastResult(isCorrect ? 'correct' : 'wrong');
    setTestTotalCount((n) => n + 1);
    if (isCorrect) setTestCorrectCount((n) => n + 1);
    recordTestResult(isCorrect);
    setTestStage('revealed');
  }

  function handleCurrentWordSeenAndFavToggle(): boolean {
    if (!currentWord) return false;
    recordSeenWord({
      word: currentWord.word,
      reading: currentWord.reading,
      meaning: currentWord.meaning,
    });
    return toggleFavorite(currentWord.word);
  }

  function currentWordFavorited() {
    return currentWord ? isWordFavorited(currentWord.word) : false;
  }

  if (isLoading) {
    return (
      <div className="animate-slide-up flex items-center justify-center py-16">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-ink-muted font-sans">正在加载词汇数据…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">単語暗記</h2>
        <p className="text-ink-light font-sans">按 JLPT 级别 / 分类 / 收藏进行学习，或进入测试模式自测</p>
      </div>

      {/* 模式切换：分级浏览 / 在线搜索 / 测试 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <TabButton active={pageMode === 'browse'} onClick={() => setPageMode('browse')}>
          分级学习
        </TabButton>
        <TabButton active={pageMode === 'search'} onClick={() => setPageMode('search')}>
          在线搜索
        </TabButton>
        <TabButton active={pageMode === 'test'} onClick={() => setPageMode('test')}>
          测试模式
        </TabButton>
      </div>

      {/* ===== 测试模式 ===== */}
      {pageMode === 'test' && (
        <div className="bg-white rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-ink-muted font-sans">
              测试中 · 答对 <span className="text-success font-bold">{testCorrectCount}</span> / 共{' '}
              <span className="text-ink font-bold">{testTotalCount}</span> 题
            </p>
            <button
              onClick={generateNextQuestion}
              className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-bold font-sans hover:bg-primary-light transition-colors"
            >
              下一题 →
            </button>
          </div>

          {!testQuestion && (
            <p className="text-sm text-ink-muted font-sans py-10 text-center">
              词库数据不足，无法生成题目。请先切换到分级浏览选一些词收藏。
            </p>
          )}

          {testQuestion && (
            <div className="max-w-md mx-auto">
              <div className="bg-paper-dark rounded-2xl p-6 text-center mb-4">
                <p className="text-xs text-ink-muted font-sans mb-3">
                  {testQuestion.word.level} · {testQuestion.word.partOfSpeech || '—'}
                </p>
                <p className="text-4xl font-serif text-ink font-bold mb-2">{testQuestion.word.word}</p>
                <p className="text-sm text-ink-light font-sans">{testQuestion.word.reading}</p>
              </div>

              <p className="text-center text-xs text-ink-muted font-sans mb-3">请选择正确的中文释义 ↓</p>

              <div className="grid grid-cols-1 gap-2">
                {testQuestion.options.map((opt, idx) => {
                  const isCorrect = testStage === 'revealed' && idx === testQuestion.correctIndex;
                  const isWrongPick =
                    testStage === 'revealed' &&
                    testLastResult === 'wrong' &&
                    // 这里只高亮正确答案即可，错误选择不单独高亮
                    false;
                  return (
                    <button
                      key={idx}
                      disabled={testStage === 'revealed'}
                      onClick={() => handleTestAnswer(idx)}
                      className={`text-left px-4 py-3 rounded-xl border transition-colors text-sm font-sans ${
                        isCorrect
                          ? 'bg-success-soft border-success text-success-dark font-bold'
                          : isWrongPick
                          ? 'bg-vermilion-soft border-vermilion text-vermilion'
                          : testStage === 'question'
                          ? 'bg-white border-border text-ink hover:border-primary/40 hover:bg-primary-soft/30'
                          : 'bg-white border-border text-ink-muted'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}. {opt}
                    </button>
                  );
                })}
              </div>

              {testStage === 'revealed' && (
                <p className="text-center mt-5 text-sm font-sans">
                  {testLastResult === 'correct' ? (
                    <span className="text-success">✓ 答对啦！干得不错</span>
                  ) : (
                    <span className="text-vermilion">× 再加油！正确答案是 C 选项的释义</span>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ===== 搜索模式 ===== */}
      {pageMode === 'search' && (
        <div>
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="输入日语单词搜索（汉字/假名/罗马音/中文）…"
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-border bg-white text-ink font-sans text-sm placeholder:text-ink-muted focus:outline-none focus:border-primary/50 transition-colors"
              />
              {isSearching && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-sm">
                  搜索中…
                </span>
              )}
            </div>
            <p className="text-xs text-ink-muted mt-2 font-sans">
              找到 {searchResults.length} 个结果（数据来源：JMdict）
            </p>
          </div>

          {!isSearching && searchQuery && searchResults.length === 0 && (
            <p className="text-center py-10 text-ink-muted font-sans">未找到相关单词，请换一个关键词试试</p>
          )}

          {currentWord && (
            <div className="flex flex-col items-center">
              <FlashCard
                word={currentWord}
                flipped={flipped}
                onFlip={() => {
                  if (!flipped) recordSeenWord({ word: currentWord.word, reading: currentWord.reading, meaning: currentWord.meaning });
                  setFlipped(!flipped);
                }}
                favorited={currentWordFavorited()}
                onToggleFav={handleCurrentWordSeenAndFavToggle}
              />
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
                >←</button>
                <span className="text-sm text-ink-muted font-sans min-w-[60px] text-center">
                  {currentIndex + 1} / {words.length}
                </span>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
                >→</button>
                <button
                  onClick={shuffle}
                  className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink-light font-sans hover:bg-paper-light transition-colors"
                >随机</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== 分级浏览模式 ===== */}
      {pageMode === 'browse' && (
        <>
          {/* 筛选器 */}
          <div className="space-y-3 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              {(['level', 'category', 'favorites'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-all duration-200 ${
                    filterType === t ? 'bg-primary text-white shadow-sm' : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {t === 'level' ? '按级别' : t === 'category' ? '按分类' : '收藏'}
                </button>
              ))}
              <span className="ml-auto text-xs text-ink-muted font-sans">
                当前 {words.length} 词
              </span>
            </div>

            {filterType === 'level' && (
              <div className="flex flex-wrap gap-1">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => handleLevelChange(l)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-sans transition-all duration-200 ${
                      selectedLevel === l ? 'bg-gold text-white shadow-sm' : 'bg-white border border-border text-ink hover:bg-paper-dark'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}

            {filterType === 'category' && (
              <div className="flex flex-wrap gap-1">
                {['all', ...Object.keys(vocabularyByCategory).sort()].map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCategoryChange(c)}
                    className={`px-2.5 py-1 rounded-md text-xs font-sans transition-all duration-200 ${
                      categoryFilter === c ? 'bg-primary text-white shadow-sm' : 'bg-white border border-border text-ink hover:bg-paper-dark'
                    }`}
                  >
                    {c === 'all' ? '全部' : c}
                  </button>
                ))}
              </div>
            )}

            {filterType === 'favorites' && favoriteWords.length === 0 && (
              <p className="text-xs text-ink-muted font-sans">
                暂无收藏词。在阅读页选中单词后点击 ☆ 即可收藏，或在闪卡背面点击收藏。
              </p>
            )}
          </div>

          {/* 闪卡模式 */}
          {listMode === 'flashcard' && words.length > 0 && currentWord && (
            <div className="flex flex-col items-center">
              <FlashCard
                word={currentWord}
                flipped={flipped}
                onFlip={() => {
                  if (!flipped) recordSeenWord({ word: currentWord.word, reading: currentWord.reading, meaning: currentWord.meaning });
                  setFlipped(!flipped);
                }}
                favorited={currentWordFavorited()}
                onToggleFav={handleCurrentWordSeenAndFavToggle}
              />
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
                >←</button>
                <span className="text-sm text-ink-muted font-sans min-w-[60px] text-center">
                  {currentIndex + 1} / {words.length}
                </span>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
                >→</button>
                <button
                  onClick={shuffle}
                  className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink-light font-sans hover:bg-paper-light transition-colors"
                >随机</button>
                <button
                  onClick={() => setListMode('list')}
                  className="px-4 py-2 rounded-lg bg-white border border-border text-sm text-ink font-sans hover:bg-paper-dark transition-colors"
                >列表视图</button>
              </div>
            </div>
          )}

          {/* 列表模式 */}
          {listMode === 'list' && (
            <div className="space-y-3">
              <button
                onClick={() => setListMode('flashcard')}
                className="px-4 py-2 rounded-lg bg-white border border-border text-xs text-ink font-sans hover:bg-paper-dark transition-colors"
              >返回闪卡视图</button>

              {displayedWords.map((word, idx) => {
                const examples = getExamplesForWord(word.word);
                const fav = isWordFavorited(word.word);
                return (
                  <div
                    key={`${word.word}-${idx}`}
                    className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 flex-wrap mb-1">
                          <span className="text-xl font-serif text-ink font-bold">{word.word}</span>
                          <span className="text-sm text-ink-light font-sans">{word.reading}</span>
                          {word.partOfSpeech && (
                            <span className="ml-1 px-2 py-0.5 bg-gold-soft text-gold-dark text-xs rounded font-sans">
                              {word.partOfSpeech}
                            </span>
                          )}
                          {word.level && (
                            <span className="ml-1 px-2 py-0.5 bg-primary-soft text-primary text-xs rounded font-sans">
                              {word.level}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-ink-light font-sans leading-relaxed">
                          {buildMeaning(word.word, word.meaning)}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          recordSeenWord({ word: word.word, reading: word.reading, meaning: word.meaning });
                          toggleFavorite(word.word);
                        }}
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-base transition-colors ${
                          fav ? 'bg-gold-soft text-gold-dark' : 'bg-paper-dark text-ink-muted hover:text-gold'
                        }`}
                        title={fav ? '取消收藏' : '收藏'}
                      >
                        {fav ? '★' : '☆'}
                      </button>
                    </div>
                    {examples.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-border/40">
                        <p className="text-xs text-ink-muted font-sans mb-2">📝 例句</p>
                        {examples.slice(0, 2).map((ex, eidx) => (
                          <div key={eidx} className="mb-2 last:mb-0">
                            <p className="text-sm font-serif text-ink leading-relaxed">{ex.japanese}</p>
                            {ex.reading && <p className="text-xs text-ink-light font-sans mt-0.5">{ex.reading}</p>}
                            {ex.chinese && <p className="text-xs text-ink-muted font-sans mt-0.5">{ex.chinese}</p>}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* 闪卡模式下也提供切换按钮（放在闪卡操作区已提供） */}
          {listMode === 'flashcard' && false && null}
        </>
      )}
    </div>
  );
}

function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl text-sm font-bold font-sans transition-all duration-200 ${
        active ? 'bg-primary text-white shadow-md' : 'bg-white border border-border text-ink hover:bg-paper-dark'
      }`}
    >
      {children}
    </button>
  );
}
