import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiHandlerService } from '../../../core/api-handlers';
import { SubSink } from 'subsink';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styles: []
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

    slideConfig2 = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '0',
        slidesToShow: 1,
        speed: 500,
        dots: true,
    };

    forgotPasswordForm: FormGroup;
    errorMessage = '';
    successMessage = '';

    get user_name() { return this.forgotPasswordForm.get('user_name'); }

    protected subs = new SubSink();
    constructor(
        private apiHandlerService: ApiHandlerService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            user_name: ['', [Validators.email, Validators.required]],
            phone: ['', [Validators.required]],
            user_type: 1
        });
    }

    onSubmit() {
        this.subs.sink = this.apiHandlerService.apiHandler('forgotPassword', 'POST', '', '', this.forgotPasswordForm.value)
            .subscribe(res => {
                if (res.Status) {
                    this.successMessage = res.Data.data;
                } else {
                    this.forgotPasswordForm.get('password').setErrors(res.Message);
                    this.errorMessage = res.Message;
                }
            });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

}
