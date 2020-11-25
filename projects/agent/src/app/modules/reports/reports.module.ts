import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HighchartsChartModule } from 'highcharts-angular';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from '../../shared/shared.module';
import { AccountLedgerComponent } from './components/account-ledger/account-ledger.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { DailySalesReportComponent } from './components/daily-sales-report/daily-sales-report.component';
import { TransactionLogsComponent } from './components/transaction-logs/transaction-logs.component';
import { ReportsRouterModule } from './reports-routing.module';

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
        TransactionLogsComponent,
        AccountLedgerComponent,
        DailySalesReportComponent,
        BookingDetailsComponent
    ],
    exports: [
        TransactionLogsComponent,
        AccountLedgerComponent,
    ]
})
export class ReportsModule { }