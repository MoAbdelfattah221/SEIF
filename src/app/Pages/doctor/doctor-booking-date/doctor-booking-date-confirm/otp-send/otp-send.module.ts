import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpSendPageRoutingModule } from './otp-send-routing.module';

import { OtpSendPage } from './otp-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpSendPageRoutingModule
  ],
  declarations: [OtpSendPage]
})
export class OtpSendPageModule {}
