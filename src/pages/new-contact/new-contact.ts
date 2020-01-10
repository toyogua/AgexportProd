import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Loading, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {
  areas: any;
  positions: any
  newContact= { 
    c_bpartner_id: null,
    firstname: null, lastname: null, phone: null, email: null, area: null, position: null,
    index: null,
    session_id: null }
  loading: Loading;
  session_id = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private view: ViewController,
    private rest: RestProvider,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactPage');
    this.storage.get("session_id").then((session_id)=>{
      this.session_id = session_id;
    })
    this.getCatalog();
  }
  sendNewContact(){
    if (this.newContact.firstname ==null || this.newContact.lastname == null || this.newContact.email == null || this.newContact.phone == null){
      this.presentToast("Todos los campos son obligatorios. Revise sus datos");

    } else {
      this.storage.get("employeeIndex").then((employeeIndex)=>{
        console.log("Stored Index", employeeIndex);
        let pos = [1,2,3,4,5];
          employeeIndex.forEach(element => {
           pos[(element-1)] = pos[element];
          });
          this.newContact.index = pos[0];
          this.newContact.session_id = this.session_id;
          console.log("New Contact Data:", JSON.stringify(this.newContact));
          this.rest.contactAdd(this.newContact).then((resolve: any) => {
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
              this.presentToast(reject.error.error.error.message);
            } else {
              this.presentToast("No hay conexion con el servidor. Revise su conexión a internet");
            }
          })
      })
    }
  }
    closeModal(){
      this.view.dismiss();
    }
    getCatalog(){
      this.rest.catalogs().then((catalogs: any)=>{
        this.areas = catalogs.AREAS;
        this.positions = catalogs.PUESTOS;
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
