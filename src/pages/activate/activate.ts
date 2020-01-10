import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { ValidatePage } from '../validate/validate';

/**
 * Generated class for the ActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activate',
  templateUrl: 'activate.html',
})
export class ActivatePage {
  loading: Loading;
  activate = { invitation_code: null, phone:null};
  validationData : any;
  validatePage = ValidatePage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    private rest: RestProvider,
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivatePage');
  }
  public activateForm(){
    console.log("Start Posting:"+JSON.stringify(this.activate));
    this.showLoading();

    if (this.activate.invitation_code == null || this.activate.phone == null ){
      this.showError("El codigo de invitacion y el telefono son obligatorios");
    } else {
      this.storage.set("validated_phone", this.activate.phone);

      this.rest.activate(this.activate).then((result)=>{
        console.log("Activate Return:", JSON.stringify(result));
        this.navCtrl.push(this.validatePage); 
      }, (error) => {
        this.showError(error);
      })
    }
  }
  helpLogin(){
    this.navCtrl.push("HelploginPage");
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
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
}
