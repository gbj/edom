import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	map : google.maps.Map;
  @Input() lat : number = 42.380314526885066;
	@Input() lng : number = -71.10796299167845;
	info : google.maps.InfoWindow;
  
  options : any = {
	  transit_lines: true,
	  showAge: true,
		ageRange: 'age20_34',
		ageMapOpacity: 1,
		isosOpacity: 1
  };
	
	categories = [
    { name: 'Parish-based Ministries', value: 'Parish-based', isochrones: true, points: true },
    { name: 'Congregations', value: 'Independent', isochrones: true, points: true },
    { name: 'Campus Ministries', value: 'Campus', isochrones: false, points: false }
  ]
	
  get selectedIsochrones() {
    return this.categories
              .filter(opt => opt.isochrones)
							.map(opt => opt.value);
  }
	
  get selectedPoints() {
    return this.categories
              .filter(opt => opt.points)
							.map(opt => opt.value);
  }
	
	handleClick(obj) {
		console.log(obj);
		let content : string;
		if(obj.hasOwnProperty('AFFGEOID')) {
			content = `<table><tr><th>GEOID: </th><td>${obj.AFFGEOID}</td></tr><tr><th>Name: </th><td>${obj.name}</td></tr><tr><th>Pop.: </th><td>${obj.population}</td></tr><tr><th>20-29: </th><td> ${(obj.values.age20_29*100).toFixed(2)}%</td></tr><tr><th>20-34: </th><td>${(obj.values.age20_34*100).toFixed(2)}%</td></tr><tr><th>20-39: </th><td>${(obj.values.age20_39*100).toFixed(2)}%</td></tr></table>`;
		} else if(obj.hasOwnProperty('category')) {
			content = `<h3>${obj.name}</h3>${obj.address}`;
			
		}
		this.info.setContent(content);
		this.info.setPosition({lat: obj.latLng.lat(), lng: obj.latLng.lng()});
		this.info.open(this.map);
	}
	  
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: { lat: this.lat, lng: this.lng },
    });
  }
  
  ngOnInit() {
		this.info = new google.maps.InfoWindow();
	  this.initMap();
  }
	
	constructor () { }
}
