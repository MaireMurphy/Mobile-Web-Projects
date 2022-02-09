import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(code: String): Observable<any>{
    console.log("https://newsapi.org/v2/top-headlines?country=" + code + "&apiKey=5001d66ceb884f61a08a448c7fb6fad7&pageSize=5");
    return this.http.get("https://newsapi.org/v2/top-headlines?country=" + code + "&apiKey=5001d66ceb884f61a08a448c7fb6fad7&pageSize=5");
    
  }

}
