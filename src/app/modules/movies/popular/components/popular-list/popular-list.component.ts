import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PopularMovie} from '../../../models/movie.model';
import {Store} from '@ngrx/store';
import {PopularMovieState} from '../../store/popular.state';
import {PopularStoreService} from '../../store/popular.store.service';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-popular',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopularListComponent implements OnInit {
  movies: PopularMovie[] = [];
  currentPageIndex: number = 0;
  totalPageNumber: number = 0;
  totalItemsCount: number = 0;

  destroy$: Subject<any> = new Subject<any>();

  constructor(
    private store: Store<PopularMovieState>,
    private popularStoreService: PopularStoreService,
    private cdRef: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.onLoadPopularMovieWithStoreEffect();

    this.popularStoreService.getAllPopularMovies$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: PopularMovieState) => {
        this.movies = data.movies;
        this.totalItemsCount = data.totalItemCount;
        this.currentPageIndex = data.currentPageIndex;
        this.totalPageNumber = data.totalPageNumber;
        debugger;
        this.cdRef.markForCheck();
      });
  }

  onLoadPopularMovieWithStoreEffect() {
    this.popularStoreService.fetchAllPopularMovies();
  }

  // getData() {
  //   this.popularStoreService.getAllPopularMovies$.subscribe((data) => {
  //     this.movies = data.movies;
  //     this.totalItemsCount = data.totalItemCount;
  //     this.currentPageIndex = data.currentPageIndex;
  //     this.totalPageNumber = data.totalPageNumber;
  //
  //     console.log(
  //       this.movies,
  //       this.totalItemsCount,
  //       this.currentPageIndex,
  //       this.totalPageNumber
  //     );
  //   });
  // }
}
