import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterDoctorsPageRoutingModule } from './filter-doctors-routing.module';

import { FilterDoctorsPage } from './filter-doctors.page';
import {IonicRatingComponentModule} from 'ionic-rating-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilterDoctorsPageRoutingModule,
        IonicRatingComponentModule
    ],
  declarations: [FilterDoctorsPage]
})
export class FilterDoctorsPageModule {}
