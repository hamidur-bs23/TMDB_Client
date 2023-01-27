import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {SharedModule} from "../../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SignupRoutingModule
  ]
})
export class SignupModule {
}
