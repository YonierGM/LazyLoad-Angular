import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { PanelModule } from '../Panel-modulo/panel.module';


@NgModule({
  declarations: [
    AgregarComponent,
    ListarComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    PanelModule
  ]
})
export class ProductosModule { }
