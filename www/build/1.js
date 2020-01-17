webpackJsonp([1],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarprogramPageModule", function() { return StarprogramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starprogram__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StarprogramPageModule = /** @class */ (function () {
    function StarprogramPageModule() {
    }
    StarprogramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__starprogram__["a" /* StarprogramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__starprogram__["a" /* StarprogramPage */]),
            ],
        })
    ], StarprogramPageModule);
    return StarprogramPageModule;
}());

//# sourceMappingURL=starprogram.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarprogramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(46);
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
 * Generated class for the StarprogramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarprogramPage = /** @class */ (function () {
    function StarprogramPage(navCtrl, navParams, sanitized) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitized = sanitized;
    }
    StarprogramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StarprogramPage');
        this.url = this.sanitized.bypassSecurityTrustResourceUrl('http://agexportplus.iflexsoftware.com/files/Politicas.pdf');
        window.open('http://agexportplus.iflexsoftware.com/files/Politicas.pdf', '_system');
    };
    StarprogramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-starprogram',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\starprogram\starprogram.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="dark">\n\n      <ion-title>\n\n        <img width="85" src="assets/imgs/HeaderLogo.png">\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n<iframe name="external" width="100%" height="100%" frameborder="0" allowfullscreen [src] ="url"></iframe>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\starprogram\starprogram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], StarprogramPage);
    return StarprogramPage;
}());

//# sourceMappingURL=starprogram.js.map

/***/ })

});
//# sourceMappingURL=1.js.map