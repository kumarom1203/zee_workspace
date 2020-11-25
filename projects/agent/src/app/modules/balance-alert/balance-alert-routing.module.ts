import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../auth/auth.guard';
import { BalanceAlertComponent } from './balance-alert.component';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'set-balance-alert',
                component: BalanceAlertComponent,
                data: { extraParameter: 'balanceAlertMenus' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BalanceAlertRoutingModule { }