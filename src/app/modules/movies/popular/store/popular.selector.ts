import {popularMovieFeature} from "./popular.reducer";
import {createSelector} from "@ngrx/store";
import {PopularMovie} from "../../models/movie.model";

export const {
  name,
  reducer,
  selectPopularMovieState,
  selectMovies,
  selectCurrentPageIndex,
  selectTotalItemCount,
  selectTotalPageNumber,
} = popularMovieFeature;

export const selectMovieById = (id: number) => createSelector(
  selectMovies,
  (movies: PopularMovie[]) => {
    return movies.find(movie => movie.id === id);
  }
);

export const selectTest = createSelector(
  selectMovies,
  selectTotalItemCount,
  selectCurrentPageIndex,
  (list: PopularMovie[], count: number, currentPageIndex: number) => {
    console.log(list, count, currentPageIndex);
  }
);
