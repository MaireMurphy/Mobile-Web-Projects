import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HolidaysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HolidaysProvider {

  constructor(public http: HttpClient) {
    
  }

  getHolidays(code: String): Observable<any>{
    console.log("https://date.nager.at/api/v3/publicholidays/2022/" + code);
    return this.http.get("https://date.nager.at/api/v3/publicholidays/2022/" + code);
    
  }

}
