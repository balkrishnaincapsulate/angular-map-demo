import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponentComponent } from './map-component/map-component.component';
import { SearchMapComponent } from './search-map/search-map.component';
import {MarkerService} from './services/marker.service'

@NgModule({
  declarations: [
    AppComponent,
    MapComponentComponent,
    SearchMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtFRx5bE3zgystjqBb5YnDc5teloiioeM',
      libraries: ["places"]
    })   
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
