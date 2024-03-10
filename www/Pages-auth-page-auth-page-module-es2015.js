(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-auth-page-auth-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/auth-page.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/auth-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"ion-padding\">\n    <div class=\"container ion-text-center\">\n        <img src=\"assets/Images/mix%20logo.png\" class=\"logo\" alt=\"Logo\">\n        <p class=\"slogan-color\">Stay signed in with your account to make searching easier</p>\n    </div>\n    <form #loginF=\"ngForm\" (submit)=\"logIn(loginF)\">\n        <ion-item>\n            <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n            <ion-label position=\"floating\" class=\"f13\">Email Or Phone Number</ion-label>\n            <ion-input [(ngModel)]=\"authService.loginForm.login\" name=\"login\" required type=\"text\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n            <ion-label position=\"floating\" class=\"f13\">Password</ion-label>\n            <ion-input [(ngModel)]=\"authService.loginForm.password\" name=\"password\" required type=\"password\"></ion-input>\n        </ion-item>\n        <p class=\"ion-text-right f13\">\n            <ion-router-link color=\"medium\" class=\"underline\" routerLink=\"/auth-page/forget-password\">Forget Password?\n            </ion-router-link>\n        </p>\n        <ion-button expand=\"block\" [disabled]=\"!loginF.valid\" color=\"success\" type=\"submit\">Sign In</ion-button>\n    </form>\n    <p class=\"ion-text-center or-line f13\">Or</p>\n    <ion-button expand=\"block\"  class=\"facebook_bg\">\n        <ion-icon name=\"logo-facebook\"></ion-icon>\n        Continue With Facebook\n    </ion-button>\n    <ion-button expand=\"block\" class=\"google_bg\">\n        <ion-icon name=\"logo-google\"></ion-icon> \n        Continue With Gmail\n    </ion-button>\n    <p class=\"ion-text-center f13\">Don't Have An Account?\n        <ion-router-link color=\"success\" class=\"underline\" routerLink=\"/auth-page/registration-page\">Sign Up?\n        </ion-router-link>\n    </p>\n    <p class=\"ion-text-center f13\">Continue As\n        <ion-router-link color=\"success\" class=\"underline\" routerLink=\"/home-page-tabs/home-page\">Guest?\n        </ion-router-link>\n    </p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/auth-page/auth-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/auth-page/auth-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AuthPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePageRoutingModule", function() { return AuthPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-page.page */ "./src/app/Pages/auth-page/auth-page.page.ts");




const routes = [
    {
        path: '',
        component: _auth_page_page__WEBPACK_IMPORTED_MODULE_3__["AuthPagePage"]
    },
    {
        path: 'registration-page',
        loadChildren: () => Promise.all(/*! import() | registration-page-registration-page-module */[__webpack_require__.e("default~registration-page-registration-page-module~settings-settings-module"), __webpack_require__.e("registration-page-registration-page-module")]).then(__webpack_require__.bind(null, /*! ./registration-page/registration-page.module */ "./src/app/Pages/auth-page/registration-page/registration-page.module.ts")).then(m => m.RegistrationPagePageModule)
    },
    {
        path: 'forget-password',
        loadChildren: () => __webpack_require__.e(/*! import() | forget-password-forget-password-module */ "forget-password-forget-password-module").then(__webpack_require__.bind(null, /*! ./forget-password/forget-password.module */ "./src/app/Pages/auth-page/forget-password/forget-password.module.ts")).then(m => m.ForgetPasswordPageModule)
    }
];
let AuthPagePageRoutingModule = class AuthPagePageRoutingModule {
};
AuthPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPagePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/auth-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/auth-page/auth-page.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePageModule", function() { return AuthPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-page-routing.module */ "./src/app/Pages/auth-page/auth-page-routing.module.ts");
/* harmony import */ var _auth_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-page.page */ "./src/app/Pages/auth-page/auth-page.page.ts");







let AuthPagePageModule = class AuthPagePageModule {
};
AuthPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPagePageRoutingModule"]
        ],
        declarations: [_auth_page_page__WEBPACK_IMPORTED_MODULE_6__["AuthPagePage"]]
    })
], AuthPagePageModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/auth-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/Pages/auth-page/auth-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container .logo {\n  width: 100px;\n  margin-top: 20%;\n}\n.container .slogan-color {\n  color: #8a8a8a;\n  font-size: 13px;\n  padding: 0 10%;\n  line-height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXV0aC1wYWdlL2F1dGgtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFKO0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYXV0aC1wYWdlL2F1dGgtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cbiAgLnNsb2dhbi1jb2xvcntcbiAgICBjb2xvcjogIzhhOGE4YTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMCAxMCU7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIH1cbn1cbi8vIC5vci1saW5lOmJlZm9yZSB7XG4vLyAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDJkMmQyO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgaGVpZ2h0OiAxcHg7XG4vLyAgIGNvbnRlbnQ6IFwiIFwiO1xuLy8gICB3aWR0aDogNDAlO1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHRvcDogMS4yZW07XG4vLyB9XG5cbi8vIC5vci1saW5lOmFmdGVyIHtcbi8vICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkMmQyZDI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBoZWlnaHQ6IDFweDtcbi8vICAgY29udGVudDogXCIgXCI7XG4vLyAgIHdpZHRoOiA0MCU7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgcmlnaHQ6IDA7XG4vLyB9Il19 */");

/***/ }),

/***/ "./src/app/Pages/auth-page/auth-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/auth-page/auth-page.page.ts ***!
  \***************************************************/
/*! exports provided: AuthPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPagePage", function() { return AuthPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");







let AuthPagePage = class AuthPagePage {
    constructor(router, authService, cookieService, toastController, nativeStorage, alertController) {
        this.router = router;
        this.authService = authService;
        this.cookieService = cookieService;
        this.toastController = toastController;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
    }
    checkSession() {
        if (localStorage.getItem('uid')) {
            this.router.navigate(['home-page-tabs', 'home-page']);
            this.toastController.create({
                message: `You Are Logged In`,
                duration: 2000
            }).then(c => c.present());
        }
    }
    ngOnInit() {
        this.checkSession();
    }
    ionViewWillEnter() {
        this.checkSession();
        // this.platform.registerBackButtonAction( () => {
        //     console.log("back button pressed!");
        // });
    }
    logIn(form) {
        console.log(this.authService.loginForm);
        this.authService.login().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(res);
            if (res.result.code === 404) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Sorry!!',
                    message: res.result.data,
                    buttons: ['OK']
                });
                yield alert.present();
            }
            else {
                localStorage.setItem('uid', res.result.uid);
                this.cookieService.set('uid', res.result.uid, null, '/');
                localStorage.setItem('user_uid', res.result.uid);
                localStorage.setItem('name', res.result.name);
                localStorage.setItem('session_id', res.result.session_id);
                yield this.router.navigate(['home-page-tabs', 'home-page']);
                const toast = yield this.toastController.create({
                    message: `Welcome ${res.result.name}`,
                    duration: 2000
                });
                yield toast.present();
                form.reset();
            }
        }));
    }
};
AuthPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AuthPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/auth-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-page.page.scss */ "./src/app/Pages/auth-page/auth-page.page.scss")).default]
    })
], AuthPagePage);



/***/ }),

/***/ "./src/app/Service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");



let AuthService = class AuthService {
    constructor(dataService) {
        this.dataService = dataService;
        this.loginForm = { db: 'Saif_App' };
        this.regForm = {};
    }
    login() {
        return this.dataService.post('auth/', { params: this.loginForm });
    }
    register() {
        return this.dataService.post('api/create_portal_patient', { params: this.regForm });
    }
};
AuthService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=Pages-auth-page-auth-page-module-es2015.js.map