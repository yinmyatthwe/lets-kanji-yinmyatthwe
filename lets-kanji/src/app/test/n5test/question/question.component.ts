/*
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestService } from '../../../test.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export interface apiQuestionResponse {
  id: number;
  question: string;
  answer: string;
  choice_1: string;
  choice_2: string;
  choice_3: string;
  choice_4: string;
  level: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class QuestionComponent implements OnInit {
  testNumber: string | null = null;
  items: any[] = [];
  questionList: any[] = [];
  filteredQuestions: any[] = [];
  questions: apiQuestionResponse[] = [];
  answerList: any[] = [];
  score = 0;
  currentQuestionIndex: number = 0;
  showMyResult: boolean | undefined;
  answeredQuestions: Set<number> = new Set(); // Track answered questions
  userAnswers: { [key: number]: string } = {}; // Track user answers

  get choices(): string[] {
    const currentQuestion = this.questionList[this.currentQuestionIndex];
    return [
      currentQuestion.attributes.choice_1,
      currentQuestion.attributes.choice_2,
      currentQuestion.attributes.choice_3,
      currentQuestion.attributes.choice_4
    ];
  }

  get selectedAnswer(): string {
    return this.userAnswers[this.questionList[this.currentQuestionIndex].id];
  }

  constructor(
    private testService: TestService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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
      let test = this.items.find(item => item.id.toString() === this.testNumber);
      if (test) {
        this.questionList = test.attributes.kanji_question_lists.data;
      }
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questionList.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(userAnswer: string, id: number) {
    if (!this.answeredQuestions.has(id)) {
      let qId = this.questionList.find(item => item.id === id);
      if (qId) {
        this.userAnswers[id] = userAnswer;
        if (userAnswer === qId.attributes.answer) {
          this.score++;
        }
        this.answeredQuestions.add(id); // Mark this question as answered
      }
    }
  }

  showResult() {
    this.showMyResult = true;
  }

  isCorrect(choice: string): boolean {
    const question = this.questionList[this.currentQuestionIndex];
    return choice === question.attributes.answer && this.userAnswers[question.id] === choice;
  }

  isIncorrect(choice: string): boolean {
    const question = this.questionList[this.currentQuestionIndex];
    return choice !== question.attributes.answer && this.userAnswers[question.id] === choice;
  }
}
*/
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TestService } from '../../../../service/test.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

export interface apiQuestionResponse {
  id: number;
  question: string;
  answer: string;
  choice_1: string;
  choice_2: string;
  choice_3: string;
  choice_4: string;
  level: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  testNumber: any | null = null;
  
  items: any[] = [];
  questionList: any[] = [];
  filteredQuestions: any[] = [];
  questions: apiQuestionResponse[] = [];
  answerList: any[] = [];
  score = 0;
  currentQuestionIndex: number = 0;
  showMyResult: boolean | undefined;
  answeredQuestions: Set<number> = new Set(); // Track answered questions
  selectedAnswers: { [key: number]: string } = {}; // Track selected answers

  constructor(
    private testService: TestService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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
      localStorage.setItem('testId', this.testNumber); 
      localStorage.setItem('testName',this.testNumber);
      this.filterItems();
    });
  }

  filterItems() {
    if (this.testNumber && Array.isArray(this.items)) {
      let test = this.items.find(item => item.id.toString() === this.testNumber);
      if (test) {
        this.questionList = test.attributes.kanji_question_lists.data;
      }
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questionList.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(userAnswer: string, id: number) {
    if (!this.answeredQuestions.has(id)) {
      let qId = this.questionList.find(item => item.id === id);
      if (qId && userAnswer === qId.attributes.answer) {
        this.score++;
      }
      this.selectedAnswers[id] = userAnswer; // Track selected answer
      this.answeredQuestions.add(id); // Mark this question as answered
    }
  }

  showResult() {
    this.showMyResult = true;
  }
}

