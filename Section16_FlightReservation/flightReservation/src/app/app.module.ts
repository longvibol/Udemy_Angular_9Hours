import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationService } from './services/reservation.service';
import { FlightService } from './services/flight.service';
import { FlightsComponent } from './components/flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmComponent,
    FlightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ReservationService,FlightService],
  bootstrap: [FindFlightsComponent]
})
export class AppModule { }
