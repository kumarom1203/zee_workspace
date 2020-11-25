import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiHandlerService } from '../../../../core/api-handlers';
import { untilDestroyed } from '../../../../core/services/until-destroyed';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any;

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit, AfterViewInit, OnDestroy {

  latLong: { latitude: number, longitude: number };
  hotels: any;
  oneTwo: boolean = false;
  customOptions: OwlOptions = {
    items: 3,
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 8000,
    nav: true,
    dots:false,
    navText: ['', ''],
    autoplayHoverPause: true,
    // navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ]

  };
  constructor(
    private apiHandlerService: ApiHandlerService
  ) { }

  ngOnInit(): void {
    this.getGeoCoords();
  }


  getGeoCoords() {
    navigator.geolocation.getCurrentPosition(positions => {
      this.latLong = { latitude: positions.coords.latitude, longitude: positions.coords.longitude };
      this.getFiveStarHotels(this.latLong);
    }, err => {
      console.log('Browser does not support geolocation', err);
    })
  }

  getFiveStarHotels(latLong) {
    console.log(latLong);
    this.apiHandlerService.apiHandler('fiveStarHotels', 'post', {}, {}, latLong)
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(resp => {
        console.log(resp);
        if (resp.statusCode == 201) {
          this.hotels = resp.data || [];
        } else {
          console.log('no data found');
        }
      }, err => {
        console.log(err);
      })
  }

  ngAfterViewInit() {

    $('.grid-item-room').click(function () {
      console.log('I am inside grid-item-room')
      $('.cstm_nav1').addClass("headtransform");
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let objectSelect = $(".bookrom");
        let objectPosition = objectSelect.offset().top;

        if (scroll > objectPosition) {
          //$(".cstm_nav1").addClass("change");
        } else {
          $(".cstm_nav1").removeClass("headtransform");
        }
      });


      $('html, body').animate({
        scrollTop: $(".gridroom").offset().top - $(window).height() / 9
      }, 500);

    });

    let owl5 = $("#roombook");

    // owl5.owlCarousel({
    //   items: 3,
    //   loop: true,
    //   autoplay: true,
    //   margin: 10,
    //   autoplayTimeout: 8000,
    //   nav: true,
    //   dots:false,
    // });

    $('.gridroom').on('mouseover', function (e) {
      owl5.trigger('stop.owl.autoplay');
    });

    $('.gridroom').on('mouseleave', function (e) {
      owl5.trigger('play.owl.autoplay');
    });

  }

  ngOnDestroy() { }

  one(){
    console.log(1);
    this.oneTwo = !this.oneTwo;
    if(this.oneTwo){
      this.two();
    }

    $('.cstm_nav1').addClass("headtransform");
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      let objectSelect = $(".bookrom");
      let objectPosition = objectSelect.offset().top;

      if (scroll > objectPosition) {
        //$(".cstm_nav1").addClass("change");
      } else {
        $(".cstm_nav1").removeClass("headtransform");
      }
    });
    $('html, body').animate({
      scrollTop: $(".gridroom").offset().top - $(window).height() / 9
    }, 500);
  };
  two() {
    console.log(2);
  };

}
