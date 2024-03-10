(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-booking-date-doctor-booking-date-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Appointment Date</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"ion-padding\">\n        <ion-text color=\"success\">\n            <h5>Select Appointment Date</h5>\n        </ion-text>\n        <ion-text color=\"dark\">\n            <p>Select Appointment Date</p>\n        </ion-text>\n        <ion-slides [options]=\"slideDoctorOpts\">\n            <ion-slide *ngFor=\"let slot of slotsData\" (click)=\"onClick(slot.slot[0])\">\n                <ion-card\n                        [ngClass]=\"{'special-box ion-text-center active': onSelectedSlot(slot.slot[0]), 'special-box ion-text-center': !onSelectedSlot(slot.slot[0])}\">\n                    <ion-card-content>\n                        <h4>{{slot.slot[0].display_name | date: 'd'}}</h4>\n                        <h3>{{slot.slot[0].display_name | date: 'EE'}}</h3>\n                    </ion-card-content>\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n    </ion-card>\n    <ion-card class=\"ion-padding animate__animated animate__fade\" *ngIf=\"slotLines\">\n        <ion-text color=\"success\">\n            <h5>Select Appointment Time</h5>\n        </ion-text>\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"4\" *ngFor=\"let line of slotLines\" (click)=\"onclickSlotLine(line)\">\n                    <div\n                            [ngClass]=\"{'bg-secondary-active': onSelectedSlotLine(line), 'bg-secondary': !onSelectedSlotLine(line)}\"\n                    >\n                        {{line.name}}\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-button expand=\"block\" color=\"success\" (click)=\"onConfirmBooking()\" [disabled]=\"!selectedSlotLine\">\n            Continue\n        </ion-button>\n    </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: DoctorBookingDatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDatePageRoutingModule", function() { return DoctorBookingDatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctor_booking_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor-booking-date.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.ts");




const routes = [
    {
        path: '',
        component: _doctor_booking_date_page__WEBPACK_IMPORTED_MODULE_3__["DoctorBookingDatePage"]
    },
    {
        path: 'doctor-booking-date-confirm',
        loadChildren: () => __webpack_require__.e(/*! import() | doctor-booking-date-confirm-doctor-booking-date-confirm-module */ "doctor-booking-date-confirm-doctor-booking-date-confirm-module").then(__webpack_require__.bind(null, /*! ./doctor-booking-date-confirm/doctor-booking-date-confirm.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-date-confirm.module.ts")).then(m => m.DoctorBookingDateConfirmPageModule)
    }
];
let DoctorBookingDatePageRoutingModule = class DoctorBookingDatePageRoutingModule {
};
DoctorBookingDatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorBookingDatePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.module.ts ***!
  \********************************************************************************/
/*! exports provided: DoctorBookingDatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDatePageModule", function() { return DoctorBookingDatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doctor_booking_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-booking-date-routing.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-routing.module.ts");
/* harmony import */ var _doctor_booking_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-booking-date.page */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.ts");







let DoctorBookingDatePageModule = class DoctorBookingDatePageModule {
};
DoctorBookingDatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doctor_booking_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorBookingDatePageRoutingModule"]
        ],
        declarations: [_doctor_booking_date_page__WEBPACK_IMPORTED_MODULE_6__["DoctorBookingDatePage"]]
    })
], DoctorBookingDatePageModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: 100%;\n}\nion-slides .active {\n  background: #309a31;\n  color: #fff !important;\n}\nion-slides .special-box {\n  border-radius: 20px;\n  color: #309a31;\n}\nion-slides .special-box p {\n  font-size: 20px;\n}\n.bg-secondary {\n  background-color: #f0f0f0;\n  border-radius: 10px;\n  text-align: center;\n}\n.bg-secondary-active {\n  background-color: #309a31;\n  color: #fff !important;\n  border-radius: 10px;\n  text-align: center;\n}\n.stick-bottom {\n  position: fixed;\n  left: 10px;\n  right: 10px;\n  width: 93%;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci1ib29raW5nLWRhdGUvZG9jdG9yLWJvb2tpbmctZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFFSTtFQUNFLGVBQUE7QUFBTjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9kb2N0b3IvZG9jdG9yLWJvb2tpbmctZGF0ZS9kb2N0b3ItYm9va2luZy1kYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzMwOWEzMTtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNwZWNpYWwtYm94IHtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiAjMzA5YTMxO1xuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi5iZy1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZy1zZWNvbmRhcnktYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwOWEzMTtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3RpY2stYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDkzJTtcbiAgei1pbmRleDogMjA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.ts ***!
  \******************************************************************************/
/*! exports provided: DoctorBookingDatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorBookingDatePage", function() { return DoctorBookingDatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Service/doctor.service */ "./src/app/Service/doctor.service.ts");




let DoctorBookingDatePage = class DoctorBookingDatePage {
    constructor(router, doctorService) {
        this.router = router;
        this.doctorService = doctorService;
        this.slideDoctorOpts = {
            slidesPerView: 3,
            speed: 400
        };
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
        this.slotsData = this.router.getCurrentNavigation().extras.state.slotData;
    }
    ngOnInit() {
    }
    onClick(slot) {
        this.selectedSlot = slot;
        this.doctorService.getSlotLines(this.selectedSlot.id).subscribe((res) => {
            this.slotLines = res.result.lines;
        });
    }
    onSelectedSlot(slot) {
        return this.selectedSlot === slot;
    }
    onclickSlotLine(slotLine) {
        this.selectedSlotLine = slotLine;
    }
    onSelectedSlotLine(slotLine) {
        return this.selectedSlotLine === slotLine;
    }
    onConfirmBooking() {
        this.router.navigate(['/doctor/doctor-booking-date/doctor-booking-date-confirm'], {
            state: {
                doctorData: this.doctorData,
                selectedSlot: this.selectedSlot,
                selectedSlotLine: this.selectedSlotLine
            }
        });
    }
};
DoctorBookingDatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"] }
];
DoctorBookingDatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-booking-date',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doctor-booking-date.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doctor-booking-date.page.scss */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.page.scss")).default]
    })
], DoctorBookingDatePage);



/***/ })

}]);
//# sourceMappingURL=doctor-booking-date-doctor-booking-date-module-es2015.js.map