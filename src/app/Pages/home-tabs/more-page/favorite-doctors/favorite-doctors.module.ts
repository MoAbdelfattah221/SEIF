import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteDoctorsPageRoutingModule } from './favorite-doctors-routing.module';

import { FavoriteDoctorsPage } from './favorite-doctors.page';
import {SharedComponentsModule} from '../../../../SharedComponents/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FavoriteDoctorsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [FavoriteDoctorsPage]
})
export class FavoriteDoctorsPageModule {}
