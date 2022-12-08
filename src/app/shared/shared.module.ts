import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticatedUserComponent} from './components/authenticated-user/authenticated-user.component';
import {MaterialModule} from "./material.module";
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AuthenticatedUserComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],
  exports: [
    //Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    // Components
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

  ]
})
export class SharedModule {
}
