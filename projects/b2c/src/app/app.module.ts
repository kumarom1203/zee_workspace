import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptor/auth-interceptor.service';
import { CoreModule } from './core/core.module';
import { AppGlobal } from './app.global';
import { AppPreloadingStrategy } from './core/preloading-strategy/preloading-strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutsModule,
    CoreModule,
    AppRoutingModule // always keep at the end of the array
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    },
    AppGlobal,
    AppPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
