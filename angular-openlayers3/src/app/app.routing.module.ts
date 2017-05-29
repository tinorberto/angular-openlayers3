import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonService } from './commomservice.service'

const appRoutes: Routes = [
    { path: '', 
        loadChildren: 'app/map/map.module#MapModule',   
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}