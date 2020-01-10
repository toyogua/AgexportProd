import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Generated class for the InternalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-internal',
  templateUrl: 'internal.html',
})
export class InternalPage {
  action: any;
  url: SafeResourceUrl;
  session_id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController,
    private storage: Storage, 
    private sanitized: DomSanitizer) {
  }

  ionViewWillLoad(){
    this.action = this.navParams.get('action');
    console.log(JSON.stringify(this.action));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternalPage');
    
  }
  ionViewWillEnter(){
    this.storage.get("session_id").then((session_id) => {
      this.session_id = session_id;
     
    })
  }
  saniteze(session_id) {
    let agg = "?";
      if (this.action.url.indexOf('?') > -1){
        agg ="&"; 
      } 
    const to_sanitize = (this.action.session == false)?this.action.url:this.action.url+agg+"session_id="+session_id;
    let url = this.sanitized.bypassSecurityTrustResourceUrl(to_sanitize);
    return url
  }
  closeModal(){
    this.view.dismiss(this.action);
  }

}
