import { Component } from '@angular/core';

@Component({
  selector: 'app-text-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./text-button.component.css']
})
export class TextButtonComponent { }
