import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { NewsPage } from '../pages/news/news';
import { RemoteCityProvider } from '../providers/remote-city/remote-city';

import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs/observable/from';
import { WeatherProvider } from '../providers/weather/weather';
import { NewsProvider } from '../providers/news/remoteNews';
import { UnitSelectorProvider } from '../providers/unit-selector/unit-selector';
import { HolidaysProvider } from '../providers/holidays/holidays';
import { CountryHolidaysPage } from '../pages/country-holidays/country-holidays';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewsPage,
  	SettingsPage,
    CountryHolidaysPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	  SettingsPage,
    NewsPage,
    CountryHolidaysPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteCityProvider,
    WeatherProvider,
    NewsProvider,
    UnitSelectorProvider,
    HolidaysProvider
  ]
})
export class AppModule {}
