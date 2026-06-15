import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Reservation } from '../model/reservation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  // Moved to private to follow best practices
  private reservationUrl: string = "http://localhost:8080/api/reservations";

  constructor(private _httpClient: HttpClient) { }

  // FIX: Return the Observable directly so your components can subscribe to it
  public getAllReservation(): Observable<any> {
    return this._httpClient.get<any>(this.reservationUrl);
  }

  // FIX: Return the Observable directly so your components can subscribe to it
  public getReservationById(id: number): Observable<any> {
    return this._httpClient.get<any>(`${this.reservationUrl}/${id}`);
  }

  // This one was already correct!
  public saveReservation(reservation: Reservation): Observable<any> {
    return this._httpClient.post<any>(this.reservationUrl, reservation);
  }

}