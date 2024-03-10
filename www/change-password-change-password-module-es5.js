(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthPageForgetPasswordVerificationPasswordCodeChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Change Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <form (submit)=\"submitChangePassword()\">\n            <ion-item>\n                <ion-label position=\"floating\">New Password</ion-label>\n                <ion-icon name=\"lock-open-outline\" slot=\"start\"></ion-icon>\n                <ion-icon (click)=\"newPassword()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n                <ion-input [type]=\"showNewPassword ? 'text' : 'password'\" placeholder=\"Enter Your Password\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Confirm Password</ion-label>\n                <ion-icon name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n                <ion-icon (click)=\"showConfirmPasswordFun()\" name=\"eye-outline\" slot=\"end\"></ion-icon>\n                <ion-input [type]=\"showConfirmPassword ? 'text' : 'password'\"\n                           placeholder=\"Confirm Your Password\"></ion-input>\n            </ion-item>\n            <br>\n            <ion-button expand=\"block\" color=\"success\" type=\"submit\">Confirm</ion-button>\n        </form>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: ChangePasswordPageRoutingModule */

    /***/
    function srcAppPagesAuthPageForgetPasswordVerificationPasswordCodeChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
        return ChangePasswordPageRoutingModule;
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


      var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts");

      var routes = [{
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
      }];

      var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
        _classCallCheck(this, ChangePasswordPageRoutingModule);
      };

      ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChangePasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.module.ts":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: ChangePasswordPageModule */

    /***/
    function srcAppPagesAuthPageForgetPasswordVerificationPasswordCodeChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
        return ChangePasswordPageModule;
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


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./change-password-routing.module */
      "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password-routing.module.ts");
      /* harmony import */


      var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./change-password.page */
      "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts");

      var ChangePasswordPageModule = function ChangePasswordPageModule() {
        _classCallCheck(this, ChangePasswordPageModule);
      };

      ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
      })], ChangePasswordPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthPageForgetPasswordVerificationPasswordCodeChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2F1dGgtcGFnZS9mb3JnZXQtcGFzc3dvcmQvdmVyaWZpY2F0aW9uLXBhc3N3b3JkLWNvZGUvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ChangePasswordPage */

    /***/
    function srcAppPagesAuthPageForgetPasswordVerificationPasswordCodeChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
        return ChangePasswordPage;
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

      var ChangePasswordPage = /*#__PURE__*/function () {
        function ChangePasswordPage(alertController, router) {
          _classCallCheck(this, ChangePasswordPage);

          this.alertController = alertController;
          this.router = router;
          this.showNewPassword = false;
          this.showConfirmPassword = false;
        }

        _createClass(ChangePasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "newPassword",
          value: function newPassword() {
            this.showNewPassword = !this.showNewPassword;
          }
        }, {
          key: "showConfirmPasswordFun",
          value: function showConfirmPasswordFun() {
            this.showConfirmPassword = !this.showConfirmPassword;
          }
        }, {
          key: "submitChangePassword",
          value: function submitChangePassword() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Password',
                        subHeader: 'Changed Successfully',
                        message: 'Stay Signed In With Your Account To Make Searching Easier',
                        buttons: [{
                          text: 'Sign In',
                          handler: function handler(blah) {
                            _this.router.navigate(['auth-page']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ChangePasswordPage;
      }();

      ChangePasswordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./change-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./change-password.page.scss */
        "./src/app/Pages/auth-page/forget-password/verification-password-code/change-password/change-password.page.scss"))["default"]]
      })], ChangePasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=change-password-change-password-module-es5.js.map