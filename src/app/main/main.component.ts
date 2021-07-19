import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../models/task';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  allTasks: ITask[] = [];
  addingTaskForm = new FormGroup({
    task: new FormControl("",[Validators.required, Validators.minLength(3)]),
  }
  )
  errorText: string = "";
  

  constructor() { }


  ngOnInit(): void {
    this.allTasks =  JSON.parse(localStorage.getItem('task') || "") || [];
  }



  
  get newTaskValue(){return this.addingTaskForm.get("task")?.value};
  get task() {return this.addingTaskForm.get("task")}



  updateStorageData(): void{
    localStorage.setItem('task', JSON.stringify(this.allTasks))
  }

  showError(errors:Object): void{
    switch (Object.keys(errors)[0]){
      case 'required':
        this.errorText = "Required";
        console.log(this.errorText)
        break;
      case 'minlength':
        this.errorText = "MinLength" 
        console.log(this.errorText)
        break;
    }
  }
  onSubmit():void{
  if (this.task?.errors){
    this.showError(this.task?.errors);
  }
  else{
    this.errorText ="";
    this.allTasks.push({text: this.newTaskValue,
      done: false});
    this.addingTaskForm.reset();
  }
  this.updateStorageData();
  }

  onDelete(task: ITask): void{
    this.allTasks = this.allTasks.filter((item)=>item !== task);
    this.updateStorageData();
  }
  onDone(task: ITask):void{
    task.done = true;
    this.updateStorageData();
  }
  onClearDoneList():void{
    this.allTasks = this.allTasks.filter((item) => !item.done);
    this.updateStorageData();
  }
}
