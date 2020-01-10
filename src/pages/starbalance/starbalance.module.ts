import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarbalancePage } from './starbalance';

@NgModule({
  declarations: [
    StarbalancePage,
  ],
  imports: [
    IonicPageModule.forChild(StarbalancePage),
  ],
})
export class StarbalancePageModule {}
