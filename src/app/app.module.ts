
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TodoListsComponent } from './main/todo-lists/todo-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoListsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
