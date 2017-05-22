import { MapComponent } from './map.component';
import { MapRoutingModule } from './map.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule { }
