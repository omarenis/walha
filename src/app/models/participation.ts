import {TrainingCourse} from "./training-course";

export interface Participation {
	dateStart: Date;
	dateEnd: Date;
	trainingCourse?: TrainingCourse;
	  studentId: number;
	id?: number;
}
