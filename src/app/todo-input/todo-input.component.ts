import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Input() value = '';
  @Output() keyEnter = new EventEmitter<string>();

  private onKeyEnter() {
    this.keyEnter.emit(this.value);
  }
}
