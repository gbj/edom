/// <reference types="@types/googlemaps" />

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fusion-table-layer',
  templateUrl: './fusion-table-layer.component.html',
  styleUrls: ['./fusion-table-layer.component.css']
})
export class FusionTableLayerComponent implements OnInit {
	@Input() map : google.maps.Map;
	@Input() query : any;
	@Input() styles : any;
	layer : google.maps.FusionTablesLayer;

  constructor() { }

  ngOnInit() {
	  this.layer = new google.maps.FusionTablesLayer({
	    map: this.map,
	    query: this.query,
			styles: this.styles
		});
  }
}
