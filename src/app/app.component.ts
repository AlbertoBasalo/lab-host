import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p><a routerLink="/">Go host home</a></p>
    <p><a routerLink="/remote1">Go to remote one app</a></p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-host';
}
