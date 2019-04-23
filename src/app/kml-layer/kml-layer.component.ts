/// <reference types="@types/googlemaps" />

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kml-layer',
  templateUrl: './kml-layer.component.html',
  styleUrls: ['./kml-layer.component.css']
})
export class KmlLayerComponent implements OnInit {

	@Input() map : google.maps.Map;
	@Input() url : string;
	layer : google.maps.KmlLayer;
	
	private _show : Boolean = true;
	
  @Input() set show(value: Boolean) {
    this._show = value;
		if(this._show && this.layer) {
			this.layer.setMap(this.map);
		} else if(!this._show && this.layer) {
			this.layer.setMap(null);
		}
	}
	
	get show() : Boolean {
		return this._show;
	}

  constructor() { }

  ngOnInit() {
	  this.layer = new google.maps.KmlLayer({
	    map: this.map,
			url: this.url
		});
  }

}
