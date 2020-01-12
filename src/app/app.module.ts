import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { RestProvider } from '../providers/rest/rest';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Device } from '@ionic-native/device';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { HomePageModule } from '../pages/home/home.module';
import { ActivatePageModule } from '../pages/activate/activate.module';
import { ValidatePageModule } from '../pages/validate/validate.module';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HelploginPageModule } from '../pages/helplogin/helplogin.module';
import { NewContactPageModule } from '../pages/new-contact/new-contact.module';
import { EditContactPageModule } from '../pages/edit-contact/edit-contact.module';
import { LoginProvider } from '../providers/login/login';
import { SigninProvider } from '../providers/signin/signin';

  


@NgModule({
  declarations: [
    MyApp,
  //  HomePage,
  //  ActivatePage,
  //  ContactsPage,
  //  EventsPage,
  //  HelploginPage,
  //  MenuPage,
  //  OfferPage,
  //  OfferdetailPage,
  //  StardetailPage,
  //  ValidatePage,
   // MainPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    QRCodeModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HomePageModule,
    ActivatePageModule,
    ValidatePageModule,
    HelploginPageModule,
    NewContactPageModule,
    EditContactPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //  HomePage,
  //  ActivatePage,
  //  ContactsPage,
  //  EventsPage,
  //  HelploginPage,
   // MenuPage,
   // OfferPage,
   // OfferdetailPage,
   // StardetailPage,
   // ValidatePage,
    //MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UniqueDeviceID, 
    Device,
    BarcodeScanner,
    InAppBrowser,
    LoginProvider,
    SigninProvider
  ]
})
export class AppModule {}
