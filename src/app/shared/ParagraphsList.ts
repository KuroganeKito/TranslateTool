import { IParagraph } from "./IParagraph";
import { IParagraphsList } from "./IParagraphsList";

export class ParagraphsList implements IParagraphsList {
  Data: IParagraph[];

  constructor(data: IParagraph[]) {
    this.Data = data;
  }
}
