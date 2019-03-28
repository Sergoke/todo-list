import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: any;

  isEditing = false;

  constructor(private todoService: TodoService) { }

  toggleInput() {
    this.isEditing = !this.isEditing;
  }

  toggleDone(done) {
    this.todoService.toggleDone(this.todo.id, done);
  }

  updateTodo(title: string) {
    this.toggleInput();
    this.todoService.update(this.todo.id, title);
  }

  deleteTodo() {
    this.todoService.delete(this.todo.id);
  }
}
