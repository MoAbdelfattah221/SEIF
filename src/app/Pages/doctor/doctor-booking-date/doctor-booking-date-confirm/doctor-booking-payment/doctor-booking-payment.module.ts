import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingPaymentPageRoutingModule } from './doctor-booking-payment-routing.module';

import { DoctorBookingPaymentPage } from './doctor-booking-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorBookingPaymentPageRoutingModule
  ],
  declarations: [DoctorBookingPaymentPage]
})
export class DoctorBookingPaymentPageModule {}
