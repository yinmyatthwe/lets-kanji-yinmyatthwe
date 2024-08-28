import { AfterViewInit, Component,OnInit, ViewChild,Input } from '@angular/core';
import { Location } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { RecordService } from '../../service/record.service';

export interface ScoreRecord {
  //name: string;
  // level: number;
  score: number;
  userId:number;
}


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrl: './record.component.css',
})
export class RecordComponent implements OnInit,AfterViewInit{
  items: any[] = [];
  filteredRecords: any[] = [];
  @Input() userId: string | null = null; 
  @Input() testId: string | null = null;

  constructor(private _location: Location,private recordService:RecordService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['test','level','score'];
  dataSource = new MatTableDataSource <any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('modal') modal: any; 
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.testId= localStorage.getItem('testId');
    this.recordService.getRecordList().subscribe(
      data => {
        if (Array.isArray(data)) {
          this.items=data;
          this.filterItems();
        } 
      },
      error => {
        console.error('Error fetching data from Strapi:', error); // Handle fetch error
      }
    );
  }
  filterItems() {
    if ( Array.isArray(this.items)) {
      this.filteredRecords = this.items.filter(item => item.attributes.user_id=== this.userId);
      this.dataSource.data=this.filteredRecords;
      this.dataSource.paginator=this.paginator;
    }
  }

  selectedRecord?: ScoreRecord
  getRecordDetails(selectedRecord: ScoreRecord): void {
    this.selectedRecord = selectedRecord;
    console.log(selectedRecord);
  }


  backClicked() {
    this._location.back();
  }
}
