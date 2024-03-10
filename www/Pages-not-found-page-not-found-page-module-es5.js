(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-not-found-page-not-found-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/not-found-page/not-found-page.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/not-found-page/not-found-page.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNotFoundPageNotFoundPagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Page Not Found</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding ion-text-center\">\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Sorry</ion-card-subtitle>\n                <ion-card-title>Page Not Found</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                <ion-router-link color=\"success\" class=\"underline\" routerLink=\"/home-page-tabs/home-page\">\n                    Go To Home\n                </ion-router-link>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/not-found-page/not-found-page-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/Pages/not-found-page/not-found-page-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: NotFoundPagePageRoutingModule */

    /***/
    function srcAppPagesNotFoundPageNotFoundPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPagePageRoutingModule", function () {
        return NotFoundPagePageRoutingModule;
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


      var _not_found_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./not-found-page.page */
      "./src/app/Pages/not-found-page/not-found-page.page.ts");

      var routes = [{
        path: '',
        component: _not_found_page_page__WEBPACK_IMPORTED_MODULE_3__["NotFoundPagePage"]
      }];

      var NotFoundPagePageRoutingModule = function NotFoundPagePageRoutingModule() {
        _classCallCheck(this, NotFoundPagePageRoutingModule);
      };

      NotFoundPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotFoundPagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/not-found-page/not-found-page.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/not-found-page/not-found-page.module.ts ***!
      \***************************************************************/

    /*! exports provided: NotFoundPagePageModule */

    /***/
    function srcAppPagesNotFoundPageNotFoundPageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPagePageModule", function () {
        return NotFoundPagePageModule;
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


      var _not_found_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not-found-page-routing.module */
      "./src/app/Pages/not-found-page/not-found-page-routing.module.ts");
      /* harmony import */


      var _not_found_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./not-found-page.page */
      "./src/app/Pages/not-found-page/not-found-page.page.ts");

      var NotFoundPagePageModule = function NotFoundPagePageModule() {
        _classCallCheck(this, NotFoundPagePageModule);
      };

      NotFoundPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _not_found_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundPagePageRoutingModule"]],
        declarations: [_not_found_page_page__WEBPACK_IMPORTED_MODULE_6__["NotFoundPagePage"]]
      })], NotFoundPagePageModule);
      /***/
    },

    /***/
    "./src/app/Pages/not-found-page/not-found-page.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/not-found-page/not-found-page.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNotFoundPageNotFoundPagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL25vdC1mb3VuZC1wYWdlL25vdC1mb3VuZC1wYWdlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/Pages/not-found-page/not-found-page.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/Pages/not-found-page/not-found-page.page.ts ***!
      \*************************************************************/

    /*! exports provided: NotFoundPagePage */

    /***/
    function srcAppPagesNotFoundPageNotFoundPagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPagePage", function () {
        return NotFoundPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NotFoundPagePage = /*#__PURE__*/function () {
        function NotFoundPagePage() {
          _classCallCheck(this, NotFoundPagePage);
        }

        _createClass(NotFoundPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundPagePage;
      }();

      NotFoundPagePage.ctorParameters = function () {
        return [];
      };

      NotFoundPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./not-found-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/not-found-page/not-found-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./not-found-page.page.scss */
        "./src/app/Pages/not-found-page/not-found-page.page.scss"))["default"]]
      })], NotFoundPagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-not-found-page-not-found-page-module-es5.js.map