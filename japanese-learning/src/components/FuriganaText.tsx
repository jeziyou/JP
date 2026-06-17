import { useEffect, useState } from 'react';
import { toFuriganaHTML } from '../utils/furigana';

interface FuriganaTextProps {
  text: string;
  className?: string;
  /** 首次渲染时是否显示"加载中"状态（默认 true） */
  showLoadingState?: boolean;
}

/** 段落分割：按 \n\n 或 \n */
function splitParagraphs(text: string): string[] {
  return text
    .split(/\n{1,}/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

export default function FuriganaText({
  text,
  className,
  showLoadingState = true,
}: FuriganaTextProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setHtml(null);

    if (!text?.trim()) return;

    toFuriganaHTML(text)
      .then((result) => {
        if (!cancelled) setHtml(result || text);
      })
      .catch(() => {
        if (!cancelled) setHtml(text);
      });

    return () => {
      cancelled = true;
    };
  }, [text]);

  // 首次加载过程中：显示半透明纯文本骨架 + 小提示
  if (!html) {
    const paragraphs = splitParagraphs(text);
    return (
      <div className={className}>
        {showLoadingState && (
          <p className="text-xs text-ink-muted mb-2 font-sans">
            <span className="inline-block animate-pulse">⟳</span> 正在解析假名…
          </p>
        )}
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 last:mb-0 text-ink/60">
            {p}
          </p>
        ))}
      </div>
    );
  }

  // 已生成 HTML：按段落拆分
  const hasRuby = html.includes('<ruby>');
  const paragraphs = hasRuby
    ? html.split(/\n\s*\n/).filter((p) => p.trim().length > 0)
    : splitParagraphs(html);

  return (
    <div className={className}>
      {paragraphs.map((p, i) =>
        hasRuby ? (
          <p
            key={i}
            className="mb-3 last:mb-0"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ) : (
          <p key={i} className="mb-3 last:mb-0">
            {p}
          </p>
        ),
      )}
    </div>
  );
}
