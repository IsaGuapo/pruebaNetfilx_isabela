import { Component } from '@angular/core';
import { MovieService } from '../server/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {
  query: string = '';
  searchResults: any[] = [];

  constructor(private movieService: MovieService) { }

  searchMovies() {
    this.movieService.searchMovies(this.query)
      .subscribe(data => {
        this.searchResults = data;
      });
  }
}
