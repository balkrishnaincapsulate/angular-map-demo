import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponentComponent} from './map-component/map-component.component';
import { SearchMapComponent } from './search-map/search-map.component';

const route : Routes = [
    {path: '', component: SearchMapComponent},
    {path: 'map', component: MapComponentComponent},    
]

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
