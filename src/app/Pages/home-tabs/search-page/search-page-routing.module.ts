import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPagePage } from './search-page.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPagePage
  },
  {
    path: 'search-by-specialty-and-area',
    loadChildren: () => import('./search-by-specialty-and-area/search-by-specialty-and-area.module').then( m => m.SearchBySpecialtyAndAreaPageModule)
  },
  {
    path: 'search-by-doctor-name',
    loadChildren: () => import('./search-by-doctor-name/search-by-doctor-name.module').then( m => m.SearchByDoctorNamePageModule)
  },
  {
    path: 'filter-doctors',
    loadChildren: () => import('./filter-doctors/filter-doctors.module').then( m => m.FilterDoctorsPageModule)
  },
  {
    path: 'locate-doctors-gps',
    loadChildren: () => import('./locate-doctors-gps/locate-doctors-gps.module').then( m => m.LocateDoctorsGPSPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPagePageRoutingModule {}
