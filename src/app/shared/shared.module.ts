import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticatedUserComponent} from './components/authenticated-user/authenticated-user.component';
import {MaterialModule} from "./material.module";

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule
];

@NgModule({
  declarations: [AuthenticatedUserComponent],
  imports: [...modules],
  exports: [...modules]
})
export class SharedModule {
}
