import { NgModule, } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { N5kanjiComponent } from './study/n5kanji/n5kanji.component';
import { N5testComponent } from './test/n5test/n5test.component';


@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    TestComponent,
    MainComponent,
    N5kanjiComponent,
    N5testComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    
  ],
  providers: [
    provideClientHydration()
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
