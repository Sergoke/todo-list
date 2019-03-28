import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  @Input() checked: boolean;
  @Output() checkboxToggled = new EventEmitter<boolean>();

  toggleCheckbox() {
    this.checked = !this.checked;
    this.checkboxToggled.emit(this.checked);
  }
}
