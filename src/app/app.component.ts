import {Component} from '@angular/core';
import {CountryService} from "./services/country.service";
import {CountryModelResponse} from "./models/responses/country.model.response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-app';
  countries: CountryModelResponse[] = [];

  constructor(private countryService: CountryService) {
    this.countryService.getAccessToken();
  }

  getCountries() {
    this.countryService.getCountries().subscribe(_countries => {
      console.log(_countries);
      this.countries = _countries
    });
  }
  getCitiesByCountryName(countryName:string)
  {
    this.countryService.getCitiesByCountryName(countryName).subscribe(cities=>{
      console.log(cities);
    })
  }
}
