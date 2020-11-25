import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { UtilityService } from '../../../../core/services/utility.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Logger } from '../../../../core/logger/logger.service';
import { PubSubService } from 'projects/b2c/src/app/core/services/pub-sub.service';
import { Router } from '@angular/router';

declare var $: any;
const log = new Logger('LogRegistrationComponent');

@Component({
  selector: 'app-log-registration',
  templateUrl: './log-registration.component.html',
  styleUrls: ['./log-registration.component.scss']
})
export class LogRegistrationComponent implements OnInit, AfterViewInit {

  regForm: FormGroup;
  loginForm: FormGroup;
  showPassword: boolean;
  submitted: boolean;
  regSubmitted: boolean
  constructor(
    private apiHandlerService: ApiHandlerService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private pubSubService: PubSubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRegForm();
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


  onRegistration() {
    console.log(this.regForm.value);
    if(this.regForm.invalid)
      return;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    const reqBody = Object.assign({ status: true, auth_role_id: 2 }, this.loginForm.value);
    const { remember } = reqBody
    delete reqBody.remember;
    this.apiHandlerService.apiHandler('userLogin', 'post', {}, {}, reqBody)
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
      confirm_password: 'test@123',
      email_subscription: false,
    });
  }

  createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('test@gmail.com', [Validators.required, Validators.email, Validators.maxLength(40)]),
      password: new FormControl('test@123', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]),
      remember: false,
    });
  }

  ngAfterViewInit(): void {

    $(".open_register").click(function () {
      $(".for_sign_in").fadeOut(500, function () {
        $(".for_sign_up").fadeIn(500)
      })
    });

    $(".open_sign_in").click(function () {
      $(".for_sign_up").fadeOut(500, function () {
        $(".for_sign_in").fadeIn(500)
      })
    });

    $(".forgot_pasword").click(function () {
      $("#show_pass").modal("show").addClass("fade");
      $("#show_log").removeClass("fade").modal('hide');
    });

    $(".open_sign_in_window").click(function () {
      $("#show_pass").removeClass("fade").modal("hide");
      $("#show_log").modal('show').addClass("fade");
    });

    $(".frgotpaswrd").click(function () {
      $("#forgotpaswrdpop").modal();
    });

    $(".country_code_no").intlTelInput({});

    $('.digit-group').find('input').each(function () {
      $(this).attr('maxlength', 1);
      $(this).on('keyup', function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find('input#' + $(this).data('previous'));

          if (prev.length) {
            $(prev).select();
          }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
          var next = parent.find('input#' + $(this).data('next'));

          if (next.length) {
            $(next).select();
          } else {
            if (parent.data('autosubmit')) {
              parent.submit();
            }
          }
        }
      });
    });
  }


}
