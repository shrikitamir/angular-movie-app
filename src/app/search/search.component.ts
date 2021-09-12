import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() searchMoviesEvent: EventEmitter<string> = new EventEmitter();
  @Output() resetSearchEvent: EventEmitter<any> = new EventEmitter();
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {}
}
