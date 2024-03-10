(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-code-verification-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"auth-page/registration-page/confirm-registration\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Verify Your Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-card>\n            <ion-card-header>\n                <ion-card-title class=\"ion-text-center\" color=\"success\">Enter Code</ion-card-title>\n            </ion-card-header>\n            <ion-card-content class=\"ion-text-center\">\n                We Have Sent Verification Code To\n                <ion-text color=\"success\">eng.amrmossad93@gmail.com</ion-text>\n            </ion-card-content>\n        </ion-card>\n        <br>\n        <form (submit)=\"onSubmitCode()\">\n            <ion-item>\n                <ion-label position=\"floating\">Code</ion-label>\n                <ion-icon name=\"qr-code-outline\" slot=\"start\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Enter Your Code\"></ion-input>\n            </ion-item>\n            <p class=\"ion-text-center\">Didn't Receive The Code?\n                <ion-router-link color=\"primary\" class=\"underline\" (click)=\"test()\">Re-Send?</ion-router-link>\n            </p>\n            <br>\n            <ion-button expand=\"block\" color=\"success\" type=\"submit\">Verify</ion-button>\n        </form>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: VerificationCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationCodePageRoutingModule", function() { return VerificationCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verification_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification-code.page */ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.ts");




const routes = [
    {
        path: '',
        component: _verification_code_page__WEBPACK_IMPORTED_MODULE_3__["VerificationCodePage"]
    }
];
let VerificationCodePageRoutingModule = class VerificationCodePageRoutingModule {
};
VerificationCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationCodePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: VerificationCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationCodePageModule", function() { return VerificationCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-code-routing.module */ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code-routing.module.ts");
/* harmony import */ var _verification_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification-code.page */ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.ts");







let VerificationCodePageModule = class VerificationCodePageModule {
};
VerificationCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationCodePageRoutingModule"]
        ],
        declarations: [_verification_code_page__WEBPACK_IMPORTED_MODULE_6__["VerificationCodePage"]]
    })
], VerificationCodePageModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9yZWdpc3RyYXRpb24tcGFnZS9jb25maXJtLXJlZ2lzdHJhdGlvbi92ZXJpZmljYXRpb24tY29kZS92ZXJpZmljYXRpb24tY29kZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.ts ***!
  \********************************************************************************************************************/
/*! exports provided: VerificationCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationCodePage", function() { return VerificationCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let VerificationCodePage = class VerificationCodePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    test() {
        console.log('asd');
    }
    onSubmitCode() {
        this.router.navigate(['home-page-tabs', 'home-page']);
    }
};
VerificationCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerificationCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification-code.page.scss */ "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.page.scss")).default]
    })
], VerificationCodePage);



/***/ })

}]);
//# sourceMappingURL=verification-code-verification-code-module-es2015.js.map