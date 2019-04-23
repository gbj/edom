/// <reference types="@types/googlemaps" />
/// <reference types="@types/geojson" />

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { GeoJSON } from 'geojson';
import * as _ from 'lodash';

interface CensusData {
	affGeoId: string;
	population: number;
	values: object;
}

@Component({
  selector: 'app-map-join-shade',
  templateUrl: './map-join-shade.component.html',
  styleUrls: ['./map-join-shade.component.css']
})
export class MapJoinShadeComponent implements OnInit, OnChanges {
	@Input() map : google.maps.Map;
	@Input() censusData : CensusData[];
	@Input() geographyData : GeoJSON.FeatureCollection;
	@Input() property : string;
	@Input() displayProperties : string[];
	@Input() opacity : number = 1;
	
	@Output() click : EventEmitter<Object> = new EventEmitter();
	
	displayFeature : CensusData;
	data : google.maps.Data;
	
	private _show : Boolean = true;
	
  @Input() set show(value: Boolean) {
    this._show = value;
		if(this._show && this.data) {
			console.log('show map');
			this.data.setStyle({visible: true});
		} else if(!this._show && this.data) {
			this.data.setStyle({visible: false});
		}
	}
	
	get show() : Boolean {
		return this._show;
	}

  constructor() { }

	ngOnChanges() {
		if(this.geographyData && this.geographyData.features && this.censusData && this.censusData.length > 0) {
			const propertyName = this.property;
			const values = this.censusData.map(row => row.values[propertyName]).filter(a => !Number.isNaN(a));
			const max = values.reduce((a, b) => Math.max(a, b));
			const min = values.reduce((a, b) => Math.min(a, b));
			
			// clear map data
			this.data.forEach(feature => this.data.remove(feature));
			
			// join two tables
			this.geographyData.features.map(feature => {
				_.extend(feature.properties, this.censusData.find(row => row.affGeoId == feature.properties.AFFGEOID));
				if(feature.properties.population > 1) {
					this.data.addGeoJson(feature);
				}
			});
			
			// click handling
      this.data.addListener('click', function(event) {
				
      });
			
			// styles
			let opacityMod = this.opacity; 
			this.data.setStyle(function(feature) {
		    let summary = feature.getProperty('values')[propertyName];
				let opacity = 0.65 * opacityMod, fillColor = '#46523C';
				let distance = max - min;
				let octile = distance / 8;

				if(summary < min + 1 * octile) {
					fillColor = 'white';
					opacity = 0.05 * opacityMod;
				} else if (summary < min + 2 * octile) {
					fillColor = '#93c47d';
					opacity = 0.3 * opacityMod;
				} else if (summary < min + 3 * octile) {
					fillColor = '#d5e3cc';
					opacity = 0.3 * opacityMod;
				} else if (summary < min + 4 * octile) {
					fillColor = '#b8cca7';
					opacity = 0.5 * opacityMod;
				} else if (summary < min + 5 * octile) {
					fillColor = '#6b8450';
					opacity = 0.5 * opacityMod;
				} else if (summary < min + 6 * octile) {
					fillColor = '#597837';
					opacity = 0.5 * opacityMod;
				} else if (summary < min + 7 * octile) {
					fillColor = '#476b21';
					opacity = 0.6 * opacityMod;
				}
		    return {
					fillColor: fillColor,
					fillOpacity: opacity,
					strokeWeight: 1,
					strokeOpacity: 0.2
				}
			});
		}
	}

  ngOnInit() {
		this.data = new google.maps.Data();

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

}
