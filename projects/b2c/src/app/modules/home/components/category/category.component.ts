import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HomeService } from '../../home.service';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit {

  @Input('catagories') private catagories;

  googleCatagories: Array<any> = [];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.result3.subscribe( resp => {
      this.googleCatagories = resp;
    })
  }

  getUrl(item: any) {
    try {
        return item['photos'][0].getUrl({ maxWidth: item.photos[0].width, maxHeight: item.photos[0].height });
    } catch (error) {
      // console.log(error);
    }
  }

  ngAfterViewInit() {
    $('.qodef-banner-image a').click(function () {
      $('.cstm_nav1').addClass("headtransform");
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var objectSelect = $(".category");
        var objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
          //$(".cstm_nav1").addClass("change");
        } else {
          $(".cstm_nav1").removeClass("headtransform");
        }
      });
      $('html, body').animate({
        scrollTop: $(".category").offset().top + 60
      }, 500);
    });
  }

}
