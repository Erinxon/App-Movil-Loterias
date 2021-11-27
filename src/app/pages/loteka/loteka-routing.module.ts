import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotekaPage } from './loteka.page';

const routes: Routes = [
  {
    path: '',
    component: LotekaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotekaPageRoutingModule {}
