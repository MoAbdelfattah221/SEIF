import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomePagePage } from './home-page.page';
import {IonicRatingComponentModule} from 'ionic-rating-component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePagePageRoutingModule,
        IonicRatingComponentModule
    ],
  declarations: [HomePagePage]
})
export class HomePagePageModule {}
