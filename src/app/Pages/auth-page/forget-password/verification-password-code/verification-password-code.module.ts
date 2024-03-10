import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPasswordCodePageRoutingModule } from './verification-password-code-routing.module';

import { VerificationPasswordCodePage } from './verification-password-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPasswordCodePageRoutingModule
  ],
  declarations: [VerificationPasswordCodePage]
})
export class VerificationPasswordCodePageModule {}
