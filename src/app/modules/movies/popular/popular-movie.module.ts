import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PopularStoreService } from './store/popular.store.service';
import { StoreModule } from '@ngrx/store';
import { popularMovieFeature } from './store/popular.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PopularMovieEffects } from './store/popular.effects';
import {PopularListComponent} from "./components/popular-list/popular-list.component";
import {MovieCardComponent} from "../components/movie-card/movie-card.component";
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [PopularListComponent, MovieCardComponent, WrapperComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule,
    StoreModule.forFeature(popularMovieFeature),
    EffectsModule.forFeature([PopularMovieEffects]),
  ],
  providers: [PopularStoreService],
})
export class PopularMovieModule {}
