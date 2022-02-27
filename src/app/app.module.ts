import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CountryService} from "./services/country.service";
import {CovidService} from "./services/covid.service";
import {HeaderComponent} from './components/header/header.component';
import {AllInfosComponent} from './components/all-infos/all-infos.component';
import {AppRoutingModule} from "./app-routing.module";
import {HistoryComponent} from './components/history/history.component';
import {HomeComponent} from './components/home/home.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllInfosComponent,
    HistoryComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [CountryService, CovidService],
  bootstrap: [AppComponent]
})
export class AppModule {}
