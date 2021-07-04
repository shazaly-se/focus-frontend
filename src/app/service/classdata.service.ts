import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClassdataService {

  constructor(private httpClient:HttpClient) { }

  getClassesData(){
    return this.httpClient.get("http://localhost:8000/api/classes")
  }
  inserClassData(data:any){
    return this.httpClient.post("http://localhost:8000/api/classes",data);
  }

  getClassDataById(id:any){
    return this.httpClient.get("http://localhost:8000/api/classes/edit/"+id);
  }
  showClassData(id:any){
    return this.httpClient.get("http://localhost:8000/api/classes/"+id);
  }
  updateClassData(id:any,data:any){
    return this.httpClient.put("http://localhost:8000/api/classes/"+id,data);
  }

  

}
