import { Component,Input} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
  constructor(private _location: Location) 
  {}
  
  @Input() kanji?: any;

  backClicked() {
    this._location.back();
  }
  

}
