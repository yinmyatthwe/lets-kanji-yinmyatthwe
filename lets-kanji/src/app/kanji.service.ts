import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { N5Kanji } from './study/n5kanji/n5kanji';
import { N5KANJIS } from './study/n5kanji/n5KanjiList';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

interface KanjiResponse{
  id: number;
  kanji: string;
  onyomi: string;
}

@Injectable({
  providedIn: 'root'
})
export class KanjiService {
  apiUrl="http://localhost:1337/api/kanji-lists";

  constructor(private http:HttpClient) { }
  getKanjis(): Observable<N5Kanji[]> {
    const kanjis = of(N5KANJIS);
    
    return kanjis;
  }
  // getKanjis() {
      
  //     return this.http.get<KanjiResponse>(`${this.apiUrl}`)
  // } 
}

