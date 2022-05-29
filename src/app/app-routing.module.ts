import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ProfileComponent} from "./screens/profile/profile.component";
import {GeneralProfileComponent} from "./screens/general-profile/general-profile.component";
import {CertificationFormComponent} from "./components/certification-form/certification-form.component";
import {TrainingCourseFormComponent} from "./components/training-course-form/training-course-form.component";
import {InternshipFormComponent} from "./components/internship-form/internship-form.component";

const routes: Routes = [
	{
		path: '', component: GeneralProfileComponent
	},
	{
		path: ':id', component: ProfileComponent
	},
	{
		path: 'certifications/:id', component: CertificationFormComponent
	},
	{
		path: 'training_courses/:id', component: TrainingCourseFormComponent
	},
		{
		path: 'internships/:id', component: InternshipFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
