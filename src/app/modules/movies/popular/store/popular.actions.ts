import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PopularMovieResponse } from '../../models/movie.model';

export const PopularMovieActions = createActionGroup({
  source: 'Popular Movie Page',
  events: {
    addPopularMovies: props<{ payloads: PopularMovieResponse }>(),

    test: emptyProps(),
    testWithProps: props<{ payload: string }>(),
    testWithPropsFactory: (queryString: string) => {
      return {
        queryString,
      };
    },
  },
});

export const PopularMovieApiActions = createActionGroup({
  source: 'Popular Movie Page - API Fetch',
  events: {
    fetchPopularMovies: emptyProps(),
  },
});
