import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { N5Kanji } from './study/n5kanji/n5kanji';
import { N5KANJIS } from './study/n5kanji/n5KanjiList';

@Injectable({
  providedIn: 'root'
})
export class KanjiService {

  constructor() { }
  getKanjis(): Observable<N5Kanji[]> {
    const kanjis = of(N5KANJIS);
    
    return kanjis;
  }

  
}

