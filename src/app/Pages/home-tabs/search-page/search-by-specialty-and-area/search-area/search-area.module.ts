import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAreaPageRoutingModule } from './search-area-routing.module';

import { SearchAreaPage } from './search-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchAreaPageRoutingModule
  ],
  declarations: [SearchAreaPage]
})
export class SearchAreaPageModule {}
