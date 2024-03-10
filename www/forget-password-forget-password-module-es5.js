(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forget-password-forget-password-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/forget-password.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/forget-password.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthPageForgetPasswordForgetPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"auth-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Forget Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n        <div class=\"ion-padding\">\n            <div class=\"container ion-text-center\">\n                <img src=\"assets/Images/verification.png\" alt=\"Logo\">\n                <p> Please Choose Email Or Phone Number To Receive The Instructions To Reset Your Password.</p>\n            </div>\n            <br>\n            <form (submit)=\"forgetUserPassword()\">\n                <ion-list>\n                    <ion-radio-group value=\"biff\">\n                        <ion-item>\n                            <ion-label position=\"floating\">Phone Number</ion-label>\n                            <ion-input type=\"text\" placeholder=\"Enter Your Phone Number\"></ion-input>\n                            <ion-radio slot=\"start\" value=\"biff\">\n                            </ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label position=\"floating\">Email Address</ion-label>\n                            <ion-radio slot=\"start\" value=\"griff\">\n                            </ion-radio>\n                            <ion-input type=\"text\" placeholder=\"Enter Your Email\"></ion-input>\n                        </ion-item>\n                    </ion-radio-group>\n                </ion-list>\n                <br>\n                <br>\n                <ion-button expand=\"block\" color=\"success\" type=\"submit\">Send</ion-button>\n            </form>\n        </div>\n    </ion-content>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/forget-password-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/forget-password-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: ForgetPasswordPageRoutingModule */

    /***/
    function srcAppPagesAuthPageForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageRoutingModule", function () {
        return ForgetPasswordPageRoutingModule;
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


      var _forget_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forget-password.page */
      "./src/app/Pages/auth-page/forget-password/forget-password.page.ts");

      var routes = [{
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgetPasswordPage"]
      }, {
        path: 'verification-password-code',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | verification-password-code-verification-password-code-module */
          "verification-password-code-verification-password-code-module").then(__webpack_require__.bind(null,
          /*! ./verification-password-code/verification-password-code.module */
          "./src/app/Pages/auth-page/forget-password/verification-password-code/verification-password-code.module.ts")).then(function (m) {
            return m.VerificationPasswordCodePageModule;
          });
        }
      }];

      var ForgetPasswordPageRoutingModule = function ForgetPasswordPageRoutingModule() {
        _classCallCheck(this, ForgetPasswordPageRoutingModule);
      };

      ForgetPasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgetPasswordPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/forget-password.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/forget-password.module.ts ***!
      \***************************************************************************/

    /*! exports provided: ForgetPasswordPageModule */

    /***/
    function srcAppPagesAuthPageForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function () {
        return ForgetPasswordPageModule;
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


      var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forget-password-routing.module */
      "./src/app/Pages/auth-page/forget-password/forget-password-routing.module.ts");
      /* harmony import */


      var _forget_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forget-password.page */
      "./src/app/Pages/auth-page/forget-password/forget-password.page.ts");

      var ForgetPasswordPageModule = function ForgetPasswordPageModule() {
        _classCallCheck(this, ForgetPasswordPageModule);
      };

      ForgetPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetPasswordPageRoutingModule"]],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordPage"]]
      })], ForgetPasswordPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/forget-password.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/forget-password.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAuthPageForgetPasswordForgetPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container img {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYXV0aC1wYWdlL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYXV0aC1wYWdlL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjAlO1xuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/auth-page/forget-password/forget-password.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/Pages/auth-page/forget-password/forget-password.page.ts ***!
      \*************************************************************************/

    /*! exports provided: ForgetPasswordPage */

    /***/
    function srcAppPagesAuthPageForgetPasswordForgetPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordPage", function () {
        return ForgetPasswordPage;
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

      var ForgetPasswordPage = /*#__PURE__*/function () {
        function ForgetPasswordPage(router) {
          _classCallCheck(this, ForgetPasswordPage);

          this.router = router;
        }

        _createClass(ForgetPasswordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "forgetUserPassword",
          value: function forgetUserPassword() {
            this.router.navigate(['auth-page', 'forget-password', 'verification-password-code']);
          }
        }]);

        return ForgetPasswordPage;
      }();

      ForgetPasswordPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      ForgetPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forget-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forget-password.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/auth-page/forget-password/forget-password.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forget-password.page.scss */
        "./src/app/Pages/auth-page/forget-password/forget-password.page.scss"))["default"]]
      })], ForgetPasswordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forget-password-forget-password-module-es5.js.map