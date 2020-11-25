import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { UtilityService } from '../../../../core/services/utility.service';
import { Logger } from '../../../../core/logger/logger.service';
import { PubSubService } from '../../../../core/services/pub-sub.service';
import { untilDestroyed } from '../../../../core/services/until-destroyed';

declare var $: any;
const log = new Logger('auth/RegistrationComponent');

@Component({
  selector: 'app-email-registration',
  templateUrl: './email-registration.component.html',
  styleUrls: ['./email-registration.component.scss']
})
export class EmailRegistrationComponent implements OnInit, AfterViewInit, OnDestroy {

  regForm: FormGroup;
  submitted: boolean;
  showPassword: boolean;
  isMatched: boolean = false;
  constructor(
    private apiHandlerService: ApiHandlerService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private pubSubService: PubSubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRegForm();
  }

  get f() {
    return this.regForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  hasError = (controlName: string, errorName: string) => {
    return ((this.submitted || this.regForm.controls[controlName].touched) && this.regForm.controls[controlName].hasError(errorName));
  }

  isPasswordMatched() {
    if (this.regForm.get('password').value === this.regForm.get('confirm_password').value)
      this.isMatched = false;
    else
      this.isMatched = true;
  }

  onRegistration() {
    this.submitted = true;
    console.log(this.regForm.value, this.regForm.valid);
    if (this.regForm.invalid)
      return;
    if (String(this.regForm.get('password').value) !== String(this.regForm.get('confirm_password').value)) {
      this.pubSubService.publish('formError', {
        class: 'alert alert-danger',
        msg: `Retype Password isn't matching with Password`,
        timeOut: 5000
      });
      return;
    }
    const optionalBody = {
      auth_role_id: 4, status: true, uuid: '', business_name: '', business_number: '', title: '', address: ''
    }
    const reqBody = Object.assign(optionalBody, this.regForm.value);
    delete reqBody.confirm_password;
    delete reqBody.email_subscription;
    console.log(reqBody);
    this.apiHandlerService.apiHandler('addUser', 'post', {}, {}, reqBody)
      .pipe(untilDestroyed(this))
      .subscribe(resp => {
        log.debug(resp);
        if (resp.Status && resp.Data) {
          this.pubSubService.publish('formError', {
            class: 'alert alert-success',
            msg: 'Account Created Successfully',
            timeOut: 5000
          })
        }
      }, (err: HttpErrorResponse) => {
        log.error(err);
        const { error } = err;
        let msg = '';
        switch (error.statusCode) {
          case 400:
            msg = error.message;
            break;
          default:
            msg = 'Oops! Something went wrong, please retry later'
            break;
        }
        this.pubSubService.publish('formError', {
          class: 'alert alert-danger',
          msg,
          timeOut: 5000
        })
      })
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  createRegForm(): void {
    this.regForm = this.formBuilder.group({
      first_name: new FormControl('Jonh', [Validators.required, Validators.maxLength(40)]),
      last_name: new FormControl('doe', [Validators.required, Validators.maxLength(40)]),
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email, Validators.maxLength(40)]),
      password: new FormControl('test@123', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]),
      confirm_password: new FormControl('test@123', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]),
      email_subscription: new FormControl(false),
    });
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void { }

}
