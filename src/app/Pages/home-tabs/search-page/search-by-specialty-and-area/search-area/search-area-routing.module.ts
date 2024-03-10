import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchAreaPage } from './search-area.page';

const routes: Routes = [
  {
    path: '',
    component: SearchAreaPage
  },
  {
    path: 'search-in-area',
    loadChildren: () => import('./search-in-area/search-in-area.module').then( m => m.SearchInAreaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchAreaPageRoutingModule {}
