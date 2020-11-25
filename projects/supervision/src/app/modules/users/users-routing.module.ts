import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../../layout/base-layout/base-layout.component';
import { AuthGuard } from '../../auth/auth.guard';
import { B2bActiveComponent } from './agents/b2b-active/b2b-active.component';
import { B2bLoggedInComponent } from './agents/b2b-logged-in/b2b-logged-in.component';
import { B2cActiveComponent } from './b2c-users/b2c-active/b2c-active.component';
import { StaffActiveComponent } from './staff-users/staff-active/staff-active.component';
import { StaffLoggedInComponent } from './staff-users/staff-logged-in/staff-logged-in.component';
import { SubAgentActiveComponent } from './sub-agents/sub-agent-active/sub-agent-active.component';
import { SubAgentLoggedInComponent } from './sub-agents/sub-agent-logged-in/sub-agent-logged-in.component';
import { SupplierActiveComponent } from './suppliers/supplier-active/supplier-active.component';
import { SupplierLoggedInComponent } from './suppliers/supplier-logged-in/supplier-logged-in.component';


const routes: Routes = [
	{
		path: 'users',
		component: BaseLayoutComponent,
		canActivateChild: [AuthGuard],
		children: [
			{
				path: 'b2b-active/:status',
				component: B2bActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'b2b' }
			},
			{
				path: 'b2b-inactive/:status',
				component: B2bActiveComponent,
				data: { extraParameter: 'usersMenus2', group: 'b2b' }
			},
			{
				path: 'b2b-logged-in',
				component: B2bLoggedInComponent,
				data: { extraParameter: 'usersMenus', group: 'b2b' }
			},
			{
				path: 'b2c-active/:status',
				component: B2cActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'b2c' }
			},
			{
				path: 'b2c-inactive/:status',
				component: B2cActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'b2c' }
			},
			{
				path: 'staff-active/:status',
				component: StaffActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'staff' }
			},
			{
				path: 'staff-inactive/:status',
				component: StaffActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'staff' }
			},
			{
				path: 'staff-logged-in',
				component: StaffLoggedInComponent,
				data: { extraParameter: 'usersMenus', group: 'staff' }
			},
			{
				path: 'sub-agent-active/:status',
				component: SubAgentActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'sub-agent' }
			},
			{
				path: 'sub-agent-inactive/:status',
				component: SubAgentActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'sub-agent' }
			},
			{
				path: 'sub-agent-logged-in',
				component: SubAgentLoggedInComponent,
				data: { extraParameter: 'usersMenus', group: 'sub-agent' }
			},
			{
				path: 'supplier-active/:status',
				component: SupplierActiveComponent,
				data: { extraParameter: 'usersMenus', group: 'supplier' }
			},
			{
				path: 'supplier-inactive/:status',
				component: SupplierActiveComponent,
				data: { extraParameter: 'usersMenus0', group: 'supplier' }
			},
			{
				path: 'supplier-logged-in',
				component: SupplierLoggedInComponent,
				data: { extraParameter: 'usersMenus', group: 'supplier' }
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsersRoutingModule { }
