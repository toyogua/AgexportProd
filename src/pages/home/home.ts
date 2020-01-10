import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ActivatePage} from '../activate/activate';
//import { ValidatePage } from '../validate/validate';
//import { MenuPage } from '../menu/menu';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading: Loading;
  activate = ActivatePage;
  //menuPage = MenuPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage,
    private loadingCtrl: LoadingController ) {
  }

  ionViewDidEnter() {
    //this.showLoading();
    this.storage.get('success').then((val)=>{
      if (!val){
        console.log("Start new session");
        this.navCtrl.push(this.activate); 
      } else {
        console.log("Session already exists");
        this.storage.get('session').then((val1)=>{
          console.log("Session", JSON.stringify(val1));
        });
        this.storage.get('session_id').then((val1)=>{
          console.log("Session_id", JSON.stringify(val1));
        });
        console.log("Cleaning Session...");
        //this.storage.set('success', null);
        this.navCtrl.setRoot('MenuPage');
      }

    });
  
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
