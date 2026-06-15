import { useState } from 'react';
import {
  hiragana,
  hiraganaDakuon,
  hiraganaCombo,
  katakana,
  katakanaDakuon,
  katakanaCombo,
  type KanaChar,
} from '../data/kana-data';

type ChartType = 'hiragana' | 'katakana';
type SectionType = 'basic' | 'dakuon' | 'combo';

const KANA_ORDER = ['a', 'i', 'u', 'e', 'o'];

function KanaGrid({ chars }: { chars: KanaChar[] }) {
  const columns: Record<string, KanaChar[]> = {};
  KANA_ORDER.forEach((v) => {
    columns[v] = chars.filter((c) => c.romaji.endsWith(v) || c.romaji === v);
  });

  return (
    <div className="grid grid-cols-5 gap-2">
      {KANA_ORDER.map((vowel) => (
        <div key={vowel} className="space-y-2">
          {columns[vowel].map((char) => (
            <div
              key={char.kana}
              className="group relative bg-white border border-border rounded-lg p-2 text-center hover:border-vermillion/30 hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
            >
              <span className="text-2xl font-serif text-ink block group-hover:text-vermillion transition-colors">
                {char.kana}
              </span>
              <span className="text-xs text-ink-muted font-sans">
                {char.romaji}
              </span>
            </div>
          ))}
          {columns[vowel].length === 0 && (
            <div className="h-16" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function KanaPage() {
  const [chartType, setChartType] = useState<ChartType>('hiragana');
  const [section, setSection] = useState<SectionType>('basic');

  const getChars = (): KanaChar[] => {
    if (chartType === 'hiragana') {
      if (section === 'dakuon') return hiraganaDakuon;
      if (section === 'combo') return hiraganaCombo;
      return hiragana;
    }
    if (section === 'dakuon') return katakanaDakuon;
    if (section === 'combo') return katakanaCombo;
    return katakana;
  };

  const getSectionTitle = () => {
    if (section === 'basic') return chartType === 'hiragana' ? '平仮名（清音）' : '片仮名（清音）';
    if (section === 'dakuon') return '濁音・半濁音';
    return '拗音';
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          五十音図
        </h2>
        <p className="text-ink-light font-sans">
          平假名和片假名是日语学习的基础，掌握五十音是第一步
        </p>
      </div>

      {/* Type Toggle */}
      <div className="flex gap-2 mb-6">
        {(['hiragana', 'katakana'] as ChartType[]).map((t) => (
          <button
            key={t}
            onClick={() => { setChartType(t); setSection('basic'); }}
            className={`px-6 py-3 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
              chartType === t
                ? 'bg-primary text-white shadow-md'
                : 'bg-white border border-border text-ink hover:bg-paper-dark'
            }`}
          >
            {t === 'hiragana' ? 'ひらがな 平假名' : 'カタカナ 片假名'}
          </button>
        ))}
      </div>

      {/* Section Toggle */}
      <div className="flex gap-2 mb-8">
        {(['basic', 'dakuon', 'combo'] as SectionType[]).map((s) => (
          <button
            key={s}
            onClick={() => setSection(s)}
            className={`px-5 py-2 rounded-lg text-sm font-medium font-sans transition-all duration-200 ${
              section === s
                ? 'bg-accent text-white shadow-md'
                : 'bg-white border border-border text-ink hover:bg-paper-dark'
            }`}
          >
            {{ basic: '清音', dakuon: '濁音/半濁音', combo: '拗音' }[s]}
          </button>
        ))}
      </div>

      {/* Chart Title */}
      <h3 className="text-lg font-bold text-ink font-display mb-4">
        {getSectionTitle()}
      </h3>

      {/* Kana Grid */}
      <div className="bg-paper-dark/50 rounded-xl p-4 border border-border">
        <KanaGrid chars={getChars()} />
      </div>

      {/* Legend */}
      <div className="mt-8 p-5 bg-white rounded-xl border border-border">
        <h4 className="font-bold text-ink mb-3 font-display text-sm">
          学習のポイント
        </h4>
        <ul className="space-y-2 text-sm text-ink-light font-sans">
          <li>• 横向按「あいうえお」五个元音排列，纵向按辅音排列</li>
          <li>• 濁音是在清音假名右上角加「゛」（濁点）表示</li>
          <li>• 半濁音在右上角加「゜」（半濁点），仅は行有</li>
          <li>• 拗音由「い段」假名+小写「ゃ/ゅ/ょ」组成，发音为一个音节</li>
          <li>• 点击假名可以放大查看，建议配合发音练习</li>
        </ul>
      </div>
    </div>
  );
}