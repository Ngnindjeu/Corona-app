import {EventEmitter, Injectable} from "@angular/core";
import {environment} from '../../environments/environment'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthModelResponse} from "../models/responses/auth.model.response";
import {Observable} from 'rxjs';
import {CountryModelResponse} from "../models/responses/country.model.response";
import {StateModelResponse} from "../models/responses/state.model.response";
import {CityModelResponse} from "../models/responses/city.model.response";


@Injectable()
export class CountryService {

  countriesEmitter: EventEmitter<CountryModelResponse[]> = new EventEmitter<CountryModelResponse[]>();
  private accessToken?: string;

  get isAuthenticated(): boolean {
    return this.accessToken != undefined && this.accessToken.trim().length >= 10;
  }

  constructor(private httpClient: HttpClient) {

  }


  public getAccessToken(): Observable<AuthModelResponse> {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('api-token', environment.COUNTRY_API_TOKEN)
      .set('user-email', environment.COUNTRY_userEmail);
    console.log("getAccessToken called");
    return this.httpClient.get<AuthModelResponse>(environment.COUNTRY_basisUrl + '/getaccesstoken', {headers: headers});

  }

  private prefillHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.accessToken).set('Accept', 'application/json');
  }

  public getCountries() {
    console.log("Access Token : " + this.accessToken);
    console.log("Authenticatd : " + this.isAuthenticated);
    if (!this.isAuthenticated) this.getAccessToken().subscribe(data => {
        this.accessToken = data.auth_token;
        this.fetchCountries();
      },
      error => {
      });
    else this.fetchCountries();
  }

  private fetchCountries(): void {
    let headers: HttpHeaders = this.prefillHeaders();
    this.httpClient.get<CountryModelResponse[]>(environment.COUNTRY_basisUrl + '/countries', {headers: headers}).subscribe(data => {
        this.countriesEmitter.emit(data);
      },
      error => {

      });

  }

  public getStatesByCountryName(countryName: string): Observable<StateModelResponse[]> {
    if (!this.isAuthenticated) return new Observable<StateModelResponse[]>();
    let headers: HttpHeaders = this.prefillHeaders();
    return this.httpClient.get<StateModelResponse[]>(environment.COUNTRY_basisUrl + '/states/' + countryName, {headers: headers});

  }

  public getCitiesByStateName(stateName: string): Observable<CityModelResponse[]> {
    if (!this.isAuthenticated) return new Observable<CityModelResponse[]>();
    let headers: HttpHeaders = this.prefillHeaders();
    return this.httpClient.get<CityModelResponse[]>(environment.COUNTRY_basisUrl + '/cities/' + stateName, {headers: headers});

  }

  public getCitiesByCountryName(countryName: string): EventEmitter<string[]> {
    let result: EventEmitter<string[]> = new EventEmitter<string[]>();
    this.getStatesByCountryName(countryName).subscribe(states => {
      let cities: string [] = [];
      states.forEach(state => {
        if (state.state_name) {
          this.getCitiesByStateName(state.state_name).subscribe(_cities => {
            result.emit(_cities.map(x => x.city_name));
            //cities = [...cities, ..._cities.map(x => x.city_name)];
          })
        }
      });
      // result.emit(cities);
    })

    return result;
  }


}
