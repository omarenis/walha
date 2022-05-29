import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Internship} from "../../models/internship";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {
	formGroup !: FormGroup;
	private internshipId !: number;
	private path = `${environment.url}/internships`;
  constructor(private service: AbstractRestService<Internship>, private activateRoute: ActivatedRoute,
			  private router: Router) { }

  ngOnInit(): void {
	  this.formGroup = new FormGroup(
		  {
			  subject: new FormControl('', [Validators.required]),
			  companyName: new FormControl('', [Validators.required]),
			  description: new FormControl('', [Validators.required]),
			  dateStart: new FormControl('', [Validators.required]),
			  dateEnd: new FormControl('', [Validators.required]),
			  percentageAchievement: new FormControl('', [Validators.required])
		  }
	  )
	  this.activateRoute.params.subscribe((params) => {
		  this.internshipId = Number(params['id']);
	  })
  }
  submit($event: Event) {
	  $event.preventDefault();
	  const internship: Internship = {
		  ...this.formGroup.value,
		  studentId: 1,
	  }
	  this.service.create(this.path, internship).subscribe(() => {
		  this.router.navigate(['/'])
	  })
  }
}
