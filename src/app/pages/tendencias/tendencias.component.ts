import { Component, inject, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ThemovieService } from '../../services/themovie.service';
import { Result } from '../../interfaces/themovie-response';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PosterPipe } from '../../pipes/poster.pipe';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,PosterPipe,MatPaginatorModule,ReactiveFormsModule], 
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit{
  
  search$ = new FormControl('',{nonNullable: true});


  themovieSevice=inject(ThemovieService)

  themovies=signal<Result[]>([])
  movies:Result[]=[]
  currentPage = signal(1);
  totalPages = signal(0);
  totalItems = signal(0);
  searchConfir=signal(false);
  search=signal('');
  filmSearch$=this.search$.valueChanges.pipe( debounceTime(1000),
  distinctUntilChanged())

ngOnInit(): void {
  this.filmSearch$.subscribe(data=>{
    this.searchConfir.set(true)
    this.search.set(data)
    if (data.length<1){
      this.currentPage.set(1)
      this.loadMovies()
    }else {
          this.loadSearch(this.search())

    }
  })
this.loadMovies()
}
handlePageEvent(event: PageEvent) {
  if (this.searchConfir()){
      this.currentPage.set(event.pageIndex + 1);
  this.loadSearch(this.search())
  }else {
    this.currentPage.set(event.pageIndex + 1);
    this.loadMovies();

  }

}

loadMovies(){
  this.themovieSevice.getTrending(this.currentPage()).subscribe(data=>{
    this.movies=data.results;
    this.themovies.set(data.results);
    this.totalPages.set(data.total_pages);
    this.totalItems.set(data.total_results);
   })}

   loadSearch(search:string){
    this.themovieSevice.getSearch(this.currentPage(),search).subscribe(data=>{
      this.movies=data.results;
      this.themovies.set(data.results);
      this.totalPages.set(data.total_pages);
      this.totalItems.set(data.total_results);
     })
}

}
