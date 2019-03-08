import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input() checked: boolean;

  @Output() changed = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.changed.emit();
  }

}
