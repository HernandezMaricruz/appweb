import { Component } from '@angular/core';
import { RouterEvent, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meditec';

}