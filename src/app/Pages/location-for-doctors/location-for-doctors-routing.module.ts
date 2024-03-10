import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationForDoctorsPage } from './location-for-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: LocationForDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationForDoctorsPageRoutingModule {}
