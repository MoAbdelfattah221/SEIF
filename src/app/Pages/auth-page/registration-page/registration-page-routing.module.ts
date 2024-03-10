import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPagePage } from './registration-page.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationPagePage
  },
  {
    path: 'confirm-registration',
    loadChildren: () => import('./confirm-registration/confirm-registration.module').then( m => m.ConfirmRegistrationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationPagePageRoutingModule {}
