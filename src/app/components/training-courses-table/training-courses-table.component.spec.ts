import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCoursesTableComponent } from './training-courses-table.component';

describe('TrainingCoursesTableComponent', () => {
  let component: TrainingCoursesTableComponent;
  let fixture: ComponentFixture<TrainingCoursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCoursesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCoursesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
