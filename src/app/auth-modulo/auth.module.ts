import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../angular-material-modulo/angular-material.module';
import { PanelModule } from '../Panel-modulo/panel.module';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    PanelModule
  ]
})
export class AuthModule { }
