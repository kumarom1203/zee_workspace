import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from './dashboard.service';
import { Logger } from '../../core/logger/logger.service';
import { SwalService } from '../../core/services/swal.service';
import { EventInput } from '@fullcalendar/core';
HC_exporting(Highcharts);

const log = new Logger('DashboardComponent');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];
  noData: boolean = true;
  moduleBookingCountFound: boolean = false;
  bookingCalenderFound: boolean = false;
  bookingDetailsFound: boolean = false;
  moduleBookingCount: any;
  bookingCalender: any;
  highcharts = Highcharts;
  highcharts2 = Highcharts;
  chartOptions: any;
  chartOptions2: any;

  calendarEvents: EventInput[];

  constructor(
    private dashboardService: DashboardService,
    private swalService: SwalService
  ) { }

  ngOnInit() {
    // this.getModuleBookingCount();
    // this.getMonthlyRecapReport();
    // this.getBookingCalender();
    // this.getBookingDetailes();
  }

  getModuleBookingCount() {
    const data = [{
      'domain_origin': 5
    }];
    data['topic'] = 'moduleBookingCount';
    this.dashboardService.fetch(data)
      .subscribe(resp => {
        log.debug(resp);
        if (resp.statusCode == 200) {
          this.moduleBookingCountFound = true;
          this.moduleBookingCount = resp['data'];
        } else if (resp.statusCode == 404) {
          this.moduleBookingCountFound = false;
          this.swalService.alert.error();
        }
      })

  }

  getMonthlyRecapReport() {
    this.dashboardService.fetch({ topic: 'monthlyRecapReport' })
      .subscribe(resp => {
        log.debug(resp);
        if (resp.statusCode == 200) {
          this.noData = false;
          this.chartOptions2 = getCartOptions(resp.data);
        }
        else if (resp.statusCode == 404) {
          this.noData = true;
          this.swalService.alert.error();
        }
      });
  }

  getBookingCalender() {
    this.dashboardService.fetch({ topic: 'bookingCalender' })
      .subscribe(resp => {
        log.debug('getBookingCalender',resp);
        if (resp.statusCode == 200) {
          this.bookingCalenderFound = true;
          this.calendarEvents = getCalendarOptions(resp.data);
        }
        else if (resp.statusCode == 404) {
          this.bookingCalenderFound = false;
          this.swalService.alert.error();
        }
      });
  }

  getBookingDetailes() {
    this.dashboardService.fetch({ topic: 'bookingDetails' })
      .subscribe(resp => {
        log.debug('getBookingDetailes',resp);
        if (resp.statusCode == 200) {
          this.bookingDetailsFound = true;
          this.chartOptions = getBookingDetailesOptions(resp.data);
        }
        else if (resp.statusCode == 404) {
          this.bookingDetailsFound = false;
          this.swalService.alert.error();
        }
      });
  }

} // end of class ...

function getCalendarOptions(respData) {
  return respData.calender_data.map(val => {
    return {
      title: val.title,
      start: val.start,
      url: val.url,
      extendedProps: {
        tooltip: val.tip,
      }
    }
  });
}

function getCartOptions(respData) {
  return {
    "chart": {
      "type": "column"
    },
    "title": {
      "text": "Monthly Recap Report"
    },
    "subtitle": {
      "text": respData['source'] ? `Source: ${respData['source']}` : "Source: Provab.com "
    },
    "xAxis": {
      "categories": respData['time_line_interval'],
      "crosshair": true
    },
    "yAxis": {
      "min": 0,
      "title": {
        "text": `Profit (${respData['currency']})`
      }
    },
    "tooltip": {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    "plotOptions": {
      "column": {
        "pointPadding": 0.2,
        "borderWidth": 0
      }
    },
    "series": [...respData['group_time_line_report']],
  }
}

function getBookingDetailesOptions(respData) {
  return {
    chart: {
      type: "spline" // line
    },
    title: {
      text: respData.title ? `${respData.tittle}` : "Booking Details"
    },
    subtitle: {
      text: respData.subtitle ? `Source: ${respData.subtitle}` : 'Source: provab.com'
    },
    xAxis: {
      categories: [...respData['time_line_interval']]
    },
    yAxis: {
      title: {
        text: `No.of Bookings ${respData['max_count']}`
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [...respData['time_line_report']],
    navigation: {
      buttonOptions: {
        enabled: true
      }
    },
  };
}

function getStats() {
  return [
    {
      label: 'Flight Booking',
      class: 'bg-primary',
      icon: 'bg-primary fa fa-plane',
      noOfBookings: 2,
      reportsType: ['Agent Report']
    },
    {
      label: 'Hotel Bookins',
      class: 'bg-success',
      icon: 'fa fa-bed',
      noOfBookings: 2,
      reportsType: ['Agent Report']
    },
    // {
    //   label: 'Bus Booking',
    //   class: 'bg-danger',
    //   icon: 'fa fa-bus',
    //   noOfBookings: 2,
    //   reportsType: ['B2C Report', 'Agent Report']
    // },
    // {
    //   label: 'Transfer Booking',
    //   class: 'bg-success',
    //   icon: 'fa fa-taxi',
    //   noOfBookings: 2,
    //   reportsType: ['B2C Report', 'Agent Report']
    // },
    // {
    //   label: 'Activities Booking',
    //   class: 'bg-warning',
    //   icon: 'fa fa-binoculars',
    //   noOfBookings: 2,
    //   reportsType: ['B2C Report', 'Agent Report']
    // },
    // {
    //   label: 'Holiday Enquiry',
    //   subTitle: "Enquiries",
    //   class: 'bg-warning',
    //   icon: 'fa fa-suitcase',
    //   // noOfBookings: 0,
    //   // reportsType: ['B2C Report', 'Agent Report']
    // }
  ]
}
