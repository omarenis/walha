import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsFormComponent } from './competitions-form.component';

describe('CompetitionsFormComponent', () => {
  let component: CompetitionsFormComponent;
  let fixture: ComponentFixture<CompetitionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
