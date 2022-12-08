import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,


  ],
  exports: [
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,

  ]
})
export class MaterialModule {
}