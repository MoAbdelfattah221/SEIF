(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-booking-payment-doctor-booking-payment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.html":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.html ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmDoctorBookingPaymentDoctorBookingPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n    <ion-title>doctorBookingPayment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-routing.module.ts":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-routing.module.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: DoctorBookingPaymentPageRoutingModule */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmDoctorBookingPaymentDoctorBookingPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentPageRoutingModule", function () {
        return DoctorBookingPaymentPageRoutingModule;
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


      var _doctor_booking_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctor-booking-payment.page */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.ts");

      var routes = [{
        path: '',
        component: _doctor_booking_payment_page__WEBPACK_IMPORTED_MODULE_3__["DoctorBookingPaymentPage"]
      }, {
        path: 'doctor-booking-payment-confirm',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | doctor-booking-payment-confirm-doctor-booking-payment-confirm-module */
          "doctor-booking-payment-confirm-doctor-booking-payment-confirm-module").then(__webpack_require__.bind(null,
          /*! ./doctor-booking-payment-confirm/doctor-booking-payment-confirm.module */
          "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-confirm/doctor-booking-payment-confirm.module.ts")).then(function (m) {
            return m.DoctorBookingPaymentConfirmPageModule;
          });
        }
      }];

      var DoctorBookingPaymentPageRoutingModule = function DoctorBookingPaymentPageRoutingModule() {
        _classCallCheck(this, DoctorBookingPaymentPageRoutingModule);
      };

      DoctorBookingPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorBookingPaymentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.module.ts":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.module.ts ***!
      \**************************************************************************************************************************************/

    /*! exports provided: DoctorBookingPaymentPageModule */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmDoctorBookingPaymentDoctorBookingPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentPageModule", function () {
        return DoctorBookingPaymentPageModule;
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


      var _doctor_booking_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-booking-payment-routing.module */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment-routing.module.ts");
      /* harmony import */


      var _doctor_booking_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctor-booking-payment.page */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.ts");

      var DoctorBookingPaymentPageModule = function DoctorBookingPaymentPageModule() {
        _classCallCheck(this, DoctorBookingPaymentPageModule);
      };

      DoctorBookingPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doctor_booking_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorBookingPaymentPageRoutingModule"]],
        declarations: [_doctor_booking_payment_page__WEBPACK_IMPORTED_MODULE_6__["DoctorBookingPaymentPage"]]
      })], DoctorBookingPaymentPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.scss":
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.scss ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmDoctorBookingPaymentDoctorBookingPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2RvY3Rvci9kb2N0b3ItYm9va2luZy1kYXRlL2RvY3Rvci1ib29raW5nLWRhdGUtY29uZmlybS9kb2N0b3ItYm9va2luZy1wYXltZW50L2RvY3Rvci1ib29raW5nLXBheW1lbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.ts":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: DoctorBookingPaymentPage */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmDoctorBookingPaymentDoctorBookingPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorBookingPaymentPage", function () {
        return DoctorBookingPaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DoctorBookingPaymentPage = /*#__PURE__*/function () {
        function DoctorBookingPaymentPage() {
          _classCallCheck(this, DoctorBookingPaymentPage);
        }

        _createClass(DoctorBookingPaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DoctorBookingPaymentPage;
      }();

      DoctorBookingPaymentPage.ctorParameters = function () {
        return [];
      };

      DoctorBookingPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-booking-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctor-booking-payment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctor-booking-payment.page.scss */
        "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/doctor-booking-payment/doctor-booking-payment.page.scss"))["default"]]
      })], DoctorBookingPaymentPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=doctor-booking-payment-doctor-booking-payment-module-es5.js.map