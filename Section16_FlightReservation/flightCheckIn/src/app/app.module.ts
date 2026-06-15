import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { FormsModule } from '@angular/forms';
import { CheckinserviceService } from './service/checkinservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmcheckinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CheckinserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
