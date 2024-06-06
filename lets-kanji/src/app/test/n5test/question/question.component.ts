import { Component,OnInit} from '@angular/core';
import { questions } from './question';
import { N5QUESTIONS } from './questionList';
import { Location } from '@angular/common';
import { TestService } from '../../../test.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  questions = N5QUESTIONS;
  constructor(private testService:TestService,private location:Location){}
  ngOnInit():void{
    this.getQuestions();
  }
  getQuestions():void{
    this.testService.getQuestions()
    .subscribe(questions=>this.questions=questions);
  }
  backClicked() {
    this.location.back();
  }
}
