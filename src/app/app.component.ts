import {Component} from '@angular/core';
import {CountryService} from "./services/country.service";
import {CountryModelResponse} from "./models/responses/country.model.response";
import {CovidService} from "./services/covid.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-app';
  countries: CountryModelResponse[] = [];

  constructor(private countryService: CountryService, private covidService: CovidService) {
    this.countryService.getAccessToken();
    this.covidService.covidHistoryEmitter.subscribe(covidCountryHistory=>{
      console.log(covidCountryHistory);
    });
    this.covidService.covidCountryInfosEmitter.subscribe(info=>{
      console.log(info);
    })
  }

  getCountries() {
    this.countryService.getCountries().subscribe(_countries => {
      console.log(_countries);
      this.countries = _countries
    });
  }
  getCitiesByCountryName(countryName:string)
  {
    this.covidService.pullCovidHistoryByCountry(countryName);//.subscribe(data=>{
/*      console.log(data);
    },
      error=>{
      console.log("Error !!!!!!!\n");
      console.log(error);
      })*/
  }
}
