import { Component } from '@angular/core';
import { ToDosModel, ToDoItem } from './todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDosModel = new ToDosModel();
  todos = this.toDosModel.getAll();

  constructor() {
    this.todos.length === 0 && this.toDosModel.add(new ToDoItem('save the women', true));
  }
}
