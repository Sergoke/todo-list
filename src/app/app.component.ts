import { Component } from '@angular/core';
import { ToDosModel, ToDoItem } from './todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDosModel = new ToDosModel();

  constructor() {
  }
}
