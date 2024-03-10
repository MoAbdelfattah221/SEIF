(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["locate-doctors-gps-locate-doctors-gps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref='/home-page-tabs/home-page'></ion-back-button>\n    </ion-buttons>\n    <ion-title>Doctors Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map\" #googleMap></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LocateDoctorsGPSPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPageRoutingModule", function() { return LocateDoctorsGPSPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locate-doctors-gps.page */ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts");




const routes = [
    {
        path: '',
        component: _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_3__["LocateDoctorsGPSPage"]
    }
];
let LocateDoctorsGPSPageRoutingModule = class LocateDoctorsGPSPageRoutingModule {
};
LocateDoctorsGPSPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocateDoctorsGPSPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LocateDoctorsGPSPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPageModule", function() { return LocateDoctorsGPSPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _locate_doctors_gps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locate-doctors-gps-routing.module */ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps-routing.module.ts");
/* harmony import */ var _locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locate-doctors-gps.page */ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts");







let LocateDoctorsGPSPageModule = class LocateDoctorsGPSPageModule {
};
LocateDoctorsGPSPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _locate_doctors_gps_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocateDoctorsGPSPageRoutingModule"]
        ],
        declarations: [_locate_doctors_gps_page__WEBPACK_IMPORTED_MODULE_6__["LocateDoctorsGPSPage"]]
    })
], LocateDoctorsGPSPageModule);



/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaG9tZS10YWJzL3NlYXJjaC1wYWdlL2xvY2F0ZS1kb2N0b3JzLWdwcy9sb2NhdGUtZG9jdG9ycy1ncHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2hvbWUtdGFicy9zZWFyY2gtcGFnZS9sb2NhdGUtZG9jdG9ycy1ncHMvbG9jYXRlLWRvY3RvcnMtZ3BzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: LocateDoctorsGPSPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocateDoctorsGPSPage", function() { return LocateDoctorsGPSPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Service_google_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Service/google-map.service */ "./src/app/Service/google-map.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");






let LocateDoctorsGPSPage = class LocateDoctorsGPSPage {
    constructor(renderer, geolocation, nativeGeocoder, googleMapService) {
        this.renderer = renderer;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.googleMapService = googleMapService;
        this.markers = [];
    }
    ngOnInit() {
        this.getLocationLogLat();
    }
    ngAfterViewInit() {
        this.getGoogleMap().then(googleMap => {
            const latLang = new google.maps.LatLng(26.8206, 30.8025);
            const mapOptions = {
                center: latLang,
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.getLocationLogLat();
            // this.googleMapService.getLocationsTest().subscribe(res => {
            //     this.locations = res as ILocationLatLng[];
            //     // console.log(this.locations);
            // }, error => {
            // }, () => {
            //     //    Markers
            //     this.updateMap(this.locations);
            // });
        }).catch(error => {
            console.log(error);
        });
    }
    getGoogleMap() {
        const win = window;
        const googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise((reslove, reject) => {
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].googleMapsApiKey;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = () => {
                const loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    reslove(loadedGoogleModule.maps);
                }
                else {
                    reject('Error Happened In Google SDK Try Again later');
                }
            };
        });
    }
    getAddress(lat, lng) {
        this.googleMapService.getAddress(lat, lng).subscribe(res => {
            console.log(res);
        });
    }
    updateMap(locations) {
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];
        for (const loc of locations) {
            const latLng = new google.maps.LatLng(loc.lat, loc.lng);
            const marker = new google.maps.Marker({
                position: latLng,
                animation: google.maps.Animation.DROP,
                map: this.map
            });
            this.markers.push(marker);
        }
    }
    getLocationLogLat() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // console.log(resp);
            var locations = [];
            this.getLocation(resp.coords.latitude, resp.coords.longitude);
            this.googleMapService.getPartners(resp.coords.latitude, resp.coords.longitude).subscribe((res) => {
                console.log(res.result);
                for (let partner of res.result) {
                    locations.push({
                        'lat': partner.partner_latitude,
                        'lng': partner.partner_longitude
                    });
                }
            }, error => {
            }, () => {
                //    Markers
                this.updateMap(locations);
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getLocation(latitude, longitude) {
        const options = {
            useLocale: true,
            maxResults: 1
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options).then((result) => {
            this.locationResults = result[0].locality;
        });
    }
};
LocateDoctorsGPSPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeGeocoder"] },
    { type: _Service_google_map_service__WEBPACK_IMPORTED_MODULE_2__["GoogleMapService"] }
];
LocateDoctorsGPSPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['googleMap',] }]
};
LocateDoctorsGPSPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-locate-doctors-gps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./locate-doctors-gps.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./locate-doctors-gps.page.scss */ "./src/app/Pages/home-tabs/search-page/locate-doctors-gps/locate-doctors-gps.page.scss")).default]
    })
], LocateDoctorsGPSPage);



/***/ })

}]);
//# sourceMappingURL=locate-doctors-gps-locate-doctors-gps-module-es2015.js.map