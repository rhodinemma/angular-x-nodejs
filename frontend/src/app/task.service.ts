import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiConfigService } from './api-config.service';
import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  // fetch all task lists
  getAllTaskLists(): Observable<TaskListModel[]>{
    return this.apiConfigService.get('tasklists');
  }

  // create a task list bucket
  createTaskList(title: string){
    let data = { 'title': title};
    return this.apiConfigService.post('tasklists', data);
  }

  // fetch all tasks inside a tasklist object
  getAlltasksForARaskList(taskListId:string){
    return this.apiConfigService.get(`tasklists/${taskListId}/tasks`);
  }

  // create a task inside a particular tasklist object
  createTaskInsideATaskList(taskListId: string, title: string){
    let data = { 'title': title}
    this.apiConfigService.post(`tasklists/${taskListId}/tasks`, data);
  }

  // delete a task list
  deleteTaskList(taskListId: string){
    return this.apiConfigService.delete(`tasklists/${taskListId}/tasks`);
  }

  // delete a task inside a particular task list
  deleteATaskInsideATaskList(taskListId: string, taskId: string){
    return this.apiConfigService.delete(`tasklists/${taskListId}/tasks/${taskId}`);
  }

  // update status of a task (completed or not)
  updateTaskStatus(taskListId: string, taskObj: TaskModel){
    let updateData = { 'completed' : !taskObj.completed }
    return this.apiConfigService.patch(`tasklists/${taskListId}/tasks/${taskObj._id}`, updateData);
  }
}
