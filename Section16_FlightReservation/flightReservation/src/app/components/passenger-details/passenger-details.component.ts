import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from 'src/app/model/reservation';
import { FlightService } from 'src/app/services/flight.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  flightData:any;

  reservation:Reservation = new Reservation("","","","","","","","","");



  constructor(private _flightService: FlightService, private _reservationService: ReservationService
    , private _router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this._flightService.getFlight(Number.parseInt(id)).subscribe((res:any)=>{
        this.flightData = res;
      });
    }
  }

onSubmit(): any {
  this.reservation.flightId = this.flightData.id;

  // Now that saveReservation returns an Observable, this works perfectly!
  this._reservationService.saveReservation(this.reservation).subscribe({
    next: (res: any) => {
      console.log('Reservation saved successfully:', res);
      // 'res' is now the actual backend object containing your 'id'
      this._router.navigate(['/confirm/' + res.id]);
    },
    error: (err:any) => {
      console.error('Failed to save reservation:', err);
    }
  });
}

}
