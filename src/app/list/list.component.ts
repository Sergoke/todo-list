import {Component} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private todoService: TodoService) {}
}
