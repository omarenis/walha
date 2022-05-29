import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Participation} from "../../models/participation";
import {environment} from "../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-training-course-form',
	templateUrl: './training-course-form.component.html',
	styleUrls: ['./training-course-form.component.css']
})
export class TrainingCourseFormComponent implements OnInit {
	formGroup !: FormGroup;
	private path = `${environment.url}/participationList`;
	private participationId !: number;
	constructor(private service: AbstractRestService<Participation>,
				private router: Router,
				private activeRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.formGroup = new FormGroup(
			{
				title: new FormControl('', [Validators.required]),
				school: new FormControl('', [Validators.required]),
				dateStart: new FormControl('', [Validators.required]),
				dateEnd: new FormControl('', [Validators.required]),
			}
		)
		this.activeRoute.params.subscribe(params => {
			this.participationId = Number(params['id']);
		})
	}

	submit($event: Event) {
		$event.preventDefault();
		const participation: Participation = {
			id: 65431354,
			dateStart: new Date(this.formGroup.value.dateStart),
				dateEnd: new Date(this.formGroup.value.dateEnd),
				trainingCourse: {
					title: this.formGroup.value.title,
					school: this.formGroup.value.school
				},
			studentId: 1
			}
		let subscriberApi = this.participationId !== 0 ? this.service.put(this.path, this.participationId, participation) : this.service.create(this.path, participation);
		subscriberApi.subscribe(() => {
			this.router.navigate(['/'])})
	}
}
