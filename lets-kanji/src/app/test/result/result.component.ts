import { Component,Input, input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  constructor(private _location: Location,private router:Router) 
  {}
  @Input() result: number | undefined;
  @Input() questionList:any;
  
  backClicked() {
    this._location.back();
  }
}
