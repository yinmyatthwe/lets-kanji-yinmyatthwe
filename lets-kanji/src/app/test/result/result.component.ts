import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  constructor(private _location: Location) 
  {}
  
  backClicked() {
    this._location.back();
  }
}
