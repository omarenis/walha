import {Component, Input, OnInit} from '@angular/core';
import {Participation} from "../../models/participation";
import {AbstractRestService} from "../../../services/genericservice";
import swal from "sweetalert2";
import {environment} from "../../../environments/environment";

@Component({
	selector: 'app-training-courses-table',
	templateUrl: './training-courses-table.component.html',
	styleUrls: ['./training-courses-table.component.css']
})
export class TrainingCoursesTableComponent implements OnInit {
	@Input() studentId !: number;
	rows: Participation[] = [];
	@Input() editable: boolean = false;
	private path = `${environment.url}/participationList`;
constructor(private service: AbstractRestService<Participation>) {
	}

	ngOnInit() {
		this.service.list(this.path, {
			params: {
				studentId: this.studentId
			}
		}).subscribe((response) => {
			console.log(response);
			response.forEach((participation) => {
				this.rows.push({
					id: participation.id,
					dateStart: new Date(participation.dateStart),
					dateEnd: new Date(participation.dateEnd),
					trainingCourse: participation.trainingCourse,
					studentId: 1
				})
			})
		});
	}

	delete(id: number | undefined, index: number) {
		console.log(this.rows[index]);
		this.service.delete(this.path, id !== undefined ? id : 0).subscribe(() => {
			swal.fire({
			title: "Good job!", text: "deleting participation", buttonsStyling: false, customClass: {
				confirmButton: "btn btn-success",
			}, icon: "success"
		}).then(() => {
			this.rows.splice(index, 1);
		});
		})
	}
}
