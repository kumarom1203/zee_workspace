import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { finalize } from 'rxjs/operators';
import { untilDestroyed } from '../../../../core/services/until-destroyed';
import { Logger } from '../../../../core/logger/logger.service';
import { SwalService } from '../../../../core/services/swal.service';

const log = new Logger('SocialNetworksComponent')

@Component({
    selector: 'app-social-networks',
    templateUrl: './social-networks.component.html',
    styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit, OnDestroy {
    socialNetworkData: any;
    dataNotFound: boolean = true;
    isUpdated: boolean = false;
    displayColumn: string[] = ['#', 'Social Network', 'Url', 'Action'];
    url: any;
    status: any;
    constructor(
        private apiHandlerService: ApiHandlerService,
        private swalService: SwalService
    ) { }

    ngOnInit() {
        this.apiHandlerService.apiHandler('socialNetwork', 'post')
            .pipe(
                finalize(() => this.dataNotFound = false),
                untilDestroyed(this)
            )
            .subscribe(resp => {
                log.debug(resp);
                if (resp.Status) {
                    this.socialNetworkData = resp.Data;
                }
            });
    }

    update(doc): void {
        log.debug('Update Called ...', doc, this.url);
        const data = {
            social_network_id: doc.id,
            url: doc.url,
            status: doc.status
        }
        this.apiHandlerService.apiHandler('updateSocialNetwork', 'post', {}, {}, data)
        .pipe(
            finalize( () => this.isUpdated = true),
            untilDestroyed(this),
        )
        .subscribe( resp => {
            if(resp.Status && resp.Data.msg){
                this.isUpdated = true;
                log.debug(resp.Data);
                this.swalService.alert.update();
            } else {
                this.isUpdated = false;
                log.debug(resp.Data)
                this.swalService.alert.oops();
            }
        })

    }

    ngOnDestroy() {

    }

}


function getData() {
    return [
        {
            '#': 1,
            'Social Network': 'facebook',
            Url: 'https//www.facebook.com/',
            Action: true,
        },
        {
            '#': 2,
            'Social Network': 'twitter',
            Url: 'https://plus.google.com/travelomatix',
            Action: false,
        },
        {
            '#': 3,
            'Social Network': 'googleplus',
            Url: 'https://twitter.com/',
            Action: true,
        },
        {
            '#': 4,
            'Social Network': 'linkedin',
            Url: 'https://www.youtube.com/',
            Action: true,
        },
    ]
}
