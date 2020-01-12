webpackJsonp([4],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferprogramPageModule", function() { return OfferprogramPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offerprogram__ = __webpack_require__(504);
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

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferprogramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-offerprogram',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\offerprogram\offerprogram.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="dark">\n\n      <ion-title>\n\n        <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n  <ion-item text-wrap no-lines>\n\n    <p><strong>AGEXPORT PLUS</strong>, es un programa de beneficios diseñados exclusivamente a los asociados de la institución en la cual podrán gozar de descuentos y ofertas en estabelcimientos de prestigio.</p>\n\n    <p></p>\n\n    <p>El programa ofrece tambien la oportunidad de acumular puntos por la compra de diferentes productos y servicios de la institucion los cuales pueden ser canjeados como descuentos en su cuenta por cobrar o su equivalente en otros servicios.</p>\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="briefcase" item-start color="darkGray"></ion-icon>\n\n    Accesos VIP a Santos Gastrobar con ofertas exclusivas\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="create" item-start color="darkGray"></ion-icon>\n\n    Capacitaciones sin costo\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="git-compare" item-start color="darkGray"></ion-icon>\n\n    Aumulacion de puntos\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="pricetags" item-start color="darkGray"></ion-icon>\n\n    Ofertas y descuentos en establecimientos afiliados\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="calendar" item-start color="darkGray"></ion-icon>\n\n   Calendario de eventos\n\n  </ion-item>\n\n  <ion-item text-wrap>\n\n    <ion-icon name="paper" item-start color="darkGray"></ion-icon>\n\n   Información Privilegiada\n\n  </ion-item>\n\n  <ion-item text-wrap no-lines>\n\n    <p><strong>Límite de Responsabilidad</strong>: El cumplimiento de toda promoción u oferta es responsabilidad única y exclusivamente de los establecimientos afiliados.</p>\n\n    <p> </p>\n\n    <p><strong>* Restricciones aplican, consulte Política de Puntos</strong></p>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\offerprogram\offerprogram.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OfferprogramPage);
    return OfferprogramPage;
}());

//# sourceMappingURL=offerprogram.js.map

/***/ })

});
//# sourceMappingURL=4.js.map