import { Component } from '@angular/core';
import {PopularMovieApiService} from "../services/popular-movie.api.service";
import {PopularMovie} from "../models/movie.model";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  public popularMovies: PopularMovie[] = [];

  constructor(private popularMovieApiService: PopularMovieApiService) {
  }

  onLoadPopularMovie() {
    this.popularMovieApiService.loadPopularMovies()
      .subscribe((response) => {
        console.log(response);
        this.popularMovies = response.results;
      })
  }
}
