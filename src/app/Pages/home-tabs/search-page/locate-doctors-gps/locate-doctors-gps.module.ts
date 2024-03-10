import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocateDoctorsGPSPageRoutingModule } from './locate-doctors-gps-routing.module';

import { LocateDoctorsGPSPage } from './locate-doctors-gps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocateDoctorsGPSPageRoutingModule
  ],
  declarations: [LocateDoctorsGPSPage]
})
export class LocateDoctorsGPSPageModule {}
