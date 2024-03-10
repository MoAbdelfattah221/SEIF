import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBySpecialtyAndAreaPageRoutingModule } from './search-by-specialty-and-area-routing.module';

import { SearchBySpecialtyAndAreaPage } from './search-by-specialty-and-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBySpecialtyAndAreaPageRoutingModule
  ],
  declarations: [SearchBySpecialtyAndAreaPage]
})
export class SearchBySpecialtyAndAreaPageModule {}
