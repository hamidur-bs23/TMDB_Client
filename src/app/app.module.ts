import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './core/auth/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DefaultLayoutComponent } from './layout/default/default.layout.component';
import { FullwidthLayoutComponent } from './layout/fullwidth/fullwidth.layout.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {AppCustomRouterSerializer} from "./store/router/appCustomRouterSerializer";
import {AppStoreReducers} from "./store/app.store.reducers";

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

    StoreModule.forRoot(AppStoreReducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: AppCustomRouterSerializer,
    }),
    // environment.production ? StoreDevtoolsModule.instrument({}) : [],
    StoreDevtoolsModule.instrument({}),
    AppRoutingModule,
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
export class AppModule {}
