import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityDetailsRoutingModule } from './city-details-routing.module';
import { CityDetailsComponent } from './city-details.component';
import { CityInfoComponent } from './components/city-info/city-info.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [CityDetailsComponent, CityInfoComponent],
  imports: [
    CommonModule,
    CityDetailsRoutingModule,
    SharedModule
  ]
})
export class CityDetailsModule { }
