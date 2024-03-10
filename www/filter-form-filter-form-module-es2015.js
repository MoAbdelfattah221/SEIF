(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-form-filter-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.html":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.html ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Filter Doctors</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-segment [(ngModel)]=\"segment\">\n\n        <ion-segment-button value=\"filter\">\n            Filter\n        </ion-segment-button>\n        <ion-segment-button value=\"sort\">\n            Sort\n        </ion-segment-button>\n\n    </ion-segment>\n\n    <form (submit)=\"onSubmitFilter()\">\n        <div [ngSwitch]=\"segment\">\n            <ion-card *ngSwitchCase=\"'filter'\">\n                <ion-card-content>\n                    <ion-label>Entity</ion-label>\n                    <ion-radio-group value=\"Clinic\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Clinic\" color=\"success\"></ion-radio>\n                                    <ion-label>Clinic</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Hospital\" color=\"success\"></ion-radio>\n                                    <ion-label>Hospital</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                    <ion-label>Availability</ion-label>\n                    <ion-radio-group value=\"Any Day\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Any Day\" color=\"success\"></ion-radio>\n                                    <ion-label>Any Day</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Today\" color=\"success\"></ion-radio>\n                                    <ion-label>Today</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Tomorrow\" color=\"success\"></ion-radio>\n                                    <ion-label>Tomorrow</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                    <ion-label>Examination Fees</ion-label>\n                    <ion-item>\n                        <ion-note color=\"success\" slot=\"start\">{{rangeValue.lower}}</ion-note>\n                        <ion-note color=\"success\" slot=\"end\">{{rangeValue.upper}}</ion-note>\n                        <ion-range id=\"dual-range\" dual-knobs pin color=\"dark\" min=\"5\" max=\"1000\" name=\"rangeValue\"\n                                   [(ngModel)]=\"rangeValue\">\n\n                        </ion-range>\n                    </ion-item>\n                    <ion-label>Gender</ion-label>\n                    <ion-radio-group value=\"Male\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Male\" color=\"success\"></ion-radio>\n                                    <ion-label>Male</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Female\" color=\"success\"></ion-radio>\n                                    <ion-label>Female</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                    <ion-label>Rating</ion-label>\n                    <ionic-rating-component #rating\n                                            activeIcon=\"star\"\n                                            defaultIcon=\"star-outline\"\n                                            activeColor=\"#006600\"\n                                            defaultColor=\"#aaaaaa\"\n                                            readonly=\"false\"\n                                            rating=\"0\"\n                                            fontSize=\"32px\"\n                                            (ratingChanged)=\"onRatingChange($event)\">\n                    </ionic-rating-component>\n                    <hr>\n                    <ion-label>Title</ion-label>\n                    <ion-radio-group value=\"Professional\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Professional\" color=\"success\"></ion-radio>\n                                    <ion-label>Professional</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Specialist\" color=\"success\"></ion-radio>\n                                    <ion-label>Specialist</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card *ngSwitchCase=\"'sort'\">\n                <ion-list>\n                    <ion-item>\n                        <ion-label>Recommended</ion-label>\n                        <ion-checkbox slot=\"end\"></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Price Low To High</ion-label>\n                        <ion-checkbox slot=\"end\"></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Price High To Low</ion-label>\n                        <ion-checkbox slot=\"end\"></ion-checkbox>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Top Rating</ion-label>\n                        <ion-checkbox slot=\"end\"></ion-checkbox>\n                    </ion-item>\n                </ion-list>\n            </ion-card>\n        </div>\n        <ion-button expand=\"block\" type=\"submit\" color=\"success\" routerDirection=“back”>\n            Submit\n        </ion-button>\n    </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form-routing.module.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form-routing.module.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: FilterFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormPageRoutingModule", function() { return FilterFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-form.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.ts");




const routes = [
    {
        path: '',
        component: _filter_form_page__WEBPACK_IMPORTED_MODULE_3__["FilterFormPage"]
    }
];
let FilterFormPageRoutingModule = class FilterFormPageRoutingModule {
};
FilterFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterFormPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.module.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.module.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: FilterFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormPageModule", function() { return FilterFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-form-routing.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form-routing.module.ts");
/* harmony import */ var _filter_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-form.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.ts");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");








let FilterFormPageModule = class FilterFormPageModule {
};
FilterFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterFormPageRoutingModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"],
        ],
        declarations: [_filter_form_page__WEBPACK_IMPORTED_MODULE_6__["FilterFormPage"]]
    })
], FilterFormPageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.scss ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9zZWFyY2gtYnktc3BlY2lhbHR5LWFuZC1hcmVhL3NlYXJjaC1hcmVhL3NlYXJjaC1pbi1hcmVhL3NlYXJjaC1yZXN1bHQtb2YtZG9jdG9ycy9maWx0ZXItZm9ybS9maWx0ZXItZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: FilterFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormPage", function() { return FilterFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let FilterFormPage = class FilterFormPage {
    constructor(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.rangeValue = { lower: 55, upper: 500 };
        this.segment = 'filter';
    }
    ngOnInit() {
        // this.segment = 'filter';
    }
    onRatingChange(event) {
        this.rate = event;
        console.log(this.rate);
    }
    onSubmitFilter() {
        console.log(this.rate);
        // this.router.navigate(['/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/']);
        this.navCtrl.back();
        // console.log('/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/');
    }
};
FilterFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
FilterFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter-form.page.scss */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.page.scss")).default]
    })
], FilterFormPage);



/***/ })

}]);
//# sourceMappingURL=filter-form-filter-form-module-es2015.js.map