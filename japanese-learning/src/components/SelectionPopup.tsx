import { useState, useEffect, useCallback, useRef } from 'react';
import { searchVocabulary, type JMDictWord } from '../utils/vocab-search';
import { buildMeaning } from '../utils/translations';

interface SelectionPopupProps {
  enabled: boolean;
}

interface PopupState {
  x: number;
  y: number;
  text: string;
  results: JMDictWord[];
  loading: boolean;
  error: string;
}

export default function SelectionPopup({ enabled }: SelectionPopupProps) {
  const [popup, setPopup] = useState<PopupState | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseUp = useCallback(() => {
    if (!enabled) return;

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        return;
      }

      const text = selection.toString().trim();
      if (!text) return;

      if (!/[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(text)) {
        return;
      }

      const query = text.slice(0, 20);

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.bottom + window.scrollY + 8;

      setPopup({ x, y, text: query, results: [], loading: true, error: '' });

      try {
        const results = await searchVocabulary(query, 5);
        const withChinese = results.map((w) => ({
          ...w,
          meaning: buildMeaning(w.word, w.meaning),
        }));
        
        setPopup((prev) =>
          prev && prev.text === query
            ? { ...prev, results: withChinese, loading: false }
            : null,
        );
      } catch {
        setPopup((prev) =>
          prev && prev.text === query
            ? { ...prev, error: '查询失败，请重试', loading: false }
            : null,
        );
      }
    }, 150);
  }, [enabled]);

  const dismiss = useCallback(() => {
    setPopup(null);
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleMouseUp]);

  useEffect(() => {
    if (!enabled) {
      setPopup(null);
    }
  }, [enabled]);

  if (!popup) return null;

  return (
    <div
      className="fixed z-50 bg-white rounded-xl border-2 border-border shadow-xl p-4 min-w-[220px] max-w-[360px] animate-slide-up"
      style={{
        left: `${Math.min(popup.x, window.innerWidth - 370)}px`,
        top: `${Math.min(popup.y, window.innerHeight - 200)}px`,
        transform: 'translateX(-50%)',
      }}
    >
      <button
        onClick={dismiss}
        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-paper-dark text-ink-muted text-xs hover:bg-paper-light transition-colors flex items-center justify-center"
      >
        ✕
      </button>

      <p className="text-xs text-ink-muted font-sans mb-2">
        选中: <span className="text-ink font-serif">{popup.text}</span>
      </p>

      {popup.loading && (
        <p className="text-sm text-ink-muted font-sans py-2">查询中…</p>
      )}

      {popup.error && (
        <p className="text-sm text-error-dark font-sans py-2">{popup.error}</p>
      )}

      {!popup.loading && !popup.error && popup.results.length === 0 && (
        <p className="text-sm text-ink-muted font-sans py-2">未找到结果</p>
      )}

      {!popup.loading && popup.results.length > 0 && (
        <div className="space-y-2 mt-2">
          {popup.results.map((w) => (
            <div
              key={`${w.word}-${w.reading}`}
              className="p-2 bg-paper-dark rounded-lg border border-border"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-serif text-ink font-bold">
                  {w.word}
                </span>
                <span className="text-xs text-ink-light font-sans">
                  {w.reading}
                </span>
                {w.partOfSpeech && (
                  <span className="text-xs px-1.5 py-0.5 bg-gold-soft text-gold rounded font-sans">
                    {w.partOfSpeech}
                  </span>
                )}
              </div>
              <p className="text-xs text-ink-light font-sans mt-1">
                {w.meaning}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}