import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPickerForDoctorsPageRoutingModule } from './location-picker-for-doctors-routing.module';

import { LocationPickerForDoctorsPage } from './location-picker-for-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPickerForDoctorsPageRoutingModule
  ],
  declarations: [LocationPickerForDoctorsPage]
})
export class LocationPickerForDoctorsPageModule {}
