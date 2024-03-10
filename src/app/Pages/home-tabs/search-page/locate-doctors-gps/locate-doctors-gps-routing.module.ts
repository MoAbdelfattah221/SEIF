import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocateDoctorsGPSPage } from './locate-doctors-gps.page';

const routes: Routes = [
  {
    path: '',
    component: LocateDoctorsGPSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocateDoctorsGPSPageRoutingModule {}
