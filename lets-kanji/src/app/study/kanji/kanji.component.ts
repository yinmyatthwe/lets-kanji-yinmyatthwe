import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of } from "rxjs";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { KanjiService } from '../../kanji.service';
interface Kanji {
  onyomi: string;
  kanji: string;
  level:string;
  meaning:string;
  kunyomi:string;
}
interface Entry<T> {
  id: number;
  attributes: T;
}

interface Response {
  data: Entry<Kanji>[];
}
@Component({
  selector: 'app-kanji',
  templateUrl: './kanji.component.html',
  styleUrl: './kanji.component.css'
})
export class KanjiComponent implements OnInit,AfterViewInit{
  error: any | undefined;
  kanjiLevel: String | null = null;
  items: any[] = [];
  filteredItems: any[] = [];
  constructor(private _location: Location,private http: HttpClient, private route:ActivatedRoute, private kanjiService:KanjiService) {}
    @ViewChild(MatPaginator)
    
    paginator!: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  // displayedColumns: string[] = ['no', 'kanji', 'onyomi'];
  // dataSource = new MatTableDataSource <Kanji>();
      
  ngOnInit(): void {
    this.kanjiService.getKanjis().subscribe(
      data => {
        console.log('Data fetched from Strapi:', data); 
        if (Array.isArray(data)) {
          this.items = data;
          this.filterItems(); 
        } 
      },
      error => {
        console.error('Error fetching data from Strapi:', error); // Handle fetch error
      }
    );
    this.route.paramMap.subscribe(params => {
      this.kanjiLevel = params.get('id');
      this.filterItems(); 
    });
  }
  filterItems() {
    if (this.kanjiLevel && Array.isArray(this.items)) {
      this.filteredItems = this.items.filter(item => item.attributes.level=== this.kanjiLevel);
      console.log('Filtered items:', this.filteredItems); // Debug log
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.error = error;
    return of();
  }
  selectedWord?: Kanji
  getWordDetails(n5Kanji: Kanji): void {
    this.selectedWord = n5Kanji;
  }
  
  backClicked() {
    this._location.back();
  }
}
