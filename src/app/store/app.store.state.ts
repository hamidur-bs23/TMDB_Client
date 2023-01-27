import {PopularMovieState} from "../modules/movies/popular/store/popular.state";
import {RouterReducerState} from "@ngrx/router-store";

export interface AppState {
  popularMovies: PopularMovieState,
  router: RouterReducerState,
}
