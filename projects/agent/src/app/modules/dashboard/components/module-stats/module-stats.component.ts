import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';
import { SwalService } from '../../../../core/services/swal.service';
import { Logger } from 'projects/supervision/src/app/core/logger/logger.service';
import { Router } from '@angular/router';


const log = new Logger('dashboard/ModuleStatsComponent')


@Component({
  selector: 'app-module-stats',
  templateUrl: './module-stats.component.html',
  styleUrls: ['./module-stats.component.scss']
})
export class ModuleStatsComponent implements OnInit {

  moduleBookingCountFound: boolean = false;
  moduleBookingCount: any;

  constructor(
    private dashboardService: DashboardService,
    private swalService: SwalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getModuleBookingCount();
  }

  getModuleBookingCount() {
    const data = [{
      'domain_origin': 5
    }];
    data['topic'] = 'moduleBookingCount';
    this.dashboardService.fetch(data)
      .subscribe(resp => {
        log.debug(resp);
        if (resp.statusCode == 200) {
          this.moduleBookingCountFound = true;
          this.moduleBookingCount = resp['data'];
        } else if (resp.statusCode == 404) {
          this.moduleBookingCountFound = false;
          this.swalService.alert.error();
        }
      })

  }

  gotoReports() {
    log.debug('gotoReports called');
    // this.router.navigate(['/reports/transaction-logs']);
    this.router.navigate(['/reports/agents']);
  }

}
