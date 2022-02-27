import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CovidService} from "../../services/covid.service";
import {CountryService} from "../../services/country.service";
import {ChartData, ChartOptions} from "chart.js";
import {CovidCountryInfo} from "../../models/covidCountryInfo";
import {CovidCountryAllModelResponse} from "../../models/responses/covidCountryAll.model.response";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {


  chartOptions_cases: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Verlauf der Fälle',
      },
    },
  };

selectedCountryMetaInfo?: CovidCountryAllModelResponse ;

  viewData_cases?: ChartData<'line'>;

  private selectedCountryName: string = '';

  constructor(private route: ActivatedRoute,private router: Router, private countryService: CountryService, private covidService: CovidService) {

    this.covidService.covidCountryInfosEmitter.subscribe(data => {

      let foundCovidCountryInfo = data.find(countryInfo => countryInfo.metaInfo.country == this.selectedCountryName);
      if (foundCovidCountryInfo !== undefined) {

        this.selectedCountryMetaInfo = foundCovidCountryInfo.metaInfo;

        let yesterday: Date = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        let startdate: Date = new Date(yesterday.getTime());
        startdate.setDate(yesterday.getDate() - 30);

        let foundElements = foundCovidCountryInfo.history.entries.filter(entry => entry.date >= startdate && entry.date <= yesterday);
        let labels = foundElements.map(elt => elt.date.toLocaleDateString());
        let cases = foundElements.map(elt => elt.cases);
        let deaths = foundElements.map(elt => elt.deaths);
        let recovered = foundElements.map(elt => elt.recovered);
        this.viewData_cases = {
          labels: labels,
          datasets: [
            {label: 'Fälle', data: cases, tension: 0.5},
          ],
        };


      }
    });


    this.route.params.subscribe(params => {
      console.log(params);
      if (params['country'] !== undefined) {
        this.covidService.pullCovidHistoryByCountry(params['country']);
        this.selectedCountryName = params['country'];
      } else {
       this.router.navigate(['history/Cameroon']);
      }
    })
  }


}
