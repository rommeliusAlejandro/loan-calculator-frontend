import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsFormComponent } from './loan-details-form.component';

describe('LoanDetailsFormComponent', () => {
  let component: LoanDetailsFormComponent;
  let fixture: ComponentFixture<LoanDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
