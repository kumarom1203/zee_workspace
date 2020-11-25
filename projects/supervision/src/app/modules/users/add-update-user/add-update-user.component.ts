import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Logger } from '../../../core/logger/logger.service';
import { ApiHandlerService } from '../../../core/api-handlers';
import { SwalService } from '../../../core/services/swal.service';
import { UtilityService } from '../../../core/services/utility.service';
import { formatDate } from '../../../core/services/format-date';

const log = new Logger('users/AddUpdateUserComponent');

@Component({
    selector: 'app-add-update-user',
    templateUrl: './add-update-user.component.html',
    styleUrls: ['./add-update-user.component.scss']
})
export class AddUpdateUserComponent implements OnInit {

    usersForm: FormGroup;
    userTitles: any;
    countries: any;
    user: any;
    cityListData: any;
    userTypes: any;
    noData: boolean = true;
    minDate;
    maxDate;
    isOpen = false as boolean;
    bsDateConf = {
        isAnimated: true,
        dateInputFormat: 'YYYY-MM-DD',
        containerClass: 'theme-green'
    };
    submitted: boolean = false;
    @Output() someEvent = new EventEmitter<any>();
    @Input() userOne: object = {};

    constructor(
        private fb: FormBuilder,
        private api: ApiHandlerService,
        private swalService: SwalService,
        private usersService: UsersService,
        private utilityService: UtilityService,
    ) { }

    ngOnInit() {
        this.createForm();
        try {
            if (!this.utilityService.isEmpty(this.userOne)) {
                const data = [
                    { id: this.userOne['id'] }
                ];
                data['topic'] = 'editUser';
                this.usersService.fetch(data)
                    .subscribe(resp => {
                        console.log("edit user called ", resp);
                        if (resp.statusCode == 200) {
                            this.noData = false;
                            this.user = resp.data;
                            this.patchUser();
                        } else {
                            this.noData = true;
                            this.swalService.alert.oops();
                        }
                    });
            }
        } catch (e) { console.log(e); }

        this.api.apiHandler('userTitleList', 'POST')
            .subscribe(res => {
                this.userTitles = res.data;
            });
        this.api.apiHandler('userTypeList', 'POST')
            .subscribe(res => {
                this.userTypes = res.data;
            });
    }

    hasError = (controlName: string, errorName: string) => {
        return ((this.submitted || this.usersForm.controls[controlName].touched) && this.usersForm.controls[controlName].hasError(errorName));
    }

    createForm(): void {
        this.usersForm = this.fb.group({
            business_name: new FormControl('', [Validators.required, Validators.maxLength(80)]),
            business_number: new FormControl('', [Validators.required, Validators.maxLength(80)]),
            business_phone: new FormControl('', [Validators.maxLength(80)]),
            title: new FormControl('', [Validators.required, , Validators.maxLength(80)]),
            first_name: new FormControl('', [Validators.required, , Validators.maxLength(80)]),
            last_name: new FormControl('', [Validators.required, , Validators.maxLength(80)]),
            date_of_birth: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, , Validators.maxLength(14), Validators.pattern(this.utilityService.regExp.phone)]),
            address: new FormControl('', [Validators.required, Validators.maxLength(120)]),
            auth_role_id: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern(this.utilityService.regExp.password)]),
            confirm_password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern(this.utilityService.regExp.password)]),
            status: new FormControl('', [Validators.required]),
        });
    }

    patchUser(): void {
        this.usersForm.patchValue({
            business_name: this.user['business_name'] || '',
            business_number: this.user['business_number'] || '',
            business_phone: this.user['business_phone'] || '',
            title: this.user['title'] || '',
            first_name: this.user['first_name'] || '',
            last_name: this.user['last_name'] || '',
            date_of_birth: this.user['date_of_birth'] || '',
            phone: this.user['phone'] || '',
            address: this.user['address'] || '',
            auth_role_id: this.user['auth_role_id'] || '',
            email: this.user['email'] || '',
            core_city_code: this.user['city_code'] || '',
            status: Number(this.user['status']) ? true : false,
        })
    }

    resetFrom() {
        console.log("reseet called ")
        this.userOne = {};
        this.usersForm.reset();
    }

    handleValidSubmit() {
        this.submitted = true;
        if (!this.usersForm.valid) {
            this.swalService.alert.error('Please fill all the required field');
            return;
        }
        if (this.usersForm.value.password != this.usersForm.value.confirm_password) {
            this.swalService.alert.oops('Password Not Matched');
            return;
        }
        const dt = new Date(this.usersForm.value.date_of_birth);
        this.usersForm.value.date_of_birth = formatDate(dt, '');
        let data = Object.assign({}, this.usersForm.value);
        if (data['status']) {
            data['status'] = true;
        } else {
            data['status'] = false;
        }
        delete data['confirm_password'];
        try {
            if (!this.utilityService.isEmpty(this.userOne)) {
                data['id'] = this.userOne['id'];
                data = [data];
                data['topic'] = 'updateUser';
            }
            else {
                data = [data];
                data['topic'] = 'addUser';
            }
        } catch (error) {
            log.error(error)
        }

        this.usersService.update(data)
            .subscribe(resp => {
                if (resp.statusCode == 201) {
                    this.swalService.alert.success('Your data updated successfully ..!');
                    this.someEvent.next({ tabId: 'list_users', user: '' })
                    this.usersForm.reset();
                } else if (resp.statusCode == 400) {
                    this.swalService.alert.oops(resp.msg)
                }
                else {
                    this.swalService.alert.oops(resp.msg);
                }
            })
    }

}
