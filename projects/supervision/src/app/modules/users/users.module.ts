import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SharedModule } from '../../shared/shared.module';
import { B2bActiveComponent } from './agents/b2b-active/b2b-active.component';
import { B2bUserListComponent } from './agents/b2b-active/components/b2b-user-list/b2b-user-list.component';
import { B2bLoggedInComponent } from './agents/b2b-logged-in/b2b-logged-in.component';
import { UsersRoutingModule } from './users-routing.module';
import { B2cActiveComponent } from './b2c-users/b2c-active/b2c-active.component';
import { B2cUserListComponent } from './b2c-users/b2c-active/components/b2c-user-list/b2c-user-list.component';
import { StaffActiveComponent } from './staff-users/staff-active/staff-active.component';
import { StaffLoggedInComponent } from './staff-users/staff-logged-in/staff-logged-in.component';
import { SubAgentActiveComponent } from './sub-agents/sub-agent-active/sub-agent-active.component';
import { SubAgentLoggedInComponent } from './sub-agents/sub-agent-logged-in/sub-agent-logged-in.component';
import { SupplierActiveComponent } from './suppliers/supplier-active/supplier-active.component';
import { SupplierLoggedInComponent } from './suppliers/supplier-logged-in/supplier-logged-in.component';
import { StaffUserListComponent } from './staff-users/staff-active/components/staff-user-list/staff-user-list.component';
import { SubAgentUserListComponent } from './sub-agents/sub-agent-active/components/sub-agent-user-list/sub-agent-user-list.component';
import { SupplierUserListComponent } from './suppliers/supplier-active/components/supplier-user-list/supplier-user-list.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';

@NgModule({
  declarations: [
    B2bActiveComponent,
    B2bLoggedInComponent,
    B2bUserListComponent,
    B2cActiveComponent,
    B2cUserListComponent,
    StaffActiveComponent,
    StaffLoggedInComponent,
    StaffUserListComponent,
    SubAgentActiveComponent,
    SubAgentLoggedInComponent,
    SubAgentUserListComponent,
    SupplierActiveComponent,
    SupplierLoggedInComponent,
    SupplierUserListComponent,
    AddUpdateUserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot()
  ]
})
export class UsersModule {
  
}
