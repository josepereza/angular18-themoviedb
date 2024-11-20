import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ThemovieService } from '../../services/themovie.service';
import { Result } from '../../interfaces/themovie-response';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PosterPipe } from '../../pipes/poster.pipe';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,PosterPipe,MatPaginatorModule], 
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit {

  themovieSevice=inject(ThemovieService)

  themovies=signal<Result[]>([])
  movies:Result[]=[]
  currentPage = signal(1);
  totalPages = signal(0);
  totalItems = signal(0);
ngOnInit(): void {
this.loadMovies()
}
handlePageEvent(event: PageEvent) {
  this.currentPage.set(event.pageIndex + 1);
  this.loadMovies();
}

loadMovies(){
  this.themovieSevice.getTrending(this.currentPage()).subscribe(data=>{
    this.movies=data.results;
    this.themovies.set(data.results);
    this.totalPages.set(data.total_pages);
    this.totalItems.set(data.total_results);
   })
}
}
