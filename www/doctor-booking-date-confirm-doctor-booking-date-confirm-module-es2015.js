(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-booking-date-confirm-doctor-booking-date-confirm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Appointment Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card class=\"ion-text-center\">\n    <br>\n    <img style=\"border-radius: 50%; height: 100px; width: 100px\"\n         [src]=\"'data:image/png;base64,' + doctorData.image_1920\" [alt]=\"doctorData.name\"/>\n    <ion-card-header>\n      <ion-card-subtitle color=\"success\">{{doctorData.name}}</ion-card-subtitle>\n      <ion-card-subtitle color=\"dark\">{{doctorData.specialty[1]}}</ion-card-subtitle>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-center\">\n            <ionic-rating-component #rating\n                                    activeIcon=\"star\"\n                                    defaultIcon=\"star-outline\"\n                                    activeColor=\"#e0bb2e\"\n                                    defaultColor=\"#aaaaaa\"\n                                    readonly=\"true\"\n                                    rating=\"{{doctorData.rate_overall}}\"\n                                    fontSize=\"15px\"\n            >\n            </ionic-rating-component>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      ({{doctorData.count_rate}} Rating From Visitors)\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item style=\"padding: 10px\">\n      <ion-icon name=\"calendar-outline\" slot=\"start\" color=\"success\"></ion-icon>\n      <ion-label><p>{{selectedSlotLine.name}} | {{selectedSlot.display_name | date  : 'd MMM, y'}}</p></ion-label>\n\n    </ion-item>\n    <ion-item style=\"padding: 10px\">\n      <ion-icon name=\"location-outline\" slot=\"start\" color=\"success\"></ion-icon>\n      <ion-label><p>{{doctorData.state_id[1]}}</p></ion-label>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-item style=\"padding: 10px\">\n      <ion-icon name=\"cash-outline\" slot=\"start\" color=\"success\"></ion-icon>\n      <ion-label>\n        <p>Fees: <span class=\"ion-float-end feesMoney\">{{doctorData.consul_fee}}</span></p>\n      </ion-label>\n    </ion-item>\n  </ion-card>\n\n  <ion-button expand=\"block\" color=\"success\" (click)=\"onSubmitBooking()\">\n    Confirm\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm-routing.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: DoctorBookingDateConfirmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDateConfirmPageRoutingModule", function() { return DoctorBookingDateConfirmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctor_booking_date_confirm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-booking-date-confirm.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.ts");




const routes = [
    {
        path: '',
        component: _doctor_booking_date_confirm_page__WEBPACK_IMPORTED_MODULE_3__["DoctorBookingDateConfirmPage"]
    },
    {
        path: 'doctor-booking-payment',
        loadChildren: () => __webpack_require__.e(/*! import() | doctor-booking-payment-doctor-booking-payment-module */ "doctor-booking-payment-doctor-booking-payment-module").then(__webpack_require__.bind(null, /*! ./doctor-booking-payment/doctor-booking-payment.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.module.ts")).then(m => m.DoctorBookingPaymentPageModule)
    },
    {
        path: 'otp-send',
        loadChildren: () => __webpack_require__.e(/*! import() | otp-send-otp-send-module */ "otp-send-otp-send-module").then(__webpack_require__.bind(null, /*! ./otp-send/otp-send.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.module.ts")).then(m => m.OtpSendPageModule)
    },
];
let DoctorBookingDateConfirmPageRoutingModule = class DoctorBookingDateConfirmPageRoutingModule {
};
DoctorBookingDateConfirmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorBookingDateConfirmPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DoctorBookingDateConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDateConfirmPageModule", function() { return DoctorBookingDateConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doctor_booking_date_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-booking-date-confirm-routing.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm-routing.module.ts");
/* harmony import */ var _doctor_booking_date_confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-booking-date-confirm.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.ts");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");








let DoctorBookingDateConfirmPageModule = class DoctorBookingDateConfirmPageModule {
};
DoctorBookingDateConfirmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doctor_booking_date_confirm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorBookingDateConfirmPageRoutingModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"]
        ],
        declarations: [_doctor_booking_date_confirm_page__WEBPACK_IMPORTED_MODULE_6__["DoctorBookingDateConfirmPage"]]
    })
], DoctorBookingDateConfirmPageModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".feesMoney {\n  color: #309a31;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci1ib29raW5nLWRhdGUvZG9jdG9yLWJvb2tpbmctZGF0ZS1jb25maXJtL2RvY3Rvci1ib29raW5nLWRhdGUtY29uZmlybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2RvY3Rvci9kb2N0b3ItYm9va2luZy1kYXRlL2RvY3Rvci1ib29raW5nLWRhdGUtY29uZmlybS9kb2N0b3ItYm9va2luZy1kYXRlLWNvbmZpcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZXNNb25leSB7XG4gIGNvbG9yOiAjMzA5YTMxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DoctorBookingDateConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDateConfirmPage", function() { return DoctorBookingDateConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Service/doctor.service */ "./src/app/Service/doctor.service.ts");




let DoctorBookingDateConfirmPage = class DoctorBookingDateConfirmPage {
    constructor(router, doctorService) {
        this.router = router;
        this.doctorService = doctorService;
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
        this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
    }
    ngOnInit() {
    }
    onSubmitBooking() {
        // console.log(this.selectedSlotLine);
        this.doctorService.confirmAppointment(this.doctorData.id, this.selectedSlotLine.id).subscribe((res) => {
            console.log(res.result.appointment[0].name);
            if (res.result.appointment[0].name) {
                // this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm'], {
                this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send'], {
                    state: {
                        doctorData: this.doctorData,
                        selectedSlot: this.selectedSlot,
                        selectedSlotLine: this.selectedSlotLine,
                        appointmentId: res.result.appointment[0].name
                    }
                });
            }
        });
    }
};
DoctorBookingDateConfirmPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"] }
];
DoctorBookingDateConfirmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-booking-date-confirm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doctor-booking-date-confirm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doctor-booking-date-confirm.page.scss */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.page.scss")).default]
    })
], DoctorBookingDateConfirmPage);



/***/ })

}]);
//# sourceMappingURL=doctor-booking-date-confirm-doctor-booking-date-confirm-module-es2015.js.map