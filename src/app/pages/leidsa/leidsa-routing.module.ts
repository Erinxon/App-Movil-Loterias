import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeidsaPage } from './leidsa.page';

const routes: Routes = [
  {
    path: '',
    component: LeidsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeidsaPageRoutingModule {}
