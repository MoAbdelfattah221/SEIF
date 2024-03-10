(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Change Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <form (submit)=\"submitChangePassword()\">\n            <ion-item>\n                <ion-label position=\"floating\">New Password</ion-label>\n                <ion-icon name=\"lock-open-outline\" slot=\"start\"></ion-icon>\n                <ion-icon (click)=\"newPassword()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n                <ion-input [type]=\"showNewPassword ? 'text' : 'password'\" placeholder=\"Enter Your Password\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Confirm Password</ion-label>\n                <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n                <ion-icon (click)=\"showConfirmPasswordFun()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n                <ion-input [type]=\"showConfirmPassword ? 'text' : 'password'\"\n                           placeholder=\"Confirm Your Password\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-button expand=\"block\" color=\"success\" type=\"submit\">Confirm</ion-button>\n        </form>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9mb3JnZXQtcGFzc3dvcmQvdmVyaWZpY2F0aW9uLXBhc3N3b3JkLWNvZGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ChangePasswordPage = class ChangePasswordPage {
    constructor(alertController, router) {
        this.alertController = alertController;
        this.router = router;
        this.showNewPassword = false;
        this.showConfirmPassword = false;
    }
    ngOnInit() {
    }
    newPassword() {
        this.showNewPassword = !this.showNewPassword;
    }
    showConfirmPasswordFun() {
        this.showConfirmPassword = !this.showConfirmPassword;
    }
    submitChangePassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Password',
                subHeader: 'Changed Successfully',
                message: 'Stay Signed In With Your Account To Make Searching Easier',
                buttons: [
                    {
                        text: 'Sign In',
                        handler: (blah) => {
                            this.router.navigate(['auth-page']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss")).default]
    })
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es2015.js.map