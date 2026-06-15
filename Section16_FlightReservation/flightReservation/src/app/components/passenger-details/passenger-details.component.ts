import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { FlightService } from 'src/app/services/flight.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  flightData:any;

  reservation:Reservation = new Reservation​​("","","","","","","","",0);

  constructor(private _flightService: FlightService,
    private _reservationService:ReservationService
    ,    
    private _router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get("id");
    if (id){
      this._flightService.getFlight(Number.parseInt(id)).subscribe((res:any)=>{
        this.flightData = res;
    });
    }
    
  }

  // Triggered when the form is submitted
  onSubmit(): any {
    // Parse to integer to guarantee it matches the backend 'int' type
    this.reservation.flightId = Number.parseInt(this.flightData.id);

    console.log("Sending payload:", this.reservation);

    this._reservationService.saveReservation(this.reservation).subscribe((res:any)=>{
      console.log("Success");
      this._router.navigate(['/confirm/' + res.id]);
    });
  
  }

}
