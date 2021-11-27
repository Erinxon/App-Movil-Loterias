import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnguilaPageRoutingModule } from './anguila-routing.module';

import { AnguilaPage } from './anguila.page';
import { SharedPage } from 'src/app/shared/shared.page';
import { SharedPageModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnguilaPageRoutingModule,
    SharedPageModule
  ],
  declarations: [AnguilaPage]
})
export class AnguilaPageModule {}
