import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationPasswordCodePage } from './verification-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationPasswordCodePage
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationPasswordCodePageRoutingModule {}
