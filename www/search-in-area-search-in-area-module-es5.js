(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-in-area-search-in-area-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.html":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchInAreaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"success\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button\n                    defaultHref=\"home-page-tabs/search-page/search-by-specialty-and-area/search-area\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Select Area</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-searchbar #search (ionChange)=\"searchInArea($event)\"></ion-searchbar>\n        <ion-list>\n            <ion-item *ngFor=\"let place of searchedItem\"\n                      routerLink=\"/home-page-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors\">\n                <ion-label>{{place.display_name}}</ion-label>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area-routing.module.ts":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area-routing.module.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: SearchInAreaPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchInAreaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchInAreaPageRoutingModule", function () {
        return SearchInAreaPageRoutingModule;
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


      var _search_in_area_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-in-area.page */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.ts");

      var routes = [{
        path: '',
        component: _search_in_area_page__WEBPACK_IMPORTED_MODULE_3__["SearchInAreaPage"]
      }, {
        path: 'search-result-of-doctors',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | search-result-of-doctors-search-result-of-doctors-module */
          "search-result-of-doctors-search-result-of-doctors-module").then(__webpack_require__.bind(null,
          /*! ./search-result-of-doctors/search-result-of-doctors.module */
          "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-result-of-doctors/search-result-of-doctors.module.ts")).then(function (m) {
            return m.SearchResultOfDoctorsPageModule;
          });
        }
      }];

      var SearchInAreaPageRoutingModule = function SearchInAreaPageRoutingModule() {
        _classCallCheck(this, SearchInAreaPageRoutingModule);
      };

      SearchInAreaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchInAreaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.module.ts":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.module.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: SearchInAreaPageModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchInAreaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchInAreaPageModule", function () {
        return SearchInAreaPageModule;
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


      var _search_in_area_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-in-area-routing.module */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area-routing.module.ts");
      /* harmony import */


      var _search_in_area_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-in-area.page */
      "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.ts");

      var SearchInAreaPageModule = function SearchInAreaPageModule() {
        _classCallCheck(this, SearchInAreaPageModule);
      };

      SearchInAreaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_in_area_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchInAreaPageRoutingModule"]],
        declarations: [_search_in_area_page__WEBPACK_IMPORTED_MODULE_6__["SearchInAreaPage"]]
      })], SearchInAreaPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.scss":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchInAreaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9zZWFyY2gtYnktc3BlY2lhbHR5LWFuZC1hcmVhL3NlYXJjaC1hcmVhL3NlYXJjaC1pbi1hcmVhL3NlYXJjaC1pbi1hcmVhLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.ts":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: SearchInAreaPage */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchBySpecialtyAndAreaSearchAreaSearchInAreaSearchInAreaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchInAreaPage", function () {
        return SearchInAreaPage;
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


      var _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../Service/search-by-specialty-and-area.service */
      "./src/app/Service/search-by-specialty-and-area.service.ts");

      var SearchInAreaPage = /*#__PURE__*/function () {
        function SearchInAreaPage(router, searchBySpecialityAndAreaService) {
          _classCallCheck(this, SearchInAreaPage);

          this.router = router;
          this.searchBySpecialityAndAreaService = searchBySpecialityAndAreaService;
          this.stateId = this.router.getCurrentNavigation().extras.state.state_id;
        }

        _createClass(SearchInAreaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPlaces();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            setTimeout(function () {
              _this.search.setFocus();
            });
          }
        }, {
          key: "getPlaces",
          value: function getPlaces() {
            var _this2 = this;

            this.searchBySpecialityAndAreaService.getPlacesInCountry(this.stateId).subscribe(function (res) {
              _this2.places = res.result;
              _this2.searchedItem = _this2.places;
            });
          }
        }, {
          key: "searchInArea",
          value: function searchInArea(event) {
            var val = event.target.value;
            this.searchedItem = this.places;

            if (val && val.trim() !== '') {
              this.searchedItem = this.places.filter(function (item) {
                return item.display_name.toLowerCase().indexOf(val.toLowerCase()) > -1;
              });
            }
          }
        }]);

        return SearchInAreaPage;
      }();

      SearchInAreaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_3__["SearchBySpecialtyAndAreaService"]
        }];
      };

      SearchInAreaPage.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['search', {
            "static": false
          }]
        }]
      };
      SearchInAreaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-in-area',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-in-area.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-in-area.page.scss */
        "./src/app/Pages/home-tabs/search-page/search-by-specialty-and-area/search-area/search-in-area/search-in-area.page.scss"))["default"]]
      })], SearchInAreaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-in-area-search-in-area-module-es5.js.map