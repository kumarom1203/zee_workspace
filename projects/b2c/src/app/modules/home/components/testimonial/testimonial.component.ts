import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let owl4 = $("#testimonialslide");
    owl4.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      nav: true
    });

    $('.qodef-testimonials').on('mouseover', function (e) {
      owl4.trigger('stop.owl.autoplay');
    })
    $('.qodef-testimonials').on('mouseleave', function (e) {
      owl4.trigger('play.owl.autoplay');
    })
  }

}
