import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';


@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    QRCodeModule,
    IonicPageModule.forChild(MainPage),
  ],
})
export class MainPageModule {}
