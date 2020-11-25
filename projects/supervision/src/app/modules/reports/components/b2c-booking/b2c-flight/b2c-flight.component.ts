import { Component, OnInit } from '@angular/core';

import * as mockData from '../../agents/reportMockData';

@Component({
    selector: 'app-b2c-flight',
    templateUrl: './b2c-flight.component.html',
    styleUrls: ['./b2c-flight.component.scss']
})
export class B2cFlightComponent implements OnInit {

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
        return this.report || 'Flight';
    }

}

function getLinks() {
    return [
        {
            icon: 'fa fa-plane',
            label: 'Flight Report',
            class: '',
            report: 'Flight',
        },
    ]
}
