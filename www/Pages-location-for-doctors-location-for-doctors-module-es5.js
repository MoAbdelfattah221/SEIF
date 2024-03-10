(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-location-for-doctors-location-for-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-for-doctors/location-for-doctors.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-for-doctors/location-for-doctors.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLocationForDoctorsLocationForDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n        </ion-buttons>\n        <ion-title>location For Doctors With Google Map</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"map\" #googleMap></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/location-for-doctors/location-for-doctors-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/Pages/location-for-doctors/location-for-doctors-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: LocationForDoctorsPageRoutingModule */

    /***/
    function srcAppPagesLocationForDoctorsLocationForDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationForDoctorsPageRoutingModule", function () {
        return LocationForDoctorsPageRoutingModule;
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


      var _location_for_doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location-for-doctors.page */
      "./src/app/Pages/location-for-doctors/location-for-doctors.page.ts");

      var routes = [{
        path: '',
        component: _location_for_doctors_page__WEBPACK_IMPORTED_MODULE_3__["LocationForDoctorsPage"]
      }];

      var LocationForDoctorsPageRoutingModule = function LocationForDoctorsPageRoutingModule() {
        _classCallCheck(this, LocationForDoctorsPageRoutingModule);
      };

      LocationForDoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationForDoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/location-for-doctors/location-for-doctors.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/Pages/location-for-doctors/location-for-doctors.module.ts ***!
      \***************************************************************************/

    /*! exports provided: LocationForDoctorsPageModule */

    /***/
    function srcAppPagesLocationForDoctorsLocationForDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationForDoctorsPageModule", function () {
        return LocationForDoctorsPageModule;
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


      var _location_for_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-for-doctors-routing.module */
      "./src/app/Pages/location-for-doctors/location-for-doctors-routing.module.ts");
      /* harmony import */


      var _location_for_doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location-for-doctors.page */
      "./src/app/Pages/location-for-doctors/location-for-doctors.page.ts");

      var LocationForDoctorsPageModule = function LocationForDoctorsPageModule() {
        _classCallCheck(this, LocationForDoctorsPageModule);
      };

      LocationForDoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_for_doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationForDoctorsPageRoutingModule"]],
        declarations: [_location_for_doctors_page__WEBPACK_IMPORTED_MODULE_6__["LocationForDoctorsPage"]]
      })], LocationForDoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/location-for-doctors/location-for-doctors.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/Pages/location-for-doctors/location-for-doctors.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLocationForDoctorsLocationForDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvbG9jYXRpb24tZm9yLWRvY3RvcnMvbG9jYXRpb24tZm9yLWRvY3RvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2xvY2F0aW9uLWZvci1kb2N0b3JzL2xvY2F0aW9uLWZvci1kb2N0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/location-for-doctors/location-for-doctors.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/Pages/location-for-doctors/location-for-doctors.page.ts ***!
      \*************************************************************************/

    /*! exports provided: LocationForDoctorsPage */

    /***/
    function srcAppPagesLocationForDoctorsLocationForDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationForDoctorsPage", function () {
        return LocationForDoctorsPage;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _Service_google_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Service/google-map.service */
      "./src/app/Service/google-map.service.ts");

      var LocationForDoctorsPage = /*#__PURE__*/function () {
        function LocationForDoctorsPage(renderer, googleMapService) {
          _classCallCheck(this, LocationForDoctorsPage);

          this.renderer = renderer;
          this.googleMapService = googleMapService;
          this.markers = [];
        }

        _createClass(LocationForDoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.getGoogleMap().then(function (googleMap) {
              // const mapEl = this.googleMapElement.nativeElement;
              // // tslint:disable-next-line:no-shadowed-variable
              // const map = new googleMap.Map(mapEl, {
              //     center: {lat: 26.8206, lng: 30.8025},
              //     zoom: 5,
              //     mapTypeId: googleMap.maps.MapTypeId.ROADMAP
              // });
              // googleMap.event.addListenerOnce(map, 'idle', () => {
              //     this.renderer.addClass(this.mapElement.nativeElement, 'visible');
              // });
              // map.addListener('click', event => {
              //     const selectedLocation = {
              //         lat: event.latLng.lat(),
              //         lng: event.latLng.lng()
              //     };
              //
              //     if (selectedLocation) {
              //         this.getAddress(selectedLocation.lat, selectedLocation.lng);
              //     }
              // });
              var latLang = new google.maps.LatLng(26.8206, 30.8025);
              var mapOptions = {
                center: latLang,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };
              _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);

              _this.googleMapService.getLocationsTest().subscribe(function (res) {
                _this.locations = res;
                console.log(_this.locations);
              }, function (error) {}, function () {
                //    Markers
                _this.updateMap(_this.locations);
              });
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
              script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].googleMapsApiKey;
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
        }]);

        return LocationForDoctorsPage;
      }();

      LocationForDoctorsPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _Service_google_map_service__WEBPACK_IMPORTED_MODULE_3__["GoogleMapService"]
        }];
      };

      LocationForDoctorsPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['googleMap']
        }]
      };
      LocationForDoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-for-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location-for-doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/location-for-doctors/location-for-doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location-for-doctors.page.scss */
        "./src/app/Pages/location-for-doctors/location-for-doctors.page.scss"))["default"]]
      })], LocationForDoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-location-for-doctors-location-for-doctors-module-es5.js.map