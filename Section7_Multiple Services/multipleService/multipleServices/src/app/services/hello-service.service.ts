import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor(private _httpclient: HttpClient) { }

  public helloService():any{
    return this._httpclient.get("http://localhost:8080/api/uppercase/hello");
  }
}
