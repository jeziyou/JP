import { useState } from 'react';
import { articles, type Article } from '../data/reading-data';

export default function ReadingPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          読解練習
        </h2>
        <p className="text-ink-light font-sans">
          通过阅读天声人语、朝日新闻等真实日语文章，提升阅读理解能力
        </p>
      </div>

      {!selectedArticle ? (
        /* Article List */
        <div className="space-y-4">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="w-full text-left bg-white rounded-xl border border-border p-5 hover:shadow-md hover:border-indigo-soft/30 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-ink font-serif group-hover:text-indigo-deep transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="px-2 py-0.5 bg-indigo-soft/10 text-indigo-mid text-xs rounded font-sans">
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
                <span className="text-ink-muted group-hover:translate-x-1 transition-transform text-lg mt-2">
                  →
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* Article Detail */
        <div>
          <button
            onClick={() => { setSelectedArticle(null); setShowTranslation(false); }}
            className="mb-6 flex items-center gap-2 text-sm text-ink-light font-sans hover:text-ink transition-colors"
          >
            <span>←</span> 返回文章列表
          </button>

          <div className="bg-white rounded-xl border border-border p-6 mb-6">
            <h3 className="text-2xl font-bold text-ink font-serif mb-2">
              {selectedArticle.title}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 bg-indigo-soft/10 text-indigo-mid text-xs rounded font-sans">
                {selectedArticle.source}
              </span>
              <span className="text-xs text-ink-muted font-sans">
                {selectedArticle.date}
              </span>
            </div>

            {/* Article content */}
            <div className="text-lg font-serif text-ink leading-relaxed mb-6 whitespace-pre-line">
              {selectedArticle.content}
            </div>

            {/* Translation toggle */}
            <div className="border-t border-border pt-4">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="flex items-center gap-2 text-sm font-sans text-indigo-mid hover:text-indigo-deep transition-colors"
              >
                <span>{showTranslation ? '隐藏译文' : '显示译文'}</span>
                <span className={`transition-transform ${showTranslation ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {showTranslation && (
                <div className="mt-4 p-4 bg-paper-dark rounded-lg animate-slide-up">
                  <p className="text-sm text-ink-light font-sans leading-relaxed">
                    {selectedArticle.translation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Vocabulary */}
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
                  <span className="text-lg font-serif text-ink">
                    {v.word}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-ink-light font-sans block">
                      {v.reading}
                    </span>
                    <span className="text-xs text-ink-muted font-sans">
                      {v.meaning}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}