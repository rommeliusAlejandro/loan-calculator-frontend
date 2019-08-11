import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version: string;
  buildNumber: string;

  constructor() { }

  ngOnInit() {
    this.version = environment.version;
    this.buildNumber = environment.buildNumber;
  }

}
