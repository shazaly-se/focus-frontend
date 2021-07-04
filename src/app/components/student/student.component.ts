import { Component, OnInit } from '@angular/core';

import { StudentdataService } from 'src/app/service/studentdata.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:any;
  constructor(private studentdataService:StudentdataService) { }

  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData()
  {
    this.studentdataService.getStudentData().subscribe(res => {
      this.students= res;
    })
  }

}
