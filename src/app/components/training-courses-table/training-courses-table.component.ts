import {Component, Input, OnInit} from '@angular/core';
import {Participation} from "../../models/participation";

@Component({
	selector: 'app-training-courses-table',
	templateUrl: './training-courses-table.component.html',
	styleUrls: ['./training-courses-table.component.css']
})
export class TrainingCoursesTableComponent implements OnInit {
	@Input() rows ?: Participation[];
	@Input() editable: boolean = false;

	constructor() {}

	ngOnInit(): void {
		this.rows = [{
			dateStart: new Date('2015-02-01'),
			dateEnd: new Date('2018-01-01'),
			trainingCourse: {
				title: 'traning course 1',
				school: 'lycée 20 mars'
			}
		}, {
			dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
				title: 'traning course 1', school: 'lycée 20 mars'
			}
		}, {
			dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
				title: 'traning course 1', school: 'lycée 20 mars'
			}
		}, {
			dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
				title: 'traning course 1', school: 'lycée 20 mars'
			}
		}, {
			dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
				title: 'traning course 1', school: 'lycée 20 mars'
			}
		}, {
			dateStart: new Date('2015-02-01'), dateEnd: new Date('2018-01-01'), trainingCourse: {
				title: 'traning course 1', school: 'lycée 20 mars'
			}
		},]
	}

}
