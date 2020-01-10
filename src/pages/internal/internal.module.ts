import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternalPage } from './internal';

@NgModule({
  declarations: [
    InternalPage,
  ],
  imports: [
    IonicPageModule.forChild(InternalPage),
  ],
})
export class InternalPageModule {}
