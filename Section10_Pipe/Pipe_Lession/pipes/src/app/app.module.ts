import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeKm from '@angular/common/locales/km';

import { AppComponent } from './app.component';
import { ReversepipePipe } from './pipes/reversepipe.pipe';

// Register Khmer locale data
registerLocaleData(localeKm);

@NgModule({
  declarations: [
    AppComponent,
    ReversepipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'km' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }