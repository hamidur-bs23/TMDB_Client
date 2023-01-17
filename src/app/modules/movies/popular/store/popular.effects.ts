import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PopularMovieActions, PopularMovieApiActions } from './popular.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PopularMovieApiService } from '../services/popular-movie.api.service';
import { PopularMovieResponse } from '../../models/movie.model';
import { AppStoreApiGroupActions } from '../../../../store/app.store.actions';

@Injectable()
export class PopularMovieEffects {
  constructor(
    private actions$: Actions,
    private popularMovieApiService: PopularMovieApiService
  ) {}

  loadPopularMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PopularMovieApiActions.fetchpopularmovies),
      mergeMap(() => {
        return this.popularMovieApiService.loadPopularMovies().pipe(
          map((response: PopularMovieResponse) => {
            console.log(response);
            return PopularMovieActions.addpopularmovies({ payloads: response });
          }),
          catchError((error: any) =>
            of(AppStoreApiGroupActions.testerror({ error }))
          )
        );
      })
    );
  });
}
