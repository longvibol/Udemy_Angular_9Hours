import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _httpclient: HttpClient) { }

  public getAllCountry():any{
    return this._httpclient.get("http://localhost:8080/api/countries");
  }

}
