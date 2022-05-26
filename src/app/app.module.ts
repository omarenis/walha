import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InternshipsTableComponent } from './components/internships-table/internships-table.component';
import { ExperiencesTableComponent } from './components/experiences-table/experiences-table.component';
import { TrainingCoursesTableComponent } from './components/training-courses-table/training-courses-table.component';
import { CertificationsTableComponent } from './components/certifications-table/certifications-table.component';
import { CertificationFormComponent } from './components/certification-form/certification-form.component';
import { InternshipFormComponent } from './components/internship-form/internship-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { TrainingCourseFormComponent } from './components/training-course-form/training-course-form.component';
import { CompetitionsTableComponent } from './components/competitions-table/competitions-table.component';
import { CompetitionsFormComponent } from './components/competitions-form/competitions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InternshipsTableComponent,
    ExperiencesTableComponent,
    TrainingCoursesTableComponent,
    CertificationsTableComponent,
    CertificationFormComponent,
    InternshipFormComponent,
    TrainingCourseFormComponent,
    CompetitionsTableComponent,
    CompetitionsFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatDatepickerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
