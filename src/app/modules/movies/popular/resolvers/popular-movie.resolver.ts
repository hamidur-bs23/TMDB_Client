import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PopularMovieResponse } from '../../models/movie.model';
import { select, Store } from '@ngrx/store';
import { PopularMovieState } from '../store/popular.state';
import { selectMovies } from '../store/popular.selector';
import { PopularStoreService } from '../store/popular.store.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularMovieResolver implements Resolve<PopularMovieResponse> {
  constructor(
    private store: Store<PopularMovieState>,
    private popularStoreService: PopularStoreService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<PopularMovieResponse>
    | Promise<PopularMovieResponse>
    | PopularMovieResponse {
    this.popularStoreService.getPopularMovieState$.pipe(
      tap((state: PopularMovieState) => {
        if (state.currentPageIndex > 0 && state.movies.length > 0) {
        }
      })
    );

    return undefined;
  }
}
