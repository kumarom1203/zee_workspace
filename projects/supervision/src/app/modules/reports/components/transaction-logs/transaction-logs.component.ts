import { Component, OnInit } from '@angular/core';
import { Sort } from "@angular/material/sort";
import { TransactionLogService } from './transaction-logs.service';
import { Logger } from '../../../../core/logger/logger.service';
import { SwalService } from '../../../../core/services/swal.service';
import { UtilityService } from '../../../../core/services/utility.service';

const log = new Logger('TransactionLogsComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];

@Component({
    selector: 'app-transaction-logs',
    templateUrl: './transaction-logs.component.html',
    styleUrls: ['./transaction-logs.component.scss']
})
export class TransactionLogsComponent implements OnInit {
    pageSize = 6;
    page = 1;
    collectionSize: number;
    displayColumn: { key: string, value: string }[] = [
        { key: 'id', value: '#' },
        { key: 'agent', value: 'Agent' },
        { key: 'transactiondate', value: 'Transaction Date' },
        { key: 'app_refernce', value: 'Reference Number' },
        { key: 'transactiontype', value: 'Transaction Type' },
        { key: 'fare', value: 'Amount' },
        { key: 'remarks', value: 'Description' }];
    noData: boolean = true;
    respData: any;
    constructor(
        private transactionLogService: TransactionLogService,
        private swalService: SwalService,
        private utility: UtilityService,
    ) {

    }

    ngOnInit() {
        const data = {
            "domain_origin": 5,
            "offset": 0,
            "user_type": 1,
            "limit": 20
        }
        this.fetchData(data);
    }

    fetchData(data) {
        this.transactionLogService.fetch(data)
            .subscribe(resp => {
                log.debug(resp);
                if (resp.statusCode == 201) {
                    this.noData = false;
                    this.respData = resp.data;
                    respDataCopy = [...this.respData];
                    this.collectionSize = respDataCopy.length;
                }
                else if (resp.statusCode == 404) {
                    this.noData = true;
                    this.swalService.alert.error();
                }
            });
    }

    applyFilter(text: string) {
        text = text.toLocaleLowerCase().trim();
        filterArray = respDataCopy.slice().filter((objData, index) => {
            const filterOnFields = {
                agent: objData.agent,
                transactiondate: objData.transaction,
                app_refernce: objData.app_refernce,
                transactiontype: objData.transactiontype,
                fare: objData.fare,
                remarks: objData.remarks
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
                case 'agent': return this.utility.compare(''+a.agent.toLocaleLowerCase(), ''+b.agent.toLocaleLowerCase(), isAsc);
                case 'transactiondate': return this.utility.compare(+a.transactiondate, +b.transactiondate, isAsc);
                case 'app_refernce': return this.utility.compare(''+a.app_refernce.toLocaleLowerCase(), ''+b.app_refernce.toLocaleLowerCase(), isAsc);
                case 'transactiontype': return this.utility.compare(''+a.transactiontype.toLocaleLowerCase(), ''+b.transactiontype.toLocaleLowerCase(), isAsc);
                case 'fare': return this.utility.compare(+a.fare, +b.fare, isAsc);
                case 'remarks': return this.utility.compare(''+a.remarks.toLocaleLowerCase(), ''+b.remarks.toLocaleLowerCase(), isAsc);
                default: return 0;
            }
        });
    }

}