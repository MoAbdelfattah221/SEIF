(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~favorite-doctors-favorite-doctors-module~search-page-search-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/card/card.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/card/card.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n    <div class=\"card-doctor\" (click)=\"onBooking()\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"3\" class=\"ion-no-padding\">\n                    <img style=\"border-radius: 50%; height: 60px; width: 60px\"\n                         [src]=\"'data:image/png;base64,' + doctorData.image_1920\" [alt]=\"doctorData.name\">\n                </ion-col>\n                <ion-col size=\"9\" class=\"ion-no-padding\">\n                    <div class=\"doctor-details\">\n                        <ion-label class=\"card-doctor-name\">{{doctorData.name}}</ion-label>\n                        <ion-card-subtitle>{{doctorData.specialty[1]}}</ion-card-subtitle>\n                    </div>\n                </ion-col>\n                <ion-col size=\"12\" class=\"ion-no-padding\">\n                    <div class=\"stars\">\n                        <ionic-rating-component #rating\n                                                activeIcon=\"star\"\n                                                defaultIcon=\"star-outline\"\n                                                activeColor=\"#e0bb2e\"\n                                                defaultColor=\"#aaaaaa\"\n                                                readonly=\"true\"\n                                                rating=\"{{doctorData.rate_overall}}\"\n                                                fontSize=\"15px\"\n                        >\n                        </ionic-rating-component>\n                        ({{doctorData.count_rate}} Rating From Visitors)\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"meta-details\">\n                <ion-col size=\"6\" (click)=\"onBooking()\" class=\"ion-no-padding ion-text-left\">\n                    <ion-icon name=\"location-outline\" color=\"success\"></ion-icon>\n                        {{doctorData.state_id[1]}}\n                        <!--                <ion-text color=\"success\">({{drLocationDistance}})</ion-text>-->\n                </ion-col>\n                <ion-col size=\"6\" (click)=\"onBooking()\" class=\"ion-no-padding ion-text-right\">\n                    <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n                        Fees\n                        <span color=\"success\">({{doctorData.consul_fee}})</span>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n\n    <ion-card-content class=\"ion-no-padding\">\n        <div class=\"item-list card-doctor-buttons\">\n            <!--            <ion-icon name=\"time-outline\" slot=\"start\" color=\"success\"></ion-icon>-->\n            <!--            <ion-label>-->\n            <!--                Waiting Time-->\n            <!--                <ion-text color=\"success\">{{drWaitingTime}}</ion-text>-->\n            <!--            </ion-label>-->\n            <div style=\"margin-top: 15px\">\n                <ion-button class=\"book-now\" fill=\"outline\" color=\"success\" *ngIf=\"userData\" (click)=\"onBooking()\">\n                    <ion-icon name=\"bookmark-outline\"></ion-icon>\n                    Book\n                </ion-button>\n                <ion-button class=\"book-now\" color=\"success\" *ngIf=\"!userData\" (click)=\"onLogin()\">\n                    Login\n                </ion-button>\n                <ion-button class=\"book-now\" fill=\"outline\" color=\"danger\"\n                            *ngIf=\"userData && doctorData.isFavorite === false\" (click)=\"onClickFavorite()\">\n                    <!--                    <ion-icon name=\"heart\"></ion-icon>-->\n                    <ion-icon name=\"heart-outline\"></ion-icon>\n                    Add To Favorite\n                </ion-button>\n                <ion-button class=\"book-now\" fill=\"outline\" color=\"danger\"\n                            *ngIf=\"userData && doctorData.isFavorite === true\" (click)=\"onClickRemoveFavorite()\">\n                    <ion-icon name=\"heart\"></ion-icon>\n                    <!--                                        <ion-icon name=\"heart-outline\"></ion-icon>-->\n                    Remove From Favorite\n                </ion-button>\n            </div>\n\n        </div>\n    </ion-card-content>\n</ion-card>\n");

/***/ }),

/***/ "./src/app/Service/favorite.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/favorite.service.ts ***!
  \*********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");



let FavoriteService = class FavoriteService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    postDoctorAsFavorite(doctorId) {
        const OBJ = {
            uid: localStorage.getItem('uid'),
            method: 'add',
            doctor_id: doctorId
        };
        return this.dataService.post('api/patient_favorite_doctors', { params: OBJ });
    }
    removeDoctorAsFavorite(doctorId) {
        const OBJ = {
            uid: localStorage.getItem('uid'),
            method: 'remove',
            doctor_id: doctorId
        };
        return this.dataService.post('api/patient_favorite_doctors', { params: OBJ });
    }
    getAllFavoriteDoctors() {
        return this.dataService.post('api/get_patient_favorite_doctors', {
            params: { uid: localStorage.getItem('uid') }
        });
    }
};
FavoriteService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
FavoriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavoriteService);



/***/ }),

/***/ "./src/app/Service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/Service/data.service.ts");
/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite.service */ "./src/app/Service/favorite.service.ts");




let SearchService = class SearchService {
    constructor(dataService, favoritesService) {
        this.dataService = dataService;
        this.favoritesService = favoritesService;
        this.searchQuery = {};
        this.favoriteIds = [];
        this.favoriteDoctorsFiltered = [];
    }
    postSearchQuery() {
        return this.dataService.post('api/doctor_search_query', { params: this.searchQuery }).subscribe((res) => {
            this.doctors = res.result;
            this.searchDoctors = this.doctors;
        }, error => {
        }, () => {
            this.getAllFavoriteDoctors();
        });
    }
    getAllFavoriteDoctors() {
        this.favoritesService.getAllFavoriteDoctors().subscribe((res) => {
            this.favoriteIds = res.result.favorite_doctors;
            console.log(this.favoriteIds);
        }, error => {
        }, () => {
            this.getFavoriteDoctorsFiltered();
        });
    }
    checkInFavoriteList(doctorId) {
        return this.favoriteIds.includes(doctorId);
    }
    getFavoriteDoctorsFiltered() {
        this.favoriteDoctorsFiltered = [];
        if (this.doctors) {
            this.doctors.forEach((c) => {
                const OBJ = {
                    doctorId: c.id,
                    name: c.name,
                    specialty: c.specialty,
                    rate_overall: c.rate_overall,
                    image_1920: c.image_1920,
                    state_id: c.state_id,
                    consul_fee: c.consul_fee,
                    count_rate: c.count_rate,
                    isFavorite: this.checkInFavoriteList(c.id)
                };
                this.favoriteDoctorsFiltered.push(OBJ);
            });
        }
        return this.favoriteDoctorsFiltered;
    }
    getDoctorFavorites() {
        this.favoriteDoctorsFiltered = [];
        this.doctors.forEach((c) => {
            const OBJ = {
                doctorId: c.id,
                name: c.name,
                specialty: c.specialty,
                rate_overall: c.rate_overall,
                image_1920: c.image_1920,
                state_id: c.state_id,
                consul_fee: c.consul_fee,
                count_rate: c.count_rate,
                isFavorite: this.checkInFavoriteList(c.id)
            };
            this.favoriteDoctorsFiltered.push(OBJ);
        });
        return this.favoriteDoctorsFiltered.filter(c => c.isFavorite === true);
    }
};
SearchService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"] }
];
SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/SharedComponents/card/card.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/SharedComponents/card/card.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".availableCard {\n  background-color: grey;\n  color: #ffffff;\n  text-align: center;\n  border-radius: 3px;\n  border: unset;\n  width: 100%;\n  line-height: 28px;\n  margin-top: 4px;\n}\n\n.doctor-details {\n  margin-top: 0;\n  margin-left: 10px;\n}\n\n.doctor-details .card-doctor-name {\n  font-weight: bold;\n}\n\n.meta-details {\n  font-size: 12px;\n}\n\n.meta-details ion-icon {\n  font-size: 15px;\n  position: relative;\n  top: 2px;\n}\n\n.card-doctor {\n  border-bottom: 1px solid #eee;\n  padding: 0 20px;\n}\n\n.card-doctor-buttons {\n  padding: 0 20px;\n}\n\n.stars {\n  font-size: 13px;\n}\n\n.stars .active-star {\n  color: #e0bb2e;\n}\n\nion-card {\n  border-radius: 20px;\n  box-shadow: 0px 0px 12px 2px #dedede;\n  padding: 10px 0;\n}\n\n.item-list {\n  margin-bottom: 5px;\n}\n\n.book-now {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkQ29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUVGOztBQURFO0VBQ0UsaUJBQUE7QUFHSjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFJSjs7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUxFO0VBQ0UsY0FBQTtBQU9KOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0FBTUYiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWRDb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmFpbGFibGVDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IHVuc2V0O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kb2N0b3ItZGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIC5jYXJkLWRvY3Rvci1uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4ubWV0YS1kZXRhaWxze1xuICBmb250LXNpemU6MTJweDtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gIH1cbn1cbi5jYXJkLWRvY3RvcntcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5jYXJkLWRvY3Rvci1idXR0b25ze1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uc3RhcnMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5hY3RpdmUtc3RhciB7XG4gICAgY29sb3I6ICNlMGJiMmU7XG4gIH1cbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMnB4ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJvb2stbm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/SharedComponents/card/card.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/SharedComponents/card/card.component.ts ***!
  \*********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_Service_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/search.service */ "./src/app/Service/search.service.ts");





let CardComponent = class CardComponent {
    constructor(router, nativeStorage, searchService) {
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.searchService = searchService;
        // tslint:disable-next-line:no-output-native
        this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (localStorage.getItem('uid') != null) {
            this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
            };
            console.log(this.userData);
            this.doctorData.isFavorite = this.searchService.checkInFavoriteList(this.doctorData.id);
        }
    }
    onBooking() {
        this.router.navigate(['/doctor'], {
            state: {
                doctorData: this.doctorData
            }
        });
    }
    onLogin() {
        this.router.navigate(['/auth-page']);
    }
    onClickFavorite() {
        this.favorite.emit(null);
    }
    onClickRemoveFavorite() {
        this.removeFavorite.emit(null);
    }
};
CardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: src_app_Service_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"] }
];
CardComponent.propDecorators = {
    doctorData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    favorite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    removeFavorite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/card/card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./card.component.scss */ "./src/app/SharedComponents/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/SharedComponents/shared-components.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/SharedComponents/shared-components.module.ts ***!
  \**************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "./src/app/SharedComponents/card/card.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-rating-component */ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");






let SharedComponentsModule = class SharedComponentsModule {
};
SharedComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        exports: [
            _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_5__["IonicRatingComponentModule"]
        ],
    })
], SharedComponentsModule);



/***/ })

}]);
//# sourceMappingURL=default~favorite-doctors-favorite-doctors-module~search-page-search-page-module-es2015.js.map