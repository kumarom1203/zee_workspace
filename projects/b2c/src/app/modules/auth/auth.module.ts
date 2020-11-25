import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../../core/core.module';
import { AuthComponent } from './auth.component';
import { EmailLoginComponent, EmailRegistrationComponent, MobileLoginComponent, MobileRegistrationComponent, ForgotPasswordComponent, LogRegistrationComponent } from './components';


@NgModule({
  declarations: [
    AuthComponent,
    LogRegistrationComponent,
    EmailLoginComponent,
    EmailRegistrationComponent,
    MobileLoginComponent,
    MobileRegistrationComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    AuthComponent,
    LogRegistrationComponent,
    EmailLoginComponent,
    EmailRegistrationComponent,
    MobileLoginComponent,
    MobileRegistrationComponent,
    ForgotPasswordComponent,
  ]
})
export class AuthModule { }
