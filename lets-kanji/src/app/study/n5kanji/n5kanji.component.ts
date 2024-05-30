import { Component,OnInit } from '@angular/core';
import { N5KANJIS } from './n5KanjiList';
import { Location } from '@angular/common';
import { KanjiService } from '../../kanji.service';

@Component({
  selector: 'app-n5kanji',
  templateUrl: './n5kanji.component.html',
  styleUrl: './n5kanji.component.css'
})

export class N5kanjiComponent {
  kanjis = N5KANJIS;

  constructor(private _location: Location,private kanjiService: KanjiService) 
  {}
  ngOnInIt():void{
    this.getKanjis();
  }

  getKanjis(): void {
    this.kanjiService.getKanjis()
        .subscribe(kanjis=>this.kanjis=kanjis);
  }
  
  backClicked() {
    this._location.back();
  }
}
