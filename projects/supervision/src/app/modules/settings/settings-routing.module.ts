import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from '../../layout/base-layout/base-layout.component';
import { AuthGuard } from '../../auth/auth.guard';

import { AppearanceComponent } from './components/appearance/appearance.component';
import { ConvenienceFeesComponent } from './components/convenience-fees/convenience-fees.component';
import { CurrencyConversionComponent } from './components/currency-conversion/currency-conversion.component';
import { EventLogsComponent } from './components/event-logs/event-logs.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { ManageApiComponent } from './components/manage-api/manage-api.component';
import { ManageCmsComponent } from './components/manage-sms/manage-cms.component';
import { ManageDomainsComponent } from './components/manage-domains/manage-domains.component';
import { PromocodeComponent } from './components/promocode/promocode.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { TravelInsuranceComponent } from './components/travel-insurance/travel-insurance.component';
import { DomainLogoComponent } from './components/domain-logo/domain-logo.component';


const routes: Routes = [

  {
    path: 'settings',
    component: BaseLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'appearance',
        component: AppearanceComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'convenience-fees',
        component: ConvenienceFeesComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'currency-conversion',
        component: CurrencyConversionComponent,
        data: { extraParameter: 'settingsMenus' }
      },
        {
        path: 'event-logs',
        component: EventLogsComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'live-events',
        component: LiveEventsComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'manage-api',
        component: ManageApiComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'domain-log',
        component: DomainLogoComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'manage-sms',
        component: ManageCmsComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'social-login',
        component: SocialLoginComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'manage-domains',
        component: ManageDomainsComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'promocode',
        component: PromocodeComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'social-networks',
        component: SocialNetworksComponent,
        data: { extraParameter: 'settingsMenus' }
      },
      {
        path: 'travel-insurance',
        component: TravelInsuranceComponent,
        data: { extraParameter: 'settingsMenus' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
