import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotekaPageRoutingModule } from './loteka-routing.module';

import { LotekaPage } from './loteka.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotekaPageRoutingModule,
    SharedPageModule
  ],
  declarations: [LotekaPage]
})
export class LotekaPageModule {}
