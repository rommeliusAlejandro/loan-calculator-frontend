import { Component, OnInit, Input } from '@angular/core';
import { LoanDetails } from '../model/loanDetails';
import { LoanCalculatorService } from '../loan-calculator.service';

@Component({
  selector: 'app-loan-details-form',
  templateUrl: './loan-details-form.component.html',
  styleUrls: ['./loan-details-form.component.scss']
})
export class LoanDetailsFormComponent implements OnInit {

  @Input() loanDetails:LoanDetails;

  constructor(private loanCalculatorService: LoanCalculatorService) { }

  ngOnInit() {
    this.loanDetails = new LoanDetails();
  }

  calculate() {
    this.loanCalculatorService.calculate(this.loanDetails).subscribe();      
  }

}
