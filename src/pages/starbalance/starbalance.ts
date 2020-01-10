import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Generated class for the StarbalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starbalance',
  templateUrl: 'starbalance.html',
})
export class StarbalancePage {
url: SafeResourceUrl;
session_id : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    //private iab: InAppBrowser, 
    private storage: Storage, 
    private sanitized: DomSanitizer) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StarbalancePage');
  }
  ionViewWillEnter(){
    this.storage.get("session_id").then((session_id) => {
      this.session_id = session_id;
    })
  }
  saniteze(session_id) {
    let url = this.sanitized.bypassSecurityTrustResourceUrl('http://agexportplus.iflexsoftware.com/balance.php?session_id='+session_id);
    return url
  }
}
