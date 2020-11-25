import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Logger } from '../../core/logger/logger.service';

declare var $: any;
const log = new Logger('LogRegistrationComponent');

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit, AfterViewInit {


    constructor() { }

    ngOnInit(): void { }

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