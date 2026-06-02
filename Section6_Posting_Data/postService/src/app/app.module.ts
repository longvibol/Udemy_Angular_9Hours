import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UppercaseConverterComponent } from './components/uppercase-converter/uppercase-converter.component';
import { UppercaseConverterService } from './services/uppercase-converter.service';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UppercaseConverterService],
  bootstrap: [UppercaseConverterComponent]
})
export class AppModule { }
