import { Component, Inject } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LangService } from './Service/lang.service';
import { CookieService } from 'ngx-cookie-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    language: string = localStorage.getItem('language');

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private nativeStorage: NativeStorage,
        private cookieService: CookieService,
        @Inject(DOCUMENT) private document, private translateService: TranslateService, private langService: LangService,
        private router: Router,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
        if (!localStorage.getItem('splash')) {
            localStorage.setItem('splash', 'true');
        }
        if (!localStorage.getItem('language')) {
            localStorage.setItem('language', 'en');
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            if (localStorage.getItem('splash') === 'true') {
                this.router.navigate(['/splash']);
            } else {
                if(localStorage.getItem('uid') != null){
                    this.router.navigate(['home-page-tabs', 'home-page']);
                }else{
                    this.router.navigate(['/auth-page']);
                }
            }
            this.changeLanguage(this.language);
            this.splashScreen.hide();
        });
    }

    changeLanguage(lang?: string) {
        if (lang === 'ar') {
            this.document.body.setAttribute('dir', 'rtl');
            this.translateService.use('ar');
            localStorage.setItem('language', 'ar');
            this.language = 'ar';
        } else {
            this.document.body.setAttribute('dir', 'ltr');
            this.translateService.use('en');
            localStorage.setItem('language', 'en');
            this.language = 'en';
        }
        this.langService.setLang(this.language);
    }
}
