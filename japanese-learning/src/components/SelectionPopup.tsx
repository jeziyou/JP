import { useCallback, useEffect, useRef, useState } from 'react';
import { searchVocabulary, type JMDictWord } from '../data/jmdict-loader';
import { buildMeaning } from '../utils/translations';
import {
  recordSeenWord,
  toggleFavorite,
  isWordFavorited,
  getWordStatus,
  setWordStatus,
  type WordStatus,
} from '../hooks/useLearningProgress';

interface SelectionPopupProps {
  enabled: boolean;
}

interface PopupState {
  x: number;
  y: number;
  selectedText: string;
  results: JMDictWord[];
  loading: boolean;
  error: string;
}

export default function SelectionPopup({ enabled }: SelectionPopupProps) {
  const [popup, setPopup] = useState<PopupState | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseUp = useCallback(() => {
    if (!enabled) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      const text = selection.toString().trim();
      if (!text) return;
      if (!/[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(text)) return;

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + window.scrollY + 8;

      setPopup({ x, y, selectedText: text, results: [], loading: true, error: '' });

      try {
        const results = await searchVocabulary(text, 5);
        setPopup((prev) =>
          prev && prev.selectedText === text
            ? { ...prev, results, loading: false }
            : null,
        );
      } catch {
        setPopup((prev) =>
          prev && prev.selectedText === text
            ? { ...prev, error: '查询失败，请重试', loading: false }
            : null,
        );
      }
    }, 150);
  }, [enabled]);

  const dismiss = useCallback(() => setPopup(null), []);

  // 订阅全局事件（悬停选中文本）
  useEffect(() => {
    const onMouseUp = handleMouseUp;
    const onDocDown = (e: MouseEvent) => {
      // 点击浮层之外则关闭
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-selection-popup]')) return;
      dismiss();
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousedown', onDocDown);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousedown', onDocDown);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [handleMouseUp, dismiss]);

  useEffect(() => {
    if (!enabled) dismiss();
  }, [enabled, dismiss]);

  if (!popup) return null;

  const safeX = Math.min(Math.max(popup.x, 180), window.innerWidth - 180);
  const safeY = Math.min(popup.y, window.innerHeight + window.scrollY - 200);

  return (
    <div
      data-selection-popup
      className="fixed z-50 bg-white rounded-2xl border border-border shadow-xl p-4 w-[360px] animate-slide-up"
      style={{ left: `${safeX}px`, top: `${safeY}px`, transform: 'translateX(-50%)' }}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-xs text-ink-muted font-sans">选中</p>
          <p className="text-lg font-serif text-ink font-bold">{popup.selectedText}</p>
        </div>
        <button
          onClick={dismiss}
          className="w-7 h-7 rounded-full bg-paper-dark text-ink-muted text-xs hover:bg-paper-light transition-colors flex items-center justify-center"
          aria-label="关闭"
        >
          ✕
        </button>
      </div>

      {popup.loading && (
        <p className="text-sm text-ink-muted font-sans py-3">
          <span className="inline-block animate-spin mr-2">⟳</span>查询中…
        </p>
      )}

      {!popup.loading && popup.error && (
        <p className="text-sm text-vermilion font-sans py-3">{popup.error}</p>
      )}

      {!popup.loading && !popup.error && popup.results.length === 0 && (
        <p className="text-sm text-ink-muted font-sans py-3">
          未找到相关词，试试选中更短或更完整的日语表达
        </p>
      )}

      {!popup.loading && !popup.error && popup.results.length > 0 && (
        <ul className="space-y-2 max-h-[320px] overflow-y-auto">
          {popup.results.map((w) => (
            <ResultItem key={`${w.word}-${w.reading}`} word={w} />
          ))}
        </ul>
      )}
    </div>
  );
}

function ResultItem({ word }: { word: JMDictWord }) {
  const [favorited, setFavorited] = useState<boolean>(() => isWordFavorited(word.word));
  const [status, setStatus] = useState<WordStatus>(() => getWordStatus(word.word));

  useEffect(() => {
    // 记录"看过"学习进度
    recordSeenWord({ word: word.word, reading: word.reading, meaning: word.meaning });
  }, [word.word, word.reading, word.meaning]);

  const onToggleFav = () => {
    const next = toggleFavorite(word.word);
    setFavorited(next);
  };

  const onSetStatus = (s: WordStatus) => {
    setWordStatus(word.word, s);
    setStatus(s);
  };

  const meaning = buildMeaning(word.word, word.meaning);

  return (
    <li className="p-3 bg-paper-dark rounded-lg border border-border">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-serif text-ink font-bold">{word.word}</span>
            {word.reading && word.reading !== word.word && (
              <span className="text-xs text-ink-light font-sans">{word.reading}</span>
            )}
            {word.level && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold-soft text-gold-dark font-sans">
                {word.level}
              </span>
            )}
            {word.partOfSpeech && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary-soft text-primary font-sans">
                {word.partOfSpeech}
              </span>
            )}
          </div>
          <p className="text-xs text-ink-light font-sans mt-1 leading-relaxed">{meaning}</p>
        </div>

        <button
          onClick={onToggleFav}
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm transition-colors ${
            favorited ? 'bg-gold-soft text-gold-dark' : 'bg-white border border-border text-ink-muted hover:text-gold'
          }`}
          aria-label={favorited ? '取消收藏' : '收藏'}
          title={favorited ? '取消收藏' : '收藏'}
        >
          {favorited ? '★' : '☆'}
        </button>
      </div>

      {/* 状态标记：记得 / 复习中 —— 帮助用户管理掌握度 */}
      <div className="flex items-center gap-1 mt-3 pt-2 border-t border-border/50">
        <span className="text-[10px] text-ink-muted font-sans mr-1">掌握度：</span>
        {(['reviewing', 'known'] as WordStatus[]).map((s) => {
          const label = s === 'reviewing' ? '复习中' : '已掌握';
          const active = status === s;
          return (
            <button
              key={s}
              onClick={() => onSetStatus(s)}
              className={`px-2 py-0.5 rounded-full text-[10px] font-sans transition-colors ${
                active
                  ? s === 'known'
                    ? 'bg-success text-white'
                    : 'bg-gold-soft text-gold-dark'
                  : 'bg-white border border-border text-ink-muted hover:border-primary/40'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </li>
  );
}
