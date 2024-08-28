import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent {
  userId: any;
  constructor(private _location: Location) 
  {}
  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }
  backClicked() {
    this._location.back();
  }
}
