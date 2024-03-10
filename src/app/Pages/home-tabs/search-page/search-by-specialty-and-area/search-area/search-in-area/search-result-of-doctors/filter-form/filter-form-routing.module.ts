import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterFormPage } from './filter-form.page';

const routes: Routes = [
  {
    path: '',
    component: FilterFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterFormPageRoutingModule {}
