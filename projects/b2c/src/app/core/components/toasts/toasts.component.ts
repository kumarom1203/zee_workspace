import { Component, OnInit, OnDestroy } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Logger } from '../../logger/logger.service';
import { untilDestroyed } from '../../../core/services/until-destroyed';
import { ToastsService } from '../../services/toasts.service';

const log = new Logger('ToastsComponent');

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit, OnDestroy {

  alerts: Array<any> = [];
  show = false as boolean;
  errConfirm = 0 as number;
  constructor(private toastsService: ToastsService) {
    this.toastsService.getData()
      .pipe(
        finalize(() => {
          // if something to do here
        }),
        untilDestroyed(this)
      )
      .subscribe(resp => {
        log.debug(resp);
        if (resp) {
          this.alerts.unshift(resp);
          this.show = true;
          const that = this;
          setTimeout(function() {
            if (that.errConfirm === 0) {
              that.alerts.pop();
            } else {
              that.errConfirm = that.errConfirm - 1;
            }
          }, 8000);
        }
      }, err => { log.debug(err); });
  }
  ngOnInit(): void { }
  ngOnDestroy(): void { }

  hide(alert: {}): void {
    this.errConfirm = this.errConfirm + 1;
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
