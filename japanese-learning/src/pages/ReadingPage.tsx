import { useState, useMemo, useCallback } from 'react';
import { articles, getRandomArticle, getArticlesByCount } from '../data/reading-data';
import type { Article } from '../data/reading-data';
import FuriganaText from '../components/FuriganaText';
import SelectionPopup from '../components/SelectionPopup';
import { buildMeaning } from '../utils/translations';
import { translateToChinese, isPlaceholderTranslation } from '../services/translate-service';

export default function ReadingPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [refreshKey, setRefreshKey] = useState(0);
  const [translatedText, setTranslatedText] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState<string | null>(null);

  const displayedArticles = useMemo(
    () => getArticlesByCount(displayCount),
    [displayCount, refreshKey],
  );

  const handleRefresh = () => {
    setRefreshKey((k) => k + 1);
    setSelectedArticle(null);
    setShowTranslation(false);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 5, articles.length));
  };

  const handleArticleClick = (article: Article) => {
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
    const article = getRandomArticle();
    setSelectedArticle(article);
    setShowTranslation(false);
    setTranslatedText(null);
    setTranslationError(null);
  };

  // Handle translation: use API if current translation is placeholder
  const handleShowTranslation = useCallback(async () => {
    if (!selectedArticle) return;
    
    // Check if current translation is a placeholder
    const needsTranslation = isPlaceholderTranslation(selectedArticle.translation);
    
    if (needsTranslation && !translatedText) {
      // Need to translate via API
      setIsTranslating(true);
      setTranslationError(null);
      
      try {
        const result = await translateToChinese(selectedArticle.content);
        if (result) {
          setTranslatedText(result);
          setShowTranslation(true);
        } else {
          setTranslationError('翻译失败，请稍后重试');
          // Still show the placeholder translation
          setShowTranslation(true);
        }
      } catch (err) {
        setTranslationError('翻译服务暂时不可用');
        setShowTranslation(true);
      } finally {
        setIsTranslating(false);
      }
    } else {
      // Toggle translation visibility
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
          精选15篇文章，覆盖N5~N1各级别，支持译文对照与重点词汇学习
        </p>
      </div>

      {/* Loading state */}
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
            <p className="text-xs text-ink-muted font-sans">
              显示 {displayedArticles.length} / {articles.length} 篇文章
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                className="px-4 py-2 rounded-lg bg-gold text-white text-xs font-bold font-sans hover:bg-gold-dark transition-colors"
              >
                換一批
              </button>
              {displayCount < articles.length && (
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
                    <div className="flex items-center gap-3 mt-2">
                      <span className="px-2 py-0.5 bg-primary-soft text-primary text-xs rounded font-sans">
                        {article.source}
                      </span>
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
        </div>
      )}
    </div>
  );
}