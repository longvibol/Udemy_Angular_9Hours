import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Criteria } from 'src/app/model/criteria';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {

  criteria: Criteria = new Criteria('','', '');

  constructor(private _flightService: FlightService, private _router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this._flightService.getFlights(this.criteria).subscribe(
      (res: any) => {
        // Assign the array of flights from your API payload to the service data
        this._flightService.data = res.flights;    
        console.log(res)
        // Navigate to the list component
        this._router.navigate(['/displayFlights']);
      },
      (error) => {
        console.error("Error fetching flights", error);
      }
    );
  }

}