import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericanasPageRoutingModule } from './americanas-routing.module';

import { AmericanasPage } from './americanas.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericanasPageRoutingModule,
    SharedPageModule
  ],
  declarations: [AmericanasPage]
})
export class AmericanasPageModule {}
