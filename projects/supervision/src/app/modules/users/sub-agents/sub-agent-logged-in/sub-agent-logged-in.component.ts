import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers/api-handlers.service';
import { Logger } from '../../../../core/logger/logger.service';

const logger = new Logger('user/SubAgentLoggedInComponent');

@Component({
  selector: 'app-sub-agent-logged-in',
  templateUrl: './sub-agent-logged-in.component.html',
  styleUrls: ['./sub-agent-logged-in.component.scss']
})
export class SubAgentLoggedInComponent implements OnInit {

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
