import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoteDomPageRoutingModule } from './lote-dom-routing.module';

import { LoteDomPage } from './lote-dom.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoteDomPageRoutingModule,
    SharedPageModule
  ],
  declarations: [LoteDomPage]
})
export class LoteDomPageModule {}
