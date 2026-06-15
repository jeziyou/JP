/**
 * Script to remove residual Japanese lines after translation fields
 */

const fs = require('fs');
const path = require('path');

const readingPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
const content = fs.readFileSync(readingPath, 'utf-8');

const lines = content.split('\n');
let outputLines = [];
let removedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line is a residual Japanese line (starts with \n followed by Japanese)
  // These are leftover from failed translations
  if (/^\\n[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf]/.test(line) || 
      /^\\n一方|^\\n本稿|^\\n以上|^\\n引き|^\\n例えば|^\\nこのように|^\\nこれから|^\\nFor example|^\\nIn this way/.test(line)) {
    removedCount++;
    continue; // Skip this line
  }
  
  // Also check for lines that are just closing quotes after residual content
  if (line === "'," && i > 0 && /^\\n/.test(lines[i-1])) {
    // This might be the end of a broken translation block
    // Check if the previous non-skipped line was a valid translation
    continue;
  }
  
  outputLines.push(line);
}

console.log(`Removed ${removedCount} residual lines`);

// Write output
fs.writeFileSync(readingPath, outputLines.join('\n'), 'utf-8');
console.log('Done!');