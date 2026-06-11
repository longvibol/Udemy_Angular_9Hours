import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ForchatgptComponent } from './components/forchatgpt/forchatgpt.component';

@NgModule({
  declarations: [
    AppComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    ForchatgptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
