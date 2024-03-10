import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterFormPageRoutingModule } from './filter-form-routing.module';

import { FilterFormPage } from './filter-form.page';
import {IonicRatingComponentModule} from 'ionic-rating-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FilterFormPageRoutingModule,
        IonicRatingComponentModule,
    ],
  declarations: [FilterFormPage]
})
export class FilterFormPageModule {}
