import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchByDoctorNamePageRoutingModule } from './search-by-doctor-name-routing.module';

import { SearchByDoctorNamePage } from './search-by-doctor-name.page';
import {SharedComponentsModule} from '../../../../SharedComponents/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchByDoctorNamePageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [SearchByDoctorNamePage]
})
export class SearchByDoctorNamePageModule {}
