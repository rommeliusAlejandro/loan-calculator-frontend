import { Injectable } from '@angular/core';
import { LoanDetails } from '../model/loanDetails';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import { RepaymentSchedule } from '../model/repaymentSchedule';
import { environment } from 'src/environments/environment.prod';
import { AbstractHttpService } from './abstract-http.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoanCalculatorService extends AbstractHttpService {
  
  constructor(private http: HttpClient) { super(); }

  public path(): String {
    return "/calculateLoan";
  }

  calculate(loanDetails: LoanDetails): Observable<any> {
    return this.http.post<any>(this.getUrl(), loanDetails, httpOptions).pipe(
      catchError(this.handleError<any>('calculating loan'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(error.message);

      return of(result as T);
    };
  } 
}
