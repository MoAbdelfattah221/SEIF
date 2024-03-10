import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultOfDoctorsPageRoutingModule } from './search-result-of-doctors-routing.module';

import { SearchResultOfDoctorsPage } from './search-result-of-doctors.page';
import {SharedComponentsModule} from '../../../../../../../SharedComponents/shared-components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchResultOfDoctorsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [SearchResultOfDoctorsPage]
})
export class SearchResultOfDoctorsPageModule {}
