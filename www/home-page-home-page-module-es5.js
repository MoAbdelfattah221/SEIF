(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-page/home-page.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-page/home-page.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsHomePageHomePagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <!--    Home Header-->\n    <br>\n    <div class=\"home-header\">\n        <ion-grid>\n            <ion-row>\n                <ion-col class=\"ion-text-center\">\n                    <h3 class=\"ion-no-margin\">EL SEIF HEALTH CARE</h3>\n                    <p class=\"ion-no-margin\">Your Safety .. is Our Responsibility</p>\n                </ion-col>\n                <ion-col size=\"3\" class=\"ion-text-right ion-padding-top sign-in-link\" *ngIf=\"!showLogged\">\n                    <a routerLink=\"/auth-page\">Sign in\n                        <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n                    </a>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <!--    Home Recommended Slider-->\n    <div class=\"home-recommended-slider\">\n        <div class=\"ion-padding\">\n            <h3 class=\"section-title\">Recommended <span class=\"see-all\"><a routerLink=\"/home-page-tabs/search-page/\">See\n                        All</a></span>\n            </h3>\n            <ion-slides [options]=\"slideOpts\" *ngIf=\"searchService.searchDoctors\">\n                <ion-slide *ngFor=\"let doctor of searchService.searchDoctors\">\n                    <ion-card class=\"card-doctor\">\n                        <div (click)=\"onNavigate(doctor)\">\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col size=\"3\" class=\"ion-no-padding\">\n                                        <img style=\"border-radius: 50%; height: 60px; width: 60px\"\n                                            [src]=\"'data:image/png;base64,' + doctor.image_1920\" [alt]=\"doctor.name\">\n                                    </ion-col>\n                                    <ion-col size=\"9\" class=\"ion-no-padding\">\n                                        <div class=\"doctor-details\">\n                                            <ion-label class=\"card-doctor-name\">{{doctor.name}}</ion-label>\n                                            <ion-card-subtitle>{{doctor.specialty[1]}}</ion-card-subtitle>\n                                        </div>\n                                    </ion-col>\n                                    <ion-col size=\"12\" class=\"ion-no-padding\">\n                                        <div class=\"stars\">\n                                            <ionic-rating-component #rating\n                                                                    activeIcon=\"star\"\n                                                                    defaultIcon=\"star-outline\"\n                                                                    activeColor=\"#e0bb2e\"\n                                                                    defaultColor=\"#aaaaaa\"\n                                                                    readonly=\"true\"\n                                                                    rating=\"{{doctor.rate_overall}}\"\n                                                                    fontSize=\"15px\"\n                                            >\n                                            </ionic-rating-component>\n                                            ({{doctor.count_rate}} Rating From Visitors)\n                                        </div>\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row class=\"meta-details\">\n                                    <ion-col size=\"6\" class=\"ion-no-padding ion-text-left\">\n                                        <ion-icon name=\"location-outline\" color=\"success\"></ion-icon>\n                                            {{doctor.state_id[1]}}\n                                            <!--                <ion-text color=\"success\">({{drLocationDistance}})</ion-text>-->\n                                    </ion-col>\n                                    <ion-col size=\"6\" class=\"ion-no-padding ion-text-right\">\n                                        <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon>\n                                            Fees\n                                            <span color=\"success\">({{doctor.consul_fee}})</span>\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </div>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n            <ion-card *ngIf=\"!searchService.searchDoctors\" class=\"recommend-card\" style=\"width: 90%\">\n                <ion-card-header>\n                    <!-- <ion-img style=\"height: 200px; width: 100%\"\n                             [src]=\"'data:image/png;base64,' + doctor.image_1920\"></ion-img> -->\n                    <ion-skeleton-text animated style=\"height: 200px;\"></ion-skeleton-text>\n\n                </ion-card-header>\n                <ion-card-content>\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col size=\"6\" class=\"ion-text-left\">\n                                <ion-skeleton-text animated></ion-skeleton-text>\n\n                                <ion-skeleton-text animated></ion-skeleton-text>\n\n                            </ion-col>\n                            <ion-col size=\"6\" class=\"ion-text-right\">\n                                <ion-skeleton-text animated></ion-skeleton-text>\n\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-card-content>\n                <div class=\"card-footer\">\n                    <p>\n                        <ion-icon name=\"navigate-circle-outline\"></ion-icon>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </p>\n                </div>\n            </ion-card>\n        </div>\n    </div>\n    <!--    Home Main Slider-->\n    <div class=\"home-slider\" *ngIf=\"searchService.favoriteDoctorsFiltered.length > 0\">\n\n        <div class=\"ion-padding\">\n            <h3 class=\"section-title\">My Favorites <span class=\"see-all\"><a\n                    routerLink=\"/home-page-tabs/more-page/favorite-doctors\">See All</a></span>\n            </h3>\n            <ion-slides *ngIf=\"searchService.searchDoctors\" [options]=\"slideOpts\">\n                <ion-slide *ngFor=\"let doctor of searchService.getDoctorFavorites()\">\n                    <div class=\"slide-image\" (click)=\"onNavigate(doctor)\">\n                        <ion-img [src]=\"'data:image/png;base64,' + doctor.image_1920\"></ion-img>\n                        <div class=\"slide-description\">\n                            <h3>{{doctor.name}}</h3>\n                            <p>\n                                <ion-icon name=\"navigate-circle-outline\"></ion-icon>\n                                <strong>{{doctor.state_id[1]}}</strong>\n                            </p>\n                        </div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n            <div *ngIf=\"!searchService.searchDoctors\" class=\"slide-image\">\n                <ion-skeleton-text animated style=\"height: 200px;\"></ion-skeleton-text>\n                <!-- <div class=\"slide-description\" style=\"width: 90%\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                    <p>\n                        <ion-icon name=\"navigate-circle-outline\"></ion-icon>\n                        <ion-skeleton-text animated></ion-skeleton-text>\n                    </p>\n                </div> -->\n            </div>\n        </div>\n    </div>\n\n    <!--    Home Recommended Slider-->\n    <div class=\"home-specialties-slider\">\n        <div class=\"ion-padding\">\n            <h3 class=\"section-title\">Specialties <span class=\"see-all\"><a\n                    routerLink=\"/home-page-tabs/search-page/search-by-specialty-and-area\">See All</a></span></h3>\n            <ion-slides [options]=\"slideCategoryOpts\">\n                <ion-slide *ngFor=\"let speciality of doctorSpecialties\">\n                    <ion-card style=\"width: 100%\" class=\"special-box ion-text-center\"\n                              (click)=\"searchForDoctorBySpeciality(speciality.id)\">\n                        <ion-card-content>\n                            <!--                            <ion-icon name=\"heart-outline\"></ion-icon>-->\n                            <img [src]=\"speciality.image\" style=\"width: 50px; height: 50px\" alt=\"\">\n                            <h3>{{speciality.display_name}}</h3>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n\n    <!--    Home Button-->\n    <ion-card class=\"home-button\">\n        <ion-card-content>\n            <h3>EL SEIF HEALTH CARE</h3>\n            <p>Your Safety ... is Our Responsibility</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/home-page/home-page-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/Pages/home-tabs/home-page/home-page-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: HomePagePageRoutingModule */

    /***/
    function srcAppPagesHomeTabsHomePageHomePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePagePageRoutingModule", function () {
        return HomePagePageRoutingModule;
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


      var _home_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home-page.page */
      "./src/app/Pages/home-tabs/home-page/home-page.page.ts");

      var routes = [{
        path: '',
        component: _home_page_page__WEBPACK_IMPORTED_MODULE_3__["HomePagePage"]
      }];

      var HomePagePageRoutingModule = function HomePagePageRoutingModule() {
        _classCallCheck(this, HomePagePageRoutingModule);
      };

      HomePagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/home-page/home-page.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/home-tabs/home-page/home-page.module.ts ***!
      \***************************************************************/

    /*! exports provided: HomePagePageModule */

    /***/
    function srcAppPagesHomeTabsHomePageHomePageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePagePageModule", function () {
        return HomePagePageModule;
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


      var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home-page-routing.module */
      "./src/app/Pages/home-tabs/home-page/home-page-routing.module.ts");
      /* harmony import */


      var _home_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-page.page */
      "./src/app/Pages/home-tabs/home-page/home-page.page.ts");
      /* harmony import */


      var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-rating-component */
      "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js");

      var HomePagePageModule = function HomePagePageModule() {
        _classCallCheck(this, HomePagePageModule);
      };

      HomePagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePagePageRoutingModule"], ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__["IonicRatingComponentModule"]],
        declarations: [_home_page_page__WEBPACK_IMPORTED_MODULE_6__["HomePagePage"]]
      })], HomePagePageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/home-page/home-page.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/home-tabs/home-page/home-page.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsHomePageHomePagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".home-header {\n  color: #309a31;\n}\n.home-header p {\n  font-size: 12px;\n}\n.sign-in-link {\n  font-weight: bold;\n}\n.sign-in-link a {\n  color: #309a31;\n  text-decoration: none;\n}\n.swiper-pagination {\n  display: none;\n}\n.section-title {\n  font-size: 14px;\n  padding: 0 20px;\n}\n.section-title .see-all {\n  float: right;\n}\n.section-title .see-all a {\n  color: #309a31;\n  text-decoration: none;\n}\n.home-slider ion-slides {\n  height: 100%;\n}\n.home-slider .swiper-pagination-fraction, .home-slider .swiper-pagination-custom, .home-slider .swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: unset;\n}\n.home-slider ion-slide {\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.home-slider ion-slide ion-img {\n  height: 200px;\n}\n.home-slider .slide-description {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background: #00000073;\n  color: #fff;\n  padding: 20px;\n  width: 100%;\n}\n.home-slider .slide-description h3 {\n  margin-bottom: 0;\n  font-size: 17px;\n}\n.home-slider .slide-description p {\n  margin: 0;\n  font-size: 13px;\n}\n.home-slider .slide-description ion-icon {\n  margin-right: 5px;\n  font-size: 20px;\n  position: relative;\n  top: 5px;\n}\n.home-recommended-slider .recommend-card {\n  width: 100%;\n  border-radius: 20px;\n}\n.home-recommended-slider .recommend-card .active-star {\n  color: #e0bb2e;\n}\n.home-recommended-slider .recommend-card ion-card-content {\n  padding-bottom: 0;\n}\n.home-recommended-slider .recommend-card ion-card-content h3 {\n  color: #000;\n}\n.home-recommended-slider .recommend-card ion-card-content p {\n  color: #ccc;\n}\n.home-recommended-slider .recommend-card .card-footer {\n  border-top: 1px solid #eee;\n  color: #309a31;\n  text-align: left;\n  padding: 0 20px;\n}\n.home-recommended-slider .recommend-card .card-footer ion-icon {\n  margin-right: 5px;\n  position: relative;\n  top: 3px;\n}\n.home-recommended-slider .recommend-card .card-footer span {\n  color: #ccc;\n}\n.home-recommended-slider .recommend-card ion-card-header {\n  padding: 0;\n}\n.home-recommended-slider ion-slides {\n  height: 100%;\n}\n.home-recommended-slider ion-slides .slide-image {\n  width: 100%;\n}\n.home-specialties-slider {\n  height: 200px;\n}\n.home-specialties-slider ion-slides {\n  height: 100%;\n}\n.home-specialties-slider ion-slides .active {\n  background: #309a31;\n  color: #fff !important;\n}\n.home-specialties-slider ion-slides .special-box {\n  border-radius: 20px;\n  color: #309a31;\n  box-shadow: 0px 0px 12px 2px #dedede;\n}\n.home-specialties-slider ion-slides .special-box ion-icon {\n  font-size: 40px;\n}\n.home-button {\n  text-align: center;\n  border: 1px solid #309a31;\n  box-shadow: unset;\n  border-radius: 20px;\n  color: #309a31;\n}\n.home-button h3 {\n  font-weight: bold;\n  font-size: 18px;\n}\n.doctor-details {\n  margin-top: 0;\n  margin-left: 10px;\n}\n.doctor-details .card-doctor-name {\n  font-weight: bold;\n}\n.meta-details {\n  font-size: 12px;\n}\n.meta-details ion-icon {\n  font-size: 15px;\n  position: relative;\n  top: 2px;\n}\n.card-doctor {\n  border-bottom: 1px solid #eee;\n  padding: 20px 20px;\n  text-align: left;\n  border-radius: 20px;\n  box-shadow: 0px 0px 12px 2px #dedede;\n}\n.card-doctor-buttons {\n  padding: 0 20px;\n}\n.stars {\n  font-size: 13px;\n}\n.stars .active-star {\n  color: #e0bb2e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL2hvbWUtcGFnZS9ob21lLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBS0U7RUFFRSxlQUFBO0FBSko7QUFRQTtFQUNFLGlCQUFBO0FBTEY7QUFPRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUxKO0FBU0E7RUFDRSxhQUFBO0FBTkY7QUFTQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLFlBQUE7QUFOSjtBQVFJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBTk47QUFjRTtFQUNFLFlBQUE7QUFYSjtBQWNFO0VBQ0UsYUFBQTtBQVpKO0FBZUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWVJO0VBQ0UsYUFBQTtBQWJOO0FBaUJFO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZko7QUFpQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFmTjtBQWtCSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBaEJOO0FBbUJJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBakJOO0FBMEJFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBdkJKO0FBeUJJO0VBQ0UsY0FBQTtBQXZCTjtBQTBCSTtFQUNFLGlCQUFBO0FBeEJOO0FBMEJNO0VBQ0UsV0FBQTtBQXhCUjtBQTJCTTtFQUNFLFdBQUE7QUF6QlI7QUE2Qkk7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUEzQk47QUE2Qk07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQTNCUjtBQThCTTtFQUNFLFdBQUE7QUE1QlI7QUFnQ0k7RUFDRSxVQUFBO0FBOUJOO0FBa0NFO0VBQ0UsWUFBQTtBQWhDSjtBQWtDSTtFQUNFLFdBQUE7QUFoQ047QUFxQ0E7RUFDRSxhQUFBO0FBbENGO0FBb0NFO0VBQ0UsWUFBQTtBQWxDSjtBQW9DSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFsQ047QUFxQ0k7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQW5DTjtBQXFDTTtFQUNFLGVBQUE7QUFuQ1I7QUF5Q0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUF0Q0o7QUF5Q0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxpQkFBQTtBQXRDSjtBQTBDQTtFQUNFLGVBQUE7QUF2Q0Y7QUF5Q0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBdkNKO0FBMkNBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQXhDRjtBQTJDQTtFQUNFLGVBQUE7QUF4Q0Y7QUEyQ0E7RUFDRSxlQUFBO0FBeENGO0FBMENFO0VBQ0UsY0FBQTtBQXhDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9ob21lLXBhZ2UvaG9tZS1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWhlYWRlciB7XG4gIGNvbG9yOiAjMzA5YTMxO1xuXG4gIGgzIHtcbiAgICAvL21hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuICBwIHtcbiAgICAvL21hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5zaWduLWluLWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICBhIHtcbiAgICBjb2xvcjogIzMwOWEzMTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcblxuICAuc2VlLWFsbCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogIzMwOWEzMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmhvbWUtc2xpZGVyIHtcbiAgLy9oZWlnaHQ6IDM1dmg7XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLCAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLCAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgIGJvdHRvbTogdW5zZXQ7XG4gIH1cblxuICBpb24tc2xpZGUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBpb24taW1nIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICB9XG5cbiAgLnNsaWRlLWRlc2NyaXB0aW9uIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDczO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBoMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiA1cHg7XG4gICAgfVxuICB9XG59XG5cbi5ob21lLXJlY29tbWVuZGVkLXNsaWRlciB7XG4gIC8vaGVpZ2h0OiA0MTBweDtcbiAgLy9oZWlnaHQ6IDYzdmg7XG5cbiAgLnJlY29tbWVuZC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgLmFjdGl2ZS1zdGFyIHtcbiAgICAgIGNvbG9yOiAjZTBiYjJlO1xuICAgIH1cblxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZC1mb290ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICBjb2xvcjogIzMwOWEzMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAuc2xpZGUtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5ob21lLXNwZWNpYWx0aWVzLXNsaWRlciB7XG4gIGhlaWdodDogMjAwcHg7XG5cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzA5YTMxO1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuc3BlY2lhbC1ib3gge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGNvbG9yOiAjMzA5YTMxO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDJweCAjZGVkZWRlO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmhvbWUtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzA5YTMxO1xuICBib3gtc2hhZG93OiB1bnNldDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMzMDlhMzE7XG5cbiAgaDMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLmRvY3Rvci1kZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgLmNhcmQtZG9jdG9yLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5tZXRhLWRldGFpbHMge1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gIH1cbn1cblxuLmNhcmQtZG9jdG9yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDJweCAjZGVkZWRlO1xufVxuXG4uY2FyZC1kb2N0b3ItYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnN0YXJzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIC5hY3RpdmUtc3RhciB7XG4gICAgY29sb3I6ICNlMGJiMmU7XG4gIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/home-page/home-page.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/Pages/home-tabs/home-page/home-page.page.ts ***!
      \*************************************************************/

    /*! exports provided: HomePagePage */

    /***/
    function srcAppPagesHomeTabsHomePageHomePagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePagePage", function () {
        return HomePagePage;
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


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _Service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../Service/search.service */
      "./src/app/Service/search.service.ts");
      /* harmony import */


      var _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../Service/search-by-specialty-and-area.service */
      "./src/app/Service/search-by-specialty-and-area.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var HomePagePage = /*#__PURE__*/function () {
        function HomePagePage(nativeStorage, searchService, router, searchBySpecialityAndAreaService) {
          _classCallCheck(this, HomePagePage);

          this.nativeStorage = nativeStorage;
          this.searchService = searchService;
          this.router = router;
          this.searchBySpecialityAndAreaService = searchBySpecialityAndAreaService;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400
          };
          this.slideCategoryOpts = {
            slidesPerView: 2,
            speed: 400
          };
          this.showLogged = false;
          this.favoriteDoctors = [];
        }

        _createClass(HomePagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('uid') != null) {
              this.showLogged = true;
              this.userData = {
                'name': localStorage.getItem('name'),
                'session_id': localStorage.getItem('session_id'),
                'uid': localStorage.getItem('uid')
              };
            } else {
              this.showLogged = false;
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.searchForDoctor();
            this.getAllDoctorSpecialties();
          }
        }, {
          key: "searchForDoctor",
          value: function searchForDoctor() {
            this.searchService.postSearchQuery();
          }
        }, {
          key: "getAllDoctorSpecialties",
          value: function getAllDoctorSpecialties() {
            var _this = this;

            this.searchBySpecialityAndAreaService.getSpecialties().subscribe(function (res) {
              _this.doctorSpecialties = res.result;
            });
          }
        }, {
          key: "searchForDoctorBySpeciality",
          value: function searchForDoctorBySpeciality(specialtyId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.searchService.searchQuery.specialty = specialtyId;
                      _context.next = 3;
                      return this.searchService.postSearchQuery();

                    case 3:
                      _context.next = 5;
                      return this.router.navigate(['/home-page-tabs/search-page']);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "onNavigate",
          value: function onNavigate(doctor) {
            this.router.navigate(['/doctor'], {
              state: {
                doctorData: doctor
              }
            });
          }
        }]);

        return HomePagePage;
      }();

      HomePagePage.ctorParameters = function () {
        return [{
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
        }, {
          type: _Service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _Service_search_by_specialty_and_area_service__WEBPACK_IMPORTED_MODULE_4__["SearchBySpecialtyAndAreaService"]
        }];
      };

      HomePagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home-page.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/home-page/home-page.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home-page.page.scss */
        "./src/app/Pages/home-tabs/home-page/home-page.page.scss"))["default"]]
      })], HomePagePage);
      /***/
    },

    /***/
    "./src/app/Service/favorite.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Service/favorite.service.ts ***!
      \*********************************************/

    /*! exports provided: FavoriteService */

    /***/
    function srcAppServiceFavoriteServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteService", function () {
        return FavoriteService;
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

      var FavoriteService = /*#__PURE__*/function () {
        function FavoriteService(dataService) {
          _classCallCheck(this, FavoriteService);

          this.dataService = dataService;
        }

        _createClass(FavoriteService, [{
          key: "postDoctorAsFavorite",
          value: function postDoctorAsFavorite(doctorId) {
            var OBJ = {
              uid: localStorage.getItem('uid'),
              method: 'add',
              doctor_id: doctorId
            };
            return this.dataService.post('api/patient_favorite_doctors', {
              params: OBJ
            });
          }
        }, {
          key: "removeDoctorAsFavorite",
          value: function removeDoctorAsFavorite(doctorId) {
            var OBJ = {
              uid: localStorage.getItem('uid'),
              method: 'remove',
              doctor_id: doctorId
            };
            return this.dataService.post('api/patient_favorite_doctors', {
              params: OBJ
            });
          }
        }, {
          key: "getAllFavoriteDoctors",
          value: function getAllFavoriteDoctors() {
            return this.dataService.post('api/get_patient_favorite_doctors', {
              params: {
                uid: localStorage.getItem('uid')
              }
            });
          }
        }]);

        return FavoriteService;
      }();

      FavoriteService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      };

      FavoriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FavoriteService);
      /***/
    },

    /***/
    "./src/app/Service/search.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/Service/search.service.ts ***!
      \*******************************************/

    /*! exports provided: SearchService */

    /***/
    function srcAppServiceSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchService", function () {
        return SearchService;
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
      /* harmony import */


      var _favorite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favorite.service */
      "./src/app/Service/favorite.service.ts");

      var SearchService = /*#__PURE__*/function () {
        function SearchService(dataService, favoritesService) {
          _classCallCheck(this, SearchService);

          this.dataService = dataService;
          this.favoritesService = favoritesService;
          this.searchQuery = {};
          this.favoriteIds = [];
          this.favoriteDoctorsFiltered = [];
        }

        _createClass(SearchService, [{
          key: "postSearchQuery",
          value: function postSearchQuery() {
            var _this2 = this;

            return this.dataService.post('api/doctor_search_query', {
              params: this.searchQuery
            }).subscribe(function (res) {
              _this2.doctors = res.result;
              _this2.searchDoctors = _this2.doctors;
            }, function (error) {}, function () {
              _this2.getAllFavoriteDoctors();
            });
          }
        }, {
          key: "getAllFavoriteDoctors",
          value: function getAllFavoriteDoctors() {
            var _this3 = this;

            this.favoritesService.getAllFavoriteDoctors().subscribe(function (res) {
              _this3.favoriteIds = res.result.favorite_doctors;
              console.log(_this3.favoriteIds);
            }, function (error) {}, function () {
              _this3.getFavoriteDoctorsFiltered();
            });
          }
        }, {
          key: "checkInFavoriteList",
          value: function checkInFavoriteList(doctorId) {
            return this.favoriteIds.includes(doctorId);
          }
        }, {
          key: "getFavoriteDoctorsFiltered",
          value: function getFavoriteDoctorsFiltered() {
            var _this4 = this;

            this.favoriteDoctorsFiltered = [];

            if (this.doctors) {
              this.doctors.forEach(function (c) {
                var OBJ = {
                  doctorId: c.id,
                  name: c.name,
                  specialty: c.specialty,
                  rate_overall: c.rate_overall,
                  image_1920: c.image_1920,
                  state_id: c.state_id,
                  consul_fee: c.consul_fee,
                  count_rate: c.count_rate,
                  isFavorite: _this4.checkInFavoriteList(c.id)
                };

                _this4.favoriteDoctorsFiltered.push(OBJ);
              });
            }

            return this.favoriteDoctorsFiltered;
          }
        }, {
          key: "getDoctorFavorites",
          value: function getDoctorFavorites() {
            var _this5 = this;

            this.favoriteDoctorsFiltered = [];
            this.doctors.forEach(function (c) {
              var OBJ = {
                doctorId: c.id,
                name: c.name,
                specialty: c.specialty,
                rate_overall: c.rate_overall,
                image_1920: c.image_1920,
                state_id: c.state_id,
                consul_fee: c.consul_fee,
                count_rate: c.count_rate,
                isFavorite: _this5.checkInFavoriteList(c.id)
              };

              _this5.favoriteDoctorsFiltered.push(OBJ);
            });
            return this.favoriteDoctorsFiltered.filter(function (c) {
              return c.isFavorite === true;
            });
          }
        }]);

        return SearchService;
      }();

      SearchService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }, {
          type: _favorite_service__WEBPACK_IMPORTED_MODULE_3__["FavoriteService"]
        }];
      };

      SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SearchService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-page-home-page-module-es5.js.map