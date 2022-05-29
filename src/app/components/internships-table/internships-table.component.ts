import {Component, Input, OnInit} from '@angular/core';
import {Internship} from "../../models/internship";
import {environment} from "../../../environments/environment";
import {AbstractRestService} from "../../../services/genericservice";
import swal from "sweetalert2";

@Component({
  selector: 'app-internships-table',
  templateUrl: './internships-table.component.html',
  styleUrls: ['./internships-table.component.css']
})
export class InternshipsTableComponent implements OnInit {
	@Input() studentId !: number;
	rows: Internship[] = [];
  	private path = `${environment.url}/internships`;
	constructor(private service: AbstractRestService<Internship>) { }

  ngOnInit(): void {
	  this.service.list(this.path, {
		 params: {
			 studentId: this.studentId
		 }
	  }).subscribe((response) => {
		  response.forEach((internship) => {
			  this.rows.push(
				  {
					  id: internship.id,
					  companyName: internship.companyName,
					  dateEnd: new Date(internship.dateEnd),
					  dateStart: new Date(internship.dateStart),
					  description: internship.description,
					  percentageAchievement: internship.percentageAchievement,
					  studentId: this.studentId,
					  subject: internship.subject
				  }
			  )
		  })
	  })
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
