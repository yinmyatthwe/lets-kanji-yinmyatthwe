import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';
export interface Kanji {
  onyomi: string;
  kanji: string;
  level:string;
  meaning:string;
  kunyomi:string;

}
@Injectable({
  providedIn: 'root'
})
export class KanjiService {
  apiUrl="http://localhost:1337/api/kanji-lists";
  //opts = { params: { populate: "*" } };

  constructor(private http:HttpClient) { }
  getKanjis(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(this.apiUrl).pipe(
      map(response => response.data) // Extract the data array
    );
  }

}



