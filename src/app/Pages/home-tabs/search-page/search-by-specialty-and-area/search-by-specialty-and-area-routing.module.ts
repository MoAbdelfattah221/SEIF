import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBySpecialtyAndAreaPage } from './search-by-specialty-and-area.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBySpecialtyAndAreaPage
  },
  {
    path: 'search-area',
    loadChildren: () => import('./search-area/search-area.module').then( m => m.SearchAreaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBySpecialtyAndAreaPageRoutingModule {}
