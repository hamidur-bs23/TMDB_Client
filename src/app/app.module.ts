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
import {AppStoreModule} from "./store/app.store.module";
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    FullwidthLayoutComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppStoreModule,

    AppRoutingModule,

    StoreModule.forRoot({}, {}),
  ],
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
