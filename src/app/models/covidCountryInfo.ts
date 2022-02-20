import {CovidCountryAllModelResponse} from "./responses/covidCountryAll.model.response";
import {CovidCountryHistory} from "./covidCountryHistory";

export class CovidCountryInfo {
  constructor(metaInfo: CovidCountryAllModelResponse, history: CovidCountryHistory) {
    this.metaInfo = metaInfo;
    this.history = history;
  }

  metaInfo: CovidCountryAllModelResponse;
  history: CovidCountryHistory;
}
