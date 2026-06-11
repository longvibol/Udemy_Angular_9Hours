import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Criteria } from '../model/criteria';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservationUrl:string = "http://localhost:8080/api/reservations";

  data:any;

  constructor(private _httpClient: HttpClient) { }

  public getAllReservation():any {
    return this._httpClient.get(this.reservationUrl).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  public getReservationById(id:number):any {
    return this._httpClient.get(this.reservationUrl+"/"+id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  public saveReservation(reservation:Reservation):any {
    return this._httpClient.post(this.reservationUrl, reservation).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}