import { Component, OnInit } from '@angular/core';
import { ClassdataService } from 'src/app/service/classdata.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes:any;

  constructor(private classdataService:ClassdataService) { }

  ngOnInit(): void {
    this.getClassesData();
  }
  getClassesData()
  {
    this.classdataService.getClassesData().subscribe(res => {
      this.classes= res;
    })
  }

  

}
