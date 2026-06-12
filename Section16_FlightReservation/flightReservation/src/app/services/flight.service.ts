import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criteria } from '../model/criteria';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightUrl: string = "http://localhost:8080/api/flights/search";

  data: any[] = [];

  constructor(private _httpClient: HttpClient) { }

  // 1. Returns the Observable directly so FindFlightsComponent can subscribe to it
  public getFlights(criteria: Criteria): Observable<any> {
    // http://localhost:8080/api/flights/search?from=AUS&to=NYC&departureDate=2026-09-05

    const url = `${this.flightUrl}?from=${criteria.from}&to=${criteria.to}&departureDate=${criteria.departureDate}`;
    return this._httpClient.get<any>(url);
  }

  // 2. Returns the Observable for a single flight detail lookup
  public getFlight(id: number): Observable<any> {
    return this._httpClient.get<any>("http://localhost:8080/api/flights/" + id);
  }

  // 3. get All the flgith 
  public getAllFlight(): Observable<any> {
    return this._httpClient.get<any>("http://localhost:8080/api/flights");
  }



}