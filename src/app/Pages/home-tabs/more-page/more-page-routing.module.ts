import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MorePagePage} from './more-page.page';

const routes: Routes = [
    {
        path: '',
        component: MorePagePage
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'favorite-doctors',
        loadChildren: () => import('./favorite-doctors/favorite-doctors.module').then(m => m.FavoriteDoctorsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MorePagePageRoutingModule {
}
