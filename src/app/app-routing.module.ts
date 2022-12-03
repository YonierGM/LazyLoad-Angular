import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './Panel-modulo/panel/panel.component';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () => import('./Panel-modulo/panel.module').then(m => m.PanelModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-modulo/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos-modulo/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios-modulo/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: '**', 
    redirectTo: 'panel'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
