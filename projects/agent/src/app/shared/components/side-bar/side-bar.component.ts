import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  extraParameter = '';
  currentUser: any;

  constructor(private route: ActivatedRoute) {
    this.extraParameter = this.route.snapshot.firstChild.data.extraParameter;
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(this.currentUser)
  }



}
