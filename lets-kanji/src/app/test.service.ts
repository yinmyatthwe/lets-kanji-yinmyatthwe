import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { questions } from './test/n5test/question/question';
import { N5QUESTIONS } from './test/n5test/question/questionList';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

interface apiQuestionResponse{
  id: number;
  question: string;
  answer: string;
  choice_1: string;
  choice_2: string;
  choice_3: string;
  choice_4: string;
  level:string;
}
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:1337/api/test-lists?populate=kanji_question_lists";
  //apiUrl="http://localhost:1337/api/kanji-question-lists";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getTestList(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(this.apiUrl).pipe(
      map(response => response.data) // Extract the data array
    );
  }
  getTests(): Observable<any[]> {
    return this.http.get<{ data: any[] }>(this.apiUrl).pipe(
      map(response => response.data) // Extract the data array
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }



}
