import { useState, useMemo } from 'react';
import { vocabularyByLevel, type Word, type JLPTLevel } from '../data/vocabulary-data';

const LEVELS: JLPTLevel[] = ['N5', 'N4', 'N3', 'N2', 'N1'];

function FlashCard({ word, flipped, onFlip }: { word: Word; flipped: boolean; onFlip: () => void }) {
  return (
    <div
      onClick={onFlip}
      className="relative w-full max-w-sm mx-auto aspect-[3/4] cursor-pointer select-none"
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500`}
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
          className="absolute inset-0 bg-indigo-deep rounded-2xl border-2 border-indigo-mid flex flex-col items-center justify-center p-6 text-white shadow-lg"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-3xl font-serif mb-3">{word.meaning}</span>
          <span className="text-base text-white/70 font-sans mb-2">{word.reading}</span>
          <span className="text-2xl font-serif mb-6">{word.word}</span>
          <div className="w-full border-t border-white/20 pt-4 mt-2">
            <p className="text-sm text-white/80 font-sans leading-relaxed mb-2">
              {word.example}
            </p>
            <p className="text-xs text-white/60 font-sans">
              {word.exampleReading}
            </p>
            <p className="text-xs text-white/50 font-sans mt-1">
              {word.exampleMeaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VocabularyPage() {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [mode, setMode] = useState<'flashcard' | 'list'>('flashcard');

  const words = useMemo(() => vocabularyByLevel[selectedLevel], [selectedLevel]);
  const currentWord = words[currentIndex];

  const goNext = () => {
    setFlipped(false);
    setCurrentIndex((i) => (i + 1) % words.length);
  };

  const goPrev = () => {
    setFlipped(false);
    setCurrentIndex((i) => (i - 1 + words.length) % words.length);
  };

  const shuffle = () => {
    setFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * words.length));
  };

  return (
    <div className="animate-slide-up">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-ink font-display mb-2">
          単語暗記
        </h2>
        <p className="text-ink-light font-sans">
          按JLPT级别分类，通过闪卡系统高效记忆单词
        </p>
      </div>

      {/* Level & Mode Selector */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="flex gap-1">
          {LEVELS.map((l) => (
            <button
              key={l}
              onClick={() => { setSelectedLevel(l); setCurrentIndex(0); setFlipped(false); }}
              className={`px-4 py-2 rounded-lg text-sm font-bold font-sans transition-all duration-200 ${
                selectedLevel === l
                  ? 'bg-gold text-white shadow-md'
                  : 'bg-white border border-border text-ink-light hover:bg-paper-dark'
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
                  ? 'bg-indigo-deep text-white'
                  : 'bg-white border border-border text-ink-light hover:bg-paper-dark'
              }`}
            >
              {m === 'flashcard' ? '闪卡模式' : '列表模式'}
            </button>
          ))}
        </div>
      </div>

      {/* Flashcard Mode */}
      {mode === 'flashcard' && currentWord && (
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
              className="px-4 py-2 rounded-lg bg-paper-dark border border-border text-sm text-ink-light font-sans hover:bg-stone-light transition-colors"
            >
              随机
            </button>
          </div>
        </div>
      )}

      {/* List Mode */}
      {mode === 'list' && (
        <div className="space-y-3">
          {words.map((word) => (
            <div
              key={word.id}
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
                </div>
                <span className="text-base font-bold text-ink font-sans">
                  {word.meaning}
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-sm text-ink-light font-sans">
                  {word.example}
                </p>
                <p className="text-xs text-ink-muted font-sans mt-1">
                  {word.exampleReading} — {word.exampleMeaning}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}