import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalConfigDataI, MatModalService } from '../../../../core/services/mat-modal.service';
import { Subscription } from 'rxjs';
import { ModalConfigDefault } from '../../../../core/services/mat-modal.service';
import { EditBranchComponent } from './edit-branch/edit-branch.component';
import { SwalService } from '../../../../core/services/swal.service';
import { Logger } from '../../../../core/logger/logger.service';

const log = new Logger('manage-master-data/BranchListComponent');

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit, OnDestroy {
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
        if(resoled){
          this.branchListData.splice(index,1);
          this.swalService.alert.success('Your data has been deleted successfully','Deleted..!');
        }
      }, rejected => log.debug(rejected));
  };
  openDialog(whichComponent, data?: any) {
    console.log('whichComponent, data', whichComponent, data);
    this.modalConfigData.width = '500px';
    switch (whichComponent) {
      case 1: this.modalConfigData.component = EditBranchComponent;
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
          (val['#'] == res['#']) && ( this.branchListData[i]['Branch_Name'] = res['Branch_Name'])  
        })
        this.swalService.alert.update();

      } else {
        this.subscription.unsubscribe();
        log.debug('no data found', res);
      }
    })
  }

  ngOnDestroy() { }

}

function getData() {
  return [
    {
      '#': 1,
      Branch_Name: 'Branch-1',
      Action: true,
    },
    {
      '#': 2,
      Branch_Name: 'Branch-2',
      Action: true,
    },
    {
      '#': 3,
      Branch_Name: 'Branch-3',
      Action: true,
    }
  ]
}
