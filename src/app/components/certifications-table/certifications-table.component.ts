import {Component, Input, OnInit} from '@angular/core';
import {Certification} from "../../models/certification";
import {AbstractRestService} from "../../../services/genericservice";
import {MatDialog} from '@angular/material/dialog';
import {CertificationFormComponent} from "../certification-form/certification-form.component";
import {environment} from "../../../environments/environment";
import swal from "sweetalert2";

@Component({
	selector: 'app-certifications-table',
	templateUrl: './certifications-table.component.html',
	styleUrls: ['./certifications-table.component.css']
})
export class CertificationsTableComponent implements OnInit {
	@Input() studentId !: number;
	rows: Certification[] = [];
	private path = `${environment.url}/certifications`;

	constructor(private service: AbstractRestService<Certification>) {
	}

	ngOnInit() {
		this.service.list(this.path, {
			params: {
				studentId: this.studentId
			}
		}).subscribe((response) => {
			console.log(response);
			response.forEach((certification) => {
				this.rows.push({
					id: certification.id,
					title: certification.title,
					description: certification.description,
					dateBeingCertified: new Date(certification.dateBeingCertified),
					percentage: certification.percentage,
					image: certification.image,
					studentId: 1
				})
			})
		});
	}

	delete(id: number | undefined, index: number) {
		console.log(this.rows[index]);
		this.service.delete(this.path, id !== undefined ? id : 0).subscribe(() => {
			swal.fire({
			title: "Good job!", text: "deleting certificate", buttonsStyling: false, customClass: {
				confirmButton: "btn btn-success",
			}, icon: "success"
		}).then(() => {
			this.rows.splice(index, 1);
		});
		})
	}
}
