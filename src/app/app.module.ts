import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts/admin/admin.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InternshipsTableComponent } from './components/internships-table/internships-table.component';
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
import {MatDialogModule} from "@angular/material/dialog";
import { ProfileComponent } from './screens/profile/profile.component';
import { GeneralProfileComponent } from './screens/general-profile/general-profile.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {OverlayContainer} from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InternshipsTableComponent,
    TrainingCoursesTableComponent,
    CertificationsTableComponent,
    CertificationFormComponent,
    InternshipFormComponent,
    TrainingCourseFormComponent,
    CompetitionsTableComponent,
    CompetitionsFormComponent,
    ProfileComponent,
    GeneralProfileComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
		BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatDatepickerModule,
        MatDialogModule,
        MatProgressBarModule,
		MatNativeDateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
