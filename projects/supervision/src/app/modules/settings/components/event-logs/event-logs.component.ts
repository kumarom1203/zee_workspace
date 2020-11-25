import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/logger/logger.service';
import { SwalService } from '../../../../core/services/swal.service';
import { Sort } from '@angular/material/sort';
import { UtilityService } from '../../../../core/services/utility.service';

const log = new Logger('settings/EventLogsComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];
@Component({
  selector: 'app-event-logs',
  templateUrl: './event-logs.component.html',
  styleUrls: ['./event-logs.component.scss']
})
export class EventLogsComponent implements OnInit {
  pageSize = 2;
  page = 1;
  collectionSize: number;
  status: boolean;
  noData: boolean = true;
  respData: object[] = [];
  displayColumn: { key: string, value: string }[] = [
    { key: 'id', value: '#' },
    { key: 'referenceID', value: 'Reference ID' },
    { key: 'moduleName', value: 'Module' },
    { key: 'operation', value: 'Operation' },
    { key: 'message', value: 'Message' },
    { key: 'browserAndOperatingSystemInfo', value: 'Browser & Operating System Info' },
    { key: 'ip', value: 'IP' },
    { key: 'occuredOn', value: 'Occured On' },
  ];

  constructor(
    private utility: UtilityService,
    private swalService: SwalService
  ) { }

  ngOnInit() {
    this.respData = getData();
    this.noData = false;
    respDataCopy = [...this.respData];
    this.collectionSize = respDataCopy.length;
  }

  applyFilter(text: string) {
    text = text.toLocaleLowerCase().trim();
    filterArray = respDataCopy.slice().filter((objData, index) => {
      const filterOnFields = {
        referenceID: objData.referenceID,
        moduleName: objData.moduleName,
        operation: objData.operation,
        message: objData.message,
        browserAndOperatingSystemInfo: objData.browserAndOperatingSystemInfo,
        ip: objData.ip,
        occuredOn: objData.occuredOn,
      }
      if (Object.values(filterOnFields).join().toLocaleLowerCase().match(`${text}`)) {
        return objData;
      }
    });
    if (filterArray.length && text.length)
      this.respData = filterArray;
    else
      this.respData = !filterArray.length && text.length ? filterArray : [...respDataCopy];

  }

  sortData(sort: Sort) {
    const data = filterArray.length ? filterArray : [...respDataCopy];
    if (!sort.active || sort.direction === '') {
      this.respData = data;
      return;
    }
    this.respData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'referenceID': return this.utility.compare('' + a.referenceID, '' + b.referenceID, isAsc);
        case 'moduleName': return this.utility.compare('' + a.moduleName, '' + b.moduleName, isAsc);
        case 'operation': return this.utility.compare('' + a.operation, '' + b.operation, isAsc);
        case 'message': return this.utility.compare('' + a.message, '' + b.message, isAsc);
        case 'browserAndOperatingSystemInfo': return this.utility.compare('' + a.browserAndOperatingSystemInfo, '' + b.browserAndOperatingSystemInfo, isAsc);
        case 'ip': return this.utility.compare('' + a.ip, '' + b.ip, isAsc);
        case 'occuredOn': return this.utility.compare('' + a.occuredOn, '' + b.occuredOn, isAsc);
        default: return 0;
      }
    });
  }

}

function getData() {
  return [
    {
      referenceID: 'EID-1591343607-96',
      moduleName: 'Flight',
      operation: 'booking_exception',
      message: 'booking_failed',
      browserAndOperatingSystemInfo:"Customer Browser:Google Chrome <br> Customer Browser Version:83.0.4103.61 <br> Customer Operating System:windows",
      ip: '106.211.202.47',
      occuredOn: '05 Jun 2020 Fri',
    },
    {
      referenceID: 'EID-1591343607-71',
      moduleName: 'Flight',
      operation: 'booking_exception',
      message: 'booking_failed',
      browserAndOperatingSystemInfo: "Customer Browser:Google Chrome <br> Customer Browser Version:83.0.4103.61 <br> Customer Operating System:linuxs",
      ip: '192.168.075.35',
      occuredOn: '08 July 2020 Sat',
    }
  ]
}