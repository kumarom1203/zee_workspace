import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HomeService } from '../../home.service';

declare var $: any;

@Component({
  selector: 'app-city-guide',
  templateUrl: './city-guide.component.html',
  styleUrls: ['./city-guide.component.scss']
})
export class CityGuideComponent implements OnInit, AfterViewInit {

  @Input('cities') private cities;
  googleCities: Array<any> = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.result1.subscribe(resp => {
      this.googleCities = resp;
    });
    this.selfInvoke();
  }

  getUrl(item: any) {
    try {
        return item['photos'][0].getUrl({ maxWidth: item.photos[0].width, maxHeight: item.photos[0].height });
    } catch (error) {
      // console.log(error);
    }
  }

  ngAfterViewInit(): void {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      masonry: {}
    });
    $('.grid-item').click(function () {
      $('.cstm_nav1').addClass("headtransform");
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let objectSelect = $(".inspired_city");
        let objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
        } else {
          $(".cstm_nav1").removeClass("headtransform");
        }
      });
      $('html, body').animate({
        scrollTop: $(".city_guide").offset().top + 10
      }, 500);
    });
  }

  selfInvoke() {

    (function ($) {
      $(window).on("load", function () {
        console.log('mCustomScrollbar called in IIF')
        $("#content3").mCustomScrollbar({
          scrollButtons: {
            enable: true
          },
          theme: "light-thick",
          scrollbarPosition: "outside"
        });

      });
    })($);

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(window.document, 'script', 'weatherwidget-io-js'));
  }


}
