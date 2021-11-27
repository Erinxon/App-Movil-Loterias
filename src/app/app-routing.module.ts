import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nacional',
    pathMatch: 'full'
  },
  {
    path: 'americanas',
    loadChildren: () => import('./pages/americanas/americanas.module').then( m => m.AmericanasPageModule)
  },
  {
    path: 'anguila',
    loadChildren: () => import('./pages/anguila/anguila.module').then( m => m.AnguilaPageModule)
  },
  {
    path: 'king-lotery',
    loadChildren: () => import('./pages/king-lotery/king-lotery.module').then( m => m.KingLoteryPageModule)
  },
  {
    path: 'la-suerte',
    loadChildren: () => import('./pages/la-suerte/la-suerte.module').then( m => m.LaSuertePageModule)
  },
  {
    path: 'leidsa',
    loadChildren: () => import('./pages/leidsa/leidsa.module').then( m => m.LeidsaPageModule)
  },
  {
    path: 'lote-dom',
    loadChildren: () => import('./pages/lote-dom/lote-dom.module').then( m => m.LoteDomPageModule)
  },
  {
    path: 'loteka',
    loadChildren: () => import('./pages/loteka/loteka.module').then( m => m.LotekaPageModule)
  },
  {
    path: 'primera',
    loadChildren: () => import('./pages/primera/primera.module').then( m => m.PrimeraPageModule)
  },
  {
    path: 'nacional',
    loadChildren: () => import('./pages/nacional/nacional.module').then( m => m.NacionalPageModule)
  },
  {
    path: 'real',
    loadChildren: () => import('./pages/real/real.module').then( m => m.RealPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
