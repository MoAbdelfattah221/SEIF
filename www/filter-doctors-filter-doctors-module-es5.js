(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-doctors-filter-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageFilterDoctorsFilterDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Filter</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-segment [(ngModel)]=\"segment\" color=\"success\">\n        <ion-segment-button value=\"filter\">\n            Filter\n        </ion-segment-button>\n        <ion-segment-button value=\"sort\">\n            Sort\n        </ion-segment-button>\n    </ion-segment>\n\n    <form (submit)=\"onSubmitFilter()\">\n        <div [ngSwitch]=\"segment\">\n            <ion-card *ngSwitchCase=\"'filter'\" class=\"animate__animated animate__fadeIn\">\n                <ion-card-content>\n                    <ion-item>\n                        <ion-label>Availability</ion-label>\n                        <ion-select [(ngModel)]=\"searchService.searchQuery.availability\" name=\"availability\">\n                            <ion-select-option [value]=\"'Any Day'\">Any Day</ion-select-option>\n                            <ion-select-option [value]=\"'Today'\">Today</ion-select-option>\n                            <ion-select-option [value]=\"'Tomorrow'\">Tomorrow</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <!--                    <ion-item>-->\n                    <!--                        <ion-label>Title</ion-label>-->\n                    <!--                        <ion-select>-->\n                    <!--                            <ion-select-option [value]=\"'Professional'\">Professional</ion-select-option>-->\n                    <!--                            <ion-select-option [value]=\"'Specialist'\">Specialist</ion-select-option>-->\n                    <!--                        </ion-select>-->\n                    <!--                    </ion-item>-->\n                    <!--                    <hr>-->\n                    <ion-item>\n                        <ion-label>Gender</ion-label>\n                        <ion-select [(ngModel)]=\"searchService.searchQuery.gender\" name=\"gender\">\n                            <ion-select-option [value]=\"'male'\">Male</ion-select-option>\n                            <ion-select-option [value]=\"'female'\">Female</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>Specialties</ion-label>\n                        <ion-select [(ngModel)]=\"searchService.searchQuery.specialty\" name=\"specialty\">\n                            <ion-select-option *ngFor=\"let sep of doctorSpecialties\" [value]=\"sep.id\">\n                                {{sep.display_name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label>State</ion-label>\n                        <ion-select [(ngModel)]=\"searchService.searchQuery.state_id\" name=\"state_id\"\n                            (ionChange)=\"getPlaces($event.target.value)\">\n                            <ion-select-option *ngFor=\"let country of countryStates\" [value]=\"country.id\">\n                                {{country.display_name}}</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item>\n\n                        <ion-label>Area</ion-label>\n                        <ion-select [(ngModel)]=\"searchService.searchQuery.city_id\" name=\"city_id\" multiple>\n                            <ion-select-option *ngFor=\"let place of places\" [value]=\"place.id\">{{place.display_name}}\n                            </ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                    <div class=\"ion-text-center\">\n                        <ion-label>Rating</ion-label>\n                        <ionic-rating-component #rating activeIcon=\"star\" defaultIcon=\"star-outline\"\n                            activeColor=\"#006600\" defaultColor=\"#aaaaaa\" readonly=\"false\" rating=\"0\" fontSize=\"32px\"\n                            (ratingChanged)=\"onRatingChange($event)\">\n                        </ionic-rating-component>\n                    </div>\n                    <div class=\"ion-text-center\">\n                        <ion-label class=\"ion-text-center\">Examination Fees</ion-label>\n                        <ion-item>\n                            <ion-note color=\"success\" slot=\"start\">{{rangeValue.lower}}</ion-note>\n                            <ion-note color=\"success\" slot=\"end\">{{rangeValue.upper}}</ion-note>\n                            <ion-range id=\"dual-range\" dual-knobs pin color=\"dark\" min=\"5\" max=\"1000\" name=\"rangeValue\"\n                                [(ngModel)]=\"rangeValue\">\n                            </ion-range>\n                        </ion-item>\n                    </div>\n\n                    <div class=\"ion-padding\">\n                        <ion-button expand=\"block\" type=\"submit\" color=\"success\" routerDirection=“back”>\n                            <ion-icon name=\"search-outline\"></ion-icon>\n                            Submit\n                        </ion-button>\n                        <br>\n                        <ion-button expand=\"block\" type=\"button\" fill=\"outline\" color=\"dark\" (click)=\"resetFunction()\">\n                            <ion-icon name=\"refresh-outline\"></ion-icon>\n                            Reset\n                        </ion-button>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card *ngSwitchCase=\"'sort'\" class=\"animate__animated animate__fadeIn\">\n                <ion-list>\n                    <ion-radio-group value=\"Recommended\">\n                        <ion-item>\n                            <ion-label>Recommended</ion-label>\n                            <ion-radio slot=\"start\" value=\"Recommended\"></ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Price Low To High</ion-label>\n                            <ion-radio slot=\"start\" value=\"Price Low To High\"></ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Price High To Low</ion-label>\n                            <ion-radio slot=\"start\" value=\"Price High To Low\"></ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Top Rating</ion-label>\n                            <ion-radio slot=\"start\" value=\"Top Rating\"></ion-radio>\n                        </ion-item>\n                    </ion-radio-group>\n                </ion-list>\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" type=\"submit\" color=\"success\" routerDirection=“back”>\n                        <ion-icon name=\"search-outline\"></ion-icon>\n                        Submit\n                    </ion-button>\n                    <br>\n                    <ion-button expand=\"block\" type=\"button\" fill=\"outline\" color=\"dark\" (click)=\"resetFunction()\">\n                        <ion-icon name=\"refresh-outline\"></ion-icon>\n                        Reset\n                    </ion-button>\n                </div>\n            </ion-card>\n        </div>\n    </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors-routing.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: FilterDoctorsPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsSearchPageFilterDoctorsFilterDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterDoctorsPageRoutingModule", function () {
        return FilterDoctorsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _filter_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filter-doctors.page */
      "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.ts");

      var routes = [{
        path: '',
        component: _filter_doctors_page__WEBPACK_IMPORTED_MODULE_3__["FilterDoctorsPage"]
      }];

      var FilterDoctorsPageRoutingModule = function FilterDoctorsPageRoutingModule() {
        _classCallCheck(this, FilterDoctorsPageRoutingModule);
      };

      FilterDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FilterDoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: FilterDoctorsPageModule */

    /***/
    function srcAppPagesHomeTabsSearchPageFilterDoctorsFilterDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterDoctorsPageModule", function () {
        return FilterDoctorsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _filter_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./filter-doctors-routing.module */
      "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors-routing.module.ts");
      /* harmony import */


      var _filter_doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./filter-doctors.page */
      "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.ts");
      /* harmony import */


      var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-rating-component */
      "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");

      var FilterDoctorsPageModule = function FilterDoctorsPageModule() {
        _classCallCheck(this, FilterDoctorsPageModule);
      };

      FilterDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _filter_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterDoctorsPageRoutingModule"], ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"]],
        declarations: [_filter_doctors_page__WEBPACK_IMPORTED_MODULE_6__["FilterDoctorsPage"]]
      })], FilterDoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageFilterDoctorsFilterDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9maWx0ZXItZG9jdG9ycy9maWx0ZXItZG9jdG9ycy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.ts ***!
      \***********************************************************************************/

    /*! exports provided: FilterDoctorsPage */

    /***/
    function srcAppPagesHomeTabsSearchPageFilterDoctorsFilterDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterDoctorsPage", function () {
        return FilterDoctorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../Service/search-by-specialty-and-area.service */
      "./src/app/Service/search-by-specialty-and-area.service.ts");
      /* harmony import */


      var _Service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../Service/search.service */
      "./src/app/Service/search.service.ts");

      var FilterDoctorsPage = /*#__PURE__*/function () {
        function FilterDoctorsPage(router, navCtrl, searchService, searchBySpecialityAndAreaService) {
          _classCallCheck(this, FilterDoctorsPage);

          this.router = router;
          this.navCtrl = navCtrl;
          this.searchService = searchService;
          this.searchBySpecialityAndAreaService = searchBySpecialityAndAreaService;
          this.rangeValue = {
            lower: 0,
            upper: 500
          };
          this.segment = 'filter';
        }

        _createClass(FilterDoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllDoctorSpecialties();
            this.getAllCountries();
          }
        }, {
          key: "onRatingChange",
          value: function onRatingChange(event) {
            this.rate = event;
          }
        }, {
          key: "onSubmitFilter",
          value: function onSubmitFilter() {
            // this.searchService.searchQuery.min_fees = this.rangeValue.lower;
            // this.searchService.searchQuery.max_fees = this.rangeValue.upper;
            // this.searchService.searchQuery.rating = this.rate;
            console.log(this.searchService.searchQuery);
            this.searchService.postSearchQuery();
            this.navCtrl.back();
          }
        }, {
          key: "getAllDoctorSpecialties",
          value: function getAllDoctorSpecialties() {
            var _this = this;

            this.searchBySpecialityAndAreaService.getSpecialties().subscribe(function (res) {
              _this.doctorSpecialties = res.result;
            });
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            var _this2 = this;

            this.searchBySpecialityAndAreaService.getAllCountries().subscribe(function (res) {
              _this2.countryStates = res.result;
            });
          }
        }, {
          key: "getPlaces",
          value: function getPlaces(id) {
            var _this3 = this;

            this.searchBySpecialityAndAreaService.getPlacesInCountry(id).subscribe(function (res) {
              _this3.places = res.result;
            });
          }
        }, {
          key: "resetFunction",
          value: function resetFunction() {
            this.searchService.searchQuery = {};
            this.searchService.postSearchQuery();
          }
        }]);

        return FilterDoctorsPage;
      }();

      FilterDoctorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _Service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        }, {
          type: _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__["SearchBySpecialtyAndAreaService"]
        }];
      };

      FilterDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filter-doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filter-doctors.page.scss */
        "./src/app/Pages/home-tabs/search-page/filter-doctors/filter-doctors.page.scss"))["default"]]
      })], FilterDoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=filter-doctors-filter-doctors-module-es5.js.map