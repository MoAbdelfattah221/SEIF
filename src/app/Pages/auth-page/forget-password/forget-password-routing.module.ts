import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPasswordPage } from './forget-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordPage
  },
  {
    path: 'verification-password-code',
    loadChildren: () => import('./verification-password-code/verification-password-code.module').then( m => m.VerificationPasswordCodePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPasswordPageRoutingModule {}
