import Kuroshiro from 'kuroshiro';

// Type declaration for global kuromoji loaded via <script> tag
declare global {
  interface Window {
    kuromoji: {
      builder: (options: { dicPath: string }) => {
        build: (callback: (err: Error | null, tokenizer: KuromojiTokenizer) => void) => void;
      };
    };
  }
}

interface KuromojiTokenizer {
  tokenize: (text: string) => KuromojiToken[];
}

interface KuromojiToken {
  surface_form: string;
  reading: string | undefined;
  pronunciation: string | undefined;
}

/**
 * A custom analyzer that wraps window.kuromoji (loaded via script tag)
 * to implement the interface expected by kuroshiro.
 */
class BrowserKuromojiAnalyzer {
  private _tokenizer: KuromojiTokenizer | null = null;
  private _dictPath: string;

  constructor(options?: { dictPath?: string }) {
    this._dictPath = options?.dictPath ?? '/kuromoji/';
  }

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const builder = window.kuromoji.builder({ dicPath: this._dictPath });
      builder.build((err, tokenizer) => {
        if (err) {
          reject(err);
        } else {
          this._tokenizer = tokenizer;
          resolve();
        }
      });
    });
  }

  async parse(text: string): Promise<KuromojiToken[]> {
    if (!this._tokenizer) {
      throw new Error('Analyzer not initialized');
    }
    // kuromoji.tokenize is sync
    return this._tokenizer.tokenize(text);
  }
}

let kuroshiro: Kuroshiro | null = null;
let initPromise: Promise<void> | null = null;

async function waitForKuromoji(timeoutMs = 10000): Promise<void> {
  const start = Date.now();
  while (!window.kuromoji) {
    if (Date.now() - start > timeoutMs) {
      throw new Error('kuromoji.js failed to load');
    }
    await new Promise((r) => setTimeout(r, 100));
  }
}

export async function getKuroshiro(): Promise<Kuroshiro> {
  if (kuroshiro) return kuroshiro;

  if (!initPromise) {
    initPromise = (async () => {
      await waitForKuromoji();
      const instance = new Kuroshiro();
      const analyzer = new BrowserKuromojiAnalyzer({ dictPath: '/kuromoji/' });
      await instance.init(analyzer);
      kuroshiro = instance;
    })();
  }

  await initPromise;
  return kuroshiro!;
}

/**
 * Convert Japanese text to HTML with furigana ruby annotations.
 */
export async function toFuriganaHTML(text: string): Promise<string> {
  if (!text.trim()) return text;

  try {
    const ks = await getKuroshiro();
    const result = await ks.convert(text, {
      to: 'hiragana',
      mode: 'furigana',
    });
    return result;
  } catch {
    return text;
  }
}