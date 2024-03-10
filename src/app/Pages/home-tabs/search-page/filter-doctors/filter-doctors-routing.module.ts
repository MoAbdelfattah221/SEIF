import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterDoctorsPage } from './filter-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: FilterDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterDoctorsPageRoutingModule {}
