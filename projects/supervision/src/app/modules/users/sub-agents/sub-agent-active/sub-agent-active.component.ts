import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sub-agent-active',
  templateUrl: './sub-agent-active.component.html',
  styleUrls: ['./sub-agent-active.component.scss']
})
export class SubAgentActiveComponent implements OnInit {

  @ViewChild('tabs', { static: true }) public tabs: NgbTabset;

  userData;

  constructor() { }

  ngOnInit() {
  }

  beforeChange(e) {
      // log.debug('tabChanged', e)
  }

  triggerTab(data: any) {
      if (data.user)
          this.userData = data.user;
      this.tabs.select(data.tabId);
  }

}
