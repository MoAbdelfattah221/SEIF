import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPagePageRoutingModule } from './registration-page-routing.module';

import { RegistrationPagePage } from './registration-page.page';
import {CustomFormsModule} from 'ngx-custom-validators';
import {ErrorCardComponent} from '../../../SharedComponents/error-card/error-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistrationPagePageRoutingModule,
        CustomFormsModule
    ],
    declarations: [RegistrationPagePage, ErrorCardComponent]
})
export class RegistrationPagePageModule {}
