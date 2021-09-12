import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { MoviesInterface } from './models/Movies';
import { MovieInterface } from './models/Movie';
import { ApiMovies } from './models/ApiMovies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: MoviesInterface[] = [];
  movie: MovieInterface | null;
  error: string | undefined;

  constructor(private moviesService: MoviesService) {}

  onSearchMovies(name: string) {
    this.moviesService.getMovies(name).subscribe((result: ApiMovies) => {
      if (result.Response === 'True') {
        this.movies = result.Search;
      } else {
        this.error = result.Error;
        this.movies = [];
      }
      this.movie = null;
    });
  }

  onSearchSingleMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((result: MovieInterface) => {
      this.movie = result;
    });
  }

  onResetSearch() {
    this.movie = null;
    this.movies = [];
    this.error = undefined;
  }
}
