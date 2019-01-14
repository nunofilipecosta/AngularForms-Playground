import { Component } from '@angular/core';
import { Employee } from './Models/employee.model';

@Component({
  selector: 'nc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith', true, '1099', 'Spanish');

  lastNameToUpper(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.toUpperCase();
    } else {
      this.model.lastName = value;
    }
  }
}
