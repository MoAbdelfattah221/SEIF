(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-page-search-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-page.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-page.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-content>-->\n<!--    <div class=\"ion-padding\">-->\n<!--        <div class=\"container ion-text-center\">-->\n<!--            <img src=\"assets/Images/mix%20logo.png\" alt=\"Logo\">-->\n<!--        </div>-->\n<!--        <br>-->\n<!--        <br>-->\n<!--        <ion-button expand=\"block\" color=\"success\" (click)=\"goToSearchBySpecialtyAndArea()\">-->\n<!--            <ion-icon name=\"git-network-outline\" slot=\"start\"></ion-icon>-->\n<!--            Search By Specialty And Area-->\n<!--            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>-->\n<!--        </ion-button>-->\n<!--        <br>-->\n<!--        <ion-button expand=\"block\" color=\"success\" (click)=\"goToSearchByDoctorName()\">-->\n<!--            <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>-->\n<!--            Search By Doctor Name-->\n<!--            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>-->\n<!--        </ion-button>-->\n<!--    </div>-->\n<!--</ion-content>-->\n\n\n<ion-header class=\"ion-no-border\" class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Search In {{locationResults}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"search-bar\">\n                    <ion-searchbar #search (ionChange)=\"searchDoctorSpec($event)\"></ion-searchbar>\n                    <!--                    <div class=\"search-bar-buttons\">-->\n                    <!--                        <ion-grid>-->\n                    <!--                            <ion-row>-->\n                    <!--                                <ion-col size=\"6\">-->\n                    <!--                                    <ion-button (click)=\"goToFilterPage()\" expand=\"block\" size=\"small\" fill=\"outline\"-->\n                    <!--                                                color=\"success\">-->\n                    <!--                                        <ion-icon name=\"filter-outline\"></ion-icon>-->\n                    <!--                                    </ion-button>-->\n                    <!--                                </ion-col>-->\n                    <!--                                <ion-col size=\"6\">-->\n                    <!--                                    <ion-button (click)=\"goToFilterLocationGPSPage()\" expand=\"block\" size=\"small\"-->\n                    <!--                                                fill=\"outline\" color=\"success\">-->\n                    <!--                                        <ion-icon name=\"location-outline\"></ion-icon>-->\n                    <!--                                    </ion-button>-->\n                    <!--                                </ion-col>-->\n                    <!--                            </ion-row>-->\n                    <!--                        </ion-grid>-->\n                    <!--                    </div>-->\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <div *ngFor=\"let doctor of searchService.searchDoctors\">\n            <app-card [doctorData]=\"doctor\" (favorite)=\"onFavoriteDoctor(doctor)\"\n                      (removeFavorite)=\"onRemoveFavoriteDoctor(doctor)\"></app-card>\n        </div>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"goToFilterPage()\" color=\"success\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n        <ion-fab-button (click)=\"goToFilterLocationGPSPage()\" color=\"success\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-page-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-page-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SearchPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPagePageRoutingModule", function() { return SearchPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-page.page */ "./src/app/Pages/home-tabs/search-page/search-page.page.ts");




const routes = [
    {
        path: '',
        component: _search_page_page__WEBPACK_IMPORTED_MODULE_3__["SearchPagePage"]
    },
    {
        path: 'search-by-specialty-and-area',
        loadChildren: () => Promise.all(/*! import() | search-by-specialty-and-area-search-by-specialty-and-area-module */[__webpack_require__.e("common"), __webpack_require__.e("search-by-specialty-and-area-search-by-specialty-and-area-module")]).then(__webpack_require__.bind(null, /*! ./search-by-specialty-and-area/search-by-specialty-and-area.module */ "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-by-specialty-and-area.module.ts")).then(m => m.SearchBySpecialtyAndAreaPageModule)
    },
    {
        path: 'search-by-doctor-name',
        loadChildren: () => __webpack_require__.e(/*! import() | search-by-doctor-name-search-by-doctor-name-module */ "search-by-doctor-name-search-by-doctor-name-module").then(__webpack_require__.bind(null, /*! ./search-by-doctor-name/search-by-doctor-name.module */ "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.module.ts")).then(m => m.SearchByDoctorNamePageModule)
    },
    {
        path: 'filter-doctors',
        loadChildren: () => Promise.all(/*! import() | filter-doctors-filter-doctors-module */[__webpack_require__.e("common"), __webpack_require__.e("filter-doctors-filter-doctors-module")]).then(__webpack_require__.bind(null, /*! ./filter-doctors/filter-doctors.module */ "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.module.ts")).then(m => m.FilterDoctorsPageModule)
    },
    {
        path: 'locate-doctors-gps',
        loadChildren: () => Promise.all(/*! import() | locate-doctors-gps-locate-doctors-gps-module */[__webpack_require__.e("common"), __webpack_require__.e("locate-doctors-gps-locate-doctors-gps-module")]).then(__webpack_require__.bind(null, /*! ./locate-doctors-gps/locate-doctors-gps.module */ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.module.ts")).then(m => m.LocateDoctorsGPSPageModule)
    }
];
let SearchPagePageRoutingModule = class SearchPagePageRoutingModule {
};
SearchPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPagePageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-page.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-page.module.ts ***!
  \*******************************************************************/
/*! exports provided: SearchPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPagePageModule", function() { return SearchPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-page-routing.module */ "./src/app/Pages/home-tabs/search-page/search-page-routing.module.ts");
/* harmony import */ var _search_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-page.page */ "./src/app/Pages/home-tabs/search-page/search-page.page.ts");
/* harmony import */ var _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../SharedComponents/shared-components.module */ "./src/app/SharedComponents/shared-components.module.ts");








let SearchPagePageModule = class SearchPagePageModule {
};
SearchPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPagePageRoutingModule"],
            _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]
        ],
        declarations: [_search_page_page__WEBPACK_IMPORTED_MODULE_6__["SearchPagePage"]]
    })
], SearchPagePageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-page.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-page.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container img {\n  width: 200px;\n  margin-top: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXRhYnMvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/search-page.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/search-page.page.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPagePage", function() { return SearchPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _Service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Service/search.service */ "./src/app/Service/search.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Service_favorite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Service/favorite.service */ "./src/app/Service/favorite.service.ts");








let SearchPagePage = class SearchPagePage {
    constructor(router, geolocation, searchService, toastController, favoritesService, nativeGeocoder) {
        this.router = router;
        this.geolocation = geolocation;
        this.searchService = searchService;
        this.toastController = toastController;
        this.favoritesService = favoritesService;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.getLocationLogLat();
        this.searchForDoctor();
    }
    ionViewDidEnter() {
        // setTimeout(() => {
        //     this.search.setFocus();
        // });
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
    searchForDoctor() {
        this.searchService.postSearchQuery();
    }
    searchDoctorSpec(event) {
        const val = event.target.value;
        this.searchService.searchDoctors = this.searchService.doctors;
        console.log(this.searchService.searchDoctors);
        if (val && val.trim() !== '') {
            this.searchService.searchDoctors = this.searchService.doctors.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        console.log(this.searchService.searchDoctors);
    }
    goToSearchByDoctorName() {
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-doctor-name']);
    }
    goToSearchBySpecialtyAndArea() {
        this.router.navigate(['home-page-tabs', 'search-page', 'search-by-specialty-and-area']);
    }
    goToFilterPage() {
        this.router.navigate(['home-page-tabs', 'search-page', 'filter-doctors']);
    }
    goToFilterLocationGPSPage() {
        this.router.navigate(['home-page-tabs', 'search-page', 'locate-doctors-gps']);
    }
    onFavoriteDoctor(doctor) {
        this.favoritesService.postDoctorAsFavorite(doctor.doctorId).subscribe((res) => {
        }, error => {
        }, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Added To Favorite`,
                position: 'top',
                duration: 2000
            });
            yield toast.present();
            this.searchService.postSearchQuery();
        }));
    }
    onRemoveFavoriteDoctor(doctor) {
        this.favoritesService.removeDoctorAsFavorite(doctor.doctorId).subscribe((res) => {
            console.log(res.result);
        }, error => {
        }, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `Doctor ${doctor.name} Has Been Removed From Favorite`,
                position: 'top',
                duration: 2000
            });
            yield toast.present();
            this.searchService.postSearchQuery();
        }));
    }
};
SearchPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _Service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _Service_favorite_service__WEBPACK_IMPORTED_MODULE_7__["FavoriteService"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] }
];
SearchPagePage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['search', { static: false },] }]
};
SearchPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-page.page.scss */ "./src/app/Pages/home-tabs/search-page/search-page.page.scss")).default]
    })
], SearchPagePage);



/***/ })

}]);
//# sourceMappingURL=search-page-search-page-module-es2015.js.map