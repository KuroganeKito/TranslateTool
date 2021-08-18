import { IVocabulary } from './IVocabulary';

export class Vocabulary implements IVocabulary{
  RawWord: string;
  Spelling: string;
  TranslatedWordsList: string[][];
  Note: string;

  constructor(rawVocabularyText: string) {
    [this.RawWord, this.Spelling, this.TranslatedWordsList, this.Note] = this.VocabularyConverter(rawVocabularyText);
  }

  private VocabularyConverter(rawText: string): [string, string, string[][], string] {
    let splitter = rawText.split("|") || null!;
    if(!splitter) return [rawText, null as any, null!, null!];

    const rawWord        = splitter[0];
    const spelling       = splitter[1] !== ""? splitter[1] : null!;
    const transVocabArea = splitter[2] !== ""? splitter[2] : null!;
    const note           = splitter[3] || null!;
    let translatedWordsList: string[][] = [];

    (transVocabArea.split("/") || [transVocabArea]).forEach((homophonesList, index) => {
      translatedWordsList.push([])
      homophonesList.split(", ").forEach(synonym => {
        translatedWordsList[index].push(synonym);
      });
    });
    return [rawWord, spelling, translatedWordsList, note];
  }
}
