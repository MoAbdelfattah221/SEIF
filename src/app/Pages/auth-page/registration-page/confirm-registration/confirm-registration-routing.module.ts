import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ConfirmRegistrationPage} from './confirm-registration.page';

const routes: Routes = [
    {
        path: '',
        component: ConfirmRegistrationPage
    },
    {
        path: 'verification-code',
        loadChildren: () => import('./verification-code/verification-code.module').then(m => m.VerificationCodePageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfirmRegistrationPageRoutingModule {
}
