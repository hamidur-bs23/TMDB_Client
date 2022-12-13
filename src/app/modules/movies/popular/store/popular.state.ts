import { PopularMovie } from '../../models/movie.model';

export interface PopularMovieState {
  movies: PopularMovie[] | any[];
  totalItemCount: number;
  currentPageIndex: number;
  totalPageNumber: number;
}

export const initialPopularMovieState: PopularMovieState = {
  movies: [],
  totalItemCount: 0,
  currentPageIndex: 0,
  totalPageNumber: 0,
};
