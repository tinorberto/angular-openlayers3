import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from './../commomservice.service'
declare var ol: any;
declare var proj4: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  ol: any;
  map : any;
  private subscription: Subscription;
   constructor( private commonService: CommonService ){
  }
  /**
   * 
   * @returns void
   */
  ngOnInit(): void {
    
     this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'onSubmit') {
        
         console.log("TTTTTT");
         this.changeLayer();
       // console.log(res.value);
        // perform your other action from here

      }
    });
    
    proj4.defs('EPSG:29193', "+proj=utm +zone=23 +south +ellps=aust_SA +units=m +no_defs ");
    this.map = new ol.Map({
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }).extend([
        new ol.control.ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        })
      ]),
      layers: [
        new ol.layer.Image({
          source: new ol.source.ImageWMS({
            ratio: 1,
            url: 'http://bhmapogcbase.pbh.gov.br:80/bhmapogcbase/pbh_base/wms',
            params: {
              'FORMAT': 'image/png',
              'VERSION': '1.1.1',
              LAYERS: 'pbh_base:BHBASE',
              STYLES: '',
            }
          })
        })
      ],
      target: 'map',
      view: new ol.View({
        projection: 'EPSG:29193',
        center: [624602.781965, 7856702.924181],
        zoom: 9
      })
    });
  }


  changeLayer(){
    console.log(this.map.getView().getProjection());
  }
}

