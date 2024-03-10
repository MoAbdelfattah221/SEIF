import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingDatePageRoutingModule } from './doctor-booking-date-routing.module';

import { DoctorBookingDatePage } from './doctor-booking-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorBookingDatePageRoutingModule
  ],
  declarations: [DoctorBookingDatePage]
})
export class DoctorBookingDatePageModule {}
