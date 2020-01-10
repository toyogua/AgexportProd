import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StardetailPage } from './stardetail';

@NgModule({
  declarations: [
    StardetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StardetailPage),
  ],
})
export class StardetailPageModule {}
