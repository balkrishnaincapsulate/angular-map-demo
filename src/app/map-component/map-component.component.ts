import { Component,  OnInit, ViewChild } from '@angular/core';
import {  } from 'googlemaps';
import { MapsAPILoader, AgmMap, LatLngBounds } from '@agm/core';
import {marker} from '../common/marker-interface';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent{

  markers: marker[] = [
	  {
		  lat: 40.7711329,
		  lng: -73.9741874,
		  label: 'Gold coast',
		  draggable: true
	  },
  ]

  public map: any = { lat: 40.7711329, lng: -73.9741874  };

  //marker : any

  // @ViewChild('map' , null)mapElement: any;
  // map: google.maps.Map;
  // locations : [
  //   ['Bondi Beach', -33.890542, 151.274856, 4],
  //   ['Coogee Beach', -33.923036, 151.259052, 5],
  //   ['Cronulla Beach', -34.028249, 151.157507, 3],
  //   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  //   ['Maroubra Beach', -33.950198, 151.259302, 1]
  // ];
  // infowindow = new google.maps.InfoWindow;

//   ngOnInit(): void {
//     const mapProperties = {
//          center: new google.maps.LatLng(37.0902, -95.7129),
//          zoom: 5,
//          mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
//     // this.map =  new google.maps.Map(document.getElementById('map'), {
//     //   zoom: 10,
//     //   center: new google.maps.LatLng(-33.92, 151.25),
//     //   mapTypeId: google.maps.MapTypeId.ROADMAP,
//     // });

//     // this.infowindow = new google.maps.InfoWindow();

//     // for (let i = 0; i < this.locations.length; i++) { 
//     // this.marker = new google.maps.Marker({
//     //     position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
//     //     map: this.map
//     //   });

//     //   this.marker.setMap(this.map)
    
//     //   google.maps.event.addListener(this.marker, 'click', (function(marker, i) {
//     //     return function() {
//     //       this.infowindow.setContent(this.locations[i][0]);
//     //       this.infowindow.open(this.map, marker);
//     //     }
//     //   })(this.marker, i));
//     // }

//  }
  
//-------------------------------------------------------------------------------------------------------------------

  // ngOnInit() {
  //   let map: google.maps.Map;

  //   var mapProp = {
  //     center: new google.maps.LatLng(35.9375, 14.3754),
  //     zoom: 11,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   map = new google.maps.Map(this.mapElement.nativeElement,mapProp);
    
  //   //this.restaurants = this.locations;
  //   var infowindow = new google.maps.InfoWindow();
  //   var marker, i;
  //   for (i=0; i<this.locations.length; i++){
    
  //      marker = new google.maps.Marker({
  //       position: new google.maps.LatLng(Number(this.locations[i][1]), Number(this.locations[i][2])),
  //       map: map,
  //       title: this.locations[i][0],
  //     });
      
  //     //place marker in map
  //     marker.setMap(this.map)
    
  //     google.maps.event.addListener(marker, 'click', (function(marker, i){
  //       return function(){
  //         infowindow.setContent(this.locations[0][i]);
  //         infowindow.open(this.map, marker)
  //       }
  //     }) (marker, i));
    
  //   }
  //   }


//--------------------------------------------------------------------------------------------------------

}
