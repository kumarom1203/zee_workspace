import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-promocode',
  templateUrl: './promocode.component.html',
  styleUrls: ['./promocode.component.scss']
})
export class PromocodeComponent implements OnInit {

  @ViewChild('tabs', {static: true}) public tabs: NgbTabset;
  updatePromoCode: any;
  constructor() { }

  ngOnInit() {
    this.updatePromoCode = null;
  }

  triggerTab(event){
    console.log(event);
    this.updatePromoCode = event.data;
    this.tabs.select(event.tabId);
  }

}