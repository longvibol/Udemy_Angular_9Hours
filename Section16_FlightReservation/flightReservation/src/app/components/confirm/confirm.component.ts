import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  reservationId: number = 12345; // Mock reservation ID (Replace with actual data from backend)

  constructor() { }

  ngOnInit(): void {
  }

}
