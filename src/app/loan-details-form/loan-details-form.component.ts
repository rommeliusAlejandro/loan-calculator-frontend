import { Component, OnInit, Input } from '@angular/core';
import { LoanDetails } from '../model/loanDetails';
import { LoanCalculatorService } from '../services/loan-calculator.service';
import { RepaymentSchedule } from '../model/repaymentSchedule';
import { Summary } from '../model/summary';

@Component({
  selector: 'app-loan-details-form',
  templateUrl: './loan-details-form.component.html',
  styleUrls: ['./loan-details-form.component.scss']
})
export class LoanDetailsFormComponent implements OnInit {

  @Input() loanDetails:LoanDetails;

  schedule: RepaymentSchedule[];
  headElements: String[];
  summary: Summary;
  emi: Number;
  errorMessage: String;

  constructor(private loanCalculatorService: LoanCalculatorService) { }

  ngOnInit() {
    this.loanDetails = new LoanDetails();
    this.schedule = [];
    this.headElements = ["Period", "Date", "Balance", "Instalment", "To Interest", "To Principal"]
    this.summary = new Summary();
  }
 
  calculate() {
   
    this.schedule = [];    
    this.summary = new Summary();

    this.loanCalculatorService.calculate(this.loanDetails).subscribe(
        response => {

          if(200 != response.statusCode) {
            this.errorMessage = response.message;
            return;
          }  

          this.schedule = response.schedule;
          this.summary = response.summary;
          this.emi = response.emi;
          this.errorMessage = null;
         }
      );          
  } 

}
