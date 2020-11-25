// tslint:disable:no-string-literal
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Logger } from '../logger/logger.service';
import { SwalService } from '../services/swal.service';
import { ToastsService, ToastsParamsI } from '../services/toasts.service';

const log = new Logger('AuthInterceptorService');
declare var provab: any;
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  toastsParams: ToastsParamsI;

  constructor(
    private swalService: SwalService,
    private toastsService: ToastsService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('b2cUser');
    let clonedAuthReq = req;
    const hdr = {};

    if (!req.headers.has('Content-Type')) {
      clonedAuthReq = req.clone({
        headers: req.headers.set('Content-Type', 'application/json')
      });
    }
    if (token) {
      //   console.log(`interceptor token ${token}`);
      // hdr['Authorization'] = 'Bearer ' + token;
      // const headers = new HttpHeaders(hdr);
      // clonedAuthReq = req.clone({ headers });
      clonedAuthReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    const foo = {};
    const started = Date.now();
    return next.handle(clonedAuthReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            foo['api_response_status'] = event.status;
            foo['api_response_url'] = event.url;
            foo['api_response_message'] = event.statusText;
          }
        },
        (error: HttpErrorResponse) => {
          foo['api_response_status'] = error.status;
          foo['api_response_url'] = error.url || '';
          foo['api_response_message'] = error.statusText;
          this.toastsParams = { text: `${error.error.message}`, type: 'error' };
          this.toastsService.toast(this.toastsParams);
        }
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        foo['api_response_time'] = elapsed;
        log.debug(foo);
      })
    );

    // if(token) {
    //   const clone = req.clone({
    //     headers: req.headers.set('Authorization', 'Bearer ' + token)
    //   });
    //   return next.handle(clone);
    // }else {
    //   return next.handle(req);
    // }

  }
}
