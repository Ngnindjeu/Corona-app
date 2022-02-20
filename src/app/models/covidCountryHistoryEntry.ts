import {Constances} from "../utils/constances";

export class CovidCountryHistoryEntry {
  date: Date;
  cases: number;
  deaths: number;
  recovered: number;

  constructor(date?: Date, cases?: number, deaths?: number, recovered?: number) {
    this.date = date ? date : Constances.INVALID_DATE;
    this.cases = cases != undefined ? cases : Constances.INVALID_NUMBER;
    this.deaths = deaths != undefined ? deaths : Constances.INVALID_NUMBER;
    this.recovered = recovered != undefined ? recovered : Constances.INVALID_NUMBER;
  }

}
