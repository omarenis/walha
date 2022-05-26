import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractRestService} from "../../../services/genericservice";
import {Certification} from "../../models/certification";

@Component({
	selector: 'app-certification-form',
	templateUrl: './certification-form.component.html',
	styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
	formGroup !: FormGroup;

	constructor(private abstractRestService: AbstractRestService<Certification>) {}

	ngOnInit(): void {
		this.formGroup = new FormGroup(
			{
				title: new FormControl('', [Validators.required]),
				description: new FormControl('', [Validators.required]),
				dateBeingCertified: new FormControl('',[Validators.required]),
				percentage: new FormControl('', [Validators.required])
			}
		)
	}

	submit($event: Event) {
		$event.preventDefault();
		const certification: { dateBeingCertified: Date; percentage: number; description: any; title: any } ={
			title: this.formGroup.value.title,
			description: this.formGroup.value.description,
			dateBeingCertified: new Date(this.formGroup.value.dateBeingCertified),
			percentage: Number(this.formGroup.value.percentage)
		}
	}
}
