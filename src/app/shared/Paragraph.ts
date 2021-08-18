import { Dictionary } from './Dictionary';
import { GlobalService } from './global.service';
import { IParagraph } from './IParagraph';

export class Paragraph implements IParagraph {
  RawText             : string;
  TranslatedText      : string;
  HighlightMap        : string[];
  HighlightIndex      : number[];
  HighlightDictionary!: Dictionary;

  private readonly GS: GlobalService = new GlobalService();

  constructor(rawText: string, translatedText: string | null) {
    this.RawText             = rawText        ?? "";
    this.TranslatedText      = translatedText ?? "";
    this.HighlightMap        = [];
    this.HighlightIndex      = [];
    this.HighlightDictionary = new Dictionary()
    this.updateHighlightDictionary();
  }

  updateHighlightDictionary(value?: string): void {
    if(value) this.TranslatedText = value;
    this.HighlightMap = this.TranslatedText.split(" ") ?? [this.TranslatedText];
    this.HighlightDictionary.Data = [];
    this.HighlightMap.forEach((word) => {
      const trimmedWord = this.GS.trimAny(word);
      this.HighlightDictionary.AddSingle(trimmedWord);
    });
  }

  updateHighlightIndex(highlightDictionary: Dictionary = new Dictionary()): void {
    this.HighlightIndex = new Array(this.HighlightMap.length)
    this.HighlightMap.forEach((word, index) => {
      const trimmedWord = this.GS.trimAny(word)
      this.HighlightIndex[index] = highlightDictionary.Count(trimmedWord);
    })
  }
}
