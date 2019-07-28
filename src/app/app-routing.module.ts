import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cad-diarista', loadChildren: './cad-diarista/cad-diarista.module#CadDiaristaPageModule' },
  { path: 'list-cliente', loadChildren: './list-cliente/list-cliente.module#ListClientePageModule' },
  { path: 'list-diarista', loadChildren: './list-diarista/list-diarista.module#ListDiaristaPageModule' },
  { path: 'cad-cliente', loadChildren: './cad-cliente/cad-cliente.module#CadClientePageModule' },]  { path: 'teste-midia', loadChildren: './teste-midia/teste-midia.module#TesteMidiaPageModule' }
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
