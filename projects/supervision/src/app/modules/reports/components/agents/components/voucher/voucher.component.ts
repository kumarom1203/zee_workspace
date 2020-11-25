import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../../../../../core/services/swal.service';
import { AgentService } from '../../agents.service';
import { UtilityService } from '../../../../../../core/services/utility.service';

@Component({
    selector: 'app-voucher',
    templateUrl: './voucher.component.html',
    styleUrls: ['./voucher.component.scss']
})

export class VoucherComponent implements OnInit {
    noData: boolean = true;
    respData: any;

    constructor(
        private swalService: SwalService,
        private agentService: AgentService,
        private utility: UtilityService
    ) { }

    ngOnInit(): void {
        console.log(this.utility.readStorage('voucherData', sessionStorage));
        const voucherData = this.utility.readStorage('voucherData', sessionStorage);
        const data = [{
            reference_number: voucherData['reference_number'],
            booking_source: voucherData['booking_source'],
            booking_status: voucherData['status']
        }];
        data['topic'] = 'flightVoucher';
        this.agentService.fetch(data)
            .subscribe(resp => {
                if (resp.statusCode == 201) {
                    this.noData = false;
                    this.respData = resp.data;
                } else {
                    this.swalService.alert.opps();
                }
            });
    }
}

function getData() {
    return {
        "voucher_data": {
            "booking_details": [
                {
                    "app_reference": "FB06-054505-254641",
                    "status": "BOOKING_HOLD",
                    "email": "anitha.g.provab@gmail.com",
                    "phone": "8050584929",
                    "booked_date": "19-May-2020"
                }
            ],
            "booking_itinerary_details": [
                {
                    "airline_code": "TR",
                    "airline_name": "Transbrasil s/a linhas aereas",
                    "flight_number": "981",
                    "fare_class": "Economy",
                    "from_airport_code": "HKG",
                    "from_airport_name": "Hong Kong International Airport",
                    "to_airport_code": "SIN",
                    "to_airport_name": "Changi Airport",
                    "departure_datetime": "2020-07-04 19:20:00",
                    "arrival_datetime": "2020-07-04 23:15:00",
                    "attributes": "{\"AirlinePNR\":null,\"IsRefundable\":0,\"OperatingAirline\":\"\",\"Duration\":\"3 Hrs 55 Mins \",\"LayOverTime\":null,\"OriginTerminal\":\"2\",\"DestinationTerminal\":\"1\",\"Attr\":{\"Baggage\":\"20 Kilograms\",\"CabinBaggage\":0,\"AvailableSeats\":\"7\"}}",
                    "airline_pnr": ""
                }
            ],
            "booking_customer_details": [
                {
                    "passenger_type": "Adult",
                    "title": "Mrs",
                    "first_name": "Anitha",
                    "middle_name": "",
                    "last_name": "Gangapatanm",
                    "date_of_birth": "1990-03-14",
                    "ticket_number": null
                },
                {
                    "passenger_type": "Child",
                    "title": "Mr",
                    "first_name": "Anil",
                    "middle_name": "",
                    "last_name": "Gangapatanm",
                    "date_of_birth": "2010-05-12",
                    "ticket_number": null
                },
                {
                    "passenger_type": "Infant",
                    "title": "Mr",
                    "first_name": "Saiii",
                    "middle_name": "",
                    "last_name": "Gangapatanm",
                    "date_of_birth": "2019-03-14",
                    "ticket_number": null
                }
            ],
            "booking_transaction_details": [
                {
                    "gds_pnr": "5HV8V8",
                    "fare_breakup": {
                        'Currency': 'KRW', 'Fare_Type': 'Regular Fare', 'TotalDisplayFare': '1639.28', 'PriceBreakup': { 'BasicFare': '939.92', 'Tax': '699.36', 'TotalPrice': '1639.28', 'RBD': 'X', 'TaxDetails': { 'G3': '163.68', 'HK': '72.73', 'I5': '90.95', 'YR': '372.00' }, 'AgentCommission': '0.00', 'AgentTdsOnCommision': '0.00', 'CommissionEarned': 0, 'PLBEarned': 0, 'TdsOnCommission': 0, 'TdsOnPLB': 0 }, 'PassengerBreakup': { 'ADT': { 'PassengerCount': 1, 'BasePrice': '388.12', 'Tax': '281.60', 'TotalPrice': '669.72' }, 'CHD': { 'PassengerCount': 1, 'BasePrice': '388.12', 'Tax': '208.88', 'TotalPrice': '597.00' }, 'INF': { 'PassengerCount': 1, 'BasePrice': '163.68', 'Tax': '208.88', 'TotalPrice': '372.56' } }
                    },
                    "total_fare": "1639.28"
                }
            ],
            "extrabaggge_details": [],
            "meal_details": [],
            "seat_details": []
        },
        "domain_details": {
            "address": null,
            "logo": "test.png",
            "phone": null,
            "domainname": "Demo Dollar",
            "domainwebsite": "https://travelsoho.com/antrip_v1"
        }
    }
}