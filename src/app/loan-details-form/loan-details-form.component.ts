import { Component, OnInit, Input } from '@angular/core';
import { LoanDetails } from '../model/loanDetails';
import { LoanCalculatorService } from '../loan-calculator.service';
import { RepaymentSchedule } from '../model/repaymentSchedule';

@Component({
  selector: 'app-loan-details-form',
  templateUrl: './loan-details-form.component.html',
  styleUrls: ['./loan-details-form.component.scss']
})
export class LoanDetailsFormComponent implements OnInit {

  @Input() loanDetails:LoanDetails;

  schedule: RepaymentSchedule[];
  headElements: String[];

  constructor(private loanCalculatorService: LoanCalculatorService) { }

  ngOnInit() {
    this.loanDetails = new LoanDetails();
    this.schedule = [];
    this.headElements = ["Period", "Date", "Balance", "Instalment", "To Interest", "To Principal"]
  }
 
  calculate() {
    this.loanCalculatorService.calculate(this.loanDetails).subscribe(
        schedule => this.schedule = schedule 
      );          
  } 

}
