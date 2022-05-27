import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Competition} from "../../models/competition";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Certification} from "../../models/certification";

@Component({
  selector: 'app-competitions-form',
  templateUrl: './competitions-form.component.html',
  styleUrls: ['./competitions-form.component.css']
})
export class CompetitionsFormComponent implements OnInit {
	formGroup !: FormGroup;
  constructor(public dialogRef: MatDialogRef<CompetitionsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Certification,) { }

  ngOnInit(): void {
  	this.formGroup = new FormGroup(
		{
			title: new FormControl('', [Validators.required]),
			subject: new FormControl('', [Validators.required]),
			dateParticipation: new FormControl('', [Validators.required]),
			percentageAchievement: new FormControl('', [Validators.required])
		}
	)
  }

	submit($event: Event) {
		$event.preventDefault();
		const competition: Competition = {
			title: this.formGroup.value.title,
			subject: this.formGroup.value.subject,
			dateParticipation: new Date(this.formGroup.value.dateParticipation),
			percentageAchievement: Number(this.formGroup.value.percentageAchievement)

		};
		console.log(competition);
	}
}
