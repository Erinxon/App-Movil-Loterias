import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealPage } from './real.page';

const routes: Routes = [
  {
    path: '',
    component: RealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealPageRoutingModule {}
