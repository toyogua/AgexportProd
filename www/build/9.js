webpackJsonp([9],{

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitedPageModule", function() { return InvitedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvitedPageModule = /** @class */ (function () {
    function InvitedPageModule() {
    }
    InvitedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__invited__["a" /* InvitedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invited__["a" /* InvitedPage */]),
            ],
        })
    ], InvitedPageModule);
    return InvitedPageModule;
}());

//# sourceMappingURL=invited.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__ = __webpack_require__(292);
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
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitedPage = /** @class */ (function () {
    function InvitedPage(navCtrl, navParams, storage, rest, loadingCtrl, toastCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modal = modal;
    }
    InvitedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitedPage');
        this.getContactsDB();
    };
    InvitedPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.showLoading;
        this.rest.profile().then(function (resolve) {
            console.log("Profile");
            console.log(JSON.stringify(resolve.data.contacts));
            _this.storage.set("profile", resolve.data);
        }, function (reject) {
            console.log("Profile Reject", JSON.stringify(reject));
        });
        this.getContactsDB();
        refresher.complete();
    };
    InvitedPage.prototype.contactEdit = function (c_contact_id) {
        console.log("contact edit:" + c_contact_id);
    };
    InvitedPage.prototype.newContact = function () {
        console.log("New Contact");
        var detailOptions = {
            enableBackdropDismiss: false
        };
        var detail = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */], {}, detailOptions);
        detail.present();
    };
    InvitedPage.prototype.getContactsDB = function () {
        var _this = this;
        this.storage.get("profile").then(function (profile) {
            _this.contacts = profile.contacts;
        });
    };
    InvitedPage.prototype.delete = function (c_contact_id) {
        var _this = this;
        this.showLoading;
        this.rest.deleteContact(c_contact_id).then(function (resolve) {
            _this.presentToast(resolve.message);
        }, function (reject) {
            if (reject.status == '0') {
                _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
            }
            else {
                _this.presentToast(JSON.stringify(reject.error.error.message));
            }
        });
    };
    InvitedPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    InvitedPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    InvitedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invited',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\invited\invited.html"*/'<!--\n\n  Generated template for the InvitedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n\n    <ion-title>\n\n      <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <h2>Mis Invitados</h2>\n\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n\n          <ion-refresher-content\n\n            pullingIcon="arrow-dropdown"\n\n            pullingText="Pull to refresh"\n\n            refreshingSpinner="circles"\n\n            refreshingText="Refreshing...">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n      <ion-list *ngFor="let contact of contacts">\n\n          <ion-item-sliding no-padding>\n\n              <ion-item color="light" (click)="contactEdit(contact.c_contact_id)">\n\n                <ion-icon name="person" item-start></ion-icon >\n\n                  <h2>{{contact.firstname1}} {{contact.lastname1}}</h2>\n\n                  <p>{{contact.type}}</p>\n\n                  <button ion-button item-end><ion-icon name="arrow-forward" ></ion-icon></button>\n\n              </ion-item>\n\n              <ion-item-options>\n\n                  <button ion-button  color="danger" (click)="delete(contact.c_contact_id)"><ion-icon  name="ios-trash"></ion-icon>Eliminar</button>\n\n              </ion-item-options>\n\n              <ion-icon name="arrow-forward"></ion-icon>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n        <ion-fab center bottom>\n\n            <button ion-fab color="dark" (click)="newContact()"><ion-icon name="add" ></ion-icon></button>\n\n          </ion-fab>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\invited\invited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], InvitedPage);
    return InvitedPage;
}());

//# sourceMappingURL=invited.js.map

/***/ })

});
//# sourceMappingURL=9.js.map