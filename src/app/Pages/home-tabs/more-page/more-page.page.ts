import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LangService} from '../../../Service/lang.service';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {Share} from '@capacitor/core';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {CookieService} from 'ngx-cookie-service';
import {IUserData} from '../../../Models/user-data';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import {UserService} from '../../../Service/user.service';
import {IUserProfile} from '../../../Models/user-profile';

@Component({
    selector: 'app-more-page',
    templateUrl: './more-page.page.html',
    styleUrls: ['./more-page.page.scss'],
})
export class MorePagePage implements OnInit {
    language: string = localStorage.getItem('language');
    test;
    userName;
    userData: IUserData;
    locationResults: string = '';
    userProfileData: IUserProfile;

    constructor(private router: Router,
                @Inject(DOCUMENT) private document,
                private translateService: TranslateService,
                private cookieService: CookieService,
                private geolocation: Geolocation,
                private nativeGeocoder: NativeGeocoder,
                private langService: LangService,
                private userService: UserService,
                private nativeStorage: NativeStorage) {
        
        if(localStorage.getItem('uid') != null){
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            }
        }
    }

    ngOnInit() {

        this.getUserDetail();
    }

    logOut() {
        this.router.navigate(['auth-page']);
        localStorage.removeItem('user_id');
        localStorage.removeItem('uid');
        localStorage.removeItem('name');
        localStorage.removeItem('session_id');
        this.cookieService.delete('uid', '/');
    }

    //
    // changeLanguage(lang?: string) {
    //     if (lang === 'ar') {
    //         this.document.body.setAttribute('dir', 'rtl');
    //         this.translateService.use('ar');
    //         localStorage.setItem('language', 'ar');
    //         this.language = 'ar';
    //     } else {
    //         this.document.body.setAttribute('dir', 'ltr');
    //         this.translateService.use('en');
    //         localStorage.setItem('language', 'en');
    //         this.language = 'en';
    //     }
    //     this.langService.setLang(this.language);
    // }
    //
    // async testWhatsapp() {
    //     // this.socialSharing.shareViaWhatsApp('Test From Amr').then((res) => {
    //     //     console.log(res);
    //     //     // Success
    //     // }).catch((e) => {
    //     //     // Error!
    //     // });
    //     // this.socialSharing.shareViaEmail('Body', 'Subject', ['eng.amrmossad93@gmail.com']).then(() => {
    //     //     // Success!
    //     // }).catch(() => {
    //     //     // Error!
    //     // });
    //     await Share.share({
    //         title: 'test'
    //     });
    // }
    //
    // testLocation() {
    //     this.geolocation.getCurrentPosition().then((resp) => {
    //         // console.log(resp.coords.latitude);
    //         // console.log(resp.coords.longitude);
    //         // console.log(resp);
    //         this.getLocation(resp.coords.latitude, resp.coords.longitude);
    //     }).catch((error) => {
    //         console.log('Error getting location', error);
    //     });
    // }
    //
    // getLocation(latitude, longitude) {
    //     const options: NativeGeocoderOptions = {
    //         useLocale: true,
    //         maxResults: 1
    //     };
    //     this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then((result) => {
    //         this.locationResults = result[0].locality;
    //     });
    // }
    //
    // testNativeStorage() {
    //     this.nativeStorage.setItem('myitem', {property: 'Object', anotherProperty: 'Value Of The Object'})
    //         .then(
    //             () => console.log('Stored item Successfluuly!'),
    //             error => console.error('Error storing item', error)
    //         );
    //
    //     this.nativeStorage.getItem('myitem').then((d) => {
    //         this.test = d;
    //         return d;
    //     });
    // }

    getUserDetail() {
        this.userService.getUserData().subscribe((res: { result }) => {
            this.userProfileData = res.result.data[0];
        });
    }

    goToSetting() {
        this.router.navigate(['home-page-tabs', 'more-page', 'settings']);
    }

    goToFavoriteDoctors() {
        this.router.navigate(['home-page-tabs', 'more-page', 'favorite-doctors']);
    }
}
