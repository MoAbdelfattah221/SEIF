(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/settings/settings.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/settings/settings.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsMorePageSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"success\" defaultHref=\"home-page-tabs/more-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Settings</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-card>\n        <!--        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\" class=\"ion-margin-top\">-->\n        <ion-card-header>\n            <ion-card-subtitle>Profile Settings</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <form #editProfile=\"ngForm\" (submit)=\"onSubmit()\">\n                <ion-item>\n                    <ion-label position=\"floating\">Name</ion-label>\n                    <ion-input name=\"name\" [(ngModel)]=\"userService.userEditProfile.name\" required\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">\n                        Email\n                    </ion-label>\n                    <ion-input name=\"email\" [(ngModel)]=\"userService.userEditProfile.email\" #email=\"ngModel\" ngvemail\n                               required\n                               type=\"email\"></ion-input>\n\n                    <ion-item *ngIf=\"email.errors?.email\">\n                        <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n                        <ion-label color=\"danger\">Must Be An Email.</ion-label>\n                    </ion-item>\n                    <!--                    <ion-text color=\"danger\" *ngIf=\"email.errors?.email\">-->\n                    <!--                        <h6>-->\n                    <!--                            <ion-icon name=\"alert-circle-outline\"></ion-icon>-->\n                    <!--                            Must Be An Email.-->\n                    <!--                        </h6>-->\n                    <!--                    </ion-text>-->\n\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">\n                        Address\n                    </ion-label>\n                    <ion-input name=\"street\" [(ngModel)]=\"userService.userEditProfile.street\" required\n                               type=\"text\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">\n                        Phone\n                    </ion-label>\n                    <ion-input name=\"phone\" [(ngModel)]=\"userService.userEditProfile.phone\" required\n                               #phone=\"ngModel\"\n                               [pattern]=\"'^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\\\s\\\\./0-9]*$'\"\n                               type=\"text\"></ion-input>\n                    <ion-item *ngIf=\"phone.errors?.pattern\">\n                        <ion-icon color=\"danger\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\n                        <ion-label color=\"danger\">It Must Be A Number.</ion-label>\n                    </ion-item>\n                </ion-item>\n                <br>\n                <ion-button expand=\"full\" [disabled]=\"!editProfile.valid\" color=\"success\" type=\"submit\">Save\n                </ion-button>\n\n            </form>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/settings/settings-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/settings/settings-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsMorePageSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/Pages/home-tabs/more-page/settings/settings.page.ts");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/settings/settings.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/settings/settings.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function srcAppPagesHomeTabsMorePageSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "./src/app/Pages/home-tabs/more-page/settings/settings-routing.module.ts");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "./src/app/Pages/home-tabs/more-page/settings/settings.page.ts");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-custom-validators */
      "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_7__["CustomFormsModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/settings/settings.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/settings/settings.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsMorePageSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL21vcmUtcGFnZS9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9ob21lLXRhYnMvbW9yZS1wYWdlL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/settings/settings.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/settings/settings.page.ts ***!
      \*********************************************************************/

    /*! exports provided: SettingsPage */

    /***/
    function srcAppPagesHomeTabsMorePageSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
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


      var _Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../Service/user.service */
      "./src/app/Service/user.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(userService, toastController) {
          _classCallCheck(this, SettingsPage);

          this.userService = userService;
          this.toastController = toastController;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserDetail();
          }
        }, {
          key: "getUserDetail",
          value: function getUserDetail() {
            var _this = this;

            this.userService.getUserData().subscribe(function (res) {
              console.log(res);
              _this.userProfileData = res.result.data[0];

              if (_this.userProfileData) {
                _this.userService.userEditProfile = _this.userProfileData;
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.userService.editProfile().subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(res);
                        _context.next = 3;
                        return this.toastController.create({
                          message: 'Your Profile Updated Successfully',
                          duration: 2000
                        });

                      case 3:
                        toast = _context.sent;
                        _context.next = 6;
                        return toast.present();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./settings.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/settings/settings.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./settings.page.scss */
        "./src/app/Pages/home-tabs/more-page/settings/settings.page.scss"))["default"]]
      })], SettingsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map