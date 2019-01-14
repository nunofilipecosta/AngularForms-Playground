import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nc-declarative-page',
  templateUrl: './declarative-page.component.html',
  styleUrls: ['./declarative-page.component.css']
})
export class DeclarativePageComponent implements OnInit {

  model = { firstName : '', lastName : '' , isFullTime : true, paymentType : 'W2', primaryLanguage: 'EN'};
  languages = ['EN', 'FR'];

  constructor() { }

  ngOnInit() {
  }

  lastNameToUpper(value: string): string {
    return value.toUpperCase();
  }

}
