/**
 * 日语 → 中文 翻译服务
 * - 开发环境：通过 Vite 代理 /api/translate 调用 Google 翻译，避免 CORS
 * - 生产环境：直接调用公共 API（可能需要自己部署代理服务）
 * - 带内存缓存，避免重复请求
 */

const browserCache = new Map<string, { text: string; ts: number }>();
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 1 天

/** 构造代理 URL（开发环境首选） */
function buildProxyUrl(text: string, src: string, dst: string): string {
  const params = new URLSearchParams({
    text,
    src,
    dst,
    _t: String(Math.floor(Date.now() / 60000)), // 1 分钟粒度，允许 HTTP 缓存
  });
  return `/api/translate?${params.toString()}`;
}

/**
 * 翻译日语到中文
 * @param text 日语文本（最多 2000 字符）
 * @param options.src 源语言（默认 ja）
 * @param options.dst 目标语言（默认 zh-CN）
 */
export async function translateToChinese(
  text: string,
  options?: { src?: string; dst?: string },
): Promise<string | null> {
  if (!text?.trim()) return null;

  const src = options?.src || 'ja';
  const dst = options?.dst || 'zh-CN';
  const key = `${src}|${dst}|${text}`;

  const cached = browserCache.get(key);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return cached.text;
  }

  // 1. 优先调用开发代理（/api/translate），生产环境若无该代理可能会 404
  try {
    const resp = await fetch(buildProxyUrl(text, src, dst));
    if (resp.ok) {
      const data = await resp.json();
      if (data && typeof data.text === 'string' && data.text) {
        browserCache.set(key, { text: data.text, ts: Date.now() });
        return data.text;
      }
    }
  } catch {
    // 继续走 fallback
  }

  // 2. fallback：直接调用公共翻译 API（可能遇到 CORS，失败返回 null）
  try {
    const api = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(src)}&tl=${encodeURIComponent(dst)}&dt=t&q=${encodeURIComponent(text)}`;
    const resp = await fetch(api);
    if (!resp.ok) return null;
    const data = await resp.json();
    const parts: string[] = Array.isArray(data?.[0])
      ? data[0]
          .filter((p: unknown[]) => Array.isArray(p) && typeof p[0] === 'string')
          .map((p: unknown[]) => p[0] as string)
      : [];
    const translated = parts.join('') || null;
    if (translated) browserCache.set(key, { text: translated, ts: Date.now() });
    return translated;
  } catch {
    return null;
  }
}

/**
 * 判断一段翻译是不是占位符（未翻译/模板化文本）
 * 用于阅读页：如果文章自带翻译是占位文本，则走在线翻译
 */
export function isPlaceholderTranslation(translation: string): boolean {
  if (!translation) return true;
  const patterns = [
    '本文包含了以下重点词汇',
    '请查阅下方词汇表',
    '重点词汇及其中文释义',
    'TODO',
  ];
  return patterns.some((p) => translation.includes(p));
}
