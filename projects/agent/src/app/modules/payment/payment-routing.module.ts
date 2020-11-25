import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../auth/auth.guard';
import { UpdateBalanceComponent } from './update-balance/update-balance.component';
import { UpdateCreditLimitComponent } from './update-credit-limit/update-credit-limit.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: 'payment',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'update-balance',
                component: UpdateBalanceComponent,
                data: { extraParameter: 'paymentMenus' }
            },
            {
                path: 'update-credit-limit',
                component: UpdateCreditLimitComponent,
                data: { extraParameter: 'paymentMenus' }
            },
            {
                path: 'bank-account-details',
                component: BankAccountDetailsComponent,
                data: { extraParameter: 'paymentMenus' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }