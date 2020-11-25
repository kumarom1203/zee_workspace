import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiHandlerService } from '../core/api-handlers';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    accessToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    // onLogin(value: any, value: any) {
    //     throw new Error("Method not implemented.");
    // }
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(
        private http: HttpClient,
        private apiHandlerService: ApiHandlerService
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    onLogin(username: string, password: string): Observable<any> {
        return this.apiHandlerService.apiHandler('userLogin', 'POST', '', '', {
            email: username,
            password: password,
            auth_role_id: 1,
            status: 1
        })
            .pipe(map(res => {
                if (res['statusCode'] == 200 && res['data']['access_token'] != undefined) {
                    sessionStorage.setItem('currentUser', JSON.stringify(res['data']));
                    this.currentUserSubject.next(res['data']);
                    return res;
                } else {
                    return res;
                }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}