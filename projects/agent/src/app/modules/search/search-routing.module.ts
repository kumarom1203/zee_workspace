import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../auth/auth.guard';
import { FlightComponent } from './flight/flight.component';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';

const routes: Routes = [
    {
        path: 'search',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'flight',
                component: FlightComponent,
                data: { extraParameter: 'searchMenus' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }