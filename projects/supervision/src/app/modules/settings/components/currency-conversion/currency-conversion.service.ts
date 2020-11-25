import { Injectable, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { Logger } from '../../../../core/logger/logger.service';
import { untilDestroyed } from '../../../../core/services/until-destroyed';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const log = new Logger('CurrencyConversionService');

@Injectable({
    providedIn: 'root'
})

export class CurrencyConversionService implements OnDestroy {
    constructor(
        private apiHandlerService: ApiHandlerService
    ) { }

    update(data): Observable<any> {
        return this.apiHandlerService.apiHandler('updateCurrencyConverison', 'post', {}, {}, data)
            .pipe(
                map(resp => {
                    if (resp.Status && resp.Data.msg) {
                        return {
                            data: resp.Data || [],
                            statusCode: 200,
                            msg: 'OK'
                        }
                    } else if (resp.Status && resp.Data.error_msg) {
                        return {
                            data: [],
                            statusCode: 404,
                            msg: 'NOT FOUND'
                        }
                    }
                }),
                shareReplay(1),
                untilDestroyed(this),
            )
    }

    ngOnDestroy(){
    }
}