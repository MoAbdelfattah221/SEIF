import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpSendPage } from './otp-send.page';

const routes: Routes = [
  {
    path: '',
    component: OtpSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpSendPageRoutingModule {}
