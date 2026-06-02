import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { CountriesUpdateComponent } from './components/countries-update/countries-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountriesUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesUpdateComponent]
})
export class AppModule { }