import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { HttpsProxyAgent } from 'https-proxy-agent';
import type { IncomingMessage, ServerResponse } from 'http';

const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const proxyAgent = httpsProxy ? new HttpsProxyAgent(httpsProxy) : undefined;

/**
 * 将浏览器端的查询请求代理到外部 API，避免 CORS / 限流问题
 * 同时做简单的内存缓存，减少重复请求
 */
const translateCache = new Map<string, { text: string; ts: number }>();
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 1 天

function translateMiddleware(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const text = url.searchParams.get('text');
  const src = url.searchParams.get('src') || 'ja';
  const dst = url.searchParams.get('dst') || 'zh-CN';

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (!text) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Missing text parameter' }));
    return;
  }

  const cacheKey = `${src}|${dst}|${text}`;
  const cached = translateCache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    res.statusCode = 200;
    res.end(JSON.stringify({ text: cached.text, cached: true }));
    return;
  }

  const maxLen = 2000;
  const safeText = text.length > maxLen ? text.slice(0, maxLen) : text;
  const api = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(src)}&tl=${encodeURIComponent(dst)}&dt=t&q=${encodeURIComponent(safeText)}`;

  fetch(api, proxyAgent ? { agent: proxyAgent } : undefined)
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((data) => {
      const parts =
        Array.isArray(data?.[0])
          ? data[0]
              .filter((p: unknown[]) => Array.isArray(p) && typeof p[0] === 'string')
              .map((p: unknown[]) => p[0] as string)
          : [];
      const translated = parts.join('');
      if (!translated) throw new Error('Empty translation');
      translateCache.set(cacheKey, { text: translated, ts: Date.now() });
      res.statusCode = 200;
      res.end(JSON.stringify({ text: translated }));
    })
    .catch((err) => {
      res.statusCode = 502;
      res.end(JSON.stringify({ error: 'Translation failed', detail: String(err) }));
    });
}

/** 代理 Jisho 的词汇查询（已有的功能，保留） */
function jishoSearchMiddleware(req: IncomingMessage, res: ServerResponse) {
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const encoded = url.searchParams.get('q');
  if (!encoded) {
    res.statusCode = 400;
    res.end(JSON.stringify({ error: 'Missing q parameter' }));
    return;
  }
  const keyword = Buffer.from(encoded, 'base64').toString('utf-8');
  const jishoUrl = `https://jisho.org/api/v1/search/words?keyword=${encodeURIComponent(keyword)}`;
  fetch(jishoUrl, proxyAgent ? { agent: proxyAgent } : undefined)
    .then((r) => {
      res.statusCode = r.status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return r.text();
    })
    .then((body) => res.end(body))
    .catch((err) => {
      res.statusCode = 502;
      res.end(JSON.stringify({ error: 'Proxy error', detail: String(err) }));
    });
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'japanese-learning-api-proxy',
      configureServer(server) {
        server.middlewares.use('/api/jisho-search', jishoSearchMiddleware);
        server.middlewares.use('/api/translate', translateMiddleware);
      },
    },
  ],
  server: {
    proxy: {
      '/api/jisho': {
        target: 'https://jisho.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/jisho/, '/api'),
        ...(httpsProxy ? { agent: proxyAgent } : {}),
      },
    },
  },
  build: {
    // 对大体积数据源做手动 code-split，避免首屏 chunk 过大
    rollupOptions: {
      output: {
        manualChunks: {
          'jmdict-data': ['./src/data/jmdict-db.ts'],
        },
      },
    },
  },
});
