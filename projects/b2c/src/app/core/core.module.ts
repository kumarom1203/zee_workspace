import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorAlertComponent, ToastsComponent } from './components';


@NgModule({
  declarations: [
    FormErrorAlertComponent,
    ToastsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormErrorAlertComponent,
    ToastsComponent,
  ]
})
export class CoreModule { }
