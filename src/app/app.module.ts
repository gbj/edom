import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PapaParseModule } from 'ngx-papaparse';

import { AppComponent } from './app.component';
import { FusionTableLayerComponent } from './fusion-table-layer/fusion-table-layer.component';
import { KmlLayerComponent } from './kml-layer/kml-layer.component';
import { DataLayerComponent } from './data-layer/data-layer.component';
import { AgeMapComponent } from './age-map/age-map.component';
import { MapJoinShadeComponent } from './map-join-shade/map-join-shade.component';

@NgModule({
  declarations: [
    AppComponent,
    FusionTableLayerComponent,
    KmlLayerComponent,
    DataLayerComponent,
    AgeMapComponent,
    MapJoinShadeComponent,
  ],
  imports: [
    BrowserModule,
		FormsModule,
		PapaParseModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
