import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {IonicModule} from '@ionic/angular';
import {IonicRatingComponentModule} from 'ionic-rating-component';


@NgModule({
  declarations: [CardComponent],
  exports: [
    CardComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        IonicRatingComponentModule
    ],
})
export class SharedComponentsModule {
}
