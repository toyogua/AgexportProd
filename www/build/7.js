webpackJsonp([7],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(560);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activate_activate__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { MainPage } from '../main/main';
//import { OfferPage } from '../offer/offer';
//import { EventsPage } from '../events/events';
//import { TabsPage } from '../tabs/tabs';





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, rest, storage) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.storage = storage;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.activatePage = __WEBPACK_IMPORTED_MODULE_3__activate_activate__["a" /* ActivatePage */];
        this.pages = [
            { title: 'INICIO', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
            { title: 'INFORMACIÓN GENERAL', pageName: 'OfferprogramPage', icon: 'information-circle' },
            { title: 'POLITICA DE PUNTOS', pageName: 'StarprogramPage', icon: 'git-compare' },
            { title: 'CONSULTA DE PUNTOS', pageName: 'StarbalancePage', icon: 'stats' },
            { title: 'PROMOCIONES', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' },
            { title: 'EVENTOS', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'calendar' },
            { title: 'MIS INVITADOS', pageName: 'InvitedPage', icon: 'people' },
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MenuPage');
        this.rest.profile().then(function (resolve) {
        }, function (reject) {
            console.log("Profile Reject", JSON.stringify(reject));
        });
        this.storage.get('role').then(function (role) {
            _this.storage.get('type').then(function (type) {
                console.log('Type:', type);
                if (role == 'Establecimiento' || role == 'Agexport') {
                    _this.pages = [
                        { title: 'INICIO', pageName: 'MainPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
                        { title: 'PROMOCIONES', pageName: 'OfferPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' }
                    ];
                }
                else if (role == 'Regular' && type != 'Principal') {
                    _this.pages = [
                        { title: 'INICIO', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
                        { title: 'INFORMACIÓN GENERAL', pageName: 'OfferprogramPage', icon: 'information-circle' },
                        { title: 'POLITICA DE PUNTOS', pageName: 'StarprogramPage', icon: 'git-compare' },
                        { title: 'PROMOCIONES', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' },
                        { title: 'EVENTOS', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'calendar' },
                    ];
                }
            });
        });
    };
    MenuPage.prototype.openPage = function (page) {
        var childNavs = this.nav.getActiveChildNavs();
        var childTabNav = childNavs.find(function (_a) {
            var viewCtrl = _a.viewCtrl;
            return (viewCtrl && viewCtrl.id === page.pageName);
        });
        if (childTabNav && (typeof page.index !== 'undefined')) {
            childTabNav.select(page.index);
        }
        else {
            if (page.pageName == 'StarprogramPage') {
                window.open('http://agexportplus.iflexsoftware.com/files/Politicas.pdf', '_system');
            }
            else {
                this.nav.setRoot(page.pageName, { tabIndex: page.index });
            }
        }
        /*
        
            let params = {};
         
            // The index is equal to the order of our tabs inside tabs.ts
            if (page.index) {
              params = { tabIndex: page.index };
            }
         
            // The active child nav is our Tabs Navigation
            if (this.nav.getActiveChildNavs() && page.index != undefined) {
              this.nav.getActiveChildNavs()[0].select(page.index);
            } else {
              // Tabs are not active, so reset the root page
              // In this case: moving to or from SpecialPage
              this.nav.setRoot(page.pageName, params);
            }
            */
    };
    MenuPage.prototype.isActive = function (page, tabPage) {
        //const childTabsNav: any[] = this.nav.getActiveChildNavs();
        //const selectedTab: Tab = childTabsNav.length && childTabsNav[0].getSelected && childTabsNav[0].getSelected();
        /*
        if (childTabsNav.length && typeof tabPage !== 'undefined') {
          if (selectedTab && selectedTab.root && selectedTab.root === tabPage) {
            return ;
          }
          return;
        }
        */
        var activeNav = this.nav.getActive();
        if (activeNav && activeNav.name && activeNav.name === page) {
            return;
        }
        return;
        /*
            // Again the Tabs Navigation
            let childNav = this.nav.getActiveChildNavs()[0];
         
            if (childNav) {
              if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'secondary';
              }
              return;
            }
         
            // Fallback needed when there is no active childnav (tabs not active)
            if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
              return 'secondary';
            }
            return;
        
            */
    };
    MenuPage.prototype.logout = function () {
        console.log("--LogOut--");
        this.storage.set("success", false);
        this.storage.set("session", null);
        this.storage.set("session_id", null);
        this.storage.set("profile", null);
        this.storage.set("role", null);
        this.navCtrl.push(this.activatePage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"D:\Documentos\GitHub\AgexportProd\src\pages\menu\menu.html"*/'<ion-menu [content]="content" side="right" persistent="true" >\n\n    <ion-header >\n\n      <ion-toolbar color="menu">\n\n        <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n   \n\n    <ion-content >\n\n      <ion-list color="menu">\n\n        <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n            <ion-icon item-start [name]="p.icon" color="darkGray"></ion-icon>\n\n            {{ p.title }}\n\n          </button>\n\n          <!-- \n\n          <button ion-item menuClose (click)="openPage(9)">\n\n            <ion-icon item-start name="cash"></ion-icon>\n\n            Programa de Beneficios\n\n          </button>\n\n          <button ion-item menuClose (click)="openPage(9)">\n\n            <ion-icon item-start name="star"></ion-icon>\n\n            Programa de Puntos\n\n          </button>\n\n          <button ion-item menuClose (click)="openPage(9)">\n\n            <ion-icon item-start name="star"></ion-icon>\n\n            Estado de Puntos\n\n          </button>\n\n          <button ion-item menuClose (click)="openPage(9)">\n\n            <ion-icon item-start name="people"></ion-icon>\n\n            Mis Invitados\n\n          </button> -->\n\n          <button ion-item menuClose (click)="logout()" color="darkGray">\n\n            <ion-icon item-start name="log-out" color="light"></ion-icon>\n\n            <p class="light">Cerrar Sesion</p>\n\n          </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n   \n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n  '/*ion-inline-end:"D:\Documentos\GitHub\AgexportProd\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=7.js.map