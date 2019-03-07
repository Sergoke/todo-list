import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todos: [Object];
  @Input() todoItem: TemplateRef<Object>;

  constructor() { }

  ngOnInit() {

  }

}
