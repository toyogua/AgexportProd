webpackJsonp([8],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_qrcode__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activate_activate__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_contact_edit_contact__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Subscription } from 'rxjs';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, storage, rest, device, loadingCtrl, platform, alertCtrl, toastCtrl, modal, scanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.device = device;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
        this.scanner = scanner;
        this.qrData = null;
        this.createdCode = null;
        this.elementType = 'canvas';
        this.codeWidth = '80';
        this.contact_name = '';
        this.company_name = '';
        this.activatePage = __WEBPACK_IMPORTED_MODULE_3__activate_activate__["a" /* ActivatePage */];
        this.c_contact_id = '';
        this.summary = '';
        this.role = '';
        this.customStyle = "toast-nice";
        //      this.onResumeSubscription = platform.resume.subscribe(()=>{
        //       this.storage.get("session").then((val) => {
        //          this.contact_name = val.concat_ws;
        //          this.company_name = val.company;
        //          this.c_contact_id = val.c_contact_id;
        //          this.confirmSession();
        //        });
        //      });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.rest.settings().then(function (resolve) {
            console.log("Store Settings", JSON.stringify(resolve.settings));
            if (resolve.settings != null) {
                _this.storage.set('settings', resolve.settings);
            }
        });
        this.storage.get("session").then(function (val) {
            _this.contact_name = val.concat_ws;
            _this.company_name = val.company;
            _this.c_contact_id = val.c_contact_id;
            _this.confirmSession();
        });
    };
    MainPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.storage.get("session").then(function (val) {
            _this.contact_name = val.concat_ws;
            _this.company_name = val.company;
            _this.c_contact_id = val.c_contact_id;
            _this.confirmSession();
        });
        refresher.complete();
    };
    MainPage.prototype.confirmSession = function () {
        var _this = this;
        this.showLoading();
        var confirmData = {
            c_contact_id: this.c_contact_id,
            device_id: this.device.uuid,
            serial: this.device.uuid
        };
        this.rest.confirm(confirmData).then(function (resolve) {
            console.log('Confirm Result:', JSON.stringify(resolve));
            if (resolve.session_id != null) {
                _this.storage.set('session_id', resolve.session_id);
                _this.createdCode = resolve.session_id;
                _this.storage.get('role').then(function (role) {
                    _this.role = role;
                    console.log('Events Role:', _this.role);
                });
                _this.rest.profile().then(function (resolve) {
                    console.log("Profile");
                    _this.storage.get("profile").then(function (profile) {
                        _this.summary = profile.Company.summary;
                        console.log("Summary", JSON.stringify(profile.Company.summary));
                    });
                }, function (reject) {
                    console.log("Profile Reject", JSON.stringify(reject));
                });
            }
        }, function (reject) {
            console.log("Not Confirmed", JSON.stringify(reject));
            if (reject.status == '0') {
                _this.storage.get("session_id").then(function (val) {
                    _this.createdCode = val;
                });
            }
            else {
                _this.presentToast(JSON.stringify(reject.error.error.message));
                _this.storage.set("session_id", null);
                _this.storage.set("session", null);
                _this.storage.set("success", false);
                _this.navCtrl.push(_this.activatePage);
            }
        });
        this.loading.dismiss();
    };
    MainPage.prototype.contactEdit = function () {
        console.log("contact edit");
        var detailOptions = {
            enableBackdropDismiss: true
        };
        var detail = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__edit_contact_edit_contact__["a" /* EditContactPage */], {}, detailOptions);
        detail.present();
    };
    MainPage.prototype.goBalance = function () {
        console.log("balance page");
    };
    MainPage.prototype.partnerEdit = function () {
        console.log("bartner edit");
    };
    MainPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    MainPage.prototype.showError = function (text) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    MainPage.prototype.presentToast = function (msg) {
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
            _this.customStyle = "toast-nice";
        });
        toast.present();
    };
    MainPage.prototype.scanQRFav = function () {
        var _this = this;
        console.log("fav Action");
        this.storage.get("session_id").then(function (session_id) {
            var qrData = { type: "Both", record_id: null, session_id: session_id };
            _this.scanner.scan().then(function (qr) {
                qrData.record_id = qr.text;
                console.log("Fav Scan Payload", JSON.stringify(qrData));
                _this.rest.transaction(qrData).then(function (resolve) {
                    if (resolve.style != undefined) {
                        _this.customStyle = resolve.style;
                    }
                    _this.presentToast(resolve.message);
                }, function (reject) {
                    if (reject.status == '0') {
                        _this.customStyle = "toast-danger";
                        _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
                    }
                    else {
                        _this.presentToast(JSON.stringify(reject.error.error.message));
                    }
                });
            });
        });
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="dark" >\n\n    <ion-title>\n\n      <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n\n\n<ion-content no-padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="Pull to refresh"\n\n          refreshingSpinner="circles"\n\n          refreshingText="Refreshing...">\n\n        </ion-refresher-content>\n\n      </ion-refresher>\n\n    \n\n    <ion-list no-lines no-padding>\n\n        <ion-item>\n\n            <h3>USTED ES PARTE DE LOS</h3>\n\n            <h1>BENEFICIOS EXCLUSIVOS</h1>\n\n            <h3>DE ASOCIADOS</h3>\n\n        </ion-item>\n\n    </ion-list>    \n\n    <ion-card no-padding> \n\n      <ion-grid padding>\n\n        <ion-row>\n\n          <ion-col col-2></ion-col>\n\n          <ion-col><qrcode [qrdata]="createdCode" [size]="256" [usesvg]="\'true\'" [level]="\'L\'" [colordark]="\'#404040\'"></qrcode></ion-col>\n\n          <ion-col col-2></ion-col>\n\n        </ion-row>\n\n        <ion-row no-padding>\n\n            <button ion-item text-wrap (click)="contactEdit()">\n\n                <ion-icon name="person" item-start color="darkGray"></ion-icon>\n\n                  {{contact_name}}\n\n              </button>\n\n        </ion-row>\n\n        <ion-row no-padding>\n\n            <button ion-item text-wrap (click)="partnerEdit()">\n\n                <ion-icon name="briefcase" item-start color="darkGray"></ion-icon>\n\n                  {{company_name}}\n\n              </button>\n\n        </ion-row>\n\n        <ion-row *ngIf="role==\'Regular\'">\n\n          <button ion-item text-wrap (click)="goBalance()" >\n\n              <ion-icon name="stats" item-start color="darkGray"></ion-icon>\n\n              Total de Puntos Agexport Plus: {{summary}}\n\n          </button>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n    <ion-fab right bottom *ngIf="role==\'Regular\'">\n\n        <button ion-fab color="detail" (click)="scanQRFav()"><ion-icon name="qr-scanner" ></ion-icon></button>\n\n    </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=8.js.map