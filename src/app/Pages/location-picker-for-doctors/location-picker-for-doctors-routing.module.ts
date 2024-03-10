import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationPickerForDoctorsPage } from './location-picker-for-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: LocationPickerForDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationPickerForDoctorsPageRoutingModule {}
