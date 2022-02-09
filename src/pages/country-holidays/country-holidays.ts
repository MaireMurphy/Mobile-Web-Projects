import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RemoteCityProvider } from '../../providers/remote-city/remote-city';
import { HolidaysProvider } from '../../providers/holidays/holidays';

/**
 * Generated class for the CountryHolidaysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-holidays',
  templateUrl: 'country-holidays.html',
})
export class CountryHolidaysPage {
  countryCode: string;
  statusMsg: string;
  hols: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private rcp: RemoteCityProvider, private hol: HolidaysProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryHolidaysPage');
  }


  ionViewWillEnter(){

    this.storage.get("citySetting")
  .then((val) => 
    {
      this.rcp.getCityDetails(val).subscribe(details => {
       
        this.countryCode = details[0].cca2;
      

        this.hol.getHolidays(this.countryCode).subscribe(
          holidayInfo => {
         
          this.hols = holidayInfo;
          if (this.hols.length > 0){
            this.statusMsg = "2022 Holidays for " + this.countryCode;}
          else {this.statusMsg = "No holiday information for: " + this.countryCode;}
          
        },
          err => {},
          () => {});
          
    });
 
  
  });
}

}
