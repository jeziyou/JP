/**
 * Export TypeScript data files to JSON for Streamlit Python app
 * Run with: npx tsx scripts/export-data-to-json.ts
 */
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUT_DIR = path.resolve(__dirname, '../streamlit_app/data');

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // kana-data
  const { hiragana, hiraganaDakuon, hiraganaCombo, katakana, katakanaDakuon, katakanaCombo } = await import('../src/data/kana-data');
  fs.writeFileSync(path.join(OUT_DIR, 'kana_data.json'), JSON.stringify({
    hiragana, hiraganaDakuon, hiraganaCombo, katakana, katakanaDakuon, katakanaCombo
  }, null, 2));

  // grammar-data
  const { grammarData } = await import('../src/data/grammar-data');
  fs.writeFileSync(path.join(OUT_DIR, 'grammar_data.json'), JSON.stringify(grammarData, null, 2));

  // vocab-examples
  const { vocabExamples } = await import('../src/data/vocab-examples');
  fs.writeFileSync(path.join(OUT_DIR, 'vocab_examples.json'), JSON.stringify(vocabExamples, null, 2));

  // translations
  const { translations } = await import('../src/utils/translations');
  fs.writeFileSync(path.join(OUT_DIR, 'translations.json'), JSON.stringify(translations, null, 2));

  // reading-data
  const { articles } = await import('../src/data/reading-data');
  fs.writeFileSync(path.join(OUT_DIR, 'reading_data.json'), JSON.stringify(articles, null, 2));

  // matcha-articles
  const { matchaArticles } = await import('../src/data/matcha-articles');
  fs.writeFileSync(path.join(OUT_DIR, 'matcha_articles.json'), JSON.stringify(matchaArticles, null, 2));

  // vocabulary-data (the Word[] array with level/category grouping)
  const { vocabulary, vocabularyByLevel, vocabularyByCategory } = await import('../src/data/vocabulary-data');
  fs.writeFileSync(path.join(OUT_DIR, 'vocabulary_data.json'), JSON.stringify({
    vocabulary, vocabularyByLevel, vocabularyByCategory
  }, null, 2));

  console.log('All data exported to', OUT_DIR);
}

main().catch(console.error);