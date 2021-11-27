import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KingLoteryPageRoutingModule } from './king-lotery-routing.module';

import { KingLoteryPage } from './king-lotery.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KingLoteryPageRoutingModule,
    SharedPageModule
  ],
  declarations: [KingLoteryPage]
})
export class KingLoteryPageModule {}
