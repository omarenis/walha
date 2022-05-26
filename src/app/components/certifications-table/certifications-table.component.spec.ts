import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsTableComponent } from './certifications-table.component';

describe('CertificationsTableComponent', () => {
  let component: CertificationsTableComponent;
  let fixture: ComponentFixture<CertificationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
