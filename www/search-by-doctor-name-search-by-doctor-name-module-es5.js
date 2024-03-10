(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-by-doctor-name-search-by-doctor-name-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.html":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.html ***!
      \*****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageSearchByDoctorNameSearchByDoctorNamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home-page-tabs/search-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Search By Doctor Name</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"search-bar\">\n                    <ion-searchbar></ion-searchbar>\n                    <div class=\"search-bar-buttons\">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col size=\"6\">\n                                    <ion-button size=\"small\" fill=\"outline\" color=\"success\">\n                                        <ion-icon name=\"filter-outline\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                                <ion-col size=\"6\">\n                                    <ion-button size=\"small\" fill=\"outline\" color=\"success\">\n                                        <ion-icon name=\"location-outline\"></ion-icon>\n                                    </ion-button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <app-card [drName]=\"'Amr Mossad'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\" [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n        <app-card [drName]=\"'Mohammed Sheref'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\"\n                  [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n        <app-card [drName]=\"'Karem Kamel'\" [drAvailableIn]=\"'9 PM'\" [drLocationDistance]=\"'22 Km'\"\n                  [drLocation]=\"'Haram'\"\n                  [drImage]=\"'assets/Images/Avatar.png'\"\n                  [drMoney]=\"'500 LE'\" [drPosition]=\"'Dentist'\" [drWaitingTime]=\"'10 Min'\"></app-card>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name-routing.module.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name-routing.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: SearchByDoctorNamePageRoutingModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchByDoctorNameSearchByDoctorNameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchByDoctorNamePageRoutingModule", function () {
        return SearchByDoctorNamePageRoutingModule;
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


      var _search_by_doctor_name_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-by-doctor-name.page */
      "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.ts");

      var routes = [{
        path: '',
        component: _search_by_doctor_name_page__WEBPACK_IMPORTED_MODULE_3__["SearchByDoctorNamePage"]
      }];

      var SearchByDoctorNamePageRoutingModule = function SearchByDoctorNamePageRoutingModule() {
        _classCallCheck(this, SearchByDoctorNamePageRoutingModule);
      };

      SearchByDoctorNamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchByDoctorNamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.module.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: SearchByDoctorNamePageModule */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchByDoctorNameSearchByDoctorNameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchByDoctorNamePageModule", function () {
        return SearchByDoctorNamePageModule;
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


      var _search_by_doctor_name_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-by-doctor-name-routing.module */
      "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name-routing.module.ts");
      /* harmony import */


      var _search_by_doctor_name_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-by-doctor-name.page */
      "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.ts");
      /* harmony import */


      var _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../SharedComponents/shared-components.module */
      "./src/app/SharedComponents/shared-components.module.ts");

      var SearchByDoctorNamePageModule = function SearchByDoctorNamePageModule() {
        _classCallCheck(this, SearchByDoctorNamePageModule);
      };

      SearchByDoctorNamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_by_doctor_name_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchByDoctorNamePageRoutingModule"], _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_search_by_doctor_name_page__WEBPACK_IMPORTED_MODULE_6__["SearchByDoctorNamePage"]]
      })], SearchByDoctorNamePageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.scss":
    /*!***************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.scss ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchByDoctorNameSearchByDoctorNamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search-bar {\n  position: relative;\n}\n.search-bar .search-bar-buttons {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL3NlYXJjaC1ieS1kb2N0b3ItbmFtZS9zZWFyY2gtYnktZG9jdG9yLW5hbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL3NlYXJjaC1ieS1kb2N0b3ItbmFtZS9zZWFyY2gtYnktZG9jdG9yLW5hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnNlYXJjaC1iYXItYnV0dG9uc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuXG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.ts ***!
      \*************************************************************************************************/

    /*! exports provided: SearchByDoctorNamePage */

    /***/
    function srcAppPagesHomeTabsSearchPageSearchByDoctorNameSearchByDoctorNamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchByDoctorNamePage", function () {
        return SearchByDoctorNamePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SearchByDoctorNamePage = /*#__PURE__*/function () {
        function SearchByDoctorNamePage() {
          _classCallCheck(this, SearchByDoctorNamePage);
        }

        _createClass(SearchByDoctorNamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SearchByDoctorNamePage;
      }();

      SearchByDoctorNamePage.ctorParameters = function () {
        return [];
      };

      SearchByDoctorNamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-by-doctor-name',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search-by-doctor-name.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search-by-doctor-name.page.scss */
        "./src/app/Pages/home-tabs/search-page/search-by-doctor-name/search-by-doctor-name.page.scss"))["default"]]
      })], SearchByDoctorNamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-by-doctor-name-search-by-doctor-name-module-es5.js.map