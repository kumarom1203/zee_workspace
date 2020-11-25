import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../auth/auth.guard';
import { AccountLedgerComponent } from './components/account-ledger/account-ledger.component';
import { TransactionLogsComponent } from './components/transaction-logs/transaction-logs.component';
import { DailySalesReportComponent } from './components/daily-sales-report/daily-sales-report.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: 'reports',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'account-ledger',
                component: AccountLedgerComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'daily-sales-report',
                component: DailySalesReportComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'booking-details',
                component: BookingDetailsComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'transaction-logs',
                component: TransactionLogsComponent,
                data: { extraParameter: 'reportsMenus' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRouterModule { }