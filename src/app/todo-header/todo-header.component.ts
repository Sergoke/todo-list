import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  @Output() todoAdd = new EventEmitter<string>();

  add = false;
  title: string;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.todoAdd.emit(this.title);
  }

  textInput(text: string) {
    this.title = text;
  }

}
