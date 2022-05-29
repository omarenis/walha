import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Certification} from "../../models/certification";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
	selector: 'app-certification-form',
	templateUrl: './certification-form.component.html',
	styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
	formGroup !: FormGroup;
	imageCertificate !: string;
	private certificateId !: number;
	private path = `${environment.url}/certifications`;
	constructor(private service: AbstractRestService<Certification>, private activateRoute: ActivatedRoute,
				private router: Router) {}

	ngOnInit(): void {
		this.formGroup = new FormGroup(
			{
				title: new FormControl('', [Validators.required]),
				description: new FormControl('', [Validators.required]),
				dateBeingCertified: new FormControl('',[Validators.required]),
				percentage: new FormControl('', [Validators.required])
			}
		);
		this.activateRoute.params.subscribe((params) => {
			this.certificateId = Number(params['id']);
			if(Number(params['id']) !== 0)
			{
				this.service.get(this.path, params['id']).subscribe((response: Certification) => {

					this.formGroup.setValue(response);
				});
			}
		});
	}

	submit($event: Event) {
		$event.preventDefault();
		const certification: Certification ={
			id: this.certificateId + 50,
			image: "",
			title: this.formGroup.value.title,
			description: this.formGroup.value.description,
			dateBeingCertified: new Date(this.formGroup.value.dateBeingCertified),
			percentage: Number(this.formGroup.value.percentage),
			studentId: 1
		}
		let subscriberApi = this.certificateId !== 0 ? this.service.put(this.path, this.certificateId, certification) : this.service.create(this.path, certification);
		subscriberApi.subscribe(() => {
			this.router.navigate(['/'])})
	}
}
