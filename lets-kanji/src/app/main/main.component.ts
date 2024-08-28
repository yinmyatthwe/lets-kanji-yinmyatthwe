import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit{
  userId: any;
  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    console.log('User ID:', this.userId);
  }
}
