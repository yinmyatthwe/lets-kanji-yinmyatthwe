import { Component,OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { TestService } from '../../../test.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export interface apiQuestionResponse{
  id: number;
  question: string;
  answer: string;
  choice_1: string;
  choice_2: string;
  choice_3: string;
  choice_4: string;
  level:string;
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  //questions
  testNumber: String | null = null;
  items: any[] = [];
  questionList: any[] = [];
  filteredQuestions:any[]=[];
  questions:apiQuestionResponse[]=[]; 
  answerList:any[]=[];
  score=0;
  currentQuestionIndex: number = 0;
  showMyResult:boolean | undefined;


  constructor(private testService:TestService,private location:Location, private route:ActivatedRoute, private router:Router){}
  ngOnInit():void{
    this.testService.getTests().subscribe(
    data => {
      console.log('Data fetched from Strapi:', data); 
      if (Array.isArray(data)) {
        this.items = data;
        this.filterItems(); 
      } 
    },
    error => {
      console.error('Error fetching data from Strapi:', error); 
    }
  );
  this.route.paramMap.subscribe(params => {
    this.testNumber = params.get('id');
    this.filterItems(); 
  });
}
filterItems() {
  if (this.testNumber && Array.isArray(this.items)) {
    let test=this.items.filter(item => item.id.toString()=== this.testNumber)[0];
    this.questionList = test.attributes.kanji_question_lists.data;
  }
}

nextQuestion() {
    if (this.currentQuestionIndex < this.questionList.length - 1) {
      this.currentQuestionIndex++;
    }
  }
previousQuestion() {
    if (this.currentQuestionIndex >0) {
      this.currentQuestionIndex--;
    }
  }
  
selectAnswer(userAnswer: string, id:number) {
    let qId= this.questionList.filter(item=>item.id===id)[0];
    if(userAnswer===qId.attributes.answer){
      this.score++;
    }
}
showResult(){
  this.showMyResult=true;
}
}
