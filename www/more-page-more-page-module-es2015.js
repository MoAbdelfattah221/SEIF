(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-page-more-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/more-page.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/more-page.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>More Page</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-list>\n            <!--            <ion-list-header>More Details</ion-list-header>-->\n            <ion-item>\n                <!--                <ion-avatar slot=\"start\">-->\n                <!--                    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">-->\n                <!--                </ion-avatar>-->\n                <!--                <ion-label>{{userData?.name}}</ion-label>-->\n                <ion-label>{{userProfileData?.name}}</ion-label>\n                <ion-button color=\"light\" (click)=\"goToSetting()\">\n                    <ion-icon name=\"settings-outline\"></ion-icon>\n                </ion-button>\n\n            </ion-item>\n        </ion-list>\n\n        <!--        <ion-button *ngIf=\"language === 'ar'\" expand=\"block\" color=\"success\" (click)=\"changeLanguage()\">-->\n        <!--            <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>-->\n        <!--            English-->\n        <!--        </ion-button>-->\n        <!--        <ion-button *ngIf=\"language === 'en'\" expand=\"block\" color=\"success\" (click)=\"changeLanguage('ar')\">-->\n        <!--            <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>-->\n        <!--            العربيه-->\n        <!--        </ion-button>-->\n        <!--        <ion-button expand=\"block\" color=\"success\" (click)=\"testWhatsapp()\">-->\n        <!--            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>-->\n        <!--          Test Share Whatsapp-->\n        <!--        </ion-button>-->\n        <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"goToFavoriteDoctors()\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n            {{'Favorite Doctors'| translate}}\n        </ion-button>\n\n        <ion-button expand=\"block\" color=\"success\" (click)=\"logOut()\">\n            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n            {{'Log Out'| translate}}\n        </ion-button>\n\n        <!--        <ion-button expand=\"block\" color=\"success\" (click)=\"testLocation()\">-->\n        <!--            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>-->\n        <!--            Test Location-->\n        <!--        </ion-button>-->\n        <!--        <p *ngIf=\"locationResults\">-->\n        <!--            {{locationResults}}-->\n        <!--        </p>-->\n\n        <!--        <ion-button expand=\"block\" color=\"success\" (click)=\"testNativeStorage()\">-->\n        <!--            <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>-->\n        <!--            Test Native Storage-->\n        <!--        </ion-button>-->\n        <!--        {{test.property}}-->\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/more-page/more-page-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/home-tabs/more-page/more-page-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MorePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePagePageRoutingModule", function() { return MorePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _more_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-page.page */ "./src/app/Pages/home-tabs/more-page/more-page.page.ts");




const routes = [
    {
        path: '',
        component: _more_page_page__WEBPACK_IMPORTED_MODULE_3__["MorePagePage"]
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~registration-page-registration-page-module~settings-settings-module"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/Pages/home-tabs/more-page/settings/settings.module.ts")).then(m => m.SettingsPageModule)
    },
    {
        path: 'favorite-doctors',
        loadChildren: () => Promise.all(/*! import() | favorite-doctors-favorite-doctors-module */[__webpack_require__.e("default~Pages-doctor-doctor-module~favorite-doctors-favorite-doctors-module~home-page-home-page-modu~4f123908"), __webpack_require__.e("default~favorite-doctors-favorite-doctors-module~search-page-search-page-module"), __webpack_require__.e("favorite-doctors-favorite-doctors-module")]).then(__webpack_require__.bind(null, /*! ./favorite-doctors/favorite-doctors.module */ "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.module.ts")).then(m => m.FavoriteDoctorsPageModule)
    }
];
let MorePagePageRoutingModule = class MorePagePageRoutingModule {
};
MorePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MorePagePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/more-page/more-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/home-tabs/more-page/more-page.module.ts ***!
  \***************************************************************/
/*! exports provided: MorePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePagePageModule", function() { return MorePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _more_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-page-routing.module */ "./src/app/Pages/home-tabs/more-page/more-page-routing.module.ts");
/* harmony import */ var _more_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-page.page */ "./src/app/Pages/home-tabs/more-page/more-page.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let MorePagePageModule = class MorePagePageModule {
};
MorePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _more_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["MorePagePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_more_page_page__WEBPACK_IMPORTED_MODULE_6__["MorePagePage"]]
    })
], MorePagePageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/more-page/more-page.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/Pages/home-tabs/more-page/more-page.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9tb3JlLXBhZ2UvbW9yZS1wYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/more-page/more-page.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/home-tabs/more-page/more-page.page.ts ***!
  \*************************************************************/
/*! exports provided: MorePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorePagePage", function() { return MorePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Service_lang_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Service/lang.service */ "./src/app/Service/lang.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Service/user.service */ "./src/app/Service/user.service.ts");











let MorePagePage = class MorePagePage {
    constructor(router, document, translateService, cookieService, geolocation, nativeGeocoder, langService, userService, nativeStorage) {
        this.router = router;
        this.document = document;
        this.translateService = translateService;
        this.cookieService = cookieService;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.langService = langService;
        this.userService = userService;
        this.nativeStorage = nativeStorage;
        this.language = localStorage.getItem('language');
        this.locationResults = '';
        if (localStorage.getItem('uid') != null) {
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            };
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
        this.userService.getUserData().subscribe((res) => {
            this.userProfileData = res.result.data[0];
        });
    }
    goToSetting() {
        this.router.navigate(['home-page-tabs', 'more-page', 'settings']);
    }
    goToFavoriteDoctors() {
        this.router.navigate(['home-page-tabs', 'more-page', 'favorite-doctors']);
    }
};
MorePagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"] },
    { type: _Service_lang_service__WEBPACK_IMPORTED_MODULE_3__["LangService"] },
    { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
MorePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./more-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/more-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./more-page.page.scss */ "./src/app/Pages/home-tabs/more-page/more-page.page.scss")).default]
    })
], MorePagePage);



/***/ }),

/***/ "./src/app/Service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let UserService = class UserService {
    constructor(dataService, cookieService) {
        this.dataService = dataService;
        this.cookieService = cookieService;
        this.userEditProfile = {};
    }
    getUserData() {
        const userId = {
            // uid: this.cookieService.get('uid'),
            uid: localStorage.getItem('uid'),
            fields_list: ['name', 'email', 'phone', 'street']
        };
        console.log(userId.uid);
        return this.dataService.post('api/view_user_data', { params: userId });
    }
    editProfile() {
        return this.dataService.post('api/update_user_data', {
            params: {
                uid: localStorage.getItem('uid'),
                data: {
                    name: this.userEditProfile.name,
                    street: this.userEditProfile.street,
                    phone: this.userEditProfile.phone,
                    email: this.userEditProfile.email,
                }
            }
        });
    }
};
UserService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=more-page-more-page-module-es2015.js.map