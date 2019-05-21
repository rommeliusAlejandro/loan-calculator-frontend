import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoanDetailsFormComponent } from './loan-details-form/loan-details-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoanDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
