webpackJsonp([12],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(490);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
            ],
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(287);
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
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, navParams, loadingCtrl, toastCtrl, rest, platform, modal, storage, scanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.rest = rest;
        this.platform = platform;
        this.modal = modal;
        this.storage = storage;
        this.scanner = scanner;
        this.showPublic = true;
        this.showSector = false;
        this.showSchool = false;
        this.error = false;
        this.asistLabel = "No Confirmado";
        this.role = null;
        this.customStyle = "toast-nice";
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
        this.showLoading();
        this.manualRefresh();
        this.loading.dismiss();
    };
    EventsPage.prototype.ionViewDidEnter = function () {
        this.showLoading();
        console.log('ionViewDidLoad EventsPage');
        this.manualRefresh();
        this.loading.dismiss();
    };
    EventsPage.prototype.manualRefresh = function () {
        var _this = this;
        //
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
        //
    };
    EventsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log("start refresher");
        this.showLoading();
        this.rest.events().then(function (resolve) {
            console.log("resolve");
            _this.publicEvents = resolve.Publico;
            _this.privateEvents = resolve.Privado;
            _this.schoolEvents = resolve.Escuela;
        }, function (reject) {
            if (reject.status == '0') {
            }
            else {
                _this.customStyle = "toast-danger";
                _this.presentToast(JSON.stringify(reject.error.error.message));
            }
        });
        refresher.complete();
        this.loading.dismiss();
    };
    EventsPage.prototype.openEvent = function (event) {
        var _this = this;
        var detailOptions = {
            enableBackdropDismiss: false
        };
        var detail = this.modal.create('StardetailPage', { event: event }, detailOptions);
        detail.onDidDismiss(function () {
            _this.showLoading();
            _this.manualRefresh();
            _this.loading.dismiss();
        });
        detail.present();
    };
    EventsPage.prototype.onSegmentChanged = function (segmentButton) {
        switch (segmentButton.value) {
            case 'Publico':
                this.showPublic = true;
                this.showSector = false;
                this.showSchool = false;
                break;
            case 'Privado':
                this.showPublic = false;
                this.showSector = true;
                this.showSchool = false;
                break;
            case 'Escuela':
                this.showPublic = false;
                this.showSector = false;
                this.showSchool = true;
                break;
        }
    };
    EventsPage.prototype.scanQRFav = function () {
        var _this = this;
        console.log("fav Action");
        this.storage.get("session_id").then(function (session_id) {
            var qrData = { type: "Asistencia", record_id: null, session_id: session_id };
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
    EventsPage.prototype.updateConfirmationL = function (event) {
        var _this = this;
        console.log('Confirmation', JSON.stringify(event));
        this.showLoading();
        this.storage.get('session_id').then(function (session_id) {
            var new_assist = (event.confirmation == 'Confirmado') ? false : true;
            var postData = {
                session_id: session_id,
                activity_code: event.activity_code,
                assist: new_assist
            };
            console.log('Assist Payload:', JSON.stringify(postData));
            _this.rest.eventConfirmation(postData).then(function (resolve) {
                if (resolve.style != undefined) {
                    _this.customStyle = resolve.style;
                }
                _this.manualRefresh();
                _this.presentToast(resolve.data.message);
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
        this.loading.dismiss();
    };
    EventsPage.prototype.scanQR = function (activity_code) {
        var _this = this;
        var qrData = { type: "Asistencia", record_id: activity_code, session_id: null };
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
    EventsPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    EventsPage.prototype.openLocation = function (lat, lng) {
        var destination = lat + ',' + lng;
        if (this.platform.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            var label = encodeURI('Evento Agexport');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
    };
    EventsPage.prototype.dynamicAction = function (action) {
        if (action.browsertype == "External") {
            this.openExternal(action);
        }
        else if (action.browsertype == "Internal") {
            this.openInternal(action);
        }
    };
    EventsPage.prototype.openExternal = function (action) {
        this.storage.get("session_id").then(function (session_id) {
            var fullpath = action.url + "?session_id=" + session_id;
            window.open(fullpath, '_system', 'location=yes');
        });
    };
    EventsPage.prototype.openInternal = function (action) {
        this.navCtrl.push('InternalPage', { action: action });
        /*const detailOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
        const detail: Modal = this.modal.create('InternalPage', { action }, detailOptions);
        detail.present();
        */
    };
    EventsPage.prototype.presentToast = function (msg) {
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
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/gcotton/Documents/AgexportPlus/src/pages/events/events.html"*/'<ion-header>\n\n    <ion-navbar color="dark">\n      <ion-title>\n          <img width="200" src="assets/imgs/HeaderLogo.png" padding>\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-navbar>\n    \n  </ion-header>\n\n  <ion-content no-padding>\n      <ion-item>\n            <ion-segment [(ngModel)]="selectedSegment" (ionChange)="onSegmentChanged($event)" color="dark">\n                    <ion-segment-button value="Publico">\n                      Institucional\n                    </ion-segment-button>\n                    <ion-segment-button value="Privado">\n                      Sectorial\n                    </ion-segment-button>\n                    <ion-segment-button value="Escuela">\n                      Escuela  \n                    </ion-segment-button>\n                  </ion-segment>\n      </ion-item>\n\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n          <ion-refresher-content\n            pullingIcon="arrow-dropdown"\n            pullingText="Pull to refresh"\n            refreshingSpinner="circles"\n            refreshingText="Refreshing...">\n          </ion-refresher-content>\n        </ion-refresher>\n        <ion-list *ngIf="showPublic" no-padding>\n            <ion-item-sliding *ngFor="let event of publicEvents">\n              <ion-item text-wrap detail-push>\n                <ion-thumbnail item-left (click)="openEvent(event)" class="eventLogo" >\n                  <img src="{{event.images[0].url}}" >\n                </ion-thumbnail>\n                <ion-col (click)="openEvent(event)" no-padding >\n                        <h2><ion-icon name="calendar"></ion-icon>  {{event.subject}}</h2>\n                        <p><ion-icon name="calendar"></ion-icon>  {{event.datetrx}}</p>\n                        <p><ion-icon name="pricetag"></ion-icon>  {{event.cost_type}}</p>\n                        <p><ion-icon name="pin"></ion-icon>  {{event.location}}</p>\n                </ion-col>\n                  <ion-row *ngIf="role==\'Agexport\'">\n                      <button ion-button block color="detail" icon-end (click)="scanQR(event.activity_code)">\n                        Registrar\n                        <ion-icon name="qr-scanner"></ion-icon>\n                      </button>\n                  </ion-row>\n                    <ion-row *ngIf="(event.confirmation==\'No Confirmado\' || event.confirmation==\'Por Confirmar\')&& role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="secondary" outline icon-end (click)="updateConfirmationL(event)" >{{event.confirmation}}\n                            <ion-icon name="contrast"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="event.replaceConfirmation==true && role==\'Regular\'" >\n                        <button  ion-button block [color]="event.actionConfirmation.color" [outline]="event.actionConfirmation.style" \n                                 icon-end (click)="dynamicAction(event.actionConfirmation)">{{event.actionConfirmation.value}}\n                            <ion-icon [name]="event.actionConfirmation.icon"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="event.confirmation==\'Confirmado\' && role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="dark" icon-end (click)="updateConfirmationL(event)">{{event.confirmation}}\n                            <ion-icon name="checkmark-circle"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="event.confirmation==\'No Asistire\' && role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="danger" outline icon-end (click)="updateConfirmationL(event)">{{event.confirmation}}\n                            <ion-icon name="close-circle"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="role==\'Regular\'">\n                        <button ion-button block color="secondary" icon-end (click)="openLocation(event.latitude, event.longitude)">\n                          Llevarme\n                          <ion-icon name="navigate"></ion-icon>\n                        </button>\n                  </ion-row>\n              </ion-item>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-list *ngIf="showSector">\n            <ion-item-sliding *ngFor="let event of privateEvents">\n              <ion-item text-wrap detail-push>\n                <ion-thumbnail item-left  (click)="openEvent(event)" class="eventLogo" >\n                  <img src="{{event.images[0].url}}">\n                </ion-thumbnail> \n                <ion-col (click)="openEvent(event)" no-padding  >\n                  <h2><ion-icon name="calendar"></ion-icon>  {{event.subject}}</h2>\n                  <p><ion-icon name="calendar"></ion-icon>  {{event.datetrx}}</p>\n                  <p><ion-icon name="pricetag"></ion-icon>  {{event.cost_type}}</p>\n                  <p><ion-icon name="pin"></ion-icon>  {{event.location}}</p>\n                </ion-col>\n                  <ion-row *ngIf="role==\'Agexport\'">\n                      <button ion-button block color="detail" icon-end (click)="scanQR(event.activity_code)">\n                        Registrar\n                        <ion-icon name="qr-scanner"></ion-icon>\n                      </button>\n                  </ion-row>\n                  <ion-row *ngIf="event.replaceConfirmation==true && role==\'Regular\'" >\n                    <button  ion-button block [color]="event.actionConfirmation.color" [outline]="event.actionConfirmation.style" \n                             icon-end (click)="dynamicAction(event.actionConfirmation)">{{event.actionConfirmation.value}}\n                        <ion-icon [name]="event.actionConfirmation.icon"></ion-icon>\n                    </button>\n                </ion-row>\n                  <ion-row *ngIf="event.confirmation==\'No Confirmado\' && role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="secondary" outline icon-end (click)="updateConfirmationL(event)">{{event.confirmation}}\n                            <ion-icon name="contrast"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="event.confirmation==\'Confirmado\' && role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="dark" icon-end (click)="updateConfirmationL(event)">{{event.confirmation}}\n                            <ion-icon name="checkmark-circle"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="event.confirmation==\'No Asistire\' && role==\'Regular\'">\n                        <button *ngIf="event.replaceConfirmation==false" ion-button block color="danger" outline icon-end (click)="updateConfirmationL(event)">{{event.confirmation}}\n                            <ion-icon name="close-circle"></ion-icon>\n                        </button>\n                    </ion-row>\n                    <ion-row *ngIf="role==\'Regular\'">\n                        <button ion-button block color="secondary" icon-end (click)="openLocation(event.latitude, event.longitude)">\n                          Llevarme\n                          <ion-icon name="navigate"></ion-icon>\n                        </button>\n                  </ion-row>\n                  \n              </ion-item>\n            </ion-item-sliding>\n        </ion-list>\n\n        <ion-list *ngIf="showSchool">\n            <ion-item-sliding *ngFor="let event of schoolEvents">\n              <ion-item text-wrap detail-push>\n                <ion-thumbnail item-left  (click)="openEvent(event)" class="eventLogo" >\n                  <img src="{{event.images[0].url}}">\n                </ion-thumbnail> \n                <ion-col (click)="openEvent(event)" no-padding  >\n                  <h2><ion-icon name="calendar"></ion-icon>  {{event.subject}}</h2>\n                  <p><ion-icon name="calendar"></ion-icon>  {{event.datetrx}}</p>\n                  <p><ion-icon name="pricetag"></ion-icon>  {{event.tags}}</p>\n                  <p><ion-icon name="pin"></ion-icon>  {{event.location}}</p>\n                </ion-col>\n                  <ion-row *ngIf="role==\'Agexport\'">\n                      <button ion-button block color="detail" icon-end (click)="scanQR(event.activity_code)">\n                        Registrar\n                        <ion-icon name="qr-scanner"></ion-icon>\n                      </button>\n                  </ion-row>\n                  <ion-row *ngIf="event.replaceConfirmation==true && role==\'Regular\'" >\n                    <button  ion-button block [color]="event.actionConfirmation.color" [outline]="event.actionConfirmation.style" \n                             icon-end (click)="dynamicAction(event.actionConfirmation)">{{event.actionConfirmation.value}}\n                        <ion-icon [name]="event.actionConfirmation.icon"></ion-icon>\n                    </button>\n                </ion-row>\n              </ion-item>\n            </ion-item-sliding>\n        </ion-list>\n        <ion-fab right bottom *ngIf="role==\'Regular\'">\n            <button ion-fab color="detail" (click)="scanQRFav()"><ion-icon name="qr-scanner" ></ion-icon></button>\n        </ion-fab>\n   </ion-content>'/*ion-inline-end:"/Users/gcotton/Documents/AgexportPlus/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=12.js.map