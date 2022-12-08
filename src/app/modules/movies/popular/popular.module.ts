import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import {PopularMovieApiService} from "../services/popular-movie.api.service";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    PopularComponent
  ],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule
  ],
  providers: [
    // PopularMovieApiService
  ]
})
export class PopularModule { }
