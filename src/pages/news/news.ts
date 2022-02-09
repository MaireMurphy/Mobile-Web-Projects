import { Component } from '@angular/core';
import { NewsProvider } from '../../providers/news/remoteNews';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteCityProvider } from '../../providers/remote-city/remote-city';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  countryCode: string;
  news: string[];
  newsMsg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private rcp: RemoteCityProvider, private np: NewsProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  ionViewWillEnter(){

    this.storage.get("citySetting")
  .then((val) => 
    {
      this.rcp.getCityDetails(val).subscribe(details => {
       
        this.countryCode = details[0].cca2;
      

        this.np.getNews(this.countryCode).subscribe(
          newsInfo => {
         
          this.news = newsInfo.articles;
          if (this.news.length > 0){
            this.newsMsg = "News from " + this.countryCode;}
          else {this.newsMsg = "No news from " + this.countryCode;}
          
        },
          err => {},
          () => {});
          
    });
 
  
  });
}
}