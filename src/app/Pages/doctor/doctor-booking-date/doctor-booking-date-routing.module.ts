import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorBookingDatePage } from './doctor-booking-date.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorBookingDatePage
  },
  {
    path: 'doctor-booking-date-confirm',
    loadChildren: () => import('./doctor-booking-date-confirm/doctor-booking-date-confirm.module').then( m => m.DoctorBookingDateConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorBookingDatePageRoutingModule {}
