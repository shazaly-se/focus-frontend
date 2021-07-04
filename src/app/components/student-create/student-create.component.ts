import { Component, OnInit } from '@angular/core';

import { StudentModel } from 'src/app/student-model';
import { StudentdataService } from 'src/app/service/studentdata.service';
import { ClassdataService } from 'src/app/service/classdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  classes:any;
  classArr:any;
  studentmodel = new StudentModel();
  constructor(private studentdataService:StudentdataService,private classdataService:ClassdataService,private router: Router ) { }

  ngOnInit(): void {
    this.getClassesData();
  }

  saveStudentData()
  {
   this.studentdataService.inserStudentData(this.studentmodel).subscribe(res =>{
       console.log(res);
       this.router.navigate(['/students']);
     })
     
  
  }
  getClassesData()
  {
    this.classdataService.getClassesData().subscribe(res => {
      this.classArr=res;
    })
  }

}
