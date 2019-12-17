import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Code Challenge";
  desc = "Created a Giphy Search Dashboard which is simple to use with a single click.";
  msg = "Do you want to try ? Do not wait... Please click on the below button....";
  
  constructor() { }

  ngOnInit() {
  }

}
