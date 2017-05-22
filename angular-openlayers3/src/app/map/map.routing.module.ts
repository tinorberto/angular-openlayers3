import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const mapRoutes: Routes = [
    { path: '', component: MapComponent }
];

@NgModule({
    imports: [RouterModule.forChild(mapRoutes)],
    exports: [RouterModule]
})
export class MapRoutingModule {}