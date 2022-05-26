import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsTableComponent } from './internships-table.component';

describe('InternshipsTableComponent', () => {
  let component: InternshipsTableComponent;
  let fixture: ComponentFixture<InternshipsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
