import {Component, OnInit} from '@angular/core';
import {CountryService} from "./services/country.service";
import {CountryModelResponse} from "./models/responses/country.model.response";
import {CovidService} from "./services/covid.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'corona-app';
  countries: CountryModelResponse[] = [];

}
