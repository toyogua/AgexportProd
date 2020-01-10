import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController, Loading } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the EditContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
  editContact = {
    firstname: null, lastname: null, 
    genere:null,
    personal_id:null,
    e_today_:false,
    e_today:"N",
    personal_id_type:null,
    e_sector:"N",
    e_ece:"N",
    e_competivity:"N",
    e_vupe:"N",
    e_urgent:"N", 
    e_sector_:false,
    e_ece_:false,
    e_competivity_:false,
    e_vupe_:false,
    e_urgent_:false, 
    email_:null, phone_:null, c_contact_id:null, session_id: null } ;
  generes = [{value:"M", name:"Masculino"}, {value:"F", name:"Femenino"}];
  docTypes =[];
  loading: Loading;
  session_id = null;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController, private rest: RestProvider, private storage: Storage, 
    private loadingCtrl: LoadingController,private toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditContactPage');
    this.storage.get("session_id").then((session_id)=>{
      this.session_id = session_id;
    })
    this.getCatalog();
    this.getContactsDB();
  }

  closeModal(){
    this.view.dismiss();
  }
  getCatalog(){
    this.rest.catalogs().then((catalogs: any)=>{
      this.docTypes = catalogs.PERSONAL_ID;
    })
  }
  getContactsDB(){
    this.storage.get("profile").then((profile)=>{
      let me = profile;
      console.log(JSON.stringify(me));
      let e_today = (me.e_today == "Y")?true:false;
      let e_sector = (me.e_sector == "Y")?true:false;
      let e_ece = (me.e_ece == "Y")?true:false;
      let e_competivity = (me.e_competivity == "Y")?true:false;
      let e_vupe = (me.e_vupe == "Y")?true:false;
      let e_urgent = (me.e_urgent == "Y")?true:false;
      this.editContact.firstname= me.firstname1;
      this.editContact.lastname= me.lastname1;
      this.editContact.genere= me.genere;
      this.editContact.personal_id=me.personal_id;
      this.editContact.e_today_= e_today;
      this.editContact.personal_id_type=me.personal_id_type;
      this.editContact.e_sector_=e_sector;
      this.editContact.e_ece_=e_ece;
      this.editContact.e_competivity_=e_competivity;
      this.editContact.e_vupe_=e_vupe;
      this.editContact.e_urgent_=e_urgent;
      this.editContact.email_=me.email1;
      this.editContact.phone_=me.phone1; 
      this.editContact.c_contact_id=me.c_contact_id;
      this.editContact.session_id=this.session_id;
    })
  }
  sendEditContact(){
    this.editContact.e_today =(this.editContact.e_today_)?"Y":"N";
    this.editContact.e_sector =(this.editContact.e_sector_)?"Y":"N";
    this.editContact.e_ece =(this.editContact.e_ece_)?"Y":"N";
    this.editContact.e_competivity =(this.editContact.e_competivity_)?"Y":"N";
    this.editContact.e_vupe =(this.editContact.e_vupe_)?"Y":"N";
    this.editContact.e_urgent =(this.editContact.e_urgent_)?"Y":"N";
    this.rest.contactUpdate(this.editContact).then((resolve: any) => {
      this.rest.profile().then(
        (resolve: {data: {contacts: any}}) =>{
          console.log("Profile");
          console.log(JSON.stringify(resolve.data.contacts));
          this.storage.set("profile", resolve.data);
      }, (reject) => {
        console.log("Profile Reject", JSON.stringify(reject));
      });
      if (resolve.status == 0 ){
        this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
      } else if (resolve.status=='400' || resolve.status=='404'){
        this.presentToast(resolve.error.error.message);
      } else {
        this.presentToast(resolve.message);
      }
    }, (reject: any) => {
      console.log(JSON.stringify(reject));
      if (reject.status != 0 ){
        this.presentToast(reject.error.error.message);
      } else {
        this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
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
