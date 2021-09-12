import { MoviesInterface } from './Movies';

export type ApiMovies = {
  Response: string;
  Search: MoviesInterface[];
  totalResults: string;
  Error?: string;
};
