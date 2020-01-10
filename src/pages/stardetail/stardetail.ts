import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, 
   ViewController, ToastController, Modal, ModalOptions, ModalController } from 'ionic-angular';
//import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the StardetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stardetail',
  templateUrl: 'stardetail.html',
})
export class StardetailPage {
  event: any;
  asistLabel = "Por Confirmar";
  assist: boolean = false;
  role = null
  actionArray = [];
  accessArray = [];
  fixedAction = { url: "http://bi.iflexsoftware.com:8080/pentaho/",
   browsertype:"Internal",
   session: false};
   fixedAction1 = { url: "http://bi.iflexsoftware.com:8080/pentaho/",
   browsertype:"External",
   session: false};
   enableAccess = false;
   error = false;
   r_exit = false;
   r_enter = true;
   customStyle = "toast-nice";
   loading: Loading;
   publicEvents: any;
  privateEvents: any;
  schoolEvents: any;
   

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private scanner: BarcodeScanner,
    private rest: RestProvider,
    private modal: ModalController
    ) {
  }

  ionViewWillLoad(){
    this.event = this.navParams.get('event');
    //console.log("EventDatil Param Recevied:", JSON.stringify(this.event));
    if (this.event.confirmation == "Confirmado") {
      this.asistLabel = "Confirmado";
      this.assist = true;
    } else if (this.event.confirmation == "No Asistire") {
      this.asistLabel = "No Asistire";
      this.assist = false;
    }
    if (this.event.actions != undefined) {
      this.actionArray = this.event.actions;
    }
    this.fixedAction.url = this.fixedAction.url+"&activity_id="+this.event.a001_activity_id;
    if (this.event.access != undefined) {
      this.enableAccess = true;
      this.accessArray = this.event.access;
    }
    if (this.event.r_enter!=undefined){
      this.r_enter = (this.event.r_enter=="N")?false:true;
    }
    if (this.event.r_exit!=undefined){
      this.r_exit = (this.event.r_exit=="N")?false:true;
    }
    console.log('ionViewDidLoad StardetailPage');
    this.storage.get("settings").then((settings)=>{
      this.fixedAction.url = settings.base_dashboard+"&activity_id="+this.event.a001_activity_id;
      this.fixedAction1.url = settings.base_report+"&id="+this.event.external_id;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StardetailPage');
    this.storage.get("role").then((role)=>{
      this.role = role;
    })
  }
  callClick(tel){
    console.log('Call Click', tel);
    window.open("tel:"+tel, '_system');
  }
  emailClick(email){
    console.log('Email Click', email);
    window.open("mailto:"+email,'_system', 'subject=Evento Agexport+')
  }

  dynamicAction(action){
    if (action.browsertype == "External"){
      this.openExternal(action);
    } else if (action.browsertype == "Internal") {
      this.openInternal(action);
    }
  }
  openEvent(event){
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create('StardetailPage', { event }, detailOptions);
    detail.present();
  }



  openExternal(action){
    this.storage.get("session_id").then((session_id) => {
      let agg = "?";
      if (action.url.indexOf('?') > -1){
        agg ="&"; 
      } 
      let fullpath = action.url+agg+"session_id="+session_id+"&activity_id="+this.event.a001_activity_id;
      window.open(fullpath, '_system', 'location=yes');
    });
  }
  openInternal(action){
    this.navCtrl.push('InternalPage', { action });
    /*
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create('InternalPage', { action }, detailOptions);
    detail.present();
    */
  }

  scanQR(){
    const qrData = {type: "Asistencia", record_id: this.event.activity_code, session_id: null };
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
  scanQRExit(){
    const qrData = {type: "Salida", record_id: this.event.activity_code, session_id: null };
    this.scanner.scan().then((qr)=>{
      qrData.session_id = qr.text; 
      this.rest.transaction(qrData).then((resolve: {message} ) => {
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

  updateConfirmation(){
    this.storage.get('session_id').then((session_id)=>{
      const postData = { 
        session_id: session_id,
        activity_code: this.event.activity_code,
        assist: this.assist
      }
      console.log('Assist Payload:', JSON.stringify(postData))
    
      
      this.rest.eventConfirmation(postData).then((resolve: any ) => {
        this.presentToast(resolve.data.message);
        if (this.event.confirmation == "Confirmado") {
          this.asistLabel = "No Asistire";
        } else if (this.event.confirmation == "No Asistire" || this.asistLabel == 'Por Confirmar') {
          this.asistLabel = "Confirmado";
        } 
      }, reject => {
        this.customStyle = "toast-danger";
        if (reject.status == '0' ){
          this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
        } else {
          this.presentToast(JSON.stringify(reject.error.error.message));
        }

      })
    })
    this.manualRefresh();

  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  manualRefresh(){
    console.log("Manual Refresh");
    this.showLoading();
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
      
    this.loading.dismiss();
  }


  closeModal(){
    this.view.dismiss(this.event);
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
