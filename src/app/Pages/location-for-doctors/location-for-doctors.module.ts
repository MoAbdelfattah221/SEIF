import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationForDoctorsPageRoutingModule } from './location-for-doctors-routing.module';

import { LocationForDoctorsPage } from './location-for-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationForDoctorsPageRoutingModule
  ],
  declarations: [LocationForDoctorsPage]
})
export class LocationForDoctorsPageModule {}
