import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../models/Movies';
import { Observable } from 'rxjs';

export type ApiResponse = {
  Response: string;
  Search: MoviesInterface[];
  totalResults: string;
  Error?: string;
};

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiUrl: string = 'http://www.omdbapi.com/?apikey=fa4a953f';
  movies: MoviesInterface[] = [];
  constructor(private http: HttpClient) {}

  getMovies(name: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}&s=${name}`);
  }

  getMovie(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}&i=${id}`);
  }
}
