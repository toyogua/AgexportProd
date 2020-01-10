//import { MainPage } from '../main/main';
//import { OfferPage } from '../offer/offer';
//import { EventsPage } from '../events/events';
//import { TabsPage } from '../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, Tabs } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ActivatePage } from '../activate/activate';
import { Storage } from '@ionic/storage';
//import { from } from 'rxjs';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
  
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
  activatePage = ActivatePage;
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'INICIO', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
    { title: 'INFORMACIÓN GENERAL', pageName: 'OfferprogramPage', icon:'information-circle' },
    { title: 'POLITICA DE PUNTOS', pageName: 'StarprogramPage', icon:'git-compare' },
    { title: 'CONSULTA DE PUNTOS', pageName: 'StarbalancePage', icon:'stats' },
    { title: 'PROMOCIONES', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' },
    { title: 'EVENTOS', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'calendar' },
    { title: 'MIS INVITADOS', pageName: 'InvitedPage', icon:'people' },
    
  ];
 
  constructor(public navCtrl: NavController, private rest: RestProvider, private storage: Storage) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.rest.profile().then(
      (resolve) =>{
    }, (reject) => {
      console.log("Profile Reject", JSON.stringify(reject));
    });
    this.storage.get('role').then((role) => {
      this.storage.get('type').then((type)=> {
        console.log('Type:', type);
        if (role == 'Establecimiento' || role == 'Agexport' ) {
          this.pages = [
            { title: 'INICIO', pageName: 'MainPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
            { title: 'PROMOCIONES', pageName: 'OfferPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' }
          ];
        } else if (role == 'Regular' && type != 'Principal'){
          this.pages = [
            { title: 'INICIO', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: /*'qr-scanner'*/ 'home' },
            { title: 'INFORMACIÓN GENERAL', pageName: 'OfferprogramPage', icon:'information-circle' },
            { title: 'POLITICA DE PUNTOS', pageName: 'StarprogramPage', icon:'git-compare' },
            { title: 'PROMOCIONES', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'pricetags' },
            { title: 'EVENTOS', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 2, icon: 'calendar' },
         ]
        }
      })
    })
  }
 
  openPage(page: PageInterface) {
    const childNavs: any[] = this.nav.getActiveChildNavs();
    const childTabNav: Tabs = childNavs.find(({viewCtrl}) => (viewCtrl && viewCtrl.id === page.pageName));
    if (childTabNav && (typeof page.index !== 'undefined')) {
      childTabNav.select(page.index);
    } else {
      if (page.pageName =='StarprogramPage') {
        window.open('http://agexportplus.iflexsoftware.com/files/Politicas.pdf', '_system');
      } else {
        this.nav.setRoot(page.pageName, {tabIndex: page.index});
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
  }
 
  isActive(page, tabPage) {

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


    const activeNav = this.nav.getActive();
    if (activeNav && activeNav.name && activeNav.name === page) {
      return ;
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
  }
  logout(){
    console.log("--LogOut--");
    this.storage.set("success", false);
    this.storage.set("session", null);
    this.storage.set("session_id", null);
    this.storage.set("profile", null);
    this.storage.set("role", null);
    this.navCtrl.push(this.activatePage);
  }
 
}