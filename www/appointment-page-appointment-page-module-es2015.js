(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-page-appointment-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/appointment-page/appointment-page.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/appointment-page/appointment-page.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Appointment Page</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <!--    <ion-card *ngFor=\"let app of appointmentList\">-->\n    <!--        <ion-card-header>-->\n    <!--            <ion-card-subtitle>Appointment ID : {{app.name}}</ion-card-subtitle>-->\n    <!--            <ion-card-title>{{app.physician_id[1]}}</ion-card-title>-->\n    <!--            <ion-card-subtitle>Date : {{app.create_date}}</ion-card-subtitle>-->\n    <!--            <ion-card-subtitle *ngIf=\"app.schedule_slot_id[1]\">Appointment-->\n    <!--                : {{app.schedule_slot_id[1]}}</ion-card-subtitle>-->\n    <!--            <ion-card-subtitle>State : {{app.state}}</ion-card-subtitle>-->\n    <!--        </ion-card-header>-->\n    <!--    </ion-card>-->\n    <ion-segment [(ngModel)]=\"segmentState\" color=\"success\">\n\n        <ion-segment-button value=\"currentAppointment\">\n            Current\n        </ion-segment-button>\n        <ion-segment-button value=\"pastAppointments\">\n            Past\n        </ion-segment-button>\n\n\n    </ion-segment>\n\n\n    <div [ngSwitch]=\"segmentState\">\n        <div *ngSwitchCase=\"'pastAppointments'\" class=\"animate__animated animate__fadeIn\">\n            <ion-card *ngFor=\"let app of pastAppointmentList\">\n                <ion-card-header>\n                    <ion-card-subtitle>Appointment ID : {{app.name}}</ion-card-subtitle>\n                    <ion-card-title>{{app.physician_id[1]}}</ion-card-title>\n                    <ion-card-subtitle>Date : {{app.create_date}}</ion-card-subtitle>\n                    <ion-card-subtitle *ngIf=\"app.schedule_slot_id[1]\">Appointment\n                        : {{app.schedule_slot_id[1]}}</ion-card-subtitle>\n                    <ion-card-subtitle>State : {{app.state}}</ion-card-subtitle>\n                    <ion-card-subtitle class=\"ion-text-center rating-stars\">\n                        <ion-icon name=\"star\" [ngClass]=\"{'active': app.appointment_rate >= 1}\" (click)=\"changeRate(app.id, 1)\"></ion-icon>\n                        <ion-icon name=\"star\" [ngClass]=\"{'active': app.appointment_rate >= 2}\" (click)=\"changeRate(app.id, 2)\"></ion-icon>\n                        <ion-icon name=\"star\" [ngClass]=\"{'active': app.appointment_rate >= 3}\" (click)=\"changeRate(app.id, 3)\"></ion-icon>\n                        <ion-icon name=\"star\" [ngClass]=\"{'active': app.appointment_rate >= 4}\" (click)=\"changeRate(app.id, 4)\"></ion-icon>\n                        <ion-icon name=\"star\" [ngClass]=\"{'active': app.appointment_rate >= 5}\" (click)=\"changeRate(app.id, 5)\"></ion-icon>\n                    </ion-card-subtitle>\n                </ion-card-header>\n            </ion-card>\n            <ion-card *ngIf=\"!appointmentList\">\n                <ion-card-header>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-title>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-title>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                </ion-card-header>\n            </ion-card>\n        </div>\n\n        <div *ngSwitchCase=\"'currentAppointment'\" class=\"animate__animated animate__fadeIn\">\n            <ion-card *ngFor=\"let app of currentAppointmentList\">\n                <ion-card-header>\n                    <ion-card-subtitle>Appointment ID : {{app.name}}</ion-card-subtitle>\n                    <ion-card-title>{{app.physician_id[1]}}</ion-card-title>\n                    <ion-card-subtitle>Date : {{app.create_date}}</ion-card-subtitle>\n                    <ion-card-subtitle *ngIf=\"app.schedule_slot_id[1]\">Appointment\n                        : {{app.schedule_slot_id[1]}}</ion-card-subtitle>\n                    <ion-card-subtitle>State : {{app.state}}</ion-card-subtitle>\n                </ion-card-header>\n            </ion-card>\n            <ion-card *ngIf=\"!appointmentList\">\n                <ion-card-header>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-title>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-title>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                    <ion-card-subtitle>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </ion-card-subtitle>\n                </ion-card-header>\n            </ion-card>\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/appointment-page/appointment-page-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/appointment-page/appointment-page-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AppointmentPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPagePageRoutingModule", function() { return AppointmentPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appointment_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointment-page.page */ "./src/app/Pages/home-tabs/appointment-page/appointment-page.page.ts");




const routes = [
    {
        path: '',
        component: _appointment_page_page__WEBPACK_IMPORTED_MODULE_3__["AppointmentPagePage"]
    }
];
let AppointmentPagePageRoutingModule = class AppointmentPagePageRoutingModule {
};
AppointmentPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppointmentPagePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/appointment-page/appointment-page.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/appointment-page/appointment-page.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AppointmentPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPagePageModule", function() { return AppointmentPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appointment_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-page-routing.module */ "./src/app/Pages/home-tabs/appointment-page/appointment-page-routing.module.ts");
/* harmony import */ var _appointment_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-page.page */ "./src/app/Pages/home-tabs/appointment-page/appointment-page.page.ts");







let AppointmentPagePageModule = class AppointmentPagePageModule {
};
AppointmentPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appointment_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppointmentPagePageRoutingModule"]
        ],
        declarations: [_appointment_page_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPagePage"]]
    })
], AppointmentPagePageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/appointment-page/appointment-page.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/appointment-page/appointment-page.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rating-stars ion-icon {\n  font-size: 20px;\n  margin: 0 5px;\n}\n.rating-stars ion-icon.active {\n  color: #ffbe00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL2FwcG9pbnRtZW50LXBhZ2UvYXBwb2ludG1lbnQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0FBRVIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXRhYnMvYXBwb2ludG1lbnQtcGFnZS9hcHBvaW50bWVudC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYXRpbmctc3RhcnMgaW9uLWljb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgJi5hY3RpdmV7XG4gICAgICAgIGNvbG9yOiAjZmZiZTAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/appointment-page/appointment-page.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/appointment-page/appointment-page.page.ts ***!
  \***************************************************************************/
/*! exports provided: AppointmentPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPagePage", function() { return AppointmentPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Service_appointment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Service/appointment.service */ "./src/app/Service/appointment.service.ts");



let AppointmentPagePage = class AppointmentPagePage {
    constructor(appointmentService) {
        this.appointmentService = appointmentService;
        this.appointmentList = [];
        this.pastAppointmentList = [];
        this.currentAppointmentList = [];
        this.segmentState = 'pastAppointments';
    }
    ngOnInit() {
    }
    changeRate(appId, rate) {
        this.appointmentService.changeRate(appId, rate).subscribe((res) => {
            if (res.result.status === 'success') {
                this.getAllAppointments();
            }
        });
    }
    ionViewDidEnter() {
        this.segmentState = 'currentAppointment';
        this.getAllAppointments();
    }
    getAllAppointments() {
        this.appointmentService.getAppointmentList().subscribe((res) => {
            this.appointmentList = res.result.appointments;
        }, error => {
        }, () => {
            this.pastAppointmentList = this.appointmentList.filter(c => c.state === 'done');
            this.currentAppointmentList = this.appointmentList.filter(c => c.state !== 'done');
        });
    }
};
AppointmentPagePage.ctorParameters = () => [
    { type: _Service_appointment_service__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"] }
];
AppointmentPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointment-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appointment-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/appointment-page/appointment-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appointment-page.page.scss */ "./src/app/Pages/home-tabs/appointment-page/appointment-page.page.scss")).default]
    })
], AppointmentPagePage);



/***/ }),

/***/ "./src/app/Service/appointment.service.ts":
/*!************************************************!*\
  !*** ./src/app/Service/appointment.service.ts ***!
  \************************************************/
/*! exports provided: AppointmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentService", function() { return AppointmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");



let AppointmentService = class AppointmentService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    getAppointmentList() {
        return this.dataService.post('api/patient_my_appointment', { params: { uid: localStorage.getItem('uid') } });
    }
    changeRate(appId, rate) {
        return this.dataService.post('api/api_change_rate', { params: { app_id: appId, rate: rate } });
    }
};
AppointmentService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AppointmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppointmentService);



/***/ })

}]);
//# sourceMappingURL=appointment-page-appointment-page-module-es2015.js.map