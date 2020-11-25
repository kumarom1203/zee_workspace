import { Component, OnInit } from '@angular/core';

import * as mockData from './reportMockData';

@Component({
    selector: 'app-agents',
    templateUrl: './agents.component.html',
    styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

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
        // {
        //     icon: 'fa fa-bed',
        //     label: 'Hotel  Report',
        //     class: '',
        //     report: 'Hotel',
        // },
        // {
        //   icon: 'fa fa-bus',
        //   label: 'B2B Bus Report',
        //   class: '',
        //   report: 'Bus',
        // },
        // {
        //   icon: 'fa fa-suitcase',
        //   label: 'B2B Package Report',
        //   class: '',
        //   report: 'Packages',
        // },
        // {
        //   icon: 'fa fa-binoculars',
        //   label: 'B2B Activities Report',
        //   class: '',
        //   report: 'Activities',
        // },
        // {
        //   icon: 'fa fa-taxi',
        //   label: 'B2B Transfers Report',
        //   class: '',
        //   report: 'Transfers',
        // },
    ]
}

