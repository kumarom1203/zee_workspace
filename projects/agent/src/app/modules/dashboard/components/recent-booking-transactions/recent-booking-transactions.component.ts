import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from 'projects/supervision/src/app/core/api-handlers';
import { finalize } from 'rxjs/operators';
import { untilDestroyed } from 'projects/supervision/src/app/core/services/until-destroyed';
import { Logger } from 'projects/supervision/src/app/core/logger/logger.service';

const log = new Logger('RecentBookingTransactionsComponent');

@Component({
    selector: 'app-recent-booking-transactions',
    templateUrl: './recent-booking-transactions.component.html',
    styleUrls: ['./recent-booking-transactions.component.scss']
})
export class RecentBookingTransactionsComponent implements OnInit, OnDestroy {

    recentBookingTransactions: object[] = [];
    noDataFound: boolean = true;
    constructor(
        private apiHandlerService: ApiHandlerService
    ) { }

    ngOnInit() {
        this.apiHandlerService.apiHandler('latestTransactions', 'post', {}, {}, {
            'domain_origin': 5,
            'user_type': 1
        })
            .pipe(
                finalize(() => { }),
                untilDestroyed(this),
            )
            .subscribe( resp => {
                log.debug(resp);
                if(resp['Status']){
                    this.noDataFound = false;
                    this.recentBookingTransactions = resp['Data'];
                }
            })
    }

    ngOnDestroy() {
    }

}

// https://dbt1.assamcares.in/migrantassist/public/reachout/8749887536