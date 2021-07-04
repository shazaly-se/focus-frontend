import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentModel } from 'src/app/student-model';
import { StudentdataService } from 'src/app/service/studentdata.service';
import { ClassdataService } from 'src/app/service/classdata.service';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id:any;
  data:any;
  classes:any;
  studentmodel = new StudentModel();
  constructor(private route:ActivatedRoute, private studentdataService:StudentdataService,private classdataService:ClassdataService,private router: Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params.id;
    this.getData();
    this.getClassesData();
  }
  getClassesData()
  {
    this.classdataService.getClassesData().subscribe(res => {
      this.classes= res;
    })
  }

  getData()
  {
    this.studentdataService.getStudentDataById(this.id).subscribe(res =>{
      this.data=res;
      this.studentmodel= this.data
    })

  }

  updateData()
  {
    this.studentdataService.updateStudentData(this.id,this.studentmodel).subscribe(res =>{
      this.router.navigate(['/students']);
    })
  }

}
