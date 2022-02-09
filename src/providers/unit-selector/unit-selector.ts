import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UnitSelectorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UnitSelectorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UnitSelectorProvider Provider');
  }

  getUnit(unit: string): string{
    
    switch (unit) {
      case "metric":
          unit = "M";
          break;
      case "scientific":
          unit = "S";
          break;
      case "fahrenheit":
          unit = "I";
          break;
    }

    return unit;
  }

}
