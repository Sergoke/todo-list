import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  template: `
    <i class="material-icons">
      <ng-content></ng-content>
    </i>
  `,
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent { }
