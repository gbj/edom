/// <reference types="@types/googlemaps" />

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PapaParseService, PapaParseResult } from 'ngx-papaparse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoJSON } from '@types/geojson';

interface AgeData {
	affGeoId: string;
	name: string;
	population: number;
	values: {
		age20_29: number;
		age20_34: number;
		age20_39: number;
	}
}


@Component({
  selector: 'app-age-map',
  templateUrl: './age-map.component.html',
  styleUrls: ['./age-map.component.css']
})
export class AgeMapComponent implements OnInit {
	@Input() map : google.maps.Map;
	@Input() data : string;
	@Input() geography : string;
	@Input() show : Boolean;
	@Input() ageRange : string;
	@Input() opacity : number = 1;
	
	@Output() click : EventEmitter<Object> = new EventEmitter();
	
	censusData : Promise<AgeData[]>;
	geographyData : Observable<GeoJSON>; 
		
	parseAgeData(papa : PapaParseService, url : string) : Promise<PapaParseResult> {
		return new Promise(function(resolve, reject) {
			console.log('Promise resolved');
			papa.parse(url, {
				download: true,
				delimiter: ',',
				complete: resolve,
				error: reject
			});
		})
	}
	
	censusTableToAgeData(results : PapaParseResult) : Promise<AgeData[]> {
		return new Promise(function(resolve, reject) {
			resolve(
				results.data.map(function(row) {
					let	total_pop = parseInt(row[3]),
						age20_24 = parseInt(row[4]),
						age25_29 =  parseInt(row[5]),
						age30_34 =  parseInt(row[6]),
						age35_39 = parseInt(row[7]);
					return {
						affGeoId: row[0],
						name: row[2],
						population: total_pop,
						values: {
							age20_29: (age20_24 + age25_29) / total_pop,
							age20_34: (age20_24 + age25_29 + age30_34) / total_pop,
							age20_39: (age20_24 + age25_29 + age30_34 + age35_39) / total_pop
						}
					}
				})
			);
		});
	}
	
	handleClick(event : Object) {
		this.click.emit(event);
	}

  constructor(
		private papa: PapaParseService,
		private http: HttpClient
	) { }

  ngOnInit() {
		console.log('ok');
		this.censusData = this.parseAgeData(this.papa, this.data).then(this.censusTableToAgeData);
		this.geographyData = this.http.get(this.geography);
	}

}
