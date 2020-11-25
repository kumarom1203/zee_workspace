import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiHandlerService } from '../../../../../../../../../agent/src/app/core/api-handlers';
import { UsersService } from '../../../../../users/users.service';
import { SwalService } from '../../../../../../../../src/app/core/services/swal.service';
import { UtilityService } from '../../../../../../../../src/app/core/services/utility.service';
import { ActivatedRoute } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { Logger } from '../../../../../../core/logger/logger.service';
import { HotelCrsService } from '../../../../hotel-crs.service';

const log = new Logger('hotel-crs/HotelTypeList');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];

@Component({
    selector: 'app-hotel-type-list',
    templateUrl: './hotel-type-list.component.html',
    styleUrls: ['./hotel-type-list.component.scss']
})
export class HotelTypeListComponent implements OnInit {

    pageSize = 6;
    page = 1;
    collectionSize: number;
    displayColumn: { key: string, value: string }[] = [
        { key: "Slno", value: 'SI No.' },
        { key: "hotel_type_name", value: 'Hotel Type Name' },
        { key: "status", value: 'Status' },
        { key: "action", value: 'Actions' },
    ];
    noData: boolean = true;
    respData: any;
    status;

    @Output() toUpdate = new EventEmitter<any>();

    constructor(
        private api: ApiHandlerService,
        private hotelCrsService: HotelCrsService,
        private swalService: SwalService,
        private utility: UtilityService,
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getHotelTypeList();
    }

    getHotelTypeList(): void {
        const data = [{ offset: 0, limit: 10 }]
        data['topic'] = 'hotelTypeList';
        this.hotelCrsService.fetch(data).subscribe(resp => {
            log.debug(resp);
            if (resp.statusCode == 200) {
                this.noData = false;
                this.respData = resp.data;
                console.log(this.respData)
                respDataCopy = [...this.respData];
                this.collectionSize = respDataCopy.length;
            }
            else if (resp.statusCode == 404) {
                this.noData = true;
                this.swalService.alert.error();
            }
        });
    }

    onStatusUpdate(val, index): void {
        log.debug(index);
        const data = [{ id: val['id'] }];
        data['topic'] = 'editHotelType';
        this.hotelCrsService.fetch(data).subscribe(resp => {
            if (resp.statusCode == 200) {
                const data = [{
                    id: resp.data['id'] || '',
                    hotel_type_name: resp.data['hotel_type_name'] || '',
                    status: val['status'] ? true : false,
                }];
                data['topic'] = 'updateHotelType';
                console.log(data)
                this.hotelCrsService.update(data).subscribe(resp => {
                    console.log(resp)
                    if (resp.statusCode == 201) {
                        this.swalService.alert.update();
                    }
                    else
                        this.swalService.alert.oops();
                })
            } else {
                this.swalService.alert.opps();
            }
        });

    }


    updateHotelType(data) {
        this.toUpdate.emit({ tabId: 'add_hotel_type', hotel_type: data });
    }

    applyFilter(text: string) {
        text = text.toLocaleLowerCase().trim();
        filterArray = respDataCopy.slice().filter((objData, index) => {
            const filterOnFields = {
                hotel_type_name: objData.hotel_type_name,
                
            }
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
                case 'hotel_type_name': return this.utility.compare('' + a.hotel_type_name, '' + b.hotel_type_name, isAsc);
                default: return 0;
            }
        });
    }

}
