webpackJsonp([2],{

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StardetailPageModule", function() { return StardetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stardetail__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StardetailPageModule = /** @class */ (function () {
    function StardetailPageModule() {
    }
    StardetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stardetail__["a" /* StardetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stardetail__["a" /* StardetailPage */]),
            ],
        })
    ], StardetailPageModule);
    return StardetailPageModule;
}());

//# sourceMappingURL=stardetail.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StardetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';



/**
 * Generated class for the StardetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StardetailPage = /** @class */ (function () {
    function StardetailPage(navCtrl, navParams, view, toastCtrl, loadingCtrl, storage, scanner, rest, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.scanner = scanner;
        this.rest = rest;
        this.modal = modal;
        this.asistLabel = "Por Confirmar";
        this.assist = false;
        this.role = null;
        this.actionArray = [];
        this.accessArray = [];
        this.fixedAction = { url: "http://bi.iflexsoftware.com:8080/pentaho/",
            browsertype: "Internal",
            session: false };
        this.fixedAction1 = { url: "http://bi.iflexsoftware.com:8080/pentaho/",
            browsertype: "External",
            session: false };
        this.enableAccess = false;
        this.error = false;
        this.r_exit = false;
        this.r_enter = true;
        this.customStyle = "toast-nice";
    }
    StardetailPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.event = this.navParams.get('event');
        //console.log("EventDatil Param Recevied:", JSON.stringify(this.event));
        if (this.event.confirmation == "Confirmado") {
            this.asistLabel = "Confirmado";
            this.assist = true;
        }
        else if (this.event.confirmation == "No Asistire") {
            this.asistLabel = "No Asistire";
            this.assist = false;
        }
        if (this.event.actions != undefined) {
            this.actionArray = this.event.actions;
        }
        this.fixedAction.url = this.fixedAction.url + "&activity_id=" + this.event.a001_activity_id;
        if (this.event.access != undefined) {
            this.enableAccess = true;
            this.accessArray = this.event.access;
        }
        if (this.event.r_enter != undefined) {
            this.r_enter = (this.event.r_enter == "N") ? false : true;
        }
        if (this.event.r_exit != undefined) {
            this.r_exit = (this.event.r_exit == "N") ? false : true;
        }
        console.log('ionViewDidLoad StardetailPage');
        this.storage.get("settings").then(function (settings) {
            _this.fixedAction.url = settings.base_dashboard + "&activity_id=" + _this.event.a001_activity_id;
            _this.fixedAction1.url = settings.base_report + "&id=" + _this.event.external_id;
        });
    };
    StardetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StardetailPage');
        this.storage.get("role").then(function (role) {
            _this.role = role;
        });
    };
    StardetailPage.prototype.callClick = function (tel) {
        console.log('Call Click', tel);
        window.open("tel:" + tel, '_system');
    };
    StardetailPage.prototype.emailClick = function (email) {
        console.log('Email Click', email);
        window.open("mailto:" + email, '_system', 'subject=Evento Agexport+');
    };
    StardetailPage.prototype.dynamicAction = function (action) {
        if (action.browsertype == "External") {
            this.openExternal(action);
        }
        else if (action.browsertype == "Internal") {
            this.openInternal(action);
        }
    };
    StardetailPage.prototype.openEvent = function (event) {
        var detailOptions = {
            enableBackdropDismiss: false
        };
        var detail = this.modal.create('StardetailPage', { event: event }, detailOptions);
        detail.present();
    };
    StardetailPage.prototype.openExternal = function (action) {
        var _this = this;
        this.storage.get("session_id").then(function (session_id) {
            var agg = "?";
            if (action.url.indexOf('?') > -1) {
                agg = "&";
            }
            var fullpath = action.url + agg + "session_id=" + session_id + "&activity_id=" + _this.event.a001_activity_id;
            window.open(fullpath, '_system', 'location=yes');
        });
    };
    StardetailPage.prototype.openInternal = function (action) {
        this.navCtrl.push('InternalPage', { action: action });
        /*
        const detailOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
        const detail: Modal = this.modal.create('InternalPage', { action }, detailOptions);
        detail.present();
        */
    };
    StardetailPage.prototype.scanQR = function () {
        var _this = this;
        var qrData = { type: "Asistencia", record_id: this.event.activity_code, session_id: null };
        this.scanner.scan().then(function (qr) {
            qrData.session_id = qr.text;
            _this.rest.transaction(qrData).then(function (resolve) {
                if (resolve.style != undefined) {
                    _this.customStyle = resolve.style;
                }
                _this.presentToast(resolve.message);
            }, function (reject) {
                _this.customStyle = "toast-danger";
                if (reject.status == '0') {
                    _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
                }
                else {
                    _this.presentToast(JSON.stringify(reject.error.error.message));
                }
            });
        });
    };
    StardetailPage.prototype.scanQRExit = function () {
        var _this = this;
        var qrData = { type: "Salida", record_id: this.event.activity_code, session_id: null };
        this.scanner.scan().then(function (qr) {
            qrData.session_id = qr.text;
            _this.rest.transaction(qrData).then(function (resolve) {
                _this.presentToast(resolve.message);
            }, function (reject) {
                _this.customStyle = "toast-danger";
                if (reject.status == '0') {
                    _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
                }
                else {
                    _this.presentToast(JSON.stringify(reject.error.error.message));
                }
            });
        });
    };
    StardetailPage.prototype.updateConfirmation = function () {
        var _this = this;
        this.storage.get('session_id').then(function (session_id) {
            var postData = {
                session_id: session_id,
                activity_code: _this.event.activity_code,
                assist: _this.assist
            };
            console.log('Assist Payload:', JSON.stringify(postData));
            _this.rest.eventConfirmation(postData).then(function (resolve) {
                _this.presentToast(resolve.data.message);
                if (_this.event.confirmation == "Confirmado") {
                    _this.asistLabel = "No Asistire";
                }
                else if (_this.event.confirmation == "No Asistire" || _this.asistLabel == 'Por Confirmar') {
                    _this.asistLabel = "Confirmado";
                }
            }, function (reject) {
                _this.customStyle = "toast-danger";
                if (reject.status == '0') {
                    _this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
                }
                else {
                    _this.presentToast(JSON.stringify(reject.error.error.message));
                }
            });
        });
        this.manualRefresh();
    };
    StardetailPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    StardetailPage.prototype.manualRefresh = function () {
        var _this = this;
        console.log("Manual Refresh");
        this.showLoading();
        this.rest.events().then(function (resolve) {
            _this.publicEvents = resolve.Publico;
            _this.privateEvents = resolve.Privado;
            _this.schoolEvents = resolve.Escuela;
            _this.storage.get('role').then(function (role) {
                _this.role = role;
                console.log('Events Role:', _this.role);
            });
        }, function (reject) {
            if (reject.status == '0') {
            }
            else {
                _this.customStyle = "toast-danger";
                _this.presentToast(JSON.stringify(reject.error.error.message));
            }
        });
        this.loading.dismiss();
    };
    StardetailPage.prototype.closeModal = function () {
        this.view.dismiss(this.event);
    };
    StardetailPage.prototype.presentToast = function (msg) {
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
    StardetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stardetail',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\stardetail\stardetail.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="dark">\n\n        <ion-title>\n\n                <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n\n        </ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="closeModal()">\n\n            <ion-icon name="close-circle" color="light"></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n      </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n    <ion-card>\n\n        <ion-item text-wrap>\n\n            <ion-avatar item-start>\n\n              <img src="{{event.images[0].url}}">\n\n            </ion-avatar>\n\n            <h2>{{event.subject}}</h2>\n\n        </ion-item>\n\n        <img src="{{event.images[1].url}}"> \n\n    </ion-card>\n\n    <ion-card>\n\n    <ion-list text-wrap >\n\n            <ion-fab *ngIf="role==\'Agexport\'" edge>\n\n                    <button ion-fab color="detail">\n\n                        <ion-icon name="apps"></ion-icon>\n\n                    </button>\n\n                    <ion-fab-list side="right">\n\n                      <button ion-fab color="detail" (click)="scanQR()">\n\n                            <ion-icon name="qr-scanner"></ion-icon>\n\n                          </button>\n\n                          <button ion-fab color="detail" (click)="dynamicAction(fixedAction)">\n\n                                <ion-icon name="speedometer"></ion-icon>\n\n                          </button>\n\n                          <button ion-fab color="detail" (click)="dynamicAction(fixedAction1)">\n\n                            <ion-icon name="grid"></ion-icon>\n\n                      </button>\n\n                          <button *ngIf="r_exit" ion-fab color="danger" (click)="scanQRExit()">\n\n                            <ion-icon name="exit"></ion-icon>\n\n                      </button>\n\n                    </ion-fab-list>\n\n            </ion-fab>\n\n      <ion-list-header color="darkGray">\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          Detalles\n\n      </ion-list-header>\n\n      <ion-item>\n\n              <p><b>Evento:</b> {{event.subject}}</p>\n\n              <p><b>Descripción:</b> {{event.summary}}</p>\n\n              <p><b>Inicio:</b> {{event.datetrx}}</p>\n\n              <p><b>Finalización:</b> {{event.datefinish}}</p>\n\n              <p><b>Lugar:</b> {{event.location}}</p>\n\n              <p><b>Costo:</b> {{event.cost_type}}</p>\n\n              <p><b>Tipo:</b> {{event.type}}</p>\n\n      </ion-item>\n\n      <ion-list>\n\n            <ion-item *ngIf="this.event.type!=\'Escuela\'" >\n\n                    <ion-icon name="checkbox-outline" item-start></ion-icon>\n\n                    <ion-label>{{asistLabel}}</ion-label>\n\n                    <ion-toggle [(ngModel)]="assist" color="secondary" (ionChange)="updateConfirmation()"></ion-toggle>\n\n            </ion-item>\n\n\n\n            <button ion-item *ngFor="let action of actionArray" detail-push  (click)="dynamicAction(action)">\n\n                    <ion-icon name="arrow-dropright-circle" [color]="action.color" item-start></ion-icon>\n\n                              {{action.value}}\n\n                         <ion-icon [name]="action.icon" [color]="action.color" item-end></ion-icon>\n\n              </button> \n\n      </ion-list>\n\n    \n\n      <ion-list-header  color="darkGray">Contacto\n\n          <ion-icon name="people" item-start></ion-icon>\n\n      </ion-list-header>\n\n      <ion-item> \n\n              <p><b>Persona Contacto:</b> {{event.activity_contactname}}</p>\n\n              <p><b>Correo Contacto:</b> {{event.activity_contactemail}}</p>\n\n              <p><b>Teléfono Contacto:</b> {{event.activity_contactphone}}</p>\n\n              <p><b>Puntos Agexport+:</b> {{event.rate}}</p>\n\n      </ion-item>\n\n      <ion-item-sliding>\n\n          <ion-item color="light">\n\n          <ion-icon name="person" item-start></ion-icon>\n\n              {{event.activity_contactname}} \n\n              <button ion-button item-end><ion-icon name="arrow-back" ></ion-icon></button>\n\n          </ion-item>\n\n          <ion-item-options>\n\n              <button ion-button color="dark" (click)="callClick(event.activity_contactphone)"><ion-icon  name="call"></ion-icon>Llamar</button>\n\n              <button ion-button color="secondary" (click)="emailClick(event.activity_contactemail)"><ion-icon  name="mail"></ion-icon>Email</button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n    <ion-list-header *ngIf="enableAccess==true" color="darkGray">\n\n            Detalle de Actividades\n\n            <ion-icon name="list-box" item-start></ion-icon>\n\n          </ion-list-header>\n\n    <ion-list *ngIf="enableAccess==true" side="bottom" >\n\n            <button *ngFor="let access of accessArray" text-wrap ion-item (click)="openEvent(access.detail)" detail-push>\n\n                <h2>{{access.subject}}</h2>\n\n                <p>{{access.datetrx}}</p>\n\n                <ion-icon name="calendar" item-start></ion-icon>\n\n            </button>\n\n    </ion-list>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\stardetail\stardetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], StardetailPage);
    return StardetailPage;
}());

//# sourceMappingURL=stardetail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map