import { Component, OnInit, Input, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { ApiHandlerService } from '../../../core/api-handlers';
import { untilDestroyed } from '../../../core/services';
import { HttpErrorResponse } from '@angular/common/http';
import { Logger } from '../../../core/logger/logger.service';
import { AppGlobal } from '../../../app.global';
import { Observable } from 'rxjs';

declare var $: any;
const log = new Logger('shared/HeaderComponent');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('fromHomePage') headerFromHome = false;
  @Input('fromOtherPage') fromOtherPage = false;

  currencyData: any;
  countryList: any;
  constructor(
    private apiHandlerService: ApiHandlerService,
    public globals: AppGlobal
  ) { }

  ngOnInit(): void {
    this.getDomainLogo();

    this.getCountryList();

    getData.subscribe(resp => {
      log.debug(resp);
      if (resp.statusCode == 200) {
        this.currencyData = resp.data;
        console.log(this.currencyData);
      }

    }, (err: any) => {
      log.debug(err.error);
      this.currencyData = [];
      // let msg = '';
      // switch(err.error.statusCode){
      //   case 400: 
      //     msg = 'Oops! Something went wrong.';
      //     break;
      //   default: 
      //     msg = 'Oops! Something went wrong.';
      // }
    });

  }


  @HostListener('window:scroll', []) onWindowScroll() {
    this.myfunction();
  }

  getCountryList() {
    getCountry.subscribe(resp => {
      log.debug(resp);
      if (resp.statusCode == 200) {
        this.countryList = resp.data;
        console.log(this.countryList);
      }

    }, (err: any) => {
      log.debug(err.error);
      this.countryList = [];
      // let msg = '';
      // switch(err.error.statusCode){
      //   case 400: 
      //     msg = 'Oops! Something went wrong.';
      //     break;
      //   default: 
      //     msg = 'Oops! Something went wrong.';
      // }

    })
  }

  getDomainLogo() {
    this.apiHandlerService.apiHandler('domainLogo', 'post', {}, {}, { type: 'header' })
      .pipe(untilDestroyed(this))
      .subscribe(resp => {
        console.log(resp);
        if (resp.Status) {
          this.globals.logoHeader = String(resp.Data.domain_logo);
        }
      }, (err: HttpErrorResponse) => {
        console.log(err.error);
        // this.globals.logoHeader = String(err.error.text);
      })
  }

  myfunction() {

    let y = $(document).scrollTop(); // window.document.documentElement.scrollTop;
    let navWrap = $('.wpb_wrapper_form_head').offset().top;
    if (y > 300  && navWrap > 300) {
      $('.wpb_wrapper_form_head').addClass('showsearch');
      $('.cstm_nav1 .qodefmenu').addClass('menualign');
      $('#search_box_head').focus(function () {
        $('.showsearch .show_data_list_head').show();
        $(document).bind('focusin.show_data_list_head click.show_data_list_head', function (e) {
          if ($(e.target).closest('.show_data_list_head, #search_box_head').length) return;
          $(document).unbind('.show_data_list_head');
          $('.showsearch .show_data_list_head').hide();
          $('.backdrop1').hide();
        });
        $('.backdrop1').show();
      });
    } else {
      $('.wpb_wrapper_form_head').removeClass('showsearch');
      $('.cstm_nav1 .qodefmenu').removeClass('menualign');
      $('.backdrop1').hide();
      $('.show_data_list_head').hide();
    }

  }

  ngAfterViewInit(): void {
    const body = window.document.body;
    const triggerMenu = window.document.querySelector(".cstm_nav");
    const scrollUp = "nav-up";
    const scrollDown = "nav-down";
    let lastScroll = 1200;

    triggerMenu.addEventListener("click", () => {
      body.classList.toggle("menu-open");
    });

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
      }
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {

        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    $(function () {
      $('.currency_selector').hover(function () {
        $('.currency_selector .dropdown-menu').addClass('show');
      },
        function () {
          $('.currency_selector .dropdown-menu').removeClass('show');
        });
    });

    $(function () {
      $('.language-selector').hover(function () {
        $('.language-selector .dropdown-menu').addClass('show');
      },
        function () {
          $('.language-selector .dropdown-menu').removeClass('show');
        });
    });


    $(function () {
      $('.currency_selector1').hover(function () {
        $('.currency_selector1 .dropdown-menu').addClass('show');
      },
        function () {
          $('.currency_selector1 .dropdown-menu').removeClass('show');
        });
    });

    $(function () {
      $('.language-selector1').hover(function () {
        $('.language-selector1 .dropdown-menu').addClass('show');
      },
        function () {
          $('.language-selector1 .dropdown-menu').removeClass('show');
        });
    });
    
    setTimeout(() => {
      if (this.headerFromHome) {
        window.document.getElementById('navbar').classList.add('cstm_nav_home')
      } else {
        window.document.getElementById('navbar').classList.remove('cstm_nav_home')
      }
    }, 0)
  }

  ngOnDestroy(): void { }

}


let getData = Observable.create((observer: any) => {
  try {
    observer.next(Data),
      observer.complete()

  } catch (error) {
    observer.error(error)
  }
});

let getCountry = Observable.create((observer: any) => {
  try {
    observer.next(country);
    observer.complete('I have no more country');
  } catch (error) {
    observer.error(error);
  }
})

let Data = {
  statusCode: 200,
  msg: '',
  data: [
    {
      name: '',
      code: 'USD',
      symbol: '$'
    },
    {
      name: '',
      code: 'AED',
      symbol: 'د.إ',
    },
    {
      name: '',
      code: 'AUD',
      symbol: '$'
    },
    {
      name: '',
      code: 'SAR',
      symbol: '﷼'
    },
    {
      name: '',
      code: 'RUB',
      symbol: '₽'
    },
    {
      name: '',
      code: 'JPY',
      symbol: '¥'
    }
  ]
}


let country = {
  statusCode: 200,
  msg: '',
  data: [
    {
      language: 'English',
      flag_url: 'assets/images/flag-uk.png'
    },
    {
      language: 'French',
      flag_url: 'assets/images/flag-fr.png'
    },
    {
      language: 'Spanish',
      flag_url: 'assets/images/flag-es.png'
    },
    {
      flag_url: 'assets/images/country_flag/aud.png'
    },
    {
      flag_url: 'assets/images/country_flag/rub.png'
    },
    {
      flag_url: 'assets/images/country_flag/eur.png'
    },
    {
      flag_url: 'assets/images/country_flag/jpy.png'
    },
    // {
    //   flag_url: 'assets/images/country_flag/gbp.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/krw.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/thb.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/vnd.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/mnt.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/php.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/hkd.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/idr.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/joy.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/inr.png'
    // },
    // {
    //   flag_url: 'assets/images/country_flag/cny.png'
    // },
  ]

}