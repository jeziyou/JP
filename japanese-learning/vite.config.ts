import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { HttpsProxyAgent } from 'https-proxy-agent'
import type { IncomingMessage, ServerResponse } from 'http'

const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy
const proxyAgent = httpsProxy ? new HttpsProxyAgent(httpsProxy) : undefined

/** Custom middleware to proxy Jisho API requests with base64-encoded keywords */
function jishoSearchMiddleware(
  req: IncomingMessage,
  res: ServerResponse,
  _next: () => void,
) {
  const url = new URL(req.url!, `http://${req.headers.host}`)
  const encoded = url.searchParams.get('q')
  if (!encoded) {
    res.statusCode = 400
    res.end(JSON.stringify({ error: 'Missing q parameter' }))
    return
  }

  // Decode base64 keyword (supports Japanese UTF-8)
  const keyword = Buffer.from(encoded, 'base64').toString('utf-8')
  const jishoUrl = `https://jisho.org/api/v1/search/words?keyword=${encodeURIComponent(keyword)}`

  fetch(jishoUrl)
    .then((jishoRes) => {
      res.statusCode = jishoRes.status
      res.setHeader('Content-Type', 'application/json')
      // Read body and pipe
      return jishoRes.text()
    })
    .then((body) => {
      res.end(body)
    })
    .catch((err) => {
      res.statusCode = 502
      res.end(JSON.stringify({ error: 'Proxy error', detail: String(err) }))
    })
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'jisho-search-proxy',
      configureServer(server) {
        server.middlewares.use('/api/jisho-search', jishoSearchMiddleware)
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
})