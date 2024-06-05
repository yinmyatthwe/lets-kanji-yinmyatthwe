import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { N5KANJIS } from './n5KanjiList';
import { Location } from '@angular/common';
import { KanjiService } from '../../kanji.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { N5Kanji } from './n5kanji';


@Component({
  selector: 'app-n5kanji',
  templateUrl: './n5kanji.component.html',
  styleUrl: './n5kanji.component.css'
})
export class N5kanjiComponent implements AfterViewInit{
  kanjis = N5KANJIS;

  displayedColumns: string[] = ['no', 'kanji', 'onyomi', 'kunyomi','meaning'];
  dataSource = new MatTableDataSource<N5Kanji>(N5KANJIS);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private _location: Location,private kanjiService: KanjiService) {}
  ngOnInIt():void{
    this.getKanjis();
  }

  selectedWord?: N5Kanji

  getKanjis(): void {
    this.kanjiService.getKanjis()
        .subscribe(kanjis=>this.kanjis=kanjis);
  }
  getWordDetails(n5Kanji: N5Kanji): void {
    this.selectedWord = n5Kanji;
  }
  
  backClicked() {
    this._location.back();
  }
}
