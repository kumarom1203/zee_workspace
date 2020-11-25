import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageMasterDataRoutingModule } from './manage-master-data-routing.module';
import {
  BranchListComponent,
  StaffGroupListComponent,
  EditBranchComponent,
  EditStaffComponent,
} from './components';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    BranchListComponent,
    StaffGroupListComponent,
    EditBranchComponent,
    EditStaffComponent,
  ],
  imports: [
    CommonModule,
    ManageMasterDataRoutingModule,
    SharedModule
  ],
  exports: [
    EditBranchComponent,
    EditStaffComponent,
  ],
  entryComponents: [
    EditBranchComponent,
    EditStaffComponent,
  ]

})
export class ManageMasterDataModule { }
