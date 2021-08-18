export class Dictionary {
  Data: any[];

  constructor(data: any[] = []) {
    this.Data = data
  }

  AddDictionary(...value: Dictionary[]): void {
    value.forEach((dictionary) => {
      for(let i=0; i<dictionary.Data.length; i+=2) {
        let check: boolean = false;
        for(let j=0; j<this.Data.length; j+=2)
          if(this.Data[j] === dictionary.Data[i]) {
            this.Data[j+1] += dictionary.Data[i+1]
            check = true;
            break;
          }
        if(check) continue;
        this.Data.push(dictionary.Data[i]);
        this.Data.push(dictionary.Data[i+1]);
      }
    })
  }

  RemoveDictionary(...value: Dictionary[]): void {
    value.forEach((dictionary) => {
      for(let i=0; i<dictionary.Data.length; i+=2)
        for(let j=0; j<this.Data.length; j+=2)
          if(this.Data[j] === dictionary.Data[i])
            if(this.Data[j+1] === dictionary.Data[i+1]) {
              this.Data.splice(j, 2);
              break;
            } else {
              this.Data[j+1] -= dictionary.Data[i+1]
              break;
            }
    })
  }

  AddSingle(vocab: string, count: number=1): void {
    for(let j=0; j<this.Data.length; j+=2)
      if(this.Data[j] === vocab) {
        this.Data[j+1]++;
        return;
      }
    this.Data.push(vocab);
    this.Data.push(count);
  }

  RemoveSingle(vocab: string, count: number=1): void {
    for(let j=0; j<this.Data.length; j+=2)
      if(this.Data[j] === vocab)
        if(this.Data[j+1] === count){
          this.Data.splice(j, 2);
          return;
        } else {
          this.Data[j+1] -= count;
          return;
        }
  }

  Count(val: string): number {
    for(let i=0; i<this.Data.length; i+=2) {
      if(val === this.Data[i]) return this.Data[i+1];
    }
    return 0;
  }

  private Swap(index1: number, index2: number): void {
      [this.Data[index1], this.Data[index1-1], this.Data[index2], this.Data[index2-1]]
    = [this.Data[index2], this.Data[index2-1], this.Data[index1], this.Data[index1-1]]
  }

  private Partition(start: number, end: number): number {
    let pivot: number = this.Data[end];
    let i: number = (start-2);
    for (let j = start; j < end; j+=2){
      if (this.Data[j] >= pivot){
        i+=2;
        this.Swap(i, j);
      }
    }
    this.Swap(i+2, end);
    return (i+2)
}

  Optimize(start: number = 1, end: number = this.Data.length-1): void {
    if (start < end){
      let pi: number = this.Partition(start, end);
      this.Optimize(start, pi-2);
      this.Optimize(pi+2, end);
    }
  }
}
