import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { UtilityService } from '../../../../core/services/utility.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Logger } from '../../../../core/logger/logger.service';
import { PubSubService } from '../../../../core/services/pub-sub.service';
import { Router } from '@angular/router';
import { untilDestroyed } from '../../../../core/services/until-destroyed';

declare var $: any;
const log = new Logger('auth/ForgotPasswordComponent');


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  forgotForm: FormGroup;
  submitted: boolean = false;
  constructor(
    private apiHandlerService: ApiHandlerService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private pubSubService: PubSubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createforgotForm();
  }

  hasError = (controlName: string, errorName: string) => {
    return ((this.submitted || this.forgotForm.controls[controlName].touched) && this.forgotForm.controls[controlName].hasError(errorName));
  }

  onForgot() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    console.log(this.forgotForm.value);
    const reqBody = Object.assign({}, this.forgotForm.value);
    this.apiHandlerService.apiHandler('forgotPassword', 'post', {}, {}, reqBody)
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(resp => {
        log.debug(resp)
        if (resp.statusCode == 201) {
          this.pubSubService.publish('formError', {
            class: 'alert alert-success',
            msg: 'Password changed successfully',
            timeOut: 5000,
          });
        }
      }, (err: HttpErrorResponse) => {
        log.error(err);
        const { error } = err;
        let msg = '';
        switch (error.statusCode) {
          case 401:
            msg = error.message || 'Sorry! Invalid Email';
            break;
          default:
            msg = 'Oops! something went wrong, please retry later';
            break;
        }
        this.pubSubService.publish('formError', {
          class: 'alert alert-danger',
          msg,
          timeOut: 5000,
        });
      })
  }

  createforgotForm(): void {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email, Validators.maxLength(40)])
    });
  }


  ngOnDestroy(): void {}

}
