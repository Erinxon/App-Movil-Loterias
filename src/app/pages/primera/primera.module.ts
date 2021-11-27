import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeraPageRoutingModule } from './primera-routing.module';

import { PrimeraPage } from './primera.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeraPageRoutingModule,
    SharedPageModule
  ],
  declarations: [PrimeraPage]
})
export class PrimeraPageModule {}
