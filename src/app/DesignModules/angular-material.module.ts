import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatStepperModule,
        MatIconModule,
        MatTabsModule
    ],
    exports: [
        MatStepperModule,
        MatIconModule,
        MatTabsModule
    ]
})
export class AngularMaterialModule {
}
