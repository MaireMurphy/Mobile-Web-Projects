import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountryHolidaysPage } from './country-holidays';

@NgModule({
  declarations: [
    CountryHolidaysPage,
  ],
  imports: [
    IonicPageModule.forChild(CountryHolidaysPage),
  ],
})
export class CountryHolidaysPageModule {}
