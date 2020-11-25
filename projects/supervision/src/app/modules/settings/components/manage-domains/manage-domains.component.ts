import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { finalize } from 'rxjs/operators';
import { untilDestroyed } from '../../../../core/services/until-destroyed';
import { Logger } from '../../../../core/logger/logger.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SwalService } from '../../../../core/services/swal.service';

const log = new Logger('ManageDomainsComponent');

@Component({
    selector: 'app-manage-domains',
    templateUrl: './manage-domains.component.html',
    styleUrls: ['./manage-domains.component.scss']
})
export class ManageDomainsComponent implements OnInit, OnDestroy {
    regConfig: FormGroup;
    submitted = false;
    subscription: Subscription;
    noData: boolean = true;
    manageDomainData: any;
    countryListData: object[] = [];
    cityListData: object[] = [];
    constructor(
        private apiHandlerService: ApiHandlerService,
        private fb: FormBuilder,
        private swalService: SwalService
    ) { this.createForm(); }

    ngOnInit() {
        this.getCountries();
        this.apiHandlerService.apiHandler('manageDomain', 'post', {}, {}, {
            'domain_origin': 5
        })
            .pipe(
                finalize(() => {
                    this.noData = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp.Status)
                    this.manageDomainData = resp.Data
                const { domainname, domainwebsite, email, address, phone, iso_country_code, city } = this.manageDomainData;
                this.getCities(iso_country_code);
                this.regConfig.patchValue(
                    {
                        domainname,
                        domainwebsite,
                        email,
                        address,
                        phone,
                        country: iso_country_code,
                        city
                    });

            });
    }

    onSubmit() {
        console.log(this.regConfig.value);
        this.submitted = true;

        // stop here if form is invalid;
        if (this.regConfig.invalid) {
            return;
        }

        const country = this.countryListData.find(val => {
            if (val['iso_country_code'] == this.regConfig.value['country'])
                return val;
        });
        this.regConfig.value['country'] = parseInt(country['country_origin']);
        let data = this.regConfig.value;
        data = Object.assign(data, { 'domain_origin': 5 });
        data.domainlogo = 'test.png';
        log.debug('data', data);
        this.apiHandlerService.apiHandler('updateManageDomain', 'post', {}, {}, data)
            .pipe(
                finalize(() => {
                    this.noData = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp.Status && resp.Data.msg) {
                    this.swalService.alert.update();
                    this.regConfig.reset();
                }
                else if (resp.Status && resp.Data.error_msg)
                    this.swalService.alert.oops( 'Oops..! Sorry no data updated');
            })
    }

    createForm(): void {
        this.regConfig = this.fb.group({
            domainname: new FormControl('', [Validators.required, Validators.maxLength(120)]),
            domainwebsite: new FormControl('', [Validators.required, Validators.maxLength(120)]),
            email: new FormControl('', [Validators.email, Validators.maxLength(80)]),
            phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(13), Validators.maxLength(13)]),
            address: new FormControl('', [Validators.required, Validators.maxLength(180)]),
            country: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
            domainlogo: new FormControl('')
        })
    }

    getCountries() {
        this.apiHandlerService.apiHandler('countryList', 'post', {}, {}, {})
            .pipe(
                finalize(() => {
                    this.noData = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp.Status)
                    this.countryListData = resp.Data['popular_countries'];
            });

    }

    onCountryOptnSelected(event) {
        console.log(event.target.value);
        const iso_country_code = event.target.value
        this.getCities(iso_country_code);
    }

    getCities(iso_country_code) {
        this.apiHandlerService.apiHandler('cityList', 'post', {}, {}, { iso_country_code })
            .pipe(
                finalize(() => {
                    this.noData = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp.Status)
                    this.cityListData = resp.Data;
            })
    }

    ngOnDestroy() {
    }
}
