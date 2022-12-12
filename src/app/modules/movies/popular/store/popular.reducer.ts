import { createFeature, createReducer, on } from '@ngrx/store';
import { initialPopularMovieState, PopularMovieState } from './popular.state';
import { PopularMovieActions } from './popular.actions';

export const popularMovieFeature = createFeature({
  name: 'PopularMovie',
  reducer: createReducer<PopularMovieState>(
    initialPopularMovieState,
    on(PopularMovieActions.test, (state) => {
      return { ...state };
    }),
    on(PopularMovieActions.testwithprops, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
      };
    }),
    on(PopularMovieActions.testwithpropsfactory, (state, action) => {
      console.log(action?.queryString);
      return {
        ...state
      };
    }),
  ),
});
