(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-registration-confirm-registration-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthPageRegistrationPageConfirmRegistrationConfirmRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"auth-page/registration-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <div class=\"container ion-text-center\">\n            <img src=\"assets/Images/verification.png\" alt=\"Logo\">\n            <p>   Please Choose Email Or Phone Number To Send Verification Code To Continue Registration.</p>\n        </div>\n\n        <br>\n        <form (submit)=\"onSubmitConfirmRegistration()\">\n            <ion-list>\n                <ion-radio-group value=\"biff\">\n                    <ion-item>\n                        <ion-label>Phone Number</ion-label>\n                        <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Email Address</ion-label>\n                        <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n                    </ion-item>\n                </ion-radio-group>\n            </ion-list>\n            <br>\n            <br>\n            <ion-button expand=\"block\" color=\"success\" type=\"submit\">Send</ion-button>\n        </form>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration-routing.module.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration-routing.module.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: ConfirmRegistrationPageRoutingModule */

    /***/
    function srcAppPagesAuthPageRegistrationPageConfirmRegistrationConfirmRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationPageRoutingModule", function () {
        return ConfirmRegistrationPageRoutingModule;
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


      var _confirm_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-registration.page */
      "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.ts");

      var routes = [{
        path: '',
        component: _confirm_registration_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmRegistrationPage"]
      }, {
        path: 'verification-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | verification-code-verification-code-module */
          "verification-code-verification-code-module").then(__webpack_require__.bind(null,
          /*! ./verification-code/verification-code.module */
          "./src/app/Pages/auth-page/registration-page/confirm-registration/verification-code/verification-code.module.ts")).then(function (m) {
            return m.VerificationCodePageModule;
          });
        }
      }];

      var ConfirmRegistrationPageRoutingModule = function ConfirmRegistrationPageRoutingModule() {
        _classCallCheck(this, ConfirmRegistrationPageRoutingModule);
      };

      ConfirmRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmRegistrationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.module.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ConfirmRegistrationPageModule */

    /***/
    function srcAppPagesAuthPageRegistrationPageConfirmRegistrationConfirmRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationPageModule", function () {
        return ConfirmRegistrationPageModule;
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


      var _confirm_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-registration-routing.module */
      "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration-routing.module.ts");
      /* harmony import */


      var _confirm_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-registration.page */
      "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.ts");

      var ConfirmRegistrationPageModule = function ConfirmRegistrationPageModule() {
        _classCallCheck(this, ConfirmRegistrationPageModule);
      };

      ConfirmRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmRegistrationPageRoutingModule"]],
        declarations: [_confirm_registration_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmRegistrationPage"]]
      })], ConfirmRegistrationPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthPageRegistrationPageConfirmRegistrationConfirmRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container img {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXV0aC1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlL2NvbmZpcm0tcmVnaXN0cmF0aW9uL2NvbmZpcm0tcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9yZWdpc3RyYXRpb24tcGFnZS9jb25maXJtLXJlZ2lzdHJhdGlvbi9jb25maXJtLXJlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMCU7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ConfirmRegistrationPage */

    /***/
    function srcAppPagesAuthPageRegistrationPageConfirmRegistrationConfirmRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmRegistrationPage", function () {
        return ConfirmRegistrationPage;
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

      var ConfirmRegistrationPage = /*#__PURE__*/function () {
        function ConfirmRegistrationPage(router) {
          _classCallCheck(this, ConfirmRegistrationPage);

          this.router = router;
        }

        _createClass(ConfirmRegistrationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmitConfirmRegistration",
          value: function onSubmitConfirmRegistration() {
            this.router.navigate(['auth-page', 'registration-page', 'confirm-registration', 'verification-code']);
          }
        }]);

        return ConfirmRegistrationPage;
      }();

      ConfirmRegistrationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ConfirmRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./confirm-registration.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./confirm-registration.page.scss */
        "./src/app/Pages/auth-page/registration-page/confirm-registration/confirm-registration.page.scss"))["default"]]
      })], ConfirmRegistrationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=confirm-registration-confirm-registration-module-es5.js.map