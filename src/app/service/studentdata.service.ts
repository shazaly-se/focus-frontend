import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(private httpClient:HttpClient) { }

  getStudentData(){
    return this.httpClient.get("http://localhost:8000/api/students")
  }
  inserStudentData(data:any){
    return this.httpClient.post("http://localhost:8000/api/students",data);
  }

  getStudentDataById(id:any){
    return this.httpClient.get("http://localhost:8000/api/students/edit/"+id);
  }
  
  updateStudentData(id:any,data:any){
    return this.httpClient.put("http://localhost:8000/api/students/"+id,data);
  }
}
