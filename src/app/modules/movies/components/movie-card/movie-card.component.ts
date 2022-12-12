import {Component, Input, OnInit} from '@angular/core';
import {PopularMovie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit{
  @Input() movie!: PopularMovie;

  ngOnInit(): void {
    console.log(this.movie);
  }


  public posterImageUrl: string = this.movie
    ? `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`
    : 'https://image.tmdb.org/t/p/original/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg';

}
