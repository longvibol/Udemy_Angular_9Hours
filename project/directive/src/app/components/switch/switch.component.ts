import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  mycase: number = 30;

  role: string = 'admin';

  status: string = 'pending';

  grade: string = 'B';

  changeCase(value: number) {
    this.mycase = value;
  }

  changeRole(value: string) {
    this.role = value;
  }

  ngOnInit(): void {
  }

}