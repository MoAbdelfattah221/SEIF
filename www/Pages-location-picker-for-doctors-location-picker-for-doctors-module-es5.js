(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-location-picker-for-doctors-location-picker-for-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.html":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLocationPickerForDoctorsLocationPickerForDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n    <ion-title>locationPickerForDoctors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors-routing.module.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: LocationPickerForDoctorsPageRoutingModule */

    /***/
    function srcAppPagesLocationPickerForDoctorsLocationPickerForDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPickerForDoctorsPageRoutingModule", function () {
        return LocationPickerForDoctorsPageRoutingModule;
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


      var _location_picker_for_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location-picker-for-doctors.page */
      "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.ts");

      var routes = [{
        path: '',
        component: _location_picker_for_doctors_page__WEBPACK_IMPORTED_MODULE_3__["LocationPickerForDoctorsPage"]
      }];

      var LocationPickerForDoctorsPageRoutingModule = function LocationPickerForDoctorsPageRoutingModule() {
        _classCallCheck(this, LocationPickerForDoctorsPageRoutingModule);
      };

      LocationPickerForDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPickerForDoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LocationPickerForDoctorsPageModule */

    /***/
    function srcAppPagesLocationPickerForDoctorsLocationPickerForDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPickerForDoctorsPageModule", function () {
        return LocationPickerForDoctorsPageModule;
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


      var _location_picker_for_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-picker-for-doctors-routing.module */
      "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors-routing.module.ts");
      /* harmony import */


      var _location_picker_for_doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location-picker-for-doctors.page */
      "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.ts");

      var LocationPickerForDoctorsPageModule = function LocationPickerForDoctorsPageModule() {
        _classCallCheck(this, LocationPickerForDoctorsPageModule);
      };

      LocationPickerForDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_picker_for_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPickerForDoctorsPageRoutingModule"]],
        declarations: [_location_picker_for_doctors_page__WEBPACK_IMPORTED_MODULE_6__["LocationPickerForDoctorsPage"]]
      })], LocationPickerForDoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.scss":
    /*!*****************************************************************************************!*\
      !*** ./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLocationPickerForDoctorsLocationPickerForDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2xvY2F0aW9uLXBpY2tlci1mb3ItZG9jdG9ycy9sb2NhdGlvbi1waWNrZXItZm9yLWRvY3RvcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.ts ***!
      \***************************************************************************************/

    /*! exports provided: LocationPickerForDoctorsPage */

    /***/
    function srcAppPagesLocationPickerForDoctorsLocationPickerForDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPickerForDoctorsPage", function () {
        return LocationPickerForDoctorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LocationPickerForDoctorsPage = /*#__PURE__*/function () {
        function LocationPickerForDoctorsPage() {
          _classCallCheck(this, LocationPickerForDoctorsPage);
        }

        _createClass(LocationPickerForDoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LocationPickerForDoctorsPage;
      }();

      LocationPickerForDoctorsPage.ctorParameters = function () {
        return [];
      };

      LocationPickerForDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-picker-for-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location-picker-for-doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location-picker-for-doctors.page.scss */
        "./src/app/Pages/location-picker-for-doctors/location-picker-for-doctors.page.scss"))["default"]]
      })], LocationPickerForDoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-location-picker-for-doctors-location-picker-for-doctors-module-es5.js.map