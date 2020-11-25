import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

import { Logger } from '../../../../core/logger/logger.service';

const log = new Logger('users/B2cActiveComponent')


@Component({
  selector: 'app-b2c-active',
  templateUrl: './b2c-active.component.html',
  styleUrls: ['./b2c-active.component.scss']
})
export class B2cActiveComponent implements OnInit {
  @ViewChild('tabs', { static: true }) public tabs: NgbTabset;

  userData;

  constructor() { }

  ngOnInit() {
  }

  beforeChange(e) {
      log.debug('tabChanged', e)
  }

  triggerTab(data: any) {
      if (data.user)
          this.userData = data.user;
      this.tabs.select(data.tabId);
  }

}
