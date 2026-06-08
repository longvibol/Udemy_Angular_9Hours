import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  x: number;
  y: number;
  s: string;
  isLoggedIn: boolean;
  marks: number;
  users: string[];

  constructor() {

    this.x = 3;
    this.y = 4;
    this.s = 'hello';

    this.isLoggedIn = true;
    this.marks = 5;
    this.users = ['John', 'David', 'Sara','Thida'];
  }

  myFun() {
    return true;
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  ngOnInit(): void {
  }

}