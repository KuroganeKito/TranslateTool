import { IVocabulary } from './IVocabulary';
import { IVocabulariesList } from './IVocabulariesList';

export class VocabulariesList implements IVocabulariesList{
  Data: IVocabulary[];

  constructor(data: IVocabulary[]) {
    this.Data = data
  }

  getSynonymVocabByTranslatedWord(word: string): IVocabulariesList {
    let returner: IVocabulariesList = new VocabulariesList([]);
    this.Data.forEach(vocab => {
      vocab.TranslatedWordsList.forEach(homophonesList => {
        homophonesList.forEach(synonym => {
          if(synonym === word) {
            returner.Data.push(vocab)
            return;
          }
        })
      })
    })
    return returner;
  }
}
