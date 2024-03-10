import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPagePage } from './auth-page.page';

const routes: Routes = [
  {
    path: '',
    component: AuthPagePage
  },
  {
    path: 'registration-page',
    loadChildren: () => import('./registration-page/registration-page.module').then( m => m.RegistrationPagePageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPagePageRoutingModule {}
