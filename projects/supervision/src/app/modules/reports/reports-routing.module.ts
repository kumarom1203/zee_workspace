import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from '../../layout/base-layout/base-layout.component';
import { AgentsComponent } from './components/agents/agents.component';
import { TransactionLogsComponent } from './components/transaction-logs/transaction-logs.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { TopDestinationsComponent } from './components/top-destinations/top-destinations.component';
import { AccountLedgerComponent } from './components/account-ledger/account-ledger.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../auth/auth.guard';
import { VoucherComponent } from './components';
import { B2cFlightComponent } from './components/b2c-booking/b2c-flight/b2c-flight.component';
import { B2cHotelComponent } from './components/b2c-booking/b2c-hotel/b2c-hotel.component';
import { B2cCarComponent } from './components/b2c-booking/b2c-car/b2c-car.component';
import { B2cActivitiesComponent } from './components/b2c-booking/b2c-activities/b2c-activities.component';

const routes: Routes = [
    {
        path: 'reports',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'agents',
                component: AgentsComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'b2c-flight',
                component: B2cFlightComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2c' }
            },
            {
                path: 'b2c-hotel',
                component: B2cHotelComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2c' }
            },
            {
                path: 'b2c-car',
                component: B2cCarComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2c' }
            },
            {
                path: 'b2c-activities',
                component: B2cActivitiesComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2c' }
            },
            {
                path: 'agent-flight',
                component: B2cFlightComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2b' }
            },
            {
                path: 'agent-hotel',
                component: B2cHotelComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2b' }
            },
            {
                path: 'agent-car',
                component: B2cCarComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2b' }
            },
            {
                path: 'agent-activities',
                component: B2cActivitiesComponent,
                data: { extraParameter: 'reportsMenus', group: 'b2b' }
            },
            {
                path: 'transaction-logs',
                component: TransactionLogsComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'search-history',
                component: SearchHistoryComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'top-destinations',
                component: TopDestinationsComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'account-ledger',
                component: AccountLedgerComponent,
                data: { extraParameter: 'reportsMenus' }
            },
            {
                path: 'flight-voucher',
                component: VoucherComponent,
                data: { extraParameter: '' }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRouterModule { }