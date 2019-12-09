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
        console.log(  this.mapMarkers,"888999",marker)
        return this.mapMarkers

    }

    updateMarker(marker){
        markers.forEach((val,index) => {
            console.log(val,"00000000",marker)
            if (val.name === marker.oldName)
            markers.splice(index, 1);
          })
        this.mapMarkers = [...this.mapMarkers,marker]
        markers.push(marker);  
        return this.mapMarkers;
    }

    removeMarker(name){
        markers.forEach((val,index) => {
            console.log(val,"VAL",index,"Index",name)
            if (val.name === name)
            markers.splice(index, 1);
          })
    }
}

export const markers :marker[] = [
    {name:'Fulton,MO',lat:38.846668,lan:-91.948059},
]