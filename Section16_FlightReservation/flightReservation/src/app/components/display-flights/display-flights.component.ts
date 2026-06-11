import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {

  // Dynamically read data from the shared service property
  // get data(): any[] {
  //   return this._flightService.data;
  // }

  data:any;

  constructor(private _flightService: FlightService, private _router: Router) { }

  ngOnInit(): void {
    this.data = this._flightService.data;

  }

  public onSelect(id: number): void {
    console.log('Selected Flight ID:', id);   
    this._router.navigate(['/passengerDetails/'+id])
  }
}