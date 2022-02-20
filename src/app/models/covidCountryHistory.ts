import {CovidCountryHistoryEntry} from "./covidCountryHistoryEntry";

export class CovidCountryHistory {

  name: string;
  entries: CovidCountryHistoryEntry[];

  constructor(name: string, entries: CovidCountryHistoryEntry[]) {
    this.name = name;
    this.entries = entries;
  }
}
