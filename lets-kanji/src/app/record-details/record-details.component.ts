import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrl: './record-details.component.css'
})
export class RecordDetailsComponent {
  @Input() score?: any;
}
