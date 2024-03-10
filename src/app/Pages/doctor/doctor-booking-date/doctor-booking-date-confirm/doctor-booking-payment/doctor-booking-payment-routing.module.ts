import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorBookingPaymentPage } from './doctor-booking-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingPaymentPage
  },
  {
    path: 'doctor-booking-payment-confirm',
    loadChildren: () => import('./doctor-booking-payment-confirm/doctor-booking-payment-confirm.module').then( m => m.DoctorBookingPaymentConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorBookingPaymentPageRoutingModule {}
