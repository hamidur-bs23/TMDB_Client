import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularListComponent } from './components/popular-list/popular-list.component';
import {WrapperComponent} from "./components/wrapper/wrapper.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: PopularListComponent
      },
      {
        path: ':id',
        component: MovieDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopularRoutingModule {}
