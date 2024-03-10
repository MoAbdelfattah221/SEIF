(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-splash-splash-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/splash/splash.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/splash/splash.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSplashSplashPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <!--    <div class=\"container ion-text-center\">-->\n    <!--        <img src=\"assets/Images/mix%20logo.png\" alt=\"\">-->\n    <!--    </div>-->\n    <ion-slides pager=\"false\" #slides>\n\n        <ion-slide>\n            <div class=\"container ion-text-center\">\n                <img src=\"assets/Images/mix%20logo.png\" alt=\"Logo\">\n            </div>\n\n            <ion-button fill=\"clear\" color=\"success\" class=\"ion-text-right\" (click)=\"slides.slideTo(1)\">\n                Continue\n            </ion-button>\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"assets/Images/Group 768.png\" alt=\"Logo\">\n            <h2>Find your own doctor</h2>\n            <p>You can search for the doctor you want in the appropriate area.</p>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-button fill=\"clear\" color=\"dark\" class=\"ion-text-right\" (click)=\"closeSplashScreen()\">\n                            Skip\n                        </ion-button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-button color=\"success\" fill=\"clear\" (click)=\"slides.slideTo(2)\">\n                            Next\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"assets/Images/Map light.png\" alt=\"Logo\">\n            <h2>From the Nearest</h2>\n            <p>Find the best services through location based services</p>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-button fill=\"clear\" color=\"dark\" class=\"ion-text-right\" (click)=\"closeSplashScreen()\">\n                            Skip\n                        </ion-button>\n                    </ion-col>\n                    <ion-col>\n                        <ion-button fill=\"clear\" class=\"ion-text-right\" color=\"success\" (click)=\"slides.slideTo(3)\">\n                            Next\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"assets/Images/Group 769.png\" alt=\"Logo\">\n            <h2>Instant Notifications?</h2>\n            <p>keeps you constantly updated on your appointments</p>\n            <div class=\"ion-padding\">\n                <ion-button expand=\"block\" color=\"success\" (click)=\"closeSplashScreen()\">Get Started</ion-button>\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/splash/splash-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/splash/splash-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SplashPageRoutingModule */

    /***/
    function srcAppPagesSplashSplashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
        return SplashPageRoutingModule;
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


      var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/Pages/splash/splash.page.ts");

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
      }];

      var SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SplashPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/splash/splash.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/Pages/splash/splash.module.ts ***!
      \***********************************************/

    /*! exports provided: SplashPageModule */

    /***/
    function srcAppPagesSplashSplashModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
        return SplashPageModule;
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


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./splash-routing.module */
      "./src/app/Pages/splash/splash-routing.module.ts");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./splash.page */
      "./src/app/Pages/splash/splash.page.ts");

      var SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
      })], SplashPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/splash/splash.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/Pages/splash/splash.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSplashSplashPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.container img {\n  width: 200px;\n  margin-top: 60%;\n}\nion-slides {\n  height: 100%;\n}\n.swiper-slide {\n  display: block;\n}\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\nb {\n  font-weight: 500;\n}\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJQTtFQUNFLGNBQUE7QUFERjtBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQURGO0FBSUE7RUFDRSxxQ0FBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvc3BsYXNoL3NwbGFzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luLXRvcDogNjAlO1xuICB9XG5cbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgbWFyZ2luLXRvcDogMi44cmVtO1xufVxuXG4uc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbjogNjBweCAwIDQwcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjAwLCAjNjA2NDZiKTtcbn1cblxucCBiIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/splash/splash.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/Pages/splash/splash.page.ts ***!
      \*********************************************/

    /*! exports provided: SplashPage */

    /***/
    function srcAppPagesSplashSplashPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPage", function () {
        return SplashPage;
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

      var SplashPage = /*#__PURE__*/function () {
        // @ViewChild(IonSlides) slides: IonSlides;
        function SplashPage(router) {
          _classCallCheck(this, SplashPage);

          this.router = router;
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // onClickSlide(index) {
          //     console.log(index);
          //     this.slides.slideTo(index);
          // }

        }, {
          key: "closeSplashScreen",
          value: function closeSplashScreen() {
            this.router.navigate(['/auth-page']);
            localStorage.setItem('splash', 'false');
          }
        }]);

        return SplashPage;
      }();

      SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./splash.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/splash/splash.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./splash.page.scss */
        "./src/app/Pages/splash/splash.page.scss"))["default"]]
      })], SplashPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-splash-splash-module-es5.js.map