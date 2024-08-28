import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
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
