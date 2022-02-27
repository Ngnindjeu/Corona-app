import {CountryInfo} from "../countryInfo";
import {Constances} from "../../utils/constances";

export class CovidCountryAllModelResponse {

  public country: string;
  public countryInfo: CountryInfo;
  public cases: number;
  public deaths: number;
  public recovered: number;
  public active: number;
  public critical: number;
  public population: number;
  public continent: string;

  constructor(country?: string, countryInfo?: CountryInfo, cases?: number, deaths?: number, recovered?: number, active?: number, critical?: number, population?: number, continent?: string) {
    this.country = country ? country : Constances.INVALID_STRING;
    this.countryInfo = countryInfo ? countryInfo : new CountryInfo();
    this.cases = cases ? cases: Constances.INVALID_NUMBER;
    this.deaths = deaths? deaths: Constances.INVALID_NUMBER;
    this.recovered = recovered? recovered: Constances.INVALID_NUMBER;
    this.active = active? active: Constances.INVALID_NUMBER;
    this.critical = critical? critical: Constances.INVALID_NUMBER;
    this.population = population? population: Constances.INVALID_NUMBER;
    this.continent = continent? continent : Constances.INVALID_STRING;
  }

}
