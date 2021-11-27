import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealPageRoutingModule } from './real-routing.module';

import { RealPage } from './real.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealPageRoutingModule,
    SharedPageModule
  ],
  declarations: [RealPage]
})
export class RealPageModule {}
