import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from "./test.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TestComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class TestRouteModule {}
