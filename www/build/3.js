webpackJsonp([3],{

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarbalancePageModule", function() { return StarbalancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starbalance__ = __webpack_require__(508);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarbalancePageModule = /** @class */ (function () {
    function StarbalancePageModule() {
    }
    StarbalancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__starbalance__["a" /* StarbalancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__starbalance__["a" /* StarbalancePage */]),
            ],
        })
    ], StarbalancePageModule);
    return StarbalancePageModule;
}());

//# sourceMappingURL=starbalance.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarbalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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


//import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


/**
 * Generated class for the StarbalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarbalancePage = /** @class */ (function () {
    function StarbalancePage(navCtrl, navParams, 
    //private iab: InAppBrowser, 
    storage, sanitized) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.sanitized = sanitized;
    }
    StarbalancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StarbalancePage');
    };
    StarbalancePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("session_id").then(function (session_id) {
            _this.session_id = session_id;
        });
    };
    StarbalancePage.prototype.saniteze = function (session_id) {
        var url = this.sanitized.bypassSecurityTrustResourceUrl('http://agexportplus.iflexsoftware.com/balance.php?session_id=' + session_id);
        return url;
    };
    StarbalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-starbalance',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\starbalance\starbalance.html"*/'<!--\n\n  Generated template for the StarbalancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      <img width="85" src="assets/imgs/HeaderLogo.png">\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content no-padding>\n\n<iframe name="external" width="100%" height="100%" frameborder="0" allowfullscreen [src] ="saniteze(session_id)"></iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\starbalance\starbalance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], StarbalancePage);
    return StarbalancePage;
}());

//# sourceMappingURL=starbalance.js.map

/***/ })

});
//# sourceMappingURL=3.js.map