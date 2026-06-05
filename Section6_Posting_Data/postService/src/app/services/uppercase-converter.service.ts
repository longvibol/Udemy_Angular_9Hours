import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  private apiUrl = 'http://localhost:8080/api/uppercase';

  constructor(private _httpClient: HttpClient) { }

  public convertToUpperCase(message: { message: string }): Observable<string> {
    return this._httpClient.post(this.apiUrl, message, {
      responseType: 'text'
    });
  }

}