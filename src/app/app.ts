import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { About } from './components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Personal-LP');
}
