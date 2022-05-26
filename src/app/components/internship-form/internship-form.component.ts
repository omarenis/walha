import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Internship} from "../../models/internship";

@Component({
  selector: 'app-internship-form',
  templateUrl: './internship-form.component.html',
  styleUrls: ['./internship-form.component.css']
})
export class InternshipFormComponent implements OnInit {
	formGroup !: FormGroup;
  constructor(private abstractRestService: AbstractRestService<Internship>) { }

  ngOnInit(): void {
	  this.formGroup = new FormGroup(
		  {
			  subject: new FormControl('', [Validators.required]),
			  companyName: new FormControl('', [Validators.required]),
			  dateStart: new FormControl('', [Validators.required]),
			  dateEnd: new FormControl('', [Validators.required]),
			  percentageAchievement: new FormControl('', [Validators.required])
		  }
	  )
  }
  submit($event: Event) {
	  $event.preventDefault();
  }
}
