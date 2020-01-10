webpackJsonp([15],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_validate__ = __webpack_require__(238);
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
 * Generated class for the ActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivatePage = /** @class */ (function () {
    function ActivatePage(navCtrl, navParams, storage, rest, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.activate = { invitation_code: null, phone: null };
        this.validatePage = __WEBPACK_IMPORTED_MODULE_4__validate_validate__["a" /* ValidatePage */];
    }
    ActivatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivatePage');
    };
    ActivatePage.prototype.activateForm = function () {
        var _this = this;
        console.log("Start Posting:" + JSON.stringify(this.activate));
        this.showLoading();
        if (this.activate.invitation_code == null || this.activate.phone == null) {
            this.showError("El codigo de invitacion y el telefono son obligatorios");
        }
        else {
            this.storage.set("validated_phone", this.activate.phone);
            this.rest.activate(this.activate).then(function (result) {
                console.log("Activate Return:", JSON.stringify(result));
                _this.navCtrl.push(_this.validatePage);
            }, function (error) {
                _this.showError(error);
            });
        }
    };
    ActivatePage.prototype.helpLogin = function () {
        this.navCtrl.push("HelploginPage");
    };
    ActivatePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ActivatePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ActivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activate',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/activate/activate.html"*/'<!--\n  Generated template for the ActivatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title><img width="85" src="assets/imgs/HeaderLogo.png"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-lines>\n        <ion-item>\n          <img class="center" width="300" src="assets/imgs/logo.png">\n        </ion-item>\n        <ion-item>\n          <ion-label color="dark" floating>Código de invitación</ion-label>\n          <ion-input type="tel" min="6" max="6" [(ngModel)]="activate.invitation_code" name="invitation_code" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label  color="dark" floating>No. Celular</ion-label>\n        <ion-input type="tel" min="8" max="8" [(ngModel)]="activate.phone" name="phone" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button color="dark" ion-button full medium (click) = "activateForm()">Activar</button>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12></ion-col>\n        </ion-row>\n    </ion-grid>\n    <button ion-button color="dark" full medium (click)="helpLogin()">¿No tiene código?\n        Solicítelo aquí\n      </button>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/activate/activate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ActivatePage);
    return ActivatePage;
}());

//# sourceMappingURL=activate.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activate/activate.module": [
		228
	],
	"../pages/contacts/contacts.module": [
		473,
		14
	],
	"../pages/edit-company/edit-company.module": [
		474,
		13
	],
	"../pages/edit-contact/edit-contact.module": [
		239
	],
	"../pages/events/events.module": [
		475,
		12
	],
	"../pages/helplogin/helplogin.module": [
		240
	],
	"../pages/home/home.module": [
		241
	],
	"../pages/internal/internal.module": [
		476,
		11
	],
	"../pages/intro/intro.module": [
		478,
		10
	],
	"../pages/invited/invited.module": [
		477,
		9
	],
	"../pages/main/main.module": [
		480,
		8
	],
	"../pages/menu/menu.module": [
		479,
		7
	],
	"../pages/new-contact/new-contact.module": [
		243
	],
	"../pages/offer/offer.module": [
		484,
		6
	],
	"../pages/offerdetail/offerdetail.module": [
		482,
		5
	],
	"../pages/offerprogram/offerprogram.module": [
		481,
		4
	],
	"../pages/starbalance/starbalance.module": [
		483,
		3
	],
	"../pages/stardetail/stardetail.module": [
		487,
		2
	],
	"../pages/starprogram/starprogram.module": [
		485,
		1
	],
	"../pages/tabs/tabs.module": [
		486,
		0
	],
	"../pages/validate/validate.module": [
		245
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 227;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatePageModule", function() { return ActivatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activate__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivatePageModule = /** @class */ (function () {
    function ActivatePageModule() {
    }
    ActivatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activate__["a" /* ActivatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activate__["a" /* ActivatePage */]),
            ],
        })
    ], ActivatePageModule);
    return ActivatePageModule;
}());

//# sourceMappingURL=activate.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MenuPage } from '../menu/menu';
/**
 * Generated class for the ValidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValidatePage = /** @class */ (function () {
    function ValidatePage(navCtrl, navParams, storage, rest, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.validate = { name: null, phone: null, sms_code: null };
    }
    ValidatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValidatePage');
    };
    ValidatePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('session').then(function (val) {
            _this.stored = val;
            _this.validate.name = val.concat_ws;
        });
    };
    ValidatePage.prototype.validateForm = function () {
        var _this = this;
        this.showLoading();
        console.log("Validate Page Session:", JSON.stringify(this.stored));
        if (this.validate.sms_code == null) {
            this.showError("Debe ingresar el codigo SMS");
        }
        else if (this.validate.sms_code != this.stored.sms_code) {
            this.showError("El codigo SMS con coincide. Revise sus datos o solicite un nuevo codigo SMS");
        }
        else {
            this.storage.get("validated_phone").then(function (val) {
                _this.validate.phone = val;
                console.log("Phone - Stored", _this.validate.phone);
                _this.rest.validate(_this.validate).then(function (result) {
                    _this.loading.dismiss();
                    _this.storage.set("success", true);
                    _this.storage.set('session_id', _this.stored.session_id);
                    _this.rest.profile().then(function (resolve) {
                        console.log("Profile");
                        _this.navCtrl.setRoot('MenuPage');
                    }, function (reject) {
                        console.log("Profile Reject", JSON.stringify(reject));
                    });
                }, function (error) {
                    _this.showError(error);
                });
            });
        }
    };
    ValidatePage.prototype.newSMS = function () {
        var _this = this;
        this.showLoading();
        this.rest.sms().then(function (resolve) {
            _this.showError("En seguida recibira un nuevo código SMS");
            _this.storage.get('session').then(function (val) {
                _this.stored = val;
                _this.validate.name = val.concat_ws;
            });
        });
    };
    ValidatePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    ValidatePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    ValidatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-validate',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/validate/validate.html"*/'<!--\n  Generated template for the ValidatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title><img width="85" src="assets/imgs/HeaderLogo.png"></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list no-lines>\n        <ion-item>\n          <img class="center" width="300" src="assets/imgs/logo.png">\n        </ion-item>\n        <ion-item>\n          <ion-label color="dark" floating>Nombre</ion-label>\n          <ion-input type="text" min="6" max="6" [(ngModel)]="validate.name" name="name" readonly="true" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label  color="dark" floating>Codigo SMS</ion-label>\n        <ion-input type="tel" min="8" max="8" [(ngModel)]="validate.sms_code" name="sms_code" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button color="dark" ion-button full medium (click) = "validateForm()">Validar</button>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-12></ion-col>\n        </ion-row>\n    </ion-grid>\n    <button ion-button color="dark" full medium (click)="newSMS()">Reenviar SMS\n      </button>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/validate/validate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ValidatePage);
    return ValidatePage;
}());

//# sourceMappingURL=validate.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactPageModule", function() { return EditContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditContactPageModule = /** @class */ (function () {
    function EditContactPageModule() {
    }
    EditContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */]),
            ],
        })
    ], EditContactPageModule);
    return EditContactPageModule;
}());

//# sourceMappingURL=edit-contact.module.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelploginPageModule", function() { return HelploginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helplogin__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelploginPageModule = /** @class */ (function () {
    function HelploginPageModule() {
    }
    HelploginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__helplogin__["a" /* HelploginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__helplogin__["a" /* HelploginPage */]),
            ],
        })
    ], HelploginPageModule);
    return HelploginPageModule;
}());

//# sourceMappingURL=helplogin.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activate_activate__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { ValidatePage } from '../validate/validate';
//import { MenuPage } from '../menu/menu';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    //menuPage = MenuPage;
    function HomePage(navCtrl, navParams, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.activate = __WEBPACK_IMPORTED_MODULE_3__activate_activate__["a" /* ActivatePage */];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //this.showLoading();
        this.storage.get('success').then(function (val) {
            if (!val) {
                console.log("Start new session");
                _this.navCtrl.push(_this.activate);
            }
            else {
                console.log("Session already exists");
                _this.storage.get('session').then(function (val1) {
                    console.log("Session", JSON.stringify(val1));
                });
                _this.storage.get('session_id').then(function (val1) {
                    console.log("Session_id", JSON.stringify(val1));
                });
                console.log("Cleaning Session...");
                //this.storage.set('success', null);
                _this.navCtrl.setRoot('MenuPage');
            }
        });
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n      <img width="85" src="assets/imgs/HeaderLogo.png">\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewContactPageModule", function() { return NewContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_contact__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewContactPageModule = /** @class */ (function () {
    function NewContactPageModule() {
    }
    NewContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_contact__["a" /* NewContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_contact__["a" /* NewContactPage */]),
            ],
        })
    ], NewContactPageModule);
    return NewContactPageModule;
}());

//# sourceMappingURL=new-contact.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePageModule", function() { return ValidatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validate__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidatePageModule = /** @class */ (function () {
    function ValidatePageModule() {
    }
    ValidatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__validate__["a" /* ValidatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__validate__["a" /* ValidatePage */]),
            ],
        })
    ], ValidatePageModule);
    return ValidatePageModule;
}());

//# sourceMappingURL=validate.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
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
 * Generated class for the EditContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditContactPage = /** @class */ (function () {
    function EditContactPage(navCtrl, navParams, view, rest, storage, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.rest = rest;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.editContact = {
            firstname: null, lastname: null,
            genere: null,
            personal_id: null,
            e_today_: false,
            e_today: "N",
            personal_id_type: null,
            e_sector: "N",
            e_ece: "N",
            e_competivity: "N",
            e_vupe: "N",
            e_urgent: "N",
            e_sector_: false,
            e_ece_: false,
            e_competivity_: false,
            e_vupe_: false,
            e_urgent_: false,
            email_: null, phone_: null, c_contact_id: null, session_id: null
        };
        this.generes = [{ value: "M", name: "Masculino" }, { value: "F", name: "Femenino" }];
        this.docTypes = [];
        this.session_id = null;
    }
    EditContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad EditContactPage');
        this.storage.get("session_id").then(function (session_id) {
            _this.session_id = session_id;
        });
        this.getCatalog();
        this.getContactsDB();
    };
    EditContactPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    EditContactPage.prototype.getCatalog = function () {
        var _this = this;
        this.rest.catalogs().then(function (catalogs) {
            _this.docTypes = catalogs.PERSONAL_ID;
        });
    };
    EditContactPage.prototype.getContactsDB = function () {
        var _this = this;
        this.storage.get("profile").then(function (profile) {
            var me = profile;
            console.log(JSON.stringify(me));
            var e_today = (me.e_today == "Y") ? true : false;
            var e_sector = (me.e_sector == "Y") ? true : false;
            var e_ece = (me.e_ece == "Y") ? true : false;
            var e_competivity = (me.e_competivity == "Y") ? true : false;
            var e_vupe = (me.e_vupe == "Y") ? true : false;
            var e_urgent = (me.e_urgent == "Y") ? true : false;
            _this.editContact.firstname = me.firstname1;
            _this.editContact.lastname = me.lastname1;
            _this.editContact.genere = me.genere;
            _this.editContact.personal_id = me.personal_id;
            _this.editContact.e_today_ = e_today;
            _this.editContact.personal_id_type = me.personal_id_type;
            _this.editContact.e_sector_ = e_sector;
            _this.editContact.e_ece_ = e_ece;
            _this.editContact.e_competivity_ = e_competivity;
            _this.editContact.e_vupe_ = e_vupe;
            _this.editContact.e_urgent_ = e_urgent;
            _this.editContact.email_ = me.email1;
            _this.editContact.phone_ = me.phone1;
            _this.editContact.c_contact_id = me.c_contact_id;
            _this.editContact.session_id = _this.session_id;
        });
    };
    EditContactPage.prototype.sendEditContact = function () {
        var _this = this;
        this.editContact.e_today = (this.editContact.e_today_) ? "Y" : "N";
        this.editContact.e_sector = (this.editContact.e_sector_) ? "Y" : "N";
        this.editContact.e_ece = (this.editContact.e_ece_) ? "Y" : "N";
        this.editContact.e_competivity = (this.editContact.e_competivity_) ? "Y" : "N";
        this.editContact.e_vupe = (this.editContact.e_vupe_) ? "Y" : "N";
        this.editContact.e_urgent = (this.editContact.e_urgent_) ? "Y" : "N";
        this.rest.contactUpdate(this.editContact).then(function (resolve) {
            _this.rest.profile().then(function (resolve) {
                console.log("Profile");
                console.log(JSON.stringify(resolve.data.contacts));
                _this.storage.set("profile", resolve.data);
            }, function (reject) {
                console.log("Profile Reject", JSON.stringify(reject));
            });
            if (resolve.status == 0) {
                _this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
            }
            else if (resolve.status == '400' || resolve.status == '404') {
                _this.presentToast(resolve.error.error.message);
            }
            else {
                _this.presentToast(resolve.message);
            }
        }, function (reject) {
            console.log(JSON.stringify(reject));
            if (reject.status != 0) {
                _this.presentToast(reject.error.error.message);
            }
            else {
                _this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
            }
        });
    };
    EditContactPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EditContactPage.prototype.presentToast = function (msg) {
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
    EditContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-contact',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/edit-contact/edit-contact.html"*/'<ion-header>\n    <ion-navbar color="dark">\n        <ion-title>\n            <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="closeModal()">\n            <ion-icon name="close-circle" color="light"></ion-icon>\n          </button>\n          </ion-buttons>\n      </ion-navbar>\n    </ion-header>\n\n<ion-content no-padding>\n    <ion-list inset>\n        <ion-item-group>\n          <ion-item-divider color="light"><h2>Información General</h2></ion-item-divider>\n            <ion-item>\n              <ion-icon name="person" item-start></ion-icon>\n              <ion-label color="dark">Nombre</ion-label>\n              <ion-input text-wrap type="text" readonly [(ngModel)]="editContact.firstname"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="person" item-start></ion-icon>\n                <ion-label color="dark" >Apellido</ion-label>\n                <ion-input text-wrap type="text" readonly [(ngModel)]="editContact.lastname"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="mail" item-start></ion-icon>\n                <ion-label color="dark" >Email</ion-label>\n                <ion-input text-wrap type="text" readonly [(ngModel)]="editContact.email_"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon name="call" item-start></ion-icon>\n                <ion-label color="dark" >Phone</ion-label>\n                <ion-input type="text" readonly [(ngModel)]="editContact.phone_"></ion-input>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-icon name="person" item-start></ion-icon>\n              <ion-label color="dark" >Genero</ion-label>\n              <ion-select [(ngModel)]="editContact.genere" > \n                  <ion-option *ngFor="let genere of generes" [value]="genere.value"  text-wrap>{{genere.name}}</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item no-padding>\n                <ion-icon name="document" item-start></ion-icon>\n                <ion-label color="dark" >Tipo Documento</ion-label>\n                <ion-select [(ngModel)]="editContact.personal_id_type"> \n                    <ion-option *ngFor="let docType of docTypes" [value]="docType.name"  text-wrap>{{docType.name}}</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                  <ion-icon name="document" item-start></ion-icon>\n                  <ion-label color="dark" >No Documento</ion-label>\n                  <ion-input type="text" readonly [(ngModel)]="editContact.personal_id"></ion-input>\n              </ion-item>\n          </ion-item-group>\n          <ion-item-group>\n              <ion-item-divider color="light"><h2>Intereses</h2></ion-item-divider>\n                <ion-item>\n                  <ion-label color="dark">Agexport Hoy</ion-label>\n                  <ion-toggle [(ngModel)]="editContact.e_today_" color="secondary"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                    <ion-label color="dark">Boletines Sectoriales</ion-label>\n                    <ion-toggle [(ngModel)]="editContact.e_sector_" color="secondary"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="dark">Información de Cursos ECE</ion-label>\n                  <ion-toggle [(ngModel)]="editContact.e_ece_" color="secondary"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label text-wrap color="dark">Información Cursos de Competitividad</ion-label>\n                  <ion-toggle [(ngModel)]="editContact.e_competivity_" color="secondary"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="dark">Información de Cursos Vupe</ion-label>\n                  <ion-toggle [(ngModel)]="editContact.e_vupe_" color="secondary"></ion-toggle>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="dark">Boletines Urgentes</ion-label>\n                  <ion-toggle [(ngModel)]="editContact.e_urgent_" color="secondary"></ion-toggle>\n                </ion-item>\n          </ion-item-group>\n          <button ion-button color="dark" full medium (click)="sendEditContact()">Registrar</button>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/edit-contact/edit-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EditContactPage);
    return EditContactPage;
}());

//# sourceMappingURL=edit-contact.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
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
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewContactPage = /** @class */ (function () {
    function NewContactPage(navCtrl, navParams, view, rest, storage, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.rest = rest;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.newContact = {
            c_bpartner_id: null,
            firstname: null, lastname: null, phone: null, email: null, area: null, position: null,
            index: null,
            session_id: null
        };
        this.session_id = null;
    }
    NewContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewContactPage');
        this.storage.get("session_id").then(function (session_id) {
            _this.session_id = session_id;
        });
        this.getCatalog();
    };
    NewContactPage.prototype.sendNewContact = function () {
        var _this = this;
        if (this.newContact.firstname == null || this.newContact.lastname == null || this.newContact.email == null || this.newContact.phone == null) {
            this.presentToast("Todos los campos son obligatorios. Revise sus datos");
        }
        else {
            this.storage.get("employeeIndex").then(function (employeeIndex) {
                console.log("Stored Index", employeeIndex);
                var pos = [1, 2, 3, 4, 5];
                employeeIndex.forEach(function (element) {
                    pos[(element - 1)] = pos[element];
                });
                _this.newContact.index = pos[0];
                _this.newContact.session_id = _this.session_id;
                console.log("New Contact Data:", JSON.stringify(_this.newContact));
                _this.rest.contactAdd(_this.newContact).then(function (resolve) {
                    if (resolve.status == 0) {
                        _this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
                    }
                    else if (resolve.status == '400' || resolve.status == '404') {
                        _this.presentToast(resolve.error.error.message);
                    }
                    else {
                        _this.presentToast(resolve.message);
                    }
                }, function (reject) {
                    console.log(JSON.stringify(reject));
                    if (reject.status != 0) {
                        _this.presentToast(reject.error.error.error.message);
                    }
                    else {
                        _this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
                    }
                });
            });
        }
    };
    NewContactPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    NewContactPage.prototype.getCatalog = function () {
        var _this = this;
        this.rest.catalogs().then(function (catalogs) {
            _this.areas = catalogs.AREAS;
            _this.positions = catalogs.PUESTOS;
        });
    };
    NewContactPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    NewContactPage.prototype.presentToast = function (msg) {
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
    NewContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-contact',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/new-contact/new-contact.html"*/'<ion-header>\n<ion-navbar color="dark">\n    <ion-title>\n      <img width="85" src="assets/imgs/HeaderLogo.png">\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="closeModal()">\n        <ion-icon name="close-circle" color="danger"></ion-icon>\n      </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n    <ion-list inset>\n        <ion-item-group>\n            <ion-item-divider color="light"><h2>Información General</h2></ion-item-divider>\n        <ion-item>\n          <ion-label color="dark">Nombre</ion-label>\n          <ion-input  type="text" required [(ngModel)]="newContact.firstname"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label color="dark" >Apellido</ion-label>\n            <ion-input type="text" required [(ngModel)]="newContact.lastname"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="dark" >Celular</ion-label>\n          <ion-input type="tel" required [(ngModel)]="newContact.phone"></ion-input>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group>\n          <ion-item-divider color="light"><h2>Información Laboral</h2></ion-item-divider>\n      <ion-item>\n        <ion-label color="dark" >Email</ion-label>\n        <ion-input  type="email" required [(ngModel)]="newContact.email"></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n          <ion-label color="dark" >Area</ion-label>\n          <ion-select [(ngModel)]="newContact.area" required>\n              <ion-option *ngFor="let area of areas" [value]="name" >{{area.name}}</ion-option>\n          </ion-select>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" >Puesto</ion-label>\n        <ion-select [(ngModel)]="newContact.position" required> \n            <ion-option *ngFor="let position of positions" [value]="name"  text-wrap>{{position.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-item-group>\n    <button ion-button color="dark" full medium (click)="sendNewContact()">Registrar</button>\n      </ion-list>\n     \n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/new-contact/new-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], NewContactPage);
    return NewContactPage;
}());

//# sourceMappingURL=new-contact.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_unique_device_id__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularx_qrcode__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_activate_activate_module__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_validate_validate_module__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_helplogin_helplogin_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_contact_new_contact_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_edit_contact_edit_contact_module__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activate/activate.module#ActivatePageModule', name: 'ActivatePage', segment: 'activate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-company/edit-company.module#EditCompanyPageModule', name: 'EditCompanyPage', segment: 'edit-company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-contact/edit-contact.module#EditContactPageModule', name: 'EditContactPage', segment: 'edit-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/helplogin/helplogin.module#HelploginPageModule', name: 'HelploginPage', segment: 'helplogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/internal/internal.module#InternalPageModule', name: 'InternalPage', segment: 'internal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-contact/new-contact.module#NewContactPageModule', name: 'NewContactPage', segment: 'new-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offerprogram/offerprogram.module#OfferprogramPageModule', name: 'OfferprogramPage', segment: 'offerprogram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offerdetail/offerdetail.module#OfferdetailPageModule', name: 'OfferdetailPage', segment: 'offerdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starbalance/starbalance.module#StarbalancePageModule', name: 'StarbalancePage', segment: 'starbalance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer/offer.module#OfferPageModule', name: 'OfferPage', segment: 'offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starprogram/starprogram.module#StarprogramPageModule', name: 'StarprogramPage', segment: 'starprogram', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/validate/validate.module#ValidatePageModule', name: 'ValidatePage', segment: 'validate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stardetail/stardetail.module#StardetailPageModule', name: 'StardetailPage', segment: 'stardetail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_activate_activate_module__["ActivatePageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_validate_validate_module__["ValidatePageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_helplogin_helplogin_module__["HelploginPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_contact_new_contact_module__["NewContactPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_edit_contact_edit_contact_module__["EditContactPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelploginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(45);
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
 * Generated class for the HelploginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelploginPage = /** @class */ (function () {
    function HelploginPage(navCtrl, navParams, rest, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.help = { email: null, phone: null };
    }
    HelploginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelploginPage');
    };
    HelploginPage.prototype.helpForm = function () {
        var _this = this;
        console.log("Start Posting:" + JSON.stringify(this.help));
        this.showLoading();
        if (this.help.email == null || this.help.phone == null) {
            this.showError("El correo y el telefono son obligatorios");
        }
        else {
            this.rest.helpLogin(this.help).then(function (result) {
                console.log("Activate Return:", JSON.stringify(result));
                _this.showError(result.data.message);
                _this.navCtrl.push("ActivatePage");
            }, function (error) {
                _this.showError(error);
            });
        }
    };
    HelploginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    HelploginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    HelploginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-helplogin',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/helplogin/helplogin.html"*/'<!--\n  Generated template for the HelploginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="dark">\n      <ion-title>\n        <img width="85" src="assets/imgs/HeaderLogo.png">\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list no-lines>\n        <ion-item>\n            <img class="center" width="300" src="assets/imgs/logo.png">\n          </ion-item>\n          <ion-item-group>\n              <ion-item-divider color="light"><h2>Solicitud de Código de Invitación</h2></ion-item-divider>\n              <ion-item>\n                  <ion-label color="dark" floating>Email</ion-label>\n                  <ion-input type="email" [(ngModel)]="help.email" name="email" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label color="dark" floating>Teléfono</ion-label>\n                  <ion-input type="tel" [(ngModel)]="help.phone" name="phone" required></ion-input>\n                </ion-item>\n            </ion-item-group>\n      </ion-list>\n      <button color="dark" ion-button full medium (click) = "helpForm()">Solicitar</button>\n</ion-content>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/helplogin/helplogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HelploginPage);
    return HelploginPage;
}());

//# sourceMappingURL=helplogin.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http, storage, device) {
        this.http = http;
        this.storage = storage;
        this.device = device;
        this.apiUrl = "http://aeapi.iflexsoftware.com";
        this.offerParam = { role: null, session_id: null };
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.settings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/settings.json/').subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RestProvider.prototype.helpLogin = function (helpData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/contact/helpLogin.json/', JSON.stringify(helpData), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
            }).subscribe(function (data) {
                resolve(data);
            }, function (error) { return reject(error.error.error.message); });
        });
    };
    RestProvider.prototype.activate = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("url:", _this.apiUrl + '/contact/invite.json/' + credentials.invitation_code);
            _this.http.post(_this.apiUrl + '/contact/invite.json/' + credentials.invitation_code, '{"phone":"' + credentials.phone + '"}', {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
            }).subscribe(function (data) {
                _this.response = data;
                _this.session = _this.response.contact;
                _this.session.phone = credentials.phone;
                console.log("Save Phone on Session:", JSON.stringify(_this.session));
                _this.storage.set('session', _this.session);
                resolve(data);
            }, function (error) { return reject(error.error.error.message); });
        });
    };
    RestProvider.prototype.sms = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("session").then(function (session) {
                var credentials = { invitation_code: session.invitation_code, phone: session.phone };
                _this.http.post(_this.apiUrl + '/contact/invite.json/' + credentials.invitation_code, '{"phone":"' + credentials.phone + '"}', {
                    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
                }).subscribe(function (data) {
                    _this.response = data;
                    _this.session = _this.response.contact;
                    _this.session.phone = credentials.phone;
                    console.log("Save Phone on Session:", JSON.stringify(_this.session));
                    _this.storage.set('session', _this.session);
                    resolve(data);
                }, function (error) { return reject(error.error.error.message); });
            });
        });
    };
    RestProvider.prototype.validate = function (validation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("session").then(function (val) {
                _this.stored = val;
            });
            _this.validationData = {
                c_contact_id: _this.session.c_contact_id,
                device_id: _this.device.uuid,
                serial: _this.device.uuid,
                manufacturer: _this.device.model,
                platform: _this.device.platform,
                validated_phone: validation.phone
            };
            console.log("validation Data", JSON.stringify(_this.validationData));
            _this.http.post(_this.apiUrl + '/contact/validate.json/', JSON.stringify(_this.validationData), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
            }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error.error.error.message);
            });
        });
    };
    RestProvider.prototype.confirm = function (confirmData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/device/confirm.json?c_contact_id=' + confirmData.c_contact_id + '&device_id=' + confirmData.device_id + '&serial=' + confirmData.serial)
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RestProvider.prototype.profile = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("session_id").then(function (session_id) {
                console.log(_this.apiUrl + '/contact.json/' + session_id + '/profile');
                _this.http.get(_this.apiUrl + '/contact.json/' + session_id + '/profile').subscribe(function (data) {
                    _this.response = data;
                    _this.storage.set("profile", _this.response.data);
                    _this.storage.set("role", _this.response.data.role);
                    _this.storage.set("type", _this.response.data.type);
                    var employeeIndex = [];
                    if (_this.response.data.contacts != undefined) {
                        _this.response.data.contacts.forEach(function (element) {
                            employeeIndex.push(element.index);
                        });
                        _this.storage.set("employeeIndex", employeeIndex);
                        console.log(JSON.stringify(employeeIndex));
                    }
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    RestProvider.prototype.deleteContact = function (c_contact_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("session_id").then(function (session_id) {
                console.log("Delete URL:", _this.apiUrl + "/contact.json?c_contact_id=" + c_contact_id + "&session_id=" + session_id);
                _this.http.delete(_this.apiUrl + "/contact.json?c_contact_id=" + c_contact_id + "&session_id=" + session_id, {
                    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
                }).subscribe(function (data) {
                    console.log("Contact Delete:", JSON.stringify(data));
                    resolve(data);
                }, function (error) {
                    console.log("Contact Delete ERROR:", JSON.stringify(error));
                    reject(error);
                });
            });
        });
    };
    RestProvider.prototype.offer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("role").then(function (storedRole) {
                _this.offerParam.role = storedRole;
                _this.storage.get("session_id").then(function (session_id) {
                    _this.offerParam.session_id = session_id;
                    if (_this.offerParam.role == "Regular") {
                        _this.method = "/offer.json";
                    }
                    else {
                        _this.method = "/offer.json/" + _this.offerParam.session_id + "/myOffers";
                    }
                    console.log("Offer URI:", _this.apiUrl + _this.method);
                    _this.http.get(_this.apiUrl + _this.method).subscribe(function (data) {
                        resolve(data);
                    }, function (error) {
                        reject(error);
                    });
                });
            });
        });
    };
    RestProvider.prototype.events = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("session_id").then(function (session_id) {
                _this.http.get(_this.apiUrl + '/activity.json/' + session_id + '/myActivities').subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    RestProvider.prototype.eventConfirmation = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/activity/assist.json/', JSON.stringify(payload), {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8')
            }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error.error.error.message);
            });
        });
    };
    RestProvider.prototype.transaction = function (trxData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + "/transaction.json", JSON.stringify(trxData), { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8') }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RestProvider.prototype.contactAdd = function (contactData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("profile").then(function (profile) {
                contactData.c_bpartner_id = profile.Company.c_bpartner_id;
                _this.http.post(_this.apiUrl + "/contact/add.json", JSON.stringify(contactData), { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8') }).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    resolve(error);
                });
            });
        });
    };
    RestProvider.prototype.contactUpdate = function (contacatData) {
        var _this = this;
        console.log("Update:", JSON.stringify(contacatData));
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.apiUrl + "/contact.json", JSON.stringify(contacatData), { headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Content-type', 'application/json; charset=utf-8') }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RestProvider.prototype.catalogs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get("catalogs").then(function (catalogs) {
                if (catalogs == undefined) {
                    _this.http.get(_this.apiUrl + "/contact/catalog.json")
                        .subscribe(function (data) {
                        _this.storage.set("catalog", data);
                        resolve(data);
                    }, function (error) {
                        if (error.status == '0') {
                            console.log("Catalog not connected");
                        }
                        reject(error);
                    });
                }
                else {
                    resolve(catalogs);
                    reject(null);
                }
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleBlackOpaque();
            if (platform.is('android')) {
                statusBar.styleBlackOpaque();
            }
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
            platform.registerBackButtonAction(function () {
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/app/app.html"*/'<div *ngIf="showSplash" class="splash">\n        <div class="spinnerA">\n                <div class="dot1"></div>\n                <div class="dot2"></div>\n              </div>\n      </div>\n<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map