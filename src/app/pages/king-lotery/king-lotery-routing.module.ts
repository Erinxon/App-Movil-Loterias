import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KingLoteryPage } from './king-lotery.page';

const routes: Routes = [
  {
    path: '',
    component: KingLoteryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KingLoteryPageRoutingModule {}
