(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-home-tabs-home-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-tabs.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-tabs.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"appointment-page\" *ngIf=\"userData\">\n            <ion-icon name=\"newspaper-outline\"></ion-icon>\n            <ion-label>{{\"Appointments\" | translate}}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"home-page\">\n            <ion-icon name=\"home-outline\"></ion-icon>\n            <ion-label>{{'Home' | translate}}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"search-page\">\n            <ion-icon name=\"search-outline\"></ion-icon>\n            <ion-label>{{'Search' | translate}}</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"more-page\" *ngIf=\"userData\">\n            <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n            <ion-label>{{'More' | translate}}</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/Pages/home-tabs/home-tabs-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/home-tabs/home-tabs-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPageRoutingModule", function() { return HomeTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-tabs.page */ "./src/app/Pages/home-tabs/home-tabs.page.ts");




const routes = [
    {
        path: 'home-page-tabs',
        component: _home_tabs_page__WEBPACK_IMPORTED_MODULE_3__["HomeTabsPage"],
        children: [
            {
                path: 'home-page',
                loadChildren: () => Promise.all(/*! import() | home-page-home-page-module */[__webpack_require__.e("default~Pages-doctor-doctor-module~favorite-doctors-favorite-doctors-module~home-page-home-page-modu~4f123908"), __webpack_require__.e("common"), __webpack_require__.e("home-page-home-page-module")]).then(__webpack_require__.bind(null, /*! ./home-page/home-page.module */ "./src/app/Pages/home-tabs/home-page/home-page.module.ts")).then(m => m.HomePagePageModule)
            },
            {
                path: 'appointment-page',
                loadChildren: () => Promise.all(/*! import() | appointment-page-appointment-page-module */[__webpack_require__.e("common"), __webpack_require__.e("appointment-page-appointment-page-module")]).then(__webpack_require__.bind(null, /*! ./appointment-page/appointment-page.module */ "./src/app/Pages/home-tabs/appointment-page/appointment-page.module.ts")).then(m => m.AppointmentPagePageModule)
            },
            {
                path: 'search-page',
                loadChildren: () => Promise.all(/*! import() | search-page-search-page-module */[__webpack_require__.e("default~Pages-doctor-doctor-module~favorite-doctors-favorite-doctors-module~home-page-home-page-modu~4f123908"), __webpack_require__.e("default~favorite-doctors-favorite-doctors-module~search-page-search-page-module"), __webpack_require__.e("common"), __webpack_require__.e("search-page-search-page-module")]).then(__webpack_require__.bind(null, /*! ./search-page/search-page.module */ "./src/app/Pages/home-tabs/search-page/search-page.module.ts")).then(m => m.SearchPagePageModule)
            },
            {
                path: 'more-page',
                loadChildren: () => Promise.all(/*! import() | more-page-more-page-module */[__webpack_require__.e("common"), __webpack_require__.e("more-page-more-page-module")]).then(__webpack_require__.bind(null, /*! ./more-page/more-page.module */ "./src/app/Pages/home-tabs/more-page/more-page.module.ts")).then(m => m.MorePagePageModule)
            }
        ]
    },
];
let HomeTabsPageRoutingModule = class HomeTabsPageRoutingModule {
};
HomeTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeTabsPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/home-tabs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/home-tabs/home-tabs.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPageModule", function() { return HomeTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-tabs-routing.module */ "./src/app/Pages/home-tabs/home-tabs-routing.module.ts");
/* harmony import */ var _home_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-tabs.page */ "./src/app/Pages/home-tabs/home-tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let HomeTabsPageModule = class HomeTabsPageModule {
};
HomeTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeTabsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_home_tabs_page__WEBPACK_IMPORTED_MODULE_6__["HomeTabsPage"]]
    })
], HomeTabsPageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/home-tabs.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/Pages/home-tabs/home-tabs.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9ob21lLXRhYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/home-tabs.page.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/home-tabs/home-tabs.page.ts ***!
  \***************************************************/
/*! exports provided: HomeTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTabsPage", function() { return HomeTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");



let HomeTabsPage = class HomeTabsPage {
    constructor(nativeStorage) {
        this.nativeStorage = nativeStorage;
    }
    ngOnInit() {
        // this.nativeStorage.getItem('user')
        //     .then(
        //         data => {
        //             this.userData = data;
        //             console.log(data);
        //             return data;
        //         },
        //         error => console.error(error)
        //     );
    }
    ionViewDidEnter() {
        if (localStorage.getItem('uid') != null) {
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            };
        }
    }
};
HomeTabsPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] }
];
HomeTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-tabs.page.scss */ "./src/app/Pages/home-tabs/home-tabs.page.scss")).default]
    })
], HomeTabsPage);



/***/ })

}]);
//# sourceMappingURL=Pages-home-tabs-home-tabs-module-es2015.js.map