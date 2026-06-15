/**
 * Script to fix broken translation lines in reading-data.ts
 * Replaces translations that contain Japanese characters with placeholder
 */

const fs = require('fs');
const path = require('path');

const readingPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
const content = fs.readFileSync(readingPath, 'utf-8');

const lines = content.split('\n');
let fixedCount = 0;

// Find lines that start with '【参考译文】' and contain Japanese characters
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this is a translation content line
  if (line.includes('【参考译文】')) {
    // Check if it contains Japanese characters (hiragana/katakana)
    if (/[\u3040-\u309f\u30a0-\u30ff]/.test(line)) {
      // This translation is broken, replace with placeholder
      // First, find the vocabulary for this article to build a proper placeholder
      
      // Look for vocabulary words in the next lines
      let vocabWords = [];
      for (let j = i + 1; j < i + 30 && j < lines.length; j++) {
        const wordMatch = lines[j].match(/word:\s*'([^']+)'/);
        const meaningMatch = lines[j].match(/meaning:\s*'([^']+)'/);
        if (wordMatch && meaningMatch) {
          // Extract Chinese from meaning if available
          const meaning = meaningMatch[1];
          const cnMatch = meaning.match(/[\u4e00-\u9faf]+/);
          if (cnMatch) {
            vocabWords.push(`${wordMatch[1]}(${cnMatch[0]})`);
          }
        }
      }
      
      // Build new translation
      if (vocabWords.length >= 3) {
        const newTrans = `      '【参考译文】本文包含了以下重点词汇：${vocabWords.slice(0, 8).join('、')}。请对照日语原文逐句理解，并查阅下方词汇表获得详细释义。',`;
        lines[i] = newTrans;
      } else {
        lines[i] = `      '【参考译文】请对照日语原文理解本文内容，重点词汇及其中文释义请查阅下方词汇表。',`;
      }
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} broken translation lines`);

// Write output
fs.writeFileSync(readingPath, lines.join('\n'), 'utf-8');
console.log('Done!');