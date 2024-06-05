import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { questions } from './test/n5test/question/question';
import { N5QUESTIONS } from './test/n5test/question/questionList';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }
  getQuestions(): Observable<questions[]> {
    const questions = of(N5QUESTIONS);
    
    return questions;
  }
}
