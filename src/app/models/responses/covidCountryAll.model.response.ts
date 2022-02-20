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

'{\n' +
'  "updated": 1645301418975,\n' +
'  "country": "Cameroon",\n' +
'  "countryInfo": {\n' +
'    "_id": 120,\n' +
'    "iso2": "CM",\n' +
'    "iso3": "CMR",\n' +
'    "lat": 6,\n' +
'    "long": 12,\n' +
'    "flag": "https://disease.sh/assets/img/flags/cm.png"\n' +
'  },\n' +
'  "cases": 119107,\n' +
'  "todayCases": 0,\n' +
'  "deaths": 1920,\n' +
'  "todayDeaths": 0,\n' +
'  "recovered": 106050,\n' +
'  "todayRecovered": 0,\n' +
'  "active": 11137,\n' +
'  "critical": 13,\n' +
'  "casesPerOneMillion": 4312,\n' +
'  "deathsPerOneMillion": 70,\n' +
'  "tests": 1751774,\n' +
'  "testsPerOneMillion": 63419,\n' +
'  "population": 27622124,\n' +
'  "continent": "Africa",\n' +
'  "oneCasePerPeople": 232,\n' +
'  "oneDeathPerPeople": 14387,\n' +
'  "oneTestPerPeople": 16,\n' +
'  "activePerOneMillion": 403.19,\n' +
'  "recoveredPerOneMillion": 3839.31,\n' +
'  "criticalPerOneMillion": 0.47\n' +
'}'
