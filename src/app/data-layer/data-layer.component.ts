/// <reference types="@types/googlemaps" />

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-data-layer',
  templateUrl: './data-layer.component.html',
  styleUrls: ['./data-layer.component.css']
})
export class DataLayerComponent implements OnInit, OnChanges {
	@Input() map : google.maps.Map;
	@Input() feature : google.maps.Data.Feature|google.maps.Data.FeatureOptions;
	@Input() url : string;
	@Input() style : google.maps.Data.StyleOptions;
	@Input() styleProperty : string;
	@Input() styleOptions : Object;
	@Input() filterProperty : string;
	@Input() filterValue : string[];
	@Input() opacity : number;
	
	@Output() click : EventEmitter<Object> = new EventEmitter();
	
	data : google.maps.Data;
	
	private _show : Boolean = true;
	
  @Input() set show(value: Boolean) {
    this._show = value;
		if(this._show && this.data) {
			this.data.setStyle({visible: true});
		} else if(!this._show && this.data) {
			this.data.setStyle({visible: false});
		}
	}
	
	get show() : Boolean {
		return this._show;
	}

  constructor() { }

  ngOnInit() {
		this.data = new google.maps.Data();
		if(this.url) {
			this.data.loadGeoJson(this.url);
		} else if(this.feature) {
		  this.data.add(this.feature);
		}
		
		this.data.setMap(this.map);
		
		let click = this.click;
		this.data.addListener('click', function(event) {
			let o = {};
			o['latLng'] = event.latLng;
			event.feature.forEachProperty(function(value : any, property : string) {
				o[property] = value;
			});
			click.emit(o);
		});
  }
	
	ngOnChanges() {
		let opacityMod = this.opacity;
		if(this.data) {
			if(this.style) {
				this.data.setStyle(this.style);
			} else if(this.styleProperty && this.styleOptions) {
				let p = this.styleProperty,
						o = this.styleOptions;
				this.data.setStyle(feature => {
					let visible = true;
					if(this.filterProperty && !this.filterValue.includes(feature.getProperty(this.filterProperty))) {
						visible = false;
					}
					return {
						fillColor: o[feature.getProperty(p)],
						fillOpacity: 0.5 * opacityMod,
						strokeWeight: 1,
						strokeOpacity: 0.2,
						icon: "/edom/assets/icon_"+o[feature.getProperty(p)]+"_dot.png",
						visible
					}
				});
			}
		}
	}

}
