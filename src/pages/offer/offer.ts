import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ToastController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {
  loading: Loading;
  customStyle = "toast-nice";
  error = false;
 
  offers: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rest :RestProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private modal: ModalController,
    private scanner: BarcodeScanner, 
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferPage');
    this.showLoading();
    this.rest.offer().then(
      (resolve: { succes, offer }) => {
        this.offers =resolve.offer;
      },
      (reject) => {
        if (reject.status == '0' ) {
        } else {
          this.presentToast(JSON.stringify(reject.error.error.message));
        }
      }
    );
    this.loading.dismiss();
  } 
  doRefresh(refresher){
    this.showLoading();
    this.rest.offer().then(
      (resolve: { succes, offer }) => {
        this.offers =resolve.offer;
      },
      (reject) => {
        if (reject.status == '0' ) {
        } else {
          this.presentToast(JSON.stringify(reject.error.error.message));
        }
      }
    );
    refresher.complete();
    this.loading.dismiss();
  }
  openOffer(offer){
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create('OfferdetailPage', { offer }, detailOptions);
    detail.present();
  }

  scanQR(a001_offer_id){
    const qrData = {type: "Beneficio", record_id: a001_offer_id, session_id: null };
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



  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
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
