import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth-page',
        pathMatch: 'full'
    },
    {
        path: 'auth-page',
        loadChildren: () => import('./Pages/auth-page/auth-page.module').then(m => m.AuthPagePageModule)
    },
    {
        path: '',
        loadChildren: () => import('./Pages/home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
    },
    {
        path: 'location-for-doctors',
        loadChildren: () => import('./Pages/location-for-doctors/location-for-doctors.module').then(m => m.LocationForDoctorsPageModule)
    },
    {
        path: 'splash',
        loadChildren: () => import('./Pages/splash/splash.module').then(m => m.SplashPageModule)
    },
    {
        path: 'doctor',
        loadChildren: () => import('./Pages/doctor/doctor.module').then(m => m.DoctorPageModule)
    },
    {
        path: '404',
        loadChildren: () => import('./Pages/not-found-page/not-found-page.module').then(m => m.NotFoundPagePageModule)
    },
    {
        path: 'location-picker-for-doctors',
        loadChildren: () => import('./Pages/location-picker-for-doctors/location-picker-for-doctors.module').then(m => m.LocationPickerForDoctorsPageModule)
    },
    {path: '**', redirectTo: '/404'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
