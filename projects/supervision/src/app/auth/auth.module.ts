import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { AuthRoutingModule } from './auth-routing.module';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // SlickCarouselModule,
    // NgBootstrapFormValidationModule
  ],
  exports: [
    LoginComponent,
    ForgotPasswordComponent
  ]
})
export class AuthModule { }
