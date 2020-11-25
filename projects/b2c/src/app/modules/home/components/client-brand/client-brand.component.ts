import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-client-brand',
  templateUrl: './client-brand.component.html',
  styleUrls: ['./client-brand.component.scss']
})
export class ClientBrandComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let owl3 = $("#clienticon");

    owl3.owlCarousel({
      items: 3,
      navigation: false,
      loop: true,
      autoplay: true,
      margin: 10,
      autoplayTimeout: 5000,
    });

    $('.client_brand').on('mouseover', function (e) {
      owl3.trigger('stop.owl.autoplay');
    })
    $('.client_brand').on('mouseleave', function (e) {
      owl3.trigger('play.owl.autoplay');
    })

  }

}
