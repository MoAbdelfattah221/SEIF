import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultOfDoctorsPage } from './search-result-of-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: SearchResultOfDoctorsPage
  },
  {
    path: 'filter-form',
    loadChildren: () => import('./filter-form/filter-form.module').then( m => m.FilterFormPageModule)
  },
  // {
  //   path: 'modal-filter-doctor',
  //   loadChildren: () => import('./modal-filter-doctor/modal-filter-doctor.module').then( m => m.ModalFilterDoctorPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchResultOfDoctorsPageRoutingModule {}
