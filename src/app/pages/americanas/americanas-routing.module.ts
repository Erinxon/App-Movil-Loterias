import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmericanasPage } from './americanas.page';

const routes: Routes = [
  {
    path: '',
    component: AmericanasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmericanasPageRoutingModule {}
