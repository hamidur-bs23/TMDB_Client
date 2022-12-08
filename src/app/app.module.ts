import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthInterceptorService} from './core/auth/interceptors/auth.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {DefaultLayoutComponent} from './layout/default/default.layout.component';
import {FullwidthLayoutComponent} from './layout/fullwidth/fullwidth.layout.component';
import {EmptyLayoutComponent} from './layout/empty/empty.layout.component';

@NgModule({
  declarations: [AppComponent, DefaultLayoutComponent, FullwidthLayoutComponent, EmptyLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
