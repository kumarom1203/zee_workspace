import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DomainInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            headers: new HttpHeaders({
                'x-DomainKey': 'TMX1512291534825461',
                'x-Username': 'test229267',
                'x-Password': 'test@229',
                'x-System': 'test'
            }),
        });
        return next.handle(modifiedReq);
    }
}
