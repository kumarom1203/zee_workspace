import { Component, OnInit, OnDestroy } from '@angular/core';

import { Logger } from '../../../../core/logger/logger.service';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { untilDestroyed } from '../../../../core/services/until-destroyed';
import { CurrencyConversionService } from './currency-conversion.service';
import { finalize } from 'rxjs/operators';
import { Sort } from '@angular/material/sort';
import { SwalService } from '../../../../core/services/swal.service';

const log = new Logger('settings/CurrencyConversionComponent');
let filterArray: Array<any> = [];
let currencyConverisonDataCopy: Array<any> = []

@Component({
    selector: 'app-currency-conversion',
    templateUrl: './currency-conversion.component.html',
    styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit, OnDestroy {

    pageSize = 6;
    page = 1;
    collectionSize;
    noData: boolean = true;
    currencyConverisonData: object[];
    displayColumn: { key: string, value: string }[] = [{ key: 'id', value: '#' }, { key: 'currency', value: 'Currency' }, { key: 'status', value: 'Status' }, { key: 'action', value: 'Action' }];
    // displayColumn = new Map([['id', '#'], ['currency', 'Currency'], ['status', 'Status'], ['action', 'Action']]);
    // displayColumn: {[key: string]: string} = {
    //     id: '#', currency: 'Currency', status:'Status',action:'Action'
    // }
    status;
    constructor(
        private apiHandlerService: ApiHandlerService,
        private currencyConversionService: CurrencyConversionService,
        private swalService: SwalService,
    ) { }

    ngOnInit() {
        this.apiHandlerService.apiHandler('currencyConverison', 'post')
            .pipe(
                finalize(() => {
                    // this.noData = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp['Status'] && resp['Data']) {
                    this.noData = false;
                    this.currencyConverisonData = resp['Data'];
                    this.collectionSize = this.currencyConverisonData.length;
                    currencyConverisonDataCopy = [...this.currencyConverisonData]
                }
            });
    }

    applyFilter(text: string) {
        text = text.toLocaleLowerCase().trim();
        filterArray = currencyConverisonDataCopy.slice().filter((objData, index) => {
            // keys that are required to filter.
            let filterKeys = {
                id: objData.id,
                currency: objData.currency
            };
            if (Object.values(filterKeys).join().toLocaleLowerCase().match(`${text}`)) {
                return objData;
            }
        });
        log.debug(filterArray);
        if (filterArray.length && text.length)
            this.currencyConverisonData = filterArray;
        else
            this.currencyConverisonData = !filterArray.length && text.length ? filterArray : [...currencyConverisonDataCopy];

    }

    sortData(sort: Sort) {
        const data = filterArray.length ? filterArray : [...currencyConverisonDataCopy];
        if (!sort.active || sort.direction === '') {
            this.currencyConverisonData = data;
            return;
        }
        this.currencyConverisonData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'currency': return compare(a.currency, b.currency, isAsc);
                case 'status': return compare(a.status, b.status, isAsc);
                case 'action': return compare(a.action, b.action, isAsc);
                default: return 0;
            }
        });
    }

    onUpdate(doc) {
        doc = {
            "currency_id": doc.id,
            "value": doc.value,
            "status": doc.status
        }
        this.currencyConversionService.update(doc)
            .subscribe(resp => {
                if (resp.statusCode == 200)
                    this.swalService.alert.update();
                else if (resp.statusCode != 200)
                    this.swalService.alert.oops();
            })
    }

    ngOnDestroy() {
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function getData() {
    return [
        {
            Sno: 1,
            Currency: 'AUD',
            Status: true,
            Action: 'Update'
        },
        {
            Sno: 2,
            Currency: 'USD',
            Status: true,
            Action: 'Update'
        },
        {
            Sno: 3,
            Currency: 'BBD',
            Status: true,
            Action: 'Update'
        }
    ]
}
