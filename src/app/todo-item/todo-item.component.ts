import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{

  @Input() todoItem: Object;

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
    console.log(this.currentText);
  }

}
