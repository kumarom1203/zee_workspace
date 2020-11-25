import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyRoutingModule } from './dummy-routing.module';
import { DummyComponent } from './dummy.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [DummyComponent],
  imports: [
    CommonModule,
    DummyRoutingModule,
    SharedModule
  ]
})
export class DummyModule { }
