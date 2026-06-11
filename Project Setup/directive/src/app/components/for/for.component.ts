import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  courses:String[];

  students:{fName:String,lName:String,score:number}[];

  constructor() { 
    this.courses=["Java","DevOp","Python"];
    this.students = [
      {fName:"long",lName:"vibol",score:20},
      {fName:"Nou",lName:"dany",score:30},
      {fName:"long",lName:"braly",score:50}
    ];
  }

  ngOnInit(): void {
  }

}
