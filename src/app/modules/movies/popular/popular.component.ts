import { Component } from '@angular/core';
import {PopularMovieApiService} from "./services/popular-movie.api.service";
import {PopularMovie} from "../models/movie.model";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  movies: PopularMovie[] = [];
  currentPageIndex: number = 0;
  totalPageNumber: number = 0;
  totalItemsCount: number = 0;

  constructor(private popularMovieApiService: PopularMovieApiService) {
  }

  onLoadPopularMovie() {
    this.popularMovieApiService.loadPopularMovies()
      .subscribe((response) => {
        console.log(response);
        this.movies = response.results;
        this.currentPageIndex = response.page;
        this.totalPageNumber = response.total_pages;
        this.totalItemsCount = response.total_results;
      })
  }
}
