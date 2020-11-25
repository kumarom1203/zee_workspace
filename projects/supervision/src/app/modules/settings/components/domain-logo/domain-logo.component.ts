import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SwalService } from '../../../../core/services/swal.service';
import { UtilityService } from '../../../../core/services/utility.service';
import { Logger } from '../../../../core/logger/logger.service';


const log = new Logger('settings/DomainLogoComponent');

@Component({
    selector: 'app-domain-logo',
    templateUrl: './domain-logo.component.html',
    styleUrls: ['./domain-logo.component.scss']
})
export class DomainLogoComponent implements OnInit {

    regConfig: FormGroup;
    @ViewChild('theFile', { static: true }) theFile: ElementRef;
    constructor(
        private fb: FormBuilder,
        // private logoService: LogoService,
        private swalService: SwalService,
        private utility: UtilityService
    ) { }

    ngOnInit() {
        this.createForm();
        // this.getDomainLogo();
    }

    onFileSelected($event) {
        console.log($event);
    }

    getDomainLogo() {
        // const data = [{ agent_id: this.utility.readStorage('currentUser', localStorage)['user_id'] }];
        // data['topic'] = 'domainLogo';
        // this.logoService.fetch(data)
        //     .pipe(untilDestroyed(this))
        //     .subscribe(resp => {
        //         if(resp.statusCode == 200) {
        // this.regConfig.patchValue({
        //     logo_name: resp.data['logo']
        // });
        //         window.document.getElementById('logo').setAttribute('value' ,resp.data['logo']);
        //         console.log(this.theFile.nativeElement, window.document.getElementById('logo'))
        //     } else { log.debug('oops noData found', resp); }
        // });

    }

    onSubmit() {
        //     if (this.regConfig.invalid)
        //         return;
        //     const data = [Object.assign({ agent_id: this.utility.readStorage('currentUser', localStorage)['user_id'] }, this.regConfig.value)];
        //     data['topic'] = 'updateDomainLogo';
        //     log.debug(data);
        //     this.logoService.update(data)
        //         .pipe(untilDestroyed(this))
        //         .subscribe(resp => {
        //             log.debug(resp);
        //             if (resp.statusCode == 200) {
        //                 this.regConfig.reset();
        //                 this.swalService.alert.success(resp.msg);
        //             }
        //             else
        //                 this.swalService.alert.oops(resp.msg);
        //         })
    }
    onReset() {
        this.regConfig.reset();
    }

    createForm() {
        this.regConfig = this.fb.group({
            logo_name: new FormControl('', [Validators.required]),
        })
    }

    ngOnDestroy() { }

}
