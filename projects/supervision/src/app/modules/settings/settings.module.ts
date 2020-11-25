import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AppearanceComponent } from './components/appearance/appearance.component';
import { ConvenienceFeesComponent } from './components/convenience-fees/convenience-fees.component';
import { CurrencyConversionComponent } from './components/currency-conversion/currency-conversion.component';
import { EventLogsComponent } from './components/event-logs/event-logs.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { ManageApiComponent } from './components/manage-api/manage-api.component';
import { ManageCmsComponent } from './components/manage-sms/manage-cms.component';
import { ManageDomainsComponent } from './components/manage-domains/manage-domains.component';
import { PromocodeComponent } from './components/promocode/promocode.component';
import { ListPromocodeComponent } from './components/promocode/list-promocode/list-promocode.component';
import { UpdatePromocodeComponent } from './components/promocode/update-promocode/update-promocode.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { TravelInsuranceComponent } from './components/travel-insurance/travel-insurance.component';
import { DomainLogoComponent } from './components/domain-logo/domain-logo.component';

@NgModule({
  declarations: [
    AppearanceComponent,
    ConvenienceFeesComponent,
    CurrencyConversionComponent,
    EventLogsComponent,
    LiveEventsComponent,
    ManageApiComponent,
    ManageCmsComponent,
    ManageDomainsComponent,
    PromocodeComponent,
    ListPromocodeComponent,
    UpdatePromocodeComponent,
    SocialLoginComponent,
    SocialNetworksComponent,
    TravelInsuranceComponent,
    DomainLogoComponent
],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule,
  ]
})
export class SettingsModule { }
