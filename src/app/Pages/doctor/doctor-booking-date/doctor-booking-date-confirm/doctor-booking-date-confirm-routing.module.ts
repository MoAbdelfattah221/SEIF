import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorBookingDateConfirmPage } from './doctor-booking-date-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingDateConfirmPage
  },
  {
    path: 'doctor-booking-payment',
    loadChildren: () => import('./doctor-booking-payment/doctor-booking-payment.module').then( m => m.DoctorBookingPaymentPageModule)
  },
  {
    path: 'otp-send',
    loadChildren: () => import('./otp-send/otp-send.module').then( m => m.OtpSendPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorBookingDateConfirmPageRoutingModule {}
