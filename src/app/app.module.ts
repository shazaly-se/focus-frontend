import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './components/classes/classes.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ClassesEditComponent } from './components/classes-edit/classes-edit.component';
import { ClassesCreateComponent } from './components/classes-create/classes-create.component';
import { FormsModule } from '@angular/forms';
import { ClassesShowComponent } from './components/classes-show/classes-show.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentComponent } from './components/student/student.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { DisplayVideoComponent } from './components/display-video/display-video.component';

const appRoutes:Routes = [
{ path:'classes', component:ClassesComponent},
{ path:'classes/create', component:ClassesCreateComponent},
{ path:'classedit/:id', component:ClassesEditComponent},
{ path:'classshow/:id', component:ClassesShowComponent},
// student routes
{ path:'students', component:StudentComponent},

{ path:'students/create', component:StudentCreateComponent},
{ path:'studentedit/:id', component:StudentEditComponent},
//upload video
{ path:'uploadvideo', component:UploadVideoComponent},
//display video
{ path:'display', component:DisplayVideoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    NavbarComponent,
    ClassesEditComponent,
    ClassesCreateComponent,
    ClassesShowComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentComponent,
    UploadVideoComponent,
    DisplayVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
