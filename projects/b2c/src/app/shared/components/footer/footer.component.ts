import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../../core/api-handlers';
import { AppGlobal } from '../../../app.global';
import { untilDestroyed } from 'projects/supervision/src/app/core/services/until-destroyed';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(
    private apiHandlerService: ApiHandlerService,
    public globals: AppGlobal
  ) { }

  ngOnInit(): void {
    this.getDomainLogo();
  }

  getDomainLogo() {
    this.apiHandlerService.apiHandler('domainLogo', 'post', {}, {}, { type: 'footer' })
      .pipe(untilDestroyed(this))
      .subscribe(resp => {
        console.log(resp);
        if (resp.Status) {
          this.globals.logoFooter = resp.Data.domain_logo;
        }
      }, (err: HttpErrorResponse) => {
        console.log(err.error);
        // this.globals.logoFooter = String(err.error.text);
      })
  }

  ngOnDestroy() { }

}
