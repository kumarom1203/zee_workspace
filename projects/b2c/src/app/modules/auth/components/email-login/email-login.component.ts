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
const log = new Logger('auth/LoginComponent');

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit, AfterViewInit, OnDestroy {
  loginForm: FormGroup;
  showPassword: boolean;
  submitted: boolean;

  constructor(
    private apiHandlerService: ApiHandlerService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private pubSubService: PubSubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  hasError = (controlName: string, errorName: string) => {
    return ((this.submitted || this.loginForm.controls[controlName].touched) && this.loginForm.controls[controlName].hasError(errorName));
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    const reqBody = Object.assign({ status: true, auth_role_id: 4 }, this.loginForm.value);
    const { remember } = reqBody
    delete reqBody.remember;
    this.apiHandlerService.apiHandler('userLogin', 'post', {}, {}, reqBody)
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(resp => {
        log.debug(resp)
        if (resp.Status && resp.Data && resp.access_token) {
          this.utilityService.writeStorage('b2cUser', resp.access_token, null, remember);
          // this.router.navigateByUrl('/',);
          // this.reloadCurrentRoute()
          window.location.reload();
        }

      }, (err: HttpErrorResponse) => {
        log.error(err);
        const { error } = err;
        let msg = '';
        switch (error.statusCode) {
          case 401:
            msg = error.message || 'Sorry! Invalid Credentials';
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

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email, Validators.maxLength(40)]),
      password: new FormControl('test@123', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]),
      remember: false,
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {}

}
