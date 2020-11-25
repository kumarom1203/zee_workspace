import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiHandlerService } from '../../../core/api-handlers';
import { AuthService } from '../../auth.service';
import { AlertService } from '../../../core/services/alert.service';
import { SwalService } from '../../../core/services/swal.service';

export class User {
    user_id: string;
    user_name: string;
    user_type: string;
    first_name: string;
    last_name: string;
    phone: string;
    country_code: string;
    status: string;
    user_profile_image: string;
    created_datetime: string;
    login_id: string;
    accessToken: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {

    slideConfig2 = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };

    loading = false;
    submitted = false;
    returnUrl: string;

    loginForm: FormGroup;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    errorMessage = '';

    constructor(
        private fb: FormBuilder,
        private apiHandlerService: ApiHandlerService,
        private authService: AuthService,
        private alertService: AlertService,
        private route: ActivatedRoute,
        private router: Router,
        private swalService: SwalService
    ) {
        if (sessionStorage.getItem('currentUser')) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    get password() { return this.loginForm.get('password'); }

    onLogin() {
        console.log('onLogin()')
        this.authService.onLogin(this.loginForm.get('email').value, this.loginForm.get('password').value)
            .subscribe(res => {
                // console.log(res);
                if (res.Status) {
                    this.router.navigate([this.returnUrl]);
                } else {
                    // console.log('Inside else, error in API')
                    this.errorMessage = res.Message;
                    // this.loginForm.get('password').setErrors(res.Message);
                    this.swalService.alert.oops(this.errorMessage)
                }
                this.loading = false;
            });
    }

}
