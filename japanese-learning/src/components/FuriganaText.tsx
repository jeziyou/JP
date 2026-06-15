import { useState, useEffect } from 'react';
import { toFuriganaHTML } from '../utils/furigana';

interface FuriganaTextProps {
  text: string;
  className?: string;
}

type State =
  | { status: 'loading'; text: string }
  | { status: 'done'; text: string; html: string }
  | { status: 'error'; text: string };

const cache = new Map<string, string>();

/** Split text into logical paragraphs (blank-line separated) */
function splitParagraphs(text: string): string[] {
  const parts = text.split(/\n{2,}/);
  return parts.filter((p) => p.trim().length > 0);
}

export default function FuriganaText({ text, className }: FuriganaTextProps) {
  const [state, setState] = useState<State>(() => {
    const cached = cache.get(text);
    if (cached) return { status: 'done', text, html: cached };
    return { status: 'loading', text };
  });

  useEffect(() => {
    const cached = cache.get(text);
    if (cached) {
      setState({ status: 'done', text, html: cached });
      return;
    }

    let cancelled = false;
    setState({ status: 'loading', text });

    toFuriganaHTML(text).then((html) => {
      if (cancelled) return;
      cache.set(text, html);
      setState({ status: 'done', text, html });
    }).catch(() => {
      if (cancelled) return;
      setState({ status: 'error', text });
    });

    return () => { cancelled = true; };
  }, [text]);

  // While loading or on error, show plain text paragraphs
  if (state.status !== 'done') {
    const paragraphs = splitParagraphs(state.text);
    return (
      <div className={className}>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    );
  }

  // Split converted HTML into paragraphs (kuroshiro preserves \n\n as <br><br> or \n\n)
  const htmlParagraphs = state.html
    .split(/\n\s*\n/)
    .filter((p) => p.trim().length > 0);

  // If kuroshiro didn't output HTML with ruby tags, use the whole string
  const hasRuby = state.html.includes('<ruby>');

  if (!hasRuby) {
    // Fallback: plain text paragraphs
    const paragraphs = splitParagraphs(state.text);
    return (
      <div className={className}>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {htmlParagraphs.map((p, i) => (
        <p
          key={i}
          className="mb-3 last:mb-0"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
    </div>
  );
}