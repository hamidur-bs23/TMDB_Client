import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PopularMovieApiActions } from './popular.actions';
import { PopularMovieState } from './popular.state';
import * as selectors from './popular.selector';

@Injectable()
export class PopularStoreService {
  constructor(private store: Store<PopularMovieState>) {}

  fetchAllPopularMovies(): void {
    console.log('fetching dispatched...!');
    this.store.dispatch(PopularMovieApiActions.fetchpopularmovies());
  }

  getAllPopularMovies$ = this.store.select(selectors.selectPopularMovieState);
}
