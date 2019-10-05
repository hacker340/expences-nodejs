import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterModuleRoutingModule } from './register-module-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { MainServiceService } from 'src/app/services/main-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegisterModuleRoutingModule,
  ],
  providers: [MainServiceService]
})
export class RegisterModuleModule { }
