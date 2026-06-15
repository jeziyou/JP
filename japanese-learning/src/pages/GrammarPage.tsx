import { useState, useMemo } from 'react';
import { grammarData, type GrammarEntry } from '../data/grammar-data';
import FuriganaText from '../components/FuriganaText';

type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
const LEVELS: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

export default function GrammarPage() {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const points = useMemo(() => grammarData[selectedLevel], [selectedLevel]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          文法学習
        </h2>
        <p className="text-ink-light font-sans">
          按JLPT级别系统学习日语语法，每个语法点配有详细解释和例句
        </p>
      </div>

      {/* Level Selector */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex gap-1">
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => { setSelectedLevel(l); setExpandedId(null); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                selectedLevel === l
                  ? 'bg-bamboo text-white shadow-md'
                  : 'bg-white border border-border text-ink-light hover:bg-paper-dark'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
        <span className="ml-auto text-sm text-ink-muted font-sans">
          共 {points.length} 个语法点
        </span>
      </div>

      {/* Grammar List */}
      <div className="space-y-3">
        {points.map((point) => (
          <div
            key={point.id}
            className="bg-white rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-sm"
          >
            <button
              onClick={() => toggleExpand(point.id)}
              className="w-full p-5 text-left flex items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-serif text-bamboo-dark font-bold">
                    {point.pattern}
                  </span>
                  <span className="px-2 py-0.5 bg-bamboo-soft text-bamboo-dark text-xs rounded font-sans">
                    {point.meaning}
                  </span>
                </div>
                <p className="text-sm text-ink-light font-sans line-clamp-1">
                  {point.explanation}
                </p>
              </div>
              <span
                className={`text-ink-muted transition-transform duration-300 text-lg ${
                  expandedId === point.id ? 'rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>

            {expandedId === point.id && (
              <div className="px-5 pb-5 border-t border-border pt-4 animate-slide-up">
                <p className="text-sm text-ink-light font-sans mb-4 leading-relaxed">
                  {point.explanation}
                </p>
                <div className="space-y-3">
                  {point.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="bg-paper-dark rounded-lg p-4 border border-border"
                    >
                      <FuriganaText
                        text={ex.japanese}
                        className="text-base font-serif text-ink font-bold mb-1"
                      />
                      <p className="text-sm text-ink-light font-sans mb-1">
                        {ex.reading}
                      </p>
                      <p className="text-xs text-ink-muted font-sans">
                        {ex.chinese}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}