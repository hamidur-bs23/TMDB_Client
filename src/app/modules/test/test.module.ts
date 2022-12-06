import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComponent} from "./test.component";
import {TestRouteModule} from "./test-route.routing";



@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRouteModule
  ]
})
export class TestModule { }
