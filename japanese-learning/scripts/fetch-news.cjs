/**
 * Script to fetch real Japanese news articles from various sources
 * Sources: NHK News, Asahi Shimbun, Mainichi, etc.
 * Usage: node scripts/fetch-news.cjs
 */

const fs = require('fs');
const path = require('path');

// NHK News RSS feeds (Japanese)
const NHK_FEEDS = {
  top: 'https://www.nhk.or.jp/rss/news/cat0.xml',
  politics: 'https://www.nhk.or.jp/rss/news/politics.xml',
  economy: 'https://www.nhk.or.jp/rss/news/economy.xml',
  sports: 'https://www.nhk.or.jp/rss/news/sports.xml',
  entertainment: 'https://www.nhk.or.jp/rss/news/entertainment.xml',
  science: 'https://www.nhk.or.jp/rss/news/science.xml',
  international: 'https://www.nhk.or.jp/rss/news/world.xml',
};

// Word translations for common news vocabulary
const newsTranslations = {
  '記者': '记者', '報道': '报道', '発表': '发表', '声明': '声明',
  '会見': '记者会', '会議': '会议', '政策': '政策', '計画': '计划',
  '経済': '经济', '市場': '市场', '企業': '企业', '投資': '投资',
  '株': '股票', '円': '日元', '為替': '汇率', '景気': '景气',
  '選挙': '选举', '政党': '政党', '首相': '首相', '大臣': '大臣',
  '議会': '议会', '予算': '预算', '税制': '税制', '改革': '改革',
  'スポーツ': '体育', '選手': '选手', '試合': '比赛', '優勝': '优胜',
  '映画': '电影', '音楽': '音乐', 'アーティスト': '艺术家', 'コンサート': '演唱会',
  '科学': '科学', '技術': '技术', '研究': '研究', '開発': '开发',
  '環境': '环境', '気候': '气候', '地球': '地球', '温暖化': '温室效应',
  '国際': '国际', '外交': '外交', '平和': '和平', '紛争': '纷争',
  '新型': '新型', '感染': '感染', '予防': '预防', '治療': '治疗',
  '政府': '政府', '地方': '地方', '都市': '城市', '人口': '人口',
  '教育': '教育', '学校': '学校', '学生': '学生', '大学': '大学',
  '交通': '交通', '事故': '事故', '安全': '安全', '規制': '规制',
};

/**
 * Fetch RSS feed and parse articles
 */
async function fetchNHKNews(feedUrl) {
  try {
    const response = await fetch(feedUrl);
    const xmlText = await response.text();
    return parseRSS(xmlText);
  } catch (error) {
    console.error('Failed to fetch NHK news:', error.message);
    return [];
  }
}

/**
 * Parse RSS XML into article objects
 */
function parseRSS(xmlText) {
  const articles = [];
  
  // Simple XML parsing using regex (for basic cases)
  const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemContent = match[1];
    
    // Extract title
    const titleMatch = itemContent.match(/<title[^>]*>([\s\S]*?)<\/title>/);
    const title = titleMatch ? cleanXMLText(titleMatch[1]) : '';
    
    // Extract description
    const descMatch = itemContent.match(/<description[^>]*>([\s\S]*?)<\/description>/);
    const description = descMatch ? cleanXMLText(descMatch[1]) : '';
    
    // Extract link
    const linkMatch = itemContent.match(/<link[^>]*>([\s\S]*?)<\/link>/);
    const link = linkMatch ? linkMatch[1] : '';
    
    // Extract pubDate
    const dateMatch = itemContent.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/);
    const pubDate = dateMatch ? dateMatch[1] : '';
    
    if (title && description) {
      articles.push({
        title,
        description,
        link,
        pubDate,
      });
    }
  }
  
  return articles;
}

/**
 * Clean XML text (remove tags, decode entities)
 */
function cleanXMLText(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, '')  // Remove HTML/XML tags
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Extract vocabulary from article text
 */
function extractVocabulary(text) {
  const vocab = [];
  const seen = new Set();
  
  // Match common Japanese words (kanji/hiragana/katakana)
  const wordRegex = /[\u4e00-\u9faf][\u4e00-\u9faf\u3040-\u309f\u30a0-\u30ff]*/g;
  let match;
  
  while ((match = wordRegex.exec(text)) !== null) {
    const word = match[0];
    if (word.length >= 2 && !seen.has(word)) {
      seen.add(word);
      // Try to get reading and meaning
      const cn = newsTranslations[word] || '';
      vocab.push({
        word,
        reading: '', // Would need furigana generator
        meaning: cn ? `${word} / ${cn}` : word,
      });
    }
  }
  
  return vocab.slice(0, 15); // Limit to 15 words per article
}

/**
 * Generate reading article format
 */
function generateArticle(newsItem, index) {
  const date = newsItem.pubDate 
    ? new Date(newsItem.pubDate).toISOString().split('T')[0]
    : new Date().toISOString().split('T')[0];
  
  const content = newsItem.description.length > 300 
    ? newsItem.description.slice(0, 300) + '...'
    : newsItem.description;
  
  const vocabulary = extractVocabulary(newsItem.title + ' ' + content);
  
  // Build translation (use vocabulary format)
  const vocabList = vocabulary.slice(0, 6).map(v => {
    const cn = newsTranslations[v.word] || v.word;
    return `${v.word}(${cn})`;
  });
  
  const translation = vocabList.length >= 3
    ? `【参考译文】本文包含了以下重点词汇：${vocabList.join('、')}。请对照日语原文逐句理解，并查阅下方词汇表获得详细释义。`
    : '【参考译文】请对照日语原文理解本文内容，重点词汇及其中文释义请查阅下方词汇表。';
  
  return {
    id: `news-${index}`,
    title: newsItem.title,
    source: 'NHKニュース',
    date,
    content,
    translation,
    vocabulary: vocabulary.map((v, idx) => ({
      word: v.word,
      reading: v.reading || getReadingFromWord(v.word),
      meaning: v.meaning,
    })),
  };
}

/**
 * Simple reading generation (placeholder)
 */
function getReadingFromWord(word) {
  // This is a placeholder - would need kuroshiro for real furigana
  const readings = {
    '経済': 'けいざい', '政治': 'せいじ', '選挙': 'せんきょ',
    '企業': 'きぎょう', '市場': 'しじょう', '技術': 'ぎじゅつ',
    '科学': 'かがく', '環境': 'かんきょう', '国際': 'こくさい',
    '政府': 'せいふ', '教育': 'きょういく', '交通': 'こうつう',
    'スポーツ': 'スポーツ', '音楽': 'おんがく', '映画': 'えいが',
  };
  return readings[word] || '';
}

/**
 * Main function
 */
async function main() {
  console.log('Fetching NHK news articles...');
  
  // Fetch from multiple categories
  const articles = [];
  let index = 0;
  
  for (const [category, url] of Object.entries(NHK_FEEDS)) {
    console.log(`Fetching ${category}...`);
    const newsItems = await fetchNHKNews(url);
    
    for (const item of newsItems) {
      if (item.description && item.description.length > 50) {
        const article = generateArticle(item, index);
        articles.push(article);
        index++;
      }
    }
    
    // Limit per category
    if (articles.length >= 20) break;
  }
  
  console.log(`Fetched ${articles.length} articles`);
  
  // Write to reading-data.ts format
  const readingPath = path.join(__dirname, '..', 'src', 'data', 'reading-data.ts');
  let existingContent = fs.readFileSync(readingPath, 'utf-8');
  
  // Find the end of the articles array
  const articlesStart = existingContent.indexOf('export const articles');
  const articlesEnd = existingContent.lastIndexOf('];');
  
  if (articlesStart === -1 || articlesEnd === -1) {
    console.error('Could not find articles array in reading-data.ts');
    return;
  }
  
  // Generate new articles in TypeScript format
  const newArticles = articles.map(article => {
    const vocabStr = article.vocabulary.map(v => 
      `      { word: '${escapeString(v.word)}', reading: '${escapeString(v.reading)}', meaning: '${escapeString(v.meaning)}' }`
    ).join(',\n');
    
    return `  {\n    id: '${article.id}',\n    title: '${escapeString(article.title)}',\n    source: '${article.source}',\n    date: '${article.date}',\n    content:\n      '${escapeString(article.content)}',\n    translation:\n      '${escapeString(article.translation)}',\n    vocabulary: [\n${vocabStr}\n    ],\n  }`;
  }).join(',\n');
  
  // Insert new articles before the closing bracket
  const before = existingContent.slice(0, articlesEnd);
  const after = existingContent.slice(articlesEnd);
  const updatedContent = `${before},\n${newArticles}${after}`;
  
  fs.writeFileSync(readingPath, updatedContent, 'utf-8');
  console.log(`Added ${articles.length} news articles to reading-data.ts`);
}

function escapeString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

main().catch(console.error);