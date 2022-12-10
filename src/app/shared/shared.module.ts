import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticatedUserComponent} from './components/authenticated-user/authenticated-user.component';
import {MaterialModule} from "./material.module";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MenuItemComponent} from "./components/menu-item/menu-item.component";
import {PageHeaderComponent} from "./components/page-header/page-header.component";

@NgModule({
  declarations: [
    AuthenticatedUserComponent,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    PageHeaderComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,


  ],
  exports: [
    //Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    // Components
    AuthenticatedUserComponent,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    PageHeaderComponent,

  ]
})
export class SharedModule {
}
