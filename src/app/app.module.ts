import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonsModule} from './buttons/buttons.module';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoInputComponent,
    CheckboxComponent,
    TodoItemComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
