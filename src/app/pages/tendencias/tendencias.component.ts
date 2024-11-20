import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ThemovieService } from '../../services/themovie.service';
import { Result } from '../../interfaces/themovie-response';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PosterPipe } from '../../pipes/poster.pipe';

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,PosterPipe], 
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.css'
})
export class TendenciasComponent implements OnInit {

  themovieSevice=inject(ThemovieService)

  themovies=signal<Result[]>([])
  movies:Result[]=[]

ngOnInit(): void {
 this.themovieSevice.getTrending().subscribe(data=>{
  this.movies=data.results;
  this.themovies.set(data.results)
 })
}
}
