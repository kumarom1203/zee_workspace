import { NgModule } from "@angular/core";

import { AgentsComponent } from './components/agents/agents.component';
import { TransactionLogsComponent } from './components/transaction-logs/transaction-logs.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { TopDestinationsComponent } from './components/top-destinations/top-destinations.component';
import { AccountLedgerComponent } from './components/account-ledger/account-ledger.component';
import { ReportsRouterModule } from './reports-routing.module';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HighchartsChartModule } from 'highcharts-angular';
import { DynamicTableComponent } from './components/agents/dynamic-table/dynamic-table.component';
import { AdvSearchComponent } from './components/agents/adv-search/adv-search.component';
import { FlightBookingComponent, HotelBookingComponent, VoucherComponent } from './components/index';
import { B2cFlightComponent } from './components/b2c-booking/b2c-flight/b2c-flight.component';
import { B2cHotelComponent } from './components/b2c-booking/b2c-hotel/b2c-hotel.component';
import { B2cCarComponent } from './components/b2c-booking/b2c-car/b2c-car.component';
import { B2cActivitiesComponent } from './components/b2c-booking/b2c-activities/b2c-activities.component';

@NgModule({
    imports: [
        ReportsRouterModule,
        CommonModule,
        SharedModule,
        HighchartsChartModule,
        TabsModule.forRoot(),
        CollapseModule.forRoot(),
    ],
    declarations: [
        AgentsComponent,
        TransactionLogsComponent,
        SearchHistoryComponent,
        TopDestinationsComponent,
        AccountLedgerComponent,
        AdvSearchComponent,
        DynamicTableComponent,
        FlightBookingComponent,
        HotelBookingComponent,
        VoucherComponent,
        B2cFlightComponent,
        B2cHotelComponent,
        B2cCarComponent,
        B2cActivitiesComponent
    ],
    exports: [
        AgentsComponent,
        TransactionLogsComponent,
        SearchHistoryComponent,
        TopDestinationsComponent,
        AccountLedgerComponent,
        DynamicTableComponent
    ]
})
export class ReportsModule { }