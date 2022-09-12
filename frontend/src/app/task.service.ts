import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  // fetch all task lists
  getAllTaskLists(){
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

}
