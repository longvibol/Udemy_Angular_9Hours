import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-update',
  templateUrl: './countries-update.component.html',
  styleUrls: ['./countries-update.component.css']
})
export class CountriesUpdateComponent implements OnInit {

  public data: any[] = [];
  public loading = false;
  public errorMessage = '';
constructor(private _service: CountriesService) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.loading = true;
    this.errorMessage = '';

    this._service.getCountries().subscribe({
      next: (response: any[]) => {
        this.data = response;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = 'Failed to load countries.';
        this.loading = false;
        console.error('Error loading countries:', err);
      }
    });
  }

}
