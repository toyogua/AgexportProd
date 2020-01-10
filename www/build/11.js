webpackJsonp([11],{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalPageModule", function() { return InternalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InternalPageModule = /** @class */ (function () {
    function InternalPageModule() {
    }
    InternalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__internal__["a" /* InternalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__internal__["a" /* InternalPage */]),
            ],
        })
    ], InternalPageModule);
    return InternalPageModule;
}());

//# sourceMappingURL=internal.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InternalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InternalPage = /** @class */ (function () {
    function InternalPage(navCtrl, navParams, view, storage, sanitized) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.storage = storage;
        this.sanitized = sanitized;
    }
    InternalPage.prototype.ionViewWillLoad = function () {
        this.action = this.navParams.get('action');
        console.log(JSON.stringify(this.action));
    };
    InternalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InternalPage');
    };
    InternalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("session_id").then(function (session_id) {
            _this.session_id = session_id;
        });
    };
    InternalPage.prototype.saniteze = function (session_id) {
        var agg = "?";
        if (this.action.url.indexOf('?') > -1) {
            agg = "&";
        }
        var to_sanitize = (this.action.session == false) ? this.action.url : this.action.url + agg + "session_id=" + session_id;
        var url = this.sanitized.bypassSecurityTrustResourceUrl(to_sanitize);
        return url;
    };
    InternalPage.prototype.closeModal = function () {
        this.view.dismiss(this.action);
    };
    InternalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-internal',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/internal/internal.html"*/'<!--\n  Generated template for the StarbalancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>\n          <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button (click)="closeModal()">\n          <ion-icon name="close-circle" color="ligth"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content no-padding>\n<iframe name="external" width="100%" height="100%" frameborder="0" allowfullscreen [src] ="saniteze(session_id)"></iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/internal/internal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InternalPage);
    return InternalPage;
}());

//# sourceMappingURL=internal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map