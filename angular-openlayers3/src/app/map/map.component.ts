import { Component, OnInit } from '@angular/core';

declare var ol: any;
declare var proj4: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   	
     
     ol: any;
   	ngOnInit(): void {
    	
      //proj4.defs('EPSG:31983', "+title=WGS 84 (long/lat) ++proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
proj4.defs('EPSG:29193', "+proj=utm +zone=23 +south +ellps=aust_SA +units=m +no_defs ");
          //console.log(proj4.);
      //var zurich = ol.proj.transform([8.55, 47.366667], 'EPSG:900913', 'EPSG:31983');

      //console.log(zurich);
      var map = new ol.Map({
            controls: ol.control.defaults({
    			attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
    				collapsible: false
    			})
            }),
            layers: [
    			 new ol.layer.Image({
        source: new ol.source.ImageWMS({
          ratio: 1,
          url: 'http://bhmapogcbase.pbh.gov.br:80/bhmapogcbase/pbh_base/wms',
          params: {'FORMAT': 'image/png',
                   'VERSION': '1.1.1',  
                LAYERS: 'pbh_base:BHBASE',
                STYLES: '',
          }
        })
        })
          //new ol.layer.Tile({
    			//	source: new ol.source.OSM()
    		//	})
            
            
            ],
            target: 'map',
            view: new ol.View({
            	projection: 'EPSG:29193',
    			center: ol.proj.transform([12.55, 47.366667], 'EPSG:900913', 'EPSG:29193'),
    			zoom: 7
            })
    	});

    }
}

