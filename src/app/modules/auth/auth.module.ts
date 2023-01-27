import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authFeature} from "./store/auth.reducer";
import {SharedModule} from "../../shared/shared.module";
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AuthRoutingModule } from './Auth-routing.module';
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/auth.effects";



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature([AuthEffects]),
    AuthRoutingModule,
  ]
})
export class AuthModule { }
