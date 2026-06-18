declare module 'kuroshiro' {
  interface ConvertOptions {
    to?: 'hiragana' | 'katakana' | 'romaji';
    mode?: 'normal' | 'spaced' | 'okurigana' | 'furigana';
    romajiSystem?: 'nippon' | 'passport' | 'hepburn';
    delimiter_start?: string;
    delimiter_end?: string;
  }

  interface Analyzer {
    init(): Promise<void>;
    parse(str: string): Promise<unknown[]>;
  }

  class Kuroshiro {
    init(analyzer: Analyzer): Promise<void>;
    convert(str: string, options?: ConvertOptions): Promise<string>;
    _analyzer: Analyzer | null;
  }

  export default Kuroshiro;
}