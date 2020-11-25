import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiHandlerService } from '../../../../../../core/api-handlers';
import { SwalService } from '../../../../../../core/services/swal.service';
import { UtilityService } from '../../../../../../core/services/utility.service';
import { Logger } from '../../../../../../core/logger/logger.service';
import { UsersService } from '../../../../users.service';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';

const log = new Logger('users/SubAgentUserListComponent');
let filterArray: Array<any> = [];
let respDataCopy: Array<any> = [];


@Component({
    selector: 'app-sub-agent-user-list',
    templateUrl: './sub-agent-user-list.component.html',
    styleUrls: ['./sub-agent-user-list.component.scss']
})
export class SubAgentUserListComponent implements OnInit {

    pageSize = 6;
    page = 1;
    collectionSize: number;
    displayColumn: { key: string, value: string }[] = [
        { key: "Slno", value: '#' },
        { key: "login_status", value: 'LoginStatus' },
        { key: "first_name", value: 'Name' },
        { key: "phone", value: 'Contact' },
        { key: "status", value: 'Status' },
        { key: "action", value: 'Actions' },
    ];
    noData: boolean = true;
    respData: any;
    status;

    @Output() toUpdate = new EventEmitter<any>();

    constructor(
        private api: ApiHandlerService,
        private usersService: UsersService,
        private swalService: SwalService,
        private utility: UtilityService,
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getUserList();
    }

    getUserList(): void {
        const statusFromRoute = this.router.snapshot.params["status"];
        if (statusFromRoute == 1) {
            const data = [{ auth_role_id: 5, status: true, offset: 0, limit: 10 }]
            data['topic'] = 'userList';
            this.usersService.fetch(data).subscribe(resp => {
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
        } else if (statusFromRoute == 0) {
            const data = [{ auth_role_id: 5, status: false, offset: 0, limit: 10 }]
            data['topic'] = 'userList';
            this.usersService.fetch(data)
                .subscribe(resp => {
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

    }

    onStatusUpdate(val, index): void {
        log.debug(index);
        const data = [{ id: val['id'] }];
        data['topic'] = 'editUser';
        this.usersService.fetch(data).subscribe(resp => {
            if (resp.statusCode == 200) {
                const data = [{
                    title: resp.data['title'] || '',
                    first_name: resp.data['first_name'] || '',
                    last_name: resp.data['last_name'] || '',
                    date_of_birth: resp.data['date_of_birth'] || '',
                    phone: resp.data['phone'] || '',
                    address: resp.data['address'] || '',
                    status: val['status'] ? true : false,
                    business_name: resp.data['business_name'] || '',
                    business_phone: resp.data['business_phone'] || val['business_phone'] || '',
                    business_number: resp.data['business_number'] || '',
                    id: resp.data['id'] || '',
                    auth_role_id: resp.data['auth_role_id'] || '',
                    email: resp.data['email'] || '',
                }];
                data['topic'] = 'updateUser';
                log.debug("data to update status", data);
                this.usersService.update(data).subscribe(resp => {
                    console.log(resp)
                    if (resp.statusCode == 201) {
                        this.respData.splice(index, 1);
                        respDataCopy = [...this.respData];
                        this.collectionSize = respDataCopy.length;
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

    updateUser(data) {
        this.toUpdate.emit({ tabId: 'add_user', user: data });
    }

    applyFilter(text: string) {
        text = text.toLocaleLowerCase().trim();
        filterArray = respDataCopy.slice().filter((objData, index) => {
            const filterOnFields = {
                first_name: objData.first_name,
                phone: objData.phone,
                email: objData.email,
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
                case 'first_name': return this.utility.compare('' + a.first_name, '' + b.first_name, isAsc);
                case 'phone': return this.utility.compare(+ a.phone, + b.phone, isAsc);
                default: return 0;
            }
        });
    }

}
