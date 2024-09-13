import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  userId: any;

  constructor(private _location: Location,private userService:UserService) 
  {}
  ngOnInit() {
    this.userId = localStorage.getItem('userId');
  }
  backClicked() {
    this._location.back();
  }
  logout(){
    this.userService.logout();
  }
}
