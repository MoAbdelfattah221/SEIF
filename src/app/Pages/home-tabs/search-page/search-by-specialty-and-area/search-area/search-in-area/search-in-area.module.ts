import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchInAreaPageRoutingModule } from './search-in-area-routing.module';

import { SearchInAreaPage } from './search-in-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchInAreaPageRoutingModule
  ],
  declarations: [SearchInAreaPage]
})
export class SearchInAreaPageModule {}
