import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the HelploginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-helplogin',
  templateUrl: 'helplogin.html',
})
export class HelploginPage {
  loading: Loading;
  help = { email: null, phone:null};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private rest: RestProvider,
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelploginPage');
  }

  helpForm(){
    console.log("Start Posting:"+JSON.stringify(this.help));
    this.showLoading();

    if (this.help.email == null || this.help.phone == null ){
      this.showError("El correo y el telefono son obligatorios");
    } else {
      this.rest.helpLogin(this.help).then((result:any)=>{
        console.log("Activate Return:", JSON.stringify(result));
        this.showError(result.data.message);
        this.navCtrl.push("ActivatePage"); 
      }, (error) => {
        this.showError(error);
      })
    }
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
