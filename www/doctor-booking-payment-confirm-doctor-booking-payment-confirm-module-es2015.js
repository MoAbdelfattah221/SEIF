(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-booking-payment-confirm-doctor-booking-payment-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.html":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.html ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Appointment Confirmed</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-card class=\"ion-text-center ion-padding\">\n        <ion-icon name=\"checkmark-done-circle\" color=\"success\" style=\"font-size: 75px\"\n                  class=\"animate__animated animate__flip\"></ion-icon>\n\n        <ion-card class=\"home-button\">\n            <ion-card-content>\n                <h3>{{selectedSlot.display_name | date  : 'd MMM, y'}} <span>{{selectedSlotLine.name}}</span></h3>\n            </ion-card-content>\n        </ion-card>\n    </ion-card>\n    <ion-card class=\"ion-text-center\">\n        <br>\n        <img style=\"border-radius: 50%; height: 100px; width: 100px\"\n             [src]=\"'data:image/png;base64,' + doctorData.image_1920\" [alt]=\"doctorData.name\"/>\n        <ion-card-header>\n            <ion-card-subtitle color=\"success\">{{doctorData.name}}</ion-card-subtitle>\n            <ion-card-subtitle color=\"dark\">{{doctorData.specialty[1]}}</ion-card-subtitle>\n            <ion-grid>\n                <ion-row>\n                    <ion-col size=\"12\" class=\"ion-text-center\">\n                        <ionic-rating-component #rating\n                                                activeIcon=\"star\"\n                                                defaultIcon=\"star-outline\"\n                                                activeColor=\"#e0bb2e\"\n                                                defaultColor=\"#aaaaaa\"\n                                                readonly=\"true\"\n                                                rating=\"{{doctorData.rate_overall}}\"\n                                                fontSize=\"15px\"\n                        >\n                        </ionic-rating-component>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-header>\n    </ion-card>\n    <ion-card>\n        <ion-item style=\"padding: 10px\">\n            <ion-icon name=\"call-outline\" slot=\"start\" color=\"success\"></ion-icon>\n            <ion-label><p>{{doctorData.phone}}</p></ion-label>\n        </ion-item>\n        <ion-item style=\"padding: 10px\">\n            <ion-icon name=\"location-outline\" slot=\"start\" color=\"success\"></ion-icon>\n            <ion-label><p>{{doctorData.state_id[1]}}</p></ion-label>\n        </ion-item>\n    </ion-card>\n\n    <ion-button expand=\"block\" color=\"success\" (click)=\"goToAppointments()\">\n        Go To Appointments\n    </ion-button>\n    <p class=\"ion-text-center\">Appointment ID : {{appointmentId}}</p>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm-routing.module.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm-routing.module.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: DoctorBookingPaymentConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentConfirmPageRoutingModule", function() { return DoctorBookingPaymentConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctor_booking_payment_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-booking-payment-confirm.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.ts");




const routes = [
    {
        path: '',
        component: _doctor_booking_payment_confirm_page__WEBPACK_IMPORTED_MODULE_3__["DoctorBookingPaymentConfirmPage"]
    }
];
let DoctorBookingPaymentConfirmPageRoutingModule = class DoctorBookingPaymentConfirmPageRoutingModule {
};
DoctorBookingPaymentConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorBookingPaymentConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.module.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.module.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: DoctorBookingPaymentConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentConfirmPageModule", function() { return DoctorBookingPaymentConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doctor_booking_payment_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-booking-payment-confirm-routing.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm-routing.module.ts");
/* harmony import */ var _doctor_booking_payment_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-booking-payment-confirm.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.ts");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");








let DoctorBookingPaymentConfirmPageModule = class DoctorBookingPaymentConfirmPageModule {
};
DoctorBookingPaymentConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doctor_booking_payment_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorBookingPaymentConfirmPageRoutingModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"]
        ],
        declarations: [_doctor_booking_payment_confirm_page__WEBPACK_IMPORTED_MODULE_6__["DoctorBookingPaymentConfirmPage"]]
    })
], DoctorBookingPaymentConfirmPageModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-button {\n  text-align: center;\n  border: 1px solid #309a31;\n  box-shadow: unset;\n  border-radius: 20px;\n}\n.home-button h3 {\n  font-weight: bold;\n  font-size: 18px;\n}\n.home-button h3 span {\n  color: #309a31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci1ib29raW5nLWRhdGUvZG9jdG9yLWJvb2tpbmctZGF0ZS1jb25maXJtL2RvY3Rvci1ib29raW5nLXBheW1lbnQvZG9jdG9yLWJvb2tpbmctcGF5bWVudC1jb25maXJtL2RvY3Rvci1ib29raW5nLXBheW1lbnQtY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsY0FBQTtBQUVOIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci1ib29raW5nLWRhdGUvZG9jdG9yLWJvb2tpbmctZGF0ZS1jb25maXJtL2RvY3Rvci1ib29raW5nLXBheW1lbnQvZG9jdG9yLWJvb2tpbmctcGF5bWVudC1jb25maXJtL2RvY3Rvci1ib29raW5nLXBheW1lbnQtY29uZmlybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDlhMzE7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiAjMzA5YTMxO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.ts ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: DoctorBookingPaymentConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentConfirmPage", function() { return DoctorBookingPaymentConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DoctorBookingPaymentConfirmPage = class DoctorBookingPaymentConfirmPage {
    constructor(router) {
        this.router = router;
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
        this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
        this.appointmentId = this.router.getCurrentNavigation().extras.state.appointmentId;
    }
    ngOnInit() {
    }
    goToAppointments() {
        this.router.navigate(['/home-page-tabs/appointment-page']);
    }
};
DoctorBookingPaymentConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DoctorBookingPaymentConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-booking-payment-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doctor-booking-payment-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doctor-booking-payment-confirm.page.scss */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.page.scss")).default]
    })
], DoctorBookingPaymentConfirmPage);



/***/ })

}]);
//# sourceMappingURL=doctor-booking-payment-confirm-doctor-booking-payment-confirm-module-es2015.js.map