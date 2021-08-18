import { Dictionary } from "./Dictionary";

export interface IParagraph {
  RawText            : string;
  TranslatedText     : string;
  HighlightMap       : string[];
  HighlightIndex     : number[];
  HighlightDictionary: Dictionary;

  updateHighlightDictionary(value?: string): void
  updateHighlightIndex(highlightDictionary: Dictionary): void;
}
