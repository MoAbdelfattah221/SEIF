(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-doctor-doctor-module~favorite-doctors-favorite-doctors-module~home-page-home-page-modu~4f123908"],{

/***/ "./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js ***!
  \*********************************************************************************************/
/*! exports provided: IonicRatingComponent, IonicRatingComponentModule, IonicRatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingComponent", function() { return IonicRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingComponentModule", function() { return IonicRatingComponentModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingService", function() { return IonicRatingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");











const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1) { return { "color": a0, "font-size": a1 }; };
function IonicRatingComponent_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IonicRatingComponent_ion_button_1_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.changeRating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", index_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx_r0.fontSize, ctx_r0.fontSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx_r0.halfStar === "true" && ctx_r0.rating - index_r1 > 0 && ctx_r0.rating - index_r1 <= 0.5 ? ctx_r0.halfIcon : index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeIcon : ctx_r0.defaultIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](7, _c1, index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeColor : ctx_r0.defaultColor, ctx_r0.fontSize));
} }
let IonicRatingService = class IonicRatingService {
    constructor() {
        this.starRatingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.topicSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    publishStartRatingChanged(value) {
        this.starRatingSubject.next(value);
    }
    getStartRatingChangedObservable() {
        return this.starRatingSubject;
    }
    publishTopic(topic, value) {
        this.topicSubject.next({ topic, value });
    }
    getTopicObservable(key) {
        return this.topicSubject[key];
    }
};
IonicRatingService.ɵfac = function IonicRatingService_Factory(t) { return new (t || IonicRatingService)(); };
IonicRatingService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function IonicRatingService_Factory() { return new IonicRatingService(); }, token: IonicRatingService, providedIn: "root" });

var IonicRatingComponent_1;
let IonicRatingComponent = IonicRatingComponent_1 = class IonicRatingComponent {
    constructor(ionicRatingService) {
        this.ionicRatingService = ionicRatingService;
        this.iconsArray = [];
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.readonly = 'false';
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = 'false';
        this.maxRating = 5;
        this.fontSize = '28px';
        this.eventInfo = (() => {
            const id = new Date().getTime();
            const topic = `star-rating:${id}:changed`;
            return {
                topic,
            };
        })();
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    set rating(val) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (let i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    writeValue(obj) {
        this.rating = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    get rating() {
        return this._rating;
    }
    changeRating(event) {
        if (this.readonly && this.readonly === 'true')
            return;
        // event is different for firefox and chrome
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === 'true') {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.ionicRatingService.publishStartRatingChanged(this.rating);
        this.ionicRatingService.publishTopic(this.eventInfo.topic, this.rating);
        // unique event
        this.ratingChanged.emit(this.rating);
    }
};
IonicRatingComponent.ɵfac = function IonicRatingComponent_Factory(t) { return new (t || IonicRatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](IonicRatingService)); };
IonicRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IonicRatingComponent, selectors: [["ionic-rating-component"]], inputs: { readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize", rating: "rating" }, outputs: { ratingChanged: "ratingChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: IonicRatingComponent_1,
                multi: true
            },
        ])], decls: 2, vars: 1, consts: [[1, "ionic5-star-rating"], ["size", "large", "fill", "clear", "class", "rate-button", 3, "ngStyle", "id", "click", 4, "ngFor", "ngForOf"], ["size", "large", "fill", "clear", 1, "rate-button", 3, "ngStyle", "id", "click"], [3, "ngStyle", "name"]], template: function IonicRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, IonicRatingComponent_ion_button_1_Template, 2, 10, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.iconsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], styles: [".rate-button[_ngcontent-%COMP%] {\n            --padding-bottom:0;\n            --padding-end:0;\n            --padding-start:0;\n            --padding-top:0;\n    }"] });
IonicRatingComponent.ctorParameters = () => [
    { type: IonicRatingService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], IonicRatingComponent.prototype, "ratingChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "readonly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "activeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "defaultColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "activeIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "defaultIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "halfIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "halfStar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "maxRating", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "fontSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IonicRatingComponent.prototype, "rating", null);

let IonicRatingComponentModule = class IonicRatingComponentModule {
};
IonicRatingComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IonicRatingComponentModule });
IonicRatingComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function IonicRatingComponentModule_Factory(t) { return new (t || IonicRatingComponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonicRatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonicRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ionic-rating-component',
                template: `
    <div class="ionic5-star-rating">
      <ion-button size="large" fill="clear" class="rate-button" [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" (click)="changeRating($event)">
        <ion-icon  [ngStyle]="{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
      </ion-button>
    </div>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        useExisting: IonicRatingComponent_1,
                        multi: true
                    },
                ],
                styles: [`
    .rate-button {
            --padding-bottom:0;
            --padding-end:0;
            --padding-start:0;
            --padding-top:0;
    }
  `]
            }]
    }], function () { return [{ type: IonicRatingService }]; }, { ratingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], defaultIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], halfIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], halfStar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IonicRatingComponentModule, { declarations: function () { return [IonicRatingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]; }, exports: function () { return [IonicRatingComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IonicRatingComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [IonicRatingComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ],
                exports: [IonicRatingComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ionic-rating
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ionic-rating-component.js.map

/***/ })

}]);
//# sourceMappingURL=default~Pages-doctor-doctor-module~favorite-doctors-favorite-doctors-module~home-page-home-page-modu~4f123908-es2015.js.map