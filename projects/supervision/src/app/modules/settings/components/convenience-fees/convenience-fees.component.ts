import { Component, OnInit } from '@angular/core';
import { Logger } from '../../../../core/logger/logger.service';
import { SwalService } from '../../../../core/services/swal.service';
import { Sort } from '@angular/material/sort';
import { UtilityService } from '../../../../core/services/utility.service';

const log = new Logger('settings/ConvenienceFeesComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];


@Component({
  selector: 'app-convenience-fees',
  templateUrl: './convenience-fees.component.html',
  styleUrls: ['./convenience-fees.component.scss']
})
export class ConvenienceFeesComponent implements OnInit {

  pageSize = 2;
  page = 1;
  collectionSize: number;
  status: boolean;
  noData: boolean = true;
  respData: object[] = [];
  displayColumn: { key: string, value: string }[] = [
    { key: 'id', value: '#' },
    { key: 'moduleName', value: 'Module' },
    { key: 'feesType', value: 'Fees Type' },
    { key: 'fees', value: 'Fees' },
    { key: 'addedPerPax', value: 'Added Per Pax' }
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

  updateConvenienceFees() {
    log.debug('updateConvenienceFees called')
    this.swalService.alert.oops();

  }

  applyFilter(text: string) {
    text = text.toLocaleLowerCase().trim();
    filterArray = respDataCopy.slice().filter((objData, index) => {
      const filterOnFields = {
        moduleName: objData.moduleName
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
        case 'moduleName': return this.utility.compare('' + a.modulename, '' + b.modulename, isAsc);
        default: return 0;
      }
    });
  }
}



function getData() {
  return [
    {
      moduleName: '+10 ACTIVITIES',
      feesType: 10.00,
      fees: ['perc%', 'plus+'],
      addedPerPax: ['Yes', 'No'],
    },
    {
      moduleName: '+100 DOMESTIC_FLIGHT',
      feesType: 100.00,
      fees: ['perc%', 'plus+'],
      addedPerPax: ['Yes', 'No'],
    },
    {
      moduleName: '	+10 INTERNATIONAL_FLIGHT',
      feesType: 10.00,
      fees: ['perc%', 'plus+'],
      addedPerPax: ['Yes', 'No'],
    },
    {
      moduleName: '	+10 DOMESTIC_HOTEL',
      feesType: 10.00,
      fees: ['perc%', 'plus+'],
      addedPerPax: ['Yes', 'No'],
    }
  ]
}