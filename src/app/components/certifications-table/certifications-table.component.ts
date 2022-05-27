import {Component, Input} from '@angular/core';
import {Certification} from "../../models/certification";
import {AbstractRestService} from "../../../services/genericservice";
import {MatDialog} from '@angular/material/dialog';
import {CertificationFormComponent} from "../certification-form/certification-form.component";

@Component({
	selector: 'app-certifications-table',
	templateUrl: './certifications-table.component.html',
	styleUrls: ['./certifications-table.component.css']
})
export class CertificationsTableComponent{
	@Input() rows ?: Certification[];
	constructor(private abstractRestService: AbstractRestService<Certification>, public dialog: MatDialog) {
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(CertificationFormComponent, {
			width: '250px',
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
		});
	}
}
