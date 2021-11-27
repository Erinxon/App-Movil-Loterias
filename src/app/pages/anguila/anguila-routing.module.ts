import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnguilaPage } from './anguila.page';

const routes: Routes = [
  {
    path: '',
    component: AnguilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnguilaPageRoutingModule {}
