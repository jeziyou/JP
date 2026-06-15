/**
 * Translation service using free APIs
 * Supports Google Translate (via open source wrapper) and fallback options
 */

// Google Translate API endpoint (free, unofficial)
const GOOGLE_TRANSLATE_URL = 'https://translate.googleapis.com/translate_a/single';

// LibreTranslate public instances (fallback)
const LIBRE_INSTANCES = [
  'https://libretranslate.com',
  'https://translate.terraprint.co',
];

/**
 * Translate Japanese text to Chinese using Google Translate (free)
 * @param text Japanese text to translate
 * @returns Chinese translation or null if failed
 */
export async function translateToChinese(text: string): Promise<string | null> {
  if (!text || text.length === 0) return null;
  
  // Limit text length to avoid API issues (Google accepts up to 5000 chars)
  const maxLen = 2000;
  const textToTranslate = text.length > maxLen ? text.slice(0, maxLen) : text;
  
  try {
    // Use Google Translate free endpoint
    const url = `${GOOGLE_TRANSLATE_URL}?client=gtx&sl=ja&tl=zh-CN&dt=t&q=${encodeURIComponent(textToTranslate)}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      console.error('Google Translate API error:', response.status);
      return await tryLibreTranslate(textToTranslate);
    }
    
    const data = await response.json();
    
    // Google returns array of arrays: [[["translated text", "original text", null, null], ...]]
    if (data && data[0]) {
      const translatedParts = data[0]
        .filter((part: unknown[]) => part && part[0])
        .map((part: unknown[]) => part[0] as string)
        .join('');
      
      if (translatedParts && translatedParts.length > 0) {
        return translatedParts;
      }
    }
    
    return await tryLibreTranslate(textToTranslate);
  } catch (error) {
    console.error('Translation error:', error);
    return await tryLibreTranslate(textToTranslate);
  }
}

/**
 * Fallback: Try LibreTranslate instances
 */
async function tryLibreTranslate(text: string): Promise<string | null> {
  for (const instance of LIBRE_INSTANCES) {
    try {
      const response = await fetch(`${instance}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: text,
          source: 'ja',
          target: 'zh',
          format: 'text',
        }),
      });
      
      if (!response.ok) continue;
      
      const data = await response.json();
      if (data.translatedText) {
        return data.translatedText;
      }
    } catch {
      continue;
    }
  }
  
  return null;
}

/**
 * Check if a translation is just a placeholder (vocabulary list format)
 * @param translation The translation string to check
 * @returns true if it's a placeholder, false if it's actual translation
 */
export function isPlaceholderTranslation(translation: string): boolean {
  // Placeholders contain patterns like "本文包含了以下重点词汇" or "请查阅下方词汇表"
  if (!translation) return true;
  
  // Check for placeholder patterns
  const placeholderPatterns = [
    '本文包含了以下重点词汇',
    '请对照日语原文',
    '请查阅下方词汇表',
    '重点词汇及其中文释义',
  ];
  
  // If it contains placeholder patterns AND no substantial Chinese content
  for (const pattern of placeholderPatterns) {
    if (translation.includes(pattern)) {
      // Check if it has actual translation content (more than just vocabulary list)
      // Vocabulary list format: "词汇(释义)、词汇(释义)..."
      const vocabPattern = /[\u3040-\u309f\u30a0-\u30ff]+\([\u4e00-\u9faf]+\)/g;
      const vocabMatches = translation.match(vocabPattern);
      
      // If it's mostly vocabulary list, it's a placeholder
      if (vocabMatches && vocabMatches.length >= 3) {
        // Check if there's actual sentence translation
        const withoutVocab = translation.replace(vocabPattern, '').replace(/、/g, '').trim();
        if (withoutVocab.length < 30) {
          return true; // It's just a vocabulary list placeholder
        }
      }
    }
  }
  
  return false;
}