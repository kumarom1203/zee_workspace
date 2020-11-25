import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logger } from '../../../../core/logger/logger.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;
const log = new Logger('home/BannerComponent');

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerImages: any;

  constructor() { }

  ngOnInit(): void {
    this.myFunc();
    getImages.subscribe(resp => {
      log.debug(resp);
      if (resp.statusCode == 200) {
        this.bannerImages = resp.data;
      }
    }, ((err: HttpErrorResponse) => {
      log.debug(err.error)
      this.bannerImages = [];
    }))
  }

  myFunc() {
    let htmlDiv = window.document.getElementById("rs-plugin-settings-inline-css");
    let htmlDivCss = "";
    if (htmlDiv) {
      htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
    } else {
      let htmlDiv = window.document.createElement("div");
      htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
      window.document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
    }

    let revapi1,
      tpj;
    (function () {
      if (!/loaded|interactive|complete/.test(window.document.readyState)) window.document.addEventListener("DOMContentLoaded", onLoad);
      else onLoad();

      function onLoad() {
        if (tpj === undefined) {
          tpj = $;
          // if ("off" == "on") tpj.noConflict();
        }
        if (tpj("#rev_slider_1_2").revolution == undefined) {
          // revslider_showDoubleJqueryError("#rev_slider_1_2");
        } else {
          revapi1 = tpj("#rev_slider_1_2").show().revolution({
            sliderType: "standard",
            jsFileLocation: "//iver.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
              keyboardNavigation: "off",
              keyboard_direction: "horizontal",
              mouseScrollNavigation: "off",
              mouseScrollReverse: "default",
              onHoverStop: "on",
              arrows: {
                style: "qodef-nav-light",
                enable: true,
                hide_onmobile: true,
                hide_under: 1024,
                hide_onleave: false,
                tmp: '<span class="qodef-nav-mark">  <span class="qodef-nav-text"></span></span>',
                left: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 0,
                  v_offset: -12
                },
                right: {
                  h_align: "right",
                  v_align: "center",
                  h_offset: 0,
                  v_offset: 12
                }
              }
            },


            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1300, 1100, 1025, 480],
            gridheight: [903, 470, 845, 720],
            lazyType: "none",
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0px",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: "off",
              nextSlideOnWindowFocus: "off",
              disableFocusListener: false,
            }
          });
        }; /* END OF revapi call */

      }; /* END OF ON LOAD FUNCTION */
    }()); /* END OF WRAPPING FUNCTION */

    $('#slidePlay').on('click', function () {
      revapi1.revnext();
      $('#slidePause').show();
      $('#slidePlay').hide();
    });

    $('#slidePause').on('click', function () {
      revapi1.revpause();
      $('#slidePause').hide();
      $('#slidePlay').show();
    });
  }

}


let getImages = Observable.create((observer: any) => {
  observer.next({
    statusCode: 200,
    msg: '',
    data: [
      {
        img_url: 'assets/images/h1-rev-img-1.jpg'
      },
      {
        img_url: 'assets/images/h1-rev-img-4.jpg'
      },
      {
        img_url: 'assets/images/h1-rev-img-3.jpg'
      }
    ]
  })
})