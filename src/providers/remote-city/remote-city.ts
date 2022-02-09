import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RemoteCityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteCityProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RemoteCityProvider Provider');
  }

  getCityDetails(city: String): Observable<any>{
    console.log("https://restcountries.com/v3.1/capital/" + city);
    return this.http.get("https://restcountries.com/v3.1/capital/" + city);
    
  }
}
