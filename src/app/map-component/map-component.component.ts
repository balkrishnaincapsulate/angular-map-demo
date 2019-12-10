import { Component,  OnInit, ViewChild } from '@angular/core';
import {  } from 'googlemaps';
import { MapsAPILoader, AgmMap, LatLngBounds } from '@agm/core';
import { MarkerService } from '../services/marker.service'
import {marker} from '../common/marker-interface';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss']
})
export class MapComponentComponent implements OnInit{
  title = 'Content page';
  markers : marker[];
  public latitude: number;
  public longitude: number;
  public zoom: number;

  constructor(
    private markerServcie:MarkerService,
  ){}

  
  
  public map: any = { lat: 39.8282, lng: -98.5795, zoom:3 };

  ngOnInit() {  
    this.markers =  this.markerServcie.getMarker();
  }

 
  }
