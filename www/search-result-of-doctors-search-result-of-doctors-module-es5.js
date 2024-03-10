(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-result-of-doctors-search-result-of-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.html":
    /*!**********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.html ***!
      \**********************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsModalFilterDoctorModalFilterDoctorPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Filter Doctors</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-button expand=\"block\" color=\"success\" (click)=\"dismissModal()\">\n            Search\n        </ion-button>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.html":
    /*!*******************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.html ***!
      \*******************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsSearchResultOfDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button\n                    defaultHref=\"home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Searching In {{locationResults}}</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"search-bar\">\n                    <ion-searchbar></ion-searchbar>\n                    <div class=\"search-bar-buttons\">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"6\">\n                                    <ion-button size=\"small\" fill=\"outline\" color=\"success\"\n                                                routerLink=\"/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form\">\n                                        <ion-icon name=\"filter-outline\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <ion-button size=\"small\" fill=\"outline\" color=\"success\">\n                                        <ion-icon name=\"location-outline\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <app-card [drName]=\"'Amr Mossad'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\" [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n        <app-card [drName]=\"'Mohammed Sheref'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\"\n                  [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n        <app-card [drName]=\"'Karem Kamel'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\"\n                  [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n    </div>\n</ion-content>\n<div class=\"popup\" *ngIf=\"hideMe\">\n    <div class=\"popup-content\">\n        <div class=\"close-button\" (click)=\"closeModal()\">\n            <ion-icon name=\"close-circle-outline\"></ion-icon>\n        </div>\n        <br>\n        <ion-segment [(ngModel)]=\"segment\">\n\n            <ion-segment-button value=\"filter\">\n                Filter\n            </ion-segment-button>\n            <ion-segment-button value=\"sort\">\n               Sort\n            </ion-segment-button>\n\n        </ion-segment>\n\n\n        <div [ngSwitch]=\"segment\">\n            <ion-card *ngSwitchCase=\"'filter'\">\n                <ion-card-content>\n                    <ion-label>Entity</ion-label>\n                    <ion-radio-group value=\"Clinic\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Clinic\" color=\"success\"></ion-radio>\n                                    <ion-label>Clinic</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\"  value=\"Hospital\" color=\"success\"></ion-radio>\n                                    <ion-label>Hospital</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                    <ion-label>Availability</ion-label>\n                    <ion-radio-group value=\"Any Day\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Any Day\" color=\"success\"></ion-radio>\n                                    <ion-label>Any Day</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\"  value=\"Today\" color=\"success\"></ion-radio>\n                                    <ion-label>Today</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\"  value=\"Tomorrow\" color=\"success\"></ion-radio>\n                                    <ion-label>Tomorrow</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                    <ion-label>Examination Fees</ion-label>\n                    <ion-item>\n                        <ion-note color=\"success\" slot=\"start\">{{rangeValue.lower}}</ion-note>\n                        <ion-note color=\"success\" slot=\"end\">{{rangeValue.upper}}</ion-note>\n                        <ion-range id=\"dual-range\" dual-knobs pin color=\"dark\" min=\"5\" max=\"1000\" [(ngModel)]=\"rangeValue\">\n\n                        </ion-range>\n                    </ion-item>\n                    <ion-label>Gender</ion-label>\n                    <ion-radio-group value=\"Male\">\n                        <ion-row>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\" value=\"Male\" color=\"success\"></ion-radio>\n                                    <ion-label>Male</ion-label>\n                                </ion-item>\n                            </ion-col>\n                            <ion-col>\n                                <ion-item>\n                                    <ion-radio mode=\"md\"  value=\"Female\" color=\"success\"></ion-radio>\n                                    <ion-label>Female</ion-label>\n                                </ion-item>\n                            </ion-col>\n                        </ion-row>\n                    </ion-radio-group>\n                    <hr>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-card *ngSwitchCase=\"'sort'\">\n                <ion-card-header>\n                    Sort\n                </ion-card-header>\n                <ion-card-content>\n                    Sort\n                </ion-card-content>\n            </ion-card>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.scss":
    /*!********************************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.scss ***!
      \********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsModalFilterDoctorModalFilterDoctorPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9zZWFyY2gtYnktc3BlY2lhbHR5LWFuZC1hcmVhL3NlYXJjaC1hcmVhL3NlYXJjaC1pbi1hcmVhL3NlYXJjaC1yZXN1bHQtb2YtZG9jdG9ycy9tb2RhbC1maWx0ZXItZG9jdG9yL21vZGFsLWZpbHRlci1kb2N0b3IucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.ts":
    /*!******************************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.ts ***!
      \******************************************************************************************************************************************************************************/

    /*! exports provided: ModalFilterDoctorPage */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsModalFilterDoctorModalFilterDoctorPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFilterDoctorPage", function () {
        return ModalFilterDoctorPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ModalFilterDoctorPage = /*#__PURE__*/function () {
        function ModalFilterDoctorPage(modalController, router) {
          _classCallCheck(this, ModalFilterDoctorPage);

          this.modalController = modalController;
          this.router = router;
        }

        _createClass(ModalFilterDoctorPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.segment = 'Filter';
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            this.segment = ev.detail.value;
            console.log('Segment changed', ev);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.router.navigateByUrl('/location-for-doctors'); // using the injected ModalController this page
            // can "dismiss" itself and optionally pass back data

            this.modalController.dismiss({
              dismissed: true
            });
          }
        }]);

        return ModalFilterDoctorPage;
      }();

      ModalFilterDoctorPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ModalFilterDoctorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-filter-doctor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./modal-filter-doctor.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./modal-filter-doctor.page.scss */
        "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.scss"))["default"]]
      })], ModalFilterDoctorPage);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors-routing.module.ts":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors-routing.module.ts ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: SearchResultOfDoctorsPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsSearchResultOfDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultOfDoctorsPageRoutingModule", function () {
        return SearchResultOfDoctorsPageRoutingModule;
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


      var _search_result_of_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-result-of-doctors.page */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.ts");

      var routes = [{
        path: '',
        component: _search_result_of_doctors_page__WEBPACK_IMPORTED_MODULE_3__["SearchResultOfDoctorsPage"]
      }, {
        path: 'filter-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | filter-form-filter-form-module */
          "filter-form-filter-form-module").then(__webpack_require__.bind(null,
          /*! ./filter-form/filter-form.module */
          "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/filter-form/filter-form.module.ts")).then(function (m) {
            return m.FilterFormPageModule;
          });
        }
      }];

      var SearchResultOfDoctorsPageRoutingModule = function SearchResultOfDoctorsPageRoutingModule() {
        _classCallCheck(this, SearchResultOfDoctorsPageRoutingModule);
      };

      SearchResultOfDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchResultOfDoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.module.ts":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.module.ts ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: SearchResultOfDoctorsPageModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsSearchResultOfDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultOfDoctorsPageModule", function () {
        return SearchResultOfDoctorsPageModule;
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


      var _search_result_of_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-result-of-doctors-routing.module */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors-routing.module.ts");
      /* harmony import */


      var _search_result_of_doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-result-of-doctors.page */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.ts");
      /* harmony import */


      var _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../../SharedComponents/shared-components.module */
      "./src/app/SharedComponents/shared-components.module.ts");

      var SearchResultOfDoctorsPageModule = function SearchResultOfDoctorsPageModule() {
        _classCallCheck(this, SearchResultOfDoctorsPageModule);
      };

      SearchResultOfDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_result_of_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchResultOfDoctorsPageRoutingModule"], _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_search_result_of_doctors_page__WEBPACK_IMPORTED_MODULE_6__["SearchResultOfDoctorsPage"]]
      })], SearchResultOfDoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.scss":
    /*!*****************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.scss ***!
      \*****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsSearchResultOfDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-bar {\n  position: relative;\n}\n.search-bar .search-bar-buttons {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\nion-radio {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL3NlYXJjaC1ieS1zcGVjaWFsdHktYW5kLWFyZWEvc2VhcmNoLWFyZWEvc2VhcmNoLWluLWFyZWEvc2VhcmNoLXJlc3VsdC1vZi1kb2N0b3JzL3NlYXJjaC1yZXN1bHQtb2YtZG9jdG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBRUo7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXRhYnMvc2VhcmNoLXBhZ2Uvc2VhcmNoLWJ5LXNwZWNpYWx0eS1hbmQtYXJlYS9zZWFyY2gtYXJlYS9zZWFyY2gtaW4tYXJlYS9zZWFyY2gtcmVzdWx0LW9mLWRvY3RvcnMvc2VhcmNoLXJlc3VsdC1vZi1kb2N0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5zZWFyY2gtYmFyLWJ1dHRvbnN7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcblxuICB9XG59XG5pb24tcmFkaW97XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.ts":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.ts ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: SearchResultOfDoctorsPage */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchResultOfDoctorsSearchResultOfDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchResultOfDoctorsPage", function () {
        return SearchResultOfDoctorsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _modal_filter_doctor_modal_filter_doctor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-filter-doctor/modal-filter-doctor.page */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/modal-filter-doctor/modal-filter-doctor.page.ts");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var SearchResultOfDoctorsPage = /*#__PURE__*/function () {
        function SearchResultOfDoctorsPage(modalController, geolocation, nativeGeocoder) {
          _classCallCheck(this, SearchResultOfDoctorsPage);

          this.modalController = modalController;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.hideMe = false;
          this.rangeValue = {
            lower: 55,
            upper: 500
          };
        }

        _createClass(SearchResultOfDoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLocationLogLat();
          }
        }, {
          key: "getLocationLogLat",
          value: function getLocationLogLat() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this.getLocation(resp.coords.latitude, resp.coords.longitude);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation(latitude, longitude) {
            var _this2 = this;

            var options = {
              useLocale: true,
              maxResults: 1
            };
            this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (result) {
              _this2.locationResults = result[0].locality;
            });
          }
        }, {
          key: "presentFilterDoctorModal",
          value: function presentFilterDoctorModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _modal_filter_doctor_modal_filter_doctor_page__WEBPACK_IMPORTED_MODULE_3__["ModalFilterDoctorPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showModal",
          value: function showModal() {
            this.segment = 'filter';
            this.hideMe = true;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.hideMe = false;
          }
        }]);

        return SearchResultOfDoctorsPage;
      }();

      SearchResultOfDoctorsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
        }];
      };

      SearchResultOfDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-result-of-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-result-of-doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-result-of-doctors.page.scss */
        "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.page.scss"))["default"]]
      })], SearchResultOfDoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-result-of-doctors-search-result-of-doctors-module-es5.js.map