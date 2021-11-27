import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoteDomPage } from './lote-dom.page';

const routes: Routes = [
  {
    path: '',
    component: LoteDomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoteDomPageRoutingModule {}
