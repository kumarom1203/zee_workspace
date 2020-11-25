import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers/api-handlers.service';
import { Logger } from '../../../../core/logger/logger.service';

const logger = new Logger('user/StaffLoggedInComponent');

@Component({
  selector: 'app-staff-logged-in',
  templateUrl: './staff-logged-in.component.html',
  styleUrls: ['./staff-logged-in.component.scss']
})
export class StaffLoggedInComponent implements OnInit {

  loggedInUsers: object[] = [];
  displayedColumns: string[] = ['#', 'Image', 'Name', 'Contact', 'User Type', 'IP', 'Login Since'];

  constructor(
    private apiHandlerService: ApiHandlerService,
  ) { }

  ngOnInit() {
    this.apiHandlerService.apiHandler( 'loggedInUserList', 'post', '', '',
      { offset: 0, limit: 10 }
    ).subscribe(resp => {
      logger.debug(resp);
      if (resp.statusCode == 201) {
        this.loggedInUsers = resp.data['logged_in_user_list'];
      }
    })
  }

}
