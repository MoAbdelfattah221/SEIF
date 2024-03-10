import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import {CustomFormsModule} from 'ngx-custom-validators';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SettingsPageRoutingModule,
        CustomFormsModule
    ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
