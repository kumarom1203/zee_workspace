import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers/api-handlers.service';
import { Logger } from '../../../../core/logger/logger.service';

const logger = new Logger('user/B2bLoggedInComponent');


@Component({
  selector: 'app-b2b-logged-in',
  templateUrl: './b2b-logged-in.component.html',
  styleUrls: ['./b2b-logged-in.component.scss']
})
export class B2bLoggedInComponent implements OnInit {


  loggedInUsers: object[] = [];
  displayedColumns: string[] = ['#', 'Image', 'Name', 'Contact', 'User Type', 'IP', 'Login Since'];

  constructor(
    private apiHandlerService: ApiHandlerService,
  ) { }

  ngOnInit() {
    this.apiHandlerService.apiHandler( 'loggedInUserList', 'post', '', '',
      { user_type: 2, offset: 0, limit: 10 }
    ).subscribe(resp => {
      logger.debug(resp);
      if (resp.statusCode == 201) {
        this.loggedInUsers = resp.data;
      }
    })
  }

}
