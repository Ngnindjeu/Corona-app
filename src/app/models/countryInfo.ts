import {Constances} from "../utils/constances";

export class CountryInfo {

  public flag: string;
  public long: number;
  public lat: number;

  constructor(_long?: number, _lat?: number, _flag?: string) {
    this.long = _long != undefined ? _long : Constances.INVALID_NUMBER;
    this.lat = _lat != undefined ? _lat : Constances.INVALID_NUMBER;
    this.flag = _flag ? _flag : Constances.INVALID_IMAGE_PATH;

  }

}
