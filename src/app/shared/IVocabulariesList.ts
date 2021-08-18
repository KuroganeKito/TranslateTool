import { IVocabulary } from './IVocabulary';

export interface IVocabulariesList {
  Data: IVocabulary[];

  getSynonymVocabByTranslatedWord(word: string): IVocabulariesList ;
}
