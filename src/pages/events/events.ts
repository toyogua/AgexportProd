import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, 
  Modal, ModalController, ModalOptions, ToastController, Platform  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  showPublic = true;
  showSector = false;
  showSchool = false;
  selectedSegment: any;
  loading: Loading;
  error = false;
 
  publicEvents: any;
  privateEvents: any;
  schoolEvents: any;
  asistLabel = "No Confirmado";
  role: string = null;
  customStyle = "toast-nice";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private rest: RestProvider,
    private platform: Platform,
    private modal: ModalController,
    private storage: Storage,
    private scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.showLoading();
    this.manualRefresh();
    this.loading.dismiss();
  } 
  ionViewDidEnter() {
    this.showLoading();
    console.log('ionViewDidLoad EventsPage');
    this.manualRefresh();
    this.loading.dismiss();
      
  }
  manualRefresh(){
    //
    this.rest.events().then(
      (resolve: { succes, Publico, Privado, Escuela }) => {
        this.publicEvents =resolve.Publico;
        this.privateEvents=resolve.Privado;
        this.schoolEvents=resolve.Escuela;
        this.storage.get('role').then((role)=>{
          this.role = role;
          console.log('Events Role:', this.role);
        })
      },
      (reject) => {
        if (reject.status == '0' ) {
        } else {
          this.customStyle = "toast-danger";
          this.presentToast(JSON.stringify(reject.error.error.message));
        }
      });
    //
  }
  doRefresh(refresher){
    console.log("start refresher");
    this.showLoading();
    this.rest.events().then(
      (resolve: { succes, Publico, Privado, Escuela }) => {
        console.log("resolve");
        this.publicEvents =resolve.Publico;
        this.privateEvents=resolve.Privado;
        this.schoolEvents=resolve.Escuela;
      },
      (reject) => {
        if (reject.status == '0' ) {
        } else {
          this.customStyle = "toast-danger";
          this.presentToast(JSON.stringify(reject.error.error.message));
        } 
      }
    );
    refresher.complete();
    this.loading.dismiss();
  }
  openEvent(event){
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create('StardetailPage', { event }, detailOptions);
    detail.onDidDismiss(()=>{
      this.showLoading();
      this.manualRefresh();
      this.loading.dismiss();
    })
    detail.present();
  }
  onSegmentChanged(segmentButton: any) {
    switch (segmentButton.value){
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
   

  }
  scanQRFav(){
    console.log("fav Action");
    this.storage.get("session_id").then((session_id) => {
      const qrData = {type: "Asistencia", record_id: null, session_id: session_id };
      this.scanner.scan().then((qr)=>{
        qrData.record_id = qr.text;
        console.log("Fav Scan Payload", JSON.stringify(qrData));
        this.rest.transaction(qrData).then((resolve: {message, style} ) => {
          if (resolve.style != undefined) {
            this.customStyle = resolve.style;
          }
          this.presentToast(resolve.message);
        }, reject => {
          if (reject.status == '0' ){
            this.customStyle = "toast-danger";
            this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
          } else {
            this.presentToast(JSON.stringify(reject.error.error.message));
          }
        })
      })
    })

  }

  updateConfirmationL(event){
    console.log('Confirmation', JSON.stringify(event));
    this.showLoading();
    this.storage.get('session_id').then((session_id)=>{
      let new_assist = (event.confirmation == 'Confirmado')? false: true;
      const postData = { 
        session_id: session_id,
        activity_code: event.activity_code,
        assist: new_assist
      }
      console.log('Assist Payload:', JSON.stringify(postData))
      this.rest.eventConfirmation(postData).then((resolve: any ) => {
        if (resolve.style != undefined) {
          this.customStyle = resolve.style;
        }
        this.manualRefresh();
        this.presentToast(resolve.data.message);
      }, reject => {
        this.customStyle = "toast-danger";
        if (reject.status == '0' ){
          this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
        } else {
          this.presentToast(JSON.stringify(reject.error.error.message));
        }

      })
    });
    this.loading.dismiss();
    

  }
  scanQR(activity_code){
    const qrData = {type: "Asistencia", record_id: activity_code, session_id: null };
    this.scanner.scan().then((qr)=>{
      qrData.session_id = qr.text; 
      this.rest.transaction(qrData).then((resolve: {message, style} ) => {
        if (resolve.style != undefined) {
          this.customStyle = resolve.style;
        }
        this.presentToast(resolve.message);
      }, reject => {
        this.customStyle = "toast-danger";
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

  openLocation(lat, lng){
    let destination = lat + ',' + lng;

    if(this.platform.is('ios')){
      window.open('maps://?q=' + destination, '_system');
    } else {
      let label = encodeURI('Evento Agexport');
      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }
  dynamicAction(action){
    if (action.browsertype == "External"){
      this.openExternal(action);
    } else if (action.browsertype == "Internal") {
      this.openInternal(action);
    }
  }


  openExternal(action){
    this.storage.get("session_id").then((session_id) => {
      let fullpath = action.url+"?session_id="+session_id;
      window.open(fullpath, '_system', 'location=yes');
    });
  }
  openInternal(action){
    this.navCtrl.push('InternalPage', { action });
    /*const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create('InternalPage', { action }, detailOptions);
    detail.present();
    */
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
      this.customStyle = "toast-nice";
    });
    toast.present();
  }

}
