import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nomeCognome: string[] | undefined = [
    'Mario Rossi',
    'Carlo Bianchi',
    'Stefano Neri',
  ];
}
