import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../models/Movies';
import { MovieInterface } from '../models/Movie';
import { ApiMovies } from '../models/ApiMovies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiUrl: string = 'http://www.omdbapi.com/?apikey=fa4a953f';
  movies: MoviesInterface[] = [];
  constructor(private http: HttpClient) {}

  getMovies(name: string): Observable<ApiMovies> {
    return this.http.get<ApiMovies>(`${this.apiUrl}&s=${name}`);
  }

  getMovie(id: string): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(`${this.apiUrl}&i=${id}`);
  }
}
