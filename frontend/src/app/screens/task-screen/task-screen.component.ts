import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
  taskListId: string = '';

  constructor(
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  
  // called first when the component is loaded
  ngOnInit(): void {
    this.taskService.getAllTaskLists().subscribe(allTaskLists=> {this.taskLists = allTaskLists; 
    // get the 1st task list id and route to it on page load
    // this.router.navigate(['task-list', this.taskLists[0]['_id']]);
  });

    

    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.taskListId = params['taskListId'];

        if(this.taskListId){
          this.taskService.getAlltasksForATaskList(this.taskListId).subscribe((tasks: TaskModel[])=> this.tasks = tasks)
        }
      }
    )

    const taskClicked = ({ task }: { task: TaskModel; }) =>{
      this.taskService.updateTaskStatus(this.taskListId, task).subscribe(()=> task.completed = !task.completed)
    }
  }
}

