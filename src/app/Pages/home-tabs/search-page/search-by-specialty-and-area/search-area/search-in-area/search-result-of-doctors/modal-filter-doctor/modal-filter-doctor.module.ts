import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFilterDoctorPageRoutingModule } from './modal-filter-doctor-routing.module';

import { ModalFilterDoctorPage } from './modal-filter-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFilterDoctorPageRoutingModule
  ],
  declarations: [ModalFilterDoctorPage]
})
export class ModalFilterDoctorPageModule {}
