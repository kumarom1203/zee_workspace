import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { HomeService } from '../../home.service';

declare var $: any;

@Component({
  selector: 'app-story-blog',
  templateUrl: './story-blog.component.html',
  styleUrls: ['./story-blog.component.scss']
})
export class StoryBlogComponent implements OnInit, AfterViewInit {

  @Input('stories') private stories;
  googleStories: Array<any> = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.result2.subscribe(resp => {
      this.googleStories = resp;
      console.log(this.googleStories)
    });
  }

  getUrl(item: any) {
    try {
        return item['photos'][0].getUrl({ maxWidth: item.photos[0].width, maxHeight: item.photos[0].height });
    } catch (error) {
      // console.log(error);
    }
  }


  ngAfterViewInit(): void {
    $(".backsection").hide();
    $('#clickrecommendslide').click(function () {
      $('.storygrid').hide();
      $('.cstm_nav1').addClass("headtransform");
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let objectSelect = $(".title_story");
        let objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
          //$(".cstm_nav1").addClass("change");
        } else {
          $(".cstm_nav1").removeClass("headtransform");
        }
      });

      $("#showrecommendslide").stop().fadeIn(1000);

      $('html, body').animate({
        scrollTop: $(".title_story").offset().top + 200
      }, 500);

      let owl9 = $("#recommends");

      owl9.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: false,

      });

      $('.prw_rup').on('mouseover', function (e) {
        owl9.trigger('stop.owl.autoplay');
      })
      $('.prw_rup').on('mouseleave', function (e) {
        owl9.trigger('play.owl.autoplay');
      })

      $(".backsection").animate({
        width: 76
      });
      $(".backsection").show();

    });

    $('.backsection').click(function () {
      $("#showrecommendslide").hide();
      $('.storygrid').fadeIn(1000);
      $(".backsection").animate({
        width: 0
      });

    });

    $(".backnews").hide();
    $('#clickrecommendsnews').click(function () {
      $('.storyqoutes').hide();
      $('.cstm_nav1').addClass("headtransform");
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        let objectSelect = $(".title_story");
        let objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
          //$(".cstm_nav1").addClass("change");
        } else {
          $(".cstm_nav1").removeClass("headtransform");
        }
      });

      $(".storyslide").stop().fadeIn(1000);

      $('html, body').animate({
        scrollTop: $(".title_story").offset().top + 200
      }, 500);

      let owl10 = $("#recommendsnews");

      owl10.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 8000,
        nav: false,
      });

      $('.prw_rup').on('mouseover', function (e) {
        owl10.trigger('play.owl.autoplay');
        owl10.owlCarousel({
          items: 3,
          loop: true,
          autoplay: true,
          autoplayTimeout: 100,
          nav: false,
        });
      })

      $(".backnews").animate({
        width: 76
      });
      $(".backnews").show();

    });

    $('.backnews').click(function () {
      $(".storyslide").hide();
      $('.storyqoutes').fadeIn(1000);
      $(".backnews").animate({
        width: 0
      });
    });

    (function ($) {
      $(".wishlist--outline").click(function () {
        $(this).toggleClass("filled");

      });
    })($);
  }

}
