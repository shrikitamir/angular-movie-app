import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MoviesInterface } from '../models/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: MoviesInterface[] = [];
  @Output() searchSingleMovieEvent: EventEmitter<string> = new EventEmitter();
  noPosterUrl: string = '../../assets/noPoster.png';

  constructor() {}

  ngOnInit(): void {}
}
