(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verification-password-code-verification-password-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"auth-page/forget-password\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Verify Your Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title class=\"ion-text-center\" color=\"success\">Enter Code</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-center\">\n        We Have Sent Verification Code To\n        <ion-text color=\"success\">eng.amrmossad93@gmail.com</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <br>\n    <form (submit)=\"onSubmitCode()\">\n      <ion-item>\n        <ion-label position=\"floating\">Code</ion-label>\n        <ion-icon name=\"qr-code-outline\" slot=\"start\"></ion-icon>\n        <ion-input type=\"text\" placeholder=\"Enter Your Code\"></ion-input>\n      </ion-item>\n      <p class=\"ion-text-center\">Didn't Receive The Code?\n        <ion-router-link color=\"primary\" class=\"underline\" (click)=\"test()\">Re-Send?</ion-router-link>\n      </p>\n      <br>\n      <ion-button expand=\"block\" color=\"success\" type=\"submit\">Verify</ion-button>\n    </form>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code-routing.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code-routing.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: VerificationPasswordCodePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPasswordCodePageRoutingModule", function() { return VerificationPasswordCodePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verification_password_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verification-password-code.page */ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.ts");




const routes = [
    {
        path: '',
        component: _verification_password_code_page__WEBPACK_IMPORTED_MODULE_3__["VerificationPasswordCodePage"]
    },
    {
        path: 'change-password',
        loadChildren: () => __webpack_require__.e(/*! import() | change-password-change-password-module */ "change-password-change-password-module").then(__webpack_require__.bind(null, /*! ./change-password/change-password.module */ "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.module.ts")).then(m => m.ChangePasswordPageModule)
    }
];
let VerificationPasswordCodePageRoutingModule = class VerificationPasswordCodePageRoutingModule {
};
VerificationPasswordCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificationPasswordCodePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: VerificationPasswordCodePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPasswordCodePageModule", function() { return VerificationPasswordCodePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verification_password_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verification-password-code-routing.module */ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code-routing.module.ts");
/* harmony import */ var _verification_password_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification-password-code.page */ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.ts");







let VerificationPasswordCodePageModule = class VerificationPasswordCodePageModule {
};
VerificationPasswordCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verification_password_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificationPasswordCodePageRoutingModule"]
        ],
        declarations: [_verification_password_code_page__WEBPACK_IMPORTED_MODULE_6__["VerificationPasswordCodePage"]]
    })
], VerificationPasswordCodePageModule);



/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9mb3JnZXQtcGFzc3dvcmQvdmVyaWZpY2F0aW9uLXBhc3N3b3JkLWNvZGUvdmVyaWZpY2F0aW9uLXBhc3N3b3JkLWNvZGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VerificationPasswordCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationPasswordCodePage", function() { return VerificationPasswordCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let VerificationPasswordCodePage = class VerificationPasswordCodePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    test() {
        console.log('asd');
    }
    onSubmitCode() {
        this.router.navigate(['auth-page', 'forget-password', 'verification-password-code', 'change-password']);
    }
};
VerificationPasswordCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerificationPasswordCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verification-password-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification-password-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification-password-code.page.scss */ "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.page.scss")).default]
    })
], VerificationPasswordCodePage);



/***/ })

}]);
//# sourceMappingURL=verification-password-code-verification-password-code-module-es2015.js.map