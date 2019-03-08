import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDoItem} from '../todo-model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: any;

  @Output() todoUpdate = new EventEmitter<ToDoItem>();
  @Output() todoDelete = new EventEmitter<void>();

  edit = false;
  currentText = '';

  ngOnInit() {
    this.currentText = this.todoItem.title;
  }

  toggleInput() {
    this.edit = !this.edit;
  }

  textInput(text) {
    this.currentText = text;
  }

  updateTodo() {
    this.toggleInput();
    this.todoItem.title = this.currentText;
    this.todoUpdate.emit(this.todoItem);
  }

  todoCheckboxChange() {
    this.todoItem.done = !this.todoItem.done;
    this.todoUpdate.emit(this.todoItem);
  }

  deleteTodo() {
    this.todoDelete.emit();
  }

}
