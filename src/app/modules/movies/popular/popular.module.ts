import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import { SharedModule } from '../../../shared/shared.module';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { PopularStoreService } from './store/popular.store.service';
import { StoreModule } from '@ngrx/store';
import { popularMovieFeature } from './store/popular.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PopularMovieEffects } from './store/popular.effects';

@NgModule({
  declarations: [PopularComponent, MovieCardComponent],
  imports: [
    CommonModule,
    PopularRoutingModule,
    SharedModule,
    StoreModule.forFeature(popularMovieFeature),
    EffectsModule.forFeature([PopularMovieEffects]),
  ],
  providers: [PopularStoreService],
})
export class PopularModule {}
