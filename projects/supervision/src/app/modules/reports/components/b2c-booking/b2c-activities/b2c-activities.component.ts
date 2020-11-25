import { Component, OnInit } from '@angular/core';

import * as mockData from '../../agents/reportMockData';

@Component({
  selector: 'app-b2c-activities',
  templateUrl: './b2c-activities.component.html',
  styleUrls: ['./b2c-activities.component.scss']
})
export class B2cActivitiesComponent implements OnInit {

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
    return this.report || 'Activities';
  }

}

function getLinks() {
  return [
    {
      icon: 'fa fa-binoculars',
      label: 'Activity Report',
      class: '',
      report: 'Activities',
    },
  ]
}