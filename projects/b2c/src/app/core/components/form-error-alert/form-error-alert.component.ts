// tslint:disable:curly
import { Component, OnInit } from '@angular/core';
import { PubSubService } from '../../services/pub-sub.service';

export interface AlertConfI {
  class: string;
  msg: string;
  timeOut: number;
  persist?: boolean;
  title?: string;
}

@Component({
  selector: 'app-form-error-alert',
  templateUrl: './form-error-alert.component.html',
  styleUrls: ['./form-error-alert.component.scss']
})
export class FormErrorAlertComponent implements OnInit {
  alert;
  config: AlertConfI;
  constructor(private pubSubService: PubSubService) {
    pubSubService.emitter.subscribe(event => {
      if (event.type === 'formError' && event.data) {
        this.config = event.data;
        this.showAlert();
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.alert = {};
  }

  showAlert(): void {
    const self = this;
    this.alert = {
      class: this.config.class,
      msg: this.config.msg,
      title: this.config.title || '',
    };
    if (!this.config.persist) {
      const sec = this.config.timeOut;
      setTimeout(function () {
        self.init();
      }, sec);
    }
  }

  get showOrHide() {
    try {
      if (this.alert.msg)
        return true;
      return false;
    } catch (err) {
      return false;
    }
  }
}
