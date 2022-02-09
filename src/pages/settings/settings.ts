import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage} from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  unitSetting: String;
  citySetting: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
  }

  saveSettings(){
    console.log(this.citySetting);
    if (this.citySetting){
  
    this.storage.set("unitSetting", this.unitSetting);
    this.storage.set("citySetting", this.citySetting);
    this.navCtrl.pop();
  }else     alert("Please enter a city or press back to exit");


  }

  ionViewWillEnter(){

    this.storage.get("unitSetting")
    .then((data) => {this.unitSetting = data;})
    .catch((err) => {alert("Error accessing storage");}
    );
    this.storage.get("citySetting")
    .then((data) => {this.citySetting = data;})
    .catch((err) => {alert("Error accessing storage");}
    );
  }

  ngOnInit(){
  
  }
  ionViewDidLoad(){
  
  }
}
