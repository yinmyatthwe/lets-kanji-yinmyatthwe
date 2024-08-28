import { NgModule, } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Location } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { N5testComponent } from './test/n5test/n5test.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QuestionComponent } from './test/n5test/question/question.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelect,MatOption} from '@angular/material/select';
import { WordDetailsComponent } from './study/word-details/word-details.component';
import { KanjiComponent } from './study/kanji/kanji.component';
import { ResultComponent } from './test/result/result.component';
import { RecordComponent } from './record/record.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    TestComponent,
    MainComponent,
    N5testComponent,
    QuestionComponent,
    WordDetailsComponent,
    KanjiComponent,
    ResultComponent,
    RecordComponent,
    RecordDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatSelect,
    MatOption,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
}
