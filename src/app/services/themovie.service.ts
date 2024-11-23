import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ThemovieResponse } from '../interfaces/themovie-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemovieService {
  http=inject(HttpClient)
  constructor() { }

  urlTrending = 'https://api.themoviedb.org/3/trending/movie/day?language=de-DE';

  urlSearch = 'https://api.themoviedb.org/3/search/movie';
  urlSearch2 = 'https://api.themoviedb.org/3/search/movie?query=hacker&language=de-DE';


  getTrending(page: number):Observable<ThemovieResponse>{
   return this.http.get<ThemovieResponse>(`${this.urlTrending}&page=${page}`)
  }

  getSearch(page: number,search:string):Observable<ThemovieResponse>{
    return this.http.get<ThemovieResponse>(`${this.urlSearch}?query=${search}&language=de-DE&page=${page}`)

  }

}
