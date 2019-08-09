import { TestBed, inject } from '@angular/core/testing';

import { LoanCalculatorService } from './loan-calculator.service';

describe('LoanCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanCalculatorService]
    });
  });

  it('should be created', inject([LoanCalculatorService], (service: LoanCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
