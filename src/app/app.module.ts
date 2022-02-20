import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CountryService} from "./services/country.service";
import {CovidService} from "./services/covid.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [CountryService, CovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
