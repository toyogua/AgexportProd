webpackJsonp([4],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferprogramPageModule", function() { return OfferprogramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offerprogram__ = __webpack_require__(496);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferprogramPageModule = /** @class */ (function () {
    function OfferprogramPageModule() {
    }
    OfferprogramPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offerprogram__["a" /* OfferprogramPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offerprogram__["a" /* OfferprogramPage */]),
            ],
        })
    ], OfferprogramPageModule);
    return OfferprogramPageModule;
}());

//# sourceMappingURL=offerprogram.module.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferprogramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the OfferprogramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferprogramPage = /** @class */ (function () {
    function OfferprogramPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OfferprogramPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferprogramPage');
    };
    OfferprogramPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerprogram',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/offerprogram/offerprogram.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n      <ion-title>\n        <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n    \n  </ion-header>\n\n\n<ion-content no-padding>\n  <ion-item text-wrap no-lines>\n    <p><strong>AGEXPORT PLUS</strong>, es un programa de beneficios diseñados exclusivamente a los asociados de la institución en la cual podrán gozar de descuentos y ofertas en estabelcimientos de prestigio.</p>\n    <p></p>\n    <p>El programa ofrece tambien la oportunidad de acumular puntos por la compra de diferentes productos y servicios de la institucion los cuales pueden ser canjeados como descuentos en su cuenta por cobrar o su equivalente en otros servicios.</p>\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="briefcase" item-start color="darkGray"></ion-icon>\n    Accesos VIP a Santos Gastrobar con ofertas exclusivas\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="create" item-start color="darkGray"></ion-icon>\n    Capacitaciones sin costo\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="git-compare" item-start color="darkGray"></ion-icon>\n    Aumulacion de puntos\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="pricetags" item-start color="darkGray"></ion-icon>\n    Ofertas y descuentos en establecimientos afiliados\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="calendar" item-start color="darkGray"></ion-icon>\n   Calendario de eventos\n  </ion-item>\n  <ion-item text-wrap>\n    <ion-icon name="paper" item-start color="darkGray"></ion-icon>\n   Información Privilegiada\n  </ion-item>\n  <ion-item text-wrap no-lines>\n    <p><strong>Límite de Responsabilidad</strong>: El cumplimiento de toda promoción u oferta es responsabilidad única y exclusivamente de los establecimientos afiliados.</p>\n    <p> </p>\n    <p><strong>* Restricciones aplican, consulte Política de Puntos</strong></p>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/offerprogram/offerprogram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OfferprogramPage);
    return OfferprogramPage;
}());

//# sourceMappingURL=offerprogram.js.map

/***/ })

});
//# sourceMappingURL=4.js.map