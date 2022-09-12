import { Component, OnInit } from '@angular/core';
import TaskListModel from 'src/app/models/taskListModel';
import TaskModel from 'src/app/models/taskModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.css']
})
export class TaskScreenComponent implements OnInit {

  taskLists: TaskListModel[] = [];
  tasks: TaskModel[] = [];

  constructor(
    private taskService: TaskService
  ) { }
  
  // called first when the component is loaded
  ngOnInit(): void {
    this.taskService.getAllTaskLists().subscribe(allTaskLists=> this.taskLists = allTaskLists);
  }

}
