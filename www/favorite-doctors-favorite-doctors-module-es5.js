(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-doctors-favorite-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsMorePageFavoriteDoctorsFavoriteDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"success\" defaultHref=\"/home-page-tabs/more-page\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Favorite Doctors</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngFor=\"let doctor of favoriteDoctors\">\n        <app-card [doctorData]=\"doctor\" (favorite)=\"onFavoriteDoctor(doctor)\"\n                  (removeFavorite)=\"onRemoveFavoriteDoctor(doctor)\"></app-card>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors-routing.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors-routing.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: FavoriteDoctorsPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsMorePageFavoriteDoctorsFavoriteDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteDoctorsPageRoutingModule", function () {
        return FavoriteDoctorsPageRoutingModule;
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


      var _favorite_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorite-doctors.page */
      "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.ts");

      var routes = [{
        path: '',
        component: _favorite_doctors_page__WEBPACK_IMPORTED_MODULE_3__["FavoriteDoctorsPage"]
      }];

      var FavoriteDoctorsPageRoutingModule = function FavoriteDoctorsPageRoutingModule() {
        _classCallCheck(this, FavoriteDoctorsPageRoutingModule);
      };

      FavoriteDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavoriteDoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: FavoriteDoctorsPageModule */

    /***/
    function srcAppPagesHomeTabsMorePageFavoriteDoctorsFavoriteDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteDoctorsPageModule", function () {
        return FavoriteDoctorsPageModule;
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


      var _favorite_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favorite-doctors-routing.module */
      "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors-routing.module.ts");
      /* harmony import */


      var _favorite_doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favorite-doctors.page */
      "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.ts");
      /* harmony import */


      var _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../SharedComponents/shared-components.module */
      "./src/app/SharedComponents/shared-components.module.ts");

      var FavoriteDoctorsPageModule = function FavoriteDoctorsPageModule() {
        _classCallCheck(this, FavoriteDoctorsPageModule);
      };

      FavoriteDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favorite_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoriteDoctorsPageRoutingModule"], _SharedComponents_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"]],
        declarations: [_favorite_doctors_page__WEBPACK_IMPORTED_MODULE_6__["FavoriteDoctorsPage"]]
      })], FavoriteDoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsMorePageFavoriteDoctorsFavoriteDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9tb3JlLXBhZ2UvZmF2b3JpdGUtZG9jdG9ycy9mYXZvcml0ZS1kb2N0b3JzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.ts ***!
      \*************************************************************************************/

    /*! exports provided: FavoriteDoctorsPage */

    /***/
    function srcAppPagesHomeTabsMorePageFavoriteDoctorsFavoriteDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteDoctorsPage", function () {
        return FavoriteDoctorsPage;
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


      var _Service_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../Service/favorite.service */
      "./src/app/Service/favorite.service.ts");
      /* harmony import */


      var _Service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../Service/search.service */
      "./src/app/Service/search.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var FavoriteDoctorsPage = /*#__PURE__*/function () {
        function FavoriteDoctorsPage(searchService, favoritesService, toastController) {
          _classCallCheck(this, FavoriteDoctorsPage);

          this.searchService = searchService;
          this.favoritesService = favoritesService;
          this.toastController = toastController;
          this.favoriteDoctors = [];
        }

        _createClass(FavoriteDoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllFavoriteList();
          }
        }, {
          key: "getAllFavoriteList",
          value: function getAllFavoriteList() {
            this.searchService.searchQuery = {};
            this.searchService.postSearchQuery();
            this.favoriteDoctors = this.searchService.getFavoriteDoctorsFiltered().filter(function (c) {
              return c.isFavorite === true;
            });
          }
        }, {
          key: "onFavoriteDoctor",
          value: function onFavoriteDoctor(doctor) {
            var _this = this;

            this.favoritesService.postDoctorAsFavorite(doctor.doctorId).subscribe(function (res) {}, function (error) {}, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var toast;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return this.toastController.create({
                          message: "Doctor ".concat(doctor.name, " Has Been Added To Favorite"),
                          position: 'top',
                          duration: 2000
                        });

                      case 2:
                        toast = _context.sent;
                        _context.next = 5;
                        return toast.present();

                      case 5:
                        this.getAllFavoriteList();

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "onRemoveFavoriteDoctor",
          value: function onRemoveFavoriteDoctor(doctor) {
            var _this2 = this;

            this.favoritesService.removeDoctorAsFavorite(doctor.doctorId).subscribe(function (res) {
              console.log(res.result);
            }, function (error) {}, function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var toast;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return this.toastController.create({
                          message: "Doctor ".concat(doctor.name, " Has Been Removed From Favorite"),
                          position: 'top',
                          duration: 2000
                        });

                      case 2:
                        toast = _context2.sent;
                        _context2.next = 5;
                        return toast.present();

                      case 5:
                        this.getAllFavoriteList();

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }]);

        return FavoriteDoctorsPage;
      }();

      FavoriteDoctorsPage.ctorParameters = function () {
        return [{
          type: _Service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _Service_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }];
      };

      FavoriteDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favorite-doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favorite-doctors.page.scss */
        "./src/app/Pages/home-tabs/more-page/favorite-doctors/favorite-doctors.page.scss"))["default"]]
      })], FavoriteDoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favorite-doctors-favorite-doctors-module-es5.js.map