import { Injectable } from '@angular/core';
import { Dictionary } from './Dictionary';

export type IdRange = {BeginId: number, EndId: number};

const trimChars = [" ", "...", '.', ',', '!', '?', '\"', '\”', '\“', '-', '+', "─"]
const colorsList = ["#c9ffca", "#7eff81", "#c8d7ff", "#7ea1ff", "#f8ff6b", "#f5ff2d", "#ffcbcb", "#ff8888"]
const colorSplitCount = 5;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  getDomPositionToViewPort(id: number): number | null {
    return document.getElementById(id.toString())!.getBoundingClientRect().top ?? null;
  }

  trimAny(value: string): string {
    let start = 0,
        end   = value.length;
    while(start < end && trimChars.indexOf(value[start]) >= 0) ++start;
    while(end > start && trimChars.indexOf(value[end-1]) >= 0) --end;
    return ((start > 0 || end < value.length) ? value.substring(start, end) : value).toLowerCase();
  }

  getColorCode(count: number): string {
    return colorsList[
      Math.min(
        Math.floor(count/ colorSplitCount),
        colorsList.length - 1
      )
    ]
  }

  shareWork(type: number) {

  }
}
