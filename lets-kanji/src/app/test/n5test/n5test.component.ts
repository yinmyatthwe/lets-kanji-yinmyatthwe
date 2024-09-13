import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TestService } from '../../../service/test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-n5test',
  templateUrl: './n5test.component.html',
  styleUrl: './n5test.component.css'
})
export class N5testComponent {
  testLists: any[] = [];
  testLevel: any | null = null;
  filteredTests: any[] = [];


  constructor(private _location: Location,private testService:TestService, private route:ActivatedRoute) {}
  ngOnInit():void{
    this.testService.getTests().subscribe(
    data => {
      console.log('Data fetched from Strapi:', data); 
      if (Array.isArray(data)) {
        this.testLists = data; 
        this.filterItems(); 

      } 
    },
    error => {
      console.error('Error fetching data from Strapi:', error); 
    }
  );
  this.route.paramMap.subscribe(params => {
    this.testLevel = params.get('id');
    localStorage.setItem('testLevel',this.testLevel);
    this.filterItems(); 
  });
}
  filterItems() {
    if (this.testLevel && Array.isArray(this.testLists)) {
      this.filteredTests = this.testLists.filter(testList => testList.attributes.level== this.testLevel);
      console.log('Filtered items:', this.filteredTests); // Debug log
    }
  }
  backClicked() {
    this._location.back();
  }
}
