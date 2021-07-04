import { Component, OnInit } from '@angular/core';
import { ClassModel } from 'src/app/class-model';
import { ClassdataService } from 'src/app/service/classdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classes-create',
  templateUrl: './classes-create.component.html',
  styleUrls: ['./classes-create.component.css']
})
export class ClassesCreateComponent implements OnInit {

  classmodel = new ClassModel();

  
  constructor(private classdataService:ClassdataService,private router: Router ) { }

  ngOnInit(): void {
  }
  saveClassData()
  {
   this.classdataService.inserClassData(this.classmodel).subscribe(res =>{
    this.router.navigate(['/classes']);
     })
  
  }

}
