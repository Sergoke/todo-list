import {Component, Input, OnInit} from '@angular/core';
import {ToDoItem, ToDosModel} from '../todo-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() toDosModel: ToDosModel;

  todos: ToDoItem[];

  ngOnInit() {
    this.todos = this.toDosModel.getAll();
    console.log(this.toDosModel);
  }

  todoAdd(title: string) {
    this.toDosModel.add(title);
    this.todos = this.toDosModel.getAll();
  }

  todoUpdate(index: number, item: ToDoItem) {
    this.toDosModel.update(index, item);
  }

  todoDelete(index: number) {
    this.toDosModel.delete(index);
    this.todos = this.toDosModel.getAll();
  }

}
