import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassModel } from 'src/app/class-model';
import { ClassdataService } from 'src/app/service/classdata.service';
@Component({
  selector: 'app-classes-show',
  templateUrl: './classes-show.component.html',
  styleUrls: ['./classes-show.component.css']
})
export class ClassesShowComponent implements OnInit {
  id:any;
  data:any;
  students:any;
  classmodel = new ClassModel();
  constructor(private route:ActivatedRoute, private classdataService:ClassdataService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params.id;
    this.getData();
  }

  getData()
  {
    this.classdataService.showClassData(this.id).subscribe(res =>{
      this.students= res;
    })

  }

}
