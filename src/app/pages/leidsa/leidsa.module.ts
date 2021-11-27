import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeidsaPageRoutingModule } from './leidsa-routing.module';

import { LeidsaPage } from './leidsa.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeidsaPageRoutingModule,
    SharedPageModule
  ],
  declarations: [LeidsaPage]
})
export class LeidsaPageModule {}
