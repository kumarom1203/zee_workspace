import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { HighchartsChartModule } from 'highcharts-angular';
import { LatestMembersComponent, RecentBookingTransactionsComponent, ModuleStatsComponent } from './components';


@NgModule({
  declarations: [
    DashboardComponent,
    LatestMembersComponent,
    RecentBookingTransactionsComponent,
    ModuleStatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule,
    HighchartsChartModule,
    SharedModule,
  ]
})
export class DashboardModule { }
