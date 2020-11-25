import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root"
})

export class HomeService {
    result1: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    result2: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    result3: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    constructor() {
        // this.result1.next(result1);
        // this.result2.next(result2);
        // this.result3.next(result3);
    }

    updateResults(t: number, d: any) {
        switch (t) {
            case 1: this.result1.next(d);
                break;
            case 2: this.result2.next(d);
                break;
            case 3: this.result3.next(d);
                break;
        }
    }
}

let result1 = [{
    "business_status": "OPERATIONAL",
    "formatted_address": "Vasanth Nagar, Bengaluru, Karnataka 560052, India",
    "geometry": {
        "location": {
            "lat": 12.998766,
            "lng": 77.59210709999999
        },
        "viewport": {
            "south": 12.99731247010728,
            "west": 77.59086327010726,
            "north": 13.00001212989272,
            "east": 77.59356292989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
    "id": "b77167e5d3bc242297e8038b9db627a22d035464",
    "name": "Bangalore Palace",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 1836,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/105232009685398413052\">Chiefjoash</a>"],
        "width": 3264
    }],
    "place_id": "ChIJN1ZKKUkWrjsRzxIVM363-LE",
    "plus_code": {
        "compound_code": "XHXR+GR Vasanth Nagar, Bengaluru, Karnataka",
        "global_code": "7J4VXHXR+GR"
    },
    "rating": 4.2,
    "reference": "ChIJN1ZKKUkWrjsRzxIVM363-LE",
    "types": ["tourist_attraction", "museum", "point_of_interest", "establishment"],
    "user_ratings_total": 62161,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Mavalli, Bengaluru, Karnataka 560004, India",
    "geometry": {
        "location": {
            "lat": 12.9507432,
            "lng": 77.5847773
        },
        "viewport": {
            "south": 12.9424072,
            "west": 77.57495644999999,
            "north": 12.9578032,
            "east": 77.59536345
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
    "id": "8ae4a9c5e9c2b40e58bf0c947e5502ff9ef71c29",
    "name": "Lalbagh Botanical Garden",
    "permanently_closed": true,
    "photos": [{
        "height": 4160,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/116180204006850376702\">sirivella teja</a>"],
        "width": 3120
    }],
    "place_id": "ChIJHdPykcEVrjsRIr4v35kLEY4",
    "plus_code": {
        "compound_code": "XH2M+7W Bengaluru, Karnataka",
        "global_code": "7J4VXH2M+7W"
    },
    "rating": 4.4,
    "reference": "ChIJHdPykcEVrjsRIr4v35kLEY4",
    "types": ["tourist_attraction", "park", "point_of_interest", "establishment"],
    "user_ratings_total": 112559,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Kasturba Road, Behind High Court of Karnataka Ambedkar Veedhi, Sampangi Rama Nagara, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9763602,
            "lng": 77.59290949999999
        },
        "viewport": {
            "south": 12.96207495,
            "west": 77.5840215,
            "north": 12.98613275,
            "east": 77.6029375
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
    "id": "f334fb17a44b740132f72d59a7d90ab9a81300ac",
    "name": "Cubbon Park",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3496,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/101995659345065386881\">Neo</a>"],
        "width": 4656
    }],
    "place_id": "ChIJL2fQ53MWrjsRuN9D6aalLMY",
    "plus_code": {
        "compound_code": "XHGV+G5 Bengaluru, Karnataka",
        "global_code": "7J4VXHGV+G5"
    },
    "rating": 4.4,
    "reference": "ChIJL2fQ53MWrjsRuN9D6aalLMY",
    "types": ["park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 90471,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Near HAL Police Station, HAL Old Airport Rd, Marathahalli, Bengaluru, Karnataka 560037, India",
    "geometry": {
        "location": {
            "lat": 12.954655,
            "lng": 77.68090579999999
        },
        "viewport": {
            "south": 12.95368682010728,
            "west": 77.67959399999998,
            "north": 12.95638647989272,
            "east": 77.68484120000001
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "cb6c08ad2e65009678376d7ffc2ce9028eafca1a",
    "name": "HAL Heritage Centre and Aerospace Museum",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 720,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/114204114311901998930\">A Google User</a>"],
        "width": 1280
    }],
    "place_id": "ChIJg2Ir7MMTrjsR9kqAcrWsFew",
    "plus_code": {
        "compound_code": "XM3J+V9 Marathahalli, Bengaluru, Karnataka",
        "global_code": "7J4VXM3J+V9"
    },
    "rating": 4.4,
    "reference": "ChIJg2Ir7MMTrjsR9kqAcrWsFew",
    "types": ["tourist_attraction", "museum", "point_of_interest", "establishment"],
    "user_ratings_total": 20990,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Tippu Sultan Palace Rd, Chamrajpet, Bengaluru, Karnataka 560018, India",
    "geometry": {
        "location": {
            "lat": 12.9593513,
            "lng": 77.5736415
        },
        "viewport": {
            "south": 12.95830227010728,
            "west": 77.57238787010728,
            "north": 12.96100192989272,
            "east": 77.57508752989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "454d236c0c8443c09e47d33c65e40a5fc4723d46",
    "name": "Tipu Sultan's Summer Palace",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3024,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/105521648867479729706\">Amitendra Nath Sarkar</a>"],
        "width": 4032
    }],
    "place_id": "ChIJAeY0tOQVrjsRdZ8hleP7aRo",
    "plus_code": {
        "compound_code": "XH5F+PF Chamrajpet, Bengaluru, Karnataka",
        "global_code": "7J4VXH5F+PF"
    },
    "rating": 3.9,
    "reference": "ChIJAeY0tOQVrjsRdZ8hleP7aRo",
    "types": ["tourist_attraction", "premise", "museum", "point_of_interest", "establishment"],
    "user_ratings_total": 18931,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Kasturba Rd, Shanthala Nagar, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9765148,
            "lng": 77.5985397
        },
        "viewport": {
            "south": 12.97505102010728,
            "west": 77.59728082010727,
            "north": 12.97775067989272,
            "east": 77.59998047989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "98a76832dde5ab09a7e2cbf3680aba734eb95d0a",
    "name": "Government Aquarium",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3464,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/118154210224286698940\">Amrendra Singh</a>"],
        "width": 4618
    }],
    "place_id": "ChIJSXQE4HAWrjsRyeiku6FOYT4",
    "plus_code": {
        "compound_code": "XHGX+JC Bengaluru, Karnataka",
        "global_code": "7J4VXHGX+JC"
    },
    "rating": 3.8,
    "reference": "ChIJSXQE4HAWrjsRyeiku6FOYT4",
    "types": ["aquarium", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 6207,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Near Chinna Swamy Stadium, Kasturba Rd, Ambedkar Veedhi, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9752264,
            "lng": 77.59634489999999
        },
        "viewport": {
            "south": 12.97338112010728,
            "west": 77.59482177010726,
            "north": 12.97608077989272,
            "east": 77.59752142989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
    "id": "c390f3fde0cf6545104dd2561aa10b2a8317f5a9",
    "name": "Visvesvaraya Industrial & Technological Museum",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 800,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104158043168750019754\">Visvesvaraya Industrial and Technological Museum</a>"],
        "width": 1200
    }],
    "place_id": "ChIJqyoigt8VrjsRp_hKR5Y_1X8",
    "plus_code": {
        "compound_code": "XHGW+3G Bengaluru, Karnataka",
        "global_code": "7J4VXHGW+3G"
    },
    "rating": 4.6,
    "reference": "ChIJqyoigt8VrjsRp_hKR5Y_1X8",
    "types": ["tourist_attraction", "museum", "point_of_interest", "establishment"],
    "user_ratings_total": 10606,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010, India",
    "geometry": {
        "location": {
            "lat": 13.0098328,
            "lng": 77.55109639999999
        },
        "viewport": {
            "south": 13.00848297010728,
            "west": 77.54974657010727,
            "north": 13.01118262989272,
            "east": 77.55244622989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_hindu-71.png",
    "id": "595ed2a8022f69a9383d5b702ab24a632abc0b12",
    "name": "ISKCON Temple Bangalore",
    "permanently_closed": true,
    "photos": [{
        "height": 3024,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/118202157346282764625\">Karthik</a>"],
        "width": 4032
    }],
    "place_id": "ChIJBw42C-09rjsRs7KmQUqyf3o",
    "plus_code": {
        "compound_code": "2H52+WC Rajajinagar, Bengaluru, Karnataka",
        "global_code": "7J5V2H52+WC"
    },
    "rating": 4.6,
    "reference": "ChIJBw42C-09rjsRs7KmQUqyf3o",
    "types": ["hindu_temple", "tourist_attraction", "place_of_worship", "point_of_interest", "establishment"],
    "user_ratings_total": 73941,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Sri T, Sankey Rd, High Grounds, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9848665,
            "lng": 77.5896341
        },
        "viewport": {
            "south": 12.98357152010728,
            "west": 77.58847622010727,
            "north": 12.98627117989272,
            "east": 77.59117587989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
    "id": "2dfdaa4df1810b58a7eb1207cd95e317f11b4047",
    "name": "Jawaharlal Nehru Planetarium",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 720,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/110468387540783963932\">Debabrata Ghosh</a>"],
        "width": 1280
    }],
    "place_id": "ChIJH1ja7WsWrjsRNSg89ukafXU",
    "plus_code": {
        "compound_code": "XHMQ+WV Bengaluru, Karnataka",
        "global_code": "7J4VXHMQ+WV"
    },
    "rating": 4.3,
    "reference": "ChIJH1ja7WsWrjsRNSg89ukafXU",
    "types": ["tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 1360,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Opp to Jawahar Lal Nehru Planetarium, Raj Bhawan Road, Bengaluru, Karnataka 560052, India",
    "geometry": {
        "location": {
            "lat": 12.9851177,
            "lng": 77.59159149999999
        },
        "viewport": {
            "south": 12.98344517010728,
            "west": 77.58982372010726,
            "north": 12.98614482989272,
            "east": 77.59252337989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
    "id": "eb2e81d8116838a2bf6d1403058836f799e05bdf",
    "name": "Indira Gandhi Musical Fountain Park",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 4618,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/112784115222356568862\">Mateusz Wiszowaty</a>"],
        "width": 3464
    }],
    "place_id": "ChIJ7ywPXWkWrjsROJGazHbfZhg",
    "plus_code": {
        "compound_code": "XHPR+2J Bengaluru, Karnataka",
        "global_code": "7J4VXHPR+2J"
    },
    "rating": 4.1,
    "reference": "ChIJ7ywPXWkWrjsROJGazHbfZhg",
    "types": ["park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 7345,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Msgr. F. Noronha Road, Shivaji Nagar, Bengaluru, Karnataka 560051, India",
    "geometry": {
        "location": {
            "lat": 12.9844238,
            "lng": 77.60428000000002
        },
        "viewport": {
            "south": 12.98312312010728,
            "west": 77.60283627010729,
            "north": 12.98582277989272,
            "east": 77.60553592989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
    "id": "b810ec6ed9e26fccd5327f17c1c2b55f1f27ec9f",
    "name": "St. Mary's Basilica, Bengaluru",
    "permanently_closed": true,
    "photos": [{
        "height": 3024,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/117627573730486169386\">soundar Pandiyan k</a>"],
        "width": 4032
    }],
    "place_id": "ChIJ8VNf1mMWrjsRwsMEl564ksQ",
    "plus_code": {
        "compound_code": "XJM3+QP Shivaji Nagar, Bengaluru, Karnataka",
        "global_code": "7J4VXJM3+QP"
    },
    "rating": 4.6,
    "reference": "ChIJ8VNf1mMWrjsRwsMEl564ksQ",
    "types": ["tourist_attraction", "church", "place_of_worship", "point_of_interest", "establishment"],
    "user_ratings_total": 9405,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Tavarekere, Uttarahalli Hobli, Bengaluru, Karnataka 562130, India",
    "geometry": {
        "location": {
            "lat": 12.9093703,
            "lng": 77.3958402
        },
        "viewport": {
            "south": 12.90810337010728,
            "west": 77.39473737010728,
            "north": 12.91080302989272,
            "east": 77.39743702989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "9d436be2b91c9778cb866224d8bed70afe1733fb",
    "name": "Dodda Aalada Mara",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 4032,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/116803673563157205790\">Suraj Suresh</a>"],
        "width": 3024
    }],
    "place_id": "ChIJRzdYfjQ4rjsRc9kA7UZXzZk",
    "plus_code": {
        "compound_code": "W95W+P8 Uttarahalli Hobli, Bengaluru, Karnataka",
        "global_code": "7J4VW95W+P8"
    },
    "rating": 4,
    "reference": "ChIJRzdYfjQ4rjsRc9kA7UZXzZk",
    "types": ["tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 9571,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Krishna Rajendra Rd, New Tharagupet, Bengaluru, Karnataka 560002, India",
    "geometry": {
        "location": {
            "lat": 12.9629009,
            "lng": 77.57604649999999
        },
        "viewport": {
            "south": 12.96149852010728,
            "west": 77.57478987010727,
            "north": 12.96419817989272,
            "east": 77.57748952989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "52acb6e961a359ddfb851f8894f685b14352cd87",
    "name": "Bangalore Fort",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3000,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/108406700537347105475\">Adit Jana</a>"],
        "width": 4000
    }],
    "place_id": "ChIJVx06BOMVrjsR1-a9CQJZpLI",
    "plus_code": {
        "compound_code": "XH7G+5C New Tharagupet, Bengaluru, Karnataka",
        "global_code": "7J4VXH7G+5C"
    },
    "rating": 3.9,
    "reference": "ChIJVx06BOMVrjsR1-a9CQJZpLI",
    "types": ["tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 13333,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "28th Km, Mysore Road, Bengaluru, Karnataka 562109, India",
    "geometry": {
        "location": {
            "lat": 12.8345559,
            "lng": 77.4009719
        },
        "viewport": {
            "south": 12.83385532010728,
            "west": 77.39986057010728,
            "north": 12.83655497989272,
            "east": 77.40256022989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "4f9354d47c0bb9c6f4c9e71034bbd5376af940c9",
    "name": "Wonderla Amusement Park, Bangalore",
    "permanently_closed": true,
    "photos": [{
        "height": 600,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/118103806484860311297\">jaseer</a>"],
        "width": 900
    }],
    "place_id": "ChIJW3Or_8dHrjsROESo0OikUl4",
    "plus_code": {
        "compound_code": "RCM2+R9 Bengaluru, Karnataka",
        "global_code": "7J4VRCM2+R9"
    },
    "rating": 4.5,
    "reference": "ChIJW3Or_8dHrjsROESo0OikUl4",
    "types": ["amusement_park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 59780,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "49, GF, Manikyavelu Mansion, Palace Rd, Vasanth Nagar, Bengaluru, Karnataka 560052, India",
    "geometry": {
        "location": {
            "lat": 12.9894116,
            "lng": 77.5880553
        },
        "viewport": {
            "south": 12.98809122010728,
            "west": 77.58702232010727,
            "north": 12.99079087989272,
            "east": 77.58972197989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "9904a7dc084a4026a6f96b222a9b67f5818cd39d",
    "name": "National Gallery of Modern Art, Bangalore",
    "permanently_closed": true,
    "photos": [{
        "height": 3456,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/118200852588359503330\">MKKM CREATIONS</a>"],
        "width": 4608
    }],
    "place_id": "ChIJqZQybIEWrjsRezNLL4Ju2Gk",
    "plus_code": {
        "compound_code": "XHQQ+Q6 Vasanth Nagar, Bengaluru, Karnataka",
        "global_code": "7J4VXHQQ+Q6"
    },
    "rating": 4.4,
    "reference": "ChIJqZQybIEWrjsRezNLL4Ju2Gk",
    "types": ["art_gallery", "library", "tourist_attraction", "cafe", "museum", "food", "point_of_interest", "store", "establishment"],
    "user_ratings_total": 633,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Bull Temple Rd, Basavanagudi, Bengaluru, Karnataka 560019, India",
    "geometry": {
        "location": {
            "lat": 12.9427052,
            "lng": 77.5694287
        },
        "viewport": {
            "south": 12.94149187010728,
            "west": 77.56710054999998,
            "north": 12.94419152989272,
            "east": 77.57020475000002
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
    "id": "28c7623e789eba6caba6a91ee42bb3e295a297b2",
    "name": "Bugle Rock Park",
    "permanently_closed": true,
    "photos": [{
        "height": 332,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115457573295310782725\">A Google User</a>"],
        "width": 443
    }],
    "place_id": "ChIJmwJpvowVrjsR0JVGQxxLHms",
    "plus_code": {
        "compound_code": "WHV9+3Q Basavanagudi, Bengaluru, Karnataka",
        "global_code": "7J4VWHV9+3Q"
    },
    "rating": 4.4,
    "reference": "ChIJmwJpvowVrjsR0JVGQxxLHms",
    "types": ["park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 17192,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "KSRTC Layout, Jayanagara 9th Block, Jayanagar, Bengaluru, Karnataka 560069, India",
    "geometry": {
        "location": {
            "lat": 12.9142864,
            "lng": 77.593172
        },
        "viewport": {
            "south": 12.91323117010728,
            "west": 77.59173507010728,
            "north": 12.91593082989272,
            "east": 77.59443472989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_hindu-71.png",
    "id": "9867a8769ad9aa84778e434c7b7871ee49d8837c",
    "name": "Ragigudda Sri Prasanna Anjaneyaswamy Temple",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3456,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/103254970791834815316\">girish</a>"],
        "width": 4608
    }],
    "place_id": "ChIJBwLj4g4VrjsRerGf4HTVPUc",
    "plus_code": {
        "compound_code": "WH7V+P7 Jayanagar, Bengaluru, Karnataka",
        "global_code": "7J4VWH7V+P7"
    },
    "rating": 4.7,
    "reference": "ChIJBwLj4g4VrjsRerGf4HTVPUc",
    "types": ["hindu_temple", "tourist_attraction", "place_of_worship", "point_of_interest", "establishment"],
    "user_ratings_total": 11184,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Bull Temple Road, Basavanagudi, Bengaluru, Karnataka 560004, India",
    "geometry": {
        "location": {
            "lat": 12.942898,
            "lng": 77.56819660000001
        },
        "viewport": {
            "south": 12.94154817010728,
            "west": 77.56684677010728,
            "north": 12.94424782989272,
            "east": 77.56954642989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_hindu-71.png",
    "id": "f66af09e1d15372d7fc759d548ca3cfb108aab44",
    "name": "Nandi Temple",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 2250,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/106139941055420524304\">Ruturaj</a>"],
        "width": 4000
    }],
    "place_id": "ChIJpbprrowVrjsRFme9nlnRtJg",
    "plus_code": {
        "compound_code": "WHV9+57 Basavanagudi, Bengaluru, Karnataka",
        "global_code": "7J4VWHV9+57"
    },
    "rating": 4.7,
    "reference": "ChIJpbprrowVrjsRFme9nlnRtJg",
    "types": ["hindu_temple", "tourist_attraction", "place_of_worship", "point_of_interest", "establishment"],
    "user_ratings_total": 10266,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Kasturba Rd, Ambedkar Veedhi, Sampangi Rama Nagar, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9742357,
            "lng": 77.5953023
        },
        "viewport": {
            "south": 12.97272457010728,
            "west": 77.59409167010728,
            "north": 12.97542422989272,
            "east": 77.59679132989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "5677c45bba1d41941faa809d5880f599c127bb7a",
    "name": "Venkatappa Art Gallery",
    "permanently_closed": true,
    "photos": [{
        "height": 2304,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104562954098057231837\">Vinay Jayaram</a>"],
        "width": 4608
    }],
    "place_id": "ChIJKW2JvnAWrjsRUhxNZVxBjBc",
    "plus_code": {
        "compound_code": "XHFW+M4 Bengaluru, Karnataka",
        "global_code": "7J4VXHFW+M4"
    },
    "rating": 4.2,
    "reference": "ChIJKW2JvnAWrjsRUhxNZVxBjBc",
    "types": ["art_gallery", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 921,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Kasturba Rd, Ambedkar Veedhi, Sampangi Rama Nagar, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9747078,
            "lng": 77.5959723
        },
        "viewport": {
            "south": 12.97312162010728,
            "west": 77.59482832010727,
            "north": 12.97582127989272,
            "east": 77.59752797989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
    "id": "3d7a95de224684235f1728be31f40264b1d34a73",
    "name": "Government Museum",
    "permanently_closed": true,
    "photos": [{
        "height": 4160,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115510746975373566092\">sunil_ms18</a>"],
        "width": 3120
    }],
    "place_id": "ChIJHfOennAWrjsRzNoMSHtNB0c",
    "plus_code": {
        "compound_code": "XHFW+V9 Bengaluru, Karnataka",
        "global_code": "7J4VXHFW+V9"
    },
    "rating": 4.2,
    "reference": "ChIJHfOennAWrjsRzNoMSHtNB0c",
    "types": ["museum", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 568,
    "html_attributions": []
}]



let result2 = [{
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Palace Grounds, Jayamahal Main Rd, Opposite TV Tower, J.C.Nagar, Bengaluru, Karnataka 560006, India",
    "geometry": {
        "location": {
            "lat": 13.007631,
            "lng": 77.591922
        },
        "viewport": {
            "south": 13.00631842010728,
            "west": 77.59063342010727,
            "north": 13.00901807989272,
            "east": 77.59333307989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "8ed491f6ca3b480490e19476270ce4c88ff58301",
    "name": "Fun World Amusement Park",
    "permanently_closed": true,
    "photos": [{
        "height": 3024,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/114689655287841704755\">Rajesh Natarajan</a>"],
        "width": 4032
    }],
    "place_id": "ChIJLxh4XLUXrjsRZiRoXxUVbdQ",
    "plus_code": {
        "compound_code": "2H5R+3Q J.C.Nagar, Bengaluru, Karnataka",
        "global_code": "7J5V2H5R+3Q"
    },
    "rating": 4,
    "reference": "ChIJLxh4XLUXrjsRZiRoXxUVbdQ",
    "types": ["amusement_park", "bowling_alley", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 7233,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "9th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102, India",
    "geometry": {
        "location": {
            "lat": 12.9147826,
            "lng": 77.6350183
        },
        "viewport": {
            "south": 12.91342437010728,
            "west": 77.63381722010728,
            "north": 12.91612402989272,
            "east": 77.63651687989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "ea5b3c017d93774c05d2c34bff54983fb48a4d4f",
    "name": "Children Amusement Park",
    "permanently_closed": true,
    "photos": [{
        "height": 2592,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/101175990892065051643\">pr S</a>"],
        "width": 4608
    }],
    "place_id": "ChIJZ4QDyI0UrjsRR_FeFL_bwDA",
    "plus_code": {
        "compound_code": "WJ7P+W2 HSR Layout, Bengaluru, Karnataka",
        "global_code": "7J4VWJ7P+W2"
    },
    "rating": 3.3,
    "reference": "ChIJZ4QDyI0UrjsRR_FeFL_bwDA",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 51,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "28th Km, Mysore Road, Bengaluru, Karnataka 562109, India",
    "geometry": {
        "location": {
            "lat": 12.8345559,
            "lng": 77.4009719
        },
        "viewport": {
            "south": 12.83385532010728,
            "west": 77.39986057010728,
            "north": 12.83655497989272,
            "east": 77.40256022989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "4f9354d47c0bb9c6f4c9e71034bbd5376af940c9",
    "name": "Wonderla Amusement Park, Bangalore",
    "permanently_closed": true,
    "photos": [{
        "height": 1518,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115091257026452778758\">Harish Kumar</a>"],
        "width": 2048
    }],
    "place_id": "ChIJW3Or_8dHrjsROESo0OikUl4",
    "plus_code": {
        "compound_code": "RCM2+R9 Bengaluru, Karnataka",
        "global_code": "7J4VRCM2+R9"
    },
    "rating": 4.5,
    "reference": "ChIJW3Or_8dHrjsROESo0OikUl4",
    "types": ["amusement_park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 59780,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "National Park, Sakalwara Road, Bannerghatta main road Malle Nalsandra Village near, Bannerughatta, Bengaluru, Karnataka 560105, India",
    "geometry": {
        "location": {
            "lat": 12.8097014,
            "lng": 77.6071031
        },
        "viewport": {
            "south": 12.80831672010728,
            "west": 77.60582177010727,
            "north": 12.81101637989272,
            "east": 77.60852142989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "926bca5ac88716e705c2f5a330c27781f734d296",
    "name": "DeRoots Kids Eco Amusement Park Bangalore",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 1024,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/112120110022765943689\">A Google User</a>"],
        "width": 1024
    }],
    "place_id": "ChIJbXmtpUpqrjsR4ct0ocaVvZA",
    "plus_code": {
        "compound_code": "RJ54+VR Bannerughatta, Bengaluru, Karnataka",
        "global_code": "7J4VRJ54+VR"
    },
    "rating": 3.9,
    "reference": "ChIJbXmtpUpqrjsR4ct0ocaVvZA",
    "types": ["amusement_park", "lodging", "restaurant", "food", "point_of_interest", "establishment"],
    "user_ratings_total": 24,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "5, Corporation Complex, 8th Main Road, 14th Cross Rd, Lakkasandra, Lakkasandra Extension, Wilson Garden, Bengaluru, Karnataka 560030, India",
    "geometry": {
        "location": {
            "lat": 12.9442157,
            "lng": 77.5971039
        },
        "viewport": {
            "south": 12.94287952010728,
            "west": 77.59574677010728,
            "north": 12.94557917989272,
            "east": 77.59844642989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "8d590209639ce267909c8a7f54c64068dd47eceb",
    "name": "Greenland Amusements",
    "permanently_closed": true,
    "place_id": "ChIJecA-oA8WrjsRvjYLreHBiDE",
    "rating": 3.5,
    "reference": "ChIJecA-oA8WrjsRvjYLreHBiDE",
    "types": ["tourist_attraction", "amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 15,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Mavalli, Bengaluru, Karnataka 560004, India",
    "geometry": {
        "location": {
            "lat": 12.9482385,
            "lng": 77.581335
        },
        "viewport": {
            "south": 12.94688867010728,
            "west": 77.57998517010728,
            "north": 12.94958832989272,
            "east": 77.58268482989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "e2c6d99266b3e7c74c8a6717a2c0f0c703637dd4",
    "name": "Lalbagh Lake",
    "permanently_closed": true,
    "photos": [{
        "height": 1536,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/107773317099893308073\">Prabhu Manickam</a>"],
        "width": 2048
    }],
    "place_id": "ChIJJQ0QyOsVrjsRzsgVSKFpNQo",
    "plus_code": {
        "compound_code": "WHXJ+7G Mavalli, Bengaluru, Karnataka",
        "global_code": "7J4VWHXJ+7G"
    },
    "rating": 4.4,
    "reference": "ChIJJQ0QyOsVrjsRzsgVSKFpNQo",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 403,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Kasturba Road, Sampangi Rama Nagar, Ambedkar Veedhi, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9767893,
            "lng": 77.59783329999999
        },
        "viewport": {
            "south": 12.97539662010728,
            "west": 77.59691437010727,
            "north": 12.97809627989272,
            "east": 77.59961402989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "5157c3203bcfc6be52bdacd7eaf908d077903e2f",
    "name": "Jawahar Bal Bhavan",
    "permanently_closed": true,
    "photos": [{
        "height": 2048,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115672777734456721804\">Satheesh Sankaran</a>"],
        "width": 1152
    }],
    "place_id": "ChIJpVgFgnEWrjsROefgbD0q5EQ",
    "plus_code": {
        "compound_code": "XHGX+P4 Bengaluru, Karnataka",
        "global_code": "7J4VXHGX+P4"
    },
    "rating": 4,
    "reference": "ChIJpVgFgnEWrjsROefgbD0q5EQ",
    "types": ["tourist_attraction", "amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 1774,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Jayamahal, Fun World Complex, opposite TV Tower, J.C.Nagar, Bengaluru, Karnataka 560006, India",
    "geometry": {
        "location": {
            "lat": 13.0057596,
            "lng": 77.59206089999999
        },
        "viewport": {
            "south": 13.00481197010728,
            "west": 77.59106882010728,
            "north": 13.00751162989272,
            "east": 77.59376847989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "67f68dc87697b34590ee84712bbbe1b6c591d748",
    "name": "Snow City",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3120,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/118056772195221142606\">Rhymes World Cup</a>"],
        "width": 4160
    }],
    "place_id": "ChIJNcKzmE4WrjsRW2a7MA-1Zrs",
    "plus_code": {
        "compound_code": "2H4R+8R J.C.Nagar, Bengaluru, Karnataka",
        "global_code": "7J5V2H4R+8R"
    },
    "rating": 3.9,
    "reference": "ChIJNcKzmE4WrjsRW2a7MA-1Zrs",
    "types": ["tourist_attraction", "amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 10240,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "4th Floor, Forum Shantiniketan, Whitefield Main Road, Hoodi, Thigalarapalya, Krishnarajapura, Bengaluru, Karnataka 560067, India",
    "geometry": {
        "location": {
            "lat": 12.9894726,
            "lng": 77.7280163
        },
        "viewport": {
            "south": 12.98783362010728,
            "west": 77.72660427010727,
            "north": 12.99053327989272,
            "east": 77.72930392989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "78f3e40219a1f17dbe8b7a7007b9ddc7d5794bd8",
    "name": "Sky Zone Bengaluru",
    "opening_hours": {
        "open_now": false
    },
    "photos": [{
        "height": 4000,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/103422762830153433600\">Karthikeyan P</a>"],
        "width": 3000
    }],
    "place_id": "ChIJ7Rw85rURrjsRi_y5cQTAjww",
    "plus_code": {
        "compound_code": "XPQH+Q6 Krishnarajapura, Bengaluru, Karnataka",
        "global_code": "7J4VXPQH+Q6"
    },
    "rating": 4.3,
    "reference": "ChIJ7Rw85rURrjsRi_y5cQTAjww",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 787,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Begur Lake, Begur, Bengaluru, Karnataka 560068, India",
    "geometry": {
        "location": {
            "lat": 12.8768711,
            "lng": 77.6308543
        },
        "viewport": {
            "south": 12.87544162010728,
            "west": 77.62950212010728,
            "north": 12.87814127989272,
            "east": 77.63220177989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "77b2587764eba7ec7d99d125fe510e33481d8bc4",
    "name": "Begur Lake, Bangalore",
    "permanently_closed": true,
    "photos": [{
        "height": 3078,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/106839715382153007847\">sriranga kr</a>"],
        "width": 5472
    }],
    "place_id": "ChIJd_ZdnkprrjsR8-U1DVYMGeg",
    "plus_code": {
        "compound_code": "VJGJ+P8 Begur, Bengaluru, Karnataka",
        "global_code": "7J4VVJGJ+P8"
    },
    "rating": 4.2,
    "reference": "ChIJd_ZdnkprrjsR8-U1DVYMGeg",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 163,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "Kempegowda Main Rd, HSR Layout, KG Halli, D' Souza Layout, Dasarahalli, Bengaluru, Karnataka 560024, India",
    "geometry": {
        "location": {
            "lat": 12.9715987,
            "lng": 77.5945627
        },
        "viewport": {
            "south": 12.97024667010728,
            "west": 77.59322242010728,
            "north": 12.97294632989272,
            "east": 77.59592207989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "44041a118d3bce6cf126d309239f9cb1fec9408d",
    "name": "Fun world",
    "opening_hours": {},
    "photos": [{
        "height": 4608,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115037796458154246047\">amara sai ram</a>"],
        "width": 2304
    }],
    "place_id": "ChIJE8R9PncWrjsRRLSvWpdwwy8",
    "rating": 3.9,
    "reference": "ChIJE8R9PncWrjsRRLSvWpdwwy8",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 35,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "268, 17th Cross Rd, Sadashiva Nagar, Armane Nagar, Bengaluru, Karnataka 560080, India",
    "geometry": {
        "location": {
            "lat": 13.0067661,
            "lng": 77.5820851
        },
        "viewport": {
            "south": 13.00537522010728,
            "west": 77.58079877010728,
            "north": 13.00807487989272,
            "east": 77.58349842989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "8bb0ec69c904ee0e058a411f6aa6aeb4f2dd723a",
    "name": "Janatha Bazaar Park",
    "permanently_closed": true,
    "photos": [{
        "height": 3120,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/106391447880790432719\">Ganesh Raj</a>"],
        "width": 4160
    }],
    "place_id": "ChIJf_Cy0jUWrjsRy9S79MHEDCk",
    "plus_code": {
        "compound_code": "2H4J+PR Armane Nagar, Bengaluru, Karnataka",
        "global_code": "7J5V2H4J+PR"
    },
    "rating": 4.6,
    "reference": "ChIJf_Cy0jUWrjsRy9S79MHEDCk",
    "types": ["amusement_park", "tourist_attraction", "point_of_interest", "establishment"],
    "user_ratings_total": 74,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Famipark Amusement LLP , No 1211 & 1212, Sri Amuruthaya nilaya 9th Cross , Shree, behind MORE Supermarket, Ananth Nagar, Electronic City, Bengaluru, Karnataka 560100, India",
    "geometry": {
        "location": {
            "lat": 12.8355531,
            "lng": 77.69371029999999
        },
        "viewport": {
            "south": 12.83419997010728,
            "west": 77.69238072010727,
            "north": 12.83689962989272,
            "east": 77.69508037989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "8b8e84b08198d8bbbe96048ab83dfbffd5b9ccf8",
    "name": "FAMI PARK - Kids indoor Play Zone, Toys Wholesale / Retail, Kids Party",
    "permanently_closed": true,
    "photos": [{
        "height": 809,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/104119194045300269535\">A Google User</a>"],
        "width": 1440
    }],
    "place_id": "ChIJbdpA9jttrjsRANuRhn0ZCcc",
    "plus_code": {
        "compound_code": "RMPV+6F Electronic City, Bengaluru, Karnataka",
        "global_code": "7J4VRMPV+6F"
    },
    "rating": 5,
    "reference": "ChIJbdpA9jttrjsRANuRhn0ZCcc",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 1,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "JC Nagar Main Rd, City, Bengaluru, Karnataka 560006, India",
    "geometry": {
        "location": {
            "lat": 13.0074289,
            "lng": 77.59166259999999
        },
        "viewport": {
            "south": 13.00612702010728,
            "west": 77.59044502010728,
            "north": 13.00882667989272,
            "east": 77.59314467989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "215768bc8bfdc88e064ded1b954db1f894a2b297",
    "name": "Funworld water park",
    "permanently_closed": true,
    "photos": [{
        "height": 1536,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/102677901885500124842\">Nagendra Vfx</a>"],
        "width": 2048
    }],
    "place_id": "ChIJh2l_F0wWrjsR2JQjZege8jw",
    "plus_code": {
        "compound_code": "2H4R+XM Bengaluru, Karnataka",
        "global_code": "7J5V2H4R+XM"
    },
    "rating": 4.2,
    "reference": "ChIJh2l_F0wWrjsR2JQjZege8jw",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 908,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "754, 7th Main Rd, Ittamadu, Phase 3, Banashankari, Bengaluru, Karnataka 560085, India",
    "geometry": {
        "location": {
            "lat": 12.923759,
            "lng": 77.5489544
        },
        "viewport": {
            "south": 12.92238747010728,
            "west": 77.54760062010729,
            "north": 12.92508712989272,
            "east": 77.55030027989274
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "50427be02f3bf933935d9fe36593840c34a0596b",
    "name": "ಪಾರ್ಕ್ ಭುವನೇಶ್ವರಿ ನಗರ",
    "permanently_closed": true,
    "photos": [{
        "height": 3000,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/105266295673160828433\">Anand R</a>"],
        "width": 4000
    }],
    "place_id": "ChIJPeETZHw_rjsRUN_dXm3DhHE",
    "plus_code": {
        "compound_code": "WGFX+GH Banashankari, Bengaluru, Karnataka",
        "global_code": "7J4VWGFX+GH"
    },
    "rating": 4.3,
    "reference": "ChIJPeETZHw_rjsRUN_dXm3DhHE",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 4,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "KEB Colony, Industrial Area, Hoodi, Bengaluru, Karnataka 560048, India",
    "geometry": {
        "location": {
            "lat": 12.9853591,
            "lng": 77.7081261
        },
        "viewport": {
            "south": 12.98399977010728,
            "west": 77.70674367010727,
            "north": 12.98669942989272,
            "east": 77.70944332989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "1d9b48c56adfa764272ceca87b5a3644ba4df3e0",
    "name": "SMAAASH",
    "permanently_closed": true,
    "place_id": "ChIJzYOk7FQRrjsRUFD4z9pDN_Y",
    "plus_code": {
        "compound_code": "XPP5+47 Bengaluru, Karnataka",
        "global_code": "7J4VXPP5+47"
    },
    "rating": 0,
    "reference": "ChIJzYOk7FQRrjsRUFD4z9pDN_Y",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 0,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "3rd Floor, 1 Mg Mall, Trinity Circle, Mahatma Gandhi Rd, Bengaluru, Karnataka 560008, India",
    "geometry": {
        "location": {
            "lat": 12.9734418,
            "lng": 77.62035879999999
        },
        "viewport": {
            "south": 12.97209197010728,
            "west": 77.61900897010727,
            "north": 12.97479162989272,
            "east": 77.62170862989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "dfd564bc60e2c918b223878b8375097422bb053d",
    "name": "Smaaash Corporate Outings",
    "permanently_closed": true,
    "photos": [{
        "height": 501,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/113868449790523925736\">A Google User</a>"],
        "width": 824
    }],
    "place_id": "ChIJSwzOCEMXrjsREO9fWi_yGFg",
    "plus_code": {
        "compound_code": "XJFC+94 Bengaluru, Karnataka",
        "global_code": "7J4VXJFC+94"
    },
    "rating": 4.7,
    "reference": "ChIJSwzOCEMXrjsREO9fWi_yGFg",
    "types": ["amusement_park", "bar", "point_of_interest", "establishment"],
    "user_ratings_total": 3,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Koramangala 80 Feet Rd, Above Allahabad Bank, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560034, India",
    "geometry": {
        "location": {
            "lat": 12.935041,
            "lng": 77.614148
        },
        "viewport": {
            "south": 12.93376492010728,
            "west": 77.61275972010728,
            "north": 12.93646457989272,
            "east": 77.61545937989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "72c5d4d7d1eff5f078434dcf78136bb72b394db2",
    "name": "TGS Water",
    "permanently_closed": true,
    "place_id": "ChIJNevAD04UrjsRBNZ_VTVy2Yo",
    "plus_code": {
        "compound_code": "WJP7+2M Bengaluru, Karnataka",
        "global_code": "7J4VWJP7+2M"
    },
    "rating": 3.9,
    "reference": "ChIJNevAD04UrjsRBNZ_VTVy2Yo",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 10,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "2nd Floor, Phoenix Market City Mall Whitefield Road, Mahadevpura, Devasandra Industrial Estate, Whitefield, Bengaluru, Karnataka 560048, India",
    "geometry": {
        "location": {
            "lat": 12.9978039,
            "lng": 77.6960363
        },
        "viewport": {
            "south": 12.99664937010728,
            "west": 77.69471227010727,
            "north": 12.99934902989272,
            "east": 77.69741192989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "dfe73eb09f47bbe4824352322b73bffc90af4dac",
    "name": "Bluo Smaaash Corporate Team Outings",
    "opening_hours": {
        "open_now": true
    },
    "photos": [{
        "height": 3096,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/106840678833501514281\">Rakesh Lonavath</a>"],
        "width": 4128
    }],
    "place_id": "ChIJ36FIJwsRrjsRELDbcau4gNY",
    "plus_code": {
        "compound_code": "XMXW+4C Whitefield, Bengaluru, Karnataka",
        "global_code": "7J4VXMXW+4C"
    },
    "rating": 4.1,
    "reference": "ChIJ36FIJwsRrjsRELDbcau4gNY",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 542,
    "html_attributions": []
}, {
    "business_status": "OPERATIONAL",
    "formatted_address": "562, 109, Mysore Rd, Harsha Layout, Kengeri Satellite Town, Bengaluru, Karnataka 560060, India",
    "geometry": {
        "location": {
            "lat": 12.9098795,
            "lng": 77.48081839999999
        },
        "viewport": {
            "south": 12.90855942010728,
            "west": 77.47945792010728,
            "north": 12.91125907989272,
            "east": 77.48215757989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
    "id": "9dd2418cf7eeb62f52b859bcecf95321a390db8c",
    "name": "Wonderla Holidays Ltd",
    "place_id": "ChIJi6RNQS8_rjsRH6ZlG8R2eBE",
    "plus_code": {
        "compound_code": "WF5J+X8 Kengeri Satellite Town, Bengaluru, Karnataka",
        "global_code": "7J4VWF5J+X8"
    },
    "rating": 0,
    "reference": "ChIJi6RNQS8_rjsRH6ZlG8R2eBE",
    "types": ["amusement_park", "point_of_interest", "establishment"],
    "user_ratings_total": 0,
    "html_attributions": []
}];



let result3 = [{
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "8, 2nd Floor, Allied Grande Plaza, Magrath Road, Above Nalli Silks Diagonally Opposite Garuda Mall, Near MG Road ,Harsha shetty -9008979977, Bengaluru, Karnataka 560025, India",
    "geometry": {
        "location": {
            "lat": 12.970285,
            "lng": 77.6109419
        },
        "viewport": {
            "south": 12.96894707010728,
            "west": 77.60954637010727,
            "north": 12.97164672989272,
            "east": 77.61224602989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "06bf2f432f171c7e8caa612aac0bc9a6f11ad9f1",
    "name": "Nolimmits Lounge & Club",
    "permanently_closed": true,
    "photos": [{
        "height": 2832,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/101419500057333009455\">A Google User</a>"],
        "width": 4256
    }],
    "place_id": "ChIJU9VKrIEWrjsRDLUWaq2FdlA",
    "plus_code": {
        "compound_code": "XJC6+49 Bengaluru, Karnataka",
        "global_code": "7J4VXJC6+49"
    },
    "price_level": 3,
    "rating": 3.8,
    "reference": "ChIJU9VKrIEWrjsRDLUWaq2FdlA",
    "types": ["night_club", "bar", "point_of_interest", "establishment"],
    "user_ratings_total": 950,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "6th Block, 71-72, Jyoti Nivas College Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
    "geometry": {
        "location": {
            "lat": 12.9329237,
            "lng": 77.6140399
        },
        "viewport": {
            "south": 12.93150087010728,
            "west": 77.61272632010729,
            "north": 12.93420052989272,
            "east": 77.61542597989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "a09c94896d014b42b21927cbe9ec0a8780861ffb",
    "name": "Indigo XP",
    "permanently_closed": true,
    "photos": [{
        "height": 3000,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/115002126435251253486\">A Google User</a>"],
        "width": 4000
    }],
    "place_id": "ChIJMwAAAF8UrjsR-5sfcDAv5hw",
    "plus_code": {
        "compound_code": "WJM7+5J Koramangala, Bengaluru, Karnataka",
        "global_code": "7J4VWJM7+5J"
    },
    "price_level": 2,
    "rating": 4.1,
    "reference": "ChIJMwAAAF8UrjsR-5sfcDAv5hw",
    "types": ["night_club", "restaurant", "food", "point_of_interest", "establishment"],
    "user_ratings_total": 1194,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "134, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017, India",
    "geometry": {
        "location": {
            "lat": 12.959485,
            "lng": 77.648617
        },
        "viewport": {
            "south": 12.95821692010728,
            "west": 77.64727787010727,
            "north": 12.96091657989272,
            "east": 77.64997752989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "c90688cb1e34b4f7d66cf27226188f2763c7a6f7",
    "name": "CLOUDNYN, Kodihalli",
    "permanently_closed": true,
    "photos": [{
        "height": 591,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/117335960443091494010\">Moosa Baig</a>"],
        "width": 828
    }],
    "place_id": "ChIJaY4fDgYUrjsRAHaL8znVoOI",
    "plus_code": {
        "compound_code": "XJ5X+QC Kodihalli, Bengaluru, Karnataka",
        "global_code": "7J4VXJ5X+QC"
    },
    "price_level": 3,
    "rating": 4.1,
    "reference": "ChIJaY4fDgYUrjsRAHaL8znVoOI",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 396,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Le Meridien Hotel, 28, Sankey Road, Palace Cross Rd, Vasanth Nagar, Bengaluru, Karnataka 560052, India",
    "geometry": {
        "location": {
            "lat": 12.9900529,
            "lng": 77.5862362
        },
        "viewport": {
            "south": 12.98895667010728,
            "west": 77.58461382010728,
            "north": 12.99165632989272,
            "east": 77.58731347989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "3b889adb6a866085fc82f9d4abb515a179d7e21a",
    "name": "The Sugar Factory",
    "permanently_closed": true,
    "photos": [{
        "height": 628,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/110994878205034877168\">The Sugar Factory</a>"],
        "width": 672
    }],
    "place_id": "ChIJG8x2OEAWrjsRMAuhwJty1_Q",
    "plus_code": {
        "compound_code": "XHRP+2F Bengaluru, Karnataka",
        "global_code": "7J4VXHRP+2F"
    },
    "price_level": 4,
    "rating": 3.7,
    "reference": "ChIJG8x2OEAWrjsRMAuhwJty1_Q",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 353,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Soul Space Arena, 36/5, 4th Floor, Outer Ring Rd, Mall, Mahadevapura, Bengaluru, Karnataka 560037, India",
    "geometry": {
        "location": {
            "lat": 12.9797971,
            "lng": 77.6936053
        },
        "viewport": {
            "south": 12.97848702010728,
            "west": 77.69252717010728,
            "north": 12.98118667989272,
            "east": 77.69522682989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "f7289d3d1e663327f45a91df404c8672c197ac17",
    "name": "Output - Bengaluru",
    "permanently_closed": true,
    "photos": [{
        "height": 2432,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/106942828086166902865\">A Google User</a>"],
        "width": 3648
    }],
    "place_id": "ChIJP_jKTf8RrjsRdFH_j6RSaOs",
    "plus_code": {
        "compound_code": "XMHV+WC Mahadevapura, Bengaluru, Karnataka",
        "global_code": "7J4VXMHV+WC"
    },
    "rating": 3.8,
    "reference": "ChIJP_jKTf8RrjsRdFH_j6RSaOs",
    "types": ["night_club", "bar", "point_of_interest", "establishment"],
    "user_ratings_total": 151,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Kamadhenu Layout, GS Palaya, Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100, India",
    "geometry": {
        "location": {
            "lat": 12.8494568,
            "lng": 77.67392459999999
        },
        "viewport": {
            "south": 12.84810377010728,
            "west": 77.67260162010729,
            "north": 12.85080342989272,
            "east": 77.67530127989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "854c50058b672f4c651894398f72f44f871398e0",
    "name": "Hot Bird Pub And Family Restaurant",
    "permanently_closed": true,
    "photos": [{
        "height": 707,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/114761481051146074586\">pruthvi raj</a>"],
        "width": 1080
    }],
    "place_id": "ChIJ1XwV_pJsrjsROXgTAmu0NL4",
    "plus_code": {
        "compound_code": "RMXF+QH Electronic City, Bengaluru, Karnataka",
        "global_code": "7J4VRMXF+QH"
    },
    "rating": 3.6,
    "reference": "ChIJ1XwV_pJsrjsROXgTAmu0NL4",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 12,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Rajiv Gandhi Nagar, HSR Layout, Bengaluru, Karnataka 560102, India",
    "geometry": {
        "location": {
            "lat": 12.9070906,
            "lng": 77.63143699999999
        },
        "viewport": {
            "south": 12.90571762010728,
            "west": 77.63007487010728,
            "north": 12.90841727989272,
            "east": 77.63277452989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "eeca36961df71b76e9b50cc456e1fdb3c64c6072",
    "name": "Ayraan Night Club",
    "permanently_closed": true,
    "place_id": "ChIJWRu0xXgVrjsRTJsX7PM1AgQ",
    "plus_code": {
        "compound_code": "WJ4J+RH HSR Layout, Bengaluru, Karnataka",
        "global_code": "7J4VWJ4J+RH"
    },
    "rating": 3.7,
    "reference": "ChIJWRu0xXgVrjsRTJsX7PM1AgQ",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 3,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "413, 100 Feet Rd, KHB Block Koramangala, Koramangala 4-B Block, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034, India",
    "geometry": {
        "location": {
            "lat": 12.9333708,
            "lng": 77.6236093
        },
        "viewport": {
            "south": 12.93206927010728,
            "west": 77.62214877010727,
            "north": 12.93476892989272,
            "east": 77.62484842989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "6f4c71da1e7d7301c8340e64a2be748a16a89889",
    "name": "Gillys new",
    "permanently_closed": true,
    "photos": [{
        "height": 4608,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/107334101181058353498\">Ajay Malhotra</a>"],
        "width": 3456
    }],
    "place_id": "ChIJb39rQFsUrjsRL-rsBD9NH9g",
    "plus_code": {
        "compound_code": "WJMF+8C Koramangala, Bengaluru, Karnataka",
        "global_code": "7J4VWJMF+8C"
    },
    "rating": 4.5,
    "reference": "ChIJb39rQFsUrjsRL-rsBD9NH9g",
    "types": ["night_club", "restaurant", "food", "point_of_interest", "establishment"],
    "user_ratings_total": 12,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "533, 3rd Main Rd, Nanjappa Reddy Layout, Koramangala, Bengaluru, Karnataka 560030, India",
    "geometry": {
        "location": {
            "lat": 12.94381,
            "lng": 77.6211558
        },
        "viewport": {
            "south": 12.94245232010728,
            "west": 77.61982117010727,
            "north": 12.94515197989272,
            "east": 77.62252082989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "91afe792d4731c6d6189cff4b3ce6e22b488fb74",
    "name": "Yougend",
    "permanently_closed": true,
    "place_id": "ChIJDdtuukcUrjsReC9ciskuEL0",
    "plus_code": {
        "compound_code": "WJVC+GF Koramangala, Bengaluru, Karnataka",
        "global_code": "7J4VWJVC+GF"
    },
    "rating": 3.7,
    "reference": "ChIJDdtuukcUrjsReC9ciskuEL0",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 10,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "No.46,Near, 25th A Cross Rd, Reliable Residency Phase 1, Sector 2, HSR Layout, Bengaluru, Karnataka 560102, India",
    "geometry": {
        "location": {
            "lat": 12.9002949,
            "lng": 77.64907560000002
        },
        "viewport": {
            "south": 12.89897807010728,
            "west": 77.64771967010729,
            "north": 12.90167772989272,
            "east": 77.65041932989274
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "f6cebe80d1607045bf14e593aa53bc1dabec2f57",
    "name": "Riders Hub",
    "permanently_closed": true,
    "place_id": "ChIJi3M7lKEUrjsRNDN5TpQCwNI",
    "plus_code": {
        "compound_code": "WJ2X+4J HSR Layout, Bengaluru, Karnataka",
        "global_code": "7J4VWJ2X+4J"
    },
    "rating": 0,
    "reference": "ChIJi3M7lKEUrjsRNDN5TpQCwNI",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 0,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Level 3, Marathahalli Village, Marathahalli, Bengaluru, Karnataka 560037, India",
    "geometry": {
        "location": {
            "lat": 12.9517079,
            "lng": 77.6995014
        },
        "viewport": {
            "south": 12.95034907010728,
            "west": 77.69818902010728,
            "north": 12.95304872989272,
            "east": 77.70088867989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "b156ed71cf4716598b91f5e82e4118f3291eeb96",
    "name": "BOLD",
    "permanently_closed": true,
    "photos": [{
        "height": 2592,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/109300890412682190009\">PkC pEaks</a>"],
        "width": 4608
    }],
    "place_id": "ChIJ-25hLTUSrjsRz3RMtJ4Hoho",
    "plus_code": {
        "compound_code": "XM2X+MR Marathahalli, Bengaluru, Karnataka",
        "global_code": "7J4VXM2X+MR"
    },
    "price_level": 2,
    "rating": 3.4,
    "reference": "ChIJ-25hLTUSrjsRz3RMtJ4Hoho",
    "types": ["night_club", "restaurant", "food", "point_of_interest", "establishment"],
    "user_ratings_total": 212,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Shantipura Main Rd, Electronic City Phase II, Electronic City, Bengaluru, Karnataka 560100, India",
    "geometry": {
        "location": {
            "lat": 12.847128,
            "lng": 77.6810356
        },
        "viewport": {
            "south": 12.84562787010728,
            "west": 77.67968342010728,
            "north": 12.84832752989272,
            "east": 77.68238307989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "886f15f6a0e3ecef845d1bd13d1efc8e415d3db9",
    "name": "Namma Adda",
    "permanently_closed": true,
    "photos": [{
        "height": 897,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/111828182219393991061\">Nagaraju M</a>"],
        "width": 785
    }],
    "place_id": "ChIJGyuY9e1srjsR8JAvmuUd0QY",
    "plus_code": {
        "compound_code": "RMWJ+VC Electronic City, Bengaluru, Karnataka",
        "global_code": "7J4VRMWJ+VC"
    },
    "rating": 5,
    "reference": "ChIJGyuY9e1srjsR8JAvmuUd0QY",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 1,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "C, 32, 14th D Cross Rd, Gowda Muniswamy Garden, Ejipura, Bengaluru, Karnataka 560047, India",
    "geometry": {
        "location": {
            "lat": 12.946926,
            "lng": 77.6257752
        },
        "viewport": {
            "south": 12.94555957010728,
            "west": 77.62442207010727,
            "north": 12.94825922989272,
            "east": 77.62712172989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "78a082f3cffe7625950af933f3bf6c3a374248cd",
    "name": "Knight Fight Club",
    "permanently_closed": true,
    "photos": [{
        "height": 2988,
        "html_attributions": ["<a href=\"https://maps.google.com/maps/contrib/101097076875349399481\">Thaqsheel V</a>"],
        "width": 3984
    }],
    "place_id": "ChIJlVhtRT8UrjsRNCypF04_uZc",
    "plus_code": {
        "compound_code": "WJWG+Q8 Ejipura, Bengaluru, Karnataka",
        "global_code": "7J4VWJWG+Q8"
    },
    "rating": 4.4,
    "reference": "ChIJlVhtRT8UrjsRNCypF04_uZc",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 9,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Bengaluru - Chennai Hwy, Sai Sree Layout, Parappana Agrahara, Bengaluru, Karnataka 560068, India",
    "geometry": {
        "location": {
            "lat": 12.872477,
            "lng": 77.656622
        },
        "viewport": {
            "south": 12.87116612010728,
            "west": 77.65528172010728,
            "north": 12.87386577989272,
            "east": 77.65798137989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "28a0a68e363d8cc93a0c289586a4c94313949498",
    "name": "OBLI",
    "permanently_closed": true,
    "place_id": "ChIJlUFt9BFtrjsRlmHpbeQzzvQ",
    "plus_code": {
        "compound_code": "VMC4+XJ Parappana Agrahara, Bengaluru, Karnataka",
        "global_code": "7J4VVMC4+XJ"
    },
    "rating": 0,
    "reference": "ChIJlUFt9BFtrjsRlmHpbeQzzvQ",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 0,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "KH Road, Raja Ram Mohanroy Extension, Sudhama Nagar, Bengaluru, Karnataka 560027, India",
    "geometry": {
        "location": {
            "lat": 12.9599104,
            "lng": 77.59337409999999
        },
        "viewport": {
            "south": 12.95852267010728,
            "west": 77.59212722010729,
            "north": 12.96122232989272,
            "east": 77.59482687989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "cb73a20087baf25b86cfbaf26432df3a1d0602e9",
    "name": "Club Four",
    "permanently_closed": true,
    "place_id": "ChIJ290htdsVrjsRmf8lRG6QMQo",
    "plus_code": {
        "compound_code": "XH5V+X8 Sudhama Nagar, Bengaluru, Karnataka",
        "global_code": "7J4VXH5V+X8"
    },
    "rating": 4.2,
    "reference": "ChIJ290htdsVrjsRmf8lRG6QMQo",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 6,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "26, 1st A Main Rd, KHB Colony, 7th Block, Koramangala, Bengaluru, Karnataka 560030, India",
    "geometry": {
        "location": {
            "lat": 12.936569,
            "lng": 77.61538999999999
        },
        "viewport": {
            "south": 12.93519517010728,
            "west": 77.61400217010728,
            "north": 12.93789482989272,
            "east": 77.61670182989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "54a98603359f93a2650bf97727e7bd67a720b5d3",
    "name": "Area 666",
    "permanently_closed": true,
    "place_id": "ChIJVZV0W04UrjsRje-bvXh6p2I",
    "plus_code": {
        "compound_code": "WJP8+J5 Koramangala, Bengaluru, Karnataka",
        "global_code": "7J4VWJP8+J5"
    },
    "rating": 5,
    "reference": "ChIJVZV0W04UrjsRje-bvXh6p2I",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 2,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "M G Rd, KG Halli, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001, India",
    "geometry": {
        "location": {
            "lat": 12.9723973,
            "lng": 77.5969468
        },
        "viewport": {
            "south": 12.97097717010728,
            "west": 77.59557867010727,
            "north": 12.97367682989272,
            "east": 77.59827832989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "63d503d6019d8845296c6f68958d3500836d28e1",
    "name": "Discotheque",
    "permanently_closed": true,
    "place_id": "ChIJLRHz-nkWrjsRXwWoFdkWo5M",
    "plus_code": {
        "compound_code": "XHCW+XQ Ashok Nagar, Bengaluru, Karnataka",
        "global_code": "7J4VXHCW+XQ"
    },
    "rating": 3,
    "reference": "ChIJLRHz-nkWrjsRXwWoFdkWo5M",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 1,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "60, Doddanagamangala Rd, Doddanagamangala Village, Pragathi Nagar, Electronic City, Bengaluru, Karnataka 560100, India",
    "geometry": {
        "location": {
            "lat": 12.8682559,
            "lng": 77.6616789
        },
        "viewport": {
            "south": 12.86693132010728,
            "west": 77.66034152010728,
            "north": 12.86963097989272,
            "east": 77.66304117989273
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "54c8d8c2f1ff9bec43c7108fef9a372fb36491ce",
    "name": "V9 by Vaibhavkhemka",
    "permanently_closed": true,
    "place_id": "ChIJQ9U_AARtrjsRXNuvHrh2Wg4",
    "plus_code": {
        "compound_code": "VM96+8M Electronic City, Bengaluru, Karnataka",
        "global_code": "7J4VVM96+8M"
    },
    "rating": 0,
    "reference": "ChIJQ9U_AARtrjsRXNuvHrh2Wg4",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 0,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "#2, 2nd Floor, 8th main, 100ft road, Koramangala, 4th Block, Bengaluru, Karnataka 560034, India",
    "geometry": {
        "location": {
            "lat": 12.9352,
            "lng": 77.624482
        },
        "viewport": {
            "south": 12.93383027010728,
            "west": 77.62310632010728,
            "north": 12.93652992989272,
            "east": 77.62580597989272
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "29316bef05e98b123bbda117c5a272732162c18e",
    "name": "TicTocket",
    "permanently_closed": true,
    "place_id": "ChIJFyvurkQUrjsRsfvYfQ9GmSs",
    "plus_code": {
        "compound_code": "WJPF+3Q Bengaluru, Karnataka",
        "global_code": "7J4VWJPF+3Q"
    },
    "rating": 1,
    "reference": "ChIJFyvurkQUrjsRsfvYfQ9GmSs",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 1,
    "html_attributions": []
}, {
    "business_status": "CLOSED_TEMPORARILY",
    "formatted_address": "Hongasandra Main Rd, Muniyappa Layout, Garvebhavi Palya, Bengaluru, Karnataka 560068, India",
    "geometry": {
        "location": {
            "lat": 12.8955366,
            "lng": 77.6330452
        },
        "viewport": {
            "south": 12.89415977010728,
            "west": 77.63167102010728,
            "north": 12.89685942989272,
            "east": 77.63437067989271
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
    "id": "1b9c06991a1d5b9bba67ba6fa5d6785939c9d5d8",
    "name": "Salapuria Green Age",
    "permanently_closed": true,
    "place_id": "ChIJHfMm07gUrjsR_gY9FfL0lyM",
    "plus_code": {
        "compound_code": "VJWM+66 Garvebhavi Palya, Bengaluru, Karnataka",
        "global_code": "7J4VVJWM+66"
    },
    "rating": 5,
    "reference": "ChIJHfMm07gUrjsR_gY9FfL0lyM",
    "types": ["night_club", "point_of_interest", "establishment"],
    "user_ratings_total": 2,
    "html_attributions": []
}];

let places = {
    "address_components": [
        {
            "long_name": "Chicago Riverwalk",
            "short_name": "Chicago Riverwalk",
            "types": [
                "route"
            ]
        },
        {
            "long_name": "Chicago Loop",
            "short_name": "Chicago Loop",
            "types": [
                "neighborhood",
                "political"
            ]
        },
        {
            "long_name": "Chicago",
            "short_name": "Chicago",
            "types": [
                "locality",
                "political"
            ]
        },
        {
            "long_name": "Cook County",
            "short_name": "Cook County",
            "types": [
                "administrative_area_level_2",
                "political"
            ]
        },
        {
            "long_name": "Illinois",
            "short_name": "IL",
            "types": [
                "administrative_area_level_1",
                "political"
            ]
        },
        {
            "long_name": "United States",
            "short_name": "US",
            "types": [
                "country",
                "political"
            ]
        },
        {
            "long_name": "60601",
            "short_name": "60601",
            "types": [
                "postal_code"
            ]
        }
    ],
    "adr_address": "<span class=\"street-address\">Chicago Riverwalk</span>, <span class=\"locality\">Chicago</span>, <span class=\"region\">IL</span> <span class=\"postal-code\">60601</span>, <span class=\"country-name\">USA</span>",
    "business_status": "OPERATIONAL",
    "formatted_address": "Chicago Riverwalk, Chicago, IL 60601, USA",
    "formatted_phone_number": "(877) 300-6746",
    "geometry": {
        "location": {
            "lat": 41.88822510000001,
            "lng": -87.6212378
        },
        "viewport": {
            "south": 41.8863581697085,
            "west": -87.63177599999999,
            "north": 41.88905613029149,
            "east": -87.61635039999999
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
    "international_phone_number": "+1 877-300-6746",
    "name": "Chicago Riverwalk",
    "opening_hours": {
        "weekday_text": [
            "Monday: 11:00 AM – 9:00 PM",
            "Tuesday: 11:00 AM – 9:00 PM",
            "Wednesday: 11:00 AM – 9:00 PM",
            "Thursday: 11:00 AM – 9:00 PM",
            "Friday: 11:00 AM – 9:00 PM",
            "Saturday: 11:00 AM – 9:00 PM",
            "Sunday: 11:00 AM – 9:00 PM"
        ]
    },
    "photos": [
        {
            "height": 3024,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/108210140121817976641\">Ross Dillon</a>"
            ],
            "width": 4032
        },
        {
            "height": 3024,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/115675254393260988024\">Brian Monroe</a>"
            ],
            "width": 4032
        },
        {
            "height": 1440,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/105553435345084780702\">Malvika Dayal</a>"
            ],
            "width": 2560
        },
        {
            "height": 5472,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/107766730494767840469\">Max Chiodi</a>"
            ],
            "width": 3648
        },
        {
            "height": 3456,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/118154052046262015290\">Alberto Ramirez Romero</a>"
            ],
            "width": 4608
        },
        {
            "height": 3024,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/115460751006970842272\">Ionut Preda</a>"
            ],
            "width": 4032
        },
        {
            "height": 3024,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/110138538313588589504\">Sadaf Najam</a>"
            ],
            "width": 4032
        },
        {
            "height": 1600,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/104910659776438411988\">Angarika Deb</a>"
            ],
            "width": 1200
        },
        {
            "height": 1600,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/117500725575544999843\">Jillian Kubacki</a>"
            ],
            "width": 1200
        },
        {
            "height": 3036,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/106015260376534393165\">Simeon Lico</a>"
            ],
            "width": 4048
        }
    ],
    "place_id": "ChIJX-RTBqksDogRRh_Q4ynbf_8",
    "plus_code": {
        "compound_code": "V9QH+7G Chicago, IL, USA",
        "global_code": "86HJV9QH+7G"
    },
    "rating": 4.8,
    "reviews": [
        {
            "author_name": "Eliseo Montiel Jr",
            "author_url": "https://www.google.com/maps/contrib/101337532966427950355/reviews",
            "language": "en",
            "profile_photo_url": "https://lh4.ggpht.com/-ucDNggujJWQ/AAAAAAAAAAI/AAAAAAAAAAA/iKCOqb5UXUY/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg",
            "rating": 5,
            "relative_time_description": "in the last week",
            "text": "Great walk way to enjoy the Chicago River. Plenty of restaurants and bars along the way. You can also get on tour boats as well. Very relaxing walk as you also enjoy all the buildings along the walkway. Highly recommended!",
            "time": 1596036730
        },
        {
            "author_name": "Jake Hyland",
            "author_url": "https://www.google.com/maps/contrib/104248998560826124660/reviews",
            "language": "en",
            "profile_photo_url": "https://lh4.ggpht.com/-5dKk_o1bXTE/AAAAAAAAAAI/AAAAAAAAAAA/Ul1jA4_qDtQ/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
            "rating": 5,
            "relative_time_description": "a week ago",
            "text": "Awesome place to escape the hustle of the city and see the city from a different perspective. There are multiple restaurants and beer gardens to hang out at with friends and cool off from the summer sun. I like to launch my personal kayak near the north branch of the Riverwalk and paddle up and down the river.",
            "time": 1595697334
        },
        {
            "author_name": "Sarah Garrison",
            "author_url": "https://www.google.com/maps/contrib/114111645865396784287/reviews",
            "language": "en",
            "profile_photo_url": "https://lh3.ggpht.com/-CH4lVYbe0ho/AAAAAAAAAAI/AAAAAAAAAAA/wjEBhWTmRzo/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
            "rating": 5,
            "relative_time_description": "in the last week",
            "text": "Great place for a stroll or dip in the water if you are hot.  Have lots of bikes to rent or you can get a  rickshaw ride that can take you around the city.  All in all lots to door the entire family",
            "time": 1596219491
        },
        {
            "author_name": "Hillel Glazer",
            "author_url": "https://www.google.com/maps/contrib/101652769707027373643/reviews",
            "language": "en",
            "profile_photo_url": "https://lh4.ggpht.com/-QoDSvaL16pM/AAAAAAAAAAI/AAAAAAAAAAA/NfikBu_V-zM/s128-c0x00000000-cc-rp-mo-ba4/photo.jpg",
            "rating": 4,
            "relative_time_description": "a week ago",
            "text": "Enjoyable scenery and people watching. Plenty of choices for sitting down for a drink, snack, or meal. Pandemic measures inconsistently applied (by people, businesses were much more adhering).",
            "time": 1595363622
        },
        {
            "author_name": "Julie Gregory",
            "author_url": "https://www.google.com/maps/contrib/117586936394096297910/reviews",
            "language": "en",
            "profile_photo_url": "https://lh5.ggpht.com/-Tsv4GNbmzfI/AAAAAAAAAAI/AAAAAAAAAAA/6S0LYxpxf_o/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg",
            "rating": 5,
            "relative_time_description": "3 weeks ago",
            "text": "Loved the river walk. Scenic and clean and I liked how they left parts of the park to grow more naturally, it gave animals places to live.  People are personable and helpful with directions to out-of-towners like me.  Didn’t get to see the pier this trip, but it gives me a reason to come back again 😊.",
            "time": 1594482027
        }
    ],
    "types": [
        "park",
        "tourist_attraction",
        "point_of_interest",
        "establishment"
    ],
    "url": "https://maps.google.com/?cid=18410674774676086598",
    "user_ratings_total": 9238,
    "utc_offset": -300,
    "website": "https://www.chicagoriverwalk.us/",
    "html_attributions": [

    ],
    "utc_offset_minutes": -300
};


let wikiResp =
{
    "batchcomplete": "",
    "warnings": {
        "main": {
            "*": "Subscribe to the mediawiki-api-announce mailing list at <https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce> for notice of API deprecations and breaking changes. Use [[Special:ApiFeatureUsage]] to see usage of deprecated features by your application."
        },
        "revisions": {
            "*": "Because \"rvslots\" was not specified, a legacy format has been used for the output. This format is deprecated, and in the future the new format will always be used."
        }
    },
    "query": {
        "normalized": [{
            "from": "Chicago_Riverwalk",
            "to": "Chicago Riverwalk"
        }],
        "pages": {
            "37199882": {
                "pageid": 37199882,
                "ns": 0,
                "title": "Chicago Riverwalk",
                "revisions": [{
                    "contentformat": "text/x-wiki",
                    "contentmodel": "wikitext",
                    "*": "[[File:The Riverwalk as seen from Upper Wacker Drive looking down at the Vietnam Veterans Memorial.jpg|thumb|The Riverwalk as seen from Upper Wacker Drive looking down at the Vietnam Veterans Memorial]]\n\nThe '''Chicago Riverwalk''' is an open, pedestrian waterfront located on the south bank of the main branch of the [[Chicago River]] in downtown [[Chicago]], [[Illinois]] managed by MB Real Estate. It extends from [[Lake Shore Drive]] to Lake Street. Called the city's 'Second Waterfront', after Lake Michigan,<ref>{{cite web|last=Kamin|first=Blair|title=Cityscapes: City's second waterfront: Riverwalk improved, but hurdles remain|url=http://featuresblogs.chicagotribune.com/theskyline/2009/06/citys-second-waterfront-riverwalk-improved-but-hurdles-remain.html|publisher=Chicago Tribune|accessdate=3 October 2012}}</ref> the Riverwalk contains restaurants, park-seating, boat rentals, and other activities.<ref>{{cite web|title=Chicago Riverwalk|url=https://www.cityofchicago.org/city/en/depts/cdot/supp_info/chicago_riverwalk.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref> Its current and planned final extent was opened to [[Wolf Point (Chicago)|Wolf Point]] in 2017.<ref>{{Cite news |url=https://www.cnn.com/travel/article/chicago-riverwalk/index.html |title=Chicago Riverwalk open for business (and pleasure) |last=Allen |first=Daniel |date=2017-05-01 |work=CNN Travel |access-date=2018-02-09 |language=en}}</ref>\n\n==2001-2005==\n[[File:20020829 05 Chicago River @ Michigan Ave. (5474906557).jpg|thumb|right|200px|Construction in 2002]]\nIn conjunction with the [[Chicago Department of Transportation]], construction of the Riverwalk began in 2001 as an extension of the [[Wacker Drive]] reconstruction project. With the rebuilding of Wacker Drive, the street was purposely relocated to allow for development of the walk.  The oldest section now called Market, between Lake Shore Drive and Michigan Avenue was at first an extension of the [[Chicago Lakefront Trail|lake shore trail]] with tour boat docks, concessions and stair access.<ref>{{Cite web |url=http://www.architecture.org/architecture-chicago/buildings-of-chicago/building/chicago-riverwalk/ |title=Chicago Riverwalk |website=Chicago Architecture Foundation |language=en |access-date=2018-06-13}}</ref> Sections at first required going up to street and bridge level to access the next section, until design plans and funding could be arranged over time.\n\nThe plan developed by architects at [[Skidmore, Owings and Merrill]] called for four separate districts within the riverwalk: Confluence, Arcade, Civic and Market, all with a specific location and theme in mind.\n\n*''Confluence'': Located where the Main, North and South branches of the River intersect. Previously the location of taverns, hotels and convention centers, it is now a major intersection of not only the River but the neighborhoods that border it. This area of the Riverwalk was expanded fifty feet into the river for the installation of park space and pedestrian access to Upper Wacker Drive as well as various amenities located in this area.\n*''Arcade'': The District spanning east from Franklin to [[State Street (Chicago)|State Street]]. It is called the \"Arcade\" because of the architectural detailing that separates the riverfront from the rest of the Wacker Drive.<ref>{{cite web | title=Chicago Riverwalk Main Branch Framework Plan|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>\n*''Civic'': The District spanning east from Dearborn St. to [[Michigan Avenue (Chicago)|Michigan Ave]]. It includes the Chicago Bridgehouse Museum, located at Michigan Ave. and Wacker Dr., and is also the focal point for visitor and tourist activities, primarily for the boat launches. [[Trump International Hotel and Tower (Chicago)|The Trump International Tower and Hotel]] is also located along this stretch of the Riverwalk, as well as notable landmarks such as the [[Wrigley Building]] and the [[Tribune Tower]].<ref>{{cite web|title=Civic District|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>\n* ''Market'': The District spanning from [[Columbus Drive (Chicago)|Columbus Dr.]] (including Stetson St.) east to [[Lake Shore Drive]]. Location of Chicago's First Lady boat launch as well as a beautifully landscaped space that contrasts with the other districts while walking east towards the lakeshore. This area also includes a restaurant, Cyrano's and a residential community: [[Lakeshore East]].<ref>{{cite web|title=Market District|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>\n\n==2005-2012==\n[[File:Chicago River in Chicago 2012-0241.jpg|thumb|The riverwalk]]\nAt State and Wabash Streets where the Riverwalk is at its widest is the Vietnam Veterans Memorial Plaza, commemorating events that took place during that war. Designed by [[Ross Barney Architects]] and built in 2005, it is nestled within the Riverwalk and consists of a terraced lawn, a waterfall and a central pool. The Chicago Vietnam Veterans' Memorial Plaza, one of the largest in the nation outside of Washington, D.C., connects people to the riverfront, provides an escape from the steel and glass of the City, and bejewels the City's waterfront. Its public objectives and finished forms embody what a memorial plaza should be; a remembrance of those that served, and a celebration of the living. The plaza occupies land, reclaimed by the rebuilding and relocation of Wacker Drive, to create an urban park, with terraces and bench-lined ramps that gently transition from busy city streets to more quiet spaces near the river, providing a green refuge.<ref>{{cite web|title=Riverwalk|url=http://www.aviewoncities.com/chicago/riverwalk.htm|work=Blog|publisher=A View on Cities|accessdate=3 October 2012}}</ref> Plans were announced to deploy the full intention of a connected path from Lake Michigan west towards Lake Street. [[Ross Barney Architects]] was again charged with envisioning this extension. Phase 01 was completed in 2009 with under-bridge canopies and new landscaping added south of State Street.<ref>Stephen, Phyllis (October 5, 2009). [http://www.worldarchitecturenews.com/index.php?fuseaction=wanappln.projectview&upload_id=12470&q=A%20Century%20in%20the%20Making \"Riverwalk Completion in Chicago Ties Up 100 Years of Plans\"], World Architecture News. Retrieved July 6, 2015.</ref>\n\n==2012-present==\n[[File:Chicago Riverwalk from DuSable Bridge.jpg|thumb|Chicago Riverwalk from DuSable Bridge, 2016]]\nOn October 8, 2012, Mayor [[Rahm Emanuel]] unveiled plans for an addition to the Riverwalk, extending it another six blocks along [[Chicago River|Chicago's River]] from State to Lake streets.<ref name=Unveils>Balde, Lisa (October 8, 2012). [http://www.nbcchicago.com/blogs/ward-room/Chicago-Unveils-Riverwalk-Expansion-Plans-173103591.html \"Chicago Unveils Riverwalk Expansion Plans\"], NBC Chicago. Retrieved July 6, 2015.</ref> Phases Two and Three of the Riverwalk, a collaborative design effort between [[Sasaki Associates|Sasaki]] and Ross Barney Architects, links a series of six distinct civic spaces or \"rooms\", each named for its unique program.<ref>{{Cite news|url=http://worldlandscapearchitect.com/sasaki-and-ross-barney-architects-complete-chicago-riverwalk/#.WYxXrFWGPmE|title=Sasaki and Ross Barney Architects complete Chicago Riverwalk -|date=2016-12-03|work=World Landscape Architecture|access-date=2017-08-10|language=en-US}}</ref> Floating gardens, a bridge and fishing piers will aim to create more recreational options for the city's \"Second Lakefront,\" and connect the downtown area.<ref name=Unveils/> As of early summer 2015, three of the rooms will be finished, completing Phase Two: the Marina (food vendors and seating to watch watercraft), the Cove (boating and kayak rentals), and the River Theater (amphitheater seating and a link to Upper Wacker Drive).  Phase Three, the final three blocks, is planned to be completed by the end of 2016.<ref>[http://www.riverwalkexpansion.com \"Chicago Riverwalk Construction\"], Riverwalk Expansion. Retrieved July 6, 2015.</ref><ref>{{Cite web|url=https://www.curbed.com/2016/10/24/13382868/chicago-riverwalk-landscape-architect-urbanism-design|title=Chicago's new Riverwalk offers a vision of the future of urban parks|last=Sisson|first=Patrick|date=2016-10-24|website=Curbed|access-date=2017-08-10}}</ref>\n\nIn June 2015, The Marina Plaza, The Cove, and The River Theater sections of the Riverwalk from [[State Street (Chicago)|State Street]] to [[LaSalle Street]] was officially opened.<ref>Isaacs, Deanna (July 1, 2015). [http://www.chicagoreader.com/chicago/deanna-isaacs-riverwalk-chicago-river/Content?oid=18168577 \"Like Rahm's Riverwalk, the Chicago River's Still a Work in Progress\"], ''Chicago Reader''. Retrieved July 6, 2015.</ref>\n\nThe City has been working on the development plan for the Chicago Riverwalk since the 1990s. During the reconstruction of East-West Wacker Drive, the roadway was reconfigured to allow greater public access to the river. The City received Congressional approval to redefine the navigational channel allowing the build-out of the path 20 feet under each bridge and 25 feet between each bridge and 50 feet between Franklin and Lake Street in order to extend the Riverwalk.\n \nThe City obtained $98 million for design engineering and construction from the [[U.S. Department of Transportation]] through the [[Transportation Infrastructure Finance and Innovation Act]]. The remaining phase along the south bank of the river from Lake Street to State Street will connect to the previously completed section of the Riverwalk.\n \nIn October 2016, The Water Plaza, The Jetty, and The Boardwalk sections from LaSalle Street to [[Lake Street (Chicago)|Lake Street]] opened to the public.<ref>[https://chicago.curbed.com/2016/10/24/13381624/chicago-downtown-riverwalk-expansion-opens Downtown Riverwalk expansion opens] curbed.com 2016/10/24</ref>\n\nThe city is planning a $10M renovation of the Riverwalk east of [[State Street (Chicago)|State Street]].  The oldest section of the walk, Riverwalk East will see improvements like new landscaping, seating, play areas, and walkways.<ref>[http://www.chicagotribune.com/news/local/politics/ct-met-rahm-emanuel-riverwalk-east-20180801-story.html Riverwalk East] ''Chicago Tribune''</ref>\n\n==Chicago Riverwalk expansion sections==\n* The Marina Plaza: This area provides restaurants, outdoor seating, and boat access. \n* The Cove: This area provides access for docking of human-powered crafts such as Kayaks and canoes.\n* The River Theater: This area has a sculptural staircase linking Upper Wacker Drive and the Riverwalk. It has seating and is shaded by trees. \n* The Water Plaza: Originally named the Swimming Hole, this area features a zero-depth fountain.\n* The Jetty: This area has s series of piers and floating wetland gardens. It offers an interactive learning environment about the ecology of the river, including opportunities for fishing and identifying native plants.\n* The Boardwalk: This area is an accessible walkway and lawn area and has continuous access to Lake Street.\n\n==References==\n<references />\n\n{{coords|41.8883|-87.6218|display=title}}\n\n{{Chicago}}\n\n{{Commons Category|Chicago Riverwalk}}\n\n[[Category:Parks in Chicago]]\n[[Category:2001 establishments in Illinois]]"
                }]
            }
        }
    }
}


let startContent = 
`[[File:The Riverwalk as seen from Upper Wacker Drive looking down at the Vietnam Veterans Memorial.jpg|thumb|The Riverwalk as seen from Upper Wacker Drive looking down at the Vietnam Veterans Memorial]]

The '''Chicago Riverwalk''' is an open, pedestrian waterfront located on the south bank of the main branch of the [[Chicago River]] in downtown [[Chicago]], [[Illinois]] managed by MB Real Estate. It extends from [[Lake Shore Drive]] to Lake Street. Called the city's 'Second Waterfront', after Lake Michigan,<ref>{{cite web|last=Kamin|first=Blair|title=Cityscapes: City's second waterfront: Riverwalk improved, but hurdles remain|url=http://featuresblogs.chicagotribune.com/theskyline/2009/06/citys-second-waterfront-riverwalk-improved-but-hurdles-remain.html|publisher=Chicago Tribune|accessdate=3 October 2012}}</ref> the Riverwalk contains restaurants, park-seating, boat rentals, and other activities.<ref>{{cite web|title=Chicago Riverwalk|url=https://www.cityofchicago.org/city/en/depts/cdot/supp_info/chicago_riverwalk.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref> Its current and planned final extent was opened to [[Wolf Point (Chicago)|Wolf Point]] in 2017.<ref>{{Cite news |url=https://www.cnn.com/travel/article/chicago-riverwalk/index.html |title=Chicago Riverwalk open for business (and pleasure) |last=Allen |first=Daniel |date=2017-05-01 |work=CNN Travel |access-date=2018-02-09 |language=en}}</ref>

==2001-2005==
[[File:20020829 05 Chicago River @ Michigan Ave. (5474906557).jpg|thumb|right|200px|Construction in 2002]]
In conjunction with the [[Chicago Department of Transportation]], construction of the Riverwalk began in 2001 as an extension of the [[Wacker Drive]] reconstruction project. With the rebuilding of Wacker Drive, the street was purposely relocated to allow for development of the walk.  The oldest section now called Market, between Lake Shore Drive and Michigan Avenue was at first an extension of the [[Chicago Lakefront Trail|lake shore trail]] with tour boat docks, concessions and stair access.<ref>{{Cite web |url=http://www.architecture.org/architecture-chicago/buildings-of-chicago/building/chicago-riverwalk/ |title=Chicago Riverwalk |website=Chicago Architecture Foundation |language=en |access-date=2018-06-13}}</ref> Sections at first required going up to street and bridge level to access the next section, until design plans and funding could be arranged over time.

The plan developed by architects at [[Skidmore, Owings and Merrill]] called for four separate districts within the riverwalk: Confluence, Arcade, Civic and Market, all with a specific location and theme in mind.

*''Confluence'': Located where the Main, North and South branches of the River intersect. Previously the location of taverns, hotels and convention centers, it is now a major intersection of not only the River but the neighborhoods that border it. This area of the Riverwalk was expanded fifty feet into the river for the installation of park space and pedestrian access to Upper Wacker Drive as well as various amenities located in this area.
*''Arcade'': The District spanning east from Franklin to [[State Street (Chicago)|State Street]]. It is called the "Arcade" because of the architectural detailing that separates the riverfront from the rest of the Wacker Drive.<ref>{{cite web | title=Chicago Riverwalk Main Branch Framework Plan|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>
*''Civic'': The District spanning east from Dearborn St. to [[Michigan Avenue (Chicago)|Michigan Ave]]. It includes the Chicago Bridgehouse Museum, located at Michigan Ave. and Wacker Dr., and is also the focal point for visitor and tourist activities, primarily for the boat launches. [[Trump International Hotel and Tower (Chicago)|The Trump International Tower and Hotel]] is also located along this stretch of the Riverwalk, as well as notable landmarks such as the [[Wrigley Building]] and the [[Tribune Tower]].<ref>{{cite web|title=Civic District|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>
* ''Market'': The District spanning from [[Columbus Drive (Chicago)|Columbus Dr.]] (including Stetson St.) east to [[Lake Shore Drive]]. Location of Chicago's First Lady boat launch as well as a beautifully landscaped space that contrasts with the other districts while walking east towards the lakeshore. This area also includes a restaurant, Cyrano's and a residential community: [[Lakeshore East]].<ref>{{cite web|title=Market District|url=http://www.cityofchicago.org/city/en/depts/dcd/supp_info/chicago_river_mainbranchframeworkplan.html|publisher=City of Chicago|accessdate=3 October 2012}}</ref>

==2005-2012==
[[File:Chicago River in Chicago 2012-0241.jpg|thumb|The riverwalk]]
At State and Wabash Streets where the Riverwalk is at its widest is the Vietnam Veterans Memorial Plaza, commemorating events that took place during that war. Designed by [[Ross Barney Architects]] and built in 2005, it is nestled within the Riverwalk and consists of a terraced lawn, a waterfall and a central pool. The Chicago Vietnam Veterans' Memorial Plaza, one of the largest in the nation outside of Washington, D.C., connects people to the riverfront, provides an escape from the steel and glass of the City, and bejewels the City's waterfront. Its public objectives and finished forms embody what a memorial plaza should be; a remembrance of those that served, and a celebration of the living. The plaza occupies land, reclaimed by the rebuilding and relocation of Wacker Drive, to create an urban park, with terraces and bench-lined ramps that gently transition from busy city streets to more quiet spaces near the river, providing a green refuge.<ref>{{cite web|title=Riverwalk|url=http://www.aviewoncities.com/chicago/riverwalk.htm|work=Blog|publisher=A View on Cities|accessdate=3 October 2012}}</ref> Plans were announced to deploy the full intention of a connected path from Lake Michigan west towards Lake Street. [[Ross Barney Architects]] was again charged with envisioning this extension. Phase 01 was completed in 2009 with under-bridge canopies and new landscaping added south of State Street.<ref>Stephen, Phyllis (October 5, 2009). [http://www.worldarchitecturenews.com/index.php?fuseaction=wanappln.projectview&upload_id=12470&q=A%20Century%20in%20the%20Making "Riverwalk Completion in Chicago Ties Up 100 Years of Plans"], World Architecture News. Retrieved July 6, 2015.</ref>

==2012-present==
[[File:Chicago Riverwalk from DuSable Bridge.jpg|thumb|Chicago Riverwalk from DuSable Bridge, 2016]]
On October 8, 2012, Mayor [[Rahm Emanuel]] unveiled plans for an addition to the Riverwalk, extending it another six blocks along [[Chicago River|Chicago's River]] from State to Lake streets.<ref name=Unveils>Balde, Lisa (October 8, 2012). [http://www.nbcchicago.com/blogs/ward-room/Chicago-Unveils-Riverwalk-Expansion-Plans-173103591.html "Chicago Unveils Riverwalk Expansion Plans"], NBC Chicago. Retrieved July 6, 2015.</ref> Phases Two and Three of the Riverwalk, a collaborative design effort between [[Sasaki Associates|Sasaki]] and Ross Barney Architects, links a series of six distinct civic spaces or "rooms", each named for its unique program.<ref>{{Cite news|url=http://worldlandscapearchitect.com/sasaki-and-ross-barney-architects-complete-chicago-riverwalk/#.WYxXrFWGPmE|title=Sasaki and Ross Barney Architects complete Chicago Riverwalk -|date=2016-12-03|work=World Landscape Architecture|access-date=2017-08-10|language=en-US}}</ref> Floating gardens, a bridge and fishing piers will aim to create more recreational options for the city's "Second Lakefront," and connect the downtown area.<ref name=Unveils/> As of early summer 2015, three of the rooms will be finished, completing Phase Two: the Marina (food vendors and seating to watch watercraft), the Cove (boating and kayak rentals), and the River Theater (amphitheater seating and a link to Upper Wacker Drive).  Phase Three, the final three blocks, is planned to be completed by the end of 2016.<ref>[http://www.riverwalkexpansion.com "Chicago Riverwalk Construction"], Riverwalk Expansion. Retrieved July 6, 2015.</ref><ref>{{Cite web|url=https://www.curbed.com/2016/10/24/13382868/chicago-riverwalk-landscape-architect-urbanism-design|title=Chicago's new Riverwalk offers a vision of the future of urban parks|last=Sisson|first=Patrick|date=2016-10-24|website=Curbed|access-date=2017-08-10}}</ref>

In June 2015, The Marina Plaza, The Cove, and The River Theater sections of the Riverwalk from [[State Street (Chicago)|State Street]] to [[LaSalle Street]] was officially opened.<ref>Isaacs, Deanna (July 1, 2015). [http://www.chicagoreader.com/chicago/deanna-isaacs-riverwalk-chicago-river/Content?oid=18168577 "Like Rahm's Riverwalk, the Chicago River's Still a Work in Progress"], ''Chicago Reader''. Retrieved July 6, 2015.</ref>

The City has been working on the development plan for the Chicago Riverwalk since the 1990s. During the reconstruction of East-West Wacker Drive, the roadway was reconfigured to allow greater public access to the river. The City received Congressional approval to redefine the navigational channel allowing the build-out of the path 20 feet under each bridge and 25 feet between each bridge and 50 feet between Franklin and Lake Street in order to extend the Riverwalk.
 
The City obtained $98 million for design engineering and construction from the [[U.S. Department of Transportation]] through the [[Transportation Infrastructure Finance and Innovation Act]]. The remaining phase along the south bank of the river from Lake Street to State Street will connect to the previously completed section of the Riverwalk.
 
In October 2016, The Water Plaza, The Jetty, and The Boardwalk sections from LaSalle Street to [[Lake Street (Chicago)|Lake Street]] opened to the public.<ref>[https://chicago.curbed.com/2016/10/24/13381624/chicago-downtown-riverwalk-expansion-opens Downtown Riverwalk expansion opens] curbed.com 2016/10/24</ref>

The city is planning a $10M renovation of the Riverwalk east of [[State Street (Chicago)|State Street]].  The oldest section of the walk, Riverwalk East will see improvements like new landscaping, seating, play areas, and walkways.<ref>[http://www.chicagotribune.com/news/local/politics/ct-met-rahm-emanuel-riverwalk-east-20180801-story.html Riverwalk East] ''Chicago Tribune''</ref>

==Chicago Riverwalk expansion sections==
* The Marina Plaza: This area provides restaurants, outdoor seating, and boat access. 
* The Cove: This area provides access for docking of human-powered crafts such as Kayaks and canoes.
* The River Theater: This area has a sculptural staircase linking Upper Wacker Drive and the Riverwalk. It has seating and is shaded by trees. 
* The Water Plaza: Originally named the Swimming Hole, this area features a zero-depth fountain.
* The Jetty: This area has s series of piers and floating wetland gardens. It offers an interactive learning environment about the ecology of the river, including opportunities for fishing and identifying native plants.
* The Boardwalk: This area is an accessible walkway and lawn area and has continuous access to Lake Street.

==References==
<references />

{{coords|41.8883|-87.6218|display=title}}

{{Chicago}}

{{Commons Category|Chicago Riverwalk}}

[[Category:Parks in Chicago]]
[[Category:2001 establishments in Illinois]]`;