webpackJsonp([5],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferdetailPageModule", function() { return OfferdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offerdetail__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferdetailPageModule = /** @class */ (function () {
    function OfferdetailPageModule() {
    }
    OfferdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offerdetail__["a" /* OfferdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offerdetail__["a" /* OfferdetailPage */]),
            ],
        })
    ], OfferdetailPageModule);
    return OfferdetailPageModule;
}());

//# sourceMappingURL=offerdetail.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(45);
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
 * Generated class for the OfferdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(navCtrl, navParams, view, toastCtrl, storage, scanner, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.scanner = scanner;
        this.rest = rest;
        this.external = false;
        this.role = null;
        this.allowScanner = false;
        this.customStyle = "toast-nice";
        this.error = false;
    }
    OfferdetailPage.prototype.ionViewWillLoad = function () {
        this.offer = this.navParams.get('offer');
        if (this.offer.external_url != null) {
            this.external = true;
        }
    };
    OfferdetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OfferdetailPage');
        this.storage.get("role").then(function (role) {
            _this.role = role;
            if (role == "Establecimiento" || role == "Agexport") {
                _this.allowScanner = true;
            }
            if (_this.offer.allow_scan != undefined && _this.offer.allow_scan == "Y") {
                _this.allowScanner = true;
            }
            else {
                _this.allowScanner = false;
            }
        });
    };
    OfferdetailPage.prototype.openLink = function (external_url) {
        window.open(external_url, '_system', 'location=yes');
    };
    OfferdetailPage.prototype.scanQR = function () {
        var _this = this;
        var qrData = { type: "Beneficio", record_id: this.offer.a001_offer_id, session_id: null };
        this.scanner.scan().then(function (qr) {
            qrData.session_id = qr.text;
            _this.rest.transaction(qrData).then(function (resolve) {
                _this.presentToast(resolve.message);
            }, function (reject) {
                if (reject.status == '0') {
                    _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
                }
                else {
                    _this.presentToast(JSON.stringify(reject.error.error.message));
                }
            });
        });
    };
    OfferdetailPage.prototype.callClick = function (tel) {
        console.log('Call Click', tel);
        window.open("tel:" + tel, '_system');
    };
    OfferdetailPage.prototype.closeModal = function () {
        this.view.dismiss(this.offer);
    };
    OfferdetailPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg,
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'middle',
            cssClass: this.customStyle
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
            _this.error = false;
            _this.customStyle = "toast-nice";
        });
        toast.present();
    };
    OfferdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerdetail',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\offerdetail\offerdetail.html"*/'<!--\n\n  Generated template for the OfferdetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      <ion-title>\n\n          <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="closeModal()">\n\n              <ion-icon name="close-circle" color="ligth"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-card>\n\n      <ion-item text-wrap>\n\n          <ion-avatar item-start>\n\n              <img src="{{offer.thumbnail}}">\n\n          </ion-avatar>\n\n          <h2>{{offer.description}}</h2>\n\n      </ion-item>\n\n      <img src="{{offer.flyer}}">\n\n      <ion-card-content>\n\n          <ion-list text-wrap>\n\n              <ion-item>\n\n                  <p><b>Comercio:</b> {{offer.name}}</p>\n\n                  <p><b>Categoría:</b> {{offer.offer_category}}</p>\n\n                  <p><b>Descripción:</b> {{offer.observations}}</p>\n\n                  <p><b>Validez:</b> {{offer.datefrom}} - {{offer.dateto}}</p>\n\n                  <p><b>Restricciones:</b> {{offer.conditions}}</p>\n\n                  <p><b>Teléfono:</b> {{offer.contact_phone}}</p>\n\n              </ion-item>\n\n          </ion-list>\n\n      </ion-card-content>\n\n  </ion-card>\n\n  <ion-list text-wrap>\n\n      <ion-fab *ngIf="allowScanner" edge>\n\n          <button ion-fab color="secondary">\n\n              <ion-icon name="apps"></ion-icon>\n\n          </button>\n\n          <ion-fab-list side="right">\n\n              <button ion-fab color="secondary" (click)="scanQR()">\n\n                  <ion-icon name="qr-scanner"></ion-icon>\n\n              </button>\n\n              <button ion-fab color="secondary">\n\n                  <ion-icon name="speedometer"></ion-icon>\n\n              </button>\n\n              <button ion-fab color="secondary">\n\n                  <ion-icon name="grid"></ion-icon>\n\n              </button>\n\n          </ion-fab-list>\n\n      </ion-fab>\n\n\n\n      <ion-card>\n\n          <ion-row *ngIf="external">\n\n              <ion-col col-5></ion-col>\n\n              <ion-col col-6>\n\n                  <button ion-button color="secondary" (click)="openLink(offer.external_url)" icon-end block>\n\n                      Enlace Externo\n\n                      <ion-icon name="arrow-forward"></ion-icon>\n\n                  </button>\n\n              </ion-col>\n\n              <ion-col col-1></ion-col>\n\n          </ion-row>\n\n          <ion-row *ngIf="allowScanner">\n\n              <ion-col col-5></ion-col>\n\n              <ion-col col-6>\n\n                  <button ion-button color="secondary" (click)="scanQR()" icon-end block>\n\n                      Registrar\n\n                      <ion-icon name="qr-scanner"></ion-icon>\n\n                  </button>\n\n              </ion-col>\n\n              <ion-col col-1></ion-col>\n\n          </ion-row>\n\n\n\n      </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n<!--\n\nGenerated template for the OfferdetailPage page.\n\n\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\n\nIonic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark">\n\n      <ion-title>\n\n          <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button (click)="closeModal()">\n\n              <ion-icon name="close-circle" color="ligth"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-card>\n\n      <ion-item text-wrap>\n\n          <ion-avatar item-start>\n\n              <img src="{{offer.thumbnail}}">\n\n          </ion-avatar>\n\n          <h2>{{offer.description}}</h2>\n\n      </ion-item>\n\n      <img src="{{offer.flyer}}">\n\n          <ion-list text-wrap no-padding>\n\n                <ion-fab *ngIf="allowScanner" edge>\n\n                  <button ion-fab color="detail">\n\n                      <ion-icon name="apps"></ion-icon>\n\n                  </button>\n\n                  <ion-fab-list side="right">\n\n                      <button ion-fab color="detail" (click)="scanQR()">\n\n                          <ion-icon name="qr-scanner"></ion-icon>\n\n                      </button>\n\n                      <button ion-fab color="detail">\n\n                          <ion-icon name="speedometer"></ion-icon>\n\n                      </button>\n\n                      <button ion-fab color="detail">\n\n                          <ion-icon name="grid"></ion-icon>\n\n                      </button>\n\n                  </ion-fab-list>\n\n              </ion-fab>\n\n              <ion-list-header color="darkGray">\n\n                <ion-icon name="calendar" item-start></ion-icon>\n\n                Detalles\n\n            </ion-list-header>\n\n              <ion-item>\n\n                <p><b>Comercio:</b> {{offer.name}}</p>\n\n                <p><b>Categoría:</b> {{offer.offer_category}}</p>\n\n                <p><b>Descripción:</b> {{offer.observations}}</p>\n\n                <p><b>Validez:</b> {{offer.datefrom}} - {{offer.dateto}}</p>\n\n                <p><b>Restricciones:</b> {{offer.conditions}}</p>\n\n                <p><b>Teléfono:</b> {{offer.contact_phone}}</p>\n\n            </ion-item>\n\n          </ion-list>\n\n          <ion-row *ngIf="offer.contact_phone!=undefined">\n\n            <ion-col col-5></ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button color="secondary" (click)="callClick(offer.contact_phone)" icon-end block>\n\n                    Llamar\n\n                    <ion-icon name="call"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-1></ion-col>\n\n        </ion-row>\n\n          <ion-row *ngIf="external">\n\n              <ion-col col-5></ion-col>\n\n              <ion-col col-6>\n\n                  <button ion-button color="secondary" (click)="openLink(offer.external_url)" icon-end block>\n\n                      Enlace Externo\n\n                      <ion-icon name="arrow-forward"></ion-icon>\n\n                  </button>\n\n              </ion-col>\n\n              <ion-col col-1></ion-col>\n\n          </ion-row>\n\n        </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\offerdetail\offerdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], OfferdetailPage);
    return OfferdetailPage;
}());

//# sourceMappingURL=offerdetail.js.map

/***/ })

});
//# sourceMappingURL=5.js.map