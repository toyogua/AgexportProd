import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the OfferdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html',
})
export class OfferdetailPage {
  offer: any;
  external = false;
  role = null;
  allowScanner = false;
  customStyle = "toast-nice";
  error = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private view: ViewController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private scanner: BarcodeScanner,
    private rest: RestProvider ) {
  }
  ionViewWillLoad(){
    this.offer = this.navParams.get('offer');
    if (this.offer.external_url != null){
      this.external = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferdetailPage');
    this.storage.get("role").then((role)=>{
      this.role = role;
      if (role == "Establecimiento" || role == "Agexport"){
        this.allowScanner = true;
      }
      if (this.offer.allow_scan != undefined && this.offer.allow_scan == "Y"){
        this.allowScanner = true;
      } else {
        this.allowScanner = false;
      }
    });


  }
  openLink(external_url){
    window.open(external_url, '_system', 'location=yes');

  }
  scanQR(){
    const qrData = {type: "Beneficio", record_id: this.offer.a001_offer_id, session_id: null };
    this.scanner.scan().then((qr)=>{
      qrData.session_id = qr.text; 
      this.rest.transaction(qrData).then((resolve: {message} ) => {
        this.presentToast(resolve.message);
      }, reject => {
        if (reject.status == '0' ){
          this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
        } else {
          this.presentToast(JSON.stringify(reject.error.error.message));
        }

      })

    })
  }
  callClick(tel){
    console.log('Call Click', tel);
    window.open("tel:"+tel, '_system');
  }
  
  closeModal(){
    this.view.dismiss(this.offer);
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'middle',
      cssClass: this.customStyle
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.error = false;
      this.customStyle = "toast-nice";
    });
    toast.present();
  }

}
