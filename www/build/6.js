webpackJsonp([6],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferPageModule", function() { return OfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer__ = __webpack_require__(561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferPageModule = /** @class */ (function () {
    function OfferPageModule() {
    }
    OfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer__["a" /* OfferPage */]),
            ],
        })
    ], OfferPageModule);
    return OfferPageModule;
}());

//# sourceMappingURL=offer.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(313);
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
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferPage = /** @class */ (function () {
    function OfferPage(navCtrl, navParams, rest, loadingCtrl, toastCtrl, modal, scanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.scanner = scanner;
        this.customStyle = "toast-nice";
        this.error = false;
    }
    OfferPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OfferPage');
        this.showLoading();
        this.rest.offer().then(function (resolve) {
            _this.offers = resolve.offer;
        }, function (reject) {
            if (reject.status == '0') {
            }
            else {
                _this.presentToast(JSON.stringify(reject.error.error.message));
            }
        });
        this.loading.dismiss();
    };
    OfferPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.showLoading();
        this.rest.offer().then(function (resolve) {
            _this.offers = resolve.offer;
        }, function (reject) {
            if (reject.status == '0') {
            }
            else {
                _this.presentToast(JSON.stringify(reject.error.error.message));
            }
        });
        refresher.complete();
        this.loading.dismiss();
    };
    OfferPage.prototype.openOffer = function (offer) {
        var detailOptions = {
            enableBackdropDismiss: false
        };
        var detail = this.modal.create('OfferdetailPage', { offer: offer }, detailOptions);
        detail.present();
    };
    OfferPage.prototype.scanQR = function (a001_offer_id) {
        var _this = this;
        var qrData = { type: "Beneficio", record_id: a001_offer_id, session_id: null };
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
    OfferPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    OfferPage.prototype.presentToast = function (msg) {
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
    OfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offer',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\offer\offer.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="dark">\n\n      <ion-title>\n\n          <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n      </ion-title>\n\n      <ion-buttons end>\n\n          <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content no-padding>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n          <ion-refresher-content\n\n            pullingIcon="arrow-dropdown"\n\n            pullingText="Pull to refresh"\n\n            refreshingSpinner="circles"\n\n            refreshingText="Refreshing...">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      <ion-list *ngFor="let offer of offers">\n\n              <ion-card no-padding>\n\n                <ion-item text-wrap (click)="openOffer(offer)">\n\n                  <ion-avatar item-start>\n\n                    <img src="{{offer.thumbnail}}">\n\n                  </ion-avatar>\n\n                  <h2>{{offer.name}}</h2>\n\n                  <p>{{offer.description}}</p>\n\n                </ion-item>\n\n                <img src="{{offer.flyer}}" (click)="openOffer(offer)"> \n\n                <ion-row *ngIf="offer.allow_scan==\'Y\'">\n\n                  <button ion-button block color="detail" icon-end (click)="scanQR(offer.a001_offer_id)">\n\n                    Registrar\n\n                    <ion-icon name="qr-scanner"></ion-icon>\n\n                  </button>\n\n                </ion-row>\n\n              </ion-card>\n\n        </ion-list>\n\n  </ion-content>'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\offer\offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], OfferPage);
    return OfferPage;
}());

//# sourceMappingURL=offer.js.map

/***/ })

});
//# sourceMappingURL=6.js.map