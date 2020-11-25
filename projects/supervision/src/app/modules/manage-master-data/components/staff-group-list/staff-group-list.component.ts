import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatModalService, ModalConfigDataI, ModalConfigDefault } from '../../../../core/services/mat-modal.service';
import { Subscription } from 'rxjs';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { SwalService } from '../../../../core/services/swal.service';
import { Logger } from '../../../../core/logger/logger.service';

const log = new Logger('manage-master-data/StaffGroupListComponent');

@Component({
  selector: 'app-staff-group-list',
  templateUrl: './staff-group-list.component.html',
  styleUrls: ['./staff-group-list.component.scss']
})
export class StaffGroupListComponent implements OnInit, OnDestroy {
  branchListData;
  displayedColumns;
  modalConfigData: ModalConfigDataI;
  subscription: Subscription;

  constructor(
    private matModalService: MatModalService,
    private swalService: SwalService,

  ) {
    this.modalConfigData = ModalConfigDefault

  }

  ngOnInit() {
    this.branchListData = getData();
    this.displayedColumns = Object.keys(this.branchListData[0]);
  }

  onDelete(user, index) {
    this.swalService.alert.delete()
      .then(resoled => {
        if (resoled){
          this.branchListData.splice(index,1)
          this.swalService.alert.success('Your data has been deleted successfully', 'Deleted..!');
        }
      }, rejected => log.debug(rejected));
  };

  openDialog(whichComponent, data?: any) {
    console.log('whichComponent, data', whichComponent, data)
    this.modalConfigData.width = '500px';
    switch (whichComponent) {
      case 1: this.modalConfigData.component = EditStaffComponent;
        this.modalConfigData.data = data;
        break;
    }
    this.matModalService.openDialog(this.modalConfigData);
    this.getModalData();
  }

  getModalData() {
    this.subscription = this.matModalService.getData().subscribe(res => {
      if (!res.noData) {
        this.subscription.unsubscribe();
        log.debug('data found', res);
        this.branchListData.find((val, i) => {
          (val['#'] == res['#']) && ( this.branchListData[i]['Staff_Group_Name'] = res['Staff_Group_Name'])  
        })
        this.swalService.alert.update();

      } else {
        this.subscription.unsubscribe();
        log.debug('no data found', res);
      }
    })
  }


  ngOnDestroy() {

  }

}







function getData() {
  return [
    {
      '#': 1,
      Staff_Group_Name: 'Jond',
      Action: true,
    },
    {
      '#': 2,
      Staff_Group_Name: 'Ronnie',
      Action: true,
    },
    {
      '#': 3,
      Staff_Group_Name: 'XYZ',
      Action: true,
    }
  ]
}
