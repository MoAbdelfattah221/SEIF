import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteDoctorsPage } from './favorite-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteDoctorsPageRoutingModule {}
