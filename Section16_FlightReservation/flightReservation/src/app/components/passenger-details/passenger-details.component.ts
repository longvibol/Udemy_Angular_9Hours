import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {

  // Mock data for flight details (Replace with your actual API fetch logic later)
  flightData = {
    operatingAirlines: 'Delta Airlines',
    departureCity: 'New York (JFK)',
    arrivalCity: 'London (LHR)',
    dateOfDeparture: '2026-12-25'
  };

  // Object to bind form data using [(ngModel)]

  reservation:any;

  constructor(private _flightService: FlightService, private _router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Triggered when the form is submitted
  onSubmit(): void {

    this.reservation = this._flightService.data;
    console.log('Reservation Submitted Successfully:', this.reservation);
    // Add your backend service call here to save the data
  }

}
