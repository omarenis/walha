import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../../services/genericservice";
import {Student} from "../../models/student";
import {environment} from "../../../environments/environment";
import {Certification} from "../../models/certification";
import {Competition} from "../../models/competition";
import {Internship} from "../../models/internship";
import {Participation} from "../../models/participation";
import {Competence} from "../../models/competence";

@Component({
	selector: 'app-general-profile',
	templateUrl: './general-profile.component.html',
	styleUrls: ['./general-profile.component.css']
})
export class GeneralProfileComponent implements OnInit {
	studentId !: number;
	student !: Student;
	certifications !: Certification[];
	competitions !: Competition[];
	internships !: Internship[];
	participationList !: Participation[];
	competences !: Competence[];
	private path = `${environment.url}/users`;
	private participationPath = `${environment.url}/participationList`;
	private internshipPath = `${environment.url}/internships`;
	participation !: Participation;
	internship !: Internship;
	constructor(private service: AbstractRestService<Student>, private internshipService: AbstractRestService<Internship>, private participationService: AbstractRestService<Participation>) {
	}

	ngOnInit(): void {
		this.service.get(this.path, 1).subscribe((response) => {
			this.student = response;
			console.log(this.student);
			this.studentId = this.student.id !== undefined ? this.student.id : 0;
			if (this.student.lastParticipationId != null) {
				this.participationService.get(this.participationPath, this.student.lastParticipationId).subscribe((participation) => {this.participation = participation})
			}
			if (this.student.lastInternshipId != null) {
				this.internshipService.get(this.participationPath, this.student.lastInternshipId).subscribe((internship) => {this.internship = internship})
			}
		});
	}
}
