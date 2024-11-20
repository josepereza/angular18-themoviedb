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

  url = 'https://api.themoviedb.org/3/trending/movie/day?language=de-DE';
  
  getTrending(page: number):Observable<ThemovieResponse>{
   return this.http.get<ThemovieResponse>(`${this.url}&page=${page}`)
  }

}
