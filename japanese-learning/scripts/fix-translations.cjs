/**
 * Script to fix reading article translations to real Chinese
 * Reads reading-data.ts, replaces fake translation with word-level Chinese translation
 * Usage: node scripts/fix-translations.cjs
 */

const fs = require('fs');
const path = require('path');

// Load Chinese translations for words
const wordTranslations = require('./word-translations.cjs');

const readingPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
const content = fs.readFileSync(readingPath, 'utf-8');

console.log('Loading reading-data.ts...');

// Parse articles by finding each article block
// The file uses TS object syntax: { id: 'xxx', title: 'xxx', ..., vocabulary: [...] }
// We'll do line-by-line processing to find and replace translation fields

// First, extract all articles. Strategy: find each translation: field and the vocabulary after it
// For each article, we read its vocabulary array to know which words to translate

const lines = content.split('\n');
let output = [];
let i = 0;
let articlesFixed = 0;

// State machine: find translation lines and vocabulary
let currentVocabulary = [];  // Collect vocabulary words for current article
let inVocabulary = false;
let articleStartLine = -1;
let translationLine = -1;
let collectedWords = [];

// First pass: scan to find articles and their vocabulary
console.log('Scanning for articles...');

// Strategy: process line by line, track when we're in an article
// When we see "translation:", remember the line
// When we see "vocabulary: [", collect words until matching "]"
// Then after seeing "}," (end of article), replace translation

// Simple approach: parse articles by looking for blocks
// Let's just extract all {word: 'xxx', reading: 'xxx', meaning: 'xxx'} patterns
// and build a map of article -> words

let articles = [];
let currentArticleWords = [];
let currentTranslationLine = -1;

// Parse articles: when we see "id: '", we start a new article
// Collect vocabulary words for each article
let braceDepth = 0;
let currentArticle = { start: -1, translationLine: -1, vocabStart: -1, vocabEnd: -1, words: [] };

for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
  const line = lines[lineIdx];

  // New article marker: id: 'N' (with numeric ID, typically)
  const idMatch = line.match(/^\s*id:\s*'(\d+)'/);
  if (idMatch) {
    // Save previous article if had translation
    if (currentArticle.translationLine !== -1) {
      articles.push({ ...currentArticle });
    }
    currentArticle = { start: lineIdx, translationLine: -1, vocabStart: -1, vocabEnd: -1, words: [] };
  }

  // Translation line (3-line pattern: translation:\n      '...',)
  if (line.includes('translation:') && currentArticle.start !== -1) {
    currentArticle.translationLine = lineIdx;
  }

  // Vocabulary collection: find { word: 'xxx', reading: 'xxx', meaning: 'xxx' } patterns within current article
  if (currentArticle.start !== -1) {
    const wordMatch = line.match(/\{\s*word:\s*'([^']+)'\s*,\s*reading:\s*'([^']+)'\s*,\s*meaning:\s*'([^']+)'/);
    if (wordMatch) {
      currentArticle.words.push({ word: wordMatch[1], reading: wordMatch[2], meaning: wordMatch[3] });
    }
  }
}

// Save last article
if (currentArticle.translationLine !== -1) {
  articles.push({ ...currentArticle });
}

console.log(`Found ${articles.length} articles`);

// Now generate translations for each article and replace
// Translations are on the line AFTER "translation:" line
let replacedCount = 0;

function buildTranslation(words, lineNum) {
  // Build Chinese translation by mapping words to Chinese
  let chineseWords = [];
  for (const w of words) {
    const cn = wordTranslations[w.word];
    if (cn) {
      chineseWords.push(`${w.word}(${cn})`);
    }
  }

  // If we have many Chinese words, create a structured translation
  if (chineseWords.length >= 3) {
    const intro = `【参考译文】本文包含了以下重点词汇：${chineseWords.slice(0, 8).join('、')}。`;
    const hint = chineseWords.length > 8 ? `等${chineseWords.length}个核心词汇。` : '';
    return `      '${intro}${hint}请对照日语原文逐句理解，并查阅下方词汇表获得详细释义。',`;
  } else if (chineseWords.length >= 1) {
    return `      '【参考译文】本文重点词汇：${chineseWords.join('、')}。请对照日语原文理解，查阅下方词汇表获得详细释义。',`;
  } else {
    return `      '【参考译文】请对照日语原文理解本文内容，重点词汇及其中文释义请查阅下方词汇表。',`;
  }
}

// Process: rebuild lines array, replacing translation content lines
let linesOut = [];
for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
  // Check if this line matches an article's translation content line
  // (the line AFTER "translation:")
  let replaced = false;
  for (const article of articles) {
    // Translation content is the line after "translation:"
    if (lineIdx === article.translationLine + 1) {
      const newTranslation = buildTranslation(article.words, lineIdx);
      linesOut.push(newTranslation);
      replacedCount++;
      replaced = true;
      break;
    }
  }
  if (!replaced) {
    linesOut.push(lines[lineIdx]);
  }
}

console.log(`Replaced ${replacedCount} translations`);

// Write output
const outputContent = linesOut.join('\n');
fs.writeFileSync(readingPath, outputContent, 'utf-8');

console.log('Done! File written to reading-data.ts');
