import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  extraParameter = '';
  firstChildData: any = '';
  currentUser: any;

  constructor(private route: ActivatedRoute) {
    this.extraParameter = this.route.snapshot.firstChild.data.extraParameter;
    this.firstChildData = this.route.snapshot.firstChild.data;
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.route.url.subscribe(url => {
      this.firstChildData = this.route.snapshot.firstChild.data;
    });
  }

  ngOnInit(): void {

  }


}
