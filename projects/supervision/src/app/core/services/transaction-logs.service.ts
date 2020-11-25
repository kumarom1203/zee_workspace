import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class TransactionLogsService {

    constructor(private http:HttpClient) {

    }

    findTransactionLogs(
        filter = '',
        sortOrder = 'asc',
        pageNumber = 0,
        pageSize = 3):  Observable<any> {

        return this.http.get('http://localhost:3000/transaction_logs', {
            params: new HttpParams()
                .set('_sort', filter)
                .set('_order', sortOrder)
                .set('_page', (pageNumber + 1).toString())
                .set('_limit', pageSize.toString())
        }).pipe(
            // map(res =>  res["payload"])
            map(res =>  res)
        );
    }

}