import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { N5kanjiComponent } from './study/n5kanji/n5kanji.component';
import { N5testComponent } from './test/n5test/n5test.component';
import path from 'path';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:MainComponent},
  {path:'study',component:StudyComponent},
  {path:'test',component:TestComponent},
  {path:'n5kanji',component:N5kanjiComponent},
  {path:'n5test',component:N5testComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
