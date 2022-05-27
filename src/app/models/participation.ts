import {TrainingCourse} from "./training-course";

export interface Participation {
	dateStart: Date;
	dateEnd: Date;
	trainingCourse?: TrainingCourse;
	id?: number;
}
