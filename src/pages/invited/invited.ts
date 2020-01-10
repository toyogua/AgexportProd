import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ToastController, Modal, ModalController, ModalOptions } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
import { NewContactPage } from '../new-contact/new-contact';


/**
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invited',
  templateUrl: 'invited.html',
})
export class InvitedPage {
contacts: any;
loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private rest :RestProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private modal: ModalController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitedPage');
    this.getContactsDB();
  }
  doRefresh(refresher){
    this.showLoading;
    this.rest.profile().then(
      (resolve: {data: {contacts: any}}) =>{
        console.log("Profile");
        console.log(JSON.stringify(resolve.data.contacts));
        this.storage.set("profile", resolve.data);
    }, (reject) => {
      console.log("Profile Reject", JSON.stringify(reject));
    });
    this.getContactsDB();
    refresher.complete();
  }
  contactEdit(c_contact_id){
    console.log("contact edit:"+c_contact_id);
  }
  newContact(){
    console.log("New Contact");
    const detailOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const detail: Modal = this.modal.create(NewContactPage, {  }, detailOptions);
    detail.present();
  }

  getContactsDB(){
    this.storage.get("profile").then((profile)=>{
      this.contacts = profile.contacts;
    })

  }
  delete(c_contact_id){
    this.showLoading
    this.rest.deleteContact(c_contact_id).then(
      (resolve : any )=>{
        this.presentToast(resolve.message);
    }, (reject)=> {
      if (reject.status == '0' ){
        this.presentToast("No hay comunicacion con el servicio. Revise su conexion a internet");
      } else {
        this.presentToast(JSON.stringify(reject.error.error.message));
      }

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
      duration: 3000,
      position: 'top',
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}

