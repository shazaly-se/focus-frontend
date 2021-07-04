import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassModel } from 'src/app/class-model';
import { ClassdataService } from 'src/app/service/classdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-classes-edit',
  templateUrl: './classes-edit.component.html',
  styleUrls: ['./classes-edit.component.css']
})
export class ClassesEditComponent implements OnInit {
id:any;
data:any;
classmodel = new ClassModel();
  constructor(private route:ActivatedRoute, private classdataService:ClassdataService,private router: Router ) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params.id;
    this.getData();
  }

  getData()
  {
    this.classdataService.getClassDataById(this.id).subscribe(res =>{
      this.data=res;
      this.classmodel= this.data
    })

  }

  updateData()
  {
    this.classdataService.updateClassData(this.id,this.classmodel).subscribe(res =>{
      this.router.navigate(['/classes']);
    })
  }

}
