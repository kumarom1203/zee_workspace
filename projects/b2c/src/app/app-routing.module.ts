import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloadingStrategy } from './core/preloading-strategy/preloading-strategy';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'city-details',
    loadChildren: () => import('./modules/city-details/city-details.module').then(m => m.CityDetailsModule)
  },
  {
    path: 'cms',
    loadChildren: () => import('./modules/dummy/dummy.module').then(m => m.DummyModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: AppPreloadingStrategy // we can use quicklinkStrategy or guess.js to make navigation performance more better in this case
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
