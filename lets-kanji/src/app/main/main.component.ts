import { Component,OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent  implements OnInit{
  userId: any;
  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }

  constructor(private userService:UserService) {}
  logout(){
    this.userService.logout();
  }

}
