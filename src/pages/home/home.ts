import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../../pages/settings/settings';
import { NewsPage } from '../../pages/news/news';
import { CountryHolidaysPage } from '../../pages/country-holidays/country-holidays';
import { Storage } from '@ionic/storage';
import { RemoteCityProvider } from '../../providers/remote-city/remote-city';
import { WeatherProvider } from '../../providers/weather/weather';
import { NewsProvider } from '../../providers/news/remoteNews';
import { HolidaysProvider } from '../../providers/holidays/holidays';
import { UnitSelectorProvider} from '../../providers/unit-selector/unit-selector';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appStatus: string;
  country: string;
  flagPng: string;
  lat: string;
  lon: string;
  hideSection: boolean;
  description: string;
  temperature: string;
  iconPic: string;
  windDirection: string;
  unit: string;
  

  constructor(public navCtrl: NavController, private storage: Storage, private rcp: RemoteCityProvider, private wp: WeatherProvider, private np: NewsProvider, private us: UnitSelectorProvider, private hol: HolidaysProvider) {
    this.hideSection = true;
  }

openSettings()
{
  
	this.navCtrl.push(SettingsPage);
}



ionViewWillEnter(){

 this.storage.get("citySetting")
  .then((val) => {
    if (val == null){
      this.appStatus = "City not set";
      this.hideSection = true;
      this.storage.set("unitSetting", "metric") //set units to metric if city not set
    }else {
       this.storage.get("unitSetting")
      .then((data) => {
        //if units not set then set to metric by default
        if (data == null){
          this.storage.set("unitSetting", "metric")
        }
        this.appStatus = "The city is: " + val + ". The units are: " + data;
        this.hideSection = false;
     
        //////////////////
        //Get matching Country & Flag if existing from restcountries.com 
        this.rcp.getCityDetails(val).subscribe(details => {
          this.country = details[0].name.common;
          
          
          if (this.country)
           this.flagPng = details[0].flags.png;
           this.lat = details[0].latlng[0];
           this.lon = details[0].latlng[1];
          


          ///////////////////////
          //get weather info
          this.wp.getWeather(this.lat, this.lon, data).subscribe(
            weatherInfo => {
            this.description = weatherInfo.data[0].weather.description;
            //call a unit selector provider to get m (metric), s(scientific), I (fahrenheit)
            this.unit = this.us.getUnit(data);
            this.temperature = weatherInfo.data[0].temp + " (" + this.unit + ")";
            this.iconPic= "https://www.weatherbit.io/static/img/icons/" + weatherInfo.data[0].weather.icon + ".png";
            this.windDirection= weatherInfo.data[0].wind_cdir_full;
            

          },
            err => {},
            () => {});


           
          /////////////////////////
      },
      err=> {this.appStatus = val + " not found, try another city in Settings";
              this.hideSection = true;}, //error
      ()=> {this.appStatus = "News & weather for " + val + ", " + this.country + ".";}//finally
      );

      
        ////////////////////
        
        
      })
    }
  })
  .catch((err) => {alert("Error accessing storage");}
  );

  

}

openNews(){
  this.navCtrl.push(NewsPage);
}


openHolidays(){
  this.navCtrl.push(CountryHolidaysPage);
}

}