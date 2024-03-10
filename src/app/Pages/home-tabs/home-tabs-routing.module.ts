import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeTabsPage} from './home-tabs.page';

const routes: Routes = [
    {
        path: 'home-page-tabs',
        component: HomeTabsPage,
        children: [
            {
                path: 'home-page',
                loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePagePageModule)
            },
            {
                path: 'appointment-page',
                loadChildren: () => import('./appointment-page/appointment-page.module').then(m => m.AppointmentPagePageModule)
            },
            {
                path: 'search-page',
                loadChildren: () => import('./search-page/search-page.module').then(m => m.SearchPagePageModule)
            },
            {
                path: 'more-page',
                loadChildren: () => import('./more-page/more-page.module').then(m => m.MorePagePageModule)
            }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeTabsPageRoutingModule {
}
