import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TendenciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18-themovieDb';
}
