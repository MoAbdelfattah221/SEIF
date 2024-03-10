import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorBookingDateConfirmPageRoutingModule } from './doctor-booking-date-confirm-routing.module';

import { DoctorBookingDateConfirmPage } from './doctor-booking-date-confirm.page';
import {IonicRatingComponentModule} from 'ionic-rating-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DoctorBookingDateConfirmPageRoutingModule,
        IonicRatingComponentModule
    ],
  declarations: [DoctorBookingDateConfirmPage]
})
export class DoctorBookingDateConfirmPageModule {}
