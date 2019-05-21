import { Injectable } from '@angular/core';
import { LoanDetails } from './model/loanDetails';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoanCalculatorService {

  private backendUrl = 'http://localhost:9090/calculateLoan';

  constructor(private http: HttpClient) { }

  calculate(loanDetails: LoanDetails): Observable<LoanDetails> {
    return this.http.post<LoanDetails>(this.backendUrl, loanDetails, httpOptions).pipe(
      catchError(this.handleError<LoanDetails>('addHero'))
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
