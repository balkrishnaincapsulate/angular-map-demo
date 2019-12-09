import { Injectable } from '@angular/core';
import { marker } from '../common/marker-interface';

@Injectable()

export class MarkerService {


    mapMarkers: marker[] = markers

    getMarker(){
        return this.mapMarkers;
    }

    addMarker(marker){

        this.mapMarkers = [...this.mapMarkers,marker]
        markers.push(marker);
        return this.mapMarkers

    }

    updateMarker(marker){
        markers.forEach((val,index) => {
            if (val.name === marker.oldName)
            markers.splice(index, 1);
          })
        this.mapMarkers = [...this.mapMarkers,marker]
        markers.push(marker);  
        return this.mapMarkers;
    }

    removeMarker(name){
        markers.forEach((val,index) => {
            if (val.name === name)
            markers.splice(index, 1);
          })
    }
}

export const markers :marker[] = [
    {name:'Fulton,MO',lat:38.846668,lan:-91.948059},
]