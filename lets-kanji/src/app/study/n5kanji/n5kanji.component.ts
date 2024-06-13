import { Component,OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { N5KANJIS } from './n5KanjiList';
import { Location } from '@angular/common';
import { KanjiService } from '../../kanji.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { N5Kanji } from './n5kanji';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { catchError,map,Observable,of } from 'rxjs';
import { response } from 'express';

export interface KanjiResponse {
  id: number;
  kanji: string;
  onyomi: string;

}
interface Entry<T>{
  id:number;
  attributes:T;
}
interface Response{
  data:Entry<KanjiResponse>[];
}

@Component({
  selector: 'app-n5kanji',
  templateUrl: './n5kanji.component.html',
  styleUrl: './n5kanji.component.css'
})
export class N5kanjiComponent implements AfterViewInit,OnInit{
  //kanjis = N5KANJIS;
  error: any | undefined;
  kanjis$: Observable<KanjiResponse[]> | undefined;

  constructor(private _location: Location,private kanjiService: KanjiService,
    private http: HttpClient) {}
    @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
      
    ngOnInit(): void {
      const url = "http://localhost:1337/api/kanji-lists";
      const opts = { params: { populate: "*" } };
  
      this.kanjis$ = this.http.get<Response>(url,opts).pipe(
        catchError((error) => this.handleError(error)),
        map((response) => response.data.map((x) => x.attributes))
      );
      
    }
    displayedColumns: string[] = ['no', 'kanji', 'onyomi'];
    dataSource = new MatTableDataSource <Element>();

    private handleError(error: HttpErrorResponse): Observable<never> {
      this.error = error;
      return of();
    }
  //test
  
  //detail
  selectedWord?: N5Kanji
  getWordDetails(n5Kanji: N5Kanji): void {
    this.selectedWord = n5Kanji;
  }
  
  backClicked() {
    this._location.back();
  }
}
