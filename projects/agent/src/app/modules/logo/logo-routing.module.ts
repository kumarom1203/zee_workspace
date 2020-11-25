import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../../auth/auth.guard';
import { BaseLayoutComponent } from '../../layouts/base-layout/base-layout.component';
import { LogoComponent } from './logo.component';

const routes: Routes = [
    {
        path: '',
        component: BaseLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'logo',
                component: LogoComponent,
                data: { extraParameter: 'logoMenus' }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BalanceAlertRoutingModule { }