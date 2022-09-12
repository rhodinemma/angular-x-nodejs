import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  BASE_URL = 'http://localhost:5000';

  constructor(
    private httpClient: HttpClient
  ) { }

  // get API call
  get(url: string){
    return this.httpClient.get(`${this.BASE_URL}/${url}`);
  }

  // post API call
  post(url: string, data: Object){
    return this.httpClient.post(`${this.BASE_URL}/${url}`, data);
  }

  // put API call
  put(url: string, data: Object){
    return this.httpClient.put(`${this.BASE_URL}/${url}`, data);
  }

  // patch API call
  patch(url: string, data: Object){
    return this.httpClient.patch(`${this.BASE_URL}/${url}`, data);
  }

  delete(url: string){
    return this.httpClient.delete(`${this.BASE_URL}/${url}`);
  }
}
