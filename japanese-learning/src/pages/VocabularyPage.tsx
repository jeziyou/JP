import { useState, useEffect, useCallback, useRef } from 'react';
import { buildMeaning } from '../utils/translations';
import { loadVocabulary, searchVocabulary, type JMDictWord } from '../data/jmdict-loader';

const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'];

const TOPIC_LABELS: Record<string, string> = {
  '食べ物・料理': '🍽️ 食べ物・料理',
  '身体・健康': '🏥 身体・健康',
  'スポーツ': '⚽ スポーツ',
  '音楽・芸術': '🎵 音楽・芸術',
  'テクノロジー': '💻 テクノロジー',
  '交通・移動': '🚃 交通・移動',
  '自然・科学': '🔬 自然・科学',
  'ビジネス・経済': '💼 ビジネス・経済',
  '法律・政治': '⚖️ 法律・政治',
  '言語・教育': '📚 言語・教育',
  '宗教・文化': '⛩️ 宗教・文化',
  '歴史': '📜 歴史',
  '生活・日常': '🏠 生活・日常',
  '娯楽': '🎮 娯楽',
  'メディア': '📺 メディア',
  '仕事': '🛠️ 仕事',
  '場所': '📍 場所',
  '感情・心理': '💭 感情・心理',
  '思想': '🧠 思想',
  '未分類': '📦 未分類',
};

type PageMode = 'flashcard' | 'list' | 'search';

function FlashCard({ word, flipped, onFlip }: { word: JMDictWord; flipped: boolean; onFlip: () => void }) {
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
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-2xl border-2 border-border flex flex-col items-center justify-center p-6 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-xs text-ink-muted font-sans mb-4 px-3 py-1 bg-paper-dark rounded-full">
            {word.level} · {word.partOfSpeech}
          </span>
          <span className="text-5xl font-serif text-ink mb-4">{word.word}</span>
          <span className="text-lg text-ink-light font-sans">{word.reading}</span>
          <p className="text-xs text-ink-muted mt-6 font-sans">点击翻转查看释义</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-primary rounded-2xl border-2 border-primary-light flex flex-col items-center justify-center p-6 text-white shadow-lg"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-3xl font-serif mb-3 text-white text-center">{buildMeaning(word.word, word.meaning)}</span>
          <span className="text-base text-white/80 font-sans mb-2">{word.reading}</span>
          <span className="text-2xl font-serif text-white">{word.word}</span>
        </div>
      </div>
    </div>
  );
}

export default function VocabularyPage() {
  const [selectedLevel, setSelectedLevel] = useState('N5');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState<'flashcard' | 'list'>('flashcard');
  const [pageMode, setPageMode] = useState<PageMode>('flashcard');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [filterType, setFilterType] = useState<'level' | 'category'>('level');

  // Data loading state
  const [isLoading, setIsLoading] = useState(true);
  const [vocabularyByLevel, setVocabularyByLevel] = useState<Record<string, JMDictWord[]>>({});
  const [vocabularyByCategory, setVocabularyByCategory] = useState<Record<string, JMDictWord[]>>({});
  const [allCategories, setAllCategories] = useState<string[]>(['all']);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<JMDictWord[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pagination for list mode
  const LIST_PAGE_SIZE = 15;
  const [listVisible, setListVisible] = useState(LIST_PAGE_SIZE);

  // Load vocabulary data on mount
  useEffect(() => {
    loadVocabulary().then(({ vocabularyByLevel: levelData, vocabularyByCategory: categoryData }) => {
      setVocabularyByLevel(levelData);
      setVocabularyByCategory(categoryData);
      setAllCategories(['all', ...Object.keys(categoryData).sort()]);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, []);

  const staticWords = () => {
    if (filterType === 'level') {
      return vocabularyByLevel[selectedLevel] || [];
    } else {
      return categoryFilter === 'all' 
        ? Object.values(vocabularyByCategory).flat()
        : vocabularyByCategory[categoryFilter] || [];
    }
  };

  const words = pageMode === 'search' ? searchResults : staticWords();
  const displayedWords = pageMode !== 'search' && mode === 'list' ? words.slice(0, listVisible) : words;
  const currentWord = words[currentIndex];

  const goNext = useCallback(() => {
    setFlipped(false);
    setCurrentIndex((i) => (i + 1) % (words.length || 1));
  }, [words.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setCurrentIndex((i) => (i - 1 + (words.length || 1)) % (words.length || 1));
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
      setSearchError('');
      return;
    }

    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(async () => {
      setIsSearching(true);
      setSearchError('');

      try {
        const results = await searchVocabulary(query.trim(), 100);
        setSearchResults(results);
        setCurrentIndex(0);
        setFlipped(false);

        if (results.length === 0) {
          setSearchError('未找到相关单词，请尝试其他关键词');
        }
      } catch {
        setSearchError('搜索失败，请刷新页面后重试');
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  }, []);

  const handleLevelChange = useCallback((l: string) => {
    setSelectedLevel(l);
    setCurrentIndex(0);
    setFlipped(false);
    setListVisible(LIST_PAGE_SIZE);
    setCategoryFilter('all');
  }, []);

  const handleCategoryChange = useCallback((c: string) => {
    setCategoryFilter(c);
    setCurrentIndex(0);
    setFlipped(false);
    setListVisible(LIST_PAGE_SIZE);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="animate-slide-up flex items-center justify-center py-16">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <p className="text-ink-muted font-sans">正在加载词汇数据...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          単語暗記
        </h2>
        <p className="text-ink-light font-sans">
          按JLPT级别分类或在线搜索，通过闪卡系统高效记忆单词
        </p>
      </div>

      {/* Page Mode Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setPageMode('flashcard'); setCurrentIndex(0); setFlipped(false); }}
          className={`px-5 py-2.5 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
            pageMode !== 'search'
              ? 'bg-gold text-white shadow-md'
              : 'bg-white border border-border text-ink hover:bg-paper-dark'
          }`}
        >
          分级学习
        </button>
        <button
          onClick={() => { setPageMode('search'); setCurrentIndex(0); setFlipped(false); }}
          className={`px-5 py-2.5 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
            pageMode === 'search'
              ? 'bg-accent text-white shadow-md'
              : 'bg-white border border-border text-ink hover:bg-paper-dark'
          }`}
        >
          在线搜索
        </button>
      </div>

      {/* Search Bar */}
      {pageMode === 'search' && (
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="输入日语单词搜索（汉字/假名/罗马音）…"
              className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-border bg-white text-ink font-sans text-sm placeholder:text-ink-muted focus:outline-none focus:border-primary/50 transition-colors"
            />
            {isSearching && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted text-sm">
                搜索中…
              </span>
            )}
          </div>
          {searchError && (
            <p className="text-sm text-vermillion mt-2 font-sans">{searchError}</p>
          )}
          {pageMode === 'search' && searchResults.length > 0 && (
            <p className="text-xs text-ink-muted mt-2 font-sans">
              找到 {searchResults.length} 个结果（数据来源：JMdict）
            </p>
          )}
        </div>
      )}

      {/* Level & Mode Selector (only for static mode) */}
      {pageMode !== 'search' && (
        <div className="space-y-3 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1">
              {LEVELS.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLevelChange(l)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                    selectedLevel === l
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              {(['flashcard', 'list'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-sans transition-all duration-200 ${
                    mode === m
                      ? 'bg-success text-white shadow-md'
                      : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {m === 'flashcard' ? '闪卡模式' : '列表模式'}
                </button>
              ))}
            </div>
          </div>
          {/* Filter Type Toggle */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => { setFilterType('level'); setCategoryFilter('all'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all duration-200 ${
                filterType === 'level'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white border border-border text-ink hover:bg-paper-dark'
              }`}
            >
              按级别
            </button>
            <button
              onClick={() => { setFilterType('category'); }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all duration-200 ${
                filterType === 'category'
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white border border-border text-ink hover:bg-paper-dark'
              }`}
            >
              按分类
            </button>
          </div>
          {/* Category Filter */}
          {filterType === 'category' ? (
            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-xs text-ink-muted font-sans mr-2">分类：</span>
              {allCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => handleCategoryChange(c)}
                  className={`px-2.5 py-1 rounded-md text-xs font-sans transition-all duration-200 ${
                    categoryFilter === c
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {c === 'all' ? '全部' : (TOPIC_LABELS[c] || c)}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1 items-center">
              <span className="text-xs text-ink-muted font-sans mr-2">细分：</span>
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-2.5 py-1 rounded-md text-xs font-sans transition-all duration-200 ${
                  categoryFilter === 'all'
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white border border-border text-ink hover:bg-paper-dark'
                }`}
              >
                全部
              </button>
              {Array.from(new Set(staticWords().map(w => w.category))).sort().map((c) => (
                <button
                  key={c}
                  onClick={() => handleCategoryChange(c)}
                  className={`px-2.5 py-1 rounded-md text-xs font-sans transition-all duration-200 ${
                    categoryFilter === c
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {TOPIC_LABELS[c] || c}
                </button>
              ))}
            </div>
          )}
          <p className="text-xs text-ink-muted font-sans">
            当前：{words.length} 个单词
          </p>
        </div>
      )}

      {/* Empty state for search */}
      {pageMode === 'search' && !isSearching && searchQuery && searchResults.length === 0 && !searchError && (
        <div className="text-center py-16 text-ink-muted font-sans">
          <p className="text-4xl mb-4">🔍</p>
          <p>输入日语单词开始搜索</p>
          <p className="text-xs mt-2">支持汉字、假名、罗马音搜索</p>
        </div>
      )}

      {/* Flashcard Mode */}
      {((pageMode !== 'search' && mode === 'flashcard') || (pageMode === 'search')) && currentWord && (
        <div className="flex flex-col items-center">
          <FlashCard
            word={currentWord}
            flipped={flipped}
            onFlip={() => setFlipped(!flipped)}
          />

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
            >
              ←
            </button>
            <span className="text-sm text-ink-muted font-sans min-w-[60px] text-center">
              {currentIndex + 1} / {words.length}
            </span>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-ink-light hover:bg-paper-dark transition-colors"
            >
              →
            </button>
            <button
              onClick={shuffle}
              className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink-light font-sans hover:bg-paper-light transition-colors"
            >
              随机
            </button>
          </div>
        </div>
      )}

      {/* List Mode */}
      {pageMode !== 'search' && mode === 'list' && (
        <div className="space-y-3">
          {displayedWords.map((word, idx) => (
            <div
              key={`${word.word}-${idx}`}
              className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xl font-serif text-ink font-bold">
                    {word.word}
                  </span>
                  <span className="text-sm text-ink-light font-sans ml-3">
                    {word.reading}
                  </span>
                  <span className="ml-2 px-2 py-0.5 bg-gold-soft text-gold text-xs rounded font-sans">
                    {word.partOfSpeech}
                  </span>
                  <span className="ml-1 px-2 py-0.5 bg-primary-soft text-primary text-xs rounded font-sans">
                    {word.level}
                  </span>
                </div>
                <span className="text-base font-bold text-ink font-sans">
                  {buildMeaning(word.word, word.meaning)}
                </span>
              </div>
            </div>
          ))}
          <div className="flex justify-center pt-4">
            {listVisible < words.length && (
              <button
                onClick={() => setListVisible((p) => p + LIST_PAGE_SIZE)}
                className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-bold font-sans hover:bg-primary-light transition-colors"
              >
                显示更多（{listVisible} / {words.length}）
              </button>
            )}
            {listVisible >= words.length && words.length > 0 && (
              <p className="text-xs text-ink-muted font-sans">
                已显示全部 {words.length} 个单词
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}