import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Logger } from '../../../../../core/logger/logger.service';
import { SwalService } from '../../../../../core/services/swal.service';
import { Sort } from '@angular/material/sort';
import { UtilityService } from '../../../../../core/services/utility.service';

const log = new Logger('settings/ConvenienceFeesComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];
@Component({
  selector: 'app-list-promocode',
  templateUrl: './list-promocode.component.html',
  styleUrls: ['./list-promocode.component.scss']
})
export class ListPromocodeComponent implements OnInit {
  @Output() someEvent = new EventEmitter<any>();
  pageSize = 2;
  page = 1;
  collectionSize: number;
  status: boolean;
  noData: boolean = true;
  respData: object[] = [];
  displayColumn: { key: string, value: string }[] = [
    { key: 'id', value: '#' },
    { key: 'promoCode', value: 'Promo Code' },
    { key: 'image', value: 'Image' },
    { key: 'discount', value: 'Discount' },
    { key: 'validUpto', value: 'Valid Upto' },
    { key: 'minimumAmount', value: 'Minimum Amount' },
    { key: 'moduleName', value: 'Module' },
    { key: 'status', value: 'Status' },
    { key: 'createdOn', value: 'Created On' },
    { key: 'action', value: 'Action' },
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

  updatePromocode(data) {
    this.someEvent.next({data, tabId: 'managePromoCode'});
  }

  applyFilter(text: string) {
    text = text.toLocaleLowerCase().trim();
    filterArray = respDataCopy.slice().filter((objData, index) => {
      const filterOnFields = {
        promoCode: objData.promoCode,
        image: objData.image,
        discount: objData.discount,
        validUpto: objData.validUpto,
        minimumAmount: objData.minimumAmount,
        moduleName: objData.moduleName,
        status: objData.status,
        createdOn: objData.createdOn,
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
        case 'promoCode': return this.utility.compare('' + a.promoCode, '' + b.promoCode, isAsc);
        case 'image': return this.utility.compare('' + a.image, '' + b.image, isAsc);
        case 'discount': return this.utility.compare('' + a.discount, '' + b.discount, isAsc);
        case 'validUpto': return this.utility.compare('' + a.validUpto, '' + b.validUpto, isAsc);
        case 'minimumAmount': return this.utility.compare(+ a.minimumAmount, + b.minimumAmount, isAsc);
        case 'moduleName': return this.utility.compare('' + a.moduleName, '' + b.moduleName, isAsc);
        case 'status': return this.utility.compare('' + a.status, '' + b.status, isAsc);
        case 'createdOn': return this.utility.compare('' + a.createdOn, '' + b.createdOn, isAsc);
        default: return 0;
      }
    });
  }

}



function getData() {
  return [
    {
      promoCode: 'ACT10',
      image: 'https://travelomatix.in/extras/system/template_list/template_v1/images/promocode/TMX1512291534825461f-2.jpg',
      discount: '10.00 Plus(+ INR)',
      validUpto: '30-Jun-2019(0 Days Left)',
      minimumAmount: '10.00',
      moduleName: 'Activities',
      status: 'Active',
      createdOn: '25-Jun-2019',
      action: 'Delete'
    },
    {
      promoCode: 'TRN10',
      image: 'https://travelomatix.in/extras/system/template_list/template_v1/images/promocode/TMX1512291534825461unnamed%20(13).jpg',
      discount: '10.00 Plus(+ INR)',
      validUpto: '30-Jun-2019(0 Days Left)	',
      minimumAmount: '10.00',
      moduleName: 'Transfer',
      status: 'Active',
      createdOn: '25-Jun-2019',
      action: 'Delete'
    },
    {
      promoCode: 'FLY10',
      image: 'https://travelomatix.in/extras/system/template_list/template_v1/images/promocode/TMX1512291534825461128215212.jpg',
      discount: '10.00 Plus(+ INR)',
      validUpto: '30-Jun-2020(80 Days Left)',
      minimumAmount: 100.00,
      moduleName: 'Flight',
      status: 'Pending',
      createdOn: '20-Jun-2019',
      action: 'Update'
    }
  ]
}
