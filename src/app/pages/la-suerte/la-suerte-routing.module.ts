import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaSuertePage } from './la-suerte.page';

const routes: Routes = [
  {
    path: '',
    component: LaSuertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaSuertePageRoutingModule {}
