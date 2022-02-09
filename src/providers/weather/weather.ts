import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UnitSelectorProvider} from '../../providers/unit-selector/unit-selector';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  unit: string;

  constructor(public http: HttpClient, private us: UnitSelectorProvider) {
    console.log('Hello WeatherProvider Provider');
  }

  
  getWeather(lat: string, lon: string, units: string): Observable<any>{
    
    this.unit = this.us.getUnit(units);

    console.log("https://api.weatherbit.io/v2.0/current?lat=" +lat + "&lon=" + lon + "&key=e8260d9e5d514d01a4f062e3ba098f22" + "&units="+ this.unit);
    return this.http.get("https://api.weatherbit.io/v2.0/current?lat=" +lat + "&lon=" + lon + "&key=e8260d9e5d514d01a4f062e3ba098f22" + "&units="+ this.unit);
    
  }

}
