import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorBookingPaymentConfirmPage } from './doctor-booking-payment-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingPaymentConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorBookingPaymentConfirmPageRoutingModule {}
