import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { KanjiComponent } from './study/kanji/kanji.component';
import { N5testComponent } from './test/n5test/n5test.component';
import { QuestionComponent } from './test/n5test/question/question.component';
import path from 'path';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'study',component:StudyComponent},
  {path:'test',component:TestComponent},
  {path:'kanji/:id',component:KanjiComponent},
  {path:'testList/:id',component:N5testComponent},
  {path:'test/:id',component:QuestionComponent},
  {path:'result',component:QuestionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
