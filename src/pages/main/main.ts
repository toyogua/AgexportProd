import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, Platform, AlertController, ToastController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActivatePage} from '../activate/activate';
import { RestProvider } from '../../providers/rest/rest';
import { Device } from '@ionic-native/device';
//import { Subscription } from 'rxjs';
import { EditContactPage } from '../edit-contact/edit-contact';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  qrData = null;
  createdCode = null;
  elementType = 'canvas';
  codeWidth = '80';
  contact_name = '';
  company_name = '';
  activatePage = ActivatePage;
  c_contact_id = '';
  loading: Loading;
  summary = '';
  role ='';
  customStyle = "toast-nice";
 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    private rest: RestProvider, 
    public device: Device,
    private loadingCtrl: LoadingController,
    public platform: Platform,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modal: ModalController,
    private scanner: BarcodeScanner ) {

//      this.onResumeSubscription = platform.resume.subscribe(()=>{
//       this.storage.get("session").then((val) => {
//          this.contact_name = val.concat_ws;
//          this.company_name = val.company;
//          this.c_contact_id = val.c_contact_id;
//          this.confirmSession();
//        });
//      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  ionViewDidEnter(){

    this.rest.settings().then(
      (resolve : {settings}) => {
        console.log("Store Settings", JSON.stringify(resolve.settings));
        if (resolve.settings != null){
          this.storage.set('settings', resolve.settings);
        }
      }
    );

    this.storage.get("session").then((val) => {
      this.contact_name = val.concat_ws;
      this.company_name = val.company;
      this.c_contact_id = val.c_contact_id;
      this.confirmSession();
    });
    
  }
  doRefresh(refresher){
    this.storage.get("session").then((val) => {
      this.contact_name = val.concat_ws;
      this.company_name = val.company;
      this.c_contact_id = val.c_contact_id;
      this.confirmSession();
    });
    refresher.complete();
  }
  confirmSession(){
    this.showLoading()
    let confirmData = {
      c_contact_id : this.c_contact_id,
      device_id: this.device.uuid,
      serial: this.device.uuid
    }
    this.rest.confirm(confirmData).then(
      (resolve: {session_id}) =>{
        console.log('Confirm Result:', JSON.stringify(resolve));
        if (resolve.session_id != null){
          this.storage.set('session_id', resolve.session_id);
          this.createdCode = resolve.session_id;
          this.storage.get('role').then((role)=>{
            this.role = role;
            console.log('Events Role:', this.role);
          });
          this.rest.profile().then(
            (resolve) =>{
              console.log("Profile");
              this.storage.get("profile").then((profile) => {
                this.summary = profile.Company.summary; 
                console.log("Summary", JSON.stringify(profile.Company.summary));
              });
          }, (reject) => {
            console.log("Profile Reject", JSON.stringify(reject));
          });
        }
    }, (reject) => {
      console.log("Not Confirmed", JSON.stringify(reject));
      
      if (reject.status == '0' ){
        this.storage.get("session_id").then((val) => {
          this.createdCode = val;
        });
      } else {
        this.presentToast(JSON.stringify(reject.error.error.message));
        this.storage.set("session_id", null);
        this.storage.set("session", null);
        this.storage.set("success", false);
        this.navCtrl.push(this.activatePage);
      }
    });
    
    this.loading.dismiss();
    
  }
  contactEdit(){
    console.log("contact edit");
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: true
    };
    const detail: Modal = this.modal.create(EditContactPage, {  }, detailOptions);
    detail.present();
  }
  goBalance(){
    console.log("balance page"); 
  }
  partnerEdit(){
    console.log("bartner edit");
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
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
  scanQRFav(){
    console.log("fav Action");
    this.storage.get("session_id").then((session_id) => {
      const qrData = {type: "Both", record_id: null, session_id: session_id };
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


}
