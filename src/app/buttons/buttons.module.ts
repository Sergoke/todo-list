import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [TextButtonComponent, IconButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TextButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonsModule { }
