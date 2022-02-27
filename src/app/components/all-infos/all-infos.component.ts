import {Component, OnInit} from '@angular/core';
import {CovidService} from "../../services/covid.service";
import {CountryService} from "../../services/country.service";
import {CovidCountryAllModelResponse} from "../../models/responses/covidCountryAll.model.response";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-infos',
  templateUrl: './all-infos.component.html',
  styleUrls: ['./all-infos.component.css']
})
export class AllInfosComponent {

  covidAllInfos: CovidCountryAllModelResponse[] = [];

  constructor(private covidService: CovidService, private countryService: CountryService, private router: Router) {
    this.covidService.covidAllInfosEmitter.subscribe(data => {
      this.covidAllInfos = data;
      console.log("Data received")
    });

    this.countryService.countriesEmitter.subscribe(
      countries => {
        countries.forEach(country => {
          if (country.country_name !== undefined)
            this.covidService.getCovidTotalByCountryAndCache(country.country_name);
        })
      },
      error => {
        //TODO handle Http error
      }
    );
    this.countryService.getCountries();
  }

 async showHistory(country: string)
  {
    await this.router.navigate(['history/'+country]);
  }


}
