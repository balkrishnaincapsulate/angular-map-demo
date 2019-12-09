import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { MarkerService } from '../services/marker.service'

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})

export class SearchMapComponent implements OnInit {
  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public place: google.maps.places.PlaceResult;
  public TableDate: any;
  public onEdit = "Add";
  public editVar :any;

  @ViewChild("search" , {static:false})
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private markerServcie:MarkerService,
  ){}

  ngOnInit() {
    this.searchControl = new FormControl();
    
    this.TableDate =  this.markerServcie.getMarker();

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
           this.place = autocomplete.getPlace();

          if (this.place.geometry === undefined || this.place.geometry === null) {
            return;
          }

          this.latitude = this.place.geometry.location.lat();
          this.longitude = this.place.geometry.location.lng();
          this.zoom = 4;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public onButtonClick(){
    if(this.onEdit === "Add"){
      this.markerServcie.addMarker({name:this.place.name,  lat:this.latitude, lan: this.longitude})
      this.searchControl.reset();
      this.onEdit = "Add";
      this.latitude = null;
      this.longitude = null;
    }
    else {
    this.markerServcie.updateMarker({name:this.place.name, lat:this.latitude, lan: this.longitude,oldName:this.editVar})
    this.searchControl.reset();
    this.onEdit = "Add";
    this.editVar = "";
    this.latitude = null;
    this.longitude = null;
    }
  }

  public onDeleteClick(name){
    this.markerServcie.removeMarker(name);
  }

  public onEditClick(name){
    this.TableDate.filter((val) => {
      if (val.name === name) {
        this.onEdit = "Update";
        this.editVar = val.name;
        this.searchControl.setValue(val.name);
      }
    })
  }
}