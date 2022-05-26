import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Participation} from "../../models/participation";

@Component({
	selector: 'app-training-course-form',
	templateUrl: './training-course-form.component.html',
	styleUrls: ['./training-course-form.component.css']
})
export class TrainingCourseFormComponent implements OnInit {
	formGroup !: FormGroup;

	constructor(private abstractRestService: AbstractRestService<Participation>) {
	}

	ngOnInit(): void {
		this.formGroup = new FormGroup(
			{
				title: new FormControl('', [Validators.required]),
				school: new FormControl('', [Validators.required]),
				dateStart: new FormControl('', [Validators.required]),
				dateEnd: new FormControl('', [Validators.required])
			}
		)
	}

	submit($event: Event) {
		$event.preventDefault();
		const participation: Participation = {
				dateStart: new Date(this.formGroup.value.dateStart),
				dateEnd: new Date(this.formGroup.value.dateEnd),
				trainingCourse: {
					title: this.formGroup.value.title,
					school: this.formGroup.value.school
				}
			}
		console.log(

		)
	}
}
