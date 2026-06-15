import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  reservationId!: number;

    constructor(private _flightService: FlightService,
    private _reservationService:ReservationService
    ,    
    private _router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.reservationId = Number.parseInt(this.route.snapshot.paramMap.get("id")!);
  }

}
