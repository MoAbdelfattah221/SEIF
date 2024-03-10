(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-by-specialty-and-area-search-by-specialty-and-area-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home-page-tabs/search-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Searching In {{locationResults}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-searchbar #search (ionChange)=\"searchSpec($event)\"></ion-searchbar>\n        <ion-list>\n            <ion-list-header>\n                Most Popular Specialties\n            </ion-list-header>\n            <ion-item *ngFor=\"let drSpec of searchedItem\" (click)=\"searchForDoctorBySpeciality(drSpec.id)\">\n                <ion-avatar slot=\"start\">\n                    <img [src]=\"drSpec.image\">\n                </ion-avatar>\n                <ion-label>{{drSpec.display_name}}</ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area-routing.module.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area-routing.module.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SearchBySpecialtyAndAreaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBySpecialtyAndAreaPageRoutingModule", function() { return SearchBySpecialtyAndAreaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_by_specialty_and_area_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-by-specialty-and-area.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.ts");




const routes = [
    {
        path: '',
        component: _search_by_specialty_and_area_page__WEBPACK_IMPORTED_MODULE_3__["SearchBySpecialtyAndAreaPage"]
    },
    {
        path: 'search-area',
        loadChildren: () => __webpack_require__.e(/*! import() | search-area-search-area-module */ "search-area-search-area-module").then(__webpack_require__.bind(null, /*! ./search-area/search-area.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.module.ts")).then(m => m.SearchAreaPageModule)
    }
];
let SearchBySpecialtyAndAreaPageRoutingModule = class SearchBySpecialtyAndAreaPageRoutingModule {
};
SearchBySpecialtyAndAreaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchBySpecialtyAndAreaPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: SearchBySpecialtyAndAreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBySpecialtyAndAreaPageModule", function() { return SearchBySpecialtyAndAreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_by_specialty_and_area_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-by-specialty-and-area-routing.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area-routing.module.ts");
/* harmony import */ var _search_by_specialty_and_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-by-specialty-and-area.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.ts");







let SearchBySpecialtyAndAreaPageModule = class SearchBySpecialtyAndAreaPageModule {
};
SearchBySpecialtyAndAreaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_by_specialty_and_area_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchBySpecialtyAndAreaPageRoutingModule"]
        ],
        declarations: [_search_by_specialty_and_area_page__WEBPACK_IMPORTED_MODULE_6__["SearchBySpecialtyAndAreaPage"]]
    })
], SearchBySpecialtyAndAreaPageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9zZWFyY2gtYnktc3BlY2lhbHR5LWFuZC1hcmVhL3NlYXJjaC1ieS1zcGVjaWFsdHktYW5kLWFyZWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SearchBySpecialtyAndAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBySpecialtyAndAreaPage", function() { return SearchBySpecialtyAndAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Service/search-by-specialty-and-area.service */ "./src/app/Service/search-by-specialty-and-area.service.ts");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let SearchBySpecialtyAndAreaPage = class SearchBySpecialtyAndAreaPage {
    constructor(geolocation, searchService, router, searchBySpecialityAndAreaService, nativeGeocoder) {
        this.geolocation = geolocation;
        this.searchService = searchService;
        this.router = router;
        this.searchBySpecialityAndAreaService = searchBySpecialityAndAreaService;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.getLocationLogLat();
        this.getAllDoctorSpecialties();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
    }
    searchSpec(event) {
        const val = event.target.value;
        this.searchedItem = this.doctorSpecialties;
        if (val && val.trim() !== '') {
            this.searchedItem = this.doctorSpecialties.filter((item) => {
                return (item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    getLocationLogLat() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getLocation(latitude, longitude) {
        const options = {
            useLocale: true,
            maxResults: 1
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then((result) => {
            this.locationResults = result[0].locality;
        });
    }
    getAllDoctorSpecialties() {
        this.searchBySpecialityAndAreaService.getSpecialties().subscribe((res) => {
            this.doctorSpecialties = res.result;
            this.searchedItem = this.doctorSpecialties;
        });
    }
    searchForDoctorBySpeciality(specialtyId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.searchService.searchQuery.specialty = specialtyId;
            yield this.searchService.postSearchQuery();
            yield this.router.navigate(['/home-page-tabs/search-page']);
        });
    }
};
SearchBySpecialtyAndAreaPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _Service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__["SearchBySpecialtyAndAreaService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeGeocoder"] }
];
SearchBySpecialtyAndAreaPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['search', { static: false },] }]
};
SearchBySpecialtyAndAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-by-specialty-and-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-by-specialty-and-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-by-specialty-and-area.page.scss */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.page.scss")).default]
    })
], SearchBySpecialtyAndAreaPage);



/***/ })

}]);
//# sourceMappingURL=search-by-specialty-and-area-search-by-specialty-and-area-module-es2015.js.map