import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaSuertePageRoutingModule } from './la-suerte-routing.module';

import { LaSuertePage } from './la-suerte.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaSuertePageRoutingModule,
    SharedPageModule
  ],
  declarations: [LaSuertePage]
})
export class LaSuertePageModule {}
