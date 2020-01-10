import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
//import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ValidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validate',
  templateUrl: 'validate.html',
})
export class ValidatePage {
  loading: Loading;
  validate = { name: null, phone:null, sms_code: null};
  //menuPage = MenuPage;
  stored: any; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    private rest: RestProvider,
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidatePage');
  }
  ionViewDidEnter(){
    this.storage.get('session').then((val) =>{
      this.stored = val;
      this.validate.name = val.concat_ws;
    });
    
  }

  public validateForm(){
    this.showLoading();
    console.log("Validate Page Session:", JSON.stringify(this.stored));

    if (this.validate.sms_code == null){
      this.showError("Debe ingresar el codigo SMS");
    } else if (this.validate.sms_code != this.stored.sms_code) {
      this.showError("El codigo SMS con coincide. Revise sus datos o solicite un nuevo codigo SMS");
    } else {
      this.storage.get("validated_phone").then((val) => {
        this.validate.phone = val;
        console.log("Phone - Stored", this.validate.phone);
        this.rest.validate(this.validate).then((result) => {
          this.loading.dismiss();
          this.storage.set("success", true);
          this.storage.set('session_id', this.stored.session_id);
          this.rest.profile().then(
            (resolve) =>{
              console.log("Profile");
              this.navCtrl.setRoot('MenuPage');
          }, (reject) => {
            console.log("Profile Reject", JSON.stringify(reject));
          });
        }, (error) => {
          this.showError(error)
        })
      });
    }

  }
  newSMS(){
    this.showLoading();
    this.rest.sms().then((resolve)=>{
      this.showError("En seguida recibira un nuevo código SMS");
      this.storage.get('session').then((val) =>{
        this.stored = val;
        this.validate.name = val.concat_ws;
      });
    })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
