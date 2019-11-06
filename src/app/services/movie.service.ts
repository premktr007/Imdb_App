import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum Searchtype{
  all='',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/'
  apiKey = ' '; // get your api key from the website 
  constructor(private http: HttpClient) { }

  searchData(title: string, type: Searchtype): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
