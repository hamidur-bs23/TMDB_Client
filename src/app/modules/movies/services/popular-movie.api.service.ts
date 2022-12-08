import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {PopularMovie, PopularMovieResponse} from "../models/movie.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopularMovieApiService {

  constructor(private httpClient: HttpClient) { }

  public loadPopularMovies(): Observable<PopularMovieResponse>{
    const url = `${environment.api_tmdb_auth.api_base_url}/3/movie/popular?api_key=${environment.api_tmdb_auth.api_key}&language=en-US&page=1`;
    return this.httpClient.get<PopularMovieResponse>(url);
  }
}
