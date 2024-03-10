(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locate-doctors-gps-locate-doctors-gps-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeTabsSearchPageLocateDoctorsGpsLocateDoctorsGpsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Doctors Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #googleMap></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: LocateDoctorsGPSPageRoutingModule */

    /***/
    function srcAppPagesHomeTabsSearchPageLocateDoctorsGpsLocateDoctorsGpsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPageRoutingModule", function () {
        return LocateDoctorsGPSPageRoutingModule;
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


      var _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./locate-doctors-gps.page */
      "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts");

      var routes = [{
        path: '',
        component: _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_3__["LocateDoctorsGPSPage"]
      }];

      var LocateDoctorsGPSPageRoutingModule = function LocateDoctorsGPSPageRoutingModule() {
        _classCallCheck(this, LocateDoctorsGPSPageRoutingModule);
      };

      LocateDoctorsGPSPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocateDoctorsGPSPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.module.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: LocateDoctorsGPSPageModule */

    /***/
    function srcAppPagesHomeTabsSearchPageLocateDoctorsGpsLocateDoctorsGpsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPageModule", function () {
        return LocateDoctorsGPSPageModule;
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


      var _locate_doctors_gps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./locate-doctors-gps-routing.module */
      "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts");
      /* harmony import */


      var _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./locate-doctors-gps.page */
      "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts");

      var LocateDoctorsGPSPageModule = function LocateDoctorsGPSPageModule() {
        _classCallCheck(this, LocateDoctorsGPSPageModule);
      };

      LocateDoctorsGPSPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _locate_doctors_gps_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocateDoctorsGPSPageRoutingModule"]],
        declarations: [_locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_6__["LocateDoctorsGPSPage"]]
      })], LocateDoctorsGPSPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesHomeTabsSearchPageLocateDoctorsGpsLocateDoctorsGpsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL2xvY2F0ZS1kb2N0b3JzLWdwcy9sb2NhdGUtZG9jdG9ycy1ncHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9sb2NhdGUtZG9jdG9ycy1ncHMvbG9jYXRlLWRvY3RvcnMtZ3BzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts ***!
      \*******************************************************************************************/

    /*! exports provided: LocateDoctorsGPSPage */

    /***/
    function srcAppPagesHomeTabsSearchPageLocateDoctorsGpsLocateDoctorsGpsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPage", function () {
        return LocateDoctorsGPSPage;
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


      var _Service_google_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../Service/google-map.service */
      "./src/app/Service/google-map.service.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var LocateDoctorsGPSPage = /*#__PURE__*/function () {
        function LocateDoctorsGPSPage(renderer, geolocation, nativeGeocoder, googleMapService) {
          _classCallCheck(this, LocateDoctorsGPSPage);

          this.renderer = renderer;
          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.googleMapService = googleMapService;
          this.markers = [];
        }

        _createClass(LocateDoctorsGPSPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLocationLogLat();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.getGoogleMap().then(function (googleMap) {
              var latLang = new google.maps.LatLng(26.8206, 30.8025);
              var mapOptions = {
                center: latLang,
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);

              _this.getLocationLogLat(); // this.googleMapService.getLocationsTest().subscribe(res => {
              //     this.locations = res as ILocationLatLng[];
              //     // console.log(this.locations);
              // }, error => {
              // }, () => {
              //     //    Markers
              //     this.updateMap(this.locations);
              // });

            })["catch"](function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getGoogleMap",
          value: function getGoogleMap() {
            var win = window;
            var googleModule = win.google;

            if (googleModule && googleModule.maps) {
              return Promise.resolve(googleModule.maps);
            }

            return new Promise(function (reslove, reject) {
              var script = document.createElement('script');
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleMapsApiKey;
              script.async = true;
              script.defer = true;
              document.body.appendChild(script);

              script.onload = function () {
                var loadedGoogleModule = win.google;

                if (loadedGoogleModule && loadedGoogleModule.maps) {
                  reslove(loadedGoogleModule.maps);
                } else {
                  reject('Error Happened In Google SDK Try Again later');
                }
              };
            });
          }
        }, {
          key: "getAddress",
          value: function getAddress(lat, lng) {
            this.googleMapService.getAddress(lat, lng).subscribe(function (res) {
              console.log(res);
            });
          }
        }, {
          key: "updateMap",
          value: function updateMap(locations) {
            this.markers.map(function (marker) {
              return marker.setMap(null);
            });
            this.markers = [];

            var _iterator = _createForOfIteratorHelper(locations),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var loc = _step.value;
                var latLng = new google.maps.LatLng(loc.lat, loc.lng);
                var marker = new google.maps.Marker({
                  position: latLng,
                  animation: google.maps.Animation.DROP,
                  map: this.map
                });
                this.markers.push(marker);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "getLocationLogLat",
          value: function getLocationLogLat() {
            var _this2 = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              // console.log(resp);
              var locations = [];

              _this2.getLocation(resp.coords.latitude, resp.coords.longitude);

              _this2.googleMapService.getPartners(resp.coords.latitude, resp.coords.longitude).subscribe(function (res) {
                console.log(res.result);

                var _iterator2 = _createForOfIteratorHelper(res.result),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var partner = _step2.value;
                    locations.push({
                      'lat': partner.partner_latitude,
                      'lng': partner.partner_longitude
                    });
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }, function (error) {}, function () {
                //    Markers
                _this2.updateMap(locations);
              });
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation(latitude, longitude) {
            var _this3 = this;

            var options = {
              useLocale: true,
              maxResults: 1
            };
            this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then(function (result) {
              _this3.locationResults = result[0].locality;
            });
          }
        }]);

        return LocateDoctorsGPSPage;
      }();

      LocateDoctorsGPSPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"]
        }, {
          type: _Service_google_map_service__WEBPACK_IMPORTED_MODULE_2__["GoogleMapService"]
        }];
      };

      LocateDoctorsGPSPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['googleMap']
        }]
      };
      LocateDoctorsGPSPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locate-doctors-gps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./locate-doctors-gps.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./locate-doctors-gps.page.scss */
        "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss"))["default"]]
      })], LocateDoctorsGPSPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=locate-doctors-gps-locate-doctors-gps-module-es5.js.map