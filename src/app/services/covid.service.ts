import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CountryModelResponse} from "../models/responses/country.model.response";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {CovidCountryAllModelResponse} from "../models/responses/covidCountryAll.model.response";
import {EventEmitter, Injectable} from "@angular/core";
import {CovidCountryHistory} from "../models/covidCountryHistory";
import {CovidCountryHistoryEntry} from "../models/covidCountryHistoryEntry";
import {CovidCountryInfo} from "../models/covidCountryInfo";

@Injectable()
export class CovidService {
  covidHistoryEmitter: EventEmitter<CovidCountryHistory> = new EventEmitter<CovidCountryHistory>();
  covidCountryInfosEmitter: EventEmitter<CovidCountryInfo[]> = new EventEmitter<CovidCountryInfo[]>();
  private covidCountryInfo_cache: CovidCountryInfo[] = [];

  constructor(private httpClient: HttpClient) {
  }

  private prefillHeaders(): HttpHeaders {
    return new HttpHeaders().set('Accept', 'application/json');
  }

  getCovidTotalByCountry(country: string): Observable<CovidCountryAllModelResponse> {
    let headers: HttpHeaders = this.prefillHeaders();
    return this.httpClient.get<CovidCountryAllModelResponse>(environment.COVID_basisUrl + `/countries/${country.toLowerCase()}?yesterday=false&twoDaysAgo=false&strict=false&allowNull=false`, {headers: headers});
  }

  pullCovidHistoryByCountry(country: string): void {

    if (this.covidCountryInfo_cache.find(info => info.metaInfo.country.toLowerCase() == country) !== undefined) return; // already pulled
    this.getCovidTotalByCountry(country).subscribe(covidCountryAllResponse => {
        let headers: HttpHeaders = this.prefillHeaders();
        this.httpClient.get<any>(environment.COVID_basisUrl + `/historical/${country.toLowerCase()}?lastdays=all`, {headers: headers})
          .subscribe(data => {
              console.log(data)
              let timeline: any = data.timeline;
              if (timeline) {
                let cases: any = timeline.cases;
                let cases_l: number = Object.keys(cases).length;

                let deaths: any = timeline.deaths;
                let deaths_l: number = Object.keys(deaths).length;

                let recovered: any = timeline.recovered;
                let recovered_l: number = Object.keys(recovered).length;

                if ((!(cases && deaths && recovered)) ||
                  cases_l != deaths_l || cases_l != recovered_l) return;

                let entries: CovidCountryHistoryEntry[] = [];
                let lastCaseNbr: number = 0;
                let lastrecoveredNbr: number = 0;
                let lastdeathsNbr: number = 0;
                Object.keys(cases).forEach(date=>{
                  let entry : CovidCountryHistoryEntry ;

                  let dailyCases: number= +cases[date];
                  let dailyRecovered: number= +recovered[date];
                  let dailyDeaths: number= +deaths[date];

                  entry = new CovidCountryHistoryEntry(new Date(date),dailyCases-lastCaseNbr, dailyDeaths-lastdeathsNbr, dailyRecovered-lastrecoveredNbr);

                  entries.push(entry);
                  lastCaseNbr = dailyCases;
                  lastrecoveredNbr = dailyRecovered;
                  lastdeathsNbr = dailyDeaths;
                });
                let covidCountryHistory : CovidCountryHistory= new CovidCountryHistory(country.toLowerCase(),entries);
                this.covidHistoryEmitter.emit(covidCountryHistory);
                this.covidCountryInfo_cache.push(new CovidCountryInfo(covidCountryAllResponse, covidCountryHistory));
                this.covidCountryInfosEmitter.emit(this.covidCountryInfo_cache.slice())
              }
            },
            error => {
        //TODO handle http-error
            });
      },
      error => {
        //TODO handle http-error
      })
  }


}
