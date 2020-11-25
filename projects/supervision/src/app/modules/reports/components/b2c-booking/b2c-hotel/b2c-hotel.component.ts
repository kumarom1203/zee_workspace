import { Component, OnInit } from '@angular/core';

import * as mockData from '../../agents/reportMockData';

@Component({
  selector: 'app-b2c-hotel',
  templateUrl: './b2c-hotel.component.html',
  styleUrls: ['./b2c-hotel.component.scss']
})
export class B2cHotelComponent implements OnInit {

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
    return this.report || 'Hotel';
  }

}

function getLinks() {
  return [
    {
      icon: 'fa fa-bed',
      label: 'Hotel Report',
      class: '',
      report: 'Hotel',
    },
  ]
}