(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-area-search-area-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home-page-tabs/search-page/search-by-specialty-and-area\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Select City</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-searchbar  #search (ionChange)=\"searchCountryState($event)\"></ion-searchbar>\n        <ion-list>\n            <ion-item *ngIf=\"locationResults\"\n                      routerLink=\"/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area\">\n                <ion-label>Your Detect Location In {{locationResults}}</ion-label>\n            </ion-item>\n            <ion-item *ngFor=\"let state of searchedItem\" (click)=\"onClickToCity(state.id)\">\n                <ion-label>{{state.display_name}}</ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SearchAreaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAreaPageRoutingModule", function() { return SearchAreaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_area_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-area.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.ts");




const routes = [
    {
        path: '',
        component: _search_area_page__WEBPACK_IMPORTED_MODULE_3__["SearchAreaPage"]
    },
    {
        path: 'search-in-area',
        loadChildren: () => __webpack_require__.e(/*! import() | search-in-area-search-in-area-module */ "search-in-area-search-in-area-module").then(__webpack_require__.bind(null, /*! ./search-in-area/search-in-area.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.module.ts")).then(m => m.SearchInAreaPageModule)
    }
];
let SearchAreaPageRoutingModule = class SearchAreaPageRoutingModule {
};
SearchAreaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchAreaPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: SearchAreaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAreaPageModule", function() { return SearchAreaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_area_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-area-routing.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area-routing.module.ts");
/* harmony import */ var _search_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-area.page */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.ts");







let SearchAreaPageModule = class SearchAreaPageModule {
};
SearchAreaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_area_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchAreaPageRoutingModule"]
        ],
        declarations: [_search_area_page__WEBPACK_IMPORTED_MODULE_6__["SearchAreaPage"]]
    })
], SearchAreaPageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9zZWFyY2gtYnktc3BlY2lhbHR5LWFuZC1hcmVhL3NlYXJjaC1hcmVhL3NlYXJjaC1hcmVhLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SearchAreaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAreaPage", function() { return SearchAreaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Service/search-by-specialty-and-area.service */ "./src/app/Service/search-by-specialty-and-area.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let SearchAreaPage = class SearchAreaPage {
    constructor(geolocation, searchBySpecialityAndAreaService, router, nativeGeocoder) {
        this.geolocation = geolocation;
        this.searchBySpecialityAndAreaService = searchBySpecialityAndAreaService;
        this.router = router;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.getLocationLogLat();
        this.getAllCountries();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
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
    getAllCountries() {
        this.searchBySpecialityAndAreaService.getAllCountries().subscribe((res) => {
            this.countryStates = res.result;
            this.searchedItem = this.countryStates;
        });
    }
    searchCountryState(event) {
        const val = event.target.value;
        this.searchedItem = this.countryStates;
        if (val && val.trim() !== '') {
            this.searchedItem = this.countryStates.filter((item) => {
                return (item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    onClickToCity(state_id) {
        const navigationExtras = {
            state: {
                state_id
            }
        };
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-specialty-and-area', 'search-area', 'search-in-area'], navigationExtras);
    }
};
SearchAreaPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_3__["SearchBySpecialtyAndAreaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] }
];
SearchAreaPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['search', { static: false },] }]
};
SearchAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-area.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-area.page.scss */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-area.page.scss")).default]
    })
], SearchAreaPage);



/***/ })

}]);
//# sourceMappingURL=search-area-search-area-module-es2015.js.map