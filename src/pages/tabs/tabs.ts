import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = 'MainPage';
  tab2Root: any = 'OfferPage';
  tab3Root: any = 'EventsPage';
  vendor: boolean = false;
  regular: boolean = false;
  export: boolean = false;

  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.storage.get('role').then((role) => {
      console.log("Tabs role", role);
      if (role == "Establecimiento") {
        this.vendor = true;
      } else if (role == "Regular") {
        this.regular = true;
      } else if ( role == "Agexport"){
        this.export = true;
      }
    })
  }

}
