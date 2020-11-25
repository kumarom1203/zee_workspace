/* /// <reference types="@types/googlemaps" /> */
/**
 * To use googlemaps api npm install @types/googlemaps
 *  Make a file index.d.ts in src folder
 *  Write "declare module 'googlemaps';" into this index.d.ts file
 *  Then import the googlemaps module as follows in ts/component file
 *  "import { } from 'googlemaps';"
 */
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { } from 'googlemaps';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: any;
  lat: any;
  long: any;
  coordinates: any;
  city: any;

  isDevlopment: boolean = true;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    if (!this.isDevlopment) {
      this.getGeoLocation();
    }
  }

  ngAfterViewInit(): void {

  }

  getGeoLocation() {
    navigator.geolocation.getCurrentPosition(positions => {
      this.lat = positions.coords.latitude;
      this.long = positions.coords.longitude;
      this.getCityName(this.lat, this.long);
    }, (err => {
      console.error("Your browser doesn't supprot geolocation", err);
    })
    )
  }

  cityChanged() {

    this.coordinates = new google.maps.LatLng(this.lat, this.long);
    this.map = new google.maps.Map(window.document.getElementById('map'), {
      center: this.coordinates,
      zoom: 15
    });

    let service = new google.maps.places.PlacesService(this.map);

    let request1 = {
      query: this.city.split(' ').join('+') + '+point+of+interest'
    };
    service.textSearch(request1, this.callBack1.bind(this));

    let request2 = {
      query: this.city,
      types: ['amusement_park', 'aquarium', 'art_gallery', 'zoo', 'park', 'museum', 'movie_theater']
    };
    service.textSearch(request2, this.callBack2.bind(this));

    let request3 = {
      query: this.city,
      types: [ 'food', 'restaurant', 'cafe', 'park',  'tourist_attraction', 'art_gallery', 'curch', 'hindu_temple', 'mosque', 'bar', 'night_club', 'casino']
    };
    service.textSearch(request3, this.callback3.bind(this));

    this.homeService.result1.subscribe(val => {
      if (val.length > 0) {
        for (let d of val) {
          let request11 = {
            placeId: `${d['place_id']}`,
            // placeId: 'ChIJX-RTBqksDogRRh_Q4ynbf_8',
            fields: ['name', 'rating', 'formatted_phone_number', 'geometry', 'address_component', 'adr_address', 'formatted_address', 'geometry', 'icon', 'name', 'business_status', 'photo', 'place_id', 'plus_code', 'type', 'url', 'utc_offset_minutes', 'formatted_phone_number', 'international_phone_number', 'opening_hours.weekday_text', 'website', 'price_level', 'rating', 'review', 'user_ratings_total']
          };
          service.getDetails(request11, function (places, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              console.log("places #######################",d['place_id'],'@',  'Nos of photos:-',places['photos'].length, places, JSON.stringify(places));
            }
          });
        }
      }
    })


  }


  callBack1(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log('callBack1-results', JSON.stringify(results));
      let temp = [];
      for (let i = 0; i < results.length; i++) {
        let item = results[i];
        if (item && item.name && item.photos && item.photos.length > 0) {
          temp.push(item);
        }
      }
      if (this.homeService != undefined) {
        // this.homeService.result1.next(temp)
        this.homeService.updateResults(1, temp);
      }
    }
  }

  callBack2(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log('callBack2-results', JSON.stringify(results));
      let temp = [];
      for (var i = 0; i < results.length; i++) {
        let item = results[i];
        if (item && item.name && item.photos && item.photos.length > 0) {
          temp.push(item);
        }
      }
      if (this.homeService != undefined) {
        this.homeService.updateResults(2, temp);
      }
    }
  }

  callback3(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log("callback3-results", JSON.stringify(results));
      let temp = [];
      for (var i = 0; i < results.length; i++) {
        let item = results[i];
        if (item && item.name && item.photos && item.photos.length > 0) {
          temp.push(item)
        }
      }
      if (this.homeService != undefined) {
        this.homeService.updateResults(3, temp);
      }
    }
  }

  async getCityName(latitude, longitude) {
    let geocoder;
    geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(latitude, longitude);
    let city = "";
    geocoder.geocode(
      { 'latLng': latlng },
      (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            let add = results[0].formatted_address;
            let value = add.split(",");

            let count = value.length;
            let country = value[count - 1];
            let state = value[count - 2];
            this.city = value[count - 3]
            // x.innerHTML = "city name is: " + this.city;
            console.log("city name is: " + this.city);
            this.cityChanged()
          }
          else {
            // x.innerHTML = "address not found";
            console.log("address not found");
          }
        }
        else {
          // x.innerHTML = "Geocoder failed due to: " + status;
          console.log("Geocoder failed due to: " + status);
        }
      }
    );

  }

}
