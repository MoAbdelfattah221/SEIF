import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomeTabsPageRoutingModule} from './home-tabs-routing.module';

import {HomeTabsPage} from './home-tabs.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeTabsPageRoutingModule,
        TranslateModule
    ],
    declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {
}
