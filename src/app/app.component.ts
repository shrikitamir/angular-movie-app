import { Component } from '@angular/core';
import { MoviesInterface } from './models/Movies';
import { MoviesService } from './services/movies.service';
import { ApiResponse } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: MoviesInterface[] = [];
  error: string | undefined;
  movieId: string = '';
  movie: any = '';

  constructor(private moviesService: MoviesService) {}

  searchMovie(name: string) {
    this.moviesService.getMovies(name).subscribe((result: ApiResponse) => {
      if (result.Response === 'True') {
        this.movies = result.Search;
      } else {
        this.error = result.Error;
        this.movies = [];
      }
      this.movie = '';
    });
  }

  setMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((result: ApiResponse) => {
      this.movie = result;
    });
  }
}
