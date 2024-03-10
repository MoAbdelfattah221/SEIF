import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPage } from './doctor.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorPage
  },
  {
    path: 'doctor-booking-date',
    loadChildren: () => import('./doctor-booking-date/doctor-booking-date.module').then( m => m.DoctorBookingDatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule {}
