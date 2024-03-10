import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingPaymentConfirmPageRoutingModule } from './doctor-booking-payment-confirm-routing.module';

import { DoctorBookingPaymentConfirmPage } from './doctor-booking-payment-confirm.page';
import {IonicRatingComponentModule} from 'ionic-rating-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DoctorBookingPaymentConfirmPageRoutingModule,
        IonicRatingComponentModule
    ],
  declarations: [DoctorBookingPaymentConfirmPage]
})
export class DoctorBookingPaymentConfirmPageModule {}
