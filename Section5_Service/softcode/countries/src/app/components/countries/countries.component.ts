import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public data: any[] = [];

  constructor(private _service: CountriesService) { }

  ngOnInit(): void {
    this._service.getCountries().subscribe({
      next: (response: any[]) => {
        this.data = response;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading countries:', err);
      }
    });
  }

}