import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-n5test',
  templateUrl: './n5test.component.html',
  styleUrl: './n5test.component.css'
})
export class N5testComponent {
  constructor(private _location: Location) 
  {}
  
  backClicked() {
    this._location.back();
  }
}
