import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  @Input() movie: any = '';
  noPosterUrl: string = '../../assets/noPoster.png';

  constructor() {}

  ngOnInit(): void {
    console.log(this.movie);
  }
}
