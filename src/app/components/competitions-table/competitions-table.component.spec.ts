import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsTableComponent } from './competitions-table.component';

describe('CompetitionsTableComponent', () => {
  let component: CompetitionsTableComponent;
  let fixture: ComponentFixture<CompetitionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
