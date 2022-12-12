import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PopularRoutingModule} from './popular-routing.module';
import {PopularComponent} from './popular.component';
import {PopularMovieApiService} from "./services/popular-movie.api.service";
import {SharedModule} from "../../../shared/shared.module";
import {MovieCardComponent} from "../components/movie-card/movie-card.component";
import {PopularStoreService} from "./store/popular.store.service";
import {StoreModule} from "@ngrx/store";
import {popularMovieFeature} from "./store/popular.reducer";


@NgModule({
  declarations: [
    PopularComponent,
    MovieCardComponent,

  ],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule,
    StoreModule.forFeature(popularMovieFeature),

  ],
  providers: [
    // PopularMovieApiService,
    PopularStoreService
  ]
})
export class PopularModule {
}
