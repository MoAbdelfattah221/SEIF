(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-page-registration-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/registration-page.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/registration-page.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthPageRegistrationPageRegistrationPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"auth-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <form (submit)=\"registrationUser()\" #regFormData=\"ngForm\">\n            <ion-item>\n                <ion-label position=\"floating\">Full Name</ion-label>\n                <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n                <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"authService.regForm.name\" required\n                           placeholder=\"\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Phone Number</ion-label>\n                <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n                <ion-input type=\"text\" name=\"mobile\" [(ngModel)]=\"authService.regForm.mobile\" required\n                           [pattern]=\"'^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\\\s\\\\./0-9]*$'\"\n                           placeholder=\"\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n                <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"authService.regForm.email\" required ngvemail\n                           placeholder=\"\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\n                <ion-input type=\"text\" name=\"password\" [(ngModel)]=\"authService.regForm.password\" required\n                           placeholder=\"\"></ion-input>\n            </ion-item>\n            <!--            <ion-item>-->\n            <!--                <ion-label position=\"floating\">Password</ion-label>-->\n            <!--                <ion-icon name=\"lock-open-outline\" slot=\"start\"></ion-icon>-->\n            <!--                <ion-input type=\"password\" placeholder=\"Enter Your Password\"></ion-input>-->\n            <!--            </ion-item>-->\n            <!--            <ion-item>-->\n            <!--                <ion-label position=\"floating\">Confirm Password</ion-label>-->\n            <!--                <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>-->\n            <!--                <ion-input type=\"password\" placeholder=\"Confirm Your Password\"></ion-input>-->\n            <!--            </ion-item>-->\n            <!--            <ion-item>-->\n            <!--                <ion-label position=\"floating\">Date</ion-label>-->\n            <!--                <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>-->\n            <!--                <ion-datetime placeholder=\"Select Date\"></ion-datetime>-->\n            <!--            </ion-item>-->\n            <br>\n            <ion-button expand=\"block\" color=\"success\" [disabled]=\"!regFormData.valid\" type=\"submit\">Register Now\n            </ion-button>\n        </form>\n        <br>\n        <p class=\"ion-text-center\">Do You Have Already An Account?\n            <ion-router-link color=\"success\" class=\"underline\" routerLink=\"/auth-page\">Sign In?</ion-router-link>\n        </p>\n        <app-error-card [errorMessages]=\"errorMessages\"></app-error-card>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/error-card/error-card.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/error-card/error-card.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsErrorCardErrorCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngFor=\"let error of errorMessages\" class=\"animate__animated animate__zoomIn\">\n    <ion-item>\n        <ion-icon name=\"warning-outline\" slot=\"start\" color=\"warning\"\n                  class=\"animate__animated animate__pulse animate__infinite\"></ion-icon>\n        <ion-label color=\"danger\">{{error}}</ion-label>\n    </ion-item>\n</ion-card>\n";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/registration-page-routing.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/registration-page-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: RegistrationPagePageRoutingModule */

    /***/
    function srcAppPagesAuthPageRegistrationPageRegistrationPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPagePageRoutingModule", function () {
        return RegistrationPagePageRoutingModule;
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


      var _registration_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./registration-page.page */
      "./src/app/Pages/auth-page/registration-page/registration-page.page.ts");

      var routes = [{
        path: '',
        component: _registration_page_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPagePage"]
      }, {
        path: 'confirm-registration',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-registration-confirm-registration-module */
          "confirm-registration-confirm-registration-module").then(__webpack_require__.bind(null,
          /*! ./confirm-registration/confirm-registration.module */
          "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.module.ts")).then(function (m) {
            return m.ConfirmRegistrationPageModule;
          });
        }
      }];

      var RegistrationPagePageRoutingModule = function RegistrationPagePageRoutingModule() {
        _classCallCheck(this, RegistrationPagePageRoutingModule);
      };

      RegistrationPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegistrationPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/registration-page.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/registration-page.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: RegistrationPagePageModule */

    /***/
    function srcAppPagesAuthPageRegistrationPageRegistrationPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPagePageModule", function () {
        return RegistrationPagePageModule;
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


      var _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./registration-page-routing.module */
      "./src/app/Pages/auth-page/registration-page/registration-page-routing.module.ts");
      /* harmony import */


      var _registration_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./registration-page.page */
      "./src/app/Pages/auth-page/registration-page/registration-page.page.ts");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-custom-validators */
      "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js");
      /* harmony import */


      var _SharedComponents_error_card_error_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../SharedComponents/error-card/error-card.component */
      "./src/app/SharedComponents/error-card/error-card.component.ts");

      var RegistrationPagePageModule = function RegistrationPagePageModule() {
        _classCallCheck(this, RegistrationPagePageModule);
      };

      RegistrationPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPagePageRoutingModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"]],
        declarations: [_registration_page_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPagePage"], _SharedComponents_error_card_error_card_component__WEBPACK_IMPORTED_MODULE_8__["ErrorCardComponent"]]
      })], RegistrationPagePageModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/registration-page.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/registration-page.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthPageRegistrationPageRegistrationPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tcGFnZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/registration-page.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/registration-page.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: RegistrationPagePage */

    /***/
    function srcAppPagesAuthPageRegistrationPageRegistrationPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrationPagePage", function () {
        return RegistrationPagePage;
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


      var _Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../Service/auth.service */
      "./src/app/Service/auth.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RegistrationPagePage = /*#__PURE__*/function () {
        function RegistrationPagePage(router, authService, toastController) {
          _classCallCheck(this, RegistrationPagePage);

          this.router = router;
          this.authService = authService;
          this.toastController = toastController;
        }

        _createClass(RegistrationPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registrationUser",
          value: function registrationUser() {
            var _this = this;

            this.errorMessages = [];
            this.authService.register().subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(res);

                        if (!res.result) {
                          _context.next = 12;
                          break;
                        }

                        _context.next = 4;
                        return this.toastController.create({
                          message: "Registered Successfully",
                          position: 'top',
                          color: 'success',
                          duration: 2000
                        });

                      case 4:
                        toast = _context.sent;
                        _context.next = 7;
                        return toast.present();

                      case 7:
                        _context.next = 9;
                        return this.router.navigate(['auth-page']);

                      case 9:
                        this.authService.regForm = {};
                        _context.next = 13;
                        break;

                      case 12:
                        if (res.error) {
                          this.errorMessages = ['This Email Is Registered Before'];
                          console.log(this.errorMessages);
                        }

                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return RegistrationPagePage;
      }();

      RegistrationPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      RegistrationPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./registration-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/registration-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./registration-page.page.scss */
        "./src/app/Pages/auth-page/registration-page/registration-page.page.scss"))["default"]]
      })], RegistrationPagePage);
      /***/
    },

    /***/
    "./src/app/SharedComponents/error-card/error-card.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/SharedComponents/error-card/error-card.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedComponentsErrorCardErrorCardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NoYXJlZENvbXBvbmVudHMvZXJyb3ItY2FyZC9lcnJvci1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/SharedComponents/error-card/error-card.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/SharedComponents/error-card/error-card.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorCardComponent */

    /***/
    function srcAppSharedComponentsErrorCardErrorCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorCardComponent", function () {
        return ErrorCardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ErrorCardComponent = /*#__PURE__*/function () {
        function ErrorCardComponent() {
          _classCallCheck(this, ErrorCardComponent);
        }

        _createClass(ErrorCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorCardComponent;
      }();

      ErrorCardComponent.ctorParameters = function () {
        return [];
      };

      ErrorCardComponent.propDecorators = {
        errorMessages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ErrorCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./error-card.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/SharedComponents/error-card/error-card.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./error-card.component.scss */
        "./src/app/SharedComponents/error-card/error-card.component.scss"))["default"]]
      })], ErrorCardComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=registration-page-registration-page-module-es5.js.map