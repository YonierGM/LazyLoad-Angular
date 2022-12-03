import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component'
import { AngularMaterialModule } from '../angular-material-modulo/angular-material.module';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    PanelComponent
  ]
})
export class PanelModule { }
