import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  @Input() content: string;

  @Output() textSave = new EventEmitter<void>();
  @Output() textInput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  todoSave(text) {
    console.log('salvation...');
    this.textSave.emit();
  }

  todoInput(text) {
    this.textInput.emit(text);
  }

}
