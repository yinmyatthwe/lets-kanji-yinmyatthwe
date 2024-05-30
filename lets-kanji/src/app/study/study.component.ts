import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent {

  constructor(private _location: Location) 
  {}
  
  backClicked() {
    this._location.back();
  }
}
