import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


/**
 * Generated class for the StarprogramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starprogram',
  templateUrl: 'starprogram.html',
})
export class StarprogramPage {
  url: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitized: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarprogramPage');
    this.url = this.sanitized.bypassSecurityTrustResourceUrl('http://agexportplus.iflexsoftware.com/files/Politicas.pdf');
    window.open('http://agexportplus.iflexsoftware.com/files/Politicas.pdf', '_system');
  }

}
