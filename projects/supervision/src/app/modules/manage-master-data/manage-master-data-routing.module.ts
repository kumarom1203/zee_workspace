import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../../layout/base-layout/base-layout.component';
import { StaffGroupListComponent } from './components/staff-group-list/staff-group-list.component';
import { BranchListComponent } from './components/branch-list/branch-list.component';
import { AuthGuard } from '../../auth/auth.guard';


const routes: Routes = [
  {
    path: 'master-data',
    component: BaseLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'staff-grp-list',
        component: StaffGroupListComponent,
        data: {extraParameter: 'manageMasterDataMenus'}
      },
      {
        path: 'branch-list',
        component: BranchListComponent,
        data: {extraParameter: 'manageMasterDataMenus'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageMasterDataRoutingModule { }
