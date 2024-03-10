import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchInAreaPage } from './search-in-area.page';

const routes: Routes = [
  {
    path: '',
    component: SearchInAreaPage
  },
  {
    path: 'search-result-of-doctors',
    loadChildren: () => import('./search-result-of-doctors/search-result-of-doctors.module').then( m => m.SearchResultOfDoctorsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchInAreaPageRoutingModule {}
