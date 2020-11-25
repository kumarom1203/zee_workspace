import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    // canActivateChild: [AuthGuard],
      children: [
        {
          path: '',
          component: HomeComponent,
          data: { extraParameters: ''}
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
