import { Component, OnInit } from '@angular/core';
// import DataService
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;

  // activate h1Style
  h1Style: boolean = true;
  
  // initalize data service
  constructor(private data:DataService) {}

  ngOnInit() {
        this.data.getUsers().subscribe(data => {
        this.users = data
        console.log(this.users);
      }
    );
  }
  firstClick(){
  	this.data.firstClick();
  }

}
