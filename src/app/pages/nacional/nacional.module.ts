import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NacionalPageRoutingModule } from './nacional-routing.module';

import { NacionalPage } from './nacional.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NacionalPageRoutingModule,
    SharedPageModule
  ],
  declarations: [NacionalPage]
})
export class NacionalPageModule {}
