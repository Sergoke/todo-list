import {Component} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent {

  private isAdding = false;

  constructor(private todoService: TodoService) { }

  private addTodo(title: string) {
    this.todoService.add(title).then(res => {
      console.log('added new item');
      console.dir(res);
      this.toggleInput();
    }).catch(err => {
      console.log(err);
    });
  }

  private toggleInput() {
    this.isAdding = !this.isAdding;
  }

}
