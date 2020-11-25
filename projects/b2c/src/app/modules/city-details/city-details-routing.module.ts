import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';
import { CityDetailsComponent } from './city-details.component';


const routes: Routes = [
  {
    path:'',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: CityDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityDetailsRoutingModule { }
