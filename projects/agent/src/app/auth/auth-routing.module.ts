import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, ForgotPasswordComponent } from './components';
import { PagesLayoutComponent } from '../layouts/pages-layout/pages-layout.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    {
        path: 'auth',
        component: PagesLayoutComponent,
        children: [
            { 
                path: 'login', 
                component: LoginComponent 
            },
            { 
                path: 'forgot-password', 
                component: ForgotPasswordComponent},
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}