(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-doctor-doctor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{doctorData.name}} Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-card class=\"ion-text-center\">\n            <br>\n            <img style=\"border-radius: 50%; height: 100px; width: 100px\"\n                 [src]=\"'data:image/png;base64,' + doctorData.image_1920\" [alt]=\"doctorData.name\"/>\n            <ion-card-header>\n                <ion-card-subtitle color=\"success\">{{doctorData.name}}</ion-card-subtitle>\n                <ion-card-subtitle color=\"dark\">{{doctorData.specialty[1]}}</ion-card-subtitle>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col size=\"12\" class=\"ion-text-center\">\n                            <ionic-rating-component #rating\n                                                    activeIcon=\"star\"\n                                                    defaultIcon=\"star-outline\"\n                                                    activeColor=\"#e0bb2e\"\n                                                    defaultColor=\"#aaaaaa\"\n                                                    readonly=\"true\"\n                                                    rating=\"{{doctorData.rate_overall}}\"\n                                                    fontSize=\"15px\"\n                            >\n                            </ionic-rating-component>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-header>\n            <ion-card-content>\n                ({{doctorData.count_rate}} Rating From Visitors)\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n                            Fees\n                            <ion-text color=\"success\">({{doctorData.consul_fee}})</ion-text>\n                        </ion-col>\n                        <ion-col>\n                            <ion-icon name=\"time-outline\" color=\"success\"></ion-icon>\n                            W.T.\n                            <ion-text color=\"success\">15 Min.</ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-slides [options]=\"slideOptions\" *ngIf=\"slots\">\n            <ion-slide *ngFor=\"let slot of slots\">\n\n                <ion-card style=\"width: 100%\">\n                    <ion-card-header>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"12\">\n                                    <ion-card-title>{{slot.slot[0].display_name | date: 'EEEE, MMMM d, y'}}</ion-card-title>\n                                    <!--                                    <ion-card-subtitle>{{slots.length()}} Slots Available</ion-card-subtitle>-->\n                                </ion-col>\n\n                                <!--                                <ion-col>-->\n                                <!--                                    <ion-button size=\"small\" color=\"success\">See All</ion-button>-->\n                                <!--                                </ion-col>-->\n                            </ion-row>\n                        </ion-grid>\n\n                    </ion-card-header>\n\n                    <!--                    <ion-card-content>-->\n                    <!--                        <ion-grid>-->\n                    <!--                            <ion-row>-->\n                    <!--                                <ion-col size=\"4\">-->\n                    <!--                                    <ion-note>08:00 AM</ion-note>-->\n                    <!--                                </ion-col>-->\n                    <!--                                <ion-col size=\"4\">-->\n                    <!--                                    <ion-note>08:00 AM</ion-note>-->\n                    <!--                                </ion-col>-->\n                    <!--                                <ion-col size=\"4\">-->\n                    <!--                                    <ion-note>08:00 AM</ion-note>-->\n                    <!--                                </ion-col>-->\n                    <!--                            </ion-row>-->\n                    <!--                        </ion-grid>-->\n                    <!--                    </ion-card-content>-->\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n\n        <ion-button expand=\"block\" *ngIf=\"slots.length >= 1\" color=\"success\" class=\"stick-bottom\" (click)=\"onBooking()\">\n            Book An Appointment\n        </ion-button>\n\n        <ion-card *ngIf=\"slots.length === 0\" class=\"ion-text-center\">\n            <ion-card-header>\n                <ion-card-subtitle>Sorry</ion-card-subtitle>\n                <ion-card-title>No Slots Available For {{doctorData.name}}</ion-card-title>\n            </ion-card-header>\n        </ion-card>\n    </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/doctor/doctor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DoctorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorPageRoutingModule", function() { return DoctorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _doctor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctor.page */ "./src/app/Pages/doctor/doctor.page.ts");




const routes = [
    {
        path: '',
        component: _doctor_page__WEBPACK_IMPORTED_MODULE_3__["DoctorPage"]
    },
    {
        path: 'doctor-booking-date',
        loadChildren: () => __webpack_require__.e(/*! import() | doctor-booking-date-doctor-booking-date-module */ "doctor-booking-date-doctor-booking-date-module").then(__webpack_require__.bind(null, /*! ./doctor-booking-date/doctor-booking-date.module */ "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date.module.ts")).then(m => m.DoctorBookingDatePageModule)
    }
];
let DoctorPageRoutingModule = class DoctorPageRoutingModule {
};
DoctorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DoctorPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/doctor/doctor.module.ts ***!
  \***********************************************/
/*! exports provided: DoctorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorPageModule", function() { return DoctorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doctor-routing.module */ "./src/app/Pages/doctor/doctor-routing.module.ts");
/* harmony import */ var _doctor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor.page */ "./src/app/Pages/doctor/doctor.page.ts");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");








let DoctorPageModule = class DoctorPageModule {
};
DoctorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _doctor_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorPageRoutingModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"]
        ],
        declarations: [_doctor_page__WEBPACK_IMPORTED_MODULE_6__["DoctorPage"]]
    })
], DoctorPageModule);



/***/ }),

/***/ "./src/app/Pages/doctor/doctor.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Pages/doctor/doctor.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stick-bottom {\n  position: fixed;\n  left: 10px;\n  right: 10px;\n  width: 93%;\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvZG9jdG9yL2RvY3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2stYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgd2lkdGg6IDkzJTtcbiAgei1pbmRleDogMjA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/Pages/doctor/doctor.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/doctor/doctor.page.ts ***!
  \*********************************************/
/*! exports provided: DoctorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorPage", function() { return DoctorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Service/doctor.service */ "./src/app/Service/doctor.service.ts");




let DoctorPage = class DoctorPage {
    constructor(router, doctorService) {
        this.router = router;
        this.doctorService = doctorService;
        this.slideOptions = {
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }
        };
        this.slots = [];
        this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
    }
    ngOnInit() {
        this.getDoctorSlots();
    }
    getDoctorSlots() {
        let doctor = this.doctorData.id ? this.doctorData.id : this.doctorData['doctorId'];
        console.log(doctor);
        this.doctorService.getSlots(doctor).subscribe((res) => {
            this.slots = res.result.slots_data;
        });
    }
    onBooking() {
        this.router.navigate(['/doctor/doctor-booking-date'], {
            state: {
                doctorData: this.doctorData,
                slotData: this.slots
            }
        });
    }
};
DoctorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Service_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"] }
];
DoctorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doctor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doctor.page.scss */ "./src/app/Pages/doctor/doctor.page.scss")).default]
    })
], DoctorPage);



/***/ }),

/***/ "./src/app/Service/doctor.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/doctor.service.ts ***!
  \*******************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");



let DoctorService = class DoctorService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getSlots(id) {
        return this.dataService.post('api/doctor_slots', { params: { doctor_id: id } });
    }
    getSlotLines(id) {
        return this.dataService.post('api/get_slot_lines', { params: { slot_id: id } });
    }
    confirmAppointment(doctorId, slotLineId) {
        const data = {
            uid: localStorage.getItem('uid').toString(),
            doctor_id: doctorId.toString(),
            slot_line_id: slotLineId.toString()
        };
        return this.dataService.post('api/doctor_reservation', {
            params: data
        });
    }
};
DoctorService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
DoctorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorService);



/***/ })

}]);
//# sourceMappingURL=Pages-doctor-doctor-module-es2015.js.map