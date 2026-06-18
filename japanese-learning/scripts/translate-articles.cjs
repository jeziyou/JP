/**
 * Script to translate Japanese articles to Chinese using appworlds.cn API
 * Usage: node scripts/translate-articles.cjs
 */

const fs = require('fs');
const path = require('path');

const readingPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
const content = fs.readFileSync(readingPath, 'utf-8');

console.log('Loading reading-data.ts...');

// Parse articles - find each article's content and translation
const lines = content.split('\n');
let articles = [];
let currentArticle = { start: -1, contentLine: -1, translationLine: -1, content: '', translation: '' };

for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
  const line = lines[lineIdx];

  // New article marker
  const idMatch = line.match(/^\s*id:\s*'(\d+)'/);
  if (idMatch) {
    if (currentArticle.contentLine !== -1) {
      articles.push({ ...currentArticle });
    }
    currentArticle = { start: lineIdx, contentLine: -1, translationLine: -1, content: '', translation: '' };
  }

  // Content line (multi-line string after "content:")
  if (line.includes('content:') && currentArticle.start !== -1) {
    currentArticle.contentLine = lineIdx;
    // Content is on the next line
    const contentMatch = lines[lineIdx + 1]?.match(/^\s*'([^']+)'/);
    if (contentMatch) {
      currentArticle.content = contentMatch[1];
    }
  }

  // Translation line
  if (line.includes('translation:') && currentArticle.start !== -1) {
    currentArticle.translationLine = lineIdx;
  }
}

// Save last article
if (currentArticle.contentLine !== -1) {
  articles.push({ ...currentArticle });
}

console.log(`Found ${articles.length} articles`);

// Translate function using appworlds.cn API
async function translateText(text) {
  const maxLen = 200; // Keep under 255 limit
  if (text.length <= maxLen) {
    return await callApi(text);
  }
  
  // Split long text into sentences
  const sentences = text.split(/[。\n]/).filter(s => s.trim());
  let results = [];
  for (const sentence of sentences) {
    if (sentence.trim()) {
      const translated = await callApi(sentence.trim() + '。');
      results.push(translated);
      // Rate limiting - wait 100ms between requests
      await new Promise(r => setTimeout(r, 100));
    }
  }
  return results.join('\n');
}

async function callApi(text) {
  const url = `https://translate.appworlds.cn?text=${encodeURIComponent(text)}&from=ja&to=zh-CN`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.code === 200 && data.data) {
      // Check if result is actually Chinese (not Japanese fallback)
      const result = data.data;
      if (/[\u4e00-\u9faf]/.test(result) && !/[\u3040-\u309f\u30a0-\u30ff]/.test(result.slice(0, 20))) {
        return result;
      }
      console.log('Result still contains Japanese, skipping');
      return null; // Translation failed
    }
    console.error('API error:', data.msg);
    return null;
  } catch (err) {
    console.error('Fetch error:', err.message);
    return null;
  }
}

// Process articles in batches
async function processArticles() {
  console.log('Starting translation...');
  
  let translatedCount = 0;
  let newLines = [...lines];
  
  // Process first 200 articles (to avoid too many API calls)
  const batchSize = 200;
  const toProcess = articles.slice(0, batchSize);
  
  for (const article of toProcess) {
    if (!article.content) continue;
    
    // Skip already translated (check if translation line already has Chinese)
    if (article.translationLine !== -1) {
      const transContentLine = article.translationLine + 1;
      const existingTrans = newLines[transContentLine];
      // Skip if already has proper Chinese translation (not the placeholder format)
      if (existingTrans && existingTrans.includes('我们来谈谈') || existingTrans.includes('让我们来') || existingTrans.includes('思考一下')) {
        console.log(`Skipping already translated article ${article.start}`);
        continue;
      }
    }
    
    console.log(`Translating article ${article.start}: ${article.content.slice(0, 30)}...`);
    
    const chineseTranslation = await translateText(article.content);
    
    // Replace translation line (line after "translation:")
    if (article.translationLine !== -1) {
      const transContentLine = article.translationLine + 1;
      const oldLine = newLines[transContentLine];
      // Format: '【参考译文】...'
      const newTranslation = `      '【参考译文】${chineseTranslation}',`;
      newLines[transContentLine] = newTranslation;
      translatedCount++;
    }
    
    // Wait between articles
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log(`Translated ${translatedCount} articles`);
  
  // Write output
  const outputContent = newLines.join('\n');
  fs.writeFileSync(readingPath, outputContent, 'utf-8');
  console.log('Done! File written to reading-data.ts');
}

processArticles().catch(console.error);