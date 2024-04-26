import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
   
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class AuthModule { }
