import { Injectable, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../core/api-handlers';
import { untilDestroyed } from '../../core/services/until-destroyed';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsersService implements OnDestroy {
    constructor(
        private apiHandlerService: ApiHandlerService,
    ) { }

    fetch(data?: any): Observable<any> {
        console.log(data)
        return this.apiHandlerService.apiHandler(data.topic || '', 'post', {}, {}, data[0] || {})
            .pipe(
                map(resp => {
                    // console.log(resp)
                    // if (resp.Status)
                    //     return {
                    //         statusCode: 200,
                    //         data: resp.Data || [],
                    //         msg: resp.Message || 'OK'
                    //     }
                    // else
                    //     return {
                    //         statusCode: 404,
                    //         data: resp.Data || [],
                    //         msg: resp.Message || 'NOT FOUND'
                    //     }
                    return resp;
                }),
                shareReplay(1),
                untilDestroyed(this),
            )
    }

    update(data): Observable<any> {
        return this.apiHandlerService.apiHandler(data.topic || '', 'post', {}, {}, data[0] || {})
            .pipe(
                map(resp => {
                    // console.log("resp", resp);
                    // if (resp.Status)
                    //     return {
                    //         statusCode: 201,
                    //         data: resp.Data || [],
                    //         msg: resp.Message || 'OK'
                    //     }
                    // else if (resp.Status && resp.Data.error_msg)
                    //     return {
                    //         statusCode: 400,
                    //         data: [],
                    //         msg: resp.Message || 'BAD REQUEST'

                    //     }
                    // else
                    //     return {
                    //         statusCode: 404,
                    //         data: [],
                    //         msg: resp.Message || 'NOT FOUND'
                    //     }
                    return resp;
                }),
                shareReplay(1),
                untilDestroyed(this),
            )
    }

    ngOnDestroy() { }
}
