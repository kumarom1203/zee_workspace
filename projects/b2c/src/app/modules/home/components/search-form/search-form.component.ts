import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HomeComponent } from '../../home.component';
declare var $: any;

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, AfterViewInit {

  @ViewChild('search_box') searchElement: ElementRef<HTMLElement>;


  cities: Array<any> = [];

  constructor(
    private homeComp: HomeComponent
  ) { }

  ngOnInit(): void {
    this.cities = getCities();
    
  }

  changedCity(city) {
    console.log('changedCity', city);
    $('.searchbox_container').removeClass('maxwid');
    $('.search_box_fix').removeClass('opcityshow');
    $('.search_form_index .col-12').addClass('searchshutter');
    $('.searchshutter .submitlogin-hover').css("transform", "scaleX(0)");
    $('.show_data_list').hide();
    $('#backdrop').hide();

    this.homeComp.city = city['city'];
    this.homeComp.lat = city['latitude'];
    this.homeComp.long = city['longitude'];
    this.homeComp.cityChanged();
  }


  ngAfterViewInit(): void {
    $('#search_box').focus(function () {
      $('.search_form_index .col-12').removeClass('searchshutter');
      $('.show_data_list_main').show();
      $('.searchbox_container').addClass('maxwid');
      $('.search_box_fix').addClass('opcityshow');
      $(document).bind('focusin.show_data_list_main click.show_data_list_main', function (e) {
        if ($(e.target).closest('.show_data_list_main, #search_box').length) return;
        $(document).unbind('.show_data_list_main');

        $('.searchbox_container').removeClass('maxwid');
        $('.search_box_fix').removeClass('opcityshow');
        $('.search_form_index .col-12').addClass('searchshutter');
        $('.searchshutter .submitlogin-hover').css("transform", "scaleX(0)");
        $('.show_data_list').hide();
        $('#backdrop').hide();
      });

      $('#backdrop').show();
    });

    $('.show_data_list_main').hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('#backdrop').hide();
        $('.show_data_list_main').hide();
        $('.searchbox_container').removeClass('maxwid');
      } else {

      }
    });


    $('.searchshutter')
      .mouseover(function () {
        $('.searchshutter .mobbtn img').attr("src", "assets/images/mikew.png");
      })
      .mouseout(function () {
        $('.searchshutter .mobbtn img').attr("src", "assets/images/mike.png");
      });

    $('.search_form_index .input_form_box').click(function () {
      $('.mobbtn img').attr("src", "assets/images/mike.png");
    });


    $("#mapsvg").mapSvg({
      width: 587.94,
      height: 343.54001,
      colors: {
        baseDefault: "#000000",
        background: "rgba(255,255,255,0)",
        selected: "#000000",
        hover: "#5e5e57",
        directory: "#fafafa",
        status: {},
        stroke: "#ffffff",
        base: "#8f8f8f",
        disabled: "#ffffff"
      },
      viewBox: [0, 0, 165.92968, 96.95461],
      gauge: {
        on: false,
        labels: {
          low: "low",
          high: "high"
        },
        colors: {
          lowRGB: {
            r: 85,
            g: 0,
            b: 0,
            a: 1
          },
          highRGB: {
            r: 238,
            g: 0,
            b: 0,
            a: 1
          },
          low: "#550000",
          high: "#ee0000",
          diffRGB: {
            r: 153,
            g: 0,
            b: 0,
            a: 0
          }
        },
        min: 0,
        max: false
      },
      source: "assets/images/usa-labels-boxes.svg",
      title: "Usa-labels-boxes",
      responsive: true
    });
  }
}

function getCities() {
  return [
    {
      city: "New York",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
      country: 'USA'
    },
    {
      city: "Los Angeles",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California",
      country: 'USA'
    },
    {
      city: "Chicago",
      growth_from_2000_to_2013: "-6.1%",
      latitude: 41.8781136,
      longitude: -87.6297982,
      population: "2718782",
      rank: "3",
      state: "Illinois",
      country: 'USA'
    },
    {
      city: "Houston",
      growth_from_2000_to_2013: "11.0%",
      latitude: 29.7604267,
      longitude: -95.3698028,
      population: "2195914",
      rank: "4",
      state: "Texas",
      country: 'USA'
    },
    {
      city: "San Francisco",
      growth_from_2000_to_2013: "7.7%",
      latitude: 37.7749295,
      longitude: -122.4194155,
      population: "837442",
      rank: "14",
      state: "California",
      country: 'USA'
    },
    {
      city: "Bengaluru",
      growth_from_2000_to_2013: "7.7%",
      latitude: 12.8518137,
      longitude: 77.65623959999999,
      population: "837442",
      rank: "23",
      state: "Karnataka",
      country: 'India'
    }

  ]
}