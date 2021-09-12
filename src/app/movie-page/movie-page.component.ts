import { Component, Input, OnInit } from '@angular/core';
import { MovieInterface } from '../models/Movie';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  @Input() movie: MovieInterface;
  noPosterUrl: string = '../../assets/noPoster.png';

  constructor() {}

  ngOnInit(): void {}
}
