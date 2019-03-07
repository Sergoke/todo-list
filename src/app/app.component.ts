import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos =  [
    {title: 'save the world', done: false},
    {title: 'cook some eggs', done: false}
  ];
}
