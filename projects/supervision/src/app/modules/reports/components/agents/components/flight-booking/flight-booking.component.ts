import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../../../../../core/services/swal.service';
import { UtilityService } from '../../../../../../core/services/utility.service';
import { Sort } from '@angular/material/sort';
import { AgentService } from '../../agents.service';
import { Logger } from '../../../../../../core/logger/logger.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

const log = new Logger('Report/FlightBookingComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];

@Component({
    selector: 'app-flight-booking',
    templateUrl: './flight-booking.component.html',
    styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent implements OnInit {

    pageSize = 6;
    page = 1;
    collectionSize: number;
    displayColumn: { key: string, value: string }[] = getDisplayColumn();
    noData: boolean = true;
    respData: any;

    constructor(
        private agentsService: AgentService,
        private swalService: SwalService,
        private utility: UtilityService,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {

        this.getBookingReports();
    }

    getBookingReports() {
        const data = [{
            "user_type": 3,
            "offset": 0,
            "limit": 10,
            "booking_type": "all_bookings"
        }];
        data['topic'] = 'bookingReports';
        this.agentsService.fetch(data)
            .subscribe(resp => {
                log.debug(resp);
                if (resp.statusCode == 201) {
                    this.noData = false;
                    this.respData = resp.data;
                    respDataCopy = [...this.respData];
                    this.collectionSize = respDataCopy.length;
                }
                else if (resp.statusCode == 404) {
                    this.noData = true;
                    this.swalService.alert.error();
                }
            });
    }


    getVoucher(data) {
        log.debug('getVoucher called', data);
        this.agentsService.voucherBehaviorSubject.next(data);
        this.utility.writeStorage('voucherData', data, sessionStorage)
        this.router.navigate(['/reports/flight-voucher']);
    }

    applyFilter(text: string) {
        text = text.toLocaleLowerCase().trim();
        filterArray = respDataCopy.slice().filter((objData, index) => {
            const filterOnFields = getFilterOptions(objData);
            if (Object.values(filterOnFields).join().toLocaleLowerCase().match(`${text}`)) {
                return objData;
            }
        });
        if (filterArray.length && text.length)
            this.respData = filterArray;
        else
            this.respData = !filterArray.length && text.length ? filterArray : [...respDataCopy];

    }

    sortData(sort: Sort) {
        const data = filterArray.length ? filterArray : [...respDataCopy];
        if (!sort.active || sort.direction === '') {
            this.respData = data;
            return;
        }
        this.respData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'reference_number': return this.utility.compare('' + a.reference_number, '' + b.reference_number, isAsc);
                case 'status': return this.utility.compare('' + a.status, '' + b.status, isAsc);
                case 'agency_name': return this.utility.compare('' + a.agency_name, '' + b.agency_name, isAsc);
                case 'leadpax_name': return this.utility.compare('' + a.leadpax_name, '' + b.leadpax_name, isAsc);
                case 'from': return this.utility.compare('' + a.from, '' + b.from, isAsc);
                case 'to': return this.utility.compare('' + a.to, '' + b.to, isAsc);
                case 'type': return this.utility.compare('' + a.type, '' + b.type, isAsc);
                case 'booked_on': return this.utility.compare(+ a.booked_on, + b.booked_on, isAsc);
                case 'tarvel_date': return this.utility.compare('' + a.tarvel_date, '' + b.tarvel_date, isAsc);
                case 'pnr': return this.utility.compare('' + a.pnr, '' + b.pnr, isAsc);
                case 'commissionable_fare': return this.utility.compare(+ a.commissionable_fare, + b.commissionable_fare, isAsc);
                case 'commission': return this.utility.compare(+ a.commission, + b.commission, isAsc);
                case 'tds': return this.utility.compare(+ a.tds, + b.tds, isAsc);
                case 'admin_netfare': return this.utility.compare(+ a.admin_netfare, + b.admin_netfare, isAsc);
                case 'admin_markup': return this.utility.compare(+ a.admin_markup, + b.admin_markup, isAsc);
                case 'agent_commission': return this.utility.compare(+ a.agent_commission, + b.agent_commission, isAsc);
                case 'agent_tds': return this.utility.compare(+ a.agent_tds, + b.agent_tds, isAsc);
                case 'agent_netfare': return this.utility.compare(+ a.agent_netfare, + b.agent_netfare, isAsc);
                case 'agent_markup': return this.utility.compare(+ a.agent_markup, + b.agent_markup, isAsc);
                case 'total_fare': return this.utility.compare(+ a.total_fare, + b.total_fare, isAsc);
                default: return 0;
            }
        });
    }

}

function getDisplayColumn() {
    return [
        { key: 'id', value: '#' },
        { key: 'reference_number', value: 'Application Reference' },
        { key: 'status', value: 'Status' },
        { key: 'agency_name', value: 'Agency Name' },
        { key: 'leadpax_name', value: 'Lead Pax Details' },
        { key: 'from', value: 'From' },
        { key: 'to', value: 'To' },
        { key: 'tarvel_date', value: 'Journey Date' },
        { key: 'type', value: 'Type' },
        { key: 'booked_on', value: 'Booked On' },
        { key: 'pnr', value: 'PNR' },
        { key: 'commissionable_fare', value: 'Comm. Fare' },
        { key: 'commission', value: 'Commission' },
        { key: 'tds', value: 'TDS' },
        { key: 'admin_netfare', value: 'Admin NetFare' },
        { key: 'admin_markup', value: 'Admin Markup' },
        { key: 'agent_commission', value: 'Agent Commission' },
        { key: 'agent_tds', value: 'Agent TDS' },
        { key: 'agent_netfare', value: 'Agent NetFare' },
        { key: 'agent_markup', value: 'Agent Markup' },
        { key: 'total_fare', value: 'Total Fare' },
        { key: 'action', value: 'Action' },
    ];
}

function getFilterOptions(objData) {
    return {
        reference_number: objData.reference_number,
        status: objData.status,
        agency_name: objData.agency_name,
        leadpax_name: objData.leadpax_name,
        from: objData.from,
        to: objData.to,
        type: objData.type,
        booked_on: objData.booked_on,
        tarvel_date: objData.tarvel_date,
        pnr: objData.pnr,
        commissionable_fare: objData.commissionable_fare,
        commission: objData.commission,
        tds: objData.tds,
        admin_netfare: objData.admin_netfare,
        admin_markup: objData.admin_markup,
        agent_commission: objData.agent_commission,
        agent_tds: objData.agent_tds,
        agent_netfare: objData.agent_netfare,
        agent_markup: objData.agent_markup,
        total_fare: objData.total_fare,
    }
}