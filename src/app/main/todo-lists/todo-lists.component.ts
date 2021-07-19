import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {
  @Input() taskList: ITask[];
  @Output() onDelete = new EventEmitter<ITask>();
  @Output() onDone = new EventEmitter<ITask>();
  @Output() onClearDoneList = new EventEmitter();
  constructor(
  ) {
  }

  ngOnInit(): void {
  }
  get allTasks(): ITask[]{
    return this.taskList
  }
  get doneList(): ITask[]{
    return this.allTasks.filter(item => item.done == true)
  }
  get undoneList(): ITask[]{
    return this.allTasks.filter(item => item.done == false)
  }
  makeDone(task: ITask): void{
    this.onDone.emit(task);
  }
  deleteTask(task: ITask): void{
   this.onDelete.emit(task);
  }
  clearDoneList(): void {
    this.onClearDoneList.emit();
  }


  




}
