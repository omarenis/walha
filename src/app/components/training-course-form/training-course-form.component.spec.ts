import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCourseFormComponent } from './training-course-form.component';

describe('TrainingCourseFormComponent', () => {
  let component: TrainingCourseFormComponent;
  let fixture: ComponentFixture<TrainingCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCourseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
