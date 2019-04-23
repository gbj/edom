webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/age-map/age-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/age-map/age-map.component.html":
/***/ (function(module, exports) {

module.exports = "<app-map-join-shade [map]=\"map\" [geographyData]=\"geographyData | async\" [censusData]=\"censusData | async\" [show]=\"show\" [property]=\"ageRange\" [displayProperties]=\"['name', 'population', 'values']\" [opacity]=\"opacity\" (click)=\"handleClick($event)\"></app-map-join-shade>"

/***/ }),

/***/ "../../../../../src/app/age-map/age-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_papaparse__ = __webpack_require__("../../../../ngx-papaparse/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeMapComponent; });
/// <reference types="@types/googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgeMapComponent = (function () {
    function AgeMapComponent(papa, http) {
        this.papa = papa;
        this.http = http;
        this.opacity = 1;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgeMapComponent.prototype.parseAgeData = function (papa, url) {
        return new Promise(function (resolve, reject) {
            console.log('Promise resolved');
            papa.parse(url, {
                download: true,
                delimiter: ',',
                complete: resolve,
                error: reject
            });
        });
    };
    AgeMapComponent.prototype.censusTableToAgeData = function (results) {
        return new Promise(function (resolve, reject) {
            resolve(results.data.map(function (row) {
                var total_pop = parseInt(row[3]), age20_24 = parseInt(row[4]), age25_29 = parseInt(row[5]), age30_34 = parseInt(row[6]), age35_39 = parseInt(row[7]);
                return {
                    affGeoId: row[0],
                    name: row[2],
                    population: total_pop,
                    values: {
                        age20_29: (age20_24 + age25_29) / total_pop,
                        age20_34: (age20_24 + age25_29 + age30_34) / total_pop,
                        age20_39: (age20_24 + age25_29 + age30_34 + age35_39) / total_pop
                    }
                };
            }));
        });
    };
    AgeMapComponent.prototype.handleClick = function (event) {
        this.click.emit(event);
    };
    AgeMapComponent.prototype.ngOnInit = function () {
        console.log('ok');
        this.censusData = this.parseAgeData(this.papa, this.data).then(this.censusTableToAgeData);
        this.geographyData = this.http.get(this.geography);
    };
    return AgeMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgeMapComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AgeMapComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AgeMapComponent.prototype, "geography", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AgeMapComponent.prototype, "show", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AgeMapComponent.prototype, "ageRange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AgeMapComponent.prototype, "opacity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AgeMapComponent.prototype, "click", void 0);
AgeMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-age-map',
        template: __webpack_require__("../../../../../src/app/age-map/age-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/age-map/age-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_papaparse__["PapaParseService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_papaparse__["PapaParseService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _c || Object])
], AgeMapComponent);

var _a, _b, _c;
//# sourceMappingURL=age-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map { width: 100%; height: 600px; }\n.layer-wizard-search-label { font-family: sans-serif };\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\t\t\t<div id=\"map\"></div>\n\t\t\t<app-kml-layer [map]=\"map\" url=\"https://www.dropbox.com/s/7osqeukgqvtk36p/MBTAsystem.kml?dl=1\" [show]=\"options.transit_lines\"></app-kml-layer>\n\t\t\t<app-age-map [map]=\"map\" data=\"/assets/ACS_17_5YR_S0101_EasternMA_20s30sOnly.csv\" geography=\"/assets/edom.geojson\" [ageRange]=\"options.ageRange\" [opacity]=\"options.ageMapOpacity\" (click)=\"handleClick($event)\"></app-age-map>\n\t\t\t<app-data-layer [map]=\"map\" url=\"/assets/20s30sisos.geojson\" styleProperty=\"category\" [styleOptions]=\"{'Parish-based': 'red', 'Independent': 'blue', 'Campus': 'green' }\" [show]=\"options.isochrones_parish\" filterProperty=\"category\" [filterValue]=\"selectedIsochrones\" [opacity]=\"options.isosOpacity\" (click)=\"handleClick($event)\"></app-data-layer>\n\t\t\t<app-data-layer [map]=\"map\" url=\"/assets/20s30spts.geojson\" [show]=\"options.points\" styleProperty=\"category\" [styleOptions]=\"{'Parish-based': 'red', 'Independent': 'blue', 'Campus': 'green' }\" filterProperty=\"category\" [filterValue]=\"selectedPoints\" [opacity]=\"options.isosOpacity\" (click)=\"handleClick($event)\"></app-data-layer>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<fieldset>\n\t\t\t\t<legend>Age</legend>\n\t\t\t\t<input type=\"radio\" id=\"age20_29\" [(ngModel)]=\"options.ageRange\" value=\"age20_29\"><label for=\"age20_29\">20-29</label>\n\t\t\t\t<input type=\"radio\" id=\"age20_34\" [(ngModel)]=\"options.ageRange\" value=\"age20_34\"><label for=\"age20_34\">20-34</label>\n\t\t\t\t<input type=\"radio\" id=\"age20_39\" [(ngModel)]=\"options.ageRange\" value=\"age20_39\"><label for=\"age20_29\">20-39</label>\n\t\t\t\t<input type=\"range\" id=\"ageMapOpacity\" [(ngModel)]=\"options.ageMapOpacity\" value=\"1\" min=\"0\" max=\"2\" step=\"0.25\"><label for=\"ageMapOpacity\">Opacity</label>\n\t\t\t</fieldset>\n\t\t\t<fieldset>\n\t\t\t\t<legend>Ministries</legend>\n\t\t\t\t<label *ngFor=\"let option of categories\">\n\t\t        <input type=\"checkbox\"\n\t\t               name=\"options_points\"\n\t\t               value=\"{{option.value}}\"\n\t\t               [(ngModel)]=\"option.points\"/>\n\t\t        {{option.name}}\n\t\t    </label>\n\t\t\t</fieldset>\n\t\t\t<fieldset>\n\t\t\t\t<legend>Travel Radius (25 minutes on public transit)</legend>\n\t\t\t\t<label *ngFor=\"let option of categories\">\n\t\t\t\t            <input type=\"checkbox\"\n\t\t\t\t                   name=\"options_isochrones\"\n\t\t\t\t                   value=\"{{option.value}}\"\n\t\t\t\t                   [(ngModel)]=\"option.isochrones\"/>\n\t\t\t\t            {{option.name}}\n\t\t\t\t        </label>\n\t\t\t\t\t\t\t\t<input type=\"range\" id=\"isosOpacity\" [(ngModel)]=\"options.isosOpacity\" value=\"1\" min=\"0\" max=\"2\" step=\"0.25\"><label for=\"isosOpacity\">Opacity</label>\n\t\t\t\t\t\n\t\t\t</fieldset>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.lat = 42.380314526885066;
        this.lng = -71.10796299167845;
        this.options = {
            transit_lines: true,
            showAge: true,
            ageRange: 'age20_34',
            ageMapOpacity: 1,
            isosOpacity: 1
        };
        this.categories = [
            { name: 'Parish-based Ministries', value: 'Parish-based', isochrones: true, points: true },
            { name: 'Congregations', value: 'Independent', isochrones: true, points: true },
            { name: 'Campus Ministries', value: 'Campus', isochrones: false, points: false }
        ];
    }
    Object.defineProperty(AppComponent.prototype, "selectedIsochrones", {
        get: function () {
            return this.categories
                .filter(function (opt) { return opt.isochrones; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "selectedPoints", {
        get: function () {
            return this.categories
                .filter(function (opt) { return opt.points; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.handleClick = function (obj) {
        console.log(obj);
        var content;
        if (obj.hasOwnProperty('AFFGEOID')) {
            content = "<table><tr><th>GEOID: </th><td>" + obj.AFFGEOID + "</td></tr><tr><th>Name: </th><td>" + obj.name + "</td></tr><tr><th>Pop.: </th><td>" + obj.population + "</td></tr><tr><th>20-29: </th><td> " + (obj.values.age20_29 * 100).toFixed(2) + "%</td></tr><tr><th>20-34: </th><td>" + (obj.values.age20_34 * 100).toFixed(2) + "%</td></tr><tr><th>20-39: </th><td>" + (obj.values.age20_39 * 100).toFixed(2) + "%</td></tr></table>";
        }
        else if (obj.hasOwnProperty('category')) {
            content = "<h3>" + obj.name + "</h3>" + obj.address;
        }
        this.info.setContent(content);
        this.info.setPosition({ lat: obj.latLng.lat(), lng: obj.latLng.lng() });
        this.info.open(this.map);
    };
    AppComponent.prototype.initMap = function () {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng },
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.info = new google.maps.InfoWindow();
        this.initMap();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AppComponent.prototype, "lat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AppComponent.prototype, "lng", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_papaparse__ = __webpack_require__("../../../../ngx-papaparse/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fusion_table_layer_fusion_table_layer_component__ = __webpack_require__("../../../../../src/app/fusion-table-layer/fusion-table-layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kml_layer_kml_layer_component__ = __webpack_require__("../../../../../src/app/kml-layer/kml-layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_layer_data_layer_component__ = __webpack_require__("../../../../../src/app/data-layer/data-layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__age_map_age_map_component__ = __webpack_require__("../../../../../src/app/age-map/age-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_join_shade_map_join_shade_component__ = __webpack_require__("../../../../../src/app/map-join-shade/map-join-shade.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__fusion_table_layer_fusion_table_layer_component__["a" /* FusionTableLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__kml_layer_kml_layer_component__["a" /* KmlLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__data_layer_data_layer_component__["a" /* DataLayerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__age_map_age_map_component__["a" /* AgeMapComponent */],
            __WEBPACK_IMPORTED_MODULE_10__map_join_shade_map_join_shade_component__["a" /* MapJoinShadeComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_papaparse__["PapaParseModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-layer/data-layer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-layer/data-layer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/data-layer/data-layer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayerComponent; });
/// <reference types="@types/googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataLayerComponent = (function () {
    function DataLayerComponent() {
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._show = true;
    }
    Object.defineProperty(DataLayerComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (this._show && this.data) {
                this.data.setStyle({ visible: true });
            }
            else if (!this._show && this.data) {
                this.data.setStyle({ visible: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    DataLayerComponent.prototype.ngOnInit = function () {
        this.data = new google.maps.Data();
        if (this.url) {
            this.data.loadGeoJson(this.url);
        }
        else if (this.feature) {
            this.data.add(this.feature);
        }
        this.data.setMap(this.map);
        var click = this.click;
        this.data.addListener('click', function (event) {
            var o = {};
            o['latLng'] = event.latLng;
            event.feature.forEachProperty(function (value, property) {
                o[property] = value;
            });
            click.emit(o);
        });
    };
    DataLayerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var opacityMod = this.opacity;
        if (this.data) {
            if (this.style) {
                this.data.setStyle(this.style);
            }
            else if (this.styleProperty && this.styleOptions) {
                var p_1 = this.styleProperty, o_1 = this.styleOptions;
                this.data.setStyle(function (feature) {
                    var visible = true;
                    if (_this.filterProperty && !_this.filterValue.includes(feature.getProperty(_this.filterProperty))) {
                        visible = false;
                    }
                    return {
                        fillColor: o_1[feature.getProperty(p_1)],
                        fillOpacity: 0.5 * opacityMod,
                        strokeWeight: 1,
                        strokeOpacity: 0.2,
                        icon: "/assets/icon_" + o_1[feature.getProperty(p_1)] + "_dot.png",
                        visible: visible
                    };
                });
            }
        }
    };
    return DataLayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DataLayerComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DataLayerComponent.prototype, "feature", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DataLayerComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DataLayerComponent.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DataLayerComponent.prototype, "styleProperty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DataLayerComponent.prototype, "styleOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DataLayerComponent.prototype, "filterProperty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DataLayerComponent.prototype, "filterValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DataLayerComponent.prototype, "opacity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DataLayerComponent.prototype, "click", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DataLayerComponent.prototype, "show", null);
DataLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-data-layer',
        template: __webpack_require__("../../../../../src/app/data-layer/data-layer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/data-layer/data-layer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DataLayerComponent);

var _a;
//# sourceMappingURL=data-layer.component.js.map

/***/ }),

/***/ "../../../../../src/app/fusion-table-layer/fusion-table-layer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fusion-table-layer/fusion-table-layer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/fusion-table-layer/fusion-table-layer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FusionTableLayerComponent; });
/// <reference types="@types/googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FusionTableLayerComponent = (function () {
    function FusionTableLayerComponent() {
    }
    FusionTableLayerComponent.prototype.ngOnInit = function () {
        this.layer = new google.maps.FusionTablesLayer({
            map: this.map,
            query: this.query,
            styles: this.styles
        });
    };
    return FusionTableLayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FusionTableLayerComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FusionTableLayerComponent.prototype, "query", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FusionTableLayerComponent.prototype, "styles", void 0);
FusionTableLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fusion-table-layer',
        template: __webpack_require__("../../../../../src/app/fusion-table-layer/fusion-table-layer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fusion-table-layer/fusion-table-layer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FusionTableLayerComponent);

//# sourceMappingURL=fusion-table-layer.component.js.map

/***/ }),

/***/ "../../../../../src/app/kml-layer/kml-layer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/kml-layer/kml-layer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/kml-layer/kml-layer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayerComponent; });
/// <reference types="@types/googlemaps" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KmlLayerComponent = (function () {
    function KmlLayerComponent() {
        this._show = true;
    }
    Object.defineProperty(KmlLayerComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (this._show && this.layer) {
                this.layer.setMap(this.map);
            }
            else if (!this._show && this.layer) {
                this.layer.setMap(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    KmlLayerComponent.prototype.ngOnInit = function () {
        this.layer = new google.maps.KmlLayer({
            map: this.map,
            url: this.url
        });
    };
    return KmlLayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], KmlLayerComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], KmlLayerComponent.prototype, "url", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], KmlLayerComponent.prototype, "show", null);
KmlLayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-kml-layer',
        template: __webpack_require__("../../../../../src/app/kml-layer/kml-layer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/kml-layer/kml-layer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], KmlLayerComponent);

//# sourceMappingURL=kml-layer.component.js.map

/***/ }),

/***/ "../../../../../src/app/map-join-shade/map-join-shade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map-join-shade/map-join-shade.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/map-join-shade/map-join-shade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geojson__ = __webpack_require__("../../../../geojson/geojson.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_geojson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_geojson__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapJoinShadeComponent; });
/// <reference types="@types/googlemaps" />
/// <reference types="@types/geojson" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapJoinShadeComponent = (function () {
    function MapJoinShadeComponent() {
        this.opacity = 1;
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._show = true;
    }
    Object.defineProperty(MapJoinShadeComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (this._show && this.data) {
                console.log('show map');
                this.data.setStyle({ visible: true });
            }
            else if (!this._show && this.data) {
                this.data.setStyle({ visible: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    MapJoinShadeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.geographyData && this.geographyData.features && this.censusData && this.censusData.length > 0) {
            var propertyName_1 = this.property;
            var values = this.censusData.map(function (row) { return row.values[propertyName_1]; }).filter(function (a) { return !Number.isNaN(a); });
            var max_1 = values.reduce(function (a, b) { return Math.max(a, b); });
            var min_1 = values.reduce(function (a, b) { return Math.min(a, b); });
            // clear map data
            this.data.forEach(function (feature) { return _this.data.remove(feature); });
            // join two tables
            this.geographyData.features.map(function (feature) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["extend"](feature.properties, _this.censusData.find(function (row) { return row.affGeoId == feature.properties.AFFGEOID; }));
                if (feature.properties.population > 1) {
                    _this.data.addGeoJson(feature);
                }
            });
            // click handling
            this.data.addListener('click', function (event) {
            });
            // styles
            var opacityMod_1 = this.opacity;
            this.data.setStyle(function (feature) {
                var summary = feature.getProperty('values')[propertyName_1];
                var opacity = 0.65 * opacityMod_1, fillColor = '#46523C';
                var distance = max_1 - min_1;
                var octile = distance / 8;
                if (summary < min_1 + 1 * octile) {
                    fillColor = 'white';
                    opacity = 0.05 * opacityMod_1;
                }
                else if (summary < min_1 + 2 * octile) {
                    fillColor = '#93c47d';
                    opacity = 0.3 * opacityMod_1;
                }
                else if (summary < min_1 + 3 * octile) {
                    fillColor = '#d5e3cc';
                    opacity = 0.3 * opacityMod_1;
                }
                else if (summary < min_1 + 4 * octile) {
                    fillColor = '#b8cca7';
                    opacity = 0.5 * opacityMod_1;
                }
                else if (summary < min_1 + 5 * octile) {
                    fillColor = '#6b8450';
                    opacity = 0.5 * opacityMod_1;
                }
                else if (summary < min_1 + 6 * octile) {
                    fillColor = '#597837';
                    opacity = 0.5 * opacityMod_1;
                }
                else if (summary < min_1 + 7 * octile) {
                    fillColor = '#476b21';
                    opacity = 0.6 * opacityMod_1;
                }
                return {
                    fillColor: fillColor,
                    fillOpacity: opacity,
                    strokeWeight: 1,
                    strokeOpacity: 0.2
                };
            });
        }
    };
    MapJoinShadeComponent.prototype.ngOnInit = function () {
        this.data = new google.maps.Data();
        var click = this.click;
        this.data.addListener('click', function (event) {
            var o = {};
            o['latLng'] = event.latLng;
            event.feature.forEachProperty(function (value, property) {
                o[property] = value;
            });
            click.emit(o);
        });
    };
    return MapJoinShadeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MapJoinShadeComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapJoinShadeComponent.prototype, "censusData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_geojson__["GeoJSON"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_geojson__["GeoJSON"]).FeatureCollection) === "function" && _a || Object)
], MapJoinShadeComponent.prototype, "geographyData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MapJoinShadeComponent.prototype, "property", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MapJoinShadeComponent.prototype, "displayProperties", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MapJoinShadeComponent.prototype, "opacity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], MapJoinShadeComponent.prototype, "click", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MapJoinShadeComponent.prototype, "show", null);
MapJoinShadeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map-join-shade',
        template: __webpack_require__("../../../../../src/app/map-join-shade/map-join-shade.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map-join-shade/map-join-shade.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MapJoinShadeComponent);

var _a, _b;
//# sourceMappingURL=map-join-shade.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map