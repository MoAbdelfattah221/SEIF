(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otp-send-otp-send-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.html":
    /*!************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmOtpSendOtpSendPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Verify Reservation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"verify\" *ngIf=\"otpRequest\">\n    <ion-item>\n      <ion-label position=\"stacked\">First Name</ion-label>\n      <ion-input [(ngModel)]=\"data.firstName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Last Name</ion-label>\n      <ion-input [(ngModel)]=\"data.lastName\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input [(ngModel)]=\"data.email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Health Pay (Mobile)</ion-label>\n      <ion-input [(ngModel)]=\"data.mobile\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Powered By</ion-label>\n      <ion-select [(ngModel)]=\"data.poweredBy\">\n        <ion-select-option *ngFor=\"let item of poweredBy\" [value]=\"item.id\">\n          {{item.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button color=\"success\" expand=\"block\" (click)=\"send_otp()\">Request OTP</ion-button>\n  </div>\n  <div class=\"verify\" *ngIf=\"otpForm\">\n    <ion-item>\n      <ion-label position=\"stacked\">Otp</ion-label>\n      <ion-input [(ngModel)]=\"otp\"></ion-input>\n    </ion-item>\n    <ion-button color=\"success\" (click)=\"confirm_otp()\">Confirm OTP</ion-button>\n  </div>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send-routing.module.ts":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send-routing.module.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: OtpSendPageRoutingModule */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmOtpSendOtpSendRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpSendPageRoutingModule", function () {
        return OtpSendPageRoutingModule;
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


      var _otp_send_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otp-send.page */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.ts");

      var routes = [{
        path: '',
        component: _otp_send_page__WEBPACK_IMPORTED_MODULE_3__["OtpSendPage"]
      }];

      var OtpSendPageRoutingModule = function OtpSendPageRoutingModule() {
        _classCallCheck(this, OtpSendPageRoutingModule);
      };

      OtpSendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpSendPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.module.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: OtpSendPageModule */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmOtpSendOtpSendModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpSendPageModule", function () {
        return OtpSendPageModule;
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


      var _otp_send_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otp-send-routing.module */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send-routing.module.ts");
      /* harmony import */


      var _otp_send_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otp-send.page */
      "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.ts");

      var OtpSendPageModule = function OtpSendPageModule() {
        _classCallCheck(this, OtpSendPageModule);
      };

      OtpSendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_send_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpSendPageRoutingModule"]],
        declarations: [_otp_send_page__WEBPACK_IMPORTED_MODULE_6__["OtpSendPage"]]
      })], OtpSendPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.scss":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.scss ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmOtpSendOtpSendPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2RvY3Rvci9kb2N0b3ItYm9va2luZy1kYXRlL2RvY3Rvci1ib29raW5nLWRhdGUtY29uZmlybS9vdHAtc2VuZC9vdHAtc2VuZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.ts ***!
      \********************************************************************************************************/

    /*! exports provided: OtpSendPage */

    /***/
    function srcAppPagesDoctorDoctorBookingDateDoctorBookingDateConfirmOtpSendOtpSendPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpSendPage", function () {
        return OtpSendPage;
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


      var src_app_Service_otp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Service/otp.service */
      "./src/app/Service/otp.service.ts");

      var OtpSendPage = /*#__PURE__*/function () {
        function OtpSendPage(router, otpService) {
          _classCallCheck(this, OtpSendPage);

          this.router = router;
          this.otpService = otpService;
          this.poweredBy = [];
          this.otpRequest = true;
          this.data = {
            'firstName': '',
            'lastName': '',
            'mobile': '',
            'poweredBy': '',
            'email': ''
          };
          this.doctorData = this.router.getCurrentNavigation().extras.state.doctorData;
          this.selectedSlot = this.router.getCurrentNavigation().extras.state.selectedSlot;
          this.selectedSlotLine = this.router.getCurrentNavigation().extras.state.selectedSlotLine;
          this.appointmentId = this.router.getCurrentNavigation().extras.state.appointmentId;
        }

        _createClass(OtpSendPage, [{
          key: "send_otp",
          value: function send_otp() {
            var _this = this;

            var data = {
              'healthpay_id': this.data.poweredBy,
              'firstname': this.data.firstName,
              'lastname': this.data.lastName,
              'email': this.data.email,
              'mobile': this.data.mobile,
              'uid': localStorage.getItem('uid')
            };
            this.otpService.sendOTPRequest(data).subscribe(function (res) {
              if (res.result.healthpay_uid) {
                _this.otpForm = true;
                _this.otpRequest = false;
              }
            });
          }
        }, {
          key: "confirm_otp",
          value: function confirm_otp() {
            var data = {
              'healthpay_id': this.data.poweredBy,
              'mobile': this.data.mobile,
              'otp': this.otp
            };
            this.otpService.confirmOTP(data).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "getPoweredBy",
          value: function getPoweredBy() {
            var _this2 = this;

            this.otpService.getPoweredBy().subscribe(function (res) {
              console.log(res);

              if (res.result.status == 'success') {
                _this2.poweredBy = res.result.healthpay;
              }
            });
          }
        }, {
          key: "getParnterDetails",
          value: function getParnterDetails() {
            var _this3 = this;

            this.otpService.getPartnerDetails(localStorage.getItem('uid')).subscribe(function (res) {
              console.log(res);

              if (res.result.status == 'success') {
                _this3.partner = res.result.partner;
                _this3.data.firstName = _this3.partner.firstName;
                _this3.data.lastName = _this3.partner.lastName;
                _this3.data.mobile = _this3.partner.mobile;
                _this3.data.email = _this3.partner.email;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPoweredBy();
            this.getParnterDetails();
          }
        }]);

        return OtpSendPage;
      }();

      OtpSendPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_Service_otp_service__WEBPACK_IMPORTED_MODULE_3__["OtpService"]
        }];
      };

      OtpSendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp-send',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otp-send.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otp-send.page.scss */
        "./src/app/Pages/doctor/doctor-booking-date/doctor-booking-date-confirm/otp-send/otp-send.page.scss"))["default"]]
      })], OtpSendPage);
      /***/
    },

    /***/
    "./src/app/Service/otp.service.ts":
    /*!****************************************!*\
      !*** ./src/app/Service/otp.service.ts ***!
      \****************************************/

    /*! exports provided: OtpService */

    /***/
    function srcAppServiceOtpServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpService", function () {
        return OtpService;
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


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data.service */
      "./src/app/Service/data.service.ts");

      var OtpService = /*#__PURE__*/function () {
        function OtpService(dataService) {
          _classCallCheck(this, OtpService);

          this.dataService = dataService;
        } // TODO: Get Powered By List API


        _createClass(OtpService, [{
          key: "getPoweredBy",
          value: function getPoweredBy() {
            return this.dataService.post('api/get_powered_by_list', {
              params: {}
            });
          } // TODO: Get Partner Details API

        }, {
          key: "getPartnerDetails",
          value: function getPartnerDetails(uid) {
            return this.dataService.post('api/get_partner_details/' + uid, {
              params: {}
            });
          } // TODO: Send OTP Request API

        }, {
          key: "sendOTPRequest",
          value: function sendOTPRequest(data) {
            return this.dataService.post('api/healthpay_login_user', {
              params: data
            });
          } // TODO: Confirm OTP

        }, {
          key: "confirmOTP",
          value: function confirmOTP(data) {
            return this.dataService.post('api/healthpay_auth_user', {
              params: data
            });
          }
        }]);

        return OtpService;
      }();

      OtpService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      OtpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], OtpService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otp-send-otp-send-module-es5.js.map