import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckinRequest } from '../model/checkinRequest';

@Injectable({
  providedIn: 'root'
})
export class CheckinserviceService {

  // Clean base URL without a trailing slash
  reservationUrl = "http://localhost:8080/api/reservations";
  reservationData: any;

  constructor(private _httpClient: HttpClient) { }

  public getReservation(id: number): Observable<any> {
    return this._httpClient.get(`${this.reservationUrl}/${id}`);
  }

  // Expect both the reservation ID and the check-in request body
  public checkIn(id: number, checkinRequest: CheckinRequest): Observable<any> {
    return this._httpClient.put(`${this.reservationUrl}/${id}`, checkinRequest);
  }
}