import { useState, useMemo, useCallback } from 'react';
import { articles, getRandomArticle, getArticlesByCount } from '../data/reading-data';
import type { Article } from '../data/reading-data';
import { matchaArticles } from '../data/matcha-articles';
import type { MatchaArticle } from '../data/matcha-articles';
import FuriganaText from '../components/FuriganaText';
import SelectionPopup from '../components/SelectionPopup';
import { buildMeaning } from '../utils/translations';
import { translateToChinese, isPlaceholderTranslation } from '../services/translate-service';

// 统一文章类型
type UnifiedArticle = Article & { category?: string; level?: string };

// 将 MATCHA 文章转换为统一格式
function toUnifiedArticle(ma: MatchaArticle): UnifiedArticle {
  return {
    id: ma.id,
    title: ma.title,
    source: ma.source,
    date: ma.date,
    content: ma.content,
    translation: ma.translation,
    vocabulary: ma.vocabulary,
    category: ma.category,
    level: ma.level,
  };
}

// 将原始文章转换为统一格式
function toUnifiedFromArticle(a: Article): UnifiedArticle {
  return {
    ...a,
    category: a.source.includes('N5') ? '日常' : a.source.includes('N4') ? '日常' : a.source.includes('N3') ? '中级' : a.source.includes('N2') ? '上级' : a.source.includes('N1') ? '上级' : '日常',
    level: a.source.match(/N([1-5])/)?.[1] ? `N${a.source.match(/N([1-5])/)?.[1]}` : undefined,
  };
}

const ALL_CATEGORIES = ['全部', '文化', '旅行', '美食', '交通', '季節', '生活', '日常', '中级', '上级'];

export default function ReadingPage() {
  const [selectedArticle, setSelectedArticle] = useState<UnifiedArticle | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [displayCount, setDisplayCount] = useState(12);
  const [refreshKey, setRefreshKey] = useState(0);
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('全部');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'matcha' | 'original'>('all');

  // 合并所有文章
  const allArticles = useMemo(() => {
    const matchaUnified = matchaArticles.map(toUnifiedArticle);
    const originalUnified = articles.map(toUnifiedFromArticle);
    return [...matchaUnified, ...originalUnified];
  }, []);

  // 筛选文章
  const filteredArticles = useMemo(() => {
    let result = allArticles;

    // 按来源筛选
    if (sourceFilter === 'matcha') {
      result = result.filter(a => a.id.startsWith('matcha'));
    } else if (sourceFilter === 'original') {
      result = result.filter(a => !a.id.startsWith('matcha'));
    }

    // 按分类筛选
    if (categoryFilter !== '全部') {
      result = result.filter(a => a.category === categoryFilter);
    }

    return result;
  }, [allArticles, sourceFilter, categoryFilter]);

  const displayedArticles = useMemo(
    () => filteredArticles.slice(0, displayCount),
    [filteredArticles, displayCount, refreshKey],
  );

  const handleRefresh = () => {
    setRefreshKey((k) => k + 1);
    setSelectedArticle(null);
    setShowTranslation(false);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 8, filteredArticles.length));
  };

  const handleArticleClick = (article: UnifiedArticle) => {
    setSelectedArticle(article);
    setShowTranslation(false);
    setTranslatedText(null);
    setTranslationError(null);
  };

  const handleBack = () => {
    setSelectedArticle(null);
    setShowTranslation(false);
    setTranslatedText(null);
    setTranslationError(null);
  };

  const handleRandom = () => {
    const pool = sourceFilter === 'matcha'
      ? matchaArticles.map(toUnifiedArticle)
      : sourceFilter === 'original'
        ? articles.map(toUnifiedFromArticle)
        : allArticles;
    const article = pool[Math.floor(Math.random() * pool.length)];
    setSelectedArticle(article);
    setShowTranslation(false);
    setTranslatedText(null);
    setTranslationError(null);
  };

  const handleShowTranslation = useCallback(async () => {
    if (!selectedArticle) return;

    const needsTranslation = isPlaceholderTranslation(selectedArticle.translation);

    if (needsTranslation && !translatedText) {
      setIsTranslating(true);
      setTranslationError(null);

      try {
        const result = await translateToChinese(selectedArticle.content);
        if (result) {
          setTranslatedText(result);
          setShowTranslation(true);
        } else {
          setTranslationError('翻译失败，请稍后重试');
          setShowTranslation(true);
        }
      } catch {
        setTranslationError('翻译服务暂时不可用');
        setShowTranslation(true);
      } finally {
        setIsTranslating(false);
      }
    } else {
      setShowTranslation(!showTranslation);
    }
  }, [selectedArticle, translatedText, showTranslation]);

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          読解練習
        </h2>
        <p className="text-ink-light font-sans">
          精选文章 + MATCHA简易日语，覆盖N5~N1各级别，支持译文对照与重点词汇学习
        </p>
      </div>

      {/* Filters */}
      {!selectedArticle && (
        <div className="space-y-3 mb-6">
          {/* Source filter */}
          <div className="flex gap-2">
            <button
              onClick={() => { setSourceFilter('all'); setCategoryFilter('全部'); setDisplayCount(12); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                sourceFilter === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white border border-border text-ink hover:bg-paper-dark'
              }`}
            >
              全部文章
            </button>
            <button
              onClick={() => { setSourceFilter('matcha'); setCategoryFilter('全部'); setDisplayCount(12); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                sourceFilter === 'matcha'
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white border border-border text-ink hover:bg-paper-dark'
              }`}
            >
              MATCHA 簡易日本語
            </button>
            <button
              onClick={() => { setSourceFilter('original'); setCategoryFilter('全部'); setDisplayCount(12); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                sourceFilter === 'original'
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-white border border-border text-ink hover:bg-paper-dark'
              }`}
            >
              基础読解
            </button>
          </div>

          {/* Category filter (only for matcha) */}
          {sourceFilter === 'matcha' && (
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setCategoryFilter(cat); setDisplayCount(12); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-sans transition-all duration-200 ${
                    categoryFilter === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white border border-border text-ink hover:bg-paper-dark'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <p className="text-xs text-ink-muted font-sans">
            共 {filteredArticles.length} 篇文章，显示 {displayedArticles.length} 篇
          </p>
        </div>
      )}

      {/* Back button */}
      {selectedArticle && (
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm text-ink-light font-sans hover:text-ink transition-colors"
        >
          <span>←</span> 返回文章列表
        </button>
      )}

      {/* Article detail view */}
      {selectedArticle && (
        <div>
          <div className="bg-white rounded-xl border border-border p-6 mb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-2xl font-bold text-ink font-serif">
                {selectedArticle.title}
              </h3>
              <button
                onClick={handleRandom}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-gold-soft text-gold-dark text-xs font-bold font-sans hover:bg-gold hover:text-white transition-colors"
              >
                随机一篇
              </button>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 bg-primary-soft text-primary text-xs rounded font-sans">
                {selectedArticle.source}
              </span>
              {selectedArticle.category && (
                <span className="px-2 py-0.5 bg-accent-soft text-accent text-xs rounded font-sans">
                  {selectedArticle.category}
                </span>
              )}
              {selectedArticle.level && (
                <span className="px-2 py-0.5 bg-gold-soft text-gold text-xs rounded font-sans">
                  {selectedArticle.level}
                </span>
              )}
              <span className="text-xs text-ink-muted font-sans">
                {selectedArticle.date}
              </span>
            </div>

            <FuriganaText
              text={selectedArticle.content}
              className="text-lg font-serif text-ink leading-relaxed mb-6"
            />

            <p className="text-xs text-ink-muted font-sans mb-4">
              选中日语文字即可查询释义
            </p>

            <SelectionPopup enabled={!!selectedArticle} />

            {/* Translation toggle */}
            <div className="border-t border-border pt-4">
              <button
                onClick={handleShowTranslation}
                disabled={isTranslating}
                className="flex items-center gap-2 text-sm font-sans text-primary hover:text-primary-light transition-colors disabled:opacity-50"
              >
                <span>
                  {isTranslating
                    ? '翻译中...'
                    : showTranslation
                      ? '隐藏译文'
                      : isPlaceholderTranslation(selectedArticle.translation)
                        ? '点击翻译全文'
                        : '显示译文'}
                </span>
                {!isTranslating && (
                  <span
                    className={`transition-transform ${showTranslation ? 'rotate-180' : ''}`}
                  >
                    ▼
                  </span>
                )}
                {isTranslating && (
                  <span className="animate-spin">⟳</span>
                )}
              </button>
              {showTranslation && (
                <div className="mt-4 p-4 bg-paper-dark rounded-lg animate-slide-up">
                  {translationError && (
                    <p className="text-xs text-error-dark font-sans mb-2">
                      {translationError}
                    </p>
                  )}
                  <p className="text-sm text-ink-light font-sans leading-relaxed whitespace-pre-line">
                    {translatedText || selectedArticle.translation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Vocabulary */}
          {selectedArticle.vocabulary.length > 0 && (
            <div className="bg-white rounded-xl border border-border p-6">
              <h4 className="font-bold text-ink font-display mb-4">
                重要単語
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedArticle.vocabulary.map((v, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-paper-dark rounded-lg"
                  >
                    <span className="text-lg font-serif text-ink shrink-0">
                      {v.word}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-ink-light font-sans block">
                        {v.reading}
                      </span>
                      <span className="text-xs text-ink-muted font-sans">
                        {buildMeaning(v.word, v.meaning)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Article list */}
      {!selectedArticle && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="px-4 py-2 rounded-lg bg-gold text-white text-xs font-bold font-sans hover:bg-gold-dark transition-colors"
              >
                換一批
              </button>
              {displayCount < filteredArticles.length && (
                <button
                  onClick={handleLoadMore}
                  className="px-4 py-2 rounded-lg border border-border text-ink-light text-xs font-sans hover:bg-paper-dark transition-colors"
                >
                  加载更多
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {displayedArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="w-full text-left bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-primary-soft/30 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-ink font-serif group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="px-2 py-0.5 bg-primary-soft text-primary text-xs rounded font-sans">
                        {article.source}
                      </span>
                      {article.category && (
                        <span className="px-2 py-0.5 bg-accent-soft text-accent text-xs rounded font-sans">
                          {article.category}
                        </span>
                      )}
                      {article.level && (
                        <span className="px-2 py-0.5 bg-gold-soft text-gold text-xs rounded font-sans">
                          {article.level}
                        </span>
                      )}
                      <span className="text-xs text-ink-muted font-sans">
                        {article.date}
                      </span>
                    </div>
                    <p className="text-sm text-ink-light font-sans mt-3 line-clamp-2">
                      {article.content}
                    </p>
                  </div>
                  <span className="text-ink-muted group-hover:translate-x-1 transition-transform text-lg mt-2 shrink-0">
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {displayedArticles.length === 0 && (
            <div className="text-center py-16 text-ink-muted font-sans">
              <p className="text-4xl mb-4">📚</p>
              <p>该分类下暂无文章</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}