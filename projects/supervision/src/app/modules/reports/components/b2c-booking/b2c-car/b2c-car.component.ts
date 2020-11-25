import { Component, OnInit } from '@angular/core';

import * as mockData from '../../agents/reportMockData';

@Component({
  selector: 'app-b2c-car',
  templateUrl: './b2c-car.component.html',
  styleUrls: ['./b2c-car.component.scss']
})
export class B2cCarComponent implements OnInit {

  tabsData: any;
  navLinks = [];
  report: string = '';
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
    this.navLinks = getLinks();
    this.tabsData = mockData;
  }

  onSelect(tab, i) {
    console.log("tab", tab, i);
    this.report = tab.report;
  }

  beforeChange(e) {
    console.log("tabchage", e);
  }

  get whichReport() {
    return this.report || 'Bus';
  }

}

function getLinks() {
  return [
    {
      icon: 'fa fa-car',
      label: 'Bus Report',
      class: '',
      report: 'Bus',
    },
  ]
}