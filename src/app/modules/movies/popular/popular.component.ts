import { Component, OnInit } from '@angular/core';
import { PopularMovie } from '../models/movie.model';
import { Store } from '@ngrx/store';
import { PopularMovieState } from './store/popular.state';
import { PopularStoreService } from './store/popular.store.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {
  movies: PopularMovie[] = [];
  currentPageIndex: number = 0;
  totalPageNumber: number = 0;
  totalItemsCount: number = 0;

  constructor(
    private store: Store<PopularMovieState>,
    private popularStoreService: PopularStoreService
  ) {}

  ngOnInit(): void {
    this.onLoadPopularMovieWithStoreEffect();
    this.popularStoreService.getAllPopularMovies$.subscribe((data) => {
      this.movies = data.movies;
      this.totalItemsCount = data.totalItemCount;
      this.currentPageIndex = data.currentPageIndex;
      this.totalPageNumber = data.totalPageNumber;
    });
  }

  onLoadPopularMovieWithStoreEffect() {
    this.popularStoreService.fetchAllPopularMovies();
  }

  getData() {
    this.popularStoreService.getAllPopularMovies$.subscribe((data) => {
      this.movies = data.movies;
      this.totalItemsCount = data.totalItemCount;
      this.currentPageIndex = data.currentPageIndex;
      this.totalPageNumber = data.totalPageNumber;

      console.log(
        this.movies,
        this.totalItemsCount,
        this.currentPageIndex,
        this.totalPageNumber
      );
    });
  }
}
