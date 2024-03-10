import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFilterDoctorPage } from './modal-filter-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFilterDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFilterDoctorPageRoutingModule {}
