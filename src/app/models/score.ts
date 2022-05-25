import {TrainingCourse} from "./training-course";

export interface Score {
  userId: number;
  trainingCourseId: number;
  percentage: number;
  trainingCourse ?: TrainingCourse;
}
